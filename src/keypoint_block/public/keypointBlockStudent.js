import { D as e, f as t, h as n, t as r } from "./Button-Bn5CwRIu.js";
e();
var i = n();
function a({ header: e, keypoints: t, summary: n, buttonText: a, buttonLink: o, backgroundColor: s }) {
	return /* @__PURE__ */ (0, i.jsx)("div", {
		className: "xblock-keypoints",
		style: { "--keypoints-background-color": s },
		children: /* @__PURE__ */ (0, i.jsxs)("div", {
			className: "keypoints-container",
			children: [
				e && /* @__PURE__ */ (0, i.jsx)("h2", {
					className: "keypoints-header",
					children: e
				}),
				/* @__PURE__ */ (0, i.jsx)("div", {
					className: "keypoints-card-grid",
					children: t.map((e, t) => /* @__PURE__ */ (0, i.jsxs)("div", {
						className: "keypoint",
						children: [/* @__PURE__ */ (0, i.jsx)("h4", {
							className: "keypoint-label",
							children: e.keypoint
						}), /* @__PURE__ */ (0, i.jsx)("p", {
							className: "keypoint-description",
							children: e.description
						})]
					}, `kp-${t}`))
				}),
				n && /* @__PURE__ */ (0, i.jsx)("p", {
					className: "keypoints-summary",
					children: n
				}),
				a && o && /* @__PURE__ */ (0, i.jsx)("div", {
					className: "keypoints-action",
					children: /* @__PURE__ */ (0, i.jsx)(r, {
						as: "a",
						href: o,
						variant: "dark",
						target: "_blank",
						rel: "noopener noreferrer",
						children: a
					})
				})
			]
		})
	});
}
//#endregion
//#region src/keypoint-block/student-ui/style.scss?inline
var o = ".xblock-keypoints{--keypoints-background-color:transparent;background-color:var(--keypoints-background-color)}.xblock-keypoints *,.xblock-keypoints :before,.xblock-keypoints :after{box-sizing:border-box}.xblock-keypoints .keypoints-container{max-width:var(--pgn-exemplar-xblock-container-max-width,1280px);padding:var(--pgn-exemplar-xblock-container-padding,32px);margin:0 auto}.xblock-keypoints .keypoints-header{margin:0 0 var(--pgn-exemplar-xblock-section-gap,32px);font-weight:700}.xblock-keypoints .keypoints-card-grid{gap:var(--pgn-exemplar-xblock-grid-gap,32px);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}.xblock-keypoints .keypoint{padding:var(--pgn-exemplar-xblock-card-padding,32px);background-color:var(--pgn-color-white);border-radius:var(--pgn-size-card-border-radius-base)}.xblock-keypoints .keypoint-label{margin:0 0 var(--pgn-spacing-spacer-2);color:var(--pgn-color-primary-base);font-size:var(--pgn-exemplar-xblock-label-font-size,1.1rem);font-weight:700;line-height:1.4}.xblock-keypoints .keypoint-description{color:var(--pgn-color-gray-700);margin:0;line-height:1.6}.xblock-keypoints .keypoints-summary{margin:var(--pgn-exemplar-xblock-section-gap,32px) 0 0;color:var(--pgn-color-primary-base);font-weight:700;line-height:1.5}.xblock-keypoints .keypoints-action{margin-top:var(--pgn-exemplar-xblock-section-gap,32px);justify-content:flex-end;display:flex}@media (width<=767.98px){.xblock-keypoints .keypoints-card-grid{grid-template-columns:1fr}}", s = (e, n, r) => {
	let { header: s, keypoints: c, summary: l, button_text: u, button_link: d, background_color: f } = r.data;
	t({
		runtime: e,
		element: n,
		config: r.config,
		styles: o
	})(/* @__PURE__ */ (0, i.jsx)(a, {
		header: s || "",
		keypoints: c || [],
		summary: l || "",
		buttonText: u || "",
		buttonLink: d || "",
		backgroundColor: f || ""
	}));
};
//#endregion
export { s as renderBlock };
