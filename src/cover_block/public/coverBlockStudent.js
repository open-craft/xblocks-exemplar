import "./rolldown-runtime-CYdcPHCu.js";
import { S as e, a as t, g as n, h as r, n as i, o as a, s as o } from "./dist-DqPPlJMT.js";
e();
var s = (e, t) => t ? t.match(/^#([0-9]|[a-f]){6}$/i) ? { color: t } : (console.error(`Bogus color found for ${e}: ${t}`), {}) : {}, c = (e) => ({
	top_header: s("top_header", e.top_header_color),
	description: s("description", e.description_color),
	main_header: s("main_header", e.main_header_color),
	subheader: s("subheader", e.subheader_color)
}), l = o(), u = (e) => {
	let t = c(e);
	return /* @__PURE__ */ (0, l.jsxs)("div", {
		className: "course-cover",
		"data-testid": "course-cover",
		children: [/* @__PURE__ */ (0, l.jsx)("div", {
			className: "course-cover-image-container",
			children: /* @__PURE__ */ (0, l.jsx)("img", {
				className: "course-cover-image",
				src: e.media_url,
				alt: e.media_alt_text
			})
		}), /* @__PURE__ */ (0, l.jsx)(r, {
			className: "course-cover-content-row",
			children: /* @__PURE__ */ (0, l.jsx)(n, {
				xs: 12,
				md: 10,
				lg: 6,
				xl: 5,
				className: "course-cover-content-column",
				children: /* @__PURE__ */ (0, l.jsx)("div", {
					className: "course-cover-text-container",
					children: /* @__PURE__ */ (0, l.jsxs)("div", {
						className: "course-cover-text-content",
						children: [
							/* @__PURE__ */ (0, l.jsx)("h2", {
								className: "course-cover-top-header",
								style: t.top_header,
								children: e.top_header
							}),
							/* @__PURE__ */ (0, l.jsx)("h2", {
								className: "course-cover-main-header",
								style: t.main_header,
								children: e.main_header
							}),
							/* @__PURE__ */ (0, l.jsx)("h5", {
								className: "course-cover-subheader",
								style: t.subheader,
								children: e.subheader
							}),
							/* @__PURE__ */ (0, l.jsx)("p", {
								className: "course-cover-description",
								style: t.description,
								children: e.description
							})
						]
					})
				})
			})
		})]
	});
}, d = (e) => {
	let i = e.image_position === t.left ? "section-cover--image-left" : "section-cover--image-right";
	return /* @__PURE__ */ (0, l.jsx)("div", {
		className: `section-cover ${i}`,
		"data-testid": "section-cover",
		children: /* @__PURE__ */ (0, l.jsxs)(r, {
			className: "section-cover-layout",
			children: [/* @__PURE__ */ (0, l.jsx)(n, {
				xs: 12,
				lg: 5,
				className: "section-cover-image-column",
				children: /* @__PURE__ */ (0, l.jsx)("img", {
					className: "section-block-image",
					src: e.media_url,
					alt: e.media_alt_text
				})
			}), /* @__PURE__ */ (0, l.jsx)(n, {
				xs: 12,
				lg: 5,
				className: "section-cover-text-column",
				children: /* @__PURE__ */ (0, l.jsxs)("div", {
					className: "section-cover-text-content",
					children: [
						/* @__PURE__ */ (0, l.jsx)("div", {
							className: "section-cover-top-header",
							children: e.top_header
						}),
						/* @__PURE__ */ (0, l.jsx)("h2", {
							className: "section-cover-main-header",
							children: e.main_header
						}),
						/* @__PURE__ */ (0, l.jsx)("h5", {
							className: "section-cover-subheader",
							children: e.subheader
						}),
						/* @__PURE__ */ (0, l.jsx)("p", {
							className: "section-cover-description",
							children: e.description
						})
					]
				})
			})]
		})
	});
}, f = (e) => {
	let t = c(e);
	return /* @__PURE__ */ (0, l.jsxs)("div", {
		className: "separator-cover",
		"data-testid": "separator",
		children: [/* @__PURE__ */ (0, l.jsx)("div", {
			className: "separator-cover-image-container",
			children: /* @__PURE__ */ (0, l.jsx)("img", {
				className: "separator-cover-image",
				src: e.media_url,
				alt: e.media_alt_text
			})
		}), /* @__PURE__ */ (0, l.jsx)(r, {
			className: "separator-cover-content-row",
			children: /* @__PURE__ */ (0, l.jsx)(n, {
				xs: 12,
				md: 10,
				lg: 8,
				xl: 6,
				className: "separator-cover-content-column",
				children: /* @__PURE__ */ (0, l.jsxs)("div", {
					className: "separator-cover-text-content",
					children: [
						/* @__PURE__ */ (0, l.jsx)("div", {
							className: "separator-cover-top-header",
							style: t.top_header,
							children: e.top_header
						}),
						/* @__PURE__ */ (0, l.jsx)("h1", {
							className: "separator-cover-main-header",
							style: t.main_header,
							children: e.main_header
						}),
						/* @__PURE__ */ (0, l.jsx)("h4", {
							className: "separator-cover-subheader",
							style: t.subheader,
							children: e.subheader
						}),
						/* @__PURE__ */ (0, l.jsx)("p", {
							className: "separator-cover-description",
							style: t.description,
							children: e.description
						})
					]
				})
			})
		})]
	});
}, p = {
	[a.course]: u,
	[a.section]: d,
	[a.separator]: f
}, m = (e) => {
	let t = p[e.variant];
	return /* @__PURE__ */ (0, l.jsx)(t, { ...e });
}, h = ".section-block-image,.separator-cover-image,.course-cover-image{object-fit:cover;width:100%;height:100%}.section-cover{--cover-height:var(--pgn-cover-block-section-height,460px)}.separator-cover,.course-cover{--cover-height:var(--pgn-cover-block-hero-height,550px)}.section-cover,.separator-cover,.course-cover{position:relative}.section-cover{max-width:var(--pgn-exemplar-xblock-container-max-width,1280px);padding:var(--pgn-exemplar-xblock-container-padding,32px);margin:0 auto}.section-cover-layout{justify-content:center;align-items:center}.section-cover-image-column,.section-cover-text-column{padding-block:var(--pgn-exemplar-xblock-section-gap,32px);justify-content:center;display:flex}.section-cover-text-column{align-items:center}.section-cover-text-content{width:100%;max-width:var(--pgn-exemplar-xblock-content-max-width,640px)}@media (width>=992px){.section-cover--image-left .section-cover-image-column{order:1}.section-cover--image-left .section-cover-text-column{padding-left:var(--pgn-exemplar-xblock-grid-gap,32px);order:2}.section-cover--image-right .section-cover-image-column{order:2}.section-cover--image-right .section-cover-text-column{padding-right:var(--pgn-exemplar-xblock-grid-gap,32px);order:1}}.section-block-image{height:var(--cover-height);border-radius:var(--pgn-size-card-image-border-radius,24px);max-height:80lvh;display:block}.separator-cover-image-container,.course-cover-image-container{z-index:0;position:absolute;inset:0;overflow:clip}.separator-cover,.course-cover{height:var(--cover-height);overflow:hidden}.course-cover-content-row,.separator-cover-content-row{z-index:1;height:100%;margin-inline:0;position:relative}.course-cover-content-column,.separator-cover-content-column{align-items:center;display:flex}.course-cover-content-column{padding-inline:var(--pgn-exemplar-xblock-container-padding,32px)}.course-cover-text-container,.course-cover-text-content,.separator-cover-text-content{width:100%}.course-cover-text-content,.separator-cover-text-content{max-width:var(--pgn-exemplar-xblock-content-max-width,640px)}@media (width>=992px){.course-cover-content-column{margin-left:var(--pgn-exemplar-xblock-grid-gap,32px);padding-inline:var(--pgn-exemplar-xblock-section-gap,32px);order:2}.course-cover-text-container{padding-left:var(--pgn-exemplar-xblock-section-gap,32px)}.course-cover-text-content{margin-left:var(--pgn-exemplar-xblock-section-gap,32px)}}.separator-cover-content-row{justify-content:center}.separator-cover-content-column{text-align:center;padding-inline:var(--pgn-exemplar-xblock-container-padding,32px);justify-content:center}.separator-cover-text-content{margin-inline:auto}@media (width>=768px){.section-cover,.separator-cover,.course-cover{--cover-height:var(--pgn-cover-block-height-md,680px)}}@media (width>=992px){.section-cover,.separator-cover,.course-cover{--cover-height:var(--pgn-cover-block-height-lg,800px)}}.section-cover-top-header,.course-cover-top-header,.section-cover-subheader,.course-cover-subheader,.section-cover-main-header,.course-cover-main-header,.separator-cover-main-header,.separator-cover-description{font-weight:var(--pgn-typography-font-weight-bold,700)}.section-cover-top-header,.course-cover-top-header,.section-cover-subheader,.course-cover-subheader,.separator-cover-top-header{line-height:var(--pgn-typography-line-height-base,1.5)}.section-cover-top-header,.course-cover-top-header,.section-cover-main-header,.course-cover-main-header,.section-cover-subheader,.course-cover-subheader,.section-cover-description,.course-cover-description,.separator-cover-top-header,.separator-cover-main-header,.separator-cover-subheader,.separator-cover-description{margin-top:0}.section-cover-top-header,.course-cover-top-header,.section-cover-main-header,.course-cover-main-header,.course-cover-subheader{margin-bottom:var(--pgn-exemplar-xblock-studio-field-gap,16px)}.section-cover-subheader,.separator-cover-subheader{margin-bottom:var(--pgn-exemplar-xblock-studio-section-gap,24px)}.section-cover-description,.course-cover-description,.separator-cover-main-header,.separator-cover-description{margin-bottom:0}.section-cover-top-header{font-size:var(--pgn-typography-font-size-h4-base,1.5rem);color:var(--pgn-wgu-color-text-main-lake,var(--pgn-color-secondary-base))}.course-cover-top-header{font-size:var(--pgn-typography-font-size-h3-base,1.875rem)}.course-cover-subheader{font-size:var(--pgn-typography-font-size-h5-base,1.25rem);letter-spacing:0}.section-cover-description,.course-cover-description{font-size:var(--pgn-typography-font-size-base,1rem);line-height:var(--pgn-typography-line-height-sm,1.25);letter-spacing:0}.separator-cover-top-header{font-size:var(--pgn-typography-font-size-h6-base,1rem);font-weight:var(--pgn-typography-font-weight-semi-bold,600);margin-bottom:var(--pgn-exemplar-xblock-studio-field-gap,16px)}.separator-cover-main-header{font-size:var(--pgn-typography-font-size-display-mobile-1,3rem);text-align:center}.separator-cover-subheader{font-size:var(--pgn-typography-font-size-h5-base,1.25rem);text-align:center;margin-top:var(--pgn-exemplar-xblock-studio-section-gap,24px)}.separator-cover-description{width:100%;max-width:var(--pgn-exemplar-xblock-content-max-width,640px);font-size:var(--pgn-typography-font-size-base,1rem);line-height:var(--pgn-typography-line-height-lg,1.75);margin-inline:auto}@media (width>=768px){.separator-cover-top-header{font-size:var(--pgn-typography-font-size-h5-base,1.25rem)}.separator-cover-main-header{font-size:var(--pgn-typography-font-size-display-1,5rem)}.separator-cover-subheader{font-size:var(--pgn-typography-font-size-h4-base,1.5rem)}.separator-cover-description{font-size:var(--pgn-typography-font-size-lg,1.25rem)}}", g = (e, t, n) => {
	i({
		runtime: t,
		element: e,
		config: n.config,
		styles: h
	})(/* @__PURE__ */ (0, l.jsx)(m, { ...n.data }));
};
export { g as renderBlock };
