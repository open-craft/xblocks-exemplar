import { h as e, n as t, o as n, p as r, s as i, t as a } from "./CheckCircle-CX1PK3LH.js";
//#region src/ideas-overview-block/student-ui/App.tsx
var o = e(), s = ({ data: e }) => /* @__PURE__ */ (0, o.jsx)("div", {
	className: "ideas-overview-xblock",
	style: { backgroundColor: e.backgroundColor },
	children: /* @__PURE__ */ (0, o.jsxs)("div", {
		className: "ideas-overview-container",
		children: [
			e.content.header && /* @__PURE__ */ (0, o.jsx)(n, {
				className: "ideas-overview-header-row",
				children: /* @__PURE__ */ (0, o.jsx)(i, {
					xs: 12,
					children: /* @__PURE__ */ (0, o.jsx)("div", {
						className: "ideas-overview-rich-text",
						dangerouslySetInnerHTML: { __html: e.content.header }
					})
				})
			}),
			e.content.ideas.map((e, r) => /* @__PURE__ */ (0, o.jsxs)(n, {
				className: "ideas-overview-idea-row",
				children: [/* @__PURE__ */ (0, o.jsx)(i, {
					xs: 12,
					sm: 6,
					className: "ideas-overview-title-column",
					children: /* @__PURE__ */ (0, o.jsxs)("div", {
						className: "ideas-overview-title-wrapper",
						children: [/* @__PURE__ */ (0, o.jsx)(t, {
							src: a,
							size: "lg",
							className: "ideas-overview-icon"
						}), /* @__PURE__ */ (0, o.jsx)("span", {
							className: "ideas-overview-title",
							children: e.title
						})]
					})
				}), /* @__PURE__ */ (0, o.jsx)(i, {
					xs: 12,
					sm: 6,
					children: /* @__PURE__ */ (0, o.jsx)("ul", {
						className: "ideas-overview-points",
						children: e.points.map((t, n) => /* @__PURE__ */ (0, o.jsx)("li", {
							className: "ideas-overview-point",
							dangerouslySetInnerHTML: { __html: t }
						}, `${e.title}-point-${n}`))
					})
				})]
			}, `${e.title}-${r}`)),
			e.content.footer && /* @__PURE__ */ (0, o.jsx)(n, {
				className: "ideas-overview-footer-row",
				children: /* @__PURE__ */ (0, o.jsx)(i, {
					xs: 12,
					children: /* @__PURE__ */ (0, o.jsx)("div", {
						className: "ideas-overview-rich-text",
						dangerouslySetInnerHTML: { __html: e.content.footer }
					})
				})
			})
		]
	})
}), c = ".ideas-overview-xblock *,.ideas-overview-xblock :before,.ideas-overview-xblock :after{box-sizing:border-box}.ideas-overview-container{max-width:var(--ideas-overview-container-max-width,1280px);padding:var(--ideas-overview-container-padding,var(--pgn-spacing-spacer-4-5,32px));margin:0 auto}.ideas-overview-header-row,.ideas-overview-idea-row,.ideas-overview-footer-row{padding-block:var(--ideas-overview-row-padding,var(--pgn-spacing-spacer-4-5,32px))}.ideas-overview-header-row{border-bottom:1px solid var(--ideas-overview-divider-color,var(--pgn-color-gray-200));padding-top:0}.ideas-overview-idea-row+.ideas-overview-idea-row,.ideas-overview-footer-row{border-top:1px solid var(--ideas-overview-divider-color,var(--pgn-color-gray-200))}.ideas-overview-footer-row{padding-bottom:0}.ideas-overview-title-column{align-items:flex-start;display:flex}.ideas-overview-title-wrapper{align-items:center;gap:var(--ideas-overview-title-gap,var(--pgn-spacing-spacer-2,8px));display:inline-flex}.ideas-overview-icon{color:var(--ideas-overview-icon-color,var(--pgn-color-info-500));flex:none}.ideas-overview-title{color:var(--ideas-overview-title-color,var(--pgn-color-primary-500));font-weight:var(--ideas-overview-title-font-weight,700);line-height:var(--ideas-overview-title-line-height,var(--pgn-typography-line-height-base,1.5))}.ideas-overview-points{padding-left:var(--ideas-overview-points-indent,var(--pgn-spacing-spacer-4-5,32px));margin:0}.ideas-overview-point+.ideas-overview-point{margin-top:var(--ideas-overview-point-gap,var(--pgn-spacing-spacer-2,8px))}.ideas-overview-rich-text{line-height:var(--ideas-overview-line-height,var(--pgn-typography-line-height-base,1.5))}.ideas-overview-rich-text>:last-child{margin-bottom:0}@media (width<=575.98px){.ideas-overview-title-column{margin-bottom:var(--ideas-overview-title-mobile-gap,var(--pgn-spacing-spacer-3,16px))}}", l = (e, t, n) => {
	r({
		runtime: e,
		element: t,
		config: n.config,
		styles: c
	})(/* @__PURE__ */ (0, o.jsx)(s, { data: n.data }));
};
//#endregion
export { l as renderBlock };
