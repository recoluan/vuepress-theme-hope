if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-452119c2"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"43f7c4985b634e91d33b62f5d55fcc3c"},{url:"api/index.html",revision:"d0065f2d43bfab6b2ca2473b051dfdac"},{url:"api/page.html",revision:"4ab849901160046ddabb79cb539e8a32"},{url:"api/plugin/container.html",revision:"f898fe9f3eabaf27d9063c2f88e95f3f"},{url:"api/plugin/copyright.html",revision:"62607445d3847b28dacc8da6f8862bf5"},{url:"api/plugin/index.html",revision:"f2cba56cfde195919c8f42df97169d31"},{url:"api/plugin/md-enhance.html",revision:"5687233d460ad3b2ec04ad8c4c2348b1"},{url:"api/plugin/medium-zoom.html",revision:"2ebfc859b8ecf97f64d7183acd0e881b"},{url:"api/plugin/pwa.html",revision:"349fab733ae09dc0428ad41addca81d6"},{url:"api/stylus.html",revision:"0e400985bf1fd179a2d2b4c6608264ce"},{url:"api/themeConfig.html",revision:"96750d74c2fb3f3125c9c391238bad7e"},{url:"article/index.html",revision:"cb652b0460b4519266f4716482de0ce2"},{url:"assets/css/0.styles.e43f40ea.css",revision:"a0e3f5fea2c5d8c567c2eabc08802ca0"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/103.4a622b5d.js",revision:"a691b8b259860b6ca3475b80f22baaa3"},{url:"assets/js/app.f16310b4.js",revision:"3d0c99ff49498bfa32d2565970190a6c"},{url:"assets/js/layout-BlogEntry.be0cbd9a.js",revision:"eb1e6f538e834699479ac91f8010e16e"},{url:"assets/js/layout-BlogEntry~layout-Layout.1b6df8d6.js",revision:"dca85f8d7bae1c1e2a57802a38e8d9be"},{url:"assets/js/layout-Layout.93a4ef7a.js",revision:"6bceb3a0faf6c1a4367d0bfee064f786"},{url:"assets/js/layout-NotFound.8655569f.js",revision:"881909242d1feffe00b4796572a55e1b"},{url:"assets/js/page--1b278726.9ba1e59d.js",revision:"16507af1e54f7499f17de2a98d0c7a31"},{url:"assets/js/page--24b68849.90a12174.js",revision:"339db42bd37ff4363e563ec65910e7d8"},{url:"assets/js/page--298eb4e9.0843772b.js",revision:"6f3a122fedbdff9ed409cac896692712"},{url:"assets/js/page--33732ef1.71892722.js",revision:"d6ffbf0336213b88bbdc46a9edb846a4"},{url:"assets/js/page--608d80cf.9e9d4399.js",revision:"518126275194f88e0698dfabefaec3b3"},{url:"assets/js/page--b64dd6ee.59a43079.js",revision:"6c9b003f631e49b7f79fae2ba74db451"},{url:"assets/js/page-About Vuepress.c3fe095f.js",revision:"61436391772a44bc87e0fab48ff9fdbd"},{url:"assets/js/page-API Docs.f75e4d95.js",revision:"7ebcb691eb0605a7b8e7cc9ecb148f79"},{url:"assets/js/page-API 文档.3cc0c87c.js",revision:"0bc5be09c7ea0313a3e37e3cd1df3256"},{url:"assets/js/page-Basic.3b22d053.js",revision:"ba2c1733c112643a1e016f54d03b8f75"},{url:"assets/js/page-Blog related.982f4db5.js",revision:"104ae4c4c2ea4d6393b2f6af4b25297e"},{url:"assets/js/page-Breadcrumb.53296109.js",revision:"bfc3fa791c1c6587feedce5d63ae09ea"},{url:"assets/js/page-Comment Function.fef77b41.js",revision:"cf8bd65d8744eea554c55996f7ebe4e3"},{url:"assets/js/page-Common problems.a6f87bc1.js",revision:"13a02cf62cd273f45a7495c88a253466"},{url:"assets/js/page-Custom alignment.5169c278.js",revision:"f258c999e5c9175824f59fc51b328fb4"},{url:"assets/js/page-Darkmode.7bfa9005.js",revision:"861430a785bb76947cef387ebe2c493b"},{url:"assets/js/page-Default Theme Config.92b3eaf8.js",revision:"a1e9b3d26aff3baa46dd387d77b174c1"},{url:"assets/js/page-Emoji List.4b0e5cc0.js",revision:"deaf44b711e3d7c742c42556fdea91bd"},{url:"assets/js/page-Emoji列表.eddc569b.js",revision:"2ae2839312e5a5ff8232d5451a9727b1"},{url:"assets/js/page-Encryption function.d6c49095.js",revision:"abbda30b88e2a244880207e8395f1242"},{url:"assets/js/page-File Structure.6bdb8da7.js",revision:"8b5c65e025a962f247fcbbd724907b48"},{url:"assets/js/page-Flowchart.69f418bc.js",revision:"d27a35ee849f76094a11e39b9bb75fd8"},{url:"assets/js/page-Footnote.69ae1779.js",revision:"53344ca1b2d00ca843a1ab7954b0e387"},{url:"assets/js/page-Fullscreen Button.1448a2e1.js",revision:"9706effbc355ea69453fb0abd63ceb41"},{url:"assets/js/page-Home Page.234c3a1a.js",revision:"9b7118883e47f0c01cf98839e88bb7ff"},{url:"assets/js/page-Home.13d24fa0.js",revision:"a16d339d287ceb1fe474040e2822e16c"},{url:"assets/js/page-Icon support.daf5c10d.js",revision:"984367d1d3c39d25088773dcc95aac87"},{url:"assets/js/page-Introduction.5d870e45.js",revision:"d0725bc3a04d58752ee5b267cb3b7b82"},{url:"assets/js/page-Layout.9aa8aa2e.js",revision:"1220f900f3e838d5dd3a01b10b95e068"},{url:"assets/js/page-Markdown DEMO.6d641dc0.js",revision:"7f2449f491aa1292463b22e7fd4920e7"},{url:"assets/js/page-Markdown Introduction.5d1acf16.js",revision:"b2d0ebd0ad15ef9883131de23c2846fa"},{url:"assets/js/page-Markdown 新语法.b991d95e.js",revision:"22c3f08b53c8c1add77c527b5d5b3a64"},{url:"assets/js/page-Markdown介绍.0b22204a.js",revision:"05b1f4beb3743e3118fc929d3ac2c1ae"},{url:"assets/js/page-Markdown示例.10dec158.js",revision:"567441932f02b2e18f2ef77065ea5f4b"},{url:"assets/js/page-NavBar.31cd025e.js",revision:"b7c1b50ef503e4bd561172d5b28723d3"},{url:"assets/js/page-New Component.cfb5237e.js",revision:"ce08e6afb38d8bb7d1c5b6242490d964"},{url:"assets/js/page-New feature.b9c204ee.js",revision:"52b491a6b334ac07ea297680d561d1ca"},{url:"assets/js/page-New syntax in Markdown.89599948.js",revision:"943e6dbfbaf7447e21e694958c783734"},{url:"assets/js/page-Page Configuration.26759635.js",revision:"549f0bab7800f61f0507932d2b88761e"},{url:"assets/js/page-Page.5b164439.js",revision:"805041ad51f9eef5a3d18805ef11c1eb"},{url:"assets/js/page-Plugin Description.a4b9cd5d.js",revision:"7c687effb73d4ec95a910787738445f5"},{url:"assets/js/page-Plugins.cbc0e826.js",revision:"7e3d3f4b8c6b68e0e489be88ad88773c"},{url:"assets/js/page-Sidebar.0b0706f5.js",revision:"011087ab59f6883533a8d778eb76bd55"},{url:"assets/js/page-stylus configuration.35efabfa.js",revision:"b6a6991971ef22996d446e799f8cd2e8"},{url:"assets/js/page-stylus 配置.413b20e3.js",revision:"95359aa99a14932dac30c0f91c619944"},{url:"assets/js/page-Superscript and Subscript.d3db151b.js",revision:"37b16965d8eab78f01366d5aedf5d9d2"},{url:"assets/js/page-Tex Support.914cca69.js",revision:"2e9ef6539b0d8e6c74dbd329f246fc85"},{url:"assets/js/page-Tex 语法支持.f59f4512.js",revision:"dedaf72f1cc072d345270b457eb3d6c5"},{url:"assets/js/page-Theme color.34157d19.js",revision:"69832b171088e953257fc3f4f91ebc2b"},{url:"assets/js/page-Theme Config.b302a488.js",revision:"6548e078cc62369f905e3faeaadb1c2c"},{url:"assets/js/page-TS support.d5c2df82.js",revision:"ddb28744be848ef9817ce06fb9214a13"},{url:"assets/js/page-TS 支持.95cf5091.js",revision:"354ea77847b5ccc8509106f7beeb8e6f"},{url:"assets/js/page-Vuepress Cases.c39bb054.js",revision:"bd2961adab8170932aebb1e96dc24fe3"},{url:"assets/js/page-Vuepress commands.60b4a002.js",revision:"9b1591488ea475a8d1b151124759e966"},{url:"assets/js/page-Vuepress 案例.b93bbc6f.js",revision:"df7f0cac5b4ed1ab524ceaa724c08804"},{url:"assets/js/page-vuepress-plugin-container.b1d29274.js",revision:"95e14e61b832c10fbd0f8734256da5a8"},{url:"assets/js/page-vuepress-plugin-copyright.2d9f9f07.js",revision:"5b307835026aa0b8cea4f7da6ecca291"},{url:"assets/js/page-vuepress-plugin-md-enhance.eb21c8d1.js",revision:"990720060d07f60dde2375aac0ff9a85"},{url:"assets/js/page-Vuepress.23f02930.js",revision:"6e253ed62da7382d1085e19f7a226dce"},{url:"assets/js/page-Writing a theme.1ebbd4ca.js",revision:"b1dd7d2f3158d26fb68ab7dabebffeea"},{url:"assets/js/page-上下角标.7328830f.js",revision:"329fdb8c763cd8b1b4c1a0a68fd3c716"},{url:"assets/js/page-主页.bfad789f.js",revision:"b2a87a9e06a240e982ef445ec1511d62"},{url:"assets/js/page-主题色.39969546.js",revision:"5c10d0ee7e49c404a3c2a2b1f8003d9d"},{url:"assets/js/page-主题配置.5139d7ac.js",revision:"8f0a48bf212291bba276adc7b12101ac"},{url:"assets/js/page-人物.06bdfee9.js",revision:"57be6c3df07dcfcd5d7ee2656d348ec1"},{url:"assets/js/page-介绍.ac44e26c.js",revision:"8dee94e243a22003a021d21eb2b1eae7"},{url:"assets/js/page-侧边栏.d9925168.js",revision:"676b4a436cf37d9f34d0567efd1c6d02"},{url:"assets/js/page-全屏按钮.b7ad16eb.js",revision:"887a40d842fc6b2af7931a119405e385"},{url:"assets/js/page-加密功能.6c1a98aa.js",revision:"ed612e40090a909c2f299bce46e642f8"},{url:"assets/js/page-博客相关.968abf6b.js",revision:"c2169a8f815abf328894dd50666d4764"},{url:"assets/js/page-图标支持.2501ac69.js",revision:"f68cb8e9d09614fd6c9ac4a570341007"},{url:"assets/js/page-地点.a0607d6d.js",revision:"e238c40f6ea04ee087fb70ebfd72eff4"},{url:"assets/js/page-基础知识.e19c9801.js",revision:"7c653101541eb79ddf5fcc60ed45d474"},{url:"assets/js/page-对象.8706ccdb.js",revision:"8ba47a156207c0306a4a4030264c5838"},{url:"assets/js/page-导航栏.4382138f.js",revision:"c967ce93a7a023d6e747f2f38144598a"},{url:"assets/js/page-布局.6f8b8eba.js",revision:"b6d4bf5ebefdb21e6a9583afdc68dc0d"},{url:"assets/js/page-常见问题.6967df46.js",revision:"f6bcf673e369d77c769171067d314344"},{url:"assets/js/page-开发主题.fd276dd6.js",revision:"aed60ee2af2041ef1228d6b2d6c10355"},{url:"assets/js/page-插件.9e40f074.js",revision:"a6c9cf880695f5b5c2d3eeb79f056fa4"},{url:"assets/js/page-插件说明.330172d0.js",revision:"dc0b8cb735dde454e4924fef84a7b736"},{url:"assets/js/page-文件结构介绍.5cd7791d.js",revision:"3a3492825357fb07ee097dc07734ed4a"},{url:"assets/js/page-新增特性.3aa2409d.js",revision:"2a324c71a5e2e894dac6b877dbe7c868"},{url:"assets/js/page-新增组件.9b722a00.js",revision:"53e95b81cadf0895a77ac0bbed5060d2"},{url:"assets/js/page-流程图支持.10c163dc.js",revision:"7d9c8903f5360deb377c338b97303563"},{url:"assets/js/page-深色模式.e1baaf3e.js",revision:"65caa6d59623ce3f49f07eb5d5104814"},{url:"assets/js/page-符号.cc0017af.js",revision:"8112f36c6cd88e54376f9c2a632a74b0"},{url:"assets/js/page-脚注.a865f0eb.js",revision:"4499b7123a9ccb7f54d6208bbdaacb0a"},{url:"assets/js/page-自定义对齐.025ea8e5.js",revision:"ed95ac932e2a04a685cef4a3e5c1fd98"},{url:"assets/js/page-自然.a15c0628.js",revision:"e1e7c20ac7354f07e14d7437f0aa9298"},{url:"assets/js/page-评论功能.97ed178d.js",revision:"992499640753d6f3b5cf23263fedb66b"},{url:"assets/js/page-路径导航.28b89568.js",revision:"0738949d108049f9a42b64a47b514df3"},{url:"assets/js/page-页面.2bd7a78e.js",revision:"8dac9238e360bbb0ef6b4a67374dae0d"},{url:"assets/js/page-页面配置.b28fafa5.js",revision:"41094da22e45764a8999d0399dc82eb5"},{url:"assets/js/page-项目指令.e0ad2cab.js",revision:"7ab07ad29b589bdcb2c81dcdef66c571"},{url:"assets/js/page-默认主题配置.359a7e3c.js",revision:"ff912face8bceec4443a31a58159cd15"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.9ea98a90.js",revision:"1f67061ebc26bf11920872ea03e7bad4"},{url:"assets/js/vendors~layout-Layout.e7d579d4.js",revision:"785c9c47493a3c304ee6baa3a34b8bdc"},{url:"basic/index.html",revision:"480d661e288a191c633154e738deecde"},{url:"basic/markdown/demo.html",revision:"ba59b9b332efb3ebd1761f01a7b9f993"},{url:"basic/markdown/emoji/index.html",revision:"b954943eb143ae83e8af6489a608091c"},{url:"basic/markdown/emoji/locate.html",revision:"f116217a3f7750df594d7806eeed5385"},{url:"basic/markdown/emoji/nature.html",revision:"d8d4b4dd43333b833bf7879990867b35"},{url:"basic/markdown/emoji/object.html",revision:"273ebe23e6dc22546e14cfc92b89d5ba"},{url:"basic/markdown/emoji/people.html",revision:"759ef56dbc6982a0e30bf509f63d794a"},{url:"basic/markdown/emoji/symbol.html",revision:"a2a61ab27681841b528aa849b9ef47df"},{url:"basic/markdown/index.html",revision:"36724eb9a5eec774d9753a88cf9d6181"},{url:"basic/vuepress/case.html",revision:"a1eb17f0b293fe9f71aceb1ba69ff716"},{url:"basic/vuepress/command.html",revision:"12c64c7f745b0483e32072b066773745"},{url:"basic/vuepress/file.html",revision:"e992664aab6ef91e118daef74d3026be"},{url:"basic/vuepress/index.html",revision:"6a92a965afaa8ca24d70b1d3b8a548c0"},{url:"basic/vuepress/plugin.html",revision:"a109132d3361f378f97f9788b2f6725d"},{url:"basic/vuepress/theme/config.html",revision:"a3d6aaa47ef0f58a6534891d00ebcdf7"},{url:"basic/vuepress/theme/dev.html",revision:"6e8fe275e32f002302a4488951134d07"},{url:"basic/vuepress/theme/index.html",revision:"758c4ffff2ba76e04f10f7a5fa287e53"},{url:"category/api/index.html",revision:"e78067c936b47f9061b0b160186d095b"},{url:"category/api/page/2/index.html",revision:"c2c008a70ff4383bde52bec22e32803d"},{url:"category/FAQ/index.html",revision:"06c92c4baa681ec0fe2fe91a86471767"},{url:"category/function/index.html",revision:"d75fa564af65ee601d9f5d9bc9b8f5e0"},{url:"category/function/page/2/index.html",revision:"554bafcac87752b2e2f8d050ffd279fa"},{url:"category/index.html",revision:"d284545f6f9d148be054fd8d94b0a39e"},{url:"category/instruction/index.html",revision:"30f4a17b5610610eccb5910f4b9e4323"},{url:"category/layout/index.html",revision:"b6b2e274dc19d933959d396905d70fd1"},{url:"category/layout/page/2/index.html",revision:"d68d1d82abf494b6e5c18afc4c7c2691"},{url:"category/markdown/index.html",revision:"6844c4e2a6e85794e60d1e86f9ac9a79"},{url:"category/style/index.html",revision:"669e4c8c0056e773613f75def77a3c1f"},{url:"en/api/index.html",revision:"0b38f868cfc0ae365a723995151eadc2"},{url:"en/api/page.html",revision:"ddd4d4dc99c12a6e8983015ee19b50c7"},{url:"en/api/plugin/container.html",revision:"4198608a099c491311d8ae5f4edee06e"},{url:"en/api/plugin/copyright.html",revision:"8f03969909d949e0461700621986a06a"},{url:"en/api/plugin/index.html",revision:"9be19d33ef010d1605e37ab7b30c0467"},{url:"en/api/plugin/md-enhance.html",revision:"c9a7e28f2367f9d1817de7152a7a6177"},{url:"en/api/plugin/medium-zoom.html",revision:"577a853f18decf846938cdd5b5ea4c3c"},{url:"en/api/plugin/pwa.html",revision:"291135638aa27f5b8cf543c38df00ebc"},{url:"en/api/stylus.html",revision:"0485dbb765ebc421c752dfdbffe88797"},{url:"en/api/themeConfig.html",revision:"062383cbb9789a199874959808556f29"},{url:"en/basic/index.html",revision:"d86f551f22216a5f9f791de742885121"},{url:"en/basic/markdown/demo.html",revision:"1921510406fd66952b99f2f75d5cedb3"},{url:"en/basic/markdown/emoji.html",revision:"adbbd94f30f7127830330794a11feb79"},{url:"en/basic/markdown/index.html",revision:"2effc51b5567ec81d9da04a29f71cb42"},{url:"en/basic/vuepress/case.html",revision:"95739a62fca5b56dc5e0b98f819c32a4"},{url:"en/basic/vuepress/command.html",revision:"b6c30db649b227a402c353736efc772e"},{url:"en/basic/vuepress/file.html",revision:"780c34a2f016400bdee153489dbbf657"},{url:"en/basic/vuepress/index.html",revision:"22e1e815a5bfc15d902c8ca522ed0ce0"},{url:"en/basic/vuepress/plugin.html",revision:"3949cf78fd6bad356fd19f8d9dc72ba1"},{url:"en/basic/vuepress/theme/config.html",revision:"71c0ff7caef75f43280cf233fb078bfe"},{url:"en/basic/vuepress/theme/dev.html",revision:"b6bdba27aa8ea58a8d2e65d40d455d18"},{url:"en/basic/vuepress/theme/index.html",revision:"83170446202f1b9d3466213f63f90690"},{url:"en/FAQ/index.html",revision:"1693f6bf2a8fbb0c5e63db72c77c52af"},{url:"en/guide/feature/blog.html",revision:"2a57a93c3e58e7537b0c81d405ab0514"},{url:"en/guide/feature/comment.html",revision:"162235f9a8a293785339f9860e964dd3"},{url:"en/guide/feature/component.html",revision:"7587a5e92e4b517694175bb64a9378af"},{url:"en/guide/feature/darkmode.html",revision:"50f28930862829a6c66d7e61347b84c4"},{url:"en/guide/feature/encrypt.html",revision:"5429def25aea6b972ebc076a00c19322"},{url:"en/guide/feature/fullscreen.html",revision:"72ad4854b742b08bf246caa6c8c6e7c7"},{url:"en/guide/feature/icon.html",revision:"a54ac3d1a98b7707fabca4f26484c7b9"},{url:"en/guide/feature/index.html",revision:"94031d48b8abad8c27df520baedfce45"},{url:"en/guide/feature/themecolor.html",revision:"bc5253a44eab566ae59acb50d7342723"},{url:"en/guide/feature/typescript.html",revision:"e8b4bcf6de26e822ef5afdf05b63a25c"},{url:"en/guide/index.html",revision:"8f8396dee7053fbf531d9cc4fb7d25d0"},{url:"en/guide/install.html",revision:"7d4174ba9af2217dbd0e558e3665c7e9"},{url:"en/guide/layout/breadcrumb.html",revision:"b7407e04df65edf7804619cd53fed6e2"},{url:"en/guide/layout/home.html",revision:"97b518cbe75c455946a8583da39ef512"},{url:"en/guide/layout/index.html",revision:"d3838fdf093f17af1687b9ee829afda9"},{url:"en/guide/layout/navbar.html",revision:"7816aa3641d49f94da0f44e18cc8dbfc"},{url:"en/guide/layout/page.html",revision:"405b3677eab8dff20198a7236b7bb0f9"},{url:"en/guide/layout/sidebar.html",revision:"3dd84e7e5f3656547d98c274cfe364b6"},{url:"en/guide/markdown/align.html",revision:"4a66d502bc22f0db2c6eba5dfc4b2ca0"},{url:"en/guide/markdown/flowchart.html",revision:"fe7b5f7a8378610925a19c904ef29066"},{url:"en/guide/markdown/footnote.html",revision:"554c52bd22dc2ac8aa69bf5d12c98811"},{url:"en/guide/markdown/index.html",revision:"73498313f46ca0787d220053a6c4a9d9"},{url:"en/guide/markdown/sup-sub.html",revision:"4f2f00c592bb2504f55969fb10c38ab6"},{url:"en/guide/markdown/tex.html",revision:"246181a4073153296600f27cfcaebb76"},{url:"en/index.html",revision:"f8cbfde574c28161a74539c2b9fa6d76"},{url:"FAQ/index.html",revision:"404441f4aa40cd4c76969bac232a1bc0"},{url:"guide/feature/blog.html",revision:"e3052ec500ffa9b52157263c4e4fc4c0"},{url:"guide/feature/comment.html",revision:"9ef977b18b7951fb4cbe342cb186bcab"},{url:"guide/feature/component.html",revision:"1ae9bcce54533dd347bcffe0b9707f61"},{url:"guide/feature/darkmode.html",revision:"874cdac9430b6a15cb7ec634bfdbc11a"},{url:"guide/feature/encrypt.html",revision:"1c3d5254358dad1f0cd1b35021c03155"},{url:"guide/feature/fullscreen.html",revision:"69dae25794c67281c71d5c6f57791b3f"},{url:"guide/feature/icon.html",revision:"48c918507166e80d9fd2c0909a38b3a6"},{url:"guide/feature/index.html",revision:"9fcd6ede5cd6e6997e8d9788f7d58aa4"},{url:"guide/feature/themecolor.html",revision:"250e85461d7a072d63ddb37271dacf60"},{url:"guide/feature/typescript.html",revision:"5414fca53e3ab4c97b6f84bf54cacd80"},{url:"guide/index.html",revision:"81e2f207334f93d1df72be2e61c1db93"},{url:"guide/install.html",revision:"e621a815294134b331d7673ca630a195"},{url:"guide/layout/breadcrumb.html",revision:"b9e7bda9c96b1fc586ada894d13d5f68"},{url:"guide/layout/home.html",revision:"7b2b39f23df6abecae8ccb7dbeee6225"},{url:"guide/layout/index.html",revision:"6f216780fe364bf90c4ec8af544c225e"},{url:"guide/layout/navbar.html",revision:"ba8c97537a237b1bc9be7204d05ee5d2"},{url:"guide/layout/page.html",revision:"79019f4341327cb10fc0773fdf364f79"},{url:"guide/layout/sidebar.html",revision:"d1dcf2645bc72f41a4e90661518c2dac"},{url:"guide/markdown/align.html",revision:"a0c6ac13b15f5928e3317da9f233174f"},{url:"guide/markdown/flowchart.html",revision:"e0681a283bac8173ccba885cb232711a"},{url:"guide/markdown/footnote.html",revision:"1b0bcafe6fdfdbdb19a744ad827c5414"},{url:"guide/markdown/index.html",revision:"3f1b61c0d10864c387810859b364e1cf"},{url:"guide/markdown/sup-sub.html",revision:"8d1e81dc68dec3c4c3b09966410742ad"},{url:"guide/markdown/tex.html",revision:"87359c19e84058c72d739a9b3190e613"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"40a47ef34ab0eeb901294d31bc061f6e"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"c32fca42258a65d0633a6f37efc52810"},{url:"tag/api/page/2/index.html",revision:"feaf66b59f3d0949696e2f49502ef9c3"},{url:"tag/blog/index.html",revision:"cdea913d2d14c226a3bd7cec0209305f"},{url:"tag/comment/index.html",revision:"bc87df4a96396a8a2b06c36b584efa88"},{url:"tag/component/index.html",revision:"a5a6ca7332982dbd2b13f661b29d968a"},{url:"tag/components/index.html",revision:"fe699fa3ab10087618b55c38d06ec4f4"},{url:"tag/emoji/index.html",revision:"deb3b823518ade76eddc33e048af8cf6"},{url:"tag/encrypt/index.html",revision:"d0caade32297c0e36a32e98501883345"},{url:"tag/enhance/index.html",revision:"0330e52b714a932c49268bc6f3b38e86"},{url:"tag/frontmatter/index.html",revision:"2fd710dd6a192df86777839c736e14ce"},{url:"tag/fullscreen/index.html",revision:"1e7ae9d626e551e4c17d6a67fddbadd3"},{url:"tag/function/index.html",revision:"bee9dfecc82fd55d87e4805946eba720"},{url:"tag/function/page/2/index.html",revision:"9ca7173db03a9f1baeb2035601a186d3"},{url:"tag/home/index.html",revision:"3ffdad352758cef41aed15461ce9eb51"},{url:"tag/icon/index.html",revision:"c056ebd5e738f5c0fbb202ecef0e5258"},{url:"tag/index.html",revision:"dc1a669c6704e103be648e6966427c44"},{url:"tag/intro/index.html",revision:"8d71e7c02a70387d2cba1cbb5b8e5165"},{url:"tag/layout/index.html",revision:"a68d7a757f5f764de61287eab0edd177"},{url:"tag/markdown/index.html",revision:"836d4ba158e9b3c2bb3ca147f575cab7"},{url:"tag/plugin/index.html",revision:"105729207288396d01c8cb229f88e9b4"},{url:"tag/plugin/page/2/index.html",revision:"d6314caed0442e02fd9834df7b7fc245"},{url:"tag/style/index.html",revision:"ea8bfd45dcbd996c4766f360262793cc"},{url:"tag/themeConfig/index.html",revision:"2f3a4101f13039d3a407b532d009681e"},{url:"tag/typescript/index.html",revision:"7425ab6dc56aaea292bc57bbbe7c6a93"},{url:"tag/vuepress/index.html",revision:"18d30a93d422edfb35280c71560e6a7a"}],{})}));
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
