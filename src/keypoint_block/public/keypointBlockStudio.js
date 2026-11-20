import { n as e, t } from "./rolldown-runtime-CYdcPHCu.js";
import { C as n, D as r, E as i, S as a, T as o, _ as s, a as c, b as l, c as u, d, f, g as p, h as m, i as h, l as g, m as _, n as v, o as y, p as b, r as x, s as S, t as C, u as w, v as T, w as E, x as D, y as O } from "./Button-CQniCcA9.js";
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/useIntl.js
var k = /* @__PURE__ */ e(r());
function A() {
	var e = k.useContext(p);
	return s(e), e;
}
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/createFormattedComponent.js
var j;
(function(e) {
	e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(j ||= {});
var M;
(function(e) {
	e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(M ||= {});
function N(e) {
	var t = function(t) {
		var r = A(), i = t.value, a = t.children, o = n(t, ["value", "children"]), s = typeof i == "string" ? new Date(i || 0) : i;
		return a(e === "formatDate" ? r.formatDateToParts(s, o) : r.formatTimeToParts(s, o));
	};
	return t.displayName = M[e], t;
}
function P(e) {
	var t = function(t) {
		var r = A(), i = t.value, a = t.children, o = n(t, ["value", "children"]), s = r[e](i, o);
		if (typeof a == "function") return a(s);
		var c = r.textComponent || k.Fragment;
		return k.createElement(c, null, s);
	};
	return t.displayName = j[e], t;
}
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/src/components/message.js
function F(e, t) {
	var r = e.values, i = n(e, ["values"]), a = t.values, o = n(t, ["values"]);
	return T(a, r) && T(i, o);
}
function I(e) {
	var t = A(), n = t.formatMessage, r = t.textComponent, i = r === void 0 ? k.Fragment : r, a = e.id, o = e.description, s = e.defaultMessage, c = e.values, l = e.children, u = e.tagName, d = u === void 0 ? i : u, f = e.ignoreTag, p = n({
		id: a,
		description: o,
		defaultMessage: s
	}, c, { ignoreTag: f });
	return typeof l == "function" ? l(Array.isArray(p) ? p : [p]) : d ? k.createElement(d, null, k.Children.toArray(p)) : k.createElement(k.Fragment, null, p);
}
I.displayName = "FormattedMessage";
var L = k.memo(I, F);
L.displayName = "MemoizedFormattedMessage";
// node_modules/.pnpm/react-intl@6.8.9_react@18.3.1_typescript@5.9.3/node_modules/react-intl/lib/index.js
function R(e) {
	return e;
}
P("formatDate"), P("formatTime"), P("formatNumber"), P("formatList"), P("formatDisplayName"), N("formatDate"), N("formatTime");
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/ActionRow/index.js
var z = /* @__PURE__ */ e(i()), B = m(), V = /* @__PURE__ */ e(g());
function H({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /*#__PURE__*/ k.createElement(e, {
		...r,
		className: (0, V.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function U() {
	return /*#__PURE__*/ k.createElement("span", { className: "pgn__action-row-spacer" });
}
H.Spacer = U, (/* @__PURE__ */ t(((e, t) => {
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
function ee(e) {
	return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
// node_modules/.pnpm/uncontrollable@7.2.1_react@18.3.1/node_modules/uncontrollable/lib/esm/hook.js
function te(e) {
	var t = ne(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function ne(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function re(e, t, n) {
	var r = (0, k.useRef)(e !== void 0), i = (0, k.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, k.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
function ie(e, t) {
	return Object.keys(t).reduce(function(n, r) {
		var i, a = n, o = a[ee(r)], s = a[r], c = S(a, [ee(r), r].map(te)), l = t[r], d = re(s, o, e[l]), f = d[0], p = d[1];
		return u({}, c, (i = {}, i[r] = f, i[l] = p, i));
	}, e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function ae(e, t) {
	return ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, ae(e, t);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function oe(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ae(e, t);
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SelectableContext.js
var se = /*#__PURE__*/ k.createContext(null), ce = function(e, t) {
	return t === void 0 && (t = null), e == null ? t || null : String(e);
};
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function le(e) {
	return e && e.ownerDocument || document;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function W(e) {
	var t = le(e);
	return t && t.defaultView || window;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function ue(e, t) {
	return W(e).getComputedStyle(e, t);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var de = /([A-Z])/g;
function fe(e) {
	return e.replace(de, "-$1").toLowerCase();
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var pe = /^ms-/;
function me(e) {
	return fe(e).replace(pe, "-ms-");
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var he = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function ge(e) {
	return !!(e && he.test(e));
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function _e(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(me(t)) || ue(e).getPropertyValue(me(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(me(i)) : ge(i) ? r += i + "(" + a + ") " : n += me(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
// node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var ve = /* @__PURE__ */ t(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), ye = /* @__PURE__ */ t(((e, t) => {
	var n = ve();
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
})), be = /* @__PURE__ */ t(((e, t) => {
	t.exports = ye()();
})), xe = { disabled: !1 }, Se = k.createContext(null), Ce = function(e) {
	return e.scrollTop;
}, we = "unmounted", Te = "exited", Ee = "entering", De = "entered", Oe = "exiting", ke = /*#__PURE__*/ function(e) {
	oe(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = Te, r.appearStatus = Ee) : o = De : o = t.unmountOnExit || t.mountOnEnter ? we : Te, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: Te } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = Ee) : (n === "entering" || n === "entered") && (t = Oe);
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
					n && Ce(n);
				}
				this.performEnter(e);
			} else this.performExit();
		} else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: we });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [z.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		!e && !n || xe.disabled ? this.safeSetState({ status: De }, function() {
			t.props.onEntered(a);
		}) : (this.props.onEnter(a, o), this.safeSetState({ status: Ee }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: De }, function() {
					t.props.onEntered(a, o);
				});
			});
		}));
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : z.findDOMNode(this);
		!t || xe.disabled ? this.safeSetState({ status: Te }, function() {
			e.props.onExited(r);
		}) : (this.props.onExit(r), this.safeSetState({ status: Oe }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: Te }, function() {
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
		var r = S(t, [
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
		return /*#__PURE__*/ k.createElement(Se.Provider, { value: null }, typeof n == "function" ? n(e, r) : k.cloneElement(k.Children.only(n), r));
	}, t;
}(k.Component);
ke.contextType = Se, ke.propTypes = {};
function Ae() {}
ke.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: Ae,
	onEntering: Ae,
	onEntered: Ae,
	onExit: Ae,
	onExiting: Ae,
	onExited: Ae
}, ke.UNMOUNTED = we, ke.EXITED = Te, ke.ENTERING = Ee, ke.ENTERED = De, ke.EXITING = Oe;
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var je = !!(typeof window < "u" && window.document && window.document.createElement), Me = !1, Ne = !1;
try {
	var Pe = {
		get passive() {
			return Me = !0;
		},
		get once() {
			return Ne = Me = !0;
		}
	};
	je && (window.addEventListener("test", Pe, Pe), window.removeEventListener("test", Pe, !0));
} catch {}
function Fe(e, t, n, r) {
	if (r && typeof r != "boolean" && !Ne) {
		var i = r.once, a = r.capture, o = n;
		!Ne && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, Me ? r : a);
	}
	e.addEventListener(t, n, r);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function Ie(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function Le(e, t, n, r) {
	return Fe(e, t, n, r), function() {
		Ie(e, t, n, r);
	};
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function Re(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function ze(e) {
	var t = _e(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function Be(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || Re(e, "transitionend", !0);
	}, t + n), a = Le(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function Ve(e, t, n, r) {
	n ??= ze(e) || 0;
	var i = Be(e, n, r), a = Le(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function He(e, t) {
	var n = _e(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Ue(e, t) {
	var n = Ve(e, function(r) {
		r.target === e && (n(), t(r));
	}, He(e, "transitionDuration") + He(e, "transitionDelay"));
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function We(e) {
	e.offsetHeight;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function Ge(e) {
	let t = (0, k.useRef)(e);
	return (0, k.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Ke(e) {
	let t = Ge(e);
	return (0, k.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var qe = ["className", "children"], Je, Ye = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Xe = (Je = {}, Je[Ee] = "show", Je[De] = "show", Je), Ze = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = S(e, qe), a = (0, k.useCallback)(function(e) {
		We(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /*#__PURE__*/ k.createElement(ke, u({
		ref: t,
		addEndListener: Ue
	}, i, { onEnter: a }), function(e, t) {
		return /*#__PURE__*/ k.cloneElement(r, u({}, t, { className: (0, V.default)("fade", n, r.props.className, Xe[e]) }));
	});
});
Ze.defaultProps = Ye, Ze.displayName = "Fade";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/CloseButton.js
var G = /* @__PURE__ */ e(be()), Qe = [
	"label",
	"onClick",
	"className"
], $e = {
	label: G.default.string.isRequired,
	onClick: G.default.func
}, et = { label: "Close" }, tt = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.label, r = e.onClick, i = e.className, a = S(e, Qe);
	return /*#__PURE__*/ k.createElement("button", u({
		ref: t,
		type: "button",
		className: (0, V.default)("close", i),
		onClick: r
	}, a), /*#__PURE__*/ k.createElement("span", { "aria-hidden": "true" }, "×"), /*#__PURE__*/ k.createElement("span", { className: "sr-only" }, n));
});
tt.displayName = "CloseButton", tt.propTypes = $e, tt.defaultProps = et;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/divWithClassName.js
var nt = (function(e) {
	return /*#__PURE__*/ k.forwardRef(function(t, n) {
		return /*#__PURE__*/ k.createElement("div", u({}, t, {
			ref: n,
			className: (0, V.default)(t.className, e)
		}));
	});
}), rt = /-(.)/g;
function it(e) {
	return e.replace(rt, function(e, t) {
		return t.toUpperCase();
	});
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var at = [
	"className",
	"bsPrefix",
	"as"
], ot = function(e) {
	return e[0].toUpperCase() + it(e).slice(1);
};
function st(e, t) {
	var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? ot(e) : r, a = n.Component, o = n.defaultProps, s = /*#__PURE__*/ k.forwardRef(function(t, n) {
		var r = t.className, i = t.bsPrefix, o = t.as, s = o === void 0 ? a || "div" : o, c = S(t, at), l = y(i, e);
		return /*#__PURE__*/ k.createElement(s, u({
			ref: n,
			className: (0, V.default)(r, l)
		}, c));
	});
	return s.defaultProps = o, s.displayName = i, s;
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Alert.js
var ct = [
	"bsPrefix",
	"show",
	"closeLabel",
	"className",
	"children",
	"variant",
	"onClose",
	"dismissible",
	"transition"
], lt = nt("h4");
lt.displayName = "DivStyledAsH4";
var ut = st("alert-heading", { Component: lt }), dt = st("alert-link", { Component: c }), ft = {
	show: !0,
	transition: Ze,
	closeLabel: "Close alert"
}, pt = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = ie(e, { show: "onClose" }), r = n.bsPrefix, i = n.show, a = n.closeLabel, o = n.className, s = n.children, c = n.variant, l = n.onClose, d = n.dismissible, f = n.transition, p = S(n, ct), m = y(r, "alert"), h = Ke(function(e) {
		l && l(!1, e);
	}), g = f === !0 ? Ze : f, _ = /*#__PURE__*/ k.createElement("div", u({ role: "alert" }, g ? void 0 : p, {
		ref: t,
		className: (0, V.default)(o, m, c && m + "-" + c, d && m + "-dismissible")
	}), d && /*#__PURE__*/ k.createElement(tt, {
		onClick: h,
		label: a
	}), s);
	return g ? /*#__PURE__*/ k.createElement(g, u({ unmountOnExit: !0 }, p, {
		ref: void 0,
		in: i
	}), _) : i ? _ : null;
});
pt.displayName = "Alert", pt.defaultProps = ft, pt.Link = dt, pt.Heading = ut;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/CardContext.js
var mt = /*#__PURE__*/ k.createContext(null);
mt.displayName = "CardContext";
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function ht() {
	let e = (0, k.useRef)(!0), t = (0, k.useRef)(() => e.current);
	return (0, k.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function gt(e) {
	let t = (0, k.useRef)(e);
	return t.current = e, t;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function _t(e) {
	let t = gt(e);
	(0, k.useEffect)(() => () => t.current(), []);
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var vt = 2 ** 31 - 1;
function yt(e, t, n) {
	let r = n - Date.now();
	e.current = r <= vt ? setTimeout(t, r) : setTimeout(() => yt(e, t, n), vt);
}
function bt() {
	let e = ht(), t = (0, k.useRef)();
	return _t(() => clearTimeout(t.current)), (0, k.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= vt ? t.current = setTimeout(r, i) : yt(t, r, Date.now() + i));
		}
		return {
			set: r,
			clear: n,
			handleRef: t
		};
	}, []);
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ElementChildren.js
function xt(e, t) {
	var n = 0;
	return k.Children.map(e, function(e) {
		return /*#__PURE__*/ k.isValidElement(e) ? t(e, n++) : e;
	});
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Col.js
var St = [
	"bsPrefix",
	"className",
	"as"
], Ct = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], wt = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = S(e, St), s = y(n, "col"), c = [], l = [];
	return Ct.forEach(function(e) {
		var t = o[e];
		delete o[e];
		var n, r, i;
		if (typeof t == "object" && t) {
			var a = t.span;
			n = a === void 0 || a, r = t.offset, i = t.order;
		} else n = t;
		var u = e === "xs" ? "" : "-" + e;
		n && c.push(n === !0 ? "" + s + u : "" + s + u + "-" + n), i != null && l.push("order" + u + "-" + i), r != null && l.push("offset" + u + "-" + r);
	}), c.length || c.push(s), /*#__PURE__*/ k.createElement(a, u({}, o, {
		ref: t,
		className: V.default.apply(void 0, [r].concat(c, l))
	}));
});
wt.displayName = "Col";
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/matches.js
var Tt;
function Et(e, t) {
	if (!Tt) {
		var n = document.body, r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
		Tt = function(e, t) {
			return r.call(e, t);
		};
	}
	return Tt(e, t);
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/querySelectorAll.js
var Dt = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Ot(e, t) {
	return Dt(e.querySelectorAll(t));
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/usePrevious.js
function kt(e) {
	let t = (0, k.useRef)(null);
	return (0, k.useEffect)(() => {
		t.current = e;
	}), t.current;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useForceUpdate.js
function At() {
	let [, e] = (0, k.useReducer)((e) => !e, !1);
	return e;
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventListener.js
function jt(e, t, n, r = !1) {
	let i = Ke(n);
	(0, k.useEffect)(() => {
		let n = typeof e == "function" ? e() : e;
		return n.addEventListener(t, i, r), () => n.removeEventListener(t, i, r);
	}, [e]);
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useGlobalListener.js
function Mt(e, t, n = !1) {
	return jt((0, k.useCallback)(() => document, []), e, t, n);
}
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownContext.js
var Nt = /*#__PURE__*/ k.createContext(null);
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function Pt() {
	return (0, k.useState)(null);
}
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function Ft(e) {
	let t = ht();
	return [e[0], (0, k.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var It = "bottom", Lt = "right", Rt = "left", zt = "auto", Bt = [
	"top",
	It,
	Lt,
	Rt
], Vt = "start", Ht = "clippingParents", Ut = "viewport", Wt = "popper", Gt = "reference", Kt = /*#__PURE__*/ Bt.reduce(function(e, t) {
	return e.concat([t + "-" + Vt, t + "-end"]);
}, []), qt = /*#__PURE__*/ [].concat(Bt, [zt]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + Vt,
		t + "-end"
	]);
}, []), Jt = [
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
function Yt(e) {
	return e.split("-")[0];
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function Xt(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function Zt(e) {
	return e instanceof Xt(e).Element || e instanceof Element;
}
function Qt(e) {
	return e instanceof Xt(e).HTMLElement || e instanceof HTMLElement;
}
function $t(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof Xt(e).ShadowRoot || e instanceof ShadowRoot;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var en = Math.max, tn = Math.min, nn = Math.round;
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function rn() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function an() {
	return !/^((?!chrome|android).)*safari/i.test(rn());
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function on(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && Qt(e) && (i = e.offsetWidth > 0 && nn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && nn(r.height) / e.offsetHeight || 1);
	var o = (Zt(e) ? Xt(e) : window).visualViewport, s = !an() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
function sn(e) {
	var t = on(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function cn(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && $t(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function ln(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function un(e) {
	return Xt(e).getComputedStyle(e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function dn(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(ln(e)) >= 0;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function fn(e) {
	return ((Zt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function pn(e) {
	return ln(e) === "html" ? e : e.assignedSlot || e.parentNode || ($t(e) ? e.host : null) || fn(e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function mn(e) {
	return !Qt(e) || un(e).position === "fixed" ? null : e.offsetParent;
}
function hn(e) {
	var t = /firefox/i.test(rn());
	if (/Trident/i.test(rn()) && Qt(e) && un(e).position === "fixed") return null;
	var n = pn(e);
	for ($t(n) && (n = n.host); Qt(n) && ["html", "body"].indexOf(ln(n)) < 0;) {
		var r = un(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function gn(e) {
	for (var t = Xt(e), n = mn(e); n && dn(n) && un(n).position === "static";) n = mn(n);
	return n && (ln(n) === "html" || ln(n) === "body" && un(n).position === "static") ? t : n || hn(e) || t;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function _n(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function vn(e, t, n) {
	return en(e, tn(t, n));
}
function yn(e, t, n) {
	var r = vn(e, t, n);
	return r > n ? n : r;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function bn() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function xn(e) {
	return Object.assign({}, bn(), e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function Sn(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var Cn = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, xn(typeof e == "number" ? Sn(e, Bt) : e);
};
function wn(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Yt(n.placement), c = _n(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (a && o) {
		var u = Cn(i.padding, n), d = sn(a), f = c === "y" ? "top" : Rt, p = c === "y" ? It : Lt, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = gn(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = vn(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function Tn(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || cn(t.elements.popper, r) && (t.elements.arrow = r));
}
var En = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: wn,
	effect: Tn,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function Dn(e) {
	return e.split("-")[1];
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var On = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function kn(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: nn(n * i) / i || 0,
		y: nn(r * i) / i || 0
	};
}
function An(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = Rt, b = "top", x = window;
	if (l) {
		var S = gn(n), C = "clientHeight", w = "clientWidth";
		if (S === Xt(n) && (S = fn(n), un(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = It;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = Lt;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && On), O = u === !0 ? kn({
		x: p,
		y: h
	}, Xt(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function jn(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 || r, a = n.adaptive, o = a === void 0 || a, s = n.roundOffsets, c = s === void 0 || s, l = {
		placement: Yt(t.placement),
		variation: Dn(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, An(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, An(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Mn = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: jn,
	data: {}
}, Nn = { passive: !0 };
function Pn(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 || i, o = r.resize, s = o === void 0 || o, c = Xt(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, Nn);
	}), s && c.addEventListener("resize", n.update, Nn), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, Nn);
		}), s && c.removeEventListener("resize", n.update, Nn);
	};
}
var Fn = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: Pn,
	data: {}
}, In = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Ln(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return In[e];
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var Rn = {
	start: "end",
	end: "start"
};
function zn(e) {
	return e.replace(/start|end/g, function(e) {
		return Rn[e];
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function Bn(e) {
	var t = Xt(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function Vn(e) {
	return on(fn(e)).left + Bn(e).scrollLeft;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function Hn(e, t) {
	var n = Xt(e), r = fn(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = an();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + Vn(e),
		y: c
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function Un(e) {
	var t = fn(e), n = Bn(e), r = e.ownerDocument?.body, i = en(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = en(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + Vn(e), s = -n.scrollTop;
	return un(r || t).direction === "rtl" && (o += en(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function Wn(e) {
	var t = un(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function Gn(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(ln(e)) >= 0 ? e.ownerDocument.body : Qt(e) && Wn(e) ? e : Gn(pn(e));
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function Kn(e, t) {
	t === void 0 && (t = []);
	var n = Gn(e), r = n === e.ownerDocument?.body, i = Xt(n), a = r ? [i].concat(i.visualViewport || [], Wn(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(Kn(pn(a)));
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function qn(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function Jn(e, t) {
	var n = on(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Yn(e, t, n) {
	return t === "viewport" ? qn(Hn(e, n)) : Zt(t) ? Jn(t, n) : qn(Un(fn(e)));
}
function Xn(e) {
	var t = Kn(pn(e)), n = ["absolute", "fixed"].indexOf(un(e).position) >= 0 && Qt(e) ? gn(e) : e;
	return Zt(n) ? t.filter(function(e) {
		return Zt(e) && cn(e, n) && ln(e) !== "body";
	}) : [];
}
function Zn(e, t, n, r) {
	var i = t === "clippingParents" ? Xn(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = Yn(e, n, r);
		return t.top = en(i.top, t.top), t.right = tn(i.right, t.right), t.bottom = tn(i.bottom, t.bottom), t.left = en(i.left, t.left), t;
	}, Yn(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function Qn(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? Yt(r) : null, a = r ? Dn(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case It:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case Lt:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case Rt:
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
	var l = i ? _n(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case Vt:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case "end": c[l] = c[l] + (t[u] / 2 - n[u] / 2);
		}
	}
	return c;
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function $n(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? Ht : s, l = n.rootBoundary, u = l === void 0 ? Ut : l, d = n.elementContext, f = d === void 0 ? Wt : d, p = n.altBoundary, m = p !== void 0 && p, h = n.padding, g = h === void 0 ? 0 : h, _ = xn(typeof g == "number" ? Sn(g, Bt) : g), v = f === "popper" ? Gt : Wt, y = e.rects.popper, b = e.elements[m ? v : f], x = Zn(Zt(b) ? b : b.contextElement || fn(e.elements.popper), c, u, o), S = on(e.elements.reference), C = Qn({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = qn(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
function er(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? qt : c, u = Dn(r), d = u ? s ? Kt : Kt.filter(function(e) {
		return Dn(e) === u;
	}) : Bt, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = $n(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[Yt(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function tr(e) {
	if (Yt(e) === "auto") return [];
	var t = Ln(e);
	return [
		zn(e),
		t,
		zn(t)
	];
}
function nr(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 || i, o = n.altAxis, s = o === void 0 || o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 || p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Yt(g) === g, v = c || (_ || !m ? [Ln(g)] : tr(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(Yt(n) === "auto" ? er(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = Yt(E), O = Dn(E) === Vt, k = ["top", It].indexOf(D) >= 0, A = k ? "width" : "height", j = $n(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? Lt : Rt : O ? It : "top";
			b[A] > x[A] && (M = Ln(M));
			var N = Ln(M), P = [];
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
var rr = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: nr,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function ir(e, t, n) {
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
function ar(e) {
	return [
		"top",
		Lt,
		It,
		Rt
	].some(function(t) {
		return e[t] >= 0;
	});
}
function or(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = $n(t, { elementContext: "reference" }), s = $n(t, { altBoundary: !0 }), c = ir(o, r), l = ir(s, i, a), u = ar(c), d = ar(l);
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
var sr = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: or
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function cr(e, t, n) {
	var r = Yt(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function lr(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = qt.reduce(function(e, n) {
		return e[n] = cr(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var ur = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: lr
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function dr(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = Qn({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var fr = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: dr,
	data: {}
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function pr(e) {
	return e === "x" ? "y" : "x";
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function mr(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 || i, o = n.altAxis, s = o !== void 0 && o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 || f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = $n(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = Yt(t.placement), v = Dn(t.placement), y = !v, b = _n(_), x = pr(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : Rt, A = b === "y" ? It : Lt, j = b === "y" ? "height" : "width", M = S[b], N = M + g[k], P = M - g[A], F = p ? -w[j] / 2 : 0, I = v === "start" ? C[j] : w[j], L = v === "start" ? -w[j] : -C[j], R = t.elements.arrow, z = p && R ? sn(R) : {
				width: 0,
				height: 0
			}, B = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : bn(), V = B[k], H = B[A], U = vn(0, C[j], z[j]), ee = y ? C[j] / 2 - F - U - V - E.mainAxis : I - U - V - E.mainAxis, te = y ? -C[j] / 2 + F + U + H + E.mainAxis : L + U + H + E.mainAxis, ne = t.elements.arrow && gn(t.elements.arrow), re = ne ? b === "y" ? ne.clientTop || 0 : ne.clientLeft || 0 : 0, ie = D?.[b] ?? 0, ae = M + ee - ie - re, oe = M + te - ie, se = vn(p ? tn(N, ae) : N, M, p ? en(P, oe) : P);
			S[b] = se, O[b] = se - M;
		}
		if (s) {
			var ce = b === "x" ? "top" : Rt, le = b === "x" ? It : Lt, W = S[x], ue = x === "y" ? "height" : "width", de = W + g[ce], fe = W - g[le], pe = ["top", Rt].indexOf(_) !== -1, me = D?.[x] ?? 0, he = pe ? de : W - C[ue] - w[ue] - me + E.altAxis, ge = pe ? W + C[ue] + w[ue] - me - E.altAxis : fe, _e = p && pe ? yn(he, W, ge) : vn(p ? he : de, W, p ? ge : fe);
			S[x] = _e, O[x] = _e - W;
		}
		t.modifiersData[r] = O;
	}
}
var hr = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: mr,
	requiresIfExists: ["offset"]
};
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function gr(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function _r(e) {
	return e === Xt(e) || !Qt(e) ? Bn(e) : gr(e);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function vr(e) {
	var t = e.getBoundingClientRect(), n = nn(t.width) / e.offsetWidth || 1, r = nn(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function yr(e, t, n) {
	n === void 0 && (n = !1);
	var r = Qt(t), i = Qt(t) && vr(t), a = fn(t), o = on(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((ln(t) !== "body" || Wn(a)) && (s = _r(t)), Qt(t) ? (c = on(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Vn(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function br(e) {
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
function xr(e) {
	var t = br(e);
	return Jt.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Sr(e) {
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
function Cr(e) {
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
var wr = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Tr() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function Er(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? wr : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, wr, a),
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
					reference: Zt(e) ? Kn(e) : e.contextElement ? Kn(e.contextElement) : [],
					popper: Kn(t)
				};
				var s = xr(Cr([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Tr(t, n)) {
						i.rects = {
							reference: yr(t, gn(n), i.options.strategy === "fixed"),
							popper: sn(n)
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
			update: Sr(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Tr(e, t)) return c;
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
var Dr = Er({ defaultModifiers: [
	sr,
	fr,
	Mn,
	Fn,
	ur,
	rr,
	hr,
	En
] }), Or = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, kr = {
	name: "applyStyles",
	enabled: !1
}, Ar = {
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
}, jr = [];
function Mr(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 || i, o = r.placement, s = o === void 0 ? "bottom" : o, c = r.strategy, l = c === void 0 ? "absolute" : c, d = r.modifiers, f = d === void 0 ? jr : d, p = S(r, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), m = (0, k.useRef)(), h = (0, k.useCallback)(function() {
		var e;
		(e = m.current) == null || e.update();
	}, []), g = (0, k.useCallback)(function() {
		var e;
		(e = m.current) == null || e.forceUpdate();
	}, []), _ = Ft((0, k.useState)({
		placement: s,
		update: h,
		forceUpdate: g,
		attributes: {},
		styles: {
			popper: Or(l),
			arrow: {}
		}
	})), v = _[0], y = _[1], b = (0, k.useMemo)(function() {
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
	return (0, k.useEffect)(function() {
		m.current && a && m.current.setOptions({
			placement: s,
			strategy: l,
			modifiers: [].concat(f, [b, kr])
		});
	}, [
		l,
		s,
		b,
		a
	]), (0, k.useEffect)(function() {
		if (a && e != null && t != null) return m.current = Dr(e, t, u({}, p, {
			placement: s,
			strategy: l,
			modifiers: [].concat(f, [Ar, b])
		})), function() {
			m.current != null && (m.current.destroy(), m.current = void 0, y(function(e) {
				return u({}, e, {
					attributes: {},
					styles: { popper: Or(l) }
				});
			}));
		};
	}, [
		a,
		e,
		t
	]), v;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js
function Nr(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/safeFindDOMNode.js
var Pr = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	t.exports = function() {};
})))());
function Fr(e) {
	return e && "setState" in e ? z.findDOMNode(e) : e ?? null;
}
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var Ir = (function(e) {
	return le(Fr(e));
}), Lr = 27, Rr = function() {};
function zr(e) {
	return e.button === 0;
}
function Br(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Vr = function(e) {
	return e && ("current" in e ? e.current : e);
};
function Hr(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, k.useRef)(!1), c = t || Rr, l = (0, k.useCallback)(function(t) {
		var n = Vr(e);
		(0, Pr.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || Br(t) || !zr(t) || !!Nr(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Ke(function(e) {
		s.current || c(e);
	}), d = Ke(function(e) {
		e.keyCode === Lr && c(e);
	});
	(0, k.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = Ir(Vr(e)), r = Le(n, o, l, !0), a = Le(n, o, function(e) {
				e === t ? t = void 0 : u(e);
			}), s = Le(n, "keyup", function(e) {
				e === t ? t = void 0 : d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return Le(e, "mousemove", Rr);
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
function Ur(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function Wr(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function Gr(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, d = l === void 0 ? {} : l, f = Ur(d.modifiers);
	return u({}, d, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : d.strategy,
		modifiers: Wr(u({}, f, {
			eventListeners: { enabled: n },
			preventOverflow: u({}, f.preventOverflow, { options: s ? u({ padding: s }, f.preventOverflow?.options) : f.preventOverflow?.options }),
			offset: { options: u({ offset: a }, f.offset?.options) },
			arrow: u({}, f.arrow, {
				enabled: !!c,
				options: u({}, f.arrow?.options, { element: c })
			}),
			flip: u({ enabled: !!i }, f.flip)
		}))
	});
}
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownMenu.js
var Kr = function() {};
function qr(e) {
	e === void 0 && (e = {});
	var t = (0, k.useContext)(Nt), n = Pt(), r = n[0], i = n[1], a = (0, k.useRef)(!1), o = e, s = o.flip, c = o.offset, l = o.rootCloseEvent, d = o.fixed, f = d !== void 0 && d, p = o.popperConfig, m = p === void 0 ? {} : p, h = o.usePopper, g = h === void 0 ? !!t : h, _ = t?.show == null ? !!e.show : t.show, v = t?.alignEnd == null ? e.alignEnd : t.alignEnd;
	_ && !a.current && (a.current = !0);
	var y = function(e) {
		t?.toggle(!1, e);
	}, b = t || {}, x = b.drop, S = b.setMenu, C = b.menuElement, w = b.toggleElement, T = v ? "bottom-end" : "bottom-start";
	x === "up" ? T = v ? "top-end" : "top-start" : x === "right" ? T = v ? "right-end" : "right-start" : x === "left" && (T = v ? "left-end" : "left-start");
	var E = Mr(w, C, Gr({
		placement: T,
		enabled: !!(g && _),
		enableEvents: _,
		offset: c,
		flip: s,
		fixed: f,
		arrowElement: r,
		popperConfig: m
	})), D = u({
		ref: S || Kr,
		"aria-labelledby": w?.id
	}, E.attributes.popper, { style: E.styles.popper }), O = {
		show: _,
		alignEnd: v,
		hasShown: a.current,
		toggle: t?.toggle,
		popper: g ? E : null,
		arrowProps: g ? u({ ref: i }, E.attributes.arrow, { style: E.styles.arrow }) : {}
	};
	return Hr(C, y, {
		clickTrigger: l,
		disabled: !_
	}), [D, O];
}
var Jr = {
	children: G.default.func.isRequired,
	show: G.default.bool,
	alignEnd: G.default.bool,
	flip: G.default.bool,
	usePopper: G.default.oneOf([!0, !1]),
	popperConfig: G.default.object,
	rootCloseEvent: G.default.string
}, Yr = { usePopper: !0 };
function Xr(e) {
	var t = e.children, n = qr(S(e, ["children"])), r = n[0], i = n[1];
	return /*#__PURE__*/ k.createElement(k.Fragment, null, i.hasShown ? t(r, i) : null);
}
Xr.displayName = "ReactOverlaysDropdownMenu", Xr.propTypes = Jr, Xr.defaultProps = Yr;
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownToggle.js
var Zr = function() {};
function Qr() {
	var e = (0, k.useContext)(Nt) || {}, t = e.show, n = t !== void 0 && t, r = e.toggle, i = r === void 0 ? Zr : r, a = e.setToggle, o = (0, k.useCallback)(function(e) {
		i(!n, e);
	}, [n, i]);
	return [{
		ref: a || Zr,
		onClick: o,
		"aria-haspopup": !0,
		"aria-expanded": !!n
	}, {
		show: n,
		toggle: i
	}];
}
var $r = { children: G.default.func.isRequired };
function ei(e) {
	var t = e.children, n = Qr(), r = n[0], i = n[1];
	return /*#__PURE__*/ k.createElement(k.Fragment, null, t(r, i));
}
ei.displayName = "ReactOverlaysDropdownToggle", ei.propTypes = $r;
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Dropdown.js
var ti = {
	children: G.default.node,
	drop: G.default.oneOf([
		"up",
		"left",
		"right",
		"down"
	]),
	focusFirstItemOnShow: G.default.oneOf([
		!1,
		!0,
		"keyboard"
	]),
	itemSelector: G.default.string,
	alignEnd: G.default.bool,
	show: G.default.bool,
	defaultShow: G.default.bool,
	onToggle: G.default.func
};
function ni() {
	var e = At(), t = (0, k.useRef)(null);
	return [t, (0, k.useCallback)(function(n) {
		t.current = n, e();
	}, [e])];
}
function ri(e) {
	var t = e.drop, n = e.alignEnd, r = e.defaultShow, i = e.show, a = e.onToggle, o = e.itemSelector, s = o === void 0 ? "* > *" : o, c = e.focusFirstItemOnShow, l = e.children, u = re(i, r, a), d = u[0], f = u[1], p = ni(), m = p[0], h = p[1], g = m.current, _ = ni(), v = _[0], y = _[1], b = v.current, x = kt(d), S = (0, k.useRef)(null), C = (0, k.useRef)(!1), w = (0, k.useCallback)(function(e, t) {
		f(e, t);
	}, [f]), T = (0, k.useMemo)(function() {
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
	var E = Ke(function() {
		b && b.focus && b.focus();
	}), D = Ke(function() {
		var e = S.current, t = c;
		if (t ??= m.current && Et(m.current, "[role=menu]") ? "keyboard" : !1, !(t === !1 || t === "keyboard" && !/^key.+$/.test(e))) {
			var n = Ot(m.current, s)[0];
			n && n.focus && n.focus();
		}
	});
	(0, k.useEffect)(function() {
		d ? D() : C.current && (C.current = !1, E());
	}, [
		d,
		C,
		E,
		D
	]), (0, k.useEffect)(function() {
		S.current = null;
	});
	var O = function(e, t) {
		if (!m.current) return null;
		var n = Ot(m.current, s), r = n.indexOf(e) + t;
		return r = Math.max(0, Math.min(r, n.length)), n[r];
	};
	return Mt("keydown", function(e) {
		var t = e.key, n = e.target, r = m.current?.contains(n), i = v.current?.contains(n);
		if (!(/input|textarea/i.test(n.tagName) && (t === " " || t !== "Escape" && r)) && (r || i) && (m.current || t !== "Tab")) switch (S.current = e.type, t) {
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
				Fe(document, "keyup", function(t) {
					var n;
					(t.key === "Tab" && !t.target || !((n = m.current) != null && n.contains(t.target))) && f(!1, e);
				}, { once: !0 });
				break;
			case "Escape": e.preventDefault(), e.stopPropagation(), f(!1, e);
		}
	}), /*#__PURE__*/ k.createElement(Nt.Provider, { value: T }, l);
}
ri.displayName = "ReactOverlaysDropdown", ri.propTypes = ti, ri.Menu = Xr, ri.Toggle = ei;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavContext.js
var ii = /*#__PURE__*/ k.createContext(null);
ii.displayName = "NavContext";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/DropdownItem.js
var ai = [
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
], oi = {
	as: c,
	disabled: !1
}, si = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.eventKey, o = e.disabled, s = e.href, c = e.onClick, l = e.onSelect, d = e.active, f = e.as, p = S(e, ai), m = y(n, "dropdown-item"), h = (0, k.useContext)(se), g = ((0, k.useContext)(ii) || {}).activeKey, _ = ce(a, s), v = d == null && _ != null ? ce(g) === _ : d, b = Ke(function(e) {
		o || (c && c(e), h && h(_, e), l && l(_, e));
	});
	return /*#__PURE__*/ k.createElement(f, u({}, p, {
		ref: t,
		href: s,
		disabled: o,
		className: (0, V.default)(r, m, v && "active", o && "disabled"),
		onClick: b
	}), i);
});
si.displayName = "DropdownItem", si.defaultProps = oi;
// node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var ci = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function li(e, t) {
	let n = ci(e), r = ci(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function ui(e, t) {
	return (0, k.useMemo)(() => li(e, t), [e, t]);
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavbarContext.js
var di = /*#__PURE__*/ k.createContext(null);
di.displayName = "NavbarContext";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/useWrappedRefWithWarning.js
function fi(e, t) {
	return e;
}
// node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function pi(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function mi(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function hi() {
	var e = (0, k.useRef)(null), t = (0, k.useRef)(null), n = (0, k.useRef)(null), r = y(void 0, "popover"), i = y(void 0, "dropdown-menu");
	return [(0, k.useCallback)(function(n) {
		n && (pi(n, r) || pi(n, i)) && (t.current = mi(n), n.style.margin = "0", e.current = n);
	}, [r, i]), [
		(0, k.useMemo)(function() {
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
		(0, k.useMemo)(function() {
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
		(0, k.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var i = t.state;
					if (e.current && i.elements.arrow && pi(e.current, r)) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = mi(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = mi(i.elements.arrow);
						return i.elements.arrow.style.margin = "0", function() {
							i.elements.arrow && (i.elements.arrow.style.margin = "");
						};
					}
				}
			};
		}, [r])
	]];
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/DropdownMenu.js
var gi = [
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
], _i = G.default.oneOf(["left", "right"]);
G.default.oneOfType([
	_i,
	G.default.shape({ sm: _i }),
	G.default.shape({ md: _i }),
	G.default.shape({ lg: _i }),
	G.default.shape({ xl: _i })
]);
var vi = {
	align: "left",
	alignRight: !1,
	flip: !0
}, yi = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.align, a = e.alignRight, o = e.rootCloseEvent, s = e.flip, c = e.show, l = e.renderOnMount, d = e.as, f = d === void 0 ? "div" : d, p = e.popperConfig, m = S(e, gi), h = (0, k.useContext)(di), g = y(n, "dropdown-menu"), _ = hi(), v = _[0], b = _[1], x = [];
	if (i) {
		if (typeof i == "object") {
			var C = Object.keys(i);
			if (C.length) {
				var w = C[0], T = i[w];
				a = T === "left", x.push(g + "-" + w + "-" + T);
			}
		} else i === "right" && (a = !0);
	}
	var E = qr({
		flip: s,
		rootCloseEvent: o,
		show: c,
		alignEnd: a,
		usePopper: !h && x.length === 0,
		popperConfig: u({}, p, { modifiers: b.concat(p?.modifiers || []) })
	}), D = E[0], O = E[1], A = O.hasShown, j = O.popper, M = O.show, N = O.alignEnd, P = O.toggle;
	if (D.ref = ui(v, ui(fi(t, "DropdownMenu"), D.ref)), !A && !l) return null;
	typeof f != "string" && (D.show = M, D.close = function() {
		return P?.(!1);
	}, D.alignRight = N);
	var F = m.style;
	return j != null && j.placement && (F = u({}, m.style, D.style), m["x-placement"] = j.placement), /*#__PURE__*/ k.createElement(f, u({}, m, D, {
		style: F,
		className: V.default.apply(void 0, [
			r,
			g,
			M && "show",
			N && g + "-right"
		].concat(x))
	}));
});
yi.displayName = "DropdownMenu", yi.defaultProps = vi, (/* @__PURE__ */ t(((e, t) => {
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
var bi = [
	"bsPrefix",
	"split",
	"className",
	"childBsPrefix",
	"as"
], xi = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.split, i = e.className, a = e.childBsPrefix, o = e.as, s = o === void 0 ? h : o, c = S(e, bi), l = y(n, "dropdown-toggle");
	a !== void 0 && (c.bsPrefix = a);
	var d = Qr()[0];
	return d.ref = ui(d.ref, fi(t, "DropdownToggle")), /*#__PURE__*/ k.createElement(s, u({ className: (0, V.default)(i, l, r && l + "-split") }, d, c));
});
xi.displayName = "DropdownToggle";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Dropdown.js
var Si = [
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
], Ci = st("dropdown-header", { defaultProps: { role: "heading" } }), wi = st("dropdown-divider", { defaultProps: { role: "separator" } }), Ti = st("dropdown-item-text", { Component: "span" }), Ei = { navbar: !1 }, K = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = ie(e, { show: "onToggle" }), r = n.bsPrefix, i = n.drop, a = n.show, o = n.className, s = n.alignRight, c = n.onSelect, l = n.onToggle, d = n.focusFirstItemOnShow, f = n.as, p = f === void 0 ? "div" : f;
	n.navbar;
	var m = S(n, Si), h = (0, k.useContext)(se), g = y(r, "dropdown"), _ = Ke(function(e, t, n) {
		n === void 0 && (n = t.type), t.currentTarget === document && (n !== "keydown" || t.key === "Escape") && (n = "rootClose"), l && l(e, t, { source: n });
	}), v = Ke(function(e, t) {
		h && h(e, t), c && c(e, t), _(!1, t, "select");
	});
	return /*#__PURE__*/ k.createElement(se.Provider, { value: v }, /*#__PURE__*/ k.createElement(ri, {
		drop: i,
		show: a,
		alignEnd: s,
		onToggle: _,
		focusFirstItemOnShow: d,
		itemSelector: "." + g + "-item:not(.disabled):not(:disabled)"
	}, /*#__PURE__*/ k.createElement(p, u({}, m, {
		ref: t,
		className: (0, V.default)(o, a && "show", (!i || i === "down") && g, i === "up" && "dropup", i === "right" && "dropright", i === "left" && "dropleft")
	}))));
});
K.displayName = "Dropdown", K.defaultProps = Ei, K.Divider = wi, K.Header = Ci, K.Item = si, K.ItemText = Ti, K.Menu = yi, K.Toggle = xi;
// node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var Di = /* @__PURE__ */ t(((e, t) => {
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
	var n = r(Di());
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
var Oi = [
	"as",
	"className",
	"type",
	"tooltip"
], ki = {
	type: G.default.string,
	tooltip: G.default.bool,
	as: G.default.elementType
}, Ai = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, c = s !== void 0 && s, l = S(e, Oi);
	return /*#__PURE__*/ k.createElement(r, u({}, l, {
		ref: t,
		className: (0, V.default)(i, o + "-" + (c ? "tooltip" : "feedback"))
	}));
});
Ai.displayName = "Feedback", Ai.propTypes = ki;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var ji = /*#__PURE__*/ k.createContext({ controlId: void 0 }), Mi = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], Ni = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, c = e.isValid, l = c !== void 0 && c, d = e.isInvalid, f = d !== void 0 && d, p = e.isStatic, m = e.as, h = m === void 0 ? "input" : m, g = S(e, Mi), _ = (0, k.useContext)(ji), v = _.controlId, b = _.custom ? [i, "custom-control-input"] : [r, "form-check-input"], x = b[0], C = b[1];
	return r = y(x, C), /*#__PURE__*/ k.createElement(h, u({}, g, {
		ref: t,
		type: s,
		id: n || v,
		className: (0, V.default)(a, r, l && "is-valid", f && "is-invalid", p && "position-static")
	}));
});
Ni.displayName = "FormCheckInput";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Pi = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Fi = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = S(e, Pi), s = (0, k.useContext)(ji), c = s.controlId, l = s.custom ? [r, "custom-control-label"] : [n, "form-check-label"], d = l[0], f = l[1];
	return n = y(d, f), /*#__PURE__*/ k.createElement("label", u({}, o, {
		ref: t,
		htmlFor: a || c,
		className: (0, V.default)(i, n)
	}));
});
Fi.displayName = "FormCheckLabel";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheck.js
var Ii = [
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
], Li = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a !== void 0 && a, s = e.disabled, c = s !== void 0 && s, l = e.isValid, d = l !== void 0 && l, f = e.isInvalid, p = f !== void 0 && f, m = e.feedbackTooltip, h = m !== void 0 && m, g = e.feedback, _ = e.className, v = e.style, b = e.title, x = b === void 0 ? "" : b, C = e.type, w = C === void 0 ? "checkbox" : C, T = e.label, E = e.children, D = e.custom, O = e.as, A = O === void 0 ? "input" : O, j = S(e, Ii), M = w === "switch" || D, N = M ? [i, "custom-control"] : [r, "form-check"], P = N[0], F = N[1];
	r = y(P, F);
	var I = (0, k.useContext)(ji).controlId, L = (0, k.useMemo)(function() {
		return {
			controlId: n || I,
			custom: M
		};
	}, [
		I,
		M,
		n
	]), R = M || T != null && T !== !1 && !E, z = /*#__PURE__*/ k.createElement(Ni, u({}, j, {
		type: w === "switch" ? "checkbox" : w,
		ref: t,
		isValid: d,
		isInvalid: p,
		isStatic: !R,
		disabled: c,
		as: A
	}));
	return /*#__PURE__*/ k.createElement(ji.Provider, { value: L }, /*#__PURE__*/ k.createElement("div", {
		style: v,
		className: (0, V.default)(_, r, M && "custom-" + w, o && r + "-inline")
	}, E || /*#__PURE__*/ k.createElement(k.Fragment, null, z, R && /*#__PURE__*/ k.createElement(Fi, { title: x }, T), (d || p) && /*#__PURE__*/ k.createElement(Ai, {
		type: d ? "valid" : "invalid",
		tooltip: h
	}, g))));
});
Li.displayName = "FormCheck", Li.Input = Ni, Li.Label = Fi;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var Ri = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], zi = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, c = e.lang, l = e.as, d = l === void 0 ? "input" : l, f = S(e, Ri), p = (0, k.useContext)(ji), m = p.controlId, h = p.custom, g = "file", _ = h ? [i, "custom-file-input"] : [r, "form-control-file"], v = _[0], b = _[1];
	return r = y(v, b), /*#__PURE__*/ k.createElement(d, u({}, f, {
		ref: t,
		id: n || m,
		type: g,
		lang: c,
		className: (0, V.default)(a, r, o && "is-valid", s && "is-invalid")
	}));
});
zi.displayName = "FormFileInput";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Bi = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Vi = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = S(e, Bi), s = (0, k.useContext)(ji), c = s.controlId, l = s.custom ? [r, "custom-file-label"] : [n, "form-file-label"], d = l[0], f = l[1];
	return n = y(d, f), /*#__PURE__*/ k.createElement("label", u({}, o, {
		ref: t,
		htmlFor: a || c,
		className: (0, V.default)(i, n),
		"data-browse": o["data-browse"]
	}));
});
Vi.displayName = "FormFileLabel";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var Hi = [
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
], Ui = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a !== void 0 && a, s = e.isValid, c = s !== void 0 && s, l = e.isInvalid, d = l !== void 0 && l, f = e.feedbackTooltip, p = f !== void 0 && f, m = e.feedback, h = e.className, g = e.style, _ = e.label, v = e.children, b = e.custom, x = e.lang, C = e["data-browse"], w = e.as, T = w === void 0 ? "div" : w, E = e.inputAs, D = E === void 0 ? "input" : E, O = S(e, Hi), A = b ? [i, "custom"] : [r, "form-file"], j = A[0], M = A[1];
	r = y(j, M);
	var N = "file", P = (0, k.useContext)(ji).controlId, F = (0, k.useMemo)(function() {
		return {
			controlId: n || P,
			custom: b
		};
	}, [
		P,
		b,
		n
	]), I = _ != null && _ !== !1 && !v, L = /*#__PURE__*/ k.createElement(zi, u({}, O, {
		ref: t,
		isValid: c,
		isInvalid: d,
		disabled: o,
		as: D,
		lang: x
	}));
	return /*#__PURE__*/ k.createElement(ji.Provider, { value: F }, /*#__PURE__*/ k.createElement(T, {
		style: g,
		className: (0, V.default)(h, r, b && "custom-" + N)
	}, v || /*#__PURE__*/ k.createElement(k.Fragment, null, b ? /*#__PURE__*/ k.createElement(k.Fragment, null, L, I && /*#__PURE__*/ k.createElement(Vi, { "data-browse": C }, _)) : /*#__PURE__*/ k.createElement(k.Fragment, null, I && /*#__PURE__*/ k.createElement(Vi, null, _), L), (c || d) && /*#__PURE__*/ k.createElement(Ai, {
		type: c ? "valid" : "invalid",
		tooltip: p
	}, m))));
});
Ui.displayName = "FormFile", Ui.Input = zi, Ui.Label = Vi;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var Wi = [
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
], Gi = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, c = e.className, l = e.isValid, d = l !== void 0 && l, f = e.isInvalid, p = f !== void 0 && f, m = e.plaintext, h = e.readOnly, g = e.custom, _ = e.as, v = _ === void 0 ? "input" : _, b = S(e, Wi), x = (0, k.useContext)(ji).controlId, C = g ? [r, "custom"] : [n, "form-control"], w = C[0], T = C[1];
	n = y(w, T);
	var E;
	if (m) {
		var D;
		E = (D = {}, D[n + "-plaintext"] = !0, D);
	} else if (i === "file") {
		var O;
		E = (O = {}, O[n + "-file"] = !0, O);
	} else if (i === "range") {
		var A;
		E = (A = {}, A[n + "-range"] = !0, A);
	} else if (v === "select" && g) {
		var j;
		E = (j = {}, j[n + "-select"] = !0, j[n + "-select-" + a] = a, j);
	} else {
		var M;
		E = (M = {}, M[n] = !0, M[n + "-" + a] = a, M);
	}
	return /*#__PURE__*/ k.createElement(v, u({}, b, {
		type: i,
		size: o,
		ref: t,
		readOnly: h,
		id: s || x,
		className: (0, V.default)(c, E, d && "is-valid", p && "is-invalid")
	}));
});
Gi.displayName = "FormControl";
var Ki = Object.assign(Gi, { Feedback: Ai }), qi = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Ji = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, c = S(e, qi);
	n = y(n, "form-group");
	var l = (0, k.useMemo)(function() {
		return { controlId: a };
	}, [a]);
	return /*#__PURE__*/ k.createElement(ji.Provider, { value: l }, /*#__PURE__*/ k.createElement(s, u({}, c, {
		ref: t,
		className: (0, V.default)(r, n)
	}), i));
});
Ji.displayName = "FormGroup";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Yi = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], Xi = {
	column: !1,
	srOnly: !1
}, Zi = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, c = e.htmlFor, l = S(e, Yi), d = (0, k.useContext)(ji).controlId;
	i = y(i, "form-label");
	var f = "col-form-label";
	typeof a == "string" && (f = f + " " + f + "-" + a);
	var p = (0, V.default)(s, i, o && "sr-only", a && f);
	return c ||= d, a ? /*#__PURE__*/ k.createElement(wt, u({
		ref: t,
		as: "label",
		className: p,
		htmlFor: c
	}, l)) : /*#__PURE__*/ k.createElement(r, u({
		ref: t,
		className: p,
		htmlFor: c
	}, l));
});
Zi.displayName = "FormLabel", Zi.defaultProps = Xi;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var Qi = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], $i = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = S(e, Qi);
	return n = y(n, "form-text"), /*#__PURE__*/ k.createElement(a, u({}, s, {
		ref: t,
		className: (0, V.default)(r, n, o && "text-muted")
	}));
});
$i.displayName = "FormText";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var ea = /*#__PURE__*/ k.forwardRef(function(e, t) {
	return /*#__PURE__*/ k.createElement(Li, u({}, e, {
		ref: t,
		type: "switch"
	}));
});
ea.displayName = "Switch", ea.Input = Li.Input, ea.Label = Li.Label;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var ta = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], na = st("form-row"), ra = { inline: !1 }, ia = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, c = S(e, ta);
	return n = y(n, "form"), /*#__PURE__*/ k.createElement(s, u({}, c, {
		ref: t,
		className: (0, V.default)(i, a && "was-validated", r && n + "-inline")
	}));
});
ia.displayName = "Form", ia.defaultProps = ra, ia.Row = na, ia.Group = Ji, ia.Control = Ki, ia.Check = Li, ia.File = Ui, ia.Switch = ea, ia.Label = Zi, ia.Text = $i;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContext.js
var aa = /*#__PURE__*/ k.createContext(null), oa = [
	"as",
	"onSelect",
	"activeKey",
	"role",
	"onKeyDown"
], sa = function() {}, ca = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "ul" : n, i = e.onSelect, a = e.activeKey, o = e.role, s = e.onKeyDown, c = S(e, oa), l = At(), d = (0, k.useRef)(!1), f = (0, k.useContext)(se), p = (0, k.useContext)(aa), m, h;
	p && (o ||= "tablist", a = p.activeKey, m = p.getControlledId, h = p.getControllerId);
	var g = (0, k.useRef)(null), _ = function(e) {
		var t = g.current;
		if (!t) return null;
		var n = Ot(t, "[data-rb-event-key]:not(.disabled)"), r = t.querySelector(".active");
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
		t && (e.preventDefault(), v(t.dataset.rbEventKey, e), d.current = !0, l());
	};
	(0, k.useEffect)(function() {
		if (g.current && d.current) {
			var e = g.current.querySelector("[data-rb-event-key].active");
			e && e.focus();
		}
		d.current = !1;
	});
	var b = ui(t, g);
	return /*#__PURE__*/ k.createElement(se.Provider, { value: v }, /*#__PURE__*/ k.createElement(ii.Provider, { value: {
		role: o,
		activeKey: ce(a),
		getControlledId: m || sa,
		getControllerId: h || sa
	} }, /*#__PURE__*/ k.createElement(r, u({}, c, {
		onKeyDown: y,
		ref: b,
		role: o
	}))));
}), la = [
	"active",
	"className",
	"eventKey",
	"onSelect",
	"onClick",
	"as"
], ua = { disabled: !1 }, da = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.active, r = e.className, i = e.eventKey, a = e.onSelect, o = e.onClick, s = e.as, c = S(e, la), l = ce(i, c.href), d = (0, k.useContext)(se), f = (0, k.useContext)(ii), p = n;
	if (f) {
		!c.role && f.role === "tablist" && (c.role = "tab");
		var m = f.getControllerId(l), h = f.getControlledId(l);
		c["data-rb-event-key"] = l, c.id = m || c.id, c["aria-controls"] = h || c["aria-controls"], p = n == null && l != null ? f.activeKey === l : n;
	}
	c.role === "tab" && (c.disabled && (c.tabIndex = -1, c["aria-disabled"] = !0), c["aria-selected"] = p);
	var g = Ke(function(e) {
		o && o(e), l != null && (a && a(l, e), d && d(l, e));
	});
	return /*#__PURE__*/ k.createElement(s, u({}, c, {
		ref: t,
		onClick: g,
		className: (0, V.default)(r, p && "active")
	}));
});
da.defaultProps = ua;
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/useWaitForDOMRef.js
var fa = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? le().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function pa(e, t) {
	var n = (0, k.useState)(function() {
		return fa(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = fa(e);
		a && i(a);
	}
	return (0, k.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, k.useEffect)(function() {
		var t = fa(e);
		t !== r && i(t);
	}, [e, r]), r;
}
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavItem.js
var ma = [
	"bsPrefix",
	"className",
	"children",
	"as"
], ha = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.as, o = a === void 0 ? "div" : a, s = S(e, ma);
	return n = y(n, "nav-item"), /*#__PURE__*/ k.createElement(o, u({}, s, {
		ref: t,
		className: (0, V.default)(r, n)
	}), i);
});
ha.displayName = "NavItem";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavLink.js
var ga = [
	"bsPrefix",
	"disabled",
	"className",
	"href",
	"eventKey",
	"onSelect",
	"as"
], _a = {
	disabled: !1,
	as: c
}, va = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.disabled, i = e.className, a = e.href, o = e.eventKey, s = e.onSelect, c = e.as, l = S(e, ga);
	return n = y(n, "nav-link"), /*#__PURE__*/ k.createElement(da, u({}, l, {
		href: a,
		ref: t,
		eventKey: o,
		as: c,
		disabled: r,
		onSelect: s,
		className: (0, V.default)(i, n, r && "disabled")
	}));
});
va.displayName = "NavLink", va.defaultProps = _a;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Nav.js
var ya = [
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
], ba = {
	justify: !1,
	fill: !1
}, xa = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n, r = ie(e, { activeKey: "onSelect" }), i = r.as, a = i === void 0 ? "div" : i, o = r.bsPrefix, s = r.variant, c = r.fill, l = r.justify, d = r.navbar, f = r.navbarScroll, p = r.className, m = r.children, h = r.activeKey, g = S(r, ya), _ = y(o, "nav"), v, b, x = !1, C = (0, k.useContext)(di), w = (0, k.useContext)(mt);
	return C ? (v = C.bsPrefix, x = d ?? !0) : w && (b = w.cardHeaderBsPrefix), /*#__PURE__*/ k.createElement(ca, u({
		as: a,
		ref: t,
		activeKey: h,
		className: (0, V.default)(p, (n = {}, n[_] = !x, n[v + "-nav"] = x, n[v + "-nav-scroll"] = x && f, n[b + "-" + s] = !!b, n[_ + "-" + s] = !!s, n[_ + "-fill"] = c, n[_ + "-justified"] = l, n))
	}, g), m);
});
xa.displayName = "Nav", xa.defaultProps = ba, xa.Item = ha, xa.Link = va;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavDropdown.js
var Sa = [
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
], Ca = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.id, r = e.title, i = e.children, a = e.bsPrefix, o = e.className, s = e.rootCloseEvent, c = e.menuRole, l = e.disabled, d = e.active, f = e.renderMenuOnMount, p = S(e, Sa), m = y(void 0, "nav-item");
	return /*#__PURE__*/ k.createElement(K, u({ ref: t }, p, { className: (0, V.default)(o, m) }), /*#__PURE__*/ k.createElement(K.Toggle, {
		id: n,
		eventKey: null,
		active: d,
		disabled: l,
		childBsPrefix: a,
		as: va
	}, r), /*#__PURE__*/ k.createElement(K.Menu, {
		role: c,
		renderOnMount: f,
		rootCloseEvent: s
	}, i));
});
Ca.displayName = "NavDropdown", Ca.Item = K.Item, Ca.ItemText = K.ItemText, Ca.Divider = K.Divider, Ca.Header = K.Header;
// node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var wa = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, c = s === void 0 ? {} : s, l = e.transition, d = Pt(), f = d[0], p = d[1], m = Pt(), h = m[0], g = m[1], _ = ui(p, t), v = pa(e.container), y = pa(e.target), b = (0, k.useState)(!e.show), x = b[0], C = b[1], w = Mr(y, f, Gr({
		placement: i,
		enableEvents: !!e.show,
		containerPadding: o || 5,
		flip: n,
		offset: r,
		arrowElement: h,
		popperConfig: c
	})), T = w.styles, E = w.attributes, D = S(w, ["styles", "attributes"]);
	e.show ? x && C(!1) : !e.transition && !x && C(!0);
	var O = function() {
		C(!0), e.onExited && e.onExited.apply(e, arguments);
	}, A = e.show || l && !x;
	if (Hr(f, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !A) return null;
	var j = e.children(u({}, D, {
		show: !!e.show,
		props: u({}, E.popper, {
			style: T.popper,
			ref: _
		}),
		arrowProps: u({}, E.arrow, {
			style: T.arrow,
			ref: g
		})
	}));
	if (l) {
		var M = e.onExit, N = e.onExiting, P = e.onEnter, F = e.onEntering, I = e.onEntered;
		j = /*#__PURE__*/ k.createElement(l, {
			in: e.show,
			appear: !0,
			onExit: M,
			onExiting: N,
			onExited: O,
			onEnter: P,
			onEntering: F,
			onEntered: I
		}, j);
	}
	return v ? /*#__PURE__*/ z.createPortal(j, v) : null;
});
wa.displayName = "Overlay", wa.propTypes = {
	show: G.default.bool,
	placement: G.default.oneOf(qt),
	target: G.default.any,
	container: G.default.any,
	flip: G.default.bool,
	children: G.default.func.isRequired,
	containerPadding: G.default.number,
	popperConfig: G.default.object,
	rootClose: G.default.bool,
	rootCloseEvent: G.default.oneOf(["click", "mousedown"]),
	rootCloseDisabled: G.default.bool,
	onHide: function(e) {
		var t = [...arguments].slice(1);
		if (e.rootClose) {
			var n;
			return (n = G.default.func).isRequired.apply(n, [e].concat(t));
		}
		return G.default.func.apply(G.default, [e].concat(t));
	},
	transition: G.default.elementType,
	onEnter: G.default.func,
	onEntering: G.default.func,
	onEntered: G.default.func,
	onExit: G.default.func,
	onExiting: G.default.func,
	onExited: G.default.func
};
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var Ta = [
	"children",
	"transition",
	"popperConfig"
], Ea = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], Da = {
	transition: Ze,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function Oa(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(Fr(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(Fr(e));
	};
}
function ka(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = S(e, Ta), o = (0, k.useRef)({}), s = hi(), c = s[0], l = s[1], d = n === !0 ? Ze : n || null;
	return /*#__PURE__*/ k.createElement(wa, u({}, a, {
		ref: c,
		popperConfig: u({}, i, { modifiers: l.concat(i.modifiers || []) }),
		transition: d
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, s = e.update;
		e.forceUpdate;
		var c = e.placement, l = e.state, d = S(e, Ea);
		Oa(r, i);
		var f = Object.assign(o.current, {
			state: l,
			scheduleUpdate: s,
			placement: c,
			outOfBoundaries: l?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(u({}, d, r, {
			placement: c,
			show: a
		}, !n && a && { className: "show" }, {
			popper: f,
			arrowProps: i
		})) : /*#__PURE__*/ k.cloneElement(t, u({}, d, r, {
			placement: c,
			arrowProps: i,
			popper: f,
			className: (0, V.default)(t.props.className, !n && a && "show"),
			style: u({}, t.props.style, r.style)
		}));
	});
}
ka.defaultProps = Da;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var Aa = [
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
], ja = /*#__PURE__*/ function(e) {
	oe(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(k.Component);
function Ma(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function Na(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	a && a === i || Nr(i, a) || e.apply(void 0, t);
}
var Pa = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function Fa(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, c = s !== void 0 && s, l = e.onToggle, d = e.delay, f = e.placement, p = e.flip, m = p === void 0 ? f && f.indexOf("auto") !== -1 : p, h = S(e, Aa), g = (0, k.useRef)(null), _ = bt(), v = (0, k.useRef)(""), y = re(o, c, l), b = y[0], x = y[1], C = Ma(d), w = typeof r == "function" ? {} : k.Children.only(r).props, T = w.onFocus, E = w.onBlur, D = w.onClick, O = (0, k.useCallback)(function() {
		return Fr(g.current);
	}, []), A = (0, k.useCallback)(function() {
		_.clear(), v.current = "show", C.show ? _.set(function() {
			v.current === "show" && x(!0);
		}, C.show) : x(!0);
	}, [
		C.show,
		x,
		_
	]), j = (0, k.useCallback)(function() {
		_.clear(), v.current = "hide", C.hide ? _.set(function() {
			v.current === "hide" && x(!1);
		}, C.hide) : x(!1);
	}, [
		C.hide,
		x,
		_
	]), M = (0, k.useCallback)(function() {
		A();
		var e = [...arguments];
		T?.apply(void 0, e);
	}, [A, T]), N = (0, k.useCallback)(function() {
		j();
		var e = [...arguments];
		E?.apply(void 0, e);
	}, [j, E]), P = (0, k.useCallback)(function() {
		x(!b), D && D.apply(void 0, arguments);
	}, [
		D,
		x,
		b
	]), F = (0, k.useCallback)(function() {
		Na(A, [...arguments], "fromElement");
	}, [A]), I = (0, k.useCallback)(function() {
		Na(j, [...arguments], "toElement");
	}, [j]), L = t == null ? [] : [].concat(t), R = {};
	return L.indexOf("click") !== -1 && (R.onClick = P), L.indexOf("focus") !== -1 && (R.onFocus = M, R.onBlur = N), L.indexOf("hover") !== -1 && (R.onMouseOver = F, R.onMouseOut = I), /*#__PURE__*/ k.createElement(k.Fragment, null, typeof r == "function" ? r(u({}, R, { ref: g })) : /*#__PURE__*/ k.createElement(ja, { ref: g }, /*#__PURE__*/ (0, k.cloneElement)(r, R)), /*#__PURE__*/ k.createElement(ka, u({}, h, {
		show: b,
		onHide: j,
		flip: m,
		placement: f,
		popperConfig: a,
		target: O
	}), n));
}
Fa.defaultProps = Pa;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ProgressBar.js
var Ia = [
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
], La = ["isChild"], Ra = [
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
], za = 1e3, Ba = {
	min: 0,
	max: 100,
	animated: !1,
	isChild: !1,
	srOnly: !1,
	striped: !1
};
function Va(e, t, n) {
	var r = (e - t) / (n - t) * 100;
	return Math.round(r * za) / za;
}
function Ha(e, t) {
	var n, r = e.min, i = e.now, a = e.max, o = e.label, s = e.srOnly, c = e.striped, l = e.animated, d = e.className, f = e.style, p = e.variant, m = e.bsPrefix, h = S(e, Ia);
	return /*#__PURE__*/ k.createElement("div", u({ ref: t }, h, {
		role: "progressbar",
		className: (0, V.default)(d, m + "-bar", (n = {}, n["bg-" + p] = p, n[m + "-bar-animated"] = l, n[m + "-bar-striped"] = l || c, n)),
		style: u({ width: Va(i, r, a) + "%" }, f),
		"aria-valuenow": i,
		"aria-valuemin": r,
		"aria-valuemax": a
	}), s ? /*#__PURE__*/ k.createElement("span", { className: "sr-only" }, o) : o);
}
var Ua = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.isChild, r = S(e, La);
	if (r.bsPrefix = y(r.bsPrefix, "progress"), n) return Ha(r, t);
	var i = r.min, a = r.now, o = r.max, s = r.label, c = r.srOnly, l = r.striped, d = r.animated, f = r.bsPrefix, p = r.variant, m = r.className, h = r.children, g = S(r, Ra);
	return /*#__PURE__*/ k.createElement("div", u({ ref: t }, g, { className: (0, V.default)(m, f) }), h ? xt(h, function(e) {
		return /*#__PURE__*/ (0, k.cloneElement)(e, { isChild: !0 });
	}) : Ha({
		min: i,
		now: a,
		max: o,
		label: s,
		srOnly: c,
		striped: l,
		animated: d,
		bsPrefix: f,
		variant: p
	}, t));
});
Ua.displayName = "ProgressBar", Ua.defaultProps = Ba;
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var Wa = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], Ga = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, c = s === void 0 ? "div" : s, l = e.className, d = S(e, Wa);
	n = y(n, "spinner");
	var f = n + "-" + i;
	return /*#__PURE__*/ k.createElement(c, u({ ref: t }, d, { className: (0, V.default)(l, f, a && f + "-" + a, r && "text-" + r) }), o);
});
Ga.displayName = "Spinner";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/TabContainer.js
var Ka = function(e) {
	var t = ie(e, { activeKey: "onSelect" }), n = t.id, r = t.generateChildId, i = t.onSelect, a = t.activeKey, o = t.transition, s = t.mountOnEnter, c = t.unmountOnExit, l = t.children, u = (0, k.useMemo)(function() {
		return r || function(e, t) {
			return n ? n + "-" + t + "-" + e : null;
		};
	}, [n, r]), d = (0, k.useMemo)(function() {
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
	return /*#__PURE__*/ k.createElement(aa.Provider, { value: d }, /*#__PURE__*/ k.createElement(se.Provider, { value: i || null }, l));
}, qa = [
	"bsPrefix",
	"as",
	"className"
], Ja = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.as, i = r === void 0 ? "div" : r, a = e.className, o = S(e, qa), s = y(n, "tab-content");
	return /*#__PURE__*/ k.createElement(i, u({ ref: t }, o, { className: (0, V.default)(a, s) }));
}), Ya = [
	"activeKey",
	"getControlledId",
	"getControllerId"
], Xa = [
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
function Za(e) {
	var t = (0, k.useContext)(aa);
	if (!t) return e;
	var n = t.activeKey, r = t.getControlledId, i = t.getControllerId, a = S(t, Ya), o = e.transition !== !1 && a.transition !== !1, s = ce(e.eventKey);
	return u({}, e, {
		active: e.active == null && s != null ? ce(n) === s : e.active,
		id: r(e.eventKey),
		"aria-labelledby": i(e.eventKey),
		transition: o && (e.transition || a.transition || Ze),
		mountOnEnter: e.mountOnEnter == null ? a.mountOnEnter : e.mountOnEnter,
		unmountOnExit: e.unmountOnExit == null ? a.unmountOnExit : e.unmountOnExit
	});
}
var Qa = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = Za(e), r = n.bsPrefix, i = n.className, a = n.active, o = n.onEnter, s = n.onEntering, c = n.onEntered, l = n.onExit, d = n.onExiting, f = n.onExited, p = n.mountOnEnter, m = n.unmountOnExit, h = n.transition, g = n.as, _ = g === void 0 ? "div" : g;
	n.eventKey;
	var v = S(n, Xa), b = y(r, "tab-pane");
	if (!a && !h && m) return null;
	var x = /*#__PURE__*/ k.createElement(_, u({}, v, {
		ref: t,
		role: "tabpanel",
		"aria-hidden": !a,
		className: (0, V.default)(i, b, { active: a })
	}));
	return h && (x = /*#__PURE__*/ k.createElement(h, {
		in: a,
		onEnter: o,
		onEntering: s,
		onEntered: c,
		onExit: l,
		onExiting: d,
		onExited: f,
		mountOnEnter: p,
		unmountOnExit: m
	}, x)), /*#__PURE__*/ k.createElement(aa.Provider, { value: null }, /*#__PURE__*/ k.createElement(se.Provider, { value: null }, x));
});
Qa.displayName = "TabPane";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Tooltip.js
var $a = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], eo = { placement: "right" }, to = /*#__PURE__*/ k.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
	e.popper, e.show;
	var c = S(e, $a);
	n = y(n, "tooltip");
	var l = (r?.split("-") || [])[0];
	return /*#__PURE__*/ k.createElement("div", u({
		ref: t,
		style: a,
		role: "tooltip",
		"x-placement": l,
		className: (0, V.default)(i, n, "bs-tooltip-" + l)
	}, c), /*#__PURE__*/ k.createElement("div", u({ className: "arrow" }, s)), /*#__PURE__*/ k.createElement("div", { className: n + "-inner" }, o));
});
to.defaultProps = eo, to.displayName = "Tooltip";
// node_modules/.pnpm/css-mediaquery@0.1.2/node_modules/css-mediaquery/index.js
var no = /* @__PURE__ */ t(((e) => {
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
})), ro = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	var n = no().match, r = typeof window < "u" ? window.matchMedia : null;
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
})))()), io = /[A-Z]/g, ao = /^ms-/, oo = {};
function so(e) {
	return "-" + e.toLowerCase();
}
function co(e) {
	if (oo.hasOwnProperty(e)) return oo[e];
	var t = e.replace(io, so);
	return oo[e] = ao.test(t) ? "-" + t : t;
}
// node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
function lo(e, t) {
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
var q = G.default.oneOfType([G.default.string, G.default.number]), uo = {
	all: G.default.bool,
	grid: G.default.bool,
	aural: G.default.bool,
	braille: G.default.bool,
	handheld: G.default.bool,
	print: G.default.bool,
	projection: G.default.bool,
	screen: G.default.bool,
	tty: G.default.bool,
	tv: G.default.bool,
	embossed: G.default.bool
}, fo = {
	orientation: G.default.oneOf(["portrait", "landscape"]),
	scan: G.default.oneOf(["progressive", "interlace"]),
	aspectRatio: G.default.string,
	deviceAspectRatio: G.default.string,
	height: q,
	deviceHeight: q,
	width: q,
	deviceWidth: q,
	color: G.default.bool,
	colorIndex: G.default.bool,
	monochrome: G.default.bool,
	resolution: q,
	type: Object.keys(uo)
}, { type: po, ...mo } = fo, ho = {
	minAspectRatio: G.default.string,
	maxAspectRatio: G.default.string,
	minDeviceAspectRatio: G.default.string,
	maxDeviceAspectRatio: G.default.string,
	minHeight: q,
	maxHeight: q,
	minDeviceHeight: q,
	maxDeviceHeight: q,
	minWidth: q,
	maxWidth: q,
	minDeviceWidth: q,
	maxDeviceWidth: q,
	minColor: G.default.number,
	maxColor: G.default.number,
	minColorIndex: G.default.number,
	maxColorIndex: G.default.number,
	minMonochrome: G.default.number,
	maxMonochrome: G.default.number,
	minResolution: q,
	maxResolution: q,
	...mo
}, go = {
	all: {
		...uo,
		...ho
	},
	types: uo,
	matchers: fo,
	features: ho
}, _o = (e) => `not ${e}`, vo = (e, t) => {
	let n = co(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? _o(n) : `(${n}: ${t})`;
}, yo = (e) => e.join(" and "), bo = (e) => {
	let t = [];
	return Object.keys(go.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(vo(n, r));
	}), yo(t);
}, xo = (0, k.createContext)(void 0), So = (e) => e.query || bo(e), Co = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[co(n)] = e[n], t), {});
}, wo = () => {
	let e = (0, k.useRef)(!1);
	return (0, k.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, To = (e) => {
	let t = (0, k.useContext)(xo), n = () => Co(e) || Co(t), [r, i] = (0, k.useState)(n);
	return (0, k.useEffect)(() => {
		let e = n();
		lo(r, e) || i(e);
	}, [e, t]), r;
}, Eo = (e) => {
	let t = () => So(e), [n, r] = (0, k.useState)(t);
	return (0, k.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, Do = (e, t) => {
	let n = () => (0, ro.default)(e, t || {}, !!t), [r, i] = (0, k.useState)(n), a = wo();
	return (0, k.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, Oo = (e) => {
	let [t, n] = (0, k.useState)(e.matches);
	return (0, k.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, ko = (e, t, n) => {
	let r = To(t), i = Eo(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = Do(i, r), o = Oo(a), s = wo();
	return (0, k.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, k.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, { sm: Ao, md: jo, lg: Mo, xl: No, xxl: Po } = {
	xs: "0",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px"
}, Fo = {
	extraSmall: { maxWidth: parseFloat(Ao) || 575.98 },
	small: {
		minWidth: parseFloat(Ao) || 576,
		maxWidth: parseFloat(jo) || 767.98
	},
	medium: {
		minWidth: parseFloat(jo) || 768,
		maxWidth: parseFloat(Mo) || 991.98
	},
	large: {
		minWidth: parseFloat(Mo) || 992,
		maxWidth: parseFloat(No) || 1199.98
	},
	extraLarge: {
		minWidth: parseFloat(No) || 1200,
		maxWidth: parseFloat(Po) || 1399.98
	},
	extraExtraLarge: { minWidth: parseFloat(Po) || 1400 }
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
var Io = /*#__PURE__*/ (0, k.forwardRef)(({ children: e, icon: t, actions: n, dismissible: r = !1, onClose: i = () => {}, closeLabel: a, stacked: o = !1, show: s = !0, ...c }, l) => {
	let [u, d] = (0, k.useState)(o), f = ko({ maxWidth: Fo.extraSmall.maxWidth });
	(0, k.useEffect)(() => {
		d(f ? !0 : o);
	}, [f, o]);
	let p = (0, k.useCallback)((e) => {
		let t = {
			size: "sm",
			key: e.props.children
		};
		return /*#__PURE__*/ (0, k.cloneElement)(e, t);
	}, []);
	return /*#__PURE__*/ k.createElement(pt, {
		...c,
		className: (0, V.default)("alert-content", c.className),
		show: s,
		ref: l
	}, t && /*#__PURE__*/ k.createElement(v, {
		src: t,
		className: "alert-icon"
	}), /*#__PURE__*/ k.createElement("div", { className: (0, V.default)({
		"pgn__alert-message-wrapper": !u,
		"pgn__alert-message-wrapper-stacked": u
	}) }, /*#__PURE__*/ k.createElement("div", { className: "alert-message-content" }, e), (r || n && n.length > 0) && /*#__PURE__*/ k.createElement(H, { className: "pgn__alert-actions" }, /*#__PURE__*/ k.createElement(H.Spacer, null), r && /*#__PURE__*/ k.createElement(C, {
		size: "sm",
		variant: "tertiary",
		onClick: i
	}, a || /*#__PURE__*/ k.createElement(L, {
		id: "pgn.Alert.closeLabel",
		defaultMessage: "Dismiss",
		description: "Label of a close button on Alert component"
	})), n && n.map(p))));
}), Lo = nt("h4");
Lo.displayName = "DivStyledAsH4";
function Ro({ as: e = Lo, bsPrefix: t = "alert-heading", ...n }) {
	return /*#__PURE__*/ k.createElement(pt.Heading, {
		as: e,
		bsPrefix: t,
		...n
	});
}
function zo({ as: e = "a", bsPrefix: t = "alert-link", ...n }) {
	return /*#__PURE__*/ k.createElement(pt.Link, {
		as: e,
		bsPrefix: t,
		...n
	});
}
Io.Heading = Ro, Io.Link = zo;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Annotation/index.js
var Bo = /*#__PURE__*/ k.forwardRef(({ className: e, variant: t = "success", children: n, arrowPlacement: r = "bottom", ...i }, a) => /*#__PURE__*/ k.createElement("span", {
	className: (0, V.default)(e, "pgn__annotation", `pgn__annotation-${t}-${r}`),
	ref: a,
	...i
}, n)), Vo = (e) => /*#__PURE__*/ k.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), Ho = (e) => /*#__PURE__*/ k.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), Uo = (e) => /*#__PURE__*/ k.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), Wo = (e) => /*#__PURE__*/ k.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), Go = (e) => /*#__PURE__*/ k.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), Ko = (e) => /*#__PURE__*/ k.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	d: "M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",
	fill: "currentColor"
})), qo = (e) => /*#__PURE__*/ k.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	d: "m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06ZM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29Zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z",
	fill: "currentColor"
})), Jo = (e) => /*#__PURE__*/ k.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	d: "M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z",
	fill: "currentColor"
})), Yo = (e) => /*#__PURE__*/ k.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
	fill: "currentColor"
})), Xo = (e) => /*#__PURE__*/ k.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), Zo = (e) => /*#__PURE__*/ k.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), Qo = (e) => /*#__PURE__*/ k.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), $o = (e) => /*#__PURE__*/ k.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ k.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
}));
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Overlay/index.js
function es({ defaultShow: e = !1, popperConfig: t = {}, trigger: n = ["hover", "focus"], ...r }) {
	return /*#__PURE__*/ k.createElement(Fa, {
		defaultShow: e,
		popperConfig: t,
		trigger: n,
		...r
	}, r.children);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Tooltip/index.js
var ts = /*#__PURE__*/ k.forwardRef(({ children: e, variant: t, placement: n = "right", bsPrefix: r = "tooltip", ...i }, a) => /*#__PURE__*/ k.createElement(to, {
	...i,
	placement: n,
	bsPrefix: r,
	className: (0, V.default)({ "tooltip-light": t === "light" }, i.className),
	ref: a
}, e)), ns = /*#__PURE__*/ k.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = v, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /*#__PURE__*/ k.createElement("button", {
		"aria-label": t,
		className: (0, V.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /*#__PURE__*/ k.createElement("span", { className: "btn-icon__icon-container" }, g && /*#__PURE__*/ k.createElement(g, {
		className: (0, V.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function rs({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /*#__PURE__*/ k.createElement(es, {
		placement: e,
		overlay: /*#__PURE__*/ k.createElement(ts, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /*#__PURE__*/ k.createElement(ns, { ...n }));
}
ns.IconButtonWithTooltip = rs;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function is(e) {
	return typeof e == "string" || e instanceof String;
}
function as(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function os(e, t) {
	return Array.isArray(t) ? os(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var J = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function ss(e) {
	switch (e) {
		case J.LEFT: return J.FORCE_LEFT;
		case J.RIGHT: return J.FORCE_RIGHT;
		default: return e;
	}
}
function cs(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function ls(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!ls(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!ls(e[s[i]], t[s[i]])) return !1;
		return !0;
	}
	return t && e && typeof t == "function" && typeof e == "function" ? t.toString() === e.toString() : !1;
}
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var us = class {
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
		return !this.removedCount || this.insertedCount ? J.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? J.RIGHT : J.LEFT;
	}
};
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function Y(e, t) {
	return new Y.InputMask(e, t);
}
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function ds(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? Y.MaskedRegExp : is(e) ? Y.MaskedPattern : e === Date ? Y.MaskedDate : e === Number ? Y.MaskedNumber : Array.isArray(e) || e === Array ? Y.MaskedDynamic : Y.Masked && e.prototype instanceof Y.Masked ? e : Y.Masked && e instanceof Y.Masked ? e.constructor : e instanceof Function ? Y.MaskedFunction : (console.warn("Mask not found for mask", e), Y.Masked);
}
function fs(e) {
	if (!e) throw Error("Options in not defined");
	if (Y.Masked) {
		if (e.prototype instanceof Y.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof Y.Masked ? { mask: e } : as(e) && e.mask instanceof Y.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...os(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return as(e) ? { ...e } : { mask: e };
}
function ps(e) {
	if (Y.Masked && e instanceof Y.Masked) return e;
	let t = fs(e), n = ds(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
Y.createMask = ps;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var ms = class {
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
Y.MaskElement = ms;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var hs = 90, gs = 89, _s = class extends ms {
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
		if (this._handlers.redo && (e.keyCode === hs && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === gs && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === hs && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
Y.HTMLMaskElement = _s;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var vs = class extends _s {
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
Y.HTMLMaskElement = _s;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var ys = class extends _s {
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
Y.HTMLContenteditableMaskElement = ys;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var bs = class e {
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
bs.MAX_LENGTH = 100, Y.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof ms ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new ys(e) : new vs(e), this.masked = ps(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new bs(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof Y.Masked) && this.masked.constructor === ds(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof Y.Masked ? e : ps({ mask: e });
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
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, J.LEFT));
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
		let t = new us({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : J.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== J.NONE && (a = this.masked.nearestInputPos(a, J.NONE)), this.updateControl(a), delete this._inputEvent;
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
var X = class e {
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
Y.ChangeDetails = X;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var xs = class {
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
}, Ss = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new xs(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return is(e) && (e = new xs(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new X({
			inserted: e,
			rawInserted: e
		})) : new X();
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
			a || (i = new X(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new X();
	}
	_appendEager() {
		return new X();
	}
	append(e, t, n) {
		if (!is(e)) throw Error("value should be string");
		let r = is(n) ? new xs(String(n)) : n;
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new X();
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
		return t === void 0 && (t = {}), X.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), X.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = J.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = ss(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new X();
		if (r !== J.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? J.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== J.NONE && c === this.rawInputValue) {
			if (r === J.FORCE_LEFT) {
				let e;
				for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new X({ tailShift: -1 })).aggregate(this.remove(e - 1));
			} else r === J.FORCE_RIGHT && o.unshift();
		}
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !ls(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new X();
	}
};
Ss.DEFAULTS = { skipInvalid: !0 }, Ss.EMPTY_VALUES = [
	void 0,
	null,
	""
], Y.Masked = Ss;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var Cs = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = is(t) ? new xs(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof xs) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof Y.MaskedPattern)) return new xs(this.toString()).appendTo(t);
		let n = new X();
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
			let n = "chunks" in t ? new e() : new xs();
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
}, ws = class {
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
			if (!this.block.isFixed && this.block.value && (this.offset = this.block.nearestInputPos(this.offset, J.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, J.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, J.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!this.block.isFixed && this.block.value && (this.offset = this.block.nearestInputPos(this.offset, J.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, J.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, J.NONE), !0;
		});
	}
}, Ts = class {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new X();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = J.NONE);
		let n = this._value.length;
		switch (t) {
			case J.LEFT:
			case J.FORCE_LEFT: return 0;
			case J.NONE:
			case J.RIGHT:
			case J.FORCE_RIGHT:
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
		if (t === void 0 && (t = {}), this.isFilled) return new X();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new X({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new X();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new xs("");
	}
	appendTail(e) {
		return is(e) && (e = new xs(String(e))), e.appendTo(this);
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
}, Es = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = ps(s), Object.assign(this, {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new X();
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
		if (t === void 0 && (t = {}), this.isFilled) return new X();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new X(), this.masked.state = n), r.inserted || this.isOptional || this.lazy || t.input || (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new X() : (this.isFilled = !0, new X({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new X();
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
		t === void 0 && (t = J.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case J.LEFT:
			case J.FORCE_LEFT: return this.isComplete ? r : 0;
			case J.RIGHT:
			case J.FORCE_RIGHT: return this.isComplete ? r : n;
			case J.NONE:
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
		return new X();
	}
};
Es.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, Y.MaskedRegExp = class extends Ss {
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let t = e.mask;
		t && (e.validate = (e) => e.search(t) >= 0), super._update(e);
	}
};
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern.js
var Ds = class e extends Ss {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, Es.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = fs(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? ps(i) : new Y.RepeatBlock(i);
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
			let c = s ? new Es({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...fs(t[o]),
				parent: this
			}) : new Ts({
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
		let e = new X(), t = this._mapPosToBlock(this.displayValue.length)?.index;
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
		let n = this._mapPosToBlock(this.displayValue.length), r = new X();
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
		let n = new Cs();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof Cs && (a.blockIndex = t), n.extend(a);
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
		let t = new X();
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
		if (t === void 0 && (t = J.NONE), !this._blocks.length) return 0;
		let n = new ws(this, e);
		if (t === J.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === J.LEFT || t === J.FORCE_LEFT) {
			if (t === J.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === J.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === J.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === J.RIGHT || t === J.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === J.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, J.LEFT))) : e;
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
		let t = new X();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
Ds.DEFAULTS = {
	...Ss.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, Ds.STOP_CHAR = "`", Ds.ESCAPE_CHAR = "\\", Ds.InputDefinition = Es, Ds.FixedDefinition = Ts, Y.MaskedPattern = Ds;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var Os = class extends Ds {
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
		let t = new X();
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
Y.MaskedRange = Os;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var ks = "d{.}`m{.}`Y", As = class e extends Ds {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: is(t) ? t : n
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
			mask: is(n) ? n : r,
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
As.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: Os,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: Os,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: Os,
		from: 1900,
		to: 9999
	}
}), As.DEFAULTS = {
	...Ds.DEFAULTS,
	mask: Date,
	pattern: ks,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, Y.MaskedDate = As;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var js = class e extends Ss {
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
			let { expose: t, ...n } = fs(e), r = ps({
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
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new X(), l = s?.state;
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
		let t = new X();
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
		let n = new X();
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
			return ls(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
js.DEFAULTS = {
	...Ss.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, J.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, J.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, Y.MaskedDynamic = js;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var Ms = class e extends Ds {
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
		let n = Math.min(this.nearestInputPos(0, J.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new X({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new xs("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new X();
		let n = Math.min(super.nearestInputPos(0, J.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
Ms.DEFAULTS = {
	...Ds.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, Y.MaskedEnum = Ms, Y.MaskedFunction = class extends Ss {
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
var Ns, Ps = class e extends Ss {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + cs(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(cs).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(cs(this.thousandsSeparator), "g");
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
		s ? l = new X({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new X()), this._value = this._insertThousandsSeparators(this._value);
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
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new X({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case J.NONE:
			case J.LEFT:
			case J.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === J.FORCE_LEFT) return n;
				}
				break;
			}
			case J.RIGHT:
			case J.FORCE_RIGHT: {
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
Ns = Ps, Ps.UNMASKED_RADIX = ".", Ps.EMPTY_VALUES = [...Ss.EMPTY_VALUES, 0], Ps.DEFAULTS = {
	...Ss.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [Ns.UNMASKED_RADIX],
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
}, Y.MaskedNumber = Ps;
// node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var Fs = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function Is(e, t, n) {
	t === void 0 && (t = Fs.MASKED), n === void 0 && (n = Fs.MASKED);
	let r = ps(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function Ls(e, t, n, r) {
	return Is(t, n, r)(e);
}
Y.PIPE_TYPE = Fs, Y.createPipe = Is, Y.pipe = Ls, Y.RepeatBlock = class extends Ds {
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
		let { repeat: t, ...n } = fs(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = ps(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(ps(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new X();
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
	globalThis.IMask = Y;
} catch {}
// node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var Rs = {
	mask: G.default.oneOfType([
		G.default.array,
		G.default.func,
		G.default.string,
		G.default.instanceOf(RegExp),
		G.default.oneOf([
			Date,
			Number,
			Y.Masked
		]),
		G.default.instanceOf(Y.Masked)
	]),
	value: G.default.any,
	unmask: G.default.oneOfType([G.default.bool, G.default.oneOf(["typed"])]),
	prepare: G.default.func,
	prepareChar: G.default.func,
	validate: G.default.func,
	commit: G.default.func,
	overwrite: G.default.oneOfType([G.default.bool, G.default.oneOf(["shift"])]),
	eager: G.default.oneOfType([G.default.bool, G.default.oneOf(["append", "remove"])]),
	skipInvalid: G.default.bool,
	onAccept: G.default.func,
	onComplete: G.default.func,
	placeholderChar: G.default.string,
	displayChar: G.default.string,
	lazy: G.default.bool,
	definitions: G.default.object,
	blocks: G.default.object,
	enum: G.default.arrayOf(G.default.string),
	maxLength: G.default.number,
	from: G.default.number,
	to: G.default.number,
	pattern: G.default.string,
	format: G.default.func,
	parse: G.default.func,
	autofix: G.default.oneOfType([G.default.bool, G.default.oneOf(["pad"])]),
	radix: G.default.string,
	thousandsSeparator: G.default.string,
	mapToRadix: G.default.arrayOf(G.default.string),
	scale: G.default.number,
	normalizeZeros: G.default.bool,
	padFractionalZeros: G.default.bool,
	min: G.default.oneOfType([G.default.number, G.default.instanceOf(Date)]),
	max: G.default.oneOfType([G.default.number, G.default.instanceOf(Date)]),
	dispatch: G.default.func,
	inputRef: G.default.oneOfType([G.default.func, G.default.shape({ current: G.default.object })])
}, zs = Object.keys(Rs).filter((e) => e !== "value"), Bs = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], Vs = zs.filter((e) => Bs.indexOf(e) < 0);
function Hs(e) {
	var t = class extends k.Component {
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
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = Y(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => Vs.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return zs.forEach((e) => {
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
			return k.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	};
	let n = (t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = Rs, k.forwardRef((e, t) => k.createElement(n, {
		...e,
		ref: t
	}));
}
// node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var Us = Hs((e) => {
	let { inputRef: t, ...n } = e;
	return k.createElement("input", {
		...n,
		ref: t
	});
}), Ws = k.forwardRef((e, t) => k.createElement(Us, {
	...e,
	ref: t
})), Gs = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Ks = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, qs = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, k.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Js = (e, t) => {
	let [n, r] = (0, k.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => {
		let t = x(`${e}-`);
		return i(t);
	}, o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, k.useState)(e);
		return (0, k.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, Ys = (e) => e, Xs = /*#__PURE__*/ k.createContext({
	getControlProps: Ys,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: Ys,
	getDescriptorProps: Ys,
	hasFormGroupProvider: !1
}), Zs = () => k.useContext(Xs);
function Qs(e) {
	let [t, n] = (0, k.useState)(e);
	return [t, (e) => {
		(0, k.useEffect)(() => n(e), [e]);
	}];
}
function $s({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, k.useMemo)(() => t || x("form-field"), [t]), [o, s] = Js(a), [c, l] = Js(a), [u, d] = Qs(!1), f = {
		getControlProps: (0, k.useCallback)((e) => {
			let t = u ? c : void 0;
			return Gs({
				...e,
				"aria-describedby": (0, V.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, V.default)(e["aria-labelledby"], t) || void 0,
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
	return /*#__PURE__*/ k.createElement(Xs.Provider, { value: f }, e);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/constants.js
var ec = {
	SMALL: "sm",
	LARGE: "lg"
}, tc = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, nc = {
	[tc.DEFAULT]: null,
	[tc.VALID]: Uo,
	[tc.INVALID]: Go,
	[tc.WARNING]: $o,
	[tc.CRITERIA_EMPTY]: Qo,
	[tc.CRITERIA_VALID]: Wo,
	[tc.CRITERIA_INVALID]: Ho
}, rc = ({ isInvalid: e, isValid: t }) => t ? tc.VALID : e ? tc.INVALID : tc.DEFAULT;
function ic({ type: e, customIcon: t }) {
	if (t) return t;
	let n = nc[e];
	return n ? /*#__PURE__*/ k.createElement(v, { src: n }) : null;
}
ic.propTypes = {
	type: G.default.oneOf(Object.values(tc)),
	customIcon: G.default.node
}, ic.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function ac({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, V.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /*#__PURE__*/ k.createElement("div", {
		...a,
		className: o
	}, i && /*#__PURE__*/ k.createElement(ic, {
		customIcon: n,
		type: t
	}), /*#__PURE__*/ k.createElement("div", null, e));
}
ac.propTypes = {
	children: G.default.node.isRequired,
	className: G.default.string,
	hasIcon: G.default.bool,
	type: G.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: G.default.node,
	muted: G.default.bool
}, ac.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function oc({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = Zs(), a = n(t), o = (0, V.default)("pgn__form-control-description", t.className), s = t.type || rc({
		isInvalid: r,
		isValid: i
	});
	return /*#__PURE__*/ k.createElement(ac, {
		...a,
		className: o,
		type: s
	}, e);
}
oc.propTypes = {
	children: G.default.node.isRequired,
	className: G.default.string,
	hasIcon: G.default.bool,
	type: G.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: G.default.node,
	muted: G.default.bool
}, oc.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function sc({ children: e }) {
	let { controlId: t } = Zs();
	return /*#__PURE__*/ k.createElement("div", { className: "pgn__form-control-floating-label" }, /*#__PURE__*/ k.createElement("div", { className: "pgn__form-control-floating-label-content" }, /*#__PURE__*/ k.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
sc.propTypes = { children: G.default.node.isRequired };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function cc({ children: e, location: t }) {
	return /*#__PURE__*/ k.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
cc.propTypes = {
	children: G.default.node.isRequired,
	location: G.default.oneOf(["leading", "trailing"])
}, cc.defaultProps = { location: "leading" };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function lc({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = Zs(a), s = a.size || o.size;
	return /*#__PURE__*/ k.createElement("div", {
		className: (0, V.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === ec.LARGE,
			"pgn__form-control-decorator-group-sm": s === ec.SMALL
		}, i),
		...a
	}, e, t && /*#__PURE__*/ k.createElement(cc, { location: "leading" }, t), n && /*#__PURE__*/ k.createElement(cc, { location: "trailing" }, n), r && /*#__PURE__*/ k.createElement(sc, null, r));
}
lc.propTypes = {
	children: G.default.node.isRequired,
	leadingElement: G.default.node,
	trailingElement: G.default.node,
	floatingLabel: G.default.node,
	className: G.default.string,
	size: G.default.oneOf([ec.SMALL, ec.LARGE])
}, lc.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormControl.js
var uc = /*#__PURE__*/ k.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = Zs(), h = k.useRef(), g = u || h, _ = l.size || m.size, [v, y] = qs({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, k.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, k.useEffect)(() => {
		b();
	}, [b]);
	let x = p({
		...l,
		onBlur: Ks(y, l.onBlur)
	});
	return /*#__PURE__*/ k.createElement(lc, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /*#__PURE__*/ k.createElement(Ki, {
		as: c ? Ws : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, V.default)(n, { "has-value": v }),
		onChange: (e) => {
			b(), s && s(e);
		},
		mask: c,
		...x
	}));
});
uc.Feedback = oc, uc.Description = oc, uc.propTypes = {
	className: G.default.string,
	as: G.default.elementType,
	onChange: G.default.func,
	defaultValue: G.default.oneOfType([G.default.string, G.default.number]),
	value: G.default.oneOfType([G.default.string, G.default.number]),
	id: G.default.string,
	controlClassName: G.default.string,
	size: G.default.oneOf(["sm", "lg"]),
	leadingElement: G.default.node,
	trailingElement: G.default.node,
	floatingLabel: G.default.node,
	plaintext: G.default.bool,
	isValid: G.default.bool,
	isInvalid: G.default.bool,
	autoResize: G.default.bool,
	inputMask: G.default.string
}, uc.defaultProps = {
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
function dc({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = Zs(), o = (0, V.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === ec.LARGE,
		"pgn__form-label-sm": r === ec.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /*#__PURE__*/ k.createElement(c, s, e);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function fc({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /*#__PURE__*/ k.createElement(a ?? "div", {
		...o,
		className: (0, V.default)("pgn__form-group", o.className)
	}, /*#__PURE__*/ k.createElement($s, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var pc = /*#__PURE__*/ k.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), mc = () => (0, k.useContext)(pc);
function hc({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			/* istanbul ignore next */
			onBlur: e.onBlur ? Ks(n, e.onBlur) : n,
			/* istanbul ignore next */
			onFocus: e.onFocus ? Ks(r, e.onFocus) : r,
			/* istanbul ignore next */
			onChange: e.onChange ? Ks(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /*#__PURE__*/ k.createElement(pc.Provider, { value: c }, e);
}
hc.propTypes = {
	children: G.default.node.isRequired,
	name: G.default.string.isRequired,
	onBlur: G.default.func,
	onFocus: G.default.func,
	onChange: G.default.func,
	value: G.default.string,
	defaultValue: G.default.string
}, hc.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var gc = /*#__PURE__*/ k.forwardRef((e, t) => {
	let { getControlProps: n } = Zs(), { getRadioControlProps: r, hasRadioSetProvider: i } = mc(), a = n({
		...e,
		className: (0, V.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /*#__PURE__*/ k.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
gc.propTypes = { className: G.default.string }, gc.defaultProps = { className: void 0 };
var _c = /*#__PURE__*/ k.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /*#__PURE__*/ k.createElement($s, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /*#__PURE__*/ k.createElement("div", { className: (0, V.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /*#__PURE__*/ k.createElement(gc, {
	ref: c,
	className: n,
	...s
}), /*#__PURE__*/ k.createElement("div", null, /*#__PURE__*/ k.createElement(dc, { className: r }, e), i && /*#__PURE__*/ k.createElement(oc, { hasIcon: !1 }, i)))));
_c.propTypes = {
	id: G.default.string,
	children: G.default.node.isRequired,
	className: G.default.string,
	controlClassName: G.default.string,
	labelClassName: G.default.string,
	description: G.default.node,
	isInvalid: G.default.bool,
	isValid: G.default.bool,
	disabled: G.default.bool
}, _c.defaultProps = {
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
function vc({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /*#__PURE__*/ k.createElement(e, {
		className: (0, V.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
vc.propTypes = {
	as: G.default.elementType,
	className: G.default.string,
	isInline: G.default.bool,
	children: G.default.node
}, vc.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function yc({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Zs();
	u(!0);
	let d = l(c);
	return /*#__PURE__*/ k.createElement(hc, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /*#__PURE__*/ k.createElement(vc, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
yc.propTypes = {
	children: G.default.node.isRequired,
	className: G.default.string,
	name: G.default.string.isRequired,
	value: G.default.string,
	defaultValue: G.default.string,
	isInline: G.default.bool,
	onChange: G.default.func,
	onFocus: G.default.func,
	onBlur: G.default.func
}, yc.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
var bc, xc = /* @__PURE__ */ new Uint8Array(16);
function Sc() {
	if (!bc && (bc = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !bc)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return bc(xc);
}
// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var Z = [];
for (let e = 0; e < 256; ++e) Z.push((e + 256).toString(16).slice(1));
function Cc(e, t = 0) {
	return Z[e[t + 0]] + Z[e[t + 1]] + Z[e[t + 2]] + Z[e[t + 3]] + "-" + Z[e[t + 4]] + Z[e[t + 5]] + "-" + Z[e[t + 6]] + Z[e[t + 7]] + "-" + Z[e[t + 8]] + Z[e[t + 9]] + "-" + Z[e[t + 10]] + Z[e[t + 11]] + Z[e[t + 12]] + Z[e[t + 13]] + Z[e[t + 14]] + Z[e[t + 15]];
}
var wc = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function Tc(e, t, n) {
	if (wc.randomUUID && !t && !e) return wc.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || Sc)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return Cc(r);
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var Ec = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), Dc = (e, t) => t.every((t) => e[t] !== void 0), Oc = (e, t) => Ec(e, (e) => Array.isArray(t) ? Dc(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), kc = /*#__PURE__*/ k.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, V.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /*#__PURE__*/ k.createElement(Ga, {
		...i,
		ref: r
	}, t && /*#__PURE__*/ k.createElement("span", { className: "sr-only" }, t));
});
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function Ac({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function jc({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function Mc({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && Ac({
		event: e,
		currentIndex: s,
		activeElement: a
	}), jc({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function Nc(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, k.useRef)();
	return (0, k.useEffect)(() => {
		let e = (e) => {
			Mc({
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
var Pc = R({
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
}), Fc = /*#__PURE__*/ (0, k.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: u, customErrorMessageText: d, onChange: f, helpMessage: p, ...m }, h) => {
	let g = A(), _ = (0, k.useRef)(), y = Nc({
		selectors: t,
		ignoredKeys: n
	}), [b, x] = (0, k.useState)(!1), [S, C] = (0, k.useState)(!1), [w, T] = (0, k.useState)(!1), [E, D] = (0, k.useState)(!1), [O, j] = (0, k.useState)(i?.userProvidedText || ""), [M, N] = (0, k.useState)([]), [P, F] = (0, k.useState)(null), [I, L] = (0, k.useState)(!0), [R, z] = (0, k.useState)(""), B = (e) => {
		F(e);
	}, V = () => {
		N([]), x(!1), F(null);
	}, H = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		T(!0), D(!0), j(n), f && (!i || i && n !== i.selectionValue) && f({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), V(), t && t(e);
	};
	function U(t = "") {
		let n = k.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? Tc();
			return /*#__PURE__*/ k.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => H(e, n),
				id: i,
				onFocus: () => B(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let ee = () => {
		N(U(O)), L(!0), z(""), x(!0);
	}, te = /*#__PURE__*/ k.createElement(ns, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: b ? Zo : Xo,
		iconAs: v,
		size: "sm",
		variant: "secondary",
		alt: b ? g.formatMessage(Pc.iconButtonClosed) : g.formatMessage(Pc.iconButtonOpened),
		onClick: () => {
			b ? V() : ee();
		}
	}), ne = () => {
		C(!0);
	}, re = () => {
		u ? (L(!1), z(d)) : o && !w ? (L(!1), z(s)) : w && c && !E ? (L(!1), z(l)) : (L(!0), z(""));
	};
	(0, k.useImperativeHandle)(h, () => ({ updateErrorStateAndErrorMessage: re }));
	let ie = () => {
		C(!1), V(), re();
	}, ae = (e) => {
		S && (e.key === "Escape" ? (e.preventDefault(), _ && _.current.focus(), V()) : e.key === "Tab" && ie());
	}, oe = (e) => {
		y.current && !y.current.contains(e.target) && S && ie();
	};
	(0, k.useEffect)(() => (document.addEventListener("keydown", ae), document.addEventListener("click", oe, !0), () => {
		document.removeEventListener("click", oe, !0), document.removeEventListener("keydown", ae);
	})), (0, k.useEffect)(() => {
		j(i ? i.userProvidedText ?? "" : ""), T(!!i && !!i.userProvidedText), D(!!i && !!i.selectionValue);
	}, [i]);
	let se = () => {
		ee();
	}, ce = (e) => {
		let t = e.target.value;
		if (!t.length) {
			j(""), T(!1), D(!1), N([]), V(), f && f({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		T(!0);
		let n = U(t);
		N(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		r ? (D(!0), j(r.props.children), f && f({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		})) : (D(!1), j(t), f && f({
			userProvidedText: t,
			selectionValue: "",
			selectionId: ""
		}));
	}, { getControlProps: le } = Zs(), W = le(m);
	return /*#__PURE__*/ k.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: y,
		onFocus: ne
	}, /*#__PURE__*/ k.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${M.length} options found`), /*#__PURE__*/ k.createElement($s, {
		controlId: W.id,
		isInvalid: !I
	}, /*#__PURE__*/ k.createElement(uc, {
		ref: _,
		"aria-expanded": (M.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: O,
		"aria-invalid": R,
		"aria-activedescendant": P,
		onChange: ce,
		onClick: se,
		trailingElement: te,
		"data-testid": "autosuggest-textbox-input",
		...W
	}), p && I && /*#__PURE__*/ k.createElement(oc, { type: "default" }, p), !I && /*#__PURE__*/ k.createElement(oc, {
		type: "invalid",
		"feedback-for": W.name
	}, R)), /*#__PURE__*/ k.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /*#__PURE__*/ k.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /*#__PURE__*/ k.createElement(kc, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : M.length > 0 && M));
});
Fc.defaultProps = {
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
}, Fc.propTypes = {
	arrowKeyNavigationSelector: G.default.string,
	ignoredArrowKeysNames: G.default.arrayOf(G.default.string),
	isLoading: G.default.bool,
	className: G.default.string,
	floatingLabel: G.default.string,
	onChange: G.default.func,
	helpMessage: G.default.string,
	placeholder: G.default.string,
	value: G.default.shape({
		userProvidedText: G.default.string,
		selectionValue: G.default.string,
		selectionId: G.default.string
	}),
	isValueRequired: G.default.bool,
	valueRequiredErrorMessageText: Oc(G.default.string, "isValueRequired"),
	isSelectionRequired: G.default.bool,
	selectionRequiredErrorMessageText: Oc(G.default.string, "isSelectionRequired"),
	hasCustomError: G.default.bool,
	customErrorMessageText: Oc(G.default.string, "hasCustomError"),
	name: G.default.string,
	readOnly: G.default.bool,
	children: G.default.node,
	screenReaderText: G.default.string
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function Ic({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, V.default)(a.className, "pgn__menu-item");
	return /*#__PURE__*/ (0, k.createElement)(e, {
		...a,
		className: o
	}, /*#__PURE__*/ k.createElement(k.Fragment, null, i && /*#__PURE__*/ k.createElement(v, {
		className: "btn-icon-before",
		src: i
	}), /*#__PURE__*/ k.createElement("span", { className: "pgn__menu-item-text" }, t), /*#__PURE__*/ k.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /*#__PURE__*/ k.createElement(v, {
		className: "btn-icon-after",
		src: r
	})));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function Lc({ children: e, className: t, onClick: n, ...r }) {
	return /*#__PURE__*/ k.createElement(Ic, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, V.default)(t, "dropdown-item"),
		...r
	}, e);
}
Lc.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, Lc.propTypes = {
	className: G.default.string,
	children: G.default.string,
	onClick: G.default.func
};
var Rc = /*#__PURE__*/ k.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), zc = () => (0, k.useContext)(Rc);
function Bc({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			/* istanbul ignore next */
			onBlur: e.onBlur ? Ks(n, e.onBlur) : n,
			/* istanbul ignore next */
			onFocus: e.onFocus ? Ks(r, e.onFocus) : r,
			/* istanbul ignore next */
			onChange: e.onChange ? Ks(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /*#__PURE__*/ k.createElement(Rc.Provider, { value: c }, e);
}
Bc.propTypes = {
	children: G.default.node.isRequired,
	name: G.default.string,
	onBlur: G.default.func,
	onFocus: G.default.func,
	onChange: G.default.func,
	value: G.default.arrayOf(G.default.string),
	defaultValue: G.default.arrayOf(G.default.string)
}, Bc.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var Vc = /*#__PURE__*/ k.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = zc(), a = k.useRef(), o = n || a, { getControlProps: s } = Zs(), c = s({
		...t,
		className: (0, V.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), k.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /*#__PURE__*/ k.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
Vc.propTypes = {
	isIndeterminate: G.default.bool,
	className: G.default.string
}, Vc.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Hc = /*#__PURE__*/ k.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = zc(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = Zs();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /*#__PURE__*/ k.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /*#__PURE__*/ k.createElement($s, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /*#__PURE__*/ k.createElement("div", {
		className: (0, V.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /*#__PURE__*/ k.createElement("div", null, /*#__PURE__*/ k.createElement(dc, { className: r }, e), i && /*#__PURE__*/ k.createElement(oc, { hasIcon: !1 }, i))));
});
Hc.propTypes = {
	id: G.default.string,
	children: G.default.node.isRequired,
	className: G.default.string,
	controlClassName: G.default.string,
	labelClassName: G.default.string,
	description: G.default.node,
	isInvalid: G.default.bool,
	isValid: G.default.bool,
	controlAs: G.default.elementType,
	floatLabelLeft: G.default.bool,
	disabled: G.default.bool
}, Hc.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: Vc,
	floatLabelLeft: !1,
	disabled: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Uc = /*#__PURE__*/ k.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = k.useRef(), i = n || r, { getControlProps: a } = Zs(), o = a({
		...t,
		className: (0, V.default)("pgn__form-switch-input", t.className)
	});
	return k.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /*#__PURE__*/ k.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Uc.propTypes = {
	isIndeterminate: G.default.bool,
	className: G.default.string
}, Uc.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Wc = /*#__PURE__*/ k.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /*#__PURE__*/ k.createElement("div", { className: "d-inline-flex flex-column" }, /*#__PURE__*/ k.createElement(Hc, {
	className: (0, V.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Uc,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /*#__PURE__*/ k.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
Wc.propTypes = {
	children: G.default.node.isRequired,
	className: G.default.string,
	labelClassName: G.default.string,
	helperText: G.default.node,
	floatLabelLeft: G.default.bool
}, Wc.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function Gc({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Zs();
	u(!0);
	let d = l(c);
	return /*#__PURE__*/ k.createElement(Bc, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /*#__PURE__*/ k.createElement(vc, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
Gc.propTypes = {
	children: G.default.node.isRequired,
	className: G.default.string,
	name: G.default.string.isRequired,
	value: G.default.arrayOf(G.default.string),
	defaultValue: G.default.arrayOf(G.default.string),
	isInline: G.default.bool,
	onChange: G.default.func,
	onFocus: G.default.func,
	onBlur: G.default.func
}, Gc.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Form/FormSwitchSet.js
var Kc = Gc, Q = ia;
Q.Control = uc, Q.Radio = _c, Q.RadioSet = yc, Q.Autosuggest = Fc, Q.AutosuggestOption = Lc, Q.Checkbox = Hc, Q.CheckboxSet = Gc, Q.Switch = Wc, Q.SwitchSet = Kc, Q.Label = dc, Q.Group = fc, Q.Text = ac;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var qc = /*#__PURE__*/ k.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function Jc({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, k.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /*#__PURE__*/ k.createElement(qc.Provider, { value: i }, r);
}
// node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Yc = "right-scroll-bar-position", Xc = "width-before-scroll-bar", Zc = "with-scroll-bars-hidden", Qc = "--removed-body-scroll-bar-size";
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function $c(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
// node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function el(e, t) {
	var n = (0, k.useState)(function() {
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
var tl = typeof window < "u" ? k.useLayoutEffect : k.useEffect, nl = /* @__PURE__ */ new WeakMap();
function rl(e, t) {
	var n = el(t || null, function(t) {
		return e.forEach(function(e) {
			return $c(e, t);
		});
	});
	return tl(function() {
		var t = nl.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || $c(e, null);
			}), i.forEach(function(e) {
				r.has(e) || $c(e, a);
			});
		}
		nl.set(n, e);
	}, [e]), n;
}
// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function il(e) {
	return e;
}
function al(e, t) {
	t === void 0 && (t = il);
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
function ol(e, t) {
	return t === void 0 && (t = il), al(e, t);
}
function sl(e) {
	e === void 0 && (e = {});
	var t = al(null);
	return t.options = O({
		async: !0,
		ssr: !1
	}, e), t;
}
// node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var cl = function(e) {
	var t = e.sideCar, r = n(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = t.read();
	if (!i) throw Error("Sidecar medium not found");
	return k.createElement(i, O({}, r));
};
cl.isSideCarExport = !0;
function ll(e, t) {
	return e.useMedium(t), cl;
}
// node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var ul = sl(), dl = function() {}, fl = k.forwardRef(function(e, t) {
	var r = k.useRef(null), i = k.useState({
		onScrollCapture: dl,
		onWheelCapture: dl,
		onTouchMoveCapture: dl
	}), a = i[0], o = i[1], s = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noRelative, h = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, b = e.gapMode, x = n(e, [
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
	]), S = p, C = rl([r, t]), w = O(O({}, x), a);
	return k.createElement(k.Fragment, null, d && k.createElement(S, {
		sideCar: ul,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? k.cloneElement(k.Children.only(c), O(O({}, w), { ref: C })) : k.createElement(y, O({}, w, {
		className: l,
		ref: C
	}), c));
});
fl.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, fl.classNames = {
	fullWidth: Xc,
	zeroRight: Yc
};
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var pl = "data-focus-lock", ml = "data-focus-lock-disabled", hl = "data-no-focus-lock", gl = "data-autofocus-inside", _l = "data-no-autofocus", vl = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, yl = ol({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), bl = ol(), xl = ol(), Sl = sl({
	async: !0,
	ssr: typeof document < "u"
}), Cl = /*#__PURE__*/ (0, k.createContext)(void 0), wl = [], Tl = /*#__PURE__*/ (0, k.forwardRef)(function(e, t) {
	var n, r = (0, k.useState)(), i = r[0], a = r[1], o = (0, k.useRef)(), s = (0, k.useRef)(!1), c = (0, k.useRef)(null), l = (0, k.useState)({})[1], d = e.children, f = e.disabled, p = f !== void 0 && f, m = e.noFocusGuards, h = m !== void 0 && m, g = e.persistentFocus, _ = g !== void 0 && g, v = e.crossFrame, y = v === void 0 || v, b = e.autoFocus, x = b === void 0 || b;
	e.allowTextSelection;
	var S = e.group, C = e.className, w = e.whiteList, T = e.hasPositiveIndices, E = e.shards, D = E === void 0 ? wl : E, O = e.as, A = O === void 0 ? "div" : O, j = e.lockProps, M = j === void 0 ? {} : j, N = e.sideCar, P = e.returnFocus, F = P !== void 0 && P, I = e.focusOptions, L = e.onActivation, R = e.onDeactivation, z = (0, k.useState)({})[0], B = (0, k.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!c.current) {
			var n = document?.activeElement;
			c.current = n, n !== document.body && (c.current = t(n));
		}
		o.current && L && L(o.current), s.current = !0, l();
	}, [L]), V = (0, k.useCallback)(function() {
		s.current = !1, R && R(o.current), l();
	}, [R]), H = (0, k.useCallback)(function(e) {
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
	}, [F]), U = (0, k.useCallback)(function(e) {
		s.current && yl.useMedium(e);
	}, []), ee = bl.useMedium, te = (0, k.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), ne = u((n = {}, n[ml] = p && "disabled", n[pl] = S, n), M), re = h !== !0, ie = re && h !== "tail", ae = rl([t, te]), oe = (0, k.useMemo)(function() {
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
	return /*#__PURE__*/ k.createElement(k.Fragment, null, re && [/*#__PURE__*/ k.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: vl
	}), T ? /*#__PURE__*/ k.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: vl
	}) : null], !p && /*#__PURE__*/ k.createElement(N, {
		id: z,
		sideCar: Sl,
		observed: i,
		disabled: p,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: x,
		whiteList: w,
		shards: D,
		onActivation: B,
		onDeactivation: V,
		returnFocus: H,
		focusOptions: I,
		noFocusGuards: h
	}), /*#__PURE__*/ k.createElement(A, u({ ref: ae }, ne, {
		className: C,
		onBlur: ee,
		onFocus: U
	}), /*#__PURE__*/ k.createElement(Cl.Provider, { value: oe }, d)), ie && /*#__PURE__*/ k.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: vl
	}));
});
Tl.propTypes = {};
// node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.31_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function El(e) {
	setTimeout(e, 1);
}
var Dl = function(e) {
	return e && "current" in e ? e.current : e;
}, Ol = Tl, kl = sl(), Al = "data-focus-on-hidden", jl = { preventScroll: !0 }, Ml = k.forwardRef(function(e, t) {
	var r = k.useState(!1), i = r[0], a = r[1], o = k.useState(null), s = o[0], c = o[1], l = e.children, u = e.autoFocus, d = e.shards, f = e.crossFrame, p = e.enabled, m = p === void 0 || p, h = e.scrollLock, g = h === void 0 || h, _ = e.focusLock, v = _ === void 0 || _, y = e.returnFocus, b = y === void 0 || y, x = e.inert, S = e.allowPinchZoom, C = e.sideCar, w = e.className, T = e.shouldIgnore, E = e.preventScrollOnFocus, D = e.style, A = e.as, j = e.gapMode, M = n(e, [
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
		as: A,
		style: D,
		sideCar: C,
		shards: d,
		allowPinchZoom: S,
		gapMode: j,
		inert: x,
		enabled: m && g
	}), F = k.useCallback(function(e) {
		c(e);
	}, []), I = k.useCallback(function() {
		c(null);
	}, []);
	return k.createElement(k.Fragment, null, k.createElement(Ol, {
		ref: t,
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
		focusOptions: E ? jl : void 0,
		as: fl
	}, l), m && k.createElement(N, O({}, M, {
		sideCar: kl,
		setLockProps: a,
		shards: d,
		activeNode: s
	})));
});
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/typeof.js
function Nl(e) {
	"@babel/helpers - typeof";
	return Nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Nl(e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Pl(e, t) {
	if (Nl(e) != "object" || !e) return e;
	var n;
	if (typeof Symbol < "u" && (n = e[Symbol.toPrimitive]) !== void 0) {
		var r = n.call(e, t || "default");
		if (Nl(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Fl(e) {
	var t = Pl(e, "string");
	return Nl(t) == "symbol" ? t : t + "";
}
// node_modules/.pnpm/@babel+runtime@7.29.14/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Il(e, t, n) {
	return (t = Fl(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
// node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Ll(e, t) {
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
			oe(t, e);
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
				return /*#__PURE__*/ k.createElement(r, this.props);
			}, t;
		}(k.PureComponent);
		return Il(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var Rl = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, zl = function(e) {
	return Array.isArray(e) ? e : [e];
}, Bl = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Vl = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Hl = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, Ul = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, Wl = function(e) {
	return e.hasAttribute("inert");
}, Gl = function(e, t) {
	return !e || Ul(e) || !Vl(e) && !Wl(e) && t(Hl(e));
}, Kl = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Gl(t, Kl.bind(void 0, e));
	return e.set(t, r), r;
}, ql = function(e, t) {
	return e && !Ul(e) ? eu(e) ? t(Hl(e)) : !1 : !0;
}, Jl = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = ql(t, Jl.bind(void 0, e));
	return e.set(t, r), r;
}, Yl = function(e) {
	return e.dataset;
}, Xl = function(e) {
	return e.tagName === "BUTTON";
}, Zl = function(e) {
	return e.tagName === "INPUT";
}, Ql = function(e) {
	return Zl(e) && e.type === "radio";
}, $l = function(e) {
	return !Zl(e) && !Xl(e) || e.type !== "hidden" && !e.disabled;
}, eu = function(e) {
	var t = e.getAttribute(_l);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, tu = function(e) {
	return !!(e && Yl(e)?.focusGuard);
}, nu = function(e) {
	return !tu(e);
}, ru = function(e) {
	return !!e;
}, iu = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, au = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, ou = function(e, t, n) {
	return Rl(e).map(function(e, t) {
		var r = au(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(iu);
}, su = "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]", cu = `${su}, [data-focus-guard]`, lu = function(e, t) {
	return Rl((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? cu : su) ? [n] : [], lu(n));
	}, []);
}, uu = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? du([e.contentDocument.body], t) : [e];
}, du = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = lu(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return uu(e, t);
		}));
		return e.concat(a, n.parentNode ? Rl(n.parentNode.querySelectorAll(su)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, fu = function(e) {
	return Rl(e.querySelectorAll(`[${gl}]`)).map(function(e) {
		return du([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, pu = function(e, t) {
	return Rl(e).filter(function(e) {
		return Kl(t, e);
	}).filter(function(e) {
		return $l(e);
	});
}, mu = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), Rl(e).filter(function(e) {
		return Jl(t, e);
	});
}, hu = function(e, t, n) {
	return ou(pu(du(e, n), t), !0, n);
}, gu = function(e, t) {
	return ou(pu(du(e), t), !1);
}, _u = function(e, t) {
	return pu(fu(e), t);
}, vu = function(e, t) {
	return e.shadowRoot ? vu(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Rl(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? vu(n, t) : !1;
		}
		return vu(e, t);
	});
}, yu = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, bu = function(e) {
	return e.parentNode ? bu(e.parentNode) : e;
}, xu = function(e) {
	return zl(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(pl);
		return e.push.apply(e, n ? yu(Rl(bu(t).querySelectorAll(`[${pl}="${n}"]:not([${ml}="disabled"])`))) : [t]), e;
	}, []);
}, Su = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, Cu = function(e) {
	if (e === void 0 && (e = document), e && e.activeElement) {
		var t = e.activeElement;
		return t.shadowRoot ? Cu(t.shadowRoot) : t instanceof HTMLIFrameElement && Su(function() {
			return t.contentWindow.document;
		}) ? Cu(t.contentWindow.document) : t;
	}
}, wu = function(e, t) {
	return e === t;
}, Tu = function(e, t) {
	return !!Rl(e.querySelectorAll("iframe")).some(function(e) {
		return wu(e, t);
	});
}, Eu = function(e, t) {
	return t === void 0 && (t = Cu(Bl(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : xu(e).some(function(e) {
		return vu(e, t) || Tu(e, t);
	});
}, Du = function(e) {
	e === void 0 && (e = document);
	var t = Cu(e);
	return t ? Rl(e.querySelectorAll(`[${hl}]`)).some(function(e) {
		return vu(e, t);
	}) : !1;
}, Ou = function(e, t) {
	return t.filter(Ql).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, ku = function(e, t) {
	return Ql(e) && e.name ? Ou(e, t) : e;
}, Au = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(ku(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, ju = function(e) {
	return e[0] && e.length > 1 ? ku(e[0], e) : e[0];
}, Mu = function(e, t) {
	return e.indexOf(ku(t, e));
}, Nu = "NEW_FOCUS", Pu = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = tu(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? Nu : d;
		if (d === -1) return Nu;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = Au(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = Mu(e, t[0]), C = Mu(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Fu = function(e) {
	return function(t) {
		var n = Yl(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Iu = function(e, t, n) {
	var r = mu(e.map(function(e) {
		return e.node;
	}).filter(Fu(n)));
	return r && r.length ? ju(r) : ju(mu(t));
}, Lu = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Lu(e.parentNode.host || e.parentNode, t), t;
}, Ru = function(e, t) {
	for (var n = Lu(e), r = Lu(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, zu = function(e, t, n) {
	var r = zl(e), i = zl(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Ru(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Ru(a, e);
			t && (o = !o || vu(t, o) ? t : Ru(t, o));
		});
	}), o;
}, Bu = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(_u(n, t));
	}, []);
}, Vu = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(ru);
}, Hu = function(e, t) {
	var n = Cu(zl(e).length > 0 ? document : Bl(e).ownerDocument), r = xu(e).filter(nu), i = zu(n || e, e, r), a = /* @__PURE__ */ new Map(), o = gu(r, a), s = o.filter(function(e) {
		var t = e.node;
		return nu(t);
	});
	if (s[0]) {
		var c = gu([i], a).map(function(e) {
			return e.node;
		}), l = Vu(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Pu(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Iu(o, d, Bu(r, a)) || Iu(o, u, Bu(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
		} else return f === void 0 ? f : l[f];
	}
}, Uu = function(e) {
	var t = xu(e).filter(nu), n = ou(du([zu(e, e, t)], !0), !0, !0), r = du(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: tu(t)
		};
	});
}, Wu = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Gu = 0, Ku = !1, qu = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Hu(e, t);
	if (!Ku && r) {
		if (Gu > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Ku = !0, setTimeout(function() {
				Ku = !1;
			}, 1);
			return;
		}
		Gu++, Wu(r.node, n.focusOptions), Gu--;
	}
};
// node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function Ju(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var Yu = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: Ju(n),
		parent: Ju(n.parentElement),
		left: Ju(n.previousElementSibling),
		right: Ju(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: Ju(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, Xu = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = hu([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, Zu = function(e) {
	var t = Yu(e);
	return function() {
		return Xu(t);
	};
}, Qu = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = zl(t);
	if (r.every(function(t) {
		return !vu(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? hu(r, /* @__PURE__ */ new Map()) : gu(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, $u = function(e, t) {
	var n = t ? hu(zl(e), /* @__PURE__ */ new Map()) : gu(zl(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, ed = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, td = function(e, t, n) {
	t === void 0 && (t = {});
	var r = ed(t), i = Qu(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Wu(a.node, r.focusOptions);
	}
}, nd = function(e, t) {
	t === void 0 && (t = {}), td(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, rd = function(e, t) {
	t === void 0 && (t = {}), td(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, id = function(e, t, n) {
	var r = $u(e, t.onlyTabbable ?? !0)[n];
	r && Wu(r.node, t.focusOptions);
}, ad = function(e, t) {
	t === void 0 && (t = {}), id(e, t, "first");
}, od = function(e, t) {
	t === void 0 && (t = {}), id(e, t, "last");
}, sd = function() {
	return document && document.activeElement === document.body;
}, cd = function() {
	return sd() || Du();
}, ld = null, ud = null, dd = function() {
	return null;
}, fd = null, pd = !1, md = !1, hd = function() {
	return !0;
}, gd = function(e) {
	return (ld.whiteList || hd)(e);
}, _d = function(e, t) {
	fd = {
		observerNode: e,
		portaledElement: t
	};
}, vd = function(e) {
	return fd && fd.portaledElement === e;
};
function yd(e, t, n, r) {
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
var bd = function(e) {
	return e ? !!pd : pd === "meanwhile";
}, xd = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Sd = function(e, t) {
	return t.some(function(t) {
		return xd(e, t, t);
	});
}, Cd = function(e) {
	return gu(e, /* @__PURE__ */ new Map());
}, wd = function(e) {
	return !Cd([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, Td = function() {
	var e = !1;
	if (ld) {
		var t = ld, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || fd && fd.portaledElement;
		if (sd() && ud && ud !== document.body && (!document.body.contains(ud) || wd(ud))) {
			var u = dd();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(Dl).filter(Boolean));
			if ((!d || gd(d)) && (r || function() {
				if (!bd(o) || !c || !ud || md) return !1;
				var e = Cd(f), t = e.findIndex(function(e) {
					return e.node === ud;
				});
				return t === 0 || t === e.length - 1;
			}() || !cd() || !ud && i) && (l && !(Eu(f) || d && Sd(d, f) || vd(d, l)) && (document && !ud && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = qu(f, ud, { focusOptions: s }), fd = {})), ud = document && document.activeElement, ud !== document.body && (dd = Zu(ud)), pd = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = Uu(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), yd(h, m.length, 1, m), yd(h, -1, -1, m));
			}
		}
	}
	return e;
}, Ed = function(e) {
	Td() && e && (e.stopPropagation(), e.preventDefault());
}, Dd = function() {
	return El(Td);
}, Od = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || _d(n, t);
}, kd = function() {
	return null;
}, Ad = function() {
	md = !0;
}, jd = function() {
	md = !1, pd = "just", El(function() {
		pd = "meanwhile";
	});
}, Md = function() {
	document.addEventListener("focusin", Ed), document.addEventListener("focusout", Dd), window.addEventListener("focus", Ad), window.addEventListener("blur", jd);
}, Nd = function() {
	document.removeEventListener("focusin", Ed), document.removeEventListener("focusout", Dd), window.removeEventListener("focus", Ad), window.removeEventListener("blur", jd);
};
function Pd(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Fd = {
	moveFocusInside: qu,
	focusInside: Eu,
	focusNextElement: nd,
	focusPrevElement: rd,
	focusFirstElement: ad,
	focusLastElement: od,
	captureFocusRestore: Zu
};
function Id(e) {
	var t = e.slice(-1)[0];
	t && !ld && Md();
	var n = ld, r = n && t && t.id === n.id;
	ld = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (ud = null, r && n.observed === t.observed || t.onActivation(Fd), Td(!0), El(Td)) : (Nd(), ud = null);
}
yl.assignSyncMedium(Od), bl.assignMedium(Dd), xl.assignMedium(function(e) {
	return e(Fd);
}), ll(Sl, Ll(Pd, Id)(kd));
// node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Ld = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
// node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.31_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Rd() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Ld();
	return t && e.setAttribute("nonce", t), e;
}
function zd(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Bd(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Vd = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Rd()) && (zd(t, n), Bd(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Hd = function() {
	var e = Vd();
	return function(t, n) {
		k.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Ud = function() {
	var e = Hd();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Wd = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Gd = function(e) {
	return parseInt(e || "", 10) || 0;
}, Kd = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Gd(n),
		Gd(r),
		Gd(i)
	];
}, qd = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Wd;
	var t = Kd(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Jd = Ud(), Yd = "data-scroll-locked", Xd = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Zc} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Yd}] {
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
  
  .${Yc} {
    right: ${s}px ${r};
  }
  
  .${Xc} {
    margin-right: ${s}px ${r};
  }
  
  .${Yc} .${Yc} {
    right: 0 ${r};
  }
  
  .${Xc} .${Xc} {
    margin-right: 0 ${r};
  }
  
  body[${Yd}] {
    ${Qc}: ${s}px;
  }
`;
}, Zd = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Qd = function() {
	k.useEffect(function() {
		return document.body.setAttribute(Yd, (Zd() + 1).toString()), function() {
			var e = Zd() - 1;
			e <= 0 ? document.body.removeAttribute(Yd) : document.body.setAttribute(Yd, e.toString());
		};
	}, []);
}, $d = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Qd();
	var a = k.useMemo(function() {
		return qd(i);
	}, [i]);
	return k.createElement(Jd, { styles: Xd(a, !t, i, n ? "" : "!important") });
}, ef = !1;
if (typeof window < "u") try {
	var tf = Object.defineProperty({}, "passive", { get: function() {
		return ef = !0, !0;
	} });
	window.addEventListener("test", tf, tf), window.removeEventListener("test", tf, tf);
} catch {
	ef = !1;
}
var nf = ef ? { passive: !1 } : !1, rf = function(e) {
	return e.tagName === "TEXTAREA";
}, af = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !rf(e) && n[t] === "visible");
}, of = function(e) {
	return af(e, "overflowY");
}, sf = function(e) {
	return af(e, "overflowX");
}, cf = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), df(e, r)) {
			var i = ff(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, lf = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, uf = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, df = function(e, t) {
	return e === "v" ? of(t) : sf(t);
}, ff = function(e, t) {
	return e === "v" ? lf(t) : uf(t);
}, pf = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, mf = function(e, t, n, r, i) {
	var a = pf(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = ff(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && df(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, hf = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, gf = function(e) {
	return [e.deltaX, e.deltaY];
}, _f = function(e) {
	return e && "current" in e ? e.current : e;
}, vf = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, yf = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, bf = 0, xf = [];
function Sf(e) {
	var t = k.useRef([]), n = k.useRef([0, 0]), r = k.useRef(), i = k.useState(bf++)[0], a = k.useState(Ud)[0], o = k.useRef(e);
	k.useEffect(function() {
		o.current = e;
	}, [e]), k.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = E([e.lockRef.current], (e.shards || []).map(_f), !0).filter(Boolean);
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
	var s = k.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = hf(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = cf(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = cf(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return mf(h, t, e, h === "h" ? s : c, !0);
	}, []), c = k.useCallback(function(e) {
		var n = e;
		if (xf.length && xf[xf.length - 1] === a) {
			var r = "deltaY" in n ? gf(n) : hf(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && vf(e.delta, r);
			})[0];
			if (i && i.should) n.cancelable && n.preventDefault();
			else if (!i) {
				var c = (o.current.shards || []).map(_f).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = k.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Cf(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = k.useCallback(function(e) {
		n.current = hf(e), r.current = void 0;
	}, []), d = k.useCallback(function(t) {
		l(t.type, gf(t), t.target, s(t, e.lockRef.current));
	}, []), f = k.useCallback(function(t) {
		l(t.type, hf(t), t.target, s(t, e.lockRef.current));
	}, []);
	k.useEffect(function() {
		return xf.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, nf), document.addEventListener("touchmove", c, nf), document.addEventListener("touchstart", u, nf), function() {
			xf = xf.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, nf), document.removeEventListener("touchmove", c, nf), document.removeEventListener("touchstart", u, nf);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return k.createElement(k.Fragment, null, m ? k.createElement(a, { styles: yf(i) }) : null, p ? k.createElement($d, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Cf(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
ll(ul, Sf);
// node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var wf = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Tf = /* @__PURE__ */ new WeakMap(), Ef = /* @__PURE__ */ new WeakMap(), Df = {}, Of = 0, kf = function(e) {
	return e && (e.host || kf(e.parentNode));
}, Af = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = kf(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, jf = function(e, t, n, r) {
	var i = Af(t, Array.isArray(e) ? e : [e]);
	Df[n] || (Df[n] = /* @__PURE__ */ new WeakMap());
	var a = Df[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Tf.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Tf.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Ef.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Of++, function() {
		o.forEach(function(e) {
			var t = Tf.get(e) - 1, i = a.get(e) - 1;
			Tf.set(e, t), a.set(e, i), t || (Ef.has(e) || e.removeAttribute(r), Ef.delete(e)), i || e.removeAttribute(n);
		}), Of--, Of || (Tf = /* @__PURE__ */ new WeakMap(), Tf = /* @__PURE__ */ new WeakMap(), Ef = /* @__PURE__ */ new WeakMap(), Df = {});
	};
}, Mf = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || wf(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), jf(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Nf = Ud(), Pf = "\n [" + Al + "] {\n   pointer-events: none !important;\n }\n", Ff = function() {
	return k.createElement(Nf, { styles: Pf });
}, If = function(e) {
	return "current" in e ? e.current : e;
};
function Lf(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, s = e.onDeactivation, c = e.noIsolation, l = e.activeNode, u = (0, k.useRef)(null), d = (0, k.useRef)(0);
	return k.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === u.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(If).some(function(t) {
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
	]), (0, k.useEffect)(function() {
		if (l) return a && a(l), function() {
			s && s();
		};
	}, [!!l]), (0, k.useEffect)(function() {
		if (!c && l) return Mf(o([l], (i || []).map(If)), l.ownerDocument.body, Al);
	}, [l, c]), (0, k.useEffect)(function() {
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
	}, []), k.createElement(Ff, null);
}
// node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.31_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var Rf = ll(kl, Lf), zf = function(e) {
	return k.createElement(Rf, O({}, e));
}, Bf = k.forwardRef(function(e, t) {
	return k.createElement(Ml, O({}, e, {
		ref: t,
		sideCar: zf
	}));
}), Vf = class extends k.Component {
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
function Hf({ onClick: e }) {
	return /*#__PURE__*/ k.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Uf({ children: e = null }) {
	return /*#__PURE__*/ k.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function Wf({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, k.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /*#__PURE__*/ k.createElement(Jc, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /*#__PURE__*/ k.createElement(Vf, null, /*#__PURE__*/ k.createElement(Bf, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, V.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /*#__PURE__*/ k.createElement(Uf, null, /*#__PURE__*/ k.createElement(Hf, { onClick: a }), e))));
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var Gf = /*#__PURE__*/ k.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, k.useContext)(qc), a = e, o = {
		...n,
		className: (0, V.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /*#__PURE__*/ k.createElement(a, o, t);
});
Gf.propTypes = {
	as: G.default.elementType,
	children: G.default.node,
	className: G.default.string,
	onClick: G.default.func
}, Gf.defaultProps = {
	as: C,
	onClick: void 0,
	className: void 0,
	children: null
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var Kf = /*#__PURE__*/ k.forwardRef(({ as: e = "div", children: t, ...n }, r) => /*#__PURE__*/ k.createElement(e, {
	...n,
	ref: r,
	className: (0, V.default)("pgn__modal-header", n.className)
}, t));
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function qf({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ k.createElement(e, {
		...n,
		className: (0, V.default)("pgn__modal-title", n.className)
	}, t);
}
qf.propTypes = {
	as: G.default.elementType,
	children: G.default.node.isRequired,
	className: G.default.string
}, qf.defaultProps = {
	as: "h2",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function Jf({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ k.createElement(e, {
		...n,
		className: (0, V.default)("pgn__modal-footer", n.className)
	}, t);
}
Jf.propTypes = {
	as: G.default.elementType,
	children: G.default.node.isRequired,
	className: G.default.string
}, Jf.defaultProps = {
	as: "div",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
var Yf = (e = !0) => {
	let t = (0, k.useRef)(null), [n, r] = (0, k.useState)(e);
	return (0, k.useEffect)(() => {
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
function Xf({ as: e, children: t, ...n }) {
	let [r, i] = Yf(), [a, o] = Yf(), s = (0, V.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /*#__PURE__*/ k.createElement(e, {
		...n,
		className: s
	}, /*#__PURE__*/ k.createElement(k.Fragment, null, /*#__PURE__*/ k.createElement("div", { ref: i }), /*#__PURE__*/ k.createElement("div", { className: "pgn__modal-body-content" }, t), /*#__PURE__*/ k.createElement("div", { ref: o })));
}
Xf.propTypes = {
	as: G.default.elementType,
	children: G.default.node.isRequired,
	className: G.default.string
}, Xf.defaultProps = {
	as: "div",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function Zf({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ k.createElement(e, {
		...n,
		className: (0, V.default)("pgn__modal-hero-content", n.className)
	}, t);
}
Zf.propTypes = {
	as: G.default.elementType,
	children: G.default.node.isRequired,
	className: G.default.string
}, Zf.defaultProps = {
	as: "div",
	className: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function Qf({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /*#__PURE__*/ k.createElement(e, {
		...r,
		className: (0, V.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
Qf.propTypes = {
	as: G.default.elementType,
	backgroundSrc: G.default.string,
	children: G.default.node,
	className: G.default.string,
	style: G.default.shape({})
}, Qf.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function $f({ as: e, children: t, ...n }) {
	return /*#__PURE__*/ k.createElement(e, {
		...n,
		className: (0, V.default)("pgn__modal-hero", n.className)
	}, t);
}
$f.propTypes = {
	as: G.default.elementType,
	children: G.default.node.isRequired,
	className: G.default.string
}, $f.defaultProps = {
	as: "div",
	className: void 0
}, $f.Content = Zf, $f.Background = Qf;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/messages.js
var ep = R({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function tp({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: s, isFullscreenScroll: c = !1, className: l, isFullscreenOnMobile: u = !1, isBlocking: d = !1, zIndex: f, isOverflowVisible: p }) {
	let m = A(), h = s || m.formatMessage(ep.closeButtonText), g = ko({ query: "(max-width: 767.98px)" }), _ = u && g;
	return /*#__PURE__*/ k.createElement(Wf, {
		isOpen: n,
		onClose: r,
		isBlocking: d,
		zIndex: f
	}, /*#__PURE__*/ k.createElement("div", {
		role: "dialog",
		"aria-label": t,
		className: (0, V.default)("pgn__modal", {
			[`pgn__modal-${_ ? "fullscreen" : i}`]: i,
			[`pgn__modal-${a}`]: a,
			"pgn__modal-scroll-fullscreen": c,
			"pgn__modal-visible-overflow": p
		}, l)
	}, o && /*#__PURE__*/ k.createElement("div", { className: "pgn__modal-close-container" }, /*#__PURE__*/ k.createElement(Gf, {
		as: ns,
		iconAs: v,
		invertColors: a === "dark",
		src: Go,
		alt: h
	})), e));
}
tp.Header = Kf, tp.Title = qf, tp.Footer = Jf, tp.CloseButton = Gf, tp.Body = Xf, tp.Hero = $f;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Stack/index.js
var np = /*#__PURE__*/ (0, k.forwardRef)(({ direction: e = "vertical", gap: t = 0, reversed: n = !1, children: r, className: i, ...a }, o) => /*#__PURE__*/ k.createElement("div", {
	ref: o,
	className: (0, V.default)(e === "horizontal" ? "pgn__hstack" : "pgn__vstack", t ? `pgn__stack-gap--${t}` : "", n ? "pgn__stack-reversed" : "", i),
	...a
}, r));
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/hooks/useToggleHook.js
function rp(e = !1, t = {}) {
	let { handleToggleOn: n, handleToggleOff: r, handleToggle: i } = t, [a, o] = (0, k.useState)(e), s = (0, k.useCallback)(() => {
		o(!0), n?.(), i?.(!0);
	}, [n, i]), c = (0, k.useCallback)(() => {
		o(!1), r?.(), i?.(!1);
	}, [r, i]);
	return [
		a,
		s,
		c,
		(0, k.useCallback)(() => {
			(a ? c : s)();
		}, [
			a,
			s,
			c
		])
	];
}
// node_modules/.pnpm/react-popper@2.3.0_@popperjs+core@2.11.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-popper/lib/esm/utils.js
var ip = function(e) {
	return e.reduce(function(e, t) {
		var n = t[0];
		return e[n] = t[1], e;
	}, {});
}, ap = typeof window < "u" && window.document && window.document.createElement ? k.useLayoutEffect : k.useEffect;
// node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function op(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
		Qt(i) && ln(i) && (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function sp(e) {
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
			Qt(r) && ln(r) && (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var cp = /*#__PURE__*/ Er({ defaultModifiers: [
	Fn,
	fr,
	Mn,
	{
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: op,
		effect: sp,
		requires: ["computeStyles"]
	},
	ur,
	rr,
	hr,
	En,
	sr
] }), lp = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
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
})))()), up = [], dp = function(e, t, n) {
	n === void 0 && (n = {});
	var r = k.useRef(null), i = {
		onFirstUpdate: n.onFirstUpdate,
		placement: n.placement || "bottom",
		strategy: n.strategy || "absolute",
		modifiers: n.modifiers || up
	}, a = k.useState({
		styles: {
			popper: {
				position: i.strategy,
				left: "0",
				top: "0"
			},
			arrow: { position: "absolute" }
		},
		attributes: {}
	}), o = a[0], s = a[1], c = k.useMemo(function() {
		return {
			name: "updateState",
			enabled: !0,
			phase: "write",
			fn: function(e) {
				var t = e.state, n = Object.keys(t.elements);
				z.flushSync(function() {
					s({
						styles: ip(n.map(function(e) {
							return [e, t.styles[e] || {}];
						})),
						attributes: ip(n.map(function(e) {
							return [e, t.attributes[e]];
						}))
					});
				});
			},
			requires: ["computeStyles"]
		};
	}, []), l = k.useMemo(function() {
		var e = {
			onFirstUpdate: i.onFirstUpdate,
			placement: i.placement,
			strategy: i.strategy,
			modifiers: [].concat(i.modifiers, [c, {
				name: "applyStyles",
				enabled: !1
			}])
		};
		return (0, lp.default)(r.current, e) ? r.current || e : (r.current = e, e);
	}, [
		i.onFirstUpdate,
		i.placement,
		i.strategy,
		i.modifiers,
		c
	]), u = k.useRef();
	return ap(function() {
		u.current && u.current.setOptions(l);
	}, [l]), ap(function() {
		if (e != null && t != null) {
			var r = (n.createPopper || cp)(e, t, l);
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
function fp({ children: e, target: t, strategy: n, placement: r, modifiers: i }) {
	let [a, o] = (0, k.useState)(null), { styles: s, attributes: c } = dp(t, a, {
		modifiers: i,
		strategy: n,
		placement: r
	});
	return t ? /*#__PURE__*/ k.createElement("div", {
		ref: o,
		style: {
			...s.popper,
			zIndex: 2e3
		},
		...c.popper
	}, e) : null;
}
fp.defaultProps = { target: void 0 }, fp.propTypes = {
	children: G.default.node,
	target: G.default.shape({ current: G.default.shape({}) }),
	strategy: G.default.oneOf(["absolute", "fixed"]),
	placement: G.default.oneOf([
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
	modifiers: G.default.arrayOf(G.default.shape({}))
}, fp.defaultProps = {
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
var pp = {
	right: [-2, 10],
	left: [-2, 10]
};
function mp({ children: e, onClose: t, isOpen: n, positionRef: r, isBlocking: i, withPortal: a, placement: o, hasArrow: s, ...c }) {
	let l = a ? Vf : k.Fragment, u = pp[o] || [0, 10], d = [{
		name: "eventListeners",
		options: { scroll: !1 }
	}, {
		name: "offset",
		options: { offset: () => u }
	}], f = (e) => {
		e.type !== "touchstart" && t();
	};
	return /*#__PURE__*/ k.createElement(Jc, {
		onClose: t,
		isOpen: n,
		isBlocking: i
	}, /*#__PURE__*/ k.createElement(l, null, /*#__PURE__*/ k.createElement(fp, {
		modifiers: s ? d : null,
		target: r,
		placement: o,
		...c
	}, /*#__PURE__*/ k.createElement(Bf, {
		scrollLock: !1,
		enabled: n,
		onEscapeKey: t,
		onClickOutside: f
	}, n && /*#__PURE__*/ k.createElement("div", { className: "pgn__modal-popup__tooltip" }, e, s && /*#__PURE__*/ k.createElement("div", {
		id: "arrow",
		"data-testid": "modal-popup-arrow",
		className: `pgn__modal-popup__arrow pgn__modal-popup__arrow-${o}`,
		"data-popper-arrow": ""
	}))))));
}
mp.propTypes = {
	children: G.default.node.isRequired,
	onClose: G.default.func.isRequired,
	isOpen: G.default.bool.isRequired,
	isBlocking: G.default.bool,
	withPortal: G.default.bool,
	positionRef: G.default.oneOfType([G.default.func, G.default.shape({ current: G.default.shape({}) })]),
	placement: fp.propTypes.placement,
	hasArrow: G.default.bool
}, mp.defaultProps = {
	isBlocking: !1,
	withPortal: !1,
	placement: "bottom-start",
	positionRef: null,
	hasArrow: !1
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Nav/index.js
function hp(e) {
	return /*#__PURE__*/ k.createElement(xa, { ...e });
}
function gp(e) {
	return /*#__PURE__*/ k.createElement(ha, { ...e });
}
function _p(e) {
	return /*#__PURE__*/ k.createElement(va, { ...e });
}
hp.propTypes = {
	cardHeaderBsPrefix: G.default.string,
	defaultActiveKey: G.default.oneOfType([G.default.string, G.default.number]),
	activeKey: G.default.oneOfType([G.default.string, G.default.number]),
	as: G.default.elementType,
	fill: G.default.bool,
	justify: G.default.bool,
	navbar: G.default.bool,
	onKeyDown: G.default.func,
	onSelect: G.default.func,
	role: G.default.string,
	variant: G.default.oneOf(["tabs", "pills"]),
	bsPrefix: G.default.string
}, gp.propTypes = {
	role: G.default.string,
	as: G.default.elementType,
	bsPrefix: G.default.string
}, _p.propTypes = {
	onSelect: G.default.string,
	active: G.default.bool,
	as: G.default.elementType,
	disabled: G.default.bool,
	eventKey: G.default.oneOfType([G.default.string, G.default.number]),
	href: G.default.string,
	role: G.default.string,
	bsPrefix: G.default.string
}, G.default.string.isRequired, G.default.node.isRequired, G.default.bool, G.default.bool, G.default.string, G.default.oneOf(["dark"]), G.default.func, G.default.bool, G.default.string, G.default.string, hp.defaultProps = { ...xa.defaultProps }, { ...Ca.defaultProps }, gp.defaultProps = { ...ha.defaultProps }, _p.defaultProps = { ...va.defaultProps }, hp.Item = gp, hp.Link = _p;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/ProgressBar/utils.js
var vp = (e, t = "ltr", n = !0, r = "pgn__annotation") => {
	if (!e.current || !e.current.style) return !1;
	let { children: i } = e.current, a = 0;
	for (let e = 0; e < i.length; e++) {
		let t = i[e].getBoundingClientRect();
		i[e].className.includes(r) ? a += t.width / 2 : a += n ? 0 : t.width;
	}
	return e.current.style[t === "rtl" ? "marginRight" : "marginLeft"] = `${-a}px`, !0;
}, yp = (e, t) => t === "rtl" ? { right: `${e}%` } : { left: `${e}%` }, bp = "pgn__annotation", xp = 50, Sp = "warning", Cp = "dark", wp = [
	"dark",
	"warning",
	"success",
	"error"
];
function Tp(e) {
	return /*#__PURE__*/ k.createElement(Ua, { ...e });
}
function Ep({ now: e, label: t, variant: n, threshold: r, thresholdLabel: i, thresholdVariant: a, progressHint: o, thresholdHint: s, ...c }) {
	let l = k.useRef(), u = k.useRef(), d = (r || 0) - (e || 0), f = e < xp, p = r < xp, m = wp.includes(n) ? n : Sp, h = wp.includes(a) ? a : Cp, g = window.getComputedStyle(document.body).getPropertyValue("direction"), _ = (0, k.useCallback)(() => {
		vp(l, g, f, bp), vp(u, g, p, bp);
	}, [
		g,
		f,
		p
	]);
	(0, k.useEffect)(() => {
		_();
		let e = new ResizeObserver(() => {
			_();
		}), t = l.current;
		return e.observe(t), () => t && e.unobserve(t);
	}, [_]);
	let v = (e) => /*#__PURE__*/ k.createElement("span", {
		className: "pgn__progress-hint",
		"data-testid": "progress-hint"
	}, e);
	return /*#__PURE__*/ k.createElement("div", { className: "pgn__progress-annotated" }, !!t && /*#__PURE__*/ k.createElement("div", {
		className: "pgn__progress-info",
		style: yp(e, g),
		ref: l
	}, !f && v(o), /*#__PURE__*/ k.createElement(Bo, { variant: m }, t), f && v(o)), /*#__PURE__*/ k.createElement(Ua, null, /*#__PURE__*/ k.createElement(Ua, {
		...c,
		now: e,
		className: (0, V.default)(`pgn__progress-bar--${m}`, d > 0 ? "pgn__progress-tick--white" : "pgn__progress-tick--black"),
		srOnly: !0
	}), !!r && /*#__PURE__*/ k.createElement(Ua, {
		now: d,
		className: `pgn__progress-bar--${h}`,
		srOnly: !0
	})), !!r && !!i && /*#__PURE__*/ k.createElement("div", {
		className: "pgn__progress-info",
		style: yp(r, g),
		ref: u
	}, !p && v(s), /*#__PURE__*/ k.createElement(Bo, {
		arrowPlacement: "top",
		variant: h
	}, i), p && v(s)));
}
Ep.propTypes = {
	now: G.default.number,
	label: G.default.node,
	variant: G.default.oneOf(wp),
	className: G.default.string,
	threshold: G.default.number,
	thresholdLabel: G.default.node,
	thresholdVariant: G.default.oneOf(wp),
	progressHint: G.default.node,
	thresholdHint: G.default.node
}, Ep.defaultProps = {
	now: void 0,
	label: void 0,
	variant: Sp,
	className: void 0,
	threshold: void 0,
	thresholdLabel: void 0,
	thresholdVariant: Cp,
	progressHint: void 0,
	thresholdHint: void 0
}, Tp.Annotated = Ep;
// node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file.js
var Dp = /* @__PURE__ */ new Map([
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
function Op(e, t, n) {
	let r = kp(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
	return typeof r.path != "string" && Ap(r, "path", a), n !== void 0 && Object.defineProperty(r, "handle", {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	}), Ap(r, "relativePath", a), r;
}
function kp(e) {
	let { name: t } = e;
	if (t && t.lastIndexOf(".") !== -1 && !e.type) {
		let n = t.split(".").pop().toLowerCase(), r = Dp.get(n);
		r && Object.defineProperty(e, "type", {
			value: r,
			writable: !1,
			configurable: !1,
			enumerable: !0
		});
	}
	return e;
}
function Ap(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	});
}
// node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file-selector.js
var jp = [".DS_Store", "Thumbs.db"];
function Mp(e) {
	return l(this, void 0, void 0, function* () {
		return Fp(e) && Np(e.dataTransfer) ? Rp(e.dataTransfer, e.type) : Pp(e) ? Ip(e) : Array.isArray(e) && e.every((e) => "getFile" in e && typeof e.getFile == "function") ? Lp(e) : [];
	});
}
function Np(e) {
	return Fp(e);
}
function Pp(e) {
	return Fp(e) && Fp(e.target);
}
function Fp(e) {
	return typeof e == "object" && !!e;
}
function Ip(e) {
	return Bp(e.target.files).map((e) => Op(e));
}
function Lp(e) {
	return l(this, void 0, void 0, function* () {
		return (yield Promise.all(e.map((e) => e.getFile()))).map((e) => Op(e));
	});
}
function Rp(e, t) {
	return l(this, void 0, void 0, function* () {
		if (e.items) {
			let n = Bp(e.items).filter((e) => e.kind === "file");
			return t === "drop" ? zp(Hp(yield Promise.all(n.map(Vp)))) : n;
		}
		return zp(Bp(e.files).map((e) => Op(e)));
	});
}
function zp(e) {
	return e.filter((e) => jp.indexOf(e.name) === -1);
}
function Bp(e) {
	if (e === null) return [];
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		t.push(r);
	}
	return t;
}
function Vp(e) {
	if (typeof e.webkitGetAsEntry != "function") return Up(e);
	let t = e.webkitGetAsEntry();
	return t && t.isDirectory ? Gp(t) : Up(e, t);
}
function Hp(e) {
	return e.reduce((e, t) => [...e, ...Array.isArray(t) ? Hp(t) : [t]], []);
}
function Up(e, t) {
	return l(this, void 0, void 0, function* () {
		if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
			let t = yield e.getAsFileSystemHandle();
			if (t === null) throw Error(`${e} is not a File`);
			if (t !== void 0) {
				let e = yield t.getFile();
				return e.handle = t, Op(e);
			}
		}
		let n = e.getAsFile();
		if (!n) throw Error(`${e} is not a File`);
		return Op(n, t?.fullPath ?? void 0);
	});
}
function Wp(e) {
	return l(this, void 0, void 0, function* () {
		return e.isDirectory ? Gp(e) : Kp(e);
	});
}
function Gp(e) {
	let t = e.createReader();
	return new Promise((e, n) => {
		let r = [];
		function i() {
			t.readEntries((t) => l(this, void 0, void 0, function* () {
				if (t.length) {
					let e = Promise.all(t.map(Wp));
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
function Kp(e) {
	return l(this, void 0, void 0, function* () {
		return new Promise((t, n) => {
			e.file((n) => {
				t(Op(n, e.fullPath));
			}, (e) => {
				n(e);
			});
		});
	});
}
// node_modules/.pnpm/react-dropzone@14.4.1_react@18.3.1/node_modules/react-dropzone/dist/es/utils/index.js
var qp = /* @__PURE__ */ e((/* @__PURE__ */ t(((e) => {
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
function Jp(e) {
	return Zp(e) || Xp(e) || rm(e) || Yp();
}
function Yp() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Xp(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Zp(e) {
	if (Array.isArray(e)) return im(e);
}
function Qp(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $p(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Qp(Object(n), !0).forEach(function(t) {
			em(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qp(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function em(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function tm(e, t) {
	return om(e) || am(e, t) || rm(e, t) || nm();
}
function nm() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function rm(e, t) {
	if (e) {
		if (typeof e == "string") return im(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return im(e, t);
	}
}
function im(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function am(e, t) {
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
function om(e) {
	if (Array.isArray(e)) return e;
}
var sm = typeof qp.default == "function" ? qp.default : qp.default.default, cm = "file-invalid-type", lm = "file-too-large", um = "file-too-small", dm = "too-many-files", fm = {
	FileInvalidType: cm,
	FileTooLarge: lm,
	FileTooSmall: um,
	TooManyFiles: dm
}, pm = function() {
	var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split(",");
	return {
		code: cm,
		message: `File type must be ${e.length > 1 ? `one of ${e.join(", ")}` : e[0]}`
	};
}, mm = function(e) {
	return {
		code: lm,
		message: `File is larger than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, hm = function(e) {
	return {
		code: um,
		message: `File is smaller than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, gm = {
	code: dm,
	message: "Too many files"
};
function _m(e) {
	return e.type === "" && typeof e.getAsFile == "function";
}
function vm(e, t) {
	var n = e.type === "application/x-moz-file" || sm(e, t) || _m(e);
	return [n, n ? null : pm(t)];
}
function ym(e, t, n) {
	if (bm(e.size)) {
		if (bm(t) && bm(n)) {
			if (e.size > n) return [!1, mm(n)];
			if (e.size < t) return [!1, hm(t)];
		} else if (bm(t) && e.size < t) return [!1, hm(t)];
		else if (bm(n) && e.size > n) return [!1, mm(n)];
	}
	return [!0, null];
}
function bm(e) {
	return e != null;
}
function xm(e) {
	var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
	return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(e) {
		var t = tm(vm(e, n), 1)[0], a = tm(ym(e, r, i), 1)[0], o = s ? s(e) : null;
		return t && a && !o;
	});
}
function Sm(e) {
	return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : e.cancelBubble !== void 0 && e.cancelBubble;
}
function Cm(e) {
	return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(e) {
		return e === "Files" || e === "application/x-moz-file";
	}) : !!e.target && !!e.target.files;
}
function wm(e) {
	e.preventDefault();
}
function Tm(e) {
	return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Em(e) {
	return e.indexOf("Edge/") !== -1;
}
function Dm() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
	return Tm(e) || Em(e);
}
function Om() {
	var e = [...arguments];
	return function(t) {
		var n = [...arguments].slice(1);
		return e.some(function(e) {
			return !Sm(t) && e && e.apply(void 0, [t].concat(n)), Sm(t);
		});
	};
}
function km() {
	return "showOpenFilePicker" in window;
}
function Am(e) {
	return bm(e) ? [{
		description: "Files",
		accept: Object.entries(e).filter(function(e) {
			var t = tm(e, 2), n = t[0], r = t[1], i = !0;
			return Pm(n) || (console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`), i = !1), Array.isArray(r) && r.every(Fm) || (console.warn(`Skipped "${n}" because an invalid file extension was provided.`), i = !1), i;
		}).reduce(function(e, t) {
			var n = tm(t, 2), r = n[0], i = n[1];
			return $p($p({}, e), {}, em({}, r, i));
		}, {})
	}] : e;
}
function jm(e) {
	if (bm(e)) return Object.entries(e).reduce(function(e, t) {
		var n = tm(t, 2), r = n[0], i = n[1];
		return [].concat(Jp(e), [r], Jp(i));
	}, []).filter(function(e) {
		return Pm(e) || Fm(e);
	}).join(",");
}
function Mm(e) {
	return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Nm(e) {
	return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Pm(e) {
	return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Fm(e) {
	return /^.*\.[\w]+$/.test(e);
}
// node_modules/.pnpm/react-dropzone@14.4.1_react@18.3.1/node_modules/react-dropzone/dist/es/index.js
var Im = ["children"], Lm = ["open"], Rm = [
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
], zm = [
	"refKey",
	"onChange",
	"onClick"
];
function Bm(e) {
	return Um(e) || Hm(e) || Km(e) || Vm();
}
function Vm() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Hm(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Um(e) {
	if (Array.isArray(e)) return qm(e);
}
function Wm(e, t) {
	return Ym(e) || Jm(e, t) || Km(e, t) || Gm();
}
function Gm() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Km(e, t) {
	if (e) {
		if (typeof e == "string") return qm(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qm(e, t);
	}
}
function qm(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Jm(e, t) {
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
function Ym(e) {
	if (Array.isArray(e)) return e;
}
function Xm(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Xm(Object(n), !0).forEach(function(t) {
			Zm(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xm(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Zm(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Qm(e, t) {
	if (e == null) return {};
	var n = $m(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function $m(e, t) {
	if (e == null) return {};
	for (var n = {}, r = Object.keys(e), i, a = 0; a < r.length; a++) i = r[a], t.indexOf(i) >= 0 || (n[i] = e[i]);
	return n;
}
var eh = /*#__PURE__*/ (0, k.forwardRef)(function(e, t) {
	var n = e.children, r = rh(Qm(e, Im)), i = r.open, a = Qm(r, Lm);
	return (0, k.useImperativeHandle)(t, function() {
		return { open: i };
	}, [i]), /*#__PURE__*/ k.createElement(k.Fragment, null, n($($({}, a), {}, { open: i })));
});
eh.displayName = "Dropzone";
var th = {
	disabled: !1,
	getFilesFromEvent: Mp,
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
eh.defaultProps = th, eh.propTypes = {
	children: G.default.func,
	accept: G.default.objectOf(G.default.arrayOf(G.default.string)),
	multiple: G.default.bool,
	preventDropOnDocument: G.default.bool,
	noClick: G.default.bool,
	noKeyboard: G.default.bool,
	noDrag: G.default.bool,
	noDragEventsBubbling: G.default.bool,
	minSize: G.default.number,
	maxSize: G.default.number,
	maxFiles: G.default.number,
	disabled: G.default.bool,
	getFilesFromEvent: G.default.func,
	onFileDialogCancel: G.default.func,
	onFileDialogOpen: G.default.func,
	useFsAccessApi: G.default.bool,
	autoFocus: G.default.bool,
	onDragEnter: G.default.func,
	onDragLeave: G.default.func,
	onDragOver: G.default.func,
	onDrop: G.default.func,
	onDropAccepted: G.default.func,
	onDropRejected: G.default.func,
	onError: G.default.func,
	validator: G.default.func
};
var nh = {
	isFocused: !1,
	isFileDialogActive: !1,
	isDragActive: !1,
	isDragAccept: !1,
	isDragReject: !1,
	isDragGlobal: !1,
	acceptedFiles: [],
	fileRejections: []
};
function rh() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = $($({}, th), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, c = t.maxFiles, l = t.onDragEnter, u = t.onDragLeave, d = t.onDragOver, f = t.onDrop, p = t.onDropAccepted, m = t.onDropRejected, h = t.onFileDialogCancel, g = t.onFileDialogOpen, _ = t.useFsAccessApi, v = t.autoFocus, y = t.preventDropOnDocument, b = t.noClick, x = t.noKeyboard, S = t.noDrag, C = t.noDragEventsBubbling, w = t.onError, T = t.validator, E = (0, k.useMemo)(function() {
		return jm(n);
	}, [n]), D = (0, k.useMemo)(function() {
		return Am(n);
	}, [n]), O = (0, k.useMemo)(function() {
		return typeof g == "function" ? g : ah;
	}, [g]), A = (0, k.useMemo)(function() {
		return typeof h == "function" ? h : ah;
	}, [h]), j = (0, k.useRef)(null), M = (0, k.useRef)(null), N = Wm((0, k.useReducer)(ih, nh), 2), P = N[0], F = N[1], I = P.isFocused, L = P.isFileDialogActive, R = (0, k.useRef)(typeof window < "u" && window.isSecureContext && _ && km()), z = function() {
		!R.current && L && setTimeout(function() {
			M.current && (M.current.files.length || (F({ type: "closeDialog" }), A()));
		}, 300);
	};
	(0, k.useEffect)(function() {
		return window.addEventListener("focus", z, !1), function() {
			window.removeEventListener("focus", z, !1);
		};
	}, [
		M,
		L,
		A,
		R
	]);
	var B = (0, k.useRef)([]), V = (0, k.useRef)([]), H = function(e) {
		j.current && j.current.contains(e.target) || (e.preventDefault(), B.current = []);
	};
	(0, k.useEffect)(function() {
		return y && (document.addEventListener("dragover", wm, !1), document.addEventListener("drop", H, !1)), function() {
			y && (document.removeEventListener("dragover", wm), document.removeEventListener("drop", H));
		};
	}, [j, y]), (0, k.useEffect)(function() {
		var e = function(e) {
			V.current = [].concat(Bm(V.current), [e.target]), Cm(e) && F({
				isDragGlobal: !0,
				type: "setDragGlobal"
			});
		}, t = function(e) {
			V.current = V.current.filter(function(t) {
				return t !== e.target && t !== null;
			}), V.current.length > 0 || F({
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
	}, [j]), (0, k.useEffect)(function() {
		return !r && v && j.current && j.current.focus(), function() {};
	}, [
		j,
		v,
		r
	]);
	var U = (0, k.useCallback)(function(e) {
		w ? w(e) : console.error(e);
	}, [w]), ee = (0, k.useCallback)(function(e) {
		e.preventDefault(), e.persist(), fe(e), B.current = [].concat(Bm(B.current), [e.target]), Cm(e) && Promise.resolve(i(e)).then(function(t) {
			if (!Sm(e) || C) {
				var n = t.length, r = n > 0 && xm({
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
			return U(e);
		});
	}, [
		i,
		l,
		U,
		C,
		E,
		o,
		a,
		s,
		c,
		T
	]), te = (0, k.useCallback)(function(e) {
		e.preventDefault(), e.persist(), fe(e);
		var t = Cm(e);
		if (t && e.dataTransfer) try {
			e.dataTransfer.dropEffect = "copy";
		} catch {}
		return t && d && d(e), !1;
	}, [d, C]), ne = (0, k.useCallback)(function(e) {
		e.preventDefault(), e.persist(), fe(e);
		var t = B.current.filter(function(e) {
			return j.current && j.current.contains(e);
		}), n = t.indexOf(e.target);
		n !== -1 && t.splice(n, 1), B.current = t, t.length > 0 || (F({
			type: "setDraggedFiles",
			isDragActive: !1,
			isDragAccept: !1,
			isDragReject: !1
		}), Cm(e) && u && u(e));
	}, [
		j,
		u,
		C
	]), re = (0, k.useCallback)(function(e, t) {
		var n = [], r = [];
		e.forEach(function(e) {
			var t = Wm(vm(e, E), 2), i = t[0], s = t[1], c = Wm(ym(e, o, a), 2), l = c[0], u = c[1], d = T ? T(e) : null;
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
				errors: [gm]
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
	]), ie = (0, k.useCallback)(function(e) {
		e.preventDefault(), e.persist(), fe(e), B.current = [], Cm(e) && Promise.resolve(i(e)).then(function(t) {
			(!Sm(e) || C) && re(t, e);
		}).catch(function(e) {
			return U(e);
		}), F({ type: "reset" });
	}, [
		i,
		re,
		U,
		C
	]), ae = (0, k.useCallback)(function() {
		if (R.current) {
			F({ type: "openDialog" }), O();
			var e = {
				multiple: s,
				types: D
			};
			window.showOpenFilePicker(e).then(function(e) {
				return i(e);
			}).then(function(e) {
				re(e, null), F({ type: "closeDialog" });
			}).catch(function(e) {
				Mm(e) ? (A(e), F({ type: "closeDialog" })) : Nm(e) ? (R.current = !1, M.current ? (M.current.value = null, M.current.click()) : U(/* @__PURE__ */ Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : U(e);
			});
		} else M.current && (F({ type: "openDialog" }), O(), M.current.value = null, M.current.click());
	}, [
		F,
		O,
		A,
		_,
		re,
		U,
		D,
		s
	]), oe = (0, k.useCallback)(function(e) {
		j.current && j.current.isEqualNode(e.target) && (e.key === " " || e.key === "Enter" || e.keyCode === 32 || e.keyCode === 13) && (e.preventDefault(), ae());
	}, [j, ae]), se = (0, k.useCallback)(function() {
		F({ type: "focus" });
	}, []), ce = (0, k.useCallback)(function() {
		F({ type: "blur" });
	}, []), le = (0, k.useCallback)(function() {
		b || (Dm() ? setTimeout(ae, 0) : ae());
	}, [b, ae]), W = function(e) {
		return r ? null : e;
	}, ue = function(e) {
		return x ? null : W(e);
	}, de = function(e) {
		return S ? null : W(e);
	}, fe = function(e) {
		C && e.stopPropagation();
	}, pe = (0, k.useMemo)(function() {
		return function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, i = e.role, a = e.onKeyDown, o = e.onFocus, s = e.onBlur, c = e.onClick, l = e.onDragEnter, u = e.onDragOver, d = e.onDragLeave, f = e.onDrop, p = Qm(e, Rm);
			return $($(Zm({
				onKeyDown: ue(Om(a, oe)),
				onFocus: ue(Om(o, se)),
				onBlur: ue(Om(s, ce)),
				onClick: W(Om(c, le)),
				onDragEnter: de(Om(l, ee)),
				onDragOver: de(Om(u, te)),
				onDragLeave: de(Om(d, ne)),
				onDrop: de(Om(f, ie)),
				role: typeof i == "string" && i !== "" ? i : "presentation"
			}, n, j), !r && !x ? { tabIndex: 0 } : {}), p);
		};
	}, [
		j,
		oe,
		se,
		ce,
		le,
		ee,
		te,
		ne,
		ie,
		x,
		S,
		r
	]), me = (0, k.useCallback)(function(e) {
		e.stopPropagation();
	}, []), he = (0, k.useMemo)(function() {
		return function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, r = e.onChange, i = e.onClick, a = Qm(e, zm);
			return $($({}, Zm({
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
				onChange: W(Om(r, ie)),
				onClick: W(Om(i, me)),
				tabIndex: -1
			}, n, M)), a);
		};
	}, [
		M,
		n,
		s,
		ie,
		r
	]);
	return $($({}, P), {}, {
		isFocused: I && !r,
		getRootProps: pe,
		getInputProps: he,
		rootRef: j,
		inputRef: M,
		open: W(ae)
	});
}
function ih(e, t) {
	/* istanbul ignore next */
	switch (t.type) {
		case "focus": return $($({}, e), {}, { isFocused: !0 });
		case "blur": return $($({}, e), {}, { isFocused: !1 });
		case "openDialog": return $($({}, nh), {}, { isFileDialogActive: !0 });
		case "closeDialog": return $($({}, e), {}, { isFileDialogActive: !1 });
		case "setDraggedFiles": return $($({}, e), {}, {
			isDragActive: t.isDragActive,
			isDragAccept: t.isDragAccept,
			isDragReject: t.isDragReject
		});
		case "setFiles": return $($({}, e), {}, {
			acceptedFiles: t.acceptedFiles,
			fileRejections: t.fileRejections,
			isDragReject: t.isDragReject
		});
		case "setDragGlobal": return $($({}, e), {}, { isDragGlobal: t.isDragGlobal });
		case "reset": return $({}, nh);
		default: return e;
	}
}
function ah() {}
// node_modules/.pnpm/file-selector@0.10.0/node_modules/file-selector/dist/es5/file.js
var oh = /* @__PURE__ */ new Map([
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
function sh(e, t) {
	var n = ch(e);
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
function ch(e) {
	var t = e.name;
	if (t && t.lastIndexOf(".") !== -1 && !e.type) {
		var n = t.split(".").pop().toLowerCase(), r = oh.get(n);
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
var lh = [".DS_Store", "Thumbs.db"];
function uh(e) {
	return l(this, void 0, void 0, function() {
		return D(this, function(t) {
			return ph(e) && dh(e.dataTransfer) ? [2, gh(e.dataTransfer, e.type)] : fh(e) ? [2, mh(e)] : Array.isArray(e) && e.every(function(e) {
				return "getFile" in e && typeof e.getFile == "function";
			}) ? [2, hh(e)] : [2, []];
		});
	});
}
function dh(e) {
	return ph(e);
}
function fh(e) {
	return ph(e) && ph(e.target);
}
function ph(e) {
	return typeof e == "object" && !!e;
}
function mh(e) {
	return vh(e.target.files).map(function(e) {
		return sh(e);
	});
}
function hh(e) {
	return l(this, void 0, void 0, function() {
		var t;
		return D(this, function(n) {
			switch (n.label) {
				case 0: return [4, Promise.all(e.map(function(e) {
					return e.getFile();
				}))];
				case 1: return t = n.sent(), [2, t.map(function(e) {
					return sh(e);
				})];
			}
		});
	});
}
function gh(e, t) {
	return l(this, void 0, void 0, function() {
		var n, r;
		return D(this, function(i) {
			switch (i.label) {
				case 0: return e.items ? (n = vh(e.items).filter(function(e) {
					return e.kind === "file";
				}), t === "drop" ? [4, Promise.all(n.map(yh))] : [2, n]) : [3, 2];
				case 1: return r = i.sent(), [2, _h(bh(r))];
				case 2: return [2, _h(vh(e.files).map(function(e) {
					return sh(e);
				}))];
			}
		});
	});
}
function _h(e) {
	return e.filter(function(e) {
		return lh.indexOf(e.name) === -1;
	});
}
function vh(e) {
	if (e === null) return [];
	for (var t = [], n = 0; n < e.length; n++) {
		var r = e[n];
		t.push(r);
	}
	return t;
}
function yh(e) {
	if (typeof e.webkitGetAsEntry != "function") return xh(e);
	var t = e.webkitGetAsEntry();
	return t && t.isDirectory ? Ch(t) : xh(e);
}
function bh(e) {
	return e.reduce(function(e, t) {
		return E(E([], a(e), !1), a(Array.isArray(t) ? bh(t) : [t]), !1);
	}, []);
}
function xh(e) {
	var t = e.getAsFile();
	if (!t) return Promise.reject(`${e} is not a File`);
	var n = sh(t);
	return Promise.resolve(n);
}
function Sh(e) {
	return l(this, void 0, void 0, function() {
		return D(this, function(t) {
			return [2, e.isDirectory ? Ch(e) : wh(e)];
		});
	});
}
function Ch(e) {
	var t = e.createReader();
	return new Promise(function(e, n) {
		var r = [];
		function i() {
			var a = this;
			t.readEntries(function(t) {
				return l(a, void 0, void 0, function() {
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
							case 5: s = Promise.all(t.map(Sh)), r.push(s), i(), c.label = 6;
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
function wh(e) {
	return l(this, void 0, void 0, function() {
		return D(this, function(t) {
			return [2, new Promise(function(t, n) {
				e.file(function(n) {
					t(sh(n, e.fullPath));
				}, function(e) {
					n(e);
				});
			})];
		});
	});
}
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Dropzone/DragError.js
function Th({ message: e }) {
	return /*#__PURE__*/ k.createElement("div", { className: "pgn__dropzone-error-wrapper" }, e);
}
Th.propTypes = { message: G.default.oneOfType([G.default.string, G.default.element]).isRequired };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Dropzone/GenericError.js
function Eh({ errorMsgs: e, ...t }) {
	return /*#__PURE__*/ k.createElement(Io, {
		variant: "danger",
		icon: Yo,
		className: "pgn__dropzone-generic-alert",
		...t
	}, e.map((e) => /*#__PURE__*/ k.createElement("span", { key: e }, e)));
}
Eh.propTypes = { errorMsgs: G.default.arrayOf(G.default.string).isRequired };
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Dropzone/UploadProgress.js
function Dh({ percent: e, variant: t, name: n, onCancel: r }) {
	return t === "spinner" ? /*#__PURE__*/ k.createElement(kc, {
		animation: "border",
		"aria-live": "polite",
		screenReaderText: `Uploading ${n}, ${e}% done.`,
		"data-testid": "upload-spinner"
	}) : /*#__PURE__*/ k.createElement("div", { className: "w-50" }, /*#__PURE__*/ k.createElement("p", { className: "text-muted" }, /*#__PURE__*/ k.createElement(L, {
		id: "pgn.Dropzone.UploadProgress.uploadLabel",
		defaultMessage: "Uploading {filename}.",
		description: "A text that is shown near a progress bar during file upload in Dropzone component.",
		values: { filename: n }
	})), /*#__PURE__*/ k.createElement("div", { className: "d-flex justify-content-between align-items-center w-100" }, /*#__PURE__*/ k.createElement(Tp, {
		now: e,
		label: `${e}%`,
		variant: "success",
		className: "flex-grow-1",
		"data-testid": "upload-progress-bar"
	}), /*#__PURE__*/ k.createElement(C, {
		variant: "tertiary",
		className: "ml-3",
		onClick: r
	}, /*#__PURE__*/ k.createElement(L, {
		id: "pgn.Dropzone.UploadProgress.cancelLabel",
		defaultMessage: "Cancel",
		description: "Label of a cancel button that is shown during file upload in Dropzone component."
	}))));
}
Dh.propTypes = {
	variant: G.default.oneOf(["spinner", "bar"]).isRequired,
	percent: G.default.number.isRequired,
	name: G.default.string.isRequired,
	onCancel: G.default.func.isRequired
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Dropzone/utils.js
var Oh = (e) => Object.keys(e).length > 1 || Object.keys(e).length !== 0 && Object.values(e)[0].length > 1, kh = (e) => Object.entries(e).reduce((e, t) => {
	let [n, r] = t, i;
	return i = r.length > 0 ? `${r.join(", ").replaceAll(".", "").toUpperCase()}, ` : n.endsWith("/*") ? `${n.slice(0, -2)}, ` : `${n.split("/").pop().toUpperCase()}, `, e + i;
}, "").slice(0, -2), Ah = (e) => {
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
}, jh = R({
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
function Mh({ accept: e, minSize: t, maxSize: n }) {
	let r = A();
	return /*#__PURE__*/ k.createElement(k.Fragment, null, /*#__PURE__*/ k.createElement("div", { className: "pgn__dropzone__upload-icon-wrapper" }, /*#__PURE__*/ k.createElement(v, {
		src: Jo,
		className: "pgn__dropzone__upload-icon"
	})), /*#__PURE__*/ k.createElement("p", null, /*#__PURE__*/ k.createElement(L, {
		id: "pgn.Dropzone.DefaultContent.label",
		description: "A text that appears as a label for input of Dropzone component.",
		defaultMessage: "Drag and drop your file here or click to upload."
	})), [
		e,
		t,
		n
	].some((e) => e) && /*#__PURE__*/ k.createElement("p", { className: "pgn__dropzone__upload-restriction-message" }, (() => {
		let i, a;
		if (e) {
			let t = kh(e), n = t.lastIndexOf(",");
			i = r.formatMessage(jh.fileTypeRestriction, {
				count: n === -1 ? 1 : 2,
				firstPart: n === -1 ? t : t.slice(0, n),
				secondPart: n !== -1 && t.slice(n + 1)
			});
		}
		return t && n && Number.isFinite(n) ? a = r.formatMessage(jh.fileSizeBetween, {
			sizeMin: Ah(t),
			sizeMax: Ah(n)
		}) : n && Number.isFinite(n) ? a = r.formatMessage(jh.fileSizeMax, { sizeMax: Ah(n) }) : t && (a = r.formatMessage(jh.fileSizeMin, { sizeMin: Ah(t) })), i && a ? `${i} (${a})` : i || a;
	})()));
}
Mh.propTypes = {
	accept: G.default.objectOf(G.default.arrayOf(G.default.string)),
	maxSize: G.default.number,
	minSize: G.default.number
}, Mh.defaultProps = {
	accept: void 0,
	maxSize: void 0,
	minSize: void 0
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/Dropzone/index.js
function Nh({ className: e, accept: t, minSize: n, maxSize: r, validator: i, errorMessages: a, progressVariant: o, inputComponent: s, onProcessUpload: c, onUploadProgress: l, onUploadCancel: u, ...d }) {
	let [f, p] = (0, k.useState)(!1), [m, h] = (0, k.useState)([]), [g, _] = (0, k.useState)(0), [v, y] = (0, k.useState)(void 0), [b, x] = (0, k.useState)(void 0), S = A(), { uploadError: C, invalidSizeLess: w, invalidSizeMore: T, invalidType: E, multipleDragged: D } = a, O = async (e) => {
		m && h([]);
		let t = await uh(e);
		t && t.length > 1 && p(!0);
	}, j = () => {
		f && p(!1);
	}, M = (e) => {
		f ? p(!1) : h(e[0].errors.map((e) => {
			switch (e.code) {
				case fm.FileTooLarge: return T || S.formatMessage(jh.invalidSizeMore, { size: Ah(r) });
				case fm.FileTooSmall: return w || S.formatMessage(jh.invalidSizeLess, { size: Ah(n) });
				case fm.FileInvalidType: return E || S.formatMessage(jh.invalidType, {
					count: Oh(t) ? 2 : 1,
					typeString: kh(t)
				});
				default: return S.formatMessage(jh.unexpectedValidationError);
			}
		}));
	}, N = (e) => {
		let t = Math.round(e.loaded * 100 / e.total);
		_(t), l(t, e);
	}, P = (e) => {
		e.code !== "ERR_CANCELED" && (_(0), h([C || S.formatMessage(jh.uploadError)]));
	}, F = (e) => {
		let t = new AbortController();
		x(t), c({
			fileData: e,
			requestConfig: {
				onUploadProgress: N,
				signal: t.signal
			},
			handleError: P
		});
	}, I = async (e) => {
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
		n.append("file", t), y(t.name), F(n);
	}, L = () => {
		b.abort(), _(0), u();
	}, { getRootProps: R, getInputProps: z, isDragActive: B, isDragReject: H } = rh({
		multiple: !1,
		maxFiles: 1,
		maxSize: r,
		minSize: n,
		onDragLeave: j,
		onDragEnter: O,
		onDropRejected: M,
		onDropAccepted: I,
		accept: t,
		disabled: g && g !== 100
	}), U = () => f ? /*#__PURE__*/ k.createElement(Th, { message: D || S.formatMessage(jh.multipleDragged) }) : m.length > 0 ? /*#__PURE__*/ k.createElement(k.Fragment, null, /*#__PURE__*/ k.createElement(Eh, { errorMsgs: m }), s || /*#__PURE__*/ k.createElement(Mh, {
		minSize: n,
		maxSize: r,
		accept: t
	})) : g && g !== 100 ? /*#__PURE__*/ k.createElement(Dh, {
		variant: o,
		percent: g,
		name: v,
		onCancel: L
	}) : s || /*#__PURE__*/ k.createElement(Mh, {
		minSize: n,
		maxSize: r,
		accept: t
	});
	return /*#__PURE__*/ k.createElement("div", {
		"data-testid": "dropzone-container",
		...R({ className: (0, V.default)("pgn__dropzone", e, {
			"pgn__dropzone-validation-error": f || m.length > 0 || H,
			"pgn__dropzone-active": B && !H
		}) }),
		...d
	}, /*#__PURE__*/ k.createElement("input", { ...z() }), /*#__PURE__*/ k.createElement("div", { className: "d-flex flex-column justify-content-around align-items-center w-100" }, U()));
}
Nh.defaultProps = {
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
}, Nh.propTypes = {
	className: G.default.string,
	accept: G.default.objectOf(G.default.arrayOf(G.default.string)),
	maxSize: G.default.number,
	minSize: G.default.number,
	onUploadProgress: G.default.func,
	onUploadCancel: G.default.func,
	onProcessUpload: G.default.func.isRequired,
	errorMessages: G.default.shape({
		invalidType: G.default.oneOfType([G.default.string, G.default.element]),
		invalidSizeLess: G.default.oneOfType([G.default.string, G.default.element]),
		invalidSizeMore: G.default.oneOfType([G.default.string, G.default.element]),
		multipleDragged: G.default.oneOfType([G.default.string, G.default.element]),
		uploadError: G.default.oneOfType([G.default.string, G.default.element])
	}),
	progressVariant: G.default.oneOf(["spinner", "bar"]),
	validator: G.default.func,
	inputComponent: G.default.oneOfType([G.default.elementType, G.default.node])
};
// node_modules/.pnpm/react-colorful@5.8.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-colorful/dist/index.mjs
function Ph() {
	return (Ph = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}).apply(this, arguments);
}
function Fh(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
function Ih(e) {
	var t = (0, k.useRef)(e), n = (0, k.useRef)(function(e) {
		t.current && t.current(e);
	});
	return t.current = e, n.current;
}
var Lh = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Rh = function(e) {
	return "touches" in e;
}, zh = function(e) {
	return e && e.ownerDocument.defaultView || self;
}, Bh = function(e, t, n) {
	var r = e.getBoundingClientRect(), i = Rh(t) ? function(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
		return e[0];
	}(t.touches, n) : t;
	return {
		left: Lh((i.pageX - (r.left + zh(e).pageXOffset)) / r.width),
		top: Lh((i.pageY - (r.top + zh(e).pageYOffset)) / r.height)
	};
}, Vh = function(e) {
	!Rh(e) && e.preventDefault();
}, Hh = k.memo(function(e) {
	var t = e.onMove, n = e.onKey, r = e.onEnd, i = Fh(e, [
		"onMove",
		"onKey",
		"onEnd"
	]), a = (0, k.useRef)(null), o = Ih(t), s = Ih(n), c = Ih(r), l = (0, k.useRef)(null), u = (0, k.useRef)(!1), d = (0, k.useMemo)(function() {
		var e = function(e) {
			Vh(e), (Rh(e) ? e.touches.length > 0 : e.buttons > 0) && a.current ? o(Bh(a.current, e, l.current)) : (n(!1), c());
		}, t = function() {
			n(!1), c();
		};
		function n(n) {
			var r = u.current, i = zh(a.current), o = n ? i.addEventListener : i.removeEventListener;
			o(r ? "touchmove" : "mousemove", e), o(r ? "touchend" : "mouseup", t);
		}
		return [
			function(e) {
				var t = e.nativeEvent, r = a.current;
				if (r && (Vh(t), !function(e, t) {
					return t && !Rh(e);
				}(t, u.current) && r)) {
					if (Rh(t)) {
						u.current = !0;
						var i = t.changedTouches || [];
						i.length && (l.current = i[0].identifier);
					}
					r.focus(), o(Bh(r, t, l.current)), n(!0);
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
	return (0, k.useEffect)(function() {
		return h;
	}, [h]), k.createElement("div", Ph({}, i, {
		onTouchStart: f,
		onMouseDown: f,
		className: "react-colorful__interactive",
		ref: a,
		onKeyDown: p,
		onKeyUp: m,
		tabIndex: 0,
		role: "slider"
	}));
}), Uh = function(e) {
	return e.filter(Boolean).join(" ");
}, Wh = function(e) {
	var t = e.color, n = e.left, r = e.top, i = r === void 0 ? .5 : r, a = Uh(["react-colorful__pointer", e.className]);
	return k.createElement("div", {
		className: a,
		style: {
			top: 100 * i + "%",
			left: 100 * n + "%"
		}
	}, k.createElement("div", {
		className: "react-colorful__pointer-fill",
		style: { backgroundColor: t }
	}));
}, Gh = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 10 ** t), Math.round(n * e) / n;
}, Kh = function(e) {
	return eg(qh(e));
}, qh = function(e) {
	return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? {
		r: parseInt(e[0] + e[0], 16),
		g: parseInt(e[1] + e[1], 16),
		b: parseInt(e[2] + e[2], 16),
		a: e.length === 4 ? Gh(parseInt(e[3] + e[3], 16) / 255, 2) : 1
	} : {
		r: parseInt(e.substring(0, 2), 16),
		g: parseInt(e.substring(2, 4), 16),
		b: parseInt(e.substring(4, 6), 16),
		a: e.length === 8 ? Gh(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
	};
}, Jh = function(e) {
	return $h(Zh(e));
}, Yh = function(e) {
	var t = e.s, n = e.v, r = e.a, i = (200 - t) * n / 100;
	return {
		h: Gh(e.h),
		s: Gh(i > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
		l: Gh(i / 2),
		a: Gh(r, 2)
	};
}, Xh = function(e) {
	var t = Yh(e);
	return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Zh = function(e) {
	var t = e.h, n = e.s, r = e.v, i = e.a;
	t = t / 360 * 6, n /= 100, r /= 100;
	var a = Math.floor(t), o = r * (1 - n), s = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
	return {
		r: Gh(255 * [
			r,
			s,
			o,
			o,
			c,
			r
		][l]),
		g: Gh(255 * [
			c,
			r,
			r,
			s,
			o,
			o
		][l]),
		b: Gh(255 * [
			o,
			o,
			c,
			r,
			r,
			s
		][l]),
		a: Gh(i, 2)
	};
}, Qh = function(e) {
	var t = e.toString(16);
	return t.length < 2 ? "0" + t : t;
}, $h = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = i < 1 ? Qh(Gh(255 * i)) : "";
	return "#" + Qh(t) + Qh(n) + Qh(r) + a;
}, eg = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = Math.max(t, n, r), o = a - Math.min(t, n, r), s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
	return {
		h: 60 * (s < 0 ? s + 6 : s),
		s: a ? o / a * 100 : 0,
		v: a / 255 * 100,
		a: i
	};
}, tg = k.memo(function(e) {
	var t = e.hue, n = e.onChange, r = e.onChangeEnd, i = Uh(["react-colorful__hue", e.className]);
	return k.createElement("div", { className: i }, k.createElement(Hh, {
		onMove: function(e) {
			n({ h: 360 * e.left });
		},
		onKey: function(e) {
			n({ h: Lh(t + 360 * e.left, 0, 360) });
		},
		onEnd: r,
		"aria-label": "Hue",
		"aria-valuenow": Gh(t),
		"aria-valuemax": "360",
		"aria-valuemin": "0"
	}, k.createElement(Wh, {
		className: "react-colorful__hue-pointer",
		left: t / 360,
		color: Xh({
			h: t,
			s: 100,
			v: 100,
			a: 1
		})
	})));
}), ng = k.memo(function(e) {
	var t = e.hsva, n = e.onChange, r = e.onChangeEnd, i = { backgroundColor: Xh({
		h: t.h,
		s: 100,
		v: 100,
		a: 1
	}) };
	return k.createElement("div", {
		className: "react-colorful__saturation",
		style: i
	}, k.createElement(Hh, {
		onMove: function(e) {
			n({
				s: 100 * e.left,
				v: 100 - 100 * e.top
			});
		},
		onKey: function(e) {
			n({
				s: Lh(t.s + 100 * e.left, 0, 100),
				v: Lh(t.v - 100 * e.top, 0, 100)
			});
		},
		onEnd: r,
		"aria-label": "Color",
		"aria-valuetext": "Saturation " + Gh(t.s) + "%, Brightness " + Gh(t.v) + "%"
	}, k.createElement(Wh, {
		className: "react-colorful__saturation-pointer",
		top: 1 - t.v / 100,
		left: t.s / 100,
		color: Xh(t)
	})));
}), rg = function(e, t) {
	if (e === t) return !0;
	for (var n in e) if (e[n] !== t[n]) return !1;
	return !0;
}, ig = function(e, t) {
	return e.toLowerCase() === t.toLowerCase() || rg(qh(e), qh(t));
};
function ag(e, t, n, r) {
	var i = Ih(n), a = Ih(r), o = (0, k.useState)(function() {
		return e.toHsva(t);
	}), s = o[0], c = o[1], l = (0, k.useRef)({
		color: t,
		hsva: s
	}), u = (0, k.useRef)(!1);
	return (0, k.useEffect)(function() {
		if (!e.equal(t, l.current.color)) {
			var n = e.toHsva(t);
			l.current = {
				hsva: n,
				color: t
			}, c(n), u.current = !1;
		}
	}, [t, e]), (0, k.useEffect)(function() {
		var t;
		rg(s, l.current.hsva) || e.equal(t = e.fromHsva(s), l.current.color) || (l.current = {
			hsva: s,
			color: t
		}, i(t), u.current = !0);
	}, [
		s,
		e,
		i
	]), [
		s,
		(0, k.useCallback)(function(e) {
			c(function(t) {
				return Object.assign({}, t, e);
			});
		}, []),
		(0, k.useCallback)(function() {
			u.current && (u.current = !1, a(l.current.color));
		}, [a])
	];
}
var og = typeof window < "u" ? k.useLayoutEffect : k.useEffect, sg = function() {
	return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, cg = /* @__PURE__ */ new WeakMap(), lg = function(e) {
	og(function() {
		var t = e.current;
		if (typeof document < "u" && t) {
			var n = t.getRootNode ? t.getRootNode() : t.ownerDocument, r = n && ("head" in n || "host" in n) ? n : t.ownerDocument;
			if (!cg.has(r)) {
				var i = "head" in r ? r.head : r, a = (i.ownerDocument || document).createElement("style");
				a.innerHTML = ".react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill-opacity=\".05\"><path d=\"M8 0h8v8H8zM0 8h8v8H0z\"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}";
				var o = sg();
				o && a.setAttribute("nonce", o), cg.set(r, a), i.appendChild(a);
			}
		}
	}, []);
}, ug = function(e) {
	var t = e.className, n = e.colorModel, r = e.color, i = r === void 0 ? n.defaultColor : r, a = e.onChange, o = e.onChangeEnd, s = Fh(e, [
		"className",
		"colorModel",
		"color",
		"onChange",
		"onChangeEnd"
	]), c = (0, k.useRef)(null);
	lg(c);
	var l = ag(n, i, a, o), u = l[0], d = l[1], f = l[2], p = Uh(["react-colorful", t]);
	return k.createElement("div", Ph({}, s, {
		ref: c,
		className: p
	}), k.createElement(ng, {
		hsva: u,
		onChange: d,
		onChangeEnd: f
	}), k.createElement(tg, {
		hue: u.h,
		onChange: d,
		onChangeEnd: f,
		className: "react-colorful__last-control"
	}));
}, dg = {
	defaultColor: "000",
	toHsva: Kh,
	fromHsva: function(e) {
		return Jh({
			h: e.h,
			s: e.s,
			v: e.v,
			a: 1
		});
	},
	equal: ig
}, fg = function(e) {
	return k.createElement(ug, Ph({}, e, { colorModel: dg }));
};
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/dist/ColorPicker/index.js
function pg({ color: e, setColor: t, className: n, size: r }) {
	let [i, a, o] = rp(!1), [s, c] = k.useState(null), l = (e) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e), u = (e) => e.startsWith("#") ? e.slice(0, 7) : `#${e}`.slice(0, 7), [d, f] = k.useState(() => e === "" || l(u(e))), [p, m] = k.useState(() => e === "" ? "" : u(e)), [h, g] = k.useState(() => {
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
	return /*#__PURE__*/ k.createElement(k.Fragment, null, /*#__PURE__*/ k.createElement("span", { className: "d-flex" }, /*#__PURE__*/ k.createElement(es, {
		placement: "top",
		overlay: /*#__PURE__*/ k.createElement(ts, { id: "color-picker-tooltip" }, "Color picker")
	}, /*#__PURE__*/ k.createElement(C, {
		ref: c,
		className: (0, V.default)(n, "pgn__color-picker", `pgn__color-picker-${r}`),
		style: { ...e && d ? { background: `${e}` } : {} },
		onClick: a
	}))), /*#__PURE__*/ k.createElement(mp, {
		positionRef: s,
		isOpen: i,
		style: { background: "black" },
		onClose: o
	}, /*#__PURE__*/ k.createElement("div", {
		className: "pgn__color-modal rounded shadow",
		style: { textAlign: "start" }
	}, /*#__PURE__*/ k.createElement(fg, {
		color: h,
		onChange: _
	}), /*#__PURE__*/ k.createElement(Q.Group, {
		className: "pgn__hex-form",
		size: "sm"
	}, /*#__PURE__*/ k.createElement("div", null, /*#__PURE__*/ k.createElement(Q.Label, { className: "pgn__hex-label" }, "Hex"), /*#__PURE__*/ k.createElement(Q.Control, {
		className: "pgn__hex-field",
		isInvalid: !d,
		value: p,
		onChange: (e) => _(e.target.value),
		"data-testid": "hex-input",
		spellCheck: "false"
	})), !d && /*#__PURE__*/ k.createElement(Q.Control.Feedback, {
		className: "pgn__color-error",
		type: "invalid"
	}, "Colors must be in hexadecimal format.")))));
}
pg.defaultProps = {
	color: "",
	className: void 0,
	size: "md"
}, pg.propTypes = {
	color: G.default.string,
	setColor: G.default.func.isRequired,
	className: G.default.string,
	size: G.default.oneOf(["sm", "md"])
};
// src/shared/components/constants.ts
var mg = [
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
function hg({ title: e, onTitleChange: t, activeTab: n, tabs: r = mg }) {
	let [i, a] = (0, k.useState)(!1);
	return /* @__PURE__ */ (0, B.jsx)(tp.Header, {
		className: "shadow-sm studio-header",
		children: /* @__PURE__ */ (0, B.jsxs)("div", {
			className: "d-flex flex-row justify-content-between",
			children: [
				/* @__PURE__ */ (0, B.jsx)(H, { children: i ? /* @__PURE__ */ (0, B.jsx)(Q.Control, {
					type: "text",
					name: "studio-title",
					"aria-label": "Display name",
					value: e,
					onChange: (e) => t(e.target.value),
					onBlur: () => a(!1),
					onKeyDown: (e) => {
						(e.key === "Enter" || e.key === "Escape") && (a(!1), e.preventDefault());
					}
				}) : /* @__PURE__ */ (0, B.jsx)("h3", {
					className: "h3 col pl-0",
					children: /* @__PURE__ */ (0, B.jsxs)("div", {
						className: "d-flex flex-row align-items-center mt-1",
						children: [
							"Editing: ",
							e || "<Untitled>",
							/* @__PURE__ */ (0, B.jsx)(ns, {
								alt: "Edit display name",
								className: "studio-header-title-edit",
								size: "sm",
								src: qo,
								onClick: () => a(!0)
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, B.jsx)(H.Spacer, {}),
				/* @__PURE__ */ (0, B.jsx)(hp, {
					role: "tablist",
					variant: "button-group",
					activeKey: n,
					className: "studio-header-tabs-nav pgn__tabs",
					"aria-label": "Editor Sections",
					children: r.map(({ key: e, label: t }) => /* @__PURE__ */ (0, B.jsx)(hp.Link, {
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
// src/lib/context.ts
var gg = (0, k.createContext)(null), _g = () => (0, k.useContext)(gg);
// src/shared/components/JsonImporter.tsx
function vg({ error: e }) {
	return /* @__PURE__ */ (0, B.jsx)("ul", {
		className: "mb-0 pl-3",
		children: Object.entries(e).map(([e, t]) => /* @__PURE__ */ (0, B.jsxs)("li", { children: [e, /* @__PURE__ */ (0, B.jsx)("ul", { children: t.map((e) => /* @__PURE__ */ (0, B.jsx)("li", { children: /* @__PURE__ */ (0, B.jsx)("code", { children: e }) }, e)) })] }, e))
	});
}
function yg({ liveData: e }) {
	let [t, n] = (0, k.useState)(null), { runtime: r, element: i } = (0, k.useContext)(w);
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
			await d({
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
	return /* @__PURE__ */ (0, B.jsxs)("div", {
		className: "p-3",
		children: [
			/* @__PURE__ */ (0, B.jsxs)(Q.Group, { children: [/* @__PURE__ */ (0, B.jsx)(Q.Label, { children: "Update Component using JSON file" }), /* @__PURE__ */ (0, B.jsx)(Nh, {
				onProcessUpload: o,
				accept: { "application/json": [".json"] },
				validator: a
			})] }),
			t && /* @__PURE__ */ (0, B.jsxs)(Io, {
				variant: "danger",
				className: "mt-3",
				children: [/* @__PURE__ */ (0, B.jsx)(Io.Heading, { children: "JSON validation failed!" }), typeof t == "string" ? /* @__PURE__ */ (0, B.jsx)("p", {
					className: "mb-0",
					children: t
				}) : /* @__PURE__ */ (0, B.jsx)(vg, { error: t })]
			}),
			/* @__PURE__ */ (0, B.jsxs)("div", {
				className: "mt-3",
				children: [
					/* @__PURE__ */ (0, B.jsx)("h4", { children: "JSON Templates" }),
					/* @__PURE__ */ (0, B.jsxs)("p", { children: [
						/* @__PURE__ */ (0, B.jsx)(C, {
							variant: "secondary",
							className: "m-2",
							onClick: () => s(e),
							children: "Download component data"
						}),
						/* @__PURE__ */ (0, B.jsx)("br", {}),
						/* @__PURE__ */ (0, B.jsx)("small", { children: "The component data files contain the data of the current component without any schema information." })
					] }),
					/* @__PURE__ */ (0, B.jsxs)("p", { children: [
						/* @__PURE__ */ (0, B.jsx)("a", {
							className: "m-2 btn btn-secondary",
							href: r.handlerUrl(i, "json_schema"),
							children: "Download Schema"
						}),
						/* @__PURE__ */ (0, B.jsx)("br", {}),
						/* @__PURE__ */ (0, B.jsx)("small", { children: "Schema files are useful for validating the JSON using external systems." })
					] })
				]
			})
		]
	});
}
// src/keypoint-block/studio-ui/studio-ui.tsx
function bg({ data: e }) {
	let { runtime: t } = (0, k.useContext)(w), n = _("studio_save"), [r, i] = (0, k.useState)(e.header || ""), [a, o] = (0, k.useState)(e.keypoints || []), [s, c] = (0, k.useState)(e.summary || ""), [l, u] = (0, k.useState)(e.button_text || ""), [d, f] = (0, k.useState)(e.button_link || ""), [p, m] = (0, k.useState)(e.background_color || ""), h = () => {
		o([...a, {
			keypoint: "",
			description: ""
		}]);
	}, g = (e, t) => {
		let n = [...a];
		n[e] = {
			...n[e],
			...t
		}, o(n);
	}, v = (e) => {
		o(a.filter((t, n) => n !== e));
	}, y = () => {
		b({
			saveUrl: n,
			data: {
				header: r,
				keypoints: a,
				summary: s,
				button_text: l,
				button_link: d,
				background_color: p
			},
			runtime: t,
			errorMessage: "Failed to save keypoint configuration"
		});
	}, x = mg[0].key, [S, T] = (0, k.useState)(x), E = !!_g()?.enable_json_editing, D = E ? mg : mg.filter((e) => e.key !== "json");
	return /* @__PURE__ */ (0, B.jsx)(Ka, {
		id: "keypoint-block-studio-tabs",
		activeKey: S,
		onSelect: (e) => T(e || x),
		transition: !1,
		children: /* @__PURE__ */ (0, B.jsxs)("div", {
			className: "xblock-keypoints-studio",
			children: [
				/* @__PURE__ */ (0, B.jsx)(hg, {
					activeTab: S,
					title: r,
					onTitleChange: i,
					tabs: D
				}),
				/* @__PURE__ */ (0, B.jsx)(tp.Body, { children: /* @__PURE__ */ (0, B.jsxs)(Ja, { children: [
					/* @__PURE__ */ (0, B.jsxs)(Qa, {
						eventKey: "content",
						children: [
							/* @__PURE__ */ (0, B.jsxs)(H, {
								className: "keypoints-studio-row",
								children: [
									/* @__PURE__ */ (0, B.jsx)("h4", {
										className: "keypoints-studio-section-title",
										children: "Key Terms"
									}),
									/* @__PURE__ */ (0, B.jsx)(H.Spacer, {}),
									/* @__PURE__ */ (0, B.jsx)(C, {
										iconBefore: Vo,
										onClick: h,
										children: "Add Key Term"
									})
								]
							}),
							a.length === 0 && /* @__PURE__ */ (0, B.jsx)("p", {
								className: "keypoints-studio-empty",
								children: "No key terms added yet. Click \"Add Key Term\" to get started."
							}),
							a.map((e, t) => /* @__PURE__ */ (0, B.jsxs)("div", {
								className: "keypoint-entry",
								children: [
									/* @__PURE__ */ (0, B.jsxs)(H, {
										className: "keypoints-studio-entry-header",
										children: [
											/* @__PURE__ */ (0, B.jsxs)("span", {
												className: "keypoints-studio-entry-title",
												children: ["Term ", t + 1]
											}),
											/* @__PURE__ */ (0, B.jsx)(H.Spacer, {}),
											/* @__PURE__ */ (0, B.jsx)(C, {
												size: "sm",
												variant: "outline-danger",
												iconBefore: Ko,
												onClick: () => v(t),
												children: "Remove"
											})
										]
									}),
									/* @__PURE__ */ (0, B.jsxs)(Q.Group, {
										className: "keypoints-studio-field",
										children: [/* @__PURE__ */ (0, B.jsx)(Q.Label, { children: "Label" }), /* @__PURE__ */ (0, B.jsx)(Q.Control, {
											value: e.keypoint,
											onChange: (e) => g(t, { keypoint: e.target.value }),
											placeholder: "e.g. Fluid balance"
										})]
									}),
									/* @__PURE__ */ (0, B.jsxs)(Q.Group, {
										className: "keypoints-studio-field keypoints-studio-field--last",
										children: [/* @__PURE__ */ (0, B.jsx)(Q.Label, { children: "Description" }), /* @__PURE__ */ (0, B.jsx)(Q.Control, {
											as: "textarea",
											rows: 3,
											value: e.description,
											onChange: (e) => g(t, { description: e.target.value }),
											placeholder: "e.g. The regulation of fluids within the body..."
										})]
									})
								]
							}, `keypoint-${t}`)),
							/* @__PURE__ */ (0, B.jsxs)(Q.Group, {
								className: "mt-3",
								children: [/* @__PURE__ */ (0, B.jsx)(Q.Label, {
									className: "h3",
									children: "Summary"
								}), /* @__PURE__ */ (0, B.jsx)(Q.Control, {
									as: "textarea",
									rows: 4,
									value: s,
									onChange: (e) => c(e.target.value),
									placeholder: "e.g. These concepts form a connected sequence..."
								})]
							}),
							/* @__PURE__ */ (0, B.jsxs)("div", { children: [
								/* @__PURE__ */ (0, B.jsx)("h4", {
									className: "keypoints-studio-section-title",
									children: "Action Button"
								}),
								/* @__PURE__ */ (0, B.jsxs)(Q.Group, {
									className: "keypoints-studio-field",
									children: [/* @__PURE__ */ (0, B.jsx)(Q.Label, { children: "Button Text" }), /* @__PURE__ */ (0, B.jsx)(Q.Control, {
										value: l,
										onChange: (e) => u(e.target.value),
										placeholder: "e.g. Glossary"
									})]
								}),
								/* @__PURE__ */ (0, B.jsxs)(Q.Group, {
									className: "keypoints-studio-field",
									children: [/* @__PURE__ */ (0, B.jsx)(Q.Label, { children: "Button Link" }), /* @__PURE__ */ (0, B.jsx)(Q.Control, {
										value: d,
										onChange: (e) => f(e.target.value),
										placeholder: "e.g. https://example.com/glossary"
									})]
								})
							] })
						]
					}),
					/* @__PURE__ */ (0, B.jsx)(Qa, {
						eventKey: "settings",
						children: /* @__PURE__ */ (0, B.jsxs)(Q.Group, {
							className: "keypoints-studio-field",
							children: [/* @__PURE__ */ (0, B.jsx)(Q.Label, { children: "Background Color" }), /* @__PURE__ */ (0, B.jsx)(pg, {
								color: p,
								setColor: m
							})]
						})
					}),
					E && /* @__PURE__ */ (0, B.jsx)(Qa, {
						eventKey: "json",
						children: /* @__PURE__ */ (0, B.jsx)(yg, { liveData: {
							header: r,
							keypoints: a,
							summary: s,
							button_text: l,
							button_link: d,
							background_color: p
						} })
					})
				] }) }),
				/* @__PURE__ */ (0, B.jsx)(tp.Footer, {
					className: "border-top",
					style: { zIndex: "3" },
					children: /* @__PURE__ */ (0, B.jsxs)(np, {
						direction: "horizontal",
						gap: 4,
						children: [/* @__PURE__ */ (0, B.jsx)(C, {
							variant: "tertiary",
							onClick: () => t.notify("cancel", {}),
							children: "Cancel"
						}), /* @__PURE__ */ (0, B.jsx)(C, {
							variant: "primary",
							onClick: y,
							children: "Save"
						})]
					})
				})
			]
		})
	});
}
// src/keypoint-block/studio-ui/style.scss?inline
var xg = ".pgn__modal-header.studio-header{padding:calc(var(--pgn-spacing-modal-inner-padding-base) / 2) var(--pgn-spacing-modal-header-padding-base-x);z-index:1}.studio-header-title{align-items:center;gap:var(--pgn-spacing-spacer-2,8px);display:flex}.studio-header-tabs-nav{flex-wrap:nowrap;padding-right:64px}.studio-header-tabs-nav .nav-link{appearance:none;font-family:inherit;font-size:inherit;line-height:inherit;cursor:pointer;background-color:#0000}.wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.xblock-keypoints-studio{flex-direction:column;justify-content:space-between;min-height:435px;display:flex}.xblock-keypoints-studio .keypoints-studio-stack{gap:var(--pgn-exemplar-xblock-studio-section-gap,24px);padding:var(--pgn-exemplar-xblock-studio-stack-padding,16px)}.xblock-keypoints-studio .keypoints-studio-section-title{margin:0 0 var(--pgn-exemplar-xblock-studio-field-gap,16px);font-weight:700}.xblock-keypoints-studio .keypoints-studio-row,.xblock-keypoints-studio .keypoints-studio-entry-header{margin-bottom:var(--pgn-exemplar-xblock-studio-field-gap,16px)}.xblock-keypoints-studio .keypoints-studio-row .keypoints-studio-section-title{margin-bottom:0}.xblock-keypoints-studio .keypoints-studio-empty{color:var(--pgn-color-gray-500);margin:0}.xblock-keypoints-studio .keypoint-entry{border:1px solid var(--pgn-color-gray-200);border-radius:var(--pgn-exemplar-xblock-studio-entry-radius,8px);padding:var(--pgn-exemplar-xblock-studio-entry-padding,24px);margin-bottom:var(--pgn-exemplar-xblock-studio-field-gap,16px);background-color:var(--pgn-color-gray-100)}.xblock-keypoints-studio .keypoint-entry:last-child{margin-bottom:0}.xblock-keypoints-studio .keypoints-studio-entry-title{font-weight:700}.xblock-keypoints-studio .keypoints-studio-field{margin-bottom:var(--pgn-exemplar-xblock-studio-field-gap,16px)}.xblock-keypoints-studio .tab-content{flex:auto;min-height:0}", Sg = (e, t, n) => {
	f({
		runtime: e,
		element: t,
		config: n.config,
		styles: xg
	})(/* @__PURE__ */ (0, B.jsx)(gg.Provider, {
		value: n.config,
		children: /* @__PURE__ */ (0, B.jsx)(bg, { data: n.data })
	}));
};
export { Sg as renderBlock };
