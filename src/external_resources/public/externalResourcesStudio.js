import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, I as c, J as l, K as u, L as d, M as f, N as p, O as m, P as h, Q as g, R as _, S as v, T as y, U as b, V as x, W as S, X as C, Y as ee, Z as te, _ as ne, a as w, b as re, c as T, d as ie, f as ae, g as oe, h as se, i as ce, j as le, k as E, l as ue, m as de, n as fe, o as pe, p as me, q as he, r as ge, s as _e, t as ve, u as ye, v as be, w as xe, x as Se, y as Ce, z as we } from "./ResourceCard-CQ8AapM6.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ActionRow/index.js
var D = /* @__PURE__ */ e(te()), O = /* @__PURE__ */ e(d());
function Te({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ D.createElement(e, {
		...r,
		className: (0, O.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function Ee() {
	return /* @__PURE__ */ D.createElement("span", { className: "pgn__action-row-spacer" });
}
Te.Spacer = Ee;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SelectableContext.js
var De = /* @__PURE__ */ D.createContext(null), Oe = function(e, t) {
	return t === void 0 && (t = null), e == null ? t || null : String(e);
};
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function ke() {
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
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var Ae = [
	"as",
	"disabled",
	"onKeyDown"
];
function je(e) {
	return !e || e.trim() === "#";
}
var Me = /* @__PURE__ */ D.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, s = o(e, Ae), l = function(e) {
		var t = s.href, n = s.onClick;
		if ((i || je(t)) && e.preventDefault(), i) {
			e.stopPropagation();
			return;
		}
		n && n(e);
	};
	return je(s.href) && (s.role = s.role || "button", s.href = s.href || "#"), i && (s.tabIndex = -1, s["aria-disabled"] = !0), /* @__PURE__ */ D.createElement(r, c({ ref: t }, s, {
		onClick: l,
		onKeyDown: ke(function(e) {
			e.key === " " && (e.preventDefault(), l(e));
		}, a)
	}));
});
Me.displayName = "SafeAnchor";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var Ne = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], Pe = {
	variant: "primary",
	active: !1,
	disabled: !1
}, Fe = /* @__PURE__ */ D.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.variant, a = e.size, s = e.active, l = e.className, u = e.block, d = e.type, f = e.as, p = o(e, Ne), m = t(r, "btn"), h = (0, O.default)(l, m, s && "active", i && m + "-" + i, u && m + "-block", a && m + "-" + a);
	if (p.href) return /* @__PURE__ */ D.createElement(Me, c({}, p, {
		as: f,
		ref: n,
		className: (0, O.default)(h, p.disabled && "disabled")
	}));
	n && (p.ref = n), d ? p.type = d : f || (p.type = "button");
	var g = f || "button";
	return /* @__PURE__ */ D.createElement(g, c({}, p, { className: h }));
});
Fe.displayName = "Button", Fe.defaultProps = Pe;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/CardContext.js
var Ie = /* @__PURE__ */ D.createContext(null);
Ie.displayName = "CardContext";
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/matches.js
var Le;
function Re(e, t) {
	if (!Le) {
		var n = document.body, r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
		Le = function(e, t) {
			return r.call(e, t);
		};
	}
	return Le(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/querySelectorAll.js
var ze = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Be(e, t) {
	return ze(e.querySelectorAll(t));
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/usePrevious.js
function Ve(e) {
	let t = (0, D.useRef)(null);
	return (0, D.useEffect)(() => {
		t.current = e;
	}), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useForceUpdate.js
function He() {
	let [, e] = (0, D.useReducer)((e) => !e, !1);
	return e;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventListener.js
function Ue(e, t, n, r = !1) {
	let a = i(n);
	(0, D.useEffect)(() => {
		let n = typeof e == "function" ? e() : e;
		return n.addEventListener(t, a, r), () => n.removeEventListener(t, a, r);
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useGlobalListener.js
function We(e, t, n = !1) {
	return Ue((0, D.useCallback)(() => document, []), e, t, n);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownContext.js
var Ge = /* @__PURE__ */ D.createContext(null), k = /* @__PURE__ */ e(E()), Ke = function() {};
function qe(e) {
	e === void 0 && (e = {});
	var t = (0, D.useContext)(Ge), n = xe(), i = n[0], a = n[1], o = (0, D.useRef)(!1), s = e, l = s.flip, u = s.offset, d = s.rootCloseEvent, f = s.fixed, p = f === void 0 ? !1 : f, m = s.popperConfig, h = m === void 0 ? {} : m, g = s.usePopper, _ = g === void 0 ? !!t : g, v = t?.show == null ? !!e.show : t.show, y = t?.alignEnd == null ? e.alignEnd : t.alignEnd;
	v && !o.current && (o.current = !0);
	var b = function(e) {
		t?.toggle(!1, e);
	}, x = t || {}, S = x.drop, C = x.setMenu, ee = x.menuElement, te = x.toggleElement, ne = y ? "bottom-end" : "bottom-start";
	S === "up" ? ne = y ? "top-end" : "top-start" : S === "right" ? ne = y ? "right-end" : "right-start" : S === "left" && (ne = y ? "left-end" : "left-start");
	var w = r(te, ee, re({
		placement: ne,
		enabled: !!(_ && v),
		enableEvents: v,
		offset: u,
		flip: l,
		fixed: p,
		arrowElement: i,
		popperConfig: h
	})), T = c({
		ref: C || Ke,
		"aria-labelledby": te?.id
	}, w.attributes.popper, { style: w.styles.popper }), ie = {
		show: v,
		alignEnd: y,
		hasShown: o.current,
		toggle: t?.toggle,
		popper: _ ? w : null,
		arrowProps: _ ? c({ ref: a }, w.attributes.arrow, { style: w.styles.arrow }) : {}
	};
	return Se(ee, b, {
		clickTrigger: d,
		disabled: !v
	}), [T, ie];
}
var Je = {
	children: k.default.func.isRequired,
	show: k.default.bool,
	alignEnd: k.default.bool,
	flip: k.default.bool,
	usePopper: k.default.oneOf([!0, !1]),
	popperConfig: k.default.object,
	rootCloseEvent: k.default.string
}, Ye = { usePopper: !0 };
function Xe(e) {
	var t = e.children, n = qe(o(e, ["children"])), r = n[0], i = n[1];
	return /* @__PURE__ */ D.createElement(D.Fragment, null, i.hasShown ? t(r, i) : null);
}
Xe.displayName = "ReactOverlaysDropdownMenu", Xe.propTypes = Je, Xe.defaultProps = Ye;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownToggle.js
var Ze = function() {};
function Qe() {
	var e = (0, D.useContext)(Ge) || {}, t = e.show, n = t === void 0 ? !1 : t, r = e.toggle, i = r === void 0 ? Ze : r, a = e.setToggle, o = (0, D.useCallback)(function(e) {
		i(!n, e);
	}, [n, i]);
	return [{
		ref: a || Ze,
		onClick: o,
		"aria-haspopup": !0,
		"aria-expanded": !!n
	}, {
		show: n,
		toggle: i
	}];
}
var $e = { children: k.default.func.isRequired };
function et(e) {
	var t = e.children, n = Qe(), r = n[0], i = n[1];
	return /* @__PURE__ */ D.createElement(D.Fragment, null, t(r, i));
}
et.displayName = "ReactOverlaysDropdownToggle", et.propTypes = $e;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Dropdown.js
var tt = {
	children: k.default.node,
	drop: k.default.oneOf([
		"up",
		"left",
		"right",
		"down"
	]),
	focusFirstItemOnShow: k.default.oneOf([
		!1,
		!0,
		"keyboard"
	]),
	itemSelector: k.default.string,
	alignEnd: k.default.bool,
	show: k.default.bool,
	defaultShow: k.default.bool,
	onToggle: k.default.func
};
function nt() {
	var e = He(), t = (0, D.useRef)(null);
	return [t, (0, D.useCallback)(function(n) {
		t.current = n, e();
	}, [e])];
}
function rt(e) {
	var t = e.drop, n = e.alignEnd, r = e.defaultShow, a = e.show, o = e.onToggle, s = e.itemSelector, c = s === void 0 ? "* > *" : s, l = e.focusFirstItemOnShow, u = e.children, d = p(a, r, o), f = d[0], h = d[1], g = nt(), _ = g[0], v = g[1], y = _.current, b = nt(), x = b[0], S = b[1], C = x.current, ee = Ve(f), te = (0, D.useRef)(null), ne = (0, D.useRef)(!1), w = (0, D.useCallback)(function(e, t) {
		h(e, t);
	}, [h]), re = (0, D.useMemo)(function() {
		return {
			toggle: w,
			drop: t,
			show: f,
			alignEnd: n,
			menuElement: y,
			toggleElement: C,
			setMenu: v,
			setToggle: S
		};
	}, [
		w,
		t,
		f,
		n,
		y,
		C,
		v,
		S
	]);
	y && ee && !f && (ne.current = y.contains(document.activeElement));
	var T = i(function() {
		C && C.focus && C.focus();
	}), ie = i(function() {
		var e = te.current, t = l;
		if (t ??= _.current && Re(_.current, "[role=menu]") ? "keyboard" : !1, !(t === !1 || t === "keyboard" && !/^key.+$/.test(e))) {
			var n = Be(_.current, c)[0];
			n && n.focus && n.focus();
		}
	});
	(0, D.useEffect)(function() {
		f ? ie() : ne.current && (ne.current = !1, T());
	}, [
		f,
		ne,
		T,
		ie
	]), (0, D.useEffect)(function() {
		te.current = null;
	});
	var ae = function(e, t) {
		if (!_.current) return null;
		var n = Be(_.current, c), r = n.indexOf(e) + t;
		return r = Math.max(0, Math.min(r, n.length)), n[r];
	};
	return We("keydown", function(e) {
		var t = e.key, n = e.target, r = _.current?.contains(n), i = x.current?.contains(n);
		if (!(/input|textarea/i.test(n.tagName) && (t === " " || t !== "Escape" && r)) && !(!r && !i) && !(!_.current && t === "Tab")) switch (te.current = e.type, t) {
			case "ArrowUp":
				var a = ae(n, -1);
				a && a.focus && a.focus(), e.preventDefault();
				return;
			case "ArrowDown":
				if (e.preventDefault(), !f) h(!0, e);
				else {
					var o = ae(n, 1);
					o && o.focus && o.focus();
				}
				return;
			case "Tab":
				m(document, "keyup", function(t) {
					var n;
					(t.key === "Tab" && !t.target || !((n = _.current) != null && n.contains(t.target))) && h(!1, e);
				}, { once: !0 });
				break;
			case "Escape":
				e.preventDefault(), e.stopPropagation(), h(!1, e);
				break;
			default:
		}
	}), /* @__PURE__ */ D.createElement(Ge.Provider, { value: re }, u);
}
rt.displayName = "ReactOverlaysDropdown", rt.propTypes = tt, rt.Menu = Xe, rt.Toggle = et;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavContext.js
var it = /* @__PURE__ */ D.createContext(null);
it.displayName = "NavContext";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/DropdownItem.js
var at = [
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
], ot = {
	as: Me,
	disabled: !1
}, st = /* @__PURE__ */ D.forwardRef(function(e, n) {
	var r = e.bsPrefix, a = e.className, s = e.children, l = e.eventKey, u = e.disabled, d = e.href, f = e.onClick, p = e.onSelect, m = e.active, h = e.as, g = o(e, at), _ = t(r, "dropdown-item"), v = (0, D.useContext)(De), y = ((0, D.useContext)(it) || {}).activeKey, b = Oe(l, d), x = m == null && b != null ? Oe(y) === b : m, S = i(function(e) {
		u || (f && f(e), v && v(b, e), p && p(b, e));
	});
	return /* @__PURE__ */ D.createElement(h, c({}, g, {
		ref: n,
		href: d,
		disabled: u,
		className: (0, O.default)(a, _, x && "active", u && "disabled"),
		onClick: S
	}), s);
});
st.displayName = "DropdownItem", st.defaultProps = ot;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavbarContext.js
var ct = /* @__PURE__ */ D.createContext(null);
ct.displayName = "NavbarContext", h();
function lt(e, t) {
	return e;
}
v();
var ut = [
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
], dt = k.default.oneOf(["left", "right"]);
k.default.oneOfType([
	dt,
	k.default.shape({ sm: dt }),
	k.default.shape({ md: dt }),
	k.default.shape({ lg: dt }),
	k.default.shape({ xl: dt })
]);
var ft = {
	align: "left",
	alignRight: !1,
	flip: !0
}, pt = /* @__PURE__ */ D.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.className, a = e.align, s = e.alignRight, l = e.rootCloseEvent, u = e.flip, d = e.show, f = e.renderOnMount, p = e.as, m = p === void 0 ? "div" : p, h = e.popperConfig, g = o(e, ut), _ = (0, D.useContext)(ct), v = t(r, "dropdown-menu"), y = be(), b = y[0], x = y[1], S = [];
	if (a) if (typeof a == "object") {
		var C = Object.keys(a);
		if (C.length) {
			var ee = C[0], te = a[ee];
			s = te === "left", S.push(v + "-" + ee + "-" + te);
		}
	} else a === "right" && (s = !0);
	var ne = qe({
		flip: u,
		rootCloseEvent: l,
		show: d,
		alignEnd: s,
		usePopper: !_ && S.length === 0,
		popperConfig: c({}, h, { modifiers: x.concat(h?.modifiers || []) })
	}), w = ne[0], re = ne[1], T = re.hasShown, ie = re.popper, ae = re.show, oe = re.alignEnd, se = re.toggle;
	if (w.ref = Ce(b, Ce(lt(n, "DropdownMenu"), w.ref)), !T && !f) return null;
	typeof m != "string" && (w.show = ae, w.close = function() {
		return se?.(!1);
	}, w.alignRight = oe);
	var ce = g.style;
	return ie != null && ie.placement && (ce = c({}, g.style, w.style), g["x-placement"] = ie.placement), /* @__PURE__ */ D.createElement(m, c({}, g, w, {
		style: ce,
		className: O.default.apply(void 0, [
			i,
			v,
			ae && "show",
			oe && v + "-right"
		].concat(S))
	}));
});
pt.displayName = "DropdownMenu", pt.defaultProps = ft, ne();
var mt = [
	"bsPrefix",
	"split",
	"className",
	"childBsPrefix",
	"as"
], ht = /* @__PURE__ */ D.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.split, a = e.className, s = e.childBsPrefix, l = e.as, u = l === void 0 ? Fe : l, d = o(e, mt), f = t(r, "dropdown-toggle");
	s !== void 0 && (d.bsPrefix = s);
	var p = Qe()[0];
	return p.ref = Ce(p.ref, lt(n, "DropdownToggle")), /* @__PURE__ */ D.createElement(u, c({ className: (0, O.default)(a, f, i && f + "-split") }, p, d));
});
ht.displayName = "DropdownToggle";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Dropdown.js
var gt = [
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
], _t = y("dropdown-header", { defaultProps: { role: "heading" } }), vt = y("dropdown-divider", { defaultProps: { role: "separator" } }), yt = y("dropdown-item-text", { Component: "span" }), bt = { navbar: !1 }, xt = /* @__PURE__ */ D.forwardRef(function(e, n) {
	var r = f(e, { show: "onToggle" }), a = r.bsPrefix, s = r.drop, l = r.show, u = r.className, d = r.alignRight, p = r.onSelect, m = r.onToggle, h = r.focusFirstItemOnShow, g = r.as, _ = g === void 0 ? "div" : g;
	r.navbar;
	var v = o(r, gt), y = (0, D.useContext)(De), b = t(a, "dropdown"), x = i(function(e, t, n) {
		n === void 0 && (n = t.type), t.currentTarget === document && (n !== "keydown" || t.key === "Escape") && (n = "rootClose"), m && m(e, t, { source: n });
	}), S = i(function(e, t) {
		y && y(e, t), p && p(e, t), x(!1, t, "select");
	});
	return /* @__PURE__ */ D.createElement(De.Provider, { value: S }, /* @__PURE__ */ D.createElement(rt, {
		drop: s,
		show: l,
		alignEnd: d,
		onToggle: x,
		focusFirstItemOnShow: h,
		itemSelector: "." + b + "-item:not(.disabled):not(:disabled)"
	}, /* @__PURE__ */ D.createElement(_, c({}, v, {
		ref: n,
		className: (0, O.default)(u, l && "show", (!s || s === "down") && b, s === "up" && "dropup", s === "right" && "dropright", s === "left" && "dropleft")
	}))));
});
xt.displayName = "Dropdown", xt.defaultProps = bt, xt.Divider = vt, xt.Header = _t, xt.Item = st, xt.ItemText = yt, xt.Menu = pt, xt.Toggle = ht;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContext.js
var St = /* @__PURE__ */ D.createContext(null), Ct = [
	"as",
	"onSelect",
	"activeKey",
	"role",
	"onKeyDown"
], wt = function() {}, Tt = /* @__PURE__ */ D.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "ul" : n, i = e.onSelect, a = e.activeKey, s = e.role, l = e.onKeyDown, u = o(e, Ct), d = He(), f = (0, D.useRef)(!1), p = (0, D.useContext)(De), m = (0, D.useContext)(St), h, g;
	m && (s ||= "tablist", a = m.activeKey, h = m.getControlledId, g = m.getControllerId);
	var _ = (0, D.useRef)(null), v = function(e) {
		var t = _.current;
		if (!t) return null;
		var n = Be(t, "[data-rb-event-key]:not(.disabled)"), r = t.querySelector(".active");
		if (!r) return null;
		var i = n.indexOf(r);
		if (i === -1) return null;
		var a = i + e;
		return a >= n.length && (a = 0), a < 0 && (a = n.length - 1), n[a];
	}, y = function(e, t) {
		e != null && (i && i(e, t), p && p(e, t));
	}, b = function(e) {
		l && l(e);
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
		t && (e.preventDefault(), y(t.dataset.rbEventKey, e), f.current = !0, d());
	};
	(0, D.useEffect)(function() {
		if (_.current && f.current) {
			var e = _.current.querySelector("[data-rb-event-key].active");
			e && e.focus();
		}
		f.current = !1;
	});
	var x = Ce(t, _);
	return /* @__PURE__ */ D.createElement(De.Provider, { value: y }, /* @__PURE__ */ D.createElement(it.Provider, { value: {
		role: s,
		activeKey: Oe(a),
		getControlledId: h || wt,
		getControllerId: g || wt
	} }, /* @__PURE__ */ D.createElement(r, c({}, u, {
		onKeyDown: b,
		ref: x,
		role: s
	}))));
}), Et = [
	"active",
	"className",
	"eventKey",
	"onSelect",
	"onClick",
	"as"
], Dt = { disabled: !1 }, Ot = /* @__PURE__ */ D.forwardRef(function(e, t) {
	var n = e.active, r = e.className, a = e.eventKey, s = e.onSelect, l = e.onClick, u = e.as, d = o(e, Et), f = Oe(a, d.href), p = (0, D.useContext)(De), m = (0, D.useContext)(it), h = n;
	if (m) {
		!d.role && m.role === "tablist" && (d.role = "tab");
		var g = m.getControllerId(f), _ = m.getControlledId(f);
		d["data-rb-event-key"] = f, d.id = g || d.id, d["aria-controls"] = _ || d["aria-controls"], h = n == null && f != null ? m.activeKey === f : n;
	}
	d.role === "tab" && (d.disabled && (d.tabIndex = -1, d["aria-disabled"] = !0), d["aria-selected"] = h);
	var v = i(function(e) {
		l && l(e), f != null && (s && s(f, e), p && p(f, e));
	});
	return /* @__PURE__ */ D.createElement(u, c({}, d, {
		ref: t,
		onClick: v,
		className: (0, O.default)(r, h && "active")
	}));
});
Ot.defaultProps = Dt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavItem.js
var kt = [
	"bsPrefix",
	"className",
	"children",
	"as"
], At = /* @__PURE__ */ D.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.className, a = e.children, s = e.as, l = s === void 0 ? "div" : s, u = o(e, kt);
	return r = t(r, "nav-item"), /* @__PURE__ */ D.createElement(l, c({}, u, {
		ref: n,
		className: (0, O.default)(i, r)
	}), a);
});
At.displayName = "NavItem";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavLink.js
var jt = [
	"bsPrefix",
	"disabled",
	"className",
	"href",
	"eventKey",
	"onSelect",
	"as"
], Mt = {
	disabled: !1,
	as: Me
}, Nt = /* @__PURE__ */ D.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.disabled, a = e.className, s = e.href, l = e.eventKey, u = e.onSelect, d = e.as, f = o(e, jt);
	return r = t(r, "nav-link"), /* @__PURE__ */ D.createElement(Ot, c({}, f, {
		href: s,
		ref: n,
		eventKey: l,
		as: d,
		disabled: i,
		onSelect: u,
		className: (0, O.default)(a, r, i && "disabled")
	}));
});
Nt.displayName = "NavLink", Nt.defaultProps = Mt, oe();
var Pt = [
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
], Ft = {
	justify: !1,
	fill: !1
}, It = /* @__PURE__ */ D.forwardRef(function(e, n) {
	var r, i = f(e, { activeKey: "onSelect" }), a = i.as, s = a === void 0 ? "div" : a, l = i.bsPrefix, u = i.variant, d = i.fill, p = i.justify, m = i.navbar, h = i.navbarScroll, g = i.className, _ = i.children, v = i.activeKey, y = o(i, Pt), b = t(l, "nav"), x, S, C = !1, ee = (0, D.useContext)(ct), te = (0, D.useContext)(Ie);
	return ee ? (x = ee.bsPrefix, C = m ?? !0) : te && (S = te.cardHeaderBsPrefix), /* @__PURE__ */ D.createElement(Tt, c({
		as: s,
		ref: n,
		activeKey: v,
		className: (0, O.default)(g, (r = {}, r[b] = !C, r[x + "-nav"] = C, r[x + "-nav-scroll"] = C && h, r[S + "-" + u] = !!S, r[b + "-" + u] = !!u, r[b + "-fill"] = d, r[b + "-justified"] = p, r))
	}, y), _);
});
It.displayName = "Nav", It.defaultProps = Ft, It.Item = At, It.Link = Nt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavDropdown.js
var Lt = [
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
], Rt = /* @__PURE__ */ D.forwardRef(function(e, n) {
	var r = e.id, i = e.title, a = e.children, s = e.bsPrefix, l = e.className, u = e.rootCloseEvent, d = e.menuRole, f = e.disabled, p = e.active, m = e.renderMenuOnMount, h = o(e, Lt), g = t(void 0, "nav-item");
	return /* @__PURE__ */ D.createElement(xt, c({ ref: n }, h, { className: (0, O.default)(l, g) }), /* @__PURE__ */ D.createElement(xt.Toggle, {
		id: r,
		eventKey: null,
		active: p,
		disabled: f,
		childBsPrefix: s,
		as: Nt
	}, i), /* @__PURE__ */ D.createElement(xt.Menu, {
		role: d,
		renderOnMount: m,
		rootCloseEvent: u
	}, a));
});
Rt.displayName = "NavDropdown", Rt.Item = xt.Item, Rt.ItemText = xt.ItemText, Rt.Divider = xt.Divider, Rt.Header = xt.Header;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContainer.js
var zt = function(e) {
	var t = f(e, { activeKey: "onSelect" }), n = t.id, r = t.generateChildId, i = t.onSelect, a = t.activeKey, o = t.transition, s = t.mountOnEnter, c = t.unmountOnExit, l = t.children, u = (0, D.useMemo)(function() {
		return r || function(e, t) {
			return n ? n + "-" + t + "-" + e : null;
		};
	}, [n, r]), d = (0, D.useMemo)(function() {
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
	return /* @__PURE__ */ D.createElement(St.Provider, { value: d }, /* @__PURE__ */ D.createElement(De.Provider, { value: i || null }, l));
}, Bt = [
	"bsPrefix",
	"as",
	"className"
], Vt = /* @__PURE__ */ D.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.as, a = i === void 0 ? "div" : i, s = e.className, l = o(e, Bt), u = t(r, "tab-content");
	return /* @__PURE__ */ D.createElement(a, c({ ref: n }, l, { className: (0, O.default)(s, u) }));
}), Ht = [
	"activeKey",
	"getControlledId",
	"getControllerId"
], Ut = [
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
function Wt(e) {
	var t = (0, D.useContext)(St);
	if (!t) return e;
	var n = t.activeKey, r = t.getControlledId, i = t.getControllerId, s = o(t, Ht), l = e.transition !== !1 && s.transition !== !1, u = Oe(e.eventKey);
	return c({}, e, {
		active: e.active == null && u != null ? Oe(n) === u : e.active,
		id: r(e.eventKey),
		"aria-labelledby": i(e.eventKey),
		transition: l && (e.transition || s.transition || a),
		mountOnEnter: e.mountOnEnter == null ? s.mountOnEnter : e.mountOnEnter,
		unmountOnExit: e.unmountOnExit == null ? s.unmountOnExit : e.unmountOnExit
	});
}
var Gt = /* @__PURE__ */ D.forwardRef(function(e, n) {
	var r = Wt(e), i = r.bsPrefix, a = r.className, s = r.active, l = r.onEnter, u = r.onEntering, d = r.onEntered, f = r.onExit, p = r.onExiting, m = r.onExited, h = r.mountOnEnter, g = r.unmountOnExit, _ = r.transition, v = r.as, y = v === void 0 ? "div" : v;
	r.eventKey;
	var b = o(r, Ut), x = t(i, "tab-pane");
	if (!s && !_ && g) return null;
	var S = /* @__PURE__ */ D.createElement(y, c({}, b, {
		ref: n,
		role: "tabpanel",
		"aria-hidden": !s,
		className: (0, O.default)(a, x, { active: s })
	}));
	return _ && (S = /* @__PURE__ */ D.createElement(_, {
		in: s,
		onEnter: l,
		onEntering: u,
		onEntered: d,
		onExit: f,
		onExiting: p,
		onExited: m,
		mountOnEnter: h,
		unmountOnExit: g
	}, S)), /* @__PURE__ */ D.createElement(St.Provider, { value: null }, /* @__PURE__ */ D.createElement(De.Provider, { value: null }, S));
});
Gt.displayName = "TabPane";
//#endregion
//#region node_modules/.pnpm/css-mediaquery@0.1.2/node_modules/css-mediaquery/index.js
var Kt = /* @__PURE__ */ g(((e) => {
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
})), qt = /* @__PURE__ */ g(((e, t) => {
	var n = Kt().match, r = typeof window < "u" ? window.matchMedia : null;
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
})), Jt = /[A-Z]/g, Yt = /^ms-/, Xt = {};
function Zt(e) {
	return "-" + e.toLowerCase();
}
function Qt(e) {
	if (Xt.hasOwnProperty(e)) return Xt[e];
	var t = e.replace(Jt, Zt);
	return Xt[e] = Yt.test(t) ? "-" + t : t;
}
//#endregion
//#region node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
function $t(e, t) {
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
var en = /* @__PURE__ */ e(qt()), A = k.default.oneOfType([k.default.string, k.default.number]), tn = {
	all: k.default.bool,
	grid: k.default.bool,
	aural: k.default.bool,
	braille: k.default.bool,
	handheld: k.default.bool,
	print: k.default.bool,
	projection: k.default.bool,
	screen: k.default.bool,
	tty: k.default.bool,
	tv: k.default.bool,
	embossed: k.default.bool
}, nn = {
	orientation: k.default.oneOf(["portrait", "landscape"]),
	scan: k.default.oneOf(["progressive", "interlace"]),
	aspectRatio: k.default.string,
	deviceAspectRatio: k.default.string,
	height: A,
	deviceHeight: A,
	width: A,
	deviceWidth: A,
	color: k.default.bool,
	colorIndex: k.default.bool,
	monochrome: k.default.bool,
	resolution: A,
	type: Object.keys(tn)
}, { type: rn, ...an } = nn, on = {
	minAspectRatio: k.default.string,
	maxAspectRatio: k.default.string,
	minDeviceAspectRatio: k.default.string,
	maxDeviceAspectRatio: k.default.string,
	minHeight: A,
	maxHeight: A,
	minDeviceHeight: A,
	maxDeviceHeight: A,
	minWidth: A,
	maxWidth: A,
	minDeviceWidth: A,
	maxDeviceWidth: A,
	minColor: k.default.number,
	maxColor: k.default.number,
	minColorIndex: k.default.number,
	maxColorIndex: k.default.number,
	minMonochrome: k.default.number,
	maxMonochrome: k.default.number,
	minResolution: A,
	maxResolution: A,
	...an
}, sn = {
	all: {
		...tn,
		...on
	},
	types: tn,
	matchers: nn,
	features: on
}, cn = (e) => `not ${e}`, ln = (e, t) => {
	let n = Qt(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? cn(n) : `(${n}: ${t})`;
}, un = (e) => e.join(" and "), dn = (e) => {
	let t = [];
	return Object.keys(sn.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(ln(n, r));
	}), un(t);
}, fn = (0, D.createContext)(void 0), pn = (e) => e.query || dn(e), mn = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[Qt(n)] = e[n], t), {});
}, hn = () => {
	let e = (0, D.useRef)(!1);
	return (0, D.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, gn = (e) => {
	let t = (0, D.useContext)(fn), n = () => mn(e) || mn(t), [r, i] = (0, D.useState)(n);
	return (0, D.useEffect)(() => {
		let e = n();
		$t(r, e) || i(e);
	}, [e, t]), r;
}, _n = (e) => {
	let t = () => pn(e), [n, r] = (0, D.useState)(t);
	return (0, D.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, vn = (e, t) => {
	let n = () => (0, en.default)(e, t || {}, !!t), [r, i] = (0, D.useState)(n), a = hn();
	return (0, D.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, yn = (e) => {
	let [t, n] = (0, D.useState)(e.matches);
	return (0, D.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, bn = (e, t, n) => {
	let r = gn(t), i = _n(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = vn(i, r), o = yn(a), s = hn();
	return (0, D.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, D.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, xn = /* @__PURE__ */ D.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /* @__PURE__ */ D.createElement(Fe, {
	size: r,
	...i,
	className: (0, O.default)(i.className),
	ref: a
}, n && /* @__PURE__ */ D.createElement(de, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /* @__PURE__ */ D.createElement(de, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), Sn = (e) => /* @__PURE__ */ D.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ D.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), Cn = (e) => /* @__PURE__ */ D.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ D.createElement("path", {
	d: "M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",
	fill: "currentColor"
})), wn = (e) => /* @__PURE__ */ D.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ D.createElement("path", {
	d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
	fill: "currentColor"
})), Tn = (e) => /* @__PURE__ */ D.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ D.createElement("path", {
	d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06ZM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z",
	fill: "currentColor"
})), En = (e) => /* @__PURE__ */ D.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ D.createElement("path", {
	d: "M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z",
	fill: "currentColor"
})), Dn = /* @__PURE__ */ D.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function On({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, D.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ D.createElement(Dn.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var kn = "right-scroll-bar-position", An = "width-before-scroll-bar", jn = "with-scroll-bars-hidden", Mn = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Nn(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function Pn(e, t) {
	var n = (0, D.useState)(function() {
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
var Fn = typeof window < "u" ? D.useLayoutEffect : D.useEffect, In = /* @__PURE__ */ new WeakMap();
function Ln(e, t) {
	var n = Pn(t || null, function(t) {
		return e.forEach(function(e) {
			return Nn(e, t);
		});
	});
	return Fn(function() {
		var t = In.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Nn(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Nn(e, a);
			});
		}
		In.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function Rn(e) {
	return e;
}
function zn(e, t) {
	t === void 0 && (t = Rn);
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
function Bn(e, t) {
	return t === void 0 && (t = Rn), zn(e, t);
}
function Vn(e) {
	e === void 0 && (e = {});
	var t = zn(null);
	return t.options = u({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var Hn = function(e) {
	var t = e.sideCar, n = he(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return D.createElement(r, u({}, n));
};
Hn.isSideCarExport = !0;
function Un(e, t) {
	return e.useMedium(t), Hn;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var Wn = Vn(), Gn = function() {}, Kn = D.forwardRef(function(e, t) {
	var n = D.useRef(null), r = D.useState({
		onScrollCapture: Gn,
		onWheelCapture: Gn,
		onTouchMoveCapture: Gn
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noRelative, h = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, b = e.gapMode, x = he(e, [
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
	]), S = p, C = Ln([n, t]), ee = u(u({}, x), i);
	return D.createElement(D.Fragment, null, d && D.createElement(S, {
		sideCar: Wn,
		removeScrollBar: l,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: a,
		allowPinchZoom: !!_,
		lockRef: n,
		gapMode: b
	}), o ? D.cloneElement(D.Children.only(s), u(u({}, ee), { ref: C })) : D.createElement(y, u({}, ee, {
		className: c,
		ref: C
	}), s));
});
Kn.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Kn.classNames = {
	fullWidth: An,
	zeroRight: kn
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var qn = "data-focus-lock", Jn = "data-focus-lock-disabled", Yn = "data-no-focus-lock", Xn = "data-autofocus-inside", Zn = "data-no-autofocus", Qn = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, $n = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: Qn
	}), n, n && /* @__PURE__ */ D.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: Qn
	}));
};
$n.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var er = Bn({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), tr = Bn(), nr = Bn(), rr = Vn({
	async: !0,
	ssr: typeof document < "u"
}), ir = /* @__PURE__ */ (0, D.createContext)(void 0), ar = [], or = /* @__PURE__ */ (0, D.forwardRef)(function(e, t) {
	var n, r = (0, D.useState)(), i = r[0], a = r[1], o = (0, D.useRef)(), s = (0, D.useRef)(!1), l = (0, D.useRef)(null), u = (0, D.useState)({})[1], d = e.children, f = e.disabled, p = f === void 0 ? !1 : f, m = e.noFocusGuards, h = m === void 0 ? !1 : m, g = e.persistentFocus, _ = g === void 0 ? !1 : g, v = e.crossFrame, y = v === void 0 ? !0 : v, b = e.autoFocus, x = b === void 0 ? !0 : b;
	e.allowTextSelection;
	var S = e.group, C = e.className, ee = e.whiteList, te = e.hasPositiveIndices, ne = e.shards, w = ne === void 0 ? ar : ne, re = e.as, T = re === void 0 ? "div" : re, ie = e.lockProps, ae = ie === void 0 ? {} : ie, oe = e.sideCar, se = e.returnFocus, ce = se === void 0 ? !1 : se, le = e.focusOptions, E = e.onActivation, ue = e.onDeactivation, de = (0, D.useState)({})[0], fe = (0, D.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!l.current) {
			var n = document?.activeElement;
			l.current = n, n !== document.body && (l.current = t(n));
		}
		o.current && E && E(o.current), s.current = !0, u();
	}, [E]), pe = (0, D.useCallback)(function() {
		s.current = !1, ue && ue(o.current), u();
	}, [ue]), me = (0, D.useCallback)(function(e) {
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
	}, [ce]), he = (0, D.useCallback)(function(e) {
		s.current && er.useMedium(e);
	}, []), ge = tr.useMedium, _e = (0, D.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), ve = c((n = {}, n[Jn] = p && "disabled", n[qn] = S, n), ae), ye = h !== !0, be = ye && h !== "tail", xe = Ln([t, _e]), Se = (0, D.useMemo)(function() {
		return {
			observed: o,
			shards: w,
			enabled: !p,
			get active() {
				return s.current;
			}
		};
	}, [
		p,
		s,
		w,
		o
	]);
	return /* @__PURE__ */ D.createElement(D.Fragment, null, ye && [/* @__PURE__ */ D.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: Qn
	}), te ? /* @__PURE__ */ D.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: Qn
	}) : null], !p && /* @__PURE__ */ D.createElement(oe, {
		id: de,
		sideCar: rr,
		observed: i,
		disabled: p,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: x,
		whiteList: ee,
		shards: w,
		onActivation: fe,
		onDeactivation: pe,
		returnFocus: me,
		focusOptions: le,
		noFocusGuards: h
	}), /* @__PURE__ */ D.createElement(T, c({ ref: xe }, ve, {
		className: C,
		onBlur: ge,
		onFocus: he
	}), /* @__PURE__ */ D.createElement(ir.Provider, { value: Se }, d)), be && /* @__PURE__ */ D.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: Qn
	}));
});
or.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function sr(e) {
	setTimeout(e, 1);
}
var cr = function(e) {
	return e && "current" in e ? e.current : e;
}, lr = or, ur = Vn(), dr = "data-focus-on-hidden", fr = { preventScroll: !0 }, pr = D.forwardRef(function(e, t) {
	var n = D.useState(!1), r = n[0], i = n[1], a = D.useState(null), o = a[0], s = a[1], c = e.children, l = e.autoFocus, d = e.shards, f = e.crossFrame, p = e.enabled, m = p === void 0 ? !0 : p, h = e.scrollLock, g = h === void 0 ? !0 : h, _ = e.focusLock, v = _ === void 0 ? !0 : _, y = e.returnFocus, b = y === void 0 ? !0 : y, x = e.inert, S = e.allowPinchZoom, C = e.sideCar, ee = e.className, te = e.shouldIgnore, ne = e.preventScrollOnFocus, w = e.style, re = e.as, T = e.gapMode, ie = he(e, [
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
	]), ae = C, oe = u(u({}, r), {
		as: re,
		style: w,
		sideCar: C,
		shards: d,
		allowPinchZoom: S,
		gapMode: T,
		inert: x,
		enabled: m && g
	}), se = D.useCallback(function(e) {
		s(e);
	}, []), ce = D.useCallback(function() {
		s(null);
	}, []);
	return D.createElement(D.Fragment, null, D.createElement(lr, {
		ref: t,
		sideCar: C,
		disabled: !(m && v),
		returnFocus: b,
		autoFocus: l,
		shards: d,
		crossFrame: f,
		onActivation: se,
		onDeactivation: ce,
		className: ee,
		whiteList: te,
		lockProps: oe,
		focusOptions: ne ? fr : void 0,
		as: Kn
	}, c), m && D.createElement(ae, u({}, ie, {
		sideCar: ur,
		setLockProps: i,
		shards: d,
		activeNode: o
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function mr(e) {
	"@babel/helpers - typeof";
	return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, mr(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function hr(e, t) {
	if (mr(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (mr(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function gr(e) {
	var t = hr(e, "string");
	return mr(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _r(e, t, n) {
	return (t = gr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function vr(e, t) {
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
			le(t, e);
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
				return /* @__PURE__ */ D.createElement(r, this.props);
			}, t;
		}(D.PureComponent);
		return _r(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var yr = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, br = function(e) {
	return Array.isArray(e) ? e : [e];
}, xr = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Sr = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Cr = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, wr = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, Tr = function(e) {
	return e.hasAttribute("inert");
}, Er = function(e, t) {
	return !e || wr(e) || !Sr(e) && !Tr(e) && t(Cr(e));
}, Dr = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Er(t, Dr.bind(void 0, e));
	return e.set(t, r), r;
}, Or = function(e, t) {
	return e && !wr(e) ? Fr(e) ? t(Cr(e)) : !1 : !0;
}, kr = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Or(t, kr.bind(void 0, e));
	return e.set(t, r), r;
}, Ar = function(e) {
	return e.dataset;
}, jr = function(e) {
	return e.tagName === "BUTTON";
}, Mr = function(e) {
	return e.tagName === "INPUT";
}, Nr = function(e) {
	return Mr(e) && e.type === "radio";
}, Pr = function(e) {
	return !((Mr(e) || jr(e)) && (e.type === "hidden" || e.disabled));
}, Fr = function(e) {
	var t = e.getAttribute(Zn);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, Ir = function(e) {
	return !!(e && Ar(e)?.focusGuard);
}, Lr = function(e) {
	return !Ir(e);
}, Rr = function(e) {
	return !!e;
}, zr = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, Br = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Vr = function(e, t, n) {
	return yr(e).map(function(e, t) {
		var r = Br(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(zr);
}, Hr = [
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
].join(","), Ur = `${Hr}, [data-focus-guard]`, Wr = function(e, t) {
	return yr((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? Ur : Hr) ? [n] : [], Wr(n));
	}, []);
}, Gr = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? Kr([e.contentDocument.body], t) : [e];
}, Kr = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = Wr(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return Gr(e, t);
		}));
		return e.concat(a, n.parentNode ? yr(n.parentNode.querySelectorAll(Hr)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, qr = function(e) {
	return yr(e.querySelectorAll(`[${Xn}]`)).map(function(e) {
		return Kr([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, Jr = function(e, t) {
	return yr(e).filter(function(e) {
		return Dr(t, e);
	}).filter(function(e) {
		return Pr(e);
	});
}, Yr = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), yr(e).filter(function(e) {
		return kr(t, e);
	});
}, Xr = function(e, t, n) {
	return Vr(Jr(Kr(e, n), t), !0, n);
}, Zr = function(e, t) {
	return Vr(Jr(Kr(e), t), !1);
}, Qr = function(e, t) {
	return Jr(qr(e), t);
}, $r = function(e, t) {
	return e.shadowRoot ? $r(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : yr(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? $r(n, t) : !1;
		}
		return $r(e, t);
	});
}, ei = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, ti = function(e) {
	return e.parentNode ? ti(e.parentNode) : e;
}, ni = function(e) {
	return br(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(qn);
		return e.push.apply(e, n ? ei(yr(ti(t).querySelectorAll(`[${qn}="${n}"]:not([${Jn}="disabled"])`))) : [t]), e;
	}, []);
}, ri = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, ii = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? ii(t.shadowRoot) : t instanceof HTMLIFrameElement && ri(function() {
			return t.contentWindow.document;
		}) ? ii(t.contentWindow.document) : t;
	}
}, ai = function(e, t) {
	return e === t;
}, oi = function(e, t) {
	return !!yr(e.querySelectorAll("iframe")).some(function(e) {
		return ai(e, t);
	});
}, si = function(e, t) {
	return t === void 0 && (t = ii(xr(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : ni(e).some(function(e) {
		return $r(e, t) || oi(e, t);
	});
}, ci = function(e) {
	e === void 0 && (e = document);
	var t = ii(e);
	return t ? yr(e.querySelectorAll(`[${Yn}]`)).some(function(e) {
		return $r(e, t);
	}) : !1;
}, li = function(e, t) {
	return t.filter(Nr).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, ui = function(e, t) {
	return Nr(e) && e.name ? li(e, t) : e;
}, di = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(ui(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, fi = function(e) {
	return e[0] && e.length > 1 ? ui(e[0], e) : e[0];
}, pi = function(e, t) {
	return e.indexOf(ui(t, e));
}, mi = "NEW_FOCUS", hi = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = Ir(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? mi : d;
		if (d === -1) return mi;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = di(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = pi(e, t[0]), C = pi(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, gi = function(e) {
	return function(t) {
		var n = Ar(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, _i = function(e, t, n) {
	var r = Yr(e.map(function(e) {
		return e.node;
	}).filter(gi(n)));
	return r && r.length ? fi(r) : fi(Yr(t));
}, vi = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && vi(e.parentNode.host || e.parentNode, t), t;
}, yi = function(e, t) {
	for (var n = vi(e), r = vi(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, bi = function(e, t, n) {
	var r = br(e), i = br(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = yi(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = yi(a, e);
			t && (o = !o || $r(t, o) ? t : yi(t, o));
		});
	}), o;
}, xi = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(Qr(n, t));
	}, []);
}, Si = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(Rr);
}, Ci = function(e, t) {
	var n = ii(br(e).length > 0 ? document : xr(e).ownerDocument), r = ni(e).filter(Lr), i = bi(n || e, e, r), a = /* @__PURE__ */ new Map(), o = Zr(r, a), s = o.filter(function(e) {
		var t = e.node;
		return Lr(t);
	});
	if (s[0]) {
		var c = Zr([i], a).map(function(e) {
			return e.node;
		}), l = Si(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = hi(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = _i(o, d, xi(r, a)) || _i(o, u, xi(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, wi = function(e) {
	var t = ni(e).filter(Lr), n = Vr(Kr([bi(e, e, t)], !0), !0, !0), r = Kr(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: Ir(t)
		};
	});
}, Ti = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Ei = 0, Di = !1, Oi = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Ci(e, t);
	if (!Di && r) {
		if (Ei > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Di = !0, setTimeout(function() {
				Di = !1;
			}, 1);
			return;
		}
		Ei++, Ti(r.node, n.focusOptions), Ei--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function ki(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var Ai = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: ki(n),
		parent: ki(n.parentElement),
		left: ki(n.previousElementSibling),
		right: ki(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: ki(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, ji = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = Xr([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, Mi = function(e) {
	var t = Ai(e);
	return function() {
		return ji(t);
	};
}, Ni = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = br(t);
	if (r.every(function(t) {
		return !$r(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? Xr(r, /* @__PURE__ */ new Map()) : Zr(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, Pi = function(e, t) {
	var n = t ? Xr(br(e), /* @__PURE__ */ new Map()) : Zr(br(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, Fi = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, Ii = function(e, t, n) {
	t === void 0 && (t = {});
	var r = Fi(t), i = Ni(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Ti(a.node, r.focusOptions);
	}
}, Li = function(e, t) {
	t === void 0 && (t = {}), Ii(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, Ri = function(e, t) {
	t === void 0 && (t = {}), Ii(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, zi = function(e, t, n) {
	var r = Pi(e, t.onlyTabbable ?? !0)[n];
	r && Ti(r.node, t.focusOptions);
}, Bi = function(e, t) {
	t === void 0 && (t = {}), zi(e, t, "first");
}, Vi = function(e, t) {
	t === void 0 && (t = {}), zi(e, t, "last");
}, Hi = function() {
	return document && document.activeElement === document.body;
}, Ui = function() {
	return Hi() || ci();
}, Wi = null, Gi = null, Ki = function() {
	return null;
}, qi = null, Ji = !1, Yi = !1, Xi = function() {
	return !0;
}, Zi = function(e) {
	return (Wi.whiteList || Xi)(e);
}, Qi = function(e, t) {
	qi = {
		observerNode: e,
		portaledElement: t
	};
}, $i = function(e) {
	return qi && qi.portaledElement === e;
};
function ea(e, t, n, r) {
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
var ta = function(e) {
	return e ? !!Ji : Ji === "meanwhile";
}, na = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, ra = function(e, t) {
	return t.some(function(t) {
		return na(e, t, t);
	});
}, ia = function(e) {
	return Zr(e, /* @__PURE__ */ new Map());
}, aa = function(e) {
	return !ia([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, oa = function() {
	var e = !1;
	if (Wi) {
		var t = Wi, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || qi && qi.portaledElement;
		if (Hi() && Gi && Gi !== document.body && (!document.body.contains(Gi) || aa(Gi))) {
			var u = Ki();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(cr).filter(Boolean));
			if ((!d || Zi(d)) && (r || function() {
				if (!ta(o) || !c || !Gi || Yi) return !1;
				var e = ia(f), t = e.findIndex(function(e) {
					return e.node === Gi;
				});
				return t === 0 || t === e.length - 1;
			}() || !Ui() || !Gi && i) && (l && !(si(f) || d && ra(d, f) || $i(d, l)) && (document && !Gi && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = Oi(f, Gi, { focusOptions: s }), qi = {})), Gi = document && document.activeElement, Gi !== document.body && (Ki = Mi(Gi)), Ji = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = wi(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), ea(h, m.length, 1, m), ea(h, -1, -1, m));
			}
		}
	}
	return e;
}, sa = function(e) {
	oa() && e && (e.stopPropagation(), e.preventDefault());
}, ca = function() {
	return sr(oa);
}, la = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || Qi(n, t);
}, ua = function() {
	return null;
}, da = function(e) {
	var t = e.children;
	return /* @__PURE__ */ D.createElement("div", {
		onBlur: ca,
		onFocus: la
	}, t);
};
da.propTypes = {};
var fa = function() {
	Yi = !0;
}, pa = function() {
	Yi = !1, Ji = "just", sr(function() {
		Ji = "meanwhile";
	});
}, ma = function() {
	document.addEventListener("focusin", sa), document.addEventListener("focusout", ca), window.addEventListener("focus", fa), window.addEventListener("blur", pa);
}, ha = function() {
	document.removeEventListener("focusin", sa), document.removeEventListener("focusout", ca), window.removeEventListener("focus", fa), window.removeEventListener("blur", pa);
};
function ga(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var _a = {
	moveFocusInside: Oi,
	focusInside: si,
	focusNextElement: Li,
	focusPrevElement: Ri,
	focusFirstElement: Bi,
	focusLastElement: Vi,
	captureFocusRestore: Mi
};
function va(e) {
	var t = e.slice(-1)[0];
	t && !Wi && ma();
	var n = Wi, r = n && t && t.id === n.id;
	Wi = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (Gi = null, (!r || n.observed !== t.observed) && t.onActivation(_a), oa(!0), sr(oa)) : (ha(), Gi = null);
}
er.assignSyncMedium(la), tr.assignMedium(ca), nr.assignMedium(function(e) {
	return e(_a);
}), Un(rr, vr(ga, va)(ua));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var ya, ba = function() {
	if (ya) return ya;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function xa() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = ba();
	return t && e.setAttribute("nonce", t), e;
}
function Sa(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ca(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var wa = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = xa()) && (Sa(t, n), Ca(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Ta = function() {
	var e = wa();
	return function(t, n) {
		D.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Ea = function() {
	var e = Ta();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Da = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Oa = function(e) {
	return parseInt(e || "", 10) || 0;
}, ka = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Oa(n),
		Oa(r),
		Oa(i)
	];
}, Aa = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Da;
	var t = ka(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, ja = Ea(), Ma = "data-scroll-locked", Na = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${jn} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Ma}] {
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
  
  .${kn} {
    right: ${s}px ${r};
  }
  
  .${An} {
    margin-right: ${s}px ${r};
  }
  
  .${kn} .${kn} {
    right: 0 ${r};
  }
  
  .${An} .${An} {
    margin-right: 0 ${r};
  }
  
  body[${Ma}] {
    ${Mn}: ${s}px;
  }
`;
}, Pa = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Fa = function() {
	D.useEffect(function() {
		return document.body.setAttribute(Ma, (Pa() + 1).toString()), function() {
			var e = Pa() - 1;
			e <= 0 ? document.body.removeAttribute(Ma) : document.body.setAttribute(Ma, e.toString());
		};
	}, []);
}, Ia = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Fa();
	var a = D.useMemo(function() {
		return Aa(i);
	}, [i]);
	return D.createElement(ja, { styles: Na(a, !t, i, n ? "" : "!important") });
}, La = !1;
if (typeof window < "u") try {
	var Ra = Object.defineProperty({}, "passive", { get: function() {
		return La = !0, !0;
	} });
	window.addEventListener("test", Ra, Ra), window.removeEventListener("test", Ra, Ra);
} catch {
	La = !1;
}
var za = La ? { passive: !1 } : !1, Ba = function(e) {
	return e.tagName === "TEXTAREA";
}, Va = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Ba(e) && n[t] === "visible");
}, Ha = function(e) {
	return Va(e, "overflowY");
}, Ua = function(e) {
	return Va(e, "overflowX");
}, Wa = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), qa(e, r)) {
			var i = Ja(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Ga = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Ka = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, qa = function(e, t) {
	return e === "v" ? Ha(t) : Ua(t);
}, Ja = function(e, t) {
	return e === "v" ? Ga(t) : Ka(t);
}, Ya = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Xa = function(e, t, n, r, i) {
	var a = Ya(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Ja(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && qa(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Za = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Qa = function(e) {
	return [e.deltaX, e.deltaY];
}, $a = function(e) {
	return e && "current" in e ? e.current : e;
}, eo = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, to = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, no = 0, ro = [];
function io(e) {
	var t = D.useRef([]), n = D.useRef([0, 0]), r = D.useRef(), i = D.useState(no++)[0], a = D.useState(Ea)[0], o = D.useRef(e);
	D.useEffect(function() {
		o.current = e;
	}, [e]), D.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = l([e.lockRef.current], (e.shards || []).map($a), !0).filter(Boolean);
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
	var s = D.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Za(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Wa(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Wa(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Xa(h, t, e, h === "h" ? s : c, !0);
	}, []), c = D.useCallback(function(e) {
		var n = e;
		if (!(!ro.length || ro[ro.length - 1] !== a)) {
			var r = "deltaY" in n ? Qa(n) : Za(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && eo(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map($a).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), u = D.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: ao(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = D.useCallback(function(e) {
		n.current = Za(e), r.current = void 0;
	}, []), f = D.useCallback(function(t) {
		u(t.type, Qa(t), t.target, s(t, e.lockRef.current));
	}, []), p = D.useCallback(function(t) {
		u(t.type, Za(t), t.target, s(t, e.lockRef.current));
	}, []);
	D.useEffect(function() {
		return ro.push(a), e.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", c, za), document.addEventListener("touchmove", c, za), document.addEventListener("touchstart", d, za), function() {
			ro = ro.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, za), document.removeEventListener("touchmove", c, za), document.removeEventListener("touchstart", d, za);
		};
	}, []);
	var m = e.removeScrollBar, h = e.inert;
	return D.createElement(D.Fragment, null, h ? D.createElement(a, { styles: to(i) }) : null, m ? D.createElement(Ia, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function ao(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
Un(Wn, io);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var oo = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, so = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap(), lo = {}, uo = 0, fo = function(e) {
	return e && (e.host || fo(e.parentNode));
}, po = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = fo(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, mo = function(e, t, n, r) {
	var i = po(t, Array.isArray(e) ? e : [e]);
	lo[n] || (lo[n] = /* @__PURE__ */ new WeakMap());
	var a = lo[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (so.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				so.set(e, c), a.set(e, l), o.push(e), c === 1 && i && co.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), uo++, function() {
		o.forEach(function(e) {
			var t = so.get(e) - 1, i = a.get(e) - 1;
			so.set(e, t), a.set(e, i), t || (co.has(e) || e.removeAttribute(r), co.delete(e)), i || e.removeAttribute(n);
		}), uo--, uo || (so = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap(), lo = {});
	};
}, ho = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || oo(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), mo(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, go = Ea(), _o = "\n [" + dr + "] {\n   pointer-events: none !important;\n }\n", vo = function() {
	return D.createElement(go, { styles: _o });
}, yo = function(e) {
	return "current" in e ? e.current : e;
};
function bo(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, D.useRef)(null), u = (0, D.useRef)(0);
	return D.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(yo).some(function(t) {
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
	]), (0, D.useEffect)(function() {
		if (c) return a && a(c), function() {
			o && o();
		};
	}, [!!c]), (0, D.useEffect)(function() {
		if (!(s || !c)) return ho(ee([c], (i || []).map(yo)), c.ownerDocument.body, dr);
	}, [c, s]), (0, D.useEffect)(function() {
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
	}, []), D.createElement(vo, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var xo = Un(ur, bo), So = function(e) {
	return D.createElement(xo, u({}, e));
}, Co = D.forwardRef(function(e, t) {
	return D.createElement(pr, u({}, e, {
		ref: t,
		sideCar: So
	}));
}), wo = /* @__PURE__ */ e(C()), To = class extends D.Component {
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
		return this.rootElement ? /* @__PURE__ */ wo.createPortal(this.props.children, this.rootElement) : null;
	}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function Eo({ onClick: e }) {
	return /* @__PURE__ */ D.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Do({ children: e = null }) {
	return /* @__PURE__ */ D.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function Oo({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, D.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /* @__PURE__ */ D.createElement(On, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /* @__PURE__ */ D.createElement(To, null, /* @__PURE__ */ D.createElement(Co, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, O.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /* @__PURE__ */ D.createElement(Do, null, /* @__PURE__ */ D.createElement(Eo, { onClick: a }), e))));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var ko = /* @__PURE__ */ D.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, D.useContext)(Dn), a = e, o = {
		...n,
		className: (0, O.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /* @__PURE__ */ D.createElement(a, o, t);
});
ko.propTypes = {
	as: k.default.elementType,
	children: k.default.node,
	className: k.default.string,
	onClick: k.default.func
}, ko.defaultProps = {
	as: xn,
	onClick: void 0,
	className: void 0,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var Ao = /* @__PURE__ */ D.forwardRef(({ as: e = "div", children: t, ...n }, r) => /* @__PURE__ */ D.createElement(e, {
	...n,
	ref: r,
	className: (0, O.default)("pgn__modal-header", n.className)
}, t));
Ao.propTypes = {
	as: k.default.elementType,
	children: k.default.node.isRequired,
	className: k.default.string
}, Ao.defaultProps = {
	as: "div",
	className: ""
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function jo({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ D.createElement(e, {
		...n,
		className: (0, O.default)("pgn__modal-title", n.className)
	}, t);
}
jo.propTypes = {
	as: k.default.elementType,
	children: k.default.node.isRequired,
	className: k.default.string
}, jo.defaultProps = {
	as: "h2",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function Mo({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ D.createElement(e, {
		...n,
		className: (0, O.default)("pgn__modal-footer", n.className)
	}, t);
}
Mo.propTypes = {
	as: k.default.elementType,
	children: k.default.node.isRequired,
	className: k.default.string
}, Mo.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
var No = (e = !0) => {
	let t = (0, D.useRef)(null), [n, r] = (0, D.useState)(e);
	return (0, D.useEffect)(() => {
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
function Po({ as: e, children: t, ...n }) {
	let [r, i] = No(), [a, o] = No(), s = (0, O.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /* @__PURE__ */ D.createElement(e, {
		...n,
		className: s
	}, /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("div", { ref: i }), /* @__PURE__ */ D.createElement("div", { className: "pgn__modal-body-content" }, t), /* @__PURE__ */ D.createElement("div", { ref: o })));
}
Po.propTypes = {
	as: k.default.elementType,
	children: k.default.node.isRequired,
	className: k.default.string
}, Po.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function Fo({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ D.createElement(e, {
		...n,
		className: (0, O.default)("pgn__modal-hero-content", n.className)
	}, t);
}
Fo.propTypes = {
	as: k.default.elementType,
	children: k.default.node.isRequired,
	className: k.default.string
}, Fo.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function Io({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /* @__PURE__ */ D.createElement(e, {
		...r,
		className: (0, O.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
Io.propTypes = {
	as: k.default.elementType,
	backgroundSrc: k.default.string,
	children: k.default.node,
	className: k.default.string,
	style: k.default.shape({})
}, Io.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function Lo({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ D.createElement(e, {
		...n,
		className: (0, O.default)("pgn__modal-hero", n.className)
	}, t);
}
Lo.propTypes = {
	as: k.default.elementType,
	children: k.default.node.isRequired,
	className: k.default.string
}, Lo.defaultProps = {
	as: "div",
	className: void 0
}, Lo.Content = Fo, Lo.Background = Io;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/messages.js
var Ro = S({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function j({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: c, isFullscreenScroll: l = !1, className: u, isFullscreenOnMobile: d = !1, isBlocking: f = !1, zIndex: p, isOverflowVisible: m }) {
	let h = s(), g = c || h.formatMessage(Ro.closeButtonText), _ = bn({ query: "(max-width: 767.98px)" }), v = d && _;
	return /* @__PURE__ */ D.createElement(Oo, {
		isOpen: n,
		onClose: r,
		isBlocking: f,
		zIndex: p
	}, /* @__PURE__ */ D.createElement("div", {
		role: "dialog",
		"aria-label": t,
		className: (0, O.default)("pgn__modal", {
			[`pgn__modal-${v ? "fullscreen" : i}`]: i,
			[`pgn__modal-${a}`]: a,
			"pgn__modal-scroll-fullscreen": l,
			"pgn__modal-visible-overflow": m
		}, u)
	}, o && /* @__PURE__ */ D.createElement("div", { className: "pgn__modal-close-container" }, /* @__PURE__ */ D.createElement(ko, {
		as: ye,
		iconAs: de,
		invertColors: a === "dark",
		src: me,
		alt: g
	})), e));
}
j.Header = Ao, j.Title = jo, j.Footer = Mo, j.CloseButton = ko, j.Body = Po, j.Hero = Lo;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useToggleHook.js
function zo(e = !1, t = {}) {
	let { handleToggleOn: n, handleToggleOff: r, handleToggle: i } = t, [a, o] = (0, D.useState)(e), s = (0, D.useCallback)(() => {
		o(!0), n?.(), i?.(!0);
	}, [n, i]), c = (0, D.useCallback)(() => {
		o(!1), r?.(), i?.(!1);
	}, [r, i]);
	return [
		a,
		s,
		c,
		(0, D.useCallback)(() => {
			(a ? c : s)();
		}, [
			a,
			s,
			c
		])
	];
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/StandardModal.js
var Bo = "Close";
function Vo({ children: e, footerNode: t, beforeBodyNode: n, afterBodyNode: r, ...i }) {
	return /* @__PURE__ */ D.createElement(j, { ...i }, /* @__PURE__ */ D.createElement(j.Header, null, /* @__PURE__ */ D.createElement(j.Title, null, i.title)), n, /* @__PURE__ */ D.createElement(j.Body, null, e), r, t && /* @__PURE__ */ D.createElement(j.Footer, null, t));
}
Vo.propTypes = {
	children: k.default.node.isRequired,
	title: k.default.string.isRequired,
	onClose: k.default.func.isRequired,
	isOpen: k.default.bool,
	hasCloseButton: k.default.bool,
	size: k.default.oneOf([
		"sm",
		"md",
		"lg",
		"xl",
		"fullscreen"
	]),
	variant: k.default.oneOf([
		"default",
		"warning",
		"danger",
		"success",
		"dark"
	]),
	closeLabel: k.default.string,
	className: k.default.string,
	isFullscreenScroll: k.default.bool,
	footerNode: k.default.node,
	beforeBodyNode: k.default.node,
	afterBodyNode: k.default.node
}, Vo.defaultProps = {
	isOpen: !1,
	hasCloseButton: !0,
	size: "md",
	variant: "default",
	closeLabel: Bo,
	className: void 0,
	isFullscreenScroll: !1,
	footerNode: null,
	beforeBodyNode: null,
	afterBodyNode: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/AlertModal.js
function Ho({ children: e, footerNode: t, icon: n, ...r }) {
	return /* @__PURE__ */ D.createElement(j, {
		...r,
		className: (0, O.default)("pgn__alert-modal", r.className)
	}, /* @__PURE__ */ D.createElement(j.Header, null, /* @__PURE__ */ D.createElement(j.Title, null, n && /* @__PURE__ */ D.createElement(de, {
		"data-testid": "title-icon",
		src: n,
		className: (0, O.default)("pgn__alert-modal__title_icon")
	}), r.title)), /* @__PURE__ */ D.createElement(j.Body, null, e), t && /* @__PURE__ */ D.createElement(j.Footer, null, t));
}
Ho.propTypes = {
	children: k.default.node.isRequired,
	title: k.default.string.isRequired,
	isOpen: k.default.bool,
	isBlocking: k.default.bool,
	hasCloseButton: k.default.bool,
	onClose: ue(k.default.func, "isBlocking"),
	size: k.default.oneOf([
		"sm",
		"md",
		"lg",
		"xl",
		"fullscreen"
	]),
	variant: k.default.oneOf([
		"default",
		"warning",
		"danger",
		"success"
	]),
	closeLabel: k.default.string,
	className: k.default.string,
	isFullscreenScroll: k.default.bool,
	footerNode: k.default.node,
	icon: k.default.elementType
}, Ho.defaultProps = {
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
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Nav/index.js
function Uo(e) {
	return /* @__PURE__ */ D.createElement(It, { ...e });
}
function Wo(e) {
	return /* @__PURE__ */ D.createElement(At, { ...e });
}
function Go(e) {
	return /* @__PURE__ */ D.createElement(Nt, { ...e });
}
function Ko(e) {
	return /* @__PURE__ */ D.createElement(Rt, { ...e });
}
function qo(e) {
	return /* @__PURE__ */ D.createElement(Rt.Item, { ...e });
}
function Jo(e) {
	return /* @__PURE__ */ D.createElement(Rt.Divider, { ...e });
}
Uo.propTypes = {
	cardHeaderBsPrefix: k.default.string,
	defaultActiveKey: k.default.oneOfType([k.default.string, k.default.number]),
	activeKey: k.default.oneOfType([k.default.string, k.default.number]),
	as: k.default.elementType,
	fill: k.default.bool,
	justify: k.default.bool,
	navbar: k.default.bool,
	onKeyDown: k.default.func,
	onSelect: k.default.func,
	role: k.default.string,
	variant: k.default.oneOf(["tabs", "pills"]),
	bsPrefix: k.default.string
}, Wo.propTypes = {
	role: k.default.string,
	as: k.default.elementType,
	bsPrefix: k.default.string
}, Go.propTypes = {
	onSelect: k.default.string,
	active: k.default.bool,
	as: k.default.elementType,
	disabled: k.default.bool,
	eventKey: k.default.oneOfType([k.default.string, k.default.number]),
	href: k.default.string,
	role: k.default.string,
	bsPrefix: k.default.string
}, Ko.propTypes = {
	id: k.default.string.isRequired,
	title: k.default.node.isRequired,
	active: k.default.bool,
	disabled: k.default.bool,
	menuRole: k.default.string,
	menuVariant: k.default.oneOf(["dark"]),
	onClick: k.default.func,
	renderMenuOnMount: k.default.bool,
	rootCloseEvent: k.default.string,
	bsPrefix: k.default.string
}, Uo.defaultProps = { ...It.defaultProps }, Ko.defaultProps = { ...Rt.defaultProps }, Wo.defaultProps = { ...At.defaultProps }, Go.defaultProps = { ...Nt.defaultProps }, Uo.Item = Wo, Uo.Link = Go, Ko.Item = qo, Ko.Divider = Jo;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Sticky/index.js
var Yo = ["top", "bottom"], Xo = /* @__PURE__ */ D.forwardRef(({ position: e, children: t, offset: n, className: r, ...i }, a) => {
	let [o, s] = (0, D.useState)(!1), c = D.useRef(), l = a || c;
	return (0, D.useLayoutEffect)(() => {
		if (l.current) {
			let t = l.current, n = window.getComputedStyle(t)[e || "top"], r = 1 + (parseInt(n, 10) || 0), i = new IntersectionObserver(([e]) => s(e.intersectionRatio < 1), {
				threshold: [1],
				rootMargin: e === "bottom" ? `0px 0px -${r}px 0px` : `-${r}px 0px 0px 0px`
			});
			return i.observe(t), () => {
				i.unobserve(t);
			};
		}
	}, [e, l]), /* @__PURE__ */ D.createElement("div", {
		className: (0, O.default)("pgn__sticky", `pgn__sticky-${e || "top"}`, n ? `pgn__sticky-offset--${n}` : "", { "pgn__sticky-shadow": o }, r),
		ref: l,
		...i
	}, t);
});
Xo.propTypes = {
	children: k.default.node.isRequired,
	position: k.default.oneOf(Yo),
	offset: k.default.oneOfType([k.default.number, k.default.string]),
	className: k.default.string
}, Xo.defaultProps = {
	position: "top",
	offset: void 0,
	className: void 0
};
//#endregion
//#region src/external-resources/studio-ui/components/ContentTypeSelect.tsx
var M = b(), Zo = Object.entries(ce), Qo = (e) => Zo.find(([, t]) => t.toLowerCase() === e.toLowerCase())?.[0], $o = ({ fileType: e, customFileType: t, onChange: n }) => {
	let r = (0, D.useId)(), i = (0, D.useRef)(null), [a, o] = (0, D.useState)(!1), [s, c] = (0, D.useState)(null), [l, u] = (0, D.useState)(-1), d = "";
	e === w.CUSTOM ? d = t : e && (d = ce[e]);
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
			case "Escape":
				a && (e.preventDefault(), m());
				break;
			default: break;
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
			trailingElement: /* @__PURE__ */ (0, M.jsx)(ye, {
				src: a ? ie : ae,
				iconAs: de,
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
					/* @__PURE__ */ (0, M.jsx)(de, {
						src: Sn,
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
//#endregion
//#region node_modules/.pnpm/fuse.js@7.1.0/node_modules/fuse.js/dist/fuse.mjs
function es(e) {
	return Array.isArray ? Array.isArray(e) : ds(e) === "[object Array]";
}
var ts = Infinity;
function ns(e) {
	if (typeof e == "string") return e;
	let t = e + "";
	return t == "0" && 1 / e == -ts ? "-0" : t;
}
function rs(e) {
	return e == null ? "" : ns(e);
}
function is(e) {
	return typeof e == "string";
}
function as(e) {
	return typeof e == "number";
}
function os(e) {
	return e === !0 || e === !1 || cs(e) && ds(e) == "[object Boolean]";
}
function ss(e) {
	return typeof e == "object";
}
function cs(e) {
	return ss(e) && e !== null;
}
function ls(e) {
	return e != null;
}
function us(e) {
	return !e.trim().length;
}
function ds(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var fs = "Incorrect 'index' type", ps = (e) => `Invalid value for key ${e}`, ms = (e) => `Pattern length exceeds max of ${e}.`, hs = (e) => `Missing ${e} property in key`, gs = (e) => `Property 'weight' in key '${e}' must be a positive integer`, _s = Object.prototype.hasOwnProperty, vs = class {
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
	if (is(e) || es(e)) r = e, t = bs(e), n = xs(e);
	else {
		if (!_s.call(e, "name")) throw Error(hs("name"));
		let o = e.name;
		if (r = o, _s.call(e, "weight") && (i = e.weight, i <= 0)) throw Error(gs(o));
		t = bs(o), n = xs(o), a = e.getFn;
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
	let n = [], r = !1, i = (e, t, a) => {
		if (ls(e)) if (!t[a]) n.push(e);
		else {
			let o = e[t[a]];
			if (!ls(o)) return;
			if (a === t.length - 1 && (is(o) || as(o) || os(o))) n.push(rs(o));
			else if (es(o)) {
				r = !0;
				for (let e = 0, n = o.length; e < n; e += 1) i(o[e], t, a + 1);
			} else t.length && i(o, t, a + 1);
		}
	};
	return i(e, is(t) ? t.split(".") : t, 0), r ? n : n[0];
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
	getFn: Ss,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, N = {
	...ws,
	...Cs,
	...Ts,
	...Es
}, Ds = /[^ ]+/g;
function Os(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = t.match(Ds).length;
			if (n.has(i)) return n.get(i);
			let a = 1 / i ** (.5 * e), o = parseFloat(Math.round(a * r) / r);
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var ks = class {
	constructor({ getFn: e = N.getFn, fieldNormWeight: t = N.fieldNormWeight } = {}) {
		this.norm = Os(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
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
		this.isCreated || !this.docs.length || (this.isCreated = !0, is(this.docs[0]) ? this.docs.forEach((e, t) => {
			this._addString(e, t);
		}) : this.docs.forEach((e, t) => {
			this._addObject(e, t);
		}), this.norm.clear());
	}
	add(e) {
		let t = this.size();
		is(e) ? this._addString(e, t) : this._addObject(e, t);
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
		if (!ls(e) || us(e)) return;
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
			if (ls(i)) {
				if (es(i)) {
					let e = [], t = [{
						nestedArrIndex: -1,
						value: i
					}];
					for (; t.length;) {
						let { nestedArrIndex: n, value: r } = t.pop();
						if (ls(r)) if (is(r) && !us(r)) {
							let t = {
								v: r,
								i: n,
								n: this.norm.get(r)
							};
							e.push(t);
						} else es(r) && r.forEach((e, n) => {
							t.push({
								nestedArrIndex: n,
								value: e
							});
						});
					}
					n.$[r] = e;
				} else if (is(i) && !us(i)) {
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
function As(e, t, { getFn: n = N.getFn, fieldNormWeight: r = N.fieldNormWeight } = {}) {
	let i = new ks({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(ys)), i.setSources(t), i.create(), i;
}
function js(e, { getFn: t = N.getFn, fieldNormWeight: n = N.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new ks({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function Ms(e, { errors: t = 0, currentLocation: n = 0, expectedLocation: r = 0, distance: i = N.distance, ignoreLocation: a = N.ignoreLocation } = {}) {
	let o = t / e.length;
	if (a) return o;
	let s = Math.abs(r - n);
	return i ? o + s / i : s ? 1 : o;
}
function Ns(e = [], t = N.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
var Ps = 32;
function Fs(e, t, n, { location: r = N.location, distance: i = N.distance, threshold: a = N.threshold, findAllMatches: o = N.findAllMatches, minMatchCharLength: s = N.minMatchCharLength, includeMatches: c = N.includeMatches, ignoreLocation: l = N.ignoreLocation } = {}) {
	if (t.length > Ps) throw Error(ms(Ps));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = s > 1 || c, g = h ? Array(d) : [], _;
	for (; (_ = e.indexOf(t, m)) > -1;) {
		let e = Ms(t, {
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
		for (; a < s;) Ms(t, {
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
			if (h && (g[o] = +!!s), S[a] = (S[a + 1] << 1 | 1) & s, r && (S[a] |= (v[a + 1] | v[a]) << 1 | 1 | v[a + 1]), S[a] & x && (y = Ms(t, {
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
		if (Ms(t, {
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
		let e = Ns(g, s);
		e.length ? c && (S.indices = e) : S.isMatch = !1;
	}
	return S;
}
function Is(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
var Ls = String.prototype.normalize ? ((e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((e) => e), Rs = class {
	constructor(e, { location: t = N.location, threshold: n = N.threshold, distance: r = N.distance, includeMatches: i = N.includeMatches, findAllMatches: a = N.findAllMatches, minMatchCharLength: o = N.minMatchCharLength, isCaseSensitive: s = N.isCaseSensitive, ignoreDiacritics: c = N.ignoreDiacritics, ignoreLocation: l = N.ignoreLocation } = {}) {
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
		}, e = s ? e : e.toLowerCase(), e = c ? Ls(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
		let u = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: Is(e),
				startIndex: t
			});
		}, d = this.pattern.length;
		if (d > Ps) {
			let e = 0, t = d % Ps, n = d - t;
			for (; e < n;) u(this.pattern.substr(e, Ps), e), e += Ps;
			if (t) {
				let e = d - Ps;
				u(this.pattern.substr(e), e);
			}
		} else u(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, ignoreDiacritics: n, includeMatches: r } = this.options;
		if (e = t ? e : e.toLowerCase(), e = n ? Ls(e) : e, this.pattern === e) {
			let t = {
				isMatch: !0,
				score: 0
			};
			return r && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: i, distance: a, threshold: o, findAllMatches: s, minMatchCharLength: c, ignoreLocation: l } = this.options, u = [], d = 0, f = !1;
		this.chunks.forEach(({ pattern: t, alphabet: n, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = Fs(e, t, n, {
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
}, zs = class {
	constructor(e) {
		this.pattern = e;
	}
	static isMultiMatch(e) {
		return Bs(e, this.multiRegex);
	}
	static isSingleMatch(e) {
		return Bs(e, this.singleRegex);
	}
	search() {}
};
function Bs(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
var Vs = class extends zs {
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
}, Hs = class extends zs {
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
}, Us = class extends zs {
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
}, Ws = class extends zs {
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
}, Gs = class extends zs {
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
}, Ks = class extends zs {
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
}, qs = class extends zs {
	constructor(e, { location: t = N.location, threshold: n = N.threshold, distance: r = N.distance, includeMatches: i = N.includeMatches, findAllMatches: a = N.findAllMatches, minMatchCharLength: o = N.minMatchCharLength, isCaseSensitive: s = N.isCaseSensitive, ignoreDiacritics: c = N.ignoreDiacritics, ignoreLocation: l = N.ignoreLocation } = {}) {
		super(e), this._bitapSearch = new Rs(e, {
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
}, Js = class extends zs {
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
}, Ys = [
	Vs,
	Js,
	Us,
	Ws,
	Ks,
	Gs,
	Hs,
	qs
], Xs = Ys.length, Zs = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Qs = "|";
function $s(e, t = {}) {
	return e.split(Qs).map((e) => {
		let n = e.trim().split(Zs).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < Xs;) {
				let e = Ys[o], n = e.isMultiMatch(i);
				n && (r.push(new e(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < Xs;) {
				let e = Ys[o], n = e.isSingleMatch(i);
				if (n) {
					r.push(new e(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var ec = new Set([qs.type, Js.type]), tc = class {
	constructor(e, { isCaseSensitive: t = N.isCaseSensitive, ignoreDiacritics: n = N.ignoreDiacritics, includeMatches: r = N.includeMatches, minMatchCharLength: i = N.minMatchCharLength, ignoreLocation: a = N.ignoreLocation, findAllMatches: o = N.findAllMatches, location: s = N.location, threshold: c = N.threshold, distance: l = N.distance } = {}) {
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
		}, e = t ? e : e.toLowerCase(), e = n ? Ls(e) : e, this.pattern = e, this.query = $s(this.pattern, this.options);
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
		e = r ? e : e.toLowerCase(), e = i ? Ls(e) : e;
		let a = 0, o = [], s = 0;
		for (let r = 0, i = t.length; r < i; r += 1) {
			let i = t[r];
			o.length = 0, a = 0;
			for (let t = 0, r = i.length; t < r; t += 1) {
				let r = i[t], { isMatch: c, indices: l, score: u } = r.search(e);
				if (c) {
					if (a += 1, s += u, n) {
						let e = r.constructor.type;
						ec.has(e) ? o = [...o, ...l] : o.push(l);
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
}, nc = [];
function rc(...e) {
	nc.push(...e);
}
function ic(e, t) {
	for (let n = 0, r = nc.length; n < r; n += 1) {
		let r = nc[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new Rs(e, t);
}
var ac = {
	AND: "$and",
	OR: "$or"
}, oc = {
	PATH: "$path",
	PATTERN: "$val"
}, sc = (e) => !!(e[ac.AND] || e[ac.OR]), cc = (e) => !!e[oc.PATH], lc = (e) => !es(e) && ss(e) && !sc(e), uc = (e) => ({ [ac.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function dc(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		let i = Object.keys(e), a = cc(e);
		if (!a && i.length > 1 && !sc(e)) return r(uc(e));
		if (lc(e)) {
			let r = a ? e[oc.PATH] : i[0], o = a ? e[oc.PATTERN] : e[r];
			if (!is(o)) throw Error(ps(r));
			let s = {
				keyId: xs(r),
				pattern: o
			};
			return n && (s.searcher = ic(o, t)), s;
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
	return sc(e) || (e = uc(e)), r(e);
}
function fc(e, { ignoreFieldNorm: t = N.ignoreFieldNorm }) {
	e.forEach((e) => {
		let n = 1;
		e.matches.forEach(({ key: e, norm: r, score: i }) => {
			let a = e ? e.weight : null;
			n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
		}), e.score = n;
	});
}
function pc(e, t) {
	let n = e.matches;
	t.matches = [], ls(n) && n.forEach((e) => {
		if (!ls(e.indices) || !e.indices.length) return;
		let { indices: n, value: r } = e, i = {
			indices: n,
			value: r
		};
		e.key && (i.key = e.key.src), e.idx > -1 && (i.refIndex = e.idx), t.matches.push(i);
	});
}
function mc(e, t) {
	t.score = e.score;
}
function hc(e, t, { includeMatches: n = N.includeMatches, includeScore: r = N.includeScore } = {}) {
	let i = [];
	return n && i.push(pc), r && i.push(mc), e.map((e) => {
		let { idx: n } = e, r = {
			item: t[n],
			refIndex: n
		};
		return i.length && i.forEach((t) => {
			t(e, r);
		}), r;
	});
}
var gc = class {
	constructor(e, t = {}, n) {
		this.options = {
			...N,
			...t
		}, this.options.useExtendedSearch, this._keyStore = new vs(this.options.keys), this.setCollection(e, n);
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof ks)) throw Error(fs);
		this._myIndex = t || As(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		});
	}
	add(e) {
		ls(e) && (this._docs.push(e), this._myIndex.add(e));
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
		let { includeMatches: n, includeScore: r, shouldSort: i, sortFn: a, ignoreFieldNorm: o } = this.options, s = is(e) ? is(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
		return fc(s, { ignoreFieldNorm: o }), i && s.sort(a), as(t) && t > -1 && (s = s.slice(0, t)), hc(s, this._docs, {
			includeMatches: n,
			includeScore: r
		});
	}
	_searchStringList(e) {
		let t = ic(e, this.options), { records: n } = this._myIndex, r = [];
		return n.forEach(({ v: e, i: n, n: i }) => {
			if (!ls(e)) return;
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
		let t = dc(e, this.options), n = (e, t, r) => {
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
				else if (e.operator === ac.AND) return [];
			}
			return i;
		}, r = this._myIndex.records, i = {}, a = [];
		return r.forEach(({ $: e, i: r }) => {
			if (ls(e)) {
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
		let t = ic(e, this.options), { keys: n, records: r } = this._myIndex, i = [];
		return r.forEach(({ $: e, i: r }) => {
			if (!ls(e)) return;
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
		if (!ls(t)) return [];
		let r = [];
		if (es(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!ls(t)) return;
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
gc.version = "7.1.0", gc.createIndex = As, gc.parseIndex = js, gc.config = N, gc.parseQuery = dc, rc(tc);
//#endregion
//#region src/shared/components/IconPicker/index.tsx
var _c = new gc(/* @__PURE__ */ "10k.10mp.11mp.123.12mp.13mp.14mp.15mp.16mp.17mp.18_up_rating.18mp.19mp.1k.1k_plus.1x_mobiledata.20mp.21mp.22mp.23mp.24mp.2k.2k_plus.2mp.30fps.30fps_select.360.3d_rotation.3g_mobiledata.3k.3k_plus.3mp.3p.4g_mobiledata.4g_plus_mobiledata.4k.4k_plus.4mp.5g.5k.5k_plus.5mp.60fps.60fps_select.6_ft_apart.6k.6k_plus.6mp.7k.7k_plus.7mp.8k.8k_plus.8mp.9k.9k_plus.9mp.abc.ac_unit.access_alarm.access_alarms.access_time.access_time_filled.accessibility.accessibility_new.accessible.accessible_forward.account_balance.account_balance_wallet.account_box.account_circle.account_tree.ad_units.adb.add.add_a_photo.add_alarm.add_alert.add_box.add_business.add_card.add_chart.add_circle.add_circle_outline.add_comment.add_home.add_home_work.add_ic_call.add_link.add_location.add_location_alt.add_moderator.add_photo_alternate.add_reaction.add_road.add_shopping_cart.add_task.add_to_drive.add_to_home_screen.add_to_photos.add_to_queue.addchart.adf_scanner.adjust.admin_panel_settings.ads_click.agriculture.air.airline_seat_flat.airline_seat_flat_angled.airline_seat_individual_suite.airline_seat_legroom_extra.airline_seat_legroom_normal.airline_seat_legroom_reduced.airline_seat_recline_extra.airline_seat_recline_normal.airline_stops.airlines.airplane_ticket.airplanemode_active.airplanemode_inactive.airplay.airport_shuttle.alarm.alarm_add.alarm_off.alarm_on.album.align_horizontal_center.align_horizontal_left.align_horizontal_right.align_vertical_bottom.align_vertical_center.align_vertical_top.all_inbox.all_inclusive.all_out.alt_route.alternate_email.analytics.anchor.android.animation.announcement.aod.apartment.api.app_blocking.app_registration.app_settings_alt.app_shortcut.approval.apps.apps_outage.architecture.archive.area_chart.arrow_back.arrow_back_ios.arrow_back_ios_new.arrow_circle_down.arrow_circle_left.arrow_circle_right.arrow_circle_up.arrow_downward.arrow_drop_down.arrow_drop_down_circle.arrow_drop_up.arrow_forward.arrow_forward_ios.arrow_left.arrow_outward.arrow_right.arrow_right_alt.arrow_upward.art_track.article.aspect_ratio.assessment.assignment.assignment_ind.assignment_late.assignment_return.assignment_returned.assignment_turned_in.assist_walker.assistant.assistant_direction.assistant_photo.assured_workload.atm.attach_email.attach_file.attach_money.attachment.attractions.attribution.audio_file.audiotrack.auto_awesome.auto_awesome_mosaic.auto_awesome_motion.auto_delete.auto_fix_high.auto_fix_normal.auto_fix_off.auto_graph.auto_mode.auto_stories.autofps_select.autorenew.av_timer.baby_changing_station.back_hand.backpack.backspace.backup.backup_table.badge.bakery_dining.balance.balcony.ballot.bar_chart.batch_prediction.bathroom.bathtub.battery_0_bar.battery_1_bar.battery_2_bar.battery_3_bar.battery_4_bar.battery_5_bar.battery_6_bar.battery_alert.battery_charging_full.battery_full.battery_saver.battery_std.battery_unknown.beach_access.bed.bedroom_baby.bedroom_child.bedroom_parent.bedtime.bedtime_off.beenhere.bento.bike_scooter.biotech.blender.blind.blinds.blinds_closed.block.bloodtype.bluetooth.bluetooth_audio.bluetooth_connected.bluetooth_disabled.bluetooth_drive.bluetooth_searching.blur_circular.blur_linear.blur_off.blur_on.bolt.book.book_online.bookmark.bookmark_add.bookmark_added.bookmark_border.bookmark_remove.bookmarks.border_all.border_bottom.border_clear.border_color.border_horizontal.border_inner.border_left.border_outer.border_right.border_style.border_top.border_vertical.boy.branding_watermark.breakfast_dining.brightness_1.brightness_2.brightness_3.brightness_4.brightness_5.brightness_6.brightness_7.brightness_auto.brightness_high.brightness_low.brightness_medium.broadcast_on_home.broadcast_on_personal.broken_image.browse_gallery.browser_not_supported.browser_updated.brunch_dining.brush.bubble_chart.bug_report.build.build_circle.bungalow.burst_mode.bus_alert.business.business_center.cabin.cable.cached.cake.calculate.calendar_month.calendar_today.calendar_view_day.calendar_view_month.calendar_view_week.call.call_end.call_made.call_merge.call_missed.call_missed_outgoing.call_received.call_split.call_to_action.camera.camera_alt.camera_enhance.camera_front.camera_indoor.camera_outdoor.camera_rear.camera_roll.cameraswitch.campaign.cancel.cancel_presentation.cancel_schedule_send.candlestick_chart.car_crash.car_rental.car_repair.card_giftcard.card_membership.card_travel.carpenter.cases.casino.cast.cast_connected.cast_for_education.castle.catching_pokemon.category.celebration.cell_tower.cell_wifi.center_focus_strong.center_focus_weak.chair.chair_alt.chalet.change_circle.change_history.charging_station.chat.chat_bubble.chat_bubble_outline.check.check_box.check_box_outline_blank.check_circle.check_circle_outline.checklist.checklist_rtl.checkroom.chevron_left.chevron_right.child_care.child_friendly.chrome_reader_mode.church.circle.circle_notifications.class.clean_hands.cleaning_services.clear.clear_all.close.close_fullscreen.closed_caption.closed_caption_disabled.closed_caption_off.cloud.cloud_circle.cloud_done.cloud_download.cloud_off.cloud_queue.cloud_sync.cloud_upload.co2.co_present.code.code_off.coffee.coffee_maker.collections.collections_bookmark.color_lens.colorize.comment.comment_bank.comments_disabled.commit.commute.compare.compare_arrows.compass_calibration.compost.compress.computer.confirmation_number.connect_without_contact.connected_tv.connecting_airports.construction.contact_emergency.contact_mail.contact_page.contact_phone.contact_support.contactless.contacts.content_copy.content_cut.content_paste.content_paste_go.content_paste_off.content_paste_search.contrast.control_camera.control_point.control_point_duplicate.cookie.copy_all.copyright.coronavirus.corporate_fare.cottage.countertops.create.create_new_folder.credit_card.credit_card_off.credit_score.crib.crisis_alert.crop.crop_16_9.crop_3_2.crop_5_4.crop_7_5.crop_din.crop_free.crop_landscape.crop_original.crop_portrait.crop_rotate.crop_square.cruelty_free.css.currency_bitcoin.currency_exchange.currency_franc.currency_lira.currency_pound.currency_ruble.currency_rupee.currency_yen.currency_yuan.curtains.curtains_closed.cyclone.dangerous.dark_mode.dashboard.dashboard_customize.data_array.data_exploration.data_object.data_saver_off.data_saver_on.data_thresholding.data_usage.dataset.dataset_linked.date_range.deblur.deck.dehaze.delete.delete_forever.delete_outline.delete_sweep.delivery_dining.density_large.density_medium.density_small.departure_board.description.deselect.design_services.desk.desktop_access_disabled.desktop_mac.desktop_windows.details.developer_board.developer_board_off.developer_mode.device_hub.device_thermostat.device_unknown.devices.devices_fold.devices_other.dialer_sip.dialpad.diamond.difference.dining.dinner_dining.directions.directions_bike.directions_boat.directions_boat_filled.directions_bus.directions_bus_filled.directions_car.directions_car_filled.directions_off.directions_railway.directions_railway_filled.directions_run.directions_subway.directions_subway_filled.directions_transit.directions_transit_filled.directions_walk.dirty_lens.disabled_by_default.disabled_visible.disc_full.discount.display_settings.diversity_1.diversity_2.diversity_3.dns.do_disturb.do_disturb_alt.do_disturb_off.do_disturb_on.do_not_disturb.do_not_disturb_alt.do_not_disturb_off.do_not_disturb_on.do_not_disturb_on_total_silence.do_not_step.do_not_touch.dock.document_scanner.domain.domain_add.domain_disabled.domain_verification.done.done_all.done_outline.donut_large.donut_small.door_back.door_front.door_sliding.doorbell.double_arrow.downhill_skiing.download.download_done.download_for_offline.downloading.drafts.drag_handle.drag_indicator.draw.drive_eta.drive_file_move.drive_file_move_rtl.drive_file_rename_outline.drive_folder_upload.dry.dry_cleaning.duo.dvr.dynamic_feed.dynamic_form.e_mobiledata.earbuds.earbuds_battery.east.edgesensor_high.edgesensor_low.edit.edit_attributes.edit_calendar.edit_location.edit_location_alt.edit_note.edit_notifications.edit_off.edit_road.egg.egg_alt.eject.elderly.elderly_woman.electric_bike.electric_bolt.electric_car.electric_meter.electric_moped.electric_rickshaw.electric_scooter.electrical_services.elevator.email.emergency.emergency_recording.emergency_share.emoji_emotions.emoji_events.emoji_food_beverage.emoji_nature.emoji_objects.emoji_people.emoji_symbols.emoji_transportation.energy_savings_leaf.engineering.enhanced_encryption.equalizer.error.error_outline.escalator.escalator_warning.euro.euro_symbol.ev_station.event.event_available.event_busy.event_note.event_repeat.event_seat.exit_to_app.expand.expand_circle_down.expand_less.expand_more.explicit.explore.explore_off.exposure.exposure_neg_1.exposure_neg_2.exposure_plus_1.exposure_plus_2.exposure_zero.extension.extension_off.face.face_2.face_3.face_4.face_5.face_6.face_retouching_natural.face_retouching_off.fact_check.factory.family_restroom.fast_forward.fast_rewind.fastfood.favorite.favorite_border.fax.featured_play_list.featured_video.feed.feedback.female.fence.festival.fiber_dvr.fiber_manual_record.fiber_new.fiber_pin.fiber_smart_record.file_copy.file_download.file_download_done.file_download_off.file_open.file_present.file_upload.filter.filter_1.filter_2.filter_3.filter_4.filter_5.filter_6.filter_7.filter_8.filter_9.filter_9_plus.filter_alt.filter_alt_off.filter_b_and_w.filter_center_focus.filter_drama.filter_frames.filter_hdr.filter_list.filter_list_off.filter_none.filter_tilt_shift.filter_vintage.find_in_page.find_replace.fingerprint.fire_extinguisher.fire_hydrant_alt.fire_truck.fireplace.first_page.fit_screen.fitbit.fitness_center.flag.flag_circle.flaky.flare.flash_auto.flash_off.flash_on.flashlight_off.flashlight_on.flatware.flight.flight_class.flight_land.flight_takeoff.flip.flip_camera_android.flip_camera_ios.flip_to_back.flip_to_front.flood.fluorescent.flutter_dash.fmd_bad.fmd_good.folder.folder_copy.folder_delete.folder_off.folder_open.folder_shared.folder_special.folder_zip.follow_the_signs.font_download.font_download_off.food_bank.forest.fork_left.fork_right.format_align_center.format_align_justify.format_align_left.format_align_right.format_bold.format_clear.format_color_fill.format_color_reset.format_color_text.format_indent_decrease.format_indent_increase.format_italic.format_line_spacing.format_list_bulleted.format_list_numbered.format_list_numbered_rtl.format_overline.format_paint.format_quote.format_shapes.format_size.format_strikethrough.format_textdirection_l_to_r.format_textdirection_r_to_l.format_underlined.fort.forum.forward.forward_10.forward_30.forward_5.forward_to_inbox.foundation.free_breakfast.free_cancellation.front_hand.fullscreen.fullscreen_exit.functions.g_mobiledata.g_translate.gamepad.games.garage.gas_meter.gavel.generating_tokens.gesture.get_app.gif.gif_box.girl.gite.golf_course.gpp_bad.gpp_good.gpp_maybe.gps_fixed.gps_not_fixed.gps_off.grade.gradient.grading.grain.graphic_eq.grass.grid_3x3.grid_4x4.grid_goldenratio.grid_off.grid_on.grid_view.group.group_add.group_off.group_remove.group_work.groups.groups_2.groups_3.h_mobiledata.h_plus_mobiledata.hail.handshake.handyman.hardware.hd.hdr_auto.hdr_auto_select.hdr_enhanced_select.hdr_off.hdr_off_select.hdr_on.hdr_on_select.hdr_plus.hdr_strong.hdr_weak.headphones.headphones_battery.headset.headset_mic.headset_off.healing.health_and_safety.hearing.hearing_disabled.heart_broken.heat_pump.height.help.help_center.help_outline.hevc.hexagon.hide_image.hide_source.high_quality.highlight.highlight_alt.highlight_off.hiking.history.history_edu.history_toggle_off.hive.hls.hls_off.holiday_village.home.home_max.home_mini.home_repair_service.home_work.horizontal_distribute.horizontal_rule.horizontal_split.hot_tub.hotel.hotel_class.hourglass_bottom.hourglass_disabled.hourglass_empty.hourglass_full.hourglass_top.house.house_siding.houseboat.how_to_reg.how_to_vote.html.http.https.hub.hvac.ice_skating.icecream.image.image_aspect_ratio.image_not_supported.image_search.imagesearch_roller.import_contacts.import_export.important_devices.inbox.incomplete_circle.indeterminate_check_box.info.input.insert_chart.insert_chart_outlined.insert_comment.insert_drive_file.insert_emoticon.insert_invitation.insert_link.insert_page_break.insert_photo.insights.install_desktop.install_mobile.integration_instructions.interests.interpreter_mode.inventory.inventory_2.invert_colors.invert_colors_off.ios_share.iron.iso.javascript.join_full.join_inner.join_left.join_right.kayaking.kebab_dining.key.key_off.keyboard.keyboard_alt.keyboard_arrow_down.keyboard_arrow_left.keyboard_arrow_right.keyboard_arrow_up.keyboard_backspace.keyboard_capslock.keyboard_command_key.keyboard_control_key.keyboard_double_arrow_down.keyboard_double_arrow_left.keyboard_double_arrow_right.keyboard_double_arrow_up.keyboard_hide.keyboard_option_key.keyboard_return.keyboard_tab.keyboard_voice.king_bed.kitchen.kitesurfing.label.label_important.label_off.lan.landscape.landslide.language.laptop.laptop_chromebook.laptop_mac.laptop_windows.last_page.launch.layers.layers_clear.leaderboard.leak_add.leak_remove.legend_toggle.lens.lens_blur.library_add.library_add_check.library_books.library_music.light.light_mode.lightbulb.lightbulb_circle.line_axis.line_style.line_weight.linear_scale.link.link_off.linked_camera.liquor.list.list_alt.live_help.live_tv.living.local_activity.local_airport.local_atm.local_bar.local_cafe.local_car_wash.local_convenience_store.local_dining.local_drink.local_fire_department.local_florist.local_gas_station.local_grocery_store.local_hospital.local_hotel.local_laundry_service.local_library.local_mall.local_movies.local_offer.local_parking.local_pharmacy.local_phone.local_pizza.local_play.local_police.local_post_office.local_printshop.local_see.local_shipping.local_taxi.location_city.location_disabled.location_off.location_on.location_searching.lock.lock_clock.lock_open.lock_person.lock_reset.login.logo_dev.logout.looks.looks_3.looks_4.looks_5.looks_6.looks_one.looks_two.loop.loupe.low_priority.loyalty.lte_mobiledata.lte_plus_mobiledata.luggage.lunch_dining.lyrics.macro_off.mail.mail_lock.mail_outline.male.man.man_2.man_3.man_4.manage_accounts.manage_history.manage_search.map.maps_home_work.maps_ugc.margin.mark_as_unread.mark_chat_read.mark_chat_unread.mark_email_read.mark_email_unread.mark_unread_chat_alt.markunread.markunread_mailbox.masks.maximize.media_bluetooth_off.media_bluetooth_on.mediation.medical_information.medical_services.medication.medication_liquid.meeting_room.memory.menu.menu_book.menu_open.merge.merge_type.message.mic.mic_external_off.mic_external_on.mic_none.mic_off.microwave.military_tech.minimize.minor_crash.miscellaneous_services.missed_video_call.mms.mobile_friendly.mobile_off.mobile_screen_share.mobiledata_off.mode.mode_comment.mode_edit.mode_edit_outline.mode_fan_off.mode_night.mode_of_travel.mode_standby.model_training.monetization_on.money.money_off.money_off_csred.monitor.monitor_heart.monitor_weight.monochrome_photos.mood.mood_bad.moped.more.more_horiz.more_time.more_vert.mosque.motion_photos_auto.motion_photos_off.motion_photos_on.motion_photos_pause.motion_photos_paused.mouse.move_down.move_to_inbox.move_up.movie.movie_creation.movie_filter.moving.mp.multiline_chart.multiple_stop.museum.music_note.music_off.music_video.my_location.nat.nature.nature_people.navigate_before.navigate_next.navigation.near_me.near_me_disabled.nearby_error.nearby_off.nest_cam_wired_stand.network_cell.network_check.network_locked.network_ping.network_wifi.network_wifi_1_bar.network_wifi_2_bar.network_wifi_3_bar.new_label.new_releases.newspaper.next_plan.next_week.nfc.night_shelter.nightlife.nightlight.nightlight_round.nights_stay.no_accounts.no_adult_content.no_backpack.no_cell.no_crash.no_drinks.no_encryption.no_encryption_gmailerrorred.no_flash.no_food.no_luggage.no_meals.no_meeting_room.no_photography.no_sim.no_stroller.no_transfer.noise_aware.noise_control_off.nordic_walking.north.north_east.north_west.not_accessible.not_interested.not_listed_location.not_started.note.note_add.note_alt.notes.notification_add.notification_important.notifications.notifications_active.notifications_none.notifications_off.notifications_paused.numbers.offline_bolt.offline_pin.offline_share.oil_barrel.on_device_training.ondemand_video.online_prediction.opacity.open_in_browser.open_in_full.open_in_new.open_in_new_off.open_with.other_houses.outbound.outbox.outdoor_grill.outlet.outlined_flag.output.padding.pages.pageview.paid.palette.pan_tool.pan_tool_alt.panorama.panorama_fish_eye.panorama_horizontal.panorama_horizontal_select.panorama_photosphere.panorama_photosphere_select.panorama_vertical.panorama_vertical_select.panorama_wide_angle.panorama_wide_angle_select.paragliding.park.party_mode.password.pattern.pause.pause_circle.pause_circle_filled.pause_circle_outline.pause_presentation.payment.payments.pedal_bike.pending.pending_actions.pentagon.people.people_alt.people_outline.percent.perm_camera_mic.perm_contact_calendar.perm_data_setting.perm_device_information.perm_identity.perm_media.perm_phone_msg.perm_scan_wifi.person.person_2.person_3.person_4.person_add.person_add_alt.person_add_alt_1.person_add_disabled.person_off.person_outline.person_pin.person_pin_circle.person_remove.person_remove_alt_1.person_search.personal_injury.personal_video.pest_control.pest_control_rodent.pets.phishing.phone.phone_android.phone_bluetooth_speaker.phone_callback.phone_disabled.phone_enabled.phone_forwarded.phone_iphone.phone_locked.phone_missed.phone_paused.phonelink.phonelink_erase.phonelink_lock.phonelink_off.phonelink_ring.phonelink_setup.photo.photo_album.photo_camera.photo_camera_back.photo_camera_front.photo_filter.photo_library.photo_size_select_actual.photo_size_select_large.photo_size_select_small.php.piano.piano_off.picture_as_pdf.picture_in_picture.picture_in_picture_alt.pie_chart.pie_chart_outline.pin.pin_drop.pin_end.pin_invoke.pinch.pivot_table_chart.pix.place.plagiarism.play_arrow.play_circle.play_circle_filled.play_circle_outline.play_disabled.play_for_work.play_lesson.playlist_add.playlist_add_check.playlist_add_check_circle.playlist_add_circle.playlist_play.playlist_remove.plumbing.plus_one.podcasts.point_of_sale.policy.poll.polyline.polymer.pool.portable_wifi_off.portrait.post_add.power.power_input.power_off.power_settings_new.precision_manufacturing.pregnant_woman.present_to_all.preview.price_change.price_check.print.print_disabled.priority_high.privacy_tip.private_connectivity.production_quantity_limits.propane.propane_tank.psychology.psychology_alt.public.public_off.publish.published_with_changes.punch_clock.push_pin.qr_code.qr_code_2.qr_code_scanner.query_builder.query_stats.question_answer.question_mark.queue.queue_music.queue_play_next.quickreply.quiz.r_mobiledata.radar.radio.radio_button_checked.radio_button_unchecked.railway_alert.ramen_dining.ramp_left.ramp_right.rate_review.raw_off.raw_on.read_more.real_estate_agent.receipt.receipt_long.recent_actors.recommend.record_voice_over.rectangle.recycling.redeem.redo.reduce_capacity.refresh.remember_me.remove.remove_circle.remove_circle_outline.remove_done.remove_from_queue.remove_moderator.remove_red_eye.remove_road.remove_shopping_cart.reorder.repartition.repeat.repeat_on.repeat_one.repeat_one_on.replay.replay_10.replay_30.replay_5.replay_circle_filled.reply.reply_all.report.report_gmailerrorred.report_off.report_problem.request_page.request_quote.reset_tv.restart_alt.restaurant.restaurant_menu.restore.restore_from_trash.restore_page.reviews.rice_bowl.ring_volume.rocket.rocket_launch.roller_shades.roller_shades_closed.roller_skating.roofing.room.room_preferences.room_service.rotate_90_degrees_ccw.rotate_90_degrees_cw.rotate_left.rotate_right.roundabout_left.roundabout_right.rounded_corner.route.router.rowing.rss_feed.rsvp.rtt.rule.rule_folder.run_circle.running_with_errors.rv_hookup.safety_check.safety_divider.sailing.sanitizer.satellite.satellite_alt.save.save_alt.save_as.saved_search.savings.scale.scanner.scatter_plot.schedule.schedule_send.schema.school.science.score.scoreboard.screen_lock_landscape.screen_lock_portrait.screen_lock_rotation.screen_rotation.screen_rotation_alt.screen_search_desktop.screen_share.screenshot.screenshot_monitor.scuba_diving.sd.sd_card.sd_card_alert.sd_storage.search.search_off.security.security_update.security_update_good.security_update_warning.segment.select_all.self_improvement.sell.send.send_and_archive.send_time_extension.send_to_mobile.sensor_door.sensor_occupied.sensor_window.sensors.sensors_off.sentiment_dissatisfied.sentiment_neutral.sentiment_satisfied.sentiment_satisfied_alt.sentiment_very_dissatisfied.sentiment_very_satisfied.set_meal.settings.settings_accessibility.settings_applications.settings_backup_restore.settings_bluetooth.settings_brightness.settings_cell.settings_ethernet.settings_input_antenna.settings_input_component.settings_input_composite.settings_input_hdmi.settings_input_svideo.settings_overscan.settings_phone.settings_power.settings_remote.settings_suggest.settings_system_daydream.settings_voice.severe_cold.shape_line.share.share_location.shield.shield_moon.shop.shop_2.shop_two.shopping_bag.shopping_basket.shopping_cart.shopping_cart_checkout.short_text.shortcut.show_chart.shower.shuffle.shuffle_on.shutter_speed.sick.sign_language.signal_cellular_0_bar.signal_cellular_4_bar.signal_cellular_alt.signal_cellular_alt_1_bar.signal_cellular_alt_2_bar.signal_cellular_connected_no_internet_0_bar.signal_cellular_connected_no_internet_4_bar.signal_cellular_no_sim.signal_cellular_nodata.signal_cellular_null.signal_cellular_off.signal_wifi_0_bar.signal_wifi_4_bar.signal_wifi_4_bar_lock.signal_wifi_bad.signal_wifi_connected_no_internet_4.signal_wifi_off.signal_wifi_statusbar_4_bar.signal_wifi_statusbar_connected_no_internet_4.signal_wifi_statusbar_null.signpost.sim_card.sim_card_alert.sim_card_download.single_bed.sip.skateboarding.skip_next.skip_previous.sledding.slideshow.slow_motion_video.smart_button.smart_display.smart_screen.smart_toy.smartphone.smoke_free.smoking_rooms.sms.sms_failed.snippet_folder.snooze.snowboarding.snowmobile.snowshoeing.soap.social_distance.solar_power.sort.sort_by_alpha.sos.soup_kitchen.source.south.south_america.south_east.south_west.spa.space_bar.space_dashboard.spatial_audio.spatial_audio_off.spatial_tracking.speaker.speaker_group.speaker_notes.speaker_notes_off.speaker_phone.speed.spellcheck.splitscreen.spoke.sports.sports_bar.sports_baseball.sports_basketball.sports_cricket.sports_esports.sports_football.sports_golf.sports_gymnastics.sports_handball.sports_hockey.sports_kabaddi.sports_martial_arts.sports_mma.sports_motorsports.sports_rugby.sports_score.sports_soccer.sports_tennis.sports_volleyball.square.square_foot.ssid_chart.stacked_bar_chart.stacked_line_chart.stadium.stairs.star.star_border.star_border_purple500.star_half.star_outline.star_purple500.star_rate.stars.start.stay_current_landscape.stay_current_portrait.stay_primary_landscape.stay_primary_portrait.sticky_note_2.stop.stop_circle.stop_screen_share.storage.store.store_mall_directory.storefront.storm.straight.straighten.stream.streetview.strikethrough_s.stroller.style.subdirectory_arrow_left.subdirectory_arrow_right.subject.subscript.subscriptions.subtitles.subtitles_off.subway.summarize.superscript.supervised_user_circle.supervisor_account.support.support_agent.surfing.surround_sound.swap_calls.swap_horiz.swap_horizontal_circle.swap_vert.swap_vertical_circle.swipe.swipe_down.swipe_down_alt.swipe_left.swipe_left_alt.swipe_right.swipe_right_alt.swipe_up.swipe_up_alt.swipe_vertical.switch_access_shortcut.switch_access_shortcut_add.switch_account.switch_camera.switch_left.switch_right.switch_video.synagogue.sync.sync_alt.sync_disabled.sync_lock.sync_problem.system_security_update.system_security_update_good.system_security_update_warning.system_update.system_update_alt.tab.tab_unselected.table_bar.table_chart.table_restaurant.table_rows.table_view.tablet.tablet_android.tablet_mac.tag.tag_faces.takeout_dining.tap_and_play.tapas.task.task_alt.taxi_alert.temple_buddhist.temple_hindu.terminal.terrain.text_decrease.text_fields.text_format.text_increase.text_rotate_up.text_rotate_vertical.text_rotation_angledown.text_rotation_angleup.text_rotation_down.text_rotation_none.text_snippet.textsms.texture.theater_comedy.theaters.thermostat.thermostat_auto.thumb_down.thumb_down_alt.thumb_down_off_alt.thumb_up.thumb_up_alt.thumb_up_off_alt.thumbs_up_down.thunderstorm.time_to_leave.timelapse.timeline.timer.timer_10.timer_10_select.timer_3.timer_3_select.timer_off.tips_and_updates.tire_repair.title.toc.today.toggle_off.toggle_on.token.toll.tonality.topic.tornado.touch_app.tour.toys.track_changes.traffic.train.tram.transcribe.transfer_within_a_station.transform.transgender.transit_enterexit.translate.travel_explore.trending_down.trending_flat.trending_up.trip_origin.troubleshoot.try.tsunami.tty.tune.tungsten.turn_left.turn_right.turn_sharp_left.turn_sharp_right.turn_slight_left.turn_slight_right.turned_in.turned_in_not.tv.tv_off.two_wheeler.type_specimen.u_turn_left.u_turn_right.umbrella.unarchive.undo.unfold_less.unfold_less_double.unfold_more.unfold_more_double.unpublished.unsubscribe.upcoming.update.update_disabled.upgrade.upload.upload_file.usb.usb_off.vaccines.vape_free.vaping_rooms.verified.verified_user.vertical_align_bottom.vertical_align_center.vertical_align_top.vertical_distribute.vertical_shades.vertical_shades_closed.vertical_split.vibration.video_call.video_camera_back.video_camera_front.video_chat.video_file.video_label.video_library.video_settings.video_stable.videocam.videocam_off.videogame_asset.videogame_asset_off.view_agenda.view_array.view_carousel.view_column.view_comfy.view_comfy_alt.view_compact.view_compact_alt.view_cozy.view_day.view_headline.view_in_ar.view_kanban.view_list.view_module.view_quilt.view_sidebar.view_stream.view_timeline.view_week.vignette.villa.visibility.visibility_off.voice_chat.voice_over_off.voicemail.volcano.volume_down.volume_mute.volume_off.volume_up.volunteer_activism.vpn_key.vpn_key_off.vpn_lock.vrpano.wallet.wallpaper.warehouse.warning.warning_amber.wash.watch.watch_later.watch_off.water.water_damage.water_drop.waterfall_chart.waves.waving_hand.wb_auto.wb_cloudy.wb_incandescent.wb_iridescent.wb_shade.wb_sunny.wb_twilight.wc.web.web_asset.web_asset_off.web_stories.webhook.weekend.west.whatshot.wheelchair_pickup.where_to_vote.widgets.width_full.width_normal.width_wide.wifi.wifi_1_bar.wifi_2_bar.wifi_calling.wifi_calling_3.wifi_channel.wifi_find.wifi_lock.wifi_off.wifi_password.wifi_protected_setup.wifi_tethering.wifi_tethering_error.wifi_tethering_off.wind_power.window.wine_bar.woman.woman_2.work.work_history.work_off.work_outline.workspace_premium.workspaces.wrap_text.wrong_location.wysiwyg.yard.youtube_searched_for.zoom_in.zoom_in_map.zoom_out.zoom_out_map".split("."), {
	threshold: .3,
	minMatchCharLength: 2
});
function vc({ defaultIcons: e, selectedIcon: t, onSelect: n, autoFocus: r = !1, itemAs: i = "button" }) {
	let [a, o] = (0, D.useState)(""), s = (0, D.useMemo)(() => a ? _c.search(a).map((e) => e.item) : e, [a, e]);
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
//#endregion
//#region src/lib/context.ts
var yc = (0, D.createContext)(null), bc = () => (0, D.useContext)(yc), xc = ({ fileTypes: e, onFileSelect: t, onError: n, onClose: r }) => {
	let [i, a] = (0, D.useState)(null), { element: o } = (0, D.useContext)(_), s = bc(), c = (0, D.useRef)(null), l = o.getAttribute("data-usage-id");
	if ((0, D.useEffect)(() => {
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
	return u.searchParams.set("multiSelect", "false"), u.searchParams.set("embedded", "true"), e && u.searchParams.set("fileTypes", e.join(",")), u.searchParams.set("usageKey", l), /* @__PURE__ */ (0, M.jsx)(Vo, {
		title: "File Picker",
		size: "xl",
		isOpen: !0,
		className: "bg-light-200",
		onClose: r,
		footerNode: /* @__PURE__ */ (0, M.jsxs)(Te, { children: [
			/* @__PURE__ */ (0, M.jsx)(Te.Spacer, {}),
			/* @__PURE__ */ (0, M.jsx)(xn, {
				variant: "tertiary",
				onClick: r,
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, M.jsx)(xn, {
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
}, Sc = ({ children: e, setValue: t, fileTypes: n = null }) => {
	let [r, i] = (0, D.useState)(!1), [a, o] = (0, D.useState)(null), s = bc(), c = (0, D.useCallback)(async (e) => {
		try {
			await t(e), o(null);
		} catch (e) {
			o(e.message);
		}
		i(!1);
	}, [t]);
	return s?.file_picker_url ? /* @__PURE__ */ (0, M.jsxs)(M.Fragment, { children: [
		/* @__PURE__ */ (0, M.jsxs)(se, { children: [e, /* @__PURE__ */ (0, M.jsx)(se.Append, { children: /* @__PURE__ */ (0, M.jsx)(xn, {
			variant: "outline-secondary",
			onClick: () => i(!0),
			children: "Select File"
		}) })] }),
		a && /* @__PURE__ */ (0, M.jsx)(T.Control.Feedback, {
			type: "default",
			children: a
		}),
		r && /* @__PURE__ */ (0, M.jsx)(xc, {
			fileTypes: n,
			onFileSelect: c,
			onError: o,
			onClose: () => i(!1)
		})
	] }) : e;
}, Cc = [
	...Object.entries(ge).filter(([e]) => e !== w.CUSTOM).map(([, e]) => e),
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
], wc = ({ thumbnailIcon: e, onIconChange: t, thumbnailUrl: n, onImageChange: r }) => {
	let i = (0, D.useId)(), a = (0, D.useRef)(null), [o, s] = (0, D.useState)(!1), [c, l] = (0, D.useState)("icon"), u = (0, D.useRef)(), d = () => s(!1);
	return (0, D.useEffect)(() => () => window.clearTimeout(u.current), []), /* @__PURE__ */ (0, M.jsxs)("div", {
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
		children: [/* @__PURE__ */ (0, M.jsx)(xn, {
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
			children: /* @__PURE__ */ (0, M.jsxs)(zt, {
				id: `${i}-tabs`,
				activeKey: c,
				onSelect: (e) => l(e ?? "icon"),
				children: [/* @__PURE__ */ (0, M.jsxs)(Uo, {
					variant: "tabs",
					fill: !0,
					children: [/* @__PURE__ */ (0, M.jsx)(Uo.Item, { children: /* @__PURE__ */ (0, M.jsx)(Uo.Link, {
						eventKey: "icon",
						children: "Icon"
					}) }), /* @__PURE__ */ (0, M.jsx)(Uo.Item, { children: /* @__PURE__ */ (0, M.jsx)(Uo.Link, {
						eventKey: "image",
						children: "Image"
					}) })]
				}), /* @__PURE__ */ (0, M.jsxs)(Vt, { children: [/* @__PURE__ */ (0, M.jsx)(Gt, {
					eventKey: "icon",
					children: /* @__PURE__ */ (0, M.jsx)(vc, {
						autoFocus: !0,
						defaultIcons: Cc,
						selectedIcon: e,
						onSelect: (e) => {
							r(void 0), t(e), d(), a.current?.focus();
						}
					})
				}), /* @__PURE__ */ (0, M.jsx)(Gt, {
					eventKey: "image",
					children: /* @__PURE__ */ (0, M.jsxs)(T.Group, {
						className: "thumbnail-select-image",
						children: [/* @__PURE__ */ (0, M.jsx)(T.Label, { children: "Image URL" }), /* @__PURE__ */ (0, M.jsx)(Sc, {
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
}, Tc = (e) => {
	try {
		let t = new URL(e.trim());
		return ["http:", "https:"].includes(t.protocol) && t.host !== "";
	} catch {
		return !1;
	}
}, Ec = 59, Dc = (e) => /^\d*$/.test(e), Oc = {
	urlEmpty: "Add the resource URL.",
	urlInvalid: "Enter a full URL starting with http:// or https://.",
	titleEmpty: "Add a title.",
	publisherEmpty: "Add a publisher.",
	timeTooShort: "The estimated time must be at least 1 minute.",
	timeNotWholeNumber: "Enter the estimated time in whole hours and minutes.",
	typeEmpty: "Choose a content type."
}, kc = (e, t) => {
	let n = {};
	return e.url.trim() ? Tc(e.url) || (n.url = Oc.urlInvalid) : n.url = Oc.urlEmpty, e.title.trim() || (n.title = Oc.titleEmpty), e.publisher.trim() || (n.publisher = Oc.publisherEmpty), t ? e.expectedMinutes < 1 && (n.expectedMinutes = Oc.timeTooShort) : n.expectedMinutes = Oc.timeNotWholeNumber, e.fileType || (n.fileType = Oc.typeEmpty), n;
}, Ac = ({ initialResource: e, isNewResource: t = !1, onCancel: n, onSave: r, onDelete: i }) => {
	let [a, o] = (0, D.useState)(e), [s, c] = (0, D.useState)(!1), [l, u] = (0, D.useState)(() => {
		let t = Math.floor(e.expectedMinutes / 60);
		return t ? String(t) : "";
	}), [d, f] = (0, D.useState)(() => {
		let t = e.expectedMinutes % 60;
		return t ? String(t) : "";
	}), [p, m] = (0, D.useState)({
		hours: !1,
		minutes: !1
	}), h = !p.hours && !p.minutes && Dc(l) && Dc(d), g = s ? kc(a, h) : {}, _ = a.thumbnailIcon || ge[a.fileType ?? w.CUSTOM], v = (e, t) => {
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
	return /* @__PURE__ */ (0, M.jsxs)(pe, { children: [/* @__PURE__ */ (0, M.jsx)(pe.Body, { children: /* @__PURE__ */ (0, M.jsxs)(pe.Section, { children: [
		/* @__PURE__ */ (0, M.jsxs)("div", {
			className: "d-flex w-100 justify-content-between",
			children: [/* @__PURE__ */ (0, M.jsx)("span", {
				className: "h4 text-primary-500",
				children: t ? "Add resource" : "Edit resource"
			}), !t && /* @__PURE__ */ (0, M.jsx)(ye, {
				variant: "primary",
				src: Cn,
				alt: "Delete",
				onClick: i
			})]
		}),
		/* @__PURE__ */ (0, M.jsx)("hr", {}),
		/* @__PURE__ */ (0, M.jsxs)(T.Group, {
			isInvalid: !!g.url,
			children: [
				/* @__PURE__ */ (0, M.jsx)(T.Label, { children: /* @__PURE__ */ (0, M.jsxs)(_e, { children: [/* @__PURE__ */ (0, M.jsx)("span", {
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
				/* @__PURE__ */ (0, M.jsxs)(_e, {
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
							max: Ec,
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
		/* @__PURE__ */ (0, M.jsxs)(_e, {
			gap: 3,
			direction: "horizontal",
			children: [/* @__PURE__ */ (0, M.jsx)(fe, {
				variant: a.thumbnailUrl ? "image" : "icon",
				item: a.thumbnailUrl || _,
				itemAlt: a.thumbnailAltText
			}), /* @__PURE__ */ (0, M.jsx)(wc, {
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
	] }) }), /* @__PURE__ */ (0, M.jsx)(pe.Footer, { children: /* @__PURE__ */ (0, M.jsxs)(Te, {
		className: "border-top pt-3",
		children: [
			/* @__PURE__ */ (0, M.jsx)(xn, {
				variant: "primary",
				onClick: () => {
					let { fileType: e } = a;
					if (Object.keys(kc(a, h)).length > 0 || !e) {
						c(!0);
						return;
					}
					r({
						...a,
						fileType: e
					});
				},
				children: "Save"
			}),
			/* @__PURE__ */ (0, M.jsx)(xn, {
				variant: "tertiary",
				onClick: () => n(),
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, M.jsx)(Te.Spacer, {})
		]
	}) })] });
}, jc = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`, Mc = () => ({
	id: jc(),
	url: "",
	title: "",
	publisher: "",
	expectedMinutes: 0
}), Nc = ({ onDelete: e, onEdit: t, disableEdit: n, dragHandleRef: r }) => /* @__PURE__ */ (0, M.jsxs)(Te, { children: [
	/* @__PURE__ */ (0, M.jsx)(ye, {
		src: Tn,
		alt: "Edit",
		onClick: t,
		disabled: n
	}),
	/* @__PURE__ */ (0, M.jsx)(ye, {
		src: Cn,
		alt: "Delete",
		onClick: e
	}),
	r && /* @__PURE__ */ (0, M.jsx)(ye, {
		ref: r,
		src: wn,
		alt: "Drag to reorder"
	})
] }), Pc = ({ resource: e, onConfirm: t, onClose: n }) => /* @__PURE__ */ (0, M.jsx)(Ho, {
	title: "Delete resource?",
	isOpen: e !== void 0,
	onClose: n,
	footerNode: /* @__PURE__ */ (0, M.jsxs)(Te, { children: [/* @__PURE__ */ (0, M.jsx)(xn, {
		variant: "tertiary",
		onClick: n,
		children: "Cancel"
	}), /* @__PURE__ */ (0, M.jsx)(xn, {
		variant: "primary",
		onClick: () => e && t(e),
		children: "Delete resource"
	})] }),
	children: /* @__PURE__ */ (0, M.jsxs)("p", { children: [
		"“",
		e?.title,
		"” will be permanently deleted. This action cannot be undone."
	] })
}), Fc = Symbol.for("preact-signals");
function Ic() {
	if (zc > 1) zc--;
	else {
		var e, t = !1;
		for ((function() {
			var e = Uc;
			for (Uc = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
		})(); Rc !== void 0;) {
			var n = Rc;
			for (Rc = void 0, Bc++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && Jc(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (Bc = 0, zc--, t) throw e;
	}
}
function P(e) {
	if (zc > 0) return e();
	Hc = ++Vc, zc++;
	try {
		return e();
	} finally {
		Ic();
	}
}
var F = void 0;
function I(e) {
	var t = F;
	F = void 0;
	try {
		return e();
	} finally {
		F = t;
	}
}
var Lc, Rc = void 0, zc = 0, Bc = 0, Vc = 0, Hc = 0, Uc = void 0, Wc = 0;
function Gc(e) {
	if (F !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== F) return t = {
			i: 0,
			S: e,
			p: F.s,
			n: void 0,
			t: F,
			e: void 0,
			x: void 0,
			r: t
		}, F.s !== void 0 && (F.s.n = t), F.s = t, e.n = t, 32 & F.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = F.s, t.n = void 0, F.s.n = t, F.s = t), t;
	}
}
function Kc(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Kc.prototype.brand = Fc, Kc.prototype.h = function() {
	return !0;
}, Kc.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? I(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, Kc.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && I(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, Kc.prototype.subscribe = function(e) {
	var t = this;
	return rl(function() {
		var n = t.value, r = F;
		F = void 0;
		try {
			e(n);
		} finally {
			F = r;
		}
	}, { name: "sub" });
}, Kc.prototype.valueOf = function() {
	return this.value;
}, Kc.prototype.toString = function() {
	return this.value + "";
}, Kc.prototype.toJSON = function() {
	return this.value;
}, Kc.prototype.peek = function() {
	var e = F;
	F = void 0;
	try {
		return this.value;
	} finally {
		F = e;
	}
}, Object.defineProperty(Kc.prototype, "value", {
	get: function() {
		var e = Gc(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (Bc > 100) throw Error("Cycle detected");
			(function(e) {
				zc !== 0 && Bc === 0 && e.l !== Hc && (e.l = Hc, Uc = {
					S: e,
					v: e.v,
					i: e.i,
					o: Uc
				});
			})(this), this.v = e, this.i++, Wc++, zc++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				Ic();
			}
		}
	}
});
function qc(e, t) {
	return new Kc(e, t);
}
function Jc(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function Yc(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function Xc(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function Zc(e, t) {
	Kc.call(this, void 0), this.x = e, this.s = void 0, this.g = Wc - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Zc.prototype = new Kc(), Zc.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === Wc)) return !0;
	if (this.g = Wc, this.f |= 1, this.i > 0 && !Jc(this)) return this.f &= -2, !0;
	var e = F;
	try {
		Yc(this), F = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return F = e, Xc(this), this.f &= -2, !0;
}, Zc.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	Kc.prototype.S.call(this, e);
}, Zc.prototype.U = function(e) {
	if (this.t !== void 0 && (Kc.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, Zc.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(Zc.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = Gc(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function Qc(e, t) {
	return new Zc(e, t);
}
function $c(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		zc++;
		var n = F;
		F = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, el(e), t;
		} finally {
			F = n, Ic();
		}
	}
}
function el(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, $c(e);
}
function tl(e) {
	if (F !== this) throw Error("Out-of-order effect");
	Xc(this), F = e, this.f &= -2, 8 & this.f && el(this), Ic();
}
function nl(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, Lc && Lc.push(this);
}
nl.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, nl.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, $c(this), Yc(this), zc++;
	var e = F;
	return F = this, tl.bind(this, e);
}, nl.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = Rc, Rc = this);
}, nl.prototype.d = function() {
	this.f |= 8, 1 & this.f || el(this);
}, nl.prototype.dispose = function() {
	this.d();
};
function rl(e, t) {
	var n = new nl(e, t);
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
var il = Object.create, al = Object.defineProperty, ol = Object.defineProperties, sl = Object.getOwnPropertyDescriptor, cl = Object.getOwnPropertyDescriptors, ll = Object.getOwnPropertySymbols, ul = Object.prototype.hasOwnProperty, dl = Object.prototype.propertyIsEnumerable, fl = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), pl = (e) => {
	throw TypeError(e);
}, ml = (e, t, n) => t in e ? al(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, hl = (e, t) => {
	for (var n in t ||= {}) ul.call(t, n) && ml(e, n, t[n]);
	if (ll) for (var n of ll(t)) dl.call(t, n) && ml(e, n, t[n]);
	return e;
}, gl = (e, t) => ol(e, cl(t)), _l = (e, t) => al(e, "name", {
	value: t,
	configurable: !0
}), vl = (e) => [
	,
	,
	,
	il(e?.[fl("metadata")] ?? null)
], yl = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], bl = (e) => e !== void 0 && typeof e != "function" ? pl("Function expected") : e, xl = (e, t, n, r, i) => ({
	kind: yl[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? pl("Already initialized") : i.push(bl(e || null))
}), Sl = (e, t) => ml(t, fl("metadata"), e[3]), Cl = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, wl = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = yl[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && sl(d < 4 ? i : {
		get [n]() {
			return Dl(this, a);
		},
		set [n](e) {
			return kl(this, a, e);
		}
	}, n));
	d ? p && d < 4 && _l(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : _l(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = xl(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => El(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Dl : Al)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => kl(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? bl(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? pl("Object expected") : (bl(o = s.get) && (v.get = o), bl(o = s.set) && (v.set = o), bl(o = s.init) && g.unshift(o));
	return d || Sl(e, i), v && al(i, n, v), p ? d ^ 4 ? a : v : i;
}, Tl = (e, t, n) => t.has(e) || pl("Cannot " + n), El = (e, t) => Object(t) === t ? e.has(t) : pl("Cannot use the \"in\" operator on this value"), Dl = (e, t, n) => (Tl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ol = (e, t, n) => t.has(e) ? pl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), kl = (e, t, n, r) => (Tl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Al = (e, t, n) => (Tl(e, t, "access private method"), n);
function jl(e, t) {
	if (t) {
		let n;
		return Qc(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return Qc(e);
}
function Ml(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !Ml(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length ? !n.some((n) => !Ml(e[n], t[n])) : !1;
	}
	return !1;
}
function L({ get: e }, t) {
	return {
		init(e) {
			return qc(e);
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
function R(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = jl(e.bind(this)), n.set(this, t)), t.value;
	};
}
function Nl(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, gl(hl({}, r), { enumerable: e }));
		});
	};
}
function Pl(...e) {
	let t = e.map((e) => rl(e));
	return () => t.forEach((e) => e());
}
var Fl, Il, Ll, Rl, zl, Bl = [L], Vl, Hl, Ul, Wl, Gl, z, Kl, ql, Jl, Yl, Xl, Zl, Ql, $l;
zl = [L], Rl = [L], Ll = [Nl()], Il = [Nl()], Fl = [Nl()];
var eu = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, Cl(Vl, 5, this), Ol(this, z), Ol(this, Hl, Cl(Vl, 8, this)), Cl(Vl, 11, this), Ol(this, Kl, Cl(Vl, 12, this)), Cl(Vl, 15, this), Ol(this, Xl, Cl(Vl, 16, this)), Cl(Vl, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return Dl(this, z, Ql);
	}
	get initial() {
		return Dl(this, z, Wl);
	}
	get previous() {
		return Dl(this, z, Jl);
	}
	set current(e) {
		let t = I(() => Dl(this, z, Ql));
		e && t && this.equals(t, e) || P(() => {
			Dl(this, z, Wl) || kl(this, z, e, Gl), kl(this, z, t, Yl), kl(this, z, e, $l);
		});
	}
	reset(e = this.defaultValue) {
		P(() => {
			kl(this, z, void 0, Yl), kl(this, z, e, Gl), kl(this, z, e, $l);
		});
	}
};
Vl = vl(null), Hl = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakSet(), Kl = /* @__PURE__ */ new WeakMap(), Xl = /* @__PURE__ */ new WeakMap(), Ul = wl(Vl, 20, "#initial", Bl, z, Hl), Wl = Ul.get, Gl = Ul.set, ql = wl(Vl, 20, "#previous", zl, z, Kl), Jl = ql.get, Yl = ql.set, Zl = wl(Vl, 20, "#current", Rl, z, Xl), Ql = Zl.get, $l = Zl.set, wl(Vl, 2, "current", Ll, eu), wl(Vl, 2, "initial", Il, eu), wl(Vl, 2, "previous", Fl, eu), Sl(Vl, eu);
function tu(e) {
	return I(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var nu, ru = class {
	constructor() {
		Ol(this, nu, /* @__PURE__ */ new WeakMap());
	}
	get(e, t) {
		return e ? Dl(this, nu).get(e)?.get(t) : void 0;
	}
	set(e, t, n) {
		if (e) return Dl(this, nu).has(e) || Dl(this, nu).set(e, /* @__PURE__ */ new Map()), Dl(this, nu).get(e)?.set(t, n);
	}
	clear(e) {
		return e ? Dl(this, nu).get(e)?.clear() : void 0;
	}
};
nu = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/@dnd-kit+geometry@0.3.2/node_modules/@dnd-kit/geometry/dist/index.mjs
var iu = Object.create, au = Object.defineProperty, ou = Object.getOwnPropertyDescriptor, su = Object.getOwnPropertySymbols, cu = Object.prototype.hasOwnProperty, lu = Object.prototype.propertyIsEnumerable, uu = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), du = (e) => {
	throw TypeError(e);
}, fu = Math.pow, pu = (e, t, n) => t in e ? au(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, mu = (e, t) => {
	for (var n in t ||= {}) cu.call(t, n) && pu(e, n, t[n]);
	if (su) for (var n of su(t)) lu.call(t, n) && pu(e, n, t[n]);
	return e;
}, hu = (e, t) => au(e, "name", {
	value: t,
	configurable: !0
}), gu = (e) => [
	,
	,
	,
	iu(e?.[uu("metadata")] ?? null)
], _u = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], vu = (e) => e !== void 0 && typeof e != "function" ? du("Function expected") : e, yu = (e, t, n, r, i) => ({
	kind: _u[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? du("Already initialized") : i.push(vu(e || null))
}), bu = (e, t) => pu(t, uu("metadata"), e[3]), xu = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Su = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = _u[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && ou(d < 4 ? i : {
		get [n]() {
			return Tu(this, a);
		},
		set [n](e) {
			return Du(this, a, e);
		}
	}, n));
	d ? p && d < 4 && hu(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : hu(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = yu(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => wu(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Tu : Ou)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Du(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? vu(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? du("Object expected") : (vu(o = s.get) && (v.get = o), vu(o = s.set) && (v.set = o), vu(o = s.init) && g.unshift(o));
	return d || bu(e, i), v && au(i, n, v), p ? d ^ 4 ? a : v : i;
}, Cu = (e, t, n) => t.has(e) || du("Cannot " + n), wu = (e, t) => Object(t) === t ? e.has(t) : du("Cannot use the \"in\" operator on this value"), Tu = (e, t, n) => (Cu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Eu = (e, t, n) => t.has(e) ? du("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Du = (e, t, n, r) => (Cu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ou = (e, t, n) => (Cu(e, t, "access private method"), n), ku = class e {
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
}, Au = class e {
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
		return c.scale = mu({}, s), c;
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
		return new ku((e + n) / 2, (t + r) / 2);
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
		return t instanceof e ? ju(this, t) : 0;
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
		return ku.delta({
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
function ju(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var Mu, Nu, Pu, Fu, Iu, Lu = class extends (Pu = eu, Nu = [R], Mu = [R], Pu) {
	constructor(e) {
		let t = ku.from(e);
		super(t, (e, t) => ku.equals(e, t)), xu(Iu, 5, this), Eu(this, Fu, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return ku.delta(this.current, this.initial);
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
		let { current: t } = this, n = ku.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - Tu(this, Fu), o = (e) => Math.round(e / a * 100);
		P(() => {
			Du(this, Fu, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(ku.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
Iu = gu(Pu), Fu = /* @__PURE__ */ new WeakMap(), Su(Iu, 2, "delta", Nu, Lu), Su(Iu, 2, "direction", Mu, Lu), bu(Iu, Lu);
function Ru({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(fu(r, 2) + fu(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n ? i > n.y : !1;
}
var zu = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(zu || {}), Bu = Object.values(zu), Vu = Object.create, Hu = Object.defineProperty, Uu = Object.defineProperties, Wu = Object.getOwnPropertyDescriptor, Gu = Object.getOwnPropertyDescriptors, Ku = Object.getOwnPropertySymbols, qu = Object.prototype.hasOwnProperty, Ju = Object.prototype.propertyIsEnumerable, Yu = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Xu = (e) => {
	throw TypeError(e);
}, Zu = (e, t, n) => t in e ? Hu(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Qu = (e, t) => {
	for (var n in t ||= {}) qu.call(t, n) && Zu(e, n, t[n]);
	if (Ku) for (var n of Ku(t)) Ju.call(t, n) && Zu(e, n, t[n]);
	return e;
}, $u = (e, t) => Uu(e, Gu(t)), ed = (e, t) => Hu(e, "name", {
	value: t,
	configurable: !0
}), td = (e, t) => {
	var n = {};
	for (var r in e) qu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && Ku) for (var r of Ku(e)) t.indexOf(r) < 0 && Ju.call(e, r) && (n[r] = e[r]);
	return n;
}, nd = (e) => [
	,
	,
	,
	Vu(e?.[Yu("metadata")] ?? null)
], rd = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], id = (e) => e !== void 0 && typeof e != "function" ? Xu("Function expected") : e, ad = (e, t, n, r, i) => ({
	kind: rd[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Xu("Already initialized") : i.push(id(e || null))
}), od = (e, t) => Zu(t, Yu("metadata"), e[3]), B = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, V = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = rd[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && Wu(d < 4 ? i : {
		get [n]() {
			return H(this, a);
		},
		set [n](e) {
			return ld(this, a, e);
		}
	}, n));
	d ? p && d < 4 && ed(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : ed(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = ad(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => cd(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? H : ud)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => ld(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? id(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? Xu("Object expected") : (id(o = s.get) && (v.get = o), id(o = s.set) && (v.set = o), id(o = s.init) && g.unshift(o));
	return d || od(e, i), v && Hu(i, n, v), p ? d ^ 4 ? a : v : i;
}, sd = (e, t, n) => t.has(e) || Xu("Cannot " + n), cd = (e, t) => Object(t) === t ? e.has(t) : Xu("Cannot use the \"in\" operator on this value"), H = (e, t, n) => (sd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), U = (e, t, n) => t.has(e) ? Xu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ld = (e, t, n, r) => (sd(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ud = (e, t, n) => (sd(e, t, "access private method"), n);
function dd(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function fd(e) {
	return (t) => dd(e, t);
}
function pd(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var md = [L], hd, gd, _d, W = class {
	constructor(e, t) {
		this.manager = e, this.options = t, U(this, gd, B(hd, 8, this, !1)), B(hd, 11, this), U(this, _d, /* @__PURE__ */ new Set());
	}
	enable() {
		this.disabled = !1;
	}
	disable() {
		this.disabled = !0;
	}
	isDisabled() {
		return I(() => this.disabled);
	}
	configure(e) {
		this.options = e;
	}
	registerEffect(e) {
		let t = rl(e.bind(this));
		return H(this, _d).add(t), t;
	}
	destroy() {
		H(this, _d).forEach((e) => e());
	}
	static configure(e) {
		return dd(this, e);
	}
};
hd = nd(null), gd = /* @__PURE__ */ new WeakMap(), _d = /* @__PURE__ */ new WeakMap(), V(hd, 4, "disabled", md, W, gd), od(hd, W);
var vd = class extends W {}, yd, bd = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), U(this, yd, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(pd).reduceRight((e, t) => e.some(({ plugin: e }) => e === t.plugin) ? e : [t, ...e], []), n = t.map(({ plugin: e }) => e);
		for (let e of H(this, yd)) if (!n.includes(e)) {
			if (e.prototype instanceof vd) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		ld(this, yd, n);
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
yd = /* @__PURE__ */ new WeakMap();
function xd(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var Sd = [], Cd, wd, Td = class extends W {
	constructor(e) {
		super(e), U(this, Cd), U(this, wd), this.computeCollisions = this.computeCollisions.bind(this), ld(this, wd, qc(Sd)), this.destroy = Pl(() => {
			let e = this.computeCollisions(), t = I(() => this.manager.dragOperation.position.current);
			if (e !== Sd) {
				let e = H(this, Cd);
				if (ld(this, Cd, t), e && t.x == e.x && t.y == e.y) return;
			} else ld(this, Cd, void 0);
			H(this, wd).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		I(() => {
			e ? H(this, wd).value = this.computeCollisions() : ld(this, Cd, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return Sd;
		let s = [], c = [];
		for (let a of e ?? n.droppables) {
			if (a.disabled || i && !a.accepts(i)) continue;
			let e = t ?? a.collisionDetector;
			if (!e) continue;
			c.push(a), a.shape;
			let n = I(() => e({
				droppable: a,
				dragOperation: r
			}));
			n && (a.collisionPriority != null && (n.priority = a.collisionPriority), s.push(n));
		}
		return c.length === 0 ? Sd : (s.sort(xd), s);
	}
	get collisions() {
		return H(this, wd).value;
	}
};
Cd = /* @__PURE__ */ new WeakMap(), wd = /* @__PURE__ */ new WeakMap();
var Ed = class {
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
}, Dd = class extends Ed {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function Od(e, t = !0) {
	let n = !1;
	return $u(Qu({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var kd = class extends vd {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = Pl(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled()) return;
			let o = Od({ collisions: a });
			if (i.dispatch("collision", o), o.defaultPrevented || t(a, n)) return;
			n = a;
			let [s] = a;
			I(() => {
				s?.id !== e.dragOperation.target?.id && (r.disable(), e.actions.setDropTarget(s?.id).then(() => {
					r.enable();
				}));
			});
		});
	}
}, Ad = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Ad || {}), jd = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(jd || {}), Md, Nd, Pd, Fd, Id, Ld, Rd = [L], zd, Bd;
Ld = [R], Id = [R], Fd = [R], Pd = [R], Nd = [R], Md = [R];
var Vd = class {
	constructor() {
		B(zd, 5, this), U(this, Bd, B(zd, 8, this, "idle")), B(zd, 11, this);
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
zd = nd(null), Bd = /* @__PURE__ */ new WeakMap(), V(zd, 4, "value", Rd, Vd, Bd), V(zd, 2, "current", Ld, Vd), V(zd, 2, "idle", Id, Vd), V(zd, 2, "initializing", Fd, Vd), V(zd, 2, "initialized", Pd, Vd), V(zd, 2, "dragging", Nd, Vd), V(zd, 2, "dropped", Md, Vd), od(zd, Vd);
var Hd = class {
	constructor(e) {
		this.manager = e;
	}
	setDragSource(e) {
		let { dragOperation: t } = this.manager;
		t.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
	}
	setDropTarget(e) {
		return I(() => {
			let { dragOperation: t } = this.manager, n = e ?? null;
			if (t.targetIdentifier === n) return Promise.resolve(!1);
			t.targetIdentifier = n;
			let r = Od({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return I(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			P(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = Od({ operation: t.snapshot() });
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
		return I(() => {
			let { dragOperation: t } = this.manager, { status: n, controller: r } = t;
			if (!n.dragging || !r || r.signal.aborted) return;
			let i = Od({
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
		return I(() => {
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
					let e = I(() => t.source?.status === "dropping"), r = () => {
						t.controller === n && (t.controller = void 0), t.reset();
					};
					if (e) {
						let { source: e } = t, n = rl(() => {
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
}, Ud, Wd, Gd, Kd = [L], qd, Jd, Yd, Xd, Zd;
Gd = [L], Wd = [L], Ud = [L];
var Qd = class {
	constructor(e, t) {
		U(this, Jd, B(qd, 8, this)), B(qd, 11, this), U(this, Yd, B(qd, 12, this)), B(qd, 15, this), U(this, Xd, B(qd, 16, this)), B(qd, 19, this), U(this, Zd, B(qd, 20, this)), B(qd, 23, this);
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
qd = nd(null), Jd = /* @__PURE__ */ new WeakMap(), Yd = /* @__PURE__ */ new WeakMap(), Xd = /* @__PURE__ */ new WeakMap(), Zd = /* @__PURE__ */ new WeakMap(), V(qd, 4, "manager", Kd, Qd, Jd), V(qd, 4, "id", Gd, Qd, Yd), V(qd, 4, "data", Wd, Qd, Xd), V(qd, 4, "disabled", Ud, Qd, Zd), od(qd, Qd);
var $d = class {
	constructor() {
		this.map = qc(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			a.set(e, t), this.map.value = a;
			let o = Pl(...t.effects());
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
}, ef, tf, nf, rf, af, of, sf, cf, lf, uf, df, ff = class extends (sf = Qd, of = [L], af = [L], rf = [L], nf = [R], tf = [R], ef = [R], sf) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a } = n, o = td(n, [
			"modifiers",
			"type",
			"sensors"
		]);
		super(o, t), B(cf, 5, this), U(this, lf, B(cf, 8, this)), B(cf, 11, this), U(this, uf, B(cf, 12, this)), B(cf, 15, this), U(this, df, B(cf, 16, this, this.isDragSource ? "dragging" : "idle")), B(cf, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = o.alignment;
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
cf = nd(sf), lf = /* @__PURE__ */ new WeakMap(), uf = /* @__PURE__ */ new WeakMap(), df = /* @__PURE__ */ new WeakMap(), V(cf, 4, "type", of, ff, lf), V(cf, 4, "modifiers", af, ff, uf), V(cf, 4, "status", rf, ff, df), V(cf, 2, "isDropping", nf, ff), V(cf, 2, "isDragging", tf, ff), V(cf, 2, "isDragSource", ef, ff), od(cf, ff);
var pf, mf, hf, gf, _f, vf, yf, G, bf, xf, Sf, Cf, wf, Tf = class extends (yf = Qd, vf = [L], _f = [L], gf = [L], hf = [L], mf = [L], pf = [R], yf) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = td(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), B(G, 5, this), U(this, bf, B(G, 8, this)), B(G, 11, this), U(this, xf, B(G, 12, this)), B(G, 15, this), U(this, Sf, B(G, 16, this)), B(G, 19, this), U(this, Cf, B(G, 20, this)), B(G, 23, this), U(this, wf, B(G, 24, this)), B(G, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
G = nd(yf), bf = /* @__PURE__ */ new WeakMap(), xf = /* @__PURE__ */ new WeakMap(), Sf = /* @__PURE__ */ new WeakMap(), Cf = /* @__PURE__ */ new WeakMap(), wf = /* @__PURE__ */ new WeakMap(), V(G, 4, "accept", vf, Tf, bf), V(G, 4, "type", _f, Tf, xf), V(G, 4, "collisionDetector", gf, Tf, Sf), V(G, 4, "collisionPriority", hf, Tf, Cf), V(G, 4, "shape", mf, Tf, wf), V(G, 2, "isDropTarget", pf, Tf), od(G, Tf);
var Ef = class extends W {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, Df = class extends AbortController {
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
}, Of, kf = class {
	constructor(e) {
		this.options = e, U(this, Of);
	}
	set controller(e) {
		ld(this, Of, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = H(this, Of)) == null || t.activate(e);
	}
};
Of = /* @__PURE__ */ new WeakMap();
var Af = class extends W {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, jf = class {
	constructor(e) {
		this.draggables = new $d(), this.droppables = new $d(), this.plugins = new bd(e), this.sensors = new bd(e), this.modifiers = new bd(e);
	}
	register(e, t) {
		if (e instanceof ff) return this.draggables.register(e.id, e);
		if (e instanceof Tf) return this.droppables.register(e.id, e);
		if (e.prototype instanceof Af) return this.modifiers.register(e, t);
		if (e.prototype instanceof Ef) return this.sensors.register(e, t);
		if (e.prototype instanceof W) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof Qd) return e instanceof ff ? this.draggables.unregister(e.id, e) : e instanceof Tf ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof Af) return this.modifiers.unregister(e);
		if (e.prototype instanceof Ef) return this.sensors.unregister(e);
		if (e.prototype instanceof W) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, Mf, Nf, Pf, Ff, If, Lf, Rf, zf, Bf = [R], Vf, Hf, Uf, K, Wf, Gf, Kf, qf, Jf, Yf;
zf = [L], Rf = [L], Lf = [L], If = [L], Ff = [L], Pf = [R], Nf = [R], Mf = [R];
var Xf = class {
	constructor(e) {
		B(K, 5, this), U(this, Vf), U(this, Hf), U(this, Uf, new eu(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new Vd(), U(this, Wf, B(K, 8, this, !1)), B(K, 11, this), U(this, Gf, B(K, 12, this, null)), B(K, 15, this), U(this, Kf, B(K, 16, this, null)), B(K, 19, this), U(this, qf, B(K, 20, this, null)), B(K, 23, this), U(this, Jf, B(K, 24, this, [])), B(K, 27, this), this.position = new Lu({
			x: 0,
			y: 0
		}), U(this, Yf, {
			x: 0,
			y: 0
		}), ld(this, Vf, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = H(this, Uf);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? H(this, Uf).current = e : H(this, Uf).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = H(this, Vf).registry.draggables.get(e);
		return t && ld(this, Hf, t), t ?? H(this, Hf) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : H(this, Vf).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply($u(Qu({}, this.snapshot()), { transform: n }));
		return ld(this, Yf, n), n;
	}
	snapshot() {
		return I(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: H(this, Yf),
			shape: this.shape ? tu(this.shape) : null,
			position: tu(this.position),
			status: tu(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		P(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, H(this, Uf).reset(), this.position.reset({
				x: 0,
				y: 0
			}), ld(this, Yf, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
K = nd(null), Vf = /* @__PURE__ */ new WeakMap(), Hf = /* @__PURE__ */ new WeakMap(), Uf = /* @__PURE__ */ new WeakMap(), Wf = /* @__PURE__ */ new WeakMap(), Gf = /* @__PURE__ */ new WeakMap(), Kf = /* @__PURE__ */ new WeakMap(), qf = /* @__PURE__ */ new WeakMap(), Jf = /* @__PURE__ */ new WeakMap(), Yf = /* @__PURE__ */ new WeakMap(), V(K, 2, "shape", Bf, Xf), V(K, 4, "canceled", zf, Xf, Wf), V(K, 4, "activatorEvent", Rf, Xf, Gf), V(K, 4, "sourceIdentifier", Lf, Xf, Kf), V(K, 4, "targetIdentifier", If, Xf, qf), V(K, 4, "modifiers", Ff, Xf, Jf), V(K, 2, "source", Pf, Xf), V(K, 2, "target", Nf, Xf), V(K, 2, "transform", Mf, Xf), od(K, Xf);
var Zf = { get rendering() {
	return Promise.resolve();
} };
function Qf(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var $f = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = Qf(t.plugins, []), r = Qf(t.sensors, []), i = Qf(t.modifiers, []), a = t.renderer ?? Zf, o = new Dd(this);
		this.registry = new jf(this), this.monitor = o, this.renderer = a, this.actions = new Hd(this), this.dragOperation = new Xf(this), this.collisionObserver = new Td(this), this.plugins = [kd, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: s } = this, c = Pl(() => {
			let e = I(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = pd(e);
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
}, ep = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / ku.distance(t.shape.center, n),
		type: jd.PointerIntersection,
		priority: Ad.High
	} : null;
}, tp = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = ku.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: jd.ShapeIntersection,
			priority: Ad.Normal
		};
	}
	return null;
}, np = (e) => ep(e) ?? tp(e), rp = (e) => {
	let { dragOperation: t, droppable: n } = e, { shape: r, position: i } = t;
	if (!n.shape) return null;
	let a = r ? Au.from(r.current.boundingRectangle).corners : void 0, o = Au.from(n.shape.boundingRectangle).corners.reduce((e, t, n) => e + ku.distance(ku.from(t), a?.[n] ?? i.current), 0) / 4;
	return {
		id: n.id,
		value: 1 / o,
		type: jd.Collision,
		priority: Ad.Normal
	};
}, ip = (e) => {
	throw TypeError(e);
}, ap = (e, t, n) => t.has(e) || ip("Cannot " + n), q = (e, t, n) => (ap(e, t, "read from private field"), t.get(e)), op = (e, t, n) => t.has(e) ? ip("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), sp = (e, t, n, r) => (ap(e, t, "write to private field"), t.set(e, n), n), cp = (e, t, n) => (ap(e, t, "access private method"), n);
function lp(e) {
	return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function up(e, t) {
	let n = e.getAnimations();
	if (n.length > 0) for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, r = (lp(n) ? n.getKeyframes() : []).filter(t);
		if (r.length > 0) return [r[r.length - 1], e];
	}
	return null;
}
function dp(e) {
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
function fp(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function pp(e) {
	return "nodeType" in e;
}
function mp(e) {
	return e ? fp(e) ? e : pp(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function hp(e) {
	let { Document: t } = mp(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function gp(e) {
	return !e || fp(e) ? !1 : e instanceof mp(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function _p(e) {
	return e instanceof mp(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function vp(e) {
	return e ? fp(e) ? e.document : pp(e) ? hp(e) ? e : gp(e) || _p(e) ? e.ownerDocument : document : document : document;
}
function yp(e) {
	let { documentElement: t } = vp(e), n = mp(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function bp(e, t) {
	if (xp(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function xp(e) {
	return e.tagName === "DETAILS";
}
function Sp(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!bp(o)) {
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
function Cp(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var wp = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Tp(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...Tp(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...Tp(i.document, t));
		}
	} catch {}
	return n;
}
function Ep() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Dp() {
	let e = Ep() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function Op(e) {
	return !e || !pp(e) ? !1 : e instanceof mp(e).ShadowRoot;
}
function kp(e) {
	if (e && pp(e)) {
		let t = e.getRootNode();
		if (Op(t) || t instanceof Document) return t;
	}
	return vp(e);
}
function Ap(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function jp(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		Mp(e) && Mp(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), Np(e) && Np(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function Mp(e) {
	return "value" in e;
}
function Np(e) {
	return e.tagName === "CANVAS";
}
function Pp(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (Fp(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return Pp(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function Fp(e) {
	return e?.tagName === "IFRAME";
}
var Ip = /* @__PURE__ */ new WeakMap();
function Lp(e) {
	return !!e.closest("\n      input:not([disabled]),\n      select:not([disabled]),\n      textarea:not([disabled]),\n      button:not([disabled]),\n      a[href],\n      [contenteditable]:not([contenteditable=\"false\"])\n    ");
}
var Rp = class {
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
function zp(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function Bp(e) {
	let t = /* @__PURE__ */ new Set(), n = zp(e);
	for (; n;) t.add(n), n = zp(n);
	return t;
}
function Vp(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function Hp(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = Vp(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function Up(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function Wp(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = Sp(e, t);
	return n > 0 && r > 0;
}
var Gp = wp ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, Kp, qp = class extends Gp {
	constructor(e) {
		super((t) => {
			if (!q(this, Kp)) {
				sp(this, Kp, !0);
				return;
			}
			e(t, this);
		}), op(this, Kp, !1);
	}
};
Kp = /* @__PURE__ */ new WeakMap();
var Jp = Array.from({ length: 100 }, (e, t) => t / 100), Yp = 75, Xp, Zp, Qp, $p, em, J, tm, nm, rm, im, am, om = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, op(this, rm), this.disconnect = () => {
			var e, t, n;
			sp(this, tm, !0), (e = q(this, Qp)) == null || e.disconnect(), (t = q(this, $p)) == null || t.disconnect(), q(this, em).disconnect(), (n = q(this, J)) == null || n.remove();
		}, op(this, Xp, !0), op(this, Zp), op(this, Qp), op(this, $p), op(this, em), op(this, J), op(this, tm, !1), op(this, nm, Hp(() => {
			var e;
			let { element: t } = this;
			if ((e = q(this, $p)) == null || e.disconnect(), q(this, tm) || !q(this, Xp) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = Sp(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, sp(this, $p, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? Au.intersectionRatio(r, Sp(t)) : n.intersectionRatio) !== 1 && q(this, nm).call(this);
			}, {
				threshold: Jp,
				rootMargin: f,
				root: n
			})), q(this, $p).observe(t), cp(this, rm, im).call(this);
		}, Yp)), this.boundingClientRect = e.getBoundingClientRect(), sp(this, Xp, Wp(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (sp(this, J, document.createElement("div")), q(this, J).style.background = "rgba(0,0,0,0.15)", q(this, J).style.position = "fixed", q(this, J).style.pointerEvents = "none", i.body.appendChild(q(this, J))), sp(this, em, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = q(this, Xp);
			sp(this, Xp, a), !(!o && !s) && (c && !a ? ((n = q(this, $p)) == null || n.disconnect(), this.callback(null), (r = q(this, Qp)) == null || r.disconnect(), sp(this, Qp, void 0), q(this, J) && (q(this, J).style.visibility = "hidden")) : q(this, nm).call(this), a && !q(this, Qp) && (sp(this, Qp, new qp(q(this, nm))), q(this, Qp).observe(e)));
		}, {
			threshold: Jp,
			root: i
		})), q(this, Xp) && !n.skipInitial && this.callback(this.boundingClientRect), q(this, em).observe(e);
	}
};
Xp = /* @__PURE__ */ new WeakMap(), Zp = /* @__PURE__ */ new WeakMap(), Qp = /* @__PURE__ */ new WeakMap(), $p = /* @__PURE__ */ new WeakMap(), em = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), tm = /* @__PURE__ */ new WeakMap(), nm = /* @__PURE__ */ new WeakMap(), rm = /* @__PURE__ */ new WeakSet(), im = function() {
	q(this, tm) || (cp(this, rm, am).call(this), !Up(this.boundingClientRect, q(this, Zp)) && (this.callback(this.boundingClientRect), sp(this, Zp, this.boundingClientRect)));
}, am = function() {
	if (q(this, J)) {
		let { top: e, left: t, width: n, height: r } = Sp(this.element);
		q(this, J).style.overflow = "hidden", q(this, J).style.visibility = "visible", q(this, J).style.top = `${Math.floor(e)}px`, q(this, J).style.left = `${Math.floor(t)}px`, q(this, J).style.width = `${Math.floor(n)}px`, q(this, J).style.height = `${Math.floor(r)}px`;
	}
};
var sm = /* @__PURE__ */ new WeakMap(), cm = /* @__PURE__ */ new WeakMap();
function lm(e, t) {
	let n = sm.get(e);
	return n ||= {
		disconnect: new om(e, (t) => {
			let n = sm.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), sm.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (sm.delete(e), n.disconnect());
	};
}
function um(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = lm(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function dm(e, t) {
	let n = e.ownerDocument;
	if (!cm.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), cm.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = cm.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), cm.delete(n));
	});
}
var fm, pm, mm, hm, gm = class {
	constructor(e, t, n) {
		this.callback = t, op(this, fm), op(this, pm, !1), op(this, mm), op(this, hm, Hp((e) => {
			if (!q(this, pm) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of q(this, mm)) if (e.target.contains(t)) {
					this.callback(q(this, fm).boundingClientRect);
					break;
				}
			}
		}, Yp));
		let r = Bp(e), i = um(r, t), a = dm(e, q(this, hm));
		sp(this, mm, r), sp(this, fm, new om(e, t, n)), this.disconnect = () => {
			q(this, pm) || (sp(this, pm, !0), i(), a(), q(this, fm).disconnect());
		};
	}
};
fm = /* @__PURE__ */ new WeakMap(), pm = /* @__PURE__ */ new WeakMap(), mm = /* @__PURE__ */ new WeakMap(), hm = /* @__PURE__ */ new WeakMap();
function _m(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function vm(e) {
	try {
		_m(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function ym(e) {
	return !wp || !e ? !1 : e === vp(e).scrollingElement;
}
function bm(e) {
	let t = mp(e), n = ym(e) ? yp(e) : dp(e), r = t.visualViewport, i = ym(e) ? {
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
function xm(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = bm(e), { x: s, y: c } = t ?? {
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
var Sm = class {
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
}, Cm = new Sm((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), wm = new Sm((e) => setTimeout(e, 50)), Tm = /* @__PURE__ */ new Map(), Em = Tm.clear.bind(Tm);
function Dm(e, t = !1) {
	if (!t) return Om(e);
	let n = Tm.get(e);
	return n || (n = Om(e), Tm.set(e, n), wm.schedule(Em), n);
}
function Om(e) {
	return mp(e).getComputedStyle(e);
}
function km(e, t = Dm(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function Am(e, t = Dm(e, !0)) {
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
var jm = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function Mm(e, t = jm) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (hp(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && Op(t)) return o(t.host);
		if (!gp(t)) return _p(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = Dm(t, !0);
		if (r && t === e || Am(t, s) && a.add(t), km(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function Nm(e) {
	let [t] = Mm(e, { limit: 1 });
	return t ?? null;
}
function Pm(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = zp(e);
	for (; r;) {
		if (r === t) return n;
		let e = dp(r), { x: i, y: a } = Fm(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = zp(r);
	}
	return n;
}
function Fm(e, t = dp(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (gp(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = Dm(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function Im(e) {
	if (e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function Lm(e) {
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
function Rm(e) {
	let { scale: t, transform: n, translate: r } = e, i = Im(t), a = Lm(r), o = zm(n);
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
function zm(e) {
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
var Bm = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(Bm || {}), Vm = {
	x: .2,
	y: .2
}, Hm = {
	x: 10,
	y: 10
};
function Um(e, t, n, r = 25, i = Vm, a = Hm) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = bm(e), p = Pm(e), m = Rm(Dm(e, !0)), h = m === null ? !1 : m?.scaleX < 0, g = m === null ? !1 : m?.scaleY < 0, _ = new Au(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
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
function Wm(e) {
	return "scrollIntoViewIfNeeded" in e && typeof e.scrollIntoViewIfNeeded == "function";
}
function Gm(e, t = !1) {
	if (Wm(e)) {
		e.scrollIntoViewIfNeeded(t);
		return;
	}
	if (!gp(e)) return e.scrollIntoView();
	var n = Nm(e);
	if (!gp(n)) return;
	let r = Dm(n, !0), i = parseInt(r.getPropertyValue("border-top-width")), a = parseInt(r.getPropertyValue("border-left-width")), o = e.offsetTop - n.offsetTop < n.scrollTop, s = e.offsetTop - n.offsetTop + e.clientHeight - i > n.scrollTop + n.clientHeight, c = e.offsetLeft - n.offsetLeft < n.scrollLeft, l = e.offsetLeft - n.offsetLeft + e.clientWidth - a > n.scrollLeft + n.clientWidth, u = o && !s;
	(o || s) && t && (n.scrollTop = e.offsetTop - n.offsetTop - n.clientHeight / 2 - i + e.clientHeight / 2), (c || l) && t && (n.scrollLeft = e.offsetLeft - n.offsetLeft - n.clientWidth / 2 - a + e.clientWidth / 2), (o || s || c || l) && !t && e.scrollIntoView(u);
}
function Km(e, t, n) {
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
function qm(e, t, n) {
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
function Jm({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
function Ym(e, t = Dm(e).translate, n = !0) {
	if (n) {
		let t = up(e, (e) => "translate" in e);
		if (t) {
			let { translate: e = "" } = t[0];
			if (typeof e == "string") {
				let t = Lm(e);
				if (t) return t;
			}
		}
	}
	if (t) {
		let e = Lm(t);
		if (e) return e;
	}
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
var Xm = new Sm((e) => setTimeout(e, 0)), Zm = /* @__PURE__ */ new Map(), Qm = Zm.clear.bind(Zm);
function $m(e) {
	let t = e.ownerDocument, n = Zm.get(t);
	if (n) return n;
	n = t.getAnimations(), Zm.set(t, n), Xm.schedule(Qm);
	let r = n.filter((t) => lp(t.effect) && t.effect.target === e);
	return Zm.set(e, r), n;
}
function eh(e, t) {
	let n = $m(e).filter((e) => {
		if (lp(e.effect)) {
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
var th = class extends Au {
	constructor(e, t = {}) {
		let { frameTransform: n = Pm(e), ignoreTransforms: r, getBoundingClientRect: i = dp } = t, a = eh(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || Ep()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = Dm(e), p = Rm(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = nh(e, f);
		a?.(), p && (d = qm(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = Km(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function nh(e, t) {
	let n = e.getAnimations(), r = null;
	if (!n.length) return null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let n = lp(e.effect) ? e.effect.getKeyframes() : [], i = n[n.length - 1];
		if (!i) continue;
		let { transform: a, translate: o, scale: s } = i;
		if (a || o || s) {
			let e = Rm({
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
function rh(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var ih = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (rh(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (rh(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (rh(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function ah(e) {
	return e ? e instanceof mp(e).Element || pp(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function oh(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = mp(e.target);
	return e instanceof t;
}
function sh(e) {
	if (!e) return !1;
	let { PointerEvent: t } = mp(e.target);
	return e instanceof t;
}
function ch(e) {
	if (!ah(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || lh(e);
}
function lh(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var uh = {};
function dh(e) {
	let t = uh[e] == null ? 0 : uh[e] + 1;
	return uh[e] = t, `${e}-${t}`;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/index.js
var fh = Object.create, ph = Object.defineProperty, mh = Object.defineProperties, hh = Object.getOwnPropertyDescriptor, gh = Object.getOwnPropertyDescriptors, _h = Object.getOwnPropertySymbols, vh = Object.prototype.hasOwnProperty, yh = Object.prototype.propertyIsEnumerable, bh = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), xh = (e) => {
	throw TypeError(e);
}, Sh = (e, t, n) => t in e ? ph(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Ch = (e, t) => {
	for (var n in t ||= {}) vh.call(t, n) && Sh(e, n, t[n]);
	if (_h) for (var n of _h(t)) yh.call(t, n) && Sh(e, n, t[n]);
	return e;
}, wh = (e, t) => mh(e, gh(t)), Th = (e, t) => ph(e, "name", {
	value: t,
	configurable: !0
}), Eh = (e, t) => {
	var n = {};
	for (var r in e) vh.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && _h) for (var r of _h(e)) t.indexOf(r) < 0 && yh.call(e, r) && (n[r] = e[r]);
	return n;
}, Dh = (e) => [
	,
	,
	,
	fh(e?.[bh("metadata")] ?? null)
], Oh = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], kh = (e) => e !== void 0 && typeof e != "function" ? xh("Function expected") : e, Ah = (e, t, n, r, i) => ({
	kind: Oh[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? xh("Already initialized") : i.push(kh(e || null))
}), jh = (e, t) => Sh(t, bh("metadata"), e[3]), Y = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Mh = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = Oh[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && hh(d < 4 ? i : {
		get [n]() {
			return X(this, a);
		},
		set [n](e) {
			return Fh(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Th(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Th(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = Ah(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => Ph(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? X : Ih)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Fh(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? kh(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? xh("Object expected") : (kh(o = s.get) && (v.get = o), kh(o = s.set) && (v.set = o), kh(o = s.init) && g.unshift(o));
	return d || jh(e, i), v && ph(i, n, v), p ? d ^ 4 ? a : v : i;
}, Nh = (e, t, n) => t.has(e) || xh("Cannot " + n), Ph = (e, t) => Object(t) === t ? e.has(t) : xh("Cannot use the \"in\" operator on this value"), X = (e, t, n) => (Nh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Z = (e, t, n) => t.has(e) ? xh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Fh = (e, t, n, r) => (Nh(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ih = (e, t, n) => (Nh(e, t, "access private method"), n), Lh = {
	role: "button",
	roleDescription: "draggable"
}, Rh = "dnd-kit-description", zh = "dnd-kit-announcement", Bh = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, Vh = {
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
function Hh(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function Uh(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function Wh(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var Gh = ["dragover", "dragmove"], Kh = class extends W {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = Rh, announcement: i = zh } = {}, announcements: a = Vh, screenReaderInstructions: o = Bh, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : dh(r), l = n ? `${i}-${n}` : dh(i), u, d, f, p, m = (e = p) => {
			!f || !e || f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => Cm.schedule(m), g = qh(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, Gh.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = Uh(c, o.draggable), e.push(u)), d?.isConnected || (d = Wh(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!Hh(t) || Ep()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", Lh.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", Lh.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && Cm.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function qh(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var Jh = class extends W {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let n = jl(() => vp(this.manager.dragOperation.source?.element));
		this.destroy = rl(() => {
			let { dragOperation: e } = this.manager, { cursor: t = "grabbing", nonce: r } = this.options ?? {};
			if (e.status.initialized) {
				let e = n.value, i = e.createElement("style");
				return r && i.setAttribute("nonce", r), i.textContent = `* { cursor: ${t} !important; }`, e.head.appendChild(i), () => i.remove();
			}
		});
	}
}, Yh = /* @__PURE__ */ new Map(), Xh, Zh, Qh, $h, eg, tg, ng, rg, ig, ag, og, sg, cg, lg = class extends (eg = vd, $h = [L], Qh = [R], Zh = [R], Xh = [R], eg) {
	constructor(e) {
		super(e), Y(ng, 5, this), Z(this, ig), Z(this, tg, /* @__PURE__ */ new Set()), Z(this, rg, Y(ng, 8, this, /* @__PURE__ */ new Set())), Y(ng, 11, this), this.registerEffect(Ih(this, ig, ag));
	}
	register(e) {
		return X(this, tg).add(e), () => {
			X(this, tg).delete(e);
		};
	}
	addRoot(e) {
		return I(() => {
			let t = new Set(this.additionalRoots);
			t.add(e), this.additionalRoots = t;
		}), () => {
			I(() => {
				let t = new Set(this.additionalRoots);
				t.delete(e), this.additionalRoots = t;
			});
		};
	}
	get sourceRoot() {
		let { source: e } = this.manager.dragOperation;
		return kp(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return kp(e?.element ?? null);
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
ng = Dh(eg), tg = /* @__PURE__ */ new WeakMap(), rg = /* @__PURE__ */ new WeakMap(), ig = /* @__PURE__ */ new WeakSet(), ag = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of X(this, tg)) t.push(Ih(this, ig, og).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, og = function(e, t) {
	let n = Yh.get(e);
	n || (n = /* @__PURE__ */ new Map(), Yh.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = hp(e) ? Ih(this, ig, sg).call(this, e, n, t) : Ih(this, ig, cg).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, sg = function(e, t, n) {
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
			i.disconnect(), r.remove(), t.delete(n), t.size === 0 && Yh.delete(e);
		}
	};
}, cg = function(e, t, n) {
	"adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets);
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (Op(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && Yh.delete(e);
		}
	};
}, Mh(ng, 4, "additionalRoots", $h, lg, rg), Mh(ng, 2, "sourceRoot", Qh, lg), Mh(ng, 2, "targetRoot", Zh, lg), Mh(ng, 2, "roots", Xh, lg), jh(ng, lg);
var ug = "data-dnd-", dg = `${ug}dropping`, Q = "--dnd-", fg = `${ug}dragging`, pg = `${ug}placeholder`, mg = [
	fg,
	pg,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], hg = ["view-transition-name"], gg = `
  :is(:root,:host) [${fg}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${Q}top, 0px) !important;
    left: var(${Q}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${Q}width, auto);
    max-width: var(${Q}width, auto);
    height: var(${Q}height, auto);
    max-height: var(${Q}height, auto);
    transition: var(${Q}transition) !important;
  }

  :is(:root,:host) [${pg}] {
    transition: none;
  }

  :is(:root,:host) [${pg}='hidden'] {
    visibility: hidden;
  }

  [${fg}] * {
    pointer-events: none !important;
  }

  [${fg}]:not([${dg}]) {
    translate: var(${Q}translate) !important;
  }

  [${fg}][style*='${Q}scale'] {
    scale: var(${Q}scale) !important;
    transform-origin: var(${Q}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${fg}][popover]) {
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
  [${fg}]::backdrop, [${ug}overlay]:not([${fg}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function _g(e, t = "hidden") {
	return I(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = vg(n, r.registry.droppables), a = [], o = jp(n), { remove: s } = o;
		return yg(i, o, a), bg(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function vg(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${ug}${dh("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function yg(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), Ip.set(o, a), n.push(() => {
			Ip.delete(o), r.proxy = void 0;
		});
	}
}
function bg(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(pg, t);
}
function xg(e, t) {
	return e === t ? !0 : zp(e) === zp(t);
}
function Sg(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && ah(t) && t.hasAttribute("popover") && requestAnimationFrame(() => vm(t));
}
function Cg(e) {
	return e.tagName === "TR";
}
function wg(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || mg.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (rh(e) && rh(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (hg.includes(e) || e.startsWith(Q)) continue;
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
function Tg(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), vm(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), vm(n);
				return;
			}
		}
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function Eg(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new th(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = Dp();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, Q), (t = e.getElementMutationObserver()) == null || t.takeRecords(), Cg(e.element) && Cg(e.placeholder)) {
			let t = Array.from(e.element.cells), n = Array.from(e.placeholder.cells);
			e.getSavedCellWidths() || e.setSavedCellWidths(t.map((e) => e.style.width));
			for (let [e, r] of t.entries()) {
				let t = n[e];
				r.style.width = `${t.getBoundingClientRect().width}px`;
			}
		}
		e.dragOperation.shape = new th(e.feedbackElement);
	});
}
var Dg = 250, Og = "ease";
function kg(e) {
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
	let { duration: r = Dg, easing: i = Og } = n ?? {};
	vm(e.feedbackElement);
	let [, a] = up(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: xg(e.feedbackElement, o) ? null : void 0 }, c = new th(e.feedbackElement, s), l = Lm(Dm(e.feedbackElement).translate) ?? e.translate, u = new th(o, s), d = Au.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, Q), e.feedbackElement.setAttribute(dg, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), Jm({
		element: e.feedbackElement,
		keyframes: wh(Ch(Ch({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: Ap(mp(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(dg), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var Ag, jg, Mg, Ng, Pg, Fg, Ig, Lg = class extends (jg = W, Ag = [L], jg) {
	constructor(e, t) {
		super(e, t), Z(this, Pg), Z(this, Ng, Y(Mg, 8, this)), Y(Mg, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(lg), r = n?.register(gg);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(Ih(this, Pg, Fg).bind(this, n)), this.registerEffect(Ih(this, Pg, Ig));
	}
};
Mg = Dh(jg), Ng = /* @__PURE__ */ new WeakMap(), Pg = /* @__PURE__ */ new WeakSet(), Fg = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = kp(t);
	if (n) return e.addRoot(n);
}, Ig = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s, feedback: c } = a;
	if (!s || c === "none" || !o.initialized || o.initializing) return;
	let { initial: l } = e, u = this.overlay ?? s, d = Pm(u), f = Pm(s), p = !xg(s, u), m = new th(s, {
		frameTransform: p ? f : null,
		ignoreTransforms: !p
	}), h = {
		x: f.scaleX / d.scaleX,
		y: f.scaleY / d.scaleY
	}, { width: g, height: _, top: v, left: y } = m;
	p && (g /= h.x, _ /= h.y);
	let b = new ih(u), { transition: x, translate: S, boxSizing: C, paddingBlockStart: ee, paddingBlockEnd: te, paddingInlineStart: ne, paddingInlineEnd: w, borderInlineStartWidth: re, borderInlineEndWidth: T, borderBlockStartWidth: ie, borderBlockEndWidth: ae } = Dm(s), oe = c === "clone", se = C === "content-box", ce = se ? parseInt(ne) + parseInt(w) + parseInt(re) + parseInt(T) : 0, le = se ? parseInt(ee) + parseInt(te) + parseInt(ie) + parseInt(ae) : 0, E = c !== "move" && !this.overlay ? _g(a, oe ? "clone" : "hidden") : null, ue = I(() => oh(t.dragOperation.activatorEvent));
	if (S !== "none") {
		let e = Lm(S);
		e && !l.translate && (l.translate = e);
	}
	if (!l.transformOrigin) {
		let e = I(() => i.current);
		l.transformOrigin = {
			x: (e.x - y * d.scaleX - d.x) / (g * d.scaleX),
			y: (e.y - v * d.scaleY - d.y) / (_ * d.scaleY)
		};
	}
	let { transformOrigin: de } = l, fe = v * d.scaleY + d.y, pe = y * d.scaleX + d.x;
	if (!l.coordinates && (l.coordinates = {
		x: pe,
		y: fe
	}, h.x !== 1 || h.y !== 1)) {
		let { scaleX: e, scaleY: t } = f, { x: n, y: r } = de;
		l.coordinates.x += (g * e - g) * n, l.coordinates.y += (_ * t - _) * r;
	}
	l.dimensions ||= {
		width: g,
		height: _
	}, l.frameTransform ||= d;
	let me = {
		x: l.coordinates.x - pe,
		y: l.coordinates.y - fe
	}, he = {
		width: (l.dimensions.width * l.frameTransform.scaleX - g * d.scaleX) * de.x,
		height: (l.dimensions.height * l.frameTransform.scaleY - _ * d.scaleY) * de.y
	}, ge = {
		x: me.x / d.scaleX + he.width,
		y: me.y / d.scaleY + he.height
	}, _e = {
		left: y + ge.x,
		top: v + ge.y
	};
	u.setAttribute(fg, "true");
	let ve = I(() => r.transform), ye = l.translate ?? {
		x: 0,
		y: 0
	}, be = ve.x * d.scaleX + ye.x, xe = ve.y * d.scaleY + ye.y, Se = Dp();
	b.set({
		width: g - ce,
		height: _ - le,
		top: _e.top + Se.y,
		left: _e.left + Se.x,
		translate: `${be}px ${xe}px 0`,
		transition: x ? `${x}, translate 0ms linear` : "",
		scale: p ? `${h.x} ${h.y}` : "",
		"transform-origin": `${de.x * 100}% ${de.y * 100}%`
	}, Q), E && (s.insertAdjacentElement("afterend", E), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), _m(u) && (u.hasAttribute("popover") || u.setAttribute("popover", "manual"), vm(u), u.addEventListener("beforetoggle", Sg));
	let Ce, we, D, O = Eg({
		placeholder: E,
		element: s,
		feedbackElement: u,
		frameTransform: d,
		transformOrigin: de,
		width: g,
		height: _,
		top: v,
		left: y,
		widthOffset: ce,
		heightOffset: le,
		delta: ge,
		styles: b,
		dragOperation: r,
		getElementMutationObserver: () => Ce,
		getSavedCellWidths: () => D,
		setSavedCellWidths: (e) => {
			D = e;
		}
	}), Te = new th(u);
	I(() => r.shape = Te);
	let Ee = mp(u), De = (e) => {
		this.manager.actions.stop({ event: e });
	}, Oe = Ap(Ee);
	ue && Ee.addEventListener("resize", De), I(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), E && (O.observe(E), Ce = wg(s, E, oe), we = Tg(s, E, u));
	let ke = t.dragOperation.source?.id, Ae = () => {
		if (!ue || ke == null) return;
		let e = t.registry.draggables.get(ke), n = e?.handle ?? e?.element;
		gp(n) && n.focus();
	}, je = () => {
		if (Ce?.disconnect(), we?.disconnect(), O.disconnect(), Ee.removeEventListener("resize", De), _m(u) && (u.removeEventListener("beforetoggle", Sg), u.removeAttribute("popover")), u.removeAttribute(fg), b.reset(), D && Cg(s)) {
			let e = Array.from(s.cells);
			for (let [t, n] of e.entries()) n.style.width = D[t] ?? "";
		}
		a.status = "idle";
		let t = e.current.translate != null;
		E && (t || E.parentElement !== u.parentElement) && u.isConnected && E.replaceWith(u), E?.remove();
	}, Me = n?.dropAnimation, Ne = this, Pe = Pl(() => {
		let { transform: t, status: n } = r;
		if (!(!t.x && !t.y && !e.current.translate) && n.dragging) {
			let n = l.translate ?? {
				x: 0,
				y: 0
			}, i = {
				x: t.x / d.scaleX + n.x,
				y: t.y / d.scaleY + n.y
			}, a = e.current.translate, o = I(() => r.modifiers), s = I(() => r.shape?.current), c = ue && !Oe ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
			if (b.set({
				transition: `${x}, translate ${c}`,
				translate: `${i.x}px ${i.y}px 0`
			}, Q), Ce?.takeRecords(), s && s !== Te && a && !o.length) {
				let e = ku.delta(i, a);
				r.shape = Au.from(s.boundingRectangle).translate(e.x * d.scaleX, e.y * d.scaleY);
			} else r.shape = new th(u);
			e.current.translate = i;
		}
	}, function() {
		if (r.status.dropped) {
			this.dispose(), a.status = "dropping";
			let n = Ne.dropAnimation === void 0 ? Me : Ne.dropAnimation, r = e.current.translate, i = r != null;
			if (!r && s !== u && (r = {
				x: 0,
				y: 0
			}), !r || n === null) {
				je();
				return;
			}
			t.renderer.rendering.then(() => {
				kg({
					element: s,
					feedbackElement: u,
					placeholder: E,
					translate: r,
					moved: i,
					transition: x,
					alignment: a.alignment,
					styles: b,
					animation: n ?? void 0,
					getElementMutationObserver: () => Ce,
					cleanup: je,
					restoreFocus: Ae
				});
			});
		}
	});
	return () => {
		je(), Pe();
	};
}, Mh(Mg, 4, "overlay", Ag, Lg, Ng), jh(Mg, Lg), Lg.configure = fd(Lg);
var Rg = Lg, zg = !0, Bg = !1, Vg, Hg, Ug, Wg = (Ug = [L], Bm.Forward), Gg, Kg, qg;
Hg = (Vg = [L], Bm.Reverse);
var Jg = class {
	constructor() {
		Z(this, Kg, Y(Gg, 8, this, zg)), Y(Gg, 11, this), Z(this, qg, Y(Gg, 12, this, zg)), Y(Gg, 15, this);
	}
	isLocked(e) {
		return e === Bm.Idle ? !1 : e == null ? this[Bm.Forward] === zg && this[Bm.Reverse] === zg : this[e] === zg;
	}
	unlock(e) {
		e !== Bm.Idle && (this[e] = Bg);
	}
};
Gg = Dh(null), Kg = /* @__PURE__ */ new WeakMap(), qg = /* @__PURE__ */ new WeakMap(), Mh(Gg, 4, Wg, Ug, Jg, Kg), Mh(Gg, 4, Hg, Vg, Jg, qg), jh(Gg, Jg);
var Yg = [Bm.Forward, Bm.Reverse], Xg = class {
	constructor() {
		this.x = new Jg(), this.y = new Jg();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, Zg = class extends W {
	constructor(e) {
		super(e);
		let t = qc(new Xg()), n = null;
		this.signal = t, rl(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new Xg();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: Qg(i.x, n.x),
					y: Qg(i.y, n.y)
				}, r = t.peek();
				P(() => {
					for (let t of Bu) for (let n of Yg) e[t] === n && r[t].unlock(n);
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
function Qg(e, t) {
	return Math.sign(e - t);
}
var $g, e_, t_, n_, r_, i_, a_ = class extends (e_ = vd, $g = [L], e_) {
	constructor(e) {
		super(e), Z(this, n_, Y(t_, 8, this, !1)), Y(t_, 11, this), Z(this, r_), Z(this, i_, () => {
			if (!X(this, r_)) return;
			let { element: e, by: t } = X(this, r_);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e) => {
			if (this.disabled) return !1;
			let t = this.getScrollableElements();
			if (!t) return Fh(this, r_, void 0), !1;
			let { position: n } = this.manager.dragOperation, r = n?.current;
			if (r) {
				let { by: n } = e ?? {}, i = n ? {
					x: o_(n.x),
					y: o_(n.y)
				} : void 0, a = i ? void 0 : this.scrollIntentTracker.current;
				if (a?.isLocked()) return !1;
				for (let e of t) {
					let t = xm(e, n);
					if (t.x || t.y) {
						let { speed: t, direction: o } = Um(e, r, i);
						if (a) for (let e of Bu) a[e].isLocked(o[e]) && (t[e] = 0, o[e] = 0);
						if (o.x || o.y) {
							let { x: r, y: i } = n ?? o, a = r * t.x, s = i * t.y;
							if (a || s) {
								let t = X(this, r_)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !s)) continue;
								return Fh(this, r_, {
									element: e,
									by: {
										x: a,
										y: s
									}
								}), Cm.schedule(X(this, i_)), !0;
							}
						}
					}
				}
			}
			return Fh(this, r_, void 0), !1;
		};
		let t = null, n = null, r = jl(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = Pp(kp(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = jl(() => {
			let t = r.value, { documentElement: i } = vp(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = Mm(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = Mm(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, Ml);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new Zg(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			this.disabled || t.defaultPrevented || !oh(e.dragOperation.activatorEvent) || !t.by || this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
t_ = Dh(e_), n_ = /* @__PURE__ */ new WeakMap(), r_ = /* @__PURE__ */ new WeakMap(), i_ = /* @__PURE__ */ new WeakMap(), Mh(t_, 4, "autoScrolling", $g, a_, n_), jh(t_, a_);
function o_(e) {
	return e > 0 ? Bm.Forward : e < 0 ? Bm.Reverse : Bm.Idle;
}
var s_ = new class {
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
}), c_ = 10, l_ = class extends W {
	constructor(e, t) {
		super(e);
		let n = e.registry.plugins.get(a_);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = rl(() => {
			if (this.disabled) return;
			let { position: t, status: r } = e.dragOperation;
			if (r.dragging) if (n.scroll()) {
				n.autoScrolling = !0;
				let e = setInterval(() => s_.schedule(n.scroll), c_);
				return () => {
					clearInterval(e);
				};
			} else n.autoScrolling = !1;
		});
	}
}, u_ = {
	capture: !0,
	passive: !0
}, d_, f_ = class extends vd {
	constructor(e) {
		super(e), Z(this, d_), this.handleScroll = () => {
			X(this, d_) ?? Fh(this, d_, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), Fh(this, d_, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = rl(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, u_), () => {
					e.removeEventListener("scroll", this.handleScroll, u_);
				};
			}
		});
	}
};
d_ = /* @__PURE__ */ new WeakMap();
var p_ = class extends W {
	constructor(e, t) {
		super(e, t), this.manager = e, this.destroy = rl(() => {
			let { dragOperation: e } = this.manager, { nonce: t } = this.options ?? {};
			if (e.status.initialized) {
				let e = document.createElement("style");
				return t && e.setAttribute("nonce", t), e.textContent = "* { user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(e), m_(), document.addEventListener("selectionchange", m_, { capture: !0 }), () => {
					document.removeEventListener("selectionchange", m_, { capture: !0 }), e.remove();
				};
			}
		});
	}
};
function m_() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var h_ = Object.freeze({
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
}), g_, __ = class extends Ef {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, Z(this, g_, []), this.listeners = new Rp(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !ah(e.target) || t.disabled) return;
			let { keyboardCodes: r = h_.keyboardCodes, preventActivation: i = h_.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return rl(() => {
			let n = e.handle ?? e.element, r = (n) => {
				oh(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), Gm(r);
		let { center: i } = new th(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = vp(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		X(this, g_).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = h_.keyboardCodes } = n ?? {};
		if (y_(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = y_(e, r.cancel);
			this.handleEnd(e, t);
			return;
		}
		y_(e, r.up) ? this.handleMove("up", e) : y_(e, r.down) && this.handleMove("down", e), y_(e, r.left) ? this.handleMove("left", e) : y_(e, r.right) && this.handleMove("right", e);
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
		}, a = this.options?.offset ?? h_.offset;
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
		let e = this.manager.registry.plugins.get(l_);
		e?.disabled === !1 && (e.disable(), X(this, g_).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		X(this, g_).forEach((e) => e()), Fh(this, g_, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
g_ = /* @__PURE__ */ new WeakMap(), __.configure = fd(__), __.defaults = h_;
var v_ = __;
function y_(e, t) {
	return t.includes(e.code);
}
var b_, x_ = class extends kf {
	constructor() {
		super(...arguments), Z(this, b_);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				Fh(this, b_, Cp(e));
				break;
			case "pointermove":
				if (!X(this, b_)) return;
				let { x: t, y: n } = Cp(e), r = {
					x: t - X(this, b_).x,
					y: n - X(this, b_).y
				}, { tolerance: i } = this.options;
				if (i && Ru(r, i)) {
					this.abort();
					return;
				}
				Ru(r, this.options.value) && this.activate(e);
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		Fh(this, b_, void 0);
	}
};
b_ = /* @__PURE__ */ new WeakMap();
var S_, C_, w_ = class extends kf {
	constructor() {
		super(...arguments), Z(this, S_), Z(this, C_);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				Fh(this, C_, Cp(e)), Fh(this, S_, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!X(this, C_)) return;
				let { x: t, y: n } = Cp(e);
				Ru({
					x: t - X(this, C_).x,
					y: n - X(this, C_).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		X(this, S_) && (clearTimeout(X(this, S_)), Fh(this, C_, void 0), Fh(this, S_, void 0));
	}
};
S_ = /* @__PURE__ */ new WeakMap(), C_ = /* @__PURE__ */ new WeakMap();
var T_ = class {};
T_.Delay = w_, T_.Distance = x_;
var E_ = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (!(n === "mouse" && ah(r) && (t.handle === r || t.handle?.contains(r)))) return n === "touch" ? [new T_.Delay({
			value: 250,
			tolerance: 5
		})] : ch(r) && !e.defaultPrevented ? [new T_.Delay({
			value: 200,
			tolerance: 0
		})] : [new T_.Delay({
			value: 200,
			tolerance: 10
		}), new T_.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		return n === t.element || n === t.handle || !ah(n) || t.handle?.contains(n) ? !1 : Lp(n);
	}
}), D_, O_ = class extends Ef {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, Z(this, D_, /* @__PURE__ */ new Set()), this.listeners = new Rp(), this.latest = {
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
		let { activationConstraints: r = E_.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return rl(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				sh(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (P_(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !ah(e.target) || t.disabled || A_(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = E_.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = gp(i) && i.draggable && i.getAttribute("draggable") === "true", o = Pm(t.element), { x: s, y: c } = Cp(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new Df(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = Tp(), f = this.listeners.bind(d, [
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
				listener: a ? this.handleCancel : j_,
				options: { capture: !0 }
			}
		]);
		X(this, D_).add(() => {
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
			let n = Cp(e), r = Pm(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, Cm.schedule(this.handleMove);
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
		let i = vp(t.target).body;
		i.setPointerCapture(t.pointerId);
		let a = ah(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: j_,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: j_
			},
			{
				type: "contextmenu",
				listener: j_
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		X(this, D_).add(o);
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
		}, X(this, D_).forEach((e) => e()), X(this, D_).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
D_ = /* @__PURE__ */ new WeakMap(), O_.configure = fd(O_), O_.defaults = E_;
var k_ = O_;
function A_(e) {
	return "sensor" in e;
}
function j_(e) {
	e.preventDefault();
}
function M_() {}
var N_ = /* @__PURE__ */ new WeakSet();
function P_(e) {
	!e || N_.has(e) || (e.addEventListener("touchmove", M_, {
		capture: !1,
		passive: !1
	}), N_.add(e));
}
var F_ = {
	modifiers: [],
	plugins: [
		Kh,
		l_,
		Jh,
		Rg,
		p_
	],
	sensors: [k_, v_]
}, I_ = class extends $f {
	constructor(e = {}) {
		let t = Qf(e.plugins, F_.plugins), n = Qf(e.sensors, F_.sensors), r = Qf(e.modifiers, F_.modifiers);
		super(wh(Ch({}, e), {
			plugins: [
				f_,
				a_,
				lg,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, L_, R_, z_, B_, V_, H_, U_, W_, G_ = class extends (B_ = ff, z_ = [L], R_ = [L], L_ = [L], B_) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a, feedback: o = "default" } = n, s = Eh(n, [
			"element",
			"effects",
			"handle",
			"feedback"
		]);
		super(Ch({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(pd) ?? [...e.sensors]).map((t) => {
				let n = t instanceof Ef ? t : e.registry.register(t.plugin), r = t instanceof Ef ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, s), t), Z(this, H_, Y(V_, 8, this)), Y(V_, 11, this), Z(this, U_, Y(V_, 12, this)), Y(V_, 15, this), Z(this, W_, Y(V_, 16, this)), Y(V_, 19, this), this.element = r, this.handle = a, this.feedback = o;
	}
};
V_ = Dh(B_), H_ = /* @__PURE__ */ new WeakMap(), U_ = /* @__PURE__ */ new WeakMap(), W_ = /* @__PURE__ */ new WeakMap(), Mh(V_, 4, "handle", z_, G_, H_), Mh(V_, 4, "element", R_, G_, U_), Mh(V_, 4, "feedback", L_, G_, W_), jh(V_, G_);
var K_, q_, J_, Y_, X_, Z_, Q_, $_, ev, tv, nv = class extends (J_ = Tf, q_ = [L], K_ = [L], J_) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = Eh(n, ["element", "effects"]);
		let { collisionDetector: o = np } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new th(n), i = I(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = qc(!1);
		super(wh(Ch({}, a), {
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
						let t = new gm(e, s);
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
		}), t), Z(this, ev), Z(this, X_, Y(Y_, 8, this)), Y(Y_, 11, this), Z(this, tv, Y(Y_, 12, this)), Y(Y_, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		Fh(this, ev, e, $_);
	}
	get element() {
		return this.proxy ?? X(this, ev, Q_);
	}
};
Y_ = Dh(J_), X_ = /* @__PURE__ */ new WeakMap(), ev = /* @__PURE__ */ new WeakSet(), tv = /* @__PURE__ */ new WeakMap(), Z_ = Mh(Y_, 20, "#element", q_, ev, X_), Q_ = Z_.get, $_ = Z_.set, Mh(Y_, 4, "proxy", K_, nv, tv), jh(Y_, nv);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/sortable.js
var rv = Object.create, iv = Object.defineProperty, av = Object.defineProperties, ov = Object.getOwnPropertyDescriptor, sv = Object.getOwnPropertyDescriptors, cv = Object.getOwnPropertySymbols, lv = Object.prototype.hasOwnProperty, uv = Object.prototype.propertyIsEnumerable, dv = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), fv = (e) => {
	throw TypeError(e);
}, pv = (e, t, n) => t in e ? iv(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, mv = (e, t) => {
	for (var n in t ||= {}) lv.call(t, n) && pv(e, n, t[n]);
	if (cv) for (var n of cv(t)) uv.call(t, n) && pv(e, n, t[n]);
	return e;
}, hv = (e, t) => av(e, sv(t)), gv = (e, t) => {
	var n = {};
	for (var r in e) lv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && cv) for (var r of cv(e)) t.indexOf(r) < 0 && uv.call(e, r) && (n[r] = e[r]);
	return n;
}, _v = (e) => [
	,
	,
	,
	rv(null)
], vv = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], yv = (e) => e !== void 0 && typeof e != "function" ? fv("Function expected") : e, bv = (e, t, n, r, i) => ({
	kind: vv[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? fv("Already initialized") : i.push(yv(e || null))
}), xv = (e, t) => pv(t, dv("metadata"), e[3]), Sv = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Cv = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u, d = t & 7, f = !1, p = !1, m = e.length + 1, h = vv[d + 5], g = e[m - 1] = [], _ = e[m] || (e[m] = []), v = (i = i.prototype, ov({
		get [n]() {
			return Tv(this, a);
		},
		set [n](e) {
			return Dv(this, a, e);
		}
	}, n)), y = r.length - 1; y >= 0; y--) l = bv(d, n, c = {}, e[3], _), l.static = f, l.private = p, u = l.access = { has: (e) => n in e }, u.get = (e) => e[n], u.set = (e, t) => e[n] = t, s = (0, r[y])({
		get: v.get,
		set: v.set
	}, l), c._ = 1, s === void 0 ? yv(s) && (v[h] = s) : typeof s != "object" || !s ? fv("Object expected") : (yv(o = s.get) && (v.get = o), yv(o = s.set) && (v.set = o), yv(o = s.init) && g.unshift(o));
	return v && iv(i, n, v), i;
}, wv = (e, t, n) => t.has(e) || fv("Cannot " + n), Tv = (e, t, n) => (wv(e, t, "read from private field"), t.get(e)), Ev = (e, t, n) => t.has(e) ? fv("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Dv = (e, t, n, r) => (wv(e, t, "write to private field"), t.set(e, n), n);
function Ov(e) {
	return e instanceof ly || e instanceof cy;
}
var kv = 10, Av = class extends W {
	constructor(e) {
		super(e);
		let t = rl(() => {
			let { dragOperation: t } = e;
			if (oh(t.activatorEvent) && Ov(t.source) && t.status.initialized) {
				let t = e.registry.plugins.get(a_);
				if (t) return t.disable(), () => t.enable();
			}
		}), n = e.monitor.addEventListener("dragmove", (e, t) => {
			queueMicrotask(() => {
				if (this.disabled || e.defaultPrevented || !e.nativeEvent) return;
				let { dragOperation: n } = t;
				if (!oh(e.nativeEvent) || !Ov(n.source) || !n.shape) return;
				let { actions: r, collisionObserver: i, registry: a } = t, { by: o } = e;
				if (!o) return;
				let s = jv(o), { source: c, target: l } = n, { center: u } = n.shape.current, d = [], f = [];
				P(() => {
					for (let e of a.droppables) {
						let { id: t } = e;
						if (!e.accepts(c) || t === l?.id && Ov(e) || !e.element) continue;
						let n = e.shape, r = new th(e.element, { getBoundingClientRect: (e) => Sp(e, void 0, .2) });
						!r.height || !r.width || (s == "down" && u.y + kv < r.center.y || s == "up" && u.y - kv > r.center.y || s == "left" && u.x - kv > r.center.x || s == "right" && u.x + kv < r.center.x) && (d.push(e), e.shape = r, f.push(() => e.shape = n));
					}
				}), e.preventDefault(), i.disable();
				let p = i.computeCollisions(d, rp);
				P(() => f.forEach((e) => e()));
				let [m] = p;
				if (!m) return;
				let { id: h } = m, { index: g, group: _ } = c.sortable;
				r.setDropTarget(h).then(() => {
					let { source: e, target: t, shape: a } = n;
					if (!e || !Ov(e) || !a) return;
					let { index: o, group: s, target: c } = e.sortable, l = g !== o || _ !== s, u = l ? c : t?.element;
					if (!u) return;
					Gm(u);
					let d = new th(u);
					if (!d) return;
					let f = Au.delta(d, Au.from(a.current.boundingRectangle), e.alignment);
					r.move({ by: f }), l ? r.setDropTarget(e.id).then(() => i.enable()) : i.enable();
				});
			});
		});
		this.destroy = () => {
			n(), t();
		};
	}
};
function jv(e) {
	let { x: t, y: n } = e;
	if (t > 0) return "right";
	if (t < 0) return "left";
	if (n > 0) return "down";
	if (n < 0) return "up";
}
var Mv = Object.defineProperty, Nv = Object.defineProperties, Pv = Object.getOwnPropertyDescriptors, Fv = Object.getOwnPropertySymbols, Iv = Object.prototype.hasOwnProperty, Lv = Object.prototype.propertyIsEnumerable, Rv = (e, t, n) => t in e ? Mv(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, zv = (e, t) => {
	for (var n in t ||= {}) Iv.call(t, n) && Rv(e, n, t[n]);
	if (Fv) for (var n of Fv(t)) Lv.call(t, n) && Rv(e, n, t[n]);
	return e;
}, Bv = (e, t) => Nv(e, Pv(t));
function Vv(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Hv(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function Uv(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (Hv(r)) {
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
	if (c === -1 && Hv(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return Bv(zv({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return Bv(zv({}, e), {
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
		if (l != null && l === d && c === u && Hv(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return Bv(zv({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return Bv(zv({}, e), {
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
	if (l === d) return Bv(zv({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return Bv(zv({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function Wv(e, t) {
	return Uv(e, t, Vv);
}
var Gv = "__default__", Kv = class extends W {
	constructor(e) {
		super(e);
		let t = () => {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.registry.droppables) if (n instanceof ly) {
				let { sortable: e } = n, { group: r } = e, i = t.get(r);
				i || (i = /* @__PURE__ */ new Set(), t.set(r, i)), i.add(e);
			}
			for (let [e, n] of t) t.set(e, new Set(Yv(n)));
			return t;
		}, n = [e.monitor.addEventListener("dragover", (e, n) => {
			if (this.disabled) return;
			let { dragOperation: r } = n, { source: i, target: a } = r;
			if (!Ov(i) || !Ov(a) || i.sortable === a.sortable) return;
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
					let f = Yv(c), p = s ? f : Yv(l), m = i.sortable.group ?? Gv, h = a.sortable.group ?? Gv, g = {
						[m]: f,
						[h]: p
					}, _ = Wv(g, e);
					if (g === _) return;
					let v = _[h].indexOf(i.sortable), y = _[h].indexOf(a.sortable);
					n.collisionObserver.disable(), qv(u, v, d, y), P(() => {
						for (let [e, t] of _[m].entries()) t.index = e;
						if (!s) for (let [e, t] of _[h].entries()) t.group = a.sortable.group, t.index = e;
					}), n.actions.setDropTarget(i.id).then(() => n.collisionObserver.enable());
				});
			});
		}), e.monitor.addEventListener("dragend", (e, n) => {
			if (!e.canceled) return;
			let { dragOperation: r } = n, { source: i } = r;
			Ov(i) && (i.sortable.initialIndex === i.sortable.index && i.sortable.initialGroup === i.sortable.group || queueMicrotask(() => {
				let e = t(), r = e.get(i.sortable.initialGroup);
				r && n.renderer.rendering.then(() => {
					for (let [t, n] of e.entries()) {
						let e = Array.from(n).entries();
						for (let [n, r] of e) if (r.index !== n || r.group !== t) return;
					}
					let t = Yv(r), n = i.sortable.element, a = t[i.sortable.initialIndex], o = a?.element;
					!a || !o || !n || (qv(n, a.index, o, i.index), P(() => {
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
function qv(e, t, n, r) {
	let i = r < t ? "afterend" : "beforebegin";
	n.insertAdjacentElement(i, e);
}
function Jv(e, t) {
	return e.index - t.index;
}
function Yv(e) {
	return Array.from(e).sort(Jv);
}
var Xv = [Av, Kv], Zv = {
	duration: 250,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	idle: !1
}, Qv = new ru(), $v, ey = [L], ty, ny, ry, iy, ay, oy;
$v = [L];
var sy = class {
	constructor(e, t) {
		Ev(this, ny, Sv(ty, 8, this)), Sv(ty, 11, this), Ev(this, ry), Ev(this, iy), Ev(this, ay, Sv(ty, 12, this)), Sv(ty, 15, this), Ev(this, oy), this.register = () => (P(() => {
			var e, t;
			(e = this.manager) == null || e.registry.register(this.droppable), (t = this.manager) == null || t.registry.register(this.draggable);
		}), () => this.unregister()), this.unregister = () => {
			P(() => {
				var e, t;
				(e = this.manager) == null || e.registry.unregister(this.droppable), (t = this.manager) == null || t.registry.unregister(this.draggable);
			});
		}, this.destroy = () => {
			P(() => {
				this.droppable.destroy(), this.draggable.destroy();
			});
		};
		var n = e, { effects: r = () => [], group: i, index: a, sensors: o, type: s, transition: c = Zv, plugins: l = Xv } = n, u = gv(n, [
			"effects",
			"group",
			"index",
			"sensors",
			"type",
			"transition",
			"plugins"
		]);
		this.droppable = new ly(u, t, this), this.draggable = new cy(hv(mv({}, u), {
			effects: () => [
				() => {
					let e = this.manager?.dragOperation.status;
					e?.initializing && this.id === this.manager?.dragOperation.source?.id && Qv.clear(this.manager), e?.dragging && Qv.set(this.manager, this.id, I(() => ({
						initialIndex: this.index,
						initialGroup: this.group
					})));
				},
				() => {
					let { index: e, group: t, manager: n } = this, r = Tv(this, iy), i = Tv(this, ry);
					(e !== r || t !== i) && (Dv(this, iy, e), Dv(this, ry, t), this.animate());
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
		}), t, this), Dv(this, oy, u.element), this.manager = t, this.index = a, Dv(this, iy, a), this.group = i, Dv(this, ry, i), this.type = s, this.transition = c;
	}
	get initialIndex() {
		return Qv.get(this.manager, this.id)?.initialIndex ?? this.index;
	}
	get initialGroup() {
		return Qv.get(this.manager, this.id)?.initialGroup ?? this.group;
	}
	animate() {
		I(() => {
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
				}, { translate: o } = Dm(r), s = Ym(r, o, !1), c = Ym(r, o);
				if (a.x || a.y) {
					let n = Ap(mp(r)) ? hv(mv({}, t), { duration: 0 }) : t;
					Jm({
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
		P(() => {
			this.draggable.manager = e, this.droppable.manager = e;
		});
	}
	set element(e) {
		P(() => {
			let t = Tv(this, oy), n = this.droppable.element, r = this.draggable.element;
			(!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), Dv(this, oy, e);
		});
	}
	get element() {
		let e = Tv(this, oy);
		if (e) return Ip.get(e) ?? e ?? this.droppable.element;
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
		P(() => {
			this.droppable.disabled = e, this.draggable.disabled = e;
		});
	}
	set data(e) {
		P(() => {
			this.droppable.data = e, this.draggable.data = e;
		});
	}
	set handle(e) {
		this.draggable.handle = e;
	}
	set id(e) {
		P(() => {
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
		this.droppable.collisionDetector = e ?? np;
	}
	set alignment(e) {
		this.draggable.alignment = e;
	}
	get alignment() {
		return this.draggable.alignment;
	}
	set type(e) {
		P(() => {
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
ty = _v(), ny = /* @__PURE__ */ new WeakMap(), ry = /* @__PURE__ */ new WeakMap(), iy = /* @__PURE__ */ new WeakMap(), ay = /* @__PURE__ */ new WeakMap(), oy = /* @__PURE__ */ new WeakMap(), Cv(ty, 4, "index", ey, sy, ny), Cv(ty, 4, "group", $v, sy, ay), xv(ty, sy);
var cy = class extends G_ {
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
}, ly = class extends nv {
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
function uy(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function dy(e) {
	if (e != null) return uy(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/hooks.js
var fy = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? D.useLayoutEffect : D.useEffect;
function py() {
	let e = (0, D.useState)(0)[1];
	return (0, D.useCallback)(() => {
		e((e) => e + 1);
	}, [e]);
}
function my(e, t) {
	let n = (0, D.useRef)(/* @__PURE__ */ new Map()), r = py();
	return fy(() => {
		if (!e) {
			n.current.clear();
			return;
		}
		return rl(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = I(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? (0, wo.flushSync)(r) : r());
		});
	}, [e]), (0, D.useMemo)(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function hy(e, t) {
	e();
}
function gy(e) {
	let t = (0, D.useRef)(e);
	return fy(() => {
		t.current = e;
	}, [e]), t;
}
function $(e, t, n = D.useEffect, r = Object.is) {
	let i = (0, D.useRef)(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function _y(e, t) {
	let n = (0, D.useRef)(dy(e));
	fy(() => {
		let r = dy(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/index.js
var vy = Object.getOwnPropertySymbols, yy = Object.prototype.hasOwnProperty, by = Object.prototype.propertyIsEnumerable, xy = (e, t) => {
	var n = {};
	for (var r in e) yy.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && vy) for (var r of vy(e)) t.indexOf(r) < 0 && by.call(e, r) && (n[r] = e[r]);
	return n;
}, Sy = (0, D.createContext)(new I_()), Cy = (0, D.memo)((0, D.forwardRef)(({ children: e }, t) => {
	let [n, r] = (0, D.useState)(0), i = (0, D.useRef)(null), a = (0, D.useRef)(null), o = (0, D.useMemo)(() => ({
		renderer: { get rendering() {
			return i.current ?? Promise.resolve();
		} },
		trackRendering(e) {
			i.current ||= new Promise((e) => {
				a.current = e;
			}), (0, D.startTransition)(() => {
				e(), r((e) => e + 1);
			});
		}
	}), []);
	return fy(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), (0, D.useImperativeHandle)(t, () => o), null;
})), wy = [void 0, Ml];
function Ty(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = xy(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = (0, D.useRef)(null), { plugins: d, modifiers: f, sensors: p } = l, m = Qf(d, F_.plugins), h = Qf(p, F_.sensors), g = Qf(f, F_.modifiers), _ = gy(i), v = gy(a), y = gy(s), b = gy(o), x = gy(c), S = gy(r), C = Ey(() => l.manager ?? new I_(l));
	return (0, D.useEffect)(() => {
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
	}, [C]), $(m, () => C && (C.plugins = m), ...wy), $(h, () => C && (C.sensors = h), ...wy), $(g, () => C && (C.modifiers = g), ...wy), /* @__PURE__ */ (0, M.jsxs)(Sy.Provider, {
		value: C,
		children: [/* @__PURE__ */ (0, M.jsx)(Cy, {
			ref: u,
			children: n
		}), n]
	});
}
function Ey(e) {
	let t = (0, D.useRef)(null);
	return t.current ||= e(), (0, D.useInsertionEffect)(() => () => t.current?.destroy(), []), t.current;
}
function Dy() {
	return (0, D.useContext)(Sy);
}
function Oy(e) {
	let t = Dy() ?? void 0, [n] = (0, D.useState)(() => e(t));
	return n.manager !== t && (n.manager = t), fy(n.register, [t, n]), n;
}
var ky = Object.create, Ay = Object.defineProperty, jy = Object.getOwnPropertyDescriptor, My = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ny = (e) => {
	throw TypeError(e);
}, Py = (e, t, n) => t in e ? Ay(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Fy = (e) => [
	,
	,
	,
	ky(e?.[My("metadata")] ?? null)
], Iy = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Ly = (e) => e !== void 0 && typeof e != "function" ? Ny("Function expected") : e, Ry = (e, t, n, r, i) => ({
	kind: Iy[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Ny("Already initialized") : i.push(Ly(e || null))
}), zy = (e, t) => Py(t, My("metadata"), e[3]), By = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, Vy = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = Iy[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, jy(i, n)), _ = r.length - 1; _ >= 0; _--) c = Ry(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, Ly(o) && (g[m] = o);
	return g && Ay(i, n, g), i;
}, Hy = (e, t, n) => t.has(e) || Ny("Cannot " + n), Uy = (e, t, n) => (Hy(e, t, "read from private field"), t.get(e)), Wy = (e, t, n) => t.has(e) ? Ny("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Gy = (e, t, n, r) => (Hy(e, t, "write to private field"), t.set(e, n), n), Ky = class e {
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
}, qy, Jy, Yy, Xy, Zy, Qy = class extends (Yy = eu, Jy = [R], qy = [R], Yy) {
	constructor(e) {
		let t = Ky.from(e);
		super(t, (e, t) => Ky.equals(e, t)), By(Zy, 5, this), Wy(this, Xy, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return Ky.delta(this.current, this.initial);
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
		let { current: t } = this, n = Ky.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - Uy(this, Xy), o = (e) => Math.round(e / a * 100);
		P(() => {
			Gy(this, Xy, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(Ky.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
Zy = Fy(Yy), Xy = /* @__PURE__ */ new WeakMap(), Vy(Zy, 2, "delta", Jy, Qy), Vy(Zy, 2, "direction", qy, Qy), zy(Zy, Qy);
var $y = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))($y || {});
Object.values($y);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/sortable.js
var eb = Object.defineProperty, tb = Object.defineProperties, nb = Object.getOwnPropertyDescriptors, rb = Object.getOwnPropertySymbols, ib = Object.prototype.hasOwnProperty, ab = Object.prototype.propertyIsEnumerable, ob = (e, t, n) => t in e ? eb(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, sb = (e, t) => {
	for (var n in t ||= {}) ib.call(t, n) && ob(e, n, t[n]);
	if (rb) for (var n of rb(t)) ab.call(t, n) && ob(e, n, t[n]);
	return e;
}, cb = (e, t) => tb(e, nb(t));
function lb(e) {
	let { accept: t, collisionDetector: n, collisionPriority: r, id: i, data: a, element: o, handle: s, index: c, group: l, disabled: u, feedback: d, modifiers: f, sensors: p, target: m, type: h } = e, g = sb(sb({}, Zv), e.transition), _ = Oy((t) => new sy(cb(sb({}, e), {
		transition: g,
		register: !1,
		handle: dy(s),
		element: dy(o),
		target: dy(m),
		feedback: d
	}), t)), v = my(_, ub);
	return $(i, () => _.id = i), fy(() => {
		P(() => {
			_.group = l, _.index = c;
		});
	}, [
		_,
		l,
		c
	]), $(h, () => _.type = h), $(t, () => _.accept = t, void 0, Ml), $(a, () => a && (_.data = a)), $(c, () => {
		_.manager?.dragOperation.status.idle && g?.idle && _.refreshShape();
	}, hy), _y(s, (e) => _.handle = e), _y(o, (e) => _.element = e), _y(m, (e) => _.target = e), $(u, () => _.disabled = u === !0), $(p, () => _.sensors = p), $(n, () => _.collisionDetector = n), $(r, () => _.collisionPriority = r), $(d, () => _.feedback = d ?? "default"), $(g, () => _.transition = g, void 0, Ml), $(f, () => _.modifiers = f, void 0, Ml), $(e.alignment, () => _.alignment = e.alignment), {
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
		handleRef: (0, D.useCallback)((e) => {
			_.handle = e ?? void 0;
		}, [_]),
		ref: (0, D.useCallback)((e) => {
			!e && _.element?.isConnected && !_.manager?.dragOperation.status.idle || (_.element = e ?? void 0);
		}, [_]),
		sourceRef: (0, D.useCallback)((e) => {
			!e && _.source?.isConnected && !_.manager?.dragOperation.status.idle || (_.source = e ?? void 0);
		}, [_]),
		targetRef: (0, D.useCallback)((e) => {
			!e && _.target?.isConnected && !_.manager?.dragOperation.status.idle || (_.target = e ?? void 0);
		}, [_])
	};
}
function ub(e, t, n) {
	return !!(e === "isDragSource" && !n && t);
}
//#endregion
//#region src/external-resources/studio-ui/components/SortableResource.tsx
var db = ({ id: e, index: t, disabled: n = !1, children: r }) => {
	let { ref: i, handleRef: a } = lb({
		id: e,
		index: t,
		disabled: n
	});
	return /* @__PURE__ */ (0, M.jsx)("div", {
		ref: i,
		children: r(a)
	});
}, fb = Object.defineProperty, pb = Object.defineProperties, mb = Object.getOwnPropertyDescriptors, hb = Object.getOwnPropertySymbols, gb = Object.prototype.hasOwnProperty, _b = Object.prototype.propertyIsEnumerable, vb = (e, t, n) => t in e ? fb(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, yb = (e, t) => {
	for (var n in t ||= {}) gb.call(t, n) && vb(e, n, t[n]);
	if (hb) for (var n of hb(t)) _b.call(t, n) && vb(e, n, t[n]);
	return e;
}, bb = (e, t) => pb(e, mb(t));
function xb(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Sb(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function Cb(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (Sb(r)) {
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
	if (c === -1 && Sb(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return bb(yb({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return bb(yb({}, e), {
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
		if (l != null && l === d && c === u && Sb(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return bb(yb({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return bb(yb({}, e), {
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
	if (l === d) return bb(yb({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return bb(yb({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function wb(e, t) {
	return Cb(e, t, xb);
}
//#endregion
//#region src/shared/components/constants.ts
var Tb = [
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
function Eb({ title: e, onTitleChange: t, activeTab: n, tabs: r = Tb }) {
	let [i, a] = (0, D.useState)(!1);
	return /* @__PURE__ */ (0, M.jsx)(j.Header, {
		className: "shadow-sm studio-header",
		children: /* @__PURE__ */ (0, M.jsxs)("div", {
			className: "d-flex flex-row justify-content-between",
			children: [
				/* @__PURE__ */ (0, M.jsx)(Te, { children: i ? /* @__PURE__ */ (0, M.jsx)(T.Control, {
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
							e,
							/* @__PURE__ */ (0, M.jsx)(ye, {
								alt: "Edit display name",
								className: "studio-header-title-edit",
								size: "sm",
								src: Tn,
								onClick: () => a(!0)
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, M.jsx)(Te.Spacer, {}),
				r.length > 0 && /* @__PURE__ */ (0, M.jsx)(Uo, {
					role: "tablist",
					variant: "button-group",
					activeKey: n,
					className: "studio-header-tabs-nav pgn__tabs",
					"aria-label": "Editor Sections",
					children: r.map(({ key: e, label: t }) => /* @__PURE__ */ (0, M.jsx)(Uo.Link, {
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
//#region src/external-resources/studio-ui/App.tsx
var Db = ({ initialData: e, onSave: t, onCancel: n }) => {
	let [r, i] = (0, D.useState)(e), [a, o, s] = zo(!1), [c, l, u] = zo(!1), [d, f] = (0, D.useState)(), [p, m] = (0, D.useState)(), h = a || c;
	return /* @__PURE__ */ (0, M.jsxs)("div", {
		className: "react-studio-block external-resources-xblock-editor editor-with-buttons bg-light-200",
		children: [
			/* @__PURE__ */ (0, M.jsx)(Eb, {
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
					/* @__PURE__ */ (0, M.jsx)(Ty, {
						onDragOver: (e) => i((t) => ({
							...t,
							resources: wb(t.resources, e)
						})),
						children: /* @__PURE__ */ (0, M.jsx)(_e, {
							gap: 3,
							children: r.resources.map((e, t) => c && d === e.id ? /* @__PURE__ */ (0, M.jsx)(Ac, {
								initialResource: e,
								onCancel: u,
								onSave: (e) => {
									i((t) => ({
										...t,
										resources: t.resources.map((t) => t.id === e.id ? e : t)
									})), u();
								},
								onDelete: () => m(e)
							}, e.id) : /* @__PURE__ */ (0, M.jsx)(db, {
								id: e.id,
								index: t,
								disabled: c,
								children: (t) => /* @__PURE__ */ (0, M.jsx)(ve, {
									resource: e,
									actions: /* @__PURE__ */ (0, M.jsx)(Nc, {
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
					/* @__PURE__ */ (0, M.jsx)(Pc, {
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
						children: a ? /* @__PURE__ */ (0, M.jsx)(Ac, {
							initialResource: Mc(),
							onCancel: s,
							onSave: (e) => {
								i((t) => ({
									...t,
									resources: [...t.resources, e]
								})), s();
							},
							isNewResource: !0
						}) : /* @__PURE__ */ (0, M.jsx)(xn, {
							variant: "outline-primary",
							iconBefore: En,
							onClick: o,
							children: "Add resource link"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, M.jsx)(Xo, {
				position: "bottom",
				className: "xblock-actions",
				children: /* @__PURE__ */ (0, M.jsxs)(Te, { children: [/* @__PURE__ */ (0, M.jsx)(xn, {
					variant: "tertiary",
					onClick: () => n(),
					children: "Cancel"
				}), /* @__PURE__ */ (0, M.jsx)(xn, {
					variant: "primary",
					onClick: () => t(r),
					disabled: r.resources.length === 0 || h,
					children: "Save"
				})] })
			})
		]
	});
}, Ob = ".pgn__modal-header.studio-header{padding:calc(var(--pgn-spacing-modal-inner-padding-base) / 2) var(--pgn-spacing-modal-header-padding-base-x);z-index:1}.studio-header-title{align-items:center;gap:var(--pgn-spacing-spacer-2,8px);display:flex}.studio-header-tabs-nav{flex-wrap:nowrap;padding-right:64px}.studio-header-tabs-nav .nav-link{appearance:none;font-family:inherit;font-size:inherit;line-height:inherit;cursor:pointer;background-color:#0000}.material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}.wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.external-resource-card{padding:var(--pgn-spacing-spacer-4)}.external-resource-card.is-clickable:hover{cursor:pointer;background-color:var(--pgn-color-light-300)}.external-resource-card .card-type,.external-resource-card .card-publisher{color:var(--pgn-color-gray-700);font-family:var(--pgn-typography-headings-font-family,Sora, sans-serif);font-size:var(--pgn-typography-font-size-xs);font-weight:var(--pgn-typography-font-weight-bold);line-height:1.3333}.external-resource-card .card-type{margin-bottom:var(--pgn-spacing-spacer-1)}.external-resource-card .card-publisher{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.external-resource-card .card-title{color:var(--pgn-wgu-color-lake-800,var(--pgn-color-info-700));margin-bottom:var(--pgn-spacing-spacer-1);font-size:var(--pgn-typography-font-size-lg);font-weight:var(--pgn-typography-font-weight-bold);-webkit-line-clamp:2;line-clamp:2;overflow-wrap:anywhere;-webkit-box-orient:vertical;line-height:1.6;display:-webkit-box;overflow:hidden}.external-resource-card .card-thumbnail{width:102px;height:102px}.external-resource-card .pgn__card-body{min-width:0}.external-resource-thumbnail{flex-shrink:0;width:102px;height:102px;overflow:hidden}.external-resource-thumbnail .external-resource-icon-container,.external-resource-thumbnail .external-resource-icon{width:100%;height:100%}.external-resource-thumbnail .external-resource-icon{background-color:var(--pgn-wgu-color-lake-50,var(--pgn-color-light-300));color:var(--pgn-wgu-color-blue-muted,var(--pgn-color-info-400))}.external-resource-thumbnail .external-resource-image{object-fit:cover;width:100%;height:100%;display:block}.content-type-select{max-width:36.5rem;position:relative}.content-type-select .content-type-select-menu{z-index:10;max-height:20rem;margin:var(--pgn-spacing-spacer-1) 0 0;padding:var(--pgn-spacing-spacer-1) 0;background-color:var(--pgn-color-white);border-radius:var(--pgn-size-border-radius-base);list-style:none;position:absolute;top:100%;left:0;right:0;overflow-y:auto;box-shadow:0 2px 8px #00000026}.content-type-select .content-type-select-item{padding:var(--pgn-spacing-spacer-2) var(--pgn-spacing-spacer-3);cursor:pointer;align-items:center;display:flex}.content-type-select .content-type-select-item.is-active{background-color:var(--pgn-color-light-300)}.pgn__form-control-decorator-group.estimated-time-input{flex:none;width:4.25rem}.pgn__form-control-decorator-group.estimated-time-input .form-control{padding-inline:var(--pgn-spacing-spacer-2)}.thumbnail-select{display:inline-block;position:relative}.thumbnail-select .thumbnail-select-popover{z-index:10;width:18rem;margin-top:var(--pgn-spacing-spacer-1);background-color:var(--pgn-color-white);border-radius:var(--pgn-size-border-radius-base);position:absolute;top:100%;left:0;box-shadow:0 2px 8px #00000026}.thumbnail-select .thumbnail-select-popover:focus{outline:none}.thumbnail-select .thumbnail-select-popover .icon-picker,.thumbnail-select .thumbnail-select-popover .thumbnail-select-image{padding:var(--pgn-spacing-spacer-2)}.thumbnail-select .thumbnail-select-popover .thumbnail-select-image{margin-bottom:0}.thumbnail-select .thumbnail-select-popover .icon-list{max-height:15rem;overflow-y:auto}.thumbnail-select .thumbnail-select-popover .icon-symbol{border-radius:var(--pgn-size-border-radius-base);color:var(--pgn-color-primary-500);cursor:pointer;background:0 0;border:0;display:flex}.thumbnail-select .thumbnail-select-popover .icon-symbol:hover,.thumbnail-select .thumbnail-select-popover .icon-symbol:focus,.thumbnail-select .thumbnail-select-popover .icon-symbol.active{background-color:var(--pgn-color-light-300)}.xblock-root{flex-direction:column;flex-grow:1;display:flex}.external-resources-xblock-editor{flex-direction:column;display:flex}.external-resources-xblock-editor .external-resources-editor-body{flex-grow:1}", kb = (e, t, r) => {
	let i = n(t), a = i.parentElement?.parentElement;
	a && (a.style.minHeight = "635px", a.style.maxHeight = "calc(100vh - 51px)", a.style.overflowY = "scroll");
	let o = e.handlerUrl(i, "studio_save");
	we({
		runtime: e,
		element: t,
		config: r.config,
		styles: Ob
	})(/* @__PURE__ */ (0, M.jsx)(yc.Provider, {
		value: r.config,
		children: /* @__PURE__ */ (0, M.jsx)(Db, {
			initialData: r.data,
			onSave: (t) => {
				x({
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
//#endregion
export { kb as renderBlock };
