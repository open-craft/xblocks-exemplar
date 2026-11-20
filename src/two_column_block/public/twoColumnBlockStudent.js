import { E as e, _ as t, a as n, c as r, d as i, g as a, i as o, l as s, n as c, o as l, p as u, s as d, t as f, u as p, v as m, w as h } from "./Button-S0oiaC6q.js";
// node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var g = /* @__PURE__ */ e(i()), _ = /* @__PURE__ */ e(h()), v = /* @__PURE__ */ e(l()), y = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
v.default.string, v.default.bool, v.default.bool, v.default.bool, v.default.bool;
var b = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, x = /*#__PURE__*/ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, i = e.className, a = e.fluid, o = e.rounded, c = e.roundedCircle, l = e.thumbnail, u = r(e, y);
	n = d(n, "img");
	var f = (0, g.default)(a && n + "-fluid", o && "rounded", c && "rounded-circle", l && n + "-thumbnail");
	return /*#__PURE__*/ _.createElement("img", s({ ref: t }, u, { className: (0, g.default)(i, f) }));
});
x.displayName = "Image", x.defaultProps = b;
// node_modules/.pnpm/@openedx+paragon@23.23.2_@types+node@24.19.2_@types+react@18.3.31_jquery@4.0.0_popper.j_4d3d78a27b7b6469417ee8e6fd4ead53/node_modules/@openedx/paragon/icons/es5/Launch.js
var S = (e) => /*#__PURE__*/ _.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /*#__PURE__*/ _.createElement("path", {
	d: "M19 19H5V5h7V3H3v18h18v-9h-2v7ZM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7Z",
	fill: "currentColor"
})), C = t({
	externalLinkAltText: {
		id: "Hyperlink.externalLinkAltText",
		defaultMessage: "in a new tab"
	},
	externalLinkTitle: {
		id: "Hyperlink.externalLinkTitle",
		defaultMessage: "Opens in a new tab"
	}
}), w = /*#__PURE__*/ (0, _.forwardRef)(({ as: e = "a", className: t, destination: n, children: r, target: i = "_self", onClick: a, externalLinkAlternativeText: o, externalLinkTitle: s, variant: l = "default", isInline: u = !1, showLaunchIcon: d = !0, ...f }, p) => {
	let h = m(), v;
	i === "_blank" && (f.rel = (() => {
		let { rel: e } = f;
		return e ? (e.includes("noopener") || (e += " noopener"), e.includes("noreferrer") || (e += " noreferrer"), e) : "noopener noreferrer";
	})(), d && (v = /*#__PURE__*/ _.createElement("span", {
		className: "pgn__hyperlink__external-icon",
		title: s || h.formatMessage(C.externalLinkTitle)
	}, /*#__PURE__*/ _.createElement(c, {
		src: S,
		screenReaderText: o || h.formatMessage(C.externalLinkAltText),
		style: {
			height: "1em",
			width: "1em"
		},
		"data-testid": "hyperlink-icon"
	}))));
	let y = { ...f };
	return n && (y.href = n), /*#__PURE__*/ _.createElement(e, {
		ref: p,
		className: (0, g.default)("pgn__hyperlink", `${l}-link`, {
			"standalone-link": !u,
			"inline-link": u
		}, t),
		target: i,
		onClick: a,
		...y
	}, r, v);
});
w.displayName = "Hyperlink";
// src/two-column-block/student-ui/App.tsx
var T = a(), E = ({ data: e }) => {
	let [t, r] = e.columns.ratio.split(":").map((e) => parseInt(e, 10)), i = { "--two-column-background-color": e.backgroundColor };
	return /* @__PURE__ */ (0, T.jsx)("div", {
		className: "xblock-two-column-wrapper",
		style: i,
		children: /* @__PURE__ */ (0, T.jsx)("div", {
			className: "two-column-container",
			children: /* @__PURE__ */ (0, T.jsxs)(o, {
				className: `xblock-two-column ${e.columns.order == "rightAboveLeft" ? "two-column-reverse" : ""}`,
				children: [/* @__PURE__ */ (0, T.jsx)(n, {
					xs: 12,
					sm: t,
					className: "two-column-column",
					children: /* @__PURE__ */ (0, T.jsx)(D, { data: e.columns.left })
				}), /* @__PURE__ */ (0, T.jsx)(n, {
					xs: 12,
					sm: r,
					className: "two-column-column",
					children: /* @__PURE__ */ (0, T.jsx)(D, { data: e.columns.right })
				})]
			})
		})
	});
}, D = ({ data: e }) => {
	switch (e.kind) {
		case "text": return /* @__PURE__ */ (0, T.jsx)(O, { data: e });
		case "lessonList": return /* @__PURE__ */ (0, T.jsx)(k, { data: e });
		case "lessonIntro": return /* @__PURE__ */ (0, T.jsx)(A, { data: e });
		case "imageGrid": return /* @__PURE__ */ (0, T.jsx)(j, { data: e });
		case "rawHTML": return /* @__PURE__ */ (0, T.jsx)(M, { data: e });
	}
}, O = ({ data: e }) => {
	let t = { "--two-column-text-vertical-alignment": e.verticalAlignment };
	return /* @__PURE__ */ (0, T.jsx)("div", {
		className: "two-column-text-column",
		style: t,
		children: /* @__PURE__ */ (0, T.jsx)("div", {
			className: "two-column-text-content",
			dangerouslySetInnerHTML: { __html: e.content }
		})
	});
}, k = ({ data: e }) => /* @__PURE__ */ (0, T.jsxs)("div", {
	className: "lesson-list-column",
	children: [
		/* @__PURE__ */ (0, T.jsx)("h5", {
			className: "lesson-list-title",
			children: e.title
		}),
		/* @__PURE__ */ (0, T.jsx)("p", {
			className: "lesson-list-intro",
			children: e.text
		}),
		e.lessons.map((e) => /* @__PURE__ */ (0, T.jsxs)(o, {
			className: "lesson-list-item",
			children: [/* @__PURE__ */ (0, T.jsx)(n, {
				xs: 2,
				className: "lesson-list-item-number",
				children: e.id
			}), /* @__PURE__ */ (0, T.jsx)(n, {
				xs: 10,
				className: "lesson-list-item-title",
				children: e.title
			})]
		}, `${e.id}-${e.title}`))
	]
}), A = ({ data: e }) => /* @__PURE__ */ (0, T.jsxs)("div", {
	className: "lesson-intro-column",
	children: [
		/* @__PURE__ */ (0, T.jsx)("h4", {
			className: "lesson-intro-title",
			children: e.title
		}),
		/* @__PURE__ */ (0, T.jsxs)("h5", {
			className: "lesson-intro-heading",
			children: [
				/* @__PURE__ */ (0, T.jsx)("span", {
					className: "lesson-intro-id",
					children: e.lesson.id ? e.lesson.id : null
				}),
				/* @__PURE__ */ (0, T.jsx)("br", {}),
				/* @__PURE__ */ (0, T.jsx)("span", { children: e.lesson.title })
			]
		}),
		/* @__PURE__ */ (0, T.jsx)("p", {
			className: "lesson-intro-summary",
			children: e.summary
		}),
		(e.previousLesson || e.showStartLessonButton) && /* @__PURE__ */ (0, T.jsxs)(p, {
			className: "lesson-intro-actions",
			children: [e.previousLesson && /* @__PURE__ */ (0, T.jsxs)(f, {
				className: "rounded-pill",
				variant: "outline-brand",
				href: e.previousLesson.url,
				children: ["Previous ", e.previousLesson.id]
			}), e.showStartLessonButton && /* @__PURE__ */ (0, T.jsxs)(f, {
				className: "rounded-pill",
				variant: "brand",
				href: e.lesson.url,
				children: ["Start ", e.lesson.id]
			})]
		})
	]
}), j = ({ data: e }) => {
	let t = e.bottomImage.onClickUrl ? /* @__PURE__ */ (0, T.jsx)(w, {
		className: "image-grid-link bottom-image-grid-item",
		showLaunchIcon: !1,
		target: "_blank",
		destination: e.bottomImage.onClickUrl,
		children: /* @__PURE__ */ (0, T.jsx)(x, {
			className: "image-grid-image",
			fluid: !0,
			src: e.bottomImage.url,
			alt: e.bottomImage.alt
		})
	}) : /* @__PURE__ */ (0, T.jsx)(x, {
		className: "image-grid-image bottom-image-grid-item",
		fluid: !0,
		src: e.bottomImage.url,
		alt: e.bottomImage.alt
	}), r = {
		"--two-column-image-grid-text-background-color": e.text.backgroundColor,
		"--two-column-image-grid-text-color": e.text.color
	}, i = /* @__PURE__ */ (0, T.jsx)("div", {
		className: `image-grid-bottom-text image-grid-text-align-${e.text.alignment}`,
		style: r,
		children: /* @__PURE__ */ (0, T.jsx)("div", {
			className: e.text.fontSize == "large" ? "image-grid-text-content image-grid-text-content-large" : "image-grid-text-content",
			children: e.text.content
		})
	}), [a, s] = e.bottomRowOrder == "imageText" ? [t, i] : [i, t];
	return /* @__PURE__ */ (0, T.jsxs)(o, {
		className: "image-grid",
		children: [
			/* @__PURE__ */ (0, T.jsx)(n, {
				xs: 12,
				className: "image-grid-featured",
				children: e.featuredImage.onClickUrl ? /* @__PURE__ */ (0, T.jsx)(w, {
					target: "_blank",
					className: "image-grid-link top-image-grid-item",
					showLaunchIcon: !1,
					destination: e.featuredImage.onClickUrl,
					children: /* @__PURE__ */ (0, T.jsx)(x, {
						fluid: !0,
						className: "image-grid-image",
						src: e.featuredImage.url,
						alt: e.featuredImage.alt
					})
				}) : /* @__PURE__ */ (0, T.jsx)(x, {
					fluid: !0,
					className: "image-grid-image top-image-grid-item",
					src: e.featuredImage.url,
					alt: e.featuredImage.alt
				})
			}),
			/* @__PURE__ */ (0, T.jsx)(n, {
				xs: 6,
				className: "image-grid-bottom-cell image-grid-bottom-cell-left",
				children: a
			}),
			/* @__PURE__ */ (0, T.jsx)(n, {
				xs: 6,
				className: "image-grid-bottom-cell image-grid-bottom-cell-right",
				children: s
			})
		]
	});
}, M = ({ data: e }) => /* @__PURE__ */ (0, T.jsx)("div", {
	className: "two-column-raw-html",
	dangerouslySetInnerHTML: { __html: e.html }
}), N = ".xblock-two-column-wrapper{--two-column-background-color:transparent;--two-column-image-grid-text-background-color:transparent;--two-column-image-grid-text-color:inherit;--two-column-image-grid-gap:var(--pgn-spacing-spacer-1,4px);background-color:var(--two-column-background-color)}.two-column-container{max-width:var(--pgn-exemplar-xblock-container-max-width,1280px);padding:var(--pgn-exemplar-xblock-container-padding,32px);margin:0 auto}.xblock-two-column{padding:var(--pgn-exemplar-xblock-card-padding,32px)}.xblock-two-column .lesson-list-item+.lesson-list-item{border-top:1px solid var(--pgn-color-gray-200)}.xblock-two-column.two-column-reverse{flex-direction:column-reverse}@media (width>=576px){.xblock-two-column.two-column-reverse{flex-direction:row}}.two-column-column{min-width:0}.two-column-text-column,.two-column-raw-html{min-height:100%}.two-column-text-column{align-items:var(--two-column-text-vertical-alignment,start);display:flex}.lesson-list-title,.lesson-list-intro,.lesson-intro-heading,.lesson-intro-summary{margin-top:0}.lesson-list-item{padding-block:var(--pgn-exemplar-xblock-studio-section-gap,24px)}.lesson-list-item-number{color:var(--pgn-color-secondary-base);font-weight:700}.lesson-intro-title{margin:0 0 var(--pgn-exemplar-xblock-section-gap,32px)}.lesson-intro-heading{line-height:var(--pgn-exemplar-xblock-heading-line-height,2)}.lesson-intro-id{color:var(--pgn-color-secondary-base)}.lesson-intro-actions{justify-content:flex-start}.image-grid-featured{padding-bottom:var(--two-column-image-grid-gap)}.image-grid-bottom-cell-left{padding-right:var(--two-column-image-grid-gap)}.image-grid-bottom-cell-right{padding-left:var(--two-column-image-grid-gap)}.image-grid-link{width:100%;display:block;overflow:hidden}.image-grid-image{width:100%}.image-grid-bottom-text{height:100%;padding:var(--pgn-exemplar-xblock-card-padding,32px);background-color:var(--two-column-image-grid-text-background-color);color:var(--two-column-image-grid-text-color);align-items:center;display:flex}.image-grid-text-align-start{justify-content:flex-start}.image-grid-text-align-center{justify-content:center}.image-grid-text-align-end{justify-content:flex-end}.image-grid-text-content-large{font-size:var(--pgn-typography-font-size-lead-base,1.25rem);font-weight:var(--pgn-typography-font-weight-lead-base,300)}.top-image-grid-item{border-top-left-radius:var(--pgn-two-column-block-image-size-border-radius-lg,24px);border-top-right-radius:var(--pgn-two-column-block-image-size-border-radius-lg,24px);border-bottom-left-radius:var(--pgn-two-column-block-image-size-border-radius-sm,8px);border-bottom-right-radius:var(--pgn-two-column-block-image-size-border-radius-sm,8px)}.bottom-image-grid-item,.image-grid-bottom-text{border-top-left-radius:var(--pgn-two-column-block-image-size-border-radius-sm,8px);border-top-right-radius:var(--pgn-two-column-block-image-size-border-radius-sm,8px);border-bottom-left-radius:var(--pgn-two-column-block-image-size-border-radius-lg,24px);border-bottom-right-radius:var(--pgn-two-column-block-image-size-border-radius-lg,24px)}", P = (e, t, n) => {
	u({
		runtime: e,
		element: t,
		config: n.config,
		styles: N
	})(/* @__PURE__ */ (0, T.jsx)(E, { data: n.data }));
};
export { P as renderBlock };
