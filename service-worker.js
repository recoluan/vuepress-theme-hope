if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,f)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=f(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"3b1f7a9ccd7fb8ced09cbc276a0464ae"},{url:"article/index.html",revision:"1335a02c4052d89c5c075f311a92c977"},{url:"assets/css/0.styles.5d41afa9.css",revision:"a8e5fe4d6ccd90665b1b2cd70fd5fe29"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/102.9eb0bd0d.js",revision:"39ed92499d7839d657f38a8712eca220"},{url:"assets/js/app.02d86994.js",revision:"3d1914f603909ebd9b2f1aa0910575a5"},{url:"assets/js/layout-Blog.588c2838.js",revision:"37e3542f85cb6609eedc92c6d669747c"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.ab8b999f.js",revision:"cde2c2296ef8e8adf302b585a2aa238b"},{url:"assets/js/layout-Layout.a9aa2a8c.js",revision:"cfadd45f6b0b71b1824af948ea0ed9ac"},{url:"assets/js/layout-NotFound.6e2e7c4e.js",revision:"6040745a6fc94d6a0b5cf35d4890ba2b"},{url:"assets/js/page--051692f2.575e3892.js",revision:"500129e0c0ca286e716c4e33d6eba870"},{url:"assets/js/page--0ab466d2.4a4c3305.js",revision:"f61c97bb43c0e15f0f14c81def073c12"},{url:"assets/js/page--1c9738b4.a2a9c850.js",revision:"2f6994096b3846c752445d0b675346de"},{url:"assets/js/page--5dafe67a.02514b77.js",revision:"c7ae6cd99e03d9fa6378fb0b2bd893c1"},{url:"assets/js/page--6426a252.8d030994.js",revision:"8d0cbe234621878567dd7148b664cc98"},{url:"assets/js/page--cde16ddc.0a0ce4e8.js",revision:"e05ee94c6598b4a7ad4ffea658c8d97b"},{url:"assets/js/page-About Vuepress.67675e76.js",revision:"168a2f0579c7fa1ebf263af7456c0bda"},{url:"assets/js/page-Basic.b18e020d.js",revision:"9420e82aebb755135c7b75589e0ecd93"},{url:"assets/js/page-Blog homepage.2eb07c8e.js",revision:"36d6d80f0b785dd270ba08625bdc7238"},{url:"assets/js/page-Blog related.626763e7.js",revision:"81fefdc4a6d4049195cfdecffb03478b"},{url:"assets/js/page-Comment Function.9bf2ea29.js",revision:"6e3a1b7e29718998cf127842ec6ad127"},{url:"assets/js/page-Common problems.04c2ec95.js",revision:"06c7ff842c38a2c292599ae0b3070eb5"},{url:"assets/js/page-Config Docs.61a257d9.js",revision:"4c78b0995efce4d8ad43095c7e0d2067"},{url:"assets/js/page-Custom alignment.cf5a52bc.js",revision:"daeae81e6bb82b360649e9f124f3cb58"},{url:"assets/js/page-Darkmode and Theme color.a8496c7c.js",revision:"b2af72c9c89ba70bea7f01ee2da1a506"},{url:"assets/js/page-Default Theme Config.f623cbf2.js",revision:"82c1cab26b98b6d8e38573aa3f0633fd"},{url:"assets/js/page-Demos.5fbf953b.js",revision:"747d9f2be2435870f75b75857a1f1fc8"},{url:"assets/js/page-Emoji List.1c968bf5.js",revision:"0301b49a35b6adcdec0e2db82b80283b"},{url:"assets/js/page-Emoji 列表.def1dcc5.js",revision:"b88d8ac2f19145fb4e4b66471d56a437"},{url:"assets/js/page-Encryption function.93162283.js",revision:"f37301d3aa9772d6f4f5b5c705288aeb"},{url:"assets/js/page-File Structure.49e3333e.js",revision:"6a812ee771dee66e9afea07115d8c739"},{url:"assets/js/page-Flowchart.27fd2cc2.js",revision:"a60c6a8cab24738b2e13626774b533f4"},{url:"assets/js/page-Footnote.313c0d83.js",revision:"d088a084c37e267375bf34bd51de9c55"},{url:"assets/js/page-Home Page.1c39d72f.js",revision:"24c61df8095bad3e4dfb262d6cfec737"},{url:"assets/js/page-Home.20960ae6.js",revision:"edf7581111ae9aae10f338e939faafe5"},{url:"assets/js/page-Introduction.a7853141.js",revision:"5470de641d4a7fe97920948d4f7a4213"},{url:"assets/js/page-Layout.3bfc16a2.js",revision:"c6ec44470d4d0d302777602cdd85987d"},{url:"assets/js/page-Markdown DEMO.346df69f.js",revision:"9bec5a40c8383fde464589e9318bbefb"},{url:"assets/js/page-Markdown Introduction.aa3de142.js",revision:"af62e9f46d5fef50259f702011d3c3a6"},{url:"assets/js/page-Markdown 介绍.ac19dc23.js",revision:"4efb7caf46cab3b7103499479bfac655"},{url:"assets/js/page-Markdown 新语法.f85c637c.js",revision:"172becf755e6e1b2efcea958e1cf5e10"},{url:"assets/js/page-Markdown示例.1b230e1e.js",revision:"e5279e108e3030391abf007d3538f607"},{url:"assets/js/page-Markup.f3ff096b.js",revision:"d3b086850446eb5bc8b18ba6f18d3f3a"},{url:"assets/js/page-NavBar.681d1bf7.js",revision:"485126551d599dce8f2f75e43f65f4b6"},{url:"assets/js/page-New Component.06c91c2f.js",revision:"33e4ee7dd9710cac9978e6843f1275c8"},{url:"assets/js/page-New feature.3b04d1b4.js",revision:"1232d53c67da25cec76bb09e899a9b67"},{url:"assets/js/page-New syntax in Markdown.29dc802b.js",revision:"6d0b614a744dfd15e5541f4848d81101"},{url:"assets/js/page-Page Configuration.15c9d818.js",revision:"6e86e0e72861cec99d4fe7aa37195ed5"},{url:"assets/js/page-Page information.a02f56aa.js",revision:"3070a0fbd082b9e314eb95d9234c3ec9"},{url:"assets/js/page-Page.189b1455.js",revision:"aeb31976e0e5d95cab6e0e872fb0f83e"},{url:"assets/js/page-Plugin Description.85aa8f04.js",revision:"003e49c5d0b96f98ba421b97d8861092"},{url:"assets/js/page-Plugins.dafce3db.js",revision:"b63722bf2b9bacc05a90f33ec02f74d6"},{url:"assets/js/page-Sidebar.6e11f338.js",revision:"5c945dd4c5936516673bad9c6c3568b1"},{url:"assets/js/page-stylus configuration.c2474fdb.js",revision:"165b0a1780e80acd867f62a4004a5d39"},{url:"assets/js/page-stylus 配置.abf05cde.js",revision:"9dabb4f09c6ba8afa85a46a6c0e78bbc"},{url:"assets/js/page-Superscript and Subscript.76213779.js",revision:"12bfc9ed250061dc42f7f5ba1bc90220"},{url:"assets/js/page-Tex Support.81c89ac3.js",revision:"c5ef2c37f40f626e885654043fa145f4"},{url:"assets/js/page-Tex 语法支持.39f9cb98.js",revision:"3e2612e850fcecd5b7d3def76caf386b"},{url:"assets/js/page-Theme Config.217beefe.js",revision:"32d08a16fd755488bd3d95ebe53abf86"},{url:"assets/js/page-TS support.7bcf5bb7.js",revision:"bb1834ae8c71a096b51e8c9f6a2bd8ac"},{url:"assets/js/page-TS 支持.bcb2c954.js",revision:"03b4a00691b12fe2240a9380e291d283"},{url:"assets/js/page-Vuepress Cases.57c0b7c6.js",revision:"7edbbc30ab3e5c97e8d32d0f0d3b459c"},{url:"assets/js/page-Vuepress commands.beeed5eb.js",revision:"4326d25ebd0eba5a85c6789ef7c66552"},{url:"assets/js/page-Vuepress 案例.54521e10.js",revision:"95b0ab103776ffd9b4f2d5c18c675a43"},{url:"assets/js/page-vuepress-plugin-container.4991b6aa.js",revision:"d35d6a93c0e88bc3d16bbffe84621c0f"},{url:"assets/js/page-vuepress-plugin-copyright.74c4f522.js",revision:"e7df66a680d83295673d005383d3db84"},{url:"assets/js/page-Vuepress.04ae138e.js",revision:"210fe63504f7e955443bf363735f63e1"},{url:"assets/js/page-Writing a theme.0f12b3f2.js",revision:"6ba3e41e65889eb2577e1e19af1f9ce9"},{url:"assets/js/page-上下角标.8d615baf.js",revision:"ba424a8982c66377b32d2fcef6b1a366"},{url:"assets/js/page-主题配置.c9d3fb15.js",revision:"a74ad0c586df3853619f3d764c8b2f47"},{url:"assets/js/page-人物.88ce6fcb.js",revision:"0bf4da6978e05cb4fccddefff7351cef"},{url:"assets/js/page-介绍.a4d1967e.js",revision:"70579e904ca6ced1c17e68ba5afe013a"},{url:"assets/js/page-侧边栏.c862b0cb.js",revision:"e8376869ee3900f7a45749a4940ded2c"},{url:"assets/js/page-加密功能.df59dc2a.js",revision:"82f789581abdb3227ff38bddbb4b8a24"},{url:"assets/js/page-博客相关.4a542947.js",revision:"95fb0000257356cb1fe0b2a33167197c"},{url:"assets/js/page-博客首页.aa2fc9de.js",revision:"315fcf28d468dc44de4cbeb710f5e8a1"},{url:"assets/js/page-地点.cb525ba3.js",revision:"59b50daf8385fabfc1ca09513f301784"},{url:"assets/js/page-基础知识.58ec8448.js",revision:"ff9ab420fa4d38468f57d15e0d5ec1e4"},{url:"assets/js/page-对象.34a6ed86.js",revision:"fdaf9cfd8edcf4f36c95589c89f5f8ed"},{url:"assets/js/page-导航栏.a843f36b.js",revision:"b8f031ef382cced2ebd4ff6bad6c72b9"},{url:"assets/js/page-布局.480ed6f7.js",revision:"6ebcf006ad0586164ec11f5aadfbd89d"},{url:"assets/js/page-常见问题.3d2de089.js",revision:"6b958c31023e24f79c757a436aea01d1"},{url:"assets/js/page-开发主题.d99fbeb5.js",revision:"d2851a03a51c5510784f0c73d1a8d05d"},{url:"assets/js/page-插件.39f05f21.js",revision:"330315f0fd896d2a83a000b44047f4b9"},{url:"assets/js/page-插件说明.1fbf9949.js",revision:"cee0b11b708b645c0c32df6cf14564c7"},{url:"assets/js/page-文件结构介绍.1ae46f75.js",revision:"78655d3fe4c8a10062e40a5e858941e7"},{url:"assets/js/page-新增特性.6ee5d8ef.js",revision:"b28d74422e574a16246ec56046c3e506"},{url:"assets/js/page-新增组件.ee4e5626.js",revision:"e00ee98628f59df7833203cd59a58653"},{url:"assets/js/page-标记.d34c521a.js",revision:"4253ab54ea615b02aaeb33a36aa077d6"},{url:"assets/js/page-流程图支持.8a23f211.js",revision:"02b543452e58fe7eaa368d86794ac1b0"},{url:"assets/js/page-深色模式与主题色.1590c955.js",revision:"15ac66b01646c9bb0330892e70909bab"},{url:"assets/js/page-符号.957ed08f.js",revision:"de39c9cf56b0c7d886b226a94cedf972"},{url:"assets/js/page-脚注.a76f729b.js",revision:"7eee5731368bef2c1bae024479b039e1"},{url:"assets/js/page-自定义对齐.dc3373b0.js",revision:"c02acd97d08cd008c09a03fe7013b791"},{url:"assets/js/page-自然.480c264d.js",revision:"56e1c188194b280d35914afb6b6cfef3"},{url:"assets/js/page-评论功能.bf6407a4.js",revision:"c4ab539ff30be9610c10c96f33de93fd"},{url:"assets/js/page-配置文档.4d5784ee.js",revision:"301091f00fd64c56a54dc21b46254d1b"},{url:"assets/js/page-页面.766e1277.js",revision:"4e06733e3a62a43e22cc26b355117054"},{url:"assets/js/page-页面信息.4f88fdfe.js",revision:"c85a83109175750a0132d8325fc226c4"},{url:"assets/js/page-页面配置.10bc64e4.js",revision:"02a16a223459fe97b181f231deb67d12"},{url:"assets/js/page-项目指令.f5a072c0.js",revision:"7a480623e66cb94634a780574874d838"},{url:"assets/js/page-项目案例.b8820b12.js",revision:"9a39d9bc32ef3158e9a45ad53a8d9eb5"},{url:"assets/js/page-首页.1a9806a0.js",revision:"e358cc5e95e7d78d9e788284388384c4"},{url:"assets/js/page-默认主题配置.7547318c.js",revision:"e46b7219ac7ad39ab80f1090abb93bf4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.384195cf.js",revision:"4d5f4ce0c166cdb7dafcee3fad98aebf"},{url:"assets/js/vendors~layout-Layout.3a1a8abe.js",revision:"46d4e17418a55580e151ff8678f8d0fa"},{url:"basic/index.html",revision:"d3778c7f26695e889037d92032670b9e"},{url:"basic/markdown/demo.html",revision:"7a266cc0d9d94694006f03cfb56e83ba"},{url:"basic/markdown/emoji/index.html",revision:"e4c5cef43fd06f58cea4e44b0c2d7146"},{url:"basic/markdown/emoji/locate.html",revision:"895474f65b45a0de473284ffebfa8281"},{url:"basic/markdown/emoji/nature.html",revision:"668129a5954e428f7252abe7cfd51490"},{url:"basic/markdown/emoji/object.html",revision:"a5bea745340178cf8ee1e6da269061ff"},{url:"basic/markdown/emoji/people.html",revision:"1f66a781bdd2ff75391832817e565211"},{url:"basic/markdown/emoji/symbol.html",revision:"c95d04f826527922cc2f484e2a699e4b"},{url:"basic/markdown/index.html",revision:"97a73c893038fb788ab2a7547ef82240"},{url:"basic/vuepress/case.html",revision:"dee71b7c150537c4376b8ae2d5f68714"},{url:"basic/vuepress/command.html",revision:"589c99941491d3e1be7c11be2ca110be"},{url:"basic/vuepress/file.html",revision:"ebd7668a84d0d5b7d794bcb55d6c8c87"},{url:"basic/vuepress/index.html",revision:"5e66e0bee9effbd7c43beabef43dce9d"},{url:"basic/vuepress/plugin.html",revision:"15d9d8092df2681c5592ee9f8c4e386b"},{url:"basic/vuepress/theme/config.html",revision:"65b9ac4f4c79b6e743265e4946ec1f5a"},{url:"basic/vuepress/theme/dev.html",revision:"8a8c88ce237c336732dd58dadf61212d"},{url:"basic/vuepress/theme/index.html",revision:"821ab63d4672baeaf1ead4639de94cd6"},{url:"category/aconfigpi/index.html",revision:"e55320c09bc420e7222077e0bc57b0da"},{url:"category/config/index.html",revision:"af46fa945d90d0aca60e180ad2a4a6d5"},{url:"category/config/page/2/index.html",revision:"094a16f6de413836c5abbdcd5610e280"},{url:"category/FAQ/index.html",revision:"3942b531654c3a86dea607014b7b9c58"},{url:"category/feature/index.html",revision:"1dc54e7c930a7a6cdf9783d2c7b04e6e"},{url:"category/feature/page/2/index.html",revision:"2457b3dc8a112506d87785c935dbf9a2"},{url:"category/index.html",revision:"195098d83d59d38a3a602423223b6bb4"},{url:"category/instruction/index.html",revision:"4ef19f61ddac1b7846d6282e94b042ae"},{url:"category/layout/index.html",revision:"0691d9896f2bfec1cae3540571992aa5"},{url:"category/layout/page/2/index.html",revision:"e85d16f3a13f059c89c9f242928196cf"},{url:"category/markdown/index.html",revision:"c0ecb915144fef304ae9df123bb3a503"},{url:"config/index.html",revision:"2c82126e89074aa820b8d3129d68d6f7"},{url:"config/page.html",revision:"360b12e68547ee9f8605669f39a35dc0"},{url:"config/plugin/container.html",revision:"e67b22b5799742efc509d6773830ca70"},{url:"config/plugin/copyright.html",revision:"6d1d3fec9303c42ad68236070a3396d1"},{url:"config/plugin/index.html",revision:"df696e7d5c6d2673d2b4a1a8ad6a2a44"},{url:"config/plugin/medium-zoom.html",revision:"997ab78bded89732d4a1d56e45602016"},{url:"config/plugin/pwa.html",revision:"a8b20776e4bcf380c9f3917d97f2350c"},{url:"config/stylus.html",revision:"79650be8851502d898e3480e2a5d02d3"},{url:"config/themeConfig.html",revision:"d06d460dd3494bba798f90d129feca23"},{url:"demo/index.html",revision:"9658e7c13d2322fb0a1322540e846ec1"},{url:"en/basic/index.html",revision:"43ddbf72e44eecc1bc929c882290a4d8"},{url:"en/basic/markdown/demo.html",revision:"2bf90ff81ec38907535262c21f28c7d0"},{url:"en/basic/markdown/emoji.html",revision:"1d2e35812538220e6bb40b758af723ec"},{url:"en/basic/markdown/index.html",revision:"615c22f39a8be66224e71d044f6e9360"},{url:"en/basic/vuepress/case.html",revision:"51a59262fed8815cb121a4b657b00163"},{url:"en/basic/vuepress/command.html",revision:"01cb579d28994f9c408334b97a37aff8"},{url:"en/basic/vuepress/file.html",revision:"0d0643543e7c6db31a0da1bbdb4164c4"},{url:"en/basic/vuepress/index.html",revision:"376e968239cee39aaafe9e5931b6bea3"},{url:"en/basic/vuepress/plugin.html",revision:"96874500c46329d72fe1a6844d19bbe0"},{url:"en/basic/vuepress/theme/config.html",revision:"b1c7acab691b34a805e64ec3e81b5a8b"},{url:"en/basic/vuepress/theme/dev.html",revision:"b6665d0de44f5a1f62045be7b5d45861"},{url:"en/basic/vuepress/theme/index.html",revision:"acf5f1ddaedcfff62d030e65e241bbab"},{url:"en/config/index.html",revision:"e4867578a1e62bbb19c6f947e207726d"},{url:"en/config/page.html",revision:"397d8b66607a60412168411fb67a43b6"},{url:"en/config/plugin/container.html",revision:"b684585beb88e6f8958aa110440fcd98"},{url:"en/config/plugin/copyright.html",revision:"fa43bcf0be6238e941b7d957057da668"},{url:"en/config/plugin/index.html",revision:"74bafc2094cfad9bb629709699bb819d"},{url:"en/config/plugin/medium-zoom.html",revision:"c16df7d6181d58315cb2ccdcae96fafa"},{url:"en/config/plugin/pwa.html",revision:"eefdc72771b2d12ad3523e64315cf8d0"},{url:"en/config/stylus.html",revision:"5da7a3aae59c2adbdb0996ada1fbba4c"},{url:"en/config/themeConfig.html",revision:"37f52cb232952d1fa0ccc85780a986ee"},{url:"en/demo/index.html",revision:"c0845f4bb8510c091bf77198dcfaebe6"},{url:"en/FAQ/index.html",revision:"ae1b888c783e1b16a26d65391234e99c"},{url:"en/guide/feature/blog.html",revision:"9c9fc3e9c4725b9a0aef89f838fc8b08"},{url:"en/guide/feature/comment.html",revision:"278b1ca66dca4cf343722287379d2a81"},{url:"en/guide/feature/component.html",revision:"46466e5cd4d9a26d8d663ff442b21eba"},{url:"en/guide/feature/encrypt.html",revision:"6f8a71817d4ab9a2a2bf2526125367de"},{url:"en/guide/feature/index.html",revision:"42829936e861255f4b2654c62a190cbb"},{url:"en/guide/feature/markdown/align.html",revision:"0bcfdf339cf894629c09d4e3bd86e3b7"},{url:"en/guide/feature/markdown/flowchart.html",revision:"62a7644a0869cd553de858c34b8d52c3"},{url:"en/guide/feature/markdown/footnote.html",revision:"b1492fbd23763c20497903945cf856a6"},{url:"en/guide/feature/markdown/index.html",revision:"71123929fd884c1fe64840069e074670"},{url:"en/guide/feature/markdown/mark.html",revision:"eb0b57bf8cf7af0299f05bc40992a5d2"},{url:"en/guide/feature/markdown/sup-sub.html",revision:"b212bec5c092f6a44599d22a462979f6"},{url:"en/guide/feature/markdown/tex.html",revision:"4a3c9d565d794f648e55c3ce629fed03"},{url:"en/guide/feature/page-info.html",revision:"ad56c87c617c2f62c0fc87734cfea643"},{url:"en/guide/feature/theme.html",revision:"4b310271cd9b290dc012d627d3033592"},{url:"en/guide/feature/typescript.html",revision:"d818133950fa3549b48e914b13e05a06"},{url:"en/guide/index.html",revision:"d78ccb0c5b7991de9cff2f92c3c05257"},{url:"en/guide/install.html",revision:"8588107c184cbb2bddb31c854c4812ba"},{url:"en/guide/layout/blog.html",revision:"ee33e167169a89a1fe4f23b5182e4a03"},{url:"en/guide/layout/home.html",revision:"1c951b4802bea6418fb0f0fe964811ac"},{url:"en/guide/layout/index.html",revision:"dc3a9ef3244ce364d772ac6a1c2c78d7"},{url:"en/guide/layout/navbar.html",revision:"f5019fa1aca2c53bd67a9ebcccb0acf8"},{url:"en/guide/layout/page.html",revision:"713fbd15ff4807f10d3949f2da14577c"},{url:"en/guide/layout/sidebar.html",revision:"18eb0ad8a6d771c96f24d59200859a7b"},{url:"en/index.html",revision:"ac94dad62dfebb6d6a3598025a9f54b9"},{url:"FAQ/index.html",revision:"0e345c29bc93b058993e68ea79557441"},{url:"guide/feature/blog.html",revision:"5b9710dc6096b0fbde40f346cb15489d"},{url:"guide/feature/comment.html",revision:"9e242e0fad728f9f3dc5ba56edc7b06e"},{url:"guide/feature/component.html",revision:"44624356224e7e8c6ff6c2d5503bd365"},{url:"guide/feature/encrypt.html",revision:"46598b66c63468e6c00c15ea373284f0"},{url:"guide/feature/index.html",revision:"7292c674214937b0a988e12995cb4da5"},{url:"guide/feature/markdown/align.html",revision:"9a4fc2f68ecd2293f39466c56be90316"},{url:"guide/feature/markdown/flowchart.html",revision:"ad5a19aef1fcd43fe0e04b26046a950f"},{url:"guide/feature/markdown/footnote.html",revision:"b39f59a181f6956d49248ed25b3cf092"},{url:"guide/feature/markdown/index.html",revision:"f4c801e289c78e0e583be865ff004016"},{url:"guide/feature/markdown/mark.html",revision:"14e93fa2a3e3eadcf0074f99585dfa9a"},{url:"guide/feature/markdown/sup-sub.html",revision:"270a677310cdfbf1064809d4c0cb3830"},{url:"guide/feature/markdown/tex.html",revision:"9f06ae0bd166d9bf953f65a3db31d04d"},{url:"guide/feature/page-info.html",revision:"5a7385ac4701f7fd9661a048680746b5"},{url:"guide/feature/theme.html",revision:"c2caa1d73e2294956d33c6fc8cd4dad6"},{url:"guide/feature/typescript.html",revision:"fc5976cbb4361c1432cf0c7d0612a558"},{url:"guide/index.html",revision:"78544989ef2f564c9f789ff83e3e7166"},{url:"guide/install.html",revision:"42b1efc73f4c6217b5e6108910d5dfee"},{url:"guide/layout/blog.html",revision:"0ec48dd53481d9e8aafb01a6e3095412"},{url:"guide/layout/home.html",revision:"e64b16f0ccef39b8f5da1cb9237d786f"},{url:"guide/layout/index.html",revision:"8510eccf9fc69f82df07f8f5a650f9fc"},{url:"guide/layout/navbar.html",revision:"3a8045eb876e81d9ec73f39dde48a0df"},{url:"guide/layout/page.html",revision:"c6945e396486fa804e1753cc50205452"},{url:"guide/layout/sidebar.html",revision:"b9f64342f4d44ff75258e116ce883fee"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"6c7c7ac69963cec25eaef13c511e040a"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/blog/index.html",revision:"dc10152bd8b2bcb86ecaf9bdde17608e"},{url:"tag/comment/index.html",revision:"9ec44c7b4cb7c118c703214f14fb8f81"},{url:"tag/components/index.html",revision:"ff48a7bf2a4ee76f2e6f97d0570388af"},{url:"tag/config/index.html",revision:"ef7588b9c8633bb9914cd2bad524ce06"},{url:"tag/config/page/2/index.html",revision:"b75f2d9cf300a75bc49a6af28fe383b1"},{url:"tag/emoji/index.html",revision:"9fc0ebc60d459dd1416e95fce4973f38"},{url:"tag/encrypt/index.html",revision:"ced66ec7ac8f5b89700a7ac645349924"},{url:"tag/feature/index.html",revision:"64c0b9a0b9f1ea3697881bec21852efb"},{url:"tag/feature/page/2/index.html",revision:"e0e3368b7a6e175977336998fed2359f"},{url:"tag/frontmatter/index.html",revision:"85ee2b55d75ae7b06f9e6b005213b8c6"},{url:"tag/function/index.html",revision:"6f15ebd6c1217199d6dcc924d58bd1e8"},{url:"tag/function/page/2/index.html",revision:"03464942db2e8d6d291b7c3609339b01"},{url:"tag/home/index.html",revision:"9e0d31348002c50304e7df22428c1796"},{url:"tag/index.html",revision:"af72539f9281546d03cae12b80ae54d6"},{url:"tag/intro/index.html",revision:"b487592a140e410008fd5cff1f427ce2"},{url:"tag/layout/index.html",revision:"d44aa157872315736be72d508fa37a22"},{url:"tag/layout/page/2/index.html",revision:"3e037f1f3b29b42069c4e181b7c22ee6"},{url:"tag/markdown/index.html",revision:"79aafefe64e2d22f5714aebb545113e3"},{url:"tag/markdown/page/2/index.html",revision:"43e9869129de455ab3c626bf19fc4cbe"},{url:"tag/markdown/page/3/index.html",revision:"6bd52fa972932424880df704c85f9487"},{url:"tag/navbar/index.html",revision:"bf4730771b98dcd29ba66e1ecd2a7cc1"},{url:"tag/page-info/index.html",revision:"4a73d146ad1f2369d8f2fabc09734a1c"},{url:"tag/plugin/index.html",revision:"975b4fab3b529382ada21fc555e87356"},{url:"tag/sidebar/index.html",revision:"b74523b1b04e0cc02aff815cd872459a"},{url:"tag/style/index.html",revision:"c9c3724df777bb63d7ccdfcc84e4a742"},{url:"tag/themeConfig/index.html",revision:"fb35ad1e597458a1f80b0fe3a3a7d8ba"},{url:"tag/typescript/index.html",revision:"f0596a2453bc7d0ef474172911839643"},{url:"tag/vuepress/index.html",revision:"dd332cfaf637a5eb676cda624b746c30"},{url:"timeline/index.html",revision:"af5ce345c91be71d082dd1ef02839ba5"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
