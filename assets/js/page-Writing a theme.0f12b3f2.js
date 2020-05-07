(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{620:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"writing-a-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-theme"}},[t._v("#")]),t._v(" Writing a theme")]),t._v(" "),s("p",[t._v("To write a theme, create a "),s("code",[t._v(".vuepress/theme")]),t._v(" directory in your docs root, and then create a "),s("code",[t._v("Layout.vue")]),t._v(" file:")]),t._v(" "),s("p",[t._v("::: vue\n.\n└─ .vuepress\n └─ theme\n   └─ Layout.vue\n:::")]),t._v(" "),s("p",[t._v("From there it’s the same as developing a normal Vue application. It’s entirely up to you how to organize your theme.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The files placed under theme folder will be applied to local theme automatically, no need to edit "),s("code",[t._v("config.js")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"content-outlet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-outlet"}},[t._v("#")]),t._v(" Content Outlet")]),t._v(" "),s("p",[t._v("The compiled content of the current "),s("code",[t._v(".md")]),t._v(" file being rendered will be available as a special "),s("code",[t._v("<Content/>")]),t._v(" global component. You will need to render it somewhere in your layout to display the content of the page. The simplest theme can be a single "),s("code",[t._v("Layout.vue")]),t._v(" component with the following content:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme-container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("strong",[t._v("Also see:")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/markdown-slot.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown Slot"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"directory-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[t._v("#")]),t._v(" Directory Structure")]),t._v(" "),s("p",[t._v("One "),s("code",[t._v("Layout.vue")]),t._v(" might not be enough, and you might also want to define more layout components in the theme for using on different pages. You may also want to customize the "),s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/config/README.md#palette-styl",target:"_blank",rel:"noopener noreferrer"}},[t._v("palette"),s("OutboundLink")],1),t._v(", and even apply some plugins.")]),t._v(" "),s("p",[t._v("So it’s time to reorganize your theme, an agreed theme directory structure is as follows:")]),t._v(" "),s("p",[t._v("::: vue\ntheme\n├── "),s("code",[t._v("global-components")]),t._v("\n│ └── xxx.vue\n├── "),s("code",[t._v("components")]),t._v("\n│ └── xxx.vue\n├── "),s("code",[t._v("layouts")]),t._v("\n│   ├── Layout.vue "),s("em",[t._v("("),s("strong",[t._v("Mandatory")]),t._v(")")]),t._v("\n│   └── 404.vue\n├── "),s("code",[t._v("styles")]),t._v("\n│   ├── index.styl\n│   └── palette.styl\n├── "),s("code",[t._v("templates")]),t._v("\n│   ├── dev.html\n│   └── ssr.html\n├── "),s("code",[t._v("index.js")]),t._v("\n├── "),s("code",[t._v("enhanceApp.js")]),t._v("\n└── package.json\n:::")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("theme/global-components")]),t._v(": Components under this directory will be automatically registered as global components. For details, please check out "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-register-components"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("theme/components")]),t._v(": Your components.")]),t._v(" "),s("li",[s("code",[t._v("theme/layouts")]),t._v(": Layout components of the theme, where "),s("code",[t._v("Layout.vue")]),t._v(" is required.")]),t._v(" "),s("li",[s("code",[t._v("theme/styles")]),t._v(": Global style and palette.")]),t._v(" "),s("li",[s("code",[t._v("theme/templates")]),t._v(": Edit default template.")]),t._v(" "),s("li",[s("code",[t._v("theme/index.js")]),t._v(": Entry file of theme configuration.")]),t._v(" "),s("li",[s("code",[t._v("theme/enhanceApp.js")]),t._v(": Theme level enhancements.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("When you publish your theme as an npm package, if you don’t have any theme configuration, that means you don’t have "),s("code",[t._v("theme/index.js")]),t._v(", you’ll need to set the "),s("code",[t._v('"main"')]),t._v(" field to "),s("code",[t._v("layouts/Layout.vue")]),t._v(" in "),s("code",[t._v("package.json")]),t._v(", only in this way VuePress can properly resolve the theme.")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"layouts/Layout.vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])]),t._v(" "),s("h2",{attrs:{id:"layout-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layout-component"}},[t._v("#")]),t._v(" Layout Component")]),t._v(" "),s("p",[t._v("Suppose your theme layouts folder is as follows:")]),t._v(" "),s("p",[t._v("::: vue\ntheme\n└── "),s("code",[t._v("layouts")]),t._v("\n   ├── Layout.vue\n   ├── AnotherLayout.vue\n   └── 404.vue\n:::")]),t._v(" "),s("p",[t._v("Then, all the pages will use "),s("code",[t._v("Layout.vue")]),t._v(" as layout component by default, while the routes not matching will use "),s("code",[t._v("404.vue")]),t._v(".")]),t._v(" "),s("p",[t._v("To switch the layout of some pages to "),s("code",[t._v("AnotherLayout.vue")]),t._v(", all you have to do is update the frontmatter of this page:")]),t._v(" "),s("div",{staticClass:"language-markdown line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[t._v("layout: AnotherLayout\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),s("p",[t._v("Each layout component may render distinct pages. To apply some global UI (for example global header), consider using "),s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/option-api.md#globallayout",target:"_blank",rel:"noopener noreferrer"}},[t._v("globalLayout"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"apply-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-plugins"}},[t._v("#")]),t._v(" Apply plugins")]),t._v(" "),s("p",[t._v("You can apply some plugins to the theme via "),s("code",[t._v("theme/index.js")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/pwa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        serviceWorker"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        updatePopup"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"site-and-page-metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#site-and-page-metadata"}},[t._v("#")]),t._v(" Site and Page Metadata")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Layout")]),t._v(" component will be invoked once for every "),s("code",[t._v(".md")]),t._v(" file in "),s("code",[t._v("docs")]),t._v(", and the metadata for the entire site and that specific page will be exposed respectively as "),s("code",[t._v("this.$site")]),t._v(" and "),s("code",[t._v("this.$page")]),t._v(" properties which are injected into every component in the app.")]),t._v(" "),s("p",[t._v("This is the value of "),s("code",[t._v("$site")]),t._v(" of this website:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue-powered Static Site Generator"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1524027677000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[s("code",[t._v("title")]),t._v(", "),s("code",[t._v("description")]),t._v(" and "),s("code",[t._v("base")]),t._v(" are copied from respective fields in "),s("code",[t._v(".vuepress/config.js")]),t._v(". "),s("code",[t._v("pages")]),t._v(" contains an array of metadata objects for each page, including its path, page title (explicitly specified in "),s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/markdown.md#front-matter",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML frontmatter"),s("OutboundLink")],1),t._v(" or inferred from the first header on the page), and any YAML frontmatter data in that file.")]),t._v(" "),s("p",[t._v("This is the "),s("code",[t._v("$page")]),t._v(" object for this page you are looking at:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1524847549000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/guide/custom-themes.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Custom Themes"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"headers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("If the user provided "),s("code",[t._v("themeConfig")]),t._v(" in "),s("code",[t._v(".vuepress/config.js")]),t._v(", it will also be available as "),s("code",[t._v("$site.themeConfig")]),t._v(". You can use this to allow users to customize behavior of your theme - for example, specifying categories and page order. You can then use these data together with "),s("code",[t._v("$site.pages")]),t._v(" to dynamically construct navigation links.")]),t._v(" "),s("p",[t._v("Don’t forget that "),s("code",[t._v("this.$route")]),t._v(" and "),s("code",[t._v("this.$router")]),t._v(" are also available as part of Vue Router’s API.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),s("p",[s("code",[t._v("lastUpdated")]),t._v(" is the UNIX timestamp of this file’s last git commit, for more details, check out "),s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.md#last-updated",target:"_blank",rel:"noopener noreferrer"}},[t._v("Last Updated"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"content-excerpt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-excerpt"}},[t._v("#")]),t._v(" Content Excerpt")]),t._v(" "),s("p",[t._v("If a Markdown file contains a "),s("code",[t._v("\x3c!-- more --\x3e")]),t._v(" comment, any content above the comment will be extracted and exposed as "),s("code",[t._v("$page.excerpt")]),t._v(". If you are building custom theme for blogging, this data can be used to render a post list with excerpts.")]),t._v(" "),s("h2",{attrs:{id:"app-level-enhancements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-level-enhancements"}},[t._v("#")]),t._v(" App Level Enhancements")]),t._v(" "),s("p",[t._v("Themes can enhance the Vue app that VuePress uses by exposing an "),s("code",[t._v("enhanceApp.js")]),t._v(" file at the root of the theme. The file should "),s("code",[t._v("export default")]),t._v(" a hook function which will receive an object containing some app-level values. You can use this hook to install more Vue plugins, register global components, or add router hooks:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the version of Vue being used in the VuePress app")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the options for the root Vue instance")]),t._v("\n  router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the router instance for the app")]),t._v("\n  siteData "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// site metadata")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...apply enhancements to the app")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);