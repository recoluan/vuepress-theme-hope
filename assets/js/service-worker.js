if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"0bcfd096ad24e516f471d040f5b214c4"},{url:"api/index.html",revision:"b103c34c2df6b1ae098a289b664657c7"},{url:"api/page.html",revision:"ccda34b739a00941e3deb75c08c46a8f"},{url:"api/plugin/container.html",revision:"a01c434217365157bc8587f895845b46"},{url:"api/plugin/copyright.html",revision:"a5d84d76857455a79a66c02c2d6b01e6"},{url:"api/plugin/index.html",revision:"ed9b85357dcf4fb9a7b0071f9a1b002d"},{url:"api/plugin/md-enhance.html",revision:"e8a592b165f68d70c08c70834ebcf868"},{url:"api/plugin/medium-zoom.html",revision:"7f4493fa1631afa75d7ce645d36f7f47"},{url:"api/plugin/pwa.html",revision:"eaecba5106fe83636aec36ef48d9b5ed"},{url:"api/stylus.html",revision:"7dceebf6b3e0339beafaf206cf81e3de"},{url:"api/themeConfig.html",revision:"b48c9d6eac4c058e49a831dedb63412c"},{url:"article/index.html",revision:"5910d8fc6d21e802e9fa70f5ebf36bb4"},{url:"assets/css/0.styles.cdb3152c.css",revision:"e32360be01ffc326668d913fdc8a2e61"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/108.e807f67b.js",revision:"351891a1e5bf3e90f2a463036cd5ed20"},{url:"assets/js/app.0fdd8766.js",revision:"5ba5cbed9ac3e9fd9e6c291596ba4a9c"},{url:"assets/js/layout-Blog.d145037c.js",revision:"c995e5a655b7a69b82930c2241f4b5d4"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.f889502c.js",revision:"e68d82cf80ee925a125cc78812d4ee9b"},{url:"assets/js/layout-Layout.3b7a96e4.js",revision:"e68318fd3616007d30bef6e3577c77b8"},{url:"assets/js/layout-NotFound.6b9f7786.js",revision:"011de2af23c29c2520184340f138f21e"},{url:"assets/js/page--0ab466d2.389bc1b4.js",revision:"3a8ad2dd9b45c5ee9a3459e108cc0a51"},{url:"assets/js/page--1f262314.22a7ea65.js",revision:"b7e0658c47b35d0543e1a9958f016631"},{url:"assets/js/page--5dafe67a.40a66203.js",revision:"c67b34323a503ba0b5ab9f5bc6693788"},{url:"assets/js/page--86453650.0d7ee080.js",revision:"97acf26c41cc6c234359a96cc82d4c42"},{url:"assets/js/page--9108a39c.f3f003d7.js",revision:"7feb15612c6467c882006eddd4663a3b"},{url:"assets/js/page--d7fc60dc.1d7cda5a.js",revision:"e4444b82f395912e13a6260290b47e20"},{url:"assets/js/page-About Vuepress.195b749a.js",revision:"6ca5be2b0be4f499cd9a86758e816f21"},{url:"assets/js/page-API Docs.a2e81180.js",revision:"ee1a820fcc33da3fb1e84b788d2924f4"},{url:"assets/js/page-API 文档.6cd76b88.js",revision:"0273eb74c2523d7baaef075cf9210643"},{url:"assets/js/page-Basic.db17812c.js",revision:"dc5d43281cf88e4b4f166ac06b453576"},{url:"assets/js/page-Blog homepage.8263ff89.js",revision:"e5125578300c1207a453e965f79fdb11"},{url:"assets/js/page-Blog related.cecffac5.js",revision:"0fd92bf88b78445ee7f9dc3b625a44e7"},{url:"assets/js/page-Breadcrumb.c97df16e.js",revision:"1804416fec9d5d25134290fe5978ea71"},{url:"assets/js/page-Comment Function.90ea6790.js",revision:"9ab57d9bce4486b17467e59aac640249"},{url:"assets/js/page-Common problems.28986a3d.js",revision:"739a5dc2b563a2a0d2c861167da225f3"},{url:"assets/js/page-Custom alignment.f7a12d3e.js",revision:"50481a849cd85b18e6e40d4c61640118"},{url:"assets/js/page-Darkmode.bfa755f6.js",revision:"446b21054fdf97fb14e5585e49d182a3"},{url:"assets/js/page-Default Theme Config.48f6d65e.js",revision:"bf9f7277ce1d82c8da7206261fadb0f7"},{url:"assets/js/page-Demos.2b38f5d9.js",revision:"c94325c893f22daa8c990cf4f89bbdb6"},{url:"assets/js/page-Emoji List.c3f75599.js",revision:"38afea4a320f12ea6051190088d46034"},{url:"assets/js/page-Emoji 列表.38ae8449.js",revision:"0c0d550bd6af78ae7f6d69f8fd6deaeb"},{url:"assets/js/page-Encryption function.af9a7479.js",revision:"1ee3b37cbeca09bad8d0134ebb14fced"},{url:"assets/js/page-File Structure.4c1f9603.js",revision:"0202a6cded627513285648bd4049dbe1"},{url:"assets/js/page-Flowchart.dc0cf232.js",revision:"6e0de0a24df5a5800e1aeeabd672442c"},{url:"assets/js/page-Footnote.21d845d0.js",revision:"399d7d3cb0c58b97bd9c0f890e4c6c80"},{url:"assets/js/page-Fullscreen Button.7ebe5853.js",revision:"17014fd0ecf9a2bfb45959e033ea1cae"},{url:"assets/js/page-Home Page.1e607ccc.js",revision:"96f4c8ccab785de0ff0d393449c182d5"},{url:"assets/js/page-Home.ba7ce947.js",revision:"cfb921619d5ad4347a758d8c539de390"},{url:"assets/js/page-Icon support.c6333b67.js",revision:"fb4f8cc6b31feb40aa7486a6a9087da3"},{url:"assets/js/page-Introduction.e021c469.js",revision:"3b20e39489e6cb584f728914f67253aa"},{url:"assets/js/page-Layout.ecc186d8.js",revision:"562f510ff159e189bf12402705b5f353"},{url:"assets/js/page-Markdown DEMO.7e5f951f.js",revision:"b8d9516ed2019c9ec3ee4d214f9ca39d"},{url:"assets/js/page-Markdown Introduction.b9c02b8d.js",revision:"c93dc28f836e307aba52d0c55b4ab20b"},{url:"assets/js/page-Markdown 介绍.7598906d.js",revision:"22b354f058d8b45fd9d0a70290a15b06"},{url:"assets/js/page-Markdown 新语法.f83c3ace.js",revision:"34403e7c462db66f66c8fc67b53dcc7a"},{url:"assets/js/page-Markdown示例.9a19d040.js",revision:"439e822616e33ec1097b42940d9cb1fe"},{url:"assets/js/page-NavBar.4610485a.js",revision:"9b87983ba6b4a57c1623269f693d8da8"},{url:"assets/js/page-New Component.e7cbbb56.js",revision:"0d2832de7ce7b876e2b8c44635bb8439"},{url:"assets/js/page-New feature.4c003be7.js",revision:"6725a6583b444c0c95b2dc453a6b7ab4"},{url:"assets/js/page-New syntax in Markdown.8270e1f8.js",revision:"65a302bb437a57509254f40c893ae81d"},{url:"assets/js/page-Page Configuration.0778c02f.js",revision:"793f485859870c3828ecf61c53fdacbc"},{url:"assets/js/page-Page.15690e69.js",revision:"d3e280a2b12feffcb4f0c8ce990d6718"},{url:"assets/js/page-Plugin Description.3b2219a4.js",revision:"fb65aead80a8a827daf8125c6c93f391"},{url:"assets/js/page-Plugins.a25b0a2c.js",revision:"161eeab4bd045ea8186b3f5e63f13e67"},{url:"assets/js/page-Sidebar.33572748.js",revision:"2c2072d3a351dc18e5c47e0f2da79b7c"},{url:"assets/js/page-stylus configuration.de626342.js",revision:"0f520003f440b4ccda80b95574d3f115"},{url:"assets/js/page-stylus 配置.19068620.js",revision:"27eacbbcc9084448d91323ea72b62719"},{url:"assets/js/page-Superscript and Subscript.cfcb94ed.js",revision:"1e816ab2c0e0a3c3b1961aa4c71dc131"},{url:"assets/js/page-Tex Support.edd79630.js",revision:"e603720255a7363ef612ba093379cb95"},{url:"assets/js/page-Tex 语法支持.819d6c92.js",revision:"0eb11a2124e38af4814e8b2c678e5878"},{url:"assets/js/page-Theme color.b95c9a89.js",revision:"87c78a45779801acbc35c598d4d78b56"},{url:"assets/js/page-Theme Config.17959378.js",revision:"b62f68bd5410b8aedfcf7dcae3d6303e"},{url:"assets/js/page-TS support.ac27514e.js",revision:"0d8b73542e6384bba5a1b1ff5d4fdb22"},{url:"assets/js/page-TS 支持.05755b6d.js",revision:"fbebdf3ee0ab269bf6c52395d3cba2a3"},{url:"assets/js/page-Upper and lower corner.77024f30.js",revision:"3483e1b99049c265dfa8ace32c728375"},{url:"assets/js/page-Vuepress Cases.e20bbaad.js",revision:"91be7e7c053e1d7a1f543ea03596ac98"},{url:"assets/js/page-Vuepress commands.85f31534.js",revision:"b22904f928af79b5b5e584a41613dd2d"},{url:"assets/js/page-Vuepress 案例.a51c4db1.js",revision:"53469146516999ef7d6dde662899b69e"},{url:"assets/js/page-vuepress-plugin-container.5519ef7a.js",revision:"14784066c1d3af56bc70349621b00283"},{url:"assets/js/page-vuepress-plugin-copyright.7f7e2eda.js",revision:"a629fbb08242296bdd9e702cdbcc9017"},{url:"assets/js/page-vuepress-plugin-md-enhance.caaf090d.js",revision:"2eb423d3e67d715ab51d04d532800213"},{url:"assets/js/page-Vuepress.0caac190.js",revision:"36a43a2445902f4c34a69eec750c2813"},{url:"assets/js/page-Writing a theme.c7bb4945.js",revision:"9744361b299f1ba8dbb9ac5e44a23375"},{url:"assets/js/page-上下角标.3c82692d.js",revision:"5d57b8a50c4a62d86b9d92517311bf52"},{url:"assets/js/page-主页.e70a4ac3.js",revision:"1b087e7d777bf27ebe419df415821232"},{url:"assets/js/page-主题色.ce0605a9.js",revision:"e9f68fe11520972bea28b61460e67c5b"},{url:"assets/js/page-主题配置.4c23400f.js",revision:"7793d10531bbc4a01346bbb13f5da0d9"},{url:"assets/js/page-人物.535dc263.js",revision:"fbc4513b36d0009fc566e2dce39080a0"},{url:"assets/js/page-介绍.c87fc660.js",revision:"8961761274df39ed7070d72cf6069e35"},{url:"assets/js/page-侧边栏.ef1114de.js",revision:"1765f50ea7e9e20697e2f2d703470270"},{url:"assets/js/page-全屏按钮.078f4dcd.js",revision:"c305f75f43b4378a54470a3de4c3ec65"},{url:"assets/js/page-加密功能.b3b24054.js",revision:"a461a55c3f2ccfdfa171d208810b8cb2"},{url:"assets/js/page-博客主页.e1be8a79.js",revision:"659fb3843d1c385aff7b9ee286b2ff55"},{url:"assets/js/page-博客相关.905a287d.js",revision:"326a42e25d0fc4dc598ca4d4145d8b09"},{url:"assets/js/page-图标支持.d31f633c.js",revision:"bfa5473a9d5ff9938895d108afde2324"},{url:"assets/js/page-地点.8e95a3cd.js",revision:"1e17ed85faed3f124e95c82d1ba669ff"},{url:"assets/js/page-基础知识.1b6ab76f.js",revision:"eabc781095b9c1683cc838f3a79ef999"},{url:"assets/js/page-对象.6a4a70ca.js",revision:"43aa9b8e7db0cfbddbd04a6387ed3561"},{url:"assets/js/page-导航栏.6e7113e2.js",revision:"289becde755938a04aa14264a4dd561f"},{url:"assets/js/page-布局.b5791b49.js",revision:"7c3fec9adcf94bdff60d2224ef2ab543"},{url:"assets/js/page-常见问题.583a18e1.js",revision:"ffb67d5ac727c410255df4405279e935"},{url:"assets/js/page-开发主题.6f144de3.js",revision:"fad3d0018faca3932a8ad8aa64928caa"},{url:"assets/js/page-插件.29c245a2.js",revision:"ed6c2df0be797742d01ca886aa9a2901"},{url:"assets/js/page-插件说明.c86c5952.js",revision:"eca87378fad478d9b2775b32f13bf8f5"},{url:"assets/js/page-文件结构介绍.684c15a6.js",revision:"8675fba8f2147071c812a653881eecb9"},{url:"assets/js/page-新增特性.2bd9d812.js",revision:"3d59b285d1f4ce8d8bc7d22f9662eab2"},{url:"assets/js/page-新增组件.3575dff9.js",revision:"c9d8ba0a5a1fe720aa206ff3cf81a3bb"},{url:"assets/js/page-流程图支持.77dd5c8e.js",revision:"bc20a15d83ff7f3d76885a513d46fa9e"},{url:"assets/js/page-深色模式.6ae557ab.js",revision:"3b8d0880b8739874ac7dc239bf48d45e"},{url:"assets/js/page-符号.66b45c61.js",revision:"78231a83c5e25b1677a8e031614fb5da"},{url:"assets/js/page-脚注.25068f43.js",revision:"6b31fbe670aee82870409627eaac958d"},{url:"assets/js/page-自定义对齐.734e6ee0.js",revision:"52dd9c25c23da33a863a261c59a4640a"},{url:"assets/js/page-自然.61bafd7b.js",revision:"4c9954909b5f9cdeccd025243b287288"},{url:"assets/js/page-评论功能.2ecf08dc.js",revision:"e32b2368e2f977f7ee75d26411f8fd2f"},{url:"assets/js/page-路径导航.073526d7.js",revision:"dd6fe7159ac8f4dcf1b3aebc05ad8580"},{url:"assets/js/page-页面.70f81f34.js",revision:"9ba6cdce1f2062b75c9235ea9dafaf97"},{url:"assets/js/page-页面配置.0d936991.js",revision:"aa58539443c41634e2a6833578540412"},{url:"assets/js/page-项目指令.f40202ae.js",revision:"4a21e922d0284fd7e6474379e60338a1"},{url:"assets/js/page-项目案例.f4fcf669.js",revision:"61943860552f67f89fbd4f9a75cb026e"},{url:"assets/js/page-默认主题配置.f3cd46fd.js",revision:"ba09196cfd7e8d3603a16029b72743c6"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.851f9868.js",revision:"5acd50323e207ed921f6b109236721bd"},{url:"assets/js/vendors~layout-Layout.576f3738.js",revision:"587a7c121f2ccae00bf37c2d1ae03cce"},{url:"basic/index.html",revision:"cacba6f4228cf86e4375a4cd8e666869"},{url:"basic/markdown/demo.html",revision:"ed6d5860b69743ffcae62cbbe00f6cbb"},{url:"basic/markdown/emoji/index.html",revision:"36d4463ee058b8faa72ce182706ca7ab"},{url:"basic/markdown/emoji/locate.html",revision:"3f0c8f155ee7325f774f5366b279b377"},{url:"basic/markdown/emoji/nature.html",revision:"9cdd47b8d7dd5ddc4c0646139a58a4f4"},{url:"basic/markdown/emoji/object.html",revision:"a3324153e444547f6b0e29031ea10271"},{url:"basic/markdown/emoji/people.html",revision:"c34cdcff9dae5bb671f80103874e0bc3"},{url:"basic/markdown/emoji/symbol.html",revision:"095b57db01f60e73e071d2324171d8aa"},{url:"basic/markdown/index.html",revision:"6c0028987f5e54e606a861b28e9b9ffa"},{url:"basic/vuepress/case.html",revision:"25e51d7c17b206de2d797824a3b3e200"},{url:"basic/vuepress/command.html",revision:"64b889ee196c573cb4560515e88e82b8"},{url:"basic/vuepress/file.html",revision:"00fe246230ed9e0a264e458eaa41a355"},{url:"basic/vuepress/index.html",revision:"1cbecb1f0ef0676134769995c9167383"},{url:"basic/vuepress/plugin.html",revision:"c895cdd8cc9813038f8a3dd6f1ff73b5"},{url:"basic/vuepress/theme/config.html",revision:"6ed74699b6198325ed5e209699190581"},{url:"basic/vuepress/theme/dev.html",revision:"4792f9280e5d34ee2f6b13e5a8188f74"},{url:"basic/vuepress/theme/index.html",revision:"3d6d221d1eabc4d525525ca4ba7e29a0"},{url:"category/api/index.html",revision:"81723812a4aef18917fc51b8d4b0dca8"},{url:"category/api/page/2/index.html",revision:"b6c5135fee67fe6b6e83622ef4082baa"},{url:"category/FAQ/index.html",revision:"b9f7ae4c6313cd6cb438bd834ddac279"},{url:"category/function/index.html",revision:"6c696068b9a0e3fac43dea85ba4b8fe9"},{url:"category/function/page/2/index.html",revision:"19f9d961eccd750a59ccf181babb61f6"},{url:"category/index.html",revision:"4c2fcbdaced55ede6999eabbcafa30cc"},{url:"category/instruction/index.html",revision:"3f31d50e69f68bf8ad907253ae1aae91"},{url:"category/layout/index.html",revision:"5ef77916856b1ff185159f135e3ffdcc"},{url:"category/layout/page/2/index.html",revision:"d0525d387c6f7770722895a1e4fb50e2"},{url:"category/markdown/index.html",revision:"d3a26e2e096b7f99551414b70358c625"},{url:"category/style/index.html",revision:"fae93dfca48b2d5a8414a17bda529bae"},{url:"demo/index.html",revision:"054e87916b6f7a760b1affede5663af1"},{url:"en/api/index.html",revision:"cf133387692f02b3f839da37d81757f7"},{url:"en/api/page.html",revision:"52083939f06ef419f0f1212eeb89e8f6"},{url:"en/api/plugin/container.html",revision:"646bc1bf049aa130bcf0c151fdd79afe"},{url:"en/api/plugin/copyright.html",revision:"7ad30dcceb5972ac248bf17cbe2c5900"},{url:"en/api/plugin/index.html",revision:"6ff0fc3be01e77a57fc9876dcb1ae7d6"},{url:"en/api/plugin/md-enhance.html",revision:"8f624c05337ab2fcbd769a5c6257284d"},{url:"en/api/plugin/medium-zoom.html",revision:"0078db5dc7e5b82ab009407b158ebf91"},{url:"en/api/plugin/pwa.html",revision:"498fa0642acca790ae70fd446dc63faf"},{url:"en/api/stylus.html",revision:"0a147c6d8298605636009e439f3b72b7"},{url:"en/api/themeConfig.html",revision:"3f9d802e2822deae300c46864dd73af9"},{url:"en/basic/index.html",revision:"df6610dde5c01c720bb2bc1977ab29f3"},{url:"en/basic/markdown/demo.html",revision:"bab3de741c769c78030aadebdacad30f"},{url:"en/basic/markdown/emoji.html",revision:"dc770e961fca6fec816c1602f1c5bf1c"},{url:"en/basic/markdown/index.html",revision:"bfd31544f33851a2cb3c82c7ffa71c16"},{url:"en/basic/vuepress/case.html",revision:"e728c831fb983e1c9a444b4308d2cc9d"},{url:"en/basic/vuepress/command.html",revision:"148c28b37980bc40ba55799333f9256c"},{url:"en/basic/vuepress/file.html",revision:"f1076da14d8d46222ed6c2d1aeabe4dc"},{url:"en/basic/vuepress/index.html",revision:"c98c76791cb786af706fbee078a21a53"},{url:"en/basic/vuepress/plugin.html",revision:"c6728b0b1e7b95bc6d7e3c6cc87cfdf8"},{url:"en/basic/vuepress/theme/config.html",revision:"6193d4c118d9b527821719b35cf691af"},{url:"en/basic/vuepress/theme/dev.html",revision:"df7fe8ae7d76600354acc70fddcc8e5e"},{url:"en/basic/vuepress/theme/index.html",revision:"fcb781e76450b9860b7a9fe03d410b8b"},{url:"en/demo/index.html",revision:"e2a4ad655f76ea15d0a301129a934cfa"},{url:"en/FAQ/index.html",revision:"1c0a5da2341ee1cc8d56c5cda1e149d5"},{url:"en/guide/feature/blog.html",revision:"77a4e3a0d20e40526aac6b9305020d23"},{url:"en/guide/feature/comment.html",revision:"edc94727391a8b1819525dd71a14a765"},{url:"en/guide/feature/component.html",revision:"8d0dea7d3158d146b01171dbad8e6bd9"},{url:"en/guide/feature/darkmode.html",revision:"ecab65cf200b52fc7b0d393fd254842a"},{url:"en/guide/feature/encrypt.html",revision:"b19472a0b4f85fb64d2ad418de337e8f"},{url:"en/guide/feature/fullscreen.html",revision:"384e68de0f7ec2d8a019eb7b1e4ddf5f"},{url:"en/guide/feature/icon.html",revision:"9056bd4bb7f85fad909490912f389681"},{url:"en/guide/feature/index.html",revision:"a5685ea195bf2d5e6b160c6f60ae4112"},{url:"en/guide/feature/themecolor.html",revision:"21828079fe71e0dc8b4d0c2a736b0cf3"},{url:"en/guide/feature/typescript.html",revision:"20a210a9cc814a0d8e88e56e45a3e991"},{url:"en/guide/index.html",revision:"d378c7b3021aef4eb48014e8808b6423"},{url:"en/guide/install.html",revision:"1ee804aa50c804a06d335476549c3598"},{url:"en/guide/layout/blog.html",revision:"5e3eb2f481ed50d6c4607a485aafca36"},{url:"en/guide/layout/breadcrumb.html",revision:"fa880b40cc55f6f41b93df6ee1e7fe0b"},{url:"en/guide/layout/home.html",revision:"1ef28732f34ddbe250202f3d822ab8c6"},{url:"en/guide/layout/index.html",revision:"8c95eec66a45e8b0374c10797b1d68a7"},{url:"en/guide/layout/navbar.html",revision:"3faf8d0d30f87f5635dd26a708aa4b9e"},{url:"en/guide/layout/page.html",revision:"96146d42f3437c0b1e16ec4b50c92194"},{url:"en/guide/layout/sidebar.html",revision:"9c6f45dd30ff9369b45baabba6479e24"},{url:"en/guide/markdown/align.html",revision:"721cc016060a4ae2c1b66eb7cab847ee"},{url:"en/guide/markdown/flowchart.html",revision:"12cd0e4ac446d4b4d80004d5d9f27f5a"},{url:"en/guide/markdown/footnote.html",revision:"8319f3f71ab6163426d08bf160fe835d"},{url:"en/guide/markdown/index.html",revision:"e8c4359d685adadcce25037524959363"},{url:"en/guide/markdown/mark.html",revision:"e4314c8493a8fe1f3868669d7cdb7e76"},{url:"en/guide/markdown/sup-sub.html",revision:"633a3ccc7b4583c7b1cced0a9572187e"},{url:"en/guide/markdown/tex.html",revision:"21a2e5c8dc11208d32e7e8d6d0fcc7fe"},{url:"en/index.html",revision:"ed51cc8bd40fcb62606f1038d1d4abce"},{url:"FAQ/index.html",revision:"e1cc253c91bb586ea33b816c1b179bd8"},{url:"guide/feature/blog.html",revision:"08bd324ef2921c36174250c28fe6cd0f"},{url:"guide/feature/comment.html",revision:"9c8ffd6ee15eb3f2346fee1e9c5d764e"},{url:"guide/feature/component.html",revision:"c9ea8fc3a28d7afaa5009165b8934fc3"},{url:"guide/feature/darkmode.html",revision:"14176393494eda8c98c969ab8558794f"},{url:"guide/feature/encrypt.html",revision:"52292fa0ed0f529f793c1e77caa79db3"},{url:"guide/feature/fullscreen.html",revision:"a036e32e790eaf94dbff0b9f7fc2b9c0"},{url:"guide/feature/icon.html",revision:"c0a5a2d1868ce0a7c3ef0c76f37ea955"},{url:"guide/feature/index.html",revision:"c44e1c4d292912312b7580d56a423aa0"},{url:"guide/feature/themecolor.html",revision:"d02dd1bf75a3eeef9833cf8c38023275"},{url:"guide/feature/typescript.html",revision:"8635063974a3704dce1bcc7b17bfc4a1"},{url:"guide/index.html",revision:"42d5569cf0b4e8ed2d71f5206fd3fd80"},{url:"guide/install.html",revision:"1f45cc51ce714ee4e7997ebbc9aafd20"},{url:"guide/layout/blog.html",revision:"acce9510d877e1a06015f94d9c42bfef"},{url:"guide/layout/breadcrumb.html",revision:"4ddcb8f8a8b3ec36742c887bf81cb6cb"},{url:"guide/layout/home.html",revision:"4cd7669fb3deea20f74ad87e7001c510"},{url:"guide/layout/index.html",revision:"77e2c21c6cbb7a2542de4a773556364e"},{url:"guide/layout/navbar.html",revision:"88303fcd6844cc01c5cd68bcdb64cb04"},{url:"guide/layout/page.html",revision:"8ed3ba728c448b19ce64c6d53e88a104"},{url:"guide/layout/sidebar.html",revision:"bc2f0a623b2e5230ddf6e85618808b48"},{url:"guide/markdown/align.html",revision:"d9b739de606d4b40de5994d4d15cee29"},{url:"guide/markdown/flowchart.html",revision:"ac3642b45004925c6155a9c568b41d37"},{url:"guide/markdown/footnote.html",revision:"c058607d10d124f1f5aac4353118316f"},{url:"guide/markdown/index.html",revision:"2fef62e71a1057e6fcb5434ccfa4642b"},{url:"guide/markdown/mark.html",revision:"91d7213dfa352785b3c7ec99a0bc96af"},{url:"guide/markdown/sup-sub.html",revision:"6f8795d3f42712ed67039c3ccf2a71c1"},{url:"guide/markdown/tex.html",revision:"e6fb0532c05c642fb939538a203ce54b"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"6b5117a9f3a0ba1ece24ad2d2c1ffb05"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"bae7bcc20f2c40fc1a9e5a8211b3df02"},{url:"tag/api/page/2/index.html",revision:"c2d28e0faa4f6c777524e2a883343bbd"},{url:"tag/blog/index.html",revision:"44c056f1b68451720a7c182c81aed976"},{url:"tag/comment/index.html",revision:"a3fad04e871c12d493ad3623e08be728"},{url:"tag/component/index.html",revision:"bc7ee1ff2fe8bf5e87183f9b4163da90"},{url:"tag/components/index.html",revision:"bd71496bf6c6dbb2e8420224e0f34678"},{url:"tag/emoji/index.html",revision:"77c6fce258752dca5debc468c5b38508"},{url:"tag/encrypt/index.html",revision:"be6c3008accec342946d1171d0b30672"},{url:"tag/enhance/index.html",revision:"28f479928a42c4f94a74796557107681"},{url:"tag/frontmatter/index.html",revision:"897e91cf2fbca09527995f3e1f67d40a"},{url:"tag/fullscreen/index.html",revision:"6b552ae6b8826081e3d1f957c5e89bb2"},{url:"tag/function/index.html",revision:"ae16676f7263c5deed032aab9a2ea883"},{url:"tag/function/page/2/index.html",revision:"17ac03df1217ee3941ed8ea73c437451"},{url:"tag/home/index.html",revision:"03e413e2fae2cfffac85f7de4adf70d0"},{url:"tag/icon/index.html",revision:"b451be8171646f28c5bf2b29667124d1"},{url:"tag/index.html",revision:"ec5c844692a50eddd19de6bf56e169dd"},{url:"tag/intro/index.html",revision:"181d0b70cbbef48012075ddf98b9560f"},{url:"tag/layout/index.html",revision:"54edcbe061cfa5955f192030566458b9"},{url:"tag/layout/page/2/index.html",revision:"a41e1e0a1c153fa343f932be52fac4df"},{url:"tag/markdown/index.html",revision:"f5e1710779c42dc01475c058aa03d452"},{url:"tag/plugin/index.html",revision:"459139641b53cb3f5022e24a4609791f"},{url:"tag/plugin/page/2/index.html",revision:"da80b3e6a6690ccf11db24c13c053f39"},{url:"tag/style/index.html",revision:"a0c056e8a7ab0f2df2c92a2340f89903"},{url:"tag/themeConfig/index.html",revision:"b9475421a117cd40c673a609ad34ac52"},{url:"tag/typescript/index.html",revision:"c5fa237bd5272e6f03b22007d6580a95"},{url:"tag/vuepress/index.html",revision:"fa630c1417c665380003aee9970cbaa8"},{url:"timeline/index.html",revision:"173b248e2af83dfaecf183f65baee764"}],{})}));
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
