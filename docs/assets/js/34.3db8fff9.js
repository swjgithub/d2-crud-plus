(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{505:function(r,e,t){"use strict";t.r(e);var a=t(53),d=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[r._v("#")]),r._v(" 介绍")]),r._v(" "),t("p",[r._v("d2-crud-plus 是基于 d2-admin 的 d2-crud 的扩展,旨在简化 d2-crud 配置，快速开发crud功能。"),t("br"),r._v("\nGithub: "),t("a",{attrs:{href:"https://github.com/greper/d2-crud-plus",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://github.com/greper/d2-crud-plus"),t("OutboundLink")],1),t("br"),r._v("\n示例地址："),t("a",{attrs:{href:"http://qiniu.veryreader.com/D2CrudPlusExample/index.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://qiniu.veryreader.com/D2CrudPlusExample/index.html"),t("OutboundLink")],1)]),r._v(" "),t("p",[t("a",{attrs:{href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg",alt:"lerna"}}),t("OutboundLink")],1)]),r._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/d2-projects/d2-admin",target:"_blank"}},[t("img",{attrs:{src:"https://raw.githubusercontent.com/d2-projects/d2-admin/master/docs/image/d2-admin%402x.png",width:"200"}})])]),r._v(" "),t("h2",{attrs:{id:"特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[r._v("#")]),r._v(" 特性")]),r._v(" "),t("h3",{attrs:{id:"_1-面向配置的crud编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-面向配置的crud编程"}},[r._v("#")]),r._v(" 1. 面向配置的crud编程")]),r._v(" "),t("ul",[t("li",[r._v("根据crud配置开发crud功能")])]),r._v(" "),t("h3",{attrs:{id:"_2-数据字典功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据字典功能"}},[r._v("#")]),r._v(" 2. 数据字典功能")]),r._v(" "),t("ul",[t("li",[r._v("支持本地和远程获取")]),r._v(" "),t("li",[r._v("配合select，轻松实现数据存的是value值，需要对应字典的label来展示的需求")])]),r._v(" "),t("h3",{attrs:{id:"_3-字段类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-字段类型"}},[r._v("#")]),r._v(" 3. 字段类型")]),r._v(" "),t("ul",[t("li",[r._v("通过配置字段类型“column.type”来简化配置")]),r._v(" "),t("li",[r._v("根据字段类型不同，自动生成不同的表单组件")]),r._v(" "),t("li",[r._v("支持自定义字段类型")])]),r._v(" "),t("h3",{attrs:{id:"_4-扩展组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-扩展组件"}},[r._v("#")]),r._v(" 4. 扩展组件")]),r._v(" "),t("p",[r._v("通过扩展自定义组件，扩展自定义类型")]),r._v(" "),t("h3",{attrs:{id:"_5-d2-crud-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-d2-crud-x"}},[r._v("#")]),r._v(" 5. d2-crud-x")]),r._v(" "),t("p",[r._v("基于d2-crud的修改版，功能与官方d2-crud一致"),t("br"),r._v("\n在官方基础上修复了一些bug，增强了部分功能【推荐使用d2-crud-x】"),t("br"),r._v("\n见"),t("a",{attrs:{href:"https://github.com/greper/d2-crud/",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://github.com/greper/d2-crud/"),t("OutboundLink")],1)]),r._v(" "),t("ul",[t("li",[r._v("支持隐藏表格，自定义列表展示方式【配置options.hide=true】"),t("br"),r._v(" "),t("a",{attrs:{href:"http://qiniu.veryreader.com/D2CrudPlusExample/index.html#/hotel/dashboard",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://qiniu.veryreader.com/D2CrudPlusExample/index.html#/hotel/dashboard"),t("OutboundLink")],1)]),r._v(" "),t("li",[r._v("支持slot编写各个字段的form表单"),t("br"),r._v(" "),t("a",{attrs:{href:"http://qiniu.veryreader.com/D2CrudPlusExample/index.html#/demo/form/slot",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://qiniu.veryreader.com/D2CrudPlusExample/index.html#/demo/form/slot"),t("OutboundLink")],1)]),r._v(" "),t("li",[r._v("自定义组件支持form-data-change事件（官方是不支持的）"),t("br"),r._v(" "),t("a",{attrs:{href:"http://qiniu.veryreader.com/D2CrudPlusExample/index.html#/demo/form/uploader",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://qiniu.veryreader.com/D2CrudPlusExample/index.html#/demo/form/uploader"),t("OutboundLink")],1),t("br"),r._v("\n例如：上传头像后可以看到获取到事件，并将获取到的md5、size值赋值给form表单的其他字段")]),r._v(" "),t("li",[r._v("修复官方的form-data-change某些情况下获取到的值不是最新的bug")]),r._v(" "),t("li",[r._v("支持行展开")])]),r._v(" "),t("h2",{attrs:{id:"关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关系"}},[r._v("#")]),r._v(" 关系")]),r._v(" "),t("ul",[t("li",[t("code",[r._v("d2-crud")]),r._v(" : 官方的一个crud框架，使用起来相对繁琐，且已久不维护")]),r._v(" "),t("li",[t("code",[r._v("d2-crud-x")]),r._v(" ：fork"),t("code",[r._v("d2-crud")]),r._v("改造而来，威力加强版（修复bug，增强功能）")]),r._v(" "),t("li",[t("code",[r._v("d2-crud-plus")]),r._v(": 辅助"),t("code",[r._v("d2-crud-x")]),r._v("或"),t("code",[r._v("d2-crud")]),r._v("，让它们使用起来更简单")]),r._v(" "),t("li",[t("code",[r._v("d2-crud-plus-example")]),r._v(": 以"),t("code",[r._v("d2-admin")]),r._v("为基础的示例工程，可以单独复制此项目作为你的启动项目")]),r._v(" "),t("li",[t("code",[r._v("d2-crud-plus-extends")]),r._v(": 实用的扩展组件（文件上传组件、地区选择组件、树形选择组件等）")])]),r._v(" "),t("h2",{attrs:{id:"请先了解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请先了解"}},[r._v("#")]),r._v(" 请先了解")]),r._v(" "),t("p",[r._v("本项目基于d2-admin 以及 d2-crud"),t("br"),r._v("\n本文档假设您已熟悉vue、ElementUI 以及 d2-crud的基础知识")]),r._v(" "),t("h3",{attrs:{id:"_1-elementui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-elementui"}},[r._v("#")]),r._v(" 1. ElementUI")]),r._v(" "),t("p",[r._v("Github: "),t("a",{attrs:{href:"https://github.com/ElemeFE/element",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://github.com/ElemeFE/element"),t("OutboundLink")],1),t("br"),r._v("\n文档："),t("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://element.eleme.cn/#/zh-CN/component/installation"),t("OutboundLink")],1)]),r._v(" "),t("h3",{attrs:{id:"_2-d2-admin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-d2-admin"}},[r._v("#")]),r._v(" 2. d2-admin")]),r._v(" "),t("p",[r._v("Github: "),t("a",{attrs:{href:"https://github.com/d2-projects/d2-admin",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://github.com/d2-projects/d2-admin"),t("OutboundLink")],1),t("br"),r._v("\n文档："),t("a",{attrs:{href:"https://d2.pub/zh/doc/d2-admin/",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://d2.pub/zh/doc/d2-admin/"),t("OutboundLink")],1)]),r._v(" "),t("h3",{attrs:{id:"_3-d2-crud-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-d2-crud-x"}},[r._v("#")]),r._v(" 3. d2-crud-x")]),r._v(" "),t("p",[r._v("文档："),t("RouterLink",{attrs:{to:"/d2-crud-x/"}},[r._v("d2-crud-x")])],1)])}),[],!1,null,null,null);e.default=d.exports}}]);