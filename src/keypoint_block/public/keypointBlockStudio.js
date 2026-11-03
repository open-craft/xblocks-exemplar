import { C as e, D as t, E as n, O as r, S as i, T as a, _ as o, a as s, b as c, c as l, d as u, f as d, g as f, h as p, i as m, k as h, l as g, m as _, n as v, o as y, p as b, r as x, s as S, t as C, u as w, v as T, w as E, x as D, y as O } from "./Button-Bn5CwRIu.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ActionRow/index.js
var k = p(), A = /* @__PURE__ */ h(n()), j = /* @__PURE__ */ h(t()), M = /* @__PURE__ */ h(w());
function N({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ j.createElement(e, {
		...r,
		className: (0, M.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function P() {
	return /* @__PURE__ */ j.createElement("span", { className: "pgn__action-row-spacer" });
}
N.Spacer = P, (/* @__PURE__ */ r(((e, t) => {
	t.exports = function(e, t, n, r, i, a, o, s) {
		if (!e) {
			var c;
			if (t === void 0) c = /* @__PURE__ */ Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
			else {
				var l = [
					n,
					r,
					i,
					a,
					o,
					s
				], u = 0;
				c = Error(t.replace(/%s/g, function() {
					return l[u++];
				})), c.name = "Invariant Violation";
			}
			throw c.framesToPop = 1, c;
		}
	};
})))();
function F(e) {
	return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
//#endregion
//#region node_modules/.pnpm/uncontrollable@7.2.1_react@18.3.1/node_modules/uncontrollable/lib/esm/hook.js
function I(e) {
	var t = L(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function L(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function R(e, t, n) {
	var r = (0, j.useRef)(e !== void 0), i = (0, j.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, j.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
function z(e, t) {
	return Object.keys(t).reduce(function(n, r) {
		var i, a = n, o = a[F(r)], s = a[r], c = l(a, [F(r), r].map(I)), u = t[r], d = R(s, o, e[u]), f = d[0], p = d[1];
		return g({}, c, (i = {}, i[r] = f, i[u] = p, i));
	}, e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function B(e, t) {
	return B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, B(e, t);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function V(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, B(e, t);
}
//#endregion
//#region node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function ee() {
	var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
	e != null && this.setState(e);
}
function H(e) {
	function t(t) {
		return this.constructor.getDerivedStateFromProps(e, t) ?? null;
	}
	this.setState(t.bind(this));
}
function te(e, t) {
	try {
		var n = this.props, r = this.state;
		this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
	} finally {
		this.props = n, this.state = r;
	}
}
ee.__suppressDeprecationWarning = !0, H.__suppressDeprecationWarning = !0, te.__suppressDeprecationWarning = !0;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SelectableContext.js
var ne = /* @__PURE__ */ j.createContext(null), re = function(e, t) {
	return t === void 0 && (t = null), e == null ? t || null : String(e);
};
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function ie(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function ae(e) {
	var t = ie(e);
	return t && t.defaultView || window;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function oe(e, t) {
	return ae(e).getComputedStyle(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var se = /([A-Z])/g;
function ce(e) {
	return e.replace(se, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var le = /^ms-/;
function ue(e) {
	return ce(e).replace(le, "-ms-");
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var U = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function de(e) {
	return !!(e && U.test(e));
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function fe(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(ue(t)) || oe(e).getPropertyValue(ue(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(ue(i)) : de(i) ? r += i + "(" + a + ") " : n += ue(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
//#endregion
//#region node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/config.js
var pe = { disabled: !1 }, me = j.createContext(null), he = function(e) {
	return e.scrollTop;
}, ge = "unmounted", _e = "exited", ve = "entering", ye = "entered", be = "exiting", xe = /* @__PURE__ */ function(e) {
	V(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = _e, r.appearStatus = ve) : o = ye : o = t.unmountOnExit || t.mountOnEnter ? ge : _e, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: _e } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = ve) : (n === "entering" || n === "entered") && (t = be);
		}
		this.updateStatus(!1, t);
	}, n.componentWillUnmount = function() {
		this.cancelNextCallback();
	}, n.getTimeouts = function() {
		var e = this.props.timeout, t = n = r = e, n, r;
		return e != null && typeof e != "number" && (t = e.exit, n = e.enter, r = e.appear === void 0 ? n : e.appear), {
			exit: t,
			enter: n,
			appear: r
		};
	}, n.updateStatus = function(e, t) {
		if (e === void 0 && (e = !1), t !== null) if (this.cancelNextCallback(), t === "entering") {
			if (this.props.unmountOnExit || this.props.mountOnEnter) {
				var n = this.props.nodeRef ? this.props.nodeRef.current : A.findDOMNode(this);
				n && he(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: ge });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [A.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || pe.disabled) {
			this.safeSetState({ status: ye }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: ve }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: ye }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : A.findDOMNode(this);
		if (!t || pe.disabled) {
			this.safeSetState({ status: _e }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: be }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: _e }, function() {
					e.props.onExited(r);
				});
			});
		});
	}, n.cancelNextCallback = function() {
		this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
	}, n.safeSetState = function(e, t) {
		t = this.setNextCallback(t), this.setState(e, t);
	}, n.setNextCallback = function(e) {
		var t = this, n = !0;
		return this.nextCallback = function(r) {
			n && (n = !1, t.nextCallback = null, e(r));
		}, this.nextCallback.cancel = function() {
			n = !1;
		}, this.nextCallback;
	}, n.onTransitionEnd = function(e, t) {
		this.setNextCallback(t);
		var n = this.props.nodeRef ? this.props.nodeRef.current : A.findDOMNode(this), r = e == null && !this.props.addEndListener;
		if (!n || r) {
			setTimeout(this.nextCallback, 0);
			return;
		}
		if (this.props.addEndListener) {
			var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = i[0], o = i[1];
			this.props.addEndListener(a, o);
		}
		e != null && setTimeout(this.nextCallback, e);
	}, n.render = function() {
		var e = this.state.status;
		if (e === "unmounted") return null;
		var t = this.props, n = t.children;
		t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
		var r = l(t, [
			"children",
			"in",
			"mountOnEnter",
			"unmountOnExit",
			"appear",
			"enter",
			"exit",
			"timeout",
			"addEndListener",
			"onEnter",
			"onEntering",
			"onEntered",
			"onExit",
			"onExiting",
			"onExited",
			"nodeRef"
		]);
		return /* @__PURE__ */ j.createElement(me.Provider, { value: null }, typeof n == "function" ? n(e, r) : j.cloneElement(j.Children.only(n), r));
	}, t;
}(j.Component);
xe.contextType = me, xe.propTypes = {};
function Se() {}
xe.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: Se,
	onEntering: Se,
	onEntered: Se,
	onExit: Se,
	onExiting: Se,
	onExited: Se
}, xe.UNMOUNTED = ge, xe.EXITED = _e, xe.ENTERING = ve, xe.ENTERED = ye, xe.EXITING = be;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var Ce = !!(typeof window < "u" && window.document && window.document.createElement), we = !1, Te = !1;
try {
	var Ee = {
		get passive() {
			return we = !0;
		},
		get once() {
			return Te = we = !0;
		}
	};
	Ce && (window.addEventListener("test", Ee, Ee), window.removeEventListener("test", Ee, !0));
} catch {}
function De(e, t, n, r) {
	if (r && typeof r != "boolean" && !Te) {
		var i = r.once, a = r.capture, o = n;
		!Te && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, we ? r : a);
	}
	e.addEventListener(t, n, r);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function Oe(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function ke(e, t, n, r) {
	return De(e, t, n, r), function() {
		Oe(e, t, n, r);
	};
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function Ae(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function je(e) {
	var t = fe(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function Me(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || Ae(e, "transitionend", !0);
	}, t + n), a = ke(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function Ne(e, t, n, r) {
	n ??= je(e) || 0;
	var i = Me(e, n, r), a = ke(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function Pe(e, t) {
	var n = fe(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Fe(e, t) {
	var n = Ne(e, function(r) {
		r.target === e && (n(), t(r));
	}, Pe(e, "transitionDuration") + Pe(e, "transitionDelay"));
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function Ie(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function Le(e) {
	let t = (0, j.useRef)(e);
	return (0, j.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Re(e) {
	let t = Le(e);
	return (0, j.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var ze = ["className", "children"], Be, Ve = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, He = (Be = {}, Be[ve] = "show", Be[ye] = "show", Be), Ue = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = l(e, ze), a = (0, j.useCallback)(function(e) {
		Ie(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /* @__PURE__ */ j.createElement(xe, g({
		ref: t,
		addEndListener: Fe
	}, i, { onEnter: a }), function(e, t) {
		return /* @__PURE__ */ j.cloneElement(r, g({}, t, { className: (0, M.default)("fade", n, r.props.className, He[e]) }));
	});
});
Ue.defaultProps = Ve, Ue.displayName = "Fade";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/CloseButton.js
var W = /* @__PURE__ */ h(y()), We = [
	"label",
	"onClick",
	"className"
], Ge = {
	label: W.default.string.isRequired,
	onClick: W.default.func
}, Ke = { label: "Close" }, qe = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.label, r = e.onClick, i = e.className, a = l(e, We);
	return /* @__PURE__ */ j.createElement("button", g({
		ref: t,
		type: "button",
		className: (0, M.default)("close", i),
		onClick: r
	}, a), /* @__PURE__ */ j.createElement("span", { "aria-hidden": "true" }, "×"), /* @__PURE__ */ j.createElement("span", { className: "sr-only" }, n));
});
qe.displayName = "CloseButton", qe.propTypes = Ge, qe.defaultProps = Ke;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/divWithClassName.js
var Je = (function(e) {
	return /* @__PURE__ */ j.forwardRef(function(t, n) {
		return /* @__PURE__ */ j.createElement("div", g({}, t, {
			ref: n,
			className: (0, M.default)(t.className, e)
		}));
	});
}), Ye = /-(.)/g;
function Xe(e) {
	return e.replace(Ye, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Ze = [
	"className",
	"bsPrefix",
	"as"
], Qe = function(e) {
	return e[0].toUpperCase() + Xe(e).slice(1);
};
function $e(e, t) {
	var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? Qe(e) : r, a = n.Component, o = n.defaultProps, s = /* @__PURE__ */ j.forwardRef(function(t, n) {
		var r = t.className, i = t.bsPrefix, o = t.as, s = o === void 0 ? a || "div" : o, c = l(t, Ze), u = S(i, e);
		return /* @__PURE__ */ j.createElement(s, g({
			ref: n,
			className: (0, M.default)(r, u)
		}, c));
	});
	return s.defaultProps = o, s.displayName = i, s;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Alert.js
var et = [
	"bsPrefix",
	"show",
	"closeLabel",
	"className",
	"children",
	"variant",
	"onClose",
	"dismissible",
	"transition"
], tt = Je("h4");
tt.displayName = "DivStyledAsH4";
var nt = $e("alert-heading", { Component: tt }), rt = $e("alert-link", { Component: s }), it = {
	show: !0,
	transition: Ue,
	closeLabel: "Close alert"
}, at = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = z(e, { show: "onClose" }), r = n.bsPrefix, i = n.show, a = n.closeLabel, o = n.className, s = n.children, c = n.variant, u = n.onClose, d = n.dismissible, f = n.transition, p = l(n, et), m = S(r, "alert"), h = Re(function(e) {
		u && u(!1, e);
	}), _ = f === !0 ? Ue : f, v = /* @__PURE__ */ j.createElement("div", g({ role: "alert" }, _ ? void 0 : p, {
		ref: t,
		className: (0, M.default)(o, m, c && m + "-" + c, d && m + "-dismissible")
	}), d && /* @__PURE__ */ j.createElement(qe, {
		onClick: h,
		label: a
	}), s);
	return _ ? /* @__PURE__ */ j.createElement(_, g({ unmountOnExit: !0 }, p, {
		ref: void 0,
		in: i
	}), v) : i ? v : null;
});
at.displayName = "Alert", at.defaultProps = it, at.Link = rt, at.Heading = nt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/CardContext.js
var ot = /* @__PURE__ */ j.createContext(null);
ot.displayName = "CardContext";
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function st() {
	let e = (0, j.useRef)(!0), t = (0, j.useRef)(() => e.current);
	return (0, j.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function ct(e) {
	let t = (0, j.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function lt(e) {
	let t = ct(e);
	(0, j.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var ut = 2 ** 31 - 1;
function dt(e, t, n) {
	let r = n - Date.now();
	e.current = r <= ut ? setTimeout(t, r) : setTimeout(() => dt(e, t, n), ut);
}
function ft() {
	let e = st(), t = (0, j.useRef)();
	return lt(() => clearTimeout(t.current)), (0, j.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= ut ? t.current = setTimeout(r, i) : dt(t, r, Date.now() + i));
		}
		return {
			set: r,
			clear: n,
			handleRef: t
		};
	}, []);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ElementChildren.js
function pt(e, t) {
	var n = 0;
	return j.Children.map(e, function(e) {
		return /* @__PURE__ */ j.isValidElement(e) ? t(e, n++) : e;
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Col.js
var mt = [
	"bsPrefix",
	"className",
	"as"
], ht = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], gt = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = l(e, mt), s = S(n, "col"), c = [], u = [];
	return ht.forEach(function(e) {
		var t = o[e];
		delete o[e];
		var n, r, i;
		if (typeof t == "object" && t) {
			var a = t.span;
			n = a === void 0 ? !0 : a, r = t.offset, i = t.order;
		} else n = t;
		var l = e === "xs" ? "" : "-" + e;
		n && c.push(n === !0 ? "" + s + l : "" + s + l + "-" + n), i != null && u.push("order" + l + "-" + i), r != null && u.push("offset" + l + "-" + r);
	}), c.length || c.push(s), /* @__PURE__ */ j.createElement(a, g({}, o, {
		ref: t,
		className: M.default.apply(void 0, [r].concat(c, u))
	}));
});
gt.displayName = "Col";
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/matches.js
var _t;
function vt(e, t) {
	if (!_t) {
		var n = document.body, r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
		_t = function(e, t) {
			return r.call(e, t);
		};
	}
	return _t(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/querySelectorAll.js
var yt = Function.prototype.bind.call(Function.prototype.call, [].slice);
function bt(e, t) {
	return yt(e.querySelectorAll(t));
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/usePrevious.js
function xt(e) {
	let t = (0, j.useRef)(null);
	return (0, j.useEffect)(() => {
		t.current = e;
	}), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useForceUpdate.js
function St() {
	let [, e] = (0, j.useReducer)((e) => !e, !1);
	return e;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventListener.js
function Ct(e, t, n, r = !1) {
	let i = Re(n);
	(0, j.useEffect)(() => {
		let n = typeof e == "function" ? e() : e;
		return n.addEventListener(t, i, r), () => n.removeEventListener(t, i, r);
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useGlobalListener.js
function wt(e, t, n = !1) {
	return Ct((0, j.useCallback)(() => document, []), e, t, n);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownContext.js
var Tt = /* @__PURE__ */ j.createContext(null);
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function Et() {
	return (0, j.useState)(null);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function Dt(e) {
	let t = st();
	return [e[0], (0, j.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var Ot = "bottom", kt = "right", At = "left", jt = "auto", Mt = [
	"top",
	Ot,
	kt,
	At
], Nt = "start", Pt = "clippingParents", Ft = "viewport", It = "popper", Lt = "reference", Rt = /* @__PURE__ */ Mt.reduce(function(e, t) {
	return e.concat([t + "-" + Nt, t + "-end"]);
}, []), zt = /* @__PURE__ */ [].concat(Mt, [jt]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + Nt,
		t + "-end"
	]);
}, []), Bt = [
	"beforeRead",
	"read",
	"afterRead",
	"beforeMain",
	"main",
	"afterMain",
	"beforeWrite",
	"write",
	"afterWrite"
];
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function Vt(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function Ht(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function Ut(e) {
	return e instanceof Ht(e).Element || e instanceof Element;
}
function Wt(e) {
	return e instanceof Ht(e).HTMLElement || e instanceof HTMLElement;
}
function Gt(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof Ht(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var Kt = Math.max, qt = Math.min, Jt = Math.round;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function Yt() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function Xt() {
	return !/^((?!chrome|android).)*safari/i.test(Yt());
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function Zt(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && Wt(e) && (i = e.offsetWidth > 0 && Jt(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Jt(r.height) / e.offsetHeight || 1);
	var o = (Ut(e) ? Ht(e) : window).visualViewport, s = !Xt() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
	return {
		width: u,
		height: d,
		top: l,
		right: c + u,
		bottom: l + d,
		left: c,
		x: c,
		y: l
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function Qt(e) {
	var t = Zt(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function $t(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && Gt(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function en(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function tn(e) {
	return Ht(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function nn(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(en(e)) >= 0;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function rn(e) {
	return ((Ut(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function an(e) {
	return en(e) === "html" ? e : e.assignedSlot || e.parentNode || (Gt(e) ? e.host : null) || rn(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function on(e) {
	return !Wt(e) || tn(e).position === "fixed" ? null : e.offsetParent;
}
function sn(e) {
	var t = /firefox/i.test(Yt());
	if (/Trident/i.test(Yt()) && Wt(e) && tn(e).position === "fixed") return null;
	var n = an(e);
	for (Gt(n) && (n = n.host); Wt(n) && ["html", "body"].indexOf(en(n)) < 0;) {
		var r = tn(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function cn(e) {
	for (var t = Ht(e), n = on(e); n && nn(n) && tn(n).position === "static";) n = on(n);
	return n && (en(n) === "html" || en(n) === "body" && tn(n).position === "static") ? t : n || sn(e) || t;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function ln(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function un(e, t, n) {
	return Kt(e, qt(t, n));
}
function dn(e, t, n) {
	var r = un(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function fn() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function pn(e) {
	return Object.assign({}, fn(), e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function mn(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var hn = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, pn(typeof e == "number" ? mn(e, Mt) : e);
};
function gn(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Vt(n.placement), c = ln(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = hn(i.padding, n), d = Qt(a), f = c === "y" ? "top" : At, p = c === "y" ? Ot : kt, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = cn(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = un(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function _n(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || $t(t.elements.popper, r) && (t.elements.arrow = r));
}
var vn = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: gn,
	effect: _n,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function yn(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var bn = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function xn(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: Jt(n * i) / i || 0,
		y: Jt(r * i) / i || 0
	};
}
function Sn(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = At, b = "top", x = window;
	if (l) {
		var S = cn(n), C = "clientHeight", w = "clientWidth";
		if (S === Ht(n) && (S = rn(n), tn(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = Ot;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = kt;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && bn), O = u === !0 ? xn({
		x: p,
		y: h
	}, Ht(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Cn(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: Vt(t.placement),
		variation: yn(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Sn(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Sn(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var wn = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Cn,
	data: {}
}, Tn = { passive: !0 };
function En(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = Ht(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, Tn);
	}), s && c.addEventListener("resize", n.update, Tn), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, Tn);
		}), s && c.removeEventListener("resize", n.update, Tn);
	};
}
var Dn = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: En,
	data: {}
}, On = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function kn(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return On[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var An = {
	start: "end",
	end: "start"
};
function jn(e) {
	return e.replace(/start|end/g, function(e) {
		return An[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function Mn(e) {
	var t = Ht(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function Nn(e) {
	return Zt(rn(e)).left + Mn(e).scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function Pn(e, t) {
	var n = Ht(e), r = rn(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = Xt();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + Nn(e),
		y: c
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function Fn(e) {
	var t = rn(e), n = Mn(e), r = e.ownerDocument?.body, i = Kt(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Kt(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + Nn(e), s = -n.scrollTop;
	return tn(r || t).direction === "rtl" && (o += Kt(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function In(e) {
	var t = tn(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function Ln(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(en(e)) >= 0 ? e.ownerDocument.body : Wt(e) && In(e) ? e : Ln(an(e));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function Rn(e, t) {
	t === void 0 && (t = []);
	var n = Ln(e), r = n === e.ownerDocument?.body, i = Ht(n), a = r ? [i].concat(i.visualViewport || [], In(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(Rn(an(a)));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function zn(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function Bn(e, t) {
	var n = Zt(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Vn(e, t, n) {
	return t === "viewport" ? zn(Pn(e, n)) : Ut(t) ? Bn(t, n) : zn(Fn(rn(e)));
}
function Hn(e) {
	var t = Rn(an(e)), n = ["absolute", "fixed"].indexOf(tn(e).position) >= 0 && Wt(e) ? cn(e) : e;
	return Ut(n) ? t.filter(function(e) {
		return Ut(e) && $t(e, n) && en(e) !== "body";
	}) : [];
}
function Un(e, t, n, r) {
	var i = t === "clippingParents" ? Hn(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = Vn(e, n, r);
		return t.top = Kt(i.top, t.top), t.right = qt(i.right, t.right), t.bottom = qt(i.bottom, t.bottom), t.left = Kt(i.left, t.left), t;
	}, Vn(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function Wn(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? Vt(r) : null, a = r ? yn(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case Ot:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case kt:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case At:
			c = {
				x: t.x - n.width,
				y: s
			};
			break;
		default: c = {
			x: t.x,
			y: t.y
		};
	}
	var l = i ? ln(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case Nt:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case "end":
				c[l] = c[l] + (t[u] / 2 - n[u] / 2);
				break;
			default:
		}
	}
	return c;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function Gn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? Pt : s, l = n.rootBoundary, u = l === void 0 ? Ft : l, d = n.elementContext, f = d === void 0 ? It : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = pn(typeof g == "number" ? mn(g, Mt) : g), v = f === "popper" ? Lt : It, y = e.rects.popper, b = e.elements[m ? v : f], x = Un(Ut(b) ? b : b.contextElement || rn(e.elements.popper), c, u, o), S = Zt(e.elements.reference), C = Wn({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = zn(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
		top: x.top - T.top + _.top,
		bottom: T.bottom - x.bottom + _.bottom,
		left: x.left - T.left + _.left,
		right: T.right - x.right + _.right
	}, D = e.modifiersData.offset;
	if (f === "popper" && D) {
		var O = D[i];
		Object.keys(E).forEach(function(e) {
			var t = ["right", "bottom"].indexOf(e) >= 0 ? 1 : -1, n = ["top", "bottom"].indexOf(e) >= 0 ? "y" : "x";
			E[e] += O[n] * t;
		});
	}
	return E;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function Kn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? zt : c, u = yn(r), d = u ? s ? Rt : Rt.filter(function(e) {
		return yn(e) === u;
	}) : Mt, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = Gn(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[Vt(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function qn(e) {
	if (Vt(e) === "auto") return [];
	var t = kn(e);
	return [
		jn(e),
		t,
		jn(t)
	];
}
function Jn(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Vt(g) === g, v = c || (_ || !m ? [kn(g)] : qn(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(Vt(n) === "auto" ? Kn(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = Vt(E), O = yn(E) === Nt, k = ["top", Ot].indexOf(D) >= 0, A = k ? "width" : "height", j = Gn(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? kt : At : O ? Ot : "top";
			b[A] > x[A] && (M = kn(M));
			var N = kn(M), P = [];
			if (a && P.push(j[D] <= 0), s && P.push(j[M] <= 0, j[N] <= 0), P.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, P);
		}
		if (C) for (var F = m ? 3 : 1, I = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, L = F; L > 0 && I(L) !== "break"; L--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var Yn = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: Jn,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function Xn(e, t, n) {
	return n === void 0 && (n = {
		x: 0,
		y: 0
	}), {
		top: e.top - t.height - n.y,
		right: e.right - t.width + n.x,
		bottom: e.bottom - t.height + n.y,
		left: e.left - t.width - n.x
	};
}
function Zn(e) {
	return [
		"top",
		kt,
		Ot,
		At
	].some(function(t) {
		return e[t] >= 0;
	});
}
function Qn(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Gn(t, { elementContext: "reference" }), s = Gn(t, { altBoundary: !0 }), c = Xn(o, r), l = Xn(s, i, a), u = Zn(c), d = Zn(l);
	t.modifiersData[n] = {
		referenceClippingOffsets: c,
		popperEscapeOffsets: l,
		isReferenceHidden: u,
		hasPopperEscaped: d
	}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
		"data-popper-reference-hidden": u,
		"data-popper-escaped": d
	});
}
var $n = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: Qn
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function er(e, t, n) {
	var r = Vt(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function tr(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = zt.reduce(function(e, n) {
		return e[n] = er(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var nr = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: tr
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function rr(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = Wn({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var ir = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: rr,
	data: {}
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function ar(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function or(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = Gn(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = Vt(t.placement), v = yn(t.placement), y = !v, b = ln(_), x = ar(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
		mainAxis: T,
		altAxis: T
	} : Object.assign({
		mainAxis: 0,
		altAxis: 0
	}, T), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
		x: 0,
		y: 0
	};
	if (S) {
		if (a) {
			var k = b === "y" ? "top" : At, A = b === "y" ? Ot : kt, j = b === "y" ? "height" : "width", M = S[b], N = M + g[k], P = M - g[A], F = p ? -w[j] / 2 : 0, I = v === "start" ? C[j] : w[j], L = v === "start" ? -w[j] : -C[j], R = t.elements.arrow, z = p && R ? Qt(R) : {
				width: 0,
				height: 0
			}, B = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : fn(), V = B[k], ee = B[A], H = un(0, C[j], z[j]), te = y ? C[j] / 2 - F - H - V - E.mainAxis : I - H - V - E.mainAxis, ne = y ? -C[j] / 2 + F + H + ee + E.mainAxis : L + H + ee + E.mainAxis, re = t.elements.arrow && cn(t.elements.arrow), ie = re ? b === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, ae = D?.[b] ?? 0, oe = M + te - ae - ie, se = M + ne - ae, ce = un(p ? qt(N, oe) : N, M, p ? Kt(P, se) : P);
			S[b] = ce, O[b] = ce - M;
		}
		if (s) {
			var le = b === "x" ? "top" : At, ue = b === "x" ? Ot : kt, U = S[x], de = x === "y" ? "height" : "width", fe = U + g[le], pe = U - g[ue], me = ["top", At].indexOf(_) !== -1, he = D?.[x] ?? 0, ge = me ? fe : U - C[de] - w[de] - he + E.altAxis, _e = me ? U + C[de] + w[de] - he - E.altAxis : pe, ve = p && me ? dn(ge, U, _e) : un(p ? ge : fe, U, p ? _e : pe);
			S[x] = ve, O[x] = ve - U;
		}
		t.modifiersData[r] = O;
	}
}
var sr = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: or,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function cr(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function lr(e) {
	return e === Ht(e) || !Wt(e) ? Mn(e) : cr(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function ur(e) {
	var t = e.getBoundingClientRect(), n = Jt(t.width) / e.offsetWidth || 1, r = Jt(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function dr(e, t, n) {
	n === void 0 && (n = !1);
	var r = Wt(t), i = Wt(t) && ur(t), a = rn(t), o = Zt(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((en(t) !== "body" || In(a)) && (s = lr(t)), Wt(t) ? (c = Zt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Nn(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function fr(e) {
	var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
	e.forEach(function(e) {
		t.set(e.name, e);
	});
	function i(e) {
		n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
			if (!n.has(e)) {
				var r = t.get(e);
				r && i(r);
			}
		}), r.push(e);
	}
	return e.forEach(function(e) {
		n.has(e.name) || i(e);
	}), r;
}
function pr(e) {
	var t = fr(e);
	return Bt.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function mr(e) {
	var t;
	return function() {
		return t ||= new Promise(function(n) {
			Promise.resolve().then(function() {
				t = void 0, n(e());
			});
		}), t;
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js
function hr(e) {
	var t = e.reduce(function(e, t) {
		var n = e[t.name];
		return e[t.name] = n ? Object.assign({}, n, t, {
			options: Object.assign({}, n.options, t.options),
			data: Object.assign({}, n.data, t.data)
		}) : t, e;
	}, {});
	return Object.keys(t).map(function(e) {
		return t[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
var gr = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function _r() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function vr(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? gr : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, gr, a),
			modifiersData: {},
			elements: {
				reference: e,
				popper: t
			},
			attributes: {},
			styles: {}
		}, o = [], s = !1, c = {
			state: i,
			setOptions: function(n) {
				var o = typeof n == "function" ? n(i.options) : n;
				u(), i.options = Object.assign({}, a, i.options, o), i.scrollParents = {
					reference: Ut(e) ? Rn(e) : e.contextElement ? Rn(e.contextElement) : [],
					popper: Rn(t)
				};
				var s = pr(hr([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (_r(t, n)) {
						i.rects = {
							reference: dr(t, cn(n), i.options.strategy === "fixed"),
							popper: Qt(n)
						}, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(e) {
							return i.modifiersData[e.name] = Object.assign({}, e.data);
						});
						for (var r = 0; r < i.orderedModifiers.length; r++) {
							if (i.reset === !0) {
								i.reset = !1, r = -1;
								continue;
							}
							var a = i.orderedModifiers[r], o = a.fn, l = a.options, u = l === void 0 ? {} : l, d = a.name;
							typeof o == "function" && (i = o({
								state: i,
								options: u,
								name: d,
								instance: c
							}) || i);
						}
					}
				}
			},
			update: mr(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!_r(e, t)) return c;
		c.setOptions(n).then(function(e) {
			!s && n.onFirstUpdate && n.onFirstUpdate(e);
		});
		function l() {
			i.orderedModifiers.forEach(function(e) {
				var t = e.name, n = e.options, r = n === void 0 ? {} : n, a = e.effect;
				if (typeof a == "function") {
					var s = a({
						state: i,
						name: t,
						instance: c,
						options: r
					});
					o.push(s || function() {});
				}
			});
		}
		function u() {
			o.forEach(function(e) {
				return e();
			}), o = [];
		}
		return c;
	};
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/popper.js
var yr = vr({ defaultModifiers: [
	$n,
	ir,
	wn,
	Dn,
	nr,
	Yn,
	sr,
	vn
] }), br = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, xr = {
	name: "applyStyles",
	enabled: !1
}, Sr = {
	name: "ariaDescribedBy",
	enabled: !0,
	phase: "afterWrite",
	effect: function(e) {
		var t = e.state;
		return function() {
			var e = t.elements, n = e.reference, r = e.popper;
			if ("removeAttribute" in n) {
				var i = (n.getAttribute("aria-describedby") || "").split(",").filter(function(e) {
					return e.trim() !== r.id;
				});
				i.length ? n.setAttribute("aria-describedby", i.join(",")) : n.removeAttribute("aria-describedby");
			}
		};
	},
	fn: function(e) {
		var t = e.state.elements, n = t.popper, r = t.reference, i = n.getAttribute("role")?.toLowerCase();
		if (n.id && i === "tooltip" && "setAttribute" in r) {
			var a = r.getAttribute("aria-describedby");
			if (a && a.split(",").indexOf(n.id) !== -1) return;
			r.setAttribute("aria-describedby", a ? a + "," + n.id : n.id);
		}
	}
}, Cr = [];
function wr(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, c = r.strategy, u = c === void 0 ? "absolute" : c, d = r.modifiers, f = d === void 0 ? Cr : d, p = l(r, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), m = (0, j.useRef)(), h = (0, j.useCallback)(function() {
		var e;
		(e = m.current) == null || e.update();
	}, []), _ = (0, j.useCallback)(function() {
		var e;
		(e = m.current) == null || e.forceUpdate();
	}, []), v = Dt((0, j.useState)({
		placement: s,
		update: h,
		forceUpdate: _,
		attributes: {},
		styles: {
			popper: br(u),
			arrow: {}
		}
	})), y = v[0], b = v[1], x = (0, j.useMemo)(function() {
		return {
			name: "updateStateModifier",
			enabled: !0,
			phase: "write",
			requires: ["computeStyles"],
			fn: function(e) {
				var t = e.state, n = {}, r = {};
				Object.keys(t.elements).forEach(function(e) {
					n[e] = t.styles[e], r[e] = t.attributes[e];
				}), b({
					state: t,
					styles: n,
					attributes: r,
					update: h,
					forceUpdate: _,
					placement: t.placement
				});
			}
		};
	}, [
		h,
		_,
		b
	]);
	return (0, j.useEffect)(function() {
		!m.current || !a || m.current.setOptions({
			placement: s,
			strategy: u,
			modifiers: [].concat(f, [x, xr])
		});
	}, [
		u,
		s,
		x,
		a
	]), (0, j.useEffect)(function() {
		if (!(!a || e == null || t == null)) return m.current = yr(e, t, g({}, p, {
			placement: s,
			strategy: u,
			modifiers: [].concat(f, [Sr, x])
		})), function() {
			m.current != null && (m.current.destroy(), m.current = void 0, b(function(e) {
				return g({}, e, {
					attributes: {},
					styles: { popper: br(u) }
				});
			}));
		};
	}, [
		a,
		e,
		t
	]), y;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js
function Tr(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/safeFindDOMNode.js
var Er = /* @__PURE__ */ h((/* @__PURE__ */ r(((e, t) => {
	var n = !1, r = function() {};
	if (n) {
		var i = function(e, t) {
			var n = arguments.length;
			t = Array(n > 1 ? n - 1 : 0);
			for (var r = 1; r < n; r++) t[r - 1] = arguments[r];
			var i = 0, a = "Warning: " + e.replace(/%s/g, function() {
				return t[i++];
			});
			typeof console < "u" && console.error(a);
			try {
				throw Error(a);
			} catch {}
		};
		r = function(e, t, n) {
			var r = arguments.length;
			n = Array(r > 2 ? r - 2 : 0);
			for (var a = 2; a < r; a++) n[a - 2] = arguments[a];
			if (t === void 0) throw Error("`warning(condition, format, ...args)` requires a warning message argument");
			e || i.apply(null, [t].concat(n));
		};
	}
	t.exports = r;
})))());
function Dr(e) {
	return e && "setState" in e ? A.findDOMNode(e) : e ?? null;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var Or = (function(e) {
	return ie(Dr(e));
}), kr = 27, Ar = function() {};
function jr(e) {
	return e.button === 0;
}
function Mr(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Nr = function(e) {
	return e && ("current" in e ? e.current : e);
};
function Pr(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, j.useRef)(!1), c = t || Ar, l = (0, j.useCallback)(function(t) {
		var n = Nr(e);
		(0, Er.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || Mr(t) || !jr(t) || !!Tr(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Re(function(e) {
		s.current || c(e);
	}), d = Re(function(e) {
		e.keyCode === kr && c(e);
	});
	(0, j.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = Or(Nr(e)), r = ke(n, o, l, !0), a = ke(n, o, function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				u(e);
			}), s = ke(n, "keyup", function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return ke(e, "mousemove", Ar);
			})), function() {
				r(), a(), s(), c.forEach(function(e) {
					return e();
				});
			};
		}
	}, [
		e,
		i,
		o,
		l,
		u,
		d
	]);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js
function Fr(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function Ir(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function Lr(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, u = l === void 0 ? {} : l, d = Fr(u.modifiers);
	return g({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: Ir(g({}, d, {
			eventListeners: { enabled: n },
			preventOverflow: g({}, d.preventOverflow, { options: s ? g({ padding: s }, d.preventOverflow?.options) : d.preventOverflow?.options }),
			offset: { options: g({ offset: a }, d.offset?.options) },
			arrow: g({}, d.arrow, {
				enabled: !!c,
				options: g({}, d.arrow?.options, { element: c })
			}),
			flip: g({ enabled: !!i }, d.flip)
		}))
	});
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownMenu.js
var Rr = function() {};
function zr(e) {
	e === void 0 && (e = {});
	var t = (0, j.useContext)(Tt), n = Et(), r = n[0], i = n[1], a = (0, j.useRef)(!1), o = e, s = o.flip, c = o.offset, l = o.rootCloseEvent, u = o.fixed, d = u === void 0 ? !1 : u, f = o.popperConfig, p = f === void 0 ? {} : f, m = o.usePopper, h = m === void 0 ? !!t : m, _ = t?.show == null ? !!e.show : t.show, v = t?.alignEnd == null ? e.alignEnd : t.alignEnd;
	_ && !a.current && (a.current = !0);
	var y = function(e) {
		t?.toggle(!1, e);
	}, b = t || {}, x = b.drop, S = b.setMenu, C = b.menuElement, w = b.toggleElement, T = v ? "bottom-end" : "bottom-start";
	x === "up" ? T = v ? "top-end" : "top-start" : x === "right" ? T = v ? "right-end" : "right-start" : x === "left" && (T = v ? "left-end" : "left-start");
	var E = wr(w, C, Lr({
		placement: T,
		enabled: !!(h && _),
		enableEvents: _,
		offset: c,
		flip: s,
		fixed: d,
		arrowElement: r,
		popperConfig: p
	})), D = g({
		ref: S || Rr,
		"aria-labelledby": w?.id
	}, E.attributes.popper, { style: E.styles.popper }), O = {
		show: _,
		alignEnd: v,
		hasShown: a.current,
		toggle: t?.toggle,
		popper: h ? E : null,
		arrowProps: h ? g({ ref: i }, E.attributes.arrow, { style: E.styles.arrow }) : {}
	};
	return Pr(C, y, {
		clickTrigger: l,
		disabled: !_
	}), [D, O];
}
var Br = {
	children: W.default.func.isRequired,
	show: W.default.bool,
	alignEnd: W.default.bool,
	flip: W.default.bool,
	usePopper: W.default.oneOf([!0, !1]),
	popperConfig: W.default.object,
	rootCloseEvent: W.default.string
}, Vr = { usePopper: !0 };
function Hr(e) {
	var t = e.children, n = zr(l(e, ["children"])), r = n[0], i = n[1];
	return /* @__PURE__ */ j.createElement(j.Fragment, null, i.hasShown ? t(r, i) : null);
}
Hr.displayName = "ReactOverlaysDropdownMenu", Hr.propTypes = Br, Hr.defaultProps = Vr;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownToggle.js
var Ur = function() {};
function Wr() {
	var e = (0, j.useContext)(Tt) || {}, t = e.show, n = t === void 0 ? !1 : t, r = e.toggle, i = r === void 0 ? Ur : r, a = e.setToggle, o = (0, j.useCallback)(function(e) {
		i(!n, e);
	}, [n, i]);
	return [{
		ref: a || Ur,
		onClick: o,
		"aria-haspopup": !0,
		"aria-expanded": !!n
	}, {
		show: n,
		toggle: i
	}];
}
var Gr = { children: W.default.func.isRequired };
function Kr(e) {
	var t = e.children, n = Wr(), r = n[0], i = n[1];
	return /* @__PURE__ */ j.createElement(j.Fragment, null, t(r, i));
}
Kr.displayName = "ReactOverlaysDropdownToggle", Kr.propTypes = Gr;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Dropdown.js
var qr = {
	children: W.default.node,
	drop: W.default.oneOf([
		"up",
		"left",
		"right",
		"down"
	]),
	focusFirstItemOnShow: W.default.oneOf([
		!1,
		!0,
		"keyboard"
	]),
	itemSelector: W.default.string,
	alignEnd: W.default.bool,
	show: W.default.bool,
	defaultShow: W.default.bool,
	onToggle: W.default.func
};
function Jr() {
	var e = St(), t = (0, j.useRef)(null);
	return [t, (0, j.useCallback)(function(n) {
		t.current = n, e();
	}, [e])];
}
function Yr(e) {
	var t = e.drop, n = e.alignEnd, r = e.defaultShow, i = e.show, a = e.onToggle, o = e.itemSelector, s = o === void 0 ? "* > *" : o, c = e.focusFirstItemOnShow, l = e.children, u = R(i, r, a), d = u[0], f = u[1], p = Jr(), m = p[0], h = p[1], g = m.current, _ = Jr(), v = _[0], y = _[1], b = v.current, x = xt(d), S = (0, j.useRef)(null), C = (0, j.useRef)(!1), w = (0, j.useCallback)(function(e, t) {
		f(e, t);
	}, [f]), T = (0, j.useMemo)(function() {
		return {
			toggle: w,
			drop: t,
			show: d,
			alignEnd: n,
			menuElement: g,
			toggleElement: b,
			setMenu: h,
			setToggle: y
		};
	}, [
		w,
		t,
		d,
		n,
		g,
		b,
		h,
		y
	]);
	g && x && !d && (C.current = g.contains(document.activeElement));
	var E = Re(function() {
		b && b.focus && b.focus();
	}), D = Re(function() {
		var e = S.current, t = c;
		if (t ??= m.current && vt(m.current, "[role=menu]") ? "keyboard" : !1, !(t === !1 || t === "keyboard" && !/^key.+$/.test(e))) {
			var n = bt(m.current, s)[0];
			n && n.focus && n.focus();
		}
	});
	(0, j.useEffect)(function() {
		d ? D() : C.current && (C.current = !1, E());
	}, [
		d,
		C,
		E,
		D
	]), (0, j.useEffect)(function() {
		S.current = null;
	});
	var O = function(e, t) {
		if (!m.current) return null;
		var n = bt(m.current, s), r = n.indexOf(e) + t;
		return r = Math.max(0, Math.min(r, n.length)), n[r];
	};
	return wt("keydown", function(e) {
		var t = e.key, n = e.target, r = m.current?.contains(n), i = v.current?.contains(n);
		if (!(/input|textarea/i.test(n.tagName) && (t === " " || t !== "Escape" && r)) && !(!r && !i) && !(!m.current && t === "Tab")) switch (S.current = e.type, t) {
			case "ArrowUp":
				var a = O(n, -1);
				a && a.focus && a.focus(), e.preventDefault();
				return;
			case "ArrowDown":
				if (e.preventDefault(), !d) f(!0, e);
				else {
					var o = O(n, 1);
					o && o.focus && o.focus();
				}
				return;
			case "Tab":
				De(document, "keyup", function(t) {
					var n;
					(t.key === "Tab" && !t.target || !((n = m.current) != null && n.contains(t.target))) && f(!1, e);
				}, { once: !0 });
				break;
			case "Escape":
				e.preventDefault(), e.stopPropagation(), f(!1, e);
				break;
			default:
		}
	}), /* @__PURE__ */ j.createElement(Tt.Provider, { value: T }, l);
}
Yr.displayName = "ReactOverlaysDropdown", Yr.propTypes = qr, Yr.Menu = Hr, Yr.Toggle = Kr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavContext.js
var Xr = /* @__PURE__ */ j.createContext(null);
Xr.displayName = "NavContext";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/DropdownItem.js
var Zr = [
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
], Qr = {
	as: s,
	disabled: !1
}, $r = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.eventKey, o = e.disabled, s = e.href, c = e.onClick, u = e.onSelect, d = e.active, f = e.as, p = l(e, Zr), m = S(n, "dropdown-item"), h = (0, j.useContext)(ne), _ = ((0, j.useContext)(Xr) || {}).activeKey, v = re(a, s), y = d == null && v != null ? re(_) === v : d, b = Re(function(e) {
		o || (c && c(e), h && h(v, e), u && u(v, e));
	});
	return /* @__PURE__ */ j.createElement(f, g({}, p, {
		ref: t,
		href: s,
		disabled: o,
		className: (0, M.default)(r, m, y && "active", o && "disabled"),
		onClick: b
	}), i);
});
$r.displayName = "DropdownItem", $r.defaultProps = Qr;
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var ei = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function ti(e, t) {
	let n = ei(e), r = ei(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function ni(e, t) {
	return (0, j.useMemo)(() => ti(e, t), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavbarContext.js
var ri = /* @__PURE__ */ j.createContext(null);
ri.displayName = "NavbarContext";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/useWrappedRefWithWarning.js
function ii(e, t) {
	return e;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function ai(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function oi(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function si() {
	var e = (0, j.useRef)(null), t = (0, j.useRef)(null), n = (0, j.useRef)(null), r = S(void 0, "popover"), i = S(void 0, "dropdown-menu");
	return [(0, j.useCallback)(function(n) {
		!n || !(ai(n, r) || ai(n, i)) || (t.current = oi(n), n.style.margin = "0", e.current = n);
	}, [r, i]), [
		(0, j.useMemo)(function() {
			return {
				name: "offset",
				options: { offset: function(e) {
					var n = e.placement;
					if (!t.current) return [0, 0];
					var r = t.current, i = r.top, a = r.left, o = r.bottom, s = r.right;
					switch (n.split("-")[0]) {
						case "top": return [0, o];
						case "left": return [0, s];
						case "bottom": return [0, i];
						case "right": return [0, a];
						default: return [0, 0];
					}
				} }
			};
		}, [t]),
		(0, j.useMemo)(function() {
			return {
				name: "arrow",
				options: { padding: function() {
					if (!n.current) return 0;
					var e = n.current, t = e.top, r = e.right, i = t || r;
					return {
						top: i,
						left: i,
						right: i,
						bottom: i
					};
				} }
			};
		}, [n]),
		(0, j.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var i = t.state;
					if (!(!e.current || !i.elements.arrow || !ai(e.current, r))) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = oi(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = oi(i.elements.arrow);
						return i.elements.arrow.style.margin = "0", function() {
							i.elements.arrow && (i.elements.arrow.style.margin = "");
						};
					}
				}
			};
		}, [r])
	]];
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/DropdownMenu.js
var ci = [
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
], li = W.default.oneOf(["left", "right"]);
W.default.oneOfType([
	li,
	W.default.shape({ sm: li }),
	W.default.shape({ md: li }),
	W.default.shape({ lg: li }),
	W.default.shape({ xl: li })
]);
var ui = {
	align: "left",
	alignRight: !1,
	flip: !0
}, di = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.align, a = e.alignRight, o = e.rootCloseEvent, s = e.flip, c = e.show, u = e.renderOnMount, d = e.as, f = d === void 0 ? "div" : d, p = e.popperConfig, m = l(e, ci), h = (0, j.useContext)(ri), _ = S(n, "dropdown-menu"), v = si(), y = v[0], b = v[1], x = [];
	if (i) if (typeof i == "object") {
		var C = Object.keys(i);
		if (C.length) {
			var w = C[0], T = i[w];
			a = T === "left", x.push(_ + "-" + w + "-" + T);
		}
	} else i === "right" && (a = !0);
	var E = zr({
		flip: s,
		rootCloseEvent: o,
		show: c,
		alignEnd: a,
		usePopper: !h && x.length === 0,
		popperConfig: g({}, p, { modifiers: b.concat(p?.modifiers || []) })
	}), D = E[0], O = E[1], k = O.hasShown, A = O.popper, N = O.show, P = O.alignEnd, F = O.toggle;
	if (D.ref = ni(y, ni(ii(t, "DropdownMenu"), D.ref)), !k && !u) return null;
	typeof f != "string" && (D.show = N, D.close = function() {
		return F?.(!1);
	}, D.alignRight = P);
	var I = m.style;
	return A != null && A.placement && (I = g({}, m.style, D.style), m["x-placement"] = A.placement), /* @__PURE__ */ j.createElement(f, g({}, m, D, {
		style: I,
		className: M.default.apply(void 0, [
			r,
			_,
			N && "show",
			P && _ + "-right"
		].concat(x))
	}));
});
di.displayName = "DropdownMenu", di.defaultProps = ui, (/* @__PURE__ */ r(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = n;
	function n(e) {
		return function(t, n, r, i, a) {
			var o = r || "<<anonymous>>", s = a || n;
			if (t[n] == null) return /* @__PURE__ */ Error("The " + i + " `" + s + "` is required to make " + ("`" + o + "` accessible for users of assistive ") + "technologies such as screen readers.");
			var c = [...arguments].slice(5);
			return e.apply(void 0, [
				t,
				n,
				r,
				i,
				a
			].concat(c));
		};
	}
	t.exports = e.default;
})))();
var fi = [
	"bsPrefix",
	"split",
	"className",
	"childBsPrefix",
	"as"
], pi = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.split, i = e.className, a = e.childBsPrefix, o = e.as, s = o === void 0 ? m : o, c = l(e, fi), u = S(n, "dropdown-toggle");
	a !== void 0 && (c.bsPrefix = a);
	var d = Wr()[0];
	return d.ref = ni(d.ref, ii(t, "DropdownToggle")), /* @__PURE__ */ j.createElement(s, g({ className: (0, M.default)(i, u, r && u + "-split") }, d, c));
});
pi.displayName = "DropdownToggle";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Dropdown.js
var mi = [
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
], hi = $e("dropdown-header", { defaultProps: { role: "heading" } }), gi = $e("dropdown-divider", { defaultProps: { role: "separator" } }), _i = $e("dropdown-item-text", { Component: "span" }), vi = { navbar: !1 }, G = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = z(e, { show: "onToggle" }), r = n.bsPrefix, i = n.drop, a = n.show, o = n.className, s = n.alignRight, c = n.onSelect, u = n.onToggle, d = n.focusFirstItemOnShow, f = n.as, p = f === void 0 ? "div" : f;
	n.navbar;
	var m = l(n, mi), h = (0, j.useContext)(ne), _ = S(r, "dropdown"), v = Re(function(e, t, n) {
		n === void 0 && (n = t.type), t.currentTarget === document && (n !== "keydown" || t.key === "Escape") && (n = "rootClose"), u && u(e, t, { source: n });
	}), y = Re(function(e, t) {
		h && h(e, t), c && c(e, t), v(!1, t, "select");
	});
	return /* @__PURE__ */ j.createElement(ne.Provider, { value: y }, /* @__PURE__ */ j.createElement(Yr, {
		drop: i,
		show: a,
		alignEnd: s,
		onToggle: v,
		focusFirstItemOnShow: d,
		itemSelector: "." + _ + "-item:not(.disabled):not(:disabled)"
	}, /* @__PURE__ */ j.createElement(p, g({}, m, {
		ref: t,
		className: (0, M.default)(o, a && "show", (!i || i === "down") && _, i === "up" && "dropup", i === "right" && "dropright", i === "left" && "dropleft")
	}))));
});
G.displayName = "Dropdown", G.defaultProps = vi, G.Divider = gi, G.Header = hi, G.Item = $r, G.ItemText = _i, G.Menu = di, G.Toggle = pi;
//#endregion
//#region node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var yi = /* @__PURE__ */ r(((e, t) => {
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
(/* @__PURE__ */ r(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(yi());
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
var bi = [
	"as",
	"className",
	"type",
	"tooltip"
], xi = {
	type: W.default.string,
	tooltip: W.default.bool,
	as: W.default.elementType
}, Si = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, c = s === void 0 ? !1 : s, u = l(e, bi);
	return /* @__PURE__ */ j.createElement(r, g({}, u, {
		ref: t,
		className: (0, M.default)(i, o + "-" + (c ? "tooltip" : "feedback"))
	}));
});
Si.displayName = "Feedback", Si.propTypes = xi;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var Ci = /* @__PURE__ */ j.createContext({ controlId: void 0 }), wi = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], Ti = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, c = e.isValid, u = c === void 0 ? !1 : c, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.isStatic, m = e.as, h = m === void 0 ? "input" : m, _ = l(e, wi), v = (0, j.useContext)(Ci), y = v.controlId, b = v.custom ? [i, "custom-control-input"] : [r, "form-check-input"], x = b[0], C = b[1];
	return r = S(x, C), /* @__PURE__ */ j.createElement(h, g({}, _, {
		ref: t,
		type: s,
		id: n || y,
		className: (0, M.default)(a, r, u && "is-valid", f && "is-invalid", p && "position-static")
	}));
});
Ti.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Ei = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Di = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = l(e, Ei), s = (0, j.useContext)(Ci), c = s.controlId, u = s.custom ? [r, "custom-control-label"] : [n, "form-check-label"], d = u[0], f = u[1];
	return n = S(d, f), /* @__PURE__ */ j.createElement("label", g({}, o, {
		ref: t,
		htmlFor: a || c,
		className: (0, M.default)(i, n)
	}));
});
Di.displayName = "FormCheckLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheck.js
var Oi = [
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
], ki = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a === void 0 ? !1 : a, s = e.disabled, c = s === void 0 ? !1 : s, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, m = e.feedbackTooltip, h = m === void 0 ? !1 : m, _ = e.feedback, v = e.className, y = e.style, b = e.title, x = b === void 0 ? "" : b, C = e.type, w = C === void 0 ? "checkbox" : C, T = e.label, E = e.children, D = e.custom, O = e.as, k = O === void 0 ? "input" : O, A = l(e, Oi), N = w === "switch" ? !0 : D, P = N ? [i, "custom-control"] : [r, "form-check"], F = P[0], I = P[1];
	r = S(F, I);
	var L = (0, j.useContext)(Ci).controlId, R = (0, j.useMemo)(function() {
		return {
			controlId: n || L,
			custom: N
		};
	}, [
		L,
		N,
		n
	]), z = N || T != null && T !== !1 && !E, B = /* @__PURE__ */ j.createElement(Ti, g({}, A, {
		type: w === "switch" ? "checkbox" : w,
		ref: t,
		isValid: d,
		isInvalid: p,
		isStatic: !z,
		disabled: c,
		as: k
	}));
	return /* @__PURE__ */ j.createElement(Ci.Provider, { value: R }, /* @__PURE__ */ j.createElement("div", {
		style: y,
		className: (0, M.default)(v, r, N && "custom-" + w, o && r + "-inline")
	}, E || /* @__PURE__ */ j.createElement(j.Fragment, null, B, z && /* @__PURE__ */ j.createElement(Di, { title: x }, T), (d || p) && /* @__PURE__ */ j.createElement(Si, {
		type: d ? "valid" : "invalid",
		tooltip: h
	}, _))));
});
ki.displayName = "FormCheck", ki.Input = Ti, ki.Label = Di;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var Ai = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], ji = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, c = e.lang, u = e.as, d = u === void 0 ? "input" : u, f = l(e, Ai), p = (0, j.useContext)(Ci), m = p.controlId, h = p.custom, _ = "file", v = h ? [i, "custom-file-input"] : [r, "form-control-file"], y = v[0], b = v[1];
	return r = S(y, b), /* @__PURE__ */ j.createElement(d, g({}, f, {
		ref: t,
		id: n || m,
		type: _,
		lang: c,
		className: (0, M.default)(a, r, o && "is-valid", s && "is-invalid")
	}));
});
ji.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Mi = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Ni = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = l(e, Mi), s = (0, j.useContext)(Ci), c = s.controlId, u = s.custom ? [r, "custom-file-label"] : [n, "form-file-label"], d = u[0], f = u[1];
	return n = S(d, f), /* @__PURE__ */ j.createElement("label", g({}, o, {
		ref: t,
		htmlFor: a || c,
		className: (0, M.default)(i, n),
		"data-browse": o["data-browse"]
	}));
});
Ni.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var Pi = [
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
], Fi = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a === void 0 ? !1 : a, s = e.isValid, c = s === void 0 ? !1 : s, u = e.isInvalid, d = u === void 0 ? !1 : u, f = e.feedbackTooltip, p = f === void 0 ? !1 : f, m = e.feedback, h = e.className, _ = e.style, v = e.label, y = e.children, b = e.custom, x = e.lang, C = e["data-browse"], w = e.as, T = w === void 0 ? "div" : w, E = e.inputAs, D = E === void 0 ? "input" : E, O = l(e, Pi), k = b ? [i, "custom"] : [r, "form-file"], A = k[0], N = k[1];
	r = S(A, N);
	var P = "file", F = (0, j.useContext)(Ci).controlId, I = (0, j.useMemo)(function() {
		return {
			controlId: n || F,
			custom: b
		};
	}, [
		F,
		b,
		n
	]), L = v != null && v !== !1 && !y, R = /* @__PURE__ */ j.createElement(ji, g({}, O, {
		ref: t,
		isValid: c,
		isInvalid: d,
		disabled: o,
		as: D,
		lang: x
	}));
	return /* @__PURE__ */ j.createElement(Ci.Provider, { value: I }, /* @__PURE__ */ j.createElement(T, {
		style: _,
		className: (0, M.default)(h, r, b && "custom-" + P)
	}, y || /* @__PURE__ */ j.createElement(j.Fragment, null, b ? /* @__PURE__ */ j.createElement(j.Fragment, null, R, L && /* @__PURE__ */ j.createElement(Ni, { "data-browse": C }, v)) : /* @__PURE__ */ j.createElement(j.Fragment, null, L && /* @__PURE__ */ j.createElement(Ni, null, v), R), (c || d) && /* @__PURE__ */ j.createElement(Si, {
		type: c ? "valid" : "invalid",
		tooltip: p
	}, m))));
});
Fi.displayName = "FormFile", Fi.Input = ji, Fi.Label = Ni;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var Ii = [
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
], Li = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, c = e.className, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, m = e.plaintext, h = e.readOnly, _ = e.custom, v = e.as, y = v === void 0 ? "input" : v, b = l(e, Ii), x = (0, j.useContext)(Ci).controlId, C = _ ? [r, "custom"] : [n, "form-control"], w = C[0], T = C[1];
	n = S(w, T);
	var E;
	if (m) {
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
		var N;
		E = (N = {}, N[n] = !0, N[n + "-" + a] = a, N);
	}
	return /* @__PURE__ */ j.createElement(y, g({}, b, {
		type: i,
		size: o,
		ref: t,
		readOnly: h,
		id: s || x,
		className: (0, M.default)(c, E, d && "is-valid", p && "is-invalid")
	}));
});
Li.displayName = "FormControl";
var Ri = Object.assign(Li, { Feedback: Si }), zi = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Bi = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, c = l(e, zi);
	n = S(n, "form-group");
	var u = (0, j.useMemo)(function() {
		return { controlId: a };
	}, [a]);
	return /* @__PURE__ */ j.createElement(Ci.Provider, { value: u }, /* @__PURE__ */ j.createElement(s, g({}, c, {
		ref: t,
		className: (0, M.default)(r, n)
	}), i));
});
Bi.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Vi = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], Hi = {
	column: !1,
	srOnly: !1
}, Ui = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, c = e.htmlFor, u = l(e, Vi), d = (0, j.useContext)(Ci).controlId;
	i = S(i, "form-label");
	var f = "col-form-label";
	typeof a == "string" && (f = f + " " + f + "-" + a);
	var p = (0, M.default)(s, i, o && "sr-only", a && f);
	return c ||= d, a ? /* @__PURE__ */ j.createElement(gt, g({
		ref: t,
		as: "label",
		className: p,
		htmlFor: c
	}, u)) : /* @__PURE__ */ j.createElement(r, g({
		ref: t,
		className: p,
		htmlFor: c
	}, u));
});
Ui.displayName = "FormLabel", Ui.defaultProps = Hi;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var Wi = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], Gi = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = l(e, Wi);
	return n = S(n, "form-text"), /* @__PURE__ */ j.createElement(a, g({}, s, {
		ref: t,
		className: (0, M.default)(r, n, o && "text-muted")
	}));
});
Gi.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var Ki = /* @__PURE__ */ j.forwardRef(function(e, t) {
	return /* @__PURE__ */ j.createElement(ki, g({}, e, {
		ref: t,
		type: "switch"
	}));
});
Ki.displayName = "Switch", Ki.Input = ki.Input, Ki.Label = ki.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var qi = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], Ji = $e("form-row"), Yi = { inline: !1 }, Xi = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, c = l(e, qi);
	return n = S(n, "form"), /* @__PURE__ */ j.createElement(s, g({}, c, {
		ref: t,
		className: (0, M.default)(i, a && "was-validated", r && n + "-inline")
	}));
});
Xi.displayName = "Form", Xi.defaultProps = Yi, Xi.Row = Ji, Xi.Group = Bi, Xi.Control = Ri, Xi.Check = ki, Xi.File = Fi, Xi.Switch = Ki, Xi.Label = Ui, Xi.Text = Gi;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContext.js
var Zi = /* @__PURE__ */ j.createContext(null), Qi = [
	"as",
	"onSelect",
	"activeKey",
	"role",
	"onKeyDown"
], $i = function() {}, ea = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "ul" : n, i = e.onSelect, a = e.activeKey, o = e.role, s = e.onKeyDown, c = l(e, Qi), u = St(), d = (0, j.useRef)(!1), f = (0, j.useContext)(ne), p = (0, j.useContext)(Zi), m, h;
	p && (o ||= "tablist", a = p.activeKey, m = p.getControlledId, h = p.getControllerId);
	var _ = (0, j.useRef)(null), v = function(e) {
		var t = _.current;
		if (!t) return null;
		var n = bt(t, "[data-rb-event-key]:not(.disabled)"), r = t.querySelector(".active");
		if (!r) return null;
		var i = n.indexOf(r);
		if (i === -1) return null;
		var a = i + e;
		return a >= n.length && (a = 0), a < 0 && (a = n.length - 1), n[a];
	}, y = function(e, t) {
		e != null && (i && i(e, t), f && f(e, t));
	}, b = function(e) {
		s && s(e);
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
	(0, j.useEffect)(function() {
		if (_.current && d.current) {
			var e = _.current.querySelector("[data-rb-event-key].active");
			e && e.focus();
		}
		d.current = !1;
	});
	var x = ni(t, _);
	return /* @__PURE__ */ j.createElement(ne.Provider, { value: y }, /* @__PURE__ */ j.createElement(Xr.Provider, { value: {
		role: o,
		activeKey: re(a),
		getControlledId: m || $i,
		getControllerId: h || $i
	} }, /* @__PURE__ */ j.createElement(r, g({}, c, {
		onKeyDown: b,
		ref: x,
		role: o
	}))));
}), ta = [
	"active",
	"className",
	"eventKey",
	"onSelect",
	"onClick",
	"as"
], na = { disabled: !1 }, ra = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.active, r = e.className, i = e.eventKey, a = e.onSelect, o = e.onClick, s = e.as, c = l(e, ta), u = re(i, c.href), d = (0, j.useContext)(ne), f = (0, j.useContext)(Xr), p = n;
	if (f) {
		!c.role && f.role === "tablist" && (c.role = "tab");
		var m = f.getControllerId(u), h = f.getControlledId(u);
		c["data-rb-event-key"] = u, c.id = m || c.id, c["aria-controls"] = h || c["aria-controls"], p = n == null && u != null ? f.activeKey === u : n;
	}
	c.role === "tab" && (c.disabled && (c.tabIndex = -1, c["aria-disabled"] = !0), c["aria-selected"] = p);
	var _ = Re(function(e) {
		o && o(e), u != null && (a && a(u, e), d && d(u, e));
	});
	return /* @__PURE__ */ j.createElement(s, g({}, c, {
		ref: t,
		onClick: _,
		className: (0, M.default)(r, p && "active")
	}));
});
ra.defaultProps = na;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/useWaitForDOMRef.js
var ia = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? ie().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function aa(e, t) {
	var n = (0, j.useState)(function() {
		return ia(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = ia(e);
		a && i(a);
	}
	return (0, j.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, j.useEffect)(function() {
		var t = ia(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavItem.js
var oa = [
	"bsPrefix",
	"className",
	"children",
	"as"
], sa = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.as, o = a === void 0 ? "div" : a, s = l(e, oa);
	return n = S(n, "nav-item"), /* @__PURE__ */ j.createElement(o, g({}, s, {
		ref: t,
		className: (0, M.default)(r, n)
	}), i);
});
sa.displayName = "NavItem";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavLink.js
var ca = [
	"bsPrefix",
	"disabled",
	"className",
	"href",
	"eventKey",
	"onSelect",
	"as"
], la = {
	disabled: !1,
	as: s
}, ua = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.disabled, i = e.className, a = e.href, o = e.eventKey, s = e.onSelect, c = e.as, u = l(e, ca);
	return n = S(n, "nav-link"), /* @__PURE__ */ j.createElement(ra, g({}, u, {
		href: a,
		ref: t,
		eventKey: o,
		as: c,
		disabled: r,
		onSelect: s,
		className: (0, M.default)(i, n, r && "disabled")
	}));
});
ua.displayName = "NavLink", ua.defaultProps = la;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Nav.js
var da = [
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
], fa = {
	justify: !1,
	fill: !1
}, pa = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n, r = z(e, { activeKey: "onSelect" }), i = r.as, a = i === void 0 ? "div" : i, o = r.bsPrefix, s = r.variant, c = r.fill, u = r.justify, d = r.navbar, f = r.navbarScroll, p = r.className, m = r.children, h = r.activeKey, _ = l(r, da), v = S(o, "nav"), y, b, x = !1, C = (0, j.useContext)(ri), w = (0, j.useContext)(ot);
	return C ? (y = C.bsPrefix, x = d ?? !0) : w && (b = w.cardHeaderBsPrefix), /* @__PURE__ */ j.createElement(ea, g({
		as: a,
		ref: t,
		activeKey: h,
		className: (0, M.default)(p, (n = {}, n[v] = !x, n[y + "-nav"] = x, n[y + "-nav-scroll"] = x && f, n[b + "-" + s] = !!b, n[v + "-" + s] = !!s, n[v + "-fill"] = c, n[v + "-justified"] = u, n))
	}, _), m);
});
pa.displayName = "Nav", pa.defaultProps = fa, pa.Item = sa, pa.Link = ua;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavDropdown.js
var ma = [
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
], ha = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.id, r = e.title, i = e.children, a = e.bsPrefix, o = e.className, s = e.rootCloseEvent, c = e.menuRole, u = e.disabled, d = e.active, f = e.renderMenuOnMount, p = l(e, ma), m = S(void 0, "nav-item");
	return /* @__PURE__ */ j.createElement(G, g({ ref: t }, p, { className: (0, M.default)(o, m) }), /* @__PURE__ */ j.createElement(G.Toggle, {
		id: n,
		eventKey: null,
		active: d,
		disabled: u,
		childBsPrefix: a,
		as: ua
	}, r), /* @__PURE__ */ j.createElement(G.Menu, {
		role: c,
		renderOnMount: f,
		rootCloseEvent: s
	}, i));
});
ha.displayName = "NavDropdown", ha.Item = G.Item, ha.ItemText = G.ItemText, ha.Divider = G.Divider, ha.Header = G.Header;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var ga = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, c = s === void 0 ? {} : s, u = e.transition, d = Et(), f = d[0], p = d[1], m = Et(), h = m[0], _ = m[1], v = ni(p, t), y = aa(e.container), b = aa(e.target), x = (0, j.useState)(!e.show), S = x[0], C = x[1], w = wr(b, f, Lr({
		placement: i,
		enableEvents: !!e.show,
		containerPadding: o || 5,
		flip: n,
		offset: r,
		arrowElement: h,
		popperConfig: c
	})), T = w.styles, E = w.attributes, D = l(w, ["styles", "attributes"]);
	e.show ? S && C(!1) : !e.transition && !S && C(!0);
	var O = function() {
		C(!0), e.onExited && e.onExited.apply(e, arguments);
	}, k = e.show || u && !S;
	if (Pr(f, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !k) return null;
	var M = e.children(g({}, D, {
		show: !!e.show,
		props: g({}, E.popper, {
			style: T.popper,
			ref: v
		}),
		arrowProps: g({}, E.arrow, {
			style: T.arrow,
			ref: _
		})
	}));
	if (u) {
		var N = e.onExit, P = e.onExiting, F = e.onEnter, I = e.onEntering, L = e.onEntered;
		M = /* @__PURE__ */ j.createElement(u, {
			in: e.show,
			appear: !0,
			onExit: N,
			onExiting: P,
			onExited: O,
			onEnter: F,
			onEntering: I,
			onEntered: L
		}, M);
	}
	return y ? /* @__PURE__ */ A.createPortal(M, y) : null;
});
ga.displayName = "Overlay", ga.propTypes = {
	show: W.default.bool,
	placement: W.default.oneOf(zt),
	target: W.default.any,
	container: W.default.any,
	flip: W.default.bool,
	children: W.default.func.isRequired,
	containerPadding: W.default.number,
	popperConfig: W.default.object,
	rootClose: W.default.bool,
	rootCloseEvent: W.default.oneOf(["click", "mousedown"]),
	rootCloseDisabled: W.default.bool,
	onHide: function(e) {
		var t = [...arguments].slice(1);
		if (e.rootClose) {
			var n;
			return (n = W.default.func).isRequired.apply(n, [e].concat(t));
		}
		return W.default.func.apply(W.default, [e].concat(t));
	},
	transition: W.default.elementType,
	onEnter: W.default.func,
	onEntering: W.default.func,
	onEntered: W.default.func,
	onExit: W.default.func,
	onExiting: W.default.func,
	onExited: W.default.func
};
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var _a = [
	"children",
	"transition",
	"popperConfig"
], va = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], ya = {
	transition: Ue,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function ba(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(Dr(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(Dr(e));
	};
}
function xa(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = l(e, _a), o = (0, j.useRef)({}), s = si(), c = s[0], u = s[1], d = n === !0 ? Ue : n || null;
	return /* @__PURE__ */ j.createElement(ga, g({}, a, {
		ref: c,
		popperConfig: g({}, i, { modifiers: u.concat(i.modifiers || []) }),
		transition: d
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, s = e.update;
		e.forceUpdate;
		var c = e.placement, u = e.state, d = l(e, va);
		ba(r, i);
		var f = Object.assign(o.current, {
			state: u,
			scheduleUpdate: s,
			placement: c,
			outOfBoundaries: u?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(g({}, d, r, {
			placement: c,
			show: a
		}, !n && a && { className: "show" }, {
			popper: f,
			arrowProps: i
		})) : /* @__PURE__ */ j.cloneElement(t, g({}, d, r, {
			placement: c,
			arrowProps: i,
			popper: f,
			className: (0, M.default)(t.props.className, !n && a && "show"),
			style: g({}, t.props.style, r.style)
		}));
	});
}
xa.defaultProps = ya;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var Sa = [
	"trigger",
	"overlay",
	"children",
	"popperConfig",
	"show",
	"defaultShow",
	"onToggle",
	"delay",
	"placement",
	"flip"
], Ca = /* @__PURE__ */ function(e) {
	V(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(j.Component);
function wa(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function Ta(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !Tr(i, a) && e.apply(void 0, t);
}
var Ea = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function Da(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, c = s === void 0 ? !1 : s, u = e.onToggle, d = e.delay, f = e.placement, p = e.flip, m = p === void 0 ? f && f.indexOf("auto") !== -1 : p, h = l(e, Sa), _ = (0, j.useRef)(null), v = ft(), y = (0, j.useRef)(""), b = R(o, c, u), x = b[0], S = b[1], C = wa(d), w = typeof r == "function" ? {} : j.Children.only(r).props, T = w.onFocus, E = w.onBlur, D = w.onClick, O = (0, j.useCallback)(function() {
		return Dr(_.current);
	}, []), k = (0, j.useCallback)(function() {
		if (v.clear(), y.current = "show", !C.show) {
			S(!0);
			return;
		}
		v.set(function() {
			y.current === "show" && S(!0);
		}, C.show);
	}, [
		C.show,
		S,
		v
	]), A = (0, j.useCallback)(function() {
		if (v.clear(), y.current = "hide", !C.hide) {
			S(!1);
			return;
		}
		v.set(function() {
			y.current === "hide" && S(!1);
		}, C.hide);
	}, [
		C.hide,
		S,
		v
	]), M = (0, j.useCallback)(function() {
		k();
		var e = [...arguments];
		T?.apply(void 0, e);
	}, [k, T]), N = (0, j.useCallback)(function() {
		A();
		var e = [...arguments];
		E?.apply(void 0, e);
	}, [A, E]), P = (0, j.useCallback)(function() {
		S(!x), D && D.apply(void 0, arguments);
	}, [
		D,
		S,
		x
	]), F = (0, j.useCallback)(function() {
		Ta(k, [...arguments], "fromElement");
	}, [k]), I = (0, j.useCallback)(function() {
		Ta(A, [...arguments], "toElement");
	}, [A]), L = t == null ? [] : [].concat(t), z = {};
	return L.indexOf("click") !== -1 && (z.onClick = P), L.indexOf("focus") !== -1 && (z.onFocus = M, z.onBlur = N), L.indexOf("hover") !== -1 && (z.onMouseOver = F, z.onMouseOut = I), /* @__PURE__ */ j.createElement(j.Fragment, null, typeof r == "function" ? r(g({}, z, { ref: _ })) : /* @__PURE__ */ j.createElement(Ca, { ref: _ }, /* @__PURE__ */ (0, j.cloneElement)(r, z)), /* @__PURE__ */ j.createElement(xa, g({}, h, {
		show: x,
		onHide: A,
		flip: m,
		placement: f,
		popperConfig: a,
		target: O
	}), n));
}
Da.defaultProps = Ea;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ProgressBar.js
var Oa = [
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
], ka = ["isChild"], Aa = [
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
], ja = 1e3, Ma = {
	min: 0,
	max: 100,
	animated: !1,
	isChild: !1,
	srOnly: !1,
	striped: !1
};
function Na(e, t, n) {
	var r = (e - t) / (n - t) * 100;
	return Math.round(r * ja) / ja;
}
function Pa(e, t) {
	var n, r = e.min, i = e.now, a = e.max, o = e.label, s = e.srOnly, c = e.striped, u = e.animated, d = e.className, f = e.style, p = e.variant, m = e.bsPrefix, h = l(e, Oa);
	return /* @__PURE__ */ j.createElement("div", g({ ref: t }, h, {
		role: "progressbar",
		className: (0, M.default)(d, m + "-bar", (n = {}, n["bg-" + p] = p, n[m + "-bar-animated"] = u, n[m + "-bar-striped"] = u || c, n)),
		style: g({ width: Na(i, r, a) + "%" }, f),
		"aria-valuenow": i,
		"aria-valuemin": r,
		"aria-valuemax": a
	}), s ? /* @__PURE__ */ j.createElement("span", { className: "sr-only" }, o) : o);
}
var Fa = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.isChild, r = l(e, ka);
	if (r.bsPrefix = S(r.bsPrefix, "progress"), n) return Pa(r, t);
	var i = r.min, a = r.now, o = r.max, s = r.label, c = r.srOnly, u = r.striped, d = r.animated, f = r.bsPrefix, p = r.variant, m = r.className, h = r.children, _ = l(r, Aa);
	return /* @__PURE__ */ j.createElement("div", g({ ref: t }, _, { className: (0, M.default)(m, f) }), h ? pt(h, function(e) {
		return /* @__PURE__ */ (0, j.cloneElement)(e, { isChild: !0 });
	}) : Pa({
		min: i,
		now: a,
		max: o,
		label: s,
		srOnly: c,
		striped: u,
		animated: d,
		bsPrefix: f,
		variant: p
	}, t));
});
Fa.displayName = "ProgressBar", Fa.defaultProps = Ma;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var Ia = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], La = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, c = s === void 0 ? "div" : s, u = e.className, d = l(e, Ia);
	n = S(n, "spinner");
	var f = n + "-" + i;
	return /* @__PURE__ */ j.createElement(c, g({ ref: t }, d, { className: (0, M.default)(u, f, a && f + "-" + a, r && "text-" + r) }), o);
});
La.displayName = "Spinner";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContainer.js
var Ra = function(e) {
	var t = z(e, { activeKey: "onSelect" }), n = t.id, r = t.generateChildId, i = t.onSelect, a = t.activeKey, o = t.transition, s = t.mountOnEnter, c = t.unmountOnExit, l = t.children, u = (0, j.useMemo)(function() {
		return r || function(e, t) {
			return n ? n + "-" + t + "-" + e : null;
		};
	}, [n, r]), d = (0, j.useMemo)(function() {
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
	return /* @__PURE__ */ j.createElement(Zi.Provider, { value: d }, /* @__PURE__ */ j.createElement(ne.Provider, { value: i || null }, l));
}, za = [
	"bsPrefix",
	"as",
	"className"
], Ba = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.as, i = r === void 0 ? "div" : r, a = e.className, o = l(e, za), s = S(n, "tab-content");
	return /* @__PURE__ */ j.createElement(i, g({ ref: t }, o, { className: (0, M.default)(a, s) }));
}), Va = [
	"activeKey",
	"getControlledId",
	"getControllerId"
], Ha = [
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
function Ua(e) {
	var t = (0, j.useContext)(Zi);
	if (!t) return e;
	var n = t.activeKey, r = t.getControlledId, i = t.getControllerId, a = l(t, Va), o = e.transition !== !1 && a.transition !== !1, s = re(e.eventKey);
	return g({}, e, {
		active: e.active == null && s != null ? re(n) === s : e.active,
		id: r(e.eventKey),
		"aria-labelledby": i(e.eventKey),
		transition: o && (e.transition || a.transition || Ue),
		mountOnEnter: e.mountOnEnter == null ? a.mountOnEnter : e.mountOnEnter,
		unmountOnExit: e.unmountOnExit == null ? a.unmountOnExit : e.unmountOnExit
	});
}
var Wa = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = Ua(e), r = n.bsPrefix, i = n.className, a = n.active, o = n.onEnter, s = n.onEntering, c = n.onEntered, u = n.onExit, d = n.onExiting, f = n.onExited, p = n.mountOnEnter, m = n.unmountOnExit, h = n.transition, _ = n.as, v = _ === void 0 ? "div" : _;
	n.eventKey;
	var y = l(n, Ha), b = S(r, "tab-pane");
	if (!a && !h && m) return null;
	var x = /* @__PURE__ */ j.createElement(v, g({}, y, {
		ref: t,
		role: "tabpanel",
		"aria-hidden": !a,
		className: (0, M.default)(i, b, { active: a })
	}));
	return h && (x = /* @__PURE__ */ j.createElement(h, {
		in: a,
		onEnter: o,
		onEntering: s,
		onEntered: c,
		onExit: u,
		onExiting: d,
		onExited: f,
		mountOnEnter: p,
		unmountOnExit: m
	}, x)), /* @__PURE__ */ j.createElement(Zi.Provider, { value: null }, /* @__PURE__ */ j.createElement(ne.Provider, { value: null }, x));
});
Wa.displayName = "TabPane";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Tooltip.js
var Ga = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], Ka = { placement: "right" }, qa = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
	e.popper, e.show;
	var c = l(e, Ga);
	n = S(n, "tooltip");
	var u = (r?.split("-") || [])[0];
	return /* @__PURE__ */ j.createElement("div", g({
		ref: t,
		style: a,
		role: "tooltip",
		"x-placement": u,
		className: (0, M.default)(i, n, "bs-tooltip-" + u)
	}, c), /* @__PURE__ */ j.createElement("div", g({ className: "arrow" }, s)), /* @__PURE__ */ j.createElement("div", { className: n + "-inner" }, o));
});
qa.defaultProps = Ka, qa.displayName = "Tooltip";
//#endregion
//#region node_modules/.pnpm/css-mediaquery@0.1.2/node_modules/css-mediaquery/index.js
var Ja = /* @__PURE__ */ r(((e) => {
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
})), Ya = /* @__PURE__ */ h((/* @__PURE__ */ r(((e, t) => {
	var n = Ja().match, r = typeof window < "u" ? window.matchMedia : null;
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
})))()), Xa = /[A-Z]/g, Za = /^ms-/, Qa = {};
function $a(e) {
	return "-" + e.toLowerCase();
}
function eo(e) {
	if (Qa.hasOwnProperty(e)) return Qa[e];
	var t = e.replace(Xa, $a);
	return Qa[e] = Za.test(t) ? "-" + t : t;
}
//#endregion
//#region node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
function to(e, t) {
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
var no = W.default.oneOfType([W.default.string, W.default.number]), ro = {
	all: W.default.bool,
	grid: W.default.bool,
	aural: W.default.bool,
	braille: W.default.bool,
	handheld: W.default.bool,
	print: W.default.bool,
	projection: W.default.bool,
	screen: W.default.bool,
	tty: W.default.bool,
	tv: W.default.bool,
	embossed: W.default.bool
}, io = {
	orientation: W.default.oneOf(["portrait", "landscape"]),
	scan: W.default.oneOf(["progressive", "interlace"]),
	aspectRatio: W.default.string,
	deviceAspectRatio: W.default.string,
	height: no,
	deviceHeight: no,
	width: no,
	deviceWidth: no,
	color: W.default.bool,
	colorIndex: W.default.bool,
	monochrome: W.default.bool,
	resolution: no,
	type: Object.keys(ro)
}, { type: ao, ...oo } = io, so = {
	minAspectRatio: W.default.string,
	maxAspectRatio: W.default.string,
	minDeviceAspectRatio: W.default.string,
	maxDeviceAspectRatio: W.default.string,
	minHeight: no,
	maxHeight: no,
	minDeviceHeight: no,
	maxDeviceHeight: no,
	minWidth: no,
	maxWidth: no,
	minDeviceWidth: no,
	maxDeviceWidth: no,
	minColor: W.default.number,
	maxColor: W.default.number,
	minColorIndex: W.default.number,
	maxColorIndex: W.default.number,
	minMonochrome: W.default.number,
	maxMonochrome: W.default.number,
	minResolution: no,
	maxResolution: no,
	...oo
}, co = {
	all: {
		...ro,
		...so
	},
	types: ro,
	matchers: io,
	features: so
}, lo = (e) => `not ${e}`, uo = (e, t) => {
	let n = eo(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? lo(n) : `(${n}: ${t})`;
}, fo = (e) => e.join(" and "), po = (e) => {
	let t = [];
	return Object.keys(co.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(uo(n, r));
	}), fo(t);
}, mo = (0, j.createContext)(void 0), ho = (e) => e.query || po(e), go = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[eo(n)] = e[n], t), {});
}, _o = () => {
	let e = (0, j.useRef)(!1);
	return (0, j.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, vo = (e) => {
	let t = (0, j.useContext)(mo), n = () => go(e) || go(t), [r, i] = (0, j.useState)(n);
	return (0, j.useEffect)(() => {
		let e = n();
		to(r, e) || i(e);
	}, [e, t]), r;
}, yo = (e) => {
	let t = () => ho(e), [n, r] = (0, j.useState)(t);
	return (0, j.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, bo = (e, t) => {
	let n = () => (0, Ya.default)(e, t || {}, !!t), [r, i] = (0, j.useState)(n), a = _o();
	return (0, j.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, xo = (e) => {
	let [t, n] = (0, j.useState)(e.matches);
	return (0, j.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, So = (e, t, n) => {
	let r = vo(t), i = yo(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = bo(i, r), o = xo(a), s = _o();
	return (0, j.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, j.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, { sm: Co, md: wo, lg: To, xl: Eo, xxl: Do } = {
	xs: "0",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px"
}, Oo = {
	extraSmall: { maxWidth: parseFloat(Co) || 575.98 },
	small: {
		minWidth: parseFloat(Co) || 576,
		maxWidth: parseFloat(wo) || 767.98
	},
	medium: {
		minWidth: parseFloat(wo) || 768,
		maxWidth: parseFloat(To) || 991.98
	},
	large: {
		minWidth: parseFloat(To) || 992,
		maxWidth: parseFloat(Eo) || 1199.98
	},
	extraLarge: {
		minWidth: parseFloat(Eo) || 1200,
		maxWidth: parseFloat(Do) || 1399.98
	},
	extraExtraLarge: { minWidth: parseFloat(Do) || 1400 }
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
var ko = /* @__PURE__ */ (0, j.forwardRef)(({ children: e, icon: t, actions: n, dismissible: r = !1, onClose: i = () => {}, closeLabel: a, stacked: s = !1, show: c = !0, ...l }, u) => {
	let [d, f] = (0, j.useState)(s), p = So({ maxWidth: Oo.extraSmall.maxWidth });
	(0, j.useEffect)(() => {
		f(p ? !0 : s);
	}, [p, s]);
	let m = (0, j.useCallback)((e) => /* @__PURE__ */ (0, j.cloneElement)(e, {
		size: "sm",
		key: e.props.children
	}), []);
	return /* @__PURE__ */ j.createElement(at, {
		...l,
		className: (0, M.default)("alert-content", l.className),
		show: c,
		ref: u
	}, t && /* @__PURE__ */ j.createElement(v, {
		src: t,
		className: "alert-icon"
	}), /* @__PURE__ */ j.createElement("div", { className: (0, M.default)({
		"pgn__alert-message-wrapper": !d,
		"pgn__alert-message-wrapper-stacked": d
	}) }, /* @__PURE__ */ j.createElement("div", { className: "alert-message-content" }, e), (r || n && n.length > 0) && /* @__PURE__ */ j.createElement(N, { className: "pgn__alert-actions" }, /* @__PURE__ */ j.createElement(N.Spacer, null), r && /* @__PURE__ */ j.createElement(C, {
		size: "sm",
		variant: "tertiary",
		onClick: i
	}, a || /* @__PURE__ */ j.createElement(o, {
		id: "pgn.Alert.closeLabel",
		defaultMessage: "Dismiss",
		description: "Label of a close button on Alert component"
	})), n && n.map(m))));
}), Ao = Je("h4");
Ao.displayName = "DivStyledAsH4";
function jo({ as: e = Ao, bsPrefix: t = "alert-heading", ...n }) {
	return /* @__PURE__ */ j.createElement(at.Heading, {
		as: e,
		bsPrefix: t,
		...n
	});
}
function Mo({ as: e = "a", bsPrefix: t = "alert-link", ...n }) {
	return /* @__PURE__ */ j.createElement(at.Link, {
		as: e,
		bsPrefix: t,
		...n
	});
}
ko.Heading = jo, ko.Link = Mo;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Annotation/index.js
var No = /* @__PURE__ */ j.forwardRef(({ className: e, variant: t = "success", children: n, arrowPlacement: r = "bottom", ...i }, a) => /* @__PURE__ */ j.createElement("span", {
	className: (0, M.default)(e, "pgn__annotation", `pgn__annotation-${t}-${r}`),
	ref: a,
	...i
}, n)), Po = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), Fo = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), Io = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), Lo = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), Ro = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), zo = (e) => /* @__PURE__ */ j.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",
	fill: "currentColor"
})), Bo = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06ZM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z",
	fill: "currentColor"
})), Vo = (e) => /* @__PURE__ */ j.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z",
	fill: "currentColor"
})), Ho = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
	fill: "currentColor"
})), Uo = (e) => /* @__PURE__ */ j.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), Wo = (e) => /* @__PURE__ */ j.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), Go = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), Ko = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
})), qo = [
	"auto-start",
	"auto",
	"auto-end",
	"top-start",
	"top",
	"top-end",
	"right-start",
	"right",
	"right-end",
	"bottom-end",
	"bottom",
	"bottom-start",
	"left-end",
	"left",
	"left-start"
], Jo = [
	"hover",
	"click",
	"focus"
];
function Yo(e) {
	return /* @__PURE__ */ j.createElement(xa, { ...e });
}
function Xo(e) {
	return /* @__PURE__ */ j.createElement(Da, { ...e }, e.children);
}
var Zo = W.default.oneOf(Jo);
Yo.propTypes = {
	children: W.default.node.isRequired,
	container: W.default.oneOfType([W.default.elementType, W.default.func]),
	onEnter: W.default.func,
	onEntered: W.default.func,
	onEntering: W.default.func,
	onExit: W.default.func,
	onExited: W.default.func,
	onExiting: W.default.func,
	onHide: W.default.func,
	placement: W.default.oneOf(qo),
	popperConfig: W.default.shape({}),
	rootClose: W.default.bool,
	rootCloseEvent: W.default.oneOf(["click", "mousedown"]),
	show: W.default.bool,
	target: W.default.oneOfType([W.default.elementType, W.default.func]),
	transition: W.default.oneOfType([W.default.object, W.default.bool])
}, Xo.propTypes = {
	children: W.default.oneOfType([W.default.element, W.default.func]).isRequired,
	overlay: W.default.oneOfType([W.default.element, W.default.func]).isRequired,
	defaultShow: W.default.bool,
	delay: W.default.oneOfType([W.default.number, W.default.shape({})]),
	flip: W.default.bool,
	onHide: W.default.func,
	onToggle: W.default.func,
	placement: W.default.oneOf(qo),
	popperConfig: W.default.shape({}),
	show: W.default.bool,
	target: W.default.instanceOf(EventTarget),
	trigger: W.default.oneOfType([Zo, W.default.arrayOf(Zo)])
}, Yo.defaultProps = {
	container: void 0,
	onEnter: void 0,
	onEntered: void 0,
	onEntering: void 0,
	onExit: void 0,
	onExited: void 0,
	onExiting: void 0,
	onHide: void 0,
	placement: "top",
	popperConfig: {},
	rootClose: !1,
	rootCloseEvent: void 0,
	show: !1,
	target: void 0,
	transition: Ue
}, Xo.defaultProps = {
	defaultShow: !1,
	delay: void 0,
	flip: void 0,
	onHide: void 0,
	onToggle: void 0,
	placement: void 0,
	popperConfig: {},
	show: void 0,
	target: void 0,
	trigger: ["hover", "focus"]
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Tooltip/index.js
var Qo = [
	"auto-start",
	"auto",
	"auto-end",
	"top-start",
	"top",
	"top-end",
	"right-start",
	"right",
	"right-end",
	"bottom-end",
	"bottom",
	"bottom-start",
	"left-end",
	"left",
	"left-start"
], $o = /* @__PURE__ */ j.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ j.createElement(qa, {
	...n,
	className: (0, M.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
$o.propTypes = {
	...qa.propTypes,
	id: W.default.string.isRequired,
	placement: W.default.oneOf(Qo),
	arrowProps: W.default.shape({
		ref: W.default.oneOfType([W.default.func, W.default.shape({ current: W.default.element })]),
		style: W.default.shape({})
	}),
	show: W.default.bool,
	popper: W.default.shape({}),
	bsPrefix: W.default.string,
	children: W.default.node,
	className: W.default.string,
	variant: W.default.string
}, $o.defaultProps = {
	...$o.defaultProps,
	id: void 0,
	placement: "right",
	arrowProps: void 0,
	show: void 0,
	popper: void 0,
	children: void 0,
	className: void 0,
	variant: void 0,
	bsPrefix: "tooltip"
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/IconButton/index.js
var es = /* @__PURE__ */ j.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = v, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /* @__PURE__ */ j.createElement("button", {
		"aria-label": t,
		className: (0, M.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /* @__PURE__ */ j.createElement("span", { className: "btn-icon__icon-container" }, g && /* @__PURE__ */ j.createElement(g, {
		className: (0, M.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function ts({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ j.createElement(Xo, {
		placement: e,
		overlay: /* @__PURE__ */ j.createElement($o, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ j.createElement(es, { ...n }));
}
es.IconButtonWithTooltip = ts;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function ns(e) {
	return typeof e == "string" || e instanceof String;
}
function rs(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function is(e, t) {
	return Array.isArray(t) ? is(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var K = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function as(e) {
	switch (e) {
		case K.LEFT: return K.FORCE_LEFT;
		case K.RIGHT: return K.FORCE_RIGHT;
		default: return e;
	}
}
function os(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function ss(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!ss(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!ss(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var cs = class {
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
		return !this.removedCount || this.insertedCount ? K.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? K.RIGHT : K.LEFT;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function q(e, t) {
	return new q.InputMask(e, t);
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function ls(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? q.MaskedRegExp : ns(e) ? q.MaskedPattern : e === Date ? q.MaskedDate : e === Number ? q.MaskedNumber : Array.isArray(e) || e === Array ? q.MaskedDynamic : q.Masked && e.prototype instanceof q.Masked ? e : q.Masked && e instanceof q.Masked ? e.constructor : e instanceof Function ? q.MaskedFunction : (console.warn("Mask not found for mask", e), q.Masked);
}
function us(e) {
	if (!e) throw Error("Options in not defined");
	if (q.Masked) {
		if (e.prototype instanceof q.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof q.Masked ? { mask: e } : rs(e) && e.mask instanceof q.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...is(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return rs(e) ? { ...e } : { mask: e };
}
function ds(e) {
	if (q.Masked && e instanceof q.Masked) return e;
	let t = us(e), n = ls(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
q.createMask = ds;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var fs = class {
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
q.MaskElement = fs;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var ps = 90, ms = 89, hs = class extends fs {
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
		if (this._handlers.redo && (e.keyCode === ps && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === ms && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === ps && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
q.HTMLMaskElement = hs;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var gs = class extends hs {
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
q.HTMLMaskElement = hs;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var _s = class extends hs {
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
q.HTMLContenteditableMaskElement = _s;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var vs = class e {
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
vs.MAX_LENGTH = 100, q.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof fs ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new _s(e) : new gs(e), this.masked = ds(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new vs(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof q.Masked) && this.masked.constructor === ls(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof q.Masked ? e : ds({ mask: e });
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
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, K.LEFT));
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
		let t = new cs({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : K.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== K.NONE && (a = this.masked.nearestInputPos(a, K.NONE)), this.updateControl(a), delete this._inputEvent;
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
var J = class e {
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
q.ChangeDetails = J;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var ys = class {
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
}, bs = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new ys(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return ns(e) && (e = new ys(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new J({
			inserted: e,
			rawInserted: e
		})) : new J();
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
			a || (i = new J(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new J();
	}
	_appendEager() {
		return new J();
	}
	append(e, t, n) {
		if (!ns(e)) throw Error("value should be string");
		let r = ns(n) ? new ys(String(n)) : n;
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new J();
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
		return t === void 0 && (t = {}), J.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), J.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = K.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = as(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new J();
		if (r !== K.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? K.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== K.NONE && c === this.rawInputValue) if (r === K.FORCE_LEFT) {
			let e;
			for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new J({ tailShift: -1 })).aggregate(this.remove(e - 1));
		} else r === K.FORCE_RIGHT && o.unshift();
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !ss(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new J();
	}
};
bs.DEFAULTS = { skipInvalid: !0 }, bs.EMPTY_VALUES = [
	void 0,
	null,
	""
], q.Masked = bs;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var xs = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = ns(t) ? new ys(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof ys) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof q.MaskedPattern)) return new ys(this.toString()).appendTo(t);
		let n = new J();
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
			let n = "chunks" in t ? new e() : new ys();
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
}, Ss = class {
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
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, K.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, K.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, K.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, K.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, K.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, K.NONE), !0;
		});
	}
}, Cs = class {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new J();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = K.NONE);
		let n = this._value.length;
		switch (t) {
			case K.LEFT:
			case K.FORCE_LEFT: return 0;
			case K.NONE:
			case K.RIGHT:
			case K.FORCE_RIGHT:
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
		if (t === void 0 && (t = {}), this.isFilled) return new J();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new J({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new J();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new ys("");
	}
	appendTail(e) {
		return ns(e) && (e = new ys(String(e))), e.appendTo(this);
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
}, ws = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = ds(s), Object.assign(this, {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new J();
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
		if (t === void 0 && (t = {}), this.isFilled) return new J();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new J(), this.masked.state = n), !r.inserted && !this.isOptional && !this.lazy && !t.input && (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new J() : (this.isFilled = !0, new J({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new J();
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
		t === void 0 && (t = K.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case K.LEFT:
			case K.FORCE_LEFT: return this.isComplete ? r : 0;
			case K.RIGHT:
			case K.FORCE_RIGHT: return this.isComplete ? r : n;
			case K.NONE:
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
		return new J();
	}
};
ws.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, q.MaskedRegExp = class extends bs {
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
var Ts = class e extends bs {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, ws.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = us(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? ds(i) : new q.RepeatBlock(i);
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
			let c = s ? new ws({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...us(t[o]),
				parent: this
			}) : new Cs({
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
		let e = new J(), t = this._mapPosToBlock(this.displayValue.length)?.index;
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
		let n = this._mapPosToBlock(this.displayValue.length), r = new J();
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
		let n = new xs();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof xs && (a.blockIndex = t), n.extend(a);
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
		let t = new J();
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
		if (t === void 0 && (t = K.NONE), !this._blocks.length) return 0;
		let n = new Ss(this, e);
		if (t === K.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === K.LEFT || t === K.FORCE_LEFT) {
			if (t === K.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === K.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === K.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === K.RIGHT || t === K.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === K.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, K.LEFT))) : e;
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
		let t = new J();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
Ts.DEFAULTS = {
	...bs.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, Ts.STOP_CHAR = "`", Ts.ESCAPE_CHAR = "\\", Ts.InputDefinition = ws, Ts.FixedDefinition = Cs, q.MaskedPattern = Ts;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var Es = class extends Ts {
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
		let t = new J();
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
q.MaskedRange = Es;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var Ds = "d{.}`m{.}`Y", Os = class e extends Ts {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: ns(t) ? t : n
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
			mask: ns(n) ? n : r,
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
Os.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: Es,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: Es,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: Es,
		from: 1900,
		to: 9999
	}
}), Os.DEFAULTS = {
	...Ts.DEFAULTS,
	mask: Date,
	pattern: Ds,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, q.MaskedDate = Os;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var ks = class e extends bs {
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
			let { expose: t, ...n } = us(e), r = ds({
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
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new J(), l = s?.state;
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
		let t = new J();
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
		let n = new J();
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
			return ss(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
ks.DEFAULTS = {
	...bs.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, K.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, K.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, q.MaskedDynamic = ks;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var As = class e extends Ts {
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
		let n = Math.min(this.nearestInputPos(0, K.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new J({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new ys("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new J();
		let n = Math.min(super.nearestInputPos(0, K.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
As.DEFAULTS = {
	...Ts.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, q.MaskedEnum = As, q.MaskedFunction = class extends bs {
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
var js, Ms = class e extends bs {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + os(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(os).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(os(this.thousandsSeparator), "g");
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
		s ? l = new J({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new J()), this._value = this._insertThousandsSeparators(this._value);
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
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new J({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case K.NONE:
			case K.LEFT:
			case K.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === K.FORCE_LEFT) return n;
				}
				break;
			}
			case K.RIGHT:
			case K.FORCE_RIGHT: {
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
js = Ms, Ms.UNMASKED_RADIX = ".", Ms.EMPTY_VALUES = [...bs.EMPTY_VALUES, 0], Ms.DEFAULTS = {
	...bs.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [js.UNMASKED_RADIX],
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
}, q.MaskedNumber = Ms;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var Ns = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function Ps(e, t, n) {
	t === void 0 && (t = Ns.MASKED), n === void 0 && (n = Ns.MASKED);
	let r = ds(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function Fs(e, t, n, r) {
	return Ps(t, n, r)(e);
}
q.PIPE_TYPE = Ns, q.createPipe = Ps, q.pipe = Fs, q.RepeatBlock = class extends Ts {
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
		let { repeat: t, ...n } = us(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = ds(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(ds(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new J();
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
	globalThis.IMask = q;
} catch {}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var Is = {
	mask: W.default.oneOfType([
		W.default.array,
		W.default.func,
		W.default.string,
		W.default.instanceOf(RegExp),
		W.default.oneOf([
			Date,
			Number,
			q.Masked
		]),
		W.default.instanceOf(q.Masked)
	]),
	value: W.default.any,
	unmask: W.default.oneOfType([W.default.bool, W.default.oneOf(["typed"])]),
	prepare: W.default.func,
	prepareChar: W.default.func,
	validate: W.default.func,
	commit: W.default.func,
	overwrite: W.default.oneOfType([W.default.bool, W.default.oneOf(["shift"])]),
	eager: W.default.oneOfType([W.default.bool, W.default.oneOf(["append", "remove"])]),
	skipInvalid: W.default.bool,
	onAccept: W.default.func,
	onComplete: W.default.func,
	placeholderChar: W.default.string,
	displayChar: W.default.string,
	lazy: W.default.bool,
	definitions: W.default.object,
	blocks: W.default.object,
	enum: W.default.arrayOf(W.default.string),
	maxLength: W.default.number,
	from: W.default.number,
	to: W.default.number,
	pattern: W.default.string,
	format: W.default.func,
	parse: W.default.func,
	autofix: W.default.oneOfType([W.default.bool, W.default.oneOf(["pad"])]),
	radix: W.default.string,
	thousandsSeparator: W.default.string,
	mapToRadix: W.default.arrayOf(W.default.string),
	scale: W.default.number,
	normalizeZeros: W.default.bool,
	padFractionalZeros: W.default.bool,
	min: W.default.oneOfType([W.default.number, W.default.instanceOf(Date)]),
	max: W.default.oneOfType([W.default.number, W.default.instanceOf(Date)]),
	dispatch: W.default.func,
	inputRef: W.default.oneOfType([W.default.func, W.default.shape({ current: W.default.object })])
}, Ls = Object.keys(Is).filter((e) => e !== "value"), Rs = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], zs = Ls.filter((e) => Rs.indexOf(e) < 0);
function Bs(e) {
	var t;
	let n = (t = class extends j.Component {
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
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = q(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => zs.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return Ls.forEach((e) => {
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
			return j.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = Is, j.forwardRef((e, t) => j.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var Vs = Bs((e) => {
	let { inputRef: t, ...n } = e;
	return j.createElement("input", {
		...n,
		ref: t
	});
}), Hs = j.forwardRef((e, t) => j.createElement(Vs, {
	...e,
	ref: t
})), Us = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Ws = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, Gs = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, j.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Ks = (e, t) => {
	let [n, r] = (0, j.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(x(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, j.useState)(e);
		return (0, j.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, qs = (e) => e, Js = /* @__PURE__ */ j.createContext({
	getControlProps: qs,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: qs,
	getDescriptorProps: qs,
	hasFormGroupProvider: !1
}), Ys = () => j.useContext(Js);
function Xs(e) {
	let [t, n] = (0, j.useState)(e);
	return [t, (e) => {
		(0, j.useEffect)(() => n(e), [e]);
	}];
}
function Zs({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, j.useMemo)(() => t || x("form-field"), [t]), [o, s] = Ks(a), [c, l] = Ks(a), [u, d] = Xs(!1), f = {
		getControlProps: (0, j.useCallback)((e) => {
			let t = u ? c : void 0;
			return Us({
				...e,
				"aria-describedby": (0, M.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, M.default)(e["aria-labelledby"], t) || void 0,
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
	return /* @__PURE__ */ j.createElement(Js.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var Qs = {
	SMALL: "sm",
	LARGE: "lg"
}, $s = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, ec = {
	[$s.DEFAULT]: null,
	[$s.VALID]: Io,
	[$s.INVALID]: Ro,
	[$s.WARNING]: Ko,
	[$s.CRITERIA_EMPTY]: Go,
	[$s.CRITERIA_VALID]: Lo,
	[$s.CRITERIA_INVALID]: Fo
}, tc = ({ isInvalid: e, isValid: t }) => t ? $s.VALID : e ? $s.INVALID : $s.DEFAULT;
function nc({ type: e, customIcon: t }) {
	if (t) return t;
	let n = ec[e];
	return n ? /* @__PURE__ */ j.createElement(v, { src: n }) : null;
}
nc.propTypes = {
	type: W.default.oneOf(Object.values($s)),
	customIcon: W.default.node
}, nc.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function rc({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, M.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ j.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ j.createElement(nc, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ j.createElement("div", null, e));
}
rc.propTypes = {
	children: W.default.node.isRequired,
	className: W.default.string,
	hasIcon: W.default.bool,
	type: W.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: W.default.node,
	muted: W.default.bool
}, rc.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function ic({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = Ys(), a = n(t), o = (0, M.default)("pgn__form-control-description", t.className), s = t.type || tc({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ j.createElement(rc, {
		...a,
		className: o,
		type: s
	}, e);
}
ic.propTypes = {
	children: W.default.node.isRequired,
	className: W.default.string,
	hasIcon: W.default.bool,
	type: W.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: W.default.node,
	muted: W.default.bool
}, ic.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function ac({ children: e }) {
	let { controlId: t } = Ys();
	return /* @__PURE__ */ j.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ j.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ j.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
ac.propTypes = { children: W.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function oc({ children: e, location: t }) {
	return /* @__PURE__ */ j.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
oc.propTypes = {
	children: W.default.node.isRequired,
	location: W.default.oneOf(["leading", "trailing"])
}, oc.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function sc({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = Ys(a), s = a.size || o.size;
	return /* @__PURE__ */ j.createElement("div", {
		className: (0, M.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Qs.LARGE,
			"pgn__form-control-decorator-group-sm": s === Qs.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ j.createElement(oc, { location: "leading" }, t), n && /* @__PURE__ */ j.createElement(oc, { location: "trailing" }, n), r && /* @__PURE__ */ j.createElement(ac, null, r));
}
sc.propTypes = {
	children: W.default.node.isRequired,
	leadingElement: W.default.node,
	trailingElement: W.default.node,
	floatingLabel: W.default.node,
	className: W.default.string,
	size: W.default.oneOf([Qs.SMALL, Qs.LARGE])
}, sc.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var cc = /* @__PURE__ */ j.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = Ys(), h = j.useRef(), g = u || h, _ = l.size || m.size, [v, y] = Gs({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, j.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, j.useEffect)(() => {
		b();
	}, [b]);
	let x = p({
		...l,
		onBlur: Ws(y, l.onBlur)
	}), S = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ j.createElement(sc, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ j.createElement(Ri, {
		as: c ? Hs : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, M.default)(n, { "has-value": v }),
		onChange: S,
		mask: c,
		...x
	}));
});
cc.Feedback = ic, cc.Description = ic, cc.propTypes = {
	className: W.default.string,
	as: W.default.elementType,
	onChange: W.default.func,
	defaultValue: W.default.oneOfType([W.default.string, W.default.number]),
	value: W.default.oneOfType([W.default.string, W.default.number]),
	id: W.default.string,
	controlClassName: W.default.string,
	size: W.default.oneOf(["sm", "lg"]),
	leadingElement: W.default.node,
	trailingElement: W.default.node,
	floatingLabel: W.default.node,
	plaintext: W.default.bool,
	isValid: W.default.bool,
	isInvalid: W.default.bool,
	autoResize: W.default.bool,
	inputMask: W.default.string
}, cc.defaultProps = {
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
function lc({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = Ys(), o = (0, M.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Qs.LARGE,
		"pgn__form-label-sm": r === Qs.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ j.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function uc({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ j.createElement(a ?? "div", {
		...o,
		className: (0, M.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ j.createElement(Zs, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var dc = /* @__PURE__ */ j.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), fc = () => (0, j.useContext)(dc);
function pc({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Ws(n, e.onBlur) : n,
			onFocus: e.onFocus ? Ws(r, e.onFocus) : r,
			onChange: e.onChange ? Ws(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ j.createElement(dc.Provider, { value: c }, e);
}
pc.propTypes = {
	children: W.default.node.isRequired,
	name: W.default.string.isRequired,
	onBlur: W.default.func,
	onFocus: W.default.func,
	onChange: W.default.func,
	value: W.default.string,
	defaultValue: W.default.string
}, pc.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var mc = /* @__PURE__ */ j.forwardRef((e, t) => {
	let { getControlProps: n } = Ys(), { getRadioControlProps: r, hasRadioSetProvider: i } = fc(), a = n({
		...e,
		className: (0, M.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ j.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
mc.propTypes = { className: W.default.string }, mc.defaultProps = { className: void 0 };
var hc = /* @__PURE__ */ j.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ j.createElement(Zs, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ j.createElement("div", { className: (0, M.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ j.createElement(mc, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ j.createElement("div", null, /* @__PURE__ */ j.createElement(lc, { className: r }, e), i && /* @__PURE__ */ j.createElement(ic, { hasIcon: !1 }, i)))));
hc.propTypes = {
	id: W.default.string,
	children: W.default.node.isRequired,
	className: W.default.string,
	controlClassName: W.default.string,
	labelClassName: W.default.string,
	description: W.default.node,
	isInvalid: W.default.bool,
	isValid: W.default.bool,
	disabled: W.default.bool
}, hc.defaultProps = {
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
function gc({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ j.createElement(e, {
		className: (0, M.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
gc.propTypes = {
	as: W.default.elementType,
	className: W.default.string,
	isInline: W.default.bool,
	children: W.default.node
}, gc.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function _c({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Ys();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ j.createElement(pc, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ j.createElement(gc, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
_c.propTypes = {
	children: W.default.node.isRequired,
	className: W.default.string,
	name: W.default.string.isRequired,
	value: W.default.string,
	defaultValue: W.default.string,
	isInline: W.default.bool,
	onChange: W.default.func,
	onFocus: W.default.func,
	onBlur: W.default.func
}, _c.defaultProps = {
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
var vc, yc = new Uint8Array(16);
function bc() {
	if (!vc && (vc = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !vc)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return vc(yc);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var Y = [];
for (let e = 0; e < 256; ++e) Y.push((e + 256).toString(16).slice(1));
function xc(e, t = 0) {
	return Y[e[t + 0]] + Y[e[t + 1]] + Y[e[t + 2]] + Y[e[t + 3]] + "-" + Y[e[t + 4]] + Y[e[t + 5]] + "-" + Y[e[t + 6]] + Y[e[t + 7]] + "-" + Y[e[t + 8]] + Y[e[t + 9]] + "-" + Y[e[t + 10]] + Y[e[t + 11]] + Y[e[t + 12]] + Y[e[t + 13]] + Y[e[t + 14]] + Y[e[t + 15]];
}
var Sc = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function Cc(e, t, n) {
	if (Sc.randomUUID && !t && !e) return Sc.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || bc)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return xc(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var wc = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), Tc = (e, t) => t.every((t) => e[t] !== void 0), Ec = (e, t) => wc(e, (e) => Array.isArray(t) ? Tc(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), Dc = /* @__PURE__ */ j.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, M.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ j.createElement(La, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ j.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function Oc({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function kc({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function Ac({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && Oc({
		event: e,
		currentIndex: s,
		activeElement: a
	}), kc({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function jc(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, j.useRef)();
	return (0, j.useEffect)(() => {
		let e = (e) => {
			Ac({
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
var Mc = f({
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
}), Nc = /* @__PURE__ */ (0, j.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: u, customErrorMessageText: d, onChange: f, helpMessage: p, ...m }, h) => {
	let g = T(), _ = (0, j.useRef)(), y = jc({
		selectors: t,
		ignoredKeys: n
	}), [b, x] = (0, j.useState)(!1), [S, C] = (0, j.useState)(!1), [w, E] = (0, j.useState)(!1), [D, O] = (0, j.useState)(!1), [k, A] = (0, j.useState)(i?.userProvidedText || ""), [M, N] = (0, j.useState)([]), [P, F] = (0, j.useState)(null), [I, L] = (0, j.useState)(!0), [R, z] = (0, j.useState)(""), B = (e) => {
		F(e);
	}, V = () => {
		N([]), x(!1), F(null);
	}, ee = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		E(!0), O(!0), A(n), f && (!i || i && n !== i.selectionValue) && f({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), V(), t && t(e);
	};
	function H(t = "") {
		let n = j.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? Cc();
			return /* @__PURE__ */ j.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => ee(e, n),
				id: i,
				onFocus: () => B(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let te = () => {
		N(H(k)), L(!0), z(""), x(!0);
	}, ne = () => {
		b ? V() : te();
	}, re = /* @__PURE__ */ j.createElement(es, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: b ? Wo : Uo,
		iconAs: v,
		size: "sm",
		variant: "secondary",
		alt: b ? g.formatMessage(Mc.iconButtonClosed) : g.formatMessage(Mc.iconButtonOpened),
		onClick: ne
	}), ie = () => {
		C(!0);
	}, ae = () => {
		if (u) {
			L(!1), z(d);
			return;
		}
		if (o && !w) {
			L(!1), z(s);
			return;
		}
		if (w && c && !D) {
			L(!1), z(l);
			return;
		}
		L(!0), z("");
	};
	(0, j.useImperativeHandle)(h, () => ({ updateErrorStateAndErrorMessage: ae }));
	let oe = () => {
		C(!1), V(), ae();
	}, se = (e) => {
		if (S) {
			if (e.key === "Escape") {
				e.preventDefault(), _ && _.current.focus(), V();
				return;
			}
			e.key === "Tab" && oe();
		}
	}, ce = (e) => {
		y.current && !y.current.contains(e.target) && S && oe();
	};
	(0, j.useEffect)(() => (document.addEventListener("keydown", se), document.addEventListener("click", ce, !0), () => {
		document.removeEventListener("click", ce, !0), document.removeEventListener("keydown", se);
	})), (0, j.useEffect)(() => {
		A(i ? i.userProvidedText ?? "" : ""), E(!!i && !!i.userProvidedText), O(!!i && !!i.selectionValue);
	}, [i]);
	let le = () => {
		te();
	}, ue = (e) => {
		let t = e.target.value;
		if (!t.length) {
			A(""), E(!1), O(!1), N([]), V(), f && f({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		E(!0);
		let n = H(t);
		N(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		if (!r) {
			O(!1), A(t), f && f({
				userProvidedText: t,
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		O(!0), A(r.props.children), f && f({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		});
	}, { getControlProps: U } = Ys(), de = U(m);
	return /* @__PURE__ */ j.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: y,
		onFocus: ie
	}, /* @__PURE__ */ j.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${M.length} options found`), /* @__PURE__ */ j.createElement(Zs, {
		controlId: de.id,
		isInvalid: !I
	}, /* @__PURE__ */ j.createElement(cc, {
		ref: _,
		"aria-expanded": (M.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: k,
		"aria-invalid": R,
		"aria-activedescendant": P,
		onChange: ue,
		onClick: le,
		trailingElement: re,
		"data-testid": "autosuggest-textbox-input",
		...de
	}), p && I && /* @__PURE__ */ j.createElement(ic, { type: "default" }, p), !I && /* @__PURE__ */ j.createElement(ic, {
		type: "invalid",
		"feedback-for": de.name
	}, R)), /* @__PURE__ */ j.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /* @__PURE__ */ j.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ j.createElement(Dc, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : M.length > 0 && M));
});
Nc.defaultProps = {
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
}, Nc.propTypes = {
	arrowKeyNavigationSelector: W.default.string,
	ignoredArrowKeysNames: W.default.arrayOf(W.default.string),
	isLoading: W.default.bool,
	className: W.default.string,
	floatingLabel: W.default.string,
	onChange: W.default.func,
	helpMessage: W.default.string,
	placeholder: W.default.string,
	value: W.default.shape({
		userProvidedText: W.default.string,
		selectionValue: W.default.string,
		selectionId: W.default.string
	}),
	isValueRequired: W.default.bool,
	valueRequiredErrorMessageText: Ec(W.default.string, "isValueRequired"),
	isSelectionRequired: W.default.bool,
	selectionRequiredErrorMessageText: Ec(W.default.string, "isSelectionRequired"),
	hasCustomError: W.default.bool,
	customErrorMessageText: Ec(W.default.string, "hasCustomError"),
	name: W.default.string,
	readOnly: W.default.bool,
	children: W.default.node,
	screenReaderText: W.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function Pc({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, M.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, j.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ j.createElement(j.Fragment, null, i && /* @__PURE__ */ j.createElement(v, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ j.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ j.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ j.createElement(v, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function Fc({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ j.createElement(Pc, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, M.default)(t, "dropdown-item"),
		...r
	}, e);
}
Fc.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, Fc.propTypes = {
	className: W.default.string,
	children: W.default.string,
	onClick: W.default.func
};
var Ic = /* @__PURE__ */ j.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), Lc = () => (0, j.useContext)(Ic);
function Rc({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Ws(n, e.onBlur) : n,
			onFocus: e.onFocus ? Ws(r, e.onFocus) : r,
			onChange: e.onChange ? Ws(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ j.createElement(Ic.Provider, { value: c }, e);
}
Rc.propTypes = {
	children: W.default.node.isRequired,
	name: W.default.string,
	onBlur: W.default.func,
	onFocus: W.default.func,
	onChange: W.default.func,
	value: W.default.arrayOf(W.default.string),
	defaultValue: W.default.arrayOf(W.default.string)
}, Rc.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var zc = /* @__PURE__ */ j.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = Lc(), a = j.useRef(), o = n || a, { getControlProps: s } = Ys(), c = s({
		...t,
		className: (0, M.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), j.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ j.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
zc.propTypes = {
	isIndeterminate: W.default.bool,
	className: W.default.string
}, zc.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Bc = /* @__PURE__ */ j.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = Lc(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = Ys();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ j.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ j.createElement(Zs, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ j.createElement("div", {
		className: (0, M.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ j.createElement("div", null, /* @__PURE__ */ j.createElement(lc, { className: r }, e), i && /* @__PURE__ */ j.createElement(ic, { hasIcon: !1 }, i))));
});
Bc.propTypes = {
	id: W.default.string,
	children: W.default.node.isRequired,
	className: W.default.string,
	controlClassName: W.default.string,
	labelClassName: W.default.string,
	description: W.default.node,
	isInvalid: W.default.bool,
	isValid: W.default.bool,
	controlAs: W.default.elementType,
	floatLabelLeft: W.default.bool,
	disabled: W.default.bool
}, Bc.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: zc,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Vc = /* @__PURE__ */ j.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = j.useRef(), i = n || r, { getControlProps: a } = Ys(), o = a({
		...t,
		className: (0, M.default)("pgn__form-switch-input", t.className)
	});
	return j.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ j.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Vc.propTypes = {
	isIndeterminate: W.default.bool,
	className: W.default.string
}, Vc.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Hc = /* @__PURE__ */ j.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ j.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ j.createElement(Bc, {
	className: (0, M.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Vc,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ j.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
Hc.propTypes = {
	children: W.default.node.isRequired,
	className: W.default.string,
	labelClassName: W.default.string,
	helperText: W.default.node,
	floatLabelLeft: W.default.bool
}, Hc.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function Uc({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Ys();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ j.createElement(Rc, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ j.createElement(gc, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
Uc.propTypes = {
	children: W.default.node.isRequired,
	className: W.default.string,
	name: W.default.string.isRequired,
	value: W.default.arrayOf(W.default.string),
	defaultValue: W.default.arrayOf(W.default.string),
	isInline: W.default.bool,
	onChange: W.default.func,
	onFocus: W.default.func,
	onBlur: W.default.func
}, Uc.defaultProps = {
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
var Wc = Uc, X = Xi;
X.Control = cc, X.Radio = hc, X.RadioSet = _c, X.Autosuggest = Nc, X.AutosuggestOption = Fc, X.Checkbox = Bc, X.CheckboxSet = Uc, X.Switch = Hc, X.SwitchSet = Wc, X.Label = lc, X.Group = uc, X.Text = rc;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var Gc = /* @__PURE__ */ j.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function Kc({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, j.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ j.createElement(Gc.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var qc = "right-scroll-bar-position", Jc = "width-before-scroll-bar", Yc = "with-scroll-bars-hidden", Xc = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Zc(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function Qc(e, t) {
	var n = (0, j.useState)(function() {
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
var $c = typeof window < "u" ? j.useLayoutEffect : j.useEffect, el = /* @__PURE__ */ new WeakMap();
function tl(e, t) {
	var n = Qc(t || null, function(t) {
		return e.forEach(function(e) {
			return Zc(e, t);
		});
	});
	return $c(function() {
		var t = el.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Zc(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Zc(e, a);
			});
		}
		el.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function nl(e) {
	return e;
}
function rl(e, t) {
	t === void 0 && (t = nl);
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
function il(e, t) {
	return t === void 0 && (t = nl), rl(e, t);
}
function al(e) {
	e === void 0 && (e = {});
	var t = rl(null);
	return t.options = O({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var ol = function(t) {
	var n = t.sideCar, r = e(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return j.createElement(i, O({}, r));
};
ol.isSideCarExport = !0;
function sl(e, t) {
	return e.useMedium(t), ol;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var cl = al(), ll = function() {}, ul = j.forwardRef(function(t, n) {
	var r = j.useRef(null), i = j.useState({
		onScrollCapture: ll,
		onWheelCapture: ll,
		onTouchMoveCapture: ll
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = e(t, [
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
	]), S = p, C = tl([r, n]), w = O(O({}, x), a);
	return j.createElement(j.Fragment, null, d && j.createElement(S, {
		sideCar: cl,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? j.cloneElement(j.Children.only(c), O(O({}, w), { ref: C })) : j.createElement(y, O({}, w, {
		className: l,
		ref: C
	}), c));
});
ul.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, ul.classNames = {
	fullWidth: Jc,
	zeroRight: qc
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var dl = "data-focus-lock", fl = "data-focus-lock-disabled", pl = "data-no-focus-lock", ml = "data-autofocus-inside", hl = "data-no-autofocus", gl = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, _l = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: gl
	}), n, n && /* @__PURE__ */ j.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: gl
	}));
};
_l.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var vl = il({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), yl = il(), bl = il(), xl = al({
	async: !0,
	ssr: typeof document < "u"
}), Sl = /* @__PURE__ */ (0, j.createContext)(void 0), Cl = [], wl = /* @__PURE__ */ (0, j.forwardRef)(function(e, t) {
	var n, r = (0, j.useState)(), i = r[0], a = r[1], o = (0, j.useRef)(), s = (0, j.useRef)(!1), c = (0, j.useRef)(null), l = (0, j.useState)({})[1], u = e.children, d = e.disabled, f = d === void 0 ? !1 : d, p = e.noFocusGuards, m = p === void 0 ? !1 : p, h = e.persistentFocus, _ = h === void 0 ? !1 : h, v = e.crossFrame, y = v === void 0 ? !0 : v, b = e.autoFocus, x = b === void 0 ? !0 : b;
	e.allowTextSelection;
	var S = e.group, C = e.className, w = e.whiteList, T = e.hasPositiveIndices, E = e.shards, D = E === void 0 ? Cl : E, O = e.as, k = O === void 0 ? "div" : O, A = e.lockProps, M = A === void 0 ? {} : A, N = e.sideCar, P = e.returnFocus, F = P === void 0 ? !1 : P, I = e.focusOptions, L = e.onActivation, R = e.onDeactivation, z = (0, j.useState)({})[0], B = (0, j.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!c.current) {
			var n = document?.activeElement;
			c.current = n, n !== document.body && (c.current = t(n));
		}
		o.current && L && L(o.current), s.current = !0, l();
	}, [L]), V = (0, j.useCallback)(function() {
		s.current = !1, R && R(o.current), l();
	}, [R]), ee = (0, j.useCallback)(function(e) {
		var t = c.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof F == "function" ? F(n) : F;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				c.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [F]), H = (0, j.useCallback)(function(e) {
		s.current && vl.useMedium(e);
	}, []), te = yl.useMedium, ne = (0, j.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), re = g((n = {}, n[fl] = f && "disabled", n[dl] = S, n), M), ie = m !== !0, ae = ie && m !== "tail", oe = tl([t, ne]), se = (0, j.useMemo)(function() {
		return {
			observed: o,
			shards: D,
			enabled: !f,
			get active() {
				return s.current;
			}
		};
	}, [
		f,
		s,
		D,
		o
	]);
	return /* @__PURE__ */ j.createElement(j.Fragment, null, ie && [/* @__PURE__ */ j.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: gl
	}), T ? /* @__PURE__ */ j.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 1,
		style: gl
	}) : null], !f && /* @__PURE__ */ j.createElement(N, {
		id: z,
		sideCar: xl,
		observed: i,
		disabled: f,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: x,
		whiteList: w,
		shards: D,
		onActivation: B,
		onDeactivation: V,
		returnFocus: ee,
		focusOptions: I,
		noFocusGuards: m
	}), /* @__PURE__ */ j.createElement(k, g({ ref: oe }, re, {
		className: C,
		onBlur: te,
		onFocus: H
	}), /* @__PURE__ */ j.createElement(Sl.Provider, { value: se }, u)), ae && /* @__PURE__ */ j.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: gl
	}));
});
wl.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function Tl(e) {
	setTimeout(e, 1);
}
var El = function(e) {
	return e && "current" in e ? e.current : e;
}, Dl = wl, Ol = al(), kl = "data-focus-on-hidden", Al = { preventScroll: !0 }, jl = j.forwardRef(function(t, n) {
	var r = j.useState(!1), i = r[0], a = r[1], o = j.useState(null), s = o[0], c = o[1], l = t.children, u = t.autoFocus, d = t.shards, f = t.crossFrame, p = t.enabled, m = p === void 0 ? !0 : p, h = t.scrollLock, g = h === void 0 ? !0 : h, _ = t.focusLock, v = _ === void 0 ? !0 : _, y = t.returnFocus, b = y === void 0 ? !0 : y, x = t.inert, S = t.allowPinchZoom, C = t.sideCar, w = t.className, T = t.shouldIgnore, E = t.preventScrollOnFocus, D = t.style, k = t.as, A = t.gapMode, M = e(t, [
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
	]), N = C, P = O(O({}, i), {
		as: k,
		style: D,
		sideCar: C,
		shards: d,
		allowPinchZoom: S,
		gapMode: A,
		inert: x,
		enabled: m && g
	}), F = j.useCallback(function(e) {
		c(e);
	}, []), I = j.useCallback(function() {
		c(null);
	}, []);
	return j.createElement(j.Fragment, null, j.createElement(Dl, {
		ref: n,
		sideCar: C,
		disabled: !(m && v),
		returnFocus: b,
		autoFocus: u,
		shards: d,
		crossFrame: f,
		onActivation: F,
		onDeactivation: I,
		className: w,
		whiteList: T,
		lockProps: P,
		focusOptions: E ? Al : void 0,
		as: ul
	}, l), m && j.createElement(N, O({}, M, {
		sideCar: Ol,
		setLockProps: a,
		shards: d,
		activeNode: s
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function Ml(e) {
	"@babel/helpers - typeof";
	return Ml = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ml(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Nl(e, t) {
	if (Ml(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ml(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Pl(e) {
	var t = Nl(e, "string");
	return Ml(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Fl(e, t, n) {
	return (t = Pl(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Il(e, t) {
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
			V(t, e);
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
				return /* @__PURE__ */ j.createElement(r, this.props);
			}, t;
		}(j.PureComponent);
		return Fl(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var Ll = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, Rl = function(e) {
	return Array.isArray(e) ? e : [e];
}, zl = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Bl = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Vl = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, Hl = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, Ul = function(e) {
	return e.hasAttribute("inert");
}, Wl = function(e, t) {
	return !e || Hl(e) || !Bl(e) && !Ul(e) && t(Vl(e));
}, Gl = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Wl(t, Gl.bind(void 0, e));
	return e.set(t, r), r;
}, Kl = function(e, t) {
	return e && !Hl(e) ? $l(e) ? t(Vl(e)) : !1 : !0;
}, ql = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Kl(t, ql.bind(void 0, e));
	return e.set(t, r), r;
}, Jl = function(e) {
	return e.dataset;
}, Yl = function(e) {
	return e.tagName === "BUTTON";
}, Xl = function(e) {
	return e.tagName === "INPUT";
}, Zl = function(e) {
	return Xl(e) && e.type === "radio";
}, Ql = function(e) {
	return !((Xl(e) || Yl(e)) && (e.type === "hidden" || e.disabled));
}, $l = function(e) {
	var t = e.getAttribute(hl);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, eu = function(e) {
	return !!(e && Jl(e)?.focusGuard);
}, tu = function(e) {
	return !eu(e);
}, nu = function(e) {
	return !!e;
}, ru = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, iu = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, au = function(e, t, n) {
	return Ll(e).map(function(e, t) {
		var r = iu(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(ru);
}, ou = [
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
].join(","), su = `${ou}, [data-focus-guard]`, cu = function(e, t) {
	return Ll((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? su : ou) ? [n] : [], cu(n));
	}, []);
}, lu = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? uu([e.contentDocument.body], t) : [e];
}, uu = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = cu(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return lu(e, t);
		}));
		return e.concat(a, n.parentNode ? Ll(n.parentNode.querySelectorAll(ou)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, du = function(e) {
	return Ll(e.querySelectorAll(`[${ml}]`)).map(function(e) {
		return uu([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, fu = function(e, t) {
	return Ll(e).filter(function(e) {
		return Gl(t, e);
	}).filter(function(e) {
		return Ql(e);
	});
}, pu = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), Ll(e).filter(function(e) {
		return ql(t, e);
	});
}, mu = function(e, t, n) {
	return au(fu(uu(e, n), t), !0, n);
}, hu = function(e, t) {
	return au(fu(uu(e), t), !1);
}, gu = function(e, t) {
	return fu(du(e), t);
}, _u = function(e, t) {
	return e.shadowRoot ? _u(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Ll(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? _u(n, t) : !1;
		}
		return _u(e, t);
	});
}, vu = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, yu = function(e) {
	return e.parentNode ? yu(e.parentNode) : e;
}, bu = function(e) {
	return Rl(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(dl);
		return e.push.apply(e, n ? vu(Ll(yu(t).querySelectorAll(`[${dl}="${n}"]:not([${fl}="disabled"])`))) : [t]), e;
	}, []);
}, xu = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, Su = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? Su(t.shadowRoot) : t instanceof HTMLIFrameElement && xu(function() {
			return t.contentWindow.document;
		}) ? Su(t.contentWindow.document) : t;
	}
}, Cu = function(e, t) {
	return e === t;
}, wu = function(e, t) {
	return !!Ll(e.querySelectorAll("iframe")).some(function(e) {
		return Cu(e, t);
	});
}, Tu = function(e, t) {
	return t === void 0 && (t = Su(zl(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : bu(e).some(function(e) {
		return _u(e, t) || wu(e, t);
	});
}, Eu = function(e) {
	e === void 0 && (e = document);
	var t = Su(e);
	return t ? Ll(e.querySelectorAll(`[${pl}]`)).some(function(e) {
		return _u(e, t);
	}) : !1;
}, Du = function(e, t) {
	return t.filter(Zl).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, Ou = function(e, t) {
	return Zl(e) && e.name ? Du(e, t) : e;
}, ku = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(Ou(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Au = function(e) {
	return e[0] && e.length > 1 ? Ou(e[0], e) : e[0];
}, ju = function(e, t) {
	return e.indexOf(Ou(t, e));
}, Mu = "NEW_FOCUS", Nu = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = eu(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? Mu : d;
		if (d === -1) return Mu;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = ku(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = ju(e, t[0]), C = ju(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Pu = function(e) {
	return function(t) {
		var n = Jl(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Fu = function(e, t, n) {
	var r = pu(e.map(function(e) {
		return e.node;
	}).filter(Pu(n)));
	return r && r.length ? Au(r) : Au(pu(t));
}, Iu = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Iu(e.parentNode.host || e.parentNode, t), t;
}, Lu = function(e, t) {
	for (var n = Iu(e), r = Iu(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, Ru = function(e, t, n) {
	var r = Rl(e), i = Rl(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Lu(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Lu(a, e);
			t && (o = !o || _u(t, o) ? t : Lu(t, o));
		});
	}), o;
}, zu = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(gu(n, t));
	}, []);
}, Bu = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(nu);
}, Vu = function(e, t) {
	var n = Su(Rl(e).length > 0 ? document : zl(e).ownerDocument), r = bu(e).filter(tu), i = Ru(n || e, e, r), a = /* @__PURE__ */ new Map(), o = hu(r, a), s = o.filter(function(e) {
		var t = e.node;
		return tu(t);
	});
	if (s[0]) {
		var c = hu([i], a).map(function(e) {
			return e.node;
		}), l = Bu(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Nu(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Fu(o, d, zu(r, a)) || Fu(o, u, zu(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, Hu = function(e) {
	var t = bu(e).filter(tu), n = au(uu([Ru(e, e, t)], !0), !0, !0), r = uu(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: eu(t)
		};
	});
}, Uu = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Wu = 0, Gu = !1, Ku = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Vu(e, t);
	if (!Gu && r) {
		if (Wu > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Gu = !0, setTimeout(function() {
				Gu = !1;
			}, 1);
			return;
		}
		Wu++, Uu(r.node, n.focusOptions), Wu--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function qu(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var Ju = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: qu(n),
		parent: qu(n.parentElement),
		left: qu(n.previousElementSibling),
		right: qu(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: qu(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, Yu = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = mu([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, Xu = function(e) {
	var t = Ju(e);
	return function() {
		return Yu(t);
	};
}, Zu = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = Rl(t);
	if (r.every(function(t) {
		return !_u(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? mu(r, /* @__PURE__ */ new Map()) : hu(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, Qu = function(e, t) {
	var n = t ? mu(Rl(e), /* @__PURE__ */ new Map()) : hu(Rl(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, $u = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, ed = function(e, t, n) {
	t === void 0 && (t = {});
	var r = $u(t), i = Zu(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Uu(a.node, r.focusOptions);
	}
}, td = function(e, t) {
	t === void 0 && (t = {}), ed(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, nd = function(e, t) {
	t === void 0 && (t = {}), ed(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, rd = function(e, t, n) {
	var r = Qu(e, t.onlyTabbable ?? !0)[n];
	r && Uu(r.node, t.focusOptions);
}, id = function(e, t) {
	t === void 0 && (t = {}), rd(e, t, "first");
}, ad = function(e, t) {
	t === void 0 && (t = {}), rd(e, t, "last");
}, od = function() {
	return document && document.activeElement === document.body;
}, sd = function() {
	return od() || Eu();
}, cd = null, ld = null, ud = function() {
	return null;
}, dd = null, fd = !1, pd = !1, md = function() {
	return !0;
}, hd = function(e) {
	return (cd.whiteList || md)(e);
}, gd = function(e, t) {
	dd = {
		observerNode: e,
		portaledElement: t
	};
}, _d = function(e) {
	return dd && dd.portaledElement === e;
};
function vd(e, t, n, r) {
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
var yd = function(e) {
	return e ? !!fd : fd === "meanwhile";
}, bd = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, xd = function(e, t) {
	return t.some(function(t) {
		return bd(e, t, t);
	});
}, Sd = function(e) {
	return hu(e, /* @__PURE__ */ new Map());
}, Cd = function(e) {
	return !Sd([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, wd = function() {
	var e = !1;
	if (cd) {
		var t = cd, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || dd && dd.portaledElement;
		if (od() && ld && ld !== document.body && (!document.body.contains(ld) || Cd(ld))) {
			var u = ud();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(El).filter(Boolean));
			if ((!d || hd(d)) && (r || function() {
				if (!yd(o) || !c || !ld || pd) return !1;
				var e = Sd(f), t = e.findIndex(function(e) {
					return e.node === ld;
				});
				return t === 0 || t === e.length - 1;
			}() || !sd() || !ld && i) && (l && !(Tu(f) || d && xd(d, f) || _d(d, l)) && (document && !ld && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = Ku(f, ld, { focusOptions: s }), dd = {})), ld = document && document.activeElement, ld !== document.body && (ud = Xu(ld)), fd = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = Hu(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), vd(h, m.length, 1, m), vd(h, -1, -1, m));
			}
		}
	}
	return e;
}, Td = function(e) {
	wd() && e && (e.stopPropagation(), e.preventDefault());
}, Ed = function() {
	return Tl(wd);
}, Dd = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || gd(n, t);
}, Od = function() {
	return null;
}, kd = function(e) {
	var t = e.children;
	return /* @__PURE__ */ j.createElement("div", {
		onBlur: Ed,
		onFocus: Dd
	}, t);
};
kd.propTypes = {};
var Ad = function() {
	pd = !0;
}, jd = function() {
	pd = !1, fd = "just", Tl(function() {
		fd = "meanwhile";
	});
}, Md = function() {
	document.addEventListener("focusin", Td), document.addEventListener("focusout", Ed), window.addEventListener("focus", Ad), window.addEventListener("blur", jd);
}, Nd = function() {
	document.removeEventListener("focusin", Td), document.removeEventListener("focusout", Ed), window.removeEventListener("focus", Ad), window.removeEventListener("blur", jd);
};
function Pd(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Fd = {
	moveFocusInside: Ku,
	focusInside: Tu,
	focusNextElement: td,
	focusPrevElement: nd,
	focusFirstElement: id,
	focusLastElement: ad,
	captureFocusRestore: Xu
};
function Id(e) {
	var t = e.slice(-1)[0];
	t && !cd && Md();
	var n = cd, r = n && t && t.id === n.id;
	cd = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (ld = null, (!r || n.observed !== t.observed) && t.onActivation(Fd), wd(!0), Tl(wd)) : (Nd(), ld = null);
}
vl.assignSyncMedium(Dd), yl.assignMedium(Ed), bl.assignMedium(function(e) {
	return e(Fd);
}), sl(xl, Il(Pd, Id)(Od));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Ld, Rd = function() {
	if (Ld) return Ld;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function zd() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Rd();
	return t && e.setAttribute("nonce", t), e;
}
function Bd(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Vd(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Hd = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = zd()) && (Bd(t, n), Vd(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Ud = function() {
	var e = Hd();
	return function(t, n) {
		j.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Wd = function() {
	var e = Ud();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Gd = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Kd = function(e) {
	return parseInt(e || "", 10) || 0;
}, qd = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Kd(n),
		Kd(r),
		Kd(i)
	];
}, Jd = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Gd;
	var t = qd(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Yd = Wd(), Xd = "data-scroll-locked", Zd = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Yc} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Xd}] {
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
  
  .${qc} {
    right: ${s}px ${r};
  }
  
  .${Jc} {
    margin-right: ${s}px ${r};
  }
  
  .${qc} .${qc} {
    right: 0 ${r};
  }
  
  .${Jc} .${Jc} {
    margin-right: 0 ${r};
  }
  
  body[${Xd}] {
    ${Xc}: ${s}px;
  }
`;
}, Qd = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, $d = function() {
	j.useEffect(function() {
		return document.body.setAttribute(Xd, (Qd() + 1).toString()), function() {
			var e = Qd() - 1;
			e <= 0 ? document.body.removeAttribute(Xd) : document.body.setAttribute(Xd, e.toString());
		};
	}, []);
}, ef = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	$d();
	var a = j.useMemo(function() {
		return Jd(i);
	}, [i]);
	return j.createElement(Yd, { styles: Zd(a, !t, i, n ? "" : "!important") });
}, tf = !1;
if (typeof window < "u") try {
	var nf = Object.defineProperty({}, "passive", { get: function() {
		return tf = !0, !0;
	} });
	window.addEventListener("test", nf, nf), window.removeEventListener("test", nf, nf);
} catch {
	tf = !1;
}
var rf = tf ? { passive: !1 } : !1, af = function(e) {
	return e.tagName === "TEXTAREA";
}, of = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !af(e) && n[t] === "visible");
}, sf = function(e) {
	return of(e, "overflowY");
}, cf = function(e) {
	return of(e, "overflowX");
}, lf = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), ff(e, r)) {
			var i = pf(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, uf = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, df = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, ff = function(e, t) {
	return e === "v" ? sf(t) : cf(t);
}, pf = function(e, t) {
	return e === "v" ? uf(t) : df(t);
}, mf = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, hf = function(e, t, n, r, i) {
	var a = mf(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = pf(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && ff(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, gf = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, _f = function(e) {
	return [e.deltaX, e.deltaY];
}, vf = function(e) {
	return e && "current" in e ? e.current : e;
}, yf = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, bf = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, xf = 0, Sf = [];
function Cf(e) {
	var t = j.useRef([]), n = j.useRef([0, 0]), r = j.useRef(), i = j.useState(xf++)[0], a = j.useState(Wd)[0], o = j.useRef(e);
	j.useEffect(function() {
		o.current = e;
	}, [e]), j.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = E([e.lockRef.current], (e.shards || []).map(vf), !0).filter(Boolean);
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
	var s = j.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = gf(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = lf(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = lf(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return hf(h, t, e, h === "h" ? s : c, !0);
	}, []), c = j.useCallback(function(e) {
		var n = e;
		if (!(!Sf.length || Sf[Sf.length - 1] !== a)) {
			var r = "deltaY" in n ? _f(n) : gf(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && yf(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(vf).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = j.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: wf(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = j.useCallback(function(e) {
		n.current = gf(e), r.current = void 0;
	}, []), d = j.useCallback(function(t) {
		l(t.type, _f(t), t.target, s(t, e.lockRef.current));
	}, []), f = j.useCallback(function(t) {
		l(t.type, gf(t), t.target, s(t, e.lockRef.current));
	}, []);
	j.useEffect(function() {
		return Sf.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, rf), document.addEventListener("touchmove", c, rf), document.addEventListener("touchstart", u, rf), function() {
			Sf = Sf.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, rf), document.removeEventListener("touchmove", c, rf), document.removeEventListener("touchstart", u, rf);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return j.createElement(j.Fragment, null, m ? j.createElement(a, { styles: bf(i) }) : null, p ? j.createElement(ef, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function wf(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
sl(cl, Cf);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Tf = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Ef = /* @__PURE__ */ new WeakMap(), Df = /* @__PURE__ */ new WeakMap(), Of = {}, kf = 0, Af = function(e) {
	return e && (e.host || Af(e.parentNode));
}, jf = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Af(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Mf = function(e, t, n, r) {
	var i = jf(t, Array.isArray(e) ? e : [e]);
	Of[n] || (Of[n] = /* @__PURE__ */ new WeakMap());
	var a = Of[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Ef.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Ef.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Df.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), kf++, function() {
		o.forEach(function(e) {
			var t = Ef.get(e) - 1, i = a.get(e) - 1;
			Ef.set(e, t), a.set(e, i), t || (Df.has(e) || e.removeAttribute(r), Df.delete(e)), i || e.removeAttribute(n);
		}), kf--, kf || (Ef = /* @__PURE__ */ new WeakMap(), Ef = /* @__PURE__ */ new WeakMap(), Df = /* @__PURE__ */ new WeakMap(), Of = {});
	};
}, Nf = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Tf(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Mf(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Pf = Wd(), Ff = "\n [" + kl + "] {\n   pointer-events: none !important;\n }\n", If = function() {
	return j.createElement(Pf, { styles: Ff });
}, Lf = function(e) {
	return "current" in e ? e.current : e;
};
function Rf(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, o = e.onActivation, s = e.onDeactivation, c = e.noIsolation, l = e.activeNode, u = (0, j.useRef)(null), d = (0, j.useRef)(0);
	return j.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === u.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(Lf).some(function(t) {
				return t && t.contains(e.target) || t === e.target;
			}) || r && r(e);
		}, a = function(e) {
			t(e), d.current = e.touches.length;
		}, o = function(e) {
			d.current = e.touches.length;
		};
		if (l) return l.ownerDocument.addEventListener("keydown", e), l.ownerDocument.addEventListener("mousedown", t), l.ownerDocument.addEventListener("touchstart", a), l.ownerDocument.addEventListener("touchend", o), function() {
			l.ownerDocument.removeEventListener("keydown", e), l.ownerDocument.removeEventListener("mousedown", t), l.ownerDocument.removeEventListener("touchstart", a), l.ownerDocument.removeEventListener("touchend", o);
		};
	}, [
		l,
		r,
		n
	]), (0, j.useEffect)(function() {
		if (l) return o && o(l), function() {
			s && s();
		};
	}, [!!l]), (0, j.useEffect)(function() {
		if (!(c || !l)) return Nf(a([l], (i || []).map(Lf)), l.ownerDocument.body, kl);
	}, [l, c]), (0, j.useEffect)(function() {
		return t({
			onMouseDown: function(e) {
				u.current = e.target;
			},
			onTouchStart: function(e) {
				u.current = e.target;
			}
		}), function() {
			t(!1);
		};
	}, []), j.createElement(If, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var zf = sl(Ol, Rf), Bf = function(e) {
	return j.createElement(zf, O({}, e));
}, Vf = j.forwardRef(function(e, t) {
	return j.createElement(jl, O({}, e, {
		ref: t,
		sideCar: Bf
	}));
}), Hf = class extends j.Component {
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
		return this.rootElement ? /* @__PURE__ */ A.createPortal(this.props.children, this.rootElement) : null;
	}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function Uf({ onClick: e }) {
	return /* @__PURE__ */ j.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Wf({ children: e = null }) {
	return /* @__PURE__ */ j.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function Gf({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, j.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /* @__PURE__ */ j.createElement(Kc, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /* @__PURE__ */ j.createElement(Hf, null, /* @__PURE__ */ j.createElement(Vf, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, M.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /* @__PURE__ */ j.createElement(Wf, null, /* @__PURE__ */ j.createElement(Uf, { onClick: a }), e))));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var Kf = /* @__PURE__ */ j.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, j.useContext)(Gc), a = e, o = {
		...n,
		className: (0, M.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /* @__PURE__ */ j.createElement(a, o, t);
});
Kf.propTypes = {
	as: W.default.elementType,
	children: W.default.node,
	className: W.default.string,
	onClick: W.default.func
}, Kf.defaultProps = {
	as: C,
	onClick: void 0,
	className: void 0,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var qf = /* @__PURE__ */ j.forwardRef(({ as: e = "div", children: t, ...n }, r) => /* @__PURE__ */ j.createElement(e, {
	...n,
	ref: r,
	className: (0, M.default)("pgn__modal-header", n.className)
}, t));
qf.propTypes = {
	as: W.default.elementType,
	children: W.default.node.isRequired,
	className: W.default.string
}, qf.defaultProps = {
	as: "div",
	className: ""
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function Jf({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ j.createElement(e, {
		...n,
		className: (0, M.default)("pgn__modal-title", n.className)
	}, t);
}
Jf.propTypes = {
	as: W.default.elementType,
	children: W.default.node.isRequired,
	className: W.default.string
}, Jf.defaultProps = {
	as: "h2",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function Yf({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ j.createElement(e, {
		...n,
		className: (0, M.default)("pgn__modal-footer", n.className)
	}, t);
}
Yf.propTypes = {
	as: W.default.elementType,
	children: W.default.node.isRequired,
	className: W.default.string
}, Yf.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
var Xf = (e = !0) => {
	let t = (0, j.useRef)(null), [n, r] = (0, j.useState)(e);
	return (0, j.useEffect)(() => {
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
function Zf({ as: e, children: t, ...n }) {
	let [r, i] = Xf(), [a, o] = Xf(), s = (0, M.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /* @__PURE__ */ j.createElement(e, {
		...n,
		className: s
	}, /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement("div", { ref: i }), /* @__PURE__ */ j.createElement("div", { className: "pgn__modal-body-content" }, t), /* @__PURE__ */ j.createElement("div", { ref: o })));
}
Zf.propTypes = {
	as: W.default.elementType,
	children: W.default.node.isRequired,
	className: W.default.string
}, Zf.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function Qf({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ j.createElement(e, {
		...n,
		className: (0, M.default)("pgn__modal-hero-content", n.className)
	}, t);
}
Qf.propTypes = {
	as: W.default.elementType,
	children: W.default.node.isRequired,
	className: W.default.string
}, Qf.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function $f({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /* @__PURE__ */ j.createElement(e, {
		...r,
		className: (0, M.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
$f.propTypes = {
	as: W.default.elementType,
	backgroundSrc: W.default.string,
	children: W.default.node,
	className: W.default.string,
	style: W.default.shape({})
}, $f.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function ep({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ j.createElement(e, {
		...n,
		className: (0, M.default)("pgn__modal-hero", n.className)
	}, t);
}
ep.propTypes = {
	as: W.default.elementType,
	children: W.default.node.isRequired,
	className: W.default.string
}, ep.defaultProps = {
	as: "div",
	className: void 0
}, ep.Content = Qf, ep.Background = $f;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/messages.js
var tp = f({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function np({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: s, isFullscreenScroll: c = !1, className: l, isFullscreenOnMobile: u = !1, isBlocking: d = !1, zIndex: f, isOverflowVisible: p }) {
	let m = T(), h = s || m.formatMessage(tp.closeButtonText), g = So({ query: "(max-width: 767.98px)" }), _ = u && g;
	return /* @__PURE__ */ j.createElement(Gf, {
		isOpen: n,
		onClose: r,
		isBlocking: d,
		zIndex: f
	}, /* @__PURE__ */ j.createElement("div", {
		role: "dialog",
		"aria-label": t,
		className: (0, M.default)("pgn__modal", {
			[`pgn__modal-${_ ? "fullscreen" : i}`]: i,
			[`pgn__modal-${a}`]: a,
			"pgn__modal-scroll-fullscreen": c,
			"pgn__modal-visible-overflow": p
		}, l)
	}, o && /* @__PURE__ */ j.createElement("div", { className: "pgn__modal-close-container" }, /* @__PURE__ */ j.createElement(Kf, {
		as: es,
		iconAs: v,
		invertColors: a === "dark",
		src: Ro,
		alt: h
	})), e));
}
np.Header = qf, np.Title = Jf, np.Footer = Yf, np.CloseButton = Kf, np.Body = Zf, np.Hero = ep;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Stack/index.js
var rp = /* @__PURE__ */ (0, j.forwardRef)(({ direction: e = "vertical", gap: t = 0, reversed: n = !1, children: r, className: i, ...a }, o) => /* @__PURE__ */ j.createElement("div", {
	ref: o,
	className: (0, M.default)(e === "horizontal" ? "pgn__hstack" : "pgn__vstack", t ? `pgn__stack-gap--${t}` : "", n ? "pgn__stack-reversed" : "", i),
	...a
}, r));
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useToggleHook.js
function ip(e = !1, t = {}) {
	let { handleToggleOn: n, handleToggleOff: r, handleToggle: i } = t, [a, o] = (0, j.useState)(e), s = (0, j.useCallback)(() => {
		o(!0), n?.(), i?.(!0);
	}, [n, i]), c = (0, j.useCallback)(() => {
		o(!1), r?.(), i?.(!1);
	}, [r, i]);
	return [
		a,
		s,
		c,
		(0, j.useCallback)(() => {
			(a ? c : s)();
		}, [
			a,
			s,
			c
		])
	];
}
//#endregion
//#region node_modules/.pnpm/react-popper@2.3.0_@popperjs+core@2.11.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-popper/lib/esm/utils.js
var ap = function(e) {
	return e.reduce(function(e, t) {
		var n = t[0];
		return e[n] = t[1], e;
	}, {});
}, op = typeof window < "u" && window.document && window.document.createElement ? j.useLayoutEffect : j.useEffect;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function sp(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
		!Wt(i) || !en(i) || (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function cp(e) {
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
			!Wt(r) || !en(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var lp = /* @__PURE__ */ vr({ defaultModifiers: [
	Dn,
	ir,
	wn,
	{
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: sp,
		effect: cp,
		requires: ["computeStyles"]
	},
	nr,
	Yn,
	sr,
	vn,
	$n
] }), up = /* @__PURE__ */ h((/* @__PURE__ */ r(((e, t) => {
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
})))()), dp = [], fp = function(e, t, n) {
	n === void 0 && (n = {});
	var r = j.useRef(null), i = {
		onFirstUpdate: n.onFirstUpdate,
		placement: n.placement || "bottom",
		strategy: n.strategy || "absolute",
		modifiers: n.modifiers || dp
	}, a = j.useState({
		styles: {
			popper: {
				position: i.strategy,
				left: "0",
				top: "0"
			},
			arrow: { position: "absolute" }
		},
		attributes: {}
	}), o = a[0], s = a[1], c = j.useMemo(function() {
		return {
			name: "updateState",
			enabled: !0,
			phase: "write",
			fn: function(e) {
				var t = e.state, n = Object.keys(t.elements);
				A.flushSync(function() {
					s({
						styles: ap(n.map(function(e) {
							return [e, t.styles[e] || {}];
						})),
						attributes: ap(n.map(function(e) {
							return [e, t.attributes[e]];
						}))
					});
				});
			},
			requires: ["computeStyles"]
		};
	}, []), l = j.useMemo(function() {
		var e = {
			onFirstUpdate: i.onFirstUpdate,
			placement: i.placement,
			strategy: i.strategy,
			modifiers: [].concat(i.modifiers, [c, {
				name: "applyStyles",
				enabled: !1
			}])
		};
		return (0, up.default)(r.current, e) ? r.current || e : (r.current = e, e);
	}, [
		i.onFirstUpdate,
		i.placement,
		i.strategy,
		i.modifiers,
		c
	]), u = j.useRef();
	return op(function() {
		u.current && u.current.setOptions(l);
	}, [l]), op(function() {
		if (!(e == null || t == null)) {
			var r = (n.createPopper || lp)(e, t, l);
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
function pp({ children: e, target: t, strategy: n, placement: r, modifiers: i }) {
	let [a, o] = (0, j.useState)(null), { styles: s, attributes: c } = fp(t, a, {
		modifiers: i,
		strategy: n,
		placement: r
	});
	return t ? /* @__PURE__ */ j.createElement("div", {
		ref: o,
		style: {
			...s.popper,
			zIndex: 2e3
		},
		...c.popper
	}, e) : null;
}
pp.defaultProps = { target: void 0 }, pp.propTypes = {
	children: W.default.node,
	target: W.default.shape({ current: W.default.shape({}) }),
	strategy: W.default.oneOf(["absolute", "fixed"]),
	placement: W.default.oneOf([
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
	modifiers: W.default.arrayOf(W.default.shape({}))
}, pp.defaultProps = {
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
var mp = {
	right: [-2, 10],
	left: [-2, 10]
};
function hp({ children: e, onClose: t, isOpen: n, positionRef: r, isBlocking: i, withPortal: a, placement: o, hasArrow: s, ...c }) {
	let l = a ? Hf : j.Fragment, u = mp[o] || [0, 10], d = [{
		name: "eventListeners",
		options: { scroll: !1 }
	}, {
		name: "offset",
		options: { offset: () => u }
	}], f = (e) => {
		e.type !== "touchstart" && t();
	};
	return /* @__PURE__ */ j.createElement(Kc, {
		onClose: t,
		isOpen: n,
		isBlocking: i
	}, /* @__PURE__ */ j.createElement(l, null, /* @__PURE__ */ j.createElement(pp, {
		modifiers: s ? d : null,
		target: r,
		placement: o,
		...c
	}, /* @__PURE__ */ j.createElement(Vf, {
		scrollLock: !1,
		enabled: n,
		onEscapeKey: t,
		onClickOutside: f
	}, n && /* @__PURE__ */ j.createElement("div", { className: "pgn__modal-popup__tooltip" }, e, s && /* @__PURE__ */ j.createElement("div", {
		id: "arrow",
		"data-testid": "modal-popup-arrow",
		className: `pgn__modal-popup__arrow pgn__modal-popup__arrow-${o}`,
		"data-popper-arrow": ""
	}))))));
}
hp.propTypes = {
	children: W.default.node.isRequired,
	onClose: W.default.func.isRequired,
	isOpen: W.default.bool.isRequired,
	isBlocking: W.default.bool,
	withPortal: W.default.bool,
	positionRef: W.default.oneOfType([W.default.func, W.default.shape({ current: W.default.shape({}) })]),
	placement: pp.propTypes.placement,
	hasArrow: W.default.bool
}, hp.defaultProps = {
	isBlocking: !1,
	withPortal: !1,
	placement: "bottom-start",
	positionRef: null,
	hasArrow: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Nav/index.js
function gp(e) {
	return /* @__PURE__ */ j.createElement(pa, { ...e });
}
function _p(e) {
	return /* @__PURE__ */ j.createElement(sa, { ...e });
}
function vp(e) {
	return /* @__PURE__ */ j.createElement(ua, { ...e });
}
function yp(e) {
	return /* @__PURE__ */ j.createElement(ha, { ...e });
}
function bp(e) {
	return /* @__PURE__ */ j.createElement(ha.Item, { ...e });
}
function xp(e) {
	return /* @__PURE__ */ j.createElement(ha.Divider, { ...e });
}
gp.propTypes = {
	cardHeaderBsPrefix: W.default.string,
	defaultActiveKey: W.default.oneOfType([W.default.string, W.default.number]),
	activeKey: W.default.oneOfType([W.default.string, W.default.number]),
	as: W.default.elementType,
	fill: W.default.bool,
	justify: W.default.bool,
	navbar: W.default.bool,
	onKeyDown: W.default.func,
	onSelect: W.default.func,
	role: W.default.string,
	variant: W.default.oneOf(["tabs", "pills"]),
	bsPrefix: W.default.string
}, _p.propTypes = {
	role: W.default.string,
	as: W.default.elementType,
	bsPrefix: W.default.string
}, vp.propTypes = {
	onSelect: W.default.string,
	active: W.default.bool,
	as: W.default.elementType,
	disabled: W.default.bool,
	eventKey: W.default.oneOfType([W.default.string, W.default.number]),
	href: W.default.string,
	role: W.default.string,
	bsPrefix: W.default.string
}, yp.propTypes = {
	id: W.default.string.isRequired,
	title: W.default.node.isRequired,
	active: W.default.bool,
	disabled: W.default.bool,
	menuRole: W.default.string,
	menuVariant: W.default.oneOf(["dark"]),
	onClick: W.default.func,
	renderMenuOnMount: W.default.bool,
	rootCloseEvent: W.default.string,
	bsPrefix: W.default.string
}, gp.defaultProps = { ...pa.defaultProps }, yp.defaultProps = { ...ha.defaultProps }, _p.defaultProps = { ...sa.defaultProps }, vp.defaultProps = { ...ua.defaultProps }, gp.Item = _p, gp.Link = vp, yp.Item = bp, yp.Divider = xp;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ProgressBar/utils.js
var Sp = (e, t = "ltr", n = !0, r = "pgn__annotation") => {
	if (!e.current || !e.current.style) return !1;
	let { children: i } = e.current, a = 0;
	for (let e = 0; e < i.length; e++) {
		let t = i[e].getBoundingClientRect();
		i[e].className.includes(r) ? a += t.width / 2 : a += n ? 0 : t.width;
	}
	return e.current.style[t === "rtl" ? "marginRight" : "marginLeft"] = `${-a}px`, !0;
}, Cp = (e, t) => t === "rtl" ? { right: `${e}%` } : { left: `${e}%` }, wp = "pgn__annotation", Tp = 50, Ep = "warning", Dp = "dark", Op = [
	"dark",
	"warning",
	"success",
	"error"
];
function kp(e) {
	return /* @__PURE__ */ j.createElement(Fa, { ...e });
}
function Ap({ now: e, label: t, variant: n, threshold: r, thresholdLabel: i, thresholdVariant: a, progressHint: o, thresholdHint: s, ...c }) {
	let l = j.useRef(), u = j.useRef(), d = (r || 0) - (e || 0), f = e < Tp, p = r < Tp, m = Op.includes(n) ? n : Ep, h = Op.includes(a) ? a : Dp, g = window.getComputedStyle(document.body).getPropertyValue("direction"), _ = (0, j.useCallback)(() => {
		Sp(l, g, f, wp), Sp(u, g, p, wp);
	}, [
		g,
		f,
		p
	]);
	(0, j.useEffect)(() => {
		_();
		let e = new ResizeObserver(() => {
			_();
		}), t = l.current;
		return e.observe(t), () => t && e.unobserve(t);
	}, [_]);
	let v = (e) => /* @__PURE__ */ j.createElement("span", {
		className: "pgn__progress-hint",
		"data-testid": "progress-hint"
	}, e);
	return /* @__PURE__ */ j.createElement("div", { className: "pgn__progress-annotated" }, !!t && /* @__PURE__ */ j.createElement("div", {
		className: "pgn__progress-info",
		style: Cp(e, g),
		ref: l
	}, !f && v(o), /* @__PURE__ */ j.createElement(No, { variant: m }, t), f && v(o)), /* @__PURE__ */ j.createElement(Fa, null, /* @__PURE__ */ j.createElement(Fa, {
		...c,
		now: e,
		className: (0, M.default)(`pgn__progress-bar--${m}`, d > 0 ? "pgn__progress-tick--white" : "pgn__progress-tick--black"),
		srOnly: !0
	}), !!r && /* @__PURE__ */ j.createElement(Fa, {
		now: d,
		className: `pgn__progress-bar--${h}`,
		srOnly: !0
	})), !!r && !!i && /* @__PURE__ */ j.createElement("div", {
		className: "pgn__progress-info",
		style: Cp(r, g),
		ref: u
	}, !p && v(s), /* @__PURE__ */ j.createElement(No, {
		arrowPlacement: "top",
		variant: h
	}, i), p && v(s)));
}
Ap.propTypes = {
	now: W.default.number,
	label: W.default.node,
	variant: W.default.oneOf(Op),
	className: W.default.string,
	threshold: W.default.number,
	thresholdLabel: W.default.node,
	thresholdVariant: W.default.oneOf(Op),
	progressHint: W.default.node,
	thresholdHint: W.default.node
}, Ap.defaultProps = {
	now: void 0,
	label: void 0,
	variant: Ep,
	className: void 0,
	threshold: void 0,
	thresholdLabel: void 0,
	thresholdVariant: Dp,
	progressHint: void 0,
	thresholdHint: void 0
}, kp.Annotated = Ap;
//#endregion
//#region node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file.js
var jp = new Map([
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
function Mp(e, t, n) {
	let r = Np(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
	return typeof r.path != "string" && Pp(r, "path", a), n !== void 0 && Object.defineProperty(r, "handle", {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	}), Pp(r, "relativePath", a), r;
}
function Np(e) {
	let { name: t } = e;
	if (t && t.lastIndexOf(".") !== -1 && !e.type) {
		let n = t.split(".").pop().toLowerCase(), r = jp.get(n);
		r && Object.defineProperty(e, "type", {
			value: r,
			writable: !1,
			configurable: !1,
			enumerable: !0
		});
	}
	return e;
}
function Pp(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	});
}
//#endregion
//#region node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file-selector.js
var Fp = [".DS_Store", "Thumbs.db"];
function Ip(e) {
	return c(this, void 0, void 0, function* () {
		return zp(e) && Lp(e.dataTransfer) ? Hp(e.dataTransfer, e.type) : Rp(e) ? Bp(e) : Array.isArray(e) && e.every((e) => "getFile" in e && typeof e.getFile == "function") ? Vp(e) : [];
	});
}
function Lp(e) {
	return zp(e);
}
function Rp(e) {
	return zp(e) && zp(e.target);
}
function zp(e) {
	return typeof e == "object" && !!e;
}
function Bp(e) {
	return Wp(e.target.files).map((e) => Mp(e));
}
function Vp(e) {
	return c(this, void 0, void 0, function* () {
		return (yield Promise.all(e.map((e) => e.getFile()))).map((e) => Mp(e));
	});
}
function Hp(e, t) {
	return c(this, void 0, void 0, function* () {
		if (e.items) {
			let n = Wp(e.items).filter((e) => e.kind === "file");
			return t === "drop" ? Up(Kp(yield Promise.all(n.map(Gp)))) : n;
		}
		return Up(Wp(e.files).map((e) => Mp(e)));
	});
}
function Up(e) {
	return e.filter((e) => Fp.indexOf(e.name) === -1);
}
function Wp(e) {
	if (e === null) return [];
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		t.push(r);
	}
	return t;
}
function Gp(e) {
	if (typeof e.webkitGetAsEntry != "function") return qp(e);
	let t = e.webkitGetAsEntry();
	return t && t.isDirectory ? Yp(t) : qp(e, t);
}
function Kp(e) {
	return e.reduce((e, t) => [...e, ...Array.isArray(t) ? Kp(t) : [t]], []);
}
function qp(e, t) {
	return c(this, void 0, void 0, function* () {
		if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
			let t = yield e.getAsFileSystemHandle();
			if (t === null) throw Error(`${e} is not a File`);
			if (t !== void 0) {
				let e = yield t.getFile();
				return e.handle = t, Mp(e);
			}
		}
		let n = e.getAsFile();
		if (!n) throw Error(`${e} is not a File`);
		return Mp(n, t?.fullPath ?? void 0);
	});
}
function Jp(e) {
	return c(this, void 0, void 0, function* () {
		return e.isDirectory ? Yp(e) : Xp(e);
	});
}
function Yp(e) {
	let t = e.createReader();
	return new Promise((e, n) => {
		let r = [];
		function i() {
			t.readEntries((t) => c(this, void 0, void 0, function* () {
				if (t.length) {
					let e = Promise.all(t.map(Jp));
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
function Xp(e) {
	return c(this, void 0, void 0, function* () {
		return new Promise((t, n) => {
			e.file((n) => {
				t(Mp(n, e.fullPath));
			}, (e) => {
				n(e);
			});
		});
	});
}
//#endregion
//#region node_modules/.pnpm/react-dropzone@14.4.1_react@18.3.1/node_modules/react-dropzone/dist/es/utils/index.js
var Zp = /* @__PURE__ */ h((/* @__PURE__ */ r(((e) => {
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
function Qp(e) {
	return tm(e) || em(e) || sm(e) || $p();
}
function $p() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function em(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function tm(e) {
	if (Array.isArray(e)) return cm(e);
}
function nm(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function rm(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? nm(Object(n), !0).forEach(function(t) {
			im(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nm(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function im(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function am(e, t) {
	return um(e) || lm(e, t) || sm(e, t) || om();
}
function om() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function sm(e, t) {
	if (e) {
		if (typeof e == "string") return cm(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cm(e, t);
	}
}
function cm(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function lm(e, t) {
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
function um(e) {
	if (Array.isArray(e)) return e;
}
var dm = typeof Zp.default == "function" ? Zp.default : Zp.default.default, fm = "file-invalid-type", pm = "file-too-large", mm = "file-too-small", hm = "too-many-files", gm = {
	FileInvalidType: fm,
	FileTooLarge: pm,
	FileTooSmall: mm,
	TooManyFiles: hm
}, _m = function() {
	var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split(",");
	return {
		code: fm,
		message: `File type must be ${e.length > 1 ? `one of ${e.join(", ")}` : e[0]}`
	};
}, vm = function(e) {
	return {
		code: pm,
		message: `File is larger than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, ym = function(e) {
	return {
		code: mm,
		message: `File is smaller than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, bm = {
	code: hm,
	message: "Too many files"
};
function xm(e) {
	return e.type === "" && typeof e.getAsFile == "function";
}
function Sm(e, t) {
	var n = e.type === "application/x-moz-file" || dm(e, t) || xm(e);
	return [n, n ? null : _m(t)];
}
function Cm(e, t, n) {
	if (wm(e.size)) {
		if (wm(t) && wm(n)) {
			if (e.size > n) return [!1, vm(n)];
			if (e.size < t) return [!1, ym(t)];
		} else if (wm(t) && e.size < t) return [!1, ym(t)];
		else if (wm(n) && e.size > n) return [!1, vm(n)];
	}
	return [!0, null];
}
function wm(e) {
	return e != null;
}
function Tm(e) {
	var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
	return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(e) {
		var t = am(Sm(e, n), 1)[0], a = am(Cm(e, r, i), 1)[0], o = s ? s(e) : null;
		return t && a && !o;
	});
}
function Em(e) {
	return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : e.cancelBubble === void 0 ? !1 : e.cancelBubble;
}
function Dm(e) {
	return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(e) {
		return e === "Files" || e === "application/x-moz-file";
	}) : !!e.target && !!e.target.files;
}
function Om(e) {
	e.preventDefault();
}
function km(e) {
	return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Am(e) {
	return e.indexOf("Edge/") !== -1;
}
function jm() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
	return km(e) || Am(e);
}
function Mm() {
	var e = [...arguments];
	return function(t) {
		var n = [...arguments].slice(1);
		return e.some(function(e) {
			return !Em(t) && e && e.apply(void 0, [t].concat(n)), Em(t);
		});
	};
}
function Nm() {
	return "showOpenFilePicker" in window;
}
function Pm(e) {
	return wm(e) ? [{
		description: "Files",
		accept: Object.entries(e).filter(function(e) {
			var t = am(e, 2), n = t[0], r = t[1], i = !0;
			return Rm(n) || (console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`), i = !1), (!Array.isArray(r) || !r.every(zm)) && (console.warn(`Skipped "${n}" because an invalid file extension was provided.`), i = !1), i;
		}).reduce(function(e, t) {
			var n = am(t, 2), r = n[0], i = n[1];
			return rm(rm({}, e), {}, im({}, r, i));
		}, {})
	}] : e;
}
function Fm(e) {
	if (wm(e)) return Object.entries(e).reduce(function(e, t) {
		var n = am(t, 2), r = n[0], i = n[1];
		return [].concat(Qp(e), [r], Qp(i));
	}, []).filter(function(e) {
		return Rm(e) || zm(e);
	}).join(",");
}
function Im(e) {
	return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Lm(e) {
	return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Rm(e) {
	return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function zm(e) {
	return /^.*\.[\w]+$/.test(e);
}
//#endregion
//#region node_modules/.pnpm/react-dropzone@14.4.1_react@18.3.1/node_modules/react-dropzone/dist/es/index.js
var Bm = ["children"], Vm = ["open"], Hm = [
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
], Um = [
	"refKey",
	"onChange",
	"onClick"
];
function Wm(e) {
	return qm(e) || Km(e) || Xm(e) || Gm();
}
function Gm() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Km(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qm(e) {
	if (Array.isArray(e)) return Zm(e);
}
function Jm(e, t) {
	return $m(e) || Qm(e, t) || Xm(e, t) || Ym();
}
function Ym() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Xm(e, t) {
	if (e) {
		if (typeof e == "string") return Zm(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zm(e, t);
	}
}
function Zm(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Qm(e, t) {
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
function $m(e) {
	if (Array.isArray(e)) return e;
}
function eh(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Z(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? eh(Object(n), !0).forEach(function(t) {
			th(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eh(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function th(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function nh(e, t) {
	if (e == null) return {};
	var n = rh(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function rh(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
var ih = /* @__PURE__ */ (0, j.forwardRef)(function(e, t) {
	var n = e.children, r = sh(nh(e, Bm)), i = r.open, a = nh(r, Vm);
	return (0, j.useImperativeHandle)(t, function() {
		return { open: i };
	}, [i]), /* @__PURE__ */ j.createElement(j.Fragment, null, n(Z(Z({}, a), {}, { open: i })));
});
ih.displayName = "Dropzone";
var ah = {
	disabled: !1,
	getFilesFromEvent: Ip,
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
ih.defaultProps = ah, ih.propTypes = {
	children: W.default.func,
	accept: W.default.objectOf(W.default.arrayOf(W.default.string)),
	multiple: W.default.bool,
	preventDropOnDocument: W.default.bool,
	noClick: W.default.bool,
	noKeyboard: W.default.bool,
	noDrag: W.default.bool,
	noDragEventsBubbling: W.default.bool,
	minSize: W.default.number,
	maxSize: W.default.number,
	maxFiles: W.default.number,
	disabled: W.default.bool,
	getFilesFromEvent: W.default.func,
	onFileDialogCancel: W.default.func,
	onFileDialogOpen: W.default.func,
	useFsAccessApi: W.default.bool,
	autoFocus: W.default.bool,
	onDragEnter: W.default.func,
	onDragLeave: W.default.func,
	onDragOver: W.default.func,
	onDrop: W.default.func,
	onDropAccepted: W.default.func,
	onDropRejected: W.default.func,
	onError: W.default.func,
	validator: W.default.func
};
var oh = {
	isFocused: !1,
	isFileDialogActive: !1,
	isDragActive: !1,
	isDragAccept: !1,
	isDragReject: !1,
	isDragGlobal: !1,
	acceptedFiles: [],
	fileRejections: []
};
function sh() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Z(Z({}, ah), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, c = t.maxFiles, l = t.onDragEnter, u = t.onDragLeave, d = t.onDragOver, f = t.onDrop, p = t.onDropAccepted, m = t.onDropRejected, h = t.onFileDialogCancel, g = t.onFileDialogOpen, _ = t.useFsAccessApi, v = t.autoFocus, y = t.preventDropOnDocument, b = t.noClick, x = t.noKeyboard, S = t.noDrag, C = t.noDragEventsBubbling, w = t.onError, T = t.validator, E = (0, j.useMemo)(function() {
		return Fm(n);
	}, [n]), D = (0, j.useMemo)(function() {
		return Pm(n);
	}, [n]), O = (0, j.useMemo)(function() {
		return typeof g == "function" ? g : lh;
	}, [g]), k = (0, j.useMemo)(function() {
		return typeof h == "function" ? h : lh;
	}, [h]), A = (0, j.useRef)(null), M = (0, j.useRef)(null), N = Jm((0, j.useReducer)(ch, oh), 2), P = N[0], F = N[1], I = P.isFocused, L = P.isFileDialogActive, R = (0, j.useRef)(typeof window < "u" && window.isSecureContext && _ && Nm()), z = function() {
		!R.current && L && setTimeout(function() {
			M.current && (M.current.files.length || (F({ type: "closeDialog" }), k()));
		}, 300);
	};
	(0, j.useEffect)(function() {
		return window.addEventListener("focus", z, !1), function() {
			window.removeEventListener("focus", z, !1);
		};
	}, [
		M,
		L,
		k,
		R
	]);
	var B = (0, j.useRef)([]), V = (0, j.useRef)([]), ee = function(e) {
		A.current && A.current.contains(e.target) || (e.preventDefault(), B.current = []);
	};
	(0, j.useEffect)(function() {
		return y && (document.addEventListener("dragover", Om, !1), document.addEventListener("drop", ee, !1)), function() {
			y && (document.removeEventListener("dragover", Om), document.removeEventListener("drop", ee));
		};
	}, [A, y]), (0, j.useEffect)(function() {
		var e = function(e) {
			V.current = [].concat(Wm(V.current), [e.target]), Dm(e) && F({
				isDragGlobal: !0,
				type: "setDragGlobal"
			});
		}, t = function(e) {
			V.current = V.current.filter(function(t) {
				return t !== e.target && t !== null;
			}), !(V.current.length > 0) && F({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		}, n = function() {
			V.current = [], F({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		}, r = function() {
			V.current = [], F({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		};
		return document.addEventListener("dragenter", e, !1), document.addEventListener("dragleave", t, !1), document.addEventListener("dragend", n, !1), document.addEventListener("drop", r, !1), function() {
			document.removeEventListener("dragenter", e), document.removeEventListener("dragleave", t), document.removeEventListener("dragend", n), document.removeEventListener("drop", r);
		};
	}, [A]), (0, j.useEffect)(function() {
		return !r && v && A.current && A.current.focus(), function() {};
	}, [
		A,
		v,
		r
	]);
	var H = (0, j.useCallback)(function(e) {
		w ? w(e) : console.error(e);
	}, [w]), te = (0, j.useCallback)(function(e) {
		e.preventDefault(), e.persist(), pe(e), B.current = [].concat(Wm(B.current), [e.target]), Dm(e) && Promise.resolve(i(e)).then(function(t) {
			if (!(Em(e) && !C)) {
				var n = t.length, r = n > 0 && Tm({
					files: t,
					accept: E,
					minSize: o,
					maxSize: a,
					multiple: s,
					maxFiles: c,
					validator: T
				});
				F({
					isDragAccept: r,
					isDragReject: n > 0 && !r,
					isDragActive: !0,
					type: "setDraggedFiles"
				}), l && l(e);
			}
		}).catch(function(e) {
			return H(e);
		});
	}, [
		i,
		l,
		H,
		C,
		E,
		o,
		a,
		s,
		c,
		T
	]), ne = (0, j.useCallback)(function(e) {
		e.preventDefault(), e.persist(), pe(e);
		var t = Dm(e);
		if (t && e.dataTransfer) try {
			e.dataTransfer.dropEffect = "copy";
		} catch {}
		return t && d && d(e), !1;
	}, [d, C]), re = (0, j.useCallback)(function(e) {
		e.preventDefault(), e.persist(), pe(e);
		var t = B.current.filter(function(e) {
			return A.current && A.current.contains(e);
		}), n = t.indexOf(e.target);
		n !== -1 && t.splice(n, 1), B.current = t, !(t.length > 0) && (F({
			type: "setDraggedFiles",
			isDragActive: !1,
			isDragAccept: !1,
			isDragReject: !1
		}), Dm(e) && u && u(e));
	}, [
		A,
		u,
		C
	]), ie = (0, j.useCallback)(function(e, t) {
		var n = [], r = [];
		e.forEach(function(e) {
			var t = Jm(Sm(e, E), 2), i = t[0], s = t[1], c = Jm(Cm(e, o, a), 2), l = c[0], u = c[1], d = T ? T(e) : null;
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
				errors: [bm]
			});
		}), n.splice(0)), F({
			acceptedFiles: n,
			fileRejections: r,
			isDragReject: r.length > 0,
			type: "setFiles"
		}), f && f(n, r, t), r.length > 0 && m && m(r, t), n.length > 0 && p && p(n, t);
	}, [
		F,
		s,
		E,
		o,
		a,
		c,
		f,
		p,
		m,
		T
	]), ae = (0, j.useCallback)(function(e) {
		e.preventDefault(), e.persist(), pe(e), B.current = [], Dm(e) && Promise.resolve(i(e)).then(function(t) {
			Em(e) && !C || ie(t, e);
		}).catch(function(e) {
			return H(e);
		}), F({ type: "reset" });
	}, [
		i,
		ie,
		H,
		C
	]), oe = (0, j.useCallback)(function() {
		if (R.current) {
			F({ type: "openDialog" }), O();
			var e = {
				multiple: s,
				types: D
			};
			window.showOpenFilePicker(e).then(function(e) {
				return i(e);
			}).then(function(e) {
				ie(e, null), F({ type: "closeDialog" });
			}).catch(function(e) {
				Im(e) ? (k(e), F({ type: "closeDialog" })) : Lm(e) ? (R.current = !1, M.current ? (M.current.value = null, M.current.click()) : H(/* @__PURE__ */ Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : H(e);
			});
			return;
		}
		M.current && (F({ type: "openDialog" }), O(), M.current.value = null, M.current.click());
	}, [
		F,
		O,
		k,
		_,
		ie,
		H,
		D,
		s
	]), se = (0, j.useCallback)(function(e) {
		!A.current || !A.current.isEqualNode(e.target) || (e.key === " " || e.key === "Enter" || e.keyCode === 32 || e.keyCode === 13) && (e.preventDefault(), oe());
	}, [A, oe]), ce = (0, j.useCallback)(function() {
		F({ type: "focus" });
	}, []), le = (0, j.useCallback)(function() {
		F({ type: "blur" });
	}, []), ue = (0, j.useCallback)(function() {
		b || (jm() ? setTimeout(oe, 0) : oe());
	}, [b, oe]), U = function(e) {
		return r ? null : e;
	}, de = function(e) {
		return x ? null : U(e);
	}, fe = function(e) {
		return S ? null : U(e);
	}, pe = function(e) {
		C && e.stopPropagation();
	}, me = (0, j.useMemo)(function() {
		return function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, i = e.role, a = e.onKeyDown, o = e.onFocus, s = e.onBlur, c = e.onClick, l = e.onDragEnter, u = e.onDragOver, d = e.onDragLeave, f = e.onDrop, p = nh(e, Hm);
			return Z(Z(th({
				onKeyDown: de(Mm(a, se)),
				onFocus: de(Mm(o, ce)),
				onBlur: de(Mm(s, le)),
				onClick: U(Mm(c, ue)),
				onDragEnter: fe(Mm(l, te)),
				onDragOver: fe(Mm(u, ne)),
				onDragLeave: fe(Mm(d, re)),
				onDrop: fe(Mm(f, ae)),
				role: typeof i == "string" && i !== "" ? i : "presentation"
			}, n, A), !r && !x ? { tabIndex: 0 } : {}), p);
		};
	}, [
		A,
		se,
		ce,
		le,
		ue,
		te,
		ne,
		re,
		ae,
		x,
		S,
		r
	]), he = (0, j.useCallback)(function(e) {
		e.stopPropagation();
	}, []), ge = (0, j.useMemo)(function() {
		return function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, r = e.onChange, i = e.onClick, a = nh(e, Um);
			return Z(Z({}, th({
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
				onChange: U(Mm(r, ae)),
				onClick: U(Mm(i, he)),
				tabIndex: -1
			}, n, M)), a);
		};
	}, [
		M,
		n,
		s,
		ae,
		r
	]);
	return Z(Z({}, P), {}, {
		isFocused: I && !r,
		getRootProps: me,
		getInputProps: ge,
		rootRef: A,
		inputRef: M,
		open: U(oe)
	});
}
function ch(e, t) {
	/* istanbul ignore next */
	switch (t.type) {
		case "focus": return Z(Z({}, e), {}, { isFocused: !0 });
		case "blur": return Z(Z({}, e), {}, { isFocused: !1 });
		case "openDialog": return Z(Z({}, oh), {}, { isFileDialogActive: !0 });
		case "closeDialog": return Z(Z({}, e), {}, { isFileDialogActive: !1 });
		case "setDraggedFiles": return Z(Z({}, e), {}, {
			isDragActive: t.isDragActive,
			isDragAccept: t.isDragAccept,
			isDragReject: t.isDragReject
		});
		case "setFiles": return Z(Z({}, e), {}, {
			acceptedFiles: t.acceptedFiles,
			fileRejections: t.fileRejections,
			isDragReject: t.isDragReject
		});
		case "setDragGlobal": return Z(Z({}, e), {}, { isDragGlobal: t.isDragGlobal });
		case "reset": return Z({}, oh);
		default: return e;
	}
}
function lh() {}
//#endregion
//#region node_modules/.pnpm/file-selector@0.10.0/node_modules/file-selector/dist/es5/file.js
var uh = new Map([
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
function dh(e, t) {
	var n = fh(e);
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
function fh(e) {
	var t = e.name;
	if (t && t.lastIndexOf(".") !== -1 && !e.type) {
		var n = t.split(".").pop().toLowerCase(), r = uh.get(n);
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
var ph = [".DS_Store", "Thumbs.db"];
function mh(e) {
	return c(this, void 0, void 0, function() {
		return D(this, function(t) {
			return _h(e) && hh(e.dataTransfer) ? [2, bh(e.dataTransfer, e.type)] : gh(e) ? [2, vh(e)] : Array.isArray(e) && e.every(function(e) {
				return "getFile" in e && typeof e.getFile == "function";
			}) ? [2, yh(e)] : [2, []];
		});
	});
}
function hh(e) {
	return _h(e);
}
function gh(e) {
	return _h(e) && _h(e.target);
}
function _h(e) {
	return typeof e == "object" && !!e;
}
function vh(e) {
	return Sh(e.target.files).map(function(e) {
		return dh(e);
	});
}
function yh(e) {
	return c(this, void 0, void 0, function() {
		var t;
		return D(this, function(n) {
			switch (n.label) {
				case 0: return [4, Promise.all(e.map(function(e) {
					return e.getFile();
				}))];
				case 1: return t = n.sent(), [2, t.map(function(e) {
					return dh(e);
				})];
			}
		});
	});
}
function bh(e, t) {
	return c(this, void 0, void 0, function() {
		var n, r;
		return D(this, function(i) {
			switch (i.label) {
				case 0: return e.items ? (n = Sh(e.items).filter(function(e) {
					return e.kind === "file";
				}), t === "drop" ? [4, Promise.all(n.map(Ch))] : [2, n]) : [3, 2];
				case 1: return r = i.sent(), [2, xh(wh(r))];
				case 2: return [2, xh(Sh(e.files).map(function(e) {
					return dh(e);
				}))];
			}
		});
	});
}
function xh(e) {
	return e.filter(function(e) {
		return ph.indexOf(e.name) === -1;
	});
}
function Sh(e) {
	if (e === null) return [];
	for (var t = [], n = 0; n < e.length; n++) {
		var r = e[n];
		t.push(r);
	}
	return t;
}
function Ch(e) {
	if (typeof e.webkitGetAsEntry != "function") return Th(e);
	var t = e.webkitGetAsEntry();
	return t && t.isDirectory ? Dh(t) : Th(e);
}
function wh(e) {
	return e.reduce(function(e, t) {
		return E(E([], i(e), !1), i(Array.isArray(t) ? wh(t) : [t]), !1);
	}, []);
}
function Th(e) {
	var t = e.getAsFile();
	if (!t) return Promise.reject(`${e} is not a File`);
	var n = dh(t);
	return Promise.resolve(n);
}
function Eh(e) {
	return c(this, void 0, void 0, function() {
		return D(this, function(t) {
			return [2, e.isDirectory ? Dh(e) : Oh(e)];
		});
	});
}
function Dh(e) {
	var t = e.createReader();
	return new Promise(function(e, n) {
		var r = [];
		function i() {
			var a = this;
			t.readEntries(function(t) {
				return c(a, void 0, void 0, function() {
					var a, o, s;
					return D(this, function(c) {
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
							case 5: s = Promise.all(t.map(Eh)), r.push(s), i(), c.label = 6;
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
function Oh(e) {
	return c(this, void 0, void 0, function() {
		return D(this, function(t) {
			return [2, new Promise(function(t, n) {
				e.file(function(n) {
					t(dh(n, e.fullPath));
				}, function(e) {
					n(e);
				});
			})];
		});
	});
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/DragError.js
function kh({ message: e }) {
	return /* @__PURE__ */ j.createElement("div", { className: "pgn__dropzone-error-wrapper" }, e);
}
kh.propTypes = { message: W.default.oneOfType([W.default.string, W.default.element]).isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/GenericError.js
function Ah({ errorMsgs: e, ...t }) {
	return /* @__PURE__ */ j.createElement(ko, {
		variant: "danger",
		icon: Ho,
		className: "pgn__dropzone-generic-alert",
		...t
	}, e.map((e) => /* @__PURE__ */ j.createElement("span", { key: e }, e)));
}
Ah.propTypes = { errorMsgs: W.default.arrayOf(W.default.string).isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/UploadProgress.js
function jh({ percent: e, variant: t, name: n, onCancel: r }) {
	return t === "spinner" ? /* @__PURE__ */ j.createElement(Dc, {
		animation: "border",
		"aria-live": "polite",
		screenReaderText: `Uploading ${n}, ${e}% done.`,
		"data-testid": "upload-spinner"
	}) : /* @__PURE__ */ j.createElement("div", { className: "w-50" }, /* @__PURE__ */ j.createElement("p", { className: "text-muted" }, /* @__PURE__ */ j.createElement(o, {
		id: "pgn.Dropzone.UploadProgress.uploadLabel",
		defaultMessage: "Uploading {filename}.",
		description: "A text that is shown near a progress bar during file upload in Dropzone component.",
		values: { filename: n }
	})), /* @__PURE__ */ j.createElement("div", { className: "d-flex justify-content-between align-items-center w-100" }, /* @__PURE__ */ j.createElement(kp, {
		now: e,
		label: `${e}%`,
		variant: "success",
		className: "flex-grow-1",
		"data-testid": "upload-progress-bar"
	}), /* @__PURE__ */ j.createElement(C, {
		variant: "tertiary",
		className: "ml-3",
		onClick: r
	}, /* @__PURE__ */ j.createElement(o, {
		id: "pgn.Dropzone.UploadProgress.cancelLabel",
		defaultMessage: "Cancel",
		description: "Label of a cancel button that is shown during file upload in Dropzone component."
	}))));
}
jh.propTypes = {
	variant: W.default.oneOf(["spinner", "bar"]).isRequired,
	percent: W.default.number.isRequired,
	name: W.default.string.isRequired,
	onCancel: W.default.func.isRequired
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/utils.js
var Mh = (e) => Object.keys(e).length > 1 ? !0 : Object.keys(e).length === 0 ? !1 : Object.values(e)[0].length > 1, Nh = (e) => Object.entries(e).reduce((e, t) => {
	let [n, r] = t, i;
	return i = r.length > 0 ? `${r.join(", ").replaceAll(".", "").toUpperCase()}, ` : n.endsWith("/*") ? `${n.slice(0, -2)}, ` : `${n.split("/").pop().toUpperCase()}, `, e + i;
}, "").slice(0, -2), Ph = (e) => {
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
}, Fh = f({
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
function Ih({ accept: e, minSize: t, maxSize: n }) {
	let r = T();
	return /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement("div", { className: "pgn__dropzone__upload-icon-wrapper" }, /* @__PURE__ */ j.createElement(v, {
		src: Vo,
		className: "pgn__dropzone__upload-icon"
	})), /* @__PURE__ */ j.createElement("p", null, /* @__PURE__ */ j.createElement(o, {
		id: "pgn.Dropzone.DefaultContent.label",
		description: "A text that appears as a label for input of Dropzone component.",
		defaultMessage: "Drag and drop your file here or click to upload."
	})), [
		e,
		t,
		n
	].some((e) => e) && /* @__PURE__ */ j.createElement("p", { className: "pgn__dropzone__upload-restriction-message" }, (() => {
		let i, a;
		if (e) {
			let t = Nh(e), n = t.lastIndexOf(",");
			i = r.formatMessage(Fh.fileTypeRestriction, {
				count: n === -1 ? 1 : 2,
				firstPart: n === -1 ? t : t.slice(0, n),
				secondPart: n !== -1 && t.slice(n + 1)
			});
		}
		return t && n && Number.isFinite(n) ? a = r.formatMessage(Fh.fileSizeBetween, {
			sizeMin: Ph(t),
			sizeMax: Ph(n)
		}) : n && Number.isFinite(n) ? a = r.formatMessage(Fh.fileSizeMax, { sizeMax: Ph(n) }) : t && (a = r.formatMessage(Fh.fileSizeMin, { sizeMin: Ph(t) })), i && a ? `${i} (${a})` : i || a;
	})()));
}
Ih.propTypes = {
	accept: W.default.objectOf(W.default.arrayOf(W.default.string)),
	maxSize: W.default.number,
	minSize: W.default.number
}, Ih.defaultProps = {
	accept: void 0,
	maxSize: void 0,
	minSize: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropzone/index.js
function Lh({ className: e, accept: t, minSize: n, maxSize: r, validator: i, errorMessages: a, progressVariant: o, inputComponent: s, onProcessUpload: c, onUploadProgress: l, onUploadCancel: u, ...d }) {
	let [f, p] = (0, j.useState)(!1), [m, h] = (0, j.useState)([]), [g, _] = (0, j.useState)(0), [v, y] = (0, j.useState)(void 0), [b, x] = (0, j.useState)(void 0), S = T(), { uploadError: C, invalidSizeLess: w, invalidSizeMore: E, invalidType: D, multipleDragged: O } = a, k = async (e) => {
		m && h([]);
		let t = await mh(e);
		t && t.length > 1 && p(!0);
	}, A = () => {
		f && p(!1);
	}, N = (e) => {
		f ? p(!1) : h(e[0].errors.map((e) => {
			switch (e.code) {
				case gm.FileTooLarge: return E || S.formatMessage(Fh.invalidSizeMore, { size: Ph(r) });
				case gm.FileTooSmall: return w || S.formatMessage(Fh.invalidSizeLess, { size: Ph(n) });
				case gm.FileInvalidType: return D || S.formatMessage(Fh.invalidType, {
					count: Mh(t) ? 2 : 1,
					typeString: Nh(t)
				});
				default: return S.formatMessage(Fh.unexpectedValidationError);
			}
		}));
	}, P = (e) => {
		let t = Math.round(e.loaded * 100 / e.total);
		_(t), l(t, e);
	}, F = (e) => {
		e.code !== "ERR_CANCELED" && (_(0), h([C || S.formatMessage(Fh.uploadError)]));
	}, I = (e) => {
		let t = new AbortController();
		x(t), c({
			fileData: e,
			requestConfig: {
				onUploadProgress: P,
				signal: t.signal
			},
			handleError: F
		});
	}, L = async (e) => {
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
		n.append("file", t), y(t.name), I(n);
	}, R = () => {
		b.abort(), _(0), u();
	}, { getRootProps: z, getInputProps: B, isDragActive: V, isDragReject: ee } = sh({
		multiple: !1,
		maxFiles: 1,
		maxSize: r,
		minSize: n,
		onDragLeave: A,
		onDragEnter: k,
		onDropRejected: N,
		onDropAccepted: L,
		accept: t,
		disabled: g && g !== 100
	}), H = () => f ? /* @__PURE__ */ j.createElement(kh, { message: O || S.formatMessage(Fh.multipleDragged) }) : m.length > 0 ? /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement(Ah, { errorMsgs: m }), s || /* @__PURE__ */ j.createElement(Ih, {
		minSize: n,
		maxSize: r,
		accept: t
	})) : g && g !== 100 ? /* @__PURE__ */ j.createElement(jh, {
		variant: o,
		percent: g,
		name: v,
		onCancel: R
	}) : s || /* @__PURE__ */ j.createElement(Ih, {
		minSize: n,
		maxSize: r,
		accept: t
	});
	return /* @__PURE__ */ j.createElement("div", {
		"data-testid": "dropzone-container",
		...z({ className: (0, M.default)("pgn__dropzone", e, {
			"pgn__dropzone-validation-error": f || m.length > 0 || ee,
			"pgn__dropzone-active": V && !ee
		}) }),
		...d
	}, /* @__PURE__ */ j.createElement("input", { ...B() }), /* @__PURE__ */ j.createElement("div", { className: "d-flex flex-column justify-content-around align-items-center w-100" }, H()));
}
Lh.defaultProps = {
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
}, Lh.propTypes = {
	className: W.default.string,
	accept: W.default.objectOf(W.default.arrayOf(W.default.string)),
	maxSize: W.default.number,
	minSize: W.default.number,
	onUploadProgress: W.default.func,
	onUploadCancel: W.default.func,
	onProcessUpload: W.default.func.isRequired,
	errorMessages: W.default.shape({
		invalidType: W.default.oneOfType([W.default.string, W.default.element]),
		invalidSizeLess: W.default.oneOfType([W.default.string, W.default.element]),
		invalidSizeMore: W.default.oneOfType([W.default.string, W.default.element]),
		multipleDragged: W.default.oneOfType([W.default.string, W.default.element]),
		uploadError: W.default.oneOfType([W.default.string, W.default.element])
	}),
	progressVariant: W.default.oneOf(["spinner", "bar"]),
	validator: W.default.func,
	inputComponent: W.default.oneOfType([W.default.elementType, W.default.node])
};
//#endregion
//#region node_modules/.pnpm/react-colorful@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-colorful/dist/index.mjs
function Rh() {
	return (Rh = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}).apply(this, arguments);
}
function zh(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
function Bh(e) {
	var t = (0, j.useRef)(e), n = (0, j.useRef)(function(e) {
		t.current && t.current(e);
	});
	return t.current = e, n.current;
}
var Vh = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Hh = function(e) {
	return "touches" in e;
}, Uh = function(e) {
	return e && e.ownerDocument.defaultView || self;
}, Wh = function(e, t, n) {
	var r = e.getBoundingClientRect(), i = Hh(t) ? function(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
		return e[0];
	}(t.touches, n) : t;
	return {
		left: Vh((i.pageX - (r.left + Uh(e).pageXOffset)) / r.width),
		top: Vh((i.pageY - (r.top + Uh(e).pageYOffset)) / r.height)
	};
}, Gh = function(e) {
	!Hh(e) && e.preventDefault();
}, Kh = j.memo(function(e) {
	var t = e.onMove, n = e.onKey, r = zh(e, ["onMove", "onKey"]), i = (0, j.useRef)(null), a = Bh(t), o = Bh(n), s = (0, j.useRef)(null), c = (0, j.useRef)(!1), l = (0, j.useMemo)(function() {
		var e = function(e) {
			Gh(e), (Hh(e) ? e.touches.length > 0 : e.buttons > 0) && i.current ? a(Wh(i.current, e, s.current)) : n(!1);
		}, t = function() {
			return n(!1);
		};
		function n(n) {
			var r = c.current, a = Uh(i.current), o = n ? a.addEventListener : a.removeEventListener;
			o(r ? "touchmove" : "mousemove", e), o(r ? "touchend" : "mouseup", t);
		}
		return [
			function(e) {
				var t = e.nativeEvent, r = i.current;
				if (r && (Gh(t), !function(e, t) {
					return t && !Hh(e);
				}(t, c.current) && r)) {
					if (Hh(t)) {
						c.current = !0;
						var o = t.changedTouches || [];
						o.length && (s.current = o[0].identifier);
					}
					r.focus(), a(Wh(r, t, s.current)), n(!0);
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
	return (0, j.useEffect)(function() {
		return f;
	}, [f]), j.createElement("div", Rh({}, r, {
		onTouchStart: u,
		onMouseDown: u,
		className: "react-colorful__interactive",
		ref: i,
		onKeyDown: d,
		tabIndex: 0,
		role: "slider"
	}));
}), qh = function(e) {
	return e.filter(Boolean).join(" ");
}, Jh = function(e) {
	var t = e.color, n = e.left, r = e.top, i = r === void 0 ? .5 : r, a = qh(["react-colorful__pointer", e.className]);
	return j.createElement("div", {
		className: a,
		style: {
			top: 100 * i + "%",
			left: 100 * n + "%"
		}
	}, j.createElement("div", {
		className: "react-colorful__pointer-fill",
		style: { backgroundColor: t }
	}));
}, Q = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 10 ** t), Math.round(n * e) / n;
};
360 / (2 * Math.PI);
var Yh = function(e) {
	return rg(Xh(e));
}, Xh = function(e) {
	return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? {
		r: parseInt(e[0] + e[0], 16),
		g: parseInt(e[1] + e[1], 16),
		b: parseInt(e[2] + e[2], 16),
		a: e.length === 4 ? Q(parseInt(e[3] + e[3], 16) / 255, 2) : 1
	} : {
		r: parseInt(e.substring(0, 2), 16),
		g: parseInt(e.substring(2, 4), 16),
		b: parseInt(e.substring(4, 6), 16),
		a: e.length === 8 ? Q(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
	};
}, Zh = function(e) {
	return ng(eg(e));
}, Qh = function(e) {
	var t = e.s, n = e.v, r = e.a, i = (200 - t) * n / 100;
	return {
		h: Q(e.h),
		s: Q(i > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
		l: Q(i / 2),
		a: Q(r, 2)
	};
}, $h = function(e) {
	var t = Qh(e);
	return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, eg = function(e) {
	var t = e.h, n = e.s, r = e.v, i = e.a;
	t = t / 360 * 6, n /= 100, r /= 100;
	var a = Math.floor(t), o = r * (1 - n), s = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
	return {
		r: Q(255 * [
			r,
			s,
			o,
			o,
			c,
			r
		][l]),
		g: Q(255 * [
			c,
			r,
			r,
			s,
			o,
			o
		][l]),
		b: Q(255 * [
			o,
			o,
			c,
			r,
			r,
			s
		][l]),
		a: Q(i, 2)
	};
}, tg = function(e) {
	var t = e.toString(16);
	return t.length < 2 ? "0" + t : t;
}, ng = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = i < 1 ? tg(Q(255 * i)) : "";
	return "#" + tg(t) + tg(n) + tg(r) + a;
}, rg = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = Math.max(t, n, r), o = a - Math.min(t, n, r), s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
	return {
		h: Q(60 * (s < 0 ? s + 6 : s)),
		s: Q(a ? o / a * 100 : 0),
		v: Q(a / 255 * 100),
		a: i
	};
}, ig = j.memo(function(e) {
	var t = e.hue, n = e.onChange, r = qh(["react-colorful__hue", e.className]);
	return j.createElement("div", { className: r }, j.createElement(Kh, {
		onMove: function(e) {
			n({ h: 360 * e.left });
		},
		onKey: function(e) {
			n({ h: Vh(t + 360 * e.left, 0, 360) });
		},
		"aria-label": "Hue",
		"aria-valuenow": Q(t),
		"aria-valuemax": "360",
		"aria-valuemin": "0"
	}, j.createElement(Jh, {
		className: "react-colorful__hue-pointer",
		left: t / 360,
		color: $h({
			h: t,
			s: 100,
			v: 100,
			a: 1
		})
	})));
}), ag = j.memo(function(e) {
	var t = e.hsva, n = e.onChange, r = { backgroundColor: $h({
		h: t.h,
		s: 100,
		v: 100,
		a: 1
	}) };
	return j.createElement("div", {
		className: "react-colorful__saturation",
		style: r
	}, j.createElement(Kh, {
		onMove: function(e) {
			n({
				s: 100 * e.left,
				v: 100 - 100 * e.top
			});
		},
		onKey: function(e) {
			n({
				s: Vh(t.s + 100 * e.left, 0, 100),
				v: Vh(t.v - 100 * e.top, 0, 100)
			});
		},
		"aria-label": "Color",
		"aria-valuetext": "Saturation " + Q(t.s) + "%, Brightness " + Q(t.v) + "%"
	}, j.createElement(Jh, {
		className: "react-colorful__saturation-pointer",
		top: 1 - t.v / 100,
		left: t.s / 100,
		color: $h(t)
	})));
}), og = function(e, t) {
	if (e === t) return !0;
	for (var n in e) if (e[n] !== t[n]) return !1;
	return !0;
}, sg = function(e, t) {
	return e.toLowerCase() === t.toLowerCase() || og(Xh(e), Xh(t));
};
function cg(e, t, n) {
	var r = Bh(n), i = (0, j.useState)(function() {
		return e.toHsva(t);
	}), a = i[0], o = i[1], s = (0, j.useRef)({
		color: t,
		hsva: a
	});
	return (0, j.useEffect)(function() {
		if (!e.equal(t, s.current.color)) {
			var n = e.toHsva(t);
			s.current = {
				hsva: n,
				color: t
			}, o(n);
		}
	}, [t, e]), (0, j.useEffect)(function() {
		var t;
		og(a, s.current.hsva) || e.equal(t = e.fromHsva(a), s.current.color) || (s.current = {
			hsva: a,
			color: t
		}, r(t));
	}, [
		a,
		e,
		r
	]), [a, (0, j.useCallback)(function(e) {
		o(function(t) {
			return Object.assign({}, t, e);
		});
	}, [])];
}
var lg, ug = typeof window < "u" ? j.useLayoutEffect : j.useEffect, dg = function() {
	return lg || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0);
}, fg = /* @__PURE__ */ new Map(), pg = function(e) {
	ug(function() {
		var t = e.current ? e.current.ownerDocument : document;
		if (t !== void 0 && !fg.has(t)) {
			var n = t.createElement("style");
			n.innerHTML = ".react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill-opacity=\".05\"><path d=\"M8 0h8v8H8zM0 8h8v8H0z\"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}", fg.set(t, n);
			var r = dg();
			r && n.setAttribute("nonce", r), t.head.appendChild(n);
		}
	}, []);
}, mg = function(e) {
	var t = e.className, n = e.colorModel, r = e.color, i = r === void 0 ? n.defaultColor : r, a = e.onChange, o = zh(e, [
		"className",
		"colorModel",
		"color",
		"onChange"
	]), s = (0, j.useRef)(null);
	pg(s);
	var c = cg(n, i, a), l = c[0], u = c[1], d = qh(["react-colorful", t]);
	return j.createElement("div", Rh({}, o, {
		ref: s,
		className: d
	}), j.createElement(ag, {
		hsva: l,
		onChange: u
	}), j.createElement(ig, {
		hue: l.h,
		onChange: u,
		className: "react-colorful__last-control"
	}));
}, hg = {
	defaultColor: "000",
	toHsva: Yh,
	fromHsva: function(e) {
		return Zh({
			h: e.h,
			s: e.s,
			v: e.v,
			a: 1
		});
	},
	equal: sg
}, gg = function(e) {
	return j.createElement(mg, Rh({}, e, { colorModel: hg }));
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ColorPicker/index.js
function _g({ color: e, setColor: t, className: n, size: r }) {
	let [i, a, o] = ip(!1), [s, c] = j.useState(null), l = (e) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e), u = (e) => e.startsWith("#") ? e.slice(0, 7) : `#${e}`.slice(0, 7), [d, f] = j.useState(() => e === "" || l(u(e))), [p, m] = j.useState(() => e === "" ? "" : u(e)), [h, g] = j.useState(() => {
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
	return /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement("span", { className: "d-flex" }, /* @__PURE__ */ j.createElement(Xo, {
		placement: "top",
		overlay: /* @__PURE__ */ j.createElement($o, { id: "color-picker-tooltip" }, "Color picker")
	}, /* @__PURE__ */ j.createElement(C, {
		ref: c,
		className: (0, M.default)(n, "pgn__color-picker", `pgn__color-picker-${r}`),
		style: { ...e && d ? { background: `${e}` } : {} },
		onClick: a
	}))), /* @__PURE__ */ j.createElement(hp, {
		positionRef: s,
		isOpen: i,
		style: { background: "black" },
		onClose: o
	}, /* @__PURE__ */ j.createElement("div", {
		className: "pgn__color-modal rounded shadow",
		style: { textAlign: "start" }
	}, /* @__PURE__ */ j.createElement(gg, {
		color: h,
		onChange: _
	}), /* @__PURE__ */ j.createElement(X.Group, {
		className: "pgn__hex-form",
		size: "sm"
	}, /* @__PURE__ */ j.createElement("div", null, /* @__PURE__ */ j.createElement(X.Label, { className: "pgn__hex-label" }, "Hex"), /* @__PURE__ */ j.createElement(X.Control, {
		className: "pgn__hex-field",
		isInvalid: !d,
		value: p,
		onChange: (e) => _(e.target.value),
		"data-testid": "hex-input",
		spellCheck: "false"
	})), !d && /* @__PURE__ */ j.createElement(X.Control.Feedback, {
		className: "pgn__color-error",
		type: "invalid"
	}, "Colors must be in hexadecimal format.")))));
}
_g.defaultProps = {
	color: "",
	className: void 0,
	size: "md"
}, _g.propTypes = {
	color: W.default.string,
	setColor: W.default.func.isRequired,
	className: W.default.string,
	size: W.default.oneOf(["sm", "md"])
};
//#endregion
//#region src/shared/components/constants.ts
var vg = [
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
function yg({ title: e, onTitleChange: t, activeTab: n, tabs: r = vg }) {
	let [i, a] = (0, j.useState)(!1);
	return /* @__PURE__ */ (0, k.jsx)(np.Header, {
		className: "shadow-sm studio-header",
		children: /* @__PURE__ */ (0, k.jsxs)("div", {
			className: "d-flex flex-row justify-content-between",
			children: [
				/* @__PURE__ */ (0, k.jsx)(N, { children: i ? /* @__PURE__ */ (0, k.jsx)(X.Control, {
					type: "text",
					name: "studio-title",
					"aria-label": "Display name",
					value: e,
					onChange: (e) => t(e.target.value),
					onBlur: () => a(!1),
					onKeyDown: (e) => {
						(e.key === "Enter" || e.key === "Escape") && (a(!1), e.preventDefault());
					}
				}) : /* @__PURE__ */ (0, k.jsx)("h3", {
					className: "h3 col pl-0",
					children: /* @__PURE__ */ (0, k.jsxs)("div", {
						className: "d-flex flex-row align-items-center mt-1",
						children: [
							"Editing: ",
							e || "<Untitled>",
							/* @__PURE__ */ (0, k.jsx)(es, {
								alt: "Edit display name",
								className: "studio-header-title-edit",
								size: "sm",
								src: Bo,
								onClick: () => a(!0)
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, k.jsx)(N.Spacer, {}),
				/* @__PURE__ */ (0, k.jsx)(gp, {
					role: "tablist",
					variant: "button-group",
					activeKey: n,
					className: "studio-header-tabs-nav pgn__tabs",
					"aria-label": "Editor Sections",
					children: r.map(({ key: e, label: t }) => /* @__PURE__ */ (0, k.jsx)(gp.Link, {
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
//#region src/lib/context.ts
var bg = (0, j.createContext)(null), xg = () => (0, j.useContext)(bg);
//#endregion
//#region src/shared/components/JsonImporter.tsx
function Sg({ error: e }) {
	return /* @__PURE__ */ (0, k.jsx)("ul", {
		className: "mb-0 pl-3",
		children: Object.entries(e).map(([e, t]) => /* @__PURE__ */ (0, k.jsxs)("li", { children: [e, /* @__PURE__ */ (0, k.jsx)("ul", { children: t.map((e) => /* @__PURE__ */ (0, k.jsx)("li", { children: /* @__PURE__ */ (0, k.jsx)("code", { children: e }) }, e)) })] }, e))
	});
}
function Cg({ liveData: e }) {
	let [t, n] = (0, j.useState)(null), { runtime: r, element: i } = (0, j.useContext)(u);
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
	return /* @__PURE__ */ (0, k.jsxs)("div", {
		className: "p-3",
		children: [
			/* @__PURE__ */ (0, k.jsxs)(X.Group, { children: [/* @__PURE__ */ (0, k.jsx)(X.Label, { children: "Update Component using JSON file" }), /* @__PURE__ */ (0, k.jsx)(Lh, {
				onProcessUpload: o,
				accept: { "application/json": [".json"] },
				validator: a
			})] }),
			t && /* @__PURE__ */ (0, k.jsxs)(ko, {
				variant: "danger",
				className: "mt-3",
				children: [/* @__PURE__ */ (0, k.jsx)(ko.Heading, { children: "JSON validation failed!" }), typeof t == "string" ? /* @__PURE__ */ (0, k.jsx)("p", {
					className: "mb-0",
					children: t
				}) : /* @__PURE__ */ (0, k.jsx)(Sg, { error: t })]
			}),
			/* @__PURE__ */ (0, k.jsxs)("div", {
				className: "mt-3",
				children: [
					/* @__PURE__ */ (0, k.jsx)("h4", { children: "JSON Templates" }),
					/* @__PURE__ */ (0, k.jsxs)("p", { children: [
						/* @__PURE__ */ (0, k.jsx)(C, {
							variant: "secondary",
							className: "m-2",
							onClick: () => s(e),
							children: "Download component data"
						}),
						/* @__PURE__ */ (0, k.jsx)("br", {}),
						/* @__PURE__ */ (0, k.jsx)("small", { children: "The component data files contain the data of the current component without any schema information." })
					] }),
					/* @__PURE__ */ (0, k.jsxs)("p", { children: [
						/* @__PURE__ */ (0, k.jsx)("a", {
							className: "m-2 btn btn-secondary",
							href: r.handlerUrl(i, "json_schema"),
							children: "Download Schema"
						}),
						/* @__PURE__ */ (0, k.jsx)("br", {}),
						/* @__PURE__ */ (0, k.jsx)("small", { children: "Schema files are useful for validating the JSON using external systems." })
					] })
				]
			})
		]
	});
}
//#endregion
//#region src/keypoint-block/studio-ui/studio-ui.tsx
function wg({ data: e }) {
	let { runtime: t } = (0, j.useContext)(u), n = _("studio_save"), [r, i] = (0, j.useState)(e.header || ""), [a, o] = (0, j.useState)(e.keypoints || []), [s, c] = (0, j.useState)(e.summary || ""), [l, d] = (0, j.useState)(e.button_text || ""), [f, p] = (0, j.useState)(e.button_link || ""), [m, h] = (0, j.useState)(e.background_color || ""), g = () => {
		o([...a, {
			keypoint: "",
			description: ""
		}]);
	}, v = (e, t) => {
		let n = [...a];
		n[e] = {
			...n[e],
			...t
		}, o(n);
	}, y = (e) => {
		o(a.filter((t, n) => n !== e));
	}, x = () => {
		b({
			saveUrl: n,
			data: {
				header: r,
				keypoints: a,
				summary: s,
				button_text: l,
				button_link: f,
				background_color: m
			},
			runtime: t,
			errorMessage: "Failed to save keypoint configuration"
		});
	}, S = vg[0].key, [w, T] = (0, j.useState)(S), E = !!xg()?.enable_json_editing;
	return /* @__PURE__ */ (0, k.jsx)(Ra, {
		id: "keypoint-block-studio-tabs",
		activeKey: w,
		onSelect: (e) => T(e || S),
		transition: !1,
		children: /* @__PURE__ */ (0, k.jsxs)("div", {
			className: "xblock-keypoints-studio",
			children: [
				/* @__PURE__ */ (0, k.jsx)(yg, {
					activeTab: w,
					title: r,
					onTitleChange: i,
					tabs: E ? vg : vg.filter((e) => e.key !== "json")
				}),
				/* @__PURE__ */ (0, k.jsx)(np.Body, { children: /* @__PURE__ */ (0, k.jsxs)(Ba, { children: [
					/* @__PURE__ */ (0, k.jsxs)(Wa, {
						eventKey: "content",
						children: [
							/* @__PURE__ */ (0, k.jsxs)(N, {
								className: "keypoints-studio-row",
								children: [
									/* @__PURE__ */ (0, k.jsx)("h4", {
										className: "keypoints-studio-section-title",
										children: "Key Terms"
									}),
									/* @__PURE__ */ (0, k.jsx)(N.Spacer, {}),
									/* @__PURE__ */ (0, k.jsx)(C, {
										iconBefore: Po,
										onClick: g,
										children: "Add Key Term"
									})
								]
							}),
							a.length === 0 && /* @__PURE__ */ (0, k.jsx)("p", {
								className: "keypoints-studio-empty",
								children: "No key terms added yet. Click \"Add Key Term\" to get started."
							}),
							a.map((e, t) => /* @__PURE__ */ (0, k.jsxs)("div", {
								className: "keypoint-entry",
								children: [
									/* @__PURE__ */ (0, k.jsxs)(N, {
										className: "keypoints-studio-entry-header",
										children: [
											/* @__PURE__ */ (0, k.jsxs)("span", {
												className: "keypoints-studio-entry-title",
												children: ["Term ", t + 1]
											}),
											/* @__PURE__ */ (0, k.jsx)(N.Spacer, {}),
											/* @__PURE__ */ (0, k.jsx)(C, {
												size: "sm",
												variant: "outline-danger",
												iconBefore: zo,
												onClick: () => y(t),
												children: "Remove"
											})
										]
									}),
									/* @__PURE__ */ (0, k.jsxs)(X.Group, {
										className: "keypoints-studio-field",
										children: [/* @__PURE__ */ (0, k.jsx)(X.Label, { children: "Label" }), /* @__PURE__ */ (0, k.jsx)(X.Control, {
											value: e.keypoint,
											onChange: (e) => v(t, { keypoint: e.target.value }),
											placeholder: "e.g. Fluid balance"
										})]
									}),
									/* @__PURE__ */ (0, k.jsxs)(X.Group, {
										className: "keypoints-studio-field keypoints-studio-field--last",
										children: [/* @__PURE__ */ (0, k.jsx)(X.Label, { children: "Description" }), /* @__PURE__ */ (0, k.jsx)(X.Control, {
											as: "textarea",
											rows: 3,
											value: e.description,
											onChange: (e) => v(t, { description: e.target.value }),
											placeholder: "e.g. The regulation of fluids within the body..."
										})]
									})
								]
							}, `keypoint-${t}`)),
							/* @__PURE__ */ (0, k.jsxs)(X.Group, {
								className: "mt-3",
								children: [/* @__PURE__ */ (0, k.jsx)(X.Label, {
									className: "h3",
									children: "Summary"
								}), /* @__PURE__ */ (0, k.jsx)(X.Control, {
									as: "textarea",
									rows: 4,
									value: s,
									onChange: (e) => c(e.target.value),
									placeholder: "e.g. These concepts form a connected sequence..."
								})]
							}),
							/* @__PURE__ */ (0, k.jsxs)("div", { children: [
								/* @__PURE__ */ (0, k.jsx)("h4", {
									className: "keypoints-studio-section-title",
									children: "Action Button"
								}),
								/* @__PURE__ */ (0, k.jsxs)(X.Group, {
									className: "keypoints-studio-field",
									children: [/* @__PURE__ */ (0, k.jsx)(X.Label, { children: "Button Text" }), /* @__PURE__ */ (0, k.jsx)(X.Control, {
										value: l,
										onChange: (e) => d(e.target.value),
										placeholder: "e.g. Glossary"
									})]
								}),
								/* @__PURE__ */ (0, k.jsxs)(X.Group, {
									className: "keypoints-studio-field",
									children: [/* @__PURE__ */ (0, k.jsx)(X.Label, { children: "Button Link" }), /* @__PURE__ */ (0, k.jsx)(X.Control, {
										value: f,
										onChange: (e) => p(e.target.value),
										placeholder: "e.g. https://example.com/glossary"
									})]
								})
							] })
						]
					}),
					/* @__PURE__ */ (0, k.jsx)(Wa, {
						eventKey: "settings",
						children: /* @__PURE__ */ (0, k.jsxs)(X.Group, {
							className: "keypoints-studio-field",
							children: [/* @__PURE__ */ (0, k.jsx)(X.Label, { children: "Background Color" }), /* @__PURE__ */ (0, k.jsx)(_g, {
								color: m,
								setColor: h
							})]
						})
					}),
					E && /* @__PURE__ */ (0, k.jsx)(Wa, {
						eventKey: "json",
						children: /* @__PURE__ */ (0, k.jsx)(Cg, { liveData: {
							header: r,
							keypoints: a,
							summary: s,
							button_text: l,
							button_link: f,
							background_color: m
						} })
					})
				] }) }),
				/* @__PURE__ */ (0, k.jsx)(np.Footer, {
					className: "border-top",
					style: { zIndex: "3" },
					children: /* @__PURE__ */ (0, k.jsxs)(rp, {
						direction: "horizontal",
						gap: 4,
						children: [/* @__PURE__ */ (0, k.jsx)(C, {
							variant: "tertiary",
							onClick: () => t.notify("cancel", {}),
							children: "Cancel"
						}), /* @__PURE__ */ (0, k.jsx)(C, {
							variant: "primary",
							onClick: x,
							children: "Save"
						})]
					})
				})
			]
		})
	});
}
//#endregion
//#region src/keypoint-block/studio-ui/style.scss?inline
var Tg = ".pgn__modal-header.studio-header{padding:calc(var(--pgn-spacing-modal-inner-padding-base) / 2) var(--pgn-spacing-modal-header-padding-base-x);z-index:1}.studio-header-title{align-items:center;gap:var(--pgn-spacing-spacer-2,8px);display:flex}.studio-header-tabs-nav{flex-wrap:nowrap;padding-right:64px}.studio-header-tabs-nav .nav-link{appearance:none;font-family:inherit;font-size:inherit;line-height:inherit;cursor:pointer;background-color:#0000}.wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.xblock-keypoints-studio{flex-direction:column;justify-content:space-between;min-height:435px;display:flex}.xblock-keypoints-studio .keypoints-studio-stack{gap:var(--pgn-exemplar-xblock-studio-section-gap,24px);padding:var(--pgn-exemplar-xblock-studio-stack-padding,16px)}.xblock-keypoints-studio .keypoints-studio-section-title{margin:0 0 var(--pgn-exemplar-xblock-studio-field-gap,16px);font-weight:700}.xblock-keypoints-studio .keypoints-studio-row,.xblock-keypoints-studio .keypoints-studio-entry-header{margin-bottom:var(--pgn-exemplar-xblock-studio-field-gap,16px)}.xblock-keypoints-studio .keypoints-studio-row .keypoints-studio-section-title{margin-bottom:0}.xblock-keypoints-studio .keypoints-studio-empty{color:var(--pgn-color-gray-500);margin:0}.xblock-keypoints-studio .keypoint-entry{border:1px solid var(--pgn-color-gray-200);border-radius:var(--pgn-exemplar-xblock-studio-entry-radius,8px);padding:var(--pgn-exemplar-xblock-studio-entry-padding,24px);margin-bottom:var(--pgn-exemplar-xblock-studio-field-gap,16px);background-color:var(--pgn-color-gray-100)}.xblock-keypoints-studio .keypoint-entry:last-child{margin-bottom:0}.xblock-keypoints-studio .keypoints-studio-entry-title{font-weight:700}.xblock-keypoints-studio .keypoints-studio-field{margin-bottom:var(--pgn-exemplar-xblock-studio-field-gap,16px)}.xblock-keypoints-studio .tab-content{flex:auto;min-height:0}", Eg = (e, t, n) => {
	d({
		runtime: e,
		element: t,
		config: n.config,
		styles: Tg
	})(/* @__PURE__ */ (0, k.jsx)(bg.Provider, {
		value: n.config,
		children: /* @__PURE__ */ (0, k.jsx)(wg, { data: n.data })
	}));
};
//#endregion
export { Eg as renderBlock };
