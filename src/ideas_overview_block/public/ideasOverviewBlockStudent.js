import { a as e, f as t, i as n, n as r, t as i, u as a } from "./CheckCircle-BP0wmEU_.js";
// src/ideas-overview-block/student-ui/App.tsx
var o = t(), s = ({ data: t }) => /* @__PURE__ */ (0, o.jsx)("div", {
	className: "ideas-overview-xblock",
	style: { backgroundColor: t.backgroundColor },
	children: /* @__PURE__ */ (0, o.jsxs)("div", {
		className: "ideas-overview-container",
		children: [
			t.content.header && /* @__PURE__ */ (0, o.jsx)(n, {
				className: "ideas-overview-header-row",
				children: /* @__PURE__ */ (0, o.jsx)(e, {
					xs: 12,
					children: /* @__PURE__ */ (0, o.jsx)("div", {
						className: "ideas-overview-rich-text",
						dangerouslySetInnerHTML: { __html: t.content.header }
					})
				})
			}),
			t.content.ideas.map((t, a) => /* @__PURE__ */ (0, o.jsxs)(n, {
				className: "ideas-overview-idea-row",
				children: [/* @__PURE__ */ (0, o.jsx)(e, {
					xs: 12,
					sm: 6,
					className: "ideas-overview-title-column",
					children: /* @__PURE__ */ (0, o.jsxs)("div", {
						className: "ideas-overview-title-wrapper",
						children: [/* @__PURE__ */ (0, o.jsx)(r, {
							src: i,
							size: "lg",
							className: "ideas-overview-icon"
						}), /* @__PURE__ */ (0, o.jsx)("span", {
							className: "ideas-overview-title",
							children: t.title
						})]
					})
				}), /* @__PURE__ */ (0, o.jsx)(e, {
					xs: 12,
					sm: 6,
					children: /* @__PURE__ */ (0, o.jsx)("ul", {
						className: "ideas-overview-points",
						children: t.points.map((e, n) => /* @__PURE__ */ (0, o.jsx)("li", {
							className: "ideas-overview-point",
							dangerouslySetInnerHTML: { __html: e }
						}, `${t.title}-point-${n}`))
					})
				})]
			}, `${t.title}-${a}`)),
			t.content.footer && /* @__PURE__ */ (0, o.jsx)(n, {
				className: "ideas-overview-footer-row",
				children: /* @__PURE__ */ (0, o.jsx)(e, {
					xs: 12,
					children: /* @__PURE__ */ (0, o.jsx)("div", {
						className: "ideas-overview-rich-text",
						dangerouslySetInnerHTML: { __html: t.content.footer }
					})
				})
			})
		]
	})
}), c = ".ideas-overview-xblock *,.ideas-overview-xblock :before,.ideas-overview-xblock :after{box-sizing:border-box}.ideas-overview-container{max-width:1280px;padding:var(--pgn-spacing-spacer-4-5,32px);margin:0 auto}.ideas-overview-header-row,.ideas-overview-idea-row,.ideas-overview-footer-row{padding-block:var(--pgn-spacing-spacer-4-5,32px)}.ideas-overview-header-row{border-bottom:1px solid var(--pgn-color-gray-200);padding-top:0}.ideas-overview-idea-row+.ideas-overview-idea-row,.ideas-overview-footer-row{border-top:1px solid var(--pgn-color-gray-200)}.ideas-overview-footer-row{padding-bottom:0}.ideas-overview-title-column{align-items:flex-start;display:flex}.ideas-overview-title-wrapper{align-items:center;gap:var(--pgn-spacing-spacer-2,8px);display:inline-flex}.ideas-overview-icon{color:var(--pgn-color-info-500);flex:none}.ideas-overview-title{color:var(--pgn-color-primary-500);font-weight:700;line-height:var(--pgn-typography-line-height-base,1.5)}.ideas-overview-points{padding-left:var(--pgn-spacing-spacer-4-5,32px);margin:0}.ideas-overview-point+.ideas-overview-point{margin-top:var(--pgn-spacing-spacer-2,8px)}.ideas-overview-rich-text{line-height:var(--pgn-typography-line-height-base,1.5)}.ideas-overview-rich-text>:last-child{margin-bottom:0}@media (width<=575.98px){.ideas-overview-title-column{margin-bottom:var(--pgn-spacing-spacer-3,16px)}}", l = (e, t, n) => {
	a({
		runtime: e,
		element: t,
		config: n.config,
		styles: c
	})(/* @__PURE__ */ (0, o.jsx)(s, { data: n.data }));
};
export { l as renderBlock };
