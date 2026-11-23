import { E as e, O as t, b as n, c as r, d as i, f as a, h as o, i as s, l as c, o as l, p as u, r as d, s as f, u as p, v as m, y as h } from "./types-oIjTXCTg.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var g = /* @__PURE__ */ t(u()), _ = /* @__PURE__ */ t(e()), v = /* @__PURE__ */ t(r()), y = [
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
}, x = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, a = e.fluid, o = e.rounded, s = e.roundedCircle, l = e.thumbnail, u = p(e, y);
	n = c(n, "img");
	var d = (0, g.default)(a && n + "-fluid", o && "rounded", s && "rounded-circle", l && n + "-thumbnail");
	return /* @__PURE__ */ _.createElement("img", i({ ref: t }, u, { className: (0, g.default)(r, d) }));
});
x.displayName = "Image", x.defaultProps = b;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/icons/es5/Launch.js
var S = (e) => /* @__PURE__ */ _.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ _.createElement("path", {
	d: "M19 19H5V5h7V3H3v18h18v-9h-2v7ZM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7Z",
	fill: "currentColor"
})), C = h({
	externalLinkAltText: {
		id: "Hyperlink.externalLinkAltText",
		defaultMessage: "in a new tab"
	},
	externalLinkTitle: {
		id: "Hyperlink.externalLinkTitle",
		defaultMessage: "Opens in a new tab"
	}
}), w = /* @__PURE__ */ (0, _.forwardRef)(({ as: e = "a", className: t, destination: r, children: i, target: a = "_self", onClick: o, externalLinkAlternativeText: c, externalLinkTitle: l, variant: u = "default", isInline: d = !1, showLaunchIcon: f = !0, ...p }, m) => {
	let h = n(), v;
	a === "_blank" && (p.rel = (() => {
		let { rel: e } = p;
		return e ? (e.includes("noopener") || (e += " noopener"), e.includes("noreferrer") || (e += " noreferrer"), e) : "noopener noreferrer";
	})(), f && (v = /* @__PURE__ */ _.createElement("span", {
		className: "pgn__hyperlink__external-icon",
		title: l || h.formatMessage(C.externalLinkTitle)
	}, /* @__PURE__ */ _.createElement(s, {
		src: S,
		screenReaderText: c || h.formatMessage(C.externalLinkAltText),
		style: {
			height: "1em",
			width: "1em"
		},
		"data-testid": "hyperlink-icon"
	}))));
	let y = { ...p };
	return r && (y.href = r), /* @__PURE__ */ _.createElement(e, {
		ref: m,
		className: (0, g.default)("pgn__hyperlink", `${u}-link`, {
			"standalone-link": !d,
			"inline-link": d
		}, t),
		target: a,
		onClick: o,
		...y
	}, i, v);
});
w.displayName = "Hyperlink";
//#endregion
//#region src/two-column-block/student-ui/App.tsx
var T = m(), E = ({ data: e }) => {
	let [t, n] = e.columns.ratio.split(":").map((e) => parseInt(e, 10));
	return /* @__PURE__ */ (0, T.jsx)("div", {
		className: "xblock-two-column-wrapper",
		style: { "--two-column-background-color": e.backgroundColor },
		children: /* @__PURE__ */ (0, T.jsx)("div", {
			className: "two-column-container",
			children: /* @__PURE__ */ (0, T.jsxs)(l, {
				className: `xblock-two-column ${e.columns.order == "rightAboveLeft" ? "two-column-reverse" : ""}`,
				children: [/* @__PURE__ */ (0, T.jsx)(f, {
					xs: 12,
					sm: t,
					className: "two-column-column",
					children: /* @__PURE__ */ (0, T.jsx)(D, { data: e.columns.left })
				}), /* @__PURE__ */ (0, T.jsx)(f, {
					xs: 12,
					sm: n,
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
}, O = ({ data: e }) => /* @__PURE__ */ (0, T.jsx)("div", {
	className: "two-column-text-column",
	style: { "--two-column-text-vertical-alignment": e.verticalAlignment },
	children: /* @__PURE__ */ (0, T.jsx)("div", {
		className: "two-column-text-content",
		dangerouslySetInnerHTML: { __html: e.content }
	})
}), k = ({ data: e }) => /* @__PURE__ */ (0, T.jsxs)("div", {
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
		e.lessons.map((e) => /* @__PURE__ */ (0, T.jsxs)(l, {
			className: "lesson-list-item",
			children: [/* @__PURE__ */ (0, T.jsx)(f, {
				xs: 2,
				className: "lesson-list-item-number",
				children: e.id
			}), /* @__PURE__ */ (0, T.jsx)(f, {
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
		(e.previousLesson || e.showStartLessonButton) && /* @__PURE__ */ (0, T.jsxs)(a, {
			className: "lesson-intro-actions",
			children: [e.previousLesson && /* @__PURE__ */ (0, T.jsxs)(d, {
				className: "rounded-pill",
				variant: "outline-brand",
				href: e.previousLesson.url,
				children: ["Previous ", e.previousLesson.id]
			}), e.showStartLessonButton && /* @__PURE__ */ (0, T.jsxs)(d, {
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
	}), n = {
		...e.text.backgroundColor ? { "--two-column-image-grid-text-background-color": e.text.backgroundColor } : {},
		...e.text.color ? { "--two-column-image-grid-text-color": e.text.color } : {}
	}, r = /* @__PURE__ */ (0, T.jsx)("div", {
		className: `image-grid-bottom-text image-grid-text-align-${e.text.alignment}`,
		style: n,
		children: /* @__PURE__ */ (0, T.jsx)("div", {
			className: e.text.fontSize == "large" ? "image-grid-text-content image-grid-text-content-large" : "image-grid-text-content",
			children: e.text.content
		})
	}), [i, a] = e.bottomRowOrder == "imageText" ? [t, r] : [r, t];
	return /* @__PURE__ */ (0, T.jsxs)(l, {
		className: "image-grid",
		children: [
			/* @__PURE__ */ (0, T.jsx)(f, {
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
			/* @__PURE__ */ (0, T.jsx)(f, {
				xs: 6,
				className: "image-grid-bottom-cell image-grid-bottom-cell-left",
				children: i
			}),
			/* @__PURE__ */ (0, T.jsx)(f, {
				xs: 6,
				className: "image-grid-bottom-cell image-grid-bottom-cell-right",
				children: a
			})
		]
	});
}, M = ({ data: e }) => /* @__PURE__ */ (0, T.jsx)("div", {
	className: "two-column-raw-html",
	dangerouslySetInnerHTML: { __html: e.html }
}), N = ".xblock-two-column-wrapper{background-color:var(--two-column-background-color,transparent)}.two-column-container{max-width:var(--two-column-container-max-width,1280px);padding:var(--two-column-container-padding,32px);margin:0 auto}.xblock-two-column{padding:var(--two-column-card-padding,32px)}.xblock-two-column .lesson-list-item+.lesson-list-item{border-top:1px solid var(--two-column-list-divider-color,var(--pgn-color-gray-200))}.xblock-two-column.two-column-reverse{flex-direction:column-reverse}@media (width>=576px){.xblock-two-column.two-column-reverse{flex-direction:row}}.two-column-column{min-width:0}.two-column-text-column,.two-column-raw-html{min-height:100%}.two-column-text-column{align-items:var(--two-column-text-vertical-alignment,start);display:flex}.lesson-list-title,.lesson-list-intro,.lesson-intro-heading,.lesson-intro-summary{margin-top:0}.lesson-list-item{padding-block:var(--two-column-list-item-spacing,24px)}.lesson-list-item-number{color:var(--two-column-list-number-color,var(--pgn-color-secondary-base));font-weight:700}.lesson-intro-title{margin:0 0 var(--two-column-section-gap,32px)}.lesson-intro-heading{line-height:var(--two-column-heading-line-height,2)}.lesson-intro-id{color:var(--two-column-intro-id-color,var(--pgn-color-secondary-base))}.lesson-intro-actions{justify-content:flex-start}.image-grid-featured{padding-bottom:var(--two-column-image-grid-gap,var(--pgn-spacing-spacer-1,4px))}.image-grid-bottom-cell-left{padding-right:var(--two-column-image-grid-gap,var(--pgn-spacing-spacer-1,4px))}.image-grid-bottom-cell-right{padding-left:var(--two-column-image-grid-gap,var(--pgn-spacing-spacer-1,4px))}.image-grid-link{width:100%;display:block;overflow:hidden}.image-grid-image{width:100%}.image-grid-bottom-text{height:100%;padding:var(--two-column-card-padding,32px);background-color:var(--two-column-image-grid-text-background-color,transparent);color:var(--two-column-image-grid-text-color,inherit);align-items:center;display:flex}.image-grid-text-align-start{justify-content:flex-start}.image-grid-text-align-center{justify-content:center}.image-grid-text-align-end{justify-content:flex-end}.image-grid-text-content-large{font-size:var(--two-column-lead-font-size,var(--pgn-typography-font-size-lead-base,1.25rem));font-weight:var(--two-column-lead-font-weight,var(--pgn-typography-font-weight-lead-base,300))}.top-image-grid-item{border-top-left-radius:var(--two-column-image-border-radius-lg,24px);border-top-right-radius:var(--two-column-image-border-radius-lg,24px);border-bottom-left-radius:var(--two-column-image-border-radius-sm,8px);border-bottom-right-radius:var(--two-column-image-border-radius-sm,8px)}.bottom-image-grid-item,.image-grid-bottom-text{border-top-left-radius:var(--two-column-image-border-radius-sm,8px);border-top-right-radius:var(--two-column-image-border-radius-sm,8px);border-bottom-left-radius:var(--two-column-image-border-radius-lg,24px);border-bottom-right-radius:var(--two-column-image-border-radius-lg,24px)}", P = (e, t, n) => {
	o({
		runtime: e,
		element: t,
		config: n.config,
		styles: N
	})(/* @__PURE__ */ (0, T.jsx)(E, { data: n.data }));
};
//#endregion
export { P as renderBlock };
