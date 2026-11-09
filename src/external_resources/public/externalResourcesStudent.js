import { $ as e, H as t, U as n, Z as r, c as i, t as a, z as o } from "./ResourceCard-yL-mtVd4.js";
//#region src/external-resources/student-ui/App.tsx
var s = /* @__PURE__ */ e(r(), 1), c = n(), l = ({ data: e }) => {
	let n = t("set_read"), [r, o] = (0, s.useState)(e.readResources), l = (e, t) => {
		let i = r;
		o(t ? [...i, e] : i.filter((t) => t !== e)), $.post(n, JSON.stringify({
			resourceId: e,
			read: t
		})).done((e) => {
			o(e.readResources);
		}).fail(() => {
			o(i);
		});
	};
	return /* @__PURE__ */ (0, c.jsxs)("div", {
		className: "xblock-external-resources",
		children: [/* @__PURE__ */ (0, c.jsx)("div", {
			className: "external-resources-title",
			children: /* @__PURE__ */ (0, c.jsx)("span", {
				className: "h4",
				children: e.displayName
			})
		}), e.resources.map((t, n) => {
			let o;
			return e.resources.length > 1 && (o = n == 0 ? "first-card" : n == e.resources.length - 1 ? "last-card" : "middle-card"), /* @__PURE__ */ (0, c.jsx)(a, {
				resource: t,
				actions: /* @__PURE__ */ (0, c.jsxs)("div", {
					className: "read-checkbox",
					children: [/* @__PURE__ */ (0, c.jsx)(i.Checkbox, {
						checked: r.includes(t.id),
						onChange: (e) => l(t.id, e.target.checked),
						"aria-label": `Mark "${t.title}" as read`,
						controlClassName: "rounded"
					}), /* @__PURE__ */ (0, c.jsx)("span", {
						className: "read-checkbox-tooltip",
						"aria-hidden": "true",
						children: "Mark as read"
					})]
				}),
				className: o,
				isClickable: !0
			}, t.id);
		})]
	});
}, u = ".material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}.external-resource-card{padding:var(--pgn-spacing-spacer-4)}.external-resource-card.is-clickable:hover{cursor:pointer;background-color:var(--pgn-color-light-300)}.external-resource-card .card-type,.external-resource-card .card-publisher{color:var(--pgn-color-gray-700);font-family:var(--pgn-typography-headings-font-family,Sora, sans-serif);font-size:var(--pgn-typography-font-size-xs);font-weight:var(--pgn-typography-font-weight-bold);line-height:1.3333}.external-resource-card .card-type{margin-bottom:var(--pgn-spacing-spacer-1)}.external-resource-card .card-publisher{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.external-resource-card .card-title{color:var(--pgn-wgu-color-lake-800,var(--pgn-color-info-700));margin-bottom:var(--pgn-spacing-spacer-1);font-size:var(--pgn-typography-font-size-lg);font-weight:var(--pgn-typography-font-weight-bold);-webkit-line-clamp:2;line-clamp:2;overflow-wrap:anywhere;-webkit-box-orient:vertical;line-height:1.6;display:-webkit-box;overflow:hidden}.external-resource-card .card-thumbnail{width:102px;height:102px}.external-resource-card .pgn__card-body{flex:auto;min-width:0}.external-resource-card.pgn__card .pgn__card-footer{flex:none;width:auto}.external-resource-thumbnail{flex-shrink:0;width:102px;height:102px;overflow:hidden}.external-resource-thumbnail .external-resource-icon-container,.external-resource-thumbnail .external-resource-icon{width:100%;height:100%}.external-resource-thumbnail .external-resource-icon{background-color:var(--pgn-wgu-color-lake-50,var(--pgn-color-light-300));color:var(--pgn-wgu-color-blue-muted,var(--pgn-color-info-400))}.external-resource-thumbnail .external-resource-image{object-fit:cover;width:100%;height:100%;display:block}.xblock-external-resources .external-resources-title span{color:var(--pgn-wgu-color-lake-800,var(--pgn-color-info-700));line-height:1.5833}.xblock-external-resources .external-resources-title{margin-bottom:var(--pgn-spacing-spacer-4)}.xblock-external-resources .external-resource-card.first-card,.xblock-external-resources .external-resource-card.middle-card{border-bottom-right-radius:0;border-bottom-left-radius:0}.xblock-external-resources .external-resource-card.last-card,.xblock-external-resources .external-resource-card.middle-card{border-top-left-radius:0;border-top-right-radius:0}.read-checkbox{position:relative}.read-checkbox .read-checkbox-tooltip{top:50%;left:calc(100% + var(--pgn-spacing-spacer-2));z-index:10;padding:var(--pgn-spacing-spacer-2) var(--pgn-spacing-spacer-3);border-radius:var(--pgn-size-border-radius-base);background-color:var(--pgn-wgu-color-blue-muted,#3874bc);color:var(--pgn-color-white);font-size:var(--pgn-typography-font-size-sm);white-space:nowrap;display:none;position:absolute;transform:translateY(-50%)}.read-checkbox .read-checkbox-tooltip:before{content:\"\";border:6px solid #0000;border-right-color:var(--pgn-wgu-color-blue-muted,#3874bc);position:absolute;top:50%;right:100%;transform:translateY(-50%)}.read-checkbox:hover:has(input:not(:checked)) .read-checkbox-tooltip{display:block}", d = (e, t, n) => {
	o({
		runtime: e,
		element: t,
		config: n.config,
		styles: u
	})(/* @__PURE__ */ (0, c.jsx)(l, { data: n.data }));
};
//#endregion
export { d as renderBlock };
