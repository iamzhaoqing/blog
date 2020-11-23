(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{365:function(t,e,s){"use strict";s.r(e);var a=s(21),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"设置checkbox-radio的选中状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置checkbox-radio的选中状态"}},[t._v("#")]),t._v(" 设置checkbox, radio的选中状态")]),t._v(" "),s("p",[t._v("在input标签中，给选框添加属性 "),s("code",[t._v("checked")]),t._v("，属性值为任何值此选框都为选中状态，包括 "),s("code",[t._v("false")]),t._v(", "),s("code",[t._v("0")]),t._v(", 或者无值。")]),t._v(" "),s("p",[t._v("用js改变选框的状态可以使用：")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" inp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.checkbox'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ninp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("checked "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'checked'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'checked'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'checked'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("方法1中，设置 "),s("code",[t._v("inp")]),t._v(" 的 "),s("code",[t._v("checked")]),t._v(" 属性等于任意一个逻辑值为真的值都会让选框选中，如："),s("code",[t._v("'false'")]),t._v(", "),s("code",[t._v("'0'")]),t._v(", "),s("code",[t._v("1")]),t._v(", "),s("code",[t._v("true")]),t._v("。逻辑值为假时，可设置选框为非选中，如 "),s("code",[t._v("false")]),t._v(", "),s("code",[t._v("0")]),t._v(", "),s("code",[t._v("空字符串")]),t._v(", "),s("code",[t._v("NaN")]),t._v("。")]),t._v(" "),s("p",[t._v("方法2中，"),s("code",[t._v("setAttribute()")]),t._v(" 方法会给 "),s("code",[t._v("inp")]),t._v(" 添加一个属性，为任何值都会使选框为选中状态。与在 "),s("code",[t._v("input")]),t._v(" 标签中添加 "),s("code",[t._v("checked")]),t._v(" 属性效果相同。")]),t._v(" "),s("p",[s("code",[t._v("removeAttribute('checked')")]),t._v(" 方法可以删除 "),s("code",[t._v("checked")]),t._v(" 属性，让选框变成未选中，但是删除后再用鼠标点击选中，因为已经没有 "),s("code",[t._v("checked")]),t._v(" 属性，再次使用 "),s("code",[t._v("removeAttribute()")]),t._v(" 方法无效。")]),t._v(" "),s("h2",{attrs:{id:"判断checkbox-radio的选中状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断checkbox-radio的选中状态"}},[t._v("#")]),t._v(" 判断checkbox, radio的选中状态")]),t._v(" "),s("p",[t._v("判断选框是否选中可以使用 "),s("code",[t._v("int.checked")]),t._v(" ，得到的值为 "),s("code",[t._v("false")]),t._v(" 或者 "),s("code",[t._v("true")]),t._v(" ，类型为布尔值，分别表示未选中和选中。")]),t._v(" "),s("p",[t._v("如果使用 "),s("code",[t._v("inp.getAttribute('checked')")]),t._v(" 得到的是"),s("code",[t._v("inp")]),t._v(" 标签中 "),s("code",[t._v("checked")]),t._v(" 属性值，类型为 "),s("code",[t._v("String")]),t._v(" ，不能准确对应选中状态。如：")]),t._v(" "),s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("checked")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\ninp.getAttribute('checked')  \n//input为选中，而'checked'的属性值为空字符串。\n")])])]),s("p",[s("code",[t._v("getAttribute()")]),t._v(" 和 "),s("code",[t._v("setAttribute()")]),t._v(" 只是两个操作标签属性的方法，因为 "),s("code",[t._v("checked")]),t._v(" 是"),s("strong",[t._v("布尔属性")]),t._v("，设置和获取选框的选中状态使用 "),s("code",[t._v("inp.checked")]),t._v(" 更合理。")]),t._v(" "),s("h2",{attrs:{id:"布尔属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布尔属性"}},[t._v("#")]),t._v(" 布尔属性")]),t._v(" "),s("p",[t._v("布尔属性通常用来表示标签的状态或指定规则, 一般属性值和属性名相同。如表单中的 "),s("code",[t._v("checked")]),t._v(", "),s("code",[t._v("selected")]),t._v(", "),s("code",[t._v("disabled")]),t._v(", "),s("code",[t._v("readonly")]),t._v("，其他布尔属性还有：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("hidden")]),t._v("：如同 "),s("code",[t._v("display: none")]),t._v("，优先级低于CSS。")]),t._v(" "),s("li",[s("strong",[t._v("multiple")]),t._v("：select标签中，按住 "),s("code",[t._v("command/ctrl")]),t._v(" 键可以实现多选，在 "),s("code",[t._v("type='file'")]),t._v(" 的 "),s("code",[t._v("input")]),t._v(" 标签中可以选中多个文件。")]),t._v(" "),s("li",[s("strong",[t._v("contentEditable")]),t._v("：使普通元素可编辑。")]),t._v(" "),s("li",[s("strong",[t._v("async")]),t._v("："),s("code",[t._v("<script async='async' src='a.js'><\/script>")]),t._v(" 设置a.js异步加载，资源加载完时立即执行。")]),t._v(" "),s("li",[s("strong",[t._v("defer")]),t._v("：与async相似，在 "),s("code",[t._v("script")]),t._v(" 标签中使用，实现js异步加载，当所有资源加载完，页面渲染完毕后执行。")]),t._v(" "),s("li",[s("strong",[t._v("autofocus")]),t._v("：使 "),s("code",[t._v("input")]),t._v(" 元素自动获取焦点。")]),t._v(" "),s("li",[s("strong",[t._v("require")]),t._v("：规定 "),s("code",[t._v("input")]),t._v(" 在提交前必填。")]),t._v(" "),s("li",[s("strong",[t._v("spellcheck")]),t._v(": 在文本框、文本域、可编辑的的标签中使用，可以对元素内容做拼写检查。")])]),t._v(" "),s("p",[t._v("通常用 "),s("code",[t._v("元素.属性")]),t._v(" 的形式设置和获取布尔属性的值，不适合用 "),s("code",[t._v("getAttribute()")]),t._v(" "),s("code",[t._v("setAttribute")]),t._v(" 来操作。")]),t._v(" "),s("p",[t._v("jQuery的方法 "),s("code",[t._v("prop()")]),t._v(" 和 "),s("code",[t._v("setAttribute()")]),t._v(" 类似，当传入的值逻辑为真时，选框被设置成选中。"),s("code",[t._v("is(':checked')")]),t._v(" 和 "),s("code",[t._v("元素.属性")]),t._v(" 形式一样，可以准确判断选框是否选中，返回一个 "),s("code",[t._v("true")]),t._v(" 或者 "),s("code",[t._v("false")]),t._v(" ，是布尔类型。")])])}),[],!1,null,null,null);e.default=v.exports}}]);