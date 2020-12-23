(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{418:function(t,v,_){"use strict";_.r(v);var e=_(42),d=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"d2p-cropper-uploader"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#d2p-cropper-uploader"}},[t._v("#")]),t._v(" d2p-cropper-uploader")]),t._v(" "),_("h2",{attrs:{id:"props"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[t._v("Description")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Required")]),t._v(" "),_("th",[t._v("Default")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("value")]),t._v(" "),_("td",[t._v("初始图片url")]),t._v(" "),_("td",[_("code",[t._v("String")]),t._v(" / "),_("code",[t._v("Array")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("type")]),t._v(" "),_("td",[t._v("上传后端类型，[form, cos, qiniu , alioss]")]),t._v(" "),_("td",[_("code",[t._v("String")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("'cos'")])]),t._v(" "),_("tr",[_("td",[t._v("uploadTip")]),t._v(" "),_("td",[t._v("上传提示")]),t._v(" "),_("td",[_("code",[t._v("String")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("对话框标题")]),t._v(" "),_("td",[_("code",[t._v("String")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("cropperHeight")]),t._v(" "),_("td",[t._v("cropper的高度，默认为浏览器可视窗口高度的40%，最小270")]),t._v(" "),_("td",[_("code",[t._v("String")]),t._v(" / "),_("code",[t._v("Number")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("dialogWidth")]),t._v(" "),_("td",[t._v("对话框宽度，默认50%")]),t._v(" "),_("td",[_("code",[t._v("String")]),t._v(" / "),_("code",[t._v("Number")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("'50%'")])]),t._v(" "),_("tr",[_("td",[t._v("maxSize")]),t._v(" "),_("td",[t._v("图片大小限制，单位MB")]),t._v(" "),_("td",[_("code",[t._v("Number")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("5")])]),t._v(" "),_("tr",[_("td",[t._v("limit")]),t._v(" "),_("td",[t._v("图片数量限制,0为不限制")]),t._v(" "),_("td",[_("code",[t._v("Number")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("1")])]),t._v(" "),_("tr",[_("td",[t._v("accept")]),t._v(" "),_("td",[t._v("可接收的文件后缀")]),t._v(" "),_("td",[_("code",[t._v("String")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("'.jpg, .jpeg, .png, .gif, .webp'")])]),t._v(" "),_("tr",[_("td",[t._v("cropper")]),t._v(" "),_("td",[_("a",{attrs:{href:"https://github.com/fengyuanchen/cropperjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("cropperjs的参数"),_("OutboundLink")],1)]),t._v(" "),_("td",[_("code",[t._v("Object")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("uploader")]),t._v(" "),_("td",[t._v("上传参数，会临时覆盖全局上传配置参数"),_("RouterLink",{attrs:{to:"/guide/extends/uploader.html"}},[t._v("d2p-uploader")])],1),t._v(" "),_("td",[_("code",[t._v("Object")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("buildUrl")]),t._v(" "),_("td",[t._v("构建下载url方法,不影响提交的value")]),t._v(" "),_("td",[_("code",[t._v("Function")])]),t._v(" "),_("td",[_("code",[t._v("false")])]),t._v(" "),_("td",[t._v("function (value, item) {")])])])]),t._v(" "),_("p",[t._v("return typeof value === 'object' ? item.url : value;\n}|")]),t._v(" "),_("h2",{attrs:{id:"events"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Event Name")]),t._v(" "),_("th",[t._v("Description")]),t._v(" "),_("th",[t._v("Parameters")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("change")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("input")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])])])])])}),[],!1,null,null,null);v.default=d.exports}}]);