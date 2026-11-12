import { A as e, E as t, H as n, L as r, M as i, P as a, T as o, V as s, W as c, b as l, c as u, i as d, j as f, l as p, n as m, o as h, s as g, t as ee, u as _ } from "./ModalLayer-BzZPQHXH.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Container.js
var v = /* @__PURE__ */ c(i()), y = /* @__PURE__ */ c(n()), b = [
	"bsPrefix",
	"fluid",
	"as",
	"className"
], te = { fluid: !1 }, x = /* @__PURE__ */ y.forwardRef(function(n, r) {
	var i = n.bsPrefix, a = n.fluid, o = n.as, s = o === void 0 ? "div" : o, c = n.className, l = e(n, b), u = t(i, "container"), d = typeof a == "string" ? "-" + a : "-fluid";
	return /* @__PURE__ */ y.createElement(s, f({ ref: r }, l, { className: (0, v.default)(c, a ? "" + u + d : u) }));
});
x.displayName = "Container", x.defaultProps = te;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var S = /* @__PURE__ */ c(o()), C = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
S.default.string, S.default.bool, S.default.bool, S.default.bool, S.default.bool;
var w = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, T = /* @__PURE__ */ y.forwardRef(function(n, r) {
	var i = n.bsPrefix, a = n.className, o = n.fluid, s = n.rounded, c = n.roundedCircle, l = n.thumbnail, u = e(n, C);
	i = t(i, "img");
	var d = (0, v.default)(o && i + "-fluid", s && "rounded", c && "rounded-circle", l && i + "-thumbnail");
	return /* @__PURE__ */ y.createElement("img", f({ ref: r }, u, { className: (0, v.default)(a, d) }));
});
T.displayName = "Image", T.defaultProps = w;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var E = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], D = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], ne = { noGutters: !1 }, O = /* @__PURE__ */ y.forwardRef(function(n, r) {
	var i = n.bsPrefix, a = n.className, o = n.noGutters, s = n.as, c = s === void 0 ? "div" : s, l = e(n, E), u = t(i, "row"), d = u + "-cols", p = [];
	return D.forEach(function(e) {
		var t = l[e];
		delete l[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && p.push("" + d + r + "-" + n);
	}), /* @__PURE__ */ y.createElement(c, f({ ref: r }, l, { className: v.default.apply(void 0, [
		a,
		u,
		o && "no-gutters"
	].concat(p)) }));
});
O.displayName = "Row", O.defaultProps = ne;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/breakpoints.js
var { sm: k, md: A, lg: j, xl: M, xxl: N } = {
	xs: "0",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px"
}, P = {
	extraSmall: { maxWidth: parseFloat(k) || 575.98 },
	small: {
		minWidth: parseFloat(k) || 576,
		maxWidth: parseFloat(A) || 767.98
	},
	medium: {
		minWidth: parseFloat(A) || 768,
		maxWidth: parseFloat(j) || 991.98
	},
	large: {
		minWidth: parseFloat(j) || 992,
		maxWidth: parseFloat(M) || 1199.98
	},
	extraLarge: {
		minWidth: parseFloat(M) || 1200,
		maxWidth: parseFloat(N) || 1399.98
	},
	extraExtraLarge: { minWidth: parseFloat(N) || 1400 }
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
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/icons/es5/ArrowForward.js
var F = (e) => /* @__PURE__ */ y.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ y.createElement("path", {
	d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
	fill: "currentColor"
})), I = (e) => /* @__PURE__ */ y.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ y.createElement("path", {
	d: "M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z",
	fill: "currentColor"
})), re = (e) => /* @__PURE__ */ y.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ y.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42Z",
	fill: "currentColor"
})), L = (e) => /* @__PURE__ */ y.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ y.createElement("path", {
	d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z",
	fill: "currentColor"
})), R = (e) => /* @__PURE__ */ y.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ y.createElement("path", {
	d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z",
	fill: "currentColor"
})), ie = (e) => /* @__PURE__ */ y.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ y.createElement("path", {
	d: "M1 21h22L12 2 1 21Zm12-3h-2v-2h2v2Zm0-4h-2v-4h2v4Z",
	fill: "currentColor"
})), z = /* @__PURE__ */ function(e) {
	return e.xs = "container-mw-xs", e.sm = "container-mw-sm", e.md = "container-mw-md", e.lg = "container-mw-lg", e.xl = "container-mw-xl", e;
}(z || {}), B = /* @__PURE__ */ (0, y.forwardRef)(({ size: e, children: t, as: n = "div", bsPrefix: r = "container", fluid: i = !0, ...a }, o) => /* @__PURE__ */ y.createElement(x, {
	...a,
	as: n,
	bsPrefix: r,
	fluid: i,
	ref: o,
	className: (0, v.default)(a.className, e && z[e])
}, t));
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useWindowSizeHook.js
function V() {
	let [e, t] = (0, y.useState)({
		width: void 0,
		height: void 0
	});
	return (0, y.useLayoutEffect)(() => {
		function e() {
			t({
				width: globalThis.innerWidth,
				height: globalThis.innerHeight
			});
		}
		return globalThis.addEventListener("resize", e), e(), () => globalThis.removeEventListener("resize", e);
	}, []), e;
}
//#endregion
//#region src/unfolding-scenario-block/student-ui/components/Intro.tsx
var H = r(), U = ({ name: e, introduction: t, onLaunch: n, activityOpen: r }) => {
	let i = (V().width || window.innerWidth) < P.extraSmall.maxWidth;
	return /* @__PURE__ */ (0, H.jsx)("div", {
		className: "rounded-lg overflow-hidden scenario-intro bg-interact-default",
		children: /* @__PURE__ */ (0, H.jsxs)(O, {
			className: "p-0",
			children: [/* @__PURE__ */ (0, H.jsxs)(l, {
				xs: "12",
				lg: "8",
				className: "p-5 d-flex flex-column",
				children: [
					/* @__PURE__ */ (0, H.jsxs)("div", {
						className: "scenario-name border border-primary d-flex align-items-center p-3 mb-5",
						children: [/* @__PURE__ */ (0, H.jsx)("div", {
							className: "border-right",
							children: /* @__PURE__ */ (0, H.jsx)(_, {
								src: I,
								className: "mr-2"
							})
						}), /* @__PURE__ */ (0, H.jsx)("span", {
							className: "ml-3 small-heading",
							children: e
						})]
					}),
					/* @__PURE__ */ (0, H.jsx)("h4", {
						className: "text-interact-accent",
						children: t.heading
					}),
					/* @__PURE__ */ (0, H.jsx)("div", {
						className: "flex-grow-1 text-sec-content",
						dangerouslySetInnerHTML: { __html: t.description }
					}),
					/* @__PURE__ */ (0, H.jsx)("div", {
						className: "d-flex justify-content-end",
						children: /* @__PURE__ */ (0, H.jsx)(p, {
							variant: "unfolding-scenario-action",
							className: `rounded-pill mt-4 ${i ? "w-100" : ""}`,
							onClick: n,
							disabled: r,
							block: i,
							children: "Launch Interactive"
						})
					})
				]
			}), /* @__PURE__ */ (0, H.jsx)(l, {
				xs: "12",
				lg: "4",
				className: "p-0",
				children: /* @__PURE__ */ (0, H.jsx)(T, {
					src: t.imageURL,
					style: {
						objectFit: "cover",
						width: "100%",
						height: "100%"
					}
				})
			})]
		})
	});
}, W = ({ option: e, interactionType: t, isContinueEnabled: n, onContinue: r, onReturn: i }) => {
	let a = V().width || window.innerWidth;
	return /* @__PURE__ */ (0, H.jsx)("div", {
		className: `option-feedback-wrapper position-fixed fixed-top fixed-bottom w-100 h-100 bg-interact-raised ${a < P.extraSmall.maxWidth ? "p-4" : "p-4-5"}`,
		children: /* @__PURE__ */ (0, H.jsxs)("div", {
			className: "w-100 h-100 position-relative d-flex flex-column justify-content-center",
			children: [
				/* @__PURE__ */ (0, H.jsx)("p", {
					className: "text-interact-headings font-size-md font-weight-bold",
					children: e.value
				}),
				/* @__PURE__ */ (0, H.jsx)(G, { option: e }),
				/* @__PURE__ */ (0, H.jsx)(h, {
					className: "text-icon-action-sec-neutral",
					src: L,
					alt: "Return",
					onClick: i
				}),
				t == "SelectOne" && /* @__PURE__ */ (0, H.jsx)("div", {
					className: "position-absolute w-100 text-right",
					style: { bottom: 0 },
					children: /* @__PURE__ */ (0, H.jsx)(p, {
						variant: "unfolding-scenario-action",
						className: `rounded-pill ${a < P.extraSmall.maxWidth ? "w-100" : ""}`,
						disabled: !n,
						onClick: r,
						children: "Continue"
					})
				})
			]
		})
	});
}, G = ({ option: e }) => {
	let t = null, n = "", r = "";
	switch (e.type) {
		case "Correct":
			t = re, n = "Correct", r = "positive";
			break;
		case "Incorrect":
			t = u, n = "Incorrect", r = "negative";
			break;
		case "Warning": t = ie, n = "Warning", r = "warning";
	}
	return /* @__PURE__ */ (0, H.jsxs)(H.Fragment, { children: [/* @__PURE__ */ (0, H.jsxs)("p", {
		className: "d-flex",
		children: [/* @__PURE__ */ (0, H.jsx)(_, {
			src: t,
			className: `text-icon-interact-${r} mr-2`
		}), /* @__PURE__ */ (0, H.jsx)("span", {
			className: `text-feedback-${r}`,
			children: n
		})]
	}), /* @__PURE__ */ (0, H.jsx)("p", {
		className: "text-interact-content",
		children: e.feedback
	})] });
}, K = ({ scenarios: e, selectedOptions: t }) => /* @__PURE__ */ (0, H.jsx)(B, {
	fluid: !0,
	children: e.map((e, n) => {
		let r = e.options[t.get(n)];
		return /* @__PURE__ */ (0, H.jsxs)(O, {
			className: "outcome-option-row",
			children: [/* @__PURE__ */ (0, H.jsxs)(l, {
				xs: "12",
				md: "6",
				className: "bg-interact-raised rounded-lg p-3",
				children: [/* @__PURE__ */ (0, H.jsxs)("p", {
					className: "font-weight-bold text-interact-headings",
					children: ["Step ", n + 1]
				}), /* @__PURE__ */ (0, H.jsx)("p", {
					className: "text-interact-content",
					children: r.value
				})]
			}), /* @__PURE__ */ (0, H.jsx)(l, {
				xs: "12",
				md: "6",
				className: "pt-4",
				children: /* @__PURE__ */ (0, H.jsx)(G, { option: r })
			})]
		});
	})
}), q = ({ outcome: e, scenarios: t, selectedOptions: n, onRestart: r, onExit: i, imageURL: a }) => {
	let o = V().width || window.innerWidth, s = "desktop";
	return o < P.extraSmall.maxWidth ? s = "mobile" : o < P.large.maxWidth && (s = "tablet"), /* @__PURE__ */ (0, H.jsxs)("div", {
		className: "d-flex flex-grow-1 flex-wrap",
		children: [/* @__PURE__ */ (0, H.jsxs)("div", {
			className: "p-4-5 bg-interact-default",
			style: { flex: `0 0 ${s == "desktop" ? "60%" : "100%"}` },
			children: [
				/* @__PURE__ */ (0, H.jsx)("p", {
					className: "font-size-lg font-weight-bold text-interact-accent",
					children: e.heading
				}),
				/* @__PURE__ */ (0, H.jsx)("div", {
					className: "text-interact-content pb-3",
					dangerouslySetInnerHTML: { __html: e.description }
				}),
				e.displaySelectedOptions && /* @__PURE__ */ (0, H.jsx)(K, {
					scenarios: t,
					selectedOptions: n
				})
			]
		}), /* @__PURE__ */ (0, H.jsx)("div", {
			className: "d-flex flex-column",
			style: {
				flex: `0 0 ${s == "desktop" ? "40%" : "100%"}`,
				backgroundImage: `linear-gradient(to bottom, transparent 60%, #FFF), url("${a}")`,
				backgroundSize: "cover",
				minHeight: "10rem"
			},
			children: /* @__PURE__ */ (0, H.jsxs)("div", {
				className: "fixed-bottom align-content-end text-right p-4-5",
				children: [/* @__PURE__ */ (0, H.jsxs)(p, {
					variant: "outline-unfolding-scenario-action",
					className: `rounded-pill ${s == "mobile" ? "w-100 mb-3" : ""}`,
					onClick: r,
					block: s == "mobile",
					children: ["Restart ", /* @__PURE__ */ (0, H.jsx)(_, { src: R })]
				}), /* @__PURE__ */ (0, H.jsxs)(p, {
					variant: "unfolding-scenario-action",
					className: `rounded-pill ${s == "mobile" ? "w-100" : "ml-3"}`,
					onClick: i,
					block: s == "mobile",
					children: ["Exit ", /* @__PURE__ */ (0, H.jsx)(_, { src: g })]
				})]
			})
		})]
	});
}, J = ({ index: e, total: t, onReset: n, className: r }) => /* @__PURE__ */ (0, H.jsxs)("div", {
	className: `align-items-center justify-content-center bg-main ${r}`,
	children: [
		/* @__PURE__ */ (0, H.jsx)(h, {
			className: "text-icon-action-default bg-main mr-3",
			src: R,
			onClick: n,
			alt: "Reset activity",
			size: "inline"
		}),
		Array.from(Array(t)).map((n, r) => /* @__PURE__ */ (0, H.jsxs)(H.Fragment, { children: [/* @__PURE__ */ (0, H.jsx)("div", {
			className: `step-indicator d-flex justify-content-center align-items-center rounded-pill p-1 ${r <= e ? "bg-icon-default text-interact-content" : "bg-emphasis text-content"}`,
			children: r + 1
		}), r < t - 1 && /* @__PURE__ */ (0, H.jsx)("div", { className: "step-indicator-separator" })] })),
		e >= t && /* @__PURE__ */ (0, H.jsx)("span", {
			className: "ml-4 text-content font-size-md font-weight-bold",
			children: "Completed!"
		})
	]
}), Y = ({ onClose: e }) => /* @__PURE__ */ (0, H.jsx)(h, {
	className: "text-icon-action-sec-neutral",
	src: g,
	onClick: e,
	alt: "Close activity"
}), ae = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, H.jsx)("div", {
	className: "sticky-top d-flex w-100 bg-interact-default",
	children: /* @__PURE__ */ (0, H.jsx)(B, {
		fluid: !0,
		children: /* @__PURE__ */ (0, H.jsxs)(O, {
			className: "px-3",
			children: [
				/* @__PURE__ */ (0, H.jsx)(l, {
					className: "d-flex align-items-center mx-3 small-heading text-interact-headings",
					children: t
				}),
				/* @__PURE__ */ (0, H.jsx)(l, {
					className: "d-flex justify-content-center",
					children: /* @__PURE__ */ (0, H.jsx)(J, {
						onReset: n,
						index: r,
						total: i,
						className: "d-inline-flex rounded-lg-bottom py-3 pl-2 pr-3"
					})
				}),
				/* @__PURE__ */ (0, H.jsx)(l, {
					className: "d-flex justify-content-end align-items-center mx-3",
					children: /* @__PURE__ */ (0, H.jsx)(Y, { onClose: e })
				})
			]
		})
	})
}), oe = ({ onClose: e, title: t, activeScenarioIndex: n, totalScenarios: r }) => /* @__PURE__ */ (0, H.jsx)("div", {
	className: "sticky-top d-flex mx-2 pt-4 pb-2 bg-interact-default",
	children: /* @__PURE__ */ (0, H.jsxs)(B, {
		fluid: !0,
		className: "d-flex align-items-center",
		children: [
			/* @__PURE__ */ (0, H.jsx)(se, {
				current: Math.min(n + 1, r),
				total: r
			}),
			/* @__PURE__ */ (0, H.jsxs)("div", {
				className: "px-2 mx-1 flex-grow-1",
				children: [/* @__PURE__ */ (0, H.jsx)("div", {
					className: "typography-headings font-weight-bold font-size-md text-interact-headings",
					children: t
				}), n >= r && /* @__PURE__ */ (0, H.jsx)("div", {
					className: "text-interact-accent font-size-sm-md font-weight-lessbold typography-headings mt-n1",
					children: "Completed!"
				})]
			}),
			/* @__PURE__ */ (0, H.jsx)(Y, { onClose: e })
		]
	})
}), se = ({ current: e, total: t }) => {
	let n = 52 * Math.PI, r = n * (1 - e / t);
	return /* @__PURE__ */ (0, H.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: 56,
		height: 56,
		children: [
			/* @__PURE__ */ (0, H.jsx)("circle", {
				r: 26,
				cx: 28,
				cy: 28,
				fill: "none",
				stroke: "var(--color-interact-raised-emphasis)",
				"stroke-width": 4,
				"stroke-dashoffset": n - r,
				"stroke-dasharray": n,
				transform: `rotate(${e / t * 360 - 90} 28 28)`
			}),
			/* @__PURE__ */ (0, H.jsx)("circle", {
				r: 26,
				cx: 28,
				cy: 28,
				fill: "none",
				stroke: "var(--color-interact-emphasis)",
				"stroke-width": 4,
				"stroke-dashoffset": r,
				"stroke-dasharray": n,
				transform: "rotate(-90 28 28)"
			}),
			/* @__PURE__ */ (0, H.jsx)("foreignObject", {
				x: "0",
				y: "0",
				width: 56,
				height: 56,
				children: /* @__PURE__ */ (0, H.jsxs)("div", {
					className: "h-100 d-flex justify-content-center align-items-center text-interact-content font-size-sm",
					children: [
						e,
						" of ",
						t
					]
				})
			})
		]
	});
}, ce = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, H.jsx)("div", {
	className: "sticky-top d-flex w-100 pb-2 bg-interact-default",
	children: /* @__PURE__ */ (0, H.jsxs)(B, {
		className: "mx-3",
		fluid: !0,
		children: [/* @__PURE__ */ (0, H.jsxs)(O, { children: [/* @__PURE__ */ (0, H.jsx)(l, {
			className: "d-flex align-items-center small-heading text-interact-headings",
			children: t
		}), /* @__PURE__ */ (0, H.jsx)(l, {
			className: "d-flex justify-content-end align-items-center",
			children: /* @__PURE__ */ (0, H.jsx)(Y, { onClose: e })
		})] }), /* @__PURE__ */ (0, H.jsx)(O, { children: /* @__PURE__ */ (0, H.jsx)(l, {
			className: "d-flex justify-content-center",
			children: /* @__PURE__ */ (0, H.jsx)(J, {
				onReset: n,
				index: r,
				total: i,
				className: "d-flex w-100 p-3 rounded-lg"
			})
		}) })]
	})
}), le = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => {
	let a = V().width || window.innerWidth;
	return a < P.extraSmall.maxWidth ? /* @__PURE__ */ (0, H.jsx)(oe, {
		onClose: e,
		title: t,
		activeScenarioIndex: r,
		totalScenarios: i
	}) : a < P.large.maxWidth ? /* @__PURE__ */ (0, H.jsx)(ce, {
		onClose: e,
		title: t,
		onReset: n,
		activeScenarioIndex: r,
		totalScenarios: i
	}) : /* @__PURE__ */ (0, H.jsx)(ae, {
		onClose: e,
		title: t,
		onReset: n,
		activeScenarioIndex: r,
		totalScenarios: i
	});
}, X = ({ onClick: e, children: t, active: n, preSelected: r }) => /* @__PURE__ */ (0, H.jsxs)("button", {
	className: `scenario-option-btn rounded-sm d-flex justify-content-start border-0 overflow-hidden align-items-center p-0 mb-3 ${n ? "text-interact-content-inverse bg-interact-raised-emphasis active" : "bg-interact-raised text-interact-content"} ${r ? "pre-selected" : ""}`,
	onClick: e,
	children: [/* @__PURE__ */ (0, H.jsx)("div", {
		className: "flex-grow-1 text-left mx-3 px-3 my-3",
		children: t
	}), /* @__PURE__ */ (0, H.jsx)("div", {
		className: "h-100 bg-interact-raised-emphasis d-flex align-items-center hover-arrow",
		children: /* @__PURE__ */ (0, H.jsx)(_, {
			src: F,
			size: "lg",
			className: "text-icon-inverse mx-3"
		})
	})]
}), ue = ({ scenario: e, activeOptionIndex: t, preSelectedOptions: n, isContinueEnabled: r, onContinue: i, onSelectOption: a }) => /* @__PURE__ */ (0, H.jsx)("div", {
	className: "pt-3 mx-3 h-100",
	children: /* @__PURE__ */ (0, H.jsxs)("div", {
		className: "position-relative w-100 h-100",
		style: { overflowX: "hidden" },
		children: [
			/* @__PURE__ */ (0, H.jsx)("div", {
				className: `d-flex h-100 w-50 position-absolute align-items-center ${t === null ? "" : "active"} options-pane options-pane-1`,
				children: /* @__PURE__ */ (0, H.jsxs)("div", { children: [
					/* @__PURE__ */ (0, H.jsx)("p", {
						className: "font-size-lg font-weight-bold text-interact-accent",
						children: e.heading
					}),
					/* @__PURE__ */ (0, H.jsx)("div", {
						className: "text-interact-content pb-3",
						dangerouslySetInnerHTML: { __html: e.description }
					}),
					/* @__PURE__ */ (0, H.jsxs)("div", {
						className: "d-flex align-items-center mt-3 mb-2",
						children: [/* @__PURE__ */ (0, H.jsx)("div", {
							className: "arrow-bubble p-2 text-icon-interact-default",
							children: /* @__PURE__ */ (0, H.jsx)(_, { src: I })
						}), /* @__PURE__ */ (0, H.jsx)("span", {
							className: "text-interact-headings font-size-medium font-weight-bold pl-2",
							children: e.instructionTitle
						})]
					}),
					/* @__PURE__ */ (0, H.jsx)("div", {
						className: "text-interact-content",
						dangerouslySetInnerHTML: { __html: e.instructionDescription }
					})
				] })
			}),
			/* @__PURE__ */ (0, H.jsxs)("div", {
				className: `d-flex w-50 h-100 position-absolute align-items-center ${t === null ? "" : "active"} options-pane options-pane-2`,
				children: [t !== null && /* @__PURE__ */ (0, H.jsx)("div", {
					className: "d-flex mr-3 align-items-center",
					children: /* @__PURE__ */ (0, H.jsx)(h, {
						className: "text-icon-action-sec-neutral",
						src: L,
						alt: "Return",
						onClick: () => a(null)
					})
				}), /* @__PURE__ */ (0, H.jsxs)("div", {
					className: "flex-grow-1",
					children: [
						/* @__PURE__ */ (0, H.jsx)("p", {
							className: "text-interact-headings font-size-md font-weight-bold",
							children: e.prompt
						}),
						/* @__PURE__ */ (0, H.jsx)("div", {
							className: "d-flex flex-column flex-grow-1",
							children: e.options.map((e, r) => /* @__PURE__ */ (0, H.jsx)(X, {
								active: t === r,
								onClick: () => a(r),
								preSelected: n.has(r),
								children: e.value
							}))
						}),
						/* @__PURE__ */ (0, H.jsx)("div", {
							className: "d-flex justify-content-end",
							children: /* @__PURE__ */ (0, H.jsx)(p, {
								variant: "unfolding-scenario-action",
								className: "rounded-pill",
								disabled: !r,
								onClick: i,
								children: "Continue"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, H.jsx)("div", {
				className: `w-50 h-100 p-6 position-absolute d-flex align-items-center ${t === null ? "" : "active"} options-pane options-pane-3`,
				children: t === null ? null : /* @__PURE__ */ (0, H.jsx)(G, { option: e.options[t] })
			})
		]
	})
}), de = ({ interactionType: e, scenario: t, activeOptionIndex: n, preSelectedOptions: r, isContinueEnabled: i, onContinue: a, onSelectOption: o }) => /* @__PURE__ */ (0, H.jsxs)("div", {
	className: "position-relative w-100 h-100",
	style: { overflowX: "hidden" },
	children: [/* @__PURE__ */ (0, H.jsxs)("div", {
		className: `w-100 h-100 position-absolute p-4 d-flex flex-column ${n === null ? "" : "active"} tablet-options-pane tablet-options-pane-1`,
		children: [
			/* @__PURE__ */ (0, H.jsxs)("div", { children: [
				/* @__PURE__ */ (0, H.jsx)("p", {
					className: "font-size-lg font-weight-bold text-interact-accent",
					children: t.heading
				}),
				/* @__PURE__ */ (0, H.jsx)("div", {
					className: "text-interact-content pb-3",
					dangerouslySetInnerHTML: { __html: t.description }
				}),
				/* @__PURE__ */ (0, H.jsxs)("div", {
					className: "d-flex align-items-center mt-3 mb-2",
					children: [/* @__PURE__ */ (0, H.jsx)("div", {
						className: "arrow-bubble p-2 text-icon-interact-default",
						children: /* @__PURE__ */ (0, H.jsx)(_, { src: I })
					}), /* @__PURE__ */ (0, H.jsx)("span", {
						className: "text-interact-headings font-size-medium font-weight-bold pl-2",
						children: t.instructionTitle
					})]
				})
			] }),
			/* @__PURE__ */ (0, H.jsx)("div", {
				className: "text-interact-content",
				dangerouslySetInnerHTML: { __html: t.instructionDescription }
			}),
			/* @__PURE__ */ (0, H.jsxs)("div", {
				className: "flex-grow-1",
				children: [/* @__PURE__ */ (0, H.jsx)("p", {
					className: "text-interact-headings font-size-md font-weight-bold",
					children: t.prompt
				}), /* @__PURE__ */ (0, H.jsx)("div", {
					className: "d-flex flex-column flex-grow-1",
					children: t.options.map((e, t) => /* @__PURE__ */ (0, H.jsx)(X, {
						active: n === t,
						onClick: () => o(t),
						preSelected: r.has(t),
						children: e.value
					}))
				})]
			}),
			e != "SelectOne" && /* @__PURE__ */ (0, H.jsx)("div", {
				className: "d-flex justify-content-end",
				children: /* @__PURE__ */ (0, H.jsx)(p, {
					variant: "unfolding-scenario-action",
					className: "rounded-pill",
					disabled: !i,
					onClick: a,
					children: "Continue"
				})
			})
		]
	}), /* @__PURE__ */ (0, H.jsx)("div", {
		className: `w-100 h-100 position-absolute d-flex flex-column justify-content-center p-4-5 bg-interact-raised ${n === null ? "" : "active"} tablet-options-pane tablet-options-pane-2`,
		children: n !== null && /* @__PURE__ */ (0, H.jsxs)(H.Fragment, { children: [/* @__PURE__ */ (0, H.jsx)(W, {
			option: t.options[n],
			interactionType: e,
			isContinueEnabled: i,
			onContinue: a,
			onReturn: () => o(null)
		}), e == "SelectOne" && /* @__PURE__ */ (0, H.jsx)("div", {
			className: "d-flex justify-content-end",
			children: /* @__PURE__ */ (0, H.jsx)(p, {
				variant: "unfolding-scenario-action",
				className: "rounded-pill",
				disabled: !i,
				onClick: a,
				children: "Continue"
			})
		})] })
	})]
}), fe = ({ interactionType: e, scenario: t, activeOptionIndex: n, preSelectedOptions: r, isContinueEnabled: i, onContinue: a, onSelectOption: o }) => {
	let [s, c] = (0, y.useState)("description");
	return s == "description" ? /* @__PURE__ */ (0, H.jsx)(pe, {
		scenario: t,
		onNext: () => c("options")
	}) : /* @__PURE__ */ (0, H.jsx)(me, {
		interactionType: e,
		scenario: t,
		activeOptionIndex: n,
		isContinueEnabled: i,
		onContinue: a,
		onSelectOption: o,
		preSelectedOptions: r,
		onBack: () => c("description")
	});
}, pe = ({ scenario: e, onNext: t }) => /* @__PURE__ */ (0, H.jsx)("div", {
	className: "d-flex flex-column h-100 w-100",
	children: /* @__PURE__ */ (0, H.jsxs)("div", {
		className: "d-flex flex-column pt-4 px-4 flex-grow-1 w-100 bg-interact-default",
		children: [
			/* @__PURE__ */ (0, H.jsx)("p", {
				className: "font-size-lg font-weight-bold text-interact-accent",
				children: e.heading
			}),
			/* @__PURE__ */ (0, H.jsx)("div", {
				className: "text-interact-content pb-3",
				dangerouslySetInnerHTML: { __html: e.description }
			}),
			/* @__PURE__ */ (0, H.jsxs)("div", {
				className: "d-flex align-items-center mt-3 mb-2",
				children: [/* @__PURE__ */ (0, H.jsx)("div", {
					className: "arrow-bubble p-2 text-icon-interact-default",
					children: /* @__PURE__ */ (0, H.jsx)(_, { src: I })
				}), /* @__PURE__ */ (0, H.jsx)("span", {
					className: "text-interact-headings font-size-medium font-weight-bold pl-2",
					children: e.instructionTitle
				})]
			}),
			/* @__PURE__ */ (0, H.jsx)("div", {
				className: "text-interact-content",
				dangerouslySetInnerHTML: { __html: e.instructionDescription }
			}),
			/* @__PURE__ */ (0, H.jsx)("div", {
				className: "d-flex flex-column justify-content-end flex-grow-1 w-100 bg-interact-default",
				children: /* @__PURE__ */ (0, H.jsx)(p, {
					variant: "unfolding-scenario-action",
					className: "rounded-pill w-100 mb-4",
					onClick: t,
					children: "Continue"
				})
			})
		]
	})
}), me = ({ interactionType: e, scenario: t, activeOptionIndex: n, preSelectedOptions: r, isContinueEnabled: i, onContinue: a, onSelectOption: o, onBack: s }) => /* @__PURE__ */ (0, H.jsxs)("div", {
	className: "p-4 h-100 w-100 d-flex flex-column bg-interact-default",
	children: [
		/* @__PURE__ */ (0, H.jsx)(h, {
			className: "text-icon-action-sec-neutral",
			src: L,
			alt: "Return",
			onClick: s
		}),
		/* @__PURE__ */ (0, H.jsx)("p", {
			className: "text-interact-headings font-size-md font-weight-bold",
			children: t.prompt
		}),
		/* @__PURE__ */ (0, H.jsx)("div", {
			className: "d-flex flex-column flex-grow-1",
			children: t.options.map((e, t) => /* @__PURE__ */ (0, H.jsx)(X, {
				active: n === t,
				onClick: () => o(t),
				preSelected: r.has(t),
				children: e.value
			}))
		}),
		e != "SelectOne" && /* @__PURE__ */ (0, H.jsx)(p, {
			variant: "unfolding-scenario-action",
			className: "rounded-pill w-100",
			disabled: !i,
			onClick: a,
			children: "Continue"
		}),
		n === null ? null : /* @__PURE__ */ (0, H.jsx)(W, {
			interactionType: e,
			isContinueEnabled: i,
			onContinue: a,
			option: t.options[n],
			onReturn: () => o(null)
		})
	]
}), he = ({ interactionType: e, scenario: t, onContinue: n, onSelectOption: r }) => {
	let i = V(), [a, o] = (0, y.useState)(null), [s, c] = (0, y.useState)(/* @__PURE__ */ new Set()), l = e == "Explore" && s.size == t.options.length || e == "SelectOne" && a !== null, u = i.width || window.innerWidth;
	return u < P.extraSmall.maxWidth ? /* @__PURE__ */ (0, H.jsx)(fe, {
		interactionType: e,
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(new Set([...s, e])), o(e), r(e));
		}
	}) : u < P.large.maxWidth ? /* @__PURE__ */ (0, H.jsx)(de, {
		interactionType: e,
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(new Set([...s, e])), o(e), r(e));
		}
	}) : /* @__PURE__ */ (0, H.jsx)(ue, {
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(new Set([...s, e])), o(e), r(e));
		}
	});
}, Z = ({ onCancel: e, title: t, children: n }) => /* @__PURE__ */ (0, H.jsx)(d, {
	allowPinchZoom: !0,
	scrollLock: !0,
	enabled: !0,
	onEscapeKey: e,
	onClickOutside: e,
	className: "pgn__modal-layer",
	children: /* @__PURE__ */ (0, H.jsxs)(m, { children: [/* @__PURE__ */ (0, H.jsx)(ee, { onClick: e }), /* @__PURE__ */ (0, H.jsx)("div", {
		role: "dialog",
		"aria-label": t,
		className: "pgn__modal pgn__modal-md pgn__modal-default p-3",
		children: n
	})] })
}), ge = ({ onCancel: e, onConfirm: t }) => {
	let n = (V().width || window.innerWidth) < P.extraSmall.maxWidth;
	return /* @__PURE__ */ (0, H.jsx)(Z, {
		onCancel: e,
		title: "Leave interactive?",
		children: /* @__PURE__ */ (0, H.jsxs)("div", {
			className: "m-3",
			children: [
				/* @__PURE__ */ (0, H.jsx)("p", {
					className: "font-size-md text-interact-headings font-weight-bold",
					children: "Leave interactive?"
				}),
				/* @__PURE__ */ (0, H.jsx)("p", {
					className: "text-sec-content",
					children: "If you leave now, your progress in this interactive will be lost."
				}),
				/* @__PURE__ */ (0, H.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, H.jsx)(p, {
						variant: "outline-unfolding-scenario-action",
						className: `rounded-pill ${n ? "w-100 mb-3" : ""}`,
						onClick: t,
						block: n,
						children: "Leave"
					}), /* @__PURE__ */ (0, H.jsx)(p, {
						variant: "unfolding-scenario-action",
						className: `rounded-pill ${n ? "w-100" : "ml-3"}`,
						onClick: e,
						block: n,
						children: "Stay"
					})]
				})
			]
		})
	});
}, _e = ({ onCancel: e, onConfirm: t }) => {
	let n = (V().width || window.innerWidth) < P.extraSmall.maxWidth;
	return /* @__PURE__ */ (0, H.jsx)(Z, {
		onCancel: e,
		title: "Restart interactive?",
		children: /* @__PURE__ */ (0, H.jsxs)("div", {
			className: "m-3",
			children: [
				/* @__PURE__ */ (0, H.jsx)("p", {
					className: "font-size-md text-interact-headings font-weight-bold",
					children: "Restart interactive?"
				}),
				/* @__PURE__ */ (0, H.jsx)("p", {
					className: "text-sec-content",
					children: "If you restart, your progress in this interactive will be lost."
				}),
				/* @__PURE__ */ (0, H.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, H.jsx)(p, {
						variant: "outline-unfolding-scenario-action",
						className: `rounded-pill ${n ? "w-100 mb-3" : ""}`,
						onClick: t,
						block: n,
						children: "Restart"
					}), /* @__PURE__ */ (0, H.jsx)(p, {
						variant: "unfolding-scenario-action",
						className: `rounded-pill ${n ? "w-100" : "ml-3"}`,
						onClick: e,
						block: n,
						children: "Stay"
					})]
				})
			]
		})
	});
}, Q = ({ data: e, onExit: t }) => {
	let [n, r] = (0, y.useState)(0), [i, a] = (0, y.useState)(null), [o, s] = (0, y.useState)(/* @__PURE__ */ new Map());
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		className: "unfolding-scenario-activity-wrapper min-vh-100 bg-interact-default d-flex flex-column",
		children: [
			/* @__PURE__ */ (0, H.jsx)(le, {
				onClose: () => a("leave"),
				title: e.name,
				onReset: () => a("restart"),
				activeScenarioIndex: n,
				totalScenarios: e.scenarios.length
			}),
			n < e.scenarios.length ? /* @__PURE__ */ (0, H.jsx)(he, {
				scenario: e.scenarios[n],
				interactionType: e.interactionType,
				onContinue: () => {
					(0, y.startTransition)(() => {
						r(n + 1);
					});
				},
				onSelectOption: (e) => s(new Map(o).set(n, e))
			}, n) : e.outcome && /* @__PURE__ */ (0, H.jsx)(q, {
				outcome: e.outcome,
				scenarios: e.scenarios,
				selectedOptions: o,
				onRestart: () => a("restart"),
				onExit: () => a("leave"),
				imageURL: e.introduction.imageURL
			}),
			i == "leave" && /* @__PURE__ */ (0, H.jsx)(ge, {
				onConfirm: t,
				onCancel: () => a(null)
			}),
			i == "restart" && /* @__PURE__ */ (0, H.jsx)(_e, {
				onConfirm: () => {
					r(0), a(null);
				},
				onCancel: () => a(null)
			})
		]
	});
}, ve = /* @__PURE__ */ c(s(), 1), ye = ({ children: e, className: t, cssContent: n, themeUrls: r, title: i, onClose: a }) => {
	let [o, s] = (0, y.useState)(null);
	if (o === null) {
		let e = document.createElement("div");
		e.className = t, s(e);
	}
	return (0, y.useEffect)(() => {
		if (o) {
			let e = window.open();
			if (e == null) {
				alert("Activity failed to open in a popup window or new tab. Please enable popups and try again."), a();
				return;
			}
			e.addEventListener("beforeunload", () => {
				a();
			});
			let t = e.document.createElement("meta");
			t.name = "viewport", t.content = "width=device-width,initial-scale=1", e.document.head.appendChild(t);
			let s = e.document.createElement("title");
			s.textContent = i, e.document.head.appendChild(s), e.document.body.appendChild(o), r.forEach((t) => {
				let n = e.document.createElement("link");
				n.rel = "stylesheet", n.href = t, e.document.head.appendChild(n.cloneNode());
			});
			let c = e.document.createElement("style");
			return c.textContent = n, e.document.head.appendChild(c), () => e.close();
		}
	}, [o]), o && (0, ve.createPortal)(e, o);
}, be = ({ data: e, themeUrls: t, cssContent: n }) => {
	let [r, i] = (0, y.useState)(!1), a = "xblock-unfolding-scenario-wrapper";
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		className: a,
		children: [r && /* @__PURE__ */ (0, H.jsx)(ye, {
			title: e.scenarioData.name,
			className: `${a} min-vh-100`,
			themeUrls: t,
			cssContent: n,
			onClose: () => i(!1),
			children: /* @__PURE__ */ (0, H.jsx)(Q, {
				data: e.scenarioData,
				onExit: () => i(!1)
			})
		}), /* @__PURE__ */ (0, H.jsx)(U, {
			name: e.scenarioData.name,
			introduction: e.scenarioData.introduction,
			onLaunch: () => i(!0),
			activityOpen: r
		})]
	});
}, $ = ".xblock-unfolding-scenario-wrapper{--color-action-default:var(--pgn-unfolding-scenario-color-action-default,#3874bc);--color-background-interactive:var(--pgn-unfolding-scenario-color-background-interactive,#8cc9d1);--color-text-interactive:var(--pgn-unfolding-scenario-color-text-interactive,#2f808e);--color-bg-emphasis:var(--pgn-unfolding-scenario-color-bg-emphasis,#223e5d);--color-bg-main:var(--pgn-unfolding-scenario-color-bg-main,#1b324a);--color-border-interact-default:var(--pgn-unfolding-scenario-color-border-interact-default,#b2d8de);--color-border-interact-emphasis:var(--pgn-unfolding-scenario-color-border-interact-emphasis,#327d8a);--color-border-sec-action-focus:var(--pgn-unfolding-scenario-color-border-sec-action-focus,#0e1d2f);--color-icon-action-sec-default:var(--pgn-unfolding-scenario-color-icon-action-sec-default,#3874bc);--color-icon-interact-default:var(--pgn-unfolding-scenario-color-icon-interact-default,#327d8a);--color-interact-default:var(--pgn-unfolding-scenario-color-interact-default,#ecf5f7);--color-interact-emphasis:var(--pgn-unfolding-scenario-color-interact-emphasis,#d9ebef);--color-interact-raised-emphasis:var(--pgn-unfolding-scenario-color-interact-raised-emphasis,#327d8a);--color-txt-interact-accent:var(--pgn-unfolding-scenario-color-txt-interact-accent,#2a578d);--color-txt-interact-content-inverse:var(--pgn-unfolding-scenario-color-txt-interact-content-inverse,#fff);--color-txt-interact-content:var(--pgn-unfolding-scenario-color-txt-interact-content,#223e5d);--color-txt-interact-headings:var(--pgn-unfolding-scenario-color-txt-interact-headings,#327d8a);--color-txt-action-prim-default:var(--pgn-unfolding-scenario-color-txt-action-prim-default,#fff);--color-txt-content:var(--pgn-unfolding-scenario-color-txt-content,#fff);--color-txt-sec-content:var(--pgn-unfolding-scenario-color-txt-sec-content,#223e5d);--color-icon-action-default:var(--pgn-unfolding-scenario-color-icon-action-default,#fff);--color-border-default:var(--pgn-unfolding-scenario-color-border-default,#4e657d);--color-interact-raised:var(--pgn-unfolding-scenario-color-interact-raised,#fff);--color-icon-inverse:var(--pgn-unfolding-scenario-color-icon-inverse,#fff);--color-icon-default:var(--pgn-unfolding-scenario-color-icon-default,#8cc4ce);--color-icon-action-sec-neutral:var(--pgn-unfolding-scenario-color-icon-action-sec-neutral,#1c3a5e);--color-txt-feedback-negative:var(--pgn-unfolding-scenario-color-txt-feedback-negative,#db493d);--color-icon-interact-negative:var(--pgn-unfolding-scenario-color-icon-interact-negative,#db493d);--color-txt-feedback-positive:var(--pgn-unfolding-scenario-color-txt-feedback-positive,#149418);--color-icon-interact-positive:var(--pgn-unfolding-scenario-color-icon-interact-positive,#149418);--color-txt-feedback-warning:var(--pgn-unfolding-scenario-color-txt-feedback-warning,#ffd900);--color-icon-interact-warning:var(--pgn-unfolding-scenario-color-icon-interact-warning,#ffd900);--btn-min-width:var(--pgn-unfolding-scenario-btn-min-width,200px)}.xblock-unfolding-scenario-wrapper .text-interact-headings{color:var(--color-txt-interact-headings)!important}.xblock-unfolding-scenario-wrapper .text-interact-accent{color:var(--color-txt-interact-accent)!important}.xblock-unfolding-scenario-wrapper .text-interact-content{color:var(--color-txt-interact-content)!important}.xblock-unfolding-scenario-wrapper .text-interact-content-inverse{color:var(--color-txt-interact-content-inverse)!important}.xblock-unfolding-scenario-wrapper .text-content{color:var(--color-txt-content)!important}.xblock-unfolding-scenario-wrapper .text-sec-content{color:var(--color-txt-sec-content)!important}.xblock-unfolding-scenario-wrapper .text-icon-inverse{color:var(--color-icon-inverse)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-default{color:var(--color-icon-action-default)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-sec-default{color:var(--color-icon-action-sec-default)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-sec-neutral{color:var(--color-icon-action-sec-neutral)!important}.xblock-unfolding-scenario-wrapper .text-feedback-negative{color:var(--color-txt-feedback-negative)!important}.xblock-unfolding-scenario-wrapper .text-icon-interact-negative{color:var(--color-icon-interact-negative)!important}.xblock-unfolding-scenario-wrapper .text-feedback-positive{color:var(--color-txt-feedback-positive)!important}.xblock-unfolding-scenario-wrapper .text-icon-interact-positive{color:var(--color-icon-interact-positive)!important}.xblock-unfolding-scenario-wrapper .text-feedback-warning{color:var(--color-txt-feedback-warning)!important}.xblock-unfolding-scenario-wrapper .text-icon-interact-warning{color:var(--color-icon-interact-warning)!important}.xblock-unfolding-scenario-wrapper .bg-interact-raised-emphasis{background-color:var(--color-interact-raised-emphasis)!important}.xblock-unfolding-scenario-wrapper .bg-interact-raised{background-color:var(--color-interact-raised)!important}.xblock-unfolding-scenario-wrapper .bg-emphasis{background-color:var(--color-bg-emphasis)!important}.xblock-unfolding-scenario-wrapper .bg-icon-default{background-color:var(--color-icon-default)!important}.xblock-unfolding-scenario-wrapper .bg-interact-default{background-color:var(--color-interact-default)!important}.xblock-unfolding-scenario-wrapper .bg-main{background-color:var(--color-bg-main)!important}.xblock-unfolding-scenario-wrapper .rounded-lg-bottom{border-bottom-right-radius:var(--pgn-size-border-radius-lg)!important;border-bottom-left-radius:var(--pgn-size-border-radius-lg)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name{color:var(--color-text-interactive);background-color:var(--color-interact-emphasis);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;border-color:var(--color-border-interact-default)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .border-right{border-color:var(--color-border-interact-default)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .pgn__icon{color:var(--color-interact-raised-emphasis);zoom:2}.xblock-unfolding-scenario-wrapper .btn-unfolding-scenario-action{--pgn-btn-bg:var(--color-action-default);--pgn-btn-color:var(--color-txt-action-prim-default);--pgn-btn-hover-bg:var(--color-action-default);--pgn-btn-hover-color:var(--color-txt-action-prim-default);--pgn-btn-focus-bg:var(--color-action-default);--pgn-btn-focus-color:var(--color-txt-action-prim-default);--pgn-btn-focus-outline-color:var(--color-border-sec-action-focus);--pgn-btn-active-bg:var(--color-action-default);--pgn-btn-active-color:var(--color-txt-action-prim-default)}.xblock-unfolding-scenario-wrapper .btn-outline-unfolding-scenario-action{--pgn-size-btn-border-width:2px;--pgn-btn-bg:var(--color-txt-action-prim-default);--pgn-btn-color:var(--color-action-default);--pgn-btn-border-color:var(--color-action-default);--pgn-btn-hover-bg:var(--color-txt-action-prim-default);--pgn-btn-hover-color:var(--color-action-default);--pgn-btn-hover-border-color:var(--color-action-default);--pgn-btn-focus-bg:var(--color-txt-action-prim-default);--pgn-btn-focus-color:var(--color-action-default);--pgn-btn-focus-border-color:var(--color-action-default);--pgn-btn-focus-outline-color:var(--color-action-default);--pgn-btn-active-bg:var(--color-txt-action-prim-default);--pgn-btn-active-color:var(--color-action-default);--pgn-btn-active-border-color:var(--color-action-default)}.xblock-unfolding-scenario-wrapper .btn{min-width:var(--btn-min-width);padding:var(--pgn-spacing-spacer-2-5) var(--pgn-spacing-spacer-4-5)}.xblock-unfolding-scenario-wrapper .small-heading{font-size:calc(var(--pgn-typography-font-size-base) * 1.125);font-family:var(--pgn-typography-headings-font-family);font-weight:var(--pgn-typography-font-weight-bold)}.xblock-unfolding-scenario-wrapper .font-weight-lessbold{font-weight:calc(var(--pgn-typography-font-weight-bold) - 100)}.xblock-unfolding-scenario-wrapper .typography-headings{font-family:var(--pgn-typography-headings-font-family)}.xblock-unfolding-scenario-wrapper .font-size-lg{font-size:calc(var(--pgn-typography-font-size-base) * 1.25)}.xblock-unfolding-scenario-wrapper .font-size-md{font-size:calc(var(--pgn-typography-font-size-base) * 1.125)}.xblock-unfolding-scenario-wrapper .font-size-sm-md{font-size:calc(var(--pgn-typography-font-size-base) * .875)}.xblock-unfolding-scenario-wrapper .font-size-sm{font-size:calc(var(--pgn-typography-font-size-base) * .75)}.xblock-unfolding-scenario-wrapper .m-4-5{margin:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .ml-4-5,.xblock-unfolding-scenario-wrapper .mx-4-5{margin-left:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mr-4-5,.xblock-unfolding-scenario-wrapper .mx-4-5{margin-right:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mt-4-5,.xblock-unfolding-scenario-wrapper .my-4-5{margin-top:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mb-4-5,.xblock-unfolding-scenario-wrapper .my-4-5{margin-bottom:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .p-4-5{padding:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pl-4-5,.xblock-unfolding-scenario-wrapper .px-4-5{padding-left:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pr-4-5,.xblock-unfolding-scenario-wrapper .px-4-5{padding-right:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pt-4-5,.xblock-unfolding-scenario-wrapper .py-4-5{padding-top:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pb-4-5,.xblock-unfolding-scenario-wrapper .py-4-5{padding-bottom:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .unfolding-scenario-activity-wrapper{height:100%}.xblock-unfolding-scenario-wrapper .step-indicator{height:var(--pgn-spacing-spacer-4-5);width:var(--pgn-spacing-spacer-4-5);font-size:calc(var(--pgn-typography-font-size-base) * 1.125)}.xblock-unfolding-scenario-wrapper .step-indicator-separator{background-color:var(--color-border-default);width:17px;height:1px}.xblock-unfolding-scenario-wrapper .arrow-bubble{background-color:var(--color-interact-emphasis);color:var(--color-icon-interact-default);border:1px solid var(--color-border-interact-default);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;display:inline-block}.xblock-unfolding-scenario-wrapper .scenario-option-btn{height:calc(var(--pgn-typography-line-height-base) * var(--pgn-typography-font-size-base) * 3 + var(--pgn-spacing-spacer-base) * 2)}.xblock-unfolding-scenario-wrapper .scenario-option-btn.pre-selected{outline:2px solid var(--color-border-interact-emphasis)}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow{min-width:10px}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow .pgn__icon{display:none}.xblock-unfolding-scenario-wrapper .scenario-option-btn:hover .hover-arrow .pgn__icon,.xblock-unfolding-scenario-wrapper .scenario-option-btn.active .hover-arrow .pgn__icon{display:block}.xblock-unfolding-scenario-wrapper .scenario-option-btn:focus-visible{outline:2px solid var(--color-option-focus-border)}.xblock-unfolding-scenario-wrapper .outcome-option-row+.outcome-option-row{margin-top:var(--pgn-spacing-spacer-4);padding-top:var(--pgn-spacing-spacer-4);border-top:1px solid var(--color-border-interact-default)}.xblock-unfolding-scenario-wrapper .options-pane{transition:left .5s}@media (prefers-reduced-motion:reduce){.xblock-unfolding-scenario-wrapper .options-pane{transition:unset}}.xblock-unfolding-scenario-wrapper .options-pane-1{left:0%}.xblock-unfolding-scenario-wrapper .options-pane-2{left:50%}.xblock-unfolding-scenario-wrapper .options-pane-3{left:100%}.xblock-unfolding-scenario-wrapper .active.options-pane-1{left:-50%}.xblock-unfolding-scenario-wrapper .active.options-pane-2{left:0%}.xblock-unfolding-scenario-wrapper .active.options-pane-3{left:50%}.xblock-unfolding-scenario-wrapper .tablet-options-pane{transition:left .5s}@media (prefers-reduced-motion:reduce){.xblock-unfolding-scenario-wrapper .tablet-options-pane{transition:unset}}.xblock-unfolding-scenario-wrapper .tablet-options-pane-1{left:0%}.xblock-unfolding-scenario-wrapper .tablet-options-pane-2{border-left:var(--pgn-spacing-spacer-3) solid var(--color-interact-default);left:100%}.xblock-unfolding-scenario-wrapper .active.tablet-options-pane-1{left:-100%}.xblock-unfolding-scenario-wrapper .active.tablet-options-pane-2{left:0%}.xblock-unfolding-scenario-wrapper .option-feedback-wrapper{border-left:var(--pgn-spacing-spacer-4) solid var(--color-interact-default)}", xe = async (e, t, n) => {
	let r = await Se(n.config.mfe_config_api);
	a({
		runtime: e,
		element: t,
		config: n.config,
		styles: $
	})(/* @__PURE__ */ (0, H.jsx)(be, {
		data: n.data,
		themeUrls: r,
		cssContent: $
	}));
}, Se = async (e) => {
	let t = {};
	try {
		t = (await (await fetch(e)).json()).PARAGON_THEME_URLS;
	} catch (e) {
		console.error("Failed to fetch theme URLs:", e);
	}
	let n = t?.default?.light;
	return [
		"https://cdn.jsdelivr.net/npm/@openedx/paragon@23/dist/core.min.css",
		t?.core?.urls?.brandOverride,
		"https://cdn.jsdelivr.net/npm/@openedx/paragon@23/dist/light.min.css",
		t?.variants?.[n]?.urls?.brandOverride
	].filter(Boolean);
};
//#endregion
export { xe as renderBlock };
