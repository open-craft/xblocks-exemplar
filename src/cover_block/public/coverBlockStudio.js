import { n as e, t } from "./rolldown-runtime-CYdcPHCu.js";
import { S as n, _ as r, a as i, b as a, c as o, d as s, f as c, g as l, h as u, i as d, l as f, m as p, n as m, o as h, p as g, r as _, s as v, t as y, u as b, v as x, x as S, y as C } from "./dist-DqPPlJMT.js";
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/ActionRow/index.js
var w = /* @__PURE__ */ e(n()), T = /* @__PURE__ */ e(S());
function E({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /*#__PURE__*/ w.createElement(e, {
		...r,
		className: (0, T.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function D() {
	return /*#__PURE__*/ w.createElement("span", { className: "pgn__action-row-spacer" });
}
E.Spacer = D, (/* @__PURE__ */ t(((e, t) => {
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
// node_modules/.pnpm/uncontrollable@7.2.1_react@18.3.1/node_modules/uncontrollable/lib/esm/hook.js
function O(e, t, n) {
	var r = (0, w.useRef)(e !== void 0), i = (0, w.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, w.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function k(e, t) {
	return k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, k(e, t);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function A(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, k(e, t);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function j(e) {
	return e && e.ownerDocument || document;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function M(e) {
	var t = j(e);
	return t && t.defaultView || window;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function N(e, t) {
	return M(e).getComputedStyle(e, t);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var P = /([A-Z])/g;
function F(e) {
	return e.replace(P, "-$1").toLowerCase();
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var ee = /^ms-/;
function I(e) {
	return F(e).replace(ee, "-ms-");
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var L = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function R(e) {
	return !!(e && L.test(e));
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function te(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(I(t)) || N(e).getPropertyValue(I(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(I(i)) : R(i) ? r += i + "(" + a + ") " : n += I(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var ne = /* @__PURE__ */ t(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), re = /* @__PURE__ */ t(((e, t) => {
	var n = ne();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), ie = /* @__PURE__ */ t(((e, t) => {
	t.exports = re()();
})), ae = { disabled: !1 }, oe = w.createContext(null), se = function(e) {
	return e.scrollTop;
}, z = /* @__PURE__ */ e(r()), ce = "unmounted", le = "exited", ue = "entering", de = "entered", fe = "exiting", pe = /*#__PURE__*/ function(e) {
	A(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = le, r.appearStatus = ue) : o = de : o = t.unmountOnExit || t.mountOnEnter ? ce : le, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: le } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = ue) : (n === "entering" || n === "entered") && (t = fe);
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
		if (e === void 0 && (e = !1), t !== null) {
			if (this.cancelNextCallback(), t === "entering") {
				if (this.props.unmountOnExit || this.props.mountOnEnter) {
					var n = this.props.nodeRef ? this.props.nodeRef.current : z.findDOMNode(this);
					n && se(n);
				}
				this.performEnter(e);
			} else this.performExit();
		} else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: ce });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [z.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		!e && !n || ae.disabled ? this.safeSetState({ status: de }, function() {
			t.props.onEntered(a);
		}) : (this.props.onEnter(a, o), this.safeSetState({ status: ue }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: de }, function() {
					t.props.onEntered(a, o);
				});
			});
		}));
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : z.findDOMNode(this);
		!t || ae.disabled ? this.safeSetState({ status: le }, function() {
			e.props.onExited(r);
		}) : (this.props.onExit(r), this.safeSetState({ status: fe }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: le }, function() {
					e.props.onExited(r);
				});
			});
		}));
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
		var n = this.props.nodeRef ? this.props.nodeRef.current : z.findDOMNode(this), r = e == null && !this.props.addEndListener;
		if (!n || r) setTimeout(this.nextCallback, 0);
		else {
			if (this.props.addEndListener) {
				var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = i[0], o = i[1];
				this.props.addEndListener(a, o);
			}
			e != null && setTimeout(this.nextCallback, e);
		}
	}, n.render = function() {
		var e = this.state.status;
		if (e === "unmounted") return null;
		var t = this.props, n = t.children;
		t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
		var r = C(t, [
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
		return /*#__PURE__*/ w.createElement(oe.Provider, { value: null }, typeof n == "function" ? n(e, r) : w.cloneElement(w.Children.only(n), r));
	}, t;
}(w.Component);
pe.contextType = oe, pe.propTypes = {};
function B() {}
pe.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: B,
	onEntering: B,
	onEntered: B,
	onExit: B,
	onExiting: B,
	onExited: B
}, pe.UNMOUNTED = ce, pe.EXITED = le, pe.ENTERING = ue, pe.ENTERED = de, pe.EXITING = fe;
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var me = !!(typeof window < "u" && window.document && window.document.createElement), he = !1, ge = !1;
try {
	var _e = {
		get passive() {
			return he = !0;
		},
		get once() {
			return ge = he = !0;
		}
	};
	me && (window.addEventListener("test", _e, _e), window.removeEventListener("test", _e, !0));
} catch {}
function ve(e, t, n, r) {
	if (r && typeof r != "boolean" && !ge) {
		var i = r.once, a = r.capture, o = n;
		!ge && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, he ? r : a);
	}
	e.addEventListener(t, n, r);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function ye(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function be(e, t, n, r) {
	return ve(e, t, n, r), function() {
		ye(e, t, n, r);
	};
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function xe(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function Se(e) {
	var t = te(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function Ce(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || xe(e, "transitionend", !0);
	}, t + n), a = be(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function we(e, t, n, r) {
	n ??= Se(e) || 0;
	var i = Ce(e, n, r), a = be(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function Te(e, t) {
	var n = te(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Ee(e, t) {
	var n = we(e, function(r) {
		r.target === e && (n(), t(r));
	}, Te(e, "transitionDuration") + Te(e, "transitionDelay"));
}
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
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function Oe(e) {
	e.offsetHeight;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function ke(e) {
	let t = (0, w.useRef)(e);
	return (0, w.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Ae(e) {
	let t = ke(e);
	return (0, w.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var je = ["className", "children"], Me, Ne = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Pe = (Me = {}, Me[ue] = "show", Me[de] = "show", Me), Fe = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = C(e, je), o = (0, w.useCallback)(function(e) {
		Oe(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /*#__PURE__*/ w.createElement(pe, a({
		ref: t,
		addEndListener: Ee
	}, i, { onEnter: o }), function(e, t) {
		return /*#__PURE__*/ w.cloneElement(r, a({}, t, { className: (0, T.default)("fade", n, r.props.className, Pe[e]) }));
	});
});
Fe.defaultProps = Ne, Fe.displayName = "Fade";
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/camelize.js
var Ie = /-(.)/g;
function Le(e) {
	return e.replace(Ie, function(e, t) {
		return t.toUpperCase();
	});
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Re = [
	"className",
	"bsPrefix",
	"as"
], ze = function(e) {
	return e[0].toUpperCase() + Le(e).slice(1);
};
function Be(e, t) {
	var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? ze(e) : r, o = n.Component, s = n.defaultProps, c = /*#__PURE__*/ w.forwardRef(function(t, n) {
		var r = t.className, i = t.bsPrefix, s = t.as, c = s === void 0 ? o || "div" : s, l = C(t, Re), u = x(i, e);
		return /*#__PURE__*/ w.createElement(c, a({
			ref: n,
			className: (0, T.default)(r, u)
		}, l));
	});
	return c.defaultProps = s, c.displayName = i, c;
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var Ve = [
	"as",
	"disabled",
	"onKeyDown"
];
function He(e) {
	return !e || e.trim() === "#";
}
var Ue = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, o = e.onKeyDown, s = C(e, Ve), c = function(e) {
		var t = s.href, n = s.onClick;
		(i || He(t)) && e.preventDefault(), i ? e.stopPropagation() : n && n(e);
	};
	return He(s.href) && (s.role = s.role || "button", s.href = s.href || "#"), i && (s.tabIndex = -1, s["aria-disabled"] = !0), /*#__PURE__*/ w.createElement(r, a({ ref: t }, s, {
		onClick: c,
		onKeyDown: De(function(e) {
			e.key === " " && (e.preventDefault(), c(e));
		}, o)
	}));
});
Ue.displayName = "SafeAnchor";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var We = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], Ge = {
	variant: "primary",
	active: !1,
	disabled: !1
}, Ke = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.size, o = e.active, s = e.className, c = e.block, l = e.type, u = e.as, d = C(e, We), f = x(n, "btn"), p = (0, T.default)(s, f, o && "active", r && f + "-" + r, c && f + "-block", i && f + "-" + i);
	if (d.href) return /*#__PURE__*/ w.createElement(Ue, a({}, d, {
		as: u,
		ref: t,
		className: (0, T.default)(p, d.disabled && "disabled")
	}));
	t && (d.ref = t), l ? d.type = l : u || (d.type = "button");
	var m = u || "button";
	return /*#__PURE__*/ w.createElement(m, a({}, d, { className: p }));
});
Ke.displayName = "Button", Ke.defaultProps = Ge;
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function qe() {
	let e = (0, w.useRef)(!0), t = (0, w.useRef)(() => e.current);
	return (0, w.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function Je(e) {
	let t = (0, w.useRef)(e);
	return t.current = e, t;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function Ye(e) {
	let t = Je(e);
	(0, w.useEffect)(() => () => t.current(), []);
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var Xe = 2 ** 31 - 1;
function Ze(e, t, n) {
	let r = n - Date.now();
	e.current = r <= Xe ? setTimeout(t, r) : setTimeout(() => Ze(e, t, n), Xe);
}
function Qe() {
	let e = qe(), t = (0, w.useRef)();
	return Ye(() => clearTimeout(t.current)), (0, w.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= Xe ? t.current = setTimeout(r, i) : Ze(t, r, Date.now() + i));
		}
		return {
			set: r,
			clear: n,
			handleRef: t
		};
	}, []);
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function $e() {
	return (0, w.useState)(null);
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function et(e) {
	let t = qe();
	return [e[0], (0, w.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var tt = "bottom", nt = "right", rt = "left", it = "auto", at = [
	"top",
	tt,
	nt,
	rt
], ot = "start", st = "clippingParents", ct = "viewport", lt = "popper", ut = "reference", dt = /*#__PURE__*/ at.reduce(function(e, t) {
	return e.concat([t + "-" + ot, t + "-end"]);
}, []), ft = /*#__PURE__*/ [].concat(at, [it]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + ot,
		t + "-end"
	]);
}, []), pt = [
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
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function mt(e) {
	return e.split("-")[0];
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function ht(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function gt(e) {
	return e instanceof ht(e).Element || e instanceof Element;
}
function _t(e) {
	return e instanceof ht(e).HTMLElement || e instanceof HTMLElement;
}
function vt(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof ht(e).ShadowRoot || e instanceof ShadowRoot;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var yt = Math.max, bt = Math.min, xt = Math.round;
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function St() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function Ct() {
	return !/^((?!chrome|android).)*safari/i.test(St());
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function wt(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && _t(e) && (i = e.offsetWidth > 0 && xt(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && xt(r.height) / e.offsetHeight || 1);
	var o = (gt(e) ? ht(e) : window).visualViewport, s = !Ct() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function Tt(e) {
	var t = wt(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function Et(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && vt(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function Dt(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function Ot(e) {
	return ht(e).getComputedStyle(e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function kt(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(Dt(e)) >= 0;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function At(e) {
	return ((gt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function jt(e) {
	return Dt(e) === "html" ? e : e.assignedSlot || e.parentNode || (vt(e) ? e.host : null) || At(e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function Mt(e) {
	return !_t(e) || Ot(e).position === "fixed" ? null : e.offsetParent;
}
function Nt(e) {
	var t = /firefox/i.test(St());
	if (/Trident/i.test(St()) && _t(e) && Ot(e).position === "fixed") return null;
	var n = jt(e);
	for (vt(n) && (n = n.host); _t(n) && ["html", "body"].indexOf(Dt(n)) < 0;) {
		var r = Ot(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Pt(e) {
	for (var t = ht(e), n = Mt(e); n && kt(n) && Ot(n).position === "static";) n = Mt(n);
	return n && (Dt(n) === "html" || Dt(n) === "body" && Ot(n).position === "static") ? t : n || Nt(e) || t;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function Ft(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function It(e, t, n) {
	return yt(e, bt(t, n));
}
function Lt(e, t, n) {
	var r = It(e, t, n);
	return r > n ? n : r;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Rt() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function zt(e) {
	return Object.assign({}, Rt(), e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function Bt(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var Vt = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, zt(typeof e == "number" ? Bt(e, at) : e);
};
function Ht(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = mt(n.placement), c = Ft(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (a && o) {
		var u = Vt(i.padding, n), d = Tt(a), f = c === "y" ? "top" : rt, p = c === "y" ? tt : nt, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Pt(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = It(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function Ut(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Et(t.elements.popper, r) && (t.elements.arrow = r));
}
var Wt = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Ht,
	effect: Ut,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function Gt(e) {
	return e.split("-")[1];
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var Kt = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function qt(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: xt(n * i) / i || 0,
		y: xt(r * i) / i || 0
	};
}
function Jt(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = rt, b = "top", x = window;
	if (l) {
		var S = Pt(n), C = "clientHeight", w = "clientWidth";
		if (S === ht(n) && (S = At(n), Ot(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = tt;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = nt;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Kt), O = u === !0 ? qt({
		x: p,
		y: h
	}, ht(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Yt(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 || r, a = n.adaptive, o = a === void 0 || a, s = n.roundOffsets, c = s === void 0 || s, l = {
		placement: mt(t.placement),
		variation: Gt(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Jt(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Jt(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Xt = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Yt,
	data: {}
}, Zt = { passive: !0 };
function Qt(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 || i, o = r.resize, s = o === void 0 || o, c = ht(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, Zt);
	}), s && c.addEventListener("resize", n.update, Zt), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, Zt);
		}), s && c.removeEventListener("resize", n.update, Zt);
	};
}
var $t = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: Qt,
	data: {}
}, en = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function tn(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return en[e];
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var nn = {
	start: "end",
	end: "start"
};
function rn(e) {
	return e.replace(/start|end/g, function(e) {
		return nn[e];
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function an(e) {
	var t = ht(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function on(e) {
	return wt(At(e)).left + an(e).scrollLeft;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function sn(e, t) {
	var n = ht(e), r = At(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = Ct();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + on(e),
		y: c
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function cn(e) {
	var t = At(e), n = an(e), r = e.ownerDocument?.body, i = yt(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = yt(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + on(e), s = -n.scrollTop;
	return Ot(r || t).direction === "rtl" && (o += yt(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function ln(e) {
	var t = Ot(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function un(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(Dt(e)) >= 0 ? e.ownerDocument.body : _t(e) && ln(e) ? e : un(jt(e));
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function dn(e, t) {
	t === void 0 && (t = []);
	var n = un(e), r = n === e.ownerDocument?.body, i = ht(n), a = r ? [i].concat(i.visualViewport || [], ln(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(dn(jt(a)));
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function fn(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function pn(e, t) {
	var n = wt(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function mn(e, t, n) {
	return t === "viewport" ? fn(sn(e, n)) : gt(t) ? pn(t, n) : fn(cn(At(e)));
}
function hn(e) {
	var t = dn(jt(e)), n = ["absolute", "fixed"].indexOf(Ot(e).position) >= 0 && _t(e) ? Pt(e) : e;
	return gt(n) ? t.filter(function(e) {
		return gt(e) && Et(e, n) && Dt(e) !== "body";
	}) : [];
}
function gn(e, t, n, r) {
	var i = t === "clippingParents" ? hn(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = mn(e, n, r);
		return t.top = yt(i.top, t.top), t.right = bt(i.right, t.right), t.bottom = bt(i.bottom, t.bottom), t.left = yt(i.left, t.left), t;
	}, mn(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function _n(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? mt(r) : null, a = r ? Gt(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case tt:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case nt:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case rt:
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
	var l = i ? Ft(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case ot:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case "end": c[l] = c[l] + (t[u] / 2 - n[u] / 2);
		}
	}
	return c;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function vn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? st : s, l = n.rootBoundary, u = l === void 0 ? ct : l, d = n.elementContext, f = d === void 0 ? lt : d, p = n.altBoundary, m = p !== void 0 && p, h = n.padding, g = h === void 0 ? 0 : h, _ = zt(typeof g == "number" ? Bt(g, at) : g), v = f === "popper" ? ut : lt, y = e.rects.popper, b = e.elements[m ? v : f], x = gn(gt(b) ? b : b.contextElement || At(e.elements.popper), c, u, o), S = wt(e.elements.reference), C = _n({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = fn(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function yn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? ft : c, u = Gt(r), d = u ? s ? dt : dt.filter(function(e) {
		return Gt(e) === u;
	}) : at, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = vn(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[mt(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function bn(e) {
	if (mt(e) === "auto") return [];
	var t = tn(e);
	return [
		rn(e),
		t,
		rn(t)
	];
}
function xn(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 || i, o = n.altAxis, s = o === void 0 || o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 || p, h = n.allowedAutoPlacements, g = t.options.placement, _ = mt(g) === g, v = c || (_ || !m ? [tn(g)] : bn(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(mt(n) === "auto" ? yn(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = mt(E), O = Gt(E) === ot, k = ["top", tt].indexOf(D) >= 0, A = k ? "width" : "height", j = vn(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? nt : rt : O ? tt : "top";
			b[A] > x[A] && (M = tn(M));
			var N = tn(M), P = [];
			if (a && P.push(j[D] <= 0), s && P.push(j[M] <= 0, j[N] <= 0), P.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, P);
		}
		if (C) for (var F = m ? 3 : 1, ee = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, I = F; I > 0 && ee(I) !== "break"; I--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var Sn = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: xn,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function Cn(e, t, n) {
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
function wn(e) {
	return [
		"top",
		nt,
		tt,
		rt
	].some(function(t) {
		return e[t] >= 0;
	});
}
function Tn(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = vn(t, { elementContext: "reference" }), s = vn(t, { altBoundary: !0 }), c = Cn(o, r), l = Cn(s, i, a), u = wn(c), d = wn(l);
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
var En = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: Tn
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function Dn(e, t, n) {
	var r = mt(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function On(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = ft.reduce(function(e, n) {
		return e[n] = Dn(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var kn = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: On
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function An(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = _n({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var jn = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: An,
	data: {}
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function Mn(e) {
	return e === "x" ? "y" : "x";
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function Nn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 || i, o = n.altAxis, s = o !== void 0 && o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 || f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = vn(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = mt(t.placement), v = Gt(t.placement), y = !v, b = Ft(_), x = Mn(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : rt, A = b === "y" ? tt : nt, j = b === "y" ? "height" : "width", M = S[b], N = M + g[k], P = M - g[A], F = p ? -w[j] / 2 : 0, ee = v === "start" ? C[j] : w[j], I = v === "start" ? -w[j] : -C[j], L = t.elements.arrow, R = p && L ? Tt(L) : {
				width: 0,
				height: 0
			}, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Rt(), ne = te[k], re = te[A], ie = It(0, C[j], R[j]), ae = y ? C[j] / 2 - F - ie - ne - E.mainAxis : ee - ie - ne - E.mainAxis, oe = y ? -C[j] / 2 + F + ie + re + E.mainAxis : I + ie + re + E.mainAxis, se = t.elements.arrow && Pt(t.elements.arrow), z = se ? b === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, ce = D?.[b] ?? 0, le = M + ae - ce - z, ue = M + oe - ce, de = It(p ? bt(N, le) : N, M, p ? yt(P, ue) : P);
			S[b] = de, O[b] = de - M;
		}
		if (s) {
			var fe = b === "x" ? "top" : rt, pe = b === "x" ? tt : nt, B = S[x], me = x === "y" ? "height" : "width", he = B + g[fe], ge = B - g[pe], _e = ["top", rt].indexOf(_) !== -1, ve = D?.[x] ?? 0, ye = _e ? he : B - C[me] - w[me] - ve + E.altAxis, be = _e ? B + C[me] + w[me] - ve - E.altAxis : ge, xe = p && _e ? Lt(ye, B, be) : It(p ? ye : he, B, p ? be : ge);
			S[x] = xe, O[x] = xe - B;
		}
		t.modifiersData[r] = O;
	}
}
var Pn = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: Nn,
	requiresIfExists: ["offset"]
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function Fn(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function In(e) {
	return e === ht(e) || !_t(e) ? an(e) : Fn(e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function Ln(e) {
	var t = e.getBoundingClientRect(), n = xt(t.width) / e.offsetWidth || 1, r = xt(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Rn(e, t, n) {
	n === void 0 && (n = !1);
	var r = _t(t), i = _t(t) && Ln(t), a = At(t), o = wt(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((Dt(t) !== "body" || ln(a)) && (s = In(t)), _t(t) ? (c = wt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = on(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function zn(e) {
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
function Bn(e) {
	var t = zn(e);
	return pt.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Vn(e) {
	var t;
	return function() {
		return t ||= new Promise(function(n) {
			Promise.resolve().then(function() {
				t = void 0, n(e());
			});
		}), t;
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js
function Hn(e) {
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
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
var Un = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Wn() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function Gn(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Un : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, Un, a),
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
					reference: gt(e) ? dn(e) : e.contextElement ? dn(e.contextElement) : [],
					popper: dn(t)
				};
				var s = Bn(Hn([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Wn(t, n)) {
						i.rects = {
							reference: Rn(t, Pt(n), i.options.strategy === "fixed"),
							popper: Tt(n)
						}, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(e) {
							return i.modifiersData[e.name] = Object.assign({}, e.data);
						});
						for (var r = 0; r < i.orderedModifiers.length; r++) if (i.reset === !0) i.reset = !1, r = -1;
						else {
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
			update: Vn(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Wn(e, t)) return c;
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
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/popper.js
var Kn = Gn({ defaultModifiers: [
	En,
	jn,
	Xt,
	$t,
	kn,
	Sn,
	Pn,
	Wt
] }), qn = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, Jn = {
	name: "applyStyles",
	enabled: !1
}, Yn = {
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
}, Xn = [];
function Zn(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, o = i === void 0 || i, s = r.placement, c = s === void 0 ? "bottom" : s, l = r.strategy, u = l === void 0 ? "absolute" : l, d = r.modifiers, f = d === void 0 ? Xn : d, p = C(r, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), m = (0, w.useRef)(), h = (0, w.useCallback)(function() {
		var e;
		(e = m.current) == null || e.update();
	}, []), g = (0, w.useCallback)(function() {
		var e;
		(e = m.current) == null || e.forceUpdate();
	}, []), _ = et((0, w.useState)({
		placement: c,
		update: h,
		forceUpdate: g,
		attributes: {},
		styles: {
			popper: qn(u),
			arrow: {}
		}
	})), v = _[0], y = _[1], b = (0, w.useMemo)(function() {
		return {
			name: "updateStateModifier",
			enabled: !0,
			phase: "write",
			requires: ["computeStyles"],
			fn: function(e) {
				var t = e.state, n = {}, r = {};
				Object.keys(t.elements).forEach(function(e) {
					n[e] = t.styles[e], r[e] = t.attributes[e];
				}), y({
					state: t,
					styles: n,
					attributes: r,
					update: h,
					forceUpdate: g,
					placement: t.placement
				});
			}
		};
	}, [
		h,
		g,
		y
	]);
	return (0, w.useEffect)(function() {
		m.current && o && m.current.setOptions({
			placement: c,
			strategy: u,
			modifiers: [].concat(f, [b, Jn])
		});
	}, [
		u,
		c,
		b,
		o
	]), (0, w.useEffect)(function() {
		if (o && e != null && t != null) return m.current = Kn(e, t, a({}, p, {
			placement: c,
			strategy: u,
			modifiers: [].concat(f, [Yn, b])
		})), function() {
			m.current != null && (m.current.destroy(), m.current = void 0, y(function(e) {
				return a({}, e, {
					attributes: {},
					styles: { popper: qn(u) }
				});
			}));
		};
	}, [
		o,
		e,
		t
	]), v;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js
function Qn(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
// node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js
var $n = /* @__PURE__ */ t(((e, t) => {
	t.exports = function() {};
}));
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/safeFindDOMNode.js
function er(e) {
	return e && "setState" in e ? z.findDOMNode(e) : e ?? null;
}
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var tr = (function(e) {
	return j(er(e));
}), nr = /* @__PURE__ */ e($n()), rr = 27, ir = function() {};
function ar(e) {
	return e.button === 0;
}
function or(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var sr = function(e) {
	return e && ("current" in e ? e.current : e);
};
function cr(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, w.useRef)(!1), c = t || ir, l = (0, w.useCallback)(function(t) {
		var n = sr(e);
		(0, nr.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || or(t) || !ar(t) || !!Qn(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Ae(function(e) {
		s.current || c(e);
	}), d = Ae(function(e) {
		e.keyCode === rr && c(e);
	});
	(0, w.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = tr(sr(e)), r = be(n, o, l, !0), a = be(n, o, function(e) {
				e === t ? t = void 0 : u(e);
			}), s = be(n, "keyup", function(e) {
				e === t ? t = void 0 : d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return be(e, "mousemove", ir);
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
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js
function lr(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function ur(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function dr(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, o = e.offset, s = e.fixed, c = e.containerPadding, l = e.arrowElement, u = e.popperConfig, d = u === void 0 ? {} : u, f = lr(d.modifiers);
	return a({}, d, {
		placement: r,
		enabled: t,
		strategy: s ? "fixed" : d.strategy,
		modifiers: ur(a({}, f, {
			eventListeners: { enabled: n },
			preventOverflow: a({}, f.preventOverflow, { options: c ? a({ padding: c }, f.preventOverflow?.options) : f.preventOverflow?.options }),
			offset: { options: a({ offset: o }, f.offset?.options) },
			arrow: a({}, f.arrow, {
				enabled: !!l,
				options: a({}, f.arrow?.options, { element: l })
			}),
			flip: a({ enabled: !!i }, f.flip)
		}))
	});
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var fr = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function pr(e, t) {
	let n = fr(e), r = fr(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function mr(e, t) {
	return (0, w.useMemo)(() => pr(e, t), [e, t]);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function hr(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function gr(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function _r() {
	var e = (0, w.useRef)(null), t = (0, w.useRef)(null), n = (0, w.useRef)(null), r = x(void 0, "popover"), i = x(void 0, "dropdown-menu");
	return [(0, w.useCallback)(function(n) {
		n && (hr(n, r) || hr(n, i)) && (t.current = gr(n), n.style.margin = "0", e.current = n);
	}, [r, i]), [
		(0, w.useMemo)(function() {
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
		(0, w.useMemo)(function() {
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
		(0, w.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var i = t.state;
					if (e.current && i.elements.arrow && hr(e.current, r)) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = gr(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = gr(i.elements.arrow);
						return i.elements.arrow.style.margin = "0", function() {
							i.elements.arrow && (i.elements.arrow.style.margin = "");
						};
					}
				}
			};
		}, [r])
	]];
}
// node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/isRequiredForA11y.js
var vr = /* @__PURE__ */ t(((e, t) => {
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
})), yr = /* @__PURE__ */ t(((e, t) => {
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
})), br = /* @__PURE__ */ t(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(yr());
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
})), V = /* @__PURE__ */ e(ie()), xr = [
	"as",
	"className",
	"type",
	"tooltip"
], Sr = {
	type: V.default.string,
	tooltip: V.default.bool,
	as: V.default.elementType
}, Cr = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, i = e.className, o = e.type, s = o === void 0 ? "valid" : o, c = e.tooltip, l = c !== void 0 && c, u = C(e, xr);
	return /*#__PURE__*/ w.createElement(r, a({}, u, {
		ref: t,
		className: (0, T.default)(i, s + "-" + (l ? "tooltip" : "feedback"))
	}));
});
Cr.displayName = "Feedback", Cr.propTypes = Sr;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var wr = /*#__PURE__*/ w.createContext({ controlId: void 0 }), Tr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], Er = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, o = e.className, s = e.type, c = s === void 0 ? "checkbox" : s, l = e.isValid, u = l !== void 0 && l, d = e.isInvalid, f = d !== void 0 && d, p = e.isStatic, m = e.as, h = m === void 0 ? "input" : m, g = C(e, Tr), _ = (0, w.useContext)(wr), v = _.controlId, y = _.custom ? [i, "custom-control-input"] : [r, "form-check-input"], b = y[0], S = y[1];
	return r = x(b, S), /*#__PURE__*/ w.createElement(h, a({}, g, {
		ref: t,
		type: c,
		id: n || v,
		className: (0, T.default)(o, r, u && "is-valid", f && "is-invalid", p && "position-static")
	}));
});
Er.displayName = "FormCheckInput";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Dr = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Or = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, o = e.htmlFor, s = C(e, Dr), c = (0, w.useContext)(wr), l = c.controlId, u = c.custom ? [r, "custom-control-label"] : [n, "form-check-label"], d = u[0], f = u[1];
	return n = x(d, f), /*#__PURE__*/ w.createElement("label", a({}, s, {
		ref: t,
		htmlFor: o || l,
		className: (0, T.default)(i, n)
	}));
});
Or.displayName = "FormCheckLabel", br();
var kr = [
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
], Ar = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, o = e.inline, s = o !== void 0 && o, c = e.disabled, l = c !== void 0 && c, u = e.isValid, d = u !== void 0 && u, f = e.isInvalid, p = f !== void 0 && f, m = e.feedbackTooltip, h = m !== void 0 && m, g = e.feedback, _ = e.className, v = e.style, y = e.title, b = y === void 0 ? "" : y, S = e.type, E = S === void 0 ? "checkbox" : S, D = e.label, O = e.children, k = e.custom, A = e.as, j = A === void 0 ? "input" : A, M = C(e, kr), N = E === "switch" || k, P = N ? [i, "custom-control"] : [r, "form-check"], F = P[0], ee = P[1];
	r = x(F, ee);
	var I = (0, w.useContext)(wr).controlId, L = (0, w.useMemo)(function() {
		return {
			controlId: n || I,
			custom: N
		};
	}, [
		I,
		N,
		n
	]), R = N || D != null && D !== !1 && !O, te = /*#__PURE__*/ w.createElement(Er, a({}, M, {
		type: E === "switch" ? "checkbox" : E,
		ref: t,
		isValid: d,
		isInvalid: p,
		isStatic: !R,
		disabled: l,
		as: j
	}));
	return /*#__PURE__*/ w.createElement(wr.Provider, { value: L }, /*#__PURE__*/ w.createElement("div", {
		style: v,
		className: (0, T.default)(_, r, N && "custom-" + E, s && r + "-inline")
	}, O || /*#__PURE__*/ w.createElement(w.Fragment, null, te, R && /*#__PURE__*/ w.createElement(Or, { title: b }, D), (d || p) && /*#__PURE__*/ w.createElement(Cr, {
		type: d ? "valid" : "invalid",
		tooltip: h
	}, g))));
});
Ar.displayName = "FormCheck", Ar.Input = Er, Ar.Label = Or;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var jr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], Mr = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, o = e.className, s = e.isValid, c = e.isInvalid, l = e.lang, u = e.as, d = u === void 0 ? "input" : u, f = C(e, jr), p = (0, w.useContext)(wr), m = p.controlId, h = p.custom, g = "file", _ = h ? [i, "custom-file-input"] : [r, "form-control-file"], v = _[0], y = _[1];
	return r = x(v, y), /*#__PURE__*/ w.createElement(d, a({}, f, {
		ref: t,
		id: n || m,
		type: g,
		lang: l,
		className: (0, T.default)(o, r, s && "is-valid", c && "is-invalid")
	}));
});
Mr.displayName = "FormFileInput";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Nr = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Pr = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, o = e.htmlFor, s = C(e, Nr), c = (0, w.useContext)(wr), l = c.controlId, u = c.custom ? [r, "custom-file-label"] : [n, "form-file-label"], d = u[0], f = u[1];
	return n = x(d, f), /*#__PURE__*/ w.createElement("label", a({}, s, {
		ref: t,
		htmlFor: o || l,
		className: (0, T.default)(i, n),
		"data-browse": s["data-browse"]
	}));
});
Pr.displayName = "FormFileLabel";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var Fr = [
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
], Ir = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, o = e.disabled, s = o !== void 0 && o, c = e.isValid, l = c !== void 0 && c, u = e.isInvalid, d = u !== void 0 && u, f = e.feedbackTooltip, p = f !== void 0 && f, m = e.feedback, h = e.className, g = e.style, _ = e.label, v = e.children, y = e.custom, b = e.lang, S = e["data-browse"], E = e.as, D = E === void 0 ? "div" : E, O = e.inputAs, k = O === void 0 ? "input" : O, A = C(e, Fr), j = y ? [i, "custom"] : [r, "form-file"], M = j[0], N = j[1];
	r = x(M, N);
	var P = "file", F = (0, w.useContext)(wr).controlId, ee = (0, w.useMemo)(function() {
		return {
			controlId: n || F,
			custom: y
		};
	}, [
		F,
		y,
		n
	]), I = _ != null && _ !== !1 && !v, L = /*#__PURE__*/ w.createElement(Mr, a({}, A, {
		ref: t,
		isValid: l,
		isInvalid: d,
		disabled: s,
		as: k,
		lang: b
	}));
	return /*#__PURE__*/ w.createElement(wr.Provider, { value: ee }, /*#__PURE__*/ w.createElement(D, {
		style: g,
		className: (0, T.default)(h, r, y && "custom-" + P)
	}, v || /*#__PURE__*/ w.createElement(w.Fragment, null, y ? /*#__PURE__*/ w.createElement(w.Fragment, null, L, I && /*#__PURE__*/ w.createElement(Pr, { "data-browse": S }, _)) : /*#__PURE__*/ w.createElement(w.Fragment, null, I && /*#__PURE__*/ w.createElement(Pr, null, _), L), (l || d) && /*#__PURE__*/ w.createElement(Cr, {
		type: l ? "valid" : "invalid",
		tooltip: p
	}, m))));
});
Ir.displayName = "FormFile", Ir.Input = Mr, Ir.Label = Pr;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var Lr = [
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
], Rr = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, o = e.size, s = e.htmlSize, c = e.id, l = e.className, u = e.isValid, d = u !== void 0 && u, f = e.isInvalid, p = f !== void 0 && f, m = e.plaintext, h = e.readOnly, g = e.custom, _ = e.as, v = _ === void 0 ? "input" : _, y = C(e, Lr), b = (0, w.useContext)(wr).controlId, S = g ? [r, "custom"] : [n, "form-control"], E = S[0], D = S[1];
	n = x(E, D);
	var O;
	if (m) {
		var k;
		O = (k = {}, k[n + "-plaintext"] = !0, k);
	} else if (i === "file") {
		var A;
		O = (A = {}, A[n + "-file"] = !0, A);
	} else if (i === "range") {
		var j;
		O = (j = {}, j[n + "-range"] = !0, j);
	} else if (v === "select" && g) {
		var M;
		O = (M = {}, M[n + "-select"] = !0, M[n + "-select-" + o] = o, M);
	} else {
		var N;
		O = (N = {}, N[n] = !0, N[n + "-" + o] = o, N);
	}
	return /*#__PURE__*/ w.createElement(v, a({}, y, {
		type: i,
		size: s,
		ref: t,
		readOnly: h,
		id: c || b,
		className: (0, T.default)(l, O, d && "is-valid", p && "is-invalid")
	}));
});
Rr.displayName = "FormControl";
var zr = Object.assign(Rr, { Feedback: Cr }), Br = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Vr = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, o = e.controlId, s = e.as, c = s === void 0 ? "div" : s, l = C(e, Br);
	n = x(n, "form-group");
	var u = (0, w.useMemo)(function() {
		return { controlId: o };
	}, [o]);
	return /*#__PURE__*/ w.createElement(wr.Provider, { value: u }, /*#__PURE__*/ w.createElement(c, a({}, l, {
		ref: t,
		className: (0, T.default)(r, n)
	}), i));
});
Vr.displayName = "FormGroup";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Hr = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], Ur = {
	column: !1,
	srOnly: !1
}, Wr = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, o = e.column, s = e.srOnly, c = e.className, u = e.htmlFor, d = C(e, Hr), f = (0, w.useContext)(wr).controlId;
	i = x(i, "form-label");
	var p = "col-form-label";
	typeof o == "string" && (p = p + " " + p + "-" + o);
	var m = (0, T.default)(c, i, s && "sr-only", o && p);
	return u ||= f, o ? /*#__PURE__*/ w.createElement(l, a({
		ref: t,
		as: "label",
		className: m,
		htmlFor: u
	}, d)) : /*#__PURE__*/ w.createElement(r, a({
		ref: t,
		className: m,
		htmlFor: u
	}, d));
});
Wr.displayName = "FormLabel", Wr.defaultProps = Ur;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var Gr = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], Kr = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, o = i === void 0 ? "small" : i, s = e.muted, c = C(e, Gr);
	return n = x(n, "form-text"), /*#__PURE__*/ w.createElement(o, a({}, c, {
		ref: t,
		className: (0, T.default)(r, n, s && "text-muted")
	}));
});
Kr.displayName = "FormText";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var qr = /*#__PURE__*/ w.forwardRef(function(e, t) {
	return /*#__PURE__*/ w.createElement(Ar, a({}, e, {
		ref: t,
		type: "switch"
	}));
});
qr.displayName = "Switch", qr.Input = Ar.Input, qr.Label = Ar.Label;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var Jr = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], Yr = Be("form-row"), Xr = { inline: !1 }, Zr = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.inline, i = e.className, o = e.validated, s = e.as, c = s === void 0 ? "form" : s, l = C(e, Jr);
	return n = x(n, "form"), /*#__PURE__*/ w.createElement(c, a({}, l, {
		ref: t,
		className: (0, T.default)(i, o && "was-validated", r && n + "-inline")
	}));
});
Zr.displayName = "Form", Zr.defaultProps = Xr, Zr.Row = Yr, Zr.Group = Vr, Zr.Control = zr, Zr.Check = Ar, Zr.File = Ir, Zr.Switch = qr, Zr.Label = Wr, Zr.Text = Kr;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/InputGroup.js
var Qr = [
	"bsPrefix",
	"size",
	"hasValidation",
	"className",
	"as"
], $r = Be("input-group-append"), ei = Be("input-group-prepend"), ti = Be("input-group-text", { Component: "span" }), ni = function(e) {
	return /*#__PURE__*/ w.createElement(ti, null, /*#__PURE__*/ w.createElement("input", a({ type: "checkbox" }, e)));
}, ri = function(e) {
	return /*#__PURE__*/ w.createElement(ti, null, /*#__PURE__*/ w.createElement("input", a({ type: "radio" }, e)));
}, ii = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.size, i = e.hasValidation, o = e.className, s = e.as, c = s === void 0 ? "div" : s, l = C(e, Qr);
	return n = x(n, "input-group"), /*#__PURE__*/ w.createElement(c, a({ ref: t }, l, { className: (0, T.default)(o, n, r && n + "-" + r, i && "has-validation") }));
});
ii.displayName = "InputGroup", ii.Text = ti, ii.Radio = ri, ii.Checkbox = ni, ii.Append = $r, ii.Prepend = ei;
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/useWaitForDOMRef.js
var ai = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? j().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function oi(e, t) {
	var n = (0, w.useState)(function() {
		return ai(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = ai(e);
		a && i(a);
	}
	return (0, w.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, w.useEffect)(function() {
		var t = ai(e);
		t !== r && i(t);
	}, [e, r]), r;
}
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var si = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, o = e.containerPadding, s = o === void 0 ? 5 : o, c = e.popperConfig, l = c === void 0 ? {} : c, u = e.transition, d = $e(), f = d[0], p = d[1], m = $e(), h = m[0], g = m[1], _ = mr(p, t), v = oi(e.container), y = oi(e.target), b = (0, w.useState)(!e.show), x = b[0], S = b[1], T = Zn(y, f, dr({
		placement: i,
		enableEvents: !!e.show,
		containerPadding: s || 5,
		flip: n,
		offset: r,
		arrowElement: h,
		popperConfig: l
	})), E = T.styles, D = T.attributes, O = C(T, ["styles", "attributes"]);
	e.show ? x && S(!1) : !e.transition && !x && S(!0);
	var k = function() {
		S(!0), e.onExited && e.onExited.apply(e, arguments);
	}, A = e.show || u && !x;
	if (cr(f, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !A) return null;
	var j = e.children(a({}, O, {
		show: !!e.show,
		props: a({}, D.popper, {
			style: E.popper,
			ref: _
		}),
		arrowProps: a({}, D.arrow, {
			style: E.arrow,
			ref: g
		})
	}));
	if (u) {
		var M = e.onExit, N = e.onExiting, P = e.onEnter, F = e.onEntering, ee = e.onEntered;
		j = /*#__PURE__*/ w.createElement(u, {
			in: e.show,
			appear: !0,
			onExit: M,
			onExiting: N,
			onExited: k,
			onEnter: P,
			onEntering: F,
			onEntered: ee
		}, j);
	}
	return v ? /*#__PURE__*/ z.createPortal(j, v) : null;
});
si.displayName = "Overlay", si.propTypes = {
	show: V.default.bool,
	placement: V.default.oneOf(ft),
	target: V.default.any,
	container: V.default.any,
	flip: V.default.bool,
	children: V.default.func.isRequired,
	containerPadding: V.default.number,
	popperConfig: V.default.object,
	rootClose: V.default.bool,
	rootCloseEvent: V.default.oneOf(["click", "mousedown"]),
	rootCloseDisabled: V.default.bool,
	onHide: function(e) {
		var t = [...arguments].slice(1);
		if (e.rootClose) {
			var n;
			return (n = V.default.func).isRequired.apply(n, [e].concat(t));
		}
		return V.default.func.apply(V.default, [e].concat(t));
	},
	transition: V.default.elementType,
	onEnter: V.default.func,
	onEntering: V.default.func,
	onEntered: V.default.func,
	onExit: V.default.func,
	onExiting: V.default.func,
	onExited: V.default.func
};
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var ci = [
	"children",
	"transition",
	"popperConfig"
], li = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], ui = {
	transition: Fe,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function di(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(er(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(er(e));
	};
}
function fi(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, o = C(e, ci), s = (0, w.useRef)({}), c = _r(), l = c[0], u = c[1], d = n === !0 ? Fe : n || null;
	return /*#__PURE__*/ w.createElement(si, a({}, o, {
		ref: l,
		popperConfig: a({}, i, { modifiers: u.concat(i.modifiers || []) }),
		transition: d
	}), function(e) {
		var r = e.props, i = e.arrowProps, o = e.show, c = e.update;
		e.forceUpdate;
		var l = e.placement, u = e.state, d = C(e, li);
		di(r, i);
		var f = Object.assign(s.current, {
			state: u,
			scheduleUpdate: c,
			placement: l,
			outOfBoundaries: u?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(a({}, d, r, {
			placement: l,
			show: o
		}, !n && o && { className: "show" }, {
			popper: f,
			arrowProps: i
		})) : /*#__PURE__*/ w.cloneElement(t, a({}, d, r, {
			placement: l,
			arrowProps: i,
			popper: f,
			className: (0, T.default)(t.props.className, !n && o && "show"),
			style: a({}, t.props.style, r.style)
		}));
	});
}
fi.defaultProps = ui;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var pi = [
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
], mi = /*#__PURE__*/ function(e) {
	A(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(w.Component);
function hi(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function gi(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	a && a === i || Qn(i, a) || e.apply(void 0, t);
}
var _i = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function vi(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, o = i === void 0 ? {} : i, s = e.show, c = e.defaultShow, l = c !== void 0 && c, u = e.onToggle, d = e.delay, f = e.placement, p = e.flip, m = p === void 0 ? f && f.indexOf("auto") !== -1 : p, h = C(e, pi), g = (0, w.useRef)(null), _ = Qe(), v = (0, w.useRef)(""), y = O(s, l, u), b = y[0], x = y[1], S = hi(d), T = typeof r == "function" ? {} : w.Children.only(r).props, E = T.onFocus, D = T.onBlur, k = T.onClick, A = (0, w.useCallback)(function() {
		return er(g.current);
	}, []), j = (0, w.useCallback)(function() {
		_.clear(), v.current = "show", S.show ? _.set(function() {
			v.current === "show" && x(!0);
		}, S.show) : x(!0);
	}, [
		S.show,
		x,
		_
	]), M = (0, w.useCallback)(function() {
		_.clear(), v.current = "hide", S.hide ? _.set(function() {
			v.current === "hide" && x(!1);
		}, S.hide) : x(!1);
	}, [
		S.hide,
		x,
		_
	]), N = (0, w.useCallback)(function() {
		j();
		var e = [...arguments];
		E?.apply(void 0, e);
	}, [j, E]), P = (0, w.useCallback)(function() {
		M();
		var e = [...arguments];
		D?.apply(void 0, e);
	}, [M, D]), F = (0, w.useCallback)(function() {
		x(!b), k && k.apply(void 0, arguments);
	}, [
		k,
		x,
		b
	]), ee = (0, w.useCallback)(function() {
		gi(j, [...arguments], "fromElement");
	}, [j]), I = (0, w.useCallback)(function() {
		gi(M, [...arguments], "toElement");
	}, [M]), L = t == null ? [] : [].concat(t), R = {};
	return L.indexOf("click") !== -1 && (R.onClick = F), L.indexOf("focus") !== -1 && (R.onFocus = N, R.onBlur = P), L.indexOf("hover") !== -1 && (R.onMouseOver = ee, R.onMouseOut = I), /*#__PURE__*/ w.createElement(w.Fragment, null, typeof r == "function" ? r(a({}, R, { ref: g })) : /*#__PURE__*/ w.createElement(mi, { ref: g }, /*#__PURE__*/ (0, w.cloneElement)(r, R)), /*#__PURE__*/ w.createElement(fi, a({}, h, {
		show: b,
		onHide: M,
		flip: m,
		placement: f,
		popperConfig: o,
		target: A
	}), n));
}
vi.defaultProps = _i;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var yi = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], bi = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.animation, o = e.size, s = e.children, c = e.as, l = c === void 0 ? "div" : c, u = e.className, d = C(e, yi);
	n = x(n, "spinner");
	var f = n + "-" + i;
	return /*#__PURE__*/ w.createElement(l, a({ ref: t }, d, { className: (0, T.default)(u, f, o && f + "-" + o, r && "text-" + r) }), s);
});
bi.displayName = "Spinner", vr();
var xi = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], Si = { placement: "right" }, Ci = /*#__PURE__*/ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, i = e.className, o = e.style, s = e.children, c = e.arrowProps;
	e.popper, e.show;
	var l = C(e, xi);
	n = x(n, "tooltip");
	var u = (r?.split("-") || [])[0];
	return /*#__PURE__*/ w.createElement("div", a({
		ref: t,
		style: o,
		role: "tooltip",
		"x-placement": u,
		className: (0, T.default)(i, n, "bs-tooltip-" + u)
	}, l), /*#__PURE__*/ w.createElement("div", a({ className: "arrow" }, c)), /*#__PURE__*/ w.createElement("div", { className: n + "-inner" }, s));
});
Ci.defaultProps = Si, Ci.displayName = "Tooltip";
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/useIntl.js
function wi() {
	var e = w.useContext(o);
	return b(e), e;
}
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createFormattedComponent.js
var Ti;
(function(e) {
	e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Ti ||= {});
var Ei;
(function(e) {
	e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(Ei ||= {});
function Di(e) {
	var t = function(t) {
		var n = wi(), r = t.value, i = t.children, a = c(t, ["value", "children"]), o = typeof r == "string" ? new Date(r || 0) : r;
		return i(e === "formatDate" ? n.formatDateToParts(o, a) : n.formatTimeToParts(o, a));
	};
	return t.displayName = Ei[e], t;
}
function Oi(e) {
	var t = function(t) {
		var n = wi(), r = t.value, i = t.children, a = c(t, ["value", "children"]), o = n[e](r, a);
		if (typeof i == "function") return i(o);
		var s = n.textComponent || w.Fragment;
		return w.createElement(s, null, o);
	};
	return t.displayName = Ti[e], t;
}
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/index.js
function ki(e) {
	return e;
}
Oi("formatDate"), Oi("formatTime"), Oi("formatNumber"), Oi("formatList"), Oi("formatDisplayName"), Di("formatDate"), Di("formatTime");
// node_modules/.pnpm/css-mediaquery@0.1.2/node_modules/css-mediaquery/index.js
var Ai = /* @__PURE__ */ t(((e) => {
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
})), ji = /* @__PURE__ */ t(((e, t) => {
	var n = Ai().match, r = typeof window < "u" ? window.matchMedia : null;
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
})), Mi = /[A-Z]/g, Ni = /^ms-/, Pi = {};
function Fi(e) {
	return "-" + e.toLowerCase();
}
function Ii(e) {
	if (Pi.hasOwnProperty(e)) return Pi[e];
	var t = e.replace(Mi, Fi);
	return Pi[e] = Ni.test(t) ? "-" + t : t;
}
// node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
function Li(e, t) {
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
var Ri = /* @__PURE__ */ e(ji()), H = V.default.oneOfType([V.default.string, V.default.number]), zi = {
	all: V.default.bool,
	grid: V.default.bool,
	aural: V.default.bool,
	braille: V.default.bool,
	handheld: V.default.bool,
	print: V.default.bool,
	projection: V.default.bool,
	screen: V.default.bool,
	tty: V.default.bool,
	tv: V.default.bool,
	embossed: V.default.bool
}, Bi = {
	orientation: V.default.oneOf(["portrait", "landscape"]),
	scan: V.default.oneOf(["progressive", "interlace"]),
	aspectRatio: V.default.string,
	deviceAspectRatio: V.default.string,
	height: H,
	deviceHeight: H,
	width: H,
	deviceWidth: H,
	color: V.default.bool,
	colorIndex: V.default.bool,
	monochrome: V.default.bool,
	resolution: H,
	type: Object.keys(zi)
}, { type: Vi, ...Hi } = Bi, Ui = {
	minAspectRatio: V.default.string,
	maxAspectRatio: V.default.string,
	minDeviceAspectRatio: V.default.string,
	maxDeviceAspectRatio: V.default.string,
	minHeight: H,
	maxHeight: H,
	minDeviceHeight: H,
	maxDeviceHeight: H,
	minWidth: H,
	maxWidth: H,
	minDeviceWidth: H,
	maxDeviceWidth: H,
	minColor: V.default.number,
	maxColor: V.default.number,
	minColorIndex: V.default.number,
	maxColorIndex: V.default.number,
	minMonochrome: V.default.number,
	maxMonochrome: V.default.number,
	minResolution: H,
	maxResolution: H,
	...Hi
}, Wi = {
	all: {
		...zi,
		...Ui
	},
	types: zi,
	matchers: Bi,
	features: Ui
}, Gi = (e) => `not ${e}`, Ki = (e, t) => {
	let n = Ii(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? Gi(n) : `(${n}: ${t})`;
}, qi = (e) => e.join(" and "), Ji = (e) => {
	let t = [];
	return Object.keys(Wi.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(Ki(n, r));
	}), qi(t);
}, Yi = (0, w.createContext)(void 0), Xi = (e) => e.query || Ji(e), Zi = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[Ii(n)] = e[n], t), {});
}, Qi = () => {
	let e = (0, w.useRef)(!1);
	return (0, w.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, $i = (e) => {
	let t = (0, w.useContext)(Yi), n = () => Zi(e) || Zi(t), [r, i] = (0, w.useState)(n);
	return (0, w.useEffect)(() => {
		let e = n();
		Li(r, e) || i(e);
	}, [e, t]), r;
}, ea = (e) => {
	let t = () => Xi(e), [n, r] = (0, w.useState)(t);
	return (0, w.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, ta = (e, t) => {
	let n = () => (0, Ri.default)(e, t || {}, !!t), [r, i] = (0, w.useState)(n), a = Qi();
	return (0, w.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, na = (e) => {
	let [t, n] = (0, w.useState)(e.matches);
	return (0, w.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, ra = (e, t, n) => {
	let r = $i(t), i = ea(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = ta(i, r), o = na(a), s = Qi();
	return (0, w.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, w.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, ia = 0, aa = (e = "id") => (ia += 1, `${e}${ia}`);
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Icon/index.js
function oa({ src: e, id: t, className: n, hidden: r = !0, screenReaderText: i, svgAttrs: a = {}, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /*#__PURE__*/ w.createElement("span", {
			className: (0, T.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /*#__PURE__*/ w.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /*#__PURE__*/ w.createElement("span", { className: "sr-only" }, i));
	}
	return /*#__PURE__*/ w.createElement(w.Fragment, null, /*#__PURE__*/ w.createElement("span", {
		id: t || aa("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /*#__PURE__*/ w.createElement("span", { className: "sr-only" }, i));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Button/index.js
var sa = /*#__PURE__*/ w.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /*#__PURE__*/ w.createElement(Ke, {
	size: r,
	...i,
	className: (0, T.default)(i.className),
	ref: a
}, n && /*#__PURE__*/ w.createElement(oa, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /*#__PURE__*/ w.createElement(oa, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), ca = (e) => /*#__PURE__*/ w.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ w.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), la = (e) => /*#__PURE__*/ w.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ w.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), ua = (e) => /*#__PURE__*/ w.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ w.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), da = (e) => /*#__PURE__*/ w.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ w.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), fa = (e) => /*#__PURE__*/ w.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ w.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), pa = (e) => /*#__PURE__*/ w.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ w.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), ma = (e) => /*#__PURE__*/ w.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ w.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), ha = (e) => /*#__PURE__*/ w.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ w.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
}));
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Overlay/index.js
function ga({ defaultShow: e = !1, popperConfig: t = {}, trigger: n = ["hover", "focus"], ...r }) {
	return /*#__PURE__*/ w.createElement(vi, {
		defaultShow: e,
		popperConfig: t,
		trigger: n,
		...r
	}, r.children);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Tooltip/index.js
var _a = /*#__PURE__*/ w.forwardRef(({ children: e, variant: t, placement: n = "right", bsPrefix: r = "tooltip", ...i }, a) => /*#__PURE__*/ w.createElement(Ci, {
	...i,
	placement: n,
	bsPrefix: r,
	className: (0, T.default)({ "tooltip-light": t === "light" }, i.className),
	ref: a
}, e)), va = /*#__PURE__*/ w.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = oa, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /*#__PURE__*/ w.createElement("button", {
		"aria-label": t,
		className: (0, T.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /*#__PURE__*/ w.createElement("span", { className: "btn-icon__icon-container" }, g && /*#__PURE__*/ w.createElement(g, {
		className: (0, T.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function ya({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /*#__PURE__*/ w.createElement(ga, {
		placement: e,
		overlay: /*#__PURE__*/ w.createElement(_a, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /*#__PURE__*/ w.createElement(va, { ...n }));
}
va.IconButtonWithTooltip = ya;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function ba(e) {
	return typeof e == "string" || e instanceof String;
}
function xa(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function Sa(e, t) {
	return Array.isArray(t) ? Sa(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var U = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function Ca(e) {
	switch (e) {
		case U.LEFT: return U.FORCE_LEFT;
		case U.RIGHT: return U.FORCE_RIGHT;
		default: return e;
	}
}
function wa(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function Ta(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!Ta(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!Ta(e[s[i]], t[s[i]])) return !1;
		return !0;
	}
	return t && e && typeof t == "function" && typeof e == "function" ? t.toString() === e.toString() : !1;
}
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var Ea = class {
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
		return !this.removedCount || this.insertedCount ? U.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? U.RIGHT : U.LEFT;
	}
};
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function W(e, t) {
	return new W.InputMask(e, t);
}
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function Da(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? W.MaskedRegExp : ba(e) ? W.MaskedPattern : e === Date ? W.MaskedDate : e === Number ? W.MaskedNumber : Array.isArray(e) || e === Array ? W.MaskedDynamic : W.Masked && e.prototype instanceof W.Masked ? e : W.Masked && e instanceof W.Masked ? e.constructor : e instanceof Function ? W.MaskedFunction : (console.warn("Mask not found for mask", e), W.Masked);
}
function Oa(e) {
	if (!e) throw Error("Options in not defined");
	if (W.Masked) {
		if (e.prototype instanceof W.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof W.Masked ? { mask: e } : xa(e) && e.mask instanceof W.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...Sa(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return xa(e) ? { ...e } : { mask: e };
}
function ka(e) {
	if (W.Masked && e instanceof W.Masked) return e;
	let t = Oa(e), n = Da(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
W.createMask = ka;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var Aa = class {
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
W.MaskElement = Aa;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var ja = 90, Ma = 89, Na = class extends Aa {
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
		if (this._handlers.redo && (e.keyCode === ja && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === Ma && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === ja && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
W.HTMLMaskElement = Na;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var Pa = class extends Na {
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
W.HTMLMaskElement = Na;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var Fa = class extends Na {
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
W.HTMLContenteditableMaskElement = Fa;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var Ia = class e {
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
Ia.MAX_LENGTH = 100, W.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof Aa ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new Fa(e) : new Pa(e), this.masked = ka(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Ia(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof W.Masked) && this.masked.constructor === Da(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof W.Masked ? e : ka({ mask: e });
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
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, U.LEFT));
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
		let t = new Ea({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : U.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== U.NONE && (a = this.masked.nearestInputPos(a, U.NONE)), this.updateControl(a), delete this._inputEvent;
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
var G = class e {
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
W.ChangeDetails = G;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var La = class {
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
}, Ra = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new La(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return ba(e) && (e = new La(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new G({
			inserted: e,
			rawInserted: e
		})) : new G();
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
			a || (i = new G(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new G();
	}
	_appendEager() {
		return new G();
	}
	append(e, t, n) {
		if (!ba(e)) throw Error("value should be string");
		let r = ba(n) ? new La(String(n)) : n;
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new G();
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
		return t === void 0 && (t = {}), G.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), G.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = U.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = Ca(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new G();
		if (r !== U.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? U.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== U.NONE && c === this.rawInputValue) {
			if (r === U.FORCE_LEFT) {
				let e;
				for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new G({ tailShift: -1 })).aggregate(this.remove(e - 1));
			} else r === U.FORCE_RIGHT && o.unshift();
		}
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !Ta(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new G();
	}
};
Ra.DEFAULTS = { skipInvalid: !0 }, Ra.EMPTY_VALUES = [
	void 0,
	null,
	""
], W.Masked = Ra;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var za = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = ba(t) ? new La(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof La) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof W.MaskedPattern)) return new La(this.toString()).appendTo(t);
		let n = new G();
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
			let n = "chunks" in t ? new e() : new La();
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
}, Ba = class {
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
			if (!this.block.isFixed && this.block.value && (this.offset = this.block.nearestInputPos(this.offset, U.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, U.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, U.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!this.block.isFixed && this.block.value && (this.offset = this.block.nearestInputPos(this.offset, U.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, U.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, U.NONE), !0;
		});
	}
}, Va = class {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new G();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = U.NONE);
		let n = this._value.length;
		switch (t) {
			case U.LEFT:
			case U.FORCE_LEFT: return 0;
			case U.NONE:
			case U.RIGHT:
			case U.FORCE_RIGHT:
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
		if (t === void 0 && (t = {}), this.isFilled) return new G();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new G({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new G();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new La("");
	}
	appendTail(e) {
		return ba(e) && (e = new La(String(e))), e.appendTo(this);
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
}, Ha = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = ka(s), Object.assign(this, {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new G();
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
		if (t === void 0 && (t = {}), this.isFilled) return new G();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new G(), this.masked.state = n), r.inserted || this.isOptional || this.lazy || t.input || (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new G() : (this.isFilled = !0, new G({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new G();
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
		t === void 0 && (t = U.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case U.LEFT:
			case U.FORCE_LEFT: return this.isComplete ? r : 0;
			case U.RIGHT:
			case U.FORCE_RIGHT: return this.isComplete ? r : n;
			case U.NONE:
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
		return new G();
	}
};
Ha.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, W.MaskedRegExp = class extends Ra {
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let t = e.mask;
		t && (e.validate = (e) => e.search(t) >= 0), super._update(e);
	}
};
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern.js
var Ua = class e extends Ra {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, Ha.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = Oa(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? ka(i) : new W.RepeatBlock(i);
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
			let c = s ? new Ha({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...Oa(t[o]),
				parent: this
			}) : new Va({
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
		let e = new G(), t = this._mapPosToBlock(this.displayValue.length)?.index;
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
		let n = this._mapPosToBlock(this.displayValue.length), r = new G();
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
		let n = new za();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof za && (a.blockIndex = t), n.extend(a);
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
		let t = new G();
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
		if (t === void 0 && (t = U.NONE), !this._blocks.length) return 0;
		let n = new Ba(this, e);
		if (t === U.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === U.LEFT || t === U.FORCE_LEFT) {
			if (t === U.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === U.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === U.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === U.RIGHT || t === U.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === U.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, U.LEFT))) : e;
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
		let t = new G();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
Ua.DEFAULTS = {
	...Ra.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, Ua.STOP_CHAR = "`", Ua.ESCAPE_CHAR = "\\", Ua.InputDefinition = Ha, Ua.FixedDefinition = Va, W.MaskedPattern = Ua;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var Wa = class extends Ua {
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
		let t = new G();
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
W.MaskedRange = Wa;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var Ga = "d{.}`m{.}`Y", Ka = class e extends Ua {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: ba(t) ? t : n
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
			mask: ba(n) ? n : r,
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
Ka.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: Wa,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: Wa,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: Wa,
		from: 1900,
		to: 9999
	}
}), Ka.DEFAULTS = {
	...Ua.DEFAULTS,
	mask: Date,
	pattern: Ga,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, W.MaskedDate = Ka;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var qa = class e extends Ra {
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
			let { expose: t, ...n } = Oa(e), r = ka({
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
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new G(), l = s?.state;
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
		let t = new G();
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
		let n = new G();
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
			return Ta(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
qa.DEFAULTS = {
	...Ra.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, U.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, U.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, W.MaskedDynamic = qa;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var Ja = class e extends Ua {
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
		let n = Math.min(this.nearestInputPos(0, U.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new G({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new La("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new G();
		let n = Math.min(super.nearestInputPos(0, U.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
Ja.DEFAULTS = {
	...Ua.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, W.MaskedEnum = Ja, W.MaskedFunction = class extends Ra {
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
var Ya, Xa = class e extends Ra {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + wa(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(wa).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(wa(this.thousandsSeparator), "g");
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
		s ? l = new G({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new G()), this._value = this._insertThousandsSeparators(this._value);
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
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new G({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case U.NONE:
			case U.LEFT:
			case U.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === U.FORCE_LEFT) return n;
				}
				break;
			}
			case U.RIGHT:
			case U.FORCE_RIGHT: {
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
Ya = Xa, Xa.UNMASKED_RADIX = ".", Xa.EMPTY_VALUES = [...Ra.EMPTY_VALUES, 0], Xa.DEFAULTS = {
	...Ra.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [Ya.UNMASKED_RADIX],
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
}, W.MaskedNumber = Xa;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var Za = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function Qa(e, t, n) {
	t === void 0 && (t = Za.MASKED), n === void 0 && (n = Za.MASKED);
	let r = ka(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function $a(e, t, n, r) {
	return Qa(t, n, r)(e);
}
W.PIPE_TYPE = Za, W.createPipe = Qa, W.pipe = $a, W.RepeatBlock = class extends Ua {
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
		let { repeat: t, ...n } = Oa(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = ka(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(ka(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new G();
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
	globalThis.IMask = W;
} catch {}
// node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var eo = {
	mask: V.default.oneOfType([
		V.default.array,
		V.default.func,
		V.default.string,
		V.default.instanceOf(RegExp),
		V.default.oneOf([
			Date,
			Number,
			W.Masked
		]),
		V.default.instanceOf(W.Masked)
	]),
	value: V.default.any,
	unmask: V.default.oneOfType([V.default.bool, V.default.oneOf(["typed"])]),
	prepare: V.default.func,
	prepareChar: V.default.func,
	validate: V.default.func,
	commit: V.default.func,
	overwrite: V.default.oneOfType([V.default.bool, V.default.oneOf(["shift"])]),
	eager: V.default.oneOfType([V.default.bool, V.default.oneOf(["append", "remove"])]),
	skipInvalid: V.default.bool,
	onAccept: V.default.func,
	onComplete: V.default.func,
	placeholderChar: V.default.string,
	displayChar: V.default.string,
	lazy: V.default.bool,
	definitions: V.default.object,
	blocks: V.default.object,
	enum: V.default.arrayOf(V.default.string),
	maxLength: V.default.number,
	from: V.default.number,
	to: V.default.number,
	pattern: V.default.string,
	format: V.default.func,
	parse: V.default.func,
	autofix: V.default.oneOfType([V.default.bool, V.default.oneOf(["pad"])]),
	radix: V.default.string,
	thousandsSeparator: V.default.string,
	mapToRadix: V.default.arrayOf(V.default.string),
	scale: V.default.number,
	normalizeZeros: V.default.bool,
	padFractionalZeros: V.default.bool,
	min: V.default.oneOfType([V.default.number, V.default.instanceOf(Date)]),
	max: V.default.oneOfType([V.default.number, V.default.instanceOf(Date)]),
	dispatch: V.default.func,
	inputRef: V.default.oneOfType([V.default.func, V.default.shape({ current: V.default.object })])
}, to = Object.keys(eo).filter((e) => e !== "value"), no = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], ro = to.filter((e) => no.indexOf(e) < 0);
function io(e) {
	var t = class extends w.Component {
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
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = W(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => ro.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return to.forEach((e) => {
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
			return w.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	};
	let n = (t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = eo, w.forwardRef((e, t) => w.createElement(n, {
		...e,
		ref: t
	}));
}
// node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var ao = io((e) => {
	let { inputRef: t, ...n } = e;
	return w.createElement("input", {
		...n,
		ref: t
	});
}), oo = w.forwardRef((e, t) => w.createElement(ao, {
	...e,
	ref: t
})), so = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), co = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, lo = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, w.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, uo = (e, t) => {
	let [n, r] = (0, w.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => {
		let t = aa(`${e}-`);
		return i(t);
	}, o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, w.useState)(e);
		return (0, w.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, fo = (e) => e, po = /*#__PURE__*/ w.createContext({
	getControlProps: fo,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: fo,
	getDescriptorProps: fo,
	hasFormGroupProvider: !1
}), mo = () => w.useContext(po);
function ho(e) {
	let [t, n] = (0, w.useState)(e);
	return [t, (e) => {
		(0, w.useEffect)(() => n(e), [e]);
	}];
}
function go({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, w.useMemo)(() => t || aa("form-field"), [t]), [o, s] = uo(a), [c, l] = uo(a), [u, d] = ho(!1), f = {
		getControlProps: (0, w.useCallback)((e) => {
			let t = u ? c : void 0;
			return so({
				...e,
				"aria-describedby": (0, T.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, T.default)(e["aria-labelledby"], t) || void 0,
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
	return /*#__PURE__*/ w.createElement(po.Provider, { value: f }, e);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/constants.js
var _o = {
	SMALL: "sm",
	LARGE: "lg"
}, vo = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, yo = {
	[vo.DEFAULT]: null,
	[vo.VALID]: la,
	[vo.INVALID]: da,
	[vo.WARNING]: ha,
	[vo.CRITERIA_EMPTY]: ma,
	[vo.CRITERIA_VALID]: ua,
	[vo.CRITERIA_INVALID]: ca
}, bo = ({ isInvalid: e, isValid: t }) => t ? vo.VALID : e ? vo.INVALID : vo.DEFAULT;
function xo({ type: e, customIcon: t }) {
	if (t) return t;
	let n = yo[e];
	return n ? /*#__PURE__*/ w.createElement(oa, { src: n }) : null;
}
xo.propTypes = {
	type: V.default.oneOf(Object.values(vo)),
	customIcon: V.default.node
}, xo.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function So({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, T.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /*#__PURE__*/ w.createElement("div", {
		...a,
		className: o
	}, i && /*#__PURE__*/ w.createElement(xo, {
		customIcon: n,
		type: t
	}), /*#__PURE__*/ w.createElement("div", null, e));
}
So.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	hasIcon: V.default.bool,
	type: V.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: V.default.node,
	muted: V.default.bool
}, So.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function Co({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = mo(), a = n(t), o = (0, T.default)("pgn__form-control-description", t.className), s = t.type || bo({
		isInvalid: r,
		isValid: i
	});
	return /*#__PURE__*/ w.createElement(So, {
		...a,
		className: o,
		type: s
	}, e);
}
Co.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	hasIcon: V.default.bool,
	type: V.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: V.default.node,
	muted: V.default.bool
}, Co.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function wo({ children: e }) {
	let { controlId: t } = mo();
	return /*#__PURE__*/ w.createElement("div", { className: "pgn__form-control-floating-label" }, /*#__PURE__*/ w.createElement("div", { className: "pgn__form-control-floating-label-content" }, /*#__PURE__*/ w.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
wo.propTypes = { children: V.default.node.isRequired };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function To({ children: e, location: t }) {
	return /*#__PURE__*/ w.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
To.propTypes = {
	children: V.default.node.isRequired,
	location: V.default.oneOf(["leading", "trailing"])
}, To.defaultProps = { location: "leading" };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function Eo({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = mo(a), s = a.size || o.size;
	return /*#__PURE__*/ w.createElement("div", {
		className: (0, T.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === _o.LARGE,
			"pgn__form-control-decorator-group-sm": s === _o.SMALL
		}, i),
		...a
	}, e, t && /*#__PURE__*/ w.createElement(To, { location: "leading" }, t), n && /*#__PURE__*/ w.createElement(To, { location: "trailing" }, n), r && /*#__PURE__*/ w.createElement(wo, null, r));
}
Eo.propTypes = {
	children: V.default.node.isRequired,
	leadingElement: V.default.node,
	trailingElement: V.default.node,
	floatingLabel: V.default.node,
	className: V.default.string,
	size: V.default.oneOf([_o.SMALL, _o.LARGE])
}, Eo.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControl.js
var Do = /*#__PURE__*/ w.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = mo(), h = w.useRef(), g = u || h, _ = l.size || m.size, [v, y] = lo({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, w.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, w.useEffect)(() => {
		b();
	}, [b]);
	let x = p({
		...l,
		onBlur: co(y, l.onBlur)
	});
	return /*#__PURE__*/ w.createElement(Eo, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /*#__PURE__*/ w.createElement(zr, {
		as: c ? oo : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, T.default)(n, { "has-value": v }),
		onChange: (e) => {
			b(), s && s(e);
		},
		mask: c,
		...x
	}));
});
Do.Feedback = Co, Do.Description = Co, Do.propTypes = {
	className: V.default.string,
	as: V.default.elementType,
	onChange: V.default.func,
	defaultValue: V.default.oneOfType([V.default.string, V.default.number]),
	value: V.default.oneOfType([V.default.string, V.default.number]),
	id: V.default.string,
	controlClassName: V.default.string,
	size: V.default.oneOf(["sm", "lg"]),
	leadingElement: V.default.node,
	trailingElement: V.default.node,
	floatingLabel: V.default.node,
	plaintext: V.default.bool,
	isValid: V.default.bool,
	isInvalid: V.default.bool,
	autoResize: V.default.bool,
	inputMask: V.default.string
}, Do.defaultProps = {
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
function Oo({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = mo(), o = (0, T.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === _o.LARGE,
		"pgn__form-label-sm": r === _o.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /*#__PURE__*/ w.createElement(c, s, e);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function ko({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /*#__PURE__*/ w.createElement(a ?? "div", {
		...o,
		className: (0, T.default)("pgn__form-group", o.className)
	}, /*#__PURE__*/ w.createElement(go, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var Ao = /*#__PURE__*/ w.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), jo = () => (0, w.useContext)(Ao);
function Mo({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			/* istanbul ignore next */
			onBlur: e.onBlur ? co(n, e.onBlur) : n,
			/* istanbul ignore next */
			onFocus: e.onFocus ? co(r, e.onFocus) : r,
			/* istanbul ignore next */
			onChange: e.onChange ? co(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /*#__PURE__*/ w.createElement(Ao.Provider, { value: c }, e);
}
Mo.propTypes = {
	children: V.default.node.isRequired,
	name: V.default.string.isRequired,
	onBlur: V.default.func,
	onFocus: V.default.func,
	onChange: V.default.func,
	value: V.default.string,
	defaultValue: V.default.string
}, Mo.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var No = /*#__PURE__*/ w.forwardRef((e, t) => {
	let { getControlProps: n } = mo(), { getRadioControlProps: r, hasRadioSetProvider: i } = jo(), a = n({
		...e,
		className: (0, T.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /*#__PURE__*/ w.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
No.propTypes = { className: V.default.string }, No.defaultProps = { className: void 0 };
var Po = /*#__PURE__*/ w.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /*#__PURE__*/ w.createElement(go, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /*#__PURE__*/ w.createElement("div", { className: (0, T.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /*#__PURE__*/ w.createElement(No, {
	ref: c,
	className: n,
	...s
}), /*#__PURE__*/ w.createElement("div", null, /*#__PURE__*/ w.createElement(Oo, { className: r }, e), i && /*#__PURE__*/ w.createElement(Co, { hasIcon: !1 }, i)))));
Po.propTypes = {
	id: V.default.string,
	children: V.default.node.isRequired,
	className: V.default.string,
	controlClassName: V.default.string,
	labelClassName: V.default.string,
	description: V.default.node,
	isInvalid: V.default.bool,
	isValid: V.default.bool,
	disabled: V.default.bool
}, Po.defaultProps = {
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
function Fo({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /*#__PURE__*/ w.createElement(e, {
		className: (0, T.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
Fo.propTypes = {
	as: V.default.elementType,
	className: V.default.string,
	isInline: V.default.bool,
	children: V.default.node
}, Fo.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function Io({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = mo();
	u(!0);
	let d = l(c);
	return /*#__PURE__*/ w.createElement(Mo, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /*#__PURE__*/ w.createElement(Fo, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
Io.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	name: V.default.string.isRequired,
	value: V.default.string,
	defaultValue: V.default.string,
	isInline: V.default.bool,
	onChange: V.default.func,
	onFocus: V.default.func,
	onBlur: V.default.func
}, Io.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
var Lo, Ro = /* @__PURE__ */ new Uint8Array(16);
function zo() {
	if (!Lo && (Lo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Lo)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return Lo(Ro);
}
// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var K = [];
for (let e = 0; e < 256; ++e) K.push((e + 256).toString(16).slice(1));
function Bo(e, t = 0) {
	return K[e[t + 0]] + K[e[t + 1]] + K[e[t + 2]] + K[e[t + 3]] + "-" + K[e[t + 4]] + K[e[t + 5]] + "-" + K[e[t + 6]] + K[e[t + 7]] + "-" + K[e[t + 8]] + K[e[t + 9]] + "-" + K[e[t + 10]] + K[e[t + 11]] + K[e[t + 12]] + K[e[t + 13]] + K[e[t + 14]] + K[e[t + 15]];
}
var Vo = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function Ho(e, t, n) {
	if (Vo.randomUUID && !t && !e) return Vo.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || zo)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return Bo(r);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var Uo = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), Wo = (e, t) => t.every((t) => e[t] !== void 0), Go = (e, t) => Uo(e, (e) => Array.isArray(t) ? Wo(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), Ko = /*#__PURE__*/ w.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, T.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /*#__PURE__*/ w.createElement(bi, {
		...i,
		ref: r
	}, t && /*#__PURE__*/ w.createElement("span", { className: "sr-only" }, t));
});
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function qo({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function Jo({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function Yo({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && qo({
		event: e,
		currentIndex: s,
		activeElement: a
	}), Jo({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function Xo(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, w.useRef)();
	return (0, w.useEffect)(() => {
		let e = (e) => {
			Yo({
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
var Zo = ki({
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
}), Qo = /*#__PURE__*/ (0, w.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: u, customErrorMessageText: d, onChange: f, helpMessage: p, ...m }, h) => {
	let g = wi(), _ = (0, w.useRef)(), v = Xo({
		selectors: t,
		ignoredKeys: n
	}), [y, b] = (0, w.useState)(!1), [x, S] = (0, w.useState)(!1), [C, T] = (0, w.useState)(!1), [E, D] = (0, w.useState)(!1), [O, k] = (0, w.useState)(i?.userProvidedText || ""), [A, j] = (0, w.useState)([]), [M, N] = (0, w.useState)(null), [P, F] = (0, w.useState)(!0), [ee, I] = (0, w.useState)(""), L = (e) => {
		N(e);
	}, R = () => {
		j([]), b(!1), N(null);
	}, te = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		T(!0), D(!0), k(n), f && (!i || i && n !== i.selectionValue) && f({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), R(), t && t(e);
	};
	function ne(t = "") {
		let n = w.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? Ho();
			return /*#__PURE__*/ w.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => te(e, n),
				id: i,
				onFocus: () => L(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let re = () => {
		j(ne(O)), F(!0), I(""), b(!0);
	}, ie = /*#__PURE__*/ w.createElement(va, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: y ? pa : fa,
		iconAs: oa,
		size: "sm",
		variant: "secondary",
		alt: y ? g.formatMessage(Zo.iconButtonClosed) : g.formatMessage(Zo.iconButtonOpened),
		onClick: () => {
			y ? R() : re();
		}
	}), ae = () => {
		S(!0);
	}, oe = () => {
		u ? (F(!1), I(d)) : o && !C ? (F(!1), I(s)) : C && c && !E ? (F(!1), I(l)) : (F(!0), I(""));
	};
	(0, w.useImperativeHandle)(h, () => ({ updateErrorStateAndErrorMessage: oe }));
	let se = () => {
		S(!1), R(), oe();
	}, z = (e) => {
		x && (e.key === "Escape" ? (e.preventDefault(), _ && _.current.focus(), R()) : e.key === "Tab" && se());
	}, ce = (e) => {
		v.current && !v.current.contains(e.target) && x && se();
	};
	(0, w.useEffect)(() => (document.addEventListener("keydown", z), document.addEventListener("click", ce, !0), () => {
		document.removeEventListener("click", ce, !0), document.removeEventListener("keydown", z);
	})), (0, w.useEffect)(() => {
		k(i ? i.userProvidedText ?? "" : ""), T(!!i && !!i.userProvidedText), D(!!i && !!i.selectionValue);
	}, [i]);
	let le = () => {
		re();
	}, ue = (e) => {
		let t = e.target.value;
		if (!t.length) {
			k(""), T(!1), D(!1), j([]), R(), f && f({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		T(!0);
		let n = ne(t);
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
	}, { getControlProps: de } = mo(), fe = de(m);
	return /*#__PURE__*/ w.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: v,
		onFocus: ae
	}, /*#__PURE__*/ w.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${A.length} options found`), /*#__PURE__*/ w.createElement(go, {
		controlId: fe.id,
		isInvalid: !P
	}, /*#__PURE__*/ w.createElement(Do, {
		ref: _,
		"aria-expanded": (A.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: O,
		"aria-invalid": ee,
		"aria-activedescendant": M,
		onChange: ue,
		onClick: le,
		trailingElement: ie,
		"data-testid": "autosuggest-textbox-input",
		...fe
	}), p && P && /*#__PURE__*/ w.createElement(Co, { type: "default" }, p), !P && /*#__PURE__*/ w.createElement(Co, {
		type: "invalid",
		"feedback-for": fe.name
	}, ee)), /*#__PURE__*/ w.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /*#__PURE__*/ w.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /*#__PURE__*/ w.createElement(Ko, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : A.length > 0 && A));
});
Qo.defaultProps = {
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
}, Qo.propTypes = {
	arrowKeyNavigationSelector: V.default.string,
	ignoredArrowKeysNames: V.default.arrayOf(V.default.string),
	isLoading: V.default.bool,
	className: V.default.string,
	floatingLabel: V.default.string,
	onChange: V.default.func,
	helpMessage: V.default.string,
	placeholder: V.default.string,
	value: V.default.shape({
		userProvidedText: V.default.string,
		selectionValue: V.default.string,
		selectionId: V.default.string
	}),
	isValueRequired: V.default.bool,
	valueRequiredErrorMessageText: Go(V.default.string, "isValueRequired"),
	isSelectionRequired: V.default.bool,
	selectionRequiredErrorMessageText: Go(V.default.string, "isSelectionRequired"),
	hasCustomError: V.default.bool,
	customErrorMessageText: Go(V.default.string, "hasCustomError"),
	name: V.default.string,
	readOnly: V.default.bool,
	children: V.default.node,
	screenReaderText: V.default.string
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function $o({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, T.default)(a.className, "pgn__menu-item");
	return /*#__PURE__*/ (0, w.createElement)(e, {
		...a,
		className: o
	}, /*#__PURE__*/ w.createElement(w.Fragment, null, i && /*#__PURE__*/ w.createElement(oa, {
		className: "btn-icon-before",
		src: i
	}), /*#__PURE__*/ w.createElement("span", { className: "pgn__menu-item-text" }, t), /*#__PURE__*/ w.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /*#__PURE__*/ w.createElement(oa, {
		className: "btn-icon-after",
		src: r
	})));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function es({ children: e, className: t, onClick: n, ...r }) {
	return /*#__PURE__*/ w.createElement($o, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, T.default)(t, "dropdown-item"),
		...r
	}, e);
}
es.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, es.propTypes = {
	className: V.default.string,
	children: V.default.string,
	onClick: V.default.func
};
var ts = /*#__PURE__*/ w.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), ns = () => (0, w.useContext)(ts);
function rs({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			/* istanbul ignore next */
			onBlur: e.onBlur ? co(n, e.onBlur) : n,
			/* istanbul ignore next */
			onFocus: e.onFocus ? co(r, e.onFocus) : r,
			/* istanbul ignore next */
			onChange: e.onChange ? co(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /*#__PURE__*/ w.createElement(ts.Provider, { value: c }, e);
}
rs.propTypes = {
	children: V.default.node.isRequired,
	name: V.default.string,
	onBlur: V.default.func,
	onFocus: V.default.func,
	onChange: V.default.func,
	value: V.default.arrayOf(V.default.string),
	defaultValue: V.default.arrayOf(V.default.string)
}, rs.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var is = /*#__PURE__*/ w.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = ns(), a = w.useRef(), o = n || a, { getControlProps: s } = mo(), c = s({
		...t,
		className: (0, T.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), w.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /*#__PURE__*/ w.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
is.propTypes = {
	isIndeterminate: V.default.bool,
	className: V.default.string
}, is.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var as = /*#__PURE__*/ w.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = ns(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = mo();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /*#__PURE__*/ w.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /*#__PURE__*/ w.createElement(go, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /*#__PURE__*/ w.createElement("div", {
		className: (0, T.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /*#__PURE__*/ w.createElement("div", null, /*#__PURE__*/ w.createElement(Oo, { className: r }, e), i && /*#__PURE__*/ w.createElement(Co, { hasIcon: !1 }, i))));
});
as.propTypes = {
	id: V.default.string,
	children: V.default.node.isRequired,
	className: V.default.string,
	controlClassName: V.default.string,
	labelClassName: V.default.string,
	description: V.default.node,
	isInvalid: V.default.bool,
	isValid: V.default.bool,
	controlAs: V.default.elementType,
	floatLabelLeft: V.default.bool,
	disabled: V.default.bool
}, as.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: is,
	floatLabelLeft: !1,
	disabled: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var os = /*#__PURE__*/ w.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = w.useRef(), i = n || r, { getControlProps: a } = mo(), o = a({
		...t,
		className: (0, T.default)("pgn__form-switch-input", t.className)
	});
	return w.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /*#__PURE__*/ w.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
os.propTypes = {
	isIndeterminate: V.default.bool,
	className: V.default.string
}, os.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var ss = /*#__PURE__*/ w.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /*#__PURE__*/ w.createElement("div", { className: "d-inline-flex flex-column" }, /*#__PURE__*/ w.createElement(as, {
	className: (0, T.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: os,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /*#__PURE__*/ w.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
ss.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	labelClassName: V.default.string,
	helperText: V.default.node,
	floatLabelLeft: V.default.bool
}, ss.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function cs({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = mo();
	u(!0);
	let d = l(c);
	return /*#__PURE__*/ w.createElement(rs, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /*#__PURE__*/ w.createElement(Fo, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
cs.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	name: V.default.string.isRequired,
	value: V.default.arrayOf(V.default.string),
	defaultValue: V.default.arrayOf(V.default.string),
	isInline: V.default.bool,
	onChange: V.default.func,
	onFocus: V.default.func,
	onBlur: V.default.func
}, cs.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormSwitchSet.js
var ls = cs, q = Zr;
q.Control = Do, q.Radio = Po, q.RadioSet = Io, q.Autosuggest = Qo, q.AutosuggestOption = es, q.Checkbox = as, q.CheckboxSet = cs, q.Switch = ss, q.SwitchSet = ls, q.Label = Oo, q.Group = ko, q.Text = So;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var us = /*#__PURE__*/ w.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function ds({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, w.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /*#__PURE__*/ w.createElement(us.Provider, { value: i }, r);
}
// node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var fs = "right-scroll-bar-position", ps = "width-before-scroll-bar", ms = "with-scroll-bars-hidden", hs = "--removed-body-scroll-bar-size";
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function gs(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function _s(e, t) {
	var n = (0, w.useState)(function() {
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
var vs = typeof window < "u" ? w.useLayoutEffect : w.useEffect, ys = /* @__PURE__ */ new WeakMap();
function bs(e, t) {
	var n = _s(t || null, function(t) {
		return e.forEach(function(e) {
			return gs(e, t);
		});
	});
	return vs(function() {
		var t = ys.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || gs(e, null);
			}), i.forEach(function(e) {
				r.has(e) || gs(e, a);
			});
		}
		ys.set(n, e);
	}, [e]), n;
}
// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function xs(e) {
	return e;
}
function Ss(e, t) {
	t === void 0 && (t = xs);
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
function Cs(e, t) {
	return t === void 0 && (t = xs), Ss(e, t);
}
function ws(e) {
	e === void 0 && (e = {});
	var t = Ss(null);
	return t.options = s({
		async: !0,
		ssr: !1
	}, e), t;
}
// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var Ts = function(e) {
	var t = e.sideCar, n = c(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return w.createElement(r, s({}, n));
};
Ts.isSideCarExport = !0;
function Es(e, t) {
	return e.useMedium(t), Ts;
}
// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var Ds = ws(), Os = function() {}, ks = w.forwardRef(function(e, t) {
	var n = w.useRef(null), r = w.useState({
		onScrollCapture: Os,
		onWheelCapture: Os,
		onTouchMoveCapture: Os
	}), i = r[0], a = r[1], o = e.forwardProps, l = e.children, u = e.className, d = e.removeScrollBar, f = e.enabled, p = e.shards, m = e.sideCar, h = e.noRelative, g = e.noIsolation, _ = e.inert, v = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, x = e.gapMode, S = c(e, [
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
	]), C = m, T = bs([n, t]), E = s(s({}, S), i);
	return w.createElement(w.Fragment, null, f && w.createElement(C, {
		sideCar: Ds,
		removeScrollBar: d,
		shards: p,
		noRelative: h,
		noIsolation: g,
		inert: _,
		setCallbacks: a,
		allowPinchZoom: !!v,
		lockRef: n,
		gapMode: x
	}), o ? w.cloneElement(w.Children.only(l), s(s({}, E), { ref: T })) : w.createElement(b, s({}, E, {
		className: u,
		ref: T
	}), l));
});
ks.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, ks.classNames = {
	fullWidth: ps,
	zeroRight: fs
};
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var As = "data-focus-lock", js = "data-focus-lock-disabled", Ms = "data-no-focus-lock", Ns = "data-autofocus-inside", Ps = "data-no-autofocus", Fs = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, Is = Cs({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Ls = Cs(), Rs = Cs(), zs = ws({
	async: !0,
	ssr: typeof document < "u"
}), Bs = /*#__PURE__*/ (0, w.createContext)(void 0), Vs = [], Hs = /*#__PURE__*/ (0, w.forwardRef)(function(e, t) {
	var n, r = (0, w.useState)(), i = r[0], o = r[1], s = (0, w.useRef)(), c = (0, w.useRef)(!1), l = (0, w.useRef)(null), u = (0, w.useState)({})[1], d = e.children, f = e.disabled, p = f !== void 0 && f, m = e.noFocusGuards, h = m !== void 0 && m, g = e.persistentFocus, _ = g !== void 0 && g, v = e.crossFrame, y = v === void 0 || v, b = e.autoFocus, x = b === void 0 || b;
	e.allowTextSelection;
	var S = e.group, C = e.className, T = e.whiteList, E = e.hasPositiveIndices, D = e.shards, O = D === void 0 ? Vs : D, k = e.as, A = k === void 0 ? "div" : k, j = e.lockProps, M = j === void 0 ? {} : j, N = e.sideCar, P = e.returnFocus, F = P !== void 0 && P, ee = e.focusOptions, I = e.onActivation, L = e.onDeactivation, R = (0, w.useState)({})[0], te = (0, w.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!l.current) {
			var n = document?.activeElement;
			l.current = n, n !== document.body && (l.current = t(n));
		}
		s.current && I && I(s.current), c.current = !0, u();
	}, [I]), ne = (0, w.useCallback)(function() {
		c.current = !1, L && L(s.current), u();
	}, [L]), re = (0, w.useCallback)(function(e) {
		var t = l.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof F == "function" ? F(n) : F;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				l.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [F]), ie = (0, w.useCallback)(function(e) {
		c.current && Is.useMedium(e);
	}, []), ae = Ls.useMedium, oe = (0, w.useCallback)(function(e) {
		s.current !== e && (s.current = e, o(e));
	}, []), se = a((n = {}, n[js] = p && "disabled", n[As] = S, n), M), z = h !== !0, ce = z && h !== "tail", le = bs([t, oe]), ue = (0, w.useMemo)(function() {
		return {
			observed: s,
			shards: O,
			enabled: !p,
			get active() {
				return c.current;
			}
		};
	}, [
		p,
		c,
		O,
		s
	]);
	return /*#__PURE__*/ w.createElement(w.Fragment, null, z && [/*#__PURE__*/ w.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: Fs
	}), E ? /*#__PURE__*/ w.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: Fs
	}) : null], !p && /*#__PURE__*/ w.createElement(N, {
		id: R,
		sideCar: zs,
		observed: i,
		disabled: p,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: x,
		whiteList: T,
		shards: O,
		onActivation: te,
		onDeactivation: ne,
		returnFocus: re,
		focusOptions: ee,
		noFocusGuards: h
	}), /*#__PURE__*/ w.createElement(A, a({ ref: le }, se, {
		className: C,
		onBlur: ae,
		onFocus: ie
	}), /*#__PURE__*/ w.createElement(Bs.Provider, { value: ue }, d)), ce && /*#__PURE__*/ w.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: Fs
	}));
});
Hs.propTypes = {};
// node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.31_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function Us(e) {
	setTimeout(e, 1);
}
var Ws = function(e) {
	return e && "current" in e ? e.current : e;
}, Gs = Hs, Ks = ws(), qs = "data-focus-on-hidden", Js = { preventScroll: !0 }, Ys = w.forwardRef(function(e, t) {
	var n = w.useState(!1), r = n[0], i = n[1], a = w.useState(null), o = a[0], l = a[1], u = e.children, d = e.autoFocus, f = e.shards, p = e.crossFrame, m = e.enabled, h = m === void 0 || m, g = e.scrollLock, _ = g === void 0 || g, v = e.focusLock, y = v === void 0 || v, b = e.returnFocus, x = b === void 0 || b, S = e.inert, C = e.allowPinchZoom, T = e.sideCar, E = e.className, D = e.shouldIgnore, O = e.preventScrollOnFocus, k = e.style, A = e.as, j = e.gapMode, M = c(e, [
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
	]), N = T, P = s(s({}, r), {
		as: A,
		style: k,
		sideCar: T,
		shards: f,
		allowPinchZoom: C,
		gapMode: j,
		inert: S,
		enabled: h && _
	}), F = w.useCallback(function(e) {
		l(e);
	}, []), ee = w.useCallback(function() {
		l(null);
	}, []);
	return w.createElement(w.Fragment, null, w.createElement(Gs, {
		ref: t,
		sideCar: T,
		disabled: !(h && y),
		returnFocus: x,
		autoFocus: d,
		shards: f,
		crossFrame: p,
		onActivation: F,
		onDeactivation: ee,
		className: E,
		whiteList: D,
		lockProps: P,
		focusOptions: O ? Js : void 0,
		as: ks
	}, u), h && w.createElement(N, s({}, M, {
		sideCar: Ks,
		setLockProps: i,
		shards: f,
		activeNode: o
	})));
});
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/typeof.js
function Xs(e) {
	"@babel/helpers - typeof";
	return Xs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Xs(e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Zs(e, t) {
	if (Xs(e) != "object" || !e) return e;
	var n;
	if (typeof Symbol < "u" && (n = e[Symbol.toPrimitive]) !== void 0) {
		var r = n.call(e, t || "default");
		if (Xs(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Qs(e) {
	var t = Zs(e, "string");
	return Xs(t) == "symbol" ? t : t + "";
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function $s(e, t, n) {
	return (t = Qs(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
// node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function ec(e, t) {
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
			A(t, e);
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
				return /*#__PURE__*/ w.createElement(r, this.props);
			}, t;
		}(w.PureComponent);
		return $s(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var tc = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, nc = function(e) {
	return Array.isArray(e) ? e : [e];
}, rc = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, ic = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, ac = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, oc = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, sc = function(e) {
	return e.hasAttribute("inert");
}, cc = function(e, t) {
	return !e || oc(e) || !ic(e) && !sc(e) && t(ac(e));
}, lc = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = cc(t, lc.bind(void 0, e));
	return e.set(t, r), r;
}, uc = function(e, t) {
	return e && !oc(e) ? _c(e) ? t(ac(e)) : !1 : !0;
}, dc = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = uc(t, dc.bind(void 0, e));
	return e.set(t, r), r;
}, fc = function(e) {
	return e.dataset;
}, pc = function(e) {
	return e.tagName === "BUTTON";
}, mc = function(e) {
	return e.tagName === "INPUT";
}, hc = function(e) {
	return mc(e) && e.type === "radio";
}, gc = function(e) {
	return !mc(e) && !pc(e) || e.type !== "hidden" && !e.disabled;
}, _c = function(e) {
	var t = e.getAttribute(Ps);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, vc = function(e) {
	return !!(e && fc(e)?.focusGuard);
}, yc = function(e) {
	return !vc(e);
}, bc = function(e) {
	return !!e;
}, xc = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, Sc = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Cc = function(e, t, n) {
	return tc(e).map(function(e, t) {
		var r = Sc(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(xc);
}, wc = "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]", Tc = `${wc}, [data-focus-guard]`, Ec = function(e, t) {
	return tc((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? Tc : wc) ? [n] : [], Ec(n));
	}, []);
}, Dc = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? Oc([e.contentDocument.body], t) : [e];
}, Oc = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = Ec(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return Dc(e, t);
		}));
		return e.concat(a, n.parentNode ? tc(n.parentNode.querySelectorAll(wc)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, kc = function(e) {
	return tc(e.querySelectorAll(`[${Ns}]`)).map(function(e) {
		return Oc([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, Ac = function(e, t) {
	return tc(e).filter(function(e) {
		return lc(t, e);
	}).filter(function(e) {
		return gc(e);
	});
}, jc = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), tc(e).filter(function(e) {
		return dc(t, e);
	});
}, Mc = function(e, t, n) {
	return Cc(Ac(Oc(e, n), t), !0, n);
}, Nc = function(e, t) {
	return Cc(Ac(Oc(e), t), !1);
}, Pc = function(e, t) {
	return Ac(kc(e), t);
}, Fc = function(e, t) {
	return e.shadowRoot ? Fc(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : tc(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? Fc(n, t) : !1;
		}
		return Fc(e, t);
	});
}, Ic = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, Lc = function(e) {
	return e.parentNode ? Lc(e.parentNode) : e;
}, Rc = function(e) {
	return nc(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(As);
		return e.push.apply(e, n ? Ic(tc(Lc(t).querySelectorAll(`[${As}="${n}"]:not([${js}="disabled"])`))) : [t]), e;
	}, []);
}, zc = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, Bc = function(e) {
	if (e === void 0 && (e = document), e && e.activeElement) {
		var t = e.activeElement;
		return t.shadowRoot ? Bc(t.shadowRoot) : t instanceof HTMLIFrameElement && zc(function() {
			return t.contentWindow.document;
		}) ? Bc(t.contentWindow.document) : t;
	}
}, Vc = function(e, t) {
	return e === t;
}, Hc = function(e, t) {
	return !!tc(e.querySelectorAll("iframe")).some(function(e) {
		return Vc(e, t);
	});
}, Uc = function(e, t) {
	return t === void 0 && (t = Bc(rc(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Rc(e).some(function(e) {
		return Fc(e, t) || Hc(e, t);
	});
}, Wc = function(e) {
	e === void 0 && (e = document);
	var t = Bc(e);
	return t ? tc(e.querySelectorAll(`[${Ms}]`)).some(function(e) {
		return Fc(e, t);
	}) : !1;
}, Gc = function(e, t) {
	return t.filter(hc).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, Kc = function(e, t) {
	return hc(e) && e.name ? Gc(e, t) : e;
}, qc = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(Kc(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Jc = function(e) {
	return e[0] && e.length > 1 ? Kc(e[0], e) : e[0];
}, Yc = function(e, t) {
	return e.indexOf(Kc(t, e));
}, Xc = "NEW_FOCUS", Zc = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = vc(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? Xc : d;
		if (d === -1) return Xc;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = qc(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = Yc(e, t[0]), C = Yc(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Qc = function(e) {
	return function(t) {
		var n = fc(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, $c = function(e, t, n) {
	var r = jc(e.map(function(e) {
		return e.node;
	}).filter(Qc(n)));
	return r && r.length ? Jc(r) : Jc(jc(t));
}, el = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && el(e.parentNode.host || e.parentNode, t), t;
}, tl = function(e, t) {
	for (var n = el(e), r = el(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, nl = function(e, t, n) {
	var r = nc(e), i = nc(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = tl(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = tl(a, e);
			t && (o = !o || Fc(t, o) ? t : tl(t, o));
		});
	}), o;
}, rl = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(Pc(n, t));
	}, []);
}, il = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(bc);
}, al = function(e, t) {
	var n = Bc(nc(e).length > 0 ? document : rc(e).ownerDocument), r = Rc(e).filter(yc), i = nl(n || e, e, r), a = /* @__PURE__ */ new Map(), o = Nc(r, a), s = o.filter(function(e) {
		var t = e.node;
		return yc(t);
	});
	if (s[0]) {
		var c = Nc([i], a).map(function(e) {
			return e.node;
		}), l = il(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Zc(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = $c(o, d, rl(r, a)) || $c(o, u, rl(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
		} else return f === void 0 ? f : l[f];
	}
}, ol = function(e) {
	var t = Rc(e).filter(yc), n = Cc(Oc([nl(e, e, t)], !0), !0, !0), r = Oc(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: vc(t)
		};
	});
}, sl = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, cl = 0, ll = !1, ul = function(e, t, n) {
	n === void 0 && (n = {});
	var r = al(e, t);
	if (!ll && r) {
		if (cl > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), ll = !0, setTimeout(function() {
				ll = !1;
			}, 1);
			return;
		}
		cl++, sl(r.node, n.focusOptions), cl--;
	}
};
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function dl(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var fl = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: dl(n),
		parent: dl(n.parentElement),
		left: dl(n.previousElementSibling),
		right: dl(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: dl(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, pl = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = Mc([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, ml = function(e) {
	var t = fl(e);
	return function() {
		return pl(t);
	};
}, hl = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = nc(t);
	if (r.every(function(t) {
		return !Fc(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? Mc(r, /* @__PURE__ */ new Map()) : Nc(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, gl = function(e, t) {
	var n = t ? Mc(nc(e), /* @__PURE__ */ new Map()) : Nc(nc(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, _l = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, vl = function(e, t, n) {
	t === void 0 && (t = {});
	var r = _l(t), i = hl(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && sl(a.node, r.focusOptions);
	}
}, yl = function(e, t) {
	t === void 0 && (t = {}), vl(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, bl = function(e, t) {
	t === void 0 && (t = {}), vl(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, xl = function(e, t, n) {
	var r = gl(e, t.onlyTabbable ?? !0)[n];
	r && sl(r.node, t.focusOptions);
}, Sl = function(e, t) {
	t === void 0 && (t = {}), xl(e, t, "first");
}, Cl = function(e, t) {
	t === void 0 && (t = {}), xl(e, t, "last");
}, wl = function() {
	return document && document.activeElement === document.body;
}, Tl = function() {
	return wl() || Wc();
}, El = null, Dl = null, Ol = function() {
	return null;
}, kl = null, Al = !1, jl = !1, Ml = function() {
	return !0;
}, Nl = function(e) {
	return (El.whiteList || Ml)(e);
}, Pl = function(e, t) {
	kl = {
		observerNode: e,
		portaledElement: t
	};
}, Fl = function(e) {
	return kl && kl.portaledElement === e;
};
function Il(e, t, n, r) {
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
var Ll = function(e) {
	return e ? !!Al : Al === "meanwhile";
}, Rl = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, zl = function(e, t) {
	return t.some(function(t) {
		return Rl(e, t, t);
	});
}, Bl = function(e) {
	return Nc(e, /* @__PURE__ */ new Map());
}, Vl = function(e) {
	return !Bl([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, Hl = function() {
	var e = !1;
	if (El) {
		var t = El, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || kl && kl.portaledElement;
		if (wl() && Dl && Dl !== document.body && (!document.body.contains(Dl) || Vl(Dl))) {
			var u = Ol();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(Ws).filter(Boolean));
			if ((!d || Nl(d)) && (r || function() {
				if (!Ll(o) || !c || !Dl || jl) return !1;
				var e = Bl(f), t = e.findIndex(function(e) {
					return e.node === Dl;
				});
				return t === 0 || t === e.length - 1;
			}() || !Tl() || !Dl && i) && (l && !(Uc(f) || d && zl(d, f) || Fl(d, l)) && (document && !Dl && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = ul(f, Dl, { focusOptions: s }), kl = {})), Dl = document && document.activeElement, Dl !== document.body && (Ol = ml(Dl)), Al = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = ol(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), Il(h, m.length, 1, m), Il(h, -1, -1, m));
			}
		}
	}
	return e;
}, Ul = function(e) {
	Hl() && e && (e.stopPropagation(), e.preventDefault());
}, Wl = function() {
	return Us(Hl);
}, Gl = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || Pl(n, t);
}, Kl = function() {
	return null;
}, ql = function() {
	jl = !0;
}, Jl = function() {
	jl = !1, Al = "just", Us(function() {
		Al = "meanwhile";
	});
}, Yl = function() {
	document.addEventListener("focusin", Ul), document.addEventListener("focusout", Wl), window.addEventListener("focus", ql), window.addEventListener("blur", Jl);
}, Xl = function() {
	document.removeEventListener("focusin", Ul), document.removeEventListener("focusout", Wl), window.removeEventListener("focus", ql), window.removeEventListener("blur", Jl);
};
function Zl(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Ql = {
	moveFocusInside: ul,
	focusInside: Uc,
	focusNextElement: yl,
	focusPrevElement: bl,
	focusFirstElement: Sl,
	focusLastElement: Cl,
	captureFocusRestore: ml
};
function $l(e) {
	var t = e.slice(-1)[0];
	t && !El && Yl();
	var n = El, r = n && t && t.id === n.id;
	El = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (Dl = null, r && n.observed === t.observed || t.onActivation(Ql), Hl(!0), Us(Hl)) : (Xl(), Dl = null);
}
Is.assignSyncMedium(Gl), Ls.assignMedium(Wl), Rs.assignMedium(function(e) {
	return e(Ql);
}), Es(zs, ec(Zl, $l)(Kl));
// node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var eu = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.31_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function tu() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = eu();
	return t && e.setAttribute("nonce", t), e;
}
function nu(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ru(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var iu = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = tu()) && (nu(t, n), ru(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, au = function() {
	var e = iu();
	return function(t, n) {
		w.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, ou = function() {
	var e = au();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, su = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, cu = function(e) {
	return parseInt(e || "", 10) || 0;
}, lu = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		cu(n),
		cu(r),
		cu(i)
	];
}, uu = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return su;
	var t = lu(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, du = ou(), fu = "data-scroll-locked", pu = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${ms} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${fu}] {
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
  
  .${fs} {
    right: ${s}px ${r};
  }
  
  .${ps} {
    margin-right: ${s}px ${r};
  }
  
  .${fs} .${fs} {
    right: 0 ${r};
  }
  
  .${ps} .${ps} {
    margin-right: 0 ${r};
  }
  
  body[${fu}] {
    ${hs}: ${s}px;
  }
`;
}, mu = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, hu = function() {
	w.useEffect(function() {
		return document.body.setAttribute(fu, (mu() + 1).toString()), function() {
			var e = mu() - 1;
			e <= 0 ? document.body.removeAttribute(fu) : document.body.setAttribute(fu, e.toString());
		};
	}, []);
}, gu = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	hu();
	var a = w.useMemo(function() {
		return uu(i);
	}, [i]);
	return w.createElement(du, { styles: pu(a, !t, i, n ? "" : "!important") });
}, _u = !1;
if (typeof window < "u") try {
	var vu = Object.defineProperty({}, "passive", { get: function() {
		return _u = !0, !0;
	} });
	window.addEventListener("test", vu, vu), window.removeEventListener("test", vu, vu);
} catch {
	_u = !1;
}
var yu = _u ? { passive: !1 } : !1, bu = function(e) {
	return e.tagName === "TEXTAREA";
}, xu = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !bu(e) && n[t] === "visible");
}, Su = function(e) {
	return xu(e, "overflowY");
}, Cu = function(e) {
	return xu(e, "overflowX");
}, wu = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Du(e, r)) {
			var i = Ou(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Tu = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Eu = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Du = function(e, t) {
	return e === "v" ? Su(t) : Cu(t);
}, Ou = function(e, t) {
	return e === "v" ? Tu(t) : Eu(t);
}, ku = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Au = function(e, t, n, r, i) {
	var a = ku(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Ou(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Du(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, ju = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Mu = function(e) {
	return [e.deltaX, e.deltaY];
}, Nu = function(e) {
	return e && "current" in e ? e.current : e;
}, Pu = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Fu = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Iu = 0, Lu = [];
function Ru(e) {
	var t = w.useRef([]), n = w.useRef([0, 0]), r = w.useRef(), i = w.useState(Iu++)[0], a = w.useState(ou)[0], o = w.useRef(e);
	w.useEffect(function() {
		o.current = e;
	}, [e]), w.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = g([e.lockRef.current], (e.shards || []).map(Nu), !0).filter(Boolean);
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
	var s = w.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = ju(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = wu(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = wu(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Au(h, t, e, h === "h" ? s : c, !0);
	}, []), c = w.useCallback(function(e) {
		var n = e;
		if (Lu.length && Lu[Lu.length - 1] === a) {
			var r = "deltaY" in n ? Mu(n) : ju(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Pu(e.delta, r);
			})[0];
			if (i && i.should) n.cancelable && n.preventDefault();
			else if (!i) {
				var c = (o.current.shards || []).map(Nu).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = w.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: zu(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = w.useCallback(function(e) {
		n.current = ju(e), r.current = void 0;
	}, []), d = w.useCallback(function(t) {
		l(t.type, Mu(t), t.target, s(t, e.lockRef.current));
	}, []), f = w.useCallback(function(t) {
		l(t.type, ju(t), t.target, s(t, e.lockRef.current));
	}, []);
	w.useEffect(function() {
		return Lu.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, yu), document.addEventListener("touchmove", c, yu), document.addEventListener("touchstart", u, yu), function() {
			Lu = Lu.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, yu), document.removeEventListener("touchmove", c, yu), document.removeEventListener("touchstart", u, yu);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return w.createElement(w.Fragment, null, m ? w.createElement(a, { styles: Fu(i) }) : null, p ? w.createElement(gu, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function zu(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
Es(Ds, Ru);
// node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Bu = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Vu = /* @__PURE__ */ new WeakMap(), Hu = /* @__PURE__ */ new WeakMap(), Uu = {}, Wu = 0, Gu = function(e) {
	return e && (e.host || Gu(e.parentNode));
}, Ku = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Gu(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, qu = function(e, t, n, r) {
	var i = Ku(t, Array.isArray(e) ? e : [e]);
	Uu[n] || (Uu[n] = /* @__PURE__ */ new WeakMap());
	var a = Uu[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Vu.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Vu.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Hu.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Wu++, function() {
		o.forEach(function(e) {
			var t = Vu.get(e) - 1, i = a.get(e) - 1;
			Vu.set(e, t), a.set(e, i), t || (Hu.has(e) || e.removeAttribute(r), Hu.delete(e)), i || e.removeAttribute(n);
		}), Wu--, Wu || (Vu = /* @__PURE__ */ new WeakMap(), Vu = /* @__PURE__ */ new WeakMap(), Hu = /* @__PURE__ */ new WeakMap(), Uu = {});
	};
}, Ju = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Bu(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), qu(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Yu = ou(), Xu = "\n [" + qs + "] {\n   pointer-events: none !important;\n }\n", Zu = function() {
	return w.createElement(Yu, { styles: Xu });
}, Qu = function(e) {
	return "current" in e ? e.current : e;
};
function $u(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, w.useRef)(null), u = (0, w.useRef)(0);
	return w.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(Qu).some(function(t) {
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
	]), (0, w.useEffect)(function() {
		if (c) return a && a(c), function() {
			o && o();
		};
	}, [!!c]), (0, w.useEffect)(function() {
		if (!s && c) return Ju(p([c], (i || []).map(Qu)), c.ownerDocument.body, qs);
	}, [c, s]), (0, w.useEffect)(function() {
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
	}, []), w.createElement(Zu, null);
}
// node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.31_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var ed = Es(Ks, $u), td = function(e) {
	return w.createElement(ed, s({}, e));
}, nd = w.forwardRef(function(e, t) {
	return w.createElement(Ys, s({}, e, {
		ref: t,
		sideCar: td
	}));
}), rd = class extends w.Component {
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
		return this.rootElement ? /*#__PURE__*/ z.createPortal(this.props.children, this.rootElement) : null;
	}
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function id({ onClick: e }) {
	return /*#__PURE__*/ w.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function ad({ children: e = null }) {
	return /*#__PURE__*/ w.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function od({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, w.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /*#__PURE__*/ w.createElement(ds, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /*#__PURE__*/ w.createElement(rd, null, /*#__PURE__*/ w.createElement(nd, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, T.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /*#__PURE__*/ w.createElement(ad, null, /*#__PURE__*/ w.createElement(id, { onClick: a }), e))));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var sd = /*#__PURE__*/ w.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, w.useContext)(us), a = e, o = {
		...n,
		className: (0, T.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /*#__PURE__*/ w.createElement(a, o, t);
});
sd.propTypes = {
	as: V.default.elementType,
	children: V.default.node,
	className: V.default.string,
	onClick: V.default.func
}, sd.defaultProps = {
	as: sa,
	onClick: void 0,
	className: void 0,
	children: null
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var cd = /*#__PURE__*/ w.forwardRef(({ as: e = "div", children: t, ...n }, r) => /*#__PURE__*/ w.createElement(e, {
	...n,
	ref: r,
	className: (0, T.default)("pgn__modal-header", n.className)
}, t));
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function ld({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ w.createElement(e, {
		...n,
		className: (0, T.default)("pgn__modal-title", n.className)
	}, t);
}
ld.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, ld.defaultProps = {
	as: "h2",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function ud({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ w.createElement(e, {
		...n,
		className: (0, T.default)("pgn__modal-footer", n.className)
	}, t);
}
ud.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, ud.defaultProps = {
	as: "div",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
var dd = (e = !0) => {
	let t = (0, w.useRef)(null), [n, r] = (0, w.useState)(e);
	return (0, w.useEffect)(() => {
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
function fd({ as: e, children: t, ...n }) {
	let [r, i] = dd(), [a, o] = dd(), s = (0, T.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /*#__PURE__*/ w.createElement(e, {
		...n,
		className: s
	}, /*#__PURE__*/ w.createElement(w.Fragment, null, /*#__PURE__*/ w.createElement("div", { ref: i }), /*#__PURE__*/ w.createElement("div", { className: "pgn__modal-body-content" }, t), /*#__PURE__*/ w.createElement("div", { ref: o })));
}
fd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, fd.defaultProps = {
	as: "div",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function pd({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ w.createElement(e, {
		...n,
		className: (0, T.default)("pgn__modal-hero-content", n.className)
	}, t);
}
pd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, pd.defaultProps = {
	as: "div",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function md({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /*#__PURE__*/ w.createElement(e, {
		...r,
		className: (0, T.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
md.propTypes = {
	as: V.default.elementType,
	backgroundSrc: V.default.string,
	children: V.default.node,
	className: V.default.string,
	style: V.default.shape({})
}, md.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function hd({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ w.createElement(e, {
		...n,
		className: (0, T.default)("pgn__modal-hero", n.className)
	}, t);
}
hd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, hd.defaultProps = {
	as: "div",
	className: void 0
}, hd.Content = pd, hd.Background = md;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/messages.js
var gd = ki({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function _d({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: s, isFullscreenScroll: c = !1, className: l, isFullscreenOnMobile: u = !1, isBlocking: d = !1, zIndex: f, isOverflowVisible: p }) {
	let m = wi(), h = s || m.formatMessage(gd.closeButtonText), g = ra({ query: "(max-width: 767.98px)" }), _ = u && g;
	return /*#__PURE__*/ w.createElement(od, {
		isOpen: n,
		onClose: r,
		isBlocking: d,
		zIndex: f
	}, /*#__PURE__*/ w.createElement("div", {
		role: "dialog",
		"aria-label": t,
		className: (0, T.default)("pgn__modal", {
			[`pgn__modal-${_ ? "fullscreen" : i}`]: i,
			[`pgn__modal-${a}`]: a,
			"pgn__modal-scroll-fullscreen": c,
			"pgn__modal-visible-overflow": p
		}, l)
	}, o && /*#__PURE__*/ w.createElement("div", { className: "pgn__modal-close-container" }, /*#__PURE__*/ w.createElement(sd, {
		as: va,
		iconAs: oa,
		invertColors: a === "dark",
		src: da,
		alt: h
	})), e));
}
_d.Header = cd, _d.Title = ld, _d.Footer = ud, _d.CloseButton = sd, _d.Body = fd, _d.Hero = hd;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/StandardModal.js
var vd = "Close";
function yd({ children: e, footerNode: t, beforeBodyNode: n, afterBodyNode: r, ...i }) {
	return /*#__PURE__*/ w.createElement(_d, { ...i }, /*#__PURE__*/ w.createElement(_d.Header, null, /*#__PURE__*/ w.createElement(_d.Title, null, i.title)), n, /*#__PURE__*/ w.createElement(_d.Body, null, e), r, t && /*#__PURE__*/ w.createElement(_d.Footer, null, t));
}
yd.propTypes = {
	children: V.default.node.isRequired,
	title: V.default.string.isRequired,
	onClose: V.default.func.isRequired,
	isOpen: V.default.bool,
	hasCloseButton: V.default.bool,
	size: V.default.oneOf([
		"sm",
		"md",
		"lg",
		"xl",
		"fullscreen"
	]),
	variant: V.default.oneOf([
		"default",
		"warning",
		"danger",
		"success",
		"dark"
	]),
	closeLabel: V.default.string,
	className: V.default.string,
	isFullscreenScroll: V.default.bool,
	footerNode: V.default.node,
	beforeBodyNode: V.default.node,
	afterBodyNode: V.default.node
}, yd.defaultProps = {
	isOpen: !1,
	hasCloseButton: !0,
	size: "md",
	variant: "default",
	closeLabel: vd,
	className: void 0,
	isFullscreenScroll: !1,
	footerNode: null,
	beforeBodyNode: null,
	afterBodyNode: null
};
// node_modules/.pnpm/deepmerge@2.2.1/node_modules/deepmerge/dist/es.js
var bd = function(e) {
	return xd(e) && !Sd(e);
};
function xd(e) {
	return !!e && typeof e == "object";
}
function Sd(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || wd(e);
}
var Cd = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function wd(e) {
	return e.$$typeof === Cd;
}
function Td(e) {
	return Array.isArray(e) ? [] : {};
}
function Ed(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? kd(Td(e), e, t) : e;
}
function Dd(e, t, n) {
	return e.concat(t).map(function(e) {
		return Ed(e, n);
	});
}
function Od(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = Ed(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		r[i] = !n.isMergeableObject(t[i]) || !e[i] ? Ed(t[i], n) : kd(e[i], t[i], n);
	}), r;
}
function kd(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || Dd, n.isMergeableObject = n.isMergeableObject || bd;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : Od(e, t, n) : Ed(t, n);
}
kd.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return kd(e, n, t);
	}, {});
};
var Ad = kd, jd = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, Md = typeof self == "object" && self && self.Object === Object && self, Nd = jd || Md || Function("return this")(), Pd = Nd.Symbol, Fd = Object.prototype, Id = Fd.hasOwnProperty, Ld = Fd.toString, Rd = Pd ? Pd.toStringTag : void 0;
function zd(e) {
	var t = Id.call(e, Rd), n = e[Rd];
	try {
		e[Rd] = void 0;
		var r = !0;
	} catch {}
	var i = Ld.call(e);
	return r && (t ? e[Rd] = n : delete e[Rd]), i;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_objectToString.js
var Bd = Object.prototype.toString;
function Vd(e) {
	return Bd.call(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetTag.js
var Hd = "[object Null]", Ud = "[object Undefined]", Wd = Pd ? Pd.toStringTag : void 0;
function Gd(e) {
	return e == null ? e === void 0 ? Ud : Hd : Wd && Wd in Object(e) ? zd(e) : Vd(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overArg.js
function Kd(e, t) {
	return function(n) {
		return e(t(n));
	};
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getPrototype.js
var qd = Kd(Object.getPrototypeOf, Object);
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObjectLike.js
function Jd(e) {
	return typeof e == "object" && !!e;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isPlainObject.js
var Yd = "[object Object]", Xd = Function.prototype, Zd = Object.prototype, Qd = Xd.toString, $d = Zd.hasOwnProperty, ef = Qd.call(Object);
function tf(e) {
	if (!Jd(e) || Gd(e) != Yd) return !1;
	var t = qd(e);
	if (t === null) return !0;
	var n = $d.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && Qd.call(n) == ef;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheClear.js
function nf() {
	this.__data__ = [], this.size = 0;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/eq.js
function rf(e, t) {
	return e === t || e !== e && t !== t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assocIndexOf.js
function af(e, t) {
	for (var n = e.length; n--;) if (rf(e[n][0], t)) return n;
	return -1;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheDelete.js
var of = Array.prototype.splice;
function sf(e) {
	var t = this.__data__, n = af(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : of.call(t, n, 1), --this.size, !0);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheGet.js
function cf(e) {
	var t = this.__data__, n = af(t, e);
	return n < 0 ? void 0 : t[n][1];
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheHas.js
function lf(e) {
	return af(this.__data__, e) > -1;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_listCacheSet.js
function uf(e, t) {
	var n = this.__data__, r = af(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_ListCache.js
function df(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
df.prototype.clear = nf, df.prototype.delete = sf, df.prototype.get = cf, df.prototype.has = lf, df.prototype.set = uf;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackClear.js
function ff() {
	this.__data__ = new df(), this.size = 0;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackDelete.js
function pf(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackGet.js
function mf(e) {
	return this.__data__.get(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackHas.js
function hf(e) {
	return this.__data__.has(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isObject.js
function gf(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isFunction.js
var _f = "[object AsyncFunction]", vf = "[object Function]", yf = "[object GeneratorFunction]", bf = "[object Proxy]";
function xf(e) {
	if (!gf(e)) return !1;
	var t = Gd(e);
	return t == vf || t == yf || t == _f || t == bf;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_coreJsData.js
var Sf = Nd["__core-js_shared__"], Cf = function() {
	var e = /[^.]+$/.exec(Sf && Sf.keys && Sf.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function wf(e) {
	return !!Cf && Cf in e;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_toSource.js
var Tf = Function.prototype.toString;
function Ef(e) {
	if (e != null) {
		try {
			return Tf.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsNative.js
var Df = /[\\^$.*+?()[\]{}|]/g, Of = /^\[object .+?Constructor\]$/, kf = Function.prototype, Af = Object.prototype, jf = kf.toString, Mf = Af.hasOwnProperty, Nf = RegExp("^" + jf.call(Mf).replace(Df, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Pf(e) {
	return !gf(e) || wf(e) ? !1 : (xf(e) ? Nf : Of).test(Ef(e));
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getValue.js
function Ff(e, t) {
	return e?.[t];
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getNative.js
function If(e, t) {
	var n = Ff(e, t);
	return Pf(n) ? n : void 0;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Map.js
var Lf = If(Nd, "Map"), Rf = If(Object, "create");
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashClear.js
function zf() {
	this.__data__ = Rf ? Rf(null) : {}, this.size = 0;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashDelete.js
function Bf(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashGet.js
var Vf = "__lodash_hash_undefined__", Hf = Object.prototype.hasOwnProperty;
function Uf(e) {
	var t = this.__data__;
	if (Rf) {
		var n = t[e];
		return n === Vf ? void 0 : n;
	}
	return Hf.call(t, e) ? t[e] : void 0;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashHas.js
var Wf = Object.prototype.hasOwnProperty;
function Gf(e) {
	var t = this.__data__;
	return Rf ? t[e] !== void 0 : Wf.call(t, e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hashSet.js
var Kf = "__lodash_hash_undefined__";
function qf(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = Rf && t === void 0 ? Kf : t, this;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Hash.js
function Jf(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Jf.prototype.clear = zf, Jf.prototype.delete = Bf, Jf.prototype.get = Uf, Jf.prototype.has = Gf, Jf.prototype.set = qf;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheClear.js
function Yf() {
	this.size = 0, this.__data__ = {
		hash: new Jf(),
		map: new (Lf || df)(),
		string: new Jf()
	};
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isKeyable.js
function Xf(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMapData.js
function Zf(e, t) {
	var n = e.__data__;
	return Xf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheDelete.js
function Qf(e) {
	var t = Zf(this, e).delete(e);
	return this.size -= +!!t, t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheGet.js
function $f(e) {
	return Zf(this, e).get(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheHas.js
function ep(e) {
	return Zf(this, e).has(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapCacheSet.js
function tp(e, t) {
	var n = Zf(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_MapCache.js
function np(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
np.prototype.clear = Yf, np.prototype.delete = Qf, np.prototype.get = $f, np.prototype.has = ep, np.prototype.set = tp;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackSet.js
var rp = 200;
function ip(e, t) {
	var n = this.__data__;
	if (n instanceof df) {
		var r = n.__data__;
		if (!Lf || r.length < rp - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new np(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Stack.js
function ap(e) {
	var t = this.__data__ = new df(e);
	this.size = t.size;
}
ap.prototype.clear = ff, ap.prototype.delete = pf, ap.prototype.get = mf, ap.prototype.has = hf, ap.prototype.set = ip;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayEach.js
function op(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_defineProperty.js
var sp = function() {
	try {
		var e = If(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignValue.js
function cp(e, t, n) {
	t == "__proto__" && sp ? sp(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assignValue.js
var lp = Object.prototype.hasOwnProperty;
function up(e, t, n) {
	var r = e[t];
	(!(lp.call(e, t) && rf(r, n)) || n === void 0 && !(t in e)) && cp(e, t, n);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyObject.js
function dp(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? cp(n, s, c) : up(n, s, c);
	}
	return n;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTimes.js
function fp(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsArguments.js
var pp = "[object Arguments]";
function mp(e) {
	return Jd(e) && Gd(e) == pp;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArguments.js
var hp = Object.prototype, gp = hp.hasOwnProperty, _p = hp.propertyIsEnumerable, vp = mp(function() {
	return arguments;
}()) ? mp : function(e) {
	return Jd(e) && gp.call(e, "callee") && !_p.call(e, "callee");
}, yp = Array.isArray;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubFalse.js
function bp() {
	return !1;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isBuffer.js
var xp = typeof exports == "object" && exports && !exports.nodeType && exports, Sp = xp && typeof module == "object" && module && !module.nodeType && module, Cp = Sp && Sp.exports === xp ? Nd.Buffer : void 0, wp = (Cp ? Cp.isBuffer : void 0) || bp, Tp = 9007199254740991, Ep = /^(?:0|[1-9]\d*)$/;
function Dp(e, t) {
	var n = typeof e;
	return t ??= Tp, !!t && (n == "number" || n != "symbol" && Ep.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isLength.js
var Op = 9007199254740991;
function kp(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Op;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsTypedArray.js
var Ap = "[object Arguments]", jp = "[object Array]", Mp = "[object Boolean]", Np = "[object Date]", Pp = "[object Error]", Fp = "[object Function]", Ip = "[object Map]", Lp = "[object Number]", Rp = "[object Object]", zp = "[object RegExp]", Bp = "[object Set]", Vp = "[object String]", Hp = "[object WeakMap]", Up = "[object ArrayBuffer]", Wp = "[object DataView]", Gp = "[object Float32Array]", Kp = "[object Float64Array]", qp = "[object Int8Array]", Jp = "[object Int16Array]", Yp = "[object Int32Array]", Xp = "[object Uint8Array]", Zp = "[object Uint8ClampedArray]", Qp = "[object Uint16Array]", $p = "[object Uint32Array]", J = {};
J[Gp] = J[Kp] = J[qp] = J[Jp] = J[Yp] = J[Xp] = J[Zp] = J[Qp] = J[$p] = !0, J[Ap] = J[jp] = J[Up] = J[Mp] = J[Wp] = J[Np] = J[Pp] = J[Fp] = J[Ip] = J[Lp] = J[Rp] = J[zp] = J[Bp] = J[Vp] = J[Hp] = !1;
function em(e) {
	return Jd(e) && kp(e.length) && !!J[Gd(e)];
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnary.js
function tm(e) {
	return function(t) {
		return e(t);
	};
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nodeUtil.js
var nm = typeof exports == "object" && exports && !exports.nodeType && exports, rm = nm && typeof module == "object" && module && !module.nodeType && module, im = rm && rm.exports === nm && jd.process, am = function() {
	try {
		return rm && rm.require && rm.require("util").types || im && im.binding && im.binding("util");
	} catch {}
}(), om = am && am.isTypedArray, sm = om ? tm(om) : em, cm = Object.prototype.hasOwnProperty;
function lm(e, t) {
	var n = yp(e), r = !n && vp(e), i = !n && !r && wp(e), a = !n && !r && !i && sm(e), o = n || r || i || a, s = o ? fp(e.length, String) : [], c = s.length;
	for (var l in e) (t || cm.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Dp(l, c))) && s.push(l);
	return s;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isPrototype.js
var um = Object.prototype;
function dm(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || um);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeys.js
var fm = Kd(Object.keys, Object), pm = Object.prototype.hasOwnProperty;
function mm(e) {
	if (!dm(e)) return fm(e);
	var t = [];
	for (var n in Object(e)) pm.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLike.js
function hm(e) {
	return e != null && kp(e.length) && !xf(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keys.js
function gm(e) {
	return hm(e) ? lm(e) : mm(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssign.js
function _m(e, t) {
	return e && dp(t, gm(t), e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeysIn.js
function vm(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeysIn.js
var ym = Object.prototype.hasOwnProperty;
function bm(e) {
	if (!gf(e)) return vm(e);
	var t = dm(e), n = [];
	for (var r in e) (r != "constructor" || !t && ym.call(e, r)) && n.push(r);
	return n;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keysIn.js
function xm(e) {
	return hm(e) ? lm(e, !0) : bm(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignIn.js
function Sm(e, t) {
	return e && dp(t, xm(t), e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneBuffer.js
var Cm = typeof exports == "object" && exports && !exports.nodeType && exports, wm = Cm && typeof module == "object" && module && !module.nodeType && module, Tm = wm && wm.exports === Cm ? Nd.Buffer : void 0, Em = Tm ? Tm.allocUnsafe : void 0;
function Dm(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Em ? Em(n) : new e.constructor(n);
	return e.copy(r), r;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyArray.js
function Om(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayFilter.js
function km(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubArray.js
function Am() {
	return [];
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbols.js
var jm = Object.prototype.propertyIsEnumerable, Mm = Object.getOwnPropertySymbols, Nm = Mm ? function(e) {
	return e == null ? [] : (e = Object(e), km(Mm(e), function(t) {
		return jm.call(e, t);
	}));
} : Am;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbols.js
function Pm(e, t) {
	return dp(e, Nm(e), t);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayPush.js
function Fm(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbolsIn.js
var Im = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Fm(t, Nm(e)), e = qd(e);
	return t;
} : Am;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copySymbolsIn.js
function Lm(e, t) {
	return dp(e, Im(e), t);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetAllKeys.js
function Rm(e, t, n) {
	var r = t(e);
	return yp(e) ? r : Fm(r, n(e));
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeys.js
function zm(e) {
	return Rm(e, gm, Nm);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeysIn.js
function Bm(e) {
	return Rm(e, xm, Im);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_DataView.js
var Vm = If(Nd, "DataView"), Hm = If(Nd, "Promise"), Um = If(Nd, "Set"), Wm = If(Nd, "WeakMap"), Gm = "[object Map]", Km = "[object Object]", qm = "[object Promise]", Jm = "[object Set]", Ym = "[object WeakMap]", Xm = "[object DataView]", Zm = Ef(Vm), Qm = Ef(Lf), $m = Ef(Hm), eh = Ef(Um), th = Ef(Wm), nh = Gd;
(Vm && nh(new Vm(/* @__PURE__ */ new ArrayBuffer(1))) != Xm || Lf && nh(new Lf()) != Gm || Hm && nh(Hm.resolve()) != qm || Um && nh(new Um()) != Jm || Wm && nh(new Wm()) != Ym) && (nh = function(e) {
	var t = Gd(e), n = t == Km ? e.constructor : void 0, r = n ? Ef(n) : "";
	if (r) switch (r) {
		case Zm: return Xm;
		case Qm: return Gm;
		case $m: return qm;
		case eh: return Jm;
		case th: return Ym;
	}
	return t;
});
var rh = nh, ih = Object.prototype.hasOwnProperty;
function ah(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && ih.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Uint8Array.js
var oh = Nd.Uint8Array;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneArrayBuffer.js
function sh(e) {
	var t = new e.constructor(e.byteLength);
	return new oh(t).set(new oh(e)), t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneDataView.js
function ch(e, t) {
	var n = t ? sh(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneRegExp.js
var lh = /\w*$/;
function uh(e) {
	var t = new e.constructor(e.source, lh.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneSymbol.js
var dh = Pd ? Pd.prototype : void 0, fh = dh ? dh.valueOf : void 0;
function ph(e) {
	return fh ? Object(fh.call(e)) : {};
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneTypedArray.js
function mh(e, t) {
	var n = t ? sh(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneByTag.js
var hh = "[object Boolean]", gh = "[object Date]", _h = "[object Map]", vh = "[object Number]", yh = "[object RegExp]", bh = "[object Set]", xh = "[object String]", Sh = "[object Symbol]", Ch = "[object ArrayBuffer]", wh = "[object DataView]", Th = "[object Float32Array]", Eh = "[object Float64Array]", Dh = "[object Int8Array]", Oh = "[object Int16Array]", kh = "[object Int32Array]", Ah = "[object Uint8Array]", jh = "[object Uint8ClampedArray]", Mh = "[object Uint16Array]", Nh = "[object Uint32Array]";
function Ph(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Ch: return sh(e);
		case hh:
		case gh: return new r(+e);
		case wh: return ch(e, n);
		case Th:
		case Eh:
		case Dh:
		case Oh:
		case kh:
		case Ah:
		case jh:
		case Mh:
		case Nh: return mh(e, n);
		case _h: return new r();
		case vh:
		case xh: return new r(e);
		case yh: return uh(e);
		case bh: return new r();
		case Sh: return ph(e);
	}
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseCreate.js
var Fh = Object.create, Ih = function() {
	function e() {}
	return function(t) {
		if (!gf(t)) return {};
		if (Fh) return Fh(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneObject.js
function Lh(e) {
	return typeof e.constructor == "function" && !dm(e) ? Ih(qd(e)) : {};
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMap.js
var Rh = "[object Map]";
function zh(e) {
	return Jd(e) && rh(e) == Rh;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isMap.js
var Bh = am && am.isMap, Vh = Bh ? tm(Bh) : zh, Hh = "[object Set]";
function Uh(e) {
	return Jd(e) && rh(e) == Hh;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSet.js
var Wh = am && am.isSet, Gh = Wh ? tm(Wh) : Uh, Kh = 1, qh = 2, Jh = 4, Yh = "[object Arguments]", Xh = "[object Array]", Zh = "[object Boolean]", Qh = "[object Date]", $h = "[object Error]", eg = "[object Function]", tg = "[object GeneratorFunction]", ng = "[object Map]", rg = "[object Number]", ig = "[object Object]", ag = "[object RegExp]", og = "[object Set]", sg = "[object String]", cg = "[object Symbol]", lg = "[object WeakMap]", ug = "[object ArrayBuffer]", dg = "[object DataView]", fg = "[object Float32Array]", pg = "[object Float64Array]", mg = "[object Int8Array]", hg = "[object Int16Array]", gg = "[object Int32Array]", _g = "[object Uint8Array]", vg = "[object Uint8ClampedArray]", yg = "[object Uint16Array]", bg = "[object Uint32Array]", Y = {};
Y[Yh] = Y[Xh] = Y[ug] = Y[dg] = Y[Zh] = Y[Qh] = Y[fg] = Y[pg] = Y[mg] = Y[hg] = Y[gg] = Y[ng] = Y[rg] = Y[ig] = Y[ag] = Y[og] = Y[sg] = Y[cg] = Y[_g] = Y[vg] = Y[yg] = Y[bg] = !0, Y[$h] = Y[eg] = Y[lg] = !1;
function xg(e, t, n, r, i, a) {
	var o, s = t & Kh, c = t & qh, l = t & Jh;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!gf(e)) return e;
	var u = yp(e);
	if (u) {
		if (o = ah(e), !s) return Om(e, o);
	} else {
		var d = rh(e), f = d == eg || d == tg;
		if (wp(e)) return Dm(e, s);
		if (d == ig || d == Yh || f && !i) {
			if (o = c || f ? {} : Lh(e), !s) return c ? Lm(e, Sm(o, e)) : Pm(e, _m(o, e));
		} else {
			if (!Y[d]) return i ? e : {};
			o = Ph(e, d, s);
		}
	}
	a ||= new ap();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), Gh(e) ? e.forEach(function(r) {
		o.add(xg(r, t, n, r, e, a));
	}) : Vh(e) && e.forEach(function(r, i) {
		o.set(i, xg(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Bm : zm : c ? xm : gm)(e);
	return op(m || e, function(r, i) {
		m && (i = r, r = e[i]), up(o, i, xg(r, t, n, i, e, a));
	}), o;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/cloneDeep.js
var Sg = 1, Cg = 4;
function wg(e) {
	return xg(e, Sg | Cg);
}
// node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var Tg = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
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
})))()), Eg = 4;
function Dg(e) {
	return xg(e, Eg);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayMap.js
function Og(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isSymbol.js
var kg = "[object Symbol]";
function Ag(e) {
	return typeof e == "symbol" || Jd(e) && Gd(e) == kg;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/memoize.js
var jg = "Expected a function";
function Mg(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(jg);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Mg.Cache || np)(), n;
}
Mg.Cache = np;
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_memoizeCapped.js
var Ng = 500;
function Pg(e) {
	var t = Mg(e, function(e) {
		return n.size === Ng && n.clear(), e;
	}), n = t.cache;
	return t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stringToPath.js
var Fg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ig = /\\(\\)?/g, Lg = Pg(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Fg, function(e, n, r, i) {
		t.push(r ? i.replace(Ig, "$1") : n || e);
	}), t;
}), Rg = 1 / 0;
function zg(e) {
	if (typeof e == "string" || Ag(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Rg ? "-0" : t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseToString.js
var Bg = 1 / 0, Vg = Pd ? Pd.prototype : void 0, Hg = Vg ? Vg.toString : void 0;
function Ug(e) {
	if (typeof e == "string") return e;
	if (yp(e)) return Og(e, Ug) + "";
	if (Ag(e)) return Hg ? Hg.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Bg ? "-0" : t;
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toString.js
function Wg(e) {
	return e == null ? "" : Ug(e);
}
// node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toPath.js
function Gg(e) {
	return yp(e) ? Og(e, zg) : Ag(e) ? [e] : Om(Lg(Wg(e)));
}
f();
function X() {
	return X = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, X.apply(this, arguments);
}
function Kg(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function qg(e, t) {
	if (e == null) return {};
	for (var n = {}, r = Object.keys(e), i, a = 0; a < r.length; a++) i = r[a], t.indexOf(i) >= 0 || (n[i] = e[i]);
	return n;
}
function Jg(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var Yg = /*#__PURE__*/ (0, w.createContext)(void 0);
Yg.displayName = "FormikContext";
var Xg = Yg.Provider;
Yg.Consumer;
function Zg() {
	return (0, w.useContext)(Yg);
}
var Qg = function(e) {
	return Array.isArray(e) && e.length === 0;
}, Z = function(e) {
	return typeof e == "function";
}, $g = function(e) {
	return typeof e == "object" && !!e;
}, e_ = function(e) {
	return String(Math.floor(Number(e))) === e;
}, t_ = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, n_ = function(e) {
	return w.Children.count(e) === 0;
}, r_ = function(e) {
	return $g(e) && Z(e.then);
};
function Q(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = Gg(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function i_(e, t, n) {
	for (var r = Dg(e), i = r, a = 0, o = Gg(t); a < o.length - 1; a++) {
		var s = o[a], c = Q(e, o.slice(0, a + 1));
		if (c && ($g(c) || Array.isArray(c))) i = i[s] = Dg(c);
		else {
			var l = o[a + 1];
			i = i[s] = e_(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function a_(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		$g(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, a_(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function o_(e, t) {
	switch (t.type) {
		case "SET_VALUES": return X({}, e, { values: t.payload });
		case "SET_TOUCHED": return X({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Tg.default)(e.errors, t.payload) ? e : X({}, e, { errors: t.payload });
		case "SET_STATUS": return X({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return X({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return X({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return X({}, e, { values: i_(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return X({}, e, { touched: i_(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return X({}, e, { errors: i_(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return X({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return X({}, e, {
			touched: a_(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return X({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return X({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var s_ = {}, c_ = {};
function l_(e) {
	var t = e.validateOnChange, n = t === void 0 || t, r = e.validateOnBlur, i = r === void 0 || r, a = e.validateOnMount, o = a !== void 0 && a, s = e.isInitialValid, c = e.enableReinitialize, l = c !== void 0 && c, u = e.onSubmit, d = qg(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = X({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = (0, w.useRef)(f.initialValues), m = (0, w.useRef)(f.initialErrors || s_), h = (0, w.useRef)(f.initialTouched || c_), g = (0, w.useRef)(f.initialStatus), _ = (0, w.useRef)(!1), v = (0, w.useRef)({});
	(0, w.useEffect)(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = (0, w.useState)(0)[1], b = (0, w.useRef)({
		values: wg(f.initialValues),
		errors: wg(f.initialErrors) || s_,
		touched: wg(f.initialTouched) || c_,
		status: wg(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = (0, w.useCallback)(function(e) {
		var t = b.current;
		b.current = o_(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = (0, w.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(s_) : r_(i) ? i.then(function(e) {
				n(e || s_);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), T = (0, w.useCallback)(function(e, t) {
		var n = f.validationSchema, r = Z(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : f_(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(s_);
			}, function(n) {
				n.name === "ValidationError" ? e(d_(n)) : t(n);
			});
		});
	}, [f.validationSchema]), E = (0, w.useCallback)(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), D = (0, w.useCallback)(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return Z(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return E(t, Q(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = i_(e, t[r], n)), e;
			}, {});
		});
	}, [E]), O = (0, w.useCallback)(function(e) {
		return Promise.all([
			D(e),
			f.validationSchema ? T(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return Ad.all([
				t,
				n,
				r
			], { arrayMerge: m_ });
		});
	}, [
		f.validate,
		f.validationSchema,
		D,
		C,
		T
	]), k = v_(function(e) {
		return e === void 0 && (e = x.values), S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), O(e).then(function(e) {
			return _.current && (S({
				type: "SET_ISVALIDATING",
				payload: !1
			}), S({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	(0, w.useEffect)(function() {
		o && _.current === !0 && (0, Tg.default)(p.current, f.initialValues) && k(p.current);
	}, [o, k]);
	var A = (0, w.useCallback)(function(e) {
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
			var o = f.onReset(x.values, le);
			r_(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, w.useEffect)(function() {
		_.current === !0 && !(0, Tg.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, A(), o && k(p.current));
	}, [
		l,
		f.initialValues,
		A,
		o,
		k
	]), (0, w.useEffect)(function() {
		l && _.current === !0 && !(0, Tg.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || s_, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || s_
		}));
	}, [l, f.initialErrors]), (0, w.useEffect)(function() {
		l && _.current === !0 && !(0, Tg.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || c_, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || c_
		}));
	}, [l, f.initialTouched]), (0, w.useEffect)(function() {
		l && _.current === !0 && !(0, Tg.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var j = v_(function(e) {
		if (v.current[e] && Z(v.current[e].validate)) {
			var t = Q(x.values, e), n = v.current[e].validate(t);
			return r_(n) ? (S({
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
		}), T(x.values, e).then(function(e) {
			return e;
		}).then(function(t) {
			S({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: Q(t, e)
				}
			}), S({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		})) : Promise.resolve();
	}), M = (0, w.useCallback)(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), N = (0, w.useCallback)(function(e) {
		delete v.current[e];
	}, []), P = v_(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? k(x.values) : Promise.resolve();
	}), F = (0, w.useCallback)(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), ee = v_(function(e, t) {
		var r = Z(e) ? e(x.values) : e;
		return S({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? k(r) : Promise.resolve();
	}), I = (0, w.useCallback)(function(e, t) {
		S({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), L = v_(function(e, t, r) {
		var i = Z(t) ? t(Q(x.values, e)) : t;
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? k(i_(x.values, e, i)) : Promise.resolve();
	}), R = (0, w.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!t_(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? g_(Q(x.values, n), u, l) : d && f ? h_(d) : l;
		}
		n && L(n, r);
	}, [L, x.values]), te = v_(function(e) {
		if (t_(e)) return function(t) {
			return R(t, e);
		};
		R(e);
	}), ne = v_(function(e, t, n) {
		return t === void 0 && (t = !0), S({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? k(x.values) : Promise.resolve();
	}), re = (0, w.useCallback)(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id;
		n.outerHTML, ne(t || r || i, !0);
	}, [ne]), ie = v_(function(e) {
		if (t_(e)) return function(t) {
			return re(t, e);
		};
		re(e);
	}), ae = (0, w.useCallback)(function(e) {
		Z(e) ? S({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : S({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), oe = (0, w.useCallback)(function(e) {
		S({
			type: "SET_STATUS",
			payload: e
		});
	}, []), se = (0, w.useCallback)(function(e) {
		S({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), z = v_(function() {
		return S({ type: "SUBMIT_ATTEMPT" }), k().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = ue(), n === void 0) return;
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
	}), ce = v_(function(e) {
		e && e.preventDefault && Z(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Z(e.stopPropagation) && e.stopPropagation(), z().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), le = {
		resetForm: A,
		validateForm: k,
		validateField: j,
		setErrors: F,
		setFieldError: I,
		setFieldTouched: ne,
		setFieldValue: L,
		setStatus: oe,
		setSubmitting: se,
		setTouched: P,
		setValues: ee,
		setFormikState: ae,
		submitForm: z
	}, ue = v_(function() {
		return u(x.values, le);
	}), de = v_(function(e) {
		e && e.preventDefault && Z(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Z(e.stopPropagation) && e.stopPropagation(), A();
	}), fe = (0, w.useCallback)(function(e) {
		return {
			value: Q(x.values, e),
			error: Q(x.errors, e),
			touched: !!Q(x.touched, e),
			initialValue: Q(p.current, e),
			initialTouched: !!Q(h.current, e),
			initialError: Q(m.current, e)
		};
	}, [
		x.errors,
		x.touched,
		x.values
	]), pe = (0, w.useCallback)(function(e) {
		return {
			setValue: function(t, n) {
				return L(e, t, n);
			},
			setTouched: function(t, n) {
				return ne(e, t, n);
			},
			setError: function(t) {
				return I(e, t);
			}
		};
	}, [
		L,
		ne,
		I
	]), B = (0, w.useCallback)(function(e) {
		var t = $g(e), n = t ? e.name : e, r = Q(x.values, n), i = {
			name: n,
			value: r,
			onChange: te,
			onBlur: ie
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		ie,
		te,
		x.values
	]), me = (0, w.useMemo)(function() {
		return !(0, Tg.default)(p.current, x.values);
	}, [p.current, x.values]), he = (0, w.useMemo)(function() {
		return s === void 0 || me ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && Z(s) ? s(f) : s;
	}, [
		s,
		me,
		x.errors,
		f
	]);
	return X({}, x, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: ie,
		handleChange: te,
		handleReset: de,
		handleSubmit: ce,
		resetForm: A,
		setErrors: F,
		setFormikState: ae,
		setFieldTouched: ne,
		setFieldValue: L,
		setFieldError: I,
		setStatus: oe,
		setSubmitting: se,
		setTouched: P,
		setValues: ee,
		submitForm: z,
		validateForm: k,
		validateField: j,
		isValid: he,
		dirty: me,
		unregisterField: N,
		registerField: M,
		getFieldProps: B,
		getFieldMeta: fe,
		getFieldHelpers: pe,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function u_(e) {
	var t = l_(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, w.useImperativeHandle)(a, function() {
		return t;
	}), (0, w.createElement)(Xg, { value: t }, n ? (0, w.createElement)(n, t) : i ? i(t) : r ? Z(r) ? r(t) : n_(r) ? null : w.Children.only(r) : null);
}
function d_(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return i_(t, e.path, e.message);
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
			Q(t, o.path) || (t = i_(t, o.path, o.message));
		}
	}
	return t;
}
function f_(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = p_(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function p_(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		t[r] = Array.isArray(e[r]) === !0 ? e[r].map(function(e) {
			return Array.isArray(e) === !0 || tf(e) ? p_(e) : e === "" ? void 0 : e;
		}) : tf(e[r]) ? p_(e[r]) : e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function m_(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? Ad(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = Ad(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function h_(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function g_(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var __ = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? w.useLayoutEffect : w.useEffect;
function v_(e) {
	var t = (0, w.useRef)(e);
	return __(function() {
		t.current = e;
	}), (0, w.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
function y_(e) {
	var t = Zg(), n = t.getFieldProps, r = t.getFieldMeta, i = t.getFieldHelpers, a = t.registerField, o = t.unregisterField, s = $g(e) ? e : { name: e }, c = s.name, l = s.validate;
	(0, w.useEffect)(function() {
		return c && a(c, { validate: l }), function() {
			c && o(c);
		};
	}, [
		a,
		o,
		c,
		l
	]);
	var u = (0, w.useMemo)(function() {
		return i(c);
	}, [i, c]);
	return [
		n(s),
		r(c),
		u
	];
}
function b_(e) {
	var t = e.validate, n = e.name, r = e.render, i = e.children, a = e.as, o = e.component, s = e.className, c = qg(e, [
		"validate",
		"name",
		"render",
		"children",
		"as",
		"component",
		"className"
	]), l = qg(Zg(), ["validate", "validationSchema"]), u = l.registerField, d = l.unregisterField;
	(0, w.useEffect)(function() {
		return u(n, { validate: t }), function() {
			d(n);
		};
	}, [
		u,
		d,
		n,
		t
	]);
	var f = l.getFieldProps(X({ name: n }, c)), p = l.getFieldMeta(n), m = {
		field: f,
		form: l
	};
	if (r) return r(X({}, m, { meta: p }));
	if (Z(i)) return i(X({}, m, { meta: p }));
	if (o) {
		if (typeof o == "string") {
			var h = c.innerRef, g = qg(c, ["innerRef"]);
			return (0, w.createElement)(o, X({ ref: h }, f, g, { className: s }), i);
		}
		return (0, w.createElement)(o, X({
			field: f,
			form: l
		}, c, { className: s }), i);
	}
	var _ = a || "input";
	if (typeof _ == "string") {
		var v = c.innerRef, y = qg(c, ["innerRef"]);
		return (0, w.createElement)(_, X({ ref: v }, f, y, { className: s }), i);
	}
	return (0, w.createElement)(_, X({}, f, c, { className: s }), i);
}
var x_ = /*#__PURE__*/ (0, w.forwardRef)(function(e, t) {
	var n = e.action, r = qg(e, ["action"]), i = n ?? "#", a = Zg(), o = a.handleReset, s = a.handleSubmit;
	return (0, w.createElement)("form", X({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
x_.displayName = "Form";
var S_ = function(e, t, n) {
	var r = E_(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, C_ = function(e, t, n) {
	var r = E_(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, w_ = function(e, t, n) {
	var r = E_(e);
	return r.splice(t, 0, n), r;
}, T_ = function(e, t, n) {
	var r = E_(e);
	return r[t] = n, r;
}, E_ = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(X({}, e, { length: t + 1 }));
}, D_ = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || $g(e) ? n(E_(e)) : e;
	};
}, O_ = /*#__PURE__*/ function(e) {
	Kg(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = D_(r, e), o = D_(t, e), s = i_(n.values, a, e(Q(n.values, a))), c = r ? i(Q(n.errors, a)) : void 0, l = t ? o(Q(n.touched, a)) : void 0;
				return Qg(c) && (c = void 0), Qg(l) && (l = void 0), X({}, n, {
					values: s,
					errors: r ? i_(n.errors, a, c) : n.errors,
					touched: t ? i_(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(E_(t), [wg(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return C_(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return S_(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return w_(n, e, t);
			}, function(t) {
				return w_(t, e, null);
			}, function(t) {
				return w_(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return T_(n, e, t);
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
		}, n.remove = n.remove.bind(Jg(n)), n.pop = n.pop.bind(Jg(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Tg.default)(Q(e.formik.values, e.name), Q(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? E_(n) : [];
			return t ||= r[e], Z(r.splice) && r.splice(e, 1), Z(r.every) && r.every(function(e) {
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = qg(o, ["validate", "validationSchema"]), c = X({}, e, {
			form: s,
			name: a
		});
		return n ? (0, w.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : n_(i) ? null : w.Children.only(i) : null;
	}, t;
}(w.Component);
O_.defaultProps = { validateOnChange: !0 };
// src/lib/context.ts
var k_ = (0, w.createContext)(null), A_ = () => (0, w.useContext)(k_), $ = v(), j_ = ({ fileTypes: e, onFileSelect: t, onError: n, onClose: r }) => {
	let [i, a] = (0, w.useState)(null), { element: o } = (0, w.useContext)(y), s = A_(), c = (0, w.useRef)(null), l = o.getAttribute("data-usage-id");
	if ((0, w.useEffect)(() => {
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
	return u.searchParams.set("multiSelect", "false"), u.searchParams.set("embedded", "true"), e && u.searchParams.set("fileTypes", e.join(",")), u.searchParams.set("usageKey", l), /* @__PURE__ */ (0, $.jsx)(yd, {
		title: "File Picker",
		size: "xl",
		isOpen: !0,
		className: "bg-light-200",
		onClose: r,
		footerNode: /* @__PURE__ */ (0, $.jsxs)(E, { children: [
			/* @__PURE__ */ (0, $.jsx)(E.Spacer, {}),
			/* @__PURE__ */ (0, $.jsx)(sa, {
				variant: "tertiary",
				onClick: r,
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, $.jsx)(sa, {
				disabled: !i,
				onClick: async () => {
					await t(i);
				},
				children: "Use Selected File"
			})
		] }),
		isOverflowVisible: !0,
		children: /* @__PURE__ */ (0, $.jsx)("iframe", {
			title: "File Picker",
			ref: c,
			width: "100%",
			height: "800",
			src: u.toString()
		})
	});
}, M_ = ({ children: e, setValue: t, fileTypes: n = null }) => {
	let [r, i] = (0, w.useState)(!1), [a, o] = (0, w.useState)(null), s = A_(), c = (0, w.useCallback)(async (e) => {
		try {
			await t(e), o(null);
		} catch (e) {
			o(e.message);
		}
		i(!1);
	}, [t]);
	return s?.file_picker_url ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsxs)(ii, { children: [e, /* @__PURE__ */ (0, $.jsx)(ii.Append, { children: /* @__PURE__ */ (0, $.jsx)(sa, {
			variant: "outline-secondary",
			onClick: () => i(!0),
			children: "Select File"
		}) })] }),
		a && /* @__PURE__ */ (0, $.jsx)(q.Control.Feedback, {
			type: "default",
			children: a
		}),
		r && /* @__PURE__ */ (0, $.jsx)(j_, {
			fileTypes: n,
			onFileSelect: c,
			onError: o,
			onClose: () => i(!1)
		})
	] }) : e;
}, N_ = () => {
	let [e] = y_("variant"), [t] = y_("image_position"), [n, , { setValue: r }] = y_("media_url"), [a] = y_("description"), o = e.value !== h.section, s = e.value === h.section, c = {
		xs: 12,
		sm: o ? 8 : 12,
		lg: o ? 10 : 12
	};
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "cover-editor-form",
		children: /* @__PURE__ */ (0, $.jsxs)(u, {
			className: "cover-editor-grid",
			children: [
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-display-name",
					xs: 12,
					children: [
						/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Display Name" }),
						/* @__PURE__ */ (0, $.jsx)(b_, {
							as: q.Control,
							name: "display_name"
						}),
						/* @__PURE__ */ (0, $.jsx)(q.Text, {
							muted: !0,
							children: "The label for this block, shown only in studio."
						})
					]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-variant",
					xs: 12,
					sm: 6,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Variant" }), /* @__PURE__ */ (0, $.jsxs)(q.Control, {
						as: "select",
						...e,
						children: [
							/* @__PURE__ */ (0, $.jsx)("option", {
								value: h.section,
								children: "Section Cover"
							}),
							/* @__PURE__ */ (0, $.jsx)("option", {
								value: h.course,
								children: "Course Cover"
							}),
							/* @__PURE__ */ (0, $.jsx)("option", {
								value: h.separator,
								children: "Separator"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-media-url",
					xs: 12,
					sm: 6,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Image URL" }), /* @__PURE__ */ (0, $.jsx)(M_, {
						setValue: (e) => r(e),
						fileTypes: ["image"],
						children: /* @__PURE__ */ (0, $.jsx)(b_, {
							as: q.Control,
							name: "media_url",
							value: n.value
						})
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-media-alt-text",
					xs: 12,
					children: [
						/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Image Alt Text" }),
						/* @__PURE__ */ (0, $.jsx)(b_, {
							as: q.Control,
							name: "media_alt_text"
						}),
						/* @__PURE__ */ (0, $.jsx)(q.Text, {
							muted: !0,
							children: "Provide a description of your image for use with screen readers."
						})
					]
				}),
				s && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-image-position",
					xs: 12,
					sm: 6,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Image Position" }), /* @__PURE__ */ (0, $.jsxs)(q.Control, {
						as: "select",
						...t,
						children: [/* @__PURE__ */ (0, $.jsx)("option", {
							value: i.right,
							children: "Image Right"
						}), /* @__PURE__ */ (0, $.jsx)("option", {
							value: i.left,
							children: "Image Left"
						})]
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-top-header",
					...c,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Top Header" }), /* @__PURE__ */ (0, $.jsx)(b_, {
						as: q.Control,
						name: "top_header"
					})]
				}),
				o && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-top-header-color",
					xs: 12,
					sm: 4,
					lg: 2,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(b_, {
						as: q.Control,
						name: "top_header_color",
						type: "color",
						"aria-label": "Top header color"
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-main-header",
					...c,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Main Header" }), /* @__PURE__ */ (0, $.jsx)(b_, {
						as: q.Control,
						name: "main_header"
					})]
				}),
				o && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-main-header-color",
					xs: 12,
					sm: 4,
					lg: 2,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(b_, {
						as: q.Control,
						name: "main_header_color",
						type: "color",
						"aria-label": "Main header color"
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-subheader",
					...c,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Subheader" }), /* @__PURE__ */ (0, $.jsx)(b_, {
						as: q.Control,
						name: "subheader"
					})]
				}),
				o && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-subheader-color",
					xs: 12,
					sm: 4,
					lg: 2,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(b_, {
						as: q.Control,
						name: "subheader_color",
						type: "color",
						"aria-label": "Subheader color"
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-description",
					...c,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Description" }), /* @__PURE__ */ (0, $.jsx)(q.Control, {
						as: "textarea",
						...a
					})]
				}),
				o && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: l,
					controlId: "cover-form-description-color",
					xs: 12,
					sm: 4,
					lg: 2,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(b_, {
						as: q.Control,
						name: "description_color",
						type: "color",
						"aria-label": "Description color"
					})]
				})
			]
		})
	});
}, P_ = () => {
	let { runtime: e } = (0, w.useContext)(y), t = Zg();
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "react-studio-block",
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "cover-block-editor editor-with-buttons",
			children: [/* @__PURE__ */ (0, $.jsx)("div", {
				className: "wrapper-comp-settings is-active cover-editor-body",
				children: /* @__PURE__ */ (0, $.jsx)(N_, {})
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: "xblock-actions cover-editor-actions",
				children: /* @__PURE__ */ (0, $.jsxs)(E, { children: [
					/* @__PURE__ */ (0, $.jsx)(E.Spacer, {}),
					/* @__PURE__ */ (0, $.jsx)(sa, {
						variant: "tertiary",
						onClick: () => e.notify("cancel", {}),
						children: "Cancel"
					}),
					/* @__PURE__ */ (0, $.jsx)(sa, {
						variant: "primary",
						onClick: t.submitForm,
						children: "Save"
					})
				] })
			})]
		})
	});
}, F_ = (e) => {
	let { runtime: t } = (0, w.useContext)(y), n = d("studio_save");
	return /* @__PURE__ */ (0, $.jsx)(u_, {
		initialValues: e,
		onSubmit: (e) => {
			_({
				saveUrl: n,
				data: e,
				runtime: t,
				errorMessage: "Failed to save cover block configuration"
			});
		},
		children: /* @__PURE__ */ (0, $.jsx)(P_, {})
	});
}, I_ = ".wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.cover-block-editor{flex-direction:column;justify-content:space-between;display:flex}.cover-editor-body,.cover-editor-form{padding:var(--pgn-exemplar-xblock-studio-stack-padding,16px)}.cover-editor-grid{row-gap:var(--pgn-exemplar-xblock-studio-field-gap,16px)}.cover-editor-field{margin-bottom:var(--pgn-exemplar-xblock-studio-field-gap,16px)}.cover-editor-actions{padding:var(--pgn-exemplar-xblock-studio-actions-padding,16px)}", L_ = (e, t, n) => {
	m({
		runtime: e,
		element: t,
		config: n.config,
		styles: I_
	})(/* @__PURE__ */ (0, $.jsx)(k_.Provider, {
		value: n.config,
		children: /* @__PURE__ */ (0, $.jsx)(F_, { ...n.data })
	}));
};
export { L_ as renderBlock };
