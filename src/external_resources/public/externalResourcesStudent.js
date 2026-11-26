import { n as e } from "./rolldown-runtime-CYdcPHCu.js";
import { H as t, R as n, V as r, X as i, c as a, t as o } from "./ResourceCard-BWrHna24.js";
// src/external-resources/student-ui/App.tsx
var s = /* @__PURE__ */ e(i(), 1), c = t(), l = ({ data: e }) => {
	let t = r("set_read"), [n, i] = (0, s.useState)(e.readResources), l = (e, r) => {
		let a = n;
		i(r ? [...a, e] : a.filter((t) => t !== e)), $.post(t, JSON.stringify({
			resourceId: e,
			read: r
		})).done((e) => {
			i(e.readResources);
		}).fail(() => {
			i(a);
		});
	};
	return /* @__PURE__ */ (0, c.jsxs)("div", {
		className: "xblock-external-resources",
		children: [/* @__PURE__ */ (0, c.jsx)("h4", {
			className: "external-resources-title",
			children: e.displayName
		}), /* @__PURE__ */ (0, c.jsx)("div", {
			className: "external-resources-list",
			children: e.resources.map((e) => /* @__PURE__ */ (0, c.jsx)(o, {
				resource: e,
				actions: /* @__PURE__ */ (0, c.jsxs)("div", {
					className: "read-checkbox",
					children: [/* @__PURE__ */ (0, c.jsx)(a.Checkbox, {
						checked: n.includes(e.id),
						onChange: (t) => l(e.id, t.target.checked),
						"aria-label": `Mark "${e.title}" as read`,
						controlClassName: "rounded"
					}), /* @__PURE__ */ (0, c.jsx)("span", {
						className: "read-checkbox-tooltip",
						"aria-hidden": "true",
						children: "Mark as read"
					})]
				}),
				isClickable: !0
			}, e.id))
		})]
	});
}, u = ".material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}.external-resource-card{padding:var(--pgn-spacing-spacer-4)}.external-resource-card.is-clickable:hover{cursor:pointer;background-color:var(--pgn-color-light-300)}.external-resource-card .card-type,.external-resource-card .card-publisher{color:var(--pgn-color-gray-700);font-family:var(--pgn-typography-headings-font-family,Sora, sans-serif);font-size:var(--pgn-typography-font-size-xs);font-weight:var(--pgn-typography-font-weight-bold);line-height:1.3333}.external-resource-card .card-type{margin-bottom:var(--pgn-spacing-spacer-1)}.external-resource-card .card-publisher{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.external-resource-card .card-title{color:var(--pgn-wgu-color-lake-800,var(--pgn-color-info-700));margin-bottom:var(--pgn-spacing-spacer-1);font-size:var(--pgn-typography-font-size-lg);font-weight:var(--pgn-typography-font-weight-bold);-webkit-line-clamp:2;line-clamp:2;overflow-wrap:anywhere;-webkit-box-orient:vertical;line-height:1.6;display:-webkit-box;overflow:hidden}.external-resource-card .card-thumbnail{width:102px;height:102px}.external-resource-card .pgn__card-body{min-width:0}.external-resource-thumbnail{flex-shrink:0;width:102px;height:102px;overflow:hidden}.external-resource-thumbnail .external-resource-icon-container,.external-resource-thumbnail .external-resource-icon{width:100%;height:100%}.external-resource-thumbnail .external-resource-icon{background-color:var(--pgn-wgu-color-lake-50,var(--pgn-color-light-300));color:var(--pgn-wgu-color-blue-muted,var(--pgn-color-info-400))}.external-resource-thumbnail .external-resource-image{object-fit:cover;width:100%;height:100%;display:block}.xblock-external-resources .external-resources-title{color:var(--pgn-wgu-color-lake-800,var(--pgn-color-info-700));margin-bottom:var(--pgn-spacing-spacer-4);line-height:1.5833}.xblock-external-resources .external-resources-list .external-resource-card:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.xblock-external-resources .external-resources-list .external-resource-card:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0}.read-checkbox{position:relative}.read-checkbox .read-checkbox-tooltip{top:50%;left:calc(100% + var(--pgn-spacing-spacer-2));z-index:10;padding:var(--pgn-spacing-spacer-2) var(--pgn-spacing-spacer-3);border-radius:var(--pgn-size-border-radius-base);background-color:var(--pgn-wgu-color-blue-muted,#3874bc);color:var(--pgn-color-white);font-size:var(--pgn-typography-font-size-sm);white-space:nowrap;display:none;position:absolute;transform:translateY(-50%)}.read-checkbox .read-checkbox-tooltip:before{content:\"\";border:6px solid #0000;border-right-color:var(--pgn-wgu-color-blue-muted,#3874bc);position:absolute;top:50%;right:100%;transform:translateY(-50%)}.read-checkbox:hover:has(input:not(:checked)) .read-checkbox-tooltip{display:block}", d = (e, t, r) => {
	n({
		runtime: e,
		element: t,
		config: r.config,
		styles: u
	})(/* @__PURE__ */ (0, c.jsx)(l, { data: r.data }));
};
export { d as renderBlock };
