(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{386:function(t,a,e){"use strict";e.r(a);var v=e(42),l=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"配置-columns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-columns"}},[t._v("#")]),t._v(" 配置: columns")]),t._v(" "),e("h2",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),e("ul",[e("li",[t._v("说明: 表格列名")]),t._v(" "),e("li",[t._v("类型: String")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" key")]),t._v(" "),e("ul",[e("li",[t._v("说明: data 中对应列的键名")]),t._v(" "),e("li",[t._v("类型: String")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"width"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#width"}},[t._v("#")]),t._v(" width")]),t._v(" "),e("ul",[e("li",[t._v("说明: 对应列的宽度")]),t._v(" "),e("li",[t._v("类型: String")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"minwidth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minwidth"}},[t._v("#")]),t._v(" minWidth")]),t._v(" "),e("ul",[e("li",[t._v("说明: 对应列的最小宽度，与 width 的区别是 width 是固定的，minWidth 会把剩余宽度按比例分配给设置了 minWidth 的列")]),t._v(" "),e("li",[t._v("类型: String")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"fixed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fixed"}},[t._v("#")]),t._v(" fixed")]),t._v(" "),e("ul",[e("li",[t._v("说明: 列是否固定在左侧或者右侧，true 表示固定在左侧")]),t._v(" "),e("li",[t._v("类型: String / Boolean")]),t._v(" "),e("li",[t._v("可选值: true / left / right")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"renderheader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#renderheader"}},[t._v("#")]),t._v(" renderHeader")]),t._v(" "),e("ul",[e("li",[t._v("说明: 列标题 Label 区域渲染使用的 Function")]),t._v(" "),e("li",[t._v("类型: Function (h, { column, $index })")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"sortable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sortable"}},[t._v("#")]),t._v(" sortable")]),t._v(" "),e("ul",[e("li",[t._v("说明: 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件")]),t._v(" "),e("li",[t._v("类型: Boolean / String")]),t._v(" "),e("li",[t._v("可选值: true, false, 'custom'")]),t._v(" "),e("li",[t._v("默认值: false")])]),t._v(" "),e("h2",{attrs:{id:"sortmethod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sortmethod"}},[t._v("#")]),t._v(" sortMethod")]),t._v(" "),e("ul",[e("li",[t._v("说明: 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致")]),t._v(" "),e("li",[t._v("类型: Function (a, b)")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"sortby"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sortby"}},[t._v("#")]),t._v(" sortBy")]),t._v(" "),e("ul",[e("li",[t._v("说明: 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推")]),t._v(" "),e("li",[t._v("类型: String / Array / Function (row, index)")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"sortorders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sortorders"}},[t._v("#")]),t._v(" sortOrders")]),t._v(" "),e("ul",[e("li",[t._v("说明: 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序")]),t._v(" "),e("li",[t._v("类型: array")]),t._v(" "),e("li",[t._v("可选值: 数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序")]),t._v(" "),e("li",[t._v("默认值: ['ascending', 'descending', null]")])]),t._v(" "),e("h2",{attrs:{id:"resizable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resizable"}},[t._v("#")]),t._v(" resizable")]),t._v(" "),e("ul",[e("li",[t._v("说明: 对应列是否可以通过拖动改变宽度（需要在 "),e("code",[t._v("options")]),t._v(" 中设置 border 属性为 true")]),t._v(" "),e("li",[t._v("类型: Boolean")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: true")])]),t._v(" "),e("h2",{attrs:{id:"formatter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#formatter"}},[t._v("#")]),t._v(" formatter")]),t._v(" "),e("ul",[e("li",[t._v("说明: 用来格式化内容")]),t._v(" "),e("li",[t._v("类型: Function (row, column, cellValue, index)")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"showoverflowtooltip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#showoverflowtooltip"}},[t._v("#")]),t._v(" showOverflowTooltip")]),t._v(" "),e("ul",[e("li",[t._v("说明: 当内容过长被隐藏时显示 tooltip")]),t._v(" "),e("li",[t._v("类型: Boolean")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: false")])]),t._v(" "),e("h2",{attrs:{id:"align"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#align"}},[t._v("#")]),t._v(" align")]),t._v(" "),e("ul",[e("li",[t._v("说明: 对齐方式")]),t._v(" "),e("li",[t._v("类型: String")]),t._v(" "),e("li",[t._v("可选值: left / center / right")]),t._v(" "),e("li",[t._v("默认值: left")])]),t._v(" "),e("h2",{attrs:{id:"headeralign"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#headeralign"}},[t._v("#")]),t._v(" headerAlign")]),t._v(" "),e("ul",[e("li",[t._v("说明: 表头对齐方式，若不设置该项，则使用表格的对齐方式")]),t._v(" "),e("li",[t._v("类型: String")]),t._v(" "),e("li",[t._v("可选值: left / center / right")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"classname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#classname"}},[t._v("#")]),t._v(" className")]),t._v(" "),e("ul",[e("li",[t._v("说明: 列的 className")]),t._v(" "),e("li",[t._v("类型: String")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"labelclassname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#labelclassname"}},[t._v("#")]),t._v(" labelClassName")]),t._v(" "),e("ul",[e("li",[t._v("说明: 当前列标题的自定义类名")]),t._v(" "),e("li",[t._v("类型: String")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"filters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filters"}},[t._v("#")]),t._v(" filters")]),t._v(" "),e("ul",[e("li",[t._v("说明: 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。")]),t._v(" "),e("li",[t._v("类型: Function ({ text, value })")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"filterplacement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filterplacement"}},[t._v("#")]),t._v(" filterPlacement")]),t._v(" "),e("ul",[e("li",[t._v("说明: 过滤弹出框的定位")]),t._v(" "),e("li",[t._v("类型: String")]),t._v(" "),e("li",[t._v("可选值: top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end")]),t._v(" "),e("li",[t._v("默认值: bottom")])]),t._v(" "),e("h2",{attrs:{id:"filtermultiple"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filtermultiple"}},[t._v("#")]),t._v(" filterMultiple")]),t._v(" "),e("ul",[e("li",[t._v("说明: 数据过滤的选项是否多选")]),t._v(" "),e("li",[t._v("类型: Boolean")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: true")])]),t._v(" "),e("h2",{attrs:{id:"filtermethod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filtermethod"}},[t._v("#")]),t._v(" filterMethod")]),t._v(" "),e("ul",[e("li",[t._v("说明: 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。")]),t._v(" "),e("li",[t._v("类型: Function (value, row, column)")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"filteredvalue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filteredvalue"}},[t._v("#")]),t._v(" filteredValue")]),t._v(" "),e("ul",[e("li",[t._v("说明: 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。")]),t._v(" "),e("li",[t._v("类型: Array")]),t._v(" "),e("li",[t._v("可选值: 无")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"component-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-name"}},[t._v("#")]),t._v(" component.name")]),t._v(" "),e("ul",[e("li",[t._v("说明: 表格渲染的组件名，"),e("RouterLink",{attrs:{to:"/d2-crud-x/component.html"}},[t._v("更多component参数")])],1),t._v(" "),e("li",[t._v("类型: String")]),t._v(" "),e("li",[t._v("可选值: 任何组件")]),t._v(" "),e("li",[t._v("默认值: 无")])]),t._v(" "),e("h2",{attrs:{id:"component-valuebinding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-valuebinding"}},[t._v("#")]),t._v(" component.valueBinding")]),t._v(" "),e("ul",[e("li",[t._v("说明: value绑定属性，当component.name 配置的是一个无value属性的组件时（即非v-model组件）,会将该cell的值赋值给该组件的指定属性")]),t._v(" "),e("li",[t._v("类型: String | {prop:'目标属性',handle() }")]),t._v(" "),e("li",[t._v("可选值: 组件的属性名")]),t._v(" "),e("li",[t._v("默认值: 无")]),t._v(" "),e("li",[t._v("示例：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//下面示例可以在表格中显示图片\ncomponent:{\n    name: 'el-image',\n    valueBinding:'src'  //当前格子的值（row[key]）将会赋值给el-image组件的src属性\n}\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// valueBinding 支持传入一个Object，对value做一些处理\ncomponent:{\n    name: 'el-image',\n    valueBinding:{\n        prop: 'src',  //当前格子的值（row[key]）将会赋值给el-image组件的src属性\n        handle({value}){  //对value做一些处理\n            return 'http://xxxx.com/'+value\n        }\n    }\n}\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);