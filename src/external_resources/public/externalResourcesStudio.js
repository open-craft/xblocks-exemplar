import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, I as c, J as l, K as u, L as d, M as f, N as p, O as m, P as h, Q as g, R as _, S as v, T as y, U as b, V as x, W as S, X as C, Y as ee, Z as te, _ as ne, a as w, b as re, c as T, d as ie, f as ae, g as oe, h as se, i as ce, j as le, k as E, l as ue, m as de, n as fe, o as pe, p as me, q as he, r as ge, s as _e, t as ve, u as ye, v as be, w as xe, x as Se, y as Ce, z as we } from "./ResourceCard-yL-mtVd4.js";
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
var en = /* @__PURE__ */ e(qt()), tn = k.default.oneOfType([k.default.string, k.default.number]), nn = {
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
}, rn = {
	orientation: k.default.oneOf(["portrait", "landscape"]),
	scan: k.default.oneOf(["progressive", "interlace"]),
	aspectRatio: k.default.string,
	deviceAspectRatio: k.default.string,
	height: tn,
	deviceHeight: tn,
	width: tn,
	deviceWidth: tn,
	color: k.default.bool,
	colorIndex: k.default.bool,
	monochrome: k.default.bool,
	resolution: tn,
	type: Object.keys(nn)
}, { type: an, ...on } = rn, sn = {
	minAspectRatio: k.default.string,
	maxAspectRatio: k.default.string,
	minDeviceAspectRatio: k.default.string,
	maxDeviceAspectRatio: k.default.string,
	minHeight: tn,
	maxHeight: tn,
	minDeviceHeight: tn,
	maxDeviceHeight: tn,
	minWidth: tn,
	maxWidth: tn,
	minDeviceWidth: tn,
	maxDeviceWidth: tn,
	minColor: k.default.number,
	maxColor: k.default.number,
	minColorIndex: k.default.number,
	maxColorIndex: k.default.number,
	minMonochrome: k.default.number,
	maxMonochrome: k.default.number,
	minResolution: tn,
	maxResolution: tn,
	...on
}, cn = {
	all: {
		...nn,
		...sn
	},
	types: nn,
	matchers: rn,
	features: sn
}, ln = (e) => `not ${e}`, un = (e, t) => {
	let n = Qt(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? ln(n) : `(${n}: ${t})`;
}, dn = (e) => e.join(" and "), fn = (e) => {
	let t = [];
	return Object.keys(cn.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(un(n, r));
	}), dn(t);
}, pn = (0, D.createContext)(void 0), mn = (e) => e.query || fn(e), hn = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[Qt(n)] = e[n], t), {});
}, gn = () => {
	let e = (0, D.useRef)(!1);
	return (0, D.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, _n = (e) => {
	let t = (0, D.useContext)(pn), n = () => hn(e) || hn(t), [r, i] = (0, D.useState)(n);
	return (0, D.useEffect)(() => {
		let e = n();
		$t(r, e) || i(e);
	}, [e, t]), r;
}, vn = (e) => {
	let t = () => mn(e), [n, r] = (0, D.useState)(t);
	return (0, D.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, yn = (e, t) => {
	let n = () => (0, en.default)(e, t || {}, !!t), [r, i] = (0, D.useState)(n), a = gn();
	return (0, D.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, bn = (e) => {
	let [t, n] = (0, D.useState)(e.matches);
	return (0, D.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, xn = (e, t, n) => {
	let r = _n(t), i = vn(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = yn(i, r), o = bn(a), s = gn();
	return (0, D.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, D.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, Sn = /* @__PURE__ */ D.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /* @__PURE__ */ D.createElement(Fe, {
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
}))), Cn = (e) => /* @__PURE__ */ D.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ D.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), wn = (e) => /* @__PURE__ */ D.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ D.createElement("path", {
	d: "M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",
	fill: "currentColor"
})), Tn = (e) => /* @__PURE__ */ D.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ D.createElement("path", {
	d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
	fill: "currentColor"
})), En = (e) => /* @__PURE__ */ D.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ D.createElement("path", {
	d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06ZM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z",
	fill: "currentColor"
})), Dn = (e) => /* @__PURE__ */ D.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ D.createElement("path", {
	d: "M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z",
	fill: "currentColor"
})), On = /* @__PURE__ */ D.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function kn({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, D.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ D.createElement(On.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var An = "right-scroll-bar-position", jn = "width-before-scroll-bar", Mn = "with-scroll-bars-hidden", Nn = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Pn(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function Fn(e, t) {
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
var In = typeof window < "u" ? D.useLayoutEffect : D.useEffect, Ln = /* @__PURE__ */ new WeakMap();
function Rn(e, t) {
	var n = Fn(t || null, function(t) {
		return e.forEach(function(e) {
			return Pn(e, t);
		});
	});
	return In(function() {
		var t = Ln.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Pn(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Pn(e, a);
			});
		}
		Ln.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function zn(e) {
	return e;
}
function Bn(e, t) {
	t === void 0 && (t = zn);
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
function Vn(e, t) {
	return t === void 0 && (t = zn), Bn(e, t);
}
function Hn(e) {
	e === void 0 && (e = {});
	var t = Bn(null);
	return t.options = u({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var Un = function(e) {
	var t = e.sideCar, n = he(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return D.createElement(r, u({}, n));
};
Un.isSideCarExport = !0;
function Wn(e, t) {
	return e.useMedium(t), Un;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var Gn = Hn(), Kn = function() {}, qn = D.forwardRef(function(e, t) {
	var n = D.useRef(null), r = D.useState({
		onScrollCapture: Kn,
		onWheelCapture: Kn,
		onTouchMoveCapture: Kn
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
	]), S = p, C = Rn([n, t]), ee = u(u({}, x), i);
	return D.createElement(D.Fragment, null, d && D.createElement(S, {
		sideCar: Gn,
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
qn.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, qn.classNames = {
	fullWidth: jn,
	zeroRight: An
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var Jn = "data-focus-lock", Yn = "data-focus-lock-disabled", Xn = "data-no-focus-lock", Zn = "data-autofocus-inside", Qn = "data-no-autofocus", $n = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, er = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: $n
	}), n, n && /* @__PURE__ */ D.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: $n
	}));
};
er.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var tr = Vn({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), nr = Vn(), rr = Vn(), ir = Hn({
	async: !0,
	ssr: typeof document < "u"
}), ar = /* @__PURE__ */ (0, D.createContext)(void 0), or = [], sr = /* @__PURE__ */ (0, D.forwardRef)(function(e, t) {
	var n, r = (0, D.useState)(), i = r[0], a = r[1], o = (0, D.useRef)(), s = (0, D.useRef)(!1), l = (0, D.useRef)(null), u = (0, D.useState)({})[1], d = e.children, f = e.disabled, p = f === void 0 ? !1 : f, m = e.noFocusGuards, h = m === void 0 ? !1 : m, g = e.persistentFocus, _ = g === void 0 ? !1 : g, v = e.crossFrame, y = v === void 0 ? !0 : v, b = e.autoFocus, x = b === void 0 ? !0 : b;
	e.allowTextSelection;
	var S = e.group, C = e.className, ee = e.whiteList, te = e.hasPositiveIndices, ne = e.shards, w = ne === void 0 ? or : ne, re = e.as, T = re === void 0 ? "div" : re, ie = e.lockProps, ae = ie === void 0 ? {} : ie, oe = e.sideCar, se = e.returnFocus, ce = se === void 0 ? !1 : se, le = e.focusOptions, E = e.onActivation, ue = e.onDeactivation, de = (0, D.useState)({})[0], fe = (0, D.useCallback)(function(e) {
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
		s.current && tr.useMedium(e);
	}, []), ge = nr.useMedium, _e = (0, D.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), ve = c((n = {}, n[Yn] = p && "disabled", n[Jn] = S, n), ae), ye = h !== !0, be = ye && h !== "tail", xe = Rn([t, _e]), Se = (0, D.useMemo)(function() {
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
		style: $n
	}), te ? /* @__PURE__ */ D.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: $n
	}) : null], !p && /* @__PURE__ */ D.createElement(oe, {
		id: de,
		sideCar: ir,
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
	}), /* @__PURE__ */ D.createElement(ar.Provider, { value: Se }, d)), be && /* @__PURE__ */ D.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: $n
	}));
});
sr.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function cr(e) {
	setTimeout(e, 1);
}
var lr = function(e) {
	return e && "current" in e ? e.current : e;
}, ur = sr, dr = Hn(), fr = "data-focus-on-hidden", pr = { preventScroll: !0 }, mr = D.forwardRef(function(e, t) {
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
	return D.createElement(D.Fragment, null, D.createElement(ur, {
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
		focusOptions: ne ? pr : void 0,
		as: qn
	}, c), m && D.createElement(ae, u({}, ie, {
		sideCar: dr,
		setLockProps: i,
		shards: d,
		activeNode: o
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function hr(e) {
	"@babel/helpers - typeof";
	return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, hr(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function gr(e, t) {
	if (hr(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (hr(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _r(e) {
	var t = gr(e, "string");
	return hr(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function vr(e, t, n) {
	return (t = _r(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function yr(e, t) {
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
		return vr(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var br = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, xr = function(e) {
	return Array.isArray(e) ? e : [e];
}, Sr = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Cr = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, wr = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, Tr = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, Er = function(e) {
	return e.hasAttribute("inert");
}, Dr = function(e, t) {
	return !e || Tr(e) || !Cr(e) && !Er(e) && t(wr(e));
}, Or = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Dr(t, Or.bind(void 0, e));
	return e.set(t, r), r;
}, kr = function(e, t) {
	return e && !Tr(e) ? Ir(e) ? t(wr(e)) : !1 : !0;
}, Ar = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = kr(t, Ar.bind(void 0, e));
	return e.set(t, r), r;
}, jr = function(e) {
	return e.dataset;
}, Mr = function(e) {
	return e.tagName === "BUTTON";
}, Nr = function(e) {
	return e.tagName === "INPUT";
}, Pr = function(e) {
	return Nr(e) && e.type === "radio";
}, Fr = function(e) {
	return !((Nr(e) || Mr(e)) && (e.type === "hidden" || e.disabled));
}, Ir = function(e) {
	var t = e.getAttribute(Qn);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, Lr = function(e) {
	return !!(e && jr(e)?.focusGuard);
}, Rr = function(e) {
	return !Lr(e);
}, zr = function(e) {
	return !!e;
}, Br = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, Vr = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Hr = function(e, t, n) {
	return br(e).map(function(e, t) {
		var r = Vr(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(Br);
}, Ur = [
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
].join(","), Wr = `${Ur}, [data-focus-guard]`, Gr = function(e, t) {
	return br((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? Wr : Ur) ? [n] : [], Gr(n));
	}, []);
}, Kr = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? qr([e.contentDocument.body], t) : [e];
}, qr = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = Gr(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return Kr(e, t);
		}));
		return e.concat(a, n.parentNode ? br(n.parentNode.querySelectorAll(Ur)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, Jr = function(e) {
	return br(e.querySelectorAll(`[${Zn}]`)).map(function(e) {
		return qr([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, Yr = function(e, t) {
	return br(e).filter(function(e) {
		return Or(t, e);
	}).filter(function(e) {
		return Fr(e);
	});
}, Xr = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), br(e).filter(function(e) {
		return Ar(t, e);
	});
}, Zr = function(e, t, n) {
	return Hr(Yr(qr(e, n), t), !0, n);
}, Qr = function(e, t) {
	return Hr(Yr(qr(e), t), !1);
}, $r = function(e, t) {
	return Yr(Jr(e), t);
}, ei = function(e, t) {
	return e.shadowRoot ? ei(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : br(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? ei(n, t) : !1;
		}
		return ei(e, t);
	});
}, ti = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, ni = function(e) {
	return e.parentNode ? ni(e.parentNode) : e;
}, ri = function(e) {
	return xr(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(Jn);
		return e.push.apply(e, n ? ti(br(ni(t).querySelectorAll(`[${Jn}="${n}"]:not([${Yn}="disabled"])`))) : [t]), e;
	}, []);
}, ii = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, ai = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? ai(t.shadowRoot) : t instanceof HTMLIFrameElement && ii(function() {
			return t.contentWindow.document;
		}) ? ai(t.contentWindow.document) : t;
	}
}, oi = function(e, t) {
	return e === t;
}, si = function(e, t) {
	return !!br(e.querySelectorAll("iframe")).some(function(e) {
		return oi(e, t);
	});
}, ci = function(e, t) {
	return t === void 0 && (t = ai(Sr(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : ri(e).some(function(e) {
		return ei(e, t) || si(e, t);
	});
}, li = function(e) {
	e === void 0 && (e = document);
	var t = ai(e);
	return t ? br(e.querySelectorAll(`[${Xn}]`)).some(function(e) {
		return ei(e, t);
	}) : !1;
}, ui = function(e, t) {
	return t.filter(Pr).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, di = function(e, t) {
	return Pr(e) && e.name ? ui(e, t) : e;
}, fi = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(di(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, pi = function(e) {
	return e[0] && e.length > 1 ? di(e[0], e) : e[0];
}, mi = function(e, t) {
	return e.indexOf(di(t, e));
}, hi = "NEW_FOCUS", gi = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = Lr(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? hi : d;
		if (d === -1) return hi;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = fi(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = mi(e, t[0]), C = mi(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, _i = function(e) {
	return function(t) {
		var n = jr(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, vi = function(e, t, n) {
	var r = Xr(e.map(function(e) {
		return e.node;
	}).filter(_i(n)));
	return r && r.length ? pi(r) : pi(Xr(t));
}, yi = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && yi(e.parentNode.host || e.parentNode, t), t;
}, bi = function(e, t) {
	for (var n = yi(e), r = yi(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, xi = function(e, t, n) {
	var r = xr(e), i = xr(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = bi(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = bi(a, e);
			t && (o = !o || ei(t, o) ? t : bi(t, o));
		});
	}), o;
}, Si = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat($r(n, t));
	}, []);
}, Ci = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(zr);
}, wi = function(e, t) {
	var n = ai(xr(e).length > 0 ? document : Sr(e).ownerDocument), r = ri(e).filter(Rr), i = xi(n || e, e, r), a = /* @__PURE__ */ new Map(), o = Qr(r, a), s = o.filter(function(e) {
		var t = e.node;
		return Rr(t);
	});
	if (s[0]) {
		var c = Qr([i], a).map(function(e) {
			return e.node;
		}), l = Ci(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = gi(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = vi(o, d, Si(r, a)) || vi(o, u, Si(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, Ti = function(e) {
	var t = ri(e).filter(Rr), n = Hr(qr([xi(e, e, t)], !0), !0, !0), r = qr(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: Lr(t)
		};
	});
}, Ei = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Di = 0, Oi = !1, ki = function(e, t, n) {
	n === void 0 && (n = {});
	var r = wi(e, t);
	if (!Oi && r) {
		if (Di > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Oi = !0, setTimeout(function() {
				Oi = !1;
			}, 1);
			return;
		}
		Di++, Ei(r.node, n.focusOptions), Di--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function Ai(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var ji = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: Ai(n),
		parent: Ai(n.parentElement),
		left: Ai(n.previousElementSibling),
		right: Ai(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: Ai(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, Mi = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = Zr([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, Ni = function(e) {
	var t = ji(e);
	return function() {
		return Mi(t);
	};
}, Pi = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = xr(t);
	if (r.every(function(t) {
		return !ei(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? Zr(r, /* @__PURE__ */ new Map()) : Qr(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, Fi = function(e, t) {
	var n = t ? Zr(xr(e), /* @__PURE__ */ new Map()) : Qr(xr(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, Ii = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, Li = function(e, t, n) {
	t === void 0 && (t = {});
	var r = Ii(t), i = Pi(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Ei(a.node, r.focusOptions);
	}
}, Ri = function(e, t) {
	t === void 0 && (t = {}), Li(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, zi = function(e, t) {
	t === void 0 && (t = {}), Li(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, Bi = function(e, t, n) {
	var r = Fi(e, t.onlyTabbable ?? !0)[n];
	r && Ei(r.node, t.focusOptions);
}, Vi = function(e, t) {
	t === void 0 && (t = {}), Bi(e, t, "first");
}, Hi = function(e, t) {
	t === void 0 && (t = {}), Bi(e, t, "last");
}, Ui = function() {
	return document && document.activeElement === document.body;
}, Wi = function() {
	return Ui() || li();
}, Gi = null, Ki = null, qi = function() {
	return null;
}, Ji = null, Yi = !1, Xi = !1, Zi = function() {
	return !0;
}, Qi = function(e) {
	return (Gi.whiteList || Zi)(e);
}, $i = function(e, t) {
	Ji = {
		observerNode: e,
		portaledElement: t
	};
}, ea = function(e) {
	return Ji && Ji.portaledElement === e;
};
function ta(e, t, n, r) {
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
var na = function(e) {
	return e ? !!Yi : Yi === "meanwhile";
}, ra = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, ia = function(e, t) {
	return t.some(function(t) {
		return ra(e, t, t);
	});
}, aa = function(e) {
	return Qr(e, /* @__PURE__ */ new Map());
}, oa = function(e) {
	return !aa([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, sa = function() {
	var e = !1;
	if (Gi) {
		var t = Gi, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || Ji && Ji.portaledElement;
		if (Ui() && Ki && Ki !== document.body && (!document.body.contains(Ki) || oa(Ki))) {
			var u = qi();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(lr).filter(Boolean));
			if ((!d || Qi(d)) && (r || function() {
				if (!na(o) || !c || !Ki || Xi) return !1;
				var e = aa(f), t = e.findIndex(function(e) {
					return e.node === Ki;
				});
				return t === 0 || t === e.length - 1;
			}() || !Wi() || !Ki && i) && (l && !(ci(f) || d && ia(d, f) || ea(d, l)) && (document && !Ki && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = ki(f, Ki, { focusOptions: s }), Ji = {})), Ki = document && document.activeElement, Ki !== document.body && (qi = Ni(Ki)), Yi = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = Ti(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), ta(h, m.length, 1, m), ta(h, -1, -1, m));
			}
		}
	}
	return e;
}, ca = function(e) {
	sa() && e && (e.stopPropagation(), e.preventDefault());
}, la = function() {
	return cr(sa);
}, ua = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || $i(n, t);
}, da = function() {
	return null;
}, fa = function(e) {
	var t = e.children;
	return /* @__PURE__ */ D.createElement("div", {
		onBlur: la,
		onFocus: ua
	}, t);
};
fa.propTypes = {};
var pa = function() {
	Xi = !0;
}, ma = function() {
	Xi = !1, Yi = "just", cr(function() {
		Yi = "meanwhile";
	});
}, ha = function() {
	document.addEventListener("focusin", ca), document.addEventListener("focusout", la), window.addEventListener("focus", pa), window.addEventListener("blur", ma);
}, ga = function() {
	document.removeEventListener("focusin", ca), document.removeEventListener("focusout", la), window.removeEventListener("focus", pa), window.removeEventListener("blur", ma);
};
function _a(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var va = {
	moveFocusInside: ki,
	focusInside: ci,
	focusNextElement: Ri,
	focusPrevElement: zi,
	focusFirstElement: Vi,
	focusLastElement: Hi,
	captureFocusRestore: Ni
};
function ya(e) {
	var t = e.slice(-1)[0];
	t && !Gi && ha();
	var n = Gi, r = n && t && t.id === n.id;
	Gi = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (Ki = null, (!r || n.observed !== t.observed) && t.onActivation(va), sa(!0), cr(sa)) : (ga(), Ki = null);
}
tr.assignSyncMedium(ua), nr.assignMedium(la), rr.assignMedium(function(e) {
	return e(va);
}), Wn(ir, yr(_a, ya)(da));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var ba, xa = function() {
	if (ba) return ba;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Sa() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = xa();
	return t && e.setAttribute("nonce", t), e;
}
function Ca(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function wa(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Ta = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Sa()) && (Ca(t, n), wa(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Ea = function() {
	var e = Ta();
	return function(t, n) {
		D.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Da = function() {
	var e = Ea();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Oa = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, ka = function(e) {
	return parseInt(e || "", 10) || 0;
}, Aa = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		ka(n),
		ka(r),
		ka(i)
	];
}, ja = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Oa;
	var t = Aa(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Ma = Da(), Na = "data-scroll-locked", Pa = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Mn} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Na}] {
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
  
  .${An} {
    right: ${s}px ${r};
  }
  
  .${jn} {
    margin-right: ${s}px ${r};
  }
  
  .${An} .${An} {
    right: 0 ${r};
  }
  
  .${jn} .${jn} {
    margin-right: 0 ${r};
  }
  
  body[${Na}] {
    ${Nn}: ${s}px;
  }
`;
}, Fa = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Ia = function() {
	D.useEffect(function() {
		return document.body.setAttribute(Na, (Fa() + 1).toString()), function() {
			var e = Fa() - 1;
			e <= 0 ? document.body.removeAttribute(Na) : document.body.setAttribute(Na, e.toString());
		};
	}, []);
}, La = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Ia();
	var a = D.useMemo(function() {
		return ja(i);
	}, [i]);
	return D.createElement(Ma, { styles: Pa(a, !t, i, n ? "" : "!important") });
}, Ra = !1;
if (typeof window < "u") try {
	var za = Object.defineProperty({}, "passive", { get: function() {
		return Ra = !0, !0;
	} });
	window.addEventListener("test", za, za), window.removeEventListener("test", za, za);
} catch {
	Ra = !1;
}
var Ba = Ra ? { passive: !1 } : !1, Va = function(e) {
	return e.tagName === "TEXTAREA";
}, Ha = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Va(e) && n[t] === "visible");
}, Ua = function(e) {
	return Ha(e, "overflowY");
}, Wa = function(e) {
	return Ha(e, "overflowX");
}, Ga = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Ja(e, r)) {
			var i = Ya(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Ka = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, qa = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Ja = function(e, t) {
	return e === "v" ? Ua(t) : Wa(t);
}, Ya = function(e, t) {
	return e === "v" ? Ka(t) : qa(t);
}, Xa = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Za = function(e, t, n, r, i) {
	var a = Xa(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Ya(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Ja(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Qa = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, $a = function(e) {
	return [e.deltaX, e.deltaY];
}, eo = function(e) {
	return e && "current" in e ? e.current : e;
}, to = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, no = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, ro = 0, io = [];
function ao(e) {
	var t = D.useRef([]), n = D.useRef([0, 0]), r = D.useRef(), i = D.useState(ro++)[0], a = D.useState(Da)[0], o = D.useRef(e);
	D.useEffect(function() {
		o.current = e;
	}, [e]), D.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = l([e.lockRef.current], (e.shards || []).map(eo), !0).filter(Boolean);
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
		var i = Qa(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Ga(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Ga(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Za(h, t, e, h === "h" ? s : c, !0);
	}, []), c = D.useCallback(function(e) {
		var n = e;
		if (!(!io.length || io[io.length - 1] !== a)) {
			var r = "deltaY" in n ? $a(n) : Qa(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && to(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(eo).filter(Boolean).filter(function(e) {
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
			shadowParent: oo(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = D.useCallback(function(e) {
		n.current = Qa(e), r.current = void 0;
	}, []), f = D.useCallback(function(t) {
		u(t.type, $a(t), t.target, s(t, e.lockRef.current));
	}, []), p = D.useCallback(function(t) {
		u(t.type, Qa(t), t.target, s(t, e.lockRef.current));
	}, []);
	D.useEffect(function() {
		return io.push(a), e.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", c, Ba), document.addEventListener("touchmove", c, Ba), document.addEventListener("touchstart", d, Ba), function() {
			io = io.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, Ba), document.removeEventListener("touchmove", c, Ba), document.removeEventListener("touchstart", d, Ba);
		};
	}, []);
	var m = e.removeScrollBar, h = e.inert;
	return D.createElement(D.Fragment, null, h ? D.createElement(a, { styles: no(i) }) : null, m ? D.createElement(La, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function oo(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
Wn(Gn, ao);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var so = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, co = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap(), uo = {}, fo = 0, po = function(e) {
	return e && (e.host || po(e.parentNode));
}, mo = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = po(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, ho = function(e, t, n, r) {
	var i = mo(t, Array.isArray(e) ? e : [e]);
	uo[n] || (uo[n] = /* @__PURE__ */ new WeakMap());
	var a = uo[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (co.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				co.set(e, c), a.set(e, l), o.push(e), c === 1 && i && lo.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), fo++, function() {
		o.forEach(function(e) {
			var t = co.get(e) - 1, i = a.get(e) - 1;
			co.set(e, t), a.set(e, i), t || (lo.has(e) || e.removeAttribute(r), lo.delete(e)), i || e.removeAttribute(n);
		}), fo--, fo || (co = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap(), uo = {});
	};
}, go = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || so(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), ho(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, _o = Da(), vo = "\n [" + fr + "] {\n   pointer-events: none !important;\n }\n", yo = function() {
	return D.createElement(_o, { styles: vo });
}, bo = function(e) {
	return "current" in e ? e.current : e;
};
function xo(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, D.useRef)(null), u = (0, D.useRef)(0);
	return D.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(bo).some(function(t) {
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
		if (!(s || !c)) return go(ee([c], (i || []).map(bo)), c.ownerDocument.body, fr);
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
	}, []), D.createElement(yo, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var So = Wn(dr, xo), Co = function(e) {
	return D.createElement(So, u({}, e));
}, wo = D.forwardRef(function(e, t) {
	return D.createElement(mr, u({}, e, {
		ref: t,
		sideCar: Co
	}));
}), To = /* @__PURE__ */ e(C()), Eo = class extends D.Component {
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
		return this.rootElement ? /* @__PURE__ */ To.createPortal(this.props.children, this.rootElement) : null;
	}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function Do({ onClick: e }) {
	return /* @__PURE__ */ D.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Oo({ children: e = null }) {
	return /* @__PURE__ */ D.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function ko({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, D.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /* @__PURE__ */ D.createElement(kn, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /* @__PURE__ */ D.createElement(Eo, null, /* @__PURE__ */ D.createElement(wo, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, O.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /* @__PURE__ */ D.createElement(Oo, null, /* @__PURE__ */ D.createElement(Do, { onClick: a }), e))));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var Ao = /* @__PURE__ */ D.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, D.useContext)(On), a = e, o = {
		...n,
		className: (0, O.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /* @__PURE__ */ D.createElement(a, o, t);
});
Ao.propTypes = {
	as: k.default.elementType,
	children: k.default.node,
	className: k.default.string,
	onClick: k.default.func
}, Ao.defaultProps = {
	as: Sn,
	onClick: void 0,
	className: void 0,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var jo = /* @__PURE__ */ D.forwardRef(({ as: e = "div", children: t, ...n }, r) => /* @__PURE__ */ D.createElement(e, {
	...n,
	ref: r,
	className: (0, O.default)("pgn__modal-header", n.className)
}, t));
jo.propTypes = {
	as: k.default.elementType,
	children: k.default.node.isRequired,
	className: k.default.string
}, jo.defaultProps = {
	as: "div",
	className: ""
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function Mo({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ D.createElement(e, {
		...n,
		className: (0, O.default)("pgn__modal-title", n.className)
	}, t);
}
Mo.propTypes = {
	as: k.default.elementType,
	children: k.default.node.isRequired,
	className: k.default.string
}, Mo.defaultProps = {
	as: "h2",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function No({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ D.createElement(e, {
		...n,
		className: (0, O.default)("pgn__modal-footer", n.className)
	}, t);
}
No.propTypes = {
	as: k.default.elementType,
	children: k.default.node.isRequired,
	className: k.default.string
}, No.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
var Po = (e = !0) => {
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
function Fo({ as: e, children: t, ...n }) {
	let [r, i] = Po(), [a, o] = Po(), s = (0, O.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /* @__PURE__ */ D.createElement(e, {
		...n,
		className: s
	}, /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("div", { ref: i }), /* @__PURE__ */ D.createElement("div", { className: "pgn__modal-body-content" }, t), /* @__PURE__ */ D.createElement("div", { ref: o })));
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
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function Io({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ D.createElement(e, {
		...n,
		className: (0, O.default)("pgn__modal-hero-content", n.className)
	}, t);
}
Io.propTypes = {
	as: k.default.elementType,
	children: k.default.node.isRequired,
	className: k.default.string
}, Io.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function Lo({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /* @__PURE__ */ D.createElement(e, {
		...r,
		className: (0, O.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
Lo.propTypes = {
	as: k.default.elementType,
	backgroundSrc: k.default.string,
	children: k.default.node,
	className: k.default.string,
	style: k.default.shape({})
}, Lo.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function Ro({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ D.createElement(e, {
		...n,
		className: (0, O.default)("pgn__modal-hero", n.className)
	}, t);
}
Ro.propTypes = {
	as: k.default.elementType,
	children: k.default.node.isRequired,
	className: k.default.string
}, Ro.defaultProps = {
	as: "div",
	className: void 0
}, Ro.Content = Io, Ro.Background = Lo;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/messages.js
var zo = S({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function A({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: c, isFullscreenScroll: l = !1, className: u, isFullscreenOnMobile: d = !1, isBlocking: f = !1, zIndex: p, isOverflowVisible: m }) {
	let h = s(), g = c || h.formatMessage(zo.closeButtonText), _ = xn({ query: "(max-width: 767.98px)" }), v = d && _;
	return /* @__PURE__ */ D.createElement(ko, {
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
	}, o && /* @__PURE__ */ D.createElement("div", { className: "pgn__modal-close-container" }, /* @__PURE__ */ D.createElement(Ao, {
		as: ye,
		iconAs: de,
		invertColors: a === "dark",
		src: me,
		alt: g
	})), e));
}
A.Header = jo, A.Title = Mo, A.Footer = No, A.CloseButton = Ao, A.Body = Fo, A.Hero = Ro;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useToggleHook.js
function Bo(e = !1, t = {}) {
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
var Vo = "Close";
function Ho({ children: e, footerNode: t, beforeBodyNode: n, afterBodyNode: r, ...i }) {
	return /* @__PURE__ */ D.createElement(A, { ...i }, /* @__PURE__ */ D.createElement(A.Header, null, /* @__PURE__ */ D.createElement(A.Title, null, i.title)), n, /* @__PURE__ */ D.createElement(A.Body, null, e), r, t && /* @__PURE__ */ D.createElement(A.Footer, null, t));
}
Ho.propTypes = {
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
}, Ho.defaultProps = {
	isOpen: !1,
	hasCloseButton: !0,
	size: "md",
	variant: "default",
	closeLabel: Vo,
	className: void 0,
	isFullscreenScroll: !1,
	footerNode: null,
	beforeBodyNode: null,
	afterBodyNode: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/AlertModal.js
function Uo({ children: e, footerNode: t, icon: n, ...r }) {
	return /* @__PURE__ */ D.createElement(A, {
		...r,
		className: (0, O.default)("pgn__alert-modal", r.className)
	}, /* @__PURE__ */ D.createElement(A.Header, null, /* @__PURE__ */ D.createElement(A.Title, null, n && /* @__PURE__ */ D.createElement(de, {
		"data-testid": "title-icon",
		src: n,
		className: (0, O.default)("pgn__alert-modal__title_icon")
	}), r.title)), /* @__PURE__ */ D.createElement(A.Body, null, e), t && /* @__PURE__ */ D.createElement(A.Footer, null, t));
}
Uo.propTypes = {
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
}, Uo.defaultProps = {
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
function Wo(e) {
	return /* @__PURE__ */ D.createElement(It, { ...e });
}
function Go(e) {
	return /* @__PURE__ */ D.createElement(At, { ...e });
}
function Ko(e) {
	return /* @__PURE__ */ D.createElement(Nt, { ...e });
}
function qo(e) {
	return /* @__PURE__ */ D.createElement(Rt, { ...e });
}
function Jo(e) {
	return /* @__PURE__ */ D.createElement(Rt.Item, { ...e });
}
function Yo(e) {
	return /* @__PURE__ */ D.createElement(Rt.Divider, { ...e });
}
Wo.propTypes = {
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
}, Go.propTypes = {
	role: k.default.string,
	as: k.default.elementType,
	bsPrefix: k.default.string
}, Ko.propTypes = {
	onSelect: k.default.string,
	active: k.default.bool,
	as: k.default.elementType,
	disabled: k.default.bool,
	eventKey: k.default.oneOfType([k.default.string, k.default.number]),
	href: k.default.string,
	role: k.default.string,
	bsPrefix: k.default.string
}, qo.propTypes = {
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
}, Wo.defaultProps = { ...It.defaultProps }, qo.defaultProps = { ...Rt.defaultProps }, Go.defaultProps = { ...At.defaultProps }, Ko.defaultProps = { ...Nt.defaultProps }, Wo.Item = Go, Wo.Link = Ko, qo.Item = Jo, qo.Divider = Yo;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Sticky/index.js
var Xo = ["top", "bottom"], Zo = /* @__PURE__ */ D.forwardRef(({ position: e, children: t, offset: n, className: r, ...i }, a) => {
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
Zo.propTypes = {
	children: k.default.node.isRequired,
	position: k.default.oneOf(Xo),
	offset: k.default.oneOfType([k.default.number, k.default.string]),
	className: k.default.string
}, Zo.defaultProps = {
	position: "top",
	offset: void 0,
	className: void 0
};
//#endregion
//#region src/external-resources/studio-ui/components/ContentTypeSelect.tsx
var j = b(), Qo = Object.entries(ce), $o = (e) => Qo.find(([, t]) => t.toLowerCase() === e.toLowerCase())?.[0], es = ({ fileType: e, customFileType: t, onChange: n }) => {
	let r = (0, D.useId)(), i = (0, D.useRef)(null), [a, o] = (0, D.useState)(!1), [s, c] = (0, D.useState)(null), [l, u] = (0, D.useState)(-1), d = e === w.CUSTOM ? t : ce[e], f = (s ?? "").trim(), p = Qo.filter(([, e]) => e.toLowerCase().includes(f.toLowerCase())).map(([e, t]) => ({
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
			let e = $o(f);
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
	return /* @__PURE__ */ (0, j.jsxs)("div", {
		className: "content-type-select",
		onBlur: y,
		children: [/* @__PURE__ */ (0, j.jsx)(T.Control, {
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
			onClick: () => !a && h(),
			onKeyDown: v,
			trailingElement: /* @__PURE__ */ (0, j.jsx)(ye, {
				src: a ? ie : ae,
				iconAs: de,
				size: "sm",
				variant: "secondary",
				alt: a ? "Close content types" : "Open content types",
				tabIndex: -1,
				onMouseDown: (e) => e.preventDefault(),
				onClick: b
			})
		}), a && p.length > 0 && /* @__PURE__ */ (0, j.jsx)("ul", {
			id: r,
			role: "listbox",
			className: "content-type-select-menu",
			onMouseDown: (e) => e.preventDefault(),
			children: p.map((e, t) => /* @__PURE__ */ (0, j.jsx)("li", {
				id: x(t),
				role: "option",
				"aria-selected": t === l,
				className: `content-type-select-item ${t === l ? "is-active" : ""}`,
				onMouseEnter: () => u(t),
				onClick: () => g(e),
				children: e.kind === "create" ? /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: [
					/* @__PURE__ */ (0, j.jsx)(de, {
						src: Cn,
						size: "sm",
						className: "mr-2"
					}),
					"Create \"",
					/* @__PURE__ */ (0, j.jsx)("strong", { children: e.label }),
					"\""
				] }) : e.label
			}, e.kind === "option" ? e.fileType : "create"))
		})]
	});
};
//#endregion
//#region node_modules/.pnpm/fuse.js@7.1.0/node_modules/fuse.js/dist/fuse.mjs
function ts(e) {
	return Array.isArray ? Array.isArray(e) : fs(e) === "[object Array]";
}
var ns = Infinity;
function rs(e) {
	if (typeof e == "string") return e;
	let t = e + "";
	return t == "0" && 1 / e == -ns ? "-0" : t;
}
function is(e) {
	return e == null ? "" : rs(e);
}
function as(e) {
	return typeof e == "string";
}
function os(e) {
	return typeof e == "number";
}
function ss(e) {
	return e === !0 || e === !1 || ls(e) && fs(e) == "[object Boolean]";
}
function cs(e) {
	return typeof e == "object";
}
function ls(e) {
	return cs(e) && e !== null;
}
function us(e) {
	return e != null;
}
function ds(e) {
	return !e.trim().length;
}
function fs(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var ps = "Incorrect 'index' type", ms = (e) => `Invalid value for key ${e}`, hs = (e) => `Pattern length exceeds max of ${e}.`, gs = (e) => `Missing ${e} property in key`, _s = (e) => `Property 'weight' in key '${e}' must be a positive integer`, vs = Object.prototype.hasOwnProperty, ys = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = bs(e);
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
function bs(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (as(e) || ts(e)) r = e, t = xs(e), n = Ss(e);
	else {
		if (!vs.call(e, "name")) throw Error(gs("name"));
		let o = e.name;
		if (r = o, vs.call(e, "weight") && (i = e.weight, i <= 0)) throw Error(_s(o));
		t = xs(o), n = Ss(o), a = e.getFn;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function xs(e) {
	return ts(e) ? e : e.split(".");
}
function Ss(e) {
	return ts(e) ? e.join(".") : e;
}
function Cs(e, t) {
	let n = [], r = !1, i = (e, t, a) => {
		if (us(e)) if (!t[a]) n.push(e);
		else {
			let o = e[t[a]];
			if (!us(o)) return;
			if (a === t.length - 1 && (as(o) || os(o) || ss(o))) n.push(is(o));
			else if (ts(o)) {
				r = !0;
				for (let e = 0, n = o.length; e < n; e += 1) i(o[e], t, a + 1);
			} else t.length && i(o, t, a + 1);
		}
	};
	return i(e, as(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var ws = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, Ts = {
	isCaseSensitive: !1,
	ignoreDiacritics: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, Es = {
	location: 0,
	threshold: .6,
	distance: 100
}, Ds = {
	useExtendedSearch: !1,
	getFn: Cs,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, M = {
	...Ts,
	...ws,
	...Es,
	...Ds
}, Os = /[^ ]+/g;
function ks(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = t.match(Os).length;
			if (n.has(i)) return n.get(i);
			let a = 1 / i ** (.5 * e), o = parseFloat(Math.round(a * r) / r);
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var As = class {
	constructor({ getFn: e = M.getFn, fieldNormWeight: t = M.fieldNormWeight } = {}) {
		this.norm = ks(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
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
		this.isCreated || !this.docs.length || (this.isCreated = !0, as(this.docs[0]) ? this.docs.forEach((e, t) => {
			this._addString(e, t);
		}) : this.docs.forEach((e, t) => {
			this._addObject(e, t);
		}), this.norm.clear());
	}
	add(e) {
		let t = this.size();
		as(e) ? this._addString(e, t) : this._addObject(e, t);
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
		if (!us(e) || ds(e)) return;
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
			if (us(i)) {
				if (ts(i)) {
					let e = [], t = [{
						nestedArrIndex: -1,
						value: i
					}];
					for (; t.length;) {
						let { nestedArrIndex: n, value: r } = t.pop();
						if (us(r)) if (as(r) && !ds(r)) {
							let t = {
								v: r,
								i: n,
								n: this.norm.get(r)
							};
							e.push(t);
						} else ts(r) && r.forEach((e, n) => {
							t.push({
								nestedArrIndex: n,
								value: e
							});
						});
					}
					n.$[r] = e;
				} else if (as(i) && !ds(i)) {
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
function js(e, t, { getFn: n = M.getFn, fieldNormWeight: r = M.fieldNormWeight } = {}) {
	let i = new As({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(bs)), i.setSources(t), i.create(), i;
}
function Ms(e, { getFn: t = M.getFn, fieldNormWeight: n = M.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new As({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function Ns(e, { errors: t = 0, currentLocation: n = 0, expectedLocation: r = 0, distance: i = M.distance, ignoreLocation: a = M.ignoreLocation } = {}) {
	let o = t / e.length;
	if (a) return o;
	let s = Math.abs(r - n);
	return i ? o + s / i : s ? 1 : o;
}
function Ps(e = [], t = M.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
var Fs = 32;
function Is(e, t, n, { location: r = M.location, distance: i = M.distance, threshold: a = M.threshold, findAllMatches: o = M.findAllMatches, minMatchCharLength: s = M.minMatchCharLength, includeMatches: c = M.includeMatches, ignoreLocation: l = M.ignoreLocation } = {}) {
	if (t.length > Fs) throw Error(hs(Fs));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = s > 1 || c, g = h ? Array(d) : [], _;
	for (; (_ = e.indexOf(t, m)) > -1;) {
		let e = Ns(t, {
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
		for (; a < s;) Ns(t, {
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
			if (h && (g[o] = +!!s), S[a] = (S[a + 1] << 1 | 1) & s, r && (S[a] |= (v[a + 1] | v[a]) << 1 | 1 | v[a + 1]), S[a] & x && (y = Ns(t, {
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
		if (Ns(t, {
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
		let e = Ps(g, s);
		e.length ? c && (S.indices = e) : S.isMatch = !1;
	}
	return S;
}
function Ls(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
var Rs = String.prototype.normalize ? ((e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((e) => e), zs = class {
	constructor(e, { location: t = M.location, threshold: n = M.threshold, distance: r = M.distance, includeMatches: i = M.includeMatches, findAllMatches: a = M.findAllMatches, minMatchCharLength: o = M.minMatchCharLength, isCaseSensitive: s = M.isCaseSensitive, ignoreDiacritics: c = M.ignoreDiacritics, ignoreLocation: l = M.ignoreLocation } = {}) {
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
				alphabet: Ls(e),
				startIndex: t
			});
		}, d = this.pattern.length;
		if (d > Fs) {
			let e = 0, t = d % Fs, n = d - t;
			for (; e < n;) u(this.pattern.substr(e, Fs), e), e += Fs;
			if (t) {
				let e = d - Fs;
				u(this.pattern.substr(e), e);
			}
		} else u(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, ignoreDiacritics: n, includeMatches: r } = this.options;
		if (e = t ? e : e.toLowerCase(), e = n ? Rs(e) : e, this.pattern === e) {
			let t = {
				isMatch: !0,
				score: 0
			};
			return r && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: i, distance: a, threshold: o, findAllMatches: s, minMatchCharLength: c, ignoreLocation: l } = this.options, u = [], d = 0, f = !1;
		this.chunks.forEach(({ pattern: t, alphabet: n, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = Is(e, t, n, {
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
}, Bs = class {
	constructor(e) {
		this.pattern = e;
	}
	static isMultiMatch(e) {
		return Vs(e, this.multiRegex);
	}
	static isSingleMatch(e) {
		return Vs(e, this.singleRegex);
	}
	search() {}
};
function Vs(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
var Hs = class extends Bs {
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
}, Us = class extends Bs {
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
}, Ws = class extends Bs {
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
}, Gs = class extends Bs {
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
}, Ks = class extends Bs {
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
}, qs = class extends Bs {
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
}, Js = class extends Bs {
	constructor(e, { location: t = M.location, threshold: n = M.threshold, distance: r = M.distance, includeMatches: i = M.includeMatches, findAllMatches: a = M.findAllMatches, minMatchCharLength: o = M.minMatchCharLength, isCaseSensitive: s = M.isCaseSensitive, ignoreDiacritics: c = M.ignoreDiacritics, ignoreLocation: l = M.ignoreLocation } = {}) {
		super(e), this._bitapSearch = new zs(e, {
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
}, Ys = class extends Bs {
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
}, Xs = [
	Hs,
	Ys,
	Ws,
	Gs,
	qs,
	Ks,
	Us,
	Js
], Zs = Xs.length, Qs = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, $s = "|";
function ec(e, t = {}) {
	return e.split($s).map((e) => {
		let n = e.trim().split(Qs).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < Zs;) {
				let e = Xs[o], n = e.isMultiMatch(i);
				n && (r.push(new e(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < Zs;) {
				let e = Xs[o], n = e.isSingleMatch(i);
				if (n) {
					r.push(new e(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var tc = new Set([Js.type, Ys.type]), nc = class {
	constructor(e, { isCaseSensitive: t = M.isCaseSensitive, ignoreDiacritics: n = M.ignoreDiacritics, includeMatches: r = M.includeMatches, minMatchCharLength: i = M.minMatchCharLength, ignoreLocation: a = M.ignoreLocation, findAllMatches: o = M.findAllMatches, location: s = M.location, threshold: c = M.threshold, distance: l = M.distance } = {}) {
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
		}, e = t ? e : e.toLowerCase(), e = n ? Rs(e) : e, this.pattern = e, this.query = ec(this.pattern, this.options);
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
		let a = 0, o = [], s = 0;
		for (let r = 0, i = t.length; r < i; r += 1) {
			let i = t[r];
			o.length = 0, a = 0;
			for (let t = 0, r = i.length; t < r; t += 1) {
				let r = i[t], { isMatch: c, indices: l, score: u } = r.search(e);
				if (c) {
					if (a += 1, s += u, n) {
						let e = r.constructor.type;
						tc.has(e) ? o = [...o, ...l] : o.push(l);
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
}, rc = [];
function ic(...e) {
	rc.push(...e);
}
function ac(e, t) {
	for (let n = 0, r = rc.length; n < r; n += 1) {
		let r = rc[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new zs(e, t);
}
var oc = {
	AND: "$and",
	OR: "$or"
}, sc = {
	PATH: "$path",
	PATTERN: "$val"
}, cc = (e) => !!(e[oc.AND] || e[oc.OR]), lc = (e) => !!e[sc.PATH], uc = (e) => !ts(e) && cs(e) && !cc(e), dc = (e) => ({ [oc.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function fc(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		let i = Object.keys(e), a = lc(e);
		if (!a && i.length > 1 && !cc(e)) return r(dc(e));
		if (uc(e)) {
			let r = a ? e[sc.PATH] : i[0], o = a ? e[sc.PATTERN] : e[r];
			if (!as(o)) throw Error(ms(r));
			let s = {
				keyId: Ss(r),
				pattern: o
			};
			return n && (s.searcher = ac(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			ts(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return cc(e) || (e = dc(e)), r(e);
}
function pc(e, { ignoreFieldNorm: t = M.ignoreFieldNorm }) {
	e.forEach((e) => {
		let n = 1;
		e.matches.forEach(({ key: e, norm: r, score: i }) => {
			let a = e ? e.weight : null;
			n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
		}), e.score = n;
	});
}
function mc(e, t) {
	let n = e.matches;
	t.matches = [], us(n) && n.forEach((e) => {
		if (!us(e.indices) || !e.indices.length) return;
		let { indices: n, value: r } = e, i = {
			indices: n,
			value: r
		};
		e.key && (i.key = e.key.src), e.idx > -1 && (i.refIndex = e.idx), t.matches.push(i);
	});
}
function hc(e, t) {
	t.score = e.score;
}
function gc(e, t, { includeMatches: n = M.includeMatches, includeScore: r = M.includeScore } = {}) {
	let i = [];
	return n && i.push(mc), r && i.push(hc), e.map((e) => {
		let { idx: n } = e, r = {
			item: t[n],
			refIndex: n
		};
		return i.length && i.forEach((t) => {
			t(e, r);
		}), r;
	});
}
var _c = class {
	constructor(e, t = {}, n) {
		this.options = {
			...M,
			...t
		}, this.options.useExtendedSearch, this._keyStore = new ys(this.options.keys), this.setCollection(e, n);
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof As)) throw Error(ps);
		this._myIndex = t || js(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		});
	}
	add(e) {
		us(e) && (this._docs.push(e), this._myIndex.add(e));
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
		let { includeMatches: n, includeScore: r, shouldSort: i, sortFn: a, ignoreFieldNorm: o } = this.options, s = as(e) ? as(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
		return pc(s, { ignoreFieldNorm: o }), i && s.sort(a), os(t) && t > -1 && (s = s.slice(0, t)), gc(s, this._docs, {
			includeMatches: n,
			includeScore: r
		});
	}
	_searchStringList(e) {
		let t = ac(e, this.options), { records: n } = this._myIndex, r = [];
		return n.forEach(({ v: e, i: n, n: i }) => {
			if (!us(e)) return;
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
		let t = fc(e, this.options), n = (e, t, r) => {
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
				else if (e.operator === oc.AND) return [];
			}
			return i;
		}, r = this._myIndex.records, i = {}, a = [];
		return r.forEach(({ $: e, i: r }) => {
			if (us(e)) {
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
		let t = ac(e, this.options), { keys: n, records: r } = this._myIndex, i = [];
		return r.forEach(({ $: e, i: r }) => {
			if (!us(e)) return;
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
		if (!us(t)) return [];
		let r = [];
		if (ts(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!us(t)) return;
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
_c.version = "7.1.0", _c.createIndex = js, _c.parseIndex = Ms, _c.config = M, _c.parseQuery = fc, ic(nc);
//#endregion
//#region src/shared/components/IconPicker/index.tsx
var vc = new _c(/* @__PURE__ */ "10k.10mp.11mp.123.12mp.13mp.14mp.15mp.16mp.17mp.18_up_rating.18mp.19mp.1k.1k_plus.1x_mobiledata.20mp.21mp.22mp.23mp.24mp.2k.2k_plus.2mp.30fps.30fps_select.360.3d_rotation.3g_mobiledata.3k.3k_plus.3mp.3p.4g_mobiledata.4g_plus_mobiledata.4k.4k_plus.4mp.5g.5k.5k_plus.5mp.60fps.60fps_select.6_ft_apart.6k.6k_plus.6mp.7k.7k_plus.7mp.8k.8k_plus.8mp.9k.9k_plus.9mp.abc.ac_unit.access_alarm.access_alarms.access_time.access_time_filled.accessibility.accessibility_new.accessible.accessible_forward.account_balance.account_balance_wallet.account_box.account_circle.account_tree.ad_units.adb.add.add_a_photo.add_alarm.add_alert.add_box.add_business.add_card.add_chart.add_circle.add_circle_outline.add_comment.add_home.add_home_work.add_ic_call.add_link.add_location.add_location_alt.add_moderator.add_photo_alternate.add_reaction.add_road.add_shopping_cart.add_task.add_to_drive.add_to_home_screen.add_to_photos.add_to_queue.addchart.adf_scanner.adjust.admin_panel_settings.ads_click.agriculture.air.airline_seat_flat.airline_seat_flat_angled.airline_seat_individual_suite.airline_seat_legroom_extra.airline_seat_legroom_normal.airline_seat_legroom_reduced.airline_seat_recline_extra.airline_seat_recline_normal.airline_stops.airlines.airplane_ticket.airplanemode_active.airplanemode_inactive.airplay.airport_shuttle.alarm.alarm_add.alarm_off.alarm_on.album.align_horizontal_center.align_horizontal_left.align_horizontal_right.align_vertical_bottom.align_vertical_center.align_vertical_top.all_inbox.all_inclusive.all_out.alt_route.alternate_email.analytics.anchor.android.animation.announcement.aod.apartment.api.app_blocking.app_registration.app_settings_alt.app_shortcut.approval.apps.apps_outage.architecture.archive.area_chart.arrow_back.arrow_back_ios.arrow_back_ios_new.arrow_circle_down.arrow_circle_left.arrow_circle_right.arrow_circle_up.arrow_downward.arrow_drop_down.arrow_drop_down_circle.arrow_drop_up.arrow_forward.arrow_forward_ios.arrow_left.arrow_outward.arrow_right.arrow_right_alt.arrow_upward.art_track.article.aspect_ratio.assessment.assignment.assignment_ind.assignment_late.assignment_return.assignment_returned.assignment_turned_in.assist_walker.assistant.assistant_direction.assistant_photo.assured_workload.atm.attach_email.attach_file.attach_money.attachment.attractions.attribution.audio_file.audiotrack.auto_awesome.auto_awesome_mosaic.auto_awesome_motion.auto_delete.auto_fix_high.auto_fix_normal.auto_fix_off.auto_graph.auto_mode.auto_stories.autofps_select.autorenew.av_timer.baby_changing_station.back_hand.backpack.backspace.backup.backup_table.badge.bakery_dining.balance.balcony.ballot.bar_chart.batch_prediction.bathroom.bathtub.battery_0_bar.battery_1_bar.battery_2_bar.battery_3_bar.battery_4_bar.battery_5_bar.battery_6_bar.battery_alert.battery_charging_full.battery_full.battery_saver.battery_std.battery_unknown.beach_access.bed.bedroom_baby.bedroom_child.bedroom_parent.bedtime.bedtime_off.beenhere.bento.bike_scooter.biotech.blender.blind.blinds.blinds_closed.block.bloodtype.bluetooth.bluetooth_audio.bluetooth_connected.bluetooth_disabled.bluetooth_drive.bluetooth_searching.blur_circular.blur_linear.blur_off.blur_on.bolt.book.book_online.bookmark.bookmark_add.bookmark_added.bookmark_border.bookmark_remove.bookmarks.border_all.border_bottom.border_clear.border_color.border_horizontal.border_inner.border_left.border_outer.border_right.border_style.border_top.border_vertical.boy.branding_watermark.breakfast_dining.brightness_1.brightness_2.brightness_3.brightness_4.brightness_5.brightness_6.brightness_7.brightness_auto.brightness_high.brightness_low.brightness_medium.broadcast_on_home.broadcast_on_personal.broken_image.browse_gallery.browser_not_supported.browser_updated.brunch_dining.brush.bubble_chart.bug_report.build.build_circle.bungalow.burst_mode.bus_alert.business.business_center.cabin.cable.cached.cake.calculate.calendar_month.calendar_today.calendar_view_day.calendar_view_month.calendar_view_week.call.call_end.call_made.call_merge.call_missed.call_missed_outgoing.call_received.call_split.call_to_action.camera.camera_alt.camera_enhance.camera_front.camera_indoor.camera_outdoor.camera_rear.camera_roll.cameraswitch.campaign.cancel.cancel_presentation.cancel_schedule_send.candlestick_chart.car_crash.car_rental.car_repair.card_giftcard.card_membership.card_travel.carpenter.cases.casino.cast.cast_connected.cast_for_education.castle.catching_pokemon.category.celebration.cell_tower.cell_wifi.center_focus_strong.center_focus_weak.chair.chair_alt.chalet.change_circle.change_history.charging_station.chat.chat_bubble.chat_bubble_outline.check.check_box.check_box_outline_blank.check_circle.check_circle_outline.checklist.checklist_rtl.checkroom.chevron_left.chevron_right.child_care.child_friendly.chrome_reader_mode.church.circle.circle_notifications.class.clean_hands.cleaning_services.clear.clear_all.close.close_fullscreen.closed_caption.closed_caption_disabled.closed_caption_off.cloud.cloud_circle.cloud_done.cloud_download.cloud_off.cloud_queue.cloud_sync.cloud_upload.co2.co_present.code.code_off.coffee.coffee_maker.collections.collections_bookmark.color_lens.colorize.comment.comment_bank.comments_disabled.commit.commute.compare.compare_arrows.compass_calibration.compost.compress.computer.confirmation_number.connect_without_contact.connected_tv.connecting_airports.construction.contact_emergency.contact_mail.contact_page.contact_phone.contact_support.contactless.contacts.content_copy.content_cut.content_paste.content_paste_go.content_paste_off.content_paste_search.contrast.control_camera.control_point.control_point_duplicate.cookie.copy_all.copyright.coronavirus.corporate_fare.cottage.countertops.create.create_new_folder.credit_card.credit_card_off.credit_score.crib.crisis_alert.crop.crop_16_9.crop_3_2.crop_5_4.crop_7_5.crop_din.crop_free.crop_landscape.crop_original.crop_portrait.crop_rotate.crop_square.cruelty_free.css.currency_bitcoin.currency_exchange.currency_franc.currency_lira.currency_pound.currency_ruble.currency_rupee.currency_yen.currency_yuan.curtains.curtains_closed.cyclone.dangerous.dark_mode.dashboard.dashboard_customize.data_array.data_exploration.data_object.data_saver_off.data_saver_on.data_thresholding.data_usage.dataset.dataset_linked.date_range.deblur.deck.dehaze.delete.delete_forever.delete_outline.delete_sweep.delivery_dining.density_large.density_medium.density_small.departure_board.description.deselect.design_services.desk.desktop_access_disabled.desktop_mac.desktop_windows.details.developer_board.developer_board_off.developer_mode.device_hub.device_thermostat.device_unknown.devices.devices_fold.devices_other.dialer_sip.dialpad.diamond.difference.dining.dinner_dining.directions.directions_bike.directions_boat.directions_boat_filled.directions_bus.directions_bus_filled.directions_car.directions_car_filled.directions_off.directions_railway.directions_railway_filled.directions_run.directions_subway.directions_subway_filled.directions_transit.directions_transit_filled.directions_walk.dirty_lens.disabled_by_default.disabled_visible.disc_full.discount.display_settings.diversity_1.diversity_2.diversity_3.dns.do_disturb.do_disturb_alt.do_disturb_off.do_disturb_on.do_not_disturb.do_not_disturb_alt.do_not_disturb_off.do_not_disturb_on.do_not_disturb_on_total_silence.do_not_step.do_not_touch.dock.document_scanner.domain.domain_add.domain_disabled.domain_verification.done.done_all.done_outline.donut_large.donut_small.door_back.door_front.door_sliding.doorbell.double_arrow.downhill_skiing.download.download_done.download_for_offline.downloading.drafts.drag_handle.drag_indicator.draw.drive_eta.drive_file_move.drive_file_move_rtl.drive_file_rename_outline.drive_folder_upload.dry.dry_cleaning.duo.dvr.dynamic_feed.dynamic_form.e_mobiledata.earbuds.earbuds_battery.east.edgesensor_high.edgesensor_low.edit.edit_attributes.edit_calendar.edit_location.edit_location_alt.edit_note.edit_notifications.edit_off.edit_road.egg.egg_alt.eject.elderly.elderly_woman.electric_bike.electric_bolt.electric_car.electric_meter.electric_moped.electric_rickshaw.electric_scooter.electrical_services.elevator.email.emergency.emergency_recording.emergency_share.emoji_emotions.emoji_events.emoji_food_beverage.emoji_nature.emoji_objects.emoji_people.emoji_symbols.emoji_transportation.energy_savings_leaf.engineering.enhanced_encryption.equalizer.error.error_outline.escalator.escalator_warning.euro.euro_symbol.ev_station.event.event_available.event_busy.event_note.event_repeat.event_seat.exit_to_app.expand.expand_circle_down.expand_less.expand_more.explicit.explore.explore_off.exposure.exposure_neg_1.exposure_neg_2.exposure_plus_1.exposure_plus_2.exposure_zero.extension.extension_off.face.face_2.face_3.face_4.face_5.face_6.face_retouching_natural.face_retouching_off.fact_check.factory.family_restroom.fast_forward.fast_rewind.fastfood.favorite.favorite_border.fax.featured_play_list.featured_video.feed.feedback.female.fence.festival.fiber_dvr.fiber_manual_record.fiber_new.fiber_pin.fiber_smart_record.file_copy.file_download.file_download_done.file_download_off.file_open.file_present.file_upload.filter.filter_1.filter_2.filter_3.filter_4.filter_5.filter_6.filter_7.filter_8.filter_9.filter_9_plus.filter_alt.filter_alt_off.filter_b_and_w.filter_center_focus.filter_drama.filter_frames.filter_hdr.filter_list.filter_list_off.filter_none.filter_tilt_shift.filter_vintage.find_in_page.find_replace.fingerprint.fire_extinguisher.fire_hydrant_alt.fire_truck.fireplace.first_page.fit_screen.fitbit.fitness_center.flag.flag_circle.flaky.flare.flash_auto.flash_off.flash_on.flashlight_off.flashlight_on.flatware.flight.flight_class.flight_land.flight_takeoff.flip.flip_camera_android.flip_camera_ios.flip_to_back.flip_to_front.flood.fluorescent.flutter_dash.fmd_bad.fmd_good.folder.folder_copy.folder_delete.folder_off.folder_open.folder_shared.folder_special.folder_zip.follow_the_signs.font_download.font_download_off.food_bank.forest.fork_left.fork_right.format_align_center.format_align_justify.format_align_left.format_align_right.format_bold.format_clear.format_color_fill.format_color_reset.format_color_text.format_indent_decrease.format_indent_increase.format_italic.format_line_spacing.format_list_bulleted.format_list_numbered.format_list_numbered_rtl.format_overline.format_paint.format_quote.format_shapes.format_size.format_strikethrough.format_textdirection_l_to_r.format_textdirection_r_to_l.format_underlined.fort.forum.forward.forward_10.forward_30.forward_5.forward_to_inbox.foundation.free_breakfast.free_cancellation.front_hand.fullscreen.fullscreen_exit.functions.g_mobiledata.g_translate.gamepad.games.garage.gas_meter.gavel.generating_tokens.gesture.get_app.gif.gif_box.girl.gite.golf_course.gpp_bad.gpp_good.gpp_maybe.gps_fixed.gps_not_fixed.gps_off.grade.gradient.grading.grain.graphic_eq.grass.grid_3x3.grid_4x4.grid_goldenratio.grid_off.grid_on.grid_view.group.group_add.group_off.group_remove.group_work.groups.groups_2.groups_3.h_mobiledata.h_plus_mobiledata.hail.handshake.handyman.hardware.hd.hdr_auto.hdr_auto_select.hdr_enhanced_select.hdr_off.hdr_off_select.hdr_on.hdr_on_select.hdr_plus.hdr_strong.hdr_weak.headphones.headphones_battery.headset.headset_mic.headset_off.healing.health_and_safety.hearing.hearing_disabled.heart_broken.heat_pump.height.help.help_center.help_outline.hevc.hexagon.hide_image.hide_source.high_quality.highlight.highlight_alt.highlight_off.hiking.history.history_edu.history_toggle_off.hive.hls.hls_off.holiday_village.home.home_max.home_mini.home_repair_service.home_work.horizontal_distribute.horizontal_rule.horizontal_split.hot_tub.hotel.hotel_class.hourglass_bottom.hourglass_disabled.hourglass_empty.hourglass_full.hourglass_top.house.house_siding.houseboat.how_to_reg.how_to_vote.html.http.https.hub.hvac.ice_skating.icecream.image.image_aspect_ratio.image_not_supported.image_search.imagesearch_roller.import_contacts.import_export.important_devices.inbox.incomplete_circle.indeterminate_check_box.info.input.insert_chart.insert_chart_outlined.insert_comment.insert_drive_file.insert_emoticon.insert_invitation.insert_link.insert_page_break.insert_photo.insights.install_desktop.install_mobile.integration_instructions.interests.interpreter_mode.inventory.inventory_2.invert_colors.invert_colors_off.ios_share.iron.iso.javascript.join_full.join_inner.join_left.join_right.kayaking.kebab_dining.key.key_off.keyboard.keyboard_alt.keyboard_arrow_down.keyboard_arrow_left.keyboard_arrow_right.keyboard_arrow_up.keyboard_backspace.keyboard_capslock.keyboard_command_key.keyboard_control_key.keyboard_double_arrow_down.keyboard_double_arrow_left.keyboard_double_arrow_right.keyboard_double_arrow_up.keyboard_hide.keyboard_option_key.keyboard_return.keyboard_tab.keyboard_voice.king_bed.kitchen.kitesurfing.label.label_important.label_off.lan.landscape.landslide.language.laptop.laptop_chromebook.laptop_mac.laptop_windows.last_page.launch.layers.layers_clear.leaderboard.leak_add.leak_remove.legend_toggle.lens.lens_blur.library_add.library_add_check.library_books.library_music.light.light_mode.lightbulb.lightbulb_circle.line_axis.line_style.line_weight.linear_scale.link.link_off.linked_camera.liquor.list.list_alt.live_help.live_tv.living.local_activity.local_airport.local_atm.local_bar.local_cafe.local_car_wash.local_convenience_store.local_dining.local_drink.local_fire_department.local_florist.local_gas_station.local_grocery_store.local_hospital.local_hotel.local_laundry_service.local_library.local_mall.local_movies.local_offer.local_parking.local_pharmacy.local_phone.local_pizza.local_play.local_police.local_post_office.local_printshop.local_see.local_shipping.local_taxi.location_city.location_disabled.location_off.location_on.location_searching.lock.lock_clock.lock_open.lock_person.lock_reset.login.logo_dev.logout.looks.looks_3.looks_4.looks_5.looks_6.looks_one.looks_two.loop.loupe.low_priority.loyalty.lte_mobiledata.lte_plus_mobiledata.luggage.lunch_dining.lyrics.macro_off.mail.mail_lock.mail_outline.male.man.man_2.man_3.man_4.manage_accounts.manage_history.manage_search.map.maps_home_work.maps_ugc.margin.mark_as_unread.mark_chat_read.mark_chat_unread.mark_email_read.mark_email_unread.mark_unread_chat_alt.markunread.markunread_mailbox.masks.maximize.media_bluetooth_off.media_bluetooth_on.mediation.medical_information.medical_services.medication.medication_liquid.meeting_room.memory.menu.menu_book.menu_open.merge.merge_type.message.mic.mic_external_off.mic_external_on.mic_none.mic_off.microwave.military_tech.minimize.minor_crash.miscellaneous_services.missed_video_call.mms.mobile_friendly.mobile_off.mobile_screen_share.mobiledata_off.mode.mode_comment.mode_edit.mode_edit_outline.mode_fan_off.mode_night.mode_of_travel.mode_standby.model_training.monetization_on.money.money_off.money_off_csred.monitor.monitor_heart.monitor_weight.monochrome_photos.mood.mood_bad.moped.more.more_horiz.more_time.more_vert.mosque.motion_photos_auto.motion_photos_off.motion_photos_on.motion_photos_pause.motion_photos_paused.mouse.move_down.move_to_inbox.move_up.movie.movie_creation.movie_filter.moving.mp.multiline_chart.multiple_stop.museum.music_note.music_off.music_video.my_location.nat.nature.nature_people.navigate_before.navigate_next.navigation.near_me.near_me_disabled.nearby_error.nearby_off.nest_cam_wired_stand.network_cell.network_check.network_locked.network_ping.network_wifi.network_wifi_1_bar.network_wifi_2_bar.network_wifi_3_bar.new_label.new_releases.newspaper.next_plan.next_week.nfc.night_shelter.nightlife.nightlight.nightlight_round.nights_stay.no_accounts.no_adult_content.no_backpack.no_cell.no_crash.no_drinks.no_encryption.no_encryption_gmailerrorred.no_flash.no_food.no_luggage.no_meals.no_meeting_room.no_photography.no_sim.no_stroller.no_transfer.noise_aware.noise_control_off.nordic_walking.north.north_east.north_west.not_accessible.not_interested.not_listed_location.not_started.note.note_add.note_alt.notes.notification_add.notification_important.notifications.notifications_active.notifications_none.notifications_off.notifications_paused.numbers.offline_bolt.offline_pin.offline_share.oil_barrel.on_device_training.ondemand_video.online_prediction.opacity.open_in_browser.open_in_full.open_in_new.open_in_new_off.open_with.other_houses.outbound.outbox.outdoor_grill.outlet.outlined_flag.output.padding.pages.pageview.paid.palette.pan_tool.pan_tool_alt.panorama.panorama_fish_eye.panorama_horizontal.panorama_horizontal_select.panorama_photosphere.panorama_photosphere_select.panorama_vertical.panorama_vertical_select.panorama_wide_angle.panorama_wide_angle_select.paragliding.park.party_mode.password.pattern.pause.pause_circle.pause_circle_filled.pause_circle_outline.pause_presentation.payment.payments.pedal_bike.pending.pending_actions.pentagon.people.people_alt.people_outline.percent.perm_camera_mic.perm_contact_calendar.perm_data_setting.perm_device_information.perm_identity.perm_media.perm_phone_msg.perm_scan_wifi.person.person_2.person_3.person_4.person_add.person_add_alt.person_add_alt_1.person_add_disabled.person_off.person_outline.person_pin.person_pin_circle.person_remove.person_remove_alt_1.person_search.personal_injury.personal_video.pest_control.pest_control_rodent.pets.phishing.phone.phone_android.phone_bluetooth_speaker.phone_callback.phone_disabled.phone_enabled.phone_forwarded.phone_iphone.phone_locked.phone_missed.phone_paused.phonelink.phonelink_erase.phonelink_lock.phonelink_off.phonelink_ring.phonelink_setup.photo.photo_album.photo_camera.photo_camera_back.photo_camera_front.photo_filter.photo_library.photo_size_select_actual.photo_size_select_large.photo_size_select_small.php.piano.piano_off.picture_as_pdf.picture_in_picture.picture_in_picture_alt.pie_chart.pie_chart_outline.pin.pin_drop.pin_end.pin_invoke.pinch.pivot_table_chart.pix.place.plagiarism.play_arrow.play_circle.play_circle_filled.play_circle_outline.play_disabled.play_for_work.play_lesson.playlist_add.playlist_add_check.playlist_add_check_circle.playlist_add_circle.playlist_play.playlist_remove.plumbing.plus_one.podcasts.point_of_sale.policy.poll.polyline.polymer.pool.portable_wifi_off.portrait.post_add.power.power_input.power_off.power_settings_new.precision_manufacturing.pregnant_woman.present_to_all.preview.price_change.price_check.print.print_disabled.priority_high.privacy_tip.private_connectivity.production_quantity_limits.propane.propane_tank.psychology.psychology_alt.public.public_off.publish.published_with_changes.punch_clock.push_pin.qr_code.qr_code_2.qr_code_scanner.query_builder.query_stats.question_answer.question_mark.queue.queue_music.queue_play_next.quickreply.quiz.r_mobiledata.radar.radio.radio_button_checked.radio_button_unchecked.railway_alert.ramen_dining.ramp_left.ramp_right.rate_review.raw_off.raw_on.read_more.real_estate_agent.receipt.receipt_long.recent_actors.recommend.record_voice_over.rectangle.recycling.redeem.redo.reduce_capacity.refresh.remember_me.remove.remove_circle.remove_circle_outline.remove_done.remove_from_queue.remove_moderator.remove_red_eye.remove_road.remove_shopping_cart.reorder.repartition.repeat.repeat_on.repeat_one.repeat_one_on.replay.replay_10.replay_30.replay_5.replay_circle_filled.reply.reply_all.report.report_gmailerrorred.report_off.report_problem.request_page.request_quote.reset_tv.restart_alt.restaurant.restaurant_menu.restore.restore_from_trash.restore_page.reviews.rice_bowl.ring_volume.rocket.rocket_launch.roller_shades.roller_shades_closed.roller_skating.roofing.room.room_preferences.room_service.rotate_90_degrees_ccw.rotate_90_degrees_cw.rotate_left.rotate_right.roundabout_left.roundabout_right.rounded_corner.route.router.rowing.rss_feed.rsvp.rtt.rule.rule_folder.run_circle.running_with_errors.rv_hookup.safety_check.safety_divider.sailing.sanitizer.satellite.satellite_alt.save.save_alt.save_as.saved_search.savings.scale.scanner.scatter_plot.schedule.schedule_send.schema.school.science.score.scoreboard.screen_lock_landscape.screen_lock_portrait.screen_lock_rotation.screen_rotation.screen_rotation_alt.screen_search_desktop.screen_share.screenshot.screenshot_monitor.scuba_diving.sd.sd_card.sd_card_alert.sd_storage.search.search_off.security.security_update.security_update_good.security_update_warning.segment.select_all.self_improvement.sell.send.send_and_archive.send_time_extension.send_to_mobile.sensor_door.sensor_occupied.sensor_window.sensors.sensors_off.sentiment_dissatisfied.sentiment_neutral.sentiment_satisfied.sentiment_satisfied_alt.sentiment_very_dissatisfied.sentiment_very_satisfied.set_meal.settings.settings_accessibility.settings_applications.settings_backup_restore.settings_bluetooth.settings_brightness.settings_cell.settings_ethernet.settings_input_antenna.settings_input_component.settings_input_composite.settings_input_hdmi.settings_input_svideo.settings_overscan.settings_phone.settings_power.settings_remote.settings_suggest.settings_system_daydream.settings_voice.severe_cold.shape_line.share.share_location.shield.shield_moon.shop.shop_2.shop_two.shopping_bag.shopping_basket.shopping_cart.shopping_cart_checkout.short_text.shortcut.show_chart.shower.shuffle.shuffle_on.shutter_speed.sick.sign_language.signal_cellular_0_bar.signal_cellular_4_bar.signal_cellular_alt.signal_cellular_alt_1_bar.signal_cellular_alt_2_bar.signal_cellular_connected_no_internet_0_bar.signal_cellular_connected_no_internet_4_bar.signal_cellular_no_sim.signal_cellular_nodata.signal_cellular_null.signal_cellular_off.signal_wifi_0_bar.signal_wifi_4_bar.signal_wifi_4_bar_lock.signal_wifi_bad.signal_wifi_connected_no_internet_4.signal_wifi_off.signal_wifi_statusbar_4_bar.signal_wifi_statusbar_connected_no_internet_4.signal_wifi_statusbar_null.signpost.sim_card.sim_card_alert.sim_card_download.single_bed.sip.skateboarding.skip_next.skip_previous.sledding.slideshow.slow_motion_video.smart_button.smart_display.smart_screen.smart_toy.smartphone.smoke_free.smoking_rooms.sms.sms_failed.snippet_folder.snooze.snowboarding.snowmobile.snowshoeing.soap.social_distance.solar_power.sort.sort_by_alpha.sos.soup_kitchen.source.south.south_america.south_east.south_west.spa.space_bar.space_dashboard.spatial_audio.spatial_audio_off.spatial_tracking.speaker.speaker_group.speaker_notes.speaker_notes_off.speaker_phone.speed.spellcheck.splitscreen.spoke.sports.sports_bar.sports_baseball.sports_basketball.sports_cricket.sports_esports.sports_football.sports_golf.sports_gymnastics.sports_handball.sports_hockey.sports_kabaddi.sports_martial_arts.sports_mma.sports_motorsports.sports_rugby.sports_score.sports_soccer.sports_tennis.sports_volleyball.square.square_foot.ssid_chart.stacked_bar_chart.stacked_line_chart.stadium.stairs.star.star_border.star_border_purple500.star_half.star_outline.star_purple500.star_rate.stars.start.stay_current_landscape.stay_current_portrait.stay_primary_landscape.stay_primary_portrait.sticky_note_2.stop.stop_circle.stop_screen_share.storage.store.store_mall_directory.storefront.storm.straight.straighten.stream.streetview.strikethrough_s.stroller.style.subdirectory_arrow_left.subdirectory_arrow_right.subject.subscript.subscriptions.subtitles.subtitles_off.subway.summarize.superscript.supervised_user_circle.supervisor_account.support.support_agent.surfing.surround_sound.swap_calls.swap_horiz.swap_horizontal_circle.swap_vert.swap_vertical_circle.swipe.swipe_down.swipe_down_alt.swipe_left.swipe_left_alt.swipe_right.swipe_right_alt.swipe_up.swipe_up_alt.swipe_vertical.switch_access_shortcut.switch_access_shortcut_add.switch_account.switch_camera.switch_left.switch_right.switch_video.synagogue.sync.sync_alt.sync_disabled.sync_lock.sync_problem.system_security_update.system_security_update_good.system_security_update_warning.system_update.system_update_alt.tab.tab_unselected.table_bar.table_chart.table_restaurant.table_rows.table_view.tablet.tablet_android.tablet_mac.tag.tag_faces.takeout_dining.tap_and_play.tapas.task.task_alt.taxi_alert.temple_buddhist.temple_hindu.terminal.terrain.text_decrease.text_fields.text_format.text_increase.text_rotate_up.text_rotate_vertical.text_rotation_angledown.text_rotation_angleup.text_rotation_down.text_rotation_none.text_snippet.textsms.texture.theater_comedy.theaters.thermostat.thermostat_auto.thumb_down.thumb_down_alt.thumb_down_off_alt.thumb_up.thumb_up_alt.thumb_up_off_alt.thumbs_up_down.thunderstorm.time_to_leave.timelapse.timeline.timer.timer_10.timer_10_select.timer_3.timer_3_select.timer_off.tips_and_updates.tire_repair.title.toc.today.toggle_off.toggle_on.token.toll.tonality.topic.tornado.touch_app.tour.toys.track_changes.traffic.train.tram.transcribe.transfer_within_a_station.transform.transgender.transit_enterexit.translate.travel_explore.trending_down.trending_flat.trending_up.trip_origin.troubleshoot.try.tsunami.tty.tune.tungsten.turn_left.turn_right.turn_sharp_left.turn_sharp_right.turn_slight_left.turn_slight_right.turned_in.turned_in_not.tv.tv_off.two_wheeler.type_specimen.u_turn_left.u_turn_right.umbrella.unarchive.undo.unfold_less.unfold_less_double.unfold_more.unfold_more_double.unpublished.unsubscribe.upcoming.update.update_disabled.upgrade.upload.upload_file.usb.usb_off.vaccines.vape_free.vaping_rooms.verified.verified_user.vertical_align_bottom.vertical_align_center.vertical_align_top.vertical_distribute.vertical_shades.vertical_shades_closed.vertical_split.vibration.video_call.video_camera_back.video_camera_front.video_chat.video_file.video_label.video_library.video_settings.video_stable.videocam.videocam_off.videogame_asset.videogame_asset_off.view_agenda.view_array.view_carousel.view_column.view_comfy.view_comfy_alt.view_compact.view_compact_alt.view_cozy.view_day.view_headline.view_in_ar.view_kanban.view_list.view_module.view_quilt.view_sidebar.view_stream.view_timeline.view_week.vignette.villa.visibility.visibility_off.voice_chat.voice_over_off.voicemail.volcano.volume_down.volume_mute.volume_off.volume_up.volunteer_activism.vpn_key.vpn_key_off.vpn_lock.vrpano.wallet.wallpaper.warehouse.warning.warning_amber.wash.watch.watch_later.watch_off.water.water_damage.water_drop.waterfall_chart.waves.waving_hand.wb_auto.wb_cloudy.wb_incandescent.wb_iridescent.wb_shade.wb_sunny.wb_twilight.wc.web.web_asset.web_asset_off.web_stories.webhook.weekend.west.whatshot.wheelchair_pickup.where_to_vote.widgets.width_full.width_normal.width_wide.wifi.wifi_1_bar.wifi_2_bar.wifi_calling.wifi_calling_3.wifi_channel.wifi_find.wifi_lock.wifi_off.wifi_password.wifi_protected_setup.wifi_tethering.wifi_tethering_error.wifi_tethering_off.wind_power.window.wine_bar.woman.woman_2.work.work_history.work_off.work_outline.workspace_premium.workspaces.wrap_text.wrong_location.wysiwyg.yard.youtube_searched_for.zoom_in.zoom_in_map.zoom_out.zoom_out_map".split("."), {
	threshold: .3,
	minMatchCharLength: 2
});
function yc({ defaultIcons: e, selectedIcon: t, onSelect: n, autoFocus: r = !1, itemAs: i = "button" }) {
	let [a, o] = (0, D.useState)(""), s = (0, D.useMemo)(() => a ? vc.search(a).map((e) => e.item) : e, [a, e]);
	return /* @__PURE__ */ (0, j.jsxs)("div", {
		className: "icon-picker",
		children: [/* @__PURE__ */ (0, j.jsx)(Zo, { children: /* @__PURE__ */ (0, j.jsx)(T.Group, {
			size: "sm",
			children: /* @__PURE__ */ (0, j.jsx)(T.Control, {
				autoFocus: r,
				type: "text",
				className: "m-0",
				placeholder: "Search icons",
				"aria-label": "Search icons",
				trailingElement: /* @__PURE__ */ (0, j.jsx)("span", {
					className: "material-icons-outlined medium text-gray-500",
					children: "search"
				}),
				value: a,
				onChange: (e) => o(e.currentTarget.value)
			})
		}) }), /* @__PURE__ */ (0, j.jsx)("div", {
			className: "icon-list d-flex flex-wrap justify-items-start",
			children: s.map((e) => /* @__PURE__ */ (0, j.jsx)(i, {
				as: i === "button" ? void 0 : "button",
				eventKey: i === "button" ? void 0 : e,
				type: "button",
				className: `icon-symbol p-2 ${e === t ? "active" : ""}`,
				title: e,
				"aria-label": e,
				"aria-pressed": e === t,
				onClick: () => n(e),
				children: /* @__PURE__ */ (0, j.jsx)("span", {
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
var bc = (0, D.createContext)(null), xc = () => (0, D.useContext)(bc), Sc = ({ fileTypes: e, onFileSelect: t, onError: n, onClose: r }) => {
	let [i, a] = (0, D.useState)(null), { element: o } = (0, D.useContext)(_), s = xc(), c = (0, D.useRef)(null), l = o.getAttribute("data-usage-id");
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
	return u.searchParams.set("multiSelect", "false"), u.searchParams.set("embedded", "true"), e && u.searchParams.set("fileTypes", e.join(",")), u.searchParams.set("usageKey", l), /* @__PURE__ */ (0, j.jsx)(Ho, {
		title: "File Picker",
		size: "xl",
		isOpen: !0,
		className: "bg-light-200",
		onClose: r,
		footerNode: /* @__PURE__ */ (0, j.jsxs)(Te, { children: [
			/* @__PURE__ */ (0, j.jsx)(Te.Spacer, {}),
			/* @__PURE__ */ (0, j.jsx)(Sn, {
				variant: "tertiary",
				onClick: r,
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, j.jsx)(Sn, {
				disabled: !i,
				onClick: async () => {
					await t(i);
				},
				children: "Use Selected File"
			})
		] }),
		isOverflowVisible: !0,
		children: /* @__PURE__ */ (0, j.jsx)("iframe", {
			title: "File Picker",
			ref: c,
			width: "100%",
			height: "800",
			src: u.toString()
		})
	});
}, Cc = ({ children: e, setValue: t, fileTypes: n = null }) => {
	let [r, i] = (0, D.useState)(!1), [a, o] = (0, D.useState)(null), s = xc(), c = (0, D.useCallback)(async (e) => {
		try {
			await t(e), o(null);
		} catch (e) {
			o(e.message);
		}
		i(!1);
	}, [t]);
	return s?.file_picker_url ? /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: [
		/* @__PURE__ */ (0, j.jsxs)(se, { children: [e, /* @__PURE__ */ (0, j.jsx)(se.Append, { children: /* @__PURE__ */ (0, j.jsx)(Sn, {
			variant: "outline-secondary",
			onClick: () => i(!0),
			children: "Select File"
		}) })] }),
		a && /* @__PURE__ */ (0, j.jsx)(T.Control.Feedback, {
			type: "default",
			children: a
		}),
		r && /* @__PURE__ */ (0, j.jsx)(Sc, {
			fileTypes: n,
			onFileSelect: c,
			onError: o,
			onClose: () => i(!1)
		})
	] }) : e;
}, wc = [
	...Object.entries(ge).filter(([e]) => e !== w.CUSTOM).map(([, e]) => e),
	"description",
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
], Tc = ({ thumbnailIcon: e, onIconChange: t, thumbnailUrl: n, onImageChange: r }) => {
	let i = (0, D.useId)(), a = (0, D.useRef)(null), [o, s] = (0, D.useState)(!1), [c, l] = (0, D.useState)("icon"), u = (0, D.useRef)(), d = () => s(!1);
	return (0, D.useEffect)(() => () => window.clearTimeout(u.current), []), /* @__PURE__ */ (0, j.jsxs)("div", {
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
		children: [/* @__PURE__ */ (0, j.jsx)(Sn, {
			ref: a,
			variant: "outline-primary",
			"aria-expanded": o,
			"aria-controls": i,
			onClick: () => s(!o),
			children: "Choose thumbnail"
		}), o && /* @__PURE__ */ (0, j.jsx)("div", {
			id: i,
			className: "thumbnail-select-popover",
			role: "dialog",
			"aria-label": "Choose thumbnail",
			tabIndex: -1,
			children: /* @__PURE__ */ (0, j.jsxs)(zt, {
				id: `${i}-tabs`,
				activeKey: c,
				onSelect: (e) => l(e ?? "icon"),
				children: [/* @__PURE__ */ (0, j.jsxs)(Wo, {
					variant: "tabs",
					fill: !0,
					children: [/* @__PURE__ */ (0, j.jsx)(Wo.Item, { children: /* @__PURE__ */ (0, j.jsx)(Wo.Link, {
						eventKey: "icon",
						children: "Icon"
					}) }), /* @__PURE__ */ (0, j.jsx)(Wo.Item, { children: /* @__PURE__ */ (0, j.jsx)(Wo.Link, {
						eventKey: "image",
						children: "Image"
					}) })]
				}), /* @__PURE__ */ (0, j.jsxs)(Vt, { children: [/* @__PURE__ */ (0, j.jsx)(Gt, {
					eventKey: "icon",
					children: /* @__PURE__ */ (0, j.jsx)(yc, {
						autoFocus: !0,
						defaultIcons: wc,
						selectedIcon: e,
						onSelect: (e) => {
							r(void 0), t(e), d(), a.current?.focus();
						}
					})
				}), /* @__PURE__ */ (0, j.jsx)(Gt, {
					eventKey: "image",
					children: /* @__PURE__ */ (0, j.jsxs)(T.Group, {
						className: "thumbnail-select-image",
						children: [/* @__PURE__ */ (0, j.jsx)(T.Label, { children: "Image URL" }), /* @__PURE__ */ (0, j.jsx)(Cc, {
							setValue: async (e) => r(e),
							fileTypes: ["image"],
							children: /* @__PURE__ */ (0, j.jsx)(T.Control, {
								value: n ?? "",
								onChange: (e) => r(e.target.value)
							})
						})]
					})
				})] })]
			})
		})]
	});
}, Ec = (e) => {
	try {
		let t = new URL(e.trim());
		return ["http:", "https:"].includes(t.protocol) && t.host !== "";
	} catch {
		return !1;
	}
}, Dc = 59, Oc = (e) => {
	let t = {};
	return e.url.trim() ? Ec(e.url) || (t.url = "Enter a full URL starting with http:// or https://.") : t.url = "Add the resource URL.", e.title.trim() || (t.title = "Add a title."), e.publisher.trim() || (t.publisher = "Add a publisher."), e.expectedMinutes < 1 && (t.expectedMinutes = "The estimated time must be at least 1 minute."), t;
}, kc = ({ initialResource: e, isNewResource: t = !1, onCancel: n, onSave: r, onDelete: i }) => {
	let [a, o] = (0, D.useState)(e), [s, c] = (0, D.useState)(!1), l = s ? Oc(a) : {}, [u, d] = (0, D.useState)(() => {
		let t = Math.floor(e.expectedMinutes / 60);
		return t ? String(t) : "";
	}), [f, p] = (0, D.useState)(() => {
		let t = e.expectedMinutes % 60;
		return t ? String(t) : "";
	}), m = a.thumbnailIcon || ge[a.fileType], h = (e, t) => {
		d(e), p(t), o({
			...a,
			expectedMinutes: (Number(e) || 0) * 60 + (Number(t) || 0)
		});
	}, g = (e, t) => {
		let n = e.replace(/\D/g, "");
		if (!n) return "";
		let r = Number(n);
		return String(t === void 0 ? r : Math.min(r, t));
	};
	return /* @__PURE__ */ (0, j.jsxs)(pe, { children: [/* @__PURE__ */ (0, j.jsx)(pe.Body, { children: /* @__PURE__ */ (0, j.jsxs)(pe.Section, { children: [
		/* @__PURE__ */ (0, j.jsxs)("div", {
			className: "d-flex w-100 justify-content-between",
			children: [/* @__PURE__ */ (0, j.jsx)("span", {
				className: "h4 text-primary-500",
				children: t ? "Add resource" : "Edit resource"
			}), !t && /* @__PURE__ */ (0, j.jsx)(ye, {
				variant: "primary",
				src: wn,
				alt: "Delete",
				onClick: i
			})]
		}),
		/* @__PURE__ */ (0, j.jsx)("hr", {}),
		/* @__PURE__ */ (0, j.jsxs)(T.Group, {
			isInvalid: !!l.url,
			children: [
				/* @__PURE__ */ (0, j.jsx)(T.Label, { children: /* @__PURE__ */ (0, j.jsxs)(_e, { children: [/* @__PURE__ */ (0, j.jsx)("span", {
					className: "text-primary-500",
					children: "Resource link"
				}), /* @__PURE__ */ (0, j.jsx)("small", { children: "Add the resource URL" })] }) }),
				/* @__PURE__ */ (0, j.jsx)(T.Control, {
					value: a.url,
					onChange: (e) => {
						o({
							...a,
							url: e.target.value
						});
					}
				}),
				l.url && /* @__PURE__ */ (0, j.jsx)(T.Control.Feedback, {
					type: "invalid",
					children: l.url
				})
			]
		}),
		/* @__PURE__ */ (0, j.jsxs)(T.Group, {
			isInvalid: !!l.title,
			children: [
				/* @__PURE__ */ (0, j.jsx)(T.Label, { children: /* @__PURE__ */ (0, j.jsx)("span", {
					className: "text-primary-500",
					children: "Title"
				}) }),
				/* @__PURE__ */ (0, j.jsx)(T.Control, {
					value: a.title,
					onChange: (e) => {
						o({
							...a,
							title: e.target.value
						});
					}
				}),
				l.title && /* @__PURE__ */ (0, j.jsx)(T.Control.Feedback, {
					type: "invalid",
					children: l.title
				})
			]
		}),
		/* @__PURE__ */ (0, j.jsxs)(T.Group, {
			isInvalid: !!l.publisher,
			children: [
				/* @__PURE__ */ (0, j.jsx)(T.Label, { children: /* @__PURE__ */ (0, j.jsx)("span", {
					className: "text-primary-500",
					children: "Publisher"
				}) }),
				/* @__PURE__ */ (0, j.jsx)(T.Control, {
					value: a.publisher,
					onChange: (e) => {
						o({
							...a,
							publisher: e.target.value
						});
					}
				}),
				l.publisher && /* @__PURE__ */ (0, j.jsx)(T.Control.Feedback, {
					type: "invalid",
					children: l.publisher
				})
			]
		}),
		/* @__PURE__ */ (0, j.jsxs)(T.Group, {
			isInvalid: !!l.expectedMinutes,
			children: [
				/* @__PURE__ */ (0, j.jsx)(T.Label, { children: /* @__PURE__ */ (0, j.jsx)("span", {
					className: "text-primary-500",
					children: "Estimated time"
				}) }),
				/* @__PURE__ */ (0, j.jsxs)(_e, {
					direction: "horizontal",
					gap: 2,
					children: [
						/* @__PURE__ */ (0, j.jsx)(T.Control, {
							className: "estimated-time-input",
							inputMode: "numeric",
							placeholder: "0",
							value: u,
							onChange: (e) => {
								h(g(e.target.value), f);
							}
						}),
						/* @__PURE__ */ (0, j.jsx)("small", { children: "hr" }),
						/* @__PURE__ */ (0, j.jsx)(T.Control, {
							className: "estimated-time-input",
							inputMode: "numeric",
							placeholder: "0",
							value: f,
							onChange: (e) => {
								h(u, g(e.target.value, Dc));
							}
						}),
						/* @__PURE__ */ (0, j.jsx)("small", { children: "min" })
					]
				}),
				l.expectedMinutes && /* @__PURE__ */ (0, j.jsx)(T.Control.Feedback, {
					type: "invalid",
					children: l.expectedMinutes
				})
			]
		}),
		/* @__PURE__ */ (0, j.jsxs)(T.Group, { children: [/* @__PURE__ */ (0, j.jsx)(T.Label, { children: /* @__PURE__ */ (0, j.jsx)("span", {
			className: "text-primary-500",
			children: "Content type"
		}) }), /* @__PURE__ */ (0, j.jsx)(es, {
			fileType: a.fileType,
			customFileType: a.customFileType ?? "",
			onChange: (e, t) => o({
				...a,
				fileType: e,
				customFileType: t
			})
		})] }),
		/* @__PURE__ */ (0, j.jsxs)(_e, {
			gap: 3,
			direction: "horizontal",
			children: [/* @__PURE__ */ (0, j.jsx)(fe, {
				variant: a.thumbnailUrl ? "image" : "icon",
				item: a.thumbnailUrl || m,
				itemAlt: a.thumbnailAltText
			}), /* @__PURE__ */ (0, j.jsx)(Tc, {
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
	] }) }), /* @__PURE__ */ (0, j.jsx)(pe.Footer, { children: /* @__PURE__ */ (0, j.jsxs)(Te, {
		className: "border-top pt-3",
		children: [
			/* @__PURE__ */ (0, j.jsx)(Sn, {
				variant: "primary",
				onClick: () => {
					if (Object.keys(Oc(a)).length > 0) {
						c(!0);
						return;
					}
					r(a);
				},
				children: "Save"
			}),
			/* @__PURE__ */ (0, j.jsx)(Sn, {
				variant: "tertiary",
				onClick: () => n(),
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, j.jsx)(Te.Spacer, {})
		]
	}) })] });
}, Ac = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`, jc = () => ({
	id: Ac(),
	url: "",
	title: "",
	publisher: "",
	expectedMinutes: 0,
	fileType: w.ARTICLE
}), Mc = ({ onDelete: e, onEdit: t, disableEdit: n, dragHandleRef: r }) => /* @__PURE__ */ (0, j.jsxs)(Te, { children: [
	/* @__PURE__ */ (0, j.jsx)(ye, {
		src: En,
		alt: "Edit",
		onClick: t,
		disabled: n
	}),
	/* @__PURE__ */ (0, j.jsx)(ye, {
		src: wn,
		alt: "Delete",
		onClick: e
	}),
	r && /* @__PURE__ */ (0, j.jsx)(ye, {
		ref: r,
		src: Tn,
		alt: "Drag to reorder"
	})
] }), Nc = ({ resource: e, onConfirm: t, onClose: n }) => /* @__PURE__ */ (0, j.jsx)(Uo, {
	title: "Delete resource?",
	isOpen: e !== void 0,
	onClose: n,
	footerNode: /* @__PURE__ */ (0, j.jsxs)(Te, { children: [/* @__PURE__ */ (0, j.jsx)(Sn, {
		variant: "tertiary",
		onClick: n,
		children: "Cancel"
	}), /* @__PURE__ */ (0, j.jsx)(Sn, {
		variant: "primary",
		onClick: () => e && t(e),
		children: "Delete resource"
	})] }),
	children: /* @__PURE__ */ (0, j.jsxs)("p", { children: [
		"“",
		e?.title,
		"” will be permanently deleted. This action cannot be undone."
	] })
}), Pc = Symbol.for("preact-signals");
function Fc() {
	if (Rc > 1) Rc--;
	else {
		var e, t = !1;
		for ((function() {
			var e = Hc;
			for (Hc = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
		})(); Lc !== void 0;) {
			var n = Lc;
			for (Lc = void 0, zc++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && Kc(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (zc = 0, Rc--, t) throw e;
	}
}
function N(e) {
	if (Rc > 0) return e();
	Vc = ++Bc, Rc++;
	try {
		return e();
	} finally {
		Fc();
	}
}
var P = void 0;
function F(e) {
	var t = P;
	P = void 0;
	try {
		return e();
	} finally {
		P = t;
	}
}
var Ic, Lc = void 0, Rc = 0, zc = 0, Bc = 0, Vc = 0, Hc = void 0, Uc = 0;
function Wc(e) {
	if (P !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== P) return t = {
			i: 0,
			S: e,
			p: P.s,
			n: void 0,
			t: P,
			e: void 0,
			x: void 0,
			r: t
		}, P.s !== void 0 && (P.s.n = t), P.s = t, e.n = t, 32 & P.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = P.s, t.n = void 0, P.s.n = t, P.s = t), t;
	}
}
function I(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
I.prototype.brand = Pc, I.prototype.h = function() {
	return !0;
}, I.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? F(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, I.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && F(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, I.prototype.subscribe = function(e) {
	var t = this;
	return tl(function() {
		var n = t.value, r = P;
		P = void 0;
		try {
			e(n);
		} finally {
			P = r;
		}
	}, { name: "sub" });
}, I.prototype.valueOf = function() {
	return this.value;
}, I.prototype.toString = function() {
	return this.value + "";
}, I.prototype.toJSON = function() {
	return this.value;
}, I.prototype.peek = function() {
	var e = P;
	P = void 0;
	try {
		return this.value;
	} finally {
		P = e;
	}
}, Object.defineProperty(I.prototype, "value", {
	get: function() {
		var e = Wc(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (zc > 100) throw Error("Cycle detected");
			(function(e) {
				Rc !== 0 && zc === 0 && e.l !== Vc && (e.l = Vc, Hc = {
					S: e,
					v: e.v,
					i: e.i,
					o: Hc
				});
			})(this), this.v = e, this.i++, Uc++, Rc++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				Fc();
			}
		}
	}
});
function Gc(e, t) {
	return new I(e, t);
}
function Kc(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function qc(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function Jc(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function Yc(e, t) {
	I.call(this, void 0), this.x = e, this.s = void 0, this.g = Uc - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Yc.prototype = new I(), Yc.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === Uc)) return !0;
	if (this.g = Uc, this.f |= 1, this.i > 0 && !Kc(this)) return this.f &= -2, !0;
	var e = P;
	try {
		qc(this), P = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return P = e, Jc(this), this.f &= -2, !0;
}, Yc.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	I.prototype.S.call(this, e);
}, Yc.prototype.U = function(e) {
	if (this.t !== void 0 && (I.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, Yc.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(Yc.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = Wc(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function Xc(e, t) {
	return new Yc(e, t);
}
function Zc(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		Rc++;
		var n = P;
		P = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, Qc(e), t;
		} finally {
			P = n, Fc();
		}
	}
}
function Qc(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, Zc(e);
}
function $c(e) {
	if (P !== this) throw Error("Out-of-order effect");
	Jc(this), P = e, this.f &= -2, 8 & this.f && Qc(this), Fc();
}
function el(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, Ic && Ic.push(this);
}
el.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, el.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, Zc(this), qc(this), Rc++;
	var e = P;
	return P = this, $c.bind(this, e);
}, el.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = Lc, Lc = this);
}, el.prototype.d = function() {
	this.f |= 8, 1 & this.f || Qc(this);
}, el.prototype.dispose = function() {
	this.d();
};
function tl(e, t) {
	var n = new el(e, t);
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
var nl = Object.create, rl = Object.defineProperty, il = Object.defineProperties, al = Object.getOwnPropertyDescriptor, ol = Object.getOwnPropertyDescriptors, sl = Object.getOwnPropertySymbols, cl = Object.prototype.hasOwnProperty, ll = Object.prototype.propertyIsEnumerable, ul = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), dl = (e) => {
	throw TypeError(e);
}, fl = (e, t, n) => t in e ? rl(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, pl = (e, t) => {
	for (var n in t ||= {}) cl.call(t, n) && fl(e, n, t[n]);
	if (sl) for (var n of sl(t)) ll.call(t, n) && fl(e, n, t[n]);
	return e;
}, ml = (e, t) => il(e, ol(t)), hl = (e, t) => rl(e, "name", {
	value: t,
	configurable: !0
}), gl = (e) => [
	,
	,
	,
	nl(e?.[ul("metadata")] ?? null)
], _l = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], vl = (e) => e !== void 0 && typeof e != "function" ? dl("Function expected") : e, yl = (e, t, n, r, i) => ({
	kind: _l[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? dl("Already initialized") : i.push(vl(e || null))
}), bl = (e, t) => fl(t, ul("metadata"), e[3]), xl = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Sl = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = _l[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && al(d < 4 ? i : {
		get [n]() {
			return Tl(this, a);
		},
		set [n](e) {
			return Dl(this, a, e);
		}
	}, n));
	d ? p && d < 4 && hl(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : hl(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = yl(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => wl(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Tl : Ol)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Dl(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? vl(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? dl("Object expected") : (vl(o = s.get) && (v.get = o), vl(o = s.set) && (v.set = o), vl(o = s.init) && g.unshift(o));
	return d || bl(e, i), v && rl(i, n, v), p ? d ^ 4 ? a : v : i;
}, Cl = (e, t, n) => t.has(e) || dl("Cannot " + n), wl = (e, t) => Object(t) === t ? e.has(t) : dl("Cannot use the \"in\" operator on this value"), Tl = (e, t, n) => (Cl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), El = (e, t, n) => t.has(e) ? dl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Dl = (e, t, n, r) => (Cl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ol = (e, t, n) => (Cl(e, t, "access private method"), n);
function kl(e, t) {
	if (t) {
		let n;
		return Xc(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return Xc(e);
}
function Al(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !Al(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length ? !n.some((n) => !Al(e[n], t[n])) : !1;
	}
	return !1;
}
function L({ get: e }, t) {
	return {
		init(e) {
			return Gc(e);
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
		return t || (t = kl(e.bind(this)), n.set(this, t)), t.value;
	};
}
function jl(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, ml(pl({}, r), { enumerable: e }));
		});
	};
}
function Ml(...e) {
	let t = e.map((e) => tl(e));
	return () => t.forEach((e) => e());
}
var Nl, Pl, Fl, Il, Ll, Rl = [L], zl, Bl, Vl, Hl, Ul, z, Wl, Gl, Kl, ql, Jl, Yl, Xl, Zl;
Ll = [L], Il = [L], Fl = [jl()], Pl = [jl()], Nl = [jl()];
var Ql = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, xl(zl, 5, this), El(this, z), El(this, Bl, xl(zl, 8, this)), xl(zl, 11, this), El(this, Wl, xl(zl, 12, this)), xl(zl, 15, this), El(this, Jl, xl(zl, 16, this)), xl(zl, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return Tl(this, z, Xl);
	}
	get initial() {
		return Tl(this, z, Hl);
	}
	get previous() {
		return Tl(this, z, Kl);
	}
	set current(e) {
		let t = F(() => Tl(this, z, Xl));
		e && t && this.equals(t, e) || N(() => {
			Tl(this, z, Hl) || Dl(this, z, e, Ul), Dl(this, z, t, ql), Dl(this, z, e, Zl);
		});
	}
	reset(e = this.defaultValue) {
		N(() => {
			Dl(this, z, void 0, ql), Dl(this, z, e, Ul), Dl(this, z, e, Zl);
		});
	}
};
zl = gl(null), Bl = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakSet(), Wl = /* @__PURE__ */ new WeakMap(), Jl = /* @__PURE__ */ new WeakMap(), Vl = Sl(zl, 20, "#initial", Rl, z, Bl), Hl = Vl.get, Ul = Vl.set, Gl = Sl(zl, 20, "#previous", Ll, z, Wl), Kl = Gl.get, ql = Gl.set, Yl = Sl(zl, 20, "#current", Il, z, Jl), Xl = Yl.get, Zl = Yl.set, Sl(zl, 2, "current", Fl, Ql), Sl(zl, 2, "initial", Pl, Ql), Sl(zl, 2, "previous", Nl, Ql), bl(zl, Ql);
function $l(e) {
	return F(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var eu, tu = class {
	constructor() {
		El(this, eu, /* @__PURE__ */ new WeakMap());
	}
	get(e, t) {
		return e ? Tl(this, eu).get(e)?.get(t) : void 0;
	}
	set(e, t, n) {
		if (e) return Tl(this, eu).has(e) || Tl(this, eu).set(e, /* @__PURE__ */ new Map()), Tl(this, eu).get(e)?.set(t, n);
	}
	clear(e) {
		return e ? Tl(this, eu).get(e)?.clear() : void 0;
	}
};
eu = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/@dnd-kit+geometry@0.3.2/node_modules/@dnd-kit/geometry/dist/index.mjs
var nu = Object.create, ru = Object.defineProperty, iu = Object.getOwnPropertyDescriptor, au = Object.getOwnPropertySymbols, ou = Object.prototype.hasOwnProperty, su = Object.prototype.propertyIsEnumerable, cu = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), lu = (e) => {
	throw TypeError(e);
}, uu = Math.pow, du = (e, t, n) => t in e ? ru(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, fu = (e, t) => {
	for (var n in t ||= {}) ou.call(t, n) && du(e, n, t[n]);
	if (au) for (var n of au(t)) su.call(t, n) && du(e, n, t[n]);
	return e;
}, pu = (e, t) => ru(e, "name", {
	value: t,
	configurable: !0
}), mu = (e) => [
	,
	,
	,
	nu(e?.[cu("metadata")] ?? null)
], hu = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], gu = (e) => e !== void 0 && typeof e != "function" ? lu("Function expected") : e, _u = (e, t, n, r, i) => ({
	kind: hu[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? lu("Already initialized") : i.push(gu(e || null))
}), vu = (e, t) => du(t, cu("metadata"), e[3]), yu = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, bu = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = hu[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && iu(d < 4 ? i : {
		get [n]() {
			return Cu(this, a);
		},
		set [n](e) {
			return Tu(this, a, e);
		}
	}, n));
	d ? p && d < 4 && pu(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : pu(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = _u(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => Su(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Cu : Eu)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Tu(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? gu(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? lu("Object expected") : (gu(o = s.get) && (v.get = o), gu(o = s.set) && (v.set = o), gu(o = s.init) && g.unshift(o));
	return d || vu(e, i), v && ru(i, n, v), p ? d ^ 4 ? a : v : i;
}, xu = (e, t, n) => t.has(e) || lu("Cannot " + n), Su = (e, t) => Object(t) === t ? e.has(t) : lu("Cannot use the \"in\" operator on this value"), Cu = (e, t, n) => (xu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), wu = (e, t, n) => t.has(e) ? lu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Tu = (e, t, n, r) => (xu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Eu = (e, t, n) => (xu(e, t, "access private method"), n), Du = class e {
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
}, Ou = class e {
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
		return c.scale = fu({}, s), c;
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
		return new Du((e + n) / 2, (t + r) / 2);
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
		return t instanceof e ? ku(this, t) : 0;
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
		return Du.delta({
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
function ku(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var Au, ju, Mu, Nu, Pu, Fu = class extends (Mu = Ql, ju = [R], Au = [R], Mu) {
	constructor(e) {
		let t = Du.from(e);
		super(t, (e, t) => Du.equals(e, t)), yu(Pu, 5, this), wu(this, Nu, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return Du.delta(this.current, this.initial);
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
		let { current: t } = this, n = Du.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - Cu(this, Nu), o = (e) => Math.round(e / a * 100);
		N(() => {
			Tu(this, Nu, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(Du.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
Pu = mu(Mu), Nu = /* @__PURE__ */ new WeakMap(), bu(Pu, 2, "delta", ju, Fu), bu(Pu, 2, "direction", Au, Fu), vu(Pu, Fu);
function Iu({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(uu(r, 2) + uu(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n ? i > n.y : !1;
}
var Lu = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(Lu || {}), Ru = Object.values(Lu), zu = Object.create, Bu = Object.defineProperty, Vu = Object.defineProperties, Hu = Object.getOwnPropertyDescriptor, Uu = Object.getOwnPropertyDescriptors, Wu = Object.getOwnPropertySymbols, Gu = Object.prototype.hasOwnProperty, Ku = Object.prototype.propertyIsEnumerable, qu = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ju = (e) => {
	throw TypeError(e);
}, Yu = (e, t, n) => t in e ? Bu(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Xu = (e, t) => {
	for (var n in t ||= {}) Gu.call(t, n) && Yu(e, n, t[n]);
	if (Wu) for (var n of Wu(t)) Ku.call(t, n) && Yu(e, n, t[n]);
	return e;
}, Zu = (e, t) => Vu(e, Uu(t)), Qu = (e, t) => Bu(e, "name", {
	value: t,
	configurable: !0
}), $u = (e, t) => {
	var n = {};
	for (var r in e) Gu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && Wu) for (var r of Wu(e)) t.indexOf(r) < 0 && Ku.call(e, r) && (n[r] = e[r]);
	return n;
}, ed = (e) => [
	,
	,
	,
	zu(e?.[qu("metadata")] ?? null)
], td = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], nd = (e) => e !== void 0 && typeof e != "function" ? Ju("Function expected") : e, rd = (e, t, n, r, i) => ({
	kind: td[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Ju("Already initialized") : i.push(nd(e || null))
}), id = (e, t) => Yu(t, qu("metadata"), e[3]), B = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, V = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = td[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && Hu(d < 4 ? i : {
		get [n]() {
			return H(this, a);
		},
		set [n](e) {
			return sd(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Qu(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Qu(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = rd(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => od(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? H : cd)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => sd(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? nd(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? Ju("Object expected") : (nd(o = s.get) && (v.get = o), nd(o = s.set) && (v.set = o), nd(o = s.init) && g.unshift(o));
	return d || id(e, i), v && Bu(i, n, v), p ? d ^ 4 ? a : v : i;
}, ad = (e, t, n) => t.has(e) || Ju("Cannot " + n), od = (e, t) => Object(t) === t ? e.has(t) : Ju("Cannot use the \"in\" operator on this value"), H = (e, t, n) => (ad(e, t, "read from private field"), n ? n.call(e) : t.get(e)), U = (e, t, n) => t.has(e) ? Ju("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), sd = (e, t, n, r) => (ad(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), cd = (e, t, n) => (ad(e, t, "access private method"), n);
function ld(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function ud(e) {
	return (t) => ld(e, t);
}
function dd(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var fd = [L], pd, md, hd, W = class {
	constructor(e, t) {
		this.manager = e, this.options = t, U(this, md, B(pd, 8, this, !1)), B(pd, 11, this), U(this, hd, /* @__PURE__ */ new Set());
	}
	enable() {
		this.disabled = !1;
	}
	disable() {
		this.disabled = !0;
	}
	isDisabled() {
		return F(() => this.disabled);
	}
	configure(e) {
		this.options = e;
	}
	registerEffect(e) {
		let t = tl(e.bind(this));
		return H(this, hd).add(t), t;
	}
	destroy() {
		H(this, hd).forEach((e) => e());
	}
	static configure(e) {
		return ld(this, e);
	}
};
pd = ed(null), md = /* @__PURE__ */ new WeakMap(), hd = /* @__PURE__ */ new WeakMap(), V(pd, 4, "disabled", fd, W, md), id(pd, W);
var gd = class extends W {}, _d, vd = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), U(this, _d, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(dd).reduceRight((e, t) => e.some(({ plugin: e }) => e === t.plugin) ? e : [t, ...e], []), n = t.map(({ plugin: e }) => e);
		for (let e of H(this, _d)) if (!n.includes(e)) {
			if (e.prototype instanceof gd) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		sd(this, _d, n);
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
_d = /* @__PURE__ */ new WeakMap();
function yd(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var bd = [], xd, Sd, Cd = class extends W {
	constructor(e) {
		super(e), U(this, xd), U(this, Sd), this.computeCollisions = this.computeCollisions.bind(this), sd(this, Sd, Gc(bd)), this.destroy = Ml(() => {
			let e = this.computeCollisions(), t = F(() => this.manager.dragOperation.position.current);
			if (e !== bd) {
				let e = H(this, xd);
				if (sd(this, xd, t), e && t.x == e.x && t.y == e.y) return;
			} else sd(this, xd, void 0);
			H(this, Sd).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		F(() => {
			e ? H(this, Sd).value = this.computeCollisions() : sd(this, xd, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return bd;
		let s = [], c = [];
		for (let a of e ?? n.droppables) {
			if (a.disabled || i && !a.accepts(i)) continue;
			let e = t ?? a.collisionDetector;
			if (!e) continue;
			c.push(a), a.shape;
			let n = F(() => e({
				droppable: a,
				dragOperation: r
			}));
			n && (a.collisionPriority != null && (n.priority = a.collisionPriority), s.push(n));
		}
		return c.length === 0 ? bd : (s.sort(yd), s);
	}
	get collisions() {
		return H(this, Sd).value;
	}
};
xd = /* @__PURE__ */ new WeakMap(), Sd = /* @__PURE__ */ new WeakMap();
var wd = class {
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
}, Td = class extends wd {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function Ed(e, t = !0) {
	let n = !1;
	return Zu(Xu({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var Dd = class extends gd {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = Ml(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled()) return;
			let o = Ed({ collisions: a });
			if (i.dispatch("collision", o), o.defaultPrevented || t(a, n)) return;
			n = a;
			let [s] = a;
			F(() => {
				s?.id !== e.dragOperation.target?.id && (r.disable(), e.actions.setDropTarget(s?.id).then(() => {
					r.enable();
				}));
			});
		});
	}
}, Od = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Od || {}), kd = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(kd || {}), Ad, jd, Md, Nd, Pd, Fd, Id = [L], Ld, Rd;
Fd = [R], Pd = [R], Nd = [R], Md = [R], jd = [R], Ad = [R];
var zd = class {
	constructor() {
		B(Ld, 5, this), U(this, Rd, B(Ld, 8, this, "idle")), B(Ld, 11, this);
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
Ld = ed(null), Rd = /* @__PURE__ */ new WeakMap(), V(Ld, 4, "value", Id, zd, Rd), V(Ld, 2, "current", Fd, zd), V(Ld, 2, "idle", Pd, zd), V(Ld, 2, "initializing", Nd, zd), V(Ld, 2, "initialized", Md, zd), V(Ld, 2, "dragging", jd, zd), V(Ld, 2, "dropped", Ad, zd), id(Ld, zd);
var Bd = class {
	constructor(e) {
		this.manager = e;
	}
	setDragSource(e) {
		let { dragOperation: t } = this.manager;
		t.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
	}
	setDropTarget(e) {
		return F(() => {
			let { dragOperation: t } = this.manager, n = e ?? null;
			if (t.targetIdentifier === n) return Promise.resolve(!1);
			t.targetIdentifier = n;
			let r = Ed({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return F(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			N(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = Ed({ operation: t.snapshot() });
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
		return F(() => {
			let { dragOperation: t } = this.manager, { status: n, controller: r } = t;
			if (!n.dragging || !r || r.signal.aborted) return;
			let i = Ed({
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
		return F(() => {
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
					let e = F(() => t.source?.status === "dropping"), r = () => {
						t.controller === n && (t.controller = void 0), t.reset();
					};
					if (e) {
						let { source: e } = t, n = tl(() => {
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
}, Vd, Hd, Ud, Wd = [L], Gd, Kd, qd, Jd, Yd;
Ud = [L], Hd = [L], Vd = [L];
var Xd = class {
	constructor(e, t) {
		U(this, Kd, B(Gd, 8, this)), B(Gd, 11, this), U(this, qd, B(Gd, 12, this)), B(Gd, 15, this), U(this, Jd, B(Gd, 16, this)), B(Gd, 19, this), U(this, Yd, B(Gd, 20, this)), B(Gd, 23, this);
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
Gd = ed(null), Kd = /* @__PURE__ */ new WeakMap(), qd = /* @__PURE__ */ new WeakMap(), Jd = /* @__PURE__ */ new WeakMap(), Yd = /* @__PURE__ */ new WeakMap(), V(Gd, 4, "manager", Wd, Xd, Kd), V(Gd, 4, "id", Ud, Xd, qd), V(Gd, 4, "data", Hd, Xd, Jd), V(Gd, 4, "disabled", Vd, Xd, Yd), id(Gd, Xd);
var Zd = class {
	constructor() {
		this.map = Gc(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			a.set(e, t), this.map.value = a;
			let o = Ml(...t.effects());
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
}, Qd, $d, ef, tf, nf, rf, af, of, sf, cf, lf, uf = class extends (af = Xd, rf = [L], nf = [L], tf = [L], ef = [R], $d = [R], Qd = [R], af) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a } = n, o = $u(n, [
			"modifiers",
			"type",
			"sensors"
		]);
		super(o, t), B(of, 5, this), U(this, sf, B(of, 8, this)), B(of, 11, this), U(this, cf, B(of, 12, this)), B(of, 15, this), U(this, lf, B(of, 16, this, this.isDragSource ? "dragging" : "idle")), B(of, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = o.alignment;
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
of = ed(af), sf = /* @__PURE__ */ new WeakMap(), cf = /* @__PURE__ */ new WeakMap(), lf = /* @__PURE__ */ new WeakMap(), V(of, 4, "type", rf, uf, sf), V(of, 4, "modifiers", nf, uf, cf), V(of, 4, "status", tf, uf, lf), V(of, 2, "isDropping", ef, uf), V(of, 2, "isDragging", $d, uf), V(of, 2, "isDragSource", Qd, uf), id(of, uf);
var df, ff, pf, mf, hf, gf, _f, G, vf, yf, bf, xf, Sf, Cf = class extends (_f = Xd, gf = [L], hf = [L], mf = [L], pf = [L], ff = [L], df = [R], _f) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = $u(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), B(G, 5, this), U(this, vf, B(G, 8, this)), B(G, 11, this), U(this, yf, B(G, 12, this)), B(G, 15, this), U(this, bf, B(G, 16, this)), B(G, 19, this), U(this, xf, B(G, 20, this)), B(G, 23, this), U(this, Sf, B(G, 24, this)), B(G, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
G = ed(_f), vf = /* @__PURE__ */ new WeakMap(), yf = /* @__PURE__ */ new WeakMap(), bf = /* @__PURE__ */ new WeakMap(), xf = /* @__PURE__ */ new WeakMap(), Sf = /* @__PURE__ */ new WeakMap(), V(G, 4, "accept", gf, Cf, vf), V(G, 4, "type", hf, Cf, yf), V(G, 4, "collisionDetector", mf, Cf, bf), V(G, 4, "collisionPriority", pf, Cf, xf), V(G, 4, "shape", ff, Cf, Sf), V(G, 2, "isDropTarget", df, Cf), id(G, Cf);
var wf = class extends W {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, Tf = class extends AbortController {
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
}, Ef, Df = class {
	constructor(e) {
		this.options = e, U(this, Ef);
	}
	set controller(e) {
		sd(this, Ef, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = H(this, Ef)) == null || t.activate(e);
	}
};
Ef = /* @__PURE__ */ new WeakMap();
var Of = class extends W {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, kf = class {
	constructor(e) {
		this.draggables = new Zd(), this.droppables = new Zd(), this.plugins = new vd(e), this.sensors = new vd(e), this.modifiers = new vd(e);
	}
	register(e, t) {
		if (e instanceof uf) return this.draggables.register(e.id, e);
		if (e instanceof Cf) return this.droppables.register(e.id, e);
		if (e.prototype instanceof Of) return this.modifiers.register(e, t);
		if (e.prototype instanceof wf) return this.sensors.register(e, t);
		if (e.prototype instanceof W) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof Xd) return e instanceof uf ? this.draggables.unregister(e.id, e) : e instanceof Cf ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof Of) return this.modifiers.unregister(e);
		if (e.prototype instanceof wf) return this.sensors.unregister(e);
		if (e.prototype instanceof W) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, Af, jf, Mf, Nf, Pf, Ff, If, Lf, Rf = [R], zf, Bf, Vf, K, Hf, Uf, Wf, Gf, Kf, qf;
Lf = [L], If = [L], Ff = [L], Pf = [L], Nf = [L], Mf = [R], jf = [R], Af = [R];
var Jf = class {
	constructor(e) {
		B(K, 5, this), U(this, zf), U(this, Bf), U(this, Vf, new Ql(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new zd(), U(this, Hf, B(K, 8, this, !1)), B(K, 11, this), U(this, Uf, B(K, 12, this, null)), B(K, 15, this), U(this, Wf, B(K, 16, this, null)), B(K, 19, this), U(this, Gf, B(K, 20, this, null)), B(K, 23, this), U(this, Kf, B(K, 24, this, [])), B(K, 27, this), this.position = new Fu({
			x: 0,
			y: 0
		}), U(this, qf, {
			x: 0,
			y: 0
		}), sd(this, zf, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = H(this, Vf);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? H(this, Vf).current = e : H(this, Vf).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = H(this, zf).registry.draggables.get(e);
		return t && sd(this, Bf, t), t ?? H(this, Bf) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : H(this, zf).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(Zu(Xu({}, this.snapshot()), { transform: n }));
		return sd(this, qf, n), n;
	}
	snapshot() {
		return F(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: H(this, qf),
			shape: this.shape ? $l(this.shape) : null,
			position: $l(this.position),
			status: $l(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		N(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, H(this, Vf).reset(), this.position.reset({
				x: 0,
				y: 0
			}), sd(this, qf, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
K = ed(null), zf = /* @__PURE__ */ new WeakMap(), Bf = /* @__PURE__ */ new WeakMap(), Vf = /* @__PURE__ */ new WeakMap(), Hf = /* @__PURE__ */ new WeakMap(), Uf = /* @__PURE__ */ new WeakMap(), Wf = /* @__PURE__ */ new WeakMap(), Gf = /* @__PURE__ */ new WeakMap(), Kf = /* @__PURE__ */ new WeakMap(), qf = /* @__PURE__ */ new WeakMap(), V(K, 2, "shape", Rf, Jf), V(K, 4, "canceled", Lf, Jf, Hf), V(K, 4, "activatorEvent", If, Jf, Uf), V(K, 4, "sourceIdentifier", Ff, Jf, Wf), V(K, 4, "targetIdentifier", Pf, Jf, Gf), V(K, 4, "modifiers", Nf, Jf, Kf), V(K, 2, "source", Mf, Jf), V(K, 2, "target", jf, Jf), V(K, 2, "transform", Af, Jf), id(K, Jf);
var Yf = { get rendering() {
	return Promise.resolve();
} };
function Xf(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var Zf = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = Xf(t.plugins, []), r = Xf(t.sensors, []), i = Xf(t.modifiers, []), a = t.renderer ?? Yf, o = new Td(this);
		this.registry = new kf(this), this.monitor = o, this.renderer = a, this.actions = new Bd(this), this.dragOperation = new Jf(this), this.collisionObserver = new Cd(this), this.plugins = [Dd, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: s } = this, c = Ml(() => {
			let e = F(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = dd(e);
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
}, Qf = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / Du.distance(t.shape.center, n),
		type: kd.PointerIntersection,
		priority: Od.High
	} : null;
}, $f = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = Du.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: kd.ShapeIntersection,
			priority: Od.Normal
		};
	}
	return null;
}, ep = (e) => Qf(e) ?? $f(e), tp = (e) => {
	let { dragOperation: t, droppable: n } = e, { shape: r, position: i } = t;
	if (!n.shape) return null;
	let a = r ? Ou.from(r.current.boundingRectangle).corners : void 0, o = Ou.from(n.shape.boundingRectangle).corners.reduce((e, t, n) => e + Du.distance(Du.from(t), a?.[n] ?? i.current), 0) / 4;
	return {
		id: n.id,
		value: 1 / o,
		type: kd.Collision,
		priority: Od.Normal
	};
}, np = (e) => {
	throw TypeError(e);
}, rp = (e, t, n) => t.has(e) || np("Cannot " + n), q = (e, t, n) => (rp(e, t, "read from private field"), t.get(e)), ip = (e, t, n) => t.has(e) ? np("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ap = (e, t, n, r) => (rp(e, t, "write to private field"), t.set(e, n), n), op = (e, t, n) => (rp(e, t, "access private method"), n);
function sp(e) {
	return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function cp(e, t) {
	let n = e.getAnimations();
	if (n.length > 0) for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, r = (sp(n) ? n.getKeyframes() : []).filter(t);
		if (r.length > 0) return [r[r.length - 1], e];
	}
	return null;
}
function lp(e) {
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
function up(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function dp(e) {
	return "nodeType" in e;
}
function fp(e) {
	return e ? up(e) ? e : dp(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function pp(e) {
	let { Document: t } = fp(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function mp(e) {
	return !e || up(e) ? !1 : e instanceof fp(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function hp(e) {
	return e instanceof fp(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function gp(e) {
	return e ? up(e) ? e.document : dp(e) ? pp(e) ? e : mp(e) || hp(e) ? e.ownerDocument : document : document : document;
}
function _p(e) {
	let { documentElement: t } = gp(e), n = fp(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function vp(e, t) {
	if (yp(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function yp(e) {
	return e.tagName === "DETAILS";
}
function bp(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!vp(o)) {
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
function xp(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var Sp = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Cp(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...Cp(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...Cp(i.document, t));
		}
	} catch {}
	return n;
}
function wp() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Tp() {
	let e = wp() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function Ep(e) {
	return !e || !dp(e) ? !1 : e instanceof fp(e).ShadowRoot;
}
function Dp(e) {
	if (e && dp(e)) {
		let t = e.getRootNode();
		if (Ep(t) || t instanceof Document) return t;
	}
	return gp(e);
}
function Op(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function kp(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		Ap(e) && Ap(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), jp(e) && jp(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function Ap(e) {
	return "value" in e;
}
function jp(e) {
	return e.tagName === "CANVAS";
}
function Mp(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (Np(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return Mp(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function Np(e) {
	return e?.tagName === "IFRAME";
}
var Pp = /* @__PURE__ */ new WeakMap();
function Fp(e) {
	return !!e.closest("\n      input:not([disabled]),\n      select:not([disabled]),\n      textarea:not([disabled]),\n      button:not([disabled]),\n      a[href],\n      [contenteditable]:not([contenteditable=\"false\"])\n    ");
}
var Ip = class {
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
function Lp(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function Rp(e) {
	let t = /* @__PURE__ */ new Set(), n = Lp(e);
	for (; n;) t.add(n), n = Lp(n);
	return t;
}
function zp(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function Bp(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = zp(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function Vp(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function Hp(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = bp(e, t);
	return n > 0 && r > 0;
}
var Up = Sp ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, Wp, Gp = class extends Up {
	constructor(e) {
		super((t) => {
			if (!q(this, Wp)) {
				ap(this, Wp, !0);
				return;
			}
			e(t, this);
		}), ip(this, Wp, !1);
	}
};
Wp = /* @__PURE__ */ new WeakMap();
var Kp = Array.from({ length: 100 }, (e, t) => t / 100), qp = 75, Jp, Yp, Xp, Zp, Qp, J, $p, em, tm, nm, rm, im = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, ip(this, tm), this.disconnect = () => {
			var e, t, n;
			ap(this, $p, !0), (e = q(this, Xp)) == null || e.disconnect(), (t = q(this, Zp)) == null || t.disconnect(), q(this, Qp).disconnect(), (n = q(this, J)) == null || n.remove();
		}, ip(this, Jp, !0), ip(this, Yp), ip(this, Xp), ip(this, Zp), ip(this, Qp), ip(this, J), ip(this, $p, !1), ip(this, em, Bp(() => {
			var e;
			let { element: t } = this;
			if ((e = q(this, Zp)) == null || e.disconnect(), q(this, $p) || !q(this, Jp) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = bp(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, ap(this, Zp, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? Ou.intersectionRatio(r, bp(t)) : n.intersectionRatio) !== 1 && q(this, em).call(this);
			}, {
				threshold: Kp,
				rootMargin: f,
				root: n
			})), q(this, Zp).observe(t), op(this, tm, nm).call(this);
		}, qp)), this.boundingClientRect = e.getBoundingClientRect(), ap(this, Jp, Hp(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (ap(this, J, document.createElement("div")), q(this, J).style.background = "rgba(0,0,0,0.15)", q(this, J).style.position = "fixed", q(this, J).style.pointerEvents = "none", i.body.appendChild(q(this, J))), ap(this, Qp, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = q(this, Jp);
			ap(this, Jp, a), !(!o && !s) && (c && !a ? ((n = q(this, Zp)) == null || n.disconnect(), this.callback(null), (r = q(this, Xp)) == null || r.disconnect(), ap(this, Xp, void 0), q(this, J) && (q(this, J).style.visibility = "hidden")) : q(this, em).call(this), a && !q(this, Xp) && (ap(this, Xp, new Gp(q(this, em))), q(this, Xp).observe(e)));
		}, {
			threshold: Kp,
			root: i
		})), q(this, Jp) && !n.skipInitial && this.callback(this.boundingClientRect), q(this, Qp).observe(e);
	}
};
Jp = /* @__PURE__ */ new WeakMap(), Yp = /* @__PURE__ */ new WeakMap(), Xp = /* @__PURE__ */ new WeakMap(), Zp = /* @__PURE__ */ new WeakMap(), Qp = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), $p = /* @__PURE__ */ new WeakMap(), em = /* @__PURE__ */ new WeakMap(), tm = /* @__PURE__ */ new WeakSet(), nm = function() {
	q(this, $p) || (op(this, tm, rm).call(this), !Vp(this.boundingClientRect, q(this, Yp)) && (this.callback(this.boundingClientRect), ap(this, Yp, this.boundingClientRect)));
}, rm = function() {
	if (q(this, J)) {
		let { top: e, left: t, width: n, height: r } = bp(this.element);
		q(this, J).style.overflow = "hidden", q(this, J).style.visibility = "visible", q(this, J).style.top = `${Math.floor(e)}px`, q(this, J).style.left = `${Math.floor(t)}px`, q(this, J).style.width = `${Math.floor(n)}px`, q(this, J).style.height = `${Math.floor(r)}px`;
	}
};
var am = /* @__PURE__ */ new WeakMap(), om = /* @__PURE__ */ new WeakMap();
function sm(e, t) {
	let n = am.get(e);
	return n ||= {
		disconnect: new im(e, (t) => {
			let n = am.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), am.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (am.delete(e), n.disconnect());
	};
}
function cm(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = sm(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function lm(e, t) {
	let n = e.ownerDocument;
	if (!om.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), om.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = om.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), om.delete(n));
	});
}
var um, dm, fm, pm, mm = class {
	constructor(e, t, n) {
		this.callback = t, ip(this, um), ip(this, dm, !1), ip(this, fm), ip(this, pm, Bp((e) => {
			if (!q(this, dm) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of q(this, fm)) if (e.target.contains(t)) {
					this.callback(q(this, um).boundingClientRect);
					break;
				}
			}
		}, qp));
		let r = Rp(e), i = cm(r, t), a = lm(e, q(this, pm));
		ap(this, fm, r), ap(this, um, new im(e, t, n)), this.disconnect = () => {
			q(this, dm) || (ap(this, dm, !0), i(), a(), q(this, um).disconnect());
		};
	}
};
um = /* @__PURE__ */ new WeakMap(), dm = /* @__PURE__ */ new WeakMap(), fm = /* @__PURE__ */ new WeakMap(), pm = /* @__PURE__ */ new WeakMap();
function hm(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function gm(e) {
	try {
		hm(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function _m(e) {
	return !Sp || !e ? !1 : e === gp(e).scrollingElement;
}
function vm(e) {
	let t = fp(e), n = _m(e) ? _p(e) : lp(e), r = t.visualViewport, i = _m(e) ? {
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
function ym(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = vm(e), { x: s, y: c } = t ?? {
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
var bm = class {
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
}, xm = new bm((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), Sm = new bm((e) => setTimeout(e, 50)), Cm = /* @__PURE__ */ new Map(), wm = Cm.clear.bind(Cm);
function Tm(e, t = !1) {
	if (!t) return Em(e);
	let n = Cm.get(e);
	return n || (n = Em(e), Cm.set(e, n), Sm.schedule(wm), n);
}
function Em(e) {
	return fp(e).getComputedStyle(e);
}
function Dm(e, t = Tm(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function Om(e, t = Tm(e, !0)) {
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
var km = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function Am(e, t = km) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (pp(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && Ep(t)) return o(t.host);
		if (!mp(t)) return hp(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = Tm(t, !0);
		if (r && t === e || Om(t, s) && a.add(t), Dm(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function jm(e) {
	let [t] = Am(e, { limit: 1 });
	return t ?? null;
}
function Mm(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = Lp(e);
	for (; r;) {
		if (r === t) return n;
		let e = lp(r), { x: i, y: a } = Nm(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = Lp(r);
	}
	return n;
}
function Nm(e, t = lp(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (mp(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = Tm(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function Pm(e) {
	if (e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function Fm(e) {
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
function Im(e) {
	let { scale: t, transform: n, translate: r } = e, i = Pm(t), a = Fm(r), o = Lm(n);
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
function Lm(e) {
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
var Rm = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(Rm || {}), zm = {
	x: .2,
	y: .2
}, Bm = {
	x: 10,
	y: 10
};
function Vm(e, t, n, r = 25, i = zm, a = Bm) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = vm(e), p = Mm(e), m = Im(Tm(e, !0)), h = m === null ? !1 : m?.scaleX < 0, g = m === null ? !1 : m?.scaleY < 0, _ = new Ou(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
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
function Hm(e) {
	return "scrollIntoViewIfNeeded" in e && typeof e.scrollIntoViewIfNeeded == "function";
}
function Um(e, t = !1) {
	if (Hm(e)) {
		e.scrollIntoViewIfNeeded(t);
		return;
	}
	if (!mp(e)) return e.scrollIntoView();
	var n = jm(e);
	if (!mp(n)) return;
	let r = Tm(n, !0), i = parseInt(r.getPropertyValue("border-top-width")), a = parseInt(r.getPropertyValue("border-left-width")), o = e.offsetTop - n.offsetTop < n.scrollTop, s = e.offsetTop - n.offsetTop + e.clientHeight - i > n.scrollTop + n.clientHeight, c = e.offsetLeft - n.offsetLeft < n.scrollLeft, l = e.offsetLeft - n.offsetLeft + e.clientWidth - a > n.scrollLeft + n.clientWidth, u = o && !s;
	(o || s) && t && (n.scrollTop = e.offsetTop - n.offsetTop - n.clientHeight / 2 - i + e.clientHeight / 2), (c || l) && t && (n.scrollLeft = e.offsetLeft - n.offsetLeft - n.clientWidth / 2 - a + e.clientWidth / 2), (o || s || c || l) && !t && e.scrollIntoView(u);
}
function Wm(e, t, n) {
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
function Gm(e, t, n) {
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
function Km({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
function qm(e, t = Tm(e).translate, n = !0) {
	if (n) {
		let t = cp(e, (e) => "translate" in e);
		if (t) {
			let { translate: e = "" } = t[0];
			if (typeof e == "string") {
				let t = Fm(e);
				if (t) return t;
			}
		}
	}
	if (t) {
		let e = Fm(t);
		if (e) return e;
	}
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
var Jm = new bm((e) => setTimeout(e, 0)), Ym = /* @__PURE__ */ new Map(), Xm = Ym.clear.bind(Ym);
function Zm(e) {
	let t = e.ownerDocument, n = Ym.get(t);
	if (n) return n;
	n = t.getAnimations(), Ym.set(t, n), Jm.schedule(Xm);
	let r = n.filter((t) => sp(t.effect) && t.effect.target === e);
	return Ym.set(e, r), n;
}
function Qm(e, t) {
	let n = Zm(e).filter((e) => {
		if (sp(e.effect)) {
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
var $m = class extends Ou {
	constructor(e, t = {}) {
		let { frameTransform: n = Mm(e), ignoreTransforms: r, getBoundingClientRect: i = lp } = t, a = Qm(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || wp()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = Tm(e), p = Im(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = eh(e, f);
		a?.(), p && (d = Gm(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = Wm(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function eh(e, t) {
	let n = e.getAnimations(), r = null;
	if (!n.length) return null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let n = sp(e.effect) ? e.effect.getKeyframes() : [], i = n[n.length - 1];
		if (!i) continue;
		let { transform: a, translate: o, scale: s } = i;
		if (a || o || s) {
			let e = Im({
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
function th(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var nh = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (th(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (th(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (th(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function rh(e) {
	return e ? e instanceof fp(e).Element || dp(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function ih(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = fp(e.target);
	return e instanceof t;
}
function ah(e) {
	if (!e) return !1;
	let { PointerEvent: t } = fp(e.target);
	return e instanceof t;
}
function oh(e) {
	if (!rh(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || sh(e);
}
function sh(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var ch = {};
function lh(e) {
	let t = ch[e] == null ? 0 : ch[e] + 1;
	return ch[e] = t, `${e}-${t}`;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/index.js
var uh = Object.create, dh = Object.defineProperty, fh = Object.defineProperties, ph = Object.getOwnPropertyDescriptor, mh = Object.getOwnPropertyDescriptors, hh = Object.getOwnPropertySymbols, gh = Object.prototype.hasOwnProperty, _h = Object.prototype.propertyIsEnumerable, vh = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), yh = (e) => {
	throw TypeError(e);
}, bh = (e, t, n) => t in e ? dh(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, xh = (e, t) => {
	for (var n in t ||= {}) gh.call(t, n) && bh(e, n, t[n]);
	if (hh) for (var n of hh(t)) _h.call(t, n) && bh(e, n, t[n]);
	return e;
}, Sh = (e, t) => fh(e, mh(t)), Ch = (e, t) => dh(e, "name", {
	value: t,
	configurable: !0
}), wh = (e, t) => {
	var n = {};
	for (var r in e) gh.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && hh) for (var r of hh(e)) t.indexOf(r) < 0 && _h.call(e, r) && (n[r] = e[r]);
	return n;
}, Th = (e) => [
	,
	,
	,
	uh(e?.[vh("metadata")] ?? null)
], Eh = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Dh = (e) => e !== void 0 && typeof e != "function" ? yh("Function expected") : e, Oh = (e, t, n, r, i) => ({
	kind: Eh[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? yh("Already initialized") : i.push(Dh(e || null))
}), kh = (e, t) => bh(t, vh("metadata"), e[3]), Y = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Ah = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = Eh[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && ph(d < 4 ? i : {
		get [n]() {
			return X(this, a);
		},
		set [n](e) {
			return Nh(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Ch(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Ch(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = Oh(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => Mh(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? X : Ph)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Nh(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? Dh(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? yh("Object expected") : (Dh(o = s.get) && (v.get = o), Dh(o = s.set) && (v.set = o), Dh(o = s.init) && g.unshift(o));
	return d || kh(e, i), v && dh(i, n, v), p ? d ^ 4 ? a : v : i;
}, jh = (e, t, n) => t.has(e) || yh("Cannot " + n), Mh = (e, t) => Object(t) === t ? e.has(t) : yh("Cannot use the \"in\" operator on this value"), X = (e, t, n) => (jh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Z = (e, t, n) => t.has(e) ? yh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Nh = (e, t, n, r) => (jh(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ph = (e, t, n) => (jh(e, t, "access private method"), n), Fh = {
	role: "button",
	roleDescription: "draggable"
}, Ih = "dnd-kit-description", Lh = "dnd-kit-announcement", Rh = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, zh = {
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
function Bh(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function Vh(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function Hh(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var Uh = ["dragover", "dragmove"], Wh = class extends W {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = Ih, announcement: i = Lh } = {}, announcements: a = zh, screenReaderInstructions: o = Rh, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : lh(r), l = n ? `${i}-${n}` : lh(i), u, d, f, p, m = (e = p) => {
			!f || !e || f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => xm.schedule(m), g = Gh(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, Uh.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = Vh(c, o.draggable), e.push(u)), d?.isConnected || (d = Hh(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!Bh(t) || wp()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", Fh.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", Fh.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && xm.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function Gh(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var Kh = class extends W {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let n = kl(() => gp(this.manager.dragOperation.source?.element));
		this.destroy = tl(() => {
			let { dragOperation: e } = this.manager, { cursor: t = "grabbing", nonce: r } = this.options ?? {};
			if (e.status.initialized) {
				let e = n.value, i = e.createElement("style");
				return r && i.setAttribute("nonce", r), i.textContent = `* { cursor: ${t} !important; }`, e.head.appendChild(i), () => i.remove();
			}
		});
	}
}, qh = /* @__PURE__ */ new Map(), Jh, Yh, Xh, Zh, Qh, $h, eg, tg, ng, rg, ig, ag, og, sg = class extends (Qh = gd, Zh = [L], Xh = [R], Yh = [R], Jh = [R], Qh) {
	constructor(e) {
		super(e), Y(eg, 5, this), Z(this, ng), Z(this, $h, /* @__PURE__ */ new Set()), Z(this, tg, Y(eg, 8, this, /* @__PURE__ */ new Set())), Y(eg, 11, this), this.registerEffect(Ph(this, ng, rg));
	}
	register(e) {
		return X(this, $h).add(e), () => {
			X(this, $h).delete(e);
		};
	}
	addRoot(e) {
		return F(() => {
			let t = new Set(this.additionalRoots);
			t.add(e), this.additionalRoots = t;
		}), () => {
			F(() => {
				let t = new Set(this.additionalRoots);
				t.delete(e), this.additionalRoots = t;
			});
		};
	}
	get sourceRoot() {
		let { source: e } = this.manager.dragOperation;
		return Dp(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return Dp(e?.element ?? null);
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
eg = Th(Qh), $h = /* @__PURE__ */ new WeakMap(), tg = /* @__PURE__ */ new WeakMap(), ng = /* @__PURE__ */ new WeakSet(), rg = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of X(this, $h)) t.push(Ph(this, ng, ig).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, ig = function(e, t) {
	let n = qh.get(e);
	n || (n = /* @__PURE__ */ new Map(), qh.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = pp(e) ? Ph(this, ng, ag).call(this, e, n, t) : Ph(this, ng, og).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, ag = function(e, t, n) {
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
			i.disconnect(), r.remove(), t.delete(n), t.size === 0 && qh.delete(e);
		}
	};
}, og = function(e, t, n) {
	"adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets);
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (Ep(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && qh.delete(e);
		}
	};
}, Ah(eg, 4, "additionalRoots", Zh, sg, tg), Ah(eg, 2, "sourceRoot", Xh, sg), Ah(eg, 2, "targetRoot", Yh, sg), Ah(eg, 2, "roots", Jh, sg), kh(eg, sg);
var cg = "data-dnd-", lg = `${cg}dropping`, Q = "--dnd-", ug = `${cg}dragging`, dg = `${cg}placeholder`, fg = [
	ug,
	dg,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], pg = ["view-transition-name"], mg = `
  :is(:root,:host) [${ug}] {
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

  :is(:root,:host) [${dg}] {
    transition: none;
  }

  :is(:root,:host) [${dg}='hidden'] {
    visibility: hidden;
  }

  [${ug}] * {
    pointer-events: none !important;
  }

  [${ug}]:not([${lg}]) {
    translate: var(${Q}translate) !important;
  }

  [${ug}][style*='${Q}scale'] {
    scale: var(${Q}scale) !important;
    transform-origin: var(${Q}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${ug}][popover]) {
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
  [${ug}]::backdrop, [${cg}overlay]:not([${ug}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function hg(e, t = "hidden") {
	return F(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = gg(n, r.registry.droppables), a = [], o = kp(n), { remove: s } = o;
		return _g(i, o, a), vg(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function gg(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${cg}${lh("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function _g(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), Pp.set(o, a), n.push(() => {
			Pp.delete(o), r.proxy = void 0;
		});
	}
}
function vg(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(dg, t);
}
function yg(e, t) {
	return e === t ? !0 : Lp(e) === Lp(t);
}
function bg(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && rh(t) && t.hasAttribute("popover") && requestAnimationFrame(() => gm(t));
}
function xg(e) {
	return e.tagName === "TR";
}
function Sg(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || fg.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (th(e) && th(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (pg.includes(e) || e.startsWith(Q)) continue;
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
function Cg(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), gm(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), gm(n);
				return;
			}
		}
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function wg(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new $m(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = Tp();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, Q), (t = e.getElementMutationObserver()) == null || t.takeRecords(), xg(e.element) && xg(e.placeholder)) {
			let t = Array.from(e.element.cells), n = Array.from(e.placeholder.cells);
			e.getSavedCellWidths() || e.setSavedCellWidths(t.map((e) => e.style.width));
			for (let [e, r] of t.entries()) {
				let t = n[e];
				r.style.width = `${t.getBoundingClientRect().width}px`;
			}
		}
		e.dragOperation.shape = new $m(e.feedbackElement);
	});
}
var Tg = 250, Eg = "ease";
function Dg(e) {
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
	let { duration: r = Tg, easing: i = Eg } = n ?? {};
	gm(e.feedbackElement);
	let [, a] = cp(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: yg(e.feedbackElement, o) ? null : void 0 }, c = new $m(e.feedbackElement, s), l = Fm(Tm(e.feedbackElement).translate) ?? e.translate, u = new $m(o, s), d = Ou.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, Q), e.feedbackElement.setAttribute(lg, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), Km({
		element: e.feedbackElement,
		keyframes: Sh(xh(xh({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: Op(fp(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(lg), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var Og, kg, Ag, jg, Mg, Ng, Pg, Fg = class extends (kg = W, Og = [L], kg) {
	constructor(e, t) {
		super(e, t), Z(this, Mg), Z(this, jg, Y(Ag, 8, this)), Y(Ag, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(sg), r = n?.register(mg);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(Ph(this, Mg, Ng).bind(this, n)), this.registerEffect(Ph(this, Mg, Pg));
	}
};
Ag = Th(kg), jg = /* @__PURE__ */ new WeakMap(), Mg = /* @__PURE__ */ new WeakSet(), Ng = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = Dp(t);
	if (n) return e.addRoot(n);
}, Pg = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s, feedback: c } = a;
	if (!s || c === "none" || !o.initialized || o.initializing) return;
	let { initial: l } = e, u = this.overlay ?? s, d = Mm(u), f = Mm(s), p = !yg(s, u), m = new $m(s, {
		frameTransform: p ? f : null,
		ignoreTransforms: !p
	}), h = {
		x: f.scaleX / d.scaleX,
		y: f.scaleY / d.scaleY
	}, { width: g, height: _, top: v, left: y } = m;
	p && (g /= h.x, _ /= h.y);
	let b = new nh(u), { transition: x, translate: S, boxSizing: C, paddingBlockStart: ee, paddingBlockEnd: te, paddingInlineStart: ne, paddingInlineEnd: w, borderInlineStartWidth: re, borderInlineEndWidth: T, borderBlockStartWidth: ie, borderBlockEndWidth: ae } = Tm(s), oe = c === "clone", se = C === "content-box", ce = se ? parseInt(ne) + parseInt(w) + parseInt(re) + parseInt(T) : 0, le = se ? parseInt(ee) + parseInt(te) + parseInt(ie) + parseInt(ae) : 0, E = c !== "move" && !this.overlay ? hg(a, oe ? "clone" : "hidden") : null, ue = F(() => ih(t.dragOperation.activatorEvent));
	if (S !== "none") {
		let e = Fm(S);
		e && !l.translate && (l.translate = e);
	}
	if (!l.transformOrigin) {
		let e = F(() => i.current);
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
	u.setAttribute(ug, "true");
	let ve = F(() => r.transform), ye = l.translate ?? {
		x: 0,
		y: 0
	}, be = ve.x * d.scaleX + ye.x, xe = ve.y * d.scaleY + ye.y, Se = Tp();
	b.set({
		width: g - ce,
		height: _ - le,
		top: _e.top + Se.y,
		left: _e.left + Se.x,
		translate: `${be}px ${xe}px 0`,
		transition: x ? `${x}, translate 0ms linear` : "",
		scale: p ? `${h.x} ${h.y}` : "",
		"transform-origin": `${de.x * 100}% ${de.y * 100}%`
	}, Q), E && (s.insertAdjacentElement("afterend", E), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), hm(u) && (u.hasAttribute("popover") || u.setAttribute("popover", "manual"), gm(u), u.addEventListener("beforetoggle", bg));
	let Ce, we, D, O = wg({
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
	}), Te = new $m(u);
	F(() => r.shape = Te);
	let Ee = fp(u), De = (e) => {
		this.manager.actions.stop({ event: e });
	}, Oe = Op(Ee);
	ue && Ee.addEventListener("resize", De), F(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), E && (O.observe(E), Ce = Sg(s, E, oe), we = Cg(s, E, u));
	let ke = t.dragOperation.source?.id, Ae = () => {
		if (!ue || ke == null) return;
		let e = t.registry.draggables.get(ke), n = e?.handle ?? e?.element;
		mp(n) && n.focus();
	}, je = () => {
		if (Ce?.disconnect(), we?.disconnect(), O.disconnect(), Ee.removeEventListener("resize", De), hm(u) && (u.removeEventListener("beforetoggle", bg), u.removeAttribute("popover")), u.removeAttribute(ug), b.reset(), D && xg(s)) {
			let e = Array.from(s.cells);
			for (let [t, n] of e.entries()) n.style.width = D[t] ?? "";
		}
		a.status = "idle";
		let t = e.current.translate != null;
		E && (t || E.parentElement !== u.parentElement) && u.isConnected && E.replaceWith(u), E?.remove();
	}, Me = n?.dropAnimation, Ne = this, Pe = Ml(() => {
		let { transform: t, status: n } = r;
		if (!(!t.x && !t.y && !e.current.translate) && n.dragging) {
			let n = l.translate ?? {
				x: 0,
				y: 0
			}, i = {
				x: t.x / d.scaleX + n.x,
				y: t.y / d.scaleY + n.y
			}, a = e.current.translate, o = F(() => r.modifiers), s = F(() => r.shape?.current), c = ue && !Oe ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
			if (b.set({
				transition: `${x}, translate ${c}`,
				translate: `${i.x}px ${i.y}px 0`
			}, Q), Ce?.takeRecords(), s && s !== Te && a && !o.length) {
				let e = Du.delta(i, a);
				r.shape = Ou.from(s.boundingRectangle).translate(e.x * d.scaleX, e.y * d.scaleY);
			} else r.shape = new $m(u);
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
				Dg({
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
}, Ah(Ag, 4, "overlay", Og, Fg, jg), kh(Ag, Fg), Fg.configure = ud(Fg);
var Ig = Fg, Lg = !0, Rg = !1, zg, Bg, Vg, Hg = (Vg = [L], Rm.Forward), Ug, Wg, Gg;
Bg = (zg = [L], Rm.Reverse);
var Kg = class {
	constructor() {
		Z(this, Wg, Y(Ug, 8, this, Lg)), Y(Ug, 11, this), Z(this, Gg, Y(Ug, 12, this, Lg)), Y(Ug, 15, this);
	}
	isLocked(e) {
		return e === Rm.Idle ? !1 : e == null ? this[Rm.Forward] === Lg && this[Rm.Reverse] === Lg : this[e] === Lg;
	}
	unlock(e) {
		e !== Rm.Idle && (this[e] = Rg);
	}
};
Ug = Th(null), Wg = /* @__PURE__ */ new WeakMap(), Gg = /* @__PURE__ */ new WeakMap(), Ah(Ug, 4, Hg, Vg, Kg, Wg), Ah(Ug, 4, Bg, zg, Kg, Gg), kh(Ug, Kg);
var qg = [Rm.Forward, Rm.Reverse], Jg = class {
	constructor() {
		this.x = new Kg(), this.y = new Kg();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, Yg = class extends W {
	constructor(e) {
		super(e);
		let t = Gc(new Jg()), n = null;
		this.signal = t, tl(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new Jg();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: Xg(i.x, n.x),
					y: Xg(i.y, n.y)
				}, r = t.peek();
				N(() => {
					for (let t of Ru) for (let n of qg) e[t] === n && r[t].unlock(n);
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
function Xg(e, t) {
	return Math.sign(e - t);
}
var Zg, Qg, $g, e_, t_, n_, r_ = class extends (Qg = gd, Zg = [L], Qg) {
	constructor(e) {
		super(e), Z(this, e_, Y($g, 8, this, !1)), Y($g, 11, this), Z(this, t_), Z(this, n_, () => {
			if (!X(this, t_)) return;
			let { element: e, by: t } = X(this, t_);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e) => {
			if (this.disabled) return !1;
			let t = this.getScrollableElements();
			if (!t) return Nh(this, t_, void 0), !1;
			let { position: n } = this.manager.dragOperation, r = n?.current;
			if (r) {
				let { by: n } = e ?? {}, i = n ? {
					x: i_(n.x),
					y: i_(n.y)
				} : void 0, a = i ? void 0 : this.scrollIntentTracker.current;
				if (a?.isLocked()) return !1;
				for (let e of t) {
					let t = ym(e, n);
					if (t.x || t.y) {
						let { speed: t, direction: o } = Vm(e, r, i);
						if (a) for (let e of Ru) a[e].isLocked(o[e]) && (t[e] = 0, o[e] = 0);
						if (o.x || o.y) {
							let { x: r, y: i } = n ?? o, a = r * t.x, s = i * t.y;
							if (a || s) {
								let t = X(this, t_)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !s)) continue;
								return Nh(this, t_, {
									element: e,
									by: {
										x: a,
										y: s
									}
								}), xm.schedule(X(this, n_)), !0;
							}
						}
					}
				}
			}
			return Nh(this, t_, void 0), !1;
		};
		let t = null, n = null, r = kl(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = Mp(Dp(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = kl(() => {
			let t = r.value, { documentElement: i } = gp(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = Am(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = Am(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, Al);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new Yg(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			this.disabled || t.defaultPrevented || !ih(e.dragOperation.activatorEvent) || !t.by || this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
$g = Th(Qg), e_ = /* @__PURE__ */ new WeakMap(), t_ = /* @__PURE__ */ new WeakMap(), n_ = /* @__PURE__ */ new WeakMap(), Ah($g, 4, "autoScrolling", Zg, r_, e_), kh($g, r_);
function i_(e) {
	return e > 0 ? Rm.Forward : e < 0 ? Rm.Reverse : Rm.Idle;
}
var a_ = new class {
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
}), o_ = 10, s_ = class extends W {
	constructor(e, t) {
		super(e);
		let n = e.registry.plugins.get(r_);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = tl(() => {
			if (this.disabled) return;
			let { position: t, status: r } = e.dragOperation;
			if (r.dragging) if (n.scroll()) {
				n.autoScrolling = !0;
				let e = setInterval(() => a_.schedule(n.scroll), o_);
				return () => {
					clearInterval(e);
				};
			} else n.autoScrolling = !1;
		});
	}
}, c_ = {
	capture: !0,
	passive: !0
}, l_, u_ = class extends gd {
	constructor(e) {
		super(e), Z(this, l_), this.handleScroll = () => {
			X(this, l_) ?? Nh(this, l_, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), Nh(this, l_, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = tl(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, c_), () => {
					e.removeEventListener("scroll", this.handleScroll, c_);
				};
			}
		});
	}
};
l_ = /* @__PURE__ */ new WeakMap();
var d_ = class extends W {
	constructor(e, t) {
		super(e, t), this.manager = e, this.destroy = tl(() => {
			let { dragOperation: e } = this.manager, { nonce: t } = this.options ?? {};
			if (e.status.initialized) {
				let e = document.createElement("style");
				return t && e.setAttribute("nonce", t), e.textContent = "* { user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(e), f_(), document.addEventListener("selectionchange", f_, { capture: !0 }), () => {
					document.removeEventListener("selectionchange", f_, { capture: !0 }), e.remove();
				};
			}
		});
	}
};
function f_() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var p_ = Object.freeze({
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
}), m_, h_ = class extends wf {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, Z(this, m_, []), this.listeners = new Ip(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !rh(e.target) || t.disabled) return;
			let { keyboardCodes: r = p_.keyboardCodes, preventActivation: i = p_.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return tl(() => {
			let n = e.handle ?? e.element, r = (n) => {
				ih(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), Um(r);
		let { center: i } = new $m(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = gp(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		X(this, m_).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = p_.keyboardCodes } = n ?? {};
		if (__(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = __(e, r.cancel);
			this.handleEnd(e, t);
			return;
		}
		__(e, r.up) ? this.handleMove("up", e) : __(e, r.down) && this.handleMove("down", e), __(e, r.left) ? this.handleMove("left", e) : __(e, r.right) && this.handleMove("right", e);
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
		}, a = this.options?.offset ?? p_.offset;
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
		let e = this.manager.registry.plugins.get(s_);
		e?.disabled === !1 && (e.disable(), X(this, m_).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		X(this, m_).forEach((e) => e()), Nh(this, m_, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
m_ = /* @__PURE__ */ new WeakMap(), h_.configure = ud(h_), h_.defaults = p_;
var g_ = h_;
function __(e, t) {
	return t.includes(e.code);
}
var v_, y_ = class extends Df {
	constructor() {
		super(...arguments), Z(this, v_);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				Nh(this, v_, xp(e));
				break;
			case "pointermove":
				if (!X(this, v_)) return;
				let { x: t, y: n } = xp(e), r = {
					x: t - X(this, v_).x,
					y: n - X(this, v_).y
				}, { tolerance: i } = this.options;
				if (i && Iu(r, i)) {
					this.abort();
					return;
				}
				Iu(r, this.options.value) && this.activate(e);
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		Nh(this, v_, void 0);
	}
};
v_ = /* @__PURE__ */ new WeakMap();
var b_, x_, S_ = class extends Df {
	constructor() {
		super(...arguments), Z(this, b_), Z(this, x_);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				Nh(this, x_, xp(e)), Nh(this, b_, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!X(this, x_)) return;
				let { x: t, y: n } = xp(e);
				Iu({
					x: t - X(this, x_).x,
					y: n - X(this, x_).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		X(this, b_) && (clearTimeout(X(this, b_)), Nh(this, x_, void 0), Nh(this, b_, void 0));
	}
};
b_ = /* @__PURE__ */ new WeakMap(), x_ = /* @__PURE__ */ new WeakMap();
var C_ = class {};
C_.Delay = S_, C_.Distance = y_;
var w_ = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (!(n === "mouse" && rh(r) && (t.handle === r || t.handle?.contains(r)))) return n === "touch" ? [new C_.Delay({
			value: 250,
			tolerance: 5
		})] : oh(r) && !e.defaultPrevented ? [new C_.Delay({
			value: 200,
			tolerance: 0
		})] : [new C_.Delay({
			value: 200,
			tolerance: 10
		}), new C_.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		return n === t.element || n === t.handle || !rh(n) || t.handle?.contains(n) ? !1 : Fp(n);
	}
}), T_, E_ = class extends wf {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, Z(this, T_, /* @__PURE__ */ new Set()), this.listeners = new Ip(), this.latest = {
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
		let { activationConstraints: r = w_.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return tl(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				ah(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (M_(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !rh(e.target) || t.disabled || O_(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = w_.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = mp(i) && i.draggable && i.getAttribute("draggable") === "true", o = Mm(t.element), { x: s, y: c } = xp(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new Tf(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = Cp(), f = this.listeners.bind(d, [
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
				listener: a ? this.handleCancel : k_,
				options: { capture: !0 }
			}
		]);
		X(this, T_).add(() => {
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
			let n = xp(e), r = Mm(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, xm.schedule(this.handleMove);
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
		let i = gp(t.target).body;
		i.setPointerCapture(t.pointerId);
		let a = rh(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: k_,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: k_
			},
			{
				type: "contextmenu",
				listener: k_
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		X(this, T_).add(o);
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
		}, X(this, T_).forEach((e) => e()), X(this, T_).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
T_ = /* @__PURE__ */ new WeakMap(), E_.configure = ud(E_), E_.defaults = w_;
var D_ = E_;
function O_(e) {
	return "sensor" in e;
}
function k_(e) {
	e.preventDefault();
}
function A_() {}
var j_ = /* @__PURE__ */ new WeakSet();
function M_(e) {
	!e || j_.has(e) || (e.addEventListener("touchmove", A_, {
		capture: !1,
		passive: !1
	}), j_.add(e));
}
var N_ = {
	modifiers: [],
	plugins: [
		Wh,
		s_,
		Kh,
		Ig,
		d_
	],
	sensors: [D_, g_]
}, P_ = class extends Zf {
	constructor(e = {}) {
		let t = Xf(e.plugins, N_.plugins), n = Xf(e.sensors, N_.sensors), r = Xf(e.modifiers, N_.modifiers);
		super(Sh(xh({}, e), {
			plugins: [
				u_,
				r_,
				sg,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, F_, I_, L_, R_, z_, B_, V_, H_, U_ = class extends (R_ = uf, L_ = [L], I_ = [L], F_ = [L], R_) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a, feedback: o = "default" } = n, s = wh(n, [
			"element",
			"effects",
			"handle",
			"feedback"
		]);
		super(xh({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(dd) ?? [...e.sensors]).map((t) => {
				let n = t instanceof wf ? t : e.registry.register(t.plugin), r = t instanceof wf ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, s), t), Z(this, B_, Y(z_, 8, this)), Y(z_, 11, this), Z(this, V_, Y(z_, 12, this)), Y(z_, 15, this), Z(this, H_, Y(z_, 16, this)), Y(z_, 19, this), this.element = r, this.handle = a, this.feedback = o;
	}
};
z_ = Th(R_), B_ = /* @__PURE__ */ new WeakMap(), V_ = /* @__PURE__ */ new WeakMap(), H_ = /* @__PURE__ */ new WeakMap(), Ah(z_, 4, "handle", L_, U_, B_), Ah(z_, 4, "element", I_, U_, V_), Ah(z_, 4, "feedback", F_, U_, H_), kh(z_, U_);
var W_, G_, K_, q_, J_, Y_, X_, Z_, Q_, $_, ev = class extends (K_ = Cf, G_ = [L], W_ = [L], K_) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = wh(n, ["element", "effects"]);
		let { collisionDetector: o = ep } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new $m(n), i = F(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = Gc(!1);
		super(Sh(xh({}, a), {
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
						let t = new mm(e, s);
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
		}), t), Z(this, Q_), Z(this, J_, Y(q_, 8, this)), Y(q_, 11, this), Z(this, $_, Y(q_, 12, this)), Y(q_, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		Nh(this, Q_, e, Z_);
	}
	get element() {
		return this.proxy ?? X(this, Q_, X_);
	}
};
q_ = Th(K_), J_ = /* @__PURE__ */ new WeakMap(), Q_ = /* @__PURE__ */ new WeakSet(), $_ = /* @__PURE__ */ new WeakMap(), Y_ = Ah(q_, 20, "#element", G_, Q_, J_), X_ = Y_.get, Z_ = Y_.set, Ah(q_, 4, "proxy", W_, ev, $_), kh(q_, ev);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/sortable.js
var tv = Object.create, nv = Object.defineProperty, rv = Object.defineProperties, iv = Object.getOwnPropertyDescriptor, av = Object.getOwnPropertyDescriptors, ov = Object.getOwnPropertySymbols, sv = Object.prototype.hasOwnProperty, cv = Object.prototype.propertyIsEnumerable, lv = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), uv = (e) => {
	throw TypeError(e);
}, dv = (e, t, n) => t in e ? nv(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, fv = (e, t) => {
	for (var n in t ||= {}) sv.call(t, n) && dv(e, n, t[n]);
	if (ov) for (var n of ov(t)) cv.call(t, n) && dv(e, n, t[n]);
	return e;
}, pv = (e, t) => rv(e, av(t)), mv = (e, t) => {
	var n = {};
	for (var r in e) sv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && ov) for (var r of ov(e)) t.indexOf(r) < 0 && cv.call(e, r) && (n[r] = e[r]);
	return n;
}, hv = (e) => [
	,
	,
	,
	tv(null)
], gv = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], _v = (e) => e !== void 0 && typeof e != "function" ? uv("Function expected") : e, vv = (e, t, n, r, i) => ({
	kind: gv[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? uv("Already initialized") : i.push(_v(e || null))
}), yv = (e, t) => dv(t, lv("metadata"), e[3]), bv = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, xv = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u, d = t & 7, f = !1, p = !1, m = e.length + 1, h = gv[d + 5], g = e[m - 1] = [], _ = e[m] || (e[m] = []), v = (i = i.prototype, iv({
		get [n]() {
			return Cv(this, a);
		},
		set [n](e) {
			return Tv(this, a, e);
		}
	}, n)), y = r.length - 1; y >= 0; y--) l = vv(d, n, c = {}, e[3], _), l.static = f, l.private = p, u = l.access = { has: (e) => n in e }, u.get = (e) => e[n], u.set = (e, t) => e[n] = t, s = (0, r[y])({
		get: v.get,
		set: v.set
	}, l), c._ = 1, s === void 0 ? _v(s) && (v[h] = s) : typeof s != "object" || !s ? uv("Object expected") : (_v(o = s.get) && (v.get = o), _v(o = s.set) && (v.set = o), _v(o = s.init) && g.unshift(o));
	return v && nv(i, n, v), i;
}, Sv = (e, t, n) => t.has(e) || uv("Cannot " + n), Cv = (e, t, n) => (Sv(e, t, "read from private field"), t.get(e)), wv = (e, t, n) => t.has(e) ? uv("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Tv = (e, t, n, r) => (Sv(e, t, "write to private field"), t.set(e, n), n);
function Ev(e) {
	return e instanceof sy || e instanceof oy;
}
var Dv = 10, Ov = class extends W {
	constructor(e) {
		super(e);
		let t = tl(() => {
			let { dragOperation: t } = e;
			if (ih(t.activatorEvent) && Ev(t.source) && t.status.initialized) {
				let t = e.registry.plugins.get(r_);
				if (t) return t.disable(), () => t.enable();
			}
		}), n = e.monitor.addEventListener("dragmove", (e, t) => {
			queueMicrotask(() => {
				if (this.disabled || e.defaultPrevented || !e.nativeEvent) return;
				let { dragOperation: n } = t;
				if (!ih(e.nativeEvent) || !Ev(n.source) || !n.shape) return;
				let { actions: r, collisionObserver: i, registry: a } = t, { by: o } = e;
				if (!o) return;
				let s = kv(o), { source: c, target: l } = n, { center: u } = n.shape.current, d = [], f = [];
				N(() => {
					for (let e of a.droppables) {
						let { id: t } = e;
						if (!e.accepts(c) || t === l?.id && Ev(e) || !e.element) continue;
						let n = e.shape, r = new $m(e.element, { getBoundingClientRect: (e) => bp(e, void 0, .2) });
						!r.height || !r.width || (s == "down" && u.y + Dv < r.center.y || s == "up" && u.y - Dv > r.center.y || s == "left" && u.x - Dv > r.center.x || s == "right" && u.x + Dv < r.center.x) && (d.push(e), e.shape = r, f.push(() => e.shape = n));
					}
				}), e.preventDefault(), i.disable();
				let p = i.computeCollisions(d, tp);
				N(() => f.forEach((e) => e()));
				let [m] = p;
				if (!m) return;
				let { id: h } = m, { index: g, group: _ } = c.sortable;
				r.setDropTarget(h).then(() => {
					let { source: e, target: t, shape: a } = n;
					if (!e || !Ev(e) || !a) return;
					let { index: o, group: s, target: c } = e.sortable, l = g !== o || _ !== s, u = l ? c : t?.element;
					if (!u) return;
					Um(u);
					let d = new $m(u);
					if (!d) return;
					let f = Ou.delta(d, Ou.from(a.current.boundingRectangle), e.alignment);
					r.move({ by: f }), l ? r.setDropTarget(e.id).then(() => i.enable()) : i.enable();
				});
			});
		});
		this.destroy = () => {
			n(), t();
		};
	}
};
function kv(e) {
	let { x: t, y: n } = e;
	if (t > 0) return "right";
	if (t < 0) return "left";
	if (n > 0) return "down";
	if (n < 0) return "up";
}
var Av = Object.defineProperty, jv = Object.defineProperties, Mv = Object.getOwnPropertyDescriptors, Nv = Object.getOwnPropertySymbols, Pv = Object.prototype.hasOwnProperty, Fv = Object.prototype.propertyIsEnumerable, Iv = (e, t, n) => t in e ? Av(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Lv = (e, t) => {
	for (var n in t ||= {}) Pv.call(t, n) && Iv(e, n, t[n]);
	if (Nv) for (var n of Nv(t)) Fv.call(t, n) && Iv(e, n, t[n]);
	return e;
}, Rv = (e, t) => jv(e, Mv(t));
function zv(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Bv(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function Vv(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (Bv(r)) {
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
	if (c === -1 && Bv(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return Rv(Lv({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return Rv(Lv({}, e), {
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
		if (l != null && l === d && c === u && Bv(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return Rv(Lv({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return Rv(Lv({}, e), {
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
	if (l === d) return Rv(Lv({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return Rv(Lv({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function Hv(e, t) {
	return Vv(e, t, zv);
}
var Uv = "__default__", Wv = class extends W {
	constructor(e) {
		super(e);
		let t = () => {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.registry.droppables) if (n instanceof sy) {
				let { sortable: e } = n, { group: r } = e, i = t.get(r);
				i || (i = /* @__PURE__ */ new Set(), t.set(r, i)), i.add(e);
			}
			for (let [e, n] of t) t.set(e, new Set(qv(n)));
			return t;
		}, n = [e.monitor.addEventListener("dragover", (e, n) => {
			if (this.disabled) return;
			let { dragOperation: r } = n, { source: i, target: a } = r;
			if (!Ev(i) || !Ev(a) || i.sortable === a.sortable) return;
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
					let f = qv(c), p = s ? f : qv(l), m = i.sortable.group ?? Uv, h = a.sortable.group ?? Uv, g = {
						[m]: f,
						[h]: p
					}, _ = Hv(g, e);
					if (g === _) return;
					let v = _[h].indexOf(i.sortable), y = _[h].indexOf(a.sortable);
					n.collisionObserver.disable(), Gv(u, v, d, y), N(() => {
						for (let [e, t] of _[m].entries()) t.index = e;
						if (!s) for (let [e, t] of _[h].entries()) t.group = a.sortable.group, t.index = e;
					}), n.actions.setDropTarget(i.id).then(() => n.collisionObserver.enable());
				});
			});
		}), e.monitor.addEventListener("dragend", (e, n) => {
			if (!e.canceled) return;
			let { dragOperation: r } = n, { source: i } = r;
			Ev(i) && (i.sortable.initialIndex === i.sortable.index && i.sortable.initialGroup === i.sortable.group || queueMicrotask(() => {
				let e = t(), r = e.get(i.sortable.initialGroup);
				r && n.renderer.rendering.then(() => {
					for (let [t, n] of e.entries()) {
						let e = Array.from(n).entries();
						for (let [n, r] of e) if (r.index !== n || r.group !== t) return;
					}
					let t = qv(r), n = i.sortable.element, a = t[i.sortable.initialIndex], o = a?.element;
					!a || !o || !n || (Gv(n, a.index, o, i.index), N(() => {
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
function Gv(e, t, n, r) {
	let i = r < t ? "afterend" : "beforebegin";
	n.insertAdjacentElement(i, e);
}
function Kv(e, t) {
	return e.index - t.index;
}
function qv(e) {
	return Array.from(e).sort(Kv);
}
var Jv = [Ov, Wv], Yv = {
	duration: 250,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	idle: !1
}, Xv = new tu(), Zv, Qv = [L], $v, ey, ty, ny, ry, iy;
Zv = [L];
var ay = class {
	constructor(e, t) {
		wv(this, ey, bv($v, 8, this)), bv($v, 11, this), wv(this, ty), wv(this, ny), wv(this, ry, bv($v, 12, this)), bv($v, 15, this), wv(this, iy), this.register = () => (N(() => {
			var e, t;
			(e = this.manager) == null || e.registry.register(this.droppable), (t = this.manager) == null || t.registry.register(this.draggable);
		}), () => this.unregister()), this.unregister = () => {
			N(() => {
				var e, t;
				(e = this.manager) == null || e.registry.unregister(this.droppable), (t = this.manager) == null || t.registry.unregister(this.draggable);
			});
		}, this.destroy = () => {
			N(() => {
				this.droppable.destroy(), this.draggable.destroy();
			});
		};
		var n = e, { effects: r = () => [], group: i, index: a, sensors: o, type: s, transition: c = Yv, plugins: l = Jv } = n, u = mv(n, [
			"effects",
			"group",
			"index",
			"sensors",
			"type",
			"transition",
			"plugins"
		]);
		this.droppable = new sy(u, t, this), this.draggable = new oy(pv(fv({}, u), {
			effects: () => [
				() => {
					let e = this.manager?.dragOperation.status;
					e?.initializing && this.id === this.manager?.dragOperation.source?.id && Xv.clear(this.manager), e?.dragging && Xv.set(this.manager, this.id, F(() => ({
						initialIndex: this.index,
						initialGroup: this.group
					})));
				},
				() => {
					let { index: e, group: t, manager: n } = this, r = Cv(this, ny), i = Cv(this, ty);
					(e !== r || t !== i) && (Tv(this, ny, e), Tv(this, ty, t), this.animate());
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
		}), t, this), Tv(this, iy, u.element), this.manager = t, this.index = a, Tv(this, ny, a), this.group = i, Tv(this, ty, i), this.type = s, this.transition = c;
	}
	get initialIndex() {
		return Xv.get(this.manager, this.id)?.initialIndex ?? this.index;
	}
	get initialGroup() {
		return Xv.get(this.manager, this.id)?.initialGroup ?? this.group;
	}
	animate() {
		F(() => {
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
				}, { translate: o } = Tm(r), s = qm(r, o, !1), c = qm(r, o);
				if (a.x || a.y) {
					let n = Op(fp(r)) ? pv(fv({}, t), { duration: 0 }) : t;
					Km({
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
		N(() => {
			this.draggable.manager = e, this.droppable.manager = e;
		});
	}
	set element(e) {
		N(() => {
			let t = Cv(this, iy), n = this.droppable.element, r = this.draggable.element;
			(!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), Tv(this, iy, e);
		});
	}
	get element() {
		let e = Cv(this, iy);
		if (e) return Pp.get(e) ?? e ?? this.droppable.element;
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
		N(() => {
			this.droppable.disabled = e, this.draggable.disabled = e;
		});
	}
	set data(e) {
		N(() => {
			this.droppable.data = e, this.draggable.data = e;
		});
	}
	set handle(e) {
		this.draggable.handle = e;
	}
	set id(e) {
		N(() => {
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
		this.droppable.collisionDetector = e ?? ep;
	}
	set alignment(e) {
		this.draggable.alignment = e;
	}
	get alignment() {
		return this.draggable.alignment;
	}
	set type(e) {
		N(() => {
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
$v = hv(), ey = /* @__PURE__ */ new WeakMap(), ty = /* @__PURE__ */ new WeakMap(), ny = /* @__PURE__ */ new WeakMap(), ry = /* @__PURE__ */ new WeakMap(), iy = /* @__PURE__ */ new WeakMap(), xv($v, 4, "index", Qv, ay, ey), xv($v, 4, "group", Zv, ay, ry), yv($v, ay);
var oy = class extends U_ {
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
}, sy = class extends ev {
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
function cy(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function ly(e) {
	if (e != null) return cy(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/hooks.js
var uy = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? D.useLayoutEffect : D.useEffect;
function dy() {
	let e = (0, D.useState)(0)[1];
	return (0, D.useCallback)(() => {
		e((e) => e + 1);
	}, [e]);
}
function fy(e, t) {
	let n = (0, D.useRef)(/* @__PURE__ */ new Map()), r = dy();
	return uy(() => {
		if (!e) {
			n.current.clear();
			return;
		}
		return tl(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = F(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? (0, To.flushSync)(r) : r());
		});
	}, [e]), (0, D.useMemo)(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function py(e, t) {
	e();
}
function my(e) {
	let t = (0, D.useRef)(e);
	return uy(() => {
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
function hy(e, t) {
	let n = (0, D.useRef)(ly(e));
	uy(() => {
		let r = ly(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/index.js
var gy = Object.getOwnPropertySymbols, _y = Object.prototype.hasOwnProperty, vy = Object.prototype.propertyIsEnumerable, yy = (e, t) => {
	var n = {};
	for (var r in e) _y.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && gy) for (var r of gy(e)) t.indexOf(r) < 0 && vy.call(e, r) && (n[r] = e[r]);
	return n;
}, by = (0, D.createContext)(new P_()), xy = (0, D.memo)((0, D.forwardRef)(({ children: e }, t) => {
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
	return uy(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), (0, D.useImperativeHandle)(t, () => o), null;
})), Sy = [void 0, Al];
function Cy(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = yy(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = (0, D.useRef)(null), { plugins: d, modifiers: f, sensors: p } = l, m = Xf(d, N_.plugins), h = Xf(p, N_.sensors), g = Xf(f, N_.modifiers), _ = my(i), v = my(a), y = my(s), b = my(o), x = my(c), S = my(r), C = wy(() => l.manager ?? new P_(l));
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
	}, [C]), $(m, () => C && (C.plugins = m), ...Sy), $(h, () => C && (C.sensors = h), ...Sy), $(g, () => C && (C.modifiers = g), ...Sy), /* @__PURE__ */ (0, j.jsxs)(by.Provider, {
		value: C,
		children: [/* @__PURE__ */ (0, j.jsx)(xy, {
			ref: u,
			children: n
		}), n]
	});
}
function wy(e) {
	let t = (0, D.useRef)(null);
	return t.current ||= e(), (0, D.useInsertionEffect)(() => () => t.current?.destroy(), []), t.current;
}
function Ty() {
	return (0, D.useContext)(by);
}
function Ey(e) {
	let t = Ty() ?? void 0, [n] = (0, D.useState)(() => e(t));
	return n.manager !== t && (n.manager = t), uy(n.register, [t, n]), n;
}
var Dy = Object.create, Oy = Object.defineProperty, ky = Object.getOwnPropertyDescriptor, Ay = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), jy = (e) => {
	throw TypeError(e);
}, My = (e, t, n) => t in e ? Oy(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Ny = (e) => [
	,
	,
	,
	Dy(e?.[Ay("metadata")] ?? null)
], Py = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Fy = (e) => e !== void 0 && typeof e != "function" ? jy("Function expected") : e, Iy = (e, t, n, r, i) => ({
	kind: Py[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? jy("Already initialized") : i.push(Fy(e || null))
}), Ly = (e, t) => My(t, Ay("metadata"), e[3]), Ry = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, zy = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = Py[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, ky(i, n)), _ = r.length - 1; _ >= 0; _--) c = Iy(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, Fy(o) && (g[m] = o);
	return g && Oy(i, n, g), i;
}, By = (e, t, n) => t.has(e) || jy("Cannot " + n), Vy = (e, t, n) => (By(e, t, "read from private field"), t.get(e)), Hy = (e, t, n) => t.has(e) ? jy("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Uy = (e, t, n, r) => (By(e, t, "write to private field"), t.set(e, n), n), Wy = class e {
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
}, Gy, Ky, qy, Jy, Yy, Xy = class extends (qy = Ql, Ky = [R], Gy = [R], qy) {
	constructor(e) {
		let t = Wy.from(e);
		super(t, (e, t) => Wy.equals(e, t)), Ry(Yy, 5, this), Hy(this, Jy, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return Wy.delta(this.current, this.initial);
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
		let { current: t } = this, n = Wy.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - Vy(this, Jy), o = (e) => Math.round(e / a * 100);
		N(() => {
			Uy(this, Jy, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(Wy.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
Yy = Ny(qy), Jy = /* @__PURE__ */ new WeakMap(), zy(Yy, 2, "delta", Ky, Xy), zy(Yy, 2, "direction", Gy, Xy), Ly(Yy, Xy);
var Zy = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(Zy || {});
Object.values(Zy);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/sortable.js
var Qy = Object.defineProperty, $y = Object.defineProperties, eb = Object.getOwnPropertyDescriptors, tb = Object.getOwnPropertySymbols, nb = Object.prototype.hasOwnProperty, rb = Object.prototype.propertyIsEnumerable, ib = (e, t, n) => t in e ? Qy(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, ab = (e, t) => {
	for (var n in t ||= {}) nb.call(t, n) && ib(e, n, t[n]);
	if (tb) for (var n of tb(t)) rb.call(t, n) && ib(e, n, t[n]);
	return e;
}, ob = (e, t) => $y(e, eb(t));
function sb(e) {
	let { accept: t, collisionDetector: n, collisionPriority: r, id: i, data: a, element: o, handle: s, index: c, group: l, disabled: u, feedback: d, modifiers: f, sensors: p, target: m, type: h } = e, g = ab(ab({}, Yv), e.transition), _ = Ey((t) => new ay(ob(ab({}, e), {
		transition: g,
		register: !1,
		handle: ly(s),
		element: ly(o),
		target: ly(m),
		feedback: d
	}), t)), v = fy(_, cb);
	return $(i, () => _.id = i), uy(() => {
		N(() => {
			_.group = l, _.index = c;
		});
	}, [
		_,
		l,
		c
	]), $(h, () => _.type = h), $(t, () => _.accept = t, void 0, Al), $(a, () => a && (_.data = a)), $(c, () => {
		_.manager?.dragOperation.status.idle && g?.idle && _.refreshShape();
	}, py), hy(s, (e) => _.handle = e), hy(o, (e) => _.element = e), hy(m, (e) => _.target = e), $(u, () => _.disabled = u === !0), $(p, () => _.sensors = p), $(n, () => _.collisionDetector = n), $(r, () => _.collisionPriority = r), $(d, () => _.feedback = d ?? "default"), $(g, () => _.transition = g, void 0, Al), $(f, () => _.modifiers = f, void 0, Al), $(e.alignment, () => _.alignment = e.alignment), {
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
function cb(e, t, n) {
	return !!(e === "isDragSource" && !n && t);
}
//#endregion
//#region src/external-resources/studio-ui/components/SortableResource.tsx
var lb = ({ id: e, index: t, disabled: n = !1, children: r }) => {
	let { ref: i, handleRef: a } = sb({
		id: e,
		index: t,
		disabled: n
	});
	return /* @__PURE__ */ (0, j.jsx)("div", {
		ref: i,
		children: r(a)
	});
}, ub = Object.defineProperty, db = Object.defineProperties, fb = Object.getOwnPropertyDescriptors, pb = Object.getOwnPropertySymbols, mb = Object.prototype.hasOwnProperty, hb = Object.prototype.propertyIsEnumerable, gb = (e, t, n) => t in e ? ub(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, _b = (e, t) => {
	for (var n in t ||= {}) mb.call(t, n) && gb(e, n, t[n]);
	if (pb) for (var n of pb(t)) hb.call(t, n) && gb(e, n, t[n]);
	return e;
}, vb = (e, t) => db(e, fb(t));
function yb(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function bb(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function xb(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (bb(r)) {
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
	if (c === -1 && bb(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return vb(_b({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return vb(_b({}, e), {
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
		if (l != null && l === d && c === u && bb(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return vb(_b({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return vb(_b({}, e), {
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
	if (l === d) return vb(_b({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return vb(_b({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function Sb(e, t) {
	return xb(e, t, yb);
}
//#endregion
//#region src/shared/components/constants.ts
var Cb = [
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
function wb({ title: e, onTitleChange: t, activeTab: n, tabs: r = Cb }) {
	let [i, a] = (0, D.useState)(!1);
	return /* @__PURE__ */ (0, j.jsx)(A.Header, {
		className: "shadow-sm studio-header",
		children: /* @__PURE__ */ (0, j.jsxs)("div", {
			className: "d-flex flex-row justify-content-between",
			children: [
				/* @__PURE__ */ (0, j.jsx)(Te, { children: i ? /* @__PURE__ */ (0, j.jsx)(T.Control, {
					type: "text",
					name: "studio-title",
					"aria-label": "Display name",
					value: e,
					onChange: (e) => t(e.target.value),
					onBlur: () => a(!1),
					onKeyDown: (e) => {
						(e.key === "Enter" || e.key === "Escape") && (a(!1), e.preventDefault());
					}
				}) : /* @__PURE__ */ (0, j.jsx)("h3", {
					className: "h3 col pl-0",
					children: /* @__PURE__ */ (0, j.jsxs)("div", {
						className: "d-flex flex-row align-items-center mt-1",
						children: [
							"Editing: ",
							e,
							/* @__PURE__ */ (0, j.jsx)(ye, {
								alt: "Edit display name",
								className: "studio-header-title-edit",
								size: "sm",
								src: En,
								onClick: () => a(!0)
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, j.jsx)(Te.Spacer, {}),
				r.length > 0 && /* @__PURE__ */ (0, j.jsx)(Wo, {
					role: "tablist",
					variant: "button-group",
					activeKey: n,
					className: "studio-header-tabs-nav pgn__tabs",
					"aria-label": "Editor Sections",
					children: r.map(({ key: e, label: t }) => /* @__PURE__ */ (0, j.jsx)(Wo.Link, {
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
var Tb = ({ initialData: e, onSave: t, onCancel: n }) => {
	let [r, i] = (0, D.useState)(e), [a, o, s] = Bo(!1), [c, l, u] = Bo(!1), [d, f] = (0, D.useState)(), [p, m] = (0, D.useState)();
	return /* @__PURE__ */ (0, j.jsxs)("div", {
		className: "react-studio-block external-resources-xblock-editor editor-with-buttons bg-light-200",
		children: [
			/* @__PURE__ */ (0, j.jsx)(wb, {
				title: r.displayName,
				onTitleChange: (e) => i((t) => ({
					...t,
					displayName: e
				})),
				tabs: []
			}),
			/* @__PURE__ */ (0, j.jsxs)("div", {
				className: "wrapper-comp-settings is-active external-resources-editor-body p-4",
				children: [
					/* @__PURE__ */ (0, j.jsxs)("div", { children: [/* @__PURE__ */ (0, j.jsx)("p", {
						className: "h4 text-primary-500",
						children: "Resources"
					}), /* @__PURE__ */ (0, j.jsx)("p", {
						className: "text-primary-500",
						children: "Learners see resources in the order they're added and can mark each as read."
					})] }),
					/* @__PURE__ */ (0, j.jsx)(Cy, {
						onDragOver: (e) => i((t) => ({
							...t,
							resources: Sb(t.resources, e)
						})),
						children: /* @__PURE__ */ (0, j.jsx)(_e, {
							gap: 3,
							children: r.resources.map((e, t) => c && d === e.id ? /* @__PURE__ */ (0, j.jsx)(kc, {
								initialResource: e,
								onCancel: u,
								onSave: (e) => {
									i((t) => ({
										...t,
										resources: t.resources.map((t) => t.id === e.id ? e : t)
									})), u();
								},
								onDelete: () => m(e)
							}, e.id) : /* @__PURE__ */ (0, j.jsx)(lb, {
								id: e.id,
								index: t,
								disabled: c,
								children: (t) => /* @__PURE__ */ (0, j.jsx)(ve, {
									resource: e,
									actions: /* @__PURE__ */ (0, j.jsx)(Mc, {
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
					/* @__PURE__ */ (0, j.jsx)(Nc, {
						resource: p,
						onConfirm: (e) => {
							i((t) => ({
								...t,
								resources: t.resources.filter((t) => t.id !== e.id)
							})), m(void 0), d === e.id && u();
						},
						onClose: () => m(void 0)
					}),
					/* @__PURE__ */ (0, j.jsx)("div", {
						className: "mt-3",
						children: a ? /* @__PURE__ */ (0, j.jsx)(kc, {
							initialResource: jc(),
							onCancel: s,
							onSave: (e) => {
								i((t) => ({
									...t,
									resources: [...t.resources, e]
								})), s();
							},
							isNewResource: !0
						}) : /* @__PURE__ */ (0, j.jsx)(Sn, {
							variant: "outline-primary",
							iconBefore: Dn,
							onClick: o,
							children: "Add resource link"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, j.jsx)(Zo, {
				position: "bottom",
				className: "xblock-actions",
				children: /* @__PURE__ */ (0, j.jsxs)(Te, { children: [/* @__PURE__ */ (0, j.jsx)(Sn, {
					variant: "tertiary",
					onClick: () => n(),
					children: "Cancel"
				}), /* @__PURE__ */ (0, j.jsx)(Sn, {
					variant: "primary",
					onClick: () => t(r),
					disabled: r.resources.length === 0,
					children: "Save"
				})] })
			})
		]
	});
}, Eb = ".pgn__modal-header.studio-header{padding:calc(var(--pgn-spacing-modal-inner-padding-base) / 2) var(--pgn-spacing-modal-header-padding-base-x);z-index:1}.studio-header-title{align-items:center;gap:var(--pgn-spacing-spacer-2,8px);display:flex}.studio-header-tabs-nav{flex-wrap:nowrap;padding-right:64px}.studio-header-tabs-nav .nav-link{appearance:none;font-family:inherit;font-size:inherit;line-height:inherit;cursor:pointer;background-color:#0000}.wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}.external-resource-card{padding:var(--pgn-spacing-spacer-4)}.external-resource-card.is-clickable:hover{cursor:pointer;background-color:var(--pgn-color-light-300)}.external-resource-card .card-type,.external-resource-card .card-publisher{color:var(--pgn-color-gray-700);font-family:var(--pgn-typography-headings-font-family,Sora, sans-serif);font-size:var(--pgn-typography-font-size-xs);font-weight:var(--pgn-typography-font-weight-bold);line-height:1.3333}.external-resource-card .card-type{margin-bottom:var(--pgn-spacing-spacer-1)}.external-resource-card .card-publisher{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.external-resource-card .card-title{color:var(--pgn-wgu-color-lake-800,var(--pgn-color-info-700));margin-bottom:var(--pgn-spacing-spacer-1);font-size:var(--pgn-typography-font-size-lg);font-weight:var(--pgn-typography-font-weight-bold);-webkit-line-clamp:2;line-clamp:2;overflow-wrap:anywhere;-webkit-box-orient:vertical;line-height:1.6;display:-webkit-box;overflow:hidden}.external-resource-card .card-thumbnail{width:102px;height:102px}.external-resource-card .pgn__card-body{flex:auto;min-width:0}.external-resource-card.pgn__card .pgn__card-footer{flex:none;width:auto}.external-resource-thumbnail{flex-shrink:0;width:102px;height:102px;overflow:hidden}.external-resource-thumbnail .external-resource-icon-container,.external-resource-thumbnail .external-resource-icon{width:100%;height:100%}.external-resource-thumbnail .external-resource-icon{background-color:var(--pgn-wgu-color-lake-50,var(--pgn-color-light-300));color:var(--pgn-wgu-color-blue-muted,var(--pgn-color-info-400))}.external-resource-thumbnail .external-resource-image{object-fit:cover;width:100%;height:100%;display:block}.content-type-select{max-width:36.5rem;position:relative}.content-type-select .content-type-select-menu{z-index:10;max-height:20rem;margin:var(--pgn-spacing-spacer-1) 0 0;padding:var(--pgn-spacing-spacer-1) 0;background-color:var(--pgn-color-white);border-radius:var(--pgn-size-border-radius-base);list-style:none;position:absolute;top:100%;left:0;right:0;overflow-y:auto;box-shadow:0 2px 8px #00000026}.content-type-select .content-type-select-item{padding:var(--pgn-spacing-spacer-2) var(--pgn-spacing-spacer-3);cursor:pointer;align-items:center;display:flex}.content-type-select .content-type-select-item.is-active{background-color:var(--pgn-color-light-300)}.pgn__form-control-decorator-group.estimated-time-input{flex:none;width:4.25rem}.pgn__form-control-decorator-group.estimated-time-input .form-control{padding-inline:var(--pgn-spacing-spacer-2)}.thumbnail-select{display:inline-block;position:relative}.thumbnail-select .thumbnail-select-popover{z-index:10;width:18rem;margin-top:var(--pgn-spacing-spacer-1);background-color:var(--pgn-color-white);border-radius:var(--pgn-size-border-radius-base);position:absolute;top:100%;left:0;box-shadow:0 2px 8px #00000026}.thumbnail-select .thumbnail-select-popover:focus{outline:none}.thumbnail-select .thumbnail-select-popover .icon-picker,.thumbnail-select .thumbnail-select-popover .thumbnail-select-image{padding:var(--pgn-spacing-spacer-2)}.thumbnail-select .thumbnail-select-popover .thumbnail-select-image{margin-bottom:0}.thumbnail-select .thumbnail-select-popover .icon-list{max-height:15rem;overflow-y:auto}.thumbnail-select .thumbnail-select-popover .icon-symbol{border-radius:var(--pgn-size-border-radius-base);color:var(--pgn-color-primary-500);cursor:pointer;background:0 0;border:0;display:flex}.thumbnail-select .thumbnail-select-popover .icon-symbol:hover,.thumbnail-select .thumbnail-select-popover .icon-symbol:focus,.thumbnail-select .thumbnail-select-popover .icon-symbol.active{background-color:var(--pgn-color-light-300)}.edit-xblock-modal>.modal-actions{display:none!important}.xblock-root{flex-direction:column;flex-grow:1;display:flex}.external-resources-xblock-editor{flex-direction:column;display:flex}.external-resources-xblock-editor .external-resources-editor-body{flex-grow:1}", Db = (e, t, r) => {
	let i = n(t), a = e.handlerUrl(i, "studio_save");
	we({
		runtime: e,
		element: t,
		config: r.config,
		styles: Eb
	})(/* @__PURE__ */ (0, j.jsx)(bc.Provider, {
		value: r.config,
		children: /* @__PURE__ */ (0, j.jsx)(Tb, {
			initialData: r.data,
			onSave: (t) => {
				x({
					saveUrl: a,
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
export { Db as renderBlock };
