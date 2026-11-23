import { C as e, S as t, T as n, _ as r, b as i, c as a, d as o, f as s, g as c, h as l, i as u, l as d, m as f, n as p, o as m, p as h, r as g, s as _, t as v, u as y, v as b, w as x, x as S, y as C } from "./apiTypes-BFNnwC9a.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ActionRow/index.js
var w = /* @__PURE__ */ n(e()), T = /* @__PURE__ */ n(t());
function E({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ w.createElement(e, {
		...r,
		className: (0, T.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function D() {
	return /* @__PURE__ */ w.createElement("span", { className: "pgn__action-row-spacer" });
}
E.Spacer = D, (/* @__PURE__ */ x(((e, t) => {
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
//#endregion
//#region node_modules/.pnpm/uncontrollable@7.2.1_react@18.3.1/node_modules/uncontrollable/lib/esm/hook.js
function O(e, t, n) {
	var r = (0, w.useRef)(e !== void 0), i = (0, w.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, w.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function k(e, t) {
	return k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, k(e, t);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function A(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, k(e, t);
}
//#endregion
//#region node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function j() {
	var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
	e != null && this.setState(e);
}
function M(e) {
	function t(t) {
		return this.constructor.getDerivedStateFromProps(e, t) ?? null;
	}
	this.setState(t.bind(this));
}
function N(e, t) {
	try {
		var n = this.props, r = this.state;
		this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
	} finally {
		this.props = n, this.state = r;
	}
}
j.__suppressDeprecationWarning = !0, M.__suppressDeprecationWarning = !0, N.__suppressDeprecationWarning = !0;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function P(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function F(e) {
	var t = P(e);
	return t && t.defaultView || window;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function I(e, t) {
	return F(e).getComputedStyle(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var L = /([A-Z])/g;
function R(e) {
	return e.replace(L, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var ee = /^ms-/;
function z(e) {
	return R(e).replace(ee, "-ms-");
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var te = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function ne(e) {
	return !!(e && te.test(e));
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function re(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(z(t)) || I(e).getPropertyValue(z(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(z(i)) : ne(i) ? r += i + "(" + a + ") " : n += z(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
//#endregion
//#region node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var ie = /* @__PURE__ */ x(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), ae = /* @__PURE__ */ x(((e, t) => {
	var n = ie();
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
})), oe = /* @__PURE__ */ x(((e, t) => {
	t.exports = ae()();
})), se = { disabled: !1 }, ce = w.createContext(null), le = function(e) {
	return e.scrollTop;
}, ue = /* @__PURE__ */ n(b()), de = "unmounted", fe = "exited", pe = "entering", B = "entered", me = "exiting", he = /* @__PURE__ */ function(e) {
	A(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = fe, r.appearStatus = pe) : o = B : o = t.unmountOnExit || t.mountOnEnter ? de : fe, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: fe } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = pe) : (n === "entering" || n === "entered") && (t = me);
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
				var n = this.props.nodeRef ? this.props.nodeRef.current : ue.findDOMNode(this);
				n && le(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: de });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [ue.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || se.disabled) {
			this.safeSetState({ status: B }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: pe }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: B }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : ue.findDOMNode(this);
		if (!t || se.disabled) {
			this.safeSetState({ status: fe }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: me }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: fe }, function() {
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
		var n = this.props.nodeRef ? this.props.nodeRef.current : ue.findDOMNode(this), r = e == null && !this.props.addEndListener;
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
		var r = i(t, [
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
		return /* @__PURE__ */ w.createElement(ce.Provider, { value: null }, typeof n == "function" ? n(e, r) : w.cloneElement(w.Children.only(n), r));
	}, t;
}(w.Component);
he.contextType = ce, he.propTypes = {};
function ge() {}
he.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: ge,
	onEntering: ge,
	onEntered: ge,
	onExit: ge,
	onExiting: ge,
	onExited: ge
}, he.UNMOUNTED = de, he.EXITED = fe, he.ENTERING = pe, he.ENTERED = B, he.EXITING = me;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var _e = !!(typeof window < "u" && window.document && window.document.createElement), ve = !1, ye = !1;
try {
	var be = {
		get passive() {
			return ve = !0;
		},
		get once() {
			return ye = ve = !0;
		}
	};
	_e && (window.addEventListener("test", be, be), window.removeEventListener("test", be, !0));
} catch {}
function xe(e, t, n, r) {
	if (r && typeof r != "boolean" && !ye) {
		var i = r.once, a = r.capture, o = n;
		!ye && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, ve ? r : a);
	}
	e.addEventListener(t, n, r);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function Se(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function Ce(e, t, n, r) {
	return xe(e, t, n, r), function() {
		Se(e, t, n, r);
	};
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function we(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function Te(e) {
	var t = re(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function Ee(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || we(e, "transitionend", !0);
	}, t + n), a = Ce(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function De(e, t, n, r) {
	n ??= Te(e) || 0;
	var i = Ee(e, n, r), a = Ce(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function Oe(e, t) {
	var n = re(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function ke(e, t) {
	var n = De(e, function(r) {
		r.target === e && (n(), t(r));
	}, Oe(e, "transitionDuration") + Oe(e, "transitionDelay"));
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function Ae() {
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
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function je(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function Me(e) {
	let t = (0, w.useRef)(e);
	return (0, w.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Ne(e) {
	let t = Me(e);
	return (0, w.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var Pe = ["className", "children"], Fe, Ie = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Le = (Fe = {}, Fe[pe] = "show", Fe[B] = "show", Fe), Re = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.className, r = e.children, a = i(e, Pe), o = (0, w.useCallback)(function(e) {
		je(e), a.onEnter && a.onEnter(e);
	}, [a]);
	return /* @__PURE__ */ w.createElement(he, S({
		ref: t,
		addEndListener: ke
	}, a, { onEnter: o }), function(e, t) {
		return /* @__PURE__ */ w.cloneElement(r, S({}, t, { className: (0, T.default)("fade", n, r.props.className, Le[e]) }));
	});
});
Re.defaultProps = Ie, Re.displayName = "Fade";
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/camelize.js
var ze = /-(.)/g;
function Be(e) {
	return e.replace(ze, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Ve = [
	"className",
	"bsPrefix",
	"as"
], He = function(e) {
	return e[0].toUpperCase() + Be(e).slice(1);
};
function Ue(e, t) {
	var n = t === void 0 ? {} : t, r = n.displayName, a = r === void 0 ? He(e) : r, o = n.Component, s = n.defaultProps, c = /* @__PURE__ */ w.forwardRef(function(t, n) {
		var r = t.className, a = t.bsPrefix, s = t.as, c = s === void 0 ? o || "div" : s, l = i(t, Ve), u = C(a, e);
		return /* @__PURE__ */ w.createElement(c, S({
			ref: n,
			className: (0, T.default)(r, u)
		}, l));
	});
	return c.defaultProps = s, c.displayName = a, c;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var We = [
	"as",
	"disabled",
	"onKeyDown"
];
function Ge(e) {
	return !e || e.trim() === "#";
}
var Ke = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, a = e.disabled, o = e.onKeyDown, s = i(e, We), c = function(e) {
		var t = s.href, n = s.onClick;
		if ((a || Ge(t)) && e.preventDefault(), a) {
			e.stopPropagation();
			return;
		}
		n && n(e);
	};
	return Ge(s.href) && (s.role = s.role || "button", s.href = s.href || "#"), a && (s.tabIndex = -1, s["aria-disabled"] = !0), /* @__PURE__ */ w.createElement(r, S({ ref: t }, s, {
		onClick: c,
		onKeyDown: Ae(function(e) {
			e.key === " " && (e.preventDefault(), c(e));
		}, o)
	}));
});
Ke.displayName = "SafeAnchor";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var qe = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], Je = {
	variant: "primary",
	active: !1,
	disabled: !1
}, Ye = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, a = e.size, o = e.active, s = e.className, c = e.block, l = e.type, u = e.as, d = i(e, qe), f = C(n, "btn"), p = (0, T.default)(s, f, o && "active", r && f + "-" + r, c && f + "-block", a && f + "-" + a);
	if (d.href) return /* @__PURE__ */ w.createElement(Ke, S({}, d, {
		as: u,
		ref: t,
		className: (0, T.default)(p, d.disabled && "disabled")
	}));
	t && (d.ref = t), l ? d.type = l : u || (d.type = "button");
	var m = u || "button";
	return /* @__PURE__ */ w.createElement(m, S({}, d, { className: p }));
});
Ye.displayName = "Button", Ye.defaultProps = Je;
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function Xe() {
	let e = (0, w.useRef)(!0), t = (0, w.useRef)(() => e.current);
	return (0, w.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function Ze(e) {
	let t = (0, w.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function Qe(e) {
	let t = Ze(e);
	(0, w.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var $e = 2 ** 31 - 1;
function et(e, t, n) {
	let r = n - Date.now();
	e.current = r <= $e ? setTimeout(t, r) : setTimeout(() => et(e, t, n), $e);
}
function tt() {
	let e = Xe(), t = (0, w.useRef)();
	return Qe(() => clearTimeout(t.current)), (0, w.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= $e ? t.current = setTimeout(r, i) : et(t, r, Date.now() + i));
		}
		return {
			set: r,
			clear: n,
			handleRef: t
		};
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function nt() {
	return (0, w.useState)(null);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function rt(e) {
	let t = Xe();
	return [e[0], (0, w.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var it = "bottom", at = "right", ot = "left", st = "auto", ct = [
	"top",
	it,
	at,
	ot
], lt = "start", ut = "clippingParents", dt = "viewport", ft = "popper", pt = "reference", mt = /* @__PURE__ */ ct.reduce(function(e, t) {
	return e.concat([t + "-" + lt, t + "-end"]);
}, []), ht = /* @__PURE__ */ [].concat(ct, [st]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + lt,
		t + "-end"
	]);
}, []), gt = [
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
function _t(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function vt(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function yt(e) {
	return e instanceof vt(e).Element || e instanceof Element;
}
function bt(e) {
	return e instanceof vt(e).HTMLElement || e instanceof HTMLElement;
}
function xt(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof vt(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var St = Math.max, Ct = Math.min, wt = Math.round;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function Tt() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function Et() {
	return !/^((?!chrome|android).)*safari/i.test(Tt());
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function Dt(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && bt(e) && (i = e.offsetWidth > 0 && wt(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && wt(r.height) / e.offsetHeight || 1);
	var o = (yt(e) ? vt(e) : window).visualViewport, s = !Et() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
function Ot(e) {
	var t = Dt(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function kt(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && xt(n)) {
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
function At(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function jt(e) {
	return vt(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function Mt(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(At(e)) >= 0;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function Nt(e) {
	return ((yt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function Pt(e) {
	return At(e) === "html" ? e : e.assignedSlot || e.parentNode || (xt(e) ? e.host : null) || Nt(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function Ft(e) {
	return !bt(e) || jt(e).position === "fixed" ? null : e.offsetParent;
}
function It(e) {
	var t = /firefox/i.test(Tt());
	if (/Trident/i.test(Tt()) && bt(e) && jt(e).position === "fixed") return null;
	var n = Pt(e);
	for (xt(n) && (n = n.host); bt(n) && ["html", "body"].indexOf(At(n)) < 0;) {
		var r = jt(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Lt(e) {
	for (var t = vt(e), n = Ft(e); n && Mt(n) && jt(n).position === "static";) n = Ft(n);
	return n && (At(n) === "html" || At(n) === "body" && jt(n).position === "static") ? t : n || It(e) || t;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function Rt(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function zt(e, t, n) {
	return St(e, Ct(t, n));
}
function Bt(e, t, n) {
	var r = zt(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Vt() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function Ht(e) {
	return Object.assign({}, Vt(), e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function Ut(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var Wt = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ht(typeof e == "number" ? Ut(e, ct) : e);
};
function Gt(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = _t(n.placement), c = Rt(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = Wt(i.padding, n), d = Ot(a), f = c === "y" ? "top" : ot, p = c === "y" ? it : at, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Lt(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = zt(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function Kt(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || kt(t.elements.popper, r) && (t.elements.arrow = r));
}
var qt = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Gt,
	effect: Kt,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function Jt(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var Yt = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function Xt(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: wt(n * i) / i || 0,
		y: wt(r * i) / i || 0
	};
}
function Zt(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = ot, b = "top", x = window;
	if (l) {
		var S = Lt(n), C = "clientHeight", w = "clientWidth";
		if (S === vt(n) && (S = Nt(n), jt(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = it;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = at;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Yt), O = u === !0 ? Xt({
		x: p,
		y: h
	}, vt(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Qt(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: _t(t.placement),
		variation: Jt(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Zt(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Zt(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var $t = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Qt,
	data: {}
}, en = { passive: !0 };
function tn(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = vt(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, en);
	}), s && c.addEventListener("resize", n.update, en), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, en);
		}), s && c.removeEventListener("resize", n.update, en);
	};
}
var nn = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: tn,
	data: {}
}, rn = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function an(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return rn[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var on = {
	start: "end",
	end: "start"
};
function sn(e) {
	return e.replace(/start|end/g, function(e) {
		return on[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function cn(e) {
	var t = vt(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function ln(e) {
	return Dt(Nt(e)).left + cn(e).scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function un(e, t) {
	var n = vt(e), r = Nt(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = Et();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + ln(e),
		y: c
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function dn(e) {
	var t = Nt(e), n = cn(e), r = e.ownerDocument?.body, i = St(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = St(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + ln(e), s = -n.scrollTop;
	return jt(r || t).direction === "rtl" && (o += St(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function fn(e) {
	var t = jt(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function pn(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(At(e)) >= 0 ? e.ownerDocument.body : bt(e) && fn(e) ? e : pn(Pt(e));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function mn(e, t) {
	t === void 0 && (t = []);
	var n = pn(e), r = n === e.ownerDocument?.body, i = vt(n), a = r ? [i].concat(i.visualViewport || [], fn(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(mn(Pt(a)));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function hn(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function gn(e, t) {
	var n = Dt(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function _n(e, t, n) {
	return t === "viewport" ? hn(un(e, n)) : yt(t) ? gn(t, n) : hn(dn(Nt(e)));
}
function vn(e) {
	var t = mn(Pt(e)), n = ["absolute", "fixed"].indexOf(jt(e).position) >= 0 && bt(e) ? Lt(e) : e;
	return yt(n) ? t.filter(function(e) {
		return yt(e) && kt(e, n) && At(e) !== "body";
	}) : [];
}
function yn(e, t, n, r) {
	var i = t === "clippingParents" ? vn(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = _n(e, n, r);
		return t.top = St(i.top, t.top), t.right = Ct(i.right, t.right), t.bottom = Ct(i.bottom, t.bottom), t.left = St(i.left, t.left), t;
	}, _n(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function bn(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? _t(r) : null, a = r ? Jt(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case it:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case at:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case ot:
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
	var l = i ? Rt(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case lt:
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
function xn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? ut : s, l = n.rootBoundary, u = l === void 0 ? dt : l, d = n.elementContext, f = d === void 0 ? ft : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = Ht(typeof g == "number" ? Ut(g, ct) : g), v = f === "popper" ? pt : ft, y = e.rects.popper, b = e.elements[m ? v : f], x = yn(yt(b) ? b : b.contextElement || Nt(e.elements.popper), c, u, o), S = Dt(e.elements.reference), C = bn({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = hn(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
function Sn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? ht : c, u = Jt(r), d = u ? s ? mt : mt.filter(function(e) {
		return Jt(e) === u;
	}) : ct, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = xn(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[_t(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function Cn(e) {
	if (_t(e) === "auto") return [];
	var t = an(e);
	return [
		sn(e),
		t,
		sn(t)
	];
}
function wn(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = _t(g) === g, v = c || (_ || !m ? [an(g)] : Cn(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(_t(n) === "auto" ? Sn(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = _t(E), O = Jt(E) === lt, k = ["top", it].indexOf(D) >= 0, A = k ? "width" : "height", j = xn(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? at : ot : O ? it : "top";
			b[A] > x[A] && (M = an(M));
			var N = an(M), P = [];
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
var Tn = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: wn,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function En(e, t, n) {
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
function Dn(e) {
	return [
		"top",
		at,
		it,
		ot
	].some(function(t) {
		return e[t] >= 0;
	});
}
function On(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = xn(t, { elementContext: "reference" }), s = xn(t, { altBoundary: !0 }), c = En(o, r), l = En(s, i, a), u = Dn(c), d = Dn(l);
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
var kn = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: On
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function An(e, t, n) {
	var r = _t(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function jn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = ht.reduce(function(e, n) {
		return e[n] = An(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var Mn = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: jn
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function Nn(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = bn({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var Pn = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: Nn,
	data: {}
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function Fn(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function In(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = xn(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = _t(t.placement), v = Jt(t.placement), y = !v, b = Rt(_), x = Fn(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : ot, A = b === "y" ? it : at, j = b === "y" ? "height" : "width", M = S[b], N = M + g[k], P = M - g[A], F = p ? -w[j] / 2 : 0, I = v === "start" ? C[j] : w[j], L = v === "start" ? -w[j] : -C[j], R = t.elements.arrow, ee = p && R ? Ot(R) : {
				width: 0,
				height: 0
			}, z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Vt(), te = z[k], ne = z[A], re = zt(0, C[j], ee[j]), ie = y ? C[j] / 2 - F - re - te - E.mainAxis : I - re - te - E.mainAxis, ae = y ? -C[j] / 2 + F + re + ne + E.mainAxis : L + re + ne + E.mainAxis, oe = t.elements.arrow && Lt(t.elements.arrow), se = oe ? b === "y" ? oe.clientTop || 0 : oe.clientLeft || 0 : 0, ce = D?.[b] ?? 0, le = M + ie - ce - se, ue = M + ae - ce, de = zt(p ? Ct(N, le) : N, M, p ? St(P, ue) : P);
			S[b] = de, O[b] = de - M;
		}
		if (s) {
			var fe = b === "x" ? "top" : ot, pe = b === "x" ? it : at, B = S[x], me = x === "y" ? "height" : "width", he = B + g[fe], ge = B - g[pe], _e = ["top", ot].indexOf(_) !== -1, ve = D?.[x] ?? 0, ye = _e ? he : B - C[me] - w[me] - ve + E.altAxis, be = _e ? B + C[me] + w[me] - ve - E.altAxis : ge, xe = p && _e ? Bt(ye, B, be) : zt(p ? ye : he, B, p ? be : ge);
			S[x] = xe, O[x] = xe - B;
		}
		t.modifiersData[r] = O;
	}
}
var Ln = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: In,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function Rn(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function zn(e) {
	return e === vt(e) || !bt(e) ? cn(e) : Rn(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function Bn(e) {
	var t = e.getBoundingClientRect(), n = wt(t.width) / e.offsetWidth || 1, r = wt(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Vn(e, t, n) {
	n === void 0 && (n = !1);
	var r = bt(t), i = bt(t) && Bn(t), a = Nt(t), o = Dt(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((At(t) !== "body" || fn(a)) && (s = zn(t)), bt(t) ? (c = Dt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = ln(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function Hn(e) {
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
function Un(e) {
	var t = Hn(e);
	return gt.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Wn(e) {
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
function Gn(e) {
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
var Kn = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function qn() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function Jn(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Kn : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, Kn, a),
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
					reference: yt(e) ? mn(e) : e.contextElement ? mn(e.contextElement) : [],
					popper: mn(t)
				};
				var s = Un(Gn([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (qn(t, n)) {
						i.rects = {
							reference: Vn(t, Lt(n), i.options.strategy === "fixed"),
							popper: Ot(n)
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
			update: Wn(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!qn(e, t)) return c;
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
var Yn = Jn({ defaultModifiers: [
	kn,
	Pn,
	$t,
	nn,
	Mn,
	Tn,
	Ln,
	qt
] }), Xn = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, Zn = {
	name: "applyStyles",
	enabled: !1
}, Qn = {
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
}, $n = [];
function er(e, t, n) {
	var r = n === void 0 ? {} : n, a = r.enabled, o = a === void 0 ? !0 : a, s = r.placement, c = s === void 0 ? "bottom" : s, l = r.strategy, u = l === void 0 ? "absolute" : l, d = r.modifiers, f = d === void 0 ? $n : d, p = i(r, [
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
	}, []), _ = rt((0, w.useState)({
		placement: c,
		update: h,
		forceUpdate: g,
		attributes: {},
		styles: {
			popper: Xn(u),
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
		!m.current || !o || m.current.setOptions({
			placement: c,
			strategy: u,
			modifiers: [].concat(f, [b, Zn])
		});
	}, [
		u,
		c,
		b,
		o
	]), (0, w.useEffect)(function() {
		if (!(!o || e == null || t == null)) return m.current = Yn(e, t, S({}, p, {
			placement: c,
			strategy: u,
			modifiers: [].concat(f, [Qn, b])
		})), function() {
			m.current != null && (m.current.destroy(), m.current = void 0, y(function(e) {
				return S({}, e, {
					attributes: {},
					styles: { popper: Xn(u) }
				});
			}));
		};
	}, [
		o,
		e,
		t
	]), v;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js
function tr(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
//#endregion
//#region node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js
var nr = /* @__PURE__ */ x(((e, t) => {
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
}));
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/safeFindDOMNode.js
function rr(e) {
	return e && "setState" in e ? ue.findDOMNode(e) : e ?? null;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var ir = (function(e) {
	return P(rr(e));
}), ar = /* @__PURE__ */ n(nr()), or = 27, sr = function() {};
function cr(e) {
	return e.button === 0;
}
function lr(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var ur = function(e) {
	return e && ("current" in e ? e.current : e);
};
function dr(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, w.useRef)(!1), c = t || sr, l = (0, w.useCallback)(function(t) {
		var n = ur(e);
		(0, ar.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || lr(t) || !cr(t) || !!tr(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Ne(function(e) {
		s.current || c(e);
	}), d = Ne(function(e) {
		e.keyCode === or && c(e);
	});
	(0, w.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = ir(ur(e)), r = Ce(n, o, l, !0), a = Ce(n, o, function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				u(e);
			}), s = Ce(n, "keyup", function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return Ce(e, "mousemove", sr);
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
function fr(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function pr(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function mr(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, u = l === void 0 ? {} : l, d = fr(u.modifiers);
	return S({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: pr(S({}, d, {
			eventListeners: { enabled: n },
			preventOverflow: S({}, d.preventOverflow, { options: s ? S({ padding: s }, d.preventOverflow?.options) : d.preventOverflow?.options }),
			offset: { options: S({ offset: a }, d.offset?.options) },
			arrow: S({}, d.arrow, {
				enabled: !!c,
				options: S({}, d.arrow?.options, { element: c })
			}),
			flip: S({ enabled: !!i }, d.flip)
		}))
	});
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var hr = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function gr(e, t) {
	let n = hr(e), r = hr(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function _r(e, t) {
	return (0, w.useMemo)(() => gr(e, t), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function vr(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function yr(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function br() {
	var e = (0, w.useRef)(null), t = (0, w.useRef)(null), n = (0, w.useRef)(null), r = C(void 0, "popover"), i = C(void 0, "dropdown-menu");
	return [(0, w.useCallback)(function(n) {
		!n || !(vr(n, r) || vr(n, i)) || (t.current = yr(n), n.style.margin = "0", e.current = n);
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
					if (!(!e.current || !i.elements.arrow || !vr(e.current, r))) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = yr(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = yr(i.elements.arrow);
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
//#region node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/isRequiredForA11y.js
var xr = /* @__PURE__ */ x(((e, t) => {
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
})), Sr = /* @__PURE__ */ x(((e, t) => {
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
})), Cr = /* @__PURE__ */ x(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(Sr());
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
})), V = /* @__PURE__ */ n(oe()), wr = [
	"as",
	"className",
	"type",
	"tooltip"
], Tr = {
	type: V.default.string,
	tooltip: V.default.bool,
	as: V.default.elementType
}, Er = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, a = e.className, o = e.type, s = o === void 0 ? "valid" : o, c = e.tooltip, l = c === void 0 ? !1 : c, u = i(e, wr);
	return /* @__PURE__ */ w.createElement(r, S({}, u, {
		ref: t,
		className: (0, T.default)(a, s + "-" + (l ? "tooltip" : "feedback"))
	}));
});
Er.displayName = "Feedback", Er.propTypes = Tr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var Dr = /* @__PURE__ */ w.createContext({ controlId: void 0 }), Or = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], kr = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, a = e.bsCustomPrefix, o = e.className, s = e.type, c = s === void 0 ? "checkbox" : s, l = e.isValid, u = l === void 0 ? !1 : l, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.isStatic, m = e.as, h = m === void 0 ? "input" : m, g = i(e, Or), _ = (0, w.useContext)(Dr), v = _.controlId, y = _.custom ? [a, "custom-control-input"] : [r, "form-check-input"], b = y[0], x = y[1];
	return r = C(b, x), /* @__PURE__ */ w.createElement(h, S({}, g, {
		ref: t,
		type: c,
		id: n || v,
		className: (0, T.default)(o, r, u && "is-valid", f && "is-invalid", p && "position-static")
	}));
});
kr.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Ar = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], jr = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, a = e.className, o = e.htmlFor, s = i(e, Ar), c = (0, w.useContext)(Dr), l = c.controlId, u = c.custom ? [r, "custom-control-label"] : [n, "form-check-label"], d = u[0], f = u[1];
	return n = C(d, f), /* @__PURE__ */ w.createElement("label", S({}, s, {
		ref: t,
		htmlFor: o || l,
		className: (0, T.default)(a, n)
	}));
});
jr.displayName = "FormCheckLabel", Cr();
var Mr = [
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
], Nr = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, a = e.bsCustomPrefix, o = e.inline, s = o === void 0 ? !1 : o, c = e.disabled, l = c === void 0 ? !1 : c, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, m = e.feedbackTooltip, h = m === void 0 ? !1 : m, g = e.feedback, _ = e.className, v = e.style, y = e.title, b = y === void 0 ? "" : y, x = e.type, E = x === void 0 ? "checkbox" : x, D = e.label, O = e.children, k = e.custom, A = e.as, j = A === void 0 ? "input" : A, M = i(e, Mr), N = E === "switch" ? !0 : k, P = N ? [a, "custom-control"] : [r, "form-check"], F = P[0], I = P[1];
	r = C(F, I);
	var L = (0, w.useContext)(Dr).controlId, R = (0, w.useMemo)(function() {
		return {
			controlId: n || L,
			custom: N
		};
	}, [
		L,
		N,
		n
	]), ee = N || D != null && D !== !1 && !O, z = /* @__PURE__ */ w.createElement(kr, S({}, M, {
		type: E === "switch" ? "checkbox" : E,
		ref: t,
		isValid: d,
		isInvalid: p,
		isStatic: !ee,
		disabled: l,
		as: j
	}));
	return /* @__PURE__ */ w.createElement(Dr.Provider, { value: R }, /* @__PURE__ */ w.createElement("div", {
		style: v,
		className: (0, T.default)(_, r, N && "custom-" + E, s && r + "-inline")
	}, O || /* @__PURE__ */ w.createElement(w.Fragment, null, z, ee && /* @__PURE__ */ w.createElement(jr, { title: b }, D), (d || p) && /* @__PURE__ */ w.createElement(Er, {
		type: d ? "valid" : "invalid",
		tooltip: h
	}, g))));
});
Nr.displayName = "FormCheck", Nr.Input = kr, Nr.Label = jr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var Pr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], Fr = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, a = e.bsCustomPrefix, o = e.className, s = e.isValid, c = e.isInvalid, l = e.lang, u = e.as, d = u === void 0 ? "input" : u, f = i(e, Pr), p = (0, w.useContext)(Dr), m = p.controlId, h = p.custom, g = "file", _ = h ? [a, "custom-file-input"] : [r, "form-control-file"], v = _[0], y = _[1];
	return r = C(v, y), /* @__PURE__ */ w.createElement(d, S({}, f, {
		ref: t,
		id: n || m,
		type: g,
		lang: l,
		className: (0, T.default)(o, r, s && "is-valid", c && "is-invalid")
	}));
});
Fr.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Ir = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Lr = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, a = e.className, o = e.htmlFor, s = i(e, Ir), c = (0, w.useContext)(Dr), l = c.controlId, u = c.custom ? [r, "custom-file-label"] : [n, "form-file-label"], d = u[0], f = u[1];
	return n = C(d, f), /* @__PURE__ */ w.createElement("label", S({}, s, {
		ref: t,
		htmlFor: o || l,
		className: (0, T.default)(a, n),
		"data-browse": s["data-browse"]
	}));
});
Lr.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var Rr = [
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
], zr = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, a = e.bsCustomPrefix, o = e.disabled, s = o === void 0 ? !1 : o, c = e.isValid, l = c === void 0 ? !1 : c, u = e.isInvalid, d = u === void 0 ? !1 : u, f = e.feedbackTooltip, p = f === void 0 ? !1 : f, m = e.feedback, h = e.className, g = e.style, _ = e.label, v = e.children, y = e.custom, b = e.lang, x = e["data-browse"], E = e.as, D = E === void 0 ? "div" : E, O = e.inputAs, k = O === void 0 ? "input" : O, A = i(e, Rr), j = y ? [a, "custom"] : [r, "form-file"], M = j[0], N = j[1];
	r = C(M, N);
	var P = "file", F = (0, w.useContext)(Dr).controlId, I = (0, w.useMemo)(function() {
		return {
			controlId: n || F,
			custom: y
		};
	}, [
		F,
		y,
		n
	]), L = _ != null && _ !== !1 && !v, R = /* @__PURE__ */ w.createElement(Fr, S({}, A, {
		ref: t,
		isValid: l,
		isInvalid: d,
		disabled: s,
		as: k,
		lang: b
	}));
	return /* @__PURE__ */ w.createElement(Dr.Provider, { value: I }, /* @__PURE__ */ w.createElement(D, {
		style: g,
		className: (0, T.default)(h, r, y && "custom-" + P)
	}, v || /* @__PURE__ */ w.createElement(w.Fragment, null, y ? /* @__PURE__ */ w.createElement(w.Fragment, null, R, L && /* @__PURE__ */ w.createElement(Lr, { "data-browse": x }, _)) : /* @__PURE__ */ w.createElement(w.Fragment, null, L && /* @__PURE__ */ w.createElement(Lr, null, _), R), (l || d) && /* @__PURE__ */ w.createElement(Er, {
		type: l ? "valid" : "invalid",
		tooltip: p
	}, m))));
});
zr.displayName = "FormFile", zr.Input = Fr, zr.Label = Lr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var Br = [
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
], Vr = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, a = e.type, o = e.size, s = e.htmlSize, c = e.id, l = e.className, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, m = e.plaintext, h = e.readOnly, g = e.custom, _ = e.as, v = _ === void 0 ? "input" : _, y = i(e, Br), b = (0, w.useContext)(Dr).controlId, x = g ? [r, "custom"] : [n, "form-control"], E = x[0], D = x[1];
	n = C(E, D);
	var O;
	if (m) {
		var k;
		O = (k = {}, k[n + "-plaintext"] = !0, k);
	} else if (a === "file") {
		var A;
		O = (A = {}, A[n + "-file"] = !0, A);
	} else if (a === "range") {
		var j;
		O = (j = {}, j[n + "-range"] = !0, j);
	} else if (v === "select" && g) {
		var M;
		O = (M = {}, M[n + "-select"] = !0, M[n + "-select-" + o] = o, M);
	} else {
		var N;
		O = (N = {}, N[n] = !0, N[n + "-" + o] = o, N);
	}
	return /* @__PURE__ */ w.createElement(v, S({}, y, {
		type: a,
		size: s,
		ref: t,
		readOnly: h,
		id: c || b,
		className: (0, T.default)(l, O, d && "is-valid", p && "is-invalid")
	}));
});
Vr.displayName = "FormControl";
var Hr = Object.assign(Vr, { Feedback: Er }), Ur = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Wr = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, a = e.children, o = e.controlId, s = e.as, c = s === void 0 ? "div" : s, l = i(e, Ur);
	n = C(n, "form-group");
	var u = (0, w.useMemo)(function() {
		return { controlId: o };
	}, [o]);
	return /* @__PURE__ */ w.createElement(Dr.Provider, { value: u }, /* @__PURE__ */ w.createElement(c, S({}, l, {
		ref: t,
		className: (0, T.default)(r, n)
	}), a));
});
Wr.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Gr = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], Kr = {
	column: !1,
	srOnly: !1
}, qr = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.as, a = n === void 0 ? "label" : n, o = e.bsPrefix, s = e.column, c = e.srOnly, l = e.className, u = e.htmlFor, d = i(e, Gr), f = (0, w.useContext)(Dr).controlId;
	o = C(o, "form-label");
	var p = "col-form-label";
	typeof s == "string" && (p = p + " " + p + "-" + s);
	var m = (0, T.default)(l, o, c && "sr-only", s && p);
	return u ||= f, s ? /* @__PURE__ */ w.createElement(r, S({
		ref: t,
		as: "label",
		className: m,
		htmlFor: u
	}, d)) : /* @__PURE__ */ w.createElement(a, S({
		ref: t,
		className: m,
		htmlFor: u
	}, d));
});
qr.displayName = "FormLabel", qr.defaultProps = Kr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var Jr = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], Yr = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, a = e.as, o = a === void 0 ? "small" : a, s = e.muted, c = i(e, Jr);
	return n = C(n, "form-text"), /* @__PURE__ */ w.createElement(o, S({}, c, {
		ref: t,
		className: (0, T.default)(r, n, s && "text-muted")
	}));
});
Yr.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var Xr = /* @__PURE__ */ w.forwardRef(function(e, t) {
	return /* @__PURE__ */ w.createElement(Nr, S({}, e, {
		ref: t,
		type: "switch"
	}));
});
Xr.displayName = "Switch", Xr.Input = Nr.Input, Xr.Label = Nr.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var Zr = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], Qr = Ue("form-row"), $r = { inline: !1 }, ei = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.inline, a = e.className, o = e.validated, s = e.as, c = s === void 0 ? "form" : s, l = i(e, Zr);
	return n = C(n, "form"), /* @__PURE__ */ w.createElement(c, S({}, l, {
		ref: t,
		className: (0, T.default)(a, o && "was-validated", r && n + "-inline")
	}));
});
ei.displayName = "Form", ei.defaultProps = $r, ei.Row = Qr, ei.Group = Wr, ei.Control = Hr, ei.Check = Nr, ei.File = zr, ei.Switch = Xr, ei.Label = qr, ei.Text = Yr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/InputGroup.js
var ti = [
	"bsPrefix",
	"size",
	"hasValidation",
	"className",
	"as"
], ni = Ue("input-group-append"), ri = Ue("input-group-prepend"), ii = Ue("input-group-text", { Component: "span" }), ai = function(e) {
	return /* @__PURE__ */ w.createElement(ii, null, /* @__PURE__ */ w.createElement("input", S({ type: "checkbox" }, e)));
}, oi = function(e) {
	return /* @__PURE__ */ w.createElement(ii, null, /* @__PURE__ */ w.createElement("input", S({ type: "radio" }, e)));
}, si = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.size, a = e.hasValidation, o = e.className, s = e.as, c = s === void 0 ? "div" : s, l = i(e, ti);
	return n = C(n, "input-group"), /* @__PURE__ */ w.createElement(c, S({ ref: t }, l, { className: (0, T.default)(o, n, r && n + "-" + r, a && "has-validation") }));
});
si.displayName = "InputGroup", si.Text = ii, si.Radio = oi, si.Checkbox = ai, si.Append = ni, si.Prepend = ri;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/useWaitForDOMRef.js
var ci = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? P().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function li(e, t) {
	var n = (0, w.useState)(function() {
		return ci(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = ci(e);
		a && i(a);
	}
	return (0, w.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, w.useEffect)(function() {
		var t = ci(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var ui = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, a = e.placement, o = e.containerPadding, s = o === void 0 ? 5 : o, c = e.popperConfig, l = c === void 0 ? {} : c, u = e.transition, d = nt(), f = d[0], p = d[1], m = nt(), h = m[0], g = m[1], _ = _r(p, t), v = li(e.container), y = li(e.target), b = (0, w.useState)(!e.show), x = b[0], C = b[1], T = er(y, f, mr({
		placement: a,
		enableEvents: !!e.show,
		containerPadding: s || 5,
		flip: n,
		offset: r,
		arrowElement: h,
		popperConfig: l
	})), E = T.styles, D = T.attributes, O = i(T, ["styles", "attributes"]);
	e.show ? x && C(!1) : !e.transition && !x && C(!0);
	var k = function() {
		C(!0), e.onExited && e.onExited.apply(e, arguments);
	}, A = e.show || u && !x;
	if (dr(f, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !A) return null;
	var j = e.children(S({}, O, {
		show: !!e.show,
		props: S({}, D.popper, {
			style: E.popper,
			ref: _
		}),
		arrowProps: S({}, D.arrow, {
			style: E.arrow,
			ref: g
		})
	}));
	if (u) {
		var M = e.onExit, N = e.onExiting, P = e.onEnter, F = e.onEntering, I = e.onEntered;
		j = /* @__PURE__ */ w.createElement(u, {
			in: e.show,
			appear: !0,
			onExit: M,
			onExiting: N,
			onExited: k,
			onEnter: P,
			onEntering: F,
			onEntered: I
		}, j);
	}
	return v ? /* @__PURE__ */ ue.createPortal(j, v) : null;
});
ui.displayName = "Overlay", ui.propTypes = {
	show: V.default.bool,
	placement: V.default.oneOf(ht),
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
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var di = [
	"children",
	"transition",
	"popperConfig"
], fi = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], pi = {
	transition: Re,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function mi(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(rr(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(rr(e));
	};
}
function hi(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, a = r === void 0 ? {} : r, o = i(e, di), s = (0, w.useRef)({}), c = br(), l = c[0], u = c[1], d = n === !0 ? Re : n || null;
	return /* @__PURE__ */ w.createElement(ui, S({}, o, {
		ref: l,
		popperConfig: S({}, a, { modifiers: u.concat(a.modifiers || []) }),
		transition: d
	}), function(e) {
		var r = e.props, a = e.arrowProps, o = e.show, c = e.update;
		e.forceUpdate;
		var l = e.placement, u = e.state, d = i(e, fi);
		mi(r, a);
		var f = Object.assign(s.current, {
			state: u,
			scheduleUpdate: c,
			placement: l,
			outOfBoundaries: u?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(S({}, d, r, {
			placement: l,
			show: o
		}, !n && o && { className: "show" }, {
			popper: f,
			arrowProps: a
		})) : /* @__PURE__ */ w.cloneElement(t, S({}, d, r, {
			placement: l,
			arrowProps: a,
			popper: f,
			className: (0, T.default)(t.props.className, !n && o && "show"),
			style: S({}, t.props.style, r.style)
		}));
	});
}
hi.defaultProps = pi;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var gi = [
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
], _i = /* @__PURE__ */ function(e) {
	A(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(w.Component);
function vi(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function yi(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !tr(i, a) && e.apply(void 0, t);
}
var bi = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function xi(e) {
	var t = e.trigger, n = e.overlay, r = e.children, a = e.popperConfig, o = a === void 0 ? {} : a, s = e.show, c = e.defaultShow, l = c === void 0 ? !1 : c, u = e.onToggle, d = e.delay, f = e.placement, p = e.flip, m = p === void 0 ? f && f.indexOf("auto") !== -1 : p, h = i(e, gi), g = (0, w.useRef)(null), _ = tt(), v = (0, w.useRef)(""), y = O(s, l, u), b = y[0], x = y[1], C = vi(d), T = typeof r == "function" ? {} : w.Children.only(r).props, E = T.onFocus, D = T.onBlur, k = T.onClick, A = (0, w.useCallback)(function() {
		return rr(g.current);
	}, []), j = (0, w.useCallback)(function() {
		if (_.clear(), v.current = "show", !C.show) {
			x(!0);
			return;
		}
		_.set(function() {
			v.current === "show" && x(!0);
		}, C.show);
	}, [
		C.show,
		x,
		_
	]), M = (0, w.useCallback)(function() {
		if (_.clear(), v.current = "hide", !C.hide) {
			x(!1);
			return;
		}
		_.set(function() {
			v.current === "hide" && x(!1);
		}, C.hide);
	}, [
		C.hide,
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
	]), I = (0, w.useCallback)(function() {
		yi(j, [...arguments], "fromElement");
	}, [j]), L = (0, w.useCallback)(function() {
		yi(M, [...arguments], "toElement");
	}, [M]), R = t == null ? [] : [].concat(t), ee = {};
	return R.indexOf("click") !== -1 && (ee.onClick = F), R.indexOf("focus") !== -1 && (ee.onFocus = N, ee.onBlur = P), R.indexOf("hover") !== -1 && (ee.onMouseOver = I, ee.onMouseOut = L), /* @__PURE__ */ w.createElement(w.Fragment, null, typeof r == "function" ? r(S({}, ee, { ref: g })) : /* @__PURE__ */ w.createElement(_i, { ref: g }, /* @__PURE__ */ (0, w.cloneElement)(r, ee)), /* @__PURE__ */ w.createElement(hi, S({}, h, {
		show: b,
		onHide: M,
		flip: m,
		placement: f,
		popperConfig: o,
		target: A
	}), n));
}
xi.defaultProps = bi;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var Si = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], Ci = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, a = e.animation, o = e.size, s = e.children, c = e.as, l = c === void 0 ? "div" : c, u = e.className, d = i(e, Si);
	n = C(n, "spinner");
	var f = n + "-" + a;
	return /* @__PURE__ */ w.createElement(l, S({ ref: t }, d, { className: (0, T.default)(u, f, o && f + "-" + o, r && "text-" + r) }), s);
});
Ci.displayName = "Spinner", xr();
var wi = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], Ti = { placement: "right" }, Ei = /* @__PURE__ */ w.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, a = e.className, o = e.style, s = e.children, c = e.arrowProps;
	e.popper, e.show;
	var l = i(e, wi);
	n = C(n, "tooltip");
	var u = (r?.split("-") || [])[0];
	return /* @__PURE__ */ w.createElement("div", S({
		ref: t,
		style: o,
		role: "tooltip",
		"x-placement": u,
		className: (0, T.default)(a, n, "bs-tooltip-" + u)
	}, l), /* @__PURE__ */ w.createElement("div", S({ className: "arrow" }, c)), /* @__PURE__ */ w.createElement("div", { className: n + "-inner" }, s));
});
Ei.defaultProps = Ti, Ei.displayName = "Tooltip";
//#endregion
//#region node_modules/.pnpm/css-mediaquery@0.1.2/node_modules/css-mediaquery/index.js
var Di = /* @__PURE__ */ x(((e) => {
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
})), Oi = /* @__PURE__ */ x(((e, t) => {
	var n = Di().match, r = typeof window < "u" ? window.matchMedia : null;
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
})), ki = /[A-Z]/g, Ai = /^ms-/, ji = {};
function Mi(e) {
	return "-" + e.toLowerCase();
}
function Ni(e) {
	if (ji.hasOwnProperty(e)) return ji[e];
	var t = e.replace(ki, Mi);
	return ji[e] = Ai.test(t) ? "-" + t : t;
}
//#endregion
//#region node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
function Pi(e, t) {
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
var Fi = /* @__PURE__ */ n(Oi()), H = V.default.oneOfType([V.default.string, V.default.number]), Ii = {
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
}, Li = {
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
	type: Object.keys(Ii)
}, { type: Ri, ...zi } = Li, Bi = {
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
	...zi
}, Vi = {
	all: {
		...Ii,
		...Bi
	},
	types: Ii,
	matchers: Li,
	features: Bi
}, Hi = (e) => `not ${e}`, Ui = (e, t) => {
	let n = Ni(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? Hi(n) : `(${n}: ${t})`;
}, Wi = (e) => e.join(" and "), Gi = (e) => {
	let t = [];
	return Object.keys(Vi.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(Ui(n, r));
	}), Wi(t);
}, Ki = (0, w.createContext)(void 0), qi = (e) => e.query || Gi(e), Ji = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[Ni(n)] = e[n], t), {});
}, Yi = () => {
	let e = (0, w.useRef)(!1);
	return (0, w.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, Xi = (e) => {
	let t = (0, w.useContext)(Ki), n = () => Ji(e) || Ji(t), [r, i] = (0, w.useState)(n);
	return (0, w.useEffect)(() => {
		let e = n();
		Pi(r, e) || i(e);
	}, [e, t]), r;
}, Zi = (e) => {
	let t = () => qi(e), [n, r] = (0, w.useState)(t);
	return (0, w.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, Qi = (e, t) => {
	let n = () => (0, Fi.default)(e, t || {}, !!t), [r, i] = (0, w.useState)(n), a = Yi();
	return (0, w.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, $i = (e) => {
	let [t, n] = (0, w.useState)(e.matches);
	return (0, w.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, ea = (e, t, n) => {
	let r = Xi(t), i = Zi(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = Qi(i, r), o = $i(a), s = Yi();
	return (0, w.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, w.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, ta = 0, na = (e = "id") => (ta += 1, `${e}${ta}`), ra = /* @__PURE__ */ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function ia(e, t, n) {
	class r extends w.Component {
		static displayName = `withDeprecatedProps(${t})`;
		constructor(e) {
			super(e), this.transformProps = this.transformProps.bind(this);
		}
		warn(e) {}
		transformProps(e, r) {
			if (n[r] === void 0) return e[r] = this.props[r], e;
			let { deprType: i, newName: a, expect: o, transform: s, message: c } = n[r];
			switch (i) {
				case ra.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case ra.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case ra.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case ra.MOVED_AND_FORMAT: {
					let n = this.props[r], i = `${t}: The prop '${r}' has been moved to '${a}'`;
					o && !o(n) && (i += " and expects a new format"), i += c ? `. ${c}` : "", this.warn(i), e[a] = s ? s(n, this.props) : n;
					break;
				}
				default:
					e[r] = this.props[r];
					break;
			}
			return e;
		}
		render() {
			let { children: t, ...n } = Object.keys(this.props).reduce(this.transformProps, {});
			return /* @__PURE__ */ w.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Icon/index.js
function aa({ src: e, id: t, className: n, hidden: r, screenReaderText: i, svgAttrs: a, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ w.createElement("span", {
			className: (0, T.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /* @__PURE__ */ w.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /* @__PURE__ */ w.createElement("span", { className: "sr-only" }, i));
	}
	return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("span", {
		id: t || na("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /* @__PURE__ */ w.createElement("span", { className: "sr-only" }, i));
}
aa.propTypes = {
	src: V.default.elementType,
	svgAttrs: V.default.shape({
		"aria-label": V.default.string,
		"aria-labelledby": V.default.string
	}),
	id: V.default.string,
	size: V.default.oneOf([
		"xs",
		"sm",
		"md",
		"lg"
	]),
	className: V.default.string,
	hidden: V.default.bool,
	screenReaderText: V.default.oneOfType([V.default.string, V.default.element])
}, aa.defaultProps = {
	src: null,
	svgAttrs: {},
	id: void 0,
	hidden: !0,
	screenReaderText: void 0,
	size: void 0,
	className: void 0
};
var oa = ia(aa, "Icon", { className: {
	deprType: ra.FORMAT,
	expect: (e) => typeof e == "string",
	transform: (e) => Array.isArray(e) ? e.join(" ") : e,
	message: "It should be a string."
} }), sa = /* @__PURE__ */ w.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /* @__PURE__ */ w.createElement(Ye, {
	size: r,
	...i,
	className: (0, T.default)(i.className),
	ref: a
}, n && /* @__PURE__ */ w.createElement(oa, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /* @__PURE__ */ w.createElement(oa, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), ca = (e) => /* @__PURE__ */ w.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ w.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), la = (e) => /* @__PURE__ */ w.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ w.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), ua = (e) => /* @__PURE__ */ w.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ w.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), da = (e) => /* @__PURE__ */ w.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ w.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), fa = (e) => /* @__PURE__ */ w.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ w.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), pa = (e) => /* @__PURE__ */ w.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ w.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), ma = (e) => /* @__PURE__ */ w.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ w.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), ha = (e) => /* @__PURE__ */ w.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ w.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
})), ga = [
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
], _a = [
	"hover",
	"click",
	"focus"
];
function va(e) {
	return /* @__PURE__ */ w.createElement(hi, { ...e });
}
function ya(e) {
	return /* @__PURE__ */ w.createElement(xi, { ...e }, e.children);
}
var ba = V.default.oneOf(_a);
va.propTypes = {
	children: V.default.node.isRequired,
	container: V.default.oneOfType([V.default.elementType, V.default.func]),
	onEnter: V.default.func,
	onEntered: V.default.func,
	onEntering: V.default.func,
	onExit: V.default.func,
	onExited: V.default.func,
	onExiting: V.default.func,
	onHide: V.default.func,
	placement: V.default.oneOf(ga),
	popperConfig: V.default.shape({}),
	rootClose: V.default.bool,
	rootCloseEvent: V.default.oneOf(["click", "mousedown"]),
	show: V.default.bool,
	target: V.default.oneOfType([V.default.elementType, V.default.func]),
	transition: V.default.oneOfType([V.default.object, V.default.bool])
}, ya.propTypes = {
	children: V.default.oneOfType([V.default.element, V.default.func]).isRequired,
	overlay: V.default.oneOfType([V.default.element, V.default.func]).isRequired,
	defaultShow: V.default.bool,
	delay: V.default.oneOfType([V.default.number, V.default.shape({})]),
	flip: V.default.bool,
	onHide: V.default.func,
	onToggle: V.default.func,
	placement: V.default.oneOf(ga),
	popperConfig: V.default.shape({}),
	show: V.default.bool,
	target: V.default.instanceOf(EventTarget),
	trigger: V.default.oneOfType([ba, V.default.arrayOf(ba)])
}, va.defaultProps = {
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
	transition: Re
}, ya.defaultProps = {
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
var xa = [
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
], Sa = /* @__PURE__ */ w.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ w.createElement(Ei, {
	...n,
	className: (0, T.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
Sa.propTypes = {
	...Ei.propTypes,
	id: V.default.string.isRequired,
	placement: V.default.oneOf(xa),
	arrowProps: V.default.shape({
		ref: V.default.oneOfType([V.default.func, V.default.shape({ current: V.default.element })]),
		style: V.default.shape({})
	}),
	show: V.default.bool,
	popper: V.default.shape({}),
	bsPrefix: V.default.string,
	children: V.default.node,
	className: V.default.string,
	variant: V.default.string
}, Sa.defaultProps = {
	...Sa.defaultProps,
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
var Ca = /* @__PURE__ */ w.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = oa, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /* @__PURE__ */ w.createElement("button", {
		"aria-label": t,
		className: (0, T.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /* @__PURE__ */ w.createElement("span", { className: "btn-icon__icon-container" }, g && /* @__PURE__ */ w.createElement(g, {
		className: (0, T.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function wa({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ w.createElement(ya, {
		placement: e,
		overlay: /* @__PURE__ */ w.createElement(Sa, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ w.createElement(Ca, { ...n }));
}
Ca.IconButtonWithTooltip = wa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function Ta(e) {
	return typeof e == "string" || e instanceof String;
}
function Ea(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function Da(e, t) {
	return Array.isArray(t) ? Da(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
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
function Oa(e) {
	switch (e) {
		case U.LEFT: return U.FORCE_LEFT;
		case U.RIGHT: return U.FORCE_RIGHT;
		default: return e;
	}
}
function ka(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function Aa(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!Aa(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!Aa(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var ja = class {
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
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function W(e, t) {
	return new W.InputMask(e, t);
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function Ma(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? W.MaskedRegExp : Ta(e) ? W.MaskedPattern : e === Date ? W.MaskedDate : e === Number ? W.MaskedNumber : Array.isArray(e) || e === Array ? W.MaskedDynamic : W.Masked && e.prototype instanceof W.Masked ? e : W.Masked && e instanceof W.Masked ? e.constructor : e instanceof Function ? W.MaskedFunction : (console.warn("Mask not found for mask", e), W.Masked);
}
function Na(e) {
	if (!e) throw Error("Options in not defined");
	if (W.Masked) {
		if (e.prototype instanceof W.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof W.Masked ? { mask: e } : Ea(e) && e.mask instanceof W.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...Da(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return Ea(e) ? { ...e } : { mask: e };
}
function Pa(e) {
	if (W.Masked && e instanceof W.Masked) return e;
	let t = Na(e), n = Ma(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
W.createMask = Pa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var Fa = class {
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
W.MaskElement = Fa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var Ia = 90, La = 89, Ra = class extends Fa {
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
		if (this._handlers.redo && (e.keyCode === Ia && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === La && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === Ia && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
W.HTMLMaskElement = Ra;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var za = class extends Ra {
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
W.HTMLMaskElement = Ra;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var Ba = class extends Ra {
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
W.HTMLContenteditableMaskElement = Ba;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var Va = class e {
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
Va.MAX_LENGTH = 100, W.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof Fa ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new Ba(e) : new za(e), this.masked = Pa(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Va(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof W.Masked) && this.masked.constructor === Ma(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof W.Masked ? e : Pa({ mask: e });
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
		let t = new ja({
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
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/change-details.js
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
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var Ha = class {
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
}, Ua = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new Ha(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return Ta(e) && (e = new Ha(String(e))), e.appendTo(this);
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
		if (!Ta(e)) throw Error("value should be string");
		let r = Ta(n) ? new Ha(String(n)) : n;
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
		s && (r = Oa(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new G();
		if (r !== U.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? U.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== U.NONE && c === this.rawInputValue) if (r === U.FORCE_LEFT) {
			let e;
			for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new G({ tailShift: -1 })).aggregate(this.remove(e - 1));
		} else r === U.FORCE_RIGHT && o.unshift();
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !Aa(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new G();
	}
};
Ua.DEFAULTS = { skipInvalid: !0 }, Ua.EMPTY_VALUES = [
	void 0,
	null,
	""
], W.Masked = Ua;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var Wa = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = Ta(t) ? new Ha(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof Ha) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof W.MaskedPattern)) return new Ha(this.toString()).appendTo(t);
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
			let n = "chunks" in t ? new e() : new Ha();
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
}, Ga = class {
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
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, U.FORCE_LEFT), this.offset !== 0)) return !0;
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
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, U.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
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
}, Ka = class {
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
		return new Ha("");
	}
	appendTail(e) {
		return Ta(e) && (e = new Ha(String(e))), e.appendTo(this);
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
}, qa = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = Pa(s), Object.assign(this, {
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
		return r.inserted && this.doValidate(t) === !1 && (r = new G(), this.masked.state = n), !r.inserted && !this.isOptional && !this.lazy && !t.input && (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
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
qa.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, W.MaskedRegExp = class extends Ua {
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
var Ja = class e extends Ua {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, qa.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = Na(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? Pa(i) : new W.RepeatBlock(i);
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
			let c = s ? new qa({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...Na(t[o]),
				parent: this
			}) : new Ka({
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
		let n = new Wa();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof Wa && (a.blockIndex = t), n.extend(a);
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
		if (t === void 0 && (t = U.NONE), !this._blocks.length) return 0;
		let n = new Ga(this, e);
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
Ja.DEFAULTS = {
	...Ua.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, Ja.STOP_CHAR = "`", Ja.ESCAPE_CHAR = "\\", Ja.InputDefinition = qa, Ja.FixedDefinition = Ka, W.MaskedPattern = Ja;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var Ya = class extends Ja {
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
W.MaskedRange = Ya;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var Xa = "d{.}`m{.}`Y", Za = class e extends Ja {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: Ta(t) ? t : n
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
			mask: Ta(n) ? n : r,
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
Za.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: Ya,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: Ya,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: Ya,
		from: 1900,
		to: 9999
	}
}), Za.DEFAULTS = {
	...Ja.DEFAULTS,
	mask: Date,
	pattern: Xa,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, W.MaskedDate = Za;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var Qa = class e extends Ua {
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
			let { expose: t, ...n } = Na(e), r = Pa({
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
			return Aa(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
Qa.DEFAULTS = {
	...Ua.DEFAULTS,
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
}, W.MaskedDynamic = Qa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var $a = class e extends Ja {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new Ha("", e);
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
$a.DEFAULTS = {
	...Ja.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, W.MaskedEnum = $a, W.MaskedFunction = class extends Ua {
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
var eo, to = class e extends Ua {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + ka(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(ka).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(ka(this.thousandsSeparator), "g");
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
		return (super.typedValueEquals(t) || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
	}
};
eo = to, to.UNMASKED_RADIX = ".", to.EMPTY_VALUES = [...Ua.EMPTY_VALUES, 0], to.DEFAULTS = {
	...Ua.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [eo.UNMASKED_RADIX],
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
}, W.MaskedNumber = to;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var no = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function ro(e, t, n) {
	t === void 0 && (t = no.MASKED), n === void 0 && (n = no.MASKED);
	let r = Pa(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function io(e, t, n, r) {
	return ro(t, n, r)(e);
}
W.PIPE_TYPE = no, W.createPipe = ro, W.pipe = io, W.RepeatBlock = class extends Ja {
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
		let { repeat: t, ...n } = Na(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = Pa(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(Pa(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
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
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/index.js
try {
	globalThis.IMask = W;
} catch {}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var ao = {
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
}, oo = Object.keys(ao).filter((e) => e !== "value"), so = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], co = oo.filter((e) => so.indexOf(e) < 0);
function lo(e) {
	var t;
	let n = (t = class extends w.Component {
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
			return Object.keys(t).filter((e) => co.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return oo.forEach((e) => {
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
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = ao, w.forwardRef((e, t) => w.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var uo = lo((e) => {
	let { inputRef: t, ...n } = e;
	return w.createElement("input", {
		...n,
		ref: t
	});
}), fo = w.forwardRef((e, t) => w.createElement(uo, {
	...e,
	ref: t
})), po = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), mo = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, ho = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, w.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, go = (e, t) => {
	let [n, r] = (0, w.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(na(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, w.useState)(e);
		return (0, w.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, _o = (e) => e, vo = /* @__PURE__ */ w.createContext({
	getControlProps: _o,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: _o,
	getDescriptorProps: _o,
	hasFormGroupProvider: !1
}), yo = () => w.useContext(vo);
function bo(e) {
	let [t, n] = (0, w.useState)(e);
	return [t, (e) => {
		(0, w.useEffect)(() => n(e), [e]);
	}];
}
function xo({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, w.useMemo)(() => t || na("form-field"), [t]), [o, s] = go(a), [c, l] = go(a), [u, d] = bo(!1), f = {
		getControlProps: (0, w.useCallback)((e) => {
			let t = u ? c : void 0;
			return po({
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
	return /* @__PURE__ */ w.createElement(vo.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var So = {
	SMALL: "sm",
	LARGE: "lg"
}, Co = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, wo = {
	[Co.DEFAULT]: null,
	[Co.VALID]: la,
	[Co.INVALID]: da,
	[Co.WARNING]: ha,
	[Co.CRITERIA_EMPTY]: ma,
	[Co.CRITERIA_VALID]: ua,
	[Co.CRITERIA_INVALID]: ca
}, To = ({ isInvalid: e, isValid: t }) => t ? Co.VALID : e ? Co.INVALID : Co.DEFAULT;
function Eo({ type: e, customIcon: t }) {
	if (t) return t;
	let n = wo[e];
	return n ? /* @__PURE__ */ w.createElement(oa, { src: n }) : null;
}
Eo.propTypes = {
	type: V.default.oneOf(Object.values(Co)),
	customIcon: V.default.node
}, Eo.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function Do({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, T.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ w.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ w.createElement(Eo, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ w.createElement("div", null, e));
}
Do.propTypes = {
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
}, Do.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function Oo({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = yo(), a = n(t), o = (0, T.default)("pgn__form-control-description", t.className), s = t.type || To({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ w.createElement(Do, {
		...a,
		className: o,
		type: s
	}, e);
}
Oo.propTypes = {
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
}, Oo.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function ko({ children: e }) {
	let { controlId: t } = yo();
	return /* @__PURE__ */ w.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ w.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ w.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
ko.propTypes = { children: V.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function Ao({ children: e, location: t }) {
	return /* @__PURE__ */ w.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
Ao.propTypes = {
	children: V.default.node.isRequired,
	location: V.default.oneOf(["leading", "trailing"])
}, Ao.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function jo({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = yo(a), s = a.size || o.size;
	return /* @__PURE__ */ w.createElement("div", {
		className: (0, T.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === So.LARGE,
			"pgn__form-control-decorator-group-sm": s === So.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ w.createElement(Ao, { location: "leading" }, t), n && /* @__PURE__ */ w.createElement(Ao, { location: "trailing" }, n), r && /* @__PURE__ */ w.createElement(ko, null, r));
}
jo.propTypes = {
	children: V.default.node.isRequired,
	leadingElement: V.default.node,
	trailingElement: V.default.node,
	floatingLabel: V.default.node,
	className: V.default.string,
	size: V.default.oneOf([So.SMALL, So.LARGE])
}, jo.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var Mo = /* @__PURE__ */ w.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = yo(), h = w.useRef(), g = u || h, _ = l.size || m.size, [v, y] = ho({
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
		onBlur: mo(y, l.onBlur)
	}), S = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ w.createElement(jo, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ w.createElement(Hr, {
		as: c ? fo : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, T.default)(n, { "has-value": v }),
		onChange: S,
		mask: c,
		...x
	}));
});
Mo.Feedback = Oo, Mo.Description = Oo, Mo.propTypes = {
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
}, Mo.defaultProps = {
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
function No({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = yo(), o = (0, T.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === So.LARGE,
		"pgn__form-label-sm": r === So.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ w.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function Po({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ w.createElement(a ?? "div", {
		...o,
		className: (0, T.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ w.createElement(xo, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var Fo = /* @__PURE__ */ w.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), Io = () => (0, w.useContext)(Fo);
function Lo({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? mo(n, e.onBlur) : n,
			onFocus: e.onFocus ? mo(r, e.onFocus) : r,
			onChange: e.onChange ? mo(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ w.createElement(Fo.Provider, { value: c }, e);
}
Lo.propTypes = {
	children: V.default.node.isRequired,
	name: V.default.string.isRequired,
	onBlur: V.default.func,
	onFocus: V.default.func,
	onChange: V.default.func,
	value: V.default.string,
	defaultValue: V.default.string
}, Lo.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var Ro = /* @__PURE__ */ w.forwardRef((e, t) => {
	let { getControlProps: n } = yo(), { getRadioControlProps: r, hasRadioSetProvider: i } = Io(), a = n({
		...e,
		className: (0, T.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ w.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
Ro.propTypes = { className: V.default.string }, Ro.defaultProps = { className: void 0 };
var zo = /* @__PURE__ */ w.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ w.createElement(xo, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ w.createElement("div", { className: (0, T.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ w.createElement(Ro, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ w.createElement("div", null, /* @__PURE__ */ w.createElement(No, { className: r }, e), i && /* @__PURE__ */ w.createElement(Oo, { hasIcon: !1 }, i)))));
zo.propTypes = {
	id: V.default.string,
	children: V.default.node.isRequired,
	className: V.default.string,
	controlClassName: V.default.string,
	labelClassName: V.default.string,
	description: V.default.node,
	isInvalid: V.default.bool,
	isValid: V.default.bool,
	disabled: V.default.bool
}, zo.defaultProps = {
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
function Bo({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ w.createElement(e, {
		className: (0, T.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
Bo.propTypes = {
	as: V.default.elementType,
	className: V.default.string,
	isInline: V.default.bool,
	children: V.default.node
}, Bo.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function Vo({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = yo();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ w.createElement(Lo, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ w.createElement(Bo, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
Vo.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	name: V.default.string.isRequired,
	value: V.default.string,
	defaultValue: V.default.string,
	isInline: V.default.bool,
	onChange: V.default.func,
	onFocus: V.default.func,
	onBlur: V.default.func
}, Vo.defaultProps = {
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
var Ho, Uo = new Uint8Array(16);
function Wo() {
	if (!Ho && (Ho = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ho)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return Ho(Uo);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var K = [];
for (let e = 0; e < 256; ++e) K.push((e + 256).toString(16).slice(1));
function Go(e, t = 0) {
	return K[e[t + 0]] + K[e[t + 1]] + K[e[t + 2]] + K[e[t + 3]] + "-" + K[e[t + 4]] + K[e[t + 5]] + "-" + K[e[t + 6]] + K[e[t + 7]] + "-" + K[e[t + 8]] + K[e[t + 9]] + "-" + K[e[t + 10]] + K[e[t + 11]] + K[e[t + 12]] + K[e[t + 13]] + K[e[t + 14]] + K[e[t + 15]];
}
var Ko = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function qo(e, t, n) {
	if (Ko.randomUUID && !t && !e) return Ko.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || Wo)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return Go(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var Jo = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), Yo = (e, t) => t.every((t) => e[t] !== void 0), Xo = (e, t) => Jo(e, (e) => Array.isArray(t) ? Yo(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), Zo = /* @__PURE__ */ w.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, T.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ w.createElement(Ci, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ w.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function Qo({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function $o({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function es({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && Qo({
		event: e,
		currentIndex: s,
		activeElement: a
	}), $o({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function ts(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, w.useRef)();
	return (0, w.useEffect)(() => {
		let e = (e) => {
			es({
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
var ns = d({
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
}), rs = /* @__PURE__ */ (0, w.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: u, customErrorMessageText: d, onChange: f, helpMessage: p, ...m }, h) => {
	let g = y(), _ = (0, w.useRef)(), v = ts({
		selectors: t,
		ignoredKeys: n
	}), [b, x] = (0, w.useState)(!1), [S, C] = (0, w.useState)(!1), [T, E] = (0, w.useState)(!1), [D, O] = (0, w.useState)(!1), [k, A] = (0, w.useState)(i?.userProvidedText || ""), [j, M] = (0, w.useState)([]), [N, P] = (0, w.useState)(null), [F, I] = (0, w.useState)(!0), [L, R] = (0, w.useState)(""), ee = (e) => {
		P(e);
	}, z = () => {
		M([]), x(!1), P(null);
	}, te = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		E(!0), O(!0), A(n), f && (!i || i && n !== i.selectionValue) && f({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), z(), t && t(e);
	};
	function ne(t = "") {
		let n = w.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? qo();
			return /* @__PURE__ */ w.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => te(e, n),
				id: i,
				onFocus: () => ee(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let re = () => {
		M(ne(k)), I(!0), R(""), x(!0);
	}, ie = () => {
		b ? z() : re();
	}, ae = /* @__PURE__ */ w.createElement(Ca, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: b ? pa : fa,
		iconAs: oa,
		size: "sm",
		variant: "secondary",
		alt: b ? g.formatMessage(ns.iconButtonClosed) : g.formatMessage(ns.iconButtonOpened),
		onClick: ie
	}), oe = () => {
		C(!0);
	}, se = () => {
		if (u) {
			I(!1), R(d);
			return;
		}
		if (o && !T) {
			I(!1), R(s);
			return;
		}
		if (T && c && !D) {
			I(!1), R(l);
			return;
		}
		I(!0), R("");
	};
	(0, w.useImperativeHandle)(h, () => ({ updateErrorStateAndErrorMessage: se }));
	let ce = () => {
		C(!1), z(), se();
	}, le = (e) => {
		if (S) {
			if (e.key === "Escape") {
				e.preventDefault(), _ && _.current.focus(), z();
				return;
			}
			e.key === "Tab" && ce();
		}
	}, ue = (e) => {
		v.current && !v.current.contains(e.target) && S && ce();
	};
	(0, w.useEffect)(() => (document.addEventListener("keydown", le), document.addEventListener("click", ue, !0), () => {
		document.removeEventListener("click", ue, !0), document.removeEventListener("keydown", le);
	})), (0, w.useEffect)(() => {
		A(i ? i.userProvidedText ?? "" : ""), E(!!i && !!i.userProvidedText), O(!!i && !!i.selectionValue);
	}, [i]);
	let de = () => {
		re();
	}, fe = (e) => {
		let t = e.target.value;
		if (!t.length) {
			A(""), E(!1), O(!1), M([]), z(), f && f({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		E(!0);
		let n = ne(t);
		M(n);
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
	}, { getControlProps: pe } = yo(), B = pe(m);
	return /* @__PURE__ */ w.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: v,
		onFocus: oe
	}, /* @__PURE__ */ w.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${j.length} options found`), /* @__PURE__ */ w.createElement(xo, {
		controlId: B.id,
		isInvalid: !F
	}, /* @__PURE__ */ w.createElement(Mo, {
		ref: _,
		"aria-expanded": (j.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: k,
		"aria-invalid": L,
		"aria-activedescendant": N,
		onChange: fe,
		onClick: de,
		trailingElement: ae,
		"data-testid": "autosuggest-textbox-input",
		...B
	}), p && F && /* @__PURE__ */ w.createElement(Oo, { type: "default" }, p), !F && /* @__PURE__ */ w.createElement(Oo, {
		type: "invalid",
		"feedback-for": B.name
	}, L)), /* @__PURE__ */ w.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /* @__PURE__ */ w.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ w.createElement(Zo, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : j.length > 0 && j));
});
rs.defaultProps = {
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
}, rs.propTypes = {
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
	valueRequiredErrorMessageText: Xo(V.default.string, "isValueRequired"),
	isSelectionRequired: V.default.bool,
	selectionRequiredErrorMessageText: Xo(V.default.string, "isSelectionRequired"),
	hasCustomError: V.default.bool,
	customErrorMessageText: Xo(V.default.string, "hasCustomError"),
	name: V.default.string,
	readOnly: V.default.bool,
	children: V.default.node,
	screenReaderText: V.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function is({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, T.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, w.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ w.createElement(w.Fragment, null, i && /* @__PURE__ */ w.createElement(oa, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ w.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ w.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ w.createElement(oa, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function as({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ w.createElement(is, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, T.default)(t, "dropdown-item"),
		...r
	}, e);
}
as.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, as.propTypes = {
	className: V.default.string,
	children: V.default.string,
	onClick: V.default.func
};
var os = /* @__PURE__ */ w.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), ss = () => (0, w.useContext)(os);
function cs({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? mo(n, e.onBlur) : n,
			onFocus: e.onFocus ? mo(r, e.onFocus) : r,
			onChange: e.onChange ? mo(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ w.createElement(os.Provider, { value: c }, e);
}
cs.propTypes = {
	children: V.default.node.isRequired,
	name: V.default.string,
	onBlur: V.default.func,
	onFocus: V.default.func,
	onChange: V.default.func,
	value: V.default.arrayOf(V.default.string),
	defaultValue: V.default.arrayOf(V.default.string)
}, cs.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var ls = /* @__PURE__ */ w.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = ss(), a = w.useRef(), o = n || a, { getControlProps: s } = yo(), c = s({
		...t,
		className: (0, T.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), w.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ w.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
ls.propTypes = {
	isIndeterminate: V.default.bool,
	className: V.default.string
}, ls.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var us = /* @__PURE__ */ w.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = ss(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = yo();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ w.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ w.createElement(xo, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ w.createElement("div", {
		className: (0, T.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ w.createElement("div", null, /* @__PURE__ */ w.createElement(No, { className: r }, e), i && /* @__PURE__ */ w.createElement(Oo, { hasIcon: !1 }, i))));
});
us.propTypes = {
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
}, us.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: ls,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var ds = /* @__PURE__ */ w.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = w.useRef(), i = n || r, { getControlProps: a } = yo(), o = a({
		...t,
		className: (0, T.default)("pgn__form-switch-input", t.className)
	});
	return w.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ w.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
ds.propTypes = {
	isIndeterminate: V.default.bool,
	className: V.default.string
}, ds.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var fs = /* @__PURE__ */ w.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ w.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ w.createElement(us, {
	className: (0, T.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: ds,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ w.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
fs.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	labelClassName: V.default.string,
	helperText: V.default.node,
	floatLabelLeft: V.default.bool
}, fs.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function ps({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = yo();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ w.createElement(cs, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ w.createElement(Bo, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
ps.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	name: V.default.string.isRequired,
	value: V.default.arrayOf(V.default.string),
	defaultValue: V.default.arrayOf(V.default.string),
	isInline: V.default.bool,
	onChange: V.default.func,
	onFocus: V.default.func,
	onBlur: V.default.func
}, ps.defaultProps = {
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
var ms = ps, q = ei;
q.Control = Mo, q.Radio = zo, q.RadioSet = Vo, q.Autosuggest = rs, q.AutosuggestOption = as, q.Checkbox = us, q.CheckboxSet = ps, q.Switch = fs, q.SwitchSet = ms, q.Label = No, q.Group = Po, q.Text = Do;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var hs = /* @__PURE__ */ w.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function gs({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, w.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ w.createElement(hs.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var _s = "right-scroll-bar-position", vs = "width-before-scroll-bar", ys = "with-scroll-bars-hidden", bs = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function xs(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function Ss(e, t) {
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
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var Cs = typeof window < "u" ? w.useLayoutEffect : w.useEffect, ws = /* @__PURE__ */ new WeakMap();
function Ts(e, t) {
	var n = Ss(t || null, function(t) {
		return e.forEach(function(e) {
			return xs(e, t);
		});
	});
	return Cs(function() {
		var t = ws.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || xs(e, null);
			}), i.forEach(function(e) {
				r.has(e) || xs(e, a);
			});
		}
		ws.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function Es(e) {
	return e;
}
function Ds(e, t) {
	t === void 0 && (t = Es);
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
function Os(e, t) {
	return t === void 0 && (t = Es), Ds(e, t);
}
function ks(e) {
	e === void 0 && (e = {});
	var t = Ds(null);
	return t.options = s({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var As = function(e) {
	var t = e.sideCar, n = h(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return w.createElement(r, s({}, n));
};
As.isSideCarExport = !0;
function js(e, t) {
	return e.useMedium(t), As;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var Ms = ks(), Ns = function() {}, Ps = w.forwardRef(function(e, t) {
	var n = w.useRef(null), r = w.useState({
		onScrollCapture: Ns,
		onWheelCapture: Ns,
		onTouchMoveCapture: Ns
	}), i = r[0], a = r[1], o = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noRelative, g = e.noIsolation, _ = e.inert, v = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, x = e.gapMode, S = h(e, [
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
	]), C = p, T = Ts([n, t]), E = s(s({}, S), i);
	return w.createElement(w.Fragment, null, d && w.createElement(C, {
		sideCar: Ms,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: g,
		inert: _,
		setCallbacks: a,
		allowPinchZoom: !!v,
		lockRef: n,
		gapMode: x
	}), o ? w.cloneElement(w.Children.only(c), s(s({}, E), { ref: T })) : w.createElement(b, s({}, E, {
		className: l,
		ref: T
	}), c));
});
Ps.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Ps.classNames = {
	fullWidth: vs,
	zeroRight: _s
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var Fs = "data-focus-lock", Is = "data-focus-lock-disabled", Ls = "data-no-focus-lock", Rs = "data-autofocus-inside", zs = "data-no-autofocus", Bs = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, Vs = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: Bs
	}), n, n && /* @__PURE__ */ w.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: Bs
	}));
};
Vs.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var Hs = Os({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Us = Os(), Ws = Os(), Gs = ks({
	async: !0,
	ssr: typeof document < "u"
}), Ks = /* @__PURE__ */ (0, w.createContext)(void 0), qs = [], Js = /* @__PURE__ */ (0, w.forwardRef)(function(e, t) {
	var n, r = (0, w.useState)(), i = r[0], a = r[1], o = (0, w.useRef)(), s = (0, w.useRef)(!1), c = (0, w.useRef)(null), l = (0, w.useState)({})[1], u = e.children, d = e.disabled, f = d === void 0 ? !1 : d, p = e.noFocusGuards, m = p === void 0 ? !1 : p, h = e.persistentFocus, g = h === void 0 ? !1 : h, _ = e.crossFrame, v = _ === void 0 ? !0 : _, y = e.autoFocus, b = y === void 0 ? !0 : y;
	e.allowTextSelection;
	var x = e.group, C = e.className, T = e.whiteList, E = e.hasPositiveIndices, D = e.shards, O = D === void 0 ? qs : D, k = e.as, A = k === void 0 ? "div" : k, j = e.lockProps, M = j === void 0 ? {} : j, N = e.sideCar, P = e.returnFocus, F = P === void 0 ? !1 : P, I = e.focusOptions, L = e.onActivation, R = e.onDeactivation, ee = (0, w.useState)({})[0], z = (0, w.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!c.current) {
			var n = document?.activeElement;
			c.current = n, n !== document.body && (c.current = t(n));
		}
		o.current && L && L(o.current), s.current = !0, l();
	}, [L]), te = (0, w.useCallback)(function() {
		s.current = !1, R && R(o.current), l();
	}, [R]), ne = (0, w.useCallback)(function(e) {
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
	}, [F]), re = (0, w.useCallback)(function(e) {
		s.current && Hs.useMedium(e);
	}, []), ie = Us.useMedium, ae = (0, w.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), oe = S((n = {}, n[Is] = f && "disabled", n[Fs] = x, n), M), se = m !== !0, ce = se && m !== "tail", le = Ts([t, ae]), ue = (0, w.useMemo)(function() {
		return {
			observed: o,
			shards: O,
			enabled: !f,
			get active() {
				return s.current;
			}
		};
	}, [
		f,
		s,
		O,
		o
	]);
	return /* @__PURE__ */ w.createElement(w.Fragment, null, se && [/* @__PURE__ */ w.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: Bs
	}), E ? /* @__PURE__ */ w.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 1,
		style: Bs
	}) : null], !f && /* @__PURE__ */ w.createElement(N, {
		id: ee,
		sideCar: Gs,
		observed: i,
		disabled: f,
		persistentFocus: g,
		crossFrame: v,
		autoFocus: b,
		whiteList: T,
		shards: O,
		onActivation: z,
		onDeactivation: te,
		returnFocus: ne,
		focusOptions: I,
		noFocusGuards: m
	}), /* @__PURE__ */ w.createElement(A, S({ ref: le }, oe, {
		className: C,
		onBlur: ie,
		onFocus: re
	}), /* @__PURE__ */ w.createElement(Ks.Provider, { value: ue }, u)), ce && /* @__PURE__ */ w.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: Bs
	}));
});
Js.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function Ys(e) {
	setTimeout(e, 1);
}
var Xs = function(e) {
	return e && "current" in e ? e.current : e;
}, Zs = Js, Qs = ks(), $s = "data-focus-on-hidden", ec = { preventScroll: !0 }, tc = w.forwardRef(function(e, t) {
	var n = w.useState(!1), r = n[0], i = n[1], a = w.useState(null), o = a[0], c = a[1], l = e.children, u = e.autoFocus, d = e.shards, f = e.crossFrame, p = e.enabled, m = p === void 0 ? !0 : p, g = e.scrollLock, _ = g === void 0 ? !0 : g, v = e.focusLock, y = v === void 0 ? !0 : v, b = e.returnFocus, x = b === void 0 ? !0 : b, S = e.inert, C = e.allowPinchZoom, T = e.sideCar, E = e.className, D = e.shouldIgnore, O = e.preventScrollOnFocus, k = e.style, A = e.as, j = e.gapMode, M = h(e, [
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
		shards: d,
		allowPinchZoom: C,
		gapMode: j,
		inert: S,
		enabled: m && _
	}), F = w.useCallback(function(e) {
		c(e);
	}, []), I = w.useCallback(function() {
		c(null);
	}, []);
	return w.createElement(w.Fragment, null, w.createElement(Zs, {
		ref: t,
		sideCar: T,
		disabled: !(m && y),
		returnFocus: x,
		autoFocus: u,
		shards: d,
		crossFrame: f,
		onActivation: F,
		onDeactivation: I,
		className: E,
		whiteList: D,
		lockProps: P,
		focusOptions: O ? ec : void 0,
		as: Ps
	}, l), m && w.createElement(N, s({}, M, {
		sideCar: Qs,
		setLockProps: i,
		shards: d,
		activeNode: o
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function nc(e) {
	"@babel/helpers - typeof";
	return nc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, nc(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function rc(e, t) {
	if (nc(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (nc(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function ic(e) {
	var t = rc(e, "string");
	return nc(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function ac(e, t, n) {
	return (t = ic(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function oc(e, t) {
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
				return /* @__PURE__ */ w.createElement(r, this.props);
			}, t;
		}(w.PureComponent);
		return ac(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var sc = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, cc = function(e) {
	return Array.isArray(e) ? e : [e];
}, lc = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, uc = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, dc = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, fc = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, pc = function(e) {
	return e.hasAttribute("inert");
}, mc = function(e, t) {
	return !e || fc(e) || !uc(e) && !pc(e) && t(dc(e));
}, hc = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = mc(t, hc.bind(void 0, e));
	return e.set(t, r), r;
}, gc = function(e, t) {
	return e && !fc(e) ? Cc(e) ? t(dc(e)) : !1 : !0;
}, _c = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = gc(t, _c.bind(void 0, e));
	return e.set(t, r), r;
}, vc = function(e) {
	return e.dataset;
}, yc = function(e) {
	return e.tagName === "BUTTON";
}, bc = function(e) {
	return e.tagName === "INPUT";
}, xc = function(e) {
	return bc(e) && e.type === "radio";
}, Sc = function(e) {
	return !((bc(e) || yc(e)) && (e.type === "hidden" || e.disabled));
}, Cc = function(e) {
	var t = e.getAttribute(zs);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, wc = function(e) {
	return !!(e && vc(e)?.focusGuard);
}, Tc = function(e) {
	return !wc(e);
}, Ec = function(e) {
	return !!e;
}, Dc = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, Oc = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, kc = function(e, t, n) {
	return sc(e).map(function(e, t) {
		var r = Oc(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(Dc);
}, Ac = [
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
].join(","), jc = `${Ac}, [data-focus-guard]`, Mc = function(e, t) {
	return sc((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? jc : Ac) ? [n] : [], Mc(n));
	}, []);
}, Nc = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? Pc([e.contentDocument.body], t) : [e];
}, Pc = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = Mc(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return Nc(e, t);
		}));
		return e.concat(a, n.parentNode ? sc(n.parentNode.querySelectorAll(Ac)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, Fc = function(e) {
	return sc(e.querySelectorAll(`[${Rs}]`)).map(function(e) {
		return Pc([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, Ic = function(e, t) {
	return sc(e).filter(function(e) {
		return hc(t, e);
	}).filter(function(e) {
		return Sc(e);
	});
}, Lc = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), sc(e).filter(function(e) {
		return _c(t, e);
	});
}, Rc = function(e, t, n) {
	return kc(Ic(Pc(e, n), t), !0, n);
}, zc = function(e, t) {
	return kc(Ic(Pc(e), t), !1);
}, Bc = function(e, t) {
	return Ic(Fc(e), t);
}, Vc = function(e, t) {
	return e.shadowRoot ? Vc(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : sc(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? Vc(n, t) : !1;
		}
		return Vc(e, t);
	});
}, Hc = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, Uc = function(e) {
	return e.parentNode ? Uc(e.parentNode) : e;
}, Wc = function(e) {
	return cc(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(Fs);
		return e.push.apply(e, n ? Hc(sc(Uc(t).querySelectorAll(`[${Fs}="${n}"]:not([${Is}="disabled"])`))) : [t]), e;
	}, []);
}, Gc = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, Kc = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? Kc(t.shadowRoot) : t instanceof HTMLIFrameElement && Gc(function() {
			return t.contentWindow.document;
		}) ? Kc(t.contentWindow.document) : t;
	}
}, qc = function(e, t) {
	return e === t;
}, Jc = function(e, t) {
	return !!sc(e.querySelectorAll("iframe")).some(function(e) {
		return qc(e, t);
	});
}, Yc = function(e, t) {
	return t === void 0 && (t = Kc(lc(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Wc(e).some(function(e) {
		return Vc(e, t) || Jc(e, t);
	});
}, Xc = function(e) {
	e === void 0 && (e = document);
	var t = Kc(e);
	return t ? sc(e.querySelectorAll(`[${Ls}]`)).some(function(e) {
		return Vc(e, t);
	}) : !1;
}, Zc = function(e, t) {
	return t.filter(xc).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, Qc = function(e, t) {
	return xc(e) && e.name ? Zc(e, t) : e;
}, $c = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(Qc(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, el = function(e) {
	return e[0] && e.length > 1 ? Qc(e[0], e) : e[0];
}, tl = function(e, t) {
	return e.indexOf(Qc(t, e));
}, nl = "NEW_FOCUS", rl = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = wc(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? nl : d;
		if (d === -1) return nl;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = $c(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = tl(e, t[0]), C = tl(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, il = function(e) {
	return function(t) {
		var n = vc(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, al = function(e, t, n) {
	var r = Lc(e.map(function(e) {
		return e.node;
	}).filter(il(n)));
	return r && r.length ? el(r) : el(Lc(t));
}, ol = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && ol(e.parentNode.host || e.parentNode, t), t;
}, sl = function(e, t) {
	for (var n = ol(e), r = ol(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, cl = function(e, t, n) {
	var r = cc(e), i = cc(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = sl(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = sl(a, e);
			t && (o = !o || Vc(t, o) ? t : sl(t, o));
		});
	}), o;
}, ll = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(Bc(n, t));
	}, []);
}, ul = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(Ec);
}, dl = function(e, t) {
	var n = Kc(cc(e).length > 0 ? document : lc(e).ownerDocument), r = Wc(e).filter(Tc), i = cl(n || e, e, r), a = /* @__PURE__ */ new Map(), o = zc(r, a), s = o.filter(function(e) {
		var t = e.node;
		return Tc(t);
	});
	if (s[0]) {
		var c = zc([i], a).map(function(e) {
			return e.node;
		}), l = ul(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = rl(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = al(o, d, ll(r, a)) || al(o, u, ll(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, fl = function(e) {
	var t = Wc(e).filter(Tc), n = kc(Pc([cl(e, e, t)], !0), !0, !0), r = Pc(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: wc(t)
		};
	});
}, pl = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, ml = 0, hl = !1, gl = function(e, t, n) {
	n === void 0 && (n = {});
	var r = dl(e, t);
	if (!hl && r) {
		if (ml > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), hl = !0, setTimeout(function() {
				hl = !1;
			}, 1);
			return;
		}
		ml++, pl(r.node, n.focusOptions), ml--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function _l(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var vl = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: _l(n),
		parent: _l(n.parentElement),
		left: _l(n.previousElementSibling),
		right: _l(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: _l(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, yl = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = Rc([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, bl = function(e) {
	var t = vl(e);
	return function() {
		return yl(t);
	};
}, xl = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = cc(t);
	if (r.every(function(t) {
		return !Vc(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? Rc(r, /* @__PURE__ */ new Map()) : zc(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, Sl = function(e, t) {
	var n = t ? Rc(cc(e), /* @__PURE__ */ new Map()) : zc(cc(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, Cl = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, wl = function(e, t, n) {
	t === void 0 && (t = {});
	var r = Cl(t), i = xl(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && pl(a.node, r.focusOptions);
	}
}, Tl = function(e, t) {
	t === void 0 && (t = {}), wl(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, El = function(e, t) {
	t === void 0 && (t = {}), wl(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, Dl = function(e, t, n) {
	var r = Sl(e, t.onlyTabbable ?? !0)[n];
	r && pl(r.node, t.focusOptions);
}, Ol = function(e, t) {
	t === void 0 && (t = {}), Dl(e, t, "first");
}, kl = function(e, t) {
	t === void 0 && (t = {}), Dl(e, t, "last");
}, Al = function() {
	return document && document.activeElement === document.body;
}, jl = function() {
	return Al() || Xc();
}, Ml = null, Nl = null, Pl = function() {
	return null;
}, Fl = null, Il = !1, Ll = !1, Rl = function() {
	return !0;
}, zl = function(e) {
	return (Ml.whiteList || Rl)(e);
}, Bl = function(e, t) {
	Fl = {
		observerNode: e,
		portaledElement: t
	};
}, Vl = function(e) {
	return Fl && Fl.portaledElement === e;
};
function Hl(e, t, n, r) {
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
var Ul = function(e) {
	return e ? !!Il : Il === "meanwhile";
}, Wl = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Gl = function(e, t) {
	return t.some(function(t) {
		return Wl(e, t, t);
	});
}, Kl = function(e) {
	return zc(e, /* @__PURE__ */ new Map());
}, ql = function(e) {
	return !Kl([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, Jl = function() {
	var e = !1;
	if (Ml) {
		var t = Ml, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || Fl && Fl.portaledElement;
		if (Al() && Nl && Nl !== document.body && (!document.body.contains(Nl) || ql(Nl))) {
			var u = Pl();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(Xs).filter(Boolean));
			if ((!d || zl(d)) && (r || function() {
				if (!Ul(o) || !c || !Nl || Ll) return !1;
				var e = Kl(f), t = e.findIndex(function(e) {
					return e.node === Nl;
				});
				return t === 0 || t === e.length - 1;
			}() || !jl() || !Nl && i) && (l && !(Yc(f) || d && Gl(d, f) || Vl(d, l)) && (document && !Nl && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = gl(f, Nl, { focusOptions: s }), Fl = {})), Nl = document && document.activeElement, Nl !== document.body && (Pl = bl(Nl)), Il = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = fl(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), Hl(h, m.length, 1, m), Hl(h, -1, -1, m));
			}
		}
	}
	return e;
}, Yl = function(e) {
	Jl() && e && (e.stopPropagation(), e.preventDefault());
}, Xl = function() {
	return Ys(Jl);
}, Zl = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || Bl(n, t);
}, Ql = function() {
	return null;
}, $l = function(e) {
	var t = e.children;
	return /* @__PURE__ */ w.createElement("div", {
		onBlur: Xl,
		onFocus: Zl
	}, t);
};
$l.propTypes = {};
var eu = function() {
	Ll = !0;
}, tu = function() {
	Ll = !1, Il = "just", Ys(function() {
		Il = "meanwhile";
	});
}, nu = function() {
	document.addEventListener("focusin", Yl), document.addEventListener("focusout", Xl), window.addEventListener("focus", eu), window.addEventListener("blur", tu);
}, ru = function() {
	document.removeEventListener("focusin", Yl), document.removeEventListener("focusout", Xl), window.removeEventListener("focus", eu), window.removeEventListener("blur", tu);
};
function iu(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var au = {
	moveFocusInside: gl,
	focusInside: Yc,
	focusNextElement: Tl,
	focusPrevElement: El,
	focusFirstElement: Ol,
	focusLastElement: kl,
	captureFocusRestore: bl
};
function ou(e) {
	var t = e.slice(-1)[0];
	t && !Ml && nu();
	var n = Ml, r = n && t && t.id === n.id;
	Ml = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (Nl = null, (!r || n.observed !== t.observed) && t.onActivation(au), Jl(!0), Ys(Jl)) : (ru(), Nl = null);
}
Hs.assignSyncMedium(Zl), Us.assignMedium(Xl), Ws.assignMedium(function(e) {
	return e(au);
}), js(Gs, oc(iu, ou)(Ql));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var su, cu = function() {
	if (su) return su;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function lu() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = cu();
	return t && e.setAttribute("nonce", t), e;
}
function uu(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function du(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var fu = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = lu()) && (uu(t, n), du(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, pu = function() {
	var e = fu();
	return function(t, n) {
		w.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, mu = function() {
	var e = pu();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, hu = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, gu = function(e) {
	return parseInt(e || "", 10) || 0;
}, _u = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		gu(n),
		gu(r),
		gu(i)
	];
}, vu = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return hu;
	var t = _u(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, yu = mu(), bu = "data-scroll-locked", xu = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${ys} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${bu}] {
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
  
  .${_s} {
    right: ${s}px ${r};
  }
  
  .${vs} {
    margin-right: ${s}px ${r};
  }
  
  .${_s} .${_s} {
    right: 0 ${r};
  }
  
  .${vs} .${vs} {
    margin-right: 0 ${r};
  }
  
  body[${bu}] {
    ${bs}: ${s}px;
  }
`;
}, Su = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Cu = function() {
	w.useEffect(function() {
		return document.body.setAttribute(bu, (Su() + 1).toString()), function() {
			var e = Su() - 1;
			e <= 0 ? document.body.removeAttribute(bu) : document.body.setAttribute(bu, e.toString());
		};
	}, []);
}, wu = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Cu();
	var a = w.useMemo(function() {
		return vu(i);
	}, [i]);
	return w.createElement(yu, { styles: xu(a, !t, i, n ? "" : "!important") });
}, Tu = !1;
if (typeof window < "u") try {
	var Eu = Object.defineProperty({}, "passive", { get: function() {
		return Tu = !0, !0;
	} });
	window.addEventListener("test", Eu, Eu), window.removeEventListener("test", Eu, Eu);
} catch {
	Tu = !1;
}
var Du = Tu ? { passive: !1 } : !1, Ou = function(e) {
	return e.tagName === "TEXTAREA";
}, ku = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Ou(e) && n[t] === "visible");
}, Au = function(e) {
	return ku(e, "overflowY");
}, ju = function(e) {
	return ku(e, "overflowX");
}, Mu = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Fu(e, r)) {
			var i = Iu(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Nu = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Pu = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Fu = function(e, t) {
	return e === "v" ? Au(t) : ju(t);
}, Iu = function(e, t) {
	return e === "v" ? Nu(t) : Pu(t);
}, Lu = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Ru = function(e, t, n, r, i) {
	var a = Lu(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Iu(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Fu(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, zu = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Bu = function(e) {
	return [e.deltaX, e.deltaY];
}, Vu = function(e) {
	return e && "current" in e ? e.current : e;
}, Hu = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Uu = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Wu = 0, Gu = [];
function Ku(e) {
	var t = w.useRef([]), n = w.useRef([0, 0]), r = w.useRef(), i = w.useState(Wu++)[0], a = w.useState(mu)[0], o = w.useRef(e);
	w.useEffect(function() {
		o.current = e;
	}, [e]), w.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = f([e.lockRef.current], (e.shards || []).map(Vu), !0).filter(Boolean);
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
		var i = zu(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Mu(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Mu(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Ru(h, t, e, h === "h" ? s : c, !0);
	}, []), c = w.useCallback(function(e) {
		var n = e;
		if (!(!Gu.length || Gu[Gu.length - 1] !== a)) {
			var r = "deltaY" in n ? Bu(n) : zu(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Hu(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Vu).filter(Boolean).filter(function(e) {
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
			shadowParent: qu(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = w.useCallback(function(e) {
		n.current = zu(e), r.current = void 0;
	}, []), d = w.useCallback(function(t) {
		l(t.type, Bu(t), t.target, s(t, e.lockRef.current));
	}, []), p = w.useCallback(function(t) {
		l(t.type, zu(t), t.target, s(t, e.lockRef.current));
	}, []);
	w.useEffect(function() {
		return Gu.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", c, Du), document.addEventListener("touchmove", c, Du), document.addEventListener("touchstart", u, Du), function() {
			Gu = Gu.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, Du), document.removeEventListener("touchmove", c, Du), document.removeEventListener("touchstart", u, Du);
		};
	}, []);
	var m = e.removeScrollBar, h = e.inert;
	return w.createElement(w.Fragment, null, h ? w.createElement(a, { styles: Uu(i) }) : null, m ? w.createElement(wu, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function qu(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
js(Ms, Ku);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Ju = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Yu = /* @__PURE__ */ new WeakMap(), Xu = /* @__PURE__ */ new WeakMap(), Zu = {}, Qu = 0, $u = function(e) {
	return e && (e.host || $u(e.parentNode));
}, ed = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = $u(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, td = function(e, t, n, r) {
	var i = ed(t, Array.isArray(e) ? e : [e]);
	Zu[n] || (Zu[n] = /* @__PURE__ */ new WeakMap());
	var a = Zu[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Yu.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Yu.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Xu.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Qu++, function() {
		o.forEach(function(e) {
			var t = Yu.get(e) - 1, i = a.get(e) - 1;
			Yu.set(e, t), a.set(e, i), t || (Xu.has(e) || e.removeAttribute(r), Xu.delete(e)), i || e.removeAttribute(n);
		}), Qu--, Qu || (Yu = /* @__PURE__ */ new WeakMap(), Yu = /* @__PURE__ */ new WeakMap(), Xu = /* @__PURE__ */ new WeakMap(), Zu = {});
	};
}, nd = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Ju(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), td(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, rd = mu(), id = "\n [" + $s + "] {\n   pointer-events: none !important;\n }\n", ad = function() {
	return w.createElement(rd, { styles: id });
}, od = function(e) {
	return "current" in e ? e.current : e;
};
function sd(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, u = (0, w.useRef)(null), d = (0, w.useRef)(0);
	return w.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === u.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(od).some(function(t) {
				return t && t.contains(e.target) || t === e.target;
			}) || r && r(e);
		}, a = function(e) {
			t(e), d.current = e.touches.length;
		}, o = function(e) {
			d.current = e.touches.length;
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
		if (!(s || !c)) return nd(l([c], (i || []).map(od)), c.ownerDocument.body, $s);
	}, [c, s]), (0, w.useEffect)(function() {
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
	}, []), w.createElement(ad, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var cd = js(Qs, sd), ld = function(e) {
	return w.createElement(cd, s({}, e));
}, ud = w.forwardRef(function(e, t) {
	return w.createElement(tc, s({}, e, {
		ref: t,
		sideCar: ld
	}));
}), dd = class extends w.Component {
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
		return this.rootElement ? /* @__PURE__ */ ue.createPortal(this.props.children, this.rootElement) : null;
	}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function fd({ onClick: e }) {
	return /* @__PURE__ */ w.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function pd({ children: e = null }) {
	return /* @__PURE__ */ w.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function md({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, w.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /* @__PURE__ */ w.createElement(gs, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /* @__PURE__ */ w.createElement(dd, null, /* @__PURE__ */ w.createElement(ud, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, T.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /* @__PURE__ */ w.createElement(pd, null, /* @__PURE__ */ w.createElement(fd, { onClick: a }), e))));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var hd = /* @__PURE__ */ w.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, w.useContext)(hs), a = e, o = {
		...n,
		className: (0, T.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /* @__PURE__ */ w.createElement(a, o, t);
});
hd.propTypes = {
	as: V.default.elementType,
	children: V.default.node,
	className: V.default.string,
	onClick: V.default.func
}, hd.defaultProps = {
	as: sa,
	onClick: void 0,
	className: void 0,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var gd = /* @__PURE__ */ w.forwardRef(({ as: e = "div", children: t, ...n }, r) => /* @__PURE__ */ w.createElement(e, {
	...n,
	ref: r,
	className: (0, T.default)("pgn__modal-header", n.className)
}, t));
gd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, gd.defaultProps = {
	as: "div",
	className: ""
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function _d({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ w.createElement(e, {
		...n,
		className: (0, T.default)("pgn__modal-title", n.className)
	}, t);
}
_d.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, _d.defaultProps = {
	as: "h2",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function vd({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ w.createElement(e, {
		...n,
		className: (0, T.default)("pgn__modal-footer", n.className)
	}, t);
}
vd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, vd.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
var yd = (e = !0) => {
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
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogBody.js
function bd({ as: e, children: t, ...n }) {
	let [r, i] = yd(), [a, o] = yd(), s = (0, T.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /* @__PURE__ */ w.createElement(e, {
		...n,
		className: s
	}, /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("div", { ref: i }), /* @__PURE__ */ w.createElement("div", { className: "pgn__modal-body-content" }, t), /* @__PURE__ */ w.createElement("div", { ref: o })));
}
bd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, bd.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function xd({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ w.createElement(e, {
		...n,
		className: (0, T.default)("pgn__modal-hero-content", n.className)
	}, t);
}
xd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, xd.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function Sd({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /* @__PURE__ */ w.createElement(e, {
		...r,
		className: (0, T.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
Sd.propTypes = {
	as: V.default.elementType,
	backgroundSrc: V.default.string,
	children: V.default.node,
	className: V.default.string,
	style: V.default.shape({})
}, Sd.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function Cd({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ w.createElement(e, {
		...n,
		className: (0, T.default)("pgn__modal-hero", n.className)
	}, t);
}
Cd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, Cd.defaultProps = {
	as: "div",
	className: void 0
}, Cd.Content = xd, Cd.Background = Sd;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/messages.js
var wd = d({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function Td({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: s, isFullscreenScroll: c = !1, className: l, isFullscreenOnMobile: u = !1, isBlocking: d = !1, zIndex: f, isOverflowVisible: p }) {
	let m = y(), h = s || m.formatMessage(wd.closeButtonText), g = ea({ query: "(max-width: 767.98px)" }), _ = u && g;
	return /* @__PURE__ */ w.createElement(md, {
		isOpen: n,
		onClose: r,
		isBlocking: d,
		zIndex: f
	}, /* @__PURE__ */ w.createElement("div", {
		role: "dialog",
		"aria-label": t,
		className: (0, T.default)("pgn__modal", {
			[`pgn__modal-${_ ? "fullscreen" : i}`]: i,
			[`pgn__modal-${a}`]: a,
			"pgn__modal-scroll-fullscreen": c,
			"pgn__modal-visible-overflow": p
		}, l)
	}, o && /* @__PURE__ */ w.createElement("div", { className: "pgn__modal-close-container" }, /* @__PURE__ */ w.createElement(hd, {
		as: Ca,
		iconAs: oa,
		invertColors: a === "dark",
		src: da,
		alt: h
	})), e));
}
Td.Header = gd, Td.Title = _d, Td.Footer = vd, Td.CloseButton = hd, Td.Body = bd, Td.Hero = Cd;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/StandardModal.js
var Ed = "Close";
function Dd({ children: e, footerNode: t, beforeBodyNode: n, afterBodyNode: r, ...i }) {
	return /* @__PURE__ */ w.createElement(Td, { ...i }, /* @__PURE__ */ w.createElement(Td.Header, null, /* @__PURE__ */ w.createElement(Td.Title, null, i.title)), n, /* @__PURE__ */ w.createElement(Td.Body, null, e), r, t && /* @__PURE__ */ w.createElement(Td.Footer, null, t));
}
Dd.propTypes = {
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
}, Dd.defaultProps = {
	isOpen: !1,
	hasCloseButton: !0,
	size: "md",
	variant: "default",
	closeLabel: Ed,
	className: void 0,
	isFullscreenScroll: !1,
	footerNode: null,
	beforeBodyNode: null,
	afterBodyNode: null
};
//#endregion
//#region node_modules/.pnpm/deepmerge@2.2.1/node_modules/deepmerge/dist/es.js
var Od = function(e) {
	return kd(e) && !Ad(e);
};
function kd(e) {
	return !!e && typeof e == "object";
}
function Ad(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || Md(e);
}
var jd = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Md(e) {
	return e.$$typeof === jd;
}
function Nd(e) {
	return Array.isArray(e) ? [] : {};
}
function Pd(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? Ld(Nd(e), e, t) : e;
}
function Fd(e, t, n) {
	return e.concat(t).map(function(e) {
		return Pd(e, n);
	});
}
function Id(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = Pd(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = Pd(t[i], n) : r[i] = Ld(e[i], t[i], n);
	}), r;
}
function Ld(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || Fd, n.isMergeableObject = n.isMergeableObject || Od;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : Id(e, t, n) : Pd(t, n);
}
Ld.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return Ld(e, n, t);
	}, {});
};
var Rd = Ld, zd = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, Bd = typeof self == "object" && self && self.Object === Object && self, Vd = zd || Bd || Function("return this")(), Hd = Vd.Symbol, Ud = Object.prototype, Wd = Ud.hasOwnProperty, Gd = Ud.toString, Kd = Hd ? Hd.toStringTag : void 0;
function qd(e) {
	var t = Wd.call(e, Kd), n = e[Kd];
	try {
		e[Kd] = void 0;
		var r = !0;
	} catch {}
	var i = Gd.call(e);
	return r && (t ? e[Kd] = n : delete e[Kd]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var Jd = Object.prototype.toString;
function Yd(e) {
	return Jd.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var Xd = "[object Null]", Zd = "[object Undefined]", Qd = Hd ? Hd.toStringTag : void 0;
function $d(e) {
	return e == null ? e === void 0 ? Zd : Xd : Qd && Qd in Object(e) ? qd(e) : Yd(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function ef(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getPrototype.js
var tf = ef(Object.getPrototypeOf, Object);
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function nf(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isPlainObject.js
var rf = "[object Object]", af = Function.prototype, of = Object.prototype, sf = af.toString, cf = of.hasOwnProperty, lf = sf.call(Object);
function uf(e) {
	if (!nf(e) || $d(e) != rf) return !1;
	var t = tf(e);
	if (t === null) return !0;
	var n = cf.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && sf.call(n) == lf;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function df() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function ff(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function pf(e, t) {
	for (var n = e.length; n--;) if (ff(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var mf = Array.prototype.splice;
function hf(e) {
	var t = this.__data__, n = pf(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : mf.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function gf(e) {
	var t = this.__data__, n = pf(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function _f(e) {
	return pf(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function vf(e, t) {
	var n = this.__data__, r = pf(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function yf(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
yf.prototype.clear = df, yf.prototype.delete = hf, yf.prototype.get = gf, yf.prototype.has = _f, yf.prototype.set = vf;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function bf() {
	this.__data__ = new yf(), this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function xf(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function Sf(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function Cf(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function wf(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var Tf = "[object AsyncFunction]", Ef = "[object Function]", Df = "[object GeneratorFunction]", Of = "[object Proxy]";
function kf(e) {
	if (!wf(e)) return !1;
	var t = $d(e);
	return t == Ef || t == Df || t == Tf || t == Of;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var Af = Vd["__core-js_shared__"], jf = function() {
	var e = /[^.]+$/.exec(Af && Af.keys && Af.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Mf(e) {
	return !!jf && jf in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var Nf = Function.prototype.toString;
function Pf(e) {
	if (e != null) {
		try {
			return Nf.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var Ff = /[\\^$.*+?()[\]{}|]/g, If = /^\[object .+?Constructor\]$/, Lf = Function.prototype, Rf = Object.prototype, zf = Lf.toString, Bf = Rf.hasOwnProperty, Vf = RegExp("^" + zf.call(Bf).replace(Ff, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Hf(e) {
	return !wf(e) || Mf(e) ? !1 : (kf(e) ? Vf : If).test(Pf(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function Uf(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function Wf(e, t) {
	var n = Uf(e, t);
	return Hf(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var Gf = Wf(Vd, "Map"), Kf = Wf(Object, "create");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function qf() {
	this.__data__ = Kf ? Kf(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function Jf(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var Yf = "__lodash_hash_undefined__", Xf = Object.prototype.hasOwnProperty;
function Zf(e) {
	var t = this.__data__;
	if (Kf) {
		var n = t[e];
		return n === Yf ? void 0 : n;
	}
	return Xf.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var Qf = Object.prototype.hasOwnProperty;
function $f(e) {
	var t = this.__data__;
	return Kf ? t[e] !== void 0 : Qf.call(t, e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var ep = "__lodash_hash_undefined__";
function tp(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = Kf && t === void 0 ? ep : t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function np(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
np.prototype.clear = qf, np.prototype.delete = Jf, np.prototype.get = Zf, np.prototype.has = $f, np.prototype.set = tp;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function rp() {
	this.size = 0, this.__data__ = {
		hash: new np(),
		map: new (Gf || yf)(),
		string: new np()
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function ip(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function ap(e, t) {
	var n = e.__data__;
	return ip(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function op(e) {
	var t = ap(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function sp(e) {
	return ap(this, e).get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function cp(e) {
	return ap(this, e).has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function lp(e, t) {
	var n = ap(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function up(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
up.prototype.clear = rp, up.prototype.delete = op, up.prototype.get = sp, up.prototype.has = cp, up.prototype.set = lp;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var dp = 200;
function fp(e, t) {
	var n = this.__data__;
	if (n instanceof yf) {
		var r = n.__data__;
		if (!Gf || r.length < dp - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new up(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function pp(e) {
	this.size = (this.__data__ = new yf(e)).size;
}
pp.prototype.clear = bf, pp.prototype.delete = xf, pp.prototype.get = Sf, pp.prototype.has = Cf, pp.prototype.set = fp;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEach.js
function mp(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_defineProperty.js
var hp = function() {
	try {
		var e = Wf(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignValue.js
function gp(e, t, n) {
	t == "__proto__" && hp ? hp(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assignValue.js
var _p = Object.prototype.hasOwnProperty;
function vp(e, t, n) {
	var r = e[t];
	(!(_p.call(e, t) && ff(r, n)) || n === void 0 && !(t in e)) && gp(e, t, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyObject.js
function yp(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? gp(n, s, c) : vp(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function bp(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var xp = "[object Arguments]";
function Sp(e) {
	return nf(e) && $d(e) == xp;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var Cp = Object.prototype, wp = Cp.hasOwnProperty, Tp = Cp.propertyIsEnumerable, Ep = Sp(function() {
	return arguments;
}()) ? Sp : function(e) {
	return nf(e) && wp.call(e, "callee") && !Tp.call(e, "callee");
}, Dp = Array.isArray;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function Op() {
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var kp = typeof exports == "object" && exports && !exports.nodeType && exports, Ap = kp && typeof module == "object" && module && !module.nodeType && module, jp = Ap && Ap.exports === kp ? Vd.Buffer : void 0, Mp = (jp ? jp.isBuffer : void 0) || Op, Np = 9007199254740991, Pp = /^(?:0|[1-9]\d*)$/;
function Fp(e, t) {
	var n = typeof e;
	return t ??= Np, !!t && (n == "number" || n != "symbol" && Pp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var Ip = 9007199254740991;
function Lp(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ip;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsTypedArray.js
var Rp = "[object Arguments]", zp = "[object Array]", Bp = "[object Boolean]", Vp = "[object Date]", Hp = "[object Error]", Up = "[object Function]", Wp = "[object Map]", Gp = "[object Number]", Kp = "[object Object]", qp = "[object RegExp]", Jp = "[object Set]", Yp = "[object String]", Xp = "[object WeakMap]", Zp = "[object ArrayBuffer]", Qp = "[object DataView]", $p = "[object Float32Array]", em = "[object Float64Array]", tm = "[object Int8Array]", nm = "[object Int16Array]", rm = "[object Int32Array]", im = "[object Uint8Array]", am = "[object Uint8ClampedArray]", om = "[object Uint16Array]", sm = "[object Uint32Array]", J = {};
J[$p] = J[em] = J[tm] = J[nm] = J[rm] = J[im] = J[am] = J[om] = J[sm] = !0, J[Rp] = J[zp] = J[Zp] = J[Bp] = J[Qp] = J[Vp] = J[Hp] = J[Up] = J[Wp] = J[Gp] = J[Kp] = J[qp] = J[Jp] = J[Yp] = J[Xp] = !1;
function cm(e) {
	return nf(e) && Lp(e.length) && !!J[$d(e)];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function lm(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var um = typeof exports == "object" && exports && !exports.nodeType && exports, dm = um && typeof module == "object" && module && !module.nodeType && module, fm = dm && dm.exports === um && zd.process, pm = function() {
	try {
		return dm && dm.require && dm.require("util").types || fm && fm.binding && fm.binding("util");
	} catch {}
}(), mm = pm && pm.isTypedArray, hm = mm ? lm(mm) : cm, gm = Object.prototype.hasOwnProperty;
function _m(e, t) {
	var n = Dp(e), r = !n && Ep(e), i = !n && !r && Mp(e), a = !n && !r && !i && hm(e), o = n || r || i || a, s = o ? bp(e.length, String) : [], c = s.length;
	for (var l in e) (t || gm.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Fp(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var vm = Object.prototype;
function ym(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || vm);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var bm = ef(Object.keys, Object), xm = Object.prototype.hasOwnProperty;
function Sm(e) {
	if (!ym(e)) return bm(e);
	var t = [];
	for (var n in Object(e)) xm.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function Cm(e) {
	return e != null && Lp(e.length) && !kf(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function wm(e) {
	return Cm(e) ? _m(e) : Sm(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssign.js
function Tm(e, t) {
	return e && yp(t, wm(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeysIn.js
function Em(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeysIn.js
var Dm = Object.prototype.hasOwnProperty;
function Om(e) {
	if (!wf(e)) return Em(e);
	var t = ym(e), n = [];
	for (var r in e) r == "constructor" && (t || !Dm.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keysIn.js
function km(e) {
	return Cm(e) ? _m(e, !0) : Om(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignIn.js
function Am(e, t) {
	return e && yp(t, km(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneBuffer.js
var jm = typeof exports == "object" && exports && !exports.nodeType && exports, Mm = jm && typeof module == "object" && module && !module.nodeType && module, Nm = Mm && Mm.exports === jm ? Vd.Buffer : void 0, Pm = Nm ? Nm.allocUnsafe : void 0;
function Fm(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Pm ? Pm(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyArray.js
function Im(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function Lm(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function Rm() {
	return [];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var zm = Object.prototype.propertyIsEnumerable, Bm = Object.getOwnPropertySymbols, Vm = Bm ? function(e) {
	return e == null ? [] : (e = Object(e), Lm(Bm(e), function(t) {
		return zm.call(e, t);
	}));
} : Rm;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbols.js
function Hm(e, t) {
	return yp(e, Vm(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function Um(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbolsIn.js
var Wm = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Um(t, Vm(e)), e = tf(e);
	return t;
} : Rm;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbolsIn.js
function Gm(e, t) {
	return yp(e, Wm(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function Km(e, t, n) {
	var r = t(e);
	return Dp(e) ? r : Um(r, n(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function qm(e) {
	return Km(e, wm, Vm);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeysIn.js
function Jm(e) {
	return Km(e, km, Wm);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var Ym = Wf(Vd, "DataView"), Xm = Wf(Vd, "Promise"), Zm = Wf(Vd, "Set"), Qm = Wf(Vd, "WeakMap"), $m = "[object Map]", eh = "[object Object]", th = "[object Promise]", nh = "[object Set]", rh = "[object WeakMap]", ih = "[object DataView]", ah = Pf(Ym), oh = Pf(Gf), sh = Pf(Xm), ch = Pf(Zm), lh = Pf(Qm), uh = $d;
(Ym && uh(new Ym(/* @__PURE__ */ new ArrayBuffer(1))) != ih || Gf && uh(new Gf()) != $m || Xm && uh(Xm.resolve()) != th || Zm && uh(new Zm()) != nh || Qm && uh(new Qm()) != rh) && (uh = function(e) {
	var t = $d(e), n = t == eh ? e.constructor : void 0, r = n ? Pf(n) : "";
	if (r) switch (r) {
		case ah: return ih;
		case oh: return $m;
		case sh: return th;
		case ch: return nh;
		case lh: return rh;
	}
	return t;
});
var dh = uh, fh = Object.prototype.hasOwnProperty;
function ph(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && fh.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Uint8Array.js
var mh = Vd.Uint8Array;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneArrayBuffer.js
function hh(e) {
	var t = new e.constructor(e.byteLength);
	return new mh(t).set(new mh(e)), t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneDataView.js
function gh(e, t) {
	var n = t ? hh(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneRegExp.js
var _h = /\w*$/;
function vh(e) {
	var t = new e.constructor(e.source, _h.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneSymbol.js
var yh = Hd ? Hd.prototype : void 0, bh = yh ? yh.valueOf : void 0;
function xh(e) {
	return bh ? Object(bh.call(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneTypedArray.js
function Sh(e, t) {
	var n = t ? hh(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneByTag.js
var Ch = "[object Boolean]", wh = "[object Date]", Th = "[object Map]", Eh = "[object Number]", Dh = "[object RegExp]", Oh = "[object Set]", kh = "[object String]", Ah = "[object Symbol]", jh = "[object ArrayBuffer]", Mh = "[object DataView]", Nh = "[object Float32Array]", Ph = "[object Float64Array]", Fh = "[object Int8Array]", Ih = "[object Int16Array]", Lh = "[object Int32Array]", Rh = "[object Uint8Array]", zh = "[object Uint8ClampedArray]", Bh = "[object Uint16Array]", Vh = "[object Uint32Array]";
function Hh(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case jh: return hh(e);
		case Ch:
		case wh: return new r(+e);
		case Mh: return gh(e, n);
		case Nh:
		case Ph:
		case Fh:
		case Ih:
		case Lh:
		case Rh:
		case zh:
		case Bh:
		case Vh: return Sh(e, n);
		case Th: return new r();
		case Eh:
		case kh: return new r(e);
		case Dh: return vh(e);
		case Oh: return new r();
		case Ah: return xh(e);
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseCreate.js
var Uh = Object.create, Wh = function() {
	function e() {}
	return function(t) {
		if (!wf(t)) return {};
		if (Uh) return Uh(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneObject.js
function Gh(e) {
	return typeof e.constructor == "function" && !ym(e) ? Wh(tf(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMap.js
var Kh = "[object Map]";
function qh(e) {
	return nf(e) && dh(e) == Kh;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isMap.js
var Jh = pm && pm.isMap, Yh = Jh ? lm(Jh) : qh, Xh = "[object Set]";
function Zh(e) {
	return nf(e) && dh(e) == Xh;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSet.js
var Qh = pm && pm.isSet, $h = Qh ? lm(Qh) : Zh, eg = 1, tg = 2, ng = 4, rg = "[object Arguments]", ig = "[object Array]", ag = "[object Boolean]", og = "[object Date]", sg = "[object Error]", cg = "[object Function]", lg = "[object GeneratorFunction]", ug = "[object Map]", dg = "[object Number]", fg = "[object Object]", pg = "[object RegExp]", mg = "[object Set]", hg = "[object String]", gg = "[object Symbol]", _g = "[object WeakMap]", vg = "[object ArrayBuffer]", yg = "[object DataView]", bg = "[object Float32Array]", xg = "[object Float64Array]", Sg = "[object Int8Array]", Cg = "[object Int16Array]", wg = "[object Int32Array]", Tg = "[object Uint8Array]", Eg = "[object Uint8ClampedArray]", Dg = "[object Uint16Array]", Og = "[object Uint32Array]", Y = {};
Y[rg] = Y[ig] = Y[vg] = Y[yg] = Y[ag] = Y[og] = Y[bg] = Y[xg] = Y[Sg] = Y[Cg] = Y[wg] = Y[ug] = Y[dg] = Y[fg] = Y[pg] = Y[mg] = Y[hg] = Y[gg] = Y[Tg] = Y[Eg] = Y[Dg] = Y[Og] = !0, Y[sg] = Y[cg] = Y[_g] = !1;
function kg(e, t, n, r, i, a) {
	var o, s = t & eg, c = t & tg, l = t & ng;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!wf(e)) return e;
	var u = Dp(e);
	if (u) {
		if (o = ph(e), !s) return Im(e, o);
	} else {
		var d = dh(e), f = d == cg || d == lg;
		if (Mp(e)) return Fm(e, s);
		if (d == fg || d == rg || f && !i) {
			if (o = c || f ? {} : Gh(e), !s) return c ? Gm(e, Am(o, e)) : Hm(e, Tm(o, e));
		} else {
			if (!Y[d]) return i ? e : {};
			o = Hh(e, d, s);
		}
	}
	a ||= new pp();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), $h(e) ? e.forEach(function(r) {
		o.add(kg(r, t, n, r, e, a));
	}) : Yh(e) && e.forEach(function(r, i) {
		o.set(i, kg(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Jm : qm : c ? km : wm)(e);
	return mp(m || e, function(r, i) {
		m && (i = r, r = e[i]), vp(o, i, kg(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/cloneDeep.js
var Ag = 1, jg = 4;
function Mg(e) {
	return kg(e, Ag | jg);
}
//#endregion
//#region node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var Ng = /* @__PURE__ */ n((/* @__PURE__ */ x(((e, t) => {
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
})))()), Pg = !0;
function Fg(e, t) {
	if (!Pg) {
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
var Ig = 4;
function Lg(e) {
	return kg(e, Ig);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayMap.js
function Rg(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSymbol.js
var zg = "[object Symbol]";
function Bg(e) {
	return typeof e == "symbol" || nf(e) && $d(e) == zg;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/memoize.js
var Vg = "Expected a function";
function Hg(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Vg);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Hg.Cache || up)(), n;
}
Hg.Cache = up;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_memoizeCapped.js
var Ug = 500;
function Wg(e) {
	var t = Hg(e, function(e) {
		return n.size === Ug && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stringToPath.js
var Gg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Kg = /\\(\\)?/g, qg = Wg(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Gg, function(e, n, r, i) {
		t.push(r ? i.replace(Kg, "$1") : n || e);
	}), t;
}), Jg = Infinity;
function Yg(e) {
	if (typeof e == "string" || Bg(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Jg ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseToString.js
var Xg = Infinity, Zg = Hd ? Hd.prototype : void 0, Qg = Zg ? Zg.toString : void 0;
function $g(e) {
	if (typeof e == "string") return e;
	if (Dp(e)) return Rg(e, $g) + "";
	if (Bg(e)) return Qg ? Qg.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Xg ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toString.js
function e_(e) {
	return e == null ? "" : $g(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toPath.js
function t_(e) {
	return Dp(e) ? Rg(e, Yg) : Bg(e) ? [e] : Im(qg(e_(e)));
}
o();
function X() {
	return X = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, X.apply(this, arguments);
}
function n_(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function r_(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function i_(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var a_ = /* @__PURE__ */ (0, w.createContext)(void 0);
a_.displayName = "FormikContext";
var o_ = a_.Provider;
a_.Consumer;
function s_() {
	var e = (0, w.useContext)(a_);
	return !e && Fg(!1), e;
}
var c_ = function(e) {
	return Array.isArray(e) && e.length === 0;
}, Z = function(e) {
	return typeof e == "function";
}, l_ = function(e) {
	return typeof e == "object" && !!e;
}, u_ = function(e) {
	return String(Math.floor(Number(e))) === e;
}, d_ = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, f_ = function(e) {
	return w.Children.count(e) === 0;
}, p_ = function(e) {
	return l_(e) && Z(e.then);
};
function Q(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = t_(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function m_(e, t, n) {
	for (var r = Lg(e), i = r, a = 0, o = t_(t); a < o.length - 1; a++) {
		var s = o[a], c = Q(e, o.slice(0, a + 1));
		if (c && (l_(c) || Array.isArray(c))) i = i[s] = Lg(c);
		else {
			var l = o[a + 1];
			i = i[s] = u_(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function h_(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		l_(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, h_(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function g_(e, t) {
	switch (t.type) {
		case "SET_VALUES": return X({}, e, { values: t.payload });
		case "SET_TOUCHED": return X({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Ng.default)(e.errors, t.payload) ? e : X({}, e, { errors: t.payload });
		case "SET_STATUS": return X({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return X({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return X({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return X({}, e, { values: m_(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return X({}, e, { touched: m_(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return X({}, e, { errors: m_(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return X({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return X({}, e, {
			touched: h_(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return X({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return X({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var __ = {}, v_ = {};
function y_(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, d = r_(e, [
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
	}, d), p = (0, w.useRef)(f.initialValues), m = (0, w.useRef)(f.initialErrors || __), h = (0, w.useRef)(f.initialTouched || v_), g = (0, w.useRef)(f.initialStatus), _ = (0, w.useRef)(!1), v = (0, w.useRef)({});
	(0, w.useEffect)(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = (0, w.useState)(0)[1], b = (0, w.useRef)({
		values: Mg(f.initialValues),
		errors: Mg(f.initialErrors) || __,
		touched: Mg(f.initialTouched) || v_,
		status: Mg(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = (0, w.useCallback)(function(e) {
		var t = b.current;
		b.current = g_(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = (0, w.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(__) : p_(i) ? i.then(function(e) {
				n(e || __);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), T = (0, w.useCallback)(function(e, t) {
		var n = f.validationSchema, r = Z(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : S_(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(__);
			}, function(n) {
				n.name === "ValidationError" ? e(x_(n)) : t(n);
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
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = m_(e, t[r], n)), e;
			}, {});
		});
	}, [E]), O = (0, w.useCallback)(function(e) {
		return Promise.all([
			D(e),
			f.validationSchema ? T(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return Rd.all([
				t,
				n,
				r
			], { arrayMerge: w_ });
		});
	}, [
		f.validate,
		f.validationSchema,
		D,
		C,
		T
	]), k = O_(function(e) {
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
		o && _.current === !0 && (0, Ng.default)(p.current, f.initialValues) && k(p.current);
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
			p_(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, w.useEffect)(function() {
		_.current === !0 && !(0, Ng.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, A(), o && k(p.current));
	}, [
		l,
		f.initialValues,
		A,
		o,
		k
	]), (0, w.useEffect)(function() {
		l && _.current === !0 && !(0, Ng.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || __, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || __
		}));
	}, [l, f.initialErrors]), (0, w.useEffect)(function() {
		l && _.current === !0 && !(0, Ng.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || v_, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || v_
		}));
	}, [l, f.initialTouched]), (0, w.useEffect)(function() {
		l && _.current === !0 && !(0, Ng.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var j = O_(function(e) {
		if (v.current[e] && Z(v.current[e].validate)) {
			var t = Q(x.values, e), n = v.current[e].validate(t);
			return p_(n) ? (S({
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
		});
		return Promise.resolve();
	}), M = (0, w.useCallback)(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), N = (0, w.useCallback)(function(e) {
		delete v.current[e];
	}, []), P = O_(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? k(x.values) : Promise.resolve();
	}), F = (0, w.useCallback)(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), I = O_(function(e, t) {
		var r = Z(e) ? e(x.values) : e;
		return S({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? k(r) : Promise.resolve();
	}), L = (0, w.useCallback)(function(e, t) {
		S({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), R = O_(function(e, t, r) {
		var i = Z(t) ? t(Q(x.values, e)) : t;
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? k(m_(x.values, e, i)) : Promise.resolve();
	}), ee = (0, w.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!d_(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? E_(Q(x.values, n), u, l) : d && f ? T_(d) : l;
		}
		n && R(n, r);
	}, [R, x.values]), z = O_(function(e) {
		if (d_(e)) return function(t) {
			return ee(t, e);
		};
		ee(e);
	}), te = O_(function(e, t, n) {
		return t === void 0 && (t = !0), S({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? k(x.values) : Promise.resolve();
	}), ne = (0, w.useCallback)(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id;
		n.outerHTML, te(t || r || i, !0);
	}, [te]), re = O_(function(e) {
		if (d_(e)) return function(t) {
			return ne(t, e);
		};
		ne(e);
	}), ie = (0, w.useCallback)(function(e) {
		Z(e) ? S({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : S({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), ae = (0, w.useCallback)(function(e) {
		S({
			type: "SET_STATUS",
			payload: e
		});
	}, []), oe = (0, w.useCallback)(function(e) {
		S({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), se = O_(function() {
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
			} else if (_.current && (S({ type: "SUBMIT_FAILURE" }), t)) throw e;
		});
	}), ce = O_(function(e) {
		e && e.preventDefault && Z(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Z(e.stopPropagation) && e.stopPropagation(), se().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), le = {
		resetForm: A,
		validateForm: k,
		validateField: j,
		setErrors: F,
		setFieldError: L,
		setFieldTouched: te,
		setFieldValue: R,
		setStatus: ae,
		setSubmitting: oe,
		setTouched: P,
		setValues: I,
		setFormikState: ie,
		submitForm: se
	}, ue = O_(function() {
		return u(x.values, le);
	}), de = O_(function(e) {
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
				return R(e, t, n);
			},
			setTouched: function(t, n) {
				return te(e, t, n);
			},
			setError: function(t) {
				return L(e, t);
			}
		};
	}, [
		R,
		te,
		L
	]), B = (0, w.useCallback)(function(e) {
		var t = l_(e), n = t ? e.name : e, r = Q(x.values, n), i = {
			name: n,
			value: r,
			onChange: z,
			onBlur: re
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		re,
		z,
		x.values
	]), me = (0, w.useMemo)(function() {
		return !(0, Ng.default)(p.current, x.values);
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
		handleBlur: re,
		handleChange: z,
		handleReset: de,
		handleSubmit: ce,
		resetForm: A,
		setErrors: F,
		setFormikState: ie,
		setFieldTouched: te,
		setFieldValue: R,
		setFieldError: L,
		setStatus: ae,
		setSubmitting: oe,
		setTouched: P,
		setValues: I,
		submitForm: se,
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
function b_(e) {
	var t = y_(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, w.useImperativeHandle)(a, function() {
		return t;
	}), (0, w.createElement)(o_, { value: t }, n ? (0, w.createElement)(n, t) : i ? i(t) : r ? Z(r) ? r(t) : f_(r) ? null : w.Children.only(r) : null);
}
function x_(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return m_(t, e.path, e.message);
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
			Q(t, o.path) || (t = m_(t, o.path, o.message));
		}
	}
	return t;
}
function S_(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = C_(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function C_(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || uf(e) ? C_(e) : e === "" ? void 0 : e;
		}) : uf(e[r]) ? t[r] = C_(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function w_(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? Rd(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = Rd(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function T_(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function E_(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var D_ = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? w.useLayoutEffect : w.useEffect;
function O_(e) {
	var t = (0, w.useRef)(e);
	return D_(function() {
		t.current = e;
	}), (0, w.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
function k_(e) {
	var t = s_(), n = t.getFieldProps, r = t.getFieldMeta, i = t.getFieldHelpers, a = t.registerField, o = t.unregisterField, s = l_(e) ? e : { name: e }, c = s.name, l = s.validate;
	(0, w.useEffect)(function() {
		return c && a(c, { validate: l }), function() {
			c && o(c);
		};
	}, [
		a,
		o,
		c,
		l
	]), !c && Fg(!1);
	var u = (0, w.useMemo)(function() {
		return i(c);
	}, [i, c]);
	return [
		n(s),
		r(c),
		u
	];
}
function A_(e) {
	var t = e.validate, n = e.name, r = e.render, i = e.children, a = e.as, o = e.component, s = e.className, c = r_(e, [
		"validate",
		"name",
		"render",
		"children",
		"as",
		"component",
		"className"
	]), l = r_(s_(), ["validate", "validationSchema"]), u = l.registerField, d = l.unregisterField;
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
			var h = c.innerRef, g = r_(c, ["innerRef"]);
			return (0, w.createElement)(o, X({ ref: h }, f, g, { className: s }), i);
		}
		return (0, w.createElement)(o, X({
			field: f,
			form: l
		}, c, { className: s }), i);
	}
	var _ = a || "input";
	if (typeof _ == "string") {
		var v = c.innerRef, y = r_(c, ["innerRef"]);
		return (0, w.createElement)(_, X({ ref: v }, f, y, { className: s }), i);
	}
	return (0, w.createElement)(_, X({}, f, c, { className: s }), i);
}
var j_ = /* @__PURE__ */ (0, w.forwardRef)(function(e, t) {
	var n = e.action, r = r_(e, ["action"]), i = n ?? "#", a = s_(), o = a.handleReset, s = a.handleSubmit;
	return (0, w.createElement)("form", X({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
j_.displayName = "Form";
var M_ = function(e, t, n) {
	var r = I_(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, N_ = function(e, t, n) {
	var r = I_(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, P_ = function(e, t, n) {
	var r = I_(e);
	return r.splice(t, 0, n), r;
}, F_ = function(e, t, n) {
	var r = I_(e);
	return r[t] = n, r;
}, I_ = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(X({}, e, { length: t + 1 }));
}, L_ = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || l_(e) ? n(I_(e)) : e;
	};
}, R_ = /* @__PURE__ */ function(e) {
	n_(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = L_(r, e), o = L_(t, e), s = m_(n.values, a, e(Q(n.values, a))), c = r ? i(Q(n.errors, a)) : void 0, l = t ? o(Q(n.touched, a)) : void 0;
				return c_(c) && (c = void 0), c_(l) && (l = void 0), X({}, n, {
					values: s,
					errors: r ? m_(n.errors, a, c) : n.errors,
					touched: t ? m_(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(I_(t), [Mg(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return N_(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return M_(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return P_(n, e, t);
			}, function(t) {
				return P_(t, e, null);
			}, function(t) {
				return P_(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return F_(n, e, t);
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
		}, n.remove = n.remove.bind(i_(n)), n.pop = n.pop.bind(i_(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Ng.default)(Q(e.formik.values, e.name), Q(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? I_(n) : [];
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = r_(o, ["validate", "validationSchema"]), c = X({}, e, {
			form: s,
			name: a
		});
		return n ? (0, w.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : f_(i) ? null : w.Children.only(i) : null;
	}, t;
}(w.Component);
R_.defaultProps = { validateOnChange: !0 };
//#endregion
//#region src/lib/context.ts
var z_ = (0, w.createContext)(null), B_ = () => (0, w.useContext)(z_), $ = a(), V_ = ({ fileTypes: e, onFileSelect: t, onError: n, onClose: r }) => {
	let [i, a] = (0, w.useState)(null), { element: o } = (0, w.useContext)(g), s = B_(), c = (0, w.useRef)(null), l = o.getAttribute("data-usage-id");
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
	return u.searchParams.set("multiSelect", "false"), u.searchParams.set("embedded", "true"), e && u.searchParams.set("fileTypes", e.join(",")), u.searchParams.set("usageKey", l), /* @__PURE__ */ (0, $.jsx)(Dd, {
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
}, H_ = ({ children: e, setValue: t, fileTypes: n = null }) => {
	let [r, i] = (0, w.useState)(!1), [a, o] = (0, w.useState)(null), s = B_(), c = (0, w.useCallback)(async (e) => {
		try {
			await t(e), o(null);
		} catch (e) {
			o(e.message);
		}
		i(!1);
	}, [t]);
	return s?.file_picker_url ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsxs)(si, { children: [e, /* @__PURE__ */ (0, $.jsx)(si.Append, { children: /* @__PURE__ */ (0, $.jsx)(sa, {
			variant: "outline-secondary",
			onClick: () => i(!0),
			children: "Select File"
		}) })] }),
		a && /* @__PURE__ */ (0, $.jsx)(q.Control.Feedback, {
			type: "default",
			children: a
		}),
		r && /* @__PURE__ */ (0, $.jsx)(V_, {
			fileTypes: n,
			onFileSelect: c,
			onError: o,
			onClose: () => i(!1)
		})
	] }) : e;
}, U_ = () => {
	let [e] = k_("variant"), [t] = k_("image_position"), [n, , { setValue: i }] = k_("media_url"), [a] = k_("description"), o = e.value !== p.section, s = e.value === p.section, l = {
		xs: 12,
		sm: o ? 8 : 12,
		lg: o ? 10 : 12
	};
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "cover-editor-form",
		children: /* @__PURE__ */ (0, $.jsxs)(c, {
			className: "cover-editor-grid",
			children: [
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: r,
					controlId: "cover-form-display-name",
					xs: 12,
					children: [
						/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Display Name" }),
						/* @__PURE__ */ (0, $.jsx)(A_, {
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
					as: r,
					controlId: "cover-form-variant",
					xs: 12,
					sm: 6,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Variant" }), /* @__PURE__ */ (0, $.jsxs)(q.Control, {
						as: "select",
						...e,
						children: [
							/* @__PURE__ */ (0, $.jsx)("option", {
								value: p.section,
								children: "Section Cover"
							}),
							/* @__PURE__ */ (0, $.jsx)("option", {
								value: p.course,
								children: "Course Cover"
							}),
							/* @__PURE__ */ (0, $.jsx)("option", {
								value: p.separator,
								children: "Separator"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: r,
					controlId: "cover-form-media-url",
					xs: 12,
					sm: 6,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Image URL" }), /* @__PURE__ */ (0, $.jsx)(H_, {
						setValue: (e) => i(e),
						fileTypes: ["image"],
						children: /* @__PURE__ */ (0, $.jsx)(A_, {
							as: q.Control,
							name: "media_url",
							value: n.value
						})
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: r,
					controlId: "cover-form-media-alt-text",
					xs: 12,
					children: [
						/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Image Alt Text" }),
						/* @__PURE__ */ (0, $.jsx)(A_, {
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
					as: r,
					controlId: "cover-form-image-position",
					xs: 12,
					sm: 6,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Image Position" }), /* @__PURE__ */ (0, $.jsxs)(q.Control, {
						as: "select",
						...t,
						children: [/* @__PURE__ */ (0, $.jsx)("option", {
							value: v.right,
							children: "Image Right"
						}), /* @__PURE__ */ (0, $.jsx)("option", {
							value: v.left,
							children: "Image Left"
						})]
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: r,
					controlId: "cover-form-top-header",
					...l,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Top Header" }), /* @__PURE__ */ (0, $.jsx)(A_, {
						as: q.Control,
						name: "top_header"
					})]
				}),
				o && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: r,
					controlId: "cover-form-top-header-color",
					xs: 12,
					sm: 4,
					lg: 2,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(A_, {
						as: q.Control,
						name: "top_header_color",
						type: "color",
						"aria-label": "Top header color"
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: r,
					controlId: "cover-form-main-header",
					...l,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Main Header" }), /* @__PURE__ */ (0, $.jsx)(A_, {
						as: q.Control,
						name: "main_header"
					})]
				}),
				o && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: r,
					controlId: "cover-form-main-header-color",
					xs: 12,
					sm: 4,
					lg: 2,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(A_, {
						as: q.Control,
						name: "main_header_color",
						type: "color",
						"aria-label": "Main header color"
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: r,
					controlId: "cover-form-subheader",
					...l,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Subheader" }), /* @__PURE__ */ (0, $.jsx)(A_, {
						as: q.Control,
						name: "subheader"
					})]
				}),
				o && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: r,
					controlId: "cover-form-subheader-color",
					xs: 12,
					sm: 4,
					lg: 2,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(A_, {
						as: q.Control,
						name: "subheader_color",
						type: "color",
						"aria-label": "Subheader color"
					})]
				}),
				/* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: r,
					controlId: "cover-form-description",
					...l,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Description" }), /* @__PURE__ */ (0, $.jsx)(q.Control, {
						as: "textarea",
						...a
					})]
				}),
				o && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
					className: "cover-editor-field",
					as: r,
					controlId: "cover-form-description-color",
					xs: 12,
					sm: 4,
					lg: 2,
					children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(A_, {
						as: q.Control,
						name: "description_color",
						type: "color",
						"aria-label": "Description color"
					})]
				})
			]
		})
	});
}, W_ = () => {
	let { runtime: e } = (0, w.useContext)(g), t = s_();
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "react-studio-block",
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "cover-block-editor editor-with-buttons",
			children: [/* @__PURE__ */ (0, $.jsx)("div", {
				className: "wrapper-comp-settings is-active cover-editor-body",
				children: /* @__PURE__ */ (0, $.jsx)(U_, {})
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
}, G_ = (e) => {
	let { runtime: t } = (0, w.useContext)(g), n = _("studio_save");
	return /* @__PURE__ */ (0, $.jsx)(b_, {
		initialValues: e,
		onSubmit: (e) => {
			m({
				saveUrl: n,
				data: e,
				runtime: t,
				errorMessage: "Failed to save cover block configuration"
			});
		},
		children: /* @__PURE__ */ (0, $.jsx)(W_, {})
	});
}, K_ = ".wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.cover-block-editor{flex-direction:column;justify-content:space-between;display:flex}.cover-editor-body,.cover-editor-form{padding:var(--cover-studio-stack-padding,16px)}.cover-editor-grid{row-gap:var(--cover-studio-field-gap,16px)}.cover-editor-field{margin-bottom:var(--cover-studio-field-gap,16px)}.cover-editor-actions{padding:var(--cover-studio-actions-padding,16px)}", q_ = (e, t, n) => {
	u({
		runtime: e,
		element: t,
		config: n.config,
		styles: K_
	})(/* @__PURE__ */ (0, $.jsx)(z_.Provider, {
		value: n.config,
		children: /* @__PURE__ */ (0, $.jsx)(G_, { ...n.data })
	}));
};
//#endregion
export { q_ as renderBlock };
