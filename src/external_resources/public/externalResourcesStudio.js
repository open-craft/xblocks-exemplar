import { n as e, t } from "./rolldown-runtime-CYdcPHCu.js";
import { A as n, B as r, C as i, D as a, E as o, F as s, G as c, H as l, I as u, J as d, K as f, L as p, M as m, N as h, O as g, P as _, R as v, S as y, T as b, U as x, W as S, X as C, Y as ee, _ as te, a as w, b as ne, c as T, d as re, f as ie, g as ae, h as oe, i as se, j as ce, k as E, l as D, m as le, n as ue, o as de, p as fe, q as pe, r as me, s as he, t as ge, u as _e, v as ve, w as ye, x as be, y as xe, z as Se } from "./ResourceCard-BWrHna24.js";
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/ActionRow/index.js
var O = /* @__PURE__ */ e(C()), k = /* @__PURE__ */ e(u());
function Ce({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /*#__PURE__*/ O.createElement(e, {
		...r,
		className: (0, k.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function we() {
	return /*#__PURE__*/ O.createElement("span", { className: "pgn__action-row-spacer" });
}
Ce.Spacer = we;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SelectableContext.js
var Te = /*#__PURE__*/ O.createContext(null), Ee = function(e, t) {
	return t === void 0 && (t = null), e == null ? t || null : String(e);
};
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function De() {
	return [...arguments].filter(function(e) {
		return e != null;
	}).reduce(function(e, t) {
		if (typeof t != "function") throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");
		return e === null ? t : function() {
			var n = [...arguments];
			e.apply(this, n), t.apply(this, n);
		};
	}, null);
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var Oe = [
	"as",
	"disabled",
	"onKeyDown"
];
function ke(e) {
	return !e || e.trim() === "#";
}
var Ae = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = _(e, Oe), c = function(e) {
		var t = o.href, n = o.onClick;
		(i || ke(t)) && e.preventDefault(), i ? e.stopPropagation() : n && n(e);
	};
	return ke(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /*#__PURE__*/ O.createElement(r, s({ ref: t }, o, {
		onClick: c,
		onKeyDown: De(function(e) {
			e.key === " " && (e.preventDefault(), c(e));
		}, a)
	}));
});
Ae.displayName = "SafeAnchor";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var je = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], Me = {
	variant: "primary",
	active: !1,
	disabled: !1
}, Ne = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, c = e.block, l = e.type, u = e.as, d = _(e, je), f = E(n, "btn"), p = (0, k.default)(o, f, a && "active", r && f + "-" + r, c && f + "-block", i && f + "-" + i);
	if (d.href) return /*#__PURE__*/ O.createElement(Ae, s({}, d, {
		as: u,
		ref: t,
		className: (0, k.default)(p, d.disabled && "disabled")
	}));
	t && (d.ref = t), l ? d.type = l : u || (d.type = "button");
	var m = u || "button";
	return /*#__PURE__*/ O.createElement(m, s({}, d, { className: p }));
});
Ne.displayName = "Button", Ne.defaultProps = Me;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/CardContext.js
var Pe = /*#__PURE__*/ O.createContext(null);
Pe.displayName = "CardContext";
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/matches.js
var Fe;
function Ie(e, t) {
	if (!Fe) {
		var n = document.body, r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
		Fe = function(e, t) {
			return r.call(e, t);
		};
	}
	return Fe(e, t);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/querySelectorAll.js
var Le = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Re(e, t) {
	return Le(e.querySelectorAll(t));
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/usePrevious.js
function ze(e) {
	let t = (0, O.useRef)(null);
	return (0, O.useEffect)(() => {
		t.current = e;
	}), t.current;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useForceUpdate.js
function Be() {
	let [, e] = (0, O.useReducer)((e) => !e, !1);
	return e;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventListener.js
function Ve(e, t, n, r = !1) {
	let i = o(n);
	(0, O.useEffect)(() => {
		let n = typeof e == "function" ? e() : e;
		return n.addEventListener(t, i, r), () => n.removeEventListener(t, i, r);
	}, [e]);
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useGlobalListener.js
function He(e, t, n = !1) {
	return Ve((0, O.useCallback)(() => document, []), e, t, n);
}
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownContext.js
var Ue = /*#__PURE__*/ O.createContext(null), A = /* @__PURE__ */ e(g()), We = function() {};
function Ge(e) {
	e === void 0 && (e = {});
	var t = (0, O.useContext)(Ue), n = i(), r = n[0], a = n[1], o = (0, O.useRef)(!1), c = e, l = c.flip, u = c.offset, d = c.rootCloseEvent, f = c.fixed, p = f !== void 0 && f, m = c.popperConfig, h = m === void 0 ? {} : m, g = c.usePopper, _ = g === void 0 ? !!t : g, v = t?.show == null ? !!e.show : t.show, b = t?.alignEnd == null ? e.alignEnd : t.alignEnd;
	v && !o.current && (o.current = !0);
	var x = function(e) {
		t?.toggle(!1, e);
	}, S = t || {}, C = S.drop, ee = S.setMenu, te = S.menuElement, w = S.toggleElement, T = b ? "bottom-end" : "bottom-start";
	C === "up" ? T = b ? "top-end" : "top-start" : C === "right" ? T = b ? "right-end" : "right-start" : C === "left" && (T = b ? "left-end" : "left-start");
	var re = y(w, te, xe({
		placement: T,
		enabled: !!(_ && v),
		enableEvents: v,
		offset: u,
		flip: l,
		fixed: p,
		arrowElement: r,
		popperConfig: h
	})), ie = s({
		ref: ee || We,
		"aria-labelledby": w?.id
	}, re.attributes.popper, { style: re.styles.popper }), ae = {
		show: v,
		alignEnd: b,
		hasShown: o.current,
		toggle: t?.toggle,
		popper: _ ? re : null,
		arrowProps: _ ? s({ ref: a }, re.attributes.arrow, { style: re.styles.arrow }) : {}
	};
	return ne(te, x, {
		clickTrigger: d,
		disabled: !v
	}), [ie, ae];
}
var Ke = {
	children: A.default.func.isRequired,
	show: A.default.bool,
	alignEnd: A.default.bool,
	flip: A.default.bool,
	usePopper: A.default.oneOf([!0, !1]),
	popperConfig: A.default.object,
	rootCloseEvent: A.default.string
}, qe = { usePopper: !0 };
function Je(e) {
	var t = e.children, n = Ge(_(e, ["children"])), r = n[0], i = n[1];
	return /*#__PURE__*/ O.createElement(O.Fragment, null, i.hasShown ? t(r, i) : null);
}
Je.displayName = "ReactOverlaysDropdownMenu", Je.propTypes = Ke, Je.defaultProps = qe;
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownToggle.js
var Ye = function() {};
function Xe() {
	var e = (0, O.useContext)(Ue) || {}, t = e.show, n = t !== void 0 && t, r = e.toggle, i = r === void 0 ? Ye : r, a = e.setToggle, o = (0, O.useCallback)(function(e) {
		i(!n, e);
	}, [n, i]);
	return [{
		ref: a || Ye,
		onClick: o,
		"aria-haspopup": !0,
		"aria-expanded": !!n
	}, {
		show: n,
		toggle: i
	}];
}
var Ze = { children: A.default.func.isRequired };
function Qe(e) {
	var t = e.children, n = Xe(), r = n[0], i = n[1];
	return /*#__PURE__*/ O.createElement(O.Fragment, null, t(r, i));
}
Qe.displayName = "ReactOverlaysDropdownToggle", Qe.propTypes = Ze;
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Dropdown.js
var $e = {
	children: A.default.node,
	drop: A.default.oneOf([
		"up",
		"left",
		"right",
		"down"
	]),
	focusFirstItemOnShow: A.default.oneOf([
		!1,
		!0,
		"keyboard"
	]),
	itemSelector: A.default.string,
	alignEnd: A.default.bool,
	show: A.default.bool,
	defaultShow: A.default.bool,
	onToggle: A.default.func
};
function et() {
	var e = Be(), t = (0, O.useRef)(null);
	return [t, (0, O.useCallback)(function(n) {
		t.current = n, e();
	}, [e])];
}
function tt(e) {
	var t = e.drop, n = e.alignEnd, r = e.defaultShow, i = e.show, s = e.onToggle, c = e.itemSelector, l = c === void 0 ? "* > *" : c, u = e.focusFirstItemOnShow, d = e.children, f = m(i, r, s), p = f[0], h = f[1], g = et(), _ = g[0], v = g[1], y = _.current, b = et(), x = b[0], S = b[1], C = x.current, ee = ze(p), te = (0, O.useRef)(null), w = (0, O.useRef)(!1), ne = (0, O.useCallback)(function(e, t) {
		h(e, t);
	}, [h]), T = (0, O.useMemo)(function() {
		return {
			toggle: ne,
			drop: t,
			show: p,
			alignEnd: n,
			menuElement: y,
			toggleElement: C,
			setMenu: v,
			setToggle: S
		};
	}, [
		ne,
		t,
		p,
		n,
		y,
		C,
		v,
		S
	]);
	y && ee && !p && (w.current = y.contains(document.activeElement));
	var re = o(function() {
		C && C.focus && C.focus();
	}), ie = o(function() {
		var e = te.current, t = u;
		if (t ??= _.current && Ie(_.current, "[role=menu]") ? "keyboard" : !1, !(t === !1 || t === "keyboard" && !/^key.+$/.test(e))) {
			var n = Re(_.current, l)[0];
			n && n.focus && n.focus();
		}
	});
	(0, O.useEffect)(function() {
		p ? ie() : w.current && (w.current = !1, re());
	}, [
		p,
		w,
		re,
		ie
	]), (0, O.useEffect)(function() {
		te.current = null;
	});
	var ae = function(e, t) {
		if (!_.current) return null;
		var n = Re(_.current, l), r = n.indexOf(e) + t;
		return r = Math.max(0, Math.min(r, n.length)), n[r];
	};
	return He("keydown", function(e) {
		var t = e.key, n = e.target, r = _.current?.contains(n), i = x.current?.contains(n);
		if (!(/input|textarea/i.test(n.tagName) && (t === " " || t !== "Escape" && r)) && (r || i) && (_.current || t !== "Tab")) switch (te.current = e.type, t) {
			case "ArrowUp":
				var o = ae(n, -1);
				o && o.focus && o.focus(), e.preventDefault();
				return;
			case "ArrowDown":
				if (e.preventDefault(), !p) h(!0, e);
				else {
					var s = ae(n, 1);
					s && s.focus && s.focus();
				}
				return;
			case "Tab":
				a(document, "keyup", function(t) {
					var n;
					(t.key === "Tab" && !t.target || !((n = _.current) != null && n.contains(t.target))) && h(!1, e);
				}, { once: !0 });
				break;
			case "Escape": e.preventDefault(), e.stopPropagation(), h(!1, e);
		}
	}), /*#__PURE__*/ O.createElement(Ue.Provider, { value: T }, d);
}
tt.displayName = "ReactOverlaysDropdown", tt.propTypes = $e, tt.Menu = Je, tt.Toggle = Qe;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavContext.js
var nt = /*#__PURE__*/ O.createContext(null);
nt.displayName = "NavContext";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/DropdownItem.js
var rt = [
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
], it = {
	as: Ae,
	disabled: !1
}, at = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.eventKey, c = e.disabled, l = e.href, u = e.onClick, d = e.onSelect, f = e.active, p = e.as, m = _(e, rt), h = E(n, "dropdown-item"), g = (0, O.useContext)(Te), v = ((0, O.useContext)(nt) || {}).activeKey, y = Ee(a, l), b = f == null && y != null ? Ee(v) === y : f, x = o(function(e) {
		c || (u && u(e), g && g(y, e), d && d(y, e));
	});
	return /*#__PURE__*/ O.createElement(p, s({}, m, {
		ref: t,
		href: l,
		disabled: c,
		className: (0, k.default)(r, h, b && "active", c && "disabled"),
		onClick: x
	}), i);
});
at.displayName = "DropdownItem", at.defaultProps = it;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavbarContext.js
var ot = /*#__PURE__*/ O.createContext(null);
ot.displayName = "NavbarContext", h();
function st(e, t) {
	return e;
}
be();
var ct = [
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
], lt = A.default.oneOf(["left", "right"]);
A.default.oneOfType([
	lt,
	A.default.shape({ sm: lt }),
	A.default.shape({ md: lt }),
	A.default.shape({ lg: lt }),
	A.default.shape({ xl: lt })
]);
var ut = {
	align: "left",
	alignRight: !1,
	flip: !0
}, dt = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.align, a = e.alignRight, o = e.rootCloseEvent, c = e.flip, l = e.show, u = e.renderOnMount, d = e.as, f = d === void 0 ? "div" : d, p = e.popperConfig, m = _(e, ct), h = (0, O.useContext)(ot), g = E(n, "dropdown-menu"), v = te(), y = v[0], b = v[1], x = [];
	if (i) {
		if (typeof i == "object") {
			var S = Object.keys(i);
			if (S.length) {
				var C = S[0], ee = i[C];
				a = ee === "left", x.push(g + "-" + C + "-" + ee);
			}
		} else i === "right" && (a = !0);
	}
	var w = Ge({
		flip: c,
		rootCloseEvent: o,
		show: l,
		alignEnd: a,
		usePopper: !h && x.length === 0,
		popperConfig: s({}, p, { modifiers: b.concat(p?.modifiers || []) })
	}), ne = w[0], T = w[1], re = T.hasShown, ie = T.popper, ae = T.show, oe = T.alignEnd, se = T.toggle;
	if (ne.ref = ve(y, ve(st(t, "DropdownMenu"), ne.ref)), !re && !u) return null;
	typeof f != "string" && (ne.show = ae, ne.close = function() {
		return se?.(!1);
	}, ne.alignRight = oe);
	var ce = m.style;
	return ie != null && ie.placement && (ce = s({}, m.style, ne.style), m["x-placement"] = ie.placement), /*#__PURE__*/ O.createElement(f, s({}, m, ne, {
		style: ce,
		className: k.default.apply(void 0, [
			r,
			g,
			ae && "show",
			oe && g + "-right"
		].concat(x))
	}));
});
dt.displayName = "DropdownMenu", dt.defaultProps = ut, ae();
var ft = [
	"bsPrefix",
	"split",
	"className",
	"childBsPrefix",
	"as"
], pt = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.split, i = e.className, a = e.childBsPrefix, o = e.as, c = o === void 0 ? Ne : o, l = _(e, ft), u = E(n, "dropdown-toggle");
	a !== void 0 && (l.bsPrefix = a);
	var d = Xe()[0];
	return d.ref = ve(d.ref, st(t, "DropdownToggle")), /*#__PURE__*/ O.createElement(c, s({ className: (0, k.default)(i, u, r && u + "-split") }, d, l));
});
pt.displayName = "DropdownToggle";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Dropdown.js
var mt = [
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
], ht = ye("dropdown-header", { defaultProps: { role: "heading" } }), gt = ye("dropdown-divider", { defaultProps: { role: "separator" } }), _t = ye("dropdown-item-text", { Component: "span" }), vt = { navbar: !1 }, yt = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = ce(e, { show: "onToggle" }), r = n.bsPrefix, i = n.drop, a = n.show, c = n.className, l = n.alignRight, u = n.onSelect, d = n.onToggle, f = n.focusFirstItemOnShow, p = n.as, m = p === void 0 ? "div" : p;
	n.navbar;
	var h = _(n, mt), g = (0, O.useContext)(Te), v = E(r, "dropdown"), y = o(function(e, t, n) {
		n === void 0 && (n = t.type), t.currentTarget === document && (n !== "keydown" || t.key === "Escape") && (n = "rootClose"), d && d(e, t, { source: n });
	}), b = o(function(e, t) {
		g && g(e, t), u && u(e, t), y(!1, t, "select");
	});
	return /*#__PURE__*/ O.createElement(Te.Provider, { value: b }, /*#__PURE__*/ O.createElement(tt, {
		drop: i,
		show: a,
		alignEnd: l,
		onToggle: y,
		focusFirstItemOnShow: f,
		itemSelector: "." + v + "-item:not(.disabled):not(:disabled)"
	}, /*#__PURE__*/ O.createElement(m, s({}, h, {
		ref: t,
		className: (0, k.default)(c, a && "show", (!i || i === "down") && v, i === "up" && "dropup", i === "right" && "dropright", i === "left" && "dropleft")
	}))));
});
yt.displayName = "Dropdown", yt.defaultProps = vt, yt.Divider = gt, yt.Header = ht, yt.Item = at, yt.ItemText = _t, yt.Menu = dt, yt.Toggle = pt;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/InputGroup.js
var bt = [
	"bsPrefix",
	"size",
	"hasValidation",
	"className",
	"as"
], xt = ye("input-group-append"), St = ye("input-group-prepend"), Ct = ye("input-group-text", { Component: "span" }), wt = function(e) {
	return /*#__PURE__*/ O.createElement(Ct, null, /*#__PURE__*/ O.createElement("input", s({ type: "checkbox" }, e)));
}, Tt = function(e) {
	return /*#__PURE__*/ O.createElement(Ct, null, /*#__PURE__*/ O.createElement("input", s({ type: "radio" }, e)));
}, Et = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.size, i = e.hasValidation, a = e.className, o = e.as, c = o === void 0 ? "div" : o, l = _(e, bt);
	return n = E(n, "input-group"), /*#__PURE__*/ O.createElement(c, s({ ref: t }, l, { className: (0, k.default)(a, n, r && n + "-" + r, i && "has-validation") }));
});
Et.displayName = "InputGroup", Et.Text = Ct, Et.Radio = Tt, Et.Checkbox = wt, Et.Append = xt, Et.Prepend = St;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContext.js
var Dt = /*#__PURE__*/ O.createContext(null), Ot = [
	"as",
	"onSelect",
	"activeKey",
	"role",
	"onKeyDown"
], kt = function() {}, At = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "ul" : n, i = e.onSelect, a = e.activeKey, o = e.role, c = e.onKeyDown, l = _(e, Ot), u = Be(), d = (0, O.useRef)(!1), f = (0, O.useContext)(Te), p = (0, O.useContext)(Dt), m, h;
	p && (o ||= "tablist", a = p.activeKey, m = p.getControlledId, h = p.getControllerId);
	var g = (0, O.useRef)(null), v = function(e) {
		var t = g.current;
		if (!t) return null;
		var n = Re(t, "[data-rb-event-key]:not(.disabled)"), r = t.querySelector(".active");
		if (!r) return null;
		var i = n.indexOf(r);
		if (i === -1) return null;
		var a = i + e;
		return a >= n.length && (a = 0), a < 0 && (a = n.length - 1), n[a];
	}, y = function(e, t) {
		e != null && (i && i(e, t), f && f(e, t));
	}, b = function(e) {
		c && c(e);
		var t;
		switch (e.key) {
			case "ArrowLeft":
			case "ArrowUp":
				t = v(-1);
				break;
			case "ArrowRight":
			case "ArrowDown":
				t = v(1);
				break;
			default: return;
		}
		t && (e.preventDefault(), y(t.dataset.rbEventKey, e), d.current = !0, u());
	};
	(0, O.useEffect)(function() {
		if (g.current && d.current) {
			var e = g.current.querySelector("[data-rb-event-key].active");
			e && e.focus();
		}
		d.current = !1;
	});
	var x = ve(t, g);
	return /*#__PURE__*/ O.createElement(Te.Provider, { value: y }, /*#__PURE__*/ O.createElement(nt.Provider, { value: {
		role: o,
		activeKey: Ee(a),
		getControlledId: m || kt,
		getControllerId: h || kt
	} }, /*#__PURE__*/ O.createElement(r, s({}, l, {
		onKeyDown: b,
		ref: x,
		role: o
	}))));
}), jt = [
	"active",
	"className",
	"eventKey",
	"onSelect",
	"onClick",
	"as"
], Mt = { disabled: !1 }, Nt = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = e.active, r = e.className, i = e.eventKey, a = e.onSelect, c = e.onClick, l = e.as, u = _(e, jt), d = Ee(i, u.href), f = (0, O.useContext)(Te), p = (0, O.useContext)(nt), m = n;
	if (p) {
		!u.role && p.role === "tablist" && (u.role = "tab");
		var h = p.getControllerId(d), g = p.getControlledId(d);
		u["data-rb-event-key"] = d, u.id = h || u.id, u["aria-controls"] = g || u["aria-controls"], m = n == null && d != null ? p.activeKey === d : n;
	}
	u.role === "tab" && (u.disabled && (u.tabIndex = -1, u["aria-disabled"] = !0), u["aria-selected"] = m);
	var v = o(function(e) {
		c && c(e), d != null && (a && a(d, e), f && f(d, e));
	});
	return /*#__PURE__*/ O.createElement(l, s({}, u, {
		ref: t,
		onClick: v,
		className: (0, k.default)(r, m && "active")
	}));
});
Nt.defaultProps = Mt;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavItem.js
var Pt = [
	"bsPrefix",
	"className",
	"children",
	"as"
], Ft = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.as, o = a === void 0 ? "div" : a, c = _(e, Pt);
	return n = E(n, "nav-item"), /*#__PURE__*/ O.createElement(o, s({}, c, {
		ref: t,
		className: (0, k.default)(r, n)
	}), i);
});
Ft.displayName = "NavItem";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavLink.js
var It = [
	"bsPrefix",
	"disabled",
	"className",
	"href",
	"eventKey",
	"onSelect",
	"as"
], Lt = {
	disabled: !1,
	as: Ae
}, Rt = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.disabled, i = e.className, a = e.href, o = e.eventKey, c = e.onSelect, l = e.as, u = _(e, It);
	return n = E(n, "nav-link"), /*#__PURE__*/ O.createElement(Nt, s({}, u, {
		href: a,
		ref: t,
		eventKey: o,
		as: l,
		disabled: r,
		onSelect: c,
		className: (0, k.default)(i, n, r && "disabled")
	}));
});
Rt.displayName = "NavLink", Rt.defaultProps = Lt, oe();
var zt = [
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
], Bt = {
	justify: !1,
	fill: !1
}, Vt = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n, r = ce(e, { activeKey: "onSelect" }), i = r.as, a = i === void 0 ? "div" : i, o = r.bsPrefix, c = r.variant, l = r.fill, u = r.justify, d = r.navbar, f = r.navbarScroll, p = r.className, m = r.children, h = r.activeKey, g = _(r, zt), v = E(o, "nav"), y, b, x = !1, S = (0, O.useContext)(ot), C = (0, O.useContext)(Pe);
	return S ? (y = S.bsPrefix, x = d ?? !0) : C && (b = C.cardHeaderBsPrefix), /*#__PURE__*/ O.createElement(At, s({
		as: a,
		ref: t,
		activeKey: h,
		className: (0, k.default)(p, (n = {}, n[v] = !x, n[y + "-nav"] = x, n[y + "-nav-scroll"] = x && f, n[b + "-" + c] = !!b, n[v + "-" + c] = !!c, n[v + "-fill"] = l, n[v + "-justified"] = u, n))
	}, g), m);
});
Vt.displayName = "Nav", Vt.defaultProps = Bt, Vt.Item = Ft, Vt.Link = Rt;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavDropdown.js
var Ht = [
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
], Ut = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = e.id, r = e.title, i = e.children, a = e.bsPrefix, o = e.className, c = e.rootCloseEvent, l = e.menuRole, u = e.disabled, d = e.active, f = e.renderMenuOnMount, p = _(e, Ht), m = E(void 0, "nav-item");
	return /*#__PURE__*/ O.createElement(yt, s({ ref: t }, p, { className: (0, k.default)(o, m) }), /*#__PURE__*/ O.createElement(yt.Toggle, {
		id: n,
		eventKey: null,
		active: d,
		disabled: u,
		childBsPrefix: a,
		as: Rt
	}, r), /*#__PURE__*/ O.createElement(yt.Menu, {
		role: l,
		renderOnMount: f,
		rootCloseEvent: c
	}, i));
});
Ut.displayName = "NavDropdown", Ut.Item = yt.Item, Ut.ItemText = yt.ItemText, Ut.Divider = yt.Divider, Ut.Header = yt.Header;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContainer.js
var Wt = function(e) {
	var t = ce(e, { activeKey: "onSelect" }), n = t.id, r = t.generateChildId, i = t.onSelect, a = t.activeKey, o = t.transition, s = t.mountOnEnter, c = t.unmountOnExit, l = t.children, u = (0, O.useMemo)(function() {
		return r || function(e, t) {
			return n ? n + "-" + t + "-" + e : null;
		};
	}, [n, r]), d = (0, O.useMemo)(function() {
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
	return /*#__PURE__*/ O.createElement(Dt.Provider, { value: d }, /*#__PURE__*/ O.createElement(Te.Provider, { value: i || null }, l));
}, Gt = [
	"bsPrefix",
	"as",
	"className"
], Kt = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.as, i = r === void 0 ? "div" : r, a = e.className, o = _(e, Gt), c = E(n, "tab-content");
	return /*#__PURE__*/ O.createElement(i, s({ ref: t }, o, { className: (0, k.default)(a, c) }));
}), qt = [
	"activeKey",
	"getControlledId",
	"getControllerId"
], Jt = [
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
function Yt(e) {
	var t = (0, O.useContext)(Dt);
	if (!t) return e;
	var n = t.activeKey, r = t.getControlledId, i = t.getControllerId, a = _(t, qt), o = e.transition !== !1 && a.transition !== !1, c = Ee(e.eventKey);
	return s({}, e, {
		active: e.active == null && c != null ? Ee(n) === c : e.active,
		id: r(e.eventKey),
		"aria-labelledby": i(e.eventKey),
		transition: o && (e.transition || a.transition || b),
		mountOnEnter: e.mountOnEnter == null ? a.mountOnEnter : e.mountOnEnter,
		unmountOnExit: e.unmountOnExit == null ? a.unmountOnExit : e.unmountOnExit
	});
}
var Xt = /*#__PURE__*/ O.forwardRef(function(e, t) {
	var n = Yt(e), r = n.bsPrefix, i = n.className, a = n.active, o = n.onEnter, c = n.onEntering, l = n.onEntered, u = n.onExit, d = n.onExiting, f = n.onExited, p = n.mountOnEnter, m = n.unmountOnExit, h = n.transition, g = n.as, v = g === void 0 ? "div" : g;
	n.eventKey;
	var y = _(n, Jt), b = E(r, "tab-pane");
	if (!a && !h && m) return null;
	var x = /*#__PURE__*/ O.createElement(v, s({}, y, {
		ref: t,
		role: "tabpanel",
		"aria-hidden": !a,
		className: (0, k.default)(i, b, { active: a })
	}));
	return h && (x = /*#__PURE__*/ O.createElement(h, {
		in: a,
		onEnter: o,
		onEntering: c,
		onEntered: l,
		onExit: u,
		onExiting: d,
		onExited: f,
		mountOnEnter: p,
		unmountOnExit: m
	}, x)), /*#__PURE__*/ O.createElement(Dt.Provider, { value: null }, /*#__PURE__*/ O.createElement(Te.Provider, { value: null }, x));
});
Xt.displayName = "TabPane";
// node_modules/.pnpm/css-mediaquery@0.1.2/node_modules/css-mediaquery/index.js
var Zt = /* @__PURE__ */ t(((e) => {
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
})), Qt = /* @__PURE__ */ t(((e, t) => {
	var n = Zt().match, r = typeof window < "u" ? window.matchMedia : null;
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
})), $t = /[A-Z]/g, en = /^ms-/, tn = {};
function nn(e) {
	return "-" + e.toLowerCase();
}
function rn(e) {
	if (tn.hasOwnProperty(e)) return tn[e];
	var t = e.replace($t, nn);
	return tn[e] = en.test(t) ? "-" + t : t;
}
// node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
function an(e, t) {
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
var on = /* @__PURE__ */ e(Qt()), sn = A.default.oneOfType([A.default.string, A.default.number]), cn = {
	all: A.default.bool,
	grid: A.default.bool,
	aural: A.default.bool,
	braille: A.default.bool,
	handheld: A.default.bool,
	print: A.default.bool,
	projection: A.default.bool,
	screen: A.default.bool,
	tty: A.default.bool,
	tv: A.default.bool,
	embossed: A.default.bool
}, ln = {
	orientation: A.default.oneOf(["portrait", "landscape"]),
	scan: A.default.oneOf(["progressive", "interlace"]),
	aspectRatio: A.default.string,
	deviceAspectRatio: A.default.string,
	height: sn,
	deviceHeight: sn,
	width: sn,
	deviceWidth: sn,
	color: A.default.bool,
	colorIndex: A.default.bool,
	monochrome: A.default.bool,
	resolution: sn,
	type: Object.keys(cn)
}, { type: un, ...dn } = ln, fn = {
	minAspectRatio: A.default.string,
	maxAspectRatio: A.default.string,
	minDeviceAspectRatio: A.default.string,
	maxDeviceAspectRatio: A.default.string,
	minHeight: sn,
	maxHeight: sn,
	minDeviceHeight: sn,
	maxDeviceHeight: sn,
	minWidth: sn,
	maxWidth: sn,
	minDeviceWidth: sn,
	maxDeviceWidth: sn,
	minColor: A.default.number,
	maxColor: A.default.number,
	minColorIndex: A.default.number,
	maxColorIndex: A.default.number,
	minMonochrome: A.default.number,
	maxMonochrome: A.default.number,
	minResolution: sn,
	maxResolution: sn,
	...dn
}, pn = {
	all: {
		...cn,
		...fn
	},
	types: cn,
	matchers: ln,
	features: fn
}, mn = (e) => `not ${e}`, hn = (e, t) => {
	let n = rn(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? mn(n) : `(${n}: ${t})`;
}, gn = (e) => e.join(" and "), _n = (e) => {
	let t = [];
	return Object.keys(pn.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(hn(n, r));
	}), gn(t);
}, vn = (0, O.createContext)(void 0), yn = (e) => e.query || _n(e), bn = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[rn(n)] = e[n], t), {});
}, xn = () => {
	let e = (0, O.useRef)(!1);
	return (0, O.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, Sn = (e) => {
	let t = (0, O.useContext)(vn), n = () => bn(e) || bn(t), [r, i] = (0, O.useState)(n);
	return (0, O.useEffect)(() => {
		let e = n();
		an(r, e) || i(e);
	}, [e, t]), r;
}, Cn = (e) => {
	let t = () => yn(e), [n, r] = (0, O.useState)(t);
	return (0, O.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, wn = (e, t) => {
	let n = () => (0, on.default)(e, t || {}, !!t), [r, i] = (0, O.useState)(n), a = xn();
	return (0, O.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, Tn = (e) => {
	let [t, n] = (0, O.useState)(e.matches);
	return (0, O.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, En = (e, t, n) => {
	let r = Sn(t), i = Cn(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = wn(i, r), o = Tn(a), s = xn();
	return (0, O.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, O.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, Dn = /*#__PURE__*/ O.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /*#__PURE__*/ O.createElement(Ne, {
	size: r,
	...i,
	className: (0, k.default)(i.className),
	ref: a
}, n && /*#__PURE__*/ O.createElement(le, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /*#__PURE__*/ O.createElement(le, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), On = (e) => /*#__PURE__*/ O.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ O.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), kn = (e) => /*#__PURE__*/ O.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ O.createElement("path", {
	d: "M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",
	fill: "currentColor"
})), An = (e) => /*#__PURE__*/ O.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ O.createElement("path", {
	d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
	fill: "currentColor"
})), jn = (e) => /*#__PURE__*/ O.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ O.createElement("path", {
	d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06ZM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z",
	fill: "currentColor"
})), Mn = (e) => /*#__PURE__*/ O.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ O.createElement("path", {
	d: "M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z",
	fill: "currentColor"
})), Nn = /*#__PURE__*/ O.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function Pn({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, O.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /*#__PURE__*/ O.createElement(Nn.Provider, { value: i }, r);
}
// node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Fn = "right-scroll-bar-position", In = "width-before-scroll-bar", Ln = "with-scroll-bars-hidden", Rn = "--removed-body-scroll-bar-size";
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function zn(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function Bn(e, t) {
	var n = (0, O.useState)(function() {
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
var Vn = typeof window < "u" ? O.useLayoutEffect : O.useEffect, Hn = /* @__PURE__ */ new WeakMap();
function Un(e, t) {
	var n = Bn(t || null, function(t) {
		return e.forEach(function(e) {
			return zn(e, t);
		});
	});
	return Vn(function() {
		var t = Hn.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || zn(e, null);
			}), i.forEach(function(e) {
				r.has(e) || zn(e, a);
			});
		}
		Hn.set(n, e);
	}, [e]), n;
}
// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function Wn(e) {
	return e;
}
function Gn(e, t) {
	t === void 0 && (t = Wn);
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
function Kn(e, t) {
	return t === void 0 && (t = Wn), Gn(e, t);
}
function qn(e) {
	e === void 0 && (e = {});
	var t = Gn(null);
	return t.options = c({
		async: !0,
		ssr: !1
	}, e), t;
}
// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var Jn = function(e) {
	var t = e.sideCar, n = f(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return O.createElement(r, c({}, n));
};
Jn.isSideCarExport = !0;
function Yn(e, t) {
	return e.useMedium(t), Jn;
}
// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var Xn = qn(), Zn = function() {}, Qn = O.forwardRef(function(e, t) {
	var n = O.useRef(null), r = O.useState({
		onScrollCapture: Zn,
		onWheelCapture: Zn,
		onTouchMoveCapture: Zn
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, p = e.shards, m = e.sideCar, h = e.noRelative, g = e.noIsolation, _ = e.inert, v = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, x = e.gapMode, S = f(e, [
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
	]), C = m, ee = Un([n, t]), te = c(c({}, S), i);
	return O.createElement(O.Fragment, null, d && O.createElement(C, {
		sideCar: Xn,
		removeScrollBar: u,
		shards: p,
		noRelative: h,
		noIsolation: g,
		inert: _,
		setCallbacks: a,
		allowPinchZoom: !!v,
		lockRef: n,
		gapMode: x
	}), o ? O.cloneElement(O.Children.only(s), c(c({}, te), { ref: ee })) : O.createElement(b, c({}, te, {
		className: l,
		ref: ee
	}), s));
});
Qn.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Qn.classNames = {
	fullWidth: In,
	zeroRight: Fn
};
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var $n = "data-focus-lock", er = "data-focus-lock-disabled", tr = "data-no-focus-lock", nr = "data-autofocus-inside", rr = "data-no-autofocus", ir = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, ar = Kn({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), or = Kn(), sr = Kn(), cr = qn({
	async: !0,
	ssr: typeof document < "u"
}), lr = /*#__PURE__*/ (0, O.createContext)(void 0), ur = [], dr = /*#__PURE__*/ (0, O.forwardRef)(function(e, t) {
	var n, r = (0, O.useState)(), i = r[0], a = r[1], o = (0, O.useRef)(), c = (0, O.useRef)(!1), l = (0, O.useRef)(null), u = (0, O.useState)({})[1], d = e.children, f = e.disabled, p = f !== void 0 && f, m = e.noFocusGuards, h = m !== void 0 && m, g = e.persistentFocus, _ = g !== void 0 && g, v = e.crossFrame, y = v === void 0 || v, b = e.autoFocus, x = b === void 0 || b;
	e.allowTextSelection;
	var S = e.group, C = e.className, ee = e.whiteList, te = e.hasPositiveIndices, w = e.shards, ne = w === void 0 ? ur : w, T = e.as, re = T === void 0 ? "div" : T, ie = e.lockProps, ae = ie === void 0 ? {} : ie, oe = e.sideCar, se = e.returnFocus, ce = se !== void 0 && se, E = e.focusOptions, D = e.onActivation, le = e.onDeactivation, ue = (0, O.useState)({})[0], de = (0, O.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!l.current) {
			var n = document?.activeElement;
			l.current = n, n !== document.body && (l.current = t(n));
		}
		o.current && D && D(o.current), c.current = !0, u();
	}, [D]), fe = (0, O.useCallback)(function() {
		c.current = !1, le && le(o.current), u();
	}, [le]), pe = (0, O.useCallback)(function(e) {
		var t = l.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof ce == "function" ? ce(n) : ce;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				l.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [ce]), me = (0, O.useCallback)(function(e) {
		c.current && ar.useMedium(e);
	}, []), he = or.useMedium, ge = (0, O.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), _e = s((n = {}, n[er] = p && "disabled", n[$n] = S, n), ae), ve = h !== !0, ye = ve && h !== "tail", be = Un([t, ge]), xe = (0, O.useMemo)(function() {
		return {
			observed: o,
			shards: ne,
			enabled: !p,
			get active() {
				return c.current;
			}
		};
	}, [
		p,
		c,
		ne,
		o
	]);
	return /*#__PURE__*/ O.createElement(O.Fragment, null, ve && [/*#__PURE__*/ O.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: ir
	}), te ? /*#__PURE__*/ O.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: ir
	}) : null], !p && /*#__PURE__*/ O.createElement(oe, {
		id: ue,
		sideCar: cr,
		observed: i,
		disabled: p,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: x,
		whiteList: ee,
		shards: ne,
		onActivation: de,
		onDeactivation: fe,
		returnFocus: pe,
		focusOptions: E,
		noFocusGuards: h
	}), /*#__PURE__*/ O.createElement(re, s({ ref: be }, _e, {
		className: C,
		onBlur: he,
		onFocus: me
	}), /*#__PURE__*/ O.createElement(lr.Provider, { value: xe }, d)), ye && /*#__PURE__*/ O.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: ir
	}));
});
dr.propTypes = {};
// node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.31_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function fr(e) {
	setTimeout(e, 1);
}
var pr = function(e) {
	return e && "current" in e ? e.current : e;
}, mr = dr, hr = qn(), gr = "data-focus-on-hidden", _r = { preventScroll: !0 }, vr = O.forwardRef(function(e, t) {
	var n = O.useState(!1), r = n[0], i = n[1], a = O.useState(null), o = a[0], s = a[1], l = e.children, u = e.autoFocus, d = e.shards, p = e.crossFrame, m = e.enabled, h = m === void 0 || m, g = e.scrollLock, _ = g === void 0 || g, v = e.focusLock, y = v === void 0 || v, b = e.returnFocus, x = b === void 0 || b, S = e.inert, C = e.allowPinchZoom, ee = e.sideCar, te = e.className, w = e.shouldIgnore, ne = e.preventScrollOnFocus, T = e.style, re = e.as, ie = e.gapMode, ae = f(e, [
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
	]), oe = ee, se = c(c({}, r), {
		as: re,
		style: T,
		sideCar: ee,
		shards: d,
		allowPinchZoom: C,
		gapMode: ie,
		inert: S,
		enabled: h && _
	}), ce = O.useCallback(function(e) {
		s(e);
	}, []), E = O.useCallback(function() {
		s(null);
	}, []);
	return O.createElement(O.Fragment, null, O.createElement(mr, {
		ref: t,
		sideCar: ee,
		disabled: !(h && y),
		returnFocus: x,
		autoFocus: u,
		shards: d,
		crossFrame: p,
		onActivation: ce,
		onDeactivation: E,
		className: te,
		whiteList: w,
		lockProps: se,
		focusOptions: ne ? _r : void 0,
		as: Qn
	}, l), h && O.createElement(oe, c({}, ae, {
		sideCar: hr,
		setLockProps: i,
		shards: d,
		activeNode: o
	})));
});
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/typeof.js
function yr(e) {
	"@babel/helpers - typeof";
	return yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, yr(e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function br(e, t) {
	if (yr(e) != "object" || !e) return e;
	var n;
	if (typeof Symbol < "u" && (n = e[Symbol.toPrimitive]) !== void 0) {
		var r = n.call(e, t || "default");
		if (yr(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function xr(e) {
	var t = br(e, "string");
	return yr(t) == "symbol" ? t : t + "";
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Sr(e, t, n) {
	return (t = xr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
// node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Cr(e, t) {
	function r(e) {
		return e.displayName || e.name || "Component";
	}
	return function(i) {
		var a = [], o;
		function s() {
			o = e(a.map(function(e) {
				return e.props;
			})), t(o);
		}
		var c = /*#__PURE__*/ function(e) {
			n(t, e);
			function t() {
				return e.apply(this, arguments) || this;
			}
			t.peek = function() {
				return o;
			};
			var r = t.prototype;
			return r.componentDidMount = function() {
				a.push(this), s();
			}, r.componentDidUpdate = function() {
				s();
			}, r.componentWillUnmount = function() {
				var e = a.indexOf(this);
				a.splice(e, 1), s();
			}, r.render = function() {
				return /*#__PURE__*/ O.createElement(i, this.props);
			}, t;
		}(O.PureComponent);
		return Sr(c, "displayName", "SideEffect(" + r(i) + ")"), c;
	};
}
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var wr = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, Tr = function(e) {
	return Array.isArray(e) ? e : [e];
}, Er = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Dr = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Or = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, kr = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, Ar = function(e) {
	return e.hasAttribute("inert");
}, jr = function(e, t) {
	return !e || kr(e) || !Dr(e) && !Ar(e) && t(Or(e));
}, Mr = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = jr(t, Mr.bind(void 0, e));
	return e.set(t, r), r;
}, Nr = function(e, t) {
	return e && !kr(e) ? Br(e) ? t(Or(e)) : !1 : !0;
}, Pr = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Nr(t, Pr.bind(void 0, e));
	return e.set(t, r), r;
}, Fr = function(e) {
	return e.dataset;
}, Ir = function(e) {
	return e.tagName === "BUTTON";
}, Lr = function(e) {
	return e.tagName === "INPUT";
}, Rr = function(e) {
	return Lr(e) && e.type === "radio";
}, zr = function(e) {
	return !Lr(e) && !Ir(e) || e.type !== "hidden" && !e.disabled;
}, Br = function(e) {
	var t = e.getAttribute(rr);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, Vr = function(e) {
	return !!(e && Fr(e)?.focusGuard);
}, Hr = function(e) {
	return !Vr(e);
}, Ur = function(e) {
	return !!e;
}, Wr = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, Gr = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Kr = function(e, t, n) {
	return wr(e).map(function(e, t) {
		var r = Gr(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(Wr);
}, qr = "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]", Jr = `${qr}, [data-focus-guard]`, Yr = function(e, t) {
	return wr((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? Jr : qr) ? [n] : [], Yr(n));
	}, []);
}, Xr = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? Zr([e.contentDocument.body], t) : [e];
}, Zr = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = Yr(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return Xr(e, t);
		}));
		return e.concat(a, n.parentNode ? wr(n.parentNode.querySelectorAll(qr)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, Qr = function(e) {
	return wr(e.querySelectorAll(`[${nr}]`)).map(function(e) {
		return Zr([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, $r = function(e, t) {
	return wr(e).filter(function(e) {
		return Mr(t, e);
	}).filter(function(e) {
		return zr(e);
	});
}, ei = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), wr(e).filter(function(e) {
		return Pr(t, e);
	});
}, ti = function(e, t, n) {
	return Kr($r(Zr(e, n), t), !0, n);
}, ni = function(e, t) {
	return Kr($r(Zr(e), t), !1);
}, ri = function(e, t) {
	return $r(Qr(e), t);
}, ii = function(e, t) {
	return e.shadowRoot ? ii(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : wr(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? ii(n, t) : !1;
		}
		return ii(e, t);
	});
}, ai = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, oi = function(e) {
	return e.parentNode ? oi(e.parentNode) : e;
}, si = function(e) {
	return Tr(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute($n);
		return e.push.apply(e, n ? ai(wr(oi(t).querySelectorAll(`[${$n}="${n}"]:not([${er}="disabled"])`))) : [t]), e;
	}, []);
}, ci = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, li = function(e) {
	if (e === void 0 && (e = document), e && e.activeElement) {
		var t = e.activeElement;
		return t.shadowRoot ? li(t.shadowRoot) : t instanceof HTMLIFrameElement && ci(function() {
			return t.contentWindow.document;
		}) ? li(t.contentWindow.document) : t;
	}
}, ui = function(e, t) {
	return e === t;
}, di = function(e, t) {
	return !!wr(e.querySelectorAll("iframe")).some(function(e) {
		return ui(e, t);
	});
}, fi = function(e, t) {
	return t === void 0 && (t = li(Er(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : si(e).some(function(e) {
		return ii(e, t) || di(e, t);
	});
}, pi = function(e) {
	e === void 0 && (e = document);
	var t = li(e);
	return t ? wr(e.querySelectorAll(`[${tr}]`)).some(function(e) {
		return ii(e, t);
	}) : !1;
}, mi = function(e, t) {
	return t.filter(Rr).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, hi = function(e, t) {
	return Rr(e) && e.name ? mi(e, t) : e;
}, gi = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(hi(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, _i = function(e) {
	return e[0] && e.length > 1 ? hi(e[0], e) : e[0];
}, vi = function(e, t) {
	return e.indexOf(hi(t, e));
}, yi = "NEW_FOCUS", bi = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = Vr(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? yi : d;
		if (d === -1) return yi;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = gi(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = vi(e, t[0]), C = vi(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, xi = function(e) {
	return function(t) {
		var n = Fr(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Si = function(e, t, n) {
	var r = ei(e.map(function(e) {
		return e.node;
	}).filter(xi(n)));
	return r && r.length ? _i(r) : _i(ei(t));
}, Ci = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Ci(e.parentNode.host || e.parentNode, t), t;
}, wi = function(e, t) {
	for (var n = Ci(e), r = Ci(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, Ti = function(e, t, n) {
	var r = Tr(e), i = Tr(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = wi(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = wi(a, e);
			t && (o = !o || ii(t, o) ? t : wi(t, o));
		});
	}), o;
}, Ei = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(ri(n, t));
	}, []);
}, Di = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(Ur);
}, Oi = function(e, t) {
	var n = li(Tr(e).length > 0 ? document : Er(e).ownerDocument), r = si(e).filter(Hr), i = Ti(n || e, e, r), a = /* @__PURE__ */ new Map(), o = ni(r, a), s = o.filter(function(e) {
		var t = e.node;
		return Hr(t);
	});
	if (s[0]) {
		var c = ni([i], a).map(function(e) {
			return e.node;
		}), l = Di(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = bi(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Si(o, d, Ei(r, a)) || Si(o, u, Ei(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
		} else return f === void 0 ? f : l[f];
	}
}, ki = function(e) {
	var t = si(e).filter(Hr), n = Kr(Zr([Ti(e, e, t)], !0), !0, !0), r = Zr(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: Vr(t)
		};
	});
}, Ai = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, ji = 0, Mi = !1, Ni = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Oi(e, t);
	if (!Mi && r) {
		if (ji > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Mi = !0, setTimeout(function() {
				Mi = !1;
			}, 1);
			return;
		}
		ji++, Ai(r.node, n.focusOptions), ji--;
	}
};
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function Pi(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var Fi = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: Pi(n),
		parent: Pi(n.parentElement),
		left: Pi(n.previousElementSibling),
		right: Pi(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: Pi(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, Ii = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = ti([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, Li = function(e) {
	var t = Fi(e);
	return function() {
		return Ii(t);
	};
}, Ri = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = Tr(t);
	if (r.every(function(t) {
		return !ii(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? ti(r, /* @__PURE__ */ new Map()) : ni(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, zi = function(e, t) {
	var n = t ? ti(Tr(e), /* @__PURE__ */ new Map()) : ni(Tr(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, Bi = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, Vi = function(e, t, n) {
	t === void 0 && (t = {});
	var r = Bi(t), i = Ri(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Ai(a.node, r.focusOptions);
	}
}, Hi = function(e, t) {
	t === void 0 && (t = {}), Vi(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, Ui = function(e, t) {
	t === void 0 && (t = {}), Vi(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, Wi = function(e, t, n) {
	var r = zi(e, t.onlyTabbable ?? !0)[n];
	r && Ai(r.node, t.focusOptions);
}, Gi = function(e, t) {
	t === void 0 && (t = {}), Wi(e, t, "first");
}, Ki = function(e, t) {
	t === void 0 && (t = {}), Wi(e, t, "last");
}, qi = function() {
	return document && document.activeElement === document.body;
}, Ji = function() {
	return qi() || pi();
}, Yi = null, Xi = null, Zi = function() {
	return null;
}, Qi = null, $i = !1, ea = !1, ta = function() {
	return !0;
}, na = function(e) {
	return (Yi.whiteList || ta)(e);
}, ra = function(e, t) {
	Qi = {
		observerNode: e,
		portaledElement: t
	};
}, ia = function(e) {
	return Qi && Qi.portaledElement === e;
};
function aa(e, t, n, r) {
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
var oa = function(e) {
	return e ? !!$i : $i === "meanwhile";
}, sa = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, ca = function(e, t) {
	return t.some(function(t) {
		return sa(e, t, t);
	});
}, la = function(e) {
	return ni(e, /* @__PURE__ */ new Map());
}, ua = function(e) {
	return !la([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, da = function() {
	var e = !1;
	if (Yi) {
		var t = Yi, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || Qi && Qi.portaledElement;
		if (qi() && Xi && Xi !== document.body && (!document.body.contains(Xi) || ua(Xi))) {
			var u = Zi();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(pr).filter(Boolean));
			if ((!d || na(d)) && (r || function() {
				if (!oa(o) || !c || !Xi || ea) return !1;
				var e = la(f), t = e.findIndex(function(e) {
					return e.node === Xi;
				});
				return t === 0 || t === e.length - 1;
			}() || !Ji() || !Xi && i) && (l && !(fi(f) || d && ca(d, f) || ia(d, l)) && (document && !Xi && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = Ni(f, Xi, { focusOptions: s }), Qi = {})), Xi = document && document.activeElement, Xi !== document.body && (Zi = Li(Xi)), $i = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = ki(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), aa(h, m.length, 1, m), aa(h, -1, -1, m));
			}
		}
	}
	return e;
}, fa = function(e) {
	da() && e && (e.stopPropagation(), e.preventDefault());
}, pa = function() {
	return fr(da);
}, ma = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || ra(n, t);
}, ha = function() {
	return null;
}, ga = function() {
	ea = !0;
}, _a = function() {
	ea = !1, $i = "just", fr(function() {
		$i = "meanwhile";
	});
}, va = function() {
	document.addEventListener("focusin", fa), document.addEventListener("focusout", pa), window.addEventListener("focus", ga), window.addEventListener("blur", _a);
}, ya = function() {
	document.removeEventListener("focusin", fa), document.removeEventListener("focusout", pa), window.removeEventListener("focus", ga), window.removeEventListener("blur", _a);
};
function ba(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var xa = {
	moveFocusInside: Ni,
	focusInside: fi,
	focusNextElement: Hi,
	focusPrevElement: Ui,
	focusFirstElement: Gi,
	focusLastElement: Ki,
	captureFocusRestore: Li
};
function Sa(e) {
	var t = e.slice(-1)[0];
	t && !Yi && va();
	var n = Yi, r = n && t && t.id === n.id;
	Yi = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (Xi = null, r && n.observed === t.observed || t.onActivation(xa), da(!0), fr(da)) : (ya(), Xi = null);
}
ar.assignSyncMedium(ma), or.assignMedium(pa), sr.assignMedium(function(e) {
	return e(xa);
}), Yn(cr, Cr(ba, Sa)(ha));
// node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Ca = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.31_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function wa() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Ca();
	return t && e.setAttribute("nonce", t), e;
}
function Ta(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ea(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Da = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = wa()) && (Ta(t, n), Ea(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Oa = function() {
	var e = Da();
	return function(t, n) {
		O.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, ka = function() {
	var e = Oa();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Aa = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, ja = function(e) {
	return parseInt(e || "", 10) || 0;
}, Ma = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		ja(n),
		ja(r),
		ja(i)
	];
}, Na = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Aa;
	var t = Ma(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Pa = ka(), Fa = "data-scroll-locked", Ia = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Ln} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Fa}] {
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
  
  .${Fn} {
    right: ${s}px ${r};
  }
  
  .${In} {
    margin-right: ${s}px ${r};
  }
  
  .${Fn} .${Fn} {
    right: 0 ${r};
  }
  
  .${In} .${In} {
    margin-right: 0 ${r};
  }
  
  body[${Fa}] {
    ${Rn}: ${s}px;
  }
`;
}, La = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Ra = function() {
	O.useEffect(function() {
		return document.body.setAttribute(Fa, (La() + 1).toString()), function() {
			var e = La() - 1;
			e <= 0 ? document.body.removeAttribute(Fa) : document.body.setAttribute(Fa, e.toString());
		};
	}, []);
}, za = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Ra();
	var a = O.useMemo(function() {
		return Na(i);
	}, [i]);
	return O.createElement(Pa, { styles: Ia(a, !t, i, n ? "" : "!important") });
}, Ba = !1;
if (typeof window < "u") try {
	var Va = Object.defineProperty({}, "passive", { get: function() {
		return Ba = !0, !0;
	} });
	window.addEventListener("test", Va, Va), window.removeEventListener("test", Va, Va);
} catch {
	Ba = !1;
}
var Ha = Ba ? { passive: !1 } : !1, Ua = function(e) {
	return e.tagName === "TEXTAREA";
}, Wa = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Ua(e) && n[t] === "visible");
}, Ga = function(e) {
	return Wa(e, "overflowY");
}, Ka = function(e) {
	return Wa(e, "overflowX");
}, qa = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Xa(e, r)) {
			var i = Za(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Ja = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Ya = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Xa = function(e, t) {
	return e === "v" ? Ga(t) : Ka(t);
}, Za = function(e, t) {
	return e === "v" ? Ja(t) : Ya(t);
}, Qa = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, $a = function(e, t, n, r, i) {
	var a = Qa(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Za(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Xa(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, eo = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, to = function(e) {
	return [e.deltaX, e.deltaY];
}, no = function(e) {
	return e && "current" in e ? e.current : e;
}, ro = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, io = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, ao = 0, oo = [];
function so(e) {
	var t = O.useRef([]), n = O.useRef([0, 0]), r = O.useRef(), i = O.useState(ao++)[0], a = O.useState(ka)[0], o = O.useRef(e);
	O.useEffect(function() {
		o.current = e;
	}, [e]), O.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = pe([e.lockRef.current], (e.shards || []).map(no), !0).filter(Boolean);
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
	var s = O.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = eo(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = qa(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = qa(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return $a(h, t, e, h === "h" ? s : c, !0);
	}, []), c = O.useCallback(function(e) {
		var n = e;
		if (oo.length && oo[oo.length - 1] === a) {
			var r = "deltaY" in n ? to(n) : eo(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ro(e.delta, r);
			})[0];
			if (i && i.should) n.cancelable && n.preventDefault();
			else if (!i) {
				var c = (o.current.shards || []).map(no).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = O.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: co(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = O.useCallback(function(e) {
		n.current = eo(e), r.current = void 0;
	}, []), d = O.useCallback(function(t) {
		l(t.type, to(t), t.target, s(t, e.lockRef.current));
	}, []), f = O.useCallback(function(t) {
		l(t.type, eo(t), t.target, s(t, e.lockRef.current));
	}, []);
	O.useEffect(function() {
		return oo.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, Ha), document.addEventListener("touchmove", c, Ha), document.addEventListener("touchstart", u, Ha), function() {
			oo = oo.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, Ha), document.removeEventListener("touchmove", c, Ha), document.removeEventListener("touchstart", u, Ha);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return O.createElement(O.Fragment, null, m ? O.createElement(a, { styles: io(i) }) : null, p ? O.createElement(za, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function co(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
Yn(Xn, so);
// node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var lo = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, uo = /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ new WeakMap(), po = {}, mo = 0, ho = function(e) {
	return e && (e.host || ho(e.parentNode));
}, go = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = ho(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, _o = function(e, t, n, r) {
	var i = go(t, Array.isArray(e) ? e : [e]);
	po[n] || (po[n] = /* @__PURE__ */ new WeakMap());
	var a = po[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (uo.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				uo.set(e, c), a.set(e, l), o.push(e), c === 1 && i && fo.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), mo++, function() {
		o.forEach(function(e) {
			var t = uo.get(e) - 1, i = a.get(e) - 1;
			uo.set(e, t), a.set(e, i), t || (fo.has(e) || e.removeAttribute(r), fo.delete(e)), i || e.removeAttribute(n);
		}), mo--, mo || (uo = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ new WeakMap(), po = {});
	};
}, vo = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || lo(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), _o(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, yo = ka(), bo = "\n [" + gr + "] {\n   pointer-events: none !important;\n }\n", xo = function() {
	return O.createElement(yo, { styles: bo });
}, So = function(e) {
	return "current" in e ? e.current : e;
};
function Co(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, O.useRef)(null), u = (0, O.useRef)(0);
	return O.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(So).some(function(t) {
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
	]), (0, O.useEffect)(function() {
		if (c) return a && a(c), function() {
			o && o();
		};
	}, [!!c]), (0, O.useEffect)(function() {
		if (!s && c) return vo(d([c], (i || []).map(So)), c.ownerDocument.body, gr);
	}, [c, s]), (0, O.useEffect)(function() {
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
	}, []), O.createElement(xo, null);
}
// node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.31_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var wo = Yn(hr, Co), To = function(e) {
	return O.createElement(wo, c({}, e));
}, Eo = O.forwardRef(function(e, t) {
	return O.createElement(vr, c({}, e, {
		ref: t,
		sideCar: To
	}));
}), Do = /* @__PURE__ */ e(ee()), Oo = class extends O.Component {
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
		return this.rootElement ? /*#__PURE__*/ Do.createPortal(this.props.children, this.rootElement) : null;
	}
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function ko({ onClick: e }) {
	return /*#__PURE__*/ O.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Ao({ children: e = null }) {
	return /*#__PURE__*/ O.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function jo({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, O.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /*#__PURE__*/ O.createElement(Pn, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /*#__PURE__*/ O.createElement(Oo, null, /*#__PURE__*/ O.createElement(Eo, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, k.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /*#__PURE__*/ O.createElement(Ao, null, /*#__PURE__*/ O.createElement(ko, { onClick: a }), e))));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var Mo = /*#__PURE__*/ O.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, O.useContext)(Nn), a = e, o = {
		...n,
		className: (0, k.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /*#__PURE__*/ O.createElement(a, o, t);
});
Mo.propTypes = {
	as: A.default.elementType,
	children: A.default.node,
	className: A.default.string,
	onClick: A.default.func
}, Mo.defaultProps = {
	as: Dn,
	onClick: void 0,
	className: void 0,
	children: null
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var No = /*#__PURE__*/ O.forwardRef(({ as: e = "div", children: t, ...n }, r) => /*#__PURE__*/ O.createElement(e, {
	...n,
	ref: r,
	className: (0, k.default)("pgn__modal-header", n.className)
}, t));
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function Po({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ O.createElement(e, {
		...n,
		className: (0, k.default)("pgn__modal-title", n.className)
	}, t);
}
Po.propTypes = {
	as: A.default.elementType,
	children: A.default.node.isRequired,
	className: A.default.string
}, Po.defaultProps = {
	as: "h2",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function Fo({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ O.createElement(e, {
		...n,
		className: (0, k.default)("pgn__modal-footer", n.className)
	}, t);
}
Fo.propTypes = {
	as: A.default.elementType,
	children: A.default.node.isRequired,
	className: A.default.string
}, Fo.defaultProps = {
	as: "div",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
var Io = (e = !0) => {
	let t = (0, O.useRef)(null), [n, r] = (0, O.useState)(e);
	return (0, O.useEffect)(() => {
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
function Lo({ as: e, children: t, ...n }) {
	let [r, i] = Io(), [a, o] = Io(), s = (0, k.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /*#__PURE__*/ O.createElement(e, {
		...n,
		className: s
	}, /*#__PURE__*/ O.createElement(O.Fragment, null, /*#__PURE__*/ O.createElement("div", { ref: i }), /*#__PURE__*/ O.createElement("div", { className: "pgn__modal-body-content" }, t), /*#__PURE__*/ O.createElement("div", { ref: o })));
}
Lo.propTypes = {
	as: A.default.elementType,
	children: A.default.node.isRequired,
	className: A.default.string
}, Lo.defaultProps = {
	as: "div",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function Ro({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ O.createElement(e, {
		...n,
		className: (0, k.default)("pgn__modal-hero-content", n.className)
	}, t);
}
Ro.propTypes = {
	as: A.default.elementType,
	children: A.default.node.isRequired,
	className: A.default.string
}, Ro.defaultProps = {
	as: "div",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function zo({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /*#__PURE__*/ O.createElement(e, {
		...r,
		className: (0, k.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
zo.propTypes = {
	as: A.default.elementType,
	backgroundSrc: A.default.string,
	children: A.default.node,
	className: A.default.string,
	style: A.default.shape({})
}, zo.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function Bo({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ O.createElement(e, {
		...n,
		className: (0, k.default)("pgn__modal-hero", n.className)
	}, t);
}
Bo.propTypes = {
	as: A.default.elementType,
	children: A.default.node.isRequired,
	className: A.default.string
}, Bo.defaultProps = {
	as: "div",
	className: void 0
}, Bo.Content = Ro, Bo.Background = zo;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/messages.js
var Vo = x({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function j({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: s, isFullscreenScroll: c = !1, className: l, isFullscreenOnMobile: u = !1, isBlocking: d = !1, zIndex: f, isOverflowVisible: p }) {
	let m = S(), h = s || m.formatMessage(Vo.closeButtonText), g = En({ query: "(max-width: 767.98px)" }), _ = u && g;
	return /*#__PURE__*/ O.createElement(jo, {
		isOpen: n,
		onClose: r,
		isBlocking: d,
		zIndex: f
	}, /*#__PURE__*/ O.createElement("div", {
		role: "dialog",
		"aria-label": t,
		className: (0, k.default)("pgn__modal", {
			[`pgn__modal-${_ ? "fullscreen" : i}`]: i,
			[`pgn__modal-${a}`]: a,
			"pgn__modal-scroll-fullscreen": c,
			"pgn__modal-visible-overflow": p
		}, l)
	}, o && /*#__PURE__*/ O.createElement("div", { className: "pgn__modal-close-container" }, /*#__PURE__*/ O.createElement(Mo, {
		as: _e,
		iconAs: le,
		invertColors: a === "dark",
		src: fe,
		alt: h
	})), e));
}
j.Header = No, j.Title = Po, j.Footer = Fo, j.CloseButton = Mo, j.Body = Lo, j.Hero = Bo;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useToggleHook.js
function Ho(e = !1, t = {}) {
	let { handleToggleOn: n, handleToggleOff: r, handleToggle: i } = t, [a, o] = (0, O.useState)(e), s = (0, O.useCallback)(() => {
		o(!0), n?.(), i?.(!0);
	}, [n, i]), c = (0, O.useCallback)(() => {
		o(!1), r?.(), i?.(!1);
	}, [r, i]);
	return [
		a,
		s,
		c,
		(0, O.useCallback)(() => {
			(a ? c : s)();
		}, [
			a,
			s,
			c
		])
	];
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/StandardModal.js
var Uo = "Close";
function Wo({ children: e, footerNode: t, beforeBodyNode: n, afterBodyNode: r, ...i }) {
	return /*#__PURE__*/ O.createElement(j, { ...i }, /*#__PURE__*/ O.createElement(j.Header, null, /*#__PURE__*/ O.createElement(j.Title, null, i.title)), n, /*#__PURE__*/ O.createElement(j.Body, null, e), r, t && /*#__PURE__*/ O.createElement(j.Footer, null, t));
}
Wo.propTypes = {
	children: A.default.node.isRequired,
	title: A.default.string.isRequired,
	onClose: A.default.func.isRequired,
	isOpen: A.default.bool,
	hasCloseButton: A.default.bool,
	size: A.default.oneOf([
		"sm",
		"md",
		"lg",
		"xl",
		"fullscreen"
	]),
	variant: A.default.oneOf([
		"default",
		"warning",
		"danger",
		"success",
		"dark"
	]),
	closeLabel: A.default.string,
	className: A.default.string,
	isFullscreenScroll: A.default.bool,
	footerNode: A.default.node,
	beforeBodyNode: A.default.node,
	afterBodyNode: A.default.node
}, Wo.defaultProps = {
	isOpen: !1,
	hasCloseButton: !0,
	size: "md",
	variant: "default",
	closeLabel: Uo,
	className: void 0,
	isFullscreenScroll: !1,
	footerNode: null,
	beforeBodyNode: null,
	afterBodyNode: null
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/AlertModal.js
function Go({ children: e, footerNode: t, icon: n, ...r }) {
	return /*#__PURE__*/ O.createElement(j, {
		...r,
		className: (0, k.default)("pgn__alert-modal", r.className)
	}, /*#__PURE__*/ O.createElement(j.Header, null, /*#__PURE__*/ O.createElement(j.Title, null, n && /*#__PURE__*/ O.createElement(le, {
		"data-testid": "title-icon",
		src: n,
		className: (0, k.default)("pgn__alert-modal__title_icon")
	}), r.title)), /*#__PURE__*/ O.createElement(j.Body, null, e), t && /*#__PURE__*/ O.createElement(j.Footer, null, t));
}
Go.propTypes = {
	children: A.default.node.isRequired,
	title: A.default.string.isRequired,
	isOpen: A.default.bool,
	isBlocking: A.default.bool,
	hasCloseButton: A.default.bool,
	onClose: D(A.default.func, "isBlocking"),
	size: A.default.oneOf([
		"sm",
		"md",
		"lg",
		"xl",
		"fullscreen"
	]),
	variant: A.default.oneOf([
		"default",
		"warning",
		"danger",
		"success"
	]),
	closeLabel: A.default.string,
	className: A.default.string,
	isFullscreenScroll: A.default.bool,
	footerNode: A.default.node,
	icon: A.default.elementType
}, Go.defaultProps = {
	isOpen: !1,
	isBlocking: !1,
	hasCloseButton: !1,
	onClose: () => {},
	size: "md",
	variant: "default",
	closeLabel: "Close",
	className: void 0,
	isFullscreenScroll: !1,
	footerNode: null,
	icon: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Nav/index.js
function Ko(e) {
	return /*#__PURE__*/ O.createElement(Vt, { ...e });
}
function qo(e) {
	return /*#__PURE__*/ O.createElement(Ft, { ...e });
}
function Jo(e) {
	return /*#__PURE__*/ O.createElement(Rt, { ...e });
}
Ko.propTypes = {
	cardHeaderBsPrefix: A.default.string,
	defaultActiveKey: A.default.oneOfType([A.default.string, A.default.number]),
	activeKey: A.default.oneOfType([A.default.string, A.default.number]),
	as: A.default.elementType,
	fill: A.default.bool,
	justify: A.default.bool,
	navbar: A.default.bool,
	onKeyDown: A.default.func,
	onSelect: A.default.func,
	role: A.default.string,
	variant: A.default.oneOf(["tabs", "pills"]),
	bsPrefix: A.default.string
}, qo.propTypes = {
	role: A.default.string,
	as: A.default.elementType,
	bsPrefix: A.default.string
}, Jo.propTypes = {
	onSelect: A.default.string,
	active: A.default.bool,
	as: A.default.elementType,
	disabled: A.default.bool,
	eventKey: A.default.oneOfType([A.default.string, A.default.number]),
	href: A.default.string,
	role: A.default.string,
	bsPrefix: A.default.string
}, A.default.string.isRequired, A.default.node.isRequired, A.default.bool, A.default.bool, A.default.string, A.default.oneOf(["dark"]), A.default.func, A.default.bool, A.default.string, A.default.string, Ko.defaultProps = { ...Vt.defaultProps }, { ...Ut.defaultProps }, qo.defaultProps = { ...Ft.defaultProps }, Jo.defaultProps = { ...Rt.defaultProps }, Ko.Item = qo, Ko.Link = Jo;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Sticky/index.js
var Yo = ["top", "bottom"], Xo = /*#__PURE__*/ O.forwardRef(({ position: e, children: t, offset: n, className: r, ...i }, a) => {
	let [o, s] = (0, O.useState)(!1), c = O.useRef(), l = a || c;
	return (0, O.useLayoutEffect)(() => {
		if (l.current) {
			let t = l.current, n = window.getComputedStyle(t)[e || "top"], r = 1 + (parseInt(n, 10) || 0), i = new IntersectionObserver(([e]) => s(e.intersectionRatio < 1), {
				threshold: [1],
				rootMargin: e === "bottom" ? `0px 0px -${r}px 0px` : `-${r}px 0px 0px 0px`
			});
			return i.observe(t), () => {
				i.unobserve(t);
			};
		}
	}, [e, l]), /*#__PURE__*/ O.createElement("div", {
		className: (0, k.default)("pgn__sticky", `pgn__sticky-${e || "top"}`, n ? `pgn__sticky-offset--${n}` : "", { "pgn__sticky-shadow": o }, r),
		ref: l,
		...i
	}, t);
});
Xo.propTypes = {
	children: A.default.node.isRequired,
	position: A.default.oneOf(Yo),
	offset: A.default.oneOfType([A.default.number, A.default.string]),
	className: A.default.string
}, Xo.defaultProps = {
	position: "top",
	offset: void 0,
	className: void 0
};
// src/external-resources/studio-ui/components/ContentTypeSelect.tsx
var M = l(), Zo = Object.entries(se), Qo = (e) => Zo.find(([, t]) => t.toLowerCase() === e.toLowerCase())?.[0], $o = ({ fileType: e, customFileType: t, onChange: n }) => {
	let r = (0, O.useId)(), i = (0, O.useRef)(null), [a, o] = (0, O.useState)(!1), [s, c] = (0, O.useState)(null), [l, u] = (0, O.useState)(-1), d = "";
	e === w.CUSTOM ? d = t : e && (d = se[e]);
	let f = (s ?? "").trim(), p = Zo.filter(([, e]) => e.toLowerCase().includes(f.toLowerCase())).map(([e, t]) => ({
		kind: "option",
		fileType: e,
		label: t
	}));
	f && p.length === 0 && p.push({
		kind: "create",
		label: f
	});
	let m = () => {
		o(!1), c(null), u(-1);
	}, h = () => {
		o(!0), u(-1);
	}, g = (e) => {
		e.kind === "option" ? n(e.fileType, "") : n(w.CUSTOM, e.label), m();
	}, _ = () => {
		if (f) {
			let e = Qo(f);
			e ? n(e, "") : n(w.CUSTOM, f);
		}
		m();
	}, v = (e) => {
		switch (e.key) {
			case "ArrowDown":
				e.preventDefault(), a || h(), u((e) => Math.min(e + 1, p.length - 1));
				break;
			case "ArrowUp":
				e.preventDefault(), u((e) => Math.max(e - 1, -1));
				break;
			case "Enter":
				e.preventDefault(), a && l >= 0 && p[l] ? g(p[l]) : _();
				break;
			case "Escape": a && (e.preventDefault(), m());
		}
	}, y = (e) => {
		e.currentTarget.contains(e.relatedTarget) || _();
	}, b = () => {
		a ? m() : h(), i.current?.focus();
	}, x = (e) => `${r}-item-${e}`;
	return /* @__PURE__ */ (0, M.jsxs)("div", {
		className: "content-type-select",
		onBlur: y,
		children: [/* @__PURE__ */ (0, M.jsx)(T.Control, {
			ref: i,
			role: "combobox",
			"aria-expanded": a,
			"aria-controls": r,
			"aria-autocomplete": "list",
			"aria-activedescendant": a && l >= 0 ? x(l) : void 0,
			autoComplete: "off",
			placeholder: "Select or add type",
			value: s ?? d,
			onChange: (e) => {
				c(e.target.value), o(!0), u(-1);
			},
			onFocus: () => !a && h(),
			onClick: () => !a && h(),
			onKeyDown: v,
			trailingElement: /* @__PURE__ */ (0, M.jsx)(_e, {
				src: a ? re : ie,
				iconAs: le,
				size: "sm",
				variant: "secondary",
				alt: a ? "Close content types" : "Open content types",
				tabIndex: -1,
				onMouseDown: (e) => e.preventDefault(),
				onClick: b
			})
		}), a && p.length > 0 && /* @__PURE__ */ (0, M.jsx)("ul", {
			id: r,
			role: "listbox",
			className: "content-type-select-menu",
			onMouseDown: (e) => e.preventDefault(),
			children: p.map((e, t) => /* @__PURE__ */ (0, M.jsx)("li", {
				id: x(t),
				role: "option",
				"aria-selected": t === l,
				className: `content-type-select-item ${t === l ? "is-active" : ""}`,
				onMouseEnter: () => u(t),
				onClick: () => g(e),
				children: e.kind === "create" ? /* @__PURE__ */ (0, M.jsxs)(M.Fragment, { children: [
					/* @__PURE__ */ (0, M.jsx)(le, {
						src: On,
						size: "sm",
						className: "mr-2"
					}),
					"Create \"",
					/* @__PURE__ */ (0, M.jsx)("strong", { children: e.label }),
					"\""
				] }) : e.label
			}, e.kind === "option" ? e.fileType : "create"))
		})]
	});
};
// node_modules/.pnpm/fuse.js@7.5.0/node_modules/fuse.js/dist/fuse.mjs
function es(e) {
	return Array.isArray ? Array.isArray(e) : ls(e) === "[object Array]";
}
function ts(e) {
	if (typeof e == "string") return e;
	if (typeof e == "bigint") return e.toString();
	let t = e + "";
	return t == "0" && 1 / e == -Infinity ? "-0" : t;
}
function ns(e) {
	return e == null ? "" : ts(e);
}
function N(e) {
	return typeof e == "string";
}
function rs(e) {
	return typeof e == "number";
}
function is(e) {
	return e === !0 || e === !1 || os(e) && ls(e) == "[object Boolean]";
}
function as(e) {
	return typeof e == "object";
}
function os(e) {
	return as(e) && e !== null;
}
function ss(e) {
	return e != null;
}
function cs(e) {
	return !e.trim().length;
}
function ls(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var us = "Incorrect 'index' type", ds = "Invalid doc index: must be a non-negative integer within the bounds of the docs array", fs = (e) => `Invalid value for key ${e}`, ps = (e) => `Pattern length exceeds max of ${e}.`, ms = (e) => `Missing ${e} property in key`, hs = (e) => `Property 'weight' in key '${e}' must be a positive integer`, gs = "Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.", _s = Object.prototype.hasOwnProperty, vs = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = ys(e);
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
function ys(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (N(e) || es(e)) r = e, t = bs(e), n = xs(e);
	else {
		if (!_s.call(e, "name")) throw Error(ms("name"));
		let o = e.name;
		if (r = o, _s.call(e, "weight") && e.weight !== void 0 && (i = e.weight, i <= 0)) throw Error(hs(xs(o)));
		t = bs(o), n = xs(o), a = e.getFn ?? null;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function bs(e) {
	return es(e) ? e : e.split(".");
}
function xs(e) {
	return es(e) ? e.join(".") : e;
}
function Ss(e, t) {
	let n = [], r = !1, i = (e, t, a, o) => {
		if (ss(e)) {
			if (!t[a]) n.push(o === void 0 ? e : {
				v: e,
				i: o
			});
			else {
				let s = e[t[a]];
				if (!ss(s)) return;
				if (a === t.length - 1 && (N(s) || rs(s) || is(s) || typeof s == "bigint")) n.push(o === void 0 ? ns(s) : {
					v: ns(s),
					i: o
				});
				else if (es(s)) {
					r = !0;
					for (let e = 0, n = s.length; e < n; e += 1) i(s[e], t, a + 1, e);
				} else t.length && i(s, t, a + 1, o);
			}
		}
	};
	return i(e, N(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var Cs = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, ws = {
	isCaseSensitive: !1,
	ignoreDiacritics: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, Ts = {
	location: 0,
	threshold: .6,
	distance: 100
}, Es = {
	useExtendedSearch: !1,
	useTokenSearch: !1,
	tokenize: void 0,
	tokenMatch: "any",
	getFn: Ss,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, P = Object.freeze({
	...ws,
	...Cs,
	...Ts,
	...Es
});
function Ds(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 160;
}
function Os(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = 0, a = !1;
			for (let e = 0; e < t.length; e++) Ds(t.charCodeAt(e)) ? a = !1 : a ||= (i++, !0);
			if (i === 0 && (i = 1), n.has(i)) return n.get(i);
			let o = Math.round(r / i ** (.5 * e)) / r;
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var ks = class {
	constructor({ getFn: e = P.getFn, fieldNormWeight: t = P.fieldNormWeight } = {}) {
		this.norm = Os(t, 3), this.getFn = e, this.isCreated = !1, this.docs = [], this.keys = [], this._keysMap = {}, this.setIndexRecords();
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
		if (N(this.docs[0])) for (let n = 0; n < e; n++) {
			let e = this._createStringRecord(this.docs[n], n);
			e && (this.records[t++] = e);
		}
		else for (let n = 0; n < e; n++) this.records[t++] = this._createObjectRecord(this.docs[n], n);
		this.records.length = t, this.norm.clear();
	}
	add(e, t) {
		if (!Number.isInteger(t) || t < 0) throw Error(ds);
		if (N(e)) {
			let n = this._createStringRecord(e, t);
			return n && this.records.push(n), n;
		}
		let n = this._createObjectRecord(e, t);
		return this.records.push(n), n;
	}
	removeAt(e) {
		if (!Number.isInteger(e) || e < 0) throw Error(ds);
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
		return !ss(e) || cs(e) ? null : {
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
			if (ss(i)) {
				if (es(i)) {
					let e = [];
					for (let t = 0, n = i.length; t < n; t += 1) {
						let n = i[t];
						if (ss(n)) {
							if (N(n)) {
								if (!cs(n)) {
									let r = {
										v: n,
										i: t,
										n: this.norm.get(n)
									};
									e.push(r);
								}
							} else if (ss(n.v)) {
								let t = N(n.v) ? n.v : ns(n.v);
								if (!cs(t)) {
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
				} else if (N(i) && !cs(i)) {
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
function As(e, t, { getFn: n = P.getFn, fieldNormWeight: r = P.fieldNormWeight } = {}) {
	let i = new ks({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(ys)), i.setSources(t), i.create(), i;
}
function js(e, { getFn: t = P.getFn, fieldNormWeight: n = P.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new ks({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function Ms(e = [], t = P.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
function Ns(e, t, n, { location: r = P.location, distance: i = P.distance, threshold: a = P.threshold, findAllMatches: o = P.findAllMatches, minMatchCharLength: s = P.minMatchCharLength, includeMatches: c = P.includeMatches, ignoreLocation: l = P.ignoreLocation } = {}) {
	if (t.length > 32) throw Error(ps(32));
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
	let ee = {
		isMatch: m >= 0,
		score: Math.max(.001, b)
	};
	if (g) {
		let e = Ms(_, s);
		e.length ? c && (ee.indices = e) : ee.isMatch = !1;
	}
	return ee;
}
function Ps(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
function Fs(e) {
	if (e.length <= 1) return e;
	e.sort((e, t) => e[0] - t[0] || e[1] - t[1]);
	let t = [e[0]];
	for (let n = 1, r = e.length; n < r; n += 1) {
		let r = t[t.length - 1], i = e[n];
		i[0] <= r[1] + 1 ? r[1] = Math.max(r[1], i[1]) : t.push(i);
	}
	return t;
}
var Is = {
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
}, Ls = RegExp("[" + Object.keys(Is).join("") + "]", "g"), Rs = typeof String.prototype.normalize == "function" ? (e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(Ls, (e) => Is[e]) : (e) => e, zs = class {
	constructor(e, { location: t = P.location, threshold: n = P.threshold, distance: r = P.distance, includeMatches: i = P.includeMatches, findAllMatches: a = P.findAllMatches, minMatchCharLength: o = P.minMatchCharLength, isCaseSensitive: s = P.isCaseSensitive, ignoreDiacritics: c = P.ignoreDiacritics, ignoreLocation: l = P.ignoreLocation } = {}) {
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
		}, e = s ? e : e.toLowerCase(), e = c ? Rs(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
		let u = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: Ps(e),
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
		if (e = t ? e : e.toLowerCase(), e = n ? Rs(e) : e, this.pattern === e) {
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
			let { isMatch: m, score: h, indices: g } = Ns(e, t, n, {
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
		return f && r && (p.indices = Fs(u)), p;
	}
}, Bs = /* @__PURE__ */ new Set(["fuzzy", "include"]);
function Vs(e) {
	return e.startsWith("inverse");
}
var Hs = [
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
			let n = new zs(e, {
				location: t.location ?? P.location,
				threshold: t.threshold ?? P.threshold,
				distance: t.distance ?? P.distance,
				includeMatches: t.includeMatches ?? P.includeMatches,
				findAllMatches: t.findAllMatches ?? P.findAllMatches,
				minMatchCharLength: t.minMatchCharLength ?? P.minMatchCharLength,
				isCaseSensitive: t.isCaseSensitive ?? P.isCaseSensitive,
				ignoreDiacritics: t.ignoreDiacritics ?? P.ignoreDiacritics,
				ignoreLocation: t.ignoreLocation ?? P.ignoreLocation
			});
			return {
				type: "fuzzy",
				search(e) {
					return n.searchIn(e);
				}
			};
		}
	}
], Us = Hs.length, Ws = "\0", Gs = "|";
function Ks(e) {
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
function qs(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
function Js(e, t = {}) {
	return e.replace(/\\\|/g, Ws).split(Gs).map((e) => {
		let n = Ks(e.replace(/\u0000/g, "|").trim()).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < Us;) {
				let e = Hs[o], n = qs(i, e.multiRegex);
				n && (r.push(e.create(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < Us;) {
				let e = Hs[o], n = qs(i, e.singleRegex);
				if (n) {
					r.push(e.create(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var Ys = class {
	constructor(e, { isCaseSensitive: t = P.isCaseSensitive, ignoreDiacritics: n = P.ignoreDiacritics, includeMatches: r = P.includeMatches, minMatchCharLength: i = P.minMatchCharLength, ignoreLocation: a = P.ignoreLocation, findAllMatches: o = P.findAllMatches, location: s = P.location, threshold: c = P.threshold, distance: l = P.distance } = {}) {
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
		}, e = t ? e : e.toLowerCase(), e = n ? Rs(e) : e, this.pattern = e, this.query = Js(this.pattern, this.options);
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
		e = r ? e : e.toLowerCase(), e = i ? Rs(e) : e;
		let a = 0, o = [], s = 0, c = !1;
		for (let r = 0, i = t.length; r < i; r += 1) {
			let i = t[r];
			o.length = 0, a = 0, c = !1;
			for (let t = 0, r = i.length; t < r; t += 1) {
				let r = i[t], { isMatch: l, indices: u, score: d } = r.search(e);
				if (l) a += 1, s += d, Vs(r.type) && (c = !0), n && (Bs.has(r.type) ? o.push(...u) : o.push(u));
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
				return c && (e.hasInverse = !0), n && (e.indices = Fs(o)), e;
			}
		}
		return {
			isMatch: !1,
			score: 1
		};
	}
}, Xs = [];
function Zs(...e) {
	Xs.push(...e);
}
function Qs(e, t) {
	for (let n = 0, r = Xs.length; n < r; n += 1) {
		let r = Xs[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new zs(e, t);
}
var $s = {
	AND: "$and",
	OR: "$or"
}, ec = {
	PATH: "$path",
	PATTERN: "$val"
}, tc = (e) => !!(e[$s.AND] || e[$s.OR]), nc = (e) => !!e[ec.PATH], rc = (e) => !es(e) && as(e) && !tc(e), ic = (e) => ({ [$s.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function ac(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		if (N(e)) {
			let r = {
				keyId: null,
				pattern: e
			};
			return n && (r.searcher = Qs(e, t)), r;
		}
		let i = Object.keys(e), a = nc(e);
		if (!a && i.length > 1 && !tc(e)) return r(ic(e));
		if (rc(e)) {
			let r = a ? e[ec.PATH] : i[0], o = a ? e[ec.PATTERN] : e[r];
			if (!N(o)) throw Error(fs(r));
			let s = {
				keyId: xs(r),
				pattern: o
			};
			return n && (s.searcher = Qs(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			es(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return tc(e) || (e = ic(e)), r(e);
}
function oc(e, { ignoreFieldNorm: t = P.ignoreFieldNorm }) {
	let n = 1;
	return e.forEach(({ key: e, norm: r, score: i }) => {
		let a = e ? e.weight : null;
		n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
	}), n;
}
function sc(e, { ignoreFieldNorm: t = P.ignoreFieldNorm }) {
	e.forEach((e) => {
		e.score = oc(e.matches, { ignoreFieldNorm: t });
	});
}
var cc = class {
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
function lc(e) {
	let t = [];
	return e.matches.forEach((e) => {
		if (!ss(e.indices) || !e.indices.length) return;
		let n = {
			indices: e.indices,
			value: e.value
		};
		e.key && (n.key = e.key.id), e.idx > -1 && (n.refIndex = e.idx), t.push(n);
	}), t;
}
function uc(e, t, { includeMatches: n = P.includeMatches, includeScore: r = P.includeScore } = {}) {
	return e.map((e) => {
		let { idx: i } = e, a = {
			item: t[i],
			refIndex: i
		};
		return n && (a.matches = lc(e)), r && (a.score = e.score), a;
	});
}
var dc = /[\p{L}\p{M}\p{N}_]+/gu, fc = /* @__PURE__ */ new WeakSet();
function pc(e) {
	fc.has(e) || (fc.add(e), console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`));
}
function mc(e) {
	if (typeof e == "function") {
		let t = !1;
		return (n) => {
			let r = e(n);
			if (!t && (t = !0, !Array.isArray(r) || r.some((e) => typeof e != "string"))) throw Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(r) ? "array containing non-strings" : typeof r}.`);
			return r;
		};
	}
	return e instanceof RegExp ? (e.global || pc(e), (t) => t.match(e) || []) : (e) => e.match(dc) || [];
}
function hc({ isCaseSensitive: e = !1, ignoreDiacritics: t = !1, tokenize: n } = {}) {
	let r = mc(n);
	return { tokenize(n) {
		return e || (n = n.toLowerCase()), t && (n = Rs(n)), r(n);
	} };
}
var gc = class {
	static condition(e, t) {
		return t.useTokenSearch;
	}
	constructor(e, t) {
		this.options = t, this.analyzer = hc({
			isCaseSensitive: t.isCaseSensitive,
			ignoreDiacritics: t.ignoreDiacritics,
			tokenize: t.tokenize
		});
		let n = this.analyzer.tokenize(e), { df: r, fieldCount: i } = t._invertedIndex;
		this.termSearchers = [], this.idfWeights = [];
		for (let e of n) {
			this.termSearchers.push(new zs(e, {
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
		return this.options.includeMatches && t.length && (c.indices = Fs(t)), this.combineAll && (this.useMask ? c.matchedMask = a : c.matchedTerms = o, c.termCount = this.numTerms), c;
	}
};
function _c(e, t, n, r) {
	let i = r.tokenize(t);
	if (!i.length) return;
	e.fieldCount++, e.docFieldCount.set(n, (e.docFieldCount.get(n) || 0) + 1);
	let a = new Set(i), o = e.docTermFieldHits.get(n);
	o || (o = /* @__PURE__ */ new Map(), e.docTermFieldHits.set(n, o));
	for (let t of a) o.set(t, (o.get(t) || 0) + 1), e.df.set(t, (e.df.get(t) || 0) + 1);
}
function vc(e, t, n, r) {
	let { i, v: a, $: o } = t;
	if (a !== void 0) _c(e, a, i, r);
	else if (o) for (let t = 0; t < n; t++) {
		let n = o[t];
		if (n) {
			if (Array.isArray(n)) for (let t of n) _c(e, t.v, i, r);
			else _c(e, n.v, i, r);
		}
	}
}
function yc(e, t, n) {
	let r = {
		fieldCount: 0,
		df: /* @__PURE__ */ new Map(),
		docFieldCount: /* @__PURE__ */ new Map(),
		docTermFieldHits: /* @__PURE__ */ new Map()
	};
	for (let i of e) vc(r, i, t, n);
	return r;
}
function bc(e, t, n, r) {
	vc(e, t, n, r);
}
function xc(e, t) {
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
function Sc(e, t) {
	if (t.length === 0) return;
	let n = Array.from(new Set(t)).sort((e, t) => e - t);
	for (let t of n) xc(e, t);
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
var Cc = class {
	constructor(e, t, n) {
		this.options = {
			...P,
			...t
		}, this.options.useExtendedSearch, this.options.useTokenSearch, this._keyStore = new vs(this.options.keys), this._docs = e, this._myIndex = null, this._invertedIndex = null, this.setCollection(e, n), this._lastQuery = null, this._lastSearcher = null;
	}
	_getSearcher(e) {
		if (this._lastQuery === e) return this._lastSearcher;
		let t = Qs(e, this._invertedIndex ? {
			...this.options,
			_invertedIndex: this._invertedIndex
		} : this.options);
		return this._lastQuery = e, this._lastSearcher = t, t;
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof ks)) throw Error(us);
		if (this._myIndex = t || As(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		}), this.options.useTokenSearch) {
			let e = hc({
				isCaseSensitive: this.options.isCaseSensitive,
				ignoreDiacritics: this.options.ignoreDiacritics,
				tokenize: this.options.tokenize
			});
			this._invertedIndex = yc(this._myIndex.records, this._myIndex.keys.length, e);
		}
		this._invalidateSearcherCache();
	}
	add(e) {
		if (!ss(e)) return;
		this._docs.push(e);
		let t = this._myIndex.add(e, this._docs.length - 1);
		if (this._invertedIndex && t) {
			let e = hc({
				isCaseSensitive: this.options.isCaseSensitive,
				ignoreDiacritics: this.options.ignoreDiacritics,
				tokenize: this.options.tokenize
			});
			bc(this._invertedIndex, t, this._myIndex.keys.length, e);
		}
		this._invalidateSearcherCache();
	}
	remove(e = () => !1) {
		let t = [], n = [];
		for (let r = 0, i = this._docs.length; r < i; r += 1) e(this._docs[r], r) && (t.push(this._docs[r]), n.push(r));
		if (n.length) {
			this._invertedIndex && Sc(this._invertedIndex, n);
			let e = new Set(n);
			this._docs = this._docs.filter((t, n) => !e.has(n)), this._myIndex.removeAll(n), this._invalidateSearcherCache();
		}
		return t;
	}
	removeAt(e) {
		if (!Number.isInteger(e) || e < 0 || e >= this._docs.length) throw Error(ds);
		this._invertedIndex && Sc(this._invertedIndex, [e]);
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
		if (N(e) && !e.trim()) {
			let e = this._docs.map((e, t) => ({
				item: e,
				refIndex: t
			}));
			return rs(n) && n > -1 && (e = e.slice(0, n)), e;
		}
		let c = a && rs(n) && n > 0 && N(e), l = o, u = (e, t) => l(e, t) || e.idx - t.idx, d;
		if (c) {
			let t = new cc(n, u);
			N(this._docs[0]) ? this._searchStringList(e, {
				heap: t,
				ignoreFieldNorm: s
			}) : this._searchObjectList(e, {
				heap: t,
				ignoreFieldNorm: s
			}), d = t.extractSorted();
		} else d = N(e) ? N(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e), sc(d, { ignoreFieldNorm: s }), a && d.sort(N(e) ? u : l), rs(n) && n > -1 && (d = d.slice(0, n));
		return uc(d, this._docs, {
			includeMatches: r,
			includeScore: i
		});
	}
	_searchStringList(e, { heap: t, ignoreFieldNorm: n } = {}) {
		let r = this._getSearcher(e), i = this.options.useTokenSearch && this.options.tokenMatch === "all", { records: a } = this._myIndex, o = t ? null : [];
		return a.forEach(({ v: e, i: a, n: s }) => {
			if (!ss(e)) return;
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
					t ? (r.score = oc(r.matches, { ignoreFieldNorm: n }), t.insert(r)) : o.push(r);
				}
			}
		}), o;
	}
	_searchLogical(e) {
		let t = ac(e, this.options), n = this._normalizedKeys(), r = (e, t, i) => {
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
				else if (o === $s.AND) return [];
			}
			return s;
		}, i = this._myIndex.records, a = /* @__PURE__ */ new Map(), o = [];
		return i.forEach(({ $: e, i: n }) => {
			if (ss(e)) {
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
			if (!ss(e)) return;
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
				t ? (r.score = oc(r.matches, { ignoreFieldNorm: n }), t.insert(r)) : s.push(r);
			}
		}), s;
	}
	_findMatches({ key: e, value: t, searcher: n }) {
		if (!ss(t)) return [];
		let r = [];
		if (es(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!ss(t)) return;
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
Cc.version = "7.5.0", Cc.createIndex = As, Cc.parseIndex = js, Cc.config = P, Cc.match = function(e, t, n) {
	if (n && n.useTokenSearch) throw Error(gs);
	return Qs(e, {
		...P,
		...n
	}).searchIn(t);
}, Cc.parseQuery = ac, Zs(Ys), Zs(gc), Cc.use = function(...e) {
	e.forEach((e) => Zs(e));
};
// src/shared/components/IconPicker/index.tsx
var wc = new Cc(/* @__PURE__ */ "10k.10mp.11mp.123.12mp.13mp.14mp.15mp.16mp.17mp.18_up_rating.18mp.19mp.1k.1k_plus.1x_mobiledata.20mp.21mp.22mp.23mp.24mp.2k.2k_plus.2mp.30fps.30fps_select.360.3d_rotation.3g_mobiledata.3k.3k_plus.3mp.3p.4g_mobiledata.4g_plus_mobiledata.4k.4k_plus.4mp.5g.5k.5k_plus.5mp.60fps.60fps_select.6_ft_apart.6k.6k_plus.6mp.7k.7k_plus.7mp.8k.8k_plus.8mp.9k.9k_plus.9mp.abc.ac_unit.access_alarm.access_alarms.access_time.access_time_filled.accessibility.accessibility_new.accessible.accessible_forward.account_balance.account_balance_wallet.account_box.account_circle.account_tree.ad_units.adb.add.add_a_photo.add_alarm.add_alert.add_box.add_business.add_card.add_chart.add_circle.add_circle_outline.add_comment.add_home.add_home_work.add_ic_call.add_link.add_location.add_location_alt.add_moderator.add_photo_alternate.add_reaction.add_road.add_shopping_cart.add_task.add_to_drive.add_to_home_screen.add_to_photos.add_to_queue.addchart.adf_scanner.adjust.admin_panel_settings.ads_click.agriculture.air.airline_seat_flat.airline_seat_flat_angled.airline_seat_individual_suite.airline_seat_legroom_extra.airline_seat_legroom_normal.airline_seat_legroom_reduced.airline_seat_recline_extra.airline_seat_recline_normal.airline_stops.airlines.airplane_ticket.airplanemode_active.airplanemode_inactive.airplay.airport_shuttle.alarm.alarm_add.alarm_off.alarm_on.album.align_horizontal_center.align_horizontal_left.align_horizontal_right.align_vertical_bottom.align_vertical_center.align_vertical_top.all_inbox.all_inclusive.all_out.alt_route.alternate_email.analytics.anchor.android.animation.announcement.aod.apartment.api.app_blocking.app_registration.app_settings_alt.app_shortcut.approval.apps.apps_outage.architecture.archive.area_chart.arrow_back.arrow_back_ios.arrow_back_ios_new.arrow_circle_down.arrow_circle_left.arrow_circle_right.arrow_circle_up.arrow_downward.arrow_drop_down.arrow_drop_down_circle.arrow_drop_up.arrow_forward.arrow_forward_ios.arrow_left.arrow_outward.arrow_right.arrow_right_alt.arrow_upward.art_track.article.aspect_ratio.assessment.assignment.assignment_ind.assignment_late.assignment_return.assignment_returned.assignment_turned_in.assist_walker.assistant.assistant_direction.assistant_photo.assured_workload.atm.attach_email.attach_file.attach_money.attachment.attractions.attribution.audio_file.audiotrack.auto_awesome.auto_awesome_mosaic.auto_awesome_motion.auto_delete.auto_fix_high.auto_fix_normal.auto_fix_off.auto_graph.auto_mode.auto_stories.autofps_select.autorenew.av_timer.baby_changing_station.back_hand.backpack.backspace.backup.backup_table.badge.bakery_dining.balance.balcony.ballot.bar_chart.batch_prediction.bathroom.bathtub.battery_0_bar.battery_1_bar.battery_2_bar.battery_3_bar.battery_4_bar.battery_5_bar.battery_6_bar.battery_alert.battery_charging_full.battery_full.battery_saver.battery_std.battery_unknown.beach_access.bed.bedroom_baby.bedroom_child.bedroom_parent.bedtime.bedtime_off.beenhere.bento.bike_scooter.biotech.blender.blind.blinds.blinds_closed.block.bloodtype.bluetooth.bluetooth_audio.bluetooth_connected.bluetooth_disabled.bluetooth_drive.bluetooth_searching.blur_circular.blur_linear.blur_off.blur_on.bolt.book.book_online.bookmark.bookmark_add.bookmark_added.bookmark_border.bookmark_remove.bookmarks.border_all.border_bottom.border_clear.border_color.border_horizontal.border_inner.border_left.border_outer.border_right.border_style.border_top.border_vertical.boy.branding_watermark.breakfast_dining.brightness_1.brightness_2.brightness_3.brightness_4.brightness_5.brightness_6.brightness_7.brightness_auto.brightness_high.brightness_low.brightness_medium.broadcast_on_home.broadcast_on_personal.broken_image.browse_gallery.browser_not_supported.browser_updated.brunch_dining.brush.bubble_chart.bug_report.build.build_circle.bungalow.burst_mode.bus_alert.business.business_center.cabin.cable.cached.cake.calculate.calendar_month.calendar_today.calendar_view_day.calendar_view_month.calendar_view_week.call.call_end.call_made.call_merge.call_missed.call_missed_outgoing.call_received.call_split.call_to_action.camera.camera_alt.camera_enhance.camera_front.camera_indoor.camera_outdoor.camera_rear.camera_roll.cameraswitch.campaign.cancel.cancel_presentation.cancel_schedule_send.candlestick_chart.car_crash.car_rental.car_repair.card_giftcard.card_membership.card_travel.carpenter.cases.casino.cast.cast_connected.cast_for_education.castle.catching_pokemon.category.celebration.cell_tower.cell_wifi.center_focus_strong.center_focus_weak.chair.chair_alt.chalet.change_circle.change_history.charging_station.chat.chat_bubble.chat_bubble_outline.check.check_box.check_box_outline_blank.check_circle.check_circle_outline.checklist.checklist_rtl.checkroom.chevron_left.chevron_right.child_care.child_friendly.chrome_reader_mode.church.circle.circle_notifications.class.clean_hands.cleaning_services.clear.clear_all.close.close_fullscreen.closed_caption.closed_caption_disabled.closed_caption_off.cloud.cloud_circle.cloud_done.cloud_download.cloud_off.cloud_queue.cloud_sync.cloud_upload.co2.co_present.code.code_off.coffee.coffee_maker.collections.collections_bookmark.color_lens.colorize.comment.comment_bank.comments_disabled.commit.commute.compare.compare_arrows.compass_calibration.compost.compress.computer.confirmation_number.connect_without_contact.connected_tv.connecting_airports.construction.contact_emergency.contact_mail.contact_page.contact_phone.contact_support.contactless.contacts.content_copy.content_cut.content_paste.content_paste_go.content_paste_off.content_paste_search.contrast.control_camera.control_point.control_point_duplicate.cookie.copy_all.copyright.coronavirus.corporate_fare.cottage.countertops.create.create_new_folder.credit_card.credit_card_off.credit_score.crib.crisis_alert.crop.crop_16_9.crop_3_2.crop_5_4.crop_7_5.crop_din.crop_free.crop_landscape.crop_original.crop_portrait.crop_rotate.crop_square.cruelty_free.css.currency_bitcoin.currency_exchange.currency_franc.currency_lira.currency_pound.currency_ruble.currency_rupee.currency_yen.currency_yuan.curtains.curtains_closed.cyclone.dangerous.dark_mode.dashboard.dashboard_customize.data_array.data_exploration.data_object.data_saver_off.data_saver_on.data_thresholding.data_usage.dataset.dataset_linked.date_range.deblur.deck.dehaze.delete.delete_forever.delete_outline.delete_sweep.delivery_dining.density_large.density_medium.density_small.departure_board.description.deselect.design_services.desk.desktop_access_disabled.desktop_mac.desktop_windows.details.developer_board.developer_board_off.developer_mode.device_hub.device_thermostat.device_unknown.devices.devices_fold.devices_other.dialer_sip.dialpad.diamond.difference.dining.dinner_dining.directions.directions_bike.directions_boat.directions_boat_filled.directions_bus.directions_bus_filled.directions_car.directions_car_filled.directions_off.directions_railway.directions_railway_filled.directions_run.directions_subway.directions_subway_filled.directions_transit.directions_transit_filled.directions_walk.dirty_lens.disabled_by_default.disabled_visible.disc_full.discount.display_settings.diversity_1.diversity_2.diversity_3.dns.do_disturb.do_disturb_alt.do_disturb_off.do_disturb_on.do_not_disturb.do_not_disturb_alt.do_not_disturb_off.do_not_disturb_on.do_not_disturb_on_total_silence.do_not_step.do_not_touch.dock.document_scanner.domain.domain_add.domain_disabled.domain_verification.done.done_all.done_outline.donut_large.donut_small.door_back.door_front.door_sliding.doorbell.double_arrow.downhill_skiing.download.download_done.download_for_offline.downloading.drafts.drag_handle.drag_indicator.draw.drive_eta.drive_file_move.drive_file_move_rtl.drive_file_rename_outline.drive_folder_upload.dry.dry_cleaning.duo.dvr.dynamic_feed.dynamic_form.e_mobiledata.earbuds.earbuds_battery.east.edgesensor_high.edgesensor_low.edit.edit_attributes.edit_calendar.edit_location.edit_location_alt.edit_note.edit_notifications.edit_off.edit_road.egg.egg_alt.eject.elderly.elderly_woman.electric_bike.electric_bolt.electric_car.electric_meter.electric_moped.electric_rickshaw.electric_scooter.electrical_services.elevator.email.emergency.emergency_recording.emergency_share.emoji_emotions.emoji_events.emoji_food_beverage.emoji_nature.emoji_objects.emoji_people.emoji_symbols.emoji_transportation.energy_savings_leaf.engineering.enhanced_encryption.equalizer.error.error_outline.escalator.escalator_warning.euro.euro_symbol.ev_station.event.event_available.event_busy.event_note.event_repeat.event_seat.exit_to_app.expand.expand_circle_down.expand_less.expand_more.explicit.explore.explore_off.exposure.exposure_neg_1.exposure_neg_2.exposure_plus_1.exposure_plus_2.exposure_zero.extension.extension_off.face.face_2.face_3.face_4.face_5.face_6.face_retouching_natural.face_retouching_off.fact_check.factory.family_restroom.fast_forward.fast_rewind.fastfood.favorite.favorite_border.fax.featured_play_list.featured_video.feed.feedback.female.fence.festival.fiber_dvr.fiber_manual_record.fiber_new.fiber_pin.fiber_smart_record.file_copy.file_download.file_download_done.file_download_off.file_open.file_present.file_upload.filter.filter_1.filter_2.filter_3.filter_4.filter_5.filter_6.filter_7.filter_8.filter_9.filter_9_plus.filter_alt.filter_alt_off.filter_b_and_w.filter_center_focus.filter_drama.filter_frames.filter_hdr.filter_list.filter_list_off.filter_none.filter_tilt_shift.filter_vintage.find_in_page.find_replace.fingerprint.fire_extinguisher.fire_hydrant_alt.fire_truck.fireplace.first_page.fit_screen.fitbit.fitness_center.flag.flag_circle.flaky.flare.flash_auto.flash_off.flash_on.flashlight_off.flashlight_on.flatware.flight.flight_class.flight_land.flight_takeoff.flip.flip_camera_android.flip_camera_ios.flip_to_back.flip_to_front.flood.fluorescent.flutter_dash.fmd_bad.fmd_good.folder.folder_copy.folder_delete.folder_off.folder_open.folder_shared.folder_special.folder_zip.follow_the_signs.font_download.font_download_off.food_bank.forest.fork_left.fork_right.format_align_center.format_align_justify.format_align_left.format_align_right.format_bold.format_clear.format_color_fill.format_color_reset.format_color_text.format_indent_decrease.format_indent_increase.format_italic.format_line_spacing.format_list_bulleted.format_list_numbered.format_list_numbered_rtl.format_overline.format_paint.format_quote.format_shapes.format_size.format_strikethrough.format_textdirection_l_to_r.format_textdirection_r_to_l.format_underlined.fort.forum.forward.forward_10.forward_30.forward_5.forward_to_inbox.foundation.free_breakfast.free_cancellation.front_hand.fullscreen.fullscreen_exit.functions.g_mobiledata.g_translate.gamepad.games.garage.gas_meter.gavel.generating_tokens.gesture.get_app.gif.gif_box.girl.gite.golf_course.gpp_bad.gpp_good.gpp_maybe.gps_fixed.gps_not_fixed.gps_off.grade.gradient.grading.grain.graphic_eq.grass.grid_3x3.grid_4x4.grid_goldenratio.grid_off.grid_on.grid_view.group.group_add.group_off.group_remove.group_work.groups.groups_2.groups_3.h_mobiledata.h_plus_mobiledata.hail.handshake.handyman.hardware.hd.hdr_auto.hdr_auto_select.hdr_enhanced_select.hdr_off.hdr_off_select.hdr_on.hdr_on_select.hdr_plus.hdr_strong.hdr_weak.headphones.headphones_battery.headset.headset_mic.headset_off.healing.health_and_safety.hearing.hearing_disabled.heart_broken.heat_pump.height.help.help_center.help_outline.hevc.hexagon.hide_image.hide_source.high_quality.highlight.highlight_alt.highlight_off.hiking.history.history_edu.history_toggle_off.hive.hls.hls_off.holiday_village.home.home_max.home_mini.home_repair_service.home_work.horizontal_distribute.horizontal_rule.horizontal_split.hot_tub.hotel.hotel_class.hourglass_bottom.hourglass_disabled.hourglass_empty.hourglass_full.hourglass_top.house.house_siding.houseboat.how_to_reg.how_to_vote.html.http.https.hub.hvac.ice_skating.icecream.image.image_aspect_ratio.image_not_supported.image_search.imagesearch_roller.import_contacts.import_export.important_devices.inbox.incomplete_circle.indeterminate_check_box.info.input.insert_chart.insert_chart_outlined.insert_comment.insert_drive_file.insert_emoticon.insert_invitation.insert_link.insert_page_break.insert_photo.insights.install_desktop.install_mobile.integration_instructions.interests.interpreter_mode.inventory.inventory_2.invert_colors.invert_colors_off.ios_share.iron.iso.javascript.join_full.join_inner.join_left.join_right.kayaking.kebab_dining.key.key_off.keyboard.keyboard_alt.keyboard_arrow_down.keyboard_arrow_left.keyboard_arrow_right.keyboard_arrow_up.keyboard_backspace.keyboard_capslock.keyboard_command_key.keyboard_control_key.keyboard_double_arrow_down.keyboard_double_arrow_left.keyboard_double_arrow_right.keyboard_double_arrow_up.keyboard_hide.keyboard_option_key.keyboard_return.keyboard_tab.keyboard_voice.king_bed.kitchen.kitesurfing.label.label_important.label_off.lan.landscape.landslide.language.laptop.laptop_chromebook.laptop_mac.laptop_windows.last_page.launch.layers.layers_clear.leaderboard.leak_add.leak_remove.legend_toggle.lens.lens_blur.library_add.library_add_check.library_books.library_music.light.light_mode.lightbulb.lightbulb_circle.line_axis.line_style.line_weight.linear_scale.link.link_off.linked_camera.liquor.list.list_alt.live_help.live_tv.living.local_activity.local_airport.local_atm.local_bar.local_cafe.local_car_wash.local_convenience_store.local_dining.local_drink.local_fire_department.local_florist.local_gas_station.local_grocery_store.local_hospital.local_hotel.local_laundry_service.local_library.local_mall.local_movies.local_offer.local_parking.local_pharmacy.local_phone.local_pizza.local_play.local_police.local_post_office.local_printshop.local_see.local_shipping.local_taxi.location_city.location_disabled.location_off.location_on.location_searching.lock.lock_clock.lock_open.lock_person.lock_reset.login.logo_dev.logout.looks.looks_3.looks_4.looks_5.looks_6.looks_one.looks_two.loop.loupe.low_priority.loyalty.lte_mobiledata.lte_plus_mobiledata.luggage.lunch_dining.lyrics.macro_off.mail.mail_lock.mail_outline.male.man.man_2.man_3.man_4.manage_accounts.manage_history.manage_search.map.maps_home_work.maps_ugc.margin.mark_as_unread.mark_chat_read.mark_chat_unread.mark_email_read.mark_email_unread.mark_unread_chat_alt.markunread.markunread_mailbox.masks.maximize.media_bluetooth_off.media_bluetooth_on.mediation.medical_information.medical_services.medication.medication_liquid.meeting_room.memory.menu.menu_book.menu_open.merge.merge_type.message.mic.mic_external_off.mic_external_on.mic_none.mic_off.microwave.military_tech.minimize.minor_crash.miscellaneous_services.missed_video_call.mms.mobile_friendly.mobile_off.mobile_screen_share.mobiledata_off.mode.mode_comment.mode_edit.mode_edit_outline.mode_fan_off.mode_night.mode_of_travel.mode_standby.model_training.monetization_on.money.money_off.money_off_csred.monitor.monitor_heart.monitor_weight.monochrome_photos.mood.mood_bad.moped.more.more_horiz.more_time.more_vert.mosque.motion_photos_auto.motion_photos_off.motion_photos_on.motion_photos_pause.motion_photos_paused.mouse.move_down.move_to_inbox.move_up.movie.movie_creation.movie_filter.moving.mp.multiline_chart.multiple_stop.museum.music_note.music_off.music_video.my_location.nat.nature.nature_people.navigate_before.navigate_next.navigation.near_me.near_me_disabled.nearby_error.nearby_off.nest_cam_wired_stand.network_cell.network_check.network_locked.network_ping.network_wifi.network_wifi_1_bar.network_wifi_2_bar.network_wifi_3_bar.new_label.new_releases.newspaper.next_plan.next_week.nfc.night_shelter.nightlife.nightlight.nightlight_round.nights_stay.no_accounts.no_adult_content.no_backpack.no_cell.no_crash.no_drinks.no_encryption.no_encryption_gmailerrorred.no_flash.no_food.no_luggage.no_meals.no_meeting_room.no_photography.no_sim.no_stroller.no_transfer.noise_aware.noise_control_off.nordic_walking.north.north_east.north_west.not_accessible.not_interested.not_listed_location.not_started.note.note_add.note_alt.notes.notification_add.notification_important.notifications.notifications_active.notifications_none.notifications_off.notifications_paused.numbers.offline_bolt.offline_pin.offline_share.oil_barrel.on_device_training.ondemand_video.online_prediction.opacity.open_in_browser.open_in_full.open_in_new.open_in_new_off.open_with.other_houses.outbound.outbox.outdoor_grill.outlet.outlined_flag.output.padding.pages.pageview.paid.palette.pan_tool.pan_tool_alt.panorama.panorama_fish_eye.panorama_horizontal.panorama_horizontal_select.panorama_photosphere.panorama_photosphere_select.panorama_vertical.panorama_vertical_select.panorama_wide_angle.panorama_wide_angle_select.paragliding.park.party_mode.password.pattern.pause.pause_circle.pause_circle_filled.pause_circle_outline.pause_presentation.payment.payments.pedal_bike.pending.pending_actions.pentagon.people.people_alt.people_outline.percent.perm_camera_mic.perm_contact_calendar.perm_data_setting.perm_device_information.perm_identity.perm_media.perm_phone_msg.perm_scan_wifi.person.person_2.person_3.person_4.person_add.person_add_alt.person_add_alt_1.person_add_disabled.person_off.person_outline.person_pin.person_pin_circle.person_remove.person_remove_alt_1.person_search.personal_injury.personal_video.pest_control.pest_control_rodent.pets.phishing.phone.phone_android.phone_bluetooth_speaker.phone_callback.phone_disabled.phone_enabled.phone_forwarded.phone_iphone.phone_locked.phone_missed.phone_paused.phonelink.phonelink_erase.phonelink_lock.phonelink_off.phonelink_ring.phonelink_setup.photo.photo_album.photo_camera.photo_camera_back.photo_camera_front.photo_filter.photo_library.photo_size_select_actual.photo_size_select_large.photo_size_select_small.php.piano.piano_off.picture_as_pdf.picture_in_picture.picture_in_picture_alt.pie_chart.pie_chart_outline.pin.pin_drop.pin_end.pin_invoke.pinch.pivot_table_chart.pix.place.plagiarism.play_arrow.play_circle.play_circle_filled.play_circle_outline.play_disabled.play_for_work.play_lesson.playlist_add.playlist_add_check.playlist_add_check_circle.playlist_add_circle.playlist_play.playlist_remove.plumbing.plus_one.podcasts.point_of_sale.policy.poll.polyline.polymer.pool.portable_wifi_off.portrait.post_add.power.power_input.power_off.power_settings_new.precision_manufacturing.pregnant_woman.present_to_all.preview.price_change.price_check.print.print_disabled.priority_high.privacy_tip.private_connectivity.production_quantity_limits.propane.propane_tank.psychology.psychology_alt.public.public_off.publish.published_with_changes.punch_clock.push_pin.qr_code.qr_code_2.qr_code_scanner.query_builder.query_stats.question_answer.question_mark.queue.queue_music.queue_play_next.quickreply.quiz.r_mobiledata.radar.radio.radio_button_checked.radio_button_unchecked.railway_alert.ramen_dining.ramp_left.ramp_right.rate_review.raw_off.raw_on.read_more.real_estate_agent.receipt.receipt_long.recent_actors.recommend.record_voice_over.rectangle.recycling.redeem.redo.reduce_capacity.refresh.remember_me.remove.remove_circle.remove_circle_outline.remove_done.remove_from_queue.remove_moderator.remove_red_eye.remove_road.remove_shopping_cart.reorder.repartition.repeat.repeat_on.repeat_one.repeat_one_on.replay.replay_10.replay_30.replay_5.replay_circle_filled.reply.reply_all.report.report_gmailerrorred.report_off.report_problem.request_page.request_quote.reset_tv.restart_alt.restaurant.restaurant_menu.restore.restore_from_trash.restore_page.reviews.rice_bowl.ring_volume.rocket.rocket_launch.roller_shades.roller_shades_closed.roller_skating.roofing.room.room_preferences.room_service.rotate_90_degrees_ccw.rotate_90_degrees_cw.rotate_left.rotate_right.roundabout_left.roundabout_right.rounded_corner.route.router.rowing.rss_feed.rsvp.rtt.rule.rule_folder.run_circle.running_with_errors.rv_hookup.safety_check.safety_divider.sailing.sanitizer.satellite.satellite_alt.save.save_alt.save_as.saved_search.savings.scale.scanner.scatter_plot.schedule.schedule_send.schema.school.science.score.scoreboard.screen_lock_landscape.screen_lock_portrait.screen_lock_rotation.screen_rotation.screen_rotation_alt.screen_search_desktop.screen_share.screenshot.screenshot_monitor.scuba_diving.sd.sd_card.sd_card_alert.sd_storage.search.search_off.security.security_update.security_update_good.security_update_warning.segment.select_all.self_improvement.sell.send.send_and_archive.send_time_extension.send_to_mobile.sensor_door.sensor_occupied.sensor_window.sensors.sensors_off.sentiment_dissatisfied.sentiment_neutral.sentiment_satisfied.sentiment_satisfied_alt.sentiment_very_dissatisfied.sentiment_very_satisfied.set_meal.settings.settings_accessibility.settings_applications.settings_backup_restore.settings_bluetooth.settings_brightness.settings_cell.settings_ethernet.settings_input_antenna.settings_input_component.settings_input_composite.settings_input_hdmi.settings_input_svideo.settings_overscan.settings_phone.settings_power.settings_remote.settings_suggest.settings_system_daydream.settings_voice.severe_cold.shape_line.share.share_location.shield.shield_moon.shop.shop_2.shop_two.shopping_bag.shopping_basket.shopping_cart.shopping_cart_checkout.short_text.shortcut.show_chart.shower.shuffle.shuffle_on.shutter_speed.sick.sign_language.signal_cellular_0_bar.signal_cellular_4_bar.signal_cellular_alt.signal_cellular_alt_1_bar.signal_cellular_alt_2_bar.signal_cellular_connected_no_internet_0_bar.signal_cellular_connected_no_internet_4_bar.signal_cellular_no_sim.signal_cellular_nodata.signal_cellular_null.signal_cellular_off.signal_wifi_0_bar.signal_wifi_4_bar.signal_wifi_4_bar_lock.signal_wifi_bad.signal_wifi_connected_no_internet_4.signal_wifi_off.signal_wifi_statusbar_4_bar.signal_wifi_statusbar_connected_no_internet_4.signal_wifi_statusbar_null.signpost.sim_card.sim_card_alert.sim_card_download.single_bed.sip.skateboarding.skip_next.skip_previous.sledding.slideshow.slow_motion_video.smart_button.smart_display.smart_screen.smart_toy.smartphone.smoke_free.smoking_rooms.sms.sms_failed.snippet_folder.snooze.snowboarding.snowmobile.snowshoeing.soap.social_distance.solar_power.sort.sort_by_alpha.sos.soup_kitchen.source.south.south_america.south_east.south_west.spa.space_bar.space_dashboard.spatial_audio.spatial_audio_off.spatial_tracking.speaker.speaker_group.speaker_notes.speaker_notes_off.speaker_phone.speed.spellcheck.splitscreen.spoke.sports.sports_bar.sports_baseball.sports_basketball.sports_cricket.sports_esports.sports_football.sports_golf.sports_gymnastics.sports_handball.sports_hockey.sports_kabaddi.sports_martial_arts.sports_mma.sports_motorsports.sports_rugby.sports_score.sports_soccer.sports_tennis.sports_volleyball.square.square_foot.ssid_chart.stacked_bar_chart.stacked_line_chart.stadium.stairs.star.star_border.star_border_purple500.star_half.star_outline.star_purple500.star_rate.stars.start.stay_current_landscape.stay_current_portrait.stay_primary_landscape.stay_primary_portrait.sticky_note_2.stop.stop_circle.stop_screen_share.storage.store.store_mall_directory.storefront.storm.straight.straighten.stream.streetview.strikethrough_s.stroller.style.subdirectory_arrow_left.subdirectory_arrow_right.subject.subscript.subscriptions.subtitles.subtitles_off.subway.summarize.superscript.supervised_user_circle.supervisor_account.support.support_agent.surfing.surround_sound.swap_calls.swap_horiz.swap_horizontal_circle.swap_vert.swap_vertical_circle.swipe.swipe_down.swipe_down_alt.swipe_left.swipe_left_alt.swipe_right.swipe_right_alt.swipe_up.swipe_up_alt.swipe_vertical.switch_access_shortcut.switch_access_shortcut_add.switch_account.switch_camera.switch_left.switch_right.switch_video.synagogue.sync.sync_alt.sync_disabled.sync_lock.sync_problem.system_security_update.system_security_update_good.system_security_update_warning.system_update.system_update_alt.tab.tab_unselected.table_bar.table_chart.table_restaurant.table_rows.table_view.tablet.tablet_android.tablet_mac.tag.tag_faces.takeout_dining.tap_and_play.tapas.task.task_alt.taxi_alert.temple_buddhist.temple_hindu.terminal.terrain.text_decrease.text_fields.text_format.text_increase.text_rotate_up.text_rotate_vertical.text_rotation_angledown.text_rotation_angleup.text_rotation_down.text_rotation_none.text_snippet.textsms.texture.theater_comedy.theaters.thermostat.thermostat_auto.thumb_down.thumb_down_alt.thumb_down_off_alt.thumb_up.thumb_up_alt.thumb_up_off_alt.thumbs_up_down.thunderstorm.time_to_leave.timelapse.timeline.timer.timer_10.timer_10_select.timer_3.timer_3_select.timer_off.tips_and_updates.tire_repair.title.toc.today.toggle_off.toggle_on.token.toll.tonality.topic.tornado.touch_app.tour.toys.track_changes.traffic.train.tram.transcribe.transfer_within_a_station.transform.transgender.transit_enterexit.translate.travel_explore.trending_down.trending_flat.trending_up.trip_origin.troubleshoot.try.tsunami.tty.tune.tungsten.turn_left.turn_right.turn_sharp_left.turn_sharp_right.turn_slight_left.turn_slight_right.turned_in.turned_in_not.tv.tv_off.two_wheeler.type_specimen.u_turn_left.u_turn_right.umbrella.unarchive.undo.unfold_less.unfold_less_double.unfold_more.unfold_more_double.unpublished.unsubscribe.upcoming.update.update_disabled.upgrade.upload.upload_file.usb.usb_off.vaccines.vape_free.vaping_rooms.verified.verified_user.vertical_align_bottom.vertical_align_center.vertical_align_top.vertical_distribute.vertical_shades.vertical_shades_closed.vertical_split.vibration.video_call.video_camera_back.video_camera_front.video_chat.video_file.video_label.video_library.video_settings.video_stable.videocam.videocam_off.videogame_asset.videogame_asset_off.view_agenda.view_array.view_carousel.view_column.view_comfy.view_comfy_alt.view_compact.view_compact_alt.view_cozy.view_day.view_headline.view_in_ar.view_kanban.view_list.view_module.view_quilt.view_sidebar.view_stream.view_timeline.view_week.vignette.villa.visibility.visibility_off.voice_chat.voice_over_off.voicemail.volcano.volume_down.volume_mute.volume_off.volume_up.volunteer_activism.vpn_key.vpn_key_off.vpn_lock.vrpano.wallet.wallpaper.warehouse.warning.warning_amber.wash.watch.watch_later.watch_off.water.water_damage.water_drop.waterfall_chart.waves.waving_hand.wb_auto.wb_cloudy.wb_incandescent.wb_iridescent.wb_shade.wb_sunny.wb_twilight.wc.web.web_asset.web_asset_off.web_stories.webhook.weekend.west.whatshot.wheelchair_pickup.where_to_vote.widgets.width_full.width_normal.width_wide.wifi.wifi_1_bar.wifi_2_bar.wifi_calling.wifi_calling_3.wifi_channel.wifi_find.wifi_lock.wifi_off.wifi_password.wifi_protected_setup.wifi_tethering.wifi_tethering_error.wifi_tethering_off.wind_power.window.wine_bar.woman.woman_2.work.work_history.work_off.work_outline.workspace_premium.workspaces.wrap_text.wrong_location.wysiwyg.yard.youtube_searched_for.zoom_in.zoom_in_map.zoom_out.zoom_out_map".split("."), {
	threshold: .3,
	minMatchCharLength: 2
});
function Tc({ defaultIcons: e, selectedIcon: t, onSelect: n, autoFocus: r = !1, itemAs: i = "button" }) {
	let [a, o] = (0, O.useState)(""), s = (0, O.useMemo)(() => a ? wc.search(a).map((e) => e.item) : e, [a, e]);
	return /* @__PURE__ */ (0, M.jsxs)("div", {
		className: "icon-picker",
		children: [/* @__PURE__ */ (0, M.jsx)(Xo, { children: /* @__PURE__ */ (0, M.jsx)(T.Group, {
			size: "sm",
			children: /* @__PURE__ */ (0, M.jsx)(T.Control, {
				autoFocus: r,
				type: "text",
				className: "m-0",
				placeholder: "Search icons",
				"aria-label": "Search icons",
				trailingElement: /* @__PURE__ */ (0, M.jsx)("span", {
					className: "material-icons-outlined medium text-gray-500",
					children: "search"
				}),
				value: a,
				onChange: (e) => o(e.currentTarget.value)
			})
		}) }), /* @__PURE__ */ (0, M.jsx)("div", {
			className: "icon-list d-flex flex-wrap justify-items-start",
			children: s.map((e) => /* @__PURE__ */ (0, M.jsx)(i, {
				as: i === "button" ? void 0 : "button",
				eventKey: i === "button" ? void 0 : e,
				type: "button",
				className: `icon-symbol p-2 ${e === t ? "active" : ""}`,
				title: e,
				"aria-label": e,
				"aria-pressed": e === t,
				onClick: () => n(e),
				children: /* @__PURE__ */ (0, M.jsx)("span", {
					className: "material-icons-outlined",
					"aria-hidden": "true",
					children: e
				})
			}, e))
		})]
	});
}
// src/lib/context.ts
var Ec = (0, O.createContext)(null), Dc = () => (0, O.useContext)(Ec), Oc = ({ fileTypes: e, onFileSelect: t, onError: n, onClose: r }) => {
	let [i, a] = (0, O.useState)(null), { element: o } = (0, O.useContext)(p), s = Dc(), c = (0, O.useRef)(null), l = o.getAttribute("data-usage-id");
	if ((0, O.useEffect)(() => {
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
	return u.searchParams.set("multiSelect", "false"), u.searchParams.set("embedded", "true"), e && u.searchParams.set("fileTypes", e.join(",")), u.searchParams.set("usageKey", l), /* @__PURE__ */ (0, M.jsx)(Wo, {
		title: "File Picker",
		size: "xl",
		isOpen: !0,
		className: "bg-light-200",
		onClose: r,
		footerNode: /* @__PURE__ */ (0, M.jsxs)(Ce, { children: [
			/* @__PURE__ */ (0, M.jsx)(Ce.Spacer, {}),
			/* @__PURE__ */ (0, M.jsx)(Dn, {
				variant: "tertiary",
				onClick: r,
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, M.jsx)(Dn, {
				disabled: !i,
				onClick: async () => {
					await t(i);
				},
				children: "Use Selected File"
			})
		] }),
		isOverflowVisible: !0,
		children: /* @__PURE__ */ (0, M.jsx)("iframe", {
			title: "File Picker",
			ref: c,
			width: "100%",
			height: "800",
			src: u.toString()
		})
	});
}, kc = ({ children: e, setValue: t, fileTypes: n = null }) => {
	let [r, i] = (0, O.useState)(!1), [a, o] = (0, O.useState)(null), s = Dc(), c = (0, O.useCallback)(async (e) => {
		try {
			await t(e), o(null);
		} catch (e) {
			o(e.message);
		}
		i(!1);
	}, [t]);
	return s?.file_picker_url ? /* @__PURE__ */ (0, M.jsxs)(M.Fragment, { children: [
		/* @__PURE__ */ (0, M.jsxs)(Et, { children: [e, /* @__PURE__ */ (0, M.jsx)(Et.Append, { children: /* @__PURE__ */ (0, M.jsx)(Dn, {
			variant: "outline-secondary",
			onClick: () => i(!0),
			children: "Select File"
		}) })] }),
		a && /* @__PURE__ */ (0, M.jsx)(T.Control.Feedback, {
			type: "default",
			children: a
		}),
		r && /* @__PURE__ */ (0, M.jsx)(Oc, {
			fileTypes: n,
			onFileSelect: c,
			onError: o,
			onClose: () => i(!1)
		})
	] }) : e;
}, Ac = [
	...Object.entries(me).filter(([e]) => e !== w.CUSTOM).map(([, e]) => e),
	"volume_up",
	"link",
	"school",
	"slideshow",
	"headphones",
	"podcasts",
	"quiz",
	"assignment",
	"science",
	"code",
	"lightbulb"
], jc = ({ thumbnailIcon: e, onIconChange: t, thumbnailUrl: n, onImageChange: r }) => {
	let i = (0, O.useId)(), a = (0, O.useRef)(null), [o, s] = (0, O.useState)(!1), [c, l] = (0, O.useState)("icon"), u = (0, O.useRef)(), d = () => s(!1);
	return (0, O.useEffect)(() => () => window.clearTimeout(u.current), []), /* @__PURE__ */ (0, M.jsxs)("div", {
		className: "thumbnail-select",
		onBlur: () => {
			u.current = window.setTimeout(d, 0);
		},
		onFocus: () => {
			window.clearTimeout(u.current);
		},
		onKeyDown: (e) => {
			e.currentTarget.contains(e.target) && e.key === "Escape" && o && (e.preventDefault(), d(), a.current?.focus());
		},
		children: [/* @__PURE__ */ (0, M.jsx)(Dn, {
			ref: a,
			variant: "outline-primary",
			"aria-expanded": o,
			"aria-controls": i,
			onClick: () => s(!o),
			children: "Choose thumbnail"
		}), o && /* @__PURE__ */ (0, M.jsx)("div", {
			id: i,
			className: "thumbnail-select-popover",
			role: "dialog",
			"aria-label": "Choose thumbnail",
			tabIndex: -1,
			children: /* @__PURE__ */ (0, M.jsxs)(Wt, {
				id: `${i}-tabs`,
				activeKey: c,
				onSelect: (e) => l(e ?? "icon"),
				children: [/* @__PURE__ */ (0, M.jsxs)(Ko, {
					variant: "tabs",
					fill: !0,
					children: [/* @__PURE__ */ (0, M.jsx)(Ko.Item, { children: /* @__PURE__ */ (0, M.jsx)(Ko.Link, {
						eventKey: "icon",
						children: "Icon"
					}) }), /* @__PURE__ */ (0, M.jsx)(Ko.Item, { children: /* @__PURE__ */ (0, M.jsx)(Ko.Link, {
						eventKey: "image",
						children: "Image"
					}) })]
				}), /* @__PURE__ */ (0, M.jsxs)(Kt, { children: [/* @__PURE__ */ (0, M.jsx)(Xt, {
					eventKey: "icon",
					children: /* @__PURE__ */ (0, M.jsx)(Tc, {
						autoFocus: !0,
						defaultIcons: Ac,
						selectedIcon: e,
						onSelect: (e) => {
							r(void 0), t(e), d(), a.current?.focus();
						}
					})
				}), /* @__PURE__ */ (0, M.jsx)(Xt, {
					eventKey: "image",
					children: /* @__PURE__ */ (0, M.jsxs)(T.Group, {
						className: "thumbnail-select-image",
						children: [/* @__PURE__ */ (0, M.jsx)(T.Label, { children: "Image URL" }), /* @__PURE__ */ (0, M.jsx)(kc, {
							setValue: async (e) => r(e),
							fileTypes: ["image"],
							children: /* @__PURE__ */ (0, M.jsx)(T.Control, {
								value: n ?? "",
								onChange: (e) => r(e.target.value)
							})
						})]
					})
				})] })]
			})
		})]
	});
}, Mc = (e) => {
	try {
		let t = new URL(e.trim());
		return ["http:", "https:"].includes(t.protocol) && t.host !== "";
	} catch {
		return !1;
	}
}, Nc = 59, Pc = (e) => /^\d*$/.test(e), Fc = {
	urlEmpty: "Add the resource URL.",
	urlInvalid: "Enter a full URL starting with http:// or https://.",
	titleEmpty: "Add a title.",
	publisherEmpty: "Add a publisher.",
	timeTooShort: "The estimated time must be at least 1 minute.",
	timeNotWholeNumber: "Enter the estimated time in whole hours and minutes.",
	typeEmpty: "Choose a content type."
}, Ic = (e, t) => {
	let n = {};
	return e.url.trim() ? Mc(e.url) || (n.url = Fc.urlInvalid) : n.url = Fc.urlEmpty, e.title.trim() || (n.title = Fc.titleEmpty), e.publisher.trim() || (n.publisher = Fc.publisherEmpty), t ? e.expectedMinutes < 1 && (n.expectedMinutes = Fc.timeTooShort) : n.expectedMinutes = Fc.timeNotWholeNumber, e.fileType || (n.fileType = Fc.typeEmpty), n;
}, Lc = ({ initialResource: e, isNewResource: t = !1, onCancel: n, onSave: r, onDelete: i }) => {
	let [a, o] = (0, O.useState)(e), [s, c] = (0, O.useState)(!1), [l, u] = (0, O.useState)(() => {
		let t = Math.floor(e.expectedMinutes / 60);
		return t ? String(t) : "";
	}), [d, f] = (0, O.useState)(() => {
		let t = e.expectedMinutes % 60;
		return t ? String(t) : "";
	}), [p, m] = (0, O.useState)({
		hours: !1,
		minutes: !1
	}), h = !p.hours && !p.minutes && Pc(l) && Pc(d), g = s ? Ic(a, h) : {}, _ = a.thumbnailIcon || me[a.fileType ?? w.CUSTOM], v = (e, t) => {
		u(e), f(t), o({
			...a,
			expectedMinutes: (Number(e) || 0) * 60 + (Number(t) || 0)
		});
	}, y = (e) => (t) => {
		let n = t.currentTarget.validity.badInput;
		m((t) => t[e] === n ? t : {
			...t,
			[e]: n
		});
	};
	return /* @__PURE__ */ (0, M.jsxs)(de, { children: [/* @__PURE__ */ (0, M.jsx)(de.Body, { children: /* @__PURE__ */ (0, M.jsxs)(de.Section, { children: [
		/* @__PURE__ */ (0, M.jsxs)("div", {
			className: "d-flex w-100 justify-content-between",
			children: [/* @__PURE__ */ (0, M.jsx)("span", {
				className: "h4 text-primary-500",
				children: t ? "Add resource" : "Edit resource"
			}), !t && /* @__PURE__ */ (0, M.jsx)(_e, {
				variant: "primary",
				src: kn,
				alt: "Delete",
				onClick: i
			})]
		}),
		/* @__PURE__ */ (0, M.jsx)("hr", {}),
		/* @__PURE__ */ (0, M.jsxs)(T.Group, {
			isInvalid: !!g.url,
			children: [
				/* @__PURE__ */ (0, M.jsx)(T.Label, { children: /* @__PURE__ */ (0, M.jsxs)(he, { children: [/* @__PURE__ */ (0, M.jsx)("span", {
					className: "text-primary-500",
					children: "Resource link"
				}), /* @__PURE__ */ (0, M.jsx)("small", { children: "Add the resource URL" })] }) }),
				/* @__PURE__ */ (0, M.jsx)(T.Control, {
					value: a.url,
					onChange: (e) => {
						o({
							...a,
							url: e.target.value
						});
					}
				}),
				g.url && /* @__PURE__ */ (0, M.jsx)(T.Control.Feedback, {
					type: "invalid",
					children: g.url
				})
			]
		}),
		/* @__PURE__ */ (0, M.jsxs)(T.Group, {
			isInvalid: !!g.title,
			children: [
				/* @__PURE__ */ (0, M.jsx)(T.Label, { children: /* @__PURE__ */ (0, M.jsx)("span", {
					className: "text-primary-500",
					children: "Title"
				}) }),
				/* @__PURE__ */ (0, M.jsx)(T.Control, {
					value: a.title,
					onChange: (e) => {
						o({
							...a,
							title: e.target.value
						});
					}
				}),
				g.title && /* @__PURE__ */ (0, M.jsx)(T.Control.Feedback, {
					type: "invalid",
					children: g.title
				})
			]
		}),
		/* @__PURE__ */ (0, M.jsxs)(T.Group, {
			isInvalid: !!g.publisher,
			children: [
				/* @__PURE__ */ (0, M.jsx)(T.Label, { children: /* @__PURE__ */ (0, M.jsx)("span", {
					className: "text-primary-500",
					children: "Publisher"
				}) }),
				/* @__PURE__ */ (0, M.jsx)(T.Control, {
					value: a.publisher,
					onChange: (e) => {
						o({
							...a,
							publisher: e.target.value
						});
					}
				}),
				g.publisher && /* @__PURE__ */ (0, M.jsx)(T.Control.Feedback, {
					type: "invalid",
					children: g.publisher
				})
			]
		}),
		/* @__PURE__ */ (0, M.jsxs)(T.Group, {
			isInvalid: !!g.expectedMinutes,
			children: [
				/* @__PURE__ */ (0, M.jsx)(T.Label, { children: /* @__PURE__ */ (0, M.jsx)("span", {
					className: "text-primary-500",
					children: "Estimated time"
				}) }),
				/* @__PURE__ */ (0, M.jsxs)(he, {
					direction: "horizontal",
					gap: 2,
					children: [
						/* @__PURE__ */ (0, M.jsx)(T.Control, {
							className: "estimated-time-input",
							type: "number",
							min: 0,
							step: 1,
							placeholder: "0",
							value: l,
							onChange: (e) => {
								v(e.target.value, d);
							},
							onInput: y("hours")
						}),
						/* @__PURE__ */ (0, M.jsx)("small", { children: "hr" }),
						/* @__PURE__ */ (0, M.jsx)(T.Control, {
							className: "estimated-time-input",
							type: "number",
							min: 0,
							max: Nc,
							step: 1,
							placeholder: "0",
							value: d,
							onChange: (e) => {
								v(l, e.target.value);
							},
							onInput: y("minutes")
						}),
						/* @__PURE__ */ (0, M.jsx)("small", { children: "min" })
					]
				}),
				g.expectedMinutes && /* @__PURE__ */ (0, M.jsx)(T.Control.Feedback, {
					type: "invalid",
					children: g.expectedMinutes
				})
			]
		}),
		/* @__PURE__ */ (0, M.jsxs)(T.Group, {
			isInvalid: !!g.fileType,
			children: [
				/* @__PURE__ */ (0, M.jsx)(T.Label, { children: /* @__PURE__ */ (0, M.jsx)("span", {
					className: "text-primary-500",
					children: "Content type"
				}) }),
				/* @__PURE__ */ (0, M.jsx)($o, {
					fileType: a.fileType,
					customFileType: a.customFileType ?? "",
					onChange: (e, t) => o({
						...a,
						fileType: e,
						customFileType: t
					})
				}),
				g.fileType && /* @__PURE__ */ (0, M.jsx)(T.Control.Feedback, {
					type: "invalid",
					children: g.fileType
				})
			]
		}),
		/* @__PURE__ */ (0, M.jsxs)(he, {
			gap: 3,
			direction: "horizontal",
			children: [/* @__PURE__ */ (0, M.jsx)(ue, {
				variant: a.thumbnailUrl ? "image" : "icon",
				item: a.thumbnailUrl || _,
				itemAlt: a.thumbnailAltText
			}), /* @__PURE__ */ (0, M.jsx)(jc, {
				thumbnailIcon: a.thumbnailIcon,
				onIconChange: (e) => o((t) => ({
					...t,
					thumbnailIcon: e
				})),
				thumbnailUrl: a.thumbnailUrl,
				onImageChange: (e) => o((t) => ({
					...t,
					thumbnailUrl: e
				}))
			})]
		})
	] }) }), /* @__PURE__ */ (0, M.jsx)(de.Footer, { children: /* @__PURE__ */ (0, M.jsxs)(Ce, {
		className: "border-top pt-3",
		children: [
			/* @__PURE__ */ (0, M.jsx)(Dn, {
				variant: "primary",
				onClick: () => {
					let { fileType: e } = a;
					Object.keys(Ic(a, h)).length > 0 || !e ? c(!0) : r({
						...a,
						fileType: e
					});
				},
				children: "Save"
			}),
			/* @__PURE__ */ (0, M.jsx)(Dn, {
				variant: "tertiary",
				onClick: () => n(),
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, M.jsx)(Ce.Spacer, {})
		]
	}) })] });
}, Rc = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`, zc = () => ({
	id: Rc(),
	url: "",
	title: "",
	publisher: "",
	expectedMinutes: 0
}), Bc = ({ onDelete: e, onEdit: t, disableEdit: n, dragHandleRef: r }) => /* @__PURE__ */ (0, M.jsxs)(Ce, { children: [
	/* @__PURE__ */ (0, M.jsx)(_e, {
		src: jn,
		alt: "Edit",
		onClick: t,
		disabled: n
	}),
	/* @__PURE__ */ (0, M.jsx)(_e, {
		src: kn,
		alt: "Delete",
		onClick: e
	}),
	r && /* @__PURE__ */ (0, M.jsx)(_e, {
		ref: r,
		src: An,
		alt: "Drag to reorder"
	})
] }), Vc = ({ resource: e, onConfirm: t, onClose: n }) => /* @__PURE__ */ (0, M.jsx)(Go, {
	title: "Delete resource?",
	isOpen: e !== void 0,
	onClose: n,
	footerNode: /* @__PURE__ */ (0, M.jsxs)(Ce, { children: [/* @__PURE__ */ (0, M.jsx)(Dn, {
		variant: "tertiary",
		onClick: n,
		children: "Cancel"
	}), /* @__PURE__ */ (0, M.jsx)(Dn, {
		variant: "primary",
		onClick: () => e && t(e),
		children: "Delete resource"
	})] }),
	children: /* @__PURE__ */ (0, M.jsxs)("p", { children: [
		"“",
		e?.title,
		"” will be permanently deleted. This action cannot be undone."
	] })
}), Hc = Symbol.for("preact-signals");
function Uc() {
	if (Kc > 1) Kc--;
	else {
		var e, t = !1;
		for ((function() {
			var e = Xc;
			for (Xc = void 0; e !== void 0;) {
				var t = e.S;
				if (t.v === e.v) for (var n = t.t; n !== void 0; n = n.x) n.i === e.i && (n.i = t.i);
				e = e.o;
			}
		})(); Gc !== void 0;) {
			var n = Gc;
			for (Gc = void 0, qc++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && tl(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (qc = 0, Kc--, t) throw e;
	}
}
function F(e) {
	if (Kc > 0) return e();
	Yc = ++Jc, Kc++;
	try {
		return e();
	} finally {
		Uc();
	}
}
var Wc, I = void 0;
function L(e) {
	var t = I, n = Wc;
	I = void 0, Wc = void 0;
	try {
		return e();
	} finally {
		I = t, Wc = n;
	}
}
var Gc = void 0, Kc = 0, qc = 0, Jc = 0, Yc = 0, Xc = void 0, Zc = 0;
function Qc(e) {
	if (I !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== I) return t = {
			i: 0,
			S: e,
			p: I.s,
			n: void 0,
			t: I,
			e: void 0,
			x: void 0,
			r: t
		}, I.s !== void 0 && (I.s.n = t), I.s = t, e.n = t, 32 & I.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = I.s, t.n = void 0, I.s.n = t, I.s = t), t;
	}
}
function $c(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
$c.prototype.brand = Hc, $c.prototype.h = function() {
	return !0;
}, $c.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? L(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, $c.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && L(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, $c.prototype.subscribe = function(e) {
	var t = this;
	return ul(function() {
		var n = t.value;
		L(function() {
			return e(n);
		});
	}, { name: "sub" });
}, $c.prototype.valueOf = function() {
	return this.value;
}, $c.prototype.toString = function() {
	return this.value + "";
}, $c.prototype.toJSON = function() {
	return this.value;
}, $c.prototype.peek = function() {
	var e = this;
	return L(function() {
		return e.value;
	});
}, Object.defineProperty($c.prototype, "value", {
	get: function() {
		var e = Qc(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (qc > 100) throw Error("Cycle detected");
			(function(e) {
				Kc !== 0 && qc === 0 && e.l !== Yc && (e.l = Yc, Xc = {
					S: e,
					v: e.v,
					i: e.i,
					o: Xc
				});
			})(this), this.v = e, this.i++, Zc++, Kc++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				Uc();
			}
		}
	}
});
function el(e, t) {
	return new $c(e, t);
}
function tl(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function nl(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function rl(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function il(e, t) {
	$c.call(this, void 0, t), this.x = e, this.s = void 0, this.g = Zc - 1, this.f = 4;
}
il.prototype = new $c(), il.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === Zc)) return !0;
	if (this.g = Zc, this.f |= 1, this.i > 0 && !tl(this)) return this.f &= -2, !0;
	var e = I;
	try {
		nl(this), I = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return I = e, rl(this), this.f &= -2, !0;
}, il.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	$c.prototype.S.call(this, e);
}, il.prototype.U = function(e) {
	if (this.t !== void 0 && ($c.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, il.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(il.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = Qc(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function al(e, t) {
	return new il(e, t);
}
function ol(e) {
	var t = e.j;
	if (e.j = void 0, typeof t == "function") {
		Kc++;
		var n = I;
		I = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, sl(e), t;
		} finally {
			I = n, Uc();
		}
	}
}
function sl(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, ol(e);
}
function cl(e) {
	if (I !== this) throw Error("Out-of-order effect");
	rl(this), I = e, this.f &= -2;
	try {
		8 & this.f && sl(this);
	} finally {
		Uc();
	}
}
function ll(e, t) {
	this.x = e, this.j = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, Wc && Wc.push(this);
}
ll.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.j = t);
	} finally {
		e();
	}
}, ll.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, ol(this), nl(this), Kc++;
	var e = I;
	return I = this, cl.bind(this, e);
}, ll.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = Gc, Gc = this);
}, ll.prototype.d = function() {
	this.f |= 8, 1 & this.f || sl(this);
}, ll.prototype.dispose = function() {
	this.d();
};
function ul(e, t) {
	var n = new ll(e, t);
	try {
		n.c();
	} catch (e) {
		throw n.d(), e;
	}
	var r = n.d.bind(n);
	return r[Symbol.dispose] = r, r;
}
// node_modules/.pnpm/@dnd-kit+state@0.3.2/node_modules/@dnd-kit/state/dist/index.mjs
var dl = Object.create, fl = Object.defineProperty, pl = Object.defineProperties, ml = Object.getOwnPropertyDescriptor, hl = Object.getOwnPropertyDescriptors, gl = Object.getOwnPropertySymbols, _l = Object.prototype.hasOwnProperty, vl = Object.prototype.propertyIsEnumerable, yl = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), bl = (e) => {
	throw TypeError(e);
}, xl = (e, t, n) => t in e ? fl(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Sl = (e, t) => {
	for (var n in t ||= {}) _l.call(t, n) && xl(e, n, t[n]);
	if (gl) for (var n of gl(t)) vl.call(t, n) && xl(e, n, t[n]);
	return e;
}, Cl = (e, t) => pl(e, hl(t)), wl = (e, t) => fl(e, "name", {
	value: t,
	configurable: !0
}), Tl = (e) => [
	,
	,
	,
	dl(e?.[yl("metadata")] ?? null)
], El = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Dl = (e) => e !== void 0 && typeof e != "function" ? bl("Function expected") : e, Ol = (e, t, n, r, i) => ({
	kind: El[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? bl("Already initialized") : i.push(Dl(e || null))
}), kl = (e, t) => xl(t, yl("metadata"), e[3]), Al = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, jl = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = El[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && ml(d < 4 ? i : {
		get [n]() {
			return Pl(this, a);
		},
		set [n](e) {
			return Il(this, a, e);
		}
	}, n));
	d ? p && d < 4 && wl(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : wl(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = Ol(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => Nl(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Pl : Ll)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Il(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? Dl(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? bl("Object expected") : (Dl(o = s.get) && (v.get = o), Dl(o = s.set) && (v.set = o), Dl(o = s.init) && g.unshift(o));
	return d || kl(e, i), v && fl(i, n, v), p ? d ^ 4 ? a : v : i;
}, Ml = (e, t, n) => t.has(e) || bl("Cannot " + n), Nl = (e, t) => Object(t) === t ? e.has(t) : bl("Cannot use the \"in\" operator on this value"), Pl = (e, t, n) => (Ml(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Fl = (e, t, n) => t.has(e) ? bl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Il = (e, t, n, r) => (Ml(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ll = (e, t, n) => (Ml(e, t, "access private method"), n);
function Rl(e, t) {
	if (t) {
		let n;
		return al(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return al(e);
}
function zl(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !zl(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length && !n.some((n) => !zl(e[n], t[n]));
	}
	return !1;
}
function R({ get: e }, t) {
	return {
		init(e) {
			return el(e);
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
function z(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = Rl(e.bind(this)), n.set(this, t)), t.value;
	};
}
function Bl(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, Cl(Sl({}, r), { enumerable: e }));
		});
	};
}
function Vl(...e) {
	let t = e.map((e) => ul(e));
	return () => t.forEach((e) => e());
}
var Hl, Ul, Wl, Gl, Kl, ql = [R], Jl, Yl, Xl, Zl, Ql, B, $l, eu, tu, nu, ru, iu, au, ou;
Kl = [R], Gl = [R], Wl = [Bl()], Ul = [Bl()], Hl = [Bl()];
var su = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, Al(Jl, 5, this), Fl(this, B), Fl(this, Yl, Al(Jl, 8, this)), Al(Jl, 11, this), Fl(this, $l, Al(Jl, 12, this)), Al(Jl, 15, this), Fl(this, ru, Al(Jl, 16, this)), Al(Jl, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return Pl(this, B, au);
	}
	get initial() {
		return Pl(this, B, Zl);
	}
	get previous() {
		return Pl(this, B, tu);
	}
	set current(e) {
		let t = L(() => Pl(this, B, au));
		e && t && this.equals(t, e) || F(() => {
			Pl(this, B, Zl) || Il(this, B, e, Ql), Il(this, B, t, nu), Il(this, B, e, ou);
		});
	}
	reset(e = this.defaultValue) {
		F(() => {
			Il(this, B, void 0, nu), Il(this, B, e, Ql), Il(this, B, e, ou);
		});
	}
};
Jl = Tl(null), Yl = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakSet(), $l = /* @__PURE__ */ new WeakMap(), ru = /* @__PURE__ */ new WeakMap(), Xl = jl(Jl, 20, "#initial", ql, B, Yl), Zl = Xl.get, Ql = Xl.set, eu = jl(Jl, 20, "#previous", Kl, B, $l), tu = eu.get, nu = eu.set, iu = jl(Jl, 20, "#current", Gl, B, ru), au = iu.get, ou = iu.set, jl(Jl, 2, "current", Wl, su), jl(Jl, 2, "initial", Ul, su), jl(Jl, 2, "previous", Hl, su), kl(Jl, su);
function cu(e) {
	return L(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var lu, uu = class {
	constructor() {
		Fl(this, lu, /* @__PURE__ */ new WeakMap());
	}
	get(e, t) {
		return e ? Pl(this, lu).get(e)?.get(t) : void 0;
	}
	set(e, t, n) {
		if (e) return Pl(this, lu).has(e) || Pl(this, lu).set(e, /* @__PURE__ */ new Map()), Pl(this, lu).get(e)?.set(t, n);
	}
	clear(e) {
		return e ? Pl(this, lu).get(e)?.clear() : void 0;
	}
};
lu = /* @__PURE__ */ new WeakMap();
// node_modules/.pnpm/@dnd-kit+geometry@0.3.2/node_modules/@dnd-kit/geometry/dist/index.mjs
var du = Object.create, fu = Object.defineProperty, pu = Object.getOwnPropertyDescriptor, mu = Object.getOwnPropertySymbols, hu = Object.prototype.hasOwnProperty, gu = Object.prototype.propertyIsEnumerable, _u = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), vu = (e) => {
	throw TypeError(e);
}, yu = Math.pow, bu = (e, t, n) => t in e ? fu(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, xu = (e, t) => {
	for (var n in t ||= {}) hu.call(t, n) && bu(e, n, t[n]);
	if (mu) for (var n of mu(t)) gu.call(t, n) && bu(e, n, t[n]);
	return e;
}, Su = (e, t) => fu(e, "name", {
	value: t,
	configurable: !0
}), Cu = (e) => [
	,
	,
	,
	du(e?.[_u("metadata")] ?? null)
], wu = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Tu = (e) => e !== void 0 && typeof e != "function" ? vu("Function expected") : e, Eu = (e, t, n, r, i) => ({
	kind: wu[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? vu("Already initialized") : i.push(Tu(e || null))
}), Du = (e, t) => bu(t, _u("metadata"), e[3]), Ou = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, ku = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = wu[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && pu(d < 4 ? i : {
		get [n]() {
			return Mu(this, a);
		},
		set [n](e) {
			return Pu(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Su(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Su(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = Eu(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => ju(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Mu : Fu)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Pu(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? Tu(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? vu("Object expected") : (Tu(o = s.get) && (v.get = o), Tu(o = s.set) && (v.set = o), Tu(o = s.init) && g.unshift(o));
	return d || Du(e, i), v && fu(i, n, v), p ? d ^ 4 ? a : v : i;
}, Au = (e, t, n) => t.has(e) || vu("Cannot " + n), ju = (e, t) => Object(t) === t ? e.has(t) : vu("Cannot use the \"in\" operator on this value"), Mu = (e, t, n) => (Au(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Nu = (e, t, n) => t.has(e) ? vu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Pu = (e, t, n, r) => (Au(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Fu = (e, t, n) => (Au(e, t, "access private method"), n), Iu = class e {
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
}, Lu = class e {
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
		return c.scale = xu({}, s), c;
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
		return new Iu((e + n) / 2, (t + r) / 2);
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
		return t instanceof e ? Ru(this, t) : 0;
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
		return Iu.delta({
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
function Ru(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var zu, Bu, Vu, Hu, Uu, Wu = class extends (Vu = su, Bu = [z], zu = [z], Vu) {
	constructor(e) {
		let t = Iu.from(e);
		super(t, (e, t) => Iu.equals(e, t)), Ou(Uu, 5, this), Nu(this, Hu, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return Iu.delta(this.current, this.initial);
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
		let { current: t } = this, n = Iu.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - Mu(this, Hu), o = (e) => Math.round(e / a * 100);
		F(() => {
			Pu(this, Hu, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(Iu.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
Uu = Cu(Vu), Hu = /* @__PURE__ */ new WeakMap(), ku(Uu, 2, "delta", Bu, Wu), ku(Uu, 2, "direction", zu, Wu), Du(Uu, Wu);
function Gu({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(yu(r, 2) + yu(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n && i > n.y;
}
var Ku = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(Ku || {}), qu = Object.values(Ku), Ju = Object.create, Yu = Object.defineProperty, Xu = Object.defineProperties, Zu = Object.getOwnPropertyDescriptor, Qu = Object.getOwnPropertyDescriptors, $u = Object.getOwnPropertySymbols, ed = Object.prototype.hasOwnProperty, td = Object.prototype.propertyIsEnumerable, nd = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), rd = (e) => {
	throw TypeError(e);
}, id = (e, t, n) => t in e ? Yu(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, ad = (e, t) => {
	for (var n in t ||= {}) ed.call(t, n) && id(e, n, t[n]);
	if ($u) for (var n of $u(t)) td.call(t, n) && id(e, n, t[n]);
	return e;
}, od = (e, t) => Xu(e, Qu(t)), sd = (e, t) => Yu(e, "name", {
	value: t,
	configurable: !0
}), cd = (e, t) => {
	var n = {};
	for (var r in e) ed.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && $u) for (var r of $u(e)) t.indexOf(r) < 0 && td.call(e, r) && (n[r] = e[r]);
	return n;
}, ld = (e) => [
	,
	,
	,
	Ju(e?.[nd("metadata")] ?? null)
], ud = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], dd = (e) => e !== void 0 && typeof e != "function" ? rd("Function expected") : e, fd = (e, t, n, r, i) => ({
	kind: ud[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? rd("Already initialized") : i.push(dd(e || null))
}), pd = (e, t) => id(t, nd("metadata"), e[3]), V = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, H = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = ud[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && Zu(d < 4 ? i : {
		get [n]() {
			return U(this, a);
		},
		set [n](e) {
			return gd(this, a, e);
		}
	}, n));
	d ? p && d < 4 && sd(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : sd(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = fd(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => hd(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? U : _d)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => gd(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? dd(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? rd("Object expected") : (dd(o = s.get) && (v.get = o), dd(o = s.set) && (v.set = o), dd(o = s.init) && g.unshift(o));
	return d || pd(e, i), v && Yu(i, n, v), p ? d ^ 4 ? a : v : i;
}, md = (e, t, n) => t.has(e) || rd("Cannot " + n), hd = (e, t) => Object(t) === t ? e.has(t) : rd("Cannot use the \"in\" operator on this value"), U = (e, t, n) => (md(e, t, "read from private field"), n ? n.call(e) : t.get(e)), W = (e, t, n) => t.has(e) ? rd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), gd = (e, t, n, r) => (md(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), _d = (e, t, n) => (md(e, t, "access private method"), n);
function vd(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function yd(e) {
	return (t) => vd(e, t);
}
function bd(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var xd = [R], Sd, Cd, wd, G = class {
	constructor(e, t) {
		this.manager = e, this.options = t, W(this, Cd, V(Sd, 8, this, !1)), V(Sd, 11, this), W(this, wd, /* @__PURE__ */ new Set());
	}
	enable() {
		this.disabled = !1;
	}
	disable() {
		this.disabled = !0;
	}
	isDisabled() {
		return L(() => this.disabled);
	}
	configure(e) {
		this.options = e;
	}
	registerEffect(e) {
		let t = ul(e.bind(this));
		return U(this, wd).add(t), t;
	}
	destroy() {
		U(this, wd).forEach((e) => e());
	}
	static configure(e) {
		return vd(this, e);
	}
};
Sd = ld(null), Cd = /* @__PURE__ */ new WeakMap(), wd = /* @__PURE__ */ new WeakMap(), H(Sd, 4, "disabled", xd, G, Cd), pd(Sd, G);
var Td = class extends G {}, Ed, Dd = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), W(this, Ed, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(bd).reduceRight((e, t) => e.some(({ plugin: e }) => e === t.plugin) ? e : [t, ...e], []), n = t.map(({ plugin: e }) => e);
		for (let e of U(this, Ed)) if (!n.includes(e)) {
			if (e.prototype instanceof Td) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		gd(this, Ed, n);
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
Ed = /* @__PURE__ */ new WeakMap();
function Od(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var kd = [], Ad, jd, Md = class extends G {
	constructor(e) {
		super(e), W(this, Ad), W(this, jd), this.computeCollisions = this.computeCollisions.bind(this), gd(this, jd, el(kd)), this.destroy = Vl(() => {
			let e = this.computeCollisions(), t = L(() => this.manager.dragOperation.position.current);
			if (e !== kd) {
				let e = U(this, Ad);
				if (gd(this, Ad, t), e && t.x == e.x && t.y == e.y) return;
			} else gd(this, Ad, void 0);
			U(this, jd).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		L(() => {
			e ? U(this, jd).value = this.computeCollisions() : gd(this, Ad, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return kd;
		let s = [], c = [];
		for (let a of e ?? n.droppables) {
			if (a.disabled || i && !a.accepts(i)) continue;
			let e = t ?? a.collisionDetector;
			if (!e) continue;
			c.push(a), a.shape;
			let n = L(() => e({
				droppable: a,
				dragOperation: r
			}));
			n && (a.collisionPriority != null && (n.priority = a.collisionPriority), s.push(n));
		}
		return c.length === 0 ? kd : (s.sort(Od), s);
	}
	get collisions() {
		return U(this, jd).value;
	}
};
Ad = /* @__PURE__ */ new WeakMap(), jd = /* @__PURE__ */ new WeakMap();
var Nd = class {
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
}, Pd = class extends Nd {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function Fd(e, t = !0) {
	let n = !1;
	return od(ad({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var Id = class extends Td {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = Vl(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled()) return;
			let o = Fd({ collisions: a });
			if (i.dispatch("collision", o), o.defaultPrevented || t(a, n)) return;
			n = a;
			let [s] = a;
			L(() => {
				s?.id !== e.dragOperation.target?.id && (r.disable(), e.actions.setDropTarget(s?.id).then(() => {
					r.enable();
				}));
			});
		});
	}
}, Ld = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Ld || {}), Rd = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(Rd || {}), zd, Bd, Vd, Hd, Ud, Wd, Gd = [R], Kd, qd;
Wd = [z], Ud = [z], Hd = [z], Vd = [z], Bd = [z], zd = [z];
var Jd = class {
	constructor() {
		V(Kd, 5, this), W(this, qd, V(Kd, 8, this, "idle")), V(Kd, 11, this);
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
Kd = ld(null), qd = /* @__PURE__ */ new WeakMap(), H(Kd, 4, "value", Gd, Jd, qd), H(Kd, 2, "current", Wd, Jd), H(Kd, 2, "idle", Ud, Jd), H(Kd, 2, "initializing", Hd, Jd), H(Kd, 2, "initialized", Vd, Jd), H(Kd, 2, "dragging", Bd, Jd), H(Kd, 2, "dropped", zd, Jd), pd(Kd, Jd);
var Yd = class {
	constructor(e) {
		this.manager = e;
	}
	setDragSource(e) {
		let { dragOperation: t } = this.manager;
		t.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
	}
	setDropTarget(e) {
		return L(() => {
			let { dragOperation: t } = this.manager, n = e ?? null;
			if (t.targetIdentifier === n) return Promise.resolve(!1);
			t.targetIdentifier = n;
			let r = Fd({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return L(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			F(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = Fd({ operation: t.snapshot() });
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
		return L(() => {
			let { dragOperation: t } = this.manager, { status: n, controller: r } = t;
			if (!n.dragging || !r || r.signal.aborted) return;
			let i = Fd({
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
		return L(() => {
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
					let e = L(() => t.source?.status === "dropping"), r = () => {
						t.controller === n && (t.controller = void 0), t.reset();
					};
					if (e) {
						let { source: e } = t, n = ul(() => {
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
}, Xd, Zd, Qd, $d = [R], ef, tf, nf, rf, af;
Qd = [R], Zd = [R], Xd = [R];
var of = class {
	constructor(e, t) {
		W(this, tf, V(ef, 8, this)), V(ef, 11, this), W(this, nf, V(ef, 12, this)), V(ef, 15, this), W(this, rf, V(ef, 16, this)), V(ef, 19, this), W(this, af, V(ef, 20, this)), V(ef, 23, this);
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
ef = ld(null), tf = /* @__PURE__ */ new WeakMap(), nf = /* @__PURE__ */ new WeakMap(), rf = /* @__PURE__ */ new WeakMap(), af = /* @__PURE__ */ new WeakMap(), H(ef, 4, "manager", $d, of, tf), H(ef, 4, "id", Qd, of, nf), H(ef, 4, "data", Zd, of, rf), H(ef, 4, "disabled", Xd, of, af), pd(ef, of);
var sf = class {
	constructor() {
		this.map = el(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			a.set(e, t), this.map.value = a;
			let o = Vl(...t.effects());
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
}, cf, lf, uf, df, ff, pf, mf, hf, gf, _f, vf, yf = class extends (mf = of, pf = [R], ff = [R], df = [R], uf = [z], lf = [z], cf = [z], mf) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a } = n, o = cd(n, [
			"modifiers",
			"type",
			"sensors"
		]);
		super(o, t), V(hf, 5, this), W(this, gf, V(hf, 8, this)), V(hf, 11, this), W(this, _f, V(hf, 12, this)), V(hf, 15, this), W(this, vf, V(hf, 16, this, this.isDragSource ? "dragging" : "idle")), V(hf, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = o.alignment;
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
hf = ld(mf), gf = /* @__PURE__ */ new WeakMap(), _f = /* @__PURE__ */ new WeakMap(), vf = /* @__PURE__ */ new WeakMap(), H(hf, 4, "type", pf, yf, gf), H(hf, 4, "modifiers", ff, yf, _f), H(hf, 4, "status", df, yf, vf), H(hf, 2, "isDropping", uf, yf), H(hf, 2, "isDragging", lf, yf), H(hf, 2, "isDragSource", cf, yf), pd(hf, yf);
var bf, xf, Sf, Cf, wf, Tf, Ef, K, Df, Of, kf, Af, jf, Mf = class extends (Ef = of, Tf = [R], wf = [R], Cf = [R], Sf = [R], xf = [R], bf = [z], Ef) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = cd(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), V(K, 5, this), W(this, Df, V(K, 8, this)), V(K, 11, this), W(this, Of, V(K, 12, this)), V(K, 15, this), W(this, kf, V(K, 16, this)), V(K, 19, this), W(this, Af, V(K, 20, this)), V(K, 23, this), W(this, jf, V(K, 24, this)), V(K, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
K = ld(Ef), Df = /* @__PURE__ */ new WeakMap(), Of = /* @__PURE__ */ new WeakMap(), kf = /* @__PURE__ */ new WeakMap(), Af = /* @__PURE__ */ new WeakMap(), jf = /* @__PURE__ */ new WeakMap(), H(K, 4, "accept", Tf, Mf, Df), H(K, 4, "type", wf, Mf, Of), H(K, 4, "collisionDetector", Cf, Mf, kf), H(K, 4, "collisionPriority", Sf, Mf, Af), H(K, 4, "shape", xf, Mf, jf), H(K, 2, "isDropTarget", bf, Mf), pd(K, Mf);
var Nf = class extends G {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, Pf = class extends AbortController {
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
}, Ff, If = class {
	constructor(e) {
		this.options = e, W(this, Ff);
	}
	set controller(e) {
		gd(this, Ff, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = U(this, Ff)) == null || t.activate(e);
	}
};
Ff = /* @__PURE__ */ new WeakMap();
var Lf = class extends G {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, Rf = class {
	constructor(e) {
		this.draggables = new sf(), this.droppables = new sf(), this.plugins = new Dd(e), this.sensors = new Dd(e), this.modifiers = new Dd(e);
	}
	register(e, t) {
		if (e instanceof yf) return this.draggables.register(e.id, e);
		if (e instanceof Mf) return this.droppables.register(e.id, e);
		if (e.prototype instanceof Lf) return this.modifiers.register(e, t);
		if (e.prototype instanceof Nf) return this.sensors.register(e, t);
		if (e.prototype instanceof G) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof of) return e instanceof yf ? this.draggables.unregister(e.id, e) : e instanceof Mf ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof Lf) return this.modifiers.unregister(e);
		if (e.prototype instanceof Nf) return this.sensors.unregister(e);
		if (e.prototype instanceof G) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, zf, Bf, Vf, Hf, Uf, Wf, Gf, Kf, qf = [z], Jf, Yf, Xf, q, Zf, Qf, $f, ep, tp, np;
Kf = [R], Gf = [R], Wf = [R], Uf = [R], Hf = [R], Vf = [z], Bf = [z], zf = [z];
var rp = class {
	constructor(e) {
		V(q, 5, this), W(this, Jf), W(this, Yf), W(this, Xf, new su(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new Jd(), W(this, Zf, V(q, 8, this, !1)), V(q, 11, this), W(this, Qf, V(q, 12, this, null)), V(q, 15, this), W(this, $f, V(q, 16, this, null)), V(q, 19, this), W(this, ep, V(q, 20, this, null)), V(q, 23, this), W(this, tp, V(q, 24, this, [])), V(q, 27, this), this.position = new Wu({
			x: 0,
			y: 0
		}), W(this, np, {
			x: 0,
			y: 0
		}), gd(this, Jf, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = U(this, Xf);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? U(this, Xf).current = e : U(this, Xf).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = U(this, Jf).registry.draggables.get(e);
		return t && gd(this, Yf, t), t ?? U(this, Yf) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : U(this, Jf).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(od(ad({}, this.snapshot()), { transform: n }));
		return gd(this, np, n), n;
	}
	snapshot() {
		return L(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: U(this, np),
			shape: this.shape ? cu(this.shape) : null,
			position: cu(this.position),
			status: cu(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		F(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, U(this, Xf).reset(), this.position.reset({
				x: 0,
				y: 0
			}), gd(this, np, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
q = ld(null), Jf = /* @__PURE__ */ new WeakMap(), Yf = /* @__PURE__ */ new WeakMap(), Xf = /* @__PURE__ */ new WeakMap(), Zf = /* @__PURE__ */ new WeakMap(), Qf = /* @__PURE__ */ new WeakMap(), $f = /* @__PURE__ */ new WeakMap(), ep = /* @__PURE__ */ new WeakMap(), tp = /* @__PURE__ */ new WeakMap(), np = /* @__PURE__ */ new WeakMap(), H(q, 2, "shape", qf, rp), H(q, 4, "canceled", Kf, rp, Zf), H(q, 4, "activatorEvent", Gf, rp, Qf), H(q, 4, "sourceIdentifier", Wf, rp, $f), H(q, 4, "targetIdentifier", Uf, rp, ep), H(q, 4, "modifiers", Hf, rp, tp), H(q, 2, "source", Vf, rp), H(q, 2, "target", Bf, rp), H(q, 2, "transform", zf, rp), pd(q, rp);
var ip = { get rendering() {
	return Promise.resolve();
} };
function ap(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var op = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = ap(t.plugins, []), r = ap(t.sensors, []), i = ap(t.modifiers, []), a = t.renderer ?? ip, o = new Pd(this), s = new Rf(this);
		this.registry = s, this.monitor = o, this.renderer = a, this.actions = new Yd(this), this.dragOperation = new rp(this), this.collisionObserver = new Md(this), this.plugins = [Id, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: c } = this, l = Vl(() => {
			let e = L(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = bd(e);
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
}, sp = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / Iu.distance(t.shape.center, n),
		type: Rd.PointerIntersection,
		priority: Ld.High
	} : null;
}, cp = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = Iu.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: Rd.ShapeIntersection,
			priority: Ld.Normal
		};
	}
	return null;
}, lp = (e) => sp(e) ?? cp(e), up = (e) => {
	let { dragOperation: t, droppable: n } = e, { shape: r, position: i } = t;
	if (!n.shape) return null;
	let a = r ? Lu.from(r.current.boundingRectangle).corners : void 0, o = Lu.from(n.shape.boundingRectangle).corners.reduce((e, t, n) => e + Iu.distance(Iu.from(t), a?.[n] ?? i.current), 0) / 4;
	return {
		id: n.id,
		value: 1 / o,
		type: Rd.Collision,
		priority: Ld.Normal
	};
}, dp = (e) => {
	throw TypeError(e);
}, fp = (e, t, n) => t.has(e) || dp("Cannot " + n), J = (e, t, n) => (fp(e, t, "read from private field"), t.get(e)), pp = (e, t, n) => t.has(e) ? dp("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), mp = (e, t, n, r) => (fp(e, t, "write to private field"), t.set(e, n), n), hp = (e, t, n) => (fp(e, t, "access private method"), n);
function gp(e) {
	return e ? e instanceof KeyframeEffect || "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function _p(e, t) {
	let n = e.getAnimations();
	if (n.length > 0) for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, r = (gp(n) ? n.getKeyframes() : []).filter(t);
		if (r.length > 0) return [r[r.length - 1], e];
	}
	return null;
}
function vp(e) {
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
function yp(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function bp(e) {
	return "nodeType" in e;
}
function xp(e) {
	return e ? yp(e) ? e : bp(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function Sp(e) {
	let { Document: t } = xp(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function Cp(e) {
	return !e || yp(e) ? !1 : e instanceof xp(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function wp(e) {
	return e instanceof xp(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function Tp(e) {
	return e ? yp(e) ? e.document : bp(e) ? Sp(e) ? e : Cp(e) || wp(e) ? e.ownerDocument : document : document : document;
}
function Ep(e) {
	let { documentElement: t } = Tp(e), n = xp(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function Dp(e, t) {
	if (Op(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function Op(e) {
	return e.tagName === "DETAILS";
}
function kp(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!Dp(o)) {
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
function Ap(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var jp = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Mp(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...Mp(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...Mp(i.document, t));
		}
	} catch {}
	return n;
}
function Np() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Pp() {
	let e = Np() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function Fp(e) {
	return !e || !bp(e) ? !1 : e instanceof xp(e).ShadowRoot;
}
function Ip(e) {
	if (e && bp(e)) {
		let t = e.getRootNode();
		if (Fp(t) || t instanceof Document) return t;
	}
	return Tp(e);
}
function Lp(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Rp(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		zp(e) && zp(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), Bp(e) && Bp(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function zp(e) {
	return "value" in e;
}
function Bp(e) {
	return e.tagName === "CANVAS";
}
function Vp(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (Hp(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return Vp(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function Hp(e) {
	return e?.tagName === "IFRAME";
}
var Up = /* @__PURE__ */ new WeakMap();
function Wp(e) {
	return !!e.closest("\n      input:not([disabled]),\n      select:not([disabled]),\n      textarea:not([disabled]),\n      button:not([disabled]),\n      a[href],\n      [contenteditable]:not([contenteditable=\"false\"])\n    ");
}
var Gp = class {
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
function Kp(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function qp(e) {
	let t = /* @__PURE__ */ new Set(), n = Kp(e);
	for (; n;) t.add(n), n = Kp(n);
	return t;
}
function Jp(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function Yp(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = Jp(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function Xp(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function Zp(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = kp(e, t);
	return n > 0 && r > 0;
}
var Qp = jp ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, $p, em = class extends Qp {
	constructor(e) {
		super((t) => {
			J(this, $p) ? e(t, this) : mp(this, $p, !0);
		}), pp(this, $p, !1);
	}
};
$p = /* @__PURE__ */ new WeakMap();
var tm = Array.from({ length: 100 }, (e, t) => t / 100), nm = 75, rm, im, am, om, sm, Y, cm, lm, um, dm, fm, pm = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, pp(this, um), this.disconnect = () => {
			var e, t, n;
			mp(this, cm, !0), (e = J(this, am)) == null || e.disconnect(), (t = J(this, om)) == null || t.disconnect(), J(this, sm).disconnect(), (n = J(this, Y)) == null || n.remove();
		}, pp(this, rm, !0), pp(this, im), pp(this, am), pp(this, om), pp(this, sm), pp(this, Y), pp(this, cm, !1), pp(this, lm, Yp(() => {
			var e;
			let { element: t } = this;
			if ((e = J(this, om)) == null || e.disconnect(), J(this, cm) || !J(this, rm) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = kp(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, mp(this, om, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? Lu.intersectionRatio(r, kp(t)) : n.intersectionRatio) !== 1 && J(this, lm).call(this);
			}, {
				threshold: tm,
				rootMargin: f,
				root: n
			})), J(this, om).observe(t), hp(this, um, dm).call(this);
		}, nm)), this.boundingClientRect = e.getBoundingClientRect(), mp(this, rm, Zp(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (mp(this, Y, document.createElement("div")), J(this, Y).style.background = "rgba(0,0,0,0.15)", J(this, Y).style.position = "fixed", J(this, Y).style.pointerEvents = "none", i.body.appendChild(J(this, Y))), mp(this, sm, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = J(this, rm);
			mp(this, rm, a), (o || s) && (c && !a ? ((n = J(this, om)) == null || n.disconnect(), this.callback(null), (r = J(this, am)) == null || r.disconnect(), mp(this, am, void 0), J(this, Y) && (J(this, Y).style.visibility = "hidden")) : J(this, lm).call(this), a && !J(this, am) && (mp(this, am, new em(J(this, lm))), J(this, am).observe(e)));
		}, {
			threshold: tm,
			root: i
		})), J(this, rm) && !n.skipInitial && this.callback(this.boundingClientRect), J(this, sm).observe(e);
	}
};
rm = /* @__PURE__ */ new WeakMap(), im = /* @__PURE__ */ new WeakMap(), am = /* @__PURE__ */ new WeakMap(), om = /* @__PURE__ */ new WeakMap(), sm = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), cm = /* @__PURE__ */ new WeakMap(), lm = /* @__PURE__ */ new WeakMap(), um = /* @__PURE__ */ new WeakSet(), dm = function() {
	J(this, cm) || (hp(this, um, fm).call(this), Xp(this.boundingClientRect, J(this, im)) || (this.callback(this.boundingClientRect), mp(this, im, this.boundingClientRect)));
}, fm = function() {
	if (J(this, Y)) {
		let { top: e, left: t, width: n, height: r } = kp(this.element);
		J(this, Y).style.overflow = "hidden", J(this, Y).style.visibility = "visible", J(this, Y).style.top = `${Math.floor(e)}px`, J(this, Y).style.left = `${Math.floor(t)}px`, J(this, Y).style.width = `${Math.floor(n)}px`, J(this, Y).style.height = `${Math.floor(r)}px`;
	}
};
var mm = /* @__PURE__ */ new WeakMap(), hm = /* @__PURE__ */ new WeakMap();
function gm(e, t) {
	let n = mm.get(e);
	return n ||= {
		disconnect: new pm(e, (t) => {
			let n = mm.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), mm.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (mm.delete(e), n.disconnect());
	};
}
function _m(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = gm(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function vm(e, t) {
	let n = e.ownerDocument;
	if (!hm.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), hm.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = hm.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), hm.delete(n));
	});
}
var ym, bm, xm, Sm, Cm = class {
	constructor(e, t, n) {
		this.callback = t, pp(this, ym), pp(this, bm, !1), pp(this, xm), pp(this, Sm, Yp((e) => {
			if (!J(this, bm) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of J(this, xm)) if (e.target.contains(t)) {
					this.callback(J(this, ym).boundingClientRect);
					break;
				}
			}
		}, nm));
		let r = qp(e), i = _m(r, t), a = vm(e, J(this, Sm));
		mp(this, xm, r), mp(this, ym, new pm(e, t, n)), this.disconnect = () => {
			J(this, bm) || (mp(this, bm, !0), i(), a(), J(this, ym).disconnect());
		};
	}
};
ym = /* @__PURE__ */ new WeakMap(), bm = /* @__PURE__ */ new WeakMap(), xm = /* @__PURE__ */ new WeakMap(), Sm = /* @__PURE__ */ new WeakMap();
function wm(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function Tm(e) {
	try {
		wm(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function Em(e) {
	return !jp || !e ? !1 : e === Tp(e).scrollingElement;
}
function Dm(e) {
	let t = xp(e), n = Em(e) ? Ep(e) : vp(e), r = t.visualViewport, i = Em(e) ? {
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
function Om(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = Dm(e), { x: s, y: c } = t ?? {
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
var km = class {
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
}, Am = new km((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), jm = new km((e) => setTimeout(e, 50)), Mm = /* @__PURE__ */ new Map(), Nm = Mm.clear.bind(Mm);
function Pm(e, t = !1) {
	if (!t) return Fm(e);
	let n = Mm.get(e);
	return n || (n = Fm(e), Mm.set(e, n), jm.schedule(Nm), n);
}
function Fm(e) {
	return xp(e).getComputedStyle(e);
}
function Im(e, t = Pm(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function Lm(e, t = Pm(e, !0)) {
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
var Rm = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function zm(e, t = Rm) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (Sp(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && Fp(t)) return o(t.host);
		if (!Cp(t)) return wp(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = Pm(t, !0);
		if (r && t === e || Lm(t, s) && a.add(t), Im(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function Bm(e) {
	let [t] = zm(e, { limit: 1 });
	return t ?? null;
}
function Vm(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = Kp(e);
	for (; r;) {
		if (r === t) return n;
		let e = vp(r), { x: i, y: a } = Hm(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = Kp(r);
	}
	return n;
}
function Hm(e, t = vp(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (Cp(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = Pm(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function Um(e) {
	if (e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function Wm(e) {
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
function Gm(e) {
	let { scale: t, transform: n, translate: r } = e, i = Um(t), a = Wm(r), o = Km(n);
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
function Km(e) {
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
var qm = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(qm || {}), Jm = {
	x: .2,
	y: .2
}, Ym = {
	x: 10,
	y: 10
};
function Xm(e, t, n, r = 25, i = Jm, a = Ym) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = Dm(e), p = Vm(e), m = Gm(Pm(e, !0)), h = m !== null && m?.scaleX < 0, g = m !== null && m?.scaleY < 0, _ = new Lu(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
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
function Zm(e) {
	return "scrollIntoViewIfNeeded" in e && typeof e.scrollIntoViewIfNeeded == "function";
}
function Qm(e, t = !1) {
	if (Zm(e)) {
		e.scrollIntoViewIfNeeded(t);
		return;
	}
	if (!Cp(e)) return e.scrollIntoView();
	var n = Bm(e);
	if (!Cp(n)) return;
	let r = Pm(n, !0), i = parseInt(r.getPropertyValue("border-top-width")), a = parseInt(r.getPropertyValue("border-left-width")), o = e.offsetTop - n.offsetTop < n.scrollTop, s = e.offsetTop - n.offsetTop + e.clientHeight - i > n.scrollTop + n.clientHeight, c = e.offsetLeft - n.offsetLeft < n.scrollLeft, l = e.offsetLeft - n.offsetLeft + e.clientWidth - a > n.scrollLeft + n.clientWidth, u = o && !s;
	(o || s) && t && (n.scrollTop = e.offsetTop - n.offsetTop - n.clientHeight / 2 - i + e.clientHeight / 2), (c || l) && t && (n.scrollLeft = e.offsetLeft - n.offsetLeft - n.clientWidth / 2 - a + e.clientWidth / 2), (o || s || c || l) && !t && e.scrollIntoView(u);
}
function $m(e, t, n) {
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
function eh(e, t, n) {
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
function th({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
function nh(e, t = Pm(e).translate, n = !0) {
	if (n) {
		let t = _p(e, (e) => "translate" in e);
		if (t) {
			let { translate: e = "" } = t[0];
			if (typeof e == "string") {
				let t = Wm(e);
				if (t) return t;
			}
		}
	}
	if (t) {
		let e = Wm(t);
		if (e) return e;
	}
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
var rh = new km((e) => setTimeout(e, 0)), ih = /* @__PURE__ */ new Map(), ah = ih.clear.bind(ih);
function oh(e) {
	let t = e.ownerDocument, n = ih.get(t);
	if (n) return n;
	n = t.getAnimations(), ih.set(t, n), rh.schedule(ah);
	let r = n.filter((t) => gp(t.effect) && t.effect.target === e);
	return ih.set(e, r), n;
}
function sh(e, t) {
	let n = oh(e).filter((e) => {
		if (gp(e.effect)) {
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
var ch = class extends Lu {
	constructor(e, t = {}) {
		let { frameTransform: n = Vm(e), ignoreTransforms: r, getBoundingClientRect: i = vp } = t, a = sh(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || Np()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = Pm(e), p = Gm(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = lh(e, f);
		a?.(), p && (d = eh(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = $m(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function lh(e, t) {
	let n = e.getAnimations(), r = null;
	if (!n.length) return null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let n = gp(e.effect) ? e.effect.getKeyframes() : [], i = n[n.length - 1];
		if (!i) continue;
		let { transform: a, translate: o, scale: s } = i;
		if (a || o || s) {
			let e = Gm({
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
function uh(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var dh = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (uh(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (uh(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (uh(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function fh(e) {
	return e ? e instanceof xp(e).Element || bp(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function ph(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = xp(e.target);
	return e instanceof t;
}
function mh(e) {
	if (!e) return !1;
	let { PointerEvent: t } = xp(e.target);
	return e instanceof t;
}
function hh(e) {
	if (!fh(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || gh(e);
}
function gh(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var _h = {};
function vh(e) {
	let t = _h[e] == null ? 0 : _h[e] + 1;
	return _h[e] = t, `${e}-${t}`;
}
// node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/index.js
var yh = Object.create, bh = Object.defineProperty, xh = Object.defineProperties, Sh = Object.getOwnPropertyDescriptor, Ch = Object.getOwnPropertyDescriptors, wh = Object.getOwnPropertySymbols, Th = Object.prototype.hasOwnProperty, Eh = Object.prototype.propertyIsEnumerable, Dh = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Oh = (e) => {
	throw TypeError(e);
}, kh = (e, t, n) => t in e ? bh(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Ah = (e, t) => {
	for (var n in t ||= {}) Th.call(t, n) && kh(e, n, t[n]);
	if (wh) for (var n of wh(t)) Eh.call(t, n) && kh(e, n, t[n]);
	return e;
}, jh = (e, t) => xh(e, Ch(t)), Mh = (e, t) => bh(e, "name", {
	value: t,
	configurable: !0
}), Nh = (e, t) => {
	var n = {};
	for (var r in e) Th.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && wh) for (var r of wh(e)) t.indexOf(r) < 0 && Eh.call(e, r) && (n[r] = e[r]);
	return n;
}, Ph = (e) => [
	,
	,
	,
	yh(e?.[Dh("metadata")] ?? null)
], Fh = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Ih = (e) => e !== void 0 && typeof e != "function" ? Oh("Function expected") : e, Lh = (e, t, n, r, i) => ({
	kind: Fh[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Oh("Already initialized") : i.push(Ih(e || null))
}), Rh = (e, t) => kh(t, Dh("metadata"), e[3]), X = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, zh = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = Fh[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && Sh(d < 4 ? i : {
		get [n]() {
			return Z(this, a);
		},
		set [n](e) {
			return Hh(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Mh(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Mh(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = Lh(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => Vh(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Z : Uh)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Hh(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? Ih(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? Oh("Object expected") : (Ih(o = s.get) && (v.get = o), Ih(o = s.set) && (v.set = o), Ih(o = s.init) && g.unshift(o));
	return d || Rh(e, i), v && bh(i, n, v), p ? d ^ 4 ? a : v : i;
}, Bh = (e, t, n) => t.has(e) || Oh("Cannot " + n), Vh = (e, t) => Object(t) === t ? e.has(t) : Oh("Cannot use the \"in\" operator on this value"), Z = (e, t, n) => (Bh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Q = (e, t, n) => t.has(e) ? Oh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Hh = (e, t, n, r) => (Bh(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Uh = (e, t, n) => (Bh(e, t, "access private method"), n), Wh = {
	role: "button",
	roleDescription: "draggable"
}, Gh = "dnd-kit-description", Kh = "dnd-kit-announcement", qh = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, Jh = {
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
function Yh(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function Xh(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function Zh(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var Qh = ["dragover", "dragmove"], $h = class extends G {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = Gh, announcement: i = Kh } = {}, announcements: a = Jh, screenReaderInstructions: o = qh, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : vh(r), l = n ? `${i}-${n}` : vh(i), u, d, f, p, m = (e = p) => {
			f && e && f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => Am.schedule(m), g = eg(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, Qh.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = Xh(c, o.draggable), e.push(u)), d?.isConnected || (d = Zh(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					u && d || y.add(v), Yh(t) && !Np() || t.hasAttribute("tabindex") || y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", Wh.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", Wh.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && Am.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function eg(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var tg = class extends G {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let n = Rl(() => Tp(this.manager.dragOperation.source?.element));
		this.destroy = ul(() => {
			let { dragOperation: e } = this.manager, { cursor: t = "grabbing", nonce: r } = this.options ?? {};
			if (e.status.initialized) {
				let e = n.value, i = e.createElement("style");
				return r && i.setAttribute("nonce", r), i.textContent = `* { cursor: ${t} !important; }`, e.head.appendChild(i), () => i.remove();
			}
		});
	}
}, ng = /* @__PURE__ */ new Map(), rg, ig, ag, og, sg, cg, lg, ug, dg, fg, pg, mg, hg, gg = class extends (sg = Td, og = [R], ag = [z], ig = [z], rg = [z], sg) {
	constructor(e) {
		super(e), X(lg, 5, this), Q(this, dg), Q(this, cg, /* @__PURE__ */ new Set()), Q(this, ug, X(lg, 8, this, /* @__PURE__ */ new Set())), X(lg, 11, this), this.registerEffect(Uh(this, dg, fg));
	}
	register(e) {
		return Z(this, cg).add(e), () => {
			Z(this, cg).delete(e);
		};
	}
	addRoot(e) {
		return L(() => {
			let t = new Set(this.additionalRoots);
			t.add(e), this.additionalRoots = t;
		}), () => {
			L(() => {
				let t = new Set(this.additionalRoots);
				t.delete(e), this.additionalRoots = t;
			});
		};
	}
	get sourceRoot() {
		let { source: e } = this.manager.dragOperation;
		return Ip(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return Ip(e?.element ?? null);
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
lg = Ph(sg), cg = /* @__PURE__ */ new WeakMap(), ug = /* @__PURE__ */ new WeakMap(), dg = /* @__PURE__ */ new WeakSet(), fg = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of Z(this, cg)) t.push(Uh(this, dg, pg).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, pg = function(e, t) {
	let n = ng.get(e);
	n || (n = /* @__PURE__ */ new Map(), ng.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = Sp(e) ? Uh(this, dg, mg).call(this, e, n, t) : Uh(this, dg, hg).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, mg = function(e, t, n) {
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
			i.disconnect(), r.remove(), t.delete(n), t.size === 0 && ng.delete(e);
		}
	};
}, hg = function(e, t, n) {
	"adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets);
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (Fp(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && ng.delete(e);
		}
	};
}, zh(lg, 4, "additionalRoots", og, gg, ug), zh(lg, 2, "sourceRoot", ag, gg), zh(lg, 2, "targetRoot", ig, gg), zh(lg, 2, "roots", rg, gg), Rh(lg, gg);
var _g = "data-dnd-", vg = `${_g}dropping`, yg = "--dnd-", bg = `${_g}dragging`, xg = `${_g}placeholder`, Sg = [
	bg,
	xg,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], Cg = ["view-transition-name"], wg = `
  :is(:root,:host) [${bg}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${yg}top, 0px) !important;
    left: var(${yg}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${yg}width, auto);
    max-width: var(${yg}width, auto);
    height: var(${yg}height, auto);
    max-height: var(${yg}height, auto);
    transition: var(${yg}transition) !important;
  }

  :is(:root,:host) [${xg}] {
    transition: none;
  }

  :is(:root,:host) [${xg}='hidden'] {
    visibility: hidden;
  }

  [${bg}] * {
    pointer-events: none !important;
  }

  [${bg}]:not([${vg}]) {
    translate: var(${yg}translate) !important;
  }

  [${bg}][style*='${yg}scale'] {
    scale: var(${yg}scale) !important;
    transform-origin: var(${yg}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${bg}][popover]) {
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
  [${bg}]::backdrop, [${_g}overlay]:not([${bg}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function Tg(e, t = "hidden") {
	return L(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = Eg(n, r.registry.droppables), a = [], o = Rp(n), { remove: s } = o;
		return Dg(i, o, a), Og(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function Eg(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${_g}${vh("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function Dg(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), Up.set(o, a), n.push(() => {
			Up.delete(o), r.proxy = void 0;
		});
	}
}
function Og(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(xg, t);
}
function kg(e, t) {
	return e === t || Kp(e) === Kp(t);
}
function Ag(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && fh(t) && t.hasAttribute("popover") && requestAnimationFrame(() => Tm(t));
}
function jg(e) {
	return e.tagName === "TR";
}
function Mg(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || Sg.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (uh(e) && uh(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (Cg.includes(e) || e.startsWith(yg)) continue;
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
function Ng(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), Tm(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), Tm(n);
				return;
			}
		}
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function Pg(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new ch(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = Pp();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, yg), (t = e.getElementMutationObserver()) == null || t.takeRecords(), jg(e.element) && jg(e.placeholder)) {
			let t = Array.from(e.element.cells), n = Array.from(e.placeholder.cells);
			e.getSavedCellWidths() || e.setSavedCellWidths(t.map((e) => e.style.width));
			for (let [e, r] of t.entries()) {
				let t = n[e];
				r.style.width = `${t.getBoundingClientRect().width}px`;
			}
		}
		e.dragOperation.shape = new ch(e.feedbackElement);
	});
}
var Fg = 250, Ig = "ease";
function Lg(e) {
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
	let { duration: r = Fg, easing: i = Ig } = n ?? {};
	Tm(e.feedbackElement);
	let [, a] = _p(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: kg(e.feedbackElement, o) ? null : void 0 }, c = new ch(e.feedbackElement, s), l = Wm(Pm(e.feedbackElement).translate) ?? e.translate, u = new ch(o, s), d = Lu.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, yg), e.feedbackElement.setAttribute(vg, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), th({
		element: e.feedbackElement,
		keyframes: jh(Ah(Ah({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: Lp(xp(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(vg), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var Rg, zg, Bg, Vg, Hg, Ug, Wg, Gg = class extends (zg = G, Rg = [R], zg) {
	constructor(e, t) {
		super(e, t), Q(this, Hg), Q(this, Vg, X(Bg, 8, this)), X(Bg, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(gg), r = n?.register(wg);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(Uh(this, Hg, Ug).bind(this, n)), this.registerEffect(Uh(this, Hg, Wg));
	}
};
Bg = Ph(zg), Vg = /* @__PURE__ */ new WeakMap(), Hg = /* @__PURE__ */ new WeakSet(), Ug = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = Ip(t);
	if (n) return e.addRoot(n);
}, Wg = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s, feedback: c } = a;
	if (!s || c === "none" || !o.initialized || o.initializing) return;
	let { initial: l } = e, u = this.overlay ?? s, d = Vm(u), f = Vm(s), p = !kg(s, u), m = new ch(s, {
		frameTransform: p ? f : null,
		ignoreTransforms: !p
	}), h = {
		x: f.scaleX / d.scaleX,
		y: f.scaleY / d.scaleY
	}, { width: g, height: _, top: v, left: y } = m;
	p && (g /= h.x, _ /= h.y);
	let b = new dh(u), { transition: x, translate: S, boxSizing: C, paddingBlockStart: ee, paddingBlockEnd: te, paddingInlineStart: w, paddingInlineEnd: ne, borderInlineStartWidth: T, borderInlineEndWidth: re, borderBlockStartWidth: ie, borderBlockEndWidth: ae } = Pm(s), oe = c === "clone", se = C === "content-box", ce = se ? parseInt(w) + parseInt(ne) + parseInt(T) + parseInt(re) : 0, E = se ? parseInt(ee) + parseInt(te) + parseInt(ie) + parseInt(ae) : 0, D = c !== "move" && !this.overlay ? Tg(a, oe ? "clone" : "hidden") : null, le = L(() => ph(t.dragOperation.activatorEvent));
	if (S !== "none") {
		let e = Wm(S);
		e && !l.translate && (l.translate = e);
	}
	if (!l.transformOrigin) {
		let e = L(() => i.current);
		l.transformOrigin = {
			x: (e.x - y * d.scaleX - d.x) / (g * d.scaleX),
			y: (e.y - v * d.scaleY - d.y) / (_ * d.scaleY)
		};
	}
	let { transformOrigin: ue } = l, de = v * d.scaleY + d.y, fe = y * d.scaleX + d.x;
	if (!l.coordinates && (l.coordinates = {
		x: fe,
		y: de
	}, h.x !== 1 || h.y !== 1)) {
		let { scaleX: e, scaleY: t } = f, { x: n, y: r } = ue;
		l.coordinates.x += (g * e - g) * n, l.coordinates.y += (_ * t - _) * r;
	}
	l.dimensions ||= {
		width: g,
		height: _
	}, l.frameTransform ||= d;
	let pe = {
		x: l.coordinates.x - fe,
		y: l.coordinates.y - de
	}, me = {
		width: (l.dimensions.width * l.frameTransform.scaleX - g * d.scaleX) * ue.x,
		height: (l.dimensions.height * l.frameTransform.scaleY - _ * d.scaleY) * ue.y
	}, he = {
		x: pe.x / d.scaleX + me.width,
		y: pe.y / d.scaleY + me.height
	}, ge = {
		left: y + he.x,
		top: v + he.y
	};
	u.setAttribute(bg, "true");
	let _e = L(() => r.transform), ve = l.translate ?? {
		x: 0,
		y: 0
	}, ye = _e.x * d.scaleX + ve.x, be = _e.y * d.scaleY + ve.y, xe = Pp();
	b.set({
		width: g - ce,
		height: _ - E,
		top: ge.top + xe.y,
		left: ge.left + xe.x,
		translate: `${ye}px ${be}px 0`,
		transition: x ? `${x}, translate 0ms linear` : "",
		scale: p ? `${h.x} ${h.y}` : "",
		"transform-origin": `${ue.x * 100}% ${ue.y * 100}%`
	}, yg), D && (s.insertAdjacentElement("afterend", D), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), wm(u) && (u.hasAttribute("popover") || u.setAttribute("popover", "manual"), Tm(u), u.addEventListener("beforetoggle", Ag));
	let Se, O, k, Ce = Pg({
		placeholder: D,
		element: s,
		feedbackElement: u,
		frameTransform: d,
		transformOrigin: ue,
		width: g,
		height: _,
		top: v,
		left: y,
		widthOffset: ce,
		heightOffset: E,
		delta: he,
		styles: b,
		dragOperation: r,
		getElementMutationObserver: () => Se,
		getSavedCellWidths: () => k,
		setSavedCellWidths: (e) => {
			k = e;
		}
	}), we = new ch(u);
	L(() => r.shape = we);
	let Te = xp(u), Ee = (e) => {
		this.manager.actions.stop({ event: e });
	}, De = Lp(Te);
	le && Te.addEventListener("resize", Ee), L(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), D && (Ce.observe(D), Se = Mg(s, D, oe), O = Ng(s, D, u));
	let Oe = t.dragOperation.source?.id, ke = () => {
		if (!le || Oe == null) return;
		let e = t.registry.draggables.get(Oe), n = e?.handle ?? e?.element;
		Cp(n) && n.focus();
	}, Ae = () => {
		if (Se?.disconnect(), O?.disconnect(), Ce.disconnect(), Te.removeEventListener("resize", Ee), wm(u) && (u.removeEventListener("beforetoggle", Ag), u.removeAttribute("popover")), u.removeAttribute(bg), b.reset(), k && jg(s)) {
			let e = Array.from(s.cells);
			for (let [t, n] of e.entries()) n.style.width = k[t] ?? "";
		}
		a.status = "idle";
		let t = e.current.translate != null;
		D && (t || D.parentElement !== u.parentElement) && u.isConnected && D.replaceWith(u), D?.remove();
	}, je = n?.dropAnimation, Me = this, Ne = Vl(() => {
		let { transform: t, status: n } = r;
		if ((t.x || t.y || e.current.translate) && n.dragging) {
			let n = l.translate ?? {
				x: 0,
				y: 0
			}, i = {
				x: t.x / d.scaleX + n.x,
				y: t.y / d.scaleY + n.y
			}, a = e.current.translate, o = L(() => r.modifiers), s = L(() => r.shape?.current), c = le && !De ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
			if (b.set({
				transition: `${x}, translate ${c}`,
				translate: `${i.x}px ${i.y}px 0`
			}, yg), Se?.takeRecords(), s && s !== we && a && !o.length) {
				let e = Iu.delta(i, a);
				r.shape = Lu.from(s.boundingRectangle).translate(e.x * d.scaleX, e.y * d.scaleY);
			} else r.shape = new ch(u);
			e.current.translate = i;
		}
	}, function() {
		if (r.status.dropped) {
			this.dispose(), a.status = "dropping";
			let n = Me.dropAnimation === void 0 ? je : Me.dropAnimation, r = e.current.translate, i = r != null;
			if (!r && s !== u && (r = {
				x: 0,
				y: 0
			}), !r || n === null) {
				Ae();
				return;
			}
			t.renderer.rendering.then(() => {
				Lg({
					element: s,
					feedbackElement: u,
					placeholder: D,
					translate: r,
					moved: i,
					transition: x,
					alignment: a.alignment,
					styles: b,
					animation: n ?? void 0,
					getElementMutationObserver: () => Se,
					cleanup: Ae,
					restoreFocus: ke
				});
			});
		}
	});
	return () => {
		Ae(), Ne();
	};
}, zh(Bg, 4, "overlay", Rg, Gg, Vg), Rh(Bg, Gg), Gg.configure = yd(Gg);
var Kg = Gg, qg = !0, Jg = !1, Yg, Xg, Zg = [R], Qg = qm.Forward, $g, e_, t_;
Xg = (Yg = [R], qm.Reverse);
var n_ = class {
	constructor() {
		Q(this, e_, X($g, 8, this, qg)), X($g, 11, this), Q(this, t_, X($g, 12, this, qg)), X($g, 15, this);
	}
	isLocked(e) {
		return e === qm.Idle ? !1 : e == null ? this[qm.Forward] === qg && this[qm.Reverse] === qg : this[e] === qg;
	}
	unlock(e) {
		e !== qm.Idle && (this[e] = Jg);
	}
};
$g = Ph(null), e_ = /* @__PURE__ */ new WeakMap(), t_ = /* @__PURE__ */ new WeakMap(), zh($g, 4, Qg, Zg, n_, e_), zh($g, 4, Xg, Yg, n_, t_), Rh($g, n_);
var r_ = [qm.Forward, qm.Reverse], i_ = class {
	constructor() {
		this.x = new n_(), this.y = new n_();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, a_ = class extends G {
	constructor(e) {
		super(e);
		let t = el(new i_()), n = null;
		this.signal = t, ul(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new i_();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: o_(i.x, n.x),
					y: o_(i.y, n.y)
				}, r = t.peek();
				F(() => {
					for (let t of qu) for (let n of r_) e[t] === n && r[t].unlock(n);
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
function o_(e, t) {
	return Math.sign(e - t);
}
var s_, c_, l_, u_, d_, f_, p_ = class extends (c_ = Td, s_ = [R], c_) {
	constructor(e) {
		super(e), Q(this, u_, X(l_, 8, this, !1)), X(l_, 11, this), Q(this, d_), Q(this, f_, () => {
			if (!Z(this, d_)) return;
			let { element: e, by: t } = Z(this, d_);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e) => {
			if (this.disabled) return !1;
			let t = this.getScrollableElements();
			if (!t) return Hh(this, d_, void 0), !1;
			let { position: n } = this.manager.dragOperation, r = n?.current;
			if (r) {
				let { by: n } = e ?? {}, i = n ? {
					x: m_(n.x),
					y: m_(n.y)
				} : void 0, a = i ? void 0 : this.scrollIntentTracker.current;
				if (a?.isLocked()) return !1;
				for (let e of t) {
					let t = Om(e, n);
					if (t.x || t.y) {
						let { speed: t, direction: o } = Xm(e, r, i);
						if (a) for (let e of qu) a[e].isLocked(o[e]) && (t[e] = 0, o[e] = 0);
						if (o.x || o.y) {
							let { x: r, y: i } = n ?? o, a = r * t.x, s = i * t.y;
							if (a || s) {
								let t = Z(this, d_)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !s)) continue;
								return Hh(this, d_, {
									element: e,
									by: {
										x: a,
										y: s
									}
								}), Am.schedule(Z(this, f_)), !0;
							}
						}
					}
				}
			}
			return Hh(this, d_, void 0), !1;
		};
		let t = null, n = null, r = Rl(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = Vp(Ip(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = Rl(() => {
			let t = r.value, { documentElement: i } = Tp(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = zm(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = zm(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, zl);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new a_(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			!this.disabled && !t.defaultPrevented && ph(e.dragOperation.activatorEvent) && t.by && this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
l_ = Ph(c_), u_ = /* @__PURE__ */ new WeakMap(), d_ = /* @__PURE__ */ new WeakMap(), f_ = /* @__PURE__ */ new WeakMap(), zh(l_, 4, "autoScrolling", s_, p_, u_), Rh(l_, p_);
function m_(e) {
	return e > 0 ? qm.Forward : e < 0 ? qm.Reverse : qm.Idle;
}
var h_ = new class {
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
}), g_ = 10, __ = class extends G {
	constructor(e, t) {
		super(e);
		let n = e.registry.plugins.get(p_);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = ul(() => {
			if (this.disabled) return;
			let { position: t, status: r } = e.dragOperation;
			if (r.dragging) {
				if (n.scroll()) {
					n.autoScrolling = !0;
					let e = setInterval(() => h_.schedule(n.scroll), g_);
					return () => {
						clearInterval(e);
					};
				}
				n.autoScrolling = !1;
			}
		});
	}
}, v_ = {
	capture: !0,
	passive: !0
}, y_, b_ = class extends Td {
	constructor(e) {
		super(e), Q(this, y_), this.handleScroll = () => {
			Z(this, y_) ?? Hh(this, y_, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), Hh(this, y_, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = ul(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, v_), () => {
					e.removeEventListener("scroll", this.handleScroll, v_);
				};
			}
		});
	}
};
y_ = /* @__PURE__ */ new WeakMap();
var x_ = class extends G {
	constructor(e, t) {
		super(e, t), this.manager = e, this.destroy = ul(() => {
			let { dragOperation: e } = this.manager, { nonce: t } = this.options ?? {};
			if (e.status.initialized) {
				let e = document.createElement("style");
				return t && e.setAttribute("nonce", t), e.textContent = "* { user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(e), S_(), document.addEventListener("selectionchange", S_, { capture: !0 }), () => {
					document.removeEventListener("selectionchange", S_, { capture: !0 }), e.remove();
				};
			}
		});
	}
};
function S_() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var C_ = Object.freeze({
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
}), w_, T_ = class extends Nf {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, Q(this, w_, []), this.listeners = new Gp(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !fh(e.target) || t.disabled) return;
			let { keyboardCodes: r = C_.keyboardCodes, preventActivation: i = C_.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return ul(() => {
			let n = e.handle ?? e.element, r = (n) => {
				ph(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), Qm(r);
		let { center: i } = new ch(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = Tp(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		Z(this, w_).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = C_.keyboardCodes } = n ?? {};
		if (D_(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = D_(e, r.cancel);
			this.handleEnd(e, t);
		} else D_(e, r.up) ? this.handleMove("up", e) : D_(e, r.down) && this.handleMove("down", e), D_(e, r.left) ? this.handleMove("left", e) : D_(e, r.right) && this.handleMove("right", e);
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
		}, a = this.options?.offset ?? C_.offset;
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
		let e = this.manager.registry.plugins.get(__);
		e?.disabled === !1 && (e.disable(), Z(this, w_).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		Z(this, w_).forEach((e) => e()), Hh(this, w_, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
w_ = /* @__PURE__ */ new WeakMap(), T_.configure = yd(T_), T_.defaults = C_;
var E_ = T_;
function D_(e, t) {
	return t.includes(e.code);
}
var O_, k_ = class extends If {
	constructor() {
		super(...arguments), Q(this, O_);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				Hh(this, O_, Ap(e));
				break;
			case "pointermove":
				if (!Z(this, O_)) return;
				let { x: t, y: n } = Ap(e), r = {
					x: t - Z(this, O_).x,
					y: n - Z(this, O_).y
				}, { tolerance: i } = this.options;
				if (i && Gu(r, i)) {
					this.abort();
					return;
				}
				Gu(r, this.options.value) && this.activate(e);
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		Hh(this, O_, void 0);
	}
};
O_ = /* @__PURE__ */ new WeakMap();
var A_, j_, M_ = class extends If {
	constructor() {
		super(...arguments), Q(this, A_), Q(this, j_);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				Hh(this, j_, Ap(e)), Hh(this, A_, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!Z(this, j_)) return;
				let { x: t, y: n } = Ap(e);
				Gu({
					x: t - Z(this, j_).x,
					y: n - Z(this, j_).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		Z(this, A_) && (clearTimeout(Z(this, A_)), Hh(this, j_, void 0), Hh(this, A_, void 0));
	}
};
A_ = /* @__PURE__ */ new WeakMap(), j_ = /* @__PURE__ */ new WeakMap();
var N_ = class {};
N_.Delay = M_, N_.Distance = k_;
var P_ = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (n !== "mouse" || !fh(r) || t.handle !== r && !t.handle?.contains(r)) return n === "touch" ? [new N_.Delay({
			value: 250,
			tolerance: 5
		})] : hh(r) && !e.defaultPrevented ? [new N_.Delay({
			value: 200,
			tolerance: 0
		})] : [new N_.Delay({
			value: 200,
			tolerance: 10
		}), new N_.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		return n === t.element || n === t.handle || !fh(n) || t.handle?.contains(n) ? !1 : Wp(n);
	}
}), F_, I_ = class extends Nf {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, Q(this, F_, /* @__PURE__ */ new Set()), this.listeners = new Gp(), this.latest = {
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
		let { activationConstraints: r = P_.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return ul(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				mh(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (H_(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !fh(e.target) || t.disabled || R_(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = P_.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = Cp(i) && i.draggable && i.getAttribute("draggable") === "true", o = Vm(t.element), { x: s, y: c } = Ap(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new Pf(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = Mp(), f = this.listeners.bind(d, [
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
				listener: a ? this.handleCancel : z_,
				options: { capture: !0 }
			}
		]);
		Z(this, F_).add(() => {
			f(), this.initialCoordinates = void 0;
		});
	}
	handlePointerMove(e, t) {
		var n;
		if (this.controller?.activated === !1) (n = this.controller) == null || n.onEvent(e);
		else if (this.manager.dragOperation.status.dragging) {
			let n = Ap(e), r = Vm(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, Am.schedule(this.handleMove);
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
		let i = Tp(t.target).body;
		i.setPointerCapture(t.pointerId);
		let a = fh(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: z_,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: z_
			},
			{
				type: "contextmenu",
				listener: z_
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		Z(this, F_).add(o);
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
		}, Z(this, F_).forEach((e) => e()), Z(this, F_).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
F_ = /* @__PURE__ */ new WeakMap(), I_.configure = yd(I_), I_.defaults = P_;
var L_ = I_;
function R_(e) {
	return "sensor" in e;
}
function z_(e) {
	e.preventDefault();
}
function B_() {}
var V_ = /* @__PURE__ */ new WeakSet();
function H_(e) {
	e && !V_.has(e) && (e.addEventListener("touchmove", B_, {
		capture: !1,
		passive: !1
	}), V_.add(e));
}
var U_ = {
	modifiers: [],
	plugins: [
		$h,
		__,
		tg,
		Kg,
		x_
	],
	sensors: [L_, E_]
}, W_ = class extends op {
	constructor(e = {}) {
		let t = ap(e.plugins, U_.plugins), n = ap(e.sensors, U_.sensors), r = ap(e.modifiers, U_.modifiers);
		super(jh(Ah({}, e), {
			plugins: [
				b_,
				p_,
				gg,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, G_, K_, q_, J_, Y_, X_, Z_, Q_, $_ = class extends (J_ = yf, q_ = [R], K_ = [R], G_ = [R], J_) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a, feedback: o = "default" } = n, s = Nh(n, [
			"element",
			"effects",
			"handle",
			"feedback"
		]);
		super(Ah({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(bd) ?? [...e.sensors]).map((t) => {
				let n = t instanceof Nf ? t : e.registry.register(t.plugin), r = t instanceof Nf ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, s), t), Q(this, X_, X(Y_, 8, this)), X(Y_, 11, this), Q(this, Z_, X(Y_, 12, this)), X(Y_, 15, this), Q(this, Q_, X(Y_, 16, this)), X(Y_, 19, this), this.element = r, this.handle = a, this.feedback = o;
	}
};
Y_ = Ph(J_), X_ = /* @__PURE__ */ new WeakMap(), Z_ = /* @__PURE__ */ new WeakMap(), Q_ = /* @__PURE__ */ new WeakMap(), zh(Y_, 4, "handle", q_, $_, X_), zh(Y_, 4, "element", K_, $_, Z_), zh(Y_, 4, "feedback", G_, $_, Q_), Rh(Y_, $_);
var ev, tv, nv, rv, iv, av, ov, sv, cv, lv, uv = class extends (nv = Mf, tv = [R], ev = [R], nv) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = Nh(n, ["element", "effects"]);
		let { collisionDetector: o = lp } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new ch(n), i = L(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = el(!1);
		super(jh(Ah({}, a), {
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
						let t = new Cm(e, s);
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
		}), t), Q(this, cv), Q(this, iv, X(rv, 8, this)), X(rv, 11, this), Q(this, lv, X(rv, 12, this)), X(rv, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		Hh(this, cv, e, sv);
	}
	get element() {
		return this.proxy ?? Z(this, cv, ov);
	}
};
rv = Ph(nv), iv = /* @__PURE__ */ new WeakMap(), cv = /* @__PURE__ */ new WeakSet(), lv = /* @__PURE__ */ new WeakMap(), av = zh(rv, 20, "#element", tv, cv, iv), ov = av.get, sv = av.set, zh(rv, 4, "proxy", ev, uv, lv), Rh(rv, uv);
// node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/sortable.js
var dv = Object.create, fv = Object.defineProperty, pv = Object.defineProperties, mv = Object.getOwnPropertyDescriptor, hv = Object.getOwnPropertyDescriptors, gv = Object.getOwnPropertySymbols, _v = Object.prototype.hasOwnProperty, vv = Object.prototype.propertyIsEnumerable, yv = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), bv = (e) => {
	throw TypeError(e);
}, xv = (e, t, n) => t in e ? fv(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Sv = (e, t) => {
	for (var n in t ||= {}) _v.call(t, n) && xv(e, n, t[n]);
	if (gv) for (var n of gv(t)) vv.call(t, n) && xv(e, n, t[n]);
	return e;
}, Cv = (e, t) => pv(e, hv(t)), wv = (e, t) => {
	var n = {};
	for (var r in e) _v.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && gv) for (var r of gv(e)) t.indexOf(r) < 0 && vv.call(e, r) && (n[r] = e[r]);
	return n;
}, Tv = (e) => [
	,
	,
	,
	dv(null)
], Ev = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Dv = (e) => e !== void 0 && typeof e != "function" ? bv("Function expected") : e, Ov = (e, t, n, r, i) => ({
	kind: Ev[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? bv("Already initialized") : i.push(Dv(e || null))
}), kv = (e, t) => xv(t, yv("metadata"), e[3]), Av = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, jv = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u, d = t & 7, f = !1, p = !1, m = e.length + 1, h = Ev[d + 5], g = e[m - 1] = [], _ = e[m] || (e[m] = []), v = (i = i.prototype, mv({
		get [n]() {
			return Nv(this, a);
		},
		set [n](e) {
			return Fv(this, a, e);
		}
	}, n)), y = r.length - 1; y >= 0; y--) l = Ov(d, n, c = {}, e[3], _), l.static = f, l.private = p, u = l.access = { has: (e) => n in e }, u.get = (e) => e[n], u.set = (e, t) => e[n] = t, s = (0, r[y])({
		get: v.get,
		set: v.set
	}, l), c._ = 1, s === void 0 ? Dv(s) && (v[h] = s) : typeof s != "object" || !s ? bv("Object expected") : (Dv(o = s.get) && (v.get = o), Dv(o = s.set) && (v.set = o), Dv(o = s.init) && g.unshift(o));
	return v && fv(i, n, v), i;
}, Mv = (e, t, n) => t.has(e) || bv("Cannot " + n), Nv = (e, t, n) => (Mv(e, t, "read from private field"), t.get(e)), Pv = (e, t, n) => t.has(e) ? bv("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Fv = (e, t, n, r) => (Mv(e, t, "write to private field"), t.set(e, n), n);
function Iv(e) {
	return e instanceof _y || e instanceof gy;
}
var Lv = 10, Rv = class extends G {
	constructor(e) {
		super(e);
		let t = ul(() => {
			let { dragOperation: t } = e;
			if (ph(t.activatorEvent) && Iv(t.source) && t.status.initialized) {
				let t = e.registry.plugins.get(p_);
				if (t) return t.disable(), () => t.enable();
			}
		}), n = e.monitor.addEventListener("dragmove", (e, t) => {
			queueMicrotask(() => {
				if (this.disabled || e.defaultPrevented || !e.nativeEvent) return;
				let { dragOperation: n } = t;
				if (!ph(e.nativeEvent) || !Iv(n.source) || !n.shape) return;
				let { actions: r, collisionObserver: i, registry: a } = t, { by: o } = e;
				if (!o) return;
				let s = zv(o), { source: c, target: l } = n, { center: u } = n.shape.current, d = [], f = [];
				F(() => {
					for (let e of a.droppables) {
						let { id: t } = e;
						if (!e.accepts(c) || t === l?.id && Iv(e) || !e.element) continue;
						let n = e.shape, r = new ch(e.element, { getBoundingClientRect: (e) => kp(e, void 0, .2) });
						r.height && r.width && (s == "down" && u.y + Lv < r.center.y || s == "up" && u.y - Lv > r.center.y || s == "left" && u.x - Lv > r.center.x || s == "right" && u.x + Lv < r.center.x) && (d.push(e), e.shape = r, f.push(() => e.shape = n));
					}
				}), e.preventDefault(), i.disable();
				let p = i.computeCollisions(d, up);
				F(() => f.forEach((e) => e()));
				let [m] = p;
				if (!m) return;
				let { id: h } = m, { index: g, group: _ } = c.sortable;
				r.setDropTarget(h).then(() => {
					let { source: e, target: t, shape: a } = n;
					if (!e || !Iv(e) || !a) return;
					let { index: o, group: s, target: c } = e.sortable, l = g !== o || _ !== s, u = l ? c : t?.element;
					if (!u) return;
					Qm(u);
					let d = new ch(u);
					if (!d) return;
					let f = Lu.delta(d, Lu.from(a.current.boundingRectangle), e.alignment);
					r.move({ by: f }), l ? r.setDropTarget(e.id).then(() => i.enable()) : i.enable();
				});
			});
		});
		this.destroy = () => {
			n(), t();
		};
	}
};
function zv(e) {
	let { x: t, y: n } = e;
	if (t > 0) return "right";
	if (t < 0) return "left";
	if (n > 0) return "down";
	if (n < 0) return "up";
}
var Bv = Object.defineProperty, Vv = Object.defineProperties, Hv = Object.getOwnPropertyDescriptors, Uv = Object.getOwnPropertySymbols, Wv = Object.prototype.hasOwnProperty, Gv = Object.prototype.propertyIsEnumerable, Kv = (e, t, n) => t in e ? Bv(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, qv = (e, t) => {
	for (var n in t ||= {}) Wv.call(t, n) && Kv(e, n, t[n]);
	if (Uv) for (var n of Uv(t)) Gv.call(t, n) && Kv(e, n, t[n]);
	return e;
}, Jv = (e, t) => Vv(e, Hv(t));
function Yv(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Xv(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function Zv(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (Xv(r)) {
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
	if (c === -1 && Xv(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return Jv(qv({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return Jv(qv({}, e), {
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
		if (l != null && l === d && c === u && Xv(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return Jv(qv({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return Jv(qv({}, e), {
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
	if (l === d) return Jv(qv({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return Jv(qv({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function Qv(e, t) {
	return Zv(e, t, Yv);
}
var $v = "__default__", ey = class extends G {
	constructor(e) {
		super(e);
		let t = () => {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.registry.droppables) if (n instanceof _y) {
				let { sortable: e } = n, { group: r } = e, i = t.get(r);
				i || (i = /* @__PURE__ */ new Set(), t.set(r, i)), i.add(e);
			}
			for (let [e, n] of t) t.set(e, new Set(ry(n)));
			return t;
		}, n = [e.monitor.addEventListener("dragover", (e, n) => {
			if (this.disabled) return;
			let { dragOperation: r } = n, { source: i, target: a } = r;
			if (!Iv(i) || !Iv(a) || i.sortable === a.sortable) return;
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
					let f = ry(c), p = s ? f : ry(l), m = i.sortable.group ?? $v, h = a.sortable.group ?? $v, g = {
						[m]: f,
						[h]: p
					}, _ = Qv(g, e);
					if (g === _) return;
					let v = _[h].indexOf(i.sortable), y = _[h].indexOf(a.sortable);
					n.collisionObserver.disable(), ty(u, v, d, y), F(() => {
						for (let [e, t] of _[m].entries()) t.index = e;
						if (!s) for (let [e, t] of _[h].entries()) t.group = a.sortable.group, t.index = e;
					}), n.actions.setDropTarget(i.id).then(() => n.collisionObserver.enable());
				});
			});
		}), e.monitor.addEventListener("dragend", (e, n) => {
			if (!e.canceled) return;
			let { dragOperation: r } = n, { source: i } = r;
			Iv(i) && (i.sortable.initialIndex !== i.sortable.index || i.sortable.initialGroup !== i.sortable.group) && queueMicrotask(() => {
				let e = t(), r = e.get(i.sortable.initialGroup);
				r && n.renderer.rendering.then(() => {
					for (let [t, n] of e.entries()) {
						let e = Array.from(n).entries();
						for (let [n, r] of e) if (r.index !== n || r.group !== t) return;
					}
					let t = ry(r), n = i.sortable.element, a = t[i.sortable.initialIndex], o = a?.element;
					a && o && n && (ty(n, a.index, o, i.index), F(() => {
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
function ty(e, t, n, r) {
	let i = r < t ? "afterend" : "beforebegin";
	n.insertAdjacentElement(i, e);
}
function ny(e, t) {
	return e.index - t.index;
}
function ry(e) {
	return Array.from(e).sort(ny);
}
var iy = [Rv, ey], ay = {
	duration: 250,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	idle: !1
}, oy = new uu(), sy, cy = [R], ly, uy, dy, fy, py, my;
sy = [R];
var hy = class {
	constructor(e, t) {
		Pv(this, uy, Av(ly, 8, this)), Av(ly, 11, this), Pv(this, dy), Pv(this, fy), Pv(this, py, Av(ly, 12, this)), Av(ly, 15, this), Pv(this, my), this.register = () => (F(() => {
			var e, t;
			(e = this.manager) == null || e.registry.register(this.droppable), (t = this.manager) == null || t.registry.register(this.draggable);
		}), () => this.unregister()), this.unregister = () => {
			F(() => {
				var e, t;
				(e = this.manager) == null || e.registry.unregister(this.droppable), (t = this.manager) == null || t.registry.unregister(this.draggable);
			});
		}, this.destroy = () => {
			F(() => {
				this.droppable.destroy(), this.draggable.destroy();
			});
		};
		var n = e, { effects: r = () => [], group: i, index: a, sensors: o, type: s, transition: c = ay, plugins: l = iy } = n, u = wv(n, [
			"effects",
			"group",
			"index",
			"sensors",
			"type",
			"transition",
			"plugins"
		]);
		this.droppable = new _y(u, t, this), this.draggable = new gy(Cv(Sv({}, u), {
			effects: () => [
				() => {
					let e = this.manager?.dragOperation.status;
					e?.initializing && this.id === this.manager?.dragOperation.source?.id && oy.clear(this.manager), e?.dragging && oy.set(this.manager, this.id, L(() => ({
						initialIndex: this.index,
						initialGroup: this.group
					})));
				},
				() => {
					let { index: e, group: t, manager: n } = this, r = Nv(this, fy), i = Nv(this, dy);
					(e !== r || t !== i) && (Fv(this, fy, e), Fv(this, dy, t), this.animate());
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
		}), t, this), Fv(this, my, u.element), this.manager = t, this.index = a, Fv(this, fy, a), this.group = i, Fv(this, dy, i), this.type = s, this.transition = c;
	}
	get initialIndex() {
		return oy.get(this.manager, this.id)?.initialIndex ?? this.index;
	}
	get initialGroup() {
		return oy.get(this.manager, this.id)?.initialGroup ?? this.group;
	}
	animate() {
		L(() => {
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
				}, { translate: o } = Pm(r), s = nh(r, o, !1), c = nh(r, o);
				if (a.x || a.y) {
					let n = Lp(xp(r)) ? Cv(Sv({}, t), { duration: 0 }) : t;
					th({
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
		F(() => {
			this.draggable.manager = e, this.droppable.manager = e;
		});
	}
	set element(e) {
		F(() => {
			let t = Nv(this, my), n = this.droppable.element, r = this.draggable.element;
			n && n !== t || (this.droppable.element = e), r && r !== t || (this.draggable.element = e), Fv(this, my, e);
		});
	}
	get element() {
		let e = Nv(this, my);
		if (e) return Up.get(e) ?? e ?? this.droppable.element;
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
		F(() => {
			this.droppable.disabled = e, this.draggable.disabled = e;
		});
	}
	set data(e) {
		F(() => {
			this.droppable.data = e, this.draggable.data = e;
		});
	}
	set handle(e) {
		this.draggable.handle = e;
	}
	set id(e) {
		F(() => {
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
		this.droppable.collisionDetector = e ?? lp;
	}
	set alignment(e) {
		this.draggable.alignment = e;
	}
	get alignment() {
		return this.draggable.alignment;
	}
	set type(e) {
		F(() => {
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
ly = Tv(), uy = /* @__PURE__ */ new WeakMap(), dy = /* @__PURE__ */ new WeakMap(), fy = /* @__PURE__ */ new WeakMap(), py = /* @__PURE__ */ new WeakMap(), my = /* @__PURE__ */ new WeakMap(), jv(ly, 4, "index", cy, hy, uy), jv(ly, 4, "group", sy, hy, py), kv(ly, hy);
var gy = class extends $_ {
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
}, _y = class extends uv {
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
function vy(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function yy(e) {
	if (e != null) return vy(e) ? e.current ?? void 0 : e;
}
// node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/hooks.js
var by = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? O.useLayoutEffect : O.useEffect;
function xy() {
	let e = (0, O.useState)(0)[1];
	return (0, O.useCallback)(() => {
		e((e) => e + 1);
	}, [e]);
}
function Sy(e, t) {
	let n = (0, O.useRef)(/* @__PURE__ */ new Map()), r = xy();
	return by(() => {
		if (!e) n.current.clear();
		else return ul(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = L(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? (0, Do.flushSync)(r) : r());
		});
	}, [e]), (0, O.useMemo)(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function Cy(e, t) {
	e();
}
function wy(e) {
	let t = (0, O.useRef)(e);
	return by(() => {
		t.current = e;
	}, [e]), t;
}
function $(e, t, n = O.useEffect, r = Object.is) {
	let i = (0, O.useRef)(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function Ty(e, t) {
	let n = (0, O.useRef)(yy(e));
	by(() => {
		let r = yy(e);
		r !== n.current && (n.current = r, t(r));
	});
}
// node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/index.js
var Ey = Object.getOwnPropertySymbols, Dy = Object.prototype.hasOwnProperty, Oy = Object.prototype.propertyIsEnumerable, ky = (e, t) => {
	var n = {};
	for (var r in e) Dy.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && Ey) for (var r of Ey(e)) t.indexOf(r) < 0 && Oy.call(e, r) && (n[r] = e[r]);
	return n;
}, Ay = new W_(), jy = (0, O.createContext)(Ay), My = (0, O.memo)((0, O.forwardRef)(({ children: e }, t) => {
	let [n, r] = (0, O.useState)(0), i = (0, O.useRef)(null), a = (0, O.useRef)(null), o = (0, O.useMemo)(() => ({
		renderer: { get rendering() {
			return i.current ?? Promise.resolve();
		} },
		trackRendering(e) {
			i.current ||= new Promise((e) => {
				a.current = e;
			}), (0, O.startTransition)(() => {
				e(), r((e) => e + 1);
			});
		}
	}), []);
	return by(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), (0, O.useImperativeHandle)(t, () => o), null;
})), Ny = [void 0, zl];
function Py(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = ky(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = (0, O.useRef)(null), { plugins: d, modifiers: f, sensors: p } = l, m = ap(d, U_.plugins), h = ap(p, U_.sensors), g = ap(f, U_.modifiers), _ = wy(i), v = wy(a), y = wy(s), b = wy(o), x = wy(c), S = wy(r), C = Fy(() => l.manager ?? new W_(l));
	return (0, O.useEffect)(() => {
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
	}, [C]), $(m, () => C && (C.plugins = m), ...Ny), $(h, () => C && (C.sensors = h), ...Ny), $(g, () => C && (C.modifiers = g), ...Ny), /* @__PURE__ */ (0, M.jsxs)(jy.Provider, {
		value: C,
		children: [/* @__PURE__ */ (0, M.jsx)(My, {
			ref: u,
			children: n
		}), n]
	});
}
function Fy(e) {
	let t = (0, O.useRef)(null);
	return t.current ||= e(), (0, O.useInsertionEffect)(() => () => t.current?.destroy(), []), t.current;
}
function Iy() {
	return (0, O.useContext)(jy);
}
function Ly(e) {
	let t = Iy() ?? void 0, [n] = (0, O.useState)(() => e(t));
	return n.manager !== t && (n.manager = t), by(n.register, [t, n]), n;
}
var Ry = Object.create, zy = Object.defineProperty, By = Object.getOwnPropertyDescriptor, Vy = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Hy = (e) => {
	throw TypeError(e);
}, Uy = (e, t, n) => t in e ? zy(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Wy = (e) => [
	,
	,
	,
	Ry(e?.[Vy("metadata")] ?? null)
], Gy = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Ky = (e) => e !== void 0 && typeof e != "function" ? Hy("Function expected") : e, qy = (e, t, n, r, i) => ({
	kind: Gy[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Hy("Already initialized") : i.push(Ky(e || null))
}), Jy = (e, t) => Uy(t, Vy("metadata"), e[3]), Yy = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, Xy = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = Gy[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, By(i, n)), _ = r.length - 1; _ >= 0; _--) c = qy(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, Ky(o) && (g[m] = o);
	return g && zy(i, n, g), i;
}, Zy = (e, t, n) => t.has(e) || Hy("Cannot " + n), Qy = (e, t, n) => (Zy(e, t, "read from private field"), t.get(e)), $y = (e, t, n) => t.has(e) ? Hy("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), eb = (e, t, n, r) => (Zy(e, t, "write to private field"), t.set(e, n), n), tb = class e {
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
}, nb, rb, ib, ab, ob, sb = class extends (ib = su, rb = [z], nb = [z], ib) {
	constructor(e) {
		let t = tb.from(e);
		super(t, (e, t) => tb.equals(e, t)), Yy(ob, 5, this), $y(this, ab, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return tb.delta(this.current, this.initial);
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
		let { current: t } = this, n = tb.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - Qy(this, ab), o = (e) => Math.round(e / a * 100);
		F(() => {
			eb(this, ab, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(tb.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
ob = Wy(ib), ab = /* @__PURE__ */ new WeakMap(), Xy(ob, 2, "delta", rb, sb), Xy(ob, 2, "direction", nb, sb), Jy(ob, sb);
var cb = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(cb || {});
Object.values(cb);
// node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/sortable.js
var lb = Object.defineProperty, ub = Object.defineProperties, db = Object.getOwnPropertyDescriptors, fb = Object.getOwnPropertySymbols, pb = Object.prototype.hasOwnProperty, mb = Object.prototype.propertyIsEnumerable, hb = (e, t, n) => t in e ? lb(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, gb = (e, t) => {
	for (var n in t ||= {}) pb.call(t, n) && hb(e, n, t[n]);
	if (fb) for (var n of fb(t)) mb.call(t, n) && hb(e, n, t[n]);
	return e;
}, _b = (e, t) => ub(e, db(t));
function vb(e) {
	let { accept: t, collisionDetector: n, collisionPriority: r, id: i, data: a, element: o, handle: s, index: c, group: l, disabled: u, feedback: d, modifiers: f, sensors: p, target: m, type: h } = e, g = gb(gb({}, ay), e.transition), _ = Ly((t) => new hy(_b(gb({}, e), {
		transition: g,
		register: !1,
		handle: yy(s),
		element: yy(o),
		target: yy(m),
		feedback: d
	}), t)), v = Sy(_, yb);
	return $(i, () => _.id = i), by(() => {
		F(() => {
			_.group = l, _.index = c;
		});
	}, [
		_,
		l,
		c
	]), $(h, () => _.type = h), $(t, () => _.accept = t, void 0, zl), $(a, () => a && (_.data = a)), $(c, () => {
		_.manager?.dragOperation.status.idle && g?.idle && _.refreshShape();
	}, Cy), Ty(s, (e) => _.handle = e), Ty(o, (e) => _.element = e), Ty(m, (e) => _.target = e), $(u, () => _.disabled = u === !0), $(p, () => _.sensors = p), $(n, () => _.collisionDetector = n), $(r, () => _.collisionPriority = r), $(d, () => _.feedback = d ?? "default"), $(g, () => _.transition = g, void 0, zl), $(f, () => _.modifiers = f, void 0, zl), $(e.alignment, () => _.alignment = e.alignment), {
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
		handleRef: (0, O.useCallback)((e) => {
			_.handle = e ?? void 0;
		}, [_]),
		ref: (0, O.useCallback)((e) => {
			(e || !_.element?.isConnected || _.manager?.dragOperation.status.idle) && (_.element = e ?? void 0);
		}, [_]),
		sourceRef: (0, O.useCallback)((e) => {
			(e || !_.source?.isConnected || _.manager?.dragOperation.status.idle) && (_.source = e ?? void 0);
		}, [_]),
		targetRef: (0, O.useCallback)((e) => {
			(e || !_.target?.isConnected || _.manager?.dragOperation.status.idle) && (_.target = e ?? void 0);
		}, [_])
	};
}
function yb(e, t, n) {
	return !(e !== "isDragSource" || n || !t);
}
// src/external-resources/studio-ui/components/SortableResource.tsx
var bb = ({ id: e, index: t, disabled: n = !1, children: r }) => {
	let { ref: i, handleRef: a } = vb({
		id: e,
		index: t,
		disabled: n
	});
	return /* @__PURE__ */ (0, M.jsx)("div", {
		ref: i,
		children: r(a)
	});
}, xb = Object.defineProperty, Sb = Object.defineProperties, Cb = Object.getOwnPropertyDescriptors, wb = Object.getOwnPropertySymbols, Tb = Object.prototype.hasOwnProperty, Eb = Object.prototype.propertyIsEnumerable, Db = (e, t, n) => t in e ? xb(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Ob = (e, t) => {
	for (var n in t ||= {}) Tb.call(t, n) && Db(e, n, t[n]);
	if (wb) for (var n of wb(t)) Eb.call(t, n) && Db(e, n, t[n]);
	return e;
}, kb = (e, t) => Sb(e, Cb(t));
function Ab(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function jb(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function Mb(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (jb(r)) {
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
	if (c === -1 && jb(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return kb(Ob({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return kb(Ob({}, e), {
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
		if (l != null && l === d && c === u && jb(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return kb(Ob({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return kb(Ob({}, e), {
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
	if (l === d) return kb(Ob({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return kb(Ob({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function Nb(e, t) {
	return Mb(e, t, Ab);
}
// src/shared/components/constants.ts
var Pb = [
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
function Fb({ title: e, onTitleChange: t, activeTab: n, tabs: r = Pb }) {
	let [i, a] = (0, O.useState)(!1);
	return /* @__PURE__ */ (0, M.jsx)(j.Header, {
		className: "shadow-sm studio-header",
		children: /* @__PURE__ */ (0, M.jsxs)("div", {
			className: "d-flex flex-row justify-content-between",
			children: [
				/* @__PURE__ */ (0, M.jsx)(Ce, { children: i ? /* @__PURE__ */ (0, M.jsx)(T.Control, {
					type: "text",
					name: "studio-title",
					"aria-label": "Display name",
					value: e,
					onChange: (e) => t(e.target.value),
					onBlur: () => a(!1),
					onKeyDown: (e) => {
						(e.key === "Enter" || e.key === "Escape") && (a(!1), e.preventDefault());
					}
				}) : /* @__PURE__ */ (0, M.jsx)("h3", {
					className: "h3 col pl-0",
					children: /* @__PURE__ */ (0, M.jsxs)("div", {
						className: "d-flex flex-row align-items-center mt-1",
						children: [
							"Editing: ",
							e || "<Untitled>",
							/* @__PURE__ */ (0, M.jsx)(_e, {
								alt: "Edit display name",
								className: "studio-header-title-edit",
								size: "sm",
								src: jn,
								onClick: () => a(!0)
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, M.jsx)(Ce.Spacer, {}),
				r.length > 0 && /* @__PURE__ */ (0, M.jsx)(Ko, {
					role: "tablist",
					variant: "button-group",
					activeKey: n,
					className: "studio-header-tabs-nav pgn__tabs",
					"aria-label": "Editor Sections",
					children: r.map(({ key: e, label: t }) => /* @__PURE__ */ (0, M.jsx)(Ko.Link, {
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
// src/external-resources/studio-ui/App.tsx
var Ib = ({ initialData: e, onSave: t, onCancel: n }) => {
	let [r, i] = (0, O.useState)(e), [a, o, s] = Ho(!1), [c, l, u] = Ho(!1), [d, f] = (0, O.useState)(), [p, m] = (0, O.useState)(), h = a || c;
	return /* @__PURE__ */ (0, M.jsxs)("div", {
		className: "react-studio-block external-resources-xblock-editor editor-with-buttons bg-light-200",
		children: [
			/* @__PURE__ */ (0, M.jsx)(Fb, {
				title: r.displayName,
				onTitleChange: (e) => i((t) => ({
					...t,
					displayName: e
				})),
				tabs: []
			}),
			/* @__PURE__ */ (0, M.jsxs)("div", {
				className: "wrapper-comp-settings is-active external-resources-editor-body p-4",
				children: [
					/* @__PURE__ */ (0, M.jsxs)("div", { children: [/* @__PURE__ */ (0, M.jsx)("p", {
						className: "h4 text-primary-500",
						children: "Resources"
					}), /* @__PURE__ */ (0, M.jsx)("p", {
						className: "text-primary-500",
						children: "Learners see resources in the order they're added and can mark each as read."
					})] }),
					/* @__PURE__ */ (0, M.jsx)(Py, {
						onDragOver: (e) => i((t) => ({
							...t,
							resources: Nb(t.resources, e)
						})),
						children: /* @__PURE__ */ (0, M.jsx)(he, {
							gap: 3,
							children: r.resources.map((e, t) => c && d === e.id ? /* @__PURE__ */ (0, M.jsx)(Lc, {
								initialResource: e,
								onCancel: u,
								onSave: (e) => {
									i((t) => ({
										...t,
										resources: t.resources.map((t) => t.id === e.id ? e : t)
									})), u();
								},
								onDelete: () => m(e)
							}, e.id) : /* @__PURE__ */ (0, M.jsx)(bb, {
								id: e.id,
								index: t,
								disabled: c,
								children: (t) => /* @__PURE__ */ (0, M.jsx)(ge, {
									resource: e,
									actions: /* @__PURE__ */ (0, M.jsx)(Bc, {
										onDelete: () => m(e),
										onEdit: () => {
											f(e.id), l();
										},
										disableEdit: c,
										dragHandleRef: t
									})
								})
							}, e.id))
						})
					}),
					/* @__PURE__ */ (0, M.jsx)(Vc, {
						resource: p,
						onConfirm: (e) => {
							i((t) => ({
								...t,
								resources: t.resources.filter((t) => t.id !== e.id)
							})), m(void 0), d === e.id && u();
						},
						onClose: () => m(void 0)
					}),
					/* @__PURE__ */ (0, M.jsx)("div", {
						className: "mt-3",
						children: a ? /* @__PURE__ */ (0, M.jsx)(Lc, {
							initialResource: zc(),
							onCancel: s,
							onSave: (e) => {
								i((t) => ({
									...t,
									resources: [...t.resources, e]
								})), s();
							},
							isNewResource: !0
						}) : /* @__PURE__ */ (0, M.jsx)(Dn, {
							variant: "outline-primary",
							iconBefore: Mn,
							onClick: o,
							children: "Add resource link"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, M.jsx)(Xo, {
				position: "bottom",
				className: "xblock-actions",
				children: /* @__PURE__ */ (0, M.jsxs)(Ce, { children: [/* @__PURE__ */ (0, M.jsx)(Dn, {
					variant: "tertiary",
					onClick: () => n(),
					children: "Cancel"
				}), /* @__PURE__ */ (0, M.jsx)(Dn, {
					variant: "primary",
					onClick: () => t(r),
					disabled: r.resources.length === 0 || h,
					children: "Save"
				})] })
			})
		]
	});
}, Lb = ".pgn__modal-header.studio-header{padding:calc(var(--pgn-spacing-modal-inner-padding-base) / 2) var(--pgn-spacing-modal-header-padding-base-x);z-index:1}.studio-header-title{align-items:center;gap:var(--pgn-spacing-spacer-2,8px);display:flex}.studio-header-tabs-nav{flex-wrap:nowrap;padding-right:64px}.studio-header-tabs-nav .nav-link{appearance:none;font-family:inherit;font-size:inherit;line-height:inherit;cursor:pointer;background-color:#0000}.material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}.wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.external-resource-card{padding:var(--pgn-spacing-spacer-4)}.external-resource-card.is-clickable:hover{cursor:pointer;background-color:var(--pgn-color-light-300)}.external-resource-card .card-type,.external-resource-card .card-publisher{color:var(--pgn-color-gray-700);font-family:var(--pgn-typography-headings-font-family,Sora, sans-serif);font-size:var(--pgn-typography-font-size-xs);font-weight:var(--pgn-typography-font-weight-bold);line-height:1.3333}.external-resource-card .card-type{margin-bottom:var(--pgn-spacing-spacer-1)}.external-resource-card .card-publisher{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.external-resource-card .card-title{color:var(--pgn-wgu-color-lake-800,var(--pgn-color-info-700));margin-bottom:var(--pgn-spacing-spacer-1);font-size:var(--pgn-typography-font-size-lg);font-weight:var(--pgn-typography-font-weight-bold);-webkit-line-clamp:2;line-clamp:2;overflow-wrap:anywhere;-webkit-box-orient:vertical;line-height:1.6;display:-webkit-box;overflow:hidden}.external-resource-card .card-thumbnail{width:102px;height:102px}.external-resource-card .pgn__card-body{min-width:0}.external-resource-thumbnail{flex-shrink:0;width:102px;height:102px;overflow:hidden}.external-resource-thumbnail .external-resource-icon-container,.external-resource-thumbnail .external-resource-icon{width:100%;height:100%}.external-resource-thumbnail .external-resource-icon{background-color:var(--pgn-wgu-color-lake-50,var(--pgn-color-light-300));color:var(--pgn-wgu-color-blue-muted,var(--pgn-color-info-400))}.external-resource-thumbnail .external-resource-image{object-fit:cover;width:100%;height:100%;display:block}.content-type-select{max-width:36.5rem;position:relative}.content-type-select .content-type-select-menu{z-index:10;max-height:20rem;margin:var(--pgn-spacing-spacer-1) 0 0;padding:var(--pgn-spacing-spacer-1) 0;background-color:var(--pgn-color-white);border-radius:var(--pgn-size-border-radius-base);list-style:none;position:absolute;top:100%;left:0;right:0;overflow-y:auto;box-shadow:0 2px 8px #00000026}.content-type-select .content-type-select-item{padding:var(--pgn-spacing-spacer-2) var(--pgn-spacing-spacer-3);cursor:pointer;align-items:center;display:flex}.content-type-select .content-type-select-item.is-active{background-color:var(--pgn-color-light-300)}.pgn__form-control-decorator-group.estimated-time-input{flex:none;width:4.25rem}.pgn__form-control-decorator-group.estimated-time-input .form-control{padding-inline:var(--pgn-spacing-spacer-2)}.thumbnail-select{display:inline-block;position:relative}.thumbnail-select .thumbnail-select-popover{z-index:10;width:18rem;margin-top:var(--pgn-spacing-spacer-1);background-color:var(--pgn-color-white);border-radius:var(--pgn-size-border-radius-base);position:absolute;top:100%;left:0;box-shadow:0 2px 8px #00000026}.thumbnail-select .thumbnail-select-popover:focus{outline:none}.thumbnail-select .thumbnail-select-popover .icon-picker,.thumbnail-select .thumbnail-select-popover .thumbnail-select-image{padding:var(--pgn-spacing-spacer-2)}.thumbnail-select .thumbnail-select-popover .thumbnail-select-image{margin-bottom:0}.thumbnail-select .thumbnail-select-popover .icon-list{max-height:15rem;overflow-y:auto}.thumbnail-select .thumbnail-select-popover .icon-symbol{border-radius:var(--pgn-size-border-radius-base);color:var(--pgn-color-primary-500);cursor:pointer;background:0 0;border:0;display:flex}.thumbnail-select .thumbnail-select-popover .icon-symbol:hover,.thumbnail-select .thumbnail-select-popover .icon-symbol:focus,.thumbnail-select .thumbnail-select-popover .icon-symbol.active{background-color:var(--pgn-color-light-300)}.xblock-root{flex-direction:column;flex-grow:1;display:flex}.external-resources-xblock-editor{flex-direction:column;display:flex}.external-resources-xblock-editor .external-resources-editor-body{flex-grow:1}", Rb = (e, t, n) => {
	let i = Se(t), a = i.parentElement?.parentElement;
	a && (a.style.minHeight = "635px", a.style.maxHeight = "calc(100vh - 51px)", a.style.overflowY = "scroll");
	let o = e.handlerUrl(i, "studio_save");
	v({
		runtime: e,
		element: t,
		config: n.config,
		styles: Lb
	})(/* @__PURE__ */ (0, M.jsx)(Ec.Provider, {
		value: n.config,
		children: /* @__PURE__ */ (0, M.jsx)(Ib, {
			initialData: n.data,
			onSave: (t) => {
				r({
					saveUrl: o,
					data: t,
					runtime: e,
					errorMessage: (e) => `Failed to save external resources block: ${e.responseJSON.error}`
				});
			},
			onCancel: () => e.notify("cancel", {})
		})
	}));
};
export { Rb as renderBlock };
