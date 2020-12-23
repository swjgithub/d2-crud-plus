(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{393:function(e,n,t){"use strict";t.r(n);var a=t(42),l=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"配置-add-edit-view-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-add-edit-view-template"}},[e._v("#")]),e._v(" 配置: add|edit|view-template")]),e._v(" "),t("p",[e._v("表单字段配置")]),e._v(" "),t("h2",{attrs:{id:"key-column"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-column"}},[e._v("#")]),e._v(" key:column")]),e._v(" "),t("p",[e._v("key:column形式配置多个字段\n示例：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("addTemplate:{\n    userId:{ //表单字段\n        title:'用户id', //字段label\n        component:{ //字段组件\n            name: 'el-input'\n        }\n    },\n    userId:{ //字段\n        title:'用户id', //字段label\n        component:{ //字段组件配置\n            name: 'el-input'\n        }\n    },\n}\n")])])]),t("h3",{attrs:{id:"column-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-title"}},[e._v("#")]),e._v(" column.title")]),e._v(" "),t("ul",[t("li",[e._v("说明: 表单 label 的名称")]),e._v(" "),t("li",[e._v("类型: String")]),e._v(" "),t("li",[e._v("可选值: 无")]),e._v(" "),t("li",[e._v("默认值: 无")])]),e._v(" "),t("h3",{attrs:{id:"column-value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-value"}},[e._v("#")]),e._v(" column.value")]),e._v(" "),t("ul",[t("li",[e._v("说明: 表单模板的默认值")]),e._v(" "),t("li",[e._v("类型: 无")]),e._v(" "),t("li",[e._v("可选值: 无")]),e._v(" "),t("li",[e._v("默认值: 无")])]),e._v(" "),t("h3",{attrs:{id:"column-component"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-component"}},[e._v("#")]),e._v(" column.component")]),e._v(" "),t("ul",[t("li",[e._v("说明: 表单渲染的组件配置，"),t("RouterLink",{attrs:{to:"/d2-crud-x/component.html"}},[e._v("更多关于component配置")])],1),e._v(" "),t("li",[e._v("类型: Object")]),e._v(" "),t("li",[e._v("可选值:")]),e._v(" "),t("li",[e._v("默认值: 无")])]),e._v(" "),t("h3",{attrs:{id:"column-component-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-component-name"}},[e._v("#")]),e._v(" column.component.name")]),e._v(" "),t("ul",[t("li",[e._v("说明: 表单渲染的组件名")]),e._v(" "),t("li",[e._v("类型: String")]),e._v(" "),t("li",[e._v("可选值: el-input / dict-select / dict-radio / dict-checkbox 等任何支持v-model的表单组件")]),e._v(" "),t("li",[e._v("默认值: 无")])]),e._v(" "),t("h3",{attrs:{id:"column-component-render"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-component-render"}},[e._v("#")]),e._v(" column.component.render")]),e._v(" "),t("ul",[t("li",[e._v("说明: 使用render函数创建组件，支持jsx语法。(component.name优先级更高)")]),e._v(" "),t("li",[e._v("类型: Function (h)")]),e._v(" "),t("li",[e._v("可选值: 无")]),e._v(" "),t("li",[e._v("默认值: 无")])]),e._v(" "),t("h3",{attrs:{id:"column-component-span"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-component-span"}},[e._v("#")]),e._v(" column.component.span")]),e._v(" "),t("ul",[t("li",[e._v("说明: 表单布局所占栅格数，栅格布局请参考 "),t("a",{attrs:{href:"http://element-cn.eleme.io/#/zh-CN/component/layout",target:"_blank",rel:"noopener noreferrer"}},[e._v("Layout 布局"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("类型: Number")]),e._v(" "),t("li",[e._v("可选值: 无")]),e._v(" "),t("li",[e._v("默认值: 无")])]),e._v(" "),t("h3",{attrs:{id:"column-component-offset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-component-offset"}},[e._v("#")]),e._v(" column.component.offset")]),e._v(" "),t("ul",[t("li",[e._v("说明: 表单栅格布局偏移量，栅格布局请参考 "),t("a",{attrs:{href:"http://element-cn.eleme.io/#/zh-CN/component/layout",target:"_blank",rel:"noopener noreferrer"}},[e._v("Layout 布局"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("类型: Number")]),e._v(" "),t("li",[e._v("可选值: 无")]),e._v(" "),t("li",[e._v("默认值: 无")])]),e._v(" "),t("h2",{attrs:{id:"group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group"}},[e._v("#")]),e._v(" group")]),e._v(" "),t("ul",[t("li",[e._v("说明: 表单分组配置, "),t("code",[e._v("__group__")]),e._v("，与普通的字段key做区分")]),e._v(" "),t("li",[e._v("类型: Object")]),e._v(" "),t("li",[e._v("可选值: 无")]),e._v(" "),t("li",[e._v("默认值: 无")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("addTemplate:{\n    __group__:{ //分组信息\n        accordion: false,\n        type: \"collapse\",\n        groups: { //分组列表\n            base: { //分组key，可以随意命名\n                title: '商品基础', //分组标题\n                icon: 'el-icon-goods', //分组icon\n                columns:{ // 分组内包含的字段配置，key:column形式配置多个字段\n                    title: { //字段配置\n                        title:'商品标题', //字段label\n                        component:{ // 字段组件配置\n                            name: 'el-input'\n                        }\n                    },\n                    images: { \n                        title:'商品图片',\n                        component:{\n                            name: 'el-upload'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n\n\n")])])])])}),[],!1,null,null,null);n.default=l.exports}}]);