if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"d7e45836fe51620c4464939ae4ae27da"},{url:"article/index.html",revision:"2d6bdd99e22eae821eef39cba3ced157"},{url:"assets/css/0.styles.1fe9e137.css",revision:"17ee9878f2a1e46915c7f6810c8ac98e"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.9a633287.png",revision:"9a633287cd74c5446a945458e904868f"},{url:"assets/img/category.30dc2bc0.png",revision:"30dc2bc01f51b2ead2def19517a298e4"},{url:"assets/img/darkmode.b09eae23.png",revision:"b09eae237bfb38394da644b422dd66cf"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.ab88bd60.png",revision:"ab88bd60aba3206fcfd93c7182f0fffb"},{url:"assets/img/home.fbb29418.png",revision:"fbb29418c5c550a0bccaf6e4a62d55c3"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.5d96437c.js",revision:"27d3a91f324aa37824638c29dade9a44"},{url:"assets/js/layout-Blog.50c585d4.js",revision:"4a86214cc405e0b612db80c78ed72e34"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.73b66d91.js",revision:"bdc1a18b4b26f90075b28aaf14ad3a56"},{url:"assets/js/layout-Layout.14a50d2e.js",revision:"b9b64a1e4ec779abf2ab66438dc66184"},{url:"assets/js/layout-NotFound.4fc48150.js",revision:"3ea415101021f62a03fa7853b1088506"},{url:"assets/js/page-@mr-hopelast-update--1104de32.e8efaaa7.js",revision:"1fee2a7b89949c3ea2206faa8946f3ad"},{url:"assets/js/page-@mr-hopelast-update--ebefb430.6b6efdf3.js",revision:"0cedac43daf8e290c3c25704f98c6d70"},{url:"assets/js/page-@mr-hopepwa--051692f2.9fad52af.js",revision:"0326fed424394f65aaaaa12ee0ef056c"},{url:"assets/js/page-@mr-hopereading-time--36317372.37f4b55f.js",revision:"2e30e3eabd78a7af10c5dc1f43f83616"},{url:"assets/js/page-@mr-hopereading-time--36b7a178.76f35ad5.js",revision:"818ae3f1e3e7e52addbb4190a3ff604e"},{url:"assets/js/page-@mr-hopeseo--44db09a4.931b1ad9.js",revision:"3d8cd2ce69b3740e5b7005434fa9e468"},{url:"assets/js/page-@mr-hopeseo--4c19db12.f0ea41df.js",revision:"9f63c316d1a3724c03922bb1ca5baf44"},{url:"assets/js/page-@mr-hopesitemap--4bd3dd04.0b6984ef.js",revision:"4ea45b39a79bdcbf363431af175a40ae"},{url:"assets/js/page-@mr-hopesitemap--7a219d12.858a81f9.js",revision:"c064ed715a6049a1a52a5d2ec4f5b27d"},{url:"assets/js/page-@vuepressplugin-pwa--1c9738b4.0932693b.js",revision:"1e1f688954d2f232e0b84572120331d1"},{url:"assets/js/page-AboutVuepress--5d12de02.8a68e204.js",revision:"3227ea53e5365f82bc3860b738cb1d89"},{url:"assets/js/page-Basic--29b12659.a58658cf.js",revision:"e1ab10a2ed31fe049b99bf8d7caf82d8"},{url:"assets/js/page-Bloghomepage--d988383c.00c2f504.js",revision:"d49d4b75bf1abaa9639353ee0405d1e1"},{url:"assets/js/page-Blogrelated--7c1e4552.baba984f.js",revision:"d387b57ba6f1d9f4b889bfe1678c8019"},{url:"assets/js/page-CommentFunction--6884a164.b48cb8d8.js",revision:"e4ab777c2a04c65aa8136e332d4c6fcd"},{url:"assets/js/page-Commonproblems--87e54bce.fa96dc59.js",revision:"55be6876361f4a8bcbc3901ca545d8d8"},{url:"assets/js/page-ConfigDocs--2082c612.74d3285a.js",revision:"9b6be9c22037c674c497dbf34ecb98c7"},{url:"assets/js/page-Customalignment--df6a559c.9c42ebd3.js",revision:"26367b228c653af08865a806f7ad5e02"},{url:"assets/js/page-DarkmodeandThemecolor--57fce360.15c848e1.js",revision:"6e554022b810f415f32239a315ae65f1"},{url:"assets/js/page-Demos--cac80116.a303d5ed.js",revision:"503db5450f7cca4b122f9f9b429d5eba"},{url:"assets/js/page-EmojiList--b946d226.4f391a11.js",revision:"242eb2ade2540d97f4b4a2ad09f2f594"},{url:"assets/js/page-Emoji列表--41bb29b9.4f771512.js",revision:"ecbce4e323a3f5a4e3127ac42237fe88"},{url:"assets/js/page-Encryptionfunction--21c8c5d8.6f6d9203.js",revision:"90735628f5bafb2ccfab49a0108a938c"},{url:"assets/js/page-FileStructure--5dff5230.a7c49ff9.js",revision:"506b69c513ea5cca79b8500a3f1b6d73"},{url:"assets/js/page-Flowchart--6426e412.4115b7fe.js",revision:"8173510f0ec99c5ef69c6412cbaada5e"},{url:"assets/js/page-Footnote--3a89d162.c95412fd.js",revision:"0ae022485f1f635b83c39850a9bb667a"},{url:"assets/js/page-HomePage--37b81ca8.1b4d9bee.js",revision:"7ca94de3bb696238a1c90f10de8c679e"},{url:"assets/js/page-InstallUsage--5dafe67a.f3e8e46a.js",revision:"e19a3456b858fed72c6ae354371c9594"},{url:"assets/js/page-Introduction--0b048d19.1bb1e1b8.js",revision:"2f24d549a393651e1774247902610ae5"},{url:"assets/js/page-Layout--655201fe.241ad940.js",revision:"fe829f57a2bfdbabfdb95e8f12fa9f60"},{url:"assets/js/page-MarkdownDEMO--ab10bb74.b6924cc3.js",revision:"66778d27fad7ee0892c1c6af2fbf9c32"},{url:"assets/js/page-MarkdownEnhance--ed59a9f6.fb3744e2.js",revision:"e4d9b421667db1be7b26eba377f6de49"},{url:"assets/js/page-MarkdownIntroduction--25c54f9b.3c90c365.js",revision:"b589f4a34a558f861a4a5610c2354862"},{url:"assets/js/page-Markdown介绍--270989ce.d938b28d.js",revision:"a36348b0a9254f105263d62469dbc2bd"},{url:"assets/js/page-Markdown增强--ad9dba8e.3d708658.js",revision:"5d789c84d6923d33cf2814c87274baa3"},{url:"assets/js/page-Markdown示例--c3e1bfdc.bcf428db.js",revision:"a57dc42837724cdcdc7be851163e20de"},{url:"assets/js/page-Markup--4f1121f0.e3db0c87.js",revision:"160a6d77e610124182d57f147daa2dc9"},{url:"assets/js/page-Nature--5c9d3e6c.92aa58e6.js",revision:"50c24653c83882dbcead52cc678db056"},{url:"assets/js/page-NavBar--262632f4.09e1f262.js",revision:"e011003449fcd1c076635eff3bd564d0"},{url:"assets/js/page-NewComponent--2edd3b68.48945eb5.js",revision:"930d6fac89fe3b29801760233cb8ff57"},{url:"assets/js/page-Newfeature--3e66b879.0925c8c1.js",revision:"036ced9c1946b11f0239ac3e343f74d8"},{url:"assets/js/page-Object--6d31953c.fa99ad62.js",revision:"d33f191fbe48af016951c306cde46fc0"},{url:"assets/js/page-Page--26692570.2b82aee5.js",revision:"9b037b2c69e843e591e2cec152887e5a"},{url:"assets/js/page-PageConfiguration--493c56dc.ecc5698f.js",revision:"53b59687ba91265d3bacc78e909751e3"},{url:"assets/js/page-Pageinformation--6abfca0a.a5e436dc.js",revision:"52d3a6dc20eeefcfbc23c02e7b780753"},{url:"assets/js/page-People--f94822c8.e2a61e42.js",revision:"173c60a2de5e3a540a9c470a9f5a5206"},{url:"assets/js/page-photo-swipe--34ea45d2.883cb3ec.js",revision:"0d1932a09d1bb058042bb2b6694fd4d4"},{url:"assets/js/page-photo-swipe--7be1a0aa.c1ae698e.js",revision:"45dc650a40562dcd1fcf7d180e0b39f0"},{url:"assets/js/page-Place--32291f32.ee10e132.js",revision:"0af57b251830c9e79155dcc26c173e30"},{url:"assets/js/page-PluginDescription--b08a3ace.f2722dd4.js",revision:"0d1e3700248b3bb6c5bf16d206aff354"},{url:"assets/js/page-Plugins--1a5ef242.e18420a3.js",revision:"7b173defec4a5e66493e984484b846aa"},{url:"assets/js/page-SEOandSitemap--13a48dac.51032d60.js",revision:"5e1b7a1aff377182f7a43acb0b5cddc8"},{url:"assets/js/page-SEO和Sitemap--5934b3b2.ec9f67a0.js",revision:"4f0bd488e04d4f0b437a6d77cb8feb2c"},{url:"assets/js/page-Sidebar--12800fd2.fbb9a9da.js",revision:"5fef8a5b0c8f69751b31942702a4b94b"},{url:"assets/js/page-stylusconfiguration--189ec968.84db2999.js",revision:"add50996cb5f952fb3d2a30e5bbba1cd"},{url:"assets/js/page-stylus配置--6796cdf2.7a9587d3.js",revision:"a6615268b1612c4059e3584114e96065"},{url:"assets/js/page-SuperscriptandSubscript--d7f5f81c.a6fbed0b.js",revision:"691b82bb1da8056b5f1f19ea0ef2a3de"},{url:"assets/js/page-Symbol--0b92fe0a.3aec6176.js",revision:"a219e96694439630964c320f6d60839f"},{url:"assets/js/page-TexSupport--f897e69c.e859ed1f.js",revision:"fa0cee26d2b1e6cdcf3f1917eac8dbbc"},{url:"assets/js/page-Tex语法支持--64cb5e50.2b773833.js",revision:"9a48a8de32ac4d2b3e571c75d726b1c5"},{url:"assets/js/page-ThemeConfig--085c2edc.c3dfb8d1.js",revision:"7d6672735b8d8665ace4e60ae696767e"},{url:"assets/js/page-ThemeConfig--4715c95c.67b11cf1.js",revision:"04de734ecbca015b802046980bc4a1d4"},{url:"assets/js/page-TSsupport--165630b2.4a3327fa.js",revision:"069a909689ea1b0abf51be0f3d8485f0"},{url:"assets/js/page-TS支持--09728ac8.c445b6a4.js",revision:"04b37910d322bc87e29bf7ad55d32728"},{url:"assets/js/page-Vuepress--4a71114e.40fb2b44.js",revision:"f28ea6f1795c8e2c80b4e693c64dccf6"},{url:"assets/js/page-vuepress-plugin-container--31498112.35d36f73.js",revision:"e3c9cc4e163723a401edb88c06978158"},{url:"assets/js/page-vuepress-plugin-container--f45c2334.335578a9.js",revision:"1617915511e9675cd59724a75ac5cf7e"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.653a6ae2.js",revision:"9387a783da4a0c2919dd956a74fc24bb"},{url:"assets/js/page-vuepress-plugin-copyright--dac5744c.145948ca.js",revision:"67f53a8fc63aaaf50344524c2af7b028"},{url:"assets/js/page-vuepress-theme-hope--776d8369.3de1edb1.js",revision:"99fa9b42ae5616441167f28dfdd33940"},{url:"assets/js/page-vuepress-theme-hope--7f862af9.d7241ee2.js",revision:"57f330f4291a762cae8d7799c480f6e7"},{url:"assets/js/page-VuepressCases--27d200c8.d7ebb379.js",revision:"0a9b1c7685e3cd5c58d7228a39ba3152"},{url:"assets/js/page-Vuepresscommands--7e89705c.0e4419f0.js",revision:"73e6786a8f8cd40b0a8d4594846de79a"},{url:"assets/js/page-Vuepress案例--082972f2.8caeb90e.js",revision:"671c9db2a94aa43faa0198e8601f6bfa"},{url:"assets/js/page-上下角标--895c91b8.c35fdee8.js",revision:"677c206b79db7b2db90e2adaf2f9d3b3"},{url:"assets/js/page-主题配置--1120a0ce.c9d00aac.js",revision:"7ffae9b9539e855945d8991b025de95c"},{url:"assets/js/page-主题配置--1a859dfc.8d41711d.js",revision:"b6abd929e0ac8570ad3c19a059791df3"},{url:"assets/js/page-人物--2182769c.6e02ea95.js",revision:"8034eb46c2d87571649c223b310ff177"},{url:"assets/js/page-介绍--d4910962.f9a4f74b.js",revision:"f8cd9403800634b250b2cf0bd45fe708"},{url:"assets/js/page-侧边栏--2fa1ea2c.ce824c5b.js",revision:"d175445a56a3ec03b4669cccd7fa49f8"},{url:"assets/js/page-加密功能--181bdc9c.afe21344.js",revision:"70ab17e707d06e66931cb53bfc82dbf6"},{url:"assets/js/page-博客相关--17c260a2.0389c937.js",revision:"92d70d792b99910dbccc9aa2e14a2006"},{url:"assets/js/page-博客首页--64265752.984b7844.js",revision:"11383b7d9c912ffac3ffae4d389c6100"},{url:"assets/js/page-地点--951cdc00.d804dbf6.js",revision:"29d888f82ac8c29c956b9731ff979434"},{url:"assets/js/page-基础知识--770cb96b.fd2020b0.js",revision:"67f5e4f3b7d26b20ac84c95fd43908d9"},{url:"assets/js/page-安装使用--0ab466d2.75157a50.js",revision:"1b5c723c6d99a45419f4370601c7e97f"},{url:"assets/js/page-对象--16031ab2.b76a7335.js",revision:"3c258a98a7228276d8f944940acb5049"},{url:"assets/js/page-导航栏--c7bf87dc.46a9eed7.js",revision:"88f97c34b852891d93a88634acc13827"},{url:"assets/js/page-布局--12bd4f0e.1973aa27.js",revision:"27305983520ed114e962aec680b2e5ef"},{url:"assets/js/page-常见问题--2b571e9b.1df86fe6.js",revision:"b2a875808edf7fbcf3a63abd6ee981f5"},{url:"assets/js/page-插件--adbf415c.936664b5.js",revision:"e2f3be581f775b3f9668094c40e1f66b"},{url:"assets/js/page-插件说明--137c6c07.60648dfb.js",revision:"67b7cf49774c8443e3acdb09cf1a7174"},{url:"assets/js/page-文件结构介绍--665a4f1c.f3bdbb6e.js",revision:"c89d35b7f1aedcc3ef1453d9b47d1b78"},{url:"assets/js/page-新增特性--5136c541.6f341923.js",revision:"e66efcc918dd512ea0724897b37fdd55"},{url:"assets/js/page-新增组件--1d138c72.a3c1e583.js",revision:"ab57ab156ef66dadf590214379b8cbb7"},{url:"assets/js/page-标记--6b1f341c.f058021e.js",revision:"94443235c0c735ab3b3e59cc284973b4"},{url:"assets/js/page-流程图支持--7ce6d974.0df58ac7.js",revision:"672c28c5e08ef915fd8dfae9b3c05e15"},{url:"assets/js/page-深色模式与主题色--e23e731c.a9df8985.js",revision:"97b872d5e9e7578279740b24ef593d5a"},{url:"assets/js/page-符号--a9259c5c.4928ce2b.js",revision:"69d766df79662dcd59ca0ffcc5f265ac"},{url:"assets/js/page-脚注--0c733e52.c5ba822e.js",revision:"3ea4edfaccb4953b00cd32eaf8ad4130"},{url:"assets/js/page-自定义对齐--4f21aa5c.76c7cd64.js",revision:"af326b6b2fd6353f59ef5eb865619956"},{url:"assets/js/page-自然--749fb09c.4d09884e.js",revision:"1672f96a9126579da0230c3902651a72"},{url:"assets/js/page-评论功能--5bb6671c.36f563a8.js",revision:"91af0680f5d238e5c345c682f7edafca"},{url:"assets/js/page-配置文档--35a0a7d9.5f1e1b17.js",revision:"06709c5d8542755250aee686baa236e8"},{url:"assets/js/page-页面--af17b59c.3f2b52db.js",revision:"743fac211ac8c226cb6928c4ff66ce0f"},{url:"assets/js/page-页面信息--71efd5d2.4f61abbe.js",revision:"9ffe5243069631058f48acf572e191c0"},{url:"assets/js/page-页面配置--0aacc152.4f622d2e.js",revision:"1104bf7a1904bde6bd5b2279d9cf94bc"},{url:"assets/js/page-项目指令--9f3f316c.83448578.js",revision:"80c7c6a72b63aaa95241997df79bc137"},{url:"assets/js/page-项目案例--f328658e.108ffe9c.js",revision:"9f3b0332cacb19e295beffb94d3352e8"},{url:"assets/js/page-首页--5834599c.5a659ce0.js",revision:"3c261268ba528719b745232fe63000d5"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.e52381da.js",revision:"a4850955c2c3497f6c7d570af0f18438"},{url:"assets/js/vendors~layout-Layout.c0e66ab2.js",revision:"ac7cb3ce4a46300cabf451189ddbf9e7"},{url:"basic/index.html",revision:"784d8f80b91cfe2b4165c636e1a10e0c"},{url:"basic/markdown/demo/index.html",revision:"0b388a5d2194a801385a4bcb494d3d87"},{url:"basic/markdown/emoji/index.html",revision:"d18499cf0c7ef9a793b64085b6c67d2e"},{url:"basic/markdown/emoji/nature/index.html",revision:"7e877a36ccd2c3a5f79a74ee4d6d37c8"},{url:"basic/markdown/emoji/object/index.html",revision:"cb92836ea28c2a79777e47c11ea6cff4"},{url:"basic/markdown/emoji/people/index.html",revision:"d7f182ddd3626da7b58ad512e53fab1b"},{url:"basic/markdown/emoji/place/index.html",revision:"1c58efc1fe8ed838ae076d5d11b63aeb"},{url:"basic/markdown/emoji/symbol/index.html",revision:"bcc06f76a1aa765d27b304b4af12eb9c"},{url:"basic/markdown/index.html",revision:"22ef7abdb40cf9e047ccbaffba2cabd9"},{url:"basic/vuepress/case/index.html",revision:"471ee5edd46f339abf2066fb24c5a4b0"},{url:"basic/vuepress/command/index.html",revision:"ff33993e80d6b0a5e301a5d4b9c2f508"},{url:"basic/vuepress/file/index.html",revision:"6014b8ea811be3fabe77f804e79ddf7d"},{url:"basic/vuepress/index.html",revision:"24e854c7e94cdee6793c56f4baf47f5d"},{url:"basic/vuepress/plugin/index.html",revision:"007693c54b81ccb7d3f2e2ee7abaf4e3"},{url:"basic/vuepress/theme/index.html",revision:"294921e7226558d71476238599317fb5"},{url:"category/config/index.html",revision:"5dcdb61a2a2877b8f36a76c3c8efb726"},{url:"category/config/page/2/index.html",revision:"540fe0a15e691e4f78ef7f539bbeb1fd"},{url:"category/config/page/3/index.html",revision:"a3c142d445b1efd9ed5839c0461b8752"},{url:"category/FAQ/index.html",revision:"865f3c2626394c20c1d2b8904c3c683d"},{url:"category/feature/index.html",revision:"f0199338fcb0410641aaaed23eec3b75"},{url:"category/feature/page/2/index.html",revision:"d2d03f1be9e9d3a472585e45a14956c2"},{url:"category/index.html",revision:"5b8ac876e30dbd67041bacc105ae1a23"},{url:"category/instruction/index.html",revision:"7d36614c6c877d12e72599fc19d971aa"},{url:"category/layout/index.html",revision:"ada9fa26bba6272051447be27e630c10"},{url:"category/layout/page/2/index.html",revision:"1c96bdbd41a160b38ddf237a3def336b"},{url:"category/markdown/index.html",revision:"eaf09cd782aa42ca28b0cfdc3a41b6dd"},{url:"config/index.html",revision:"33413ac047678bc87eeaf24e5b2ccdb4"},{url:"config/page/index.html",revision:"b934ef69427b0a63ba2a4b89149f43ed"},{url:"config/plugin/container/index.html",revision:"815d5d53930ca60add784608d7940625"},{url:"config/plugin/copyright/index.html",revision:"4e1fee20232a20647e138a061b4a5d6f"},{url:"config/plugin/index.html",revision:"39f29200cc6c62fbbf04876bf1c445a1"},{url:"config/plugin/last-update/index.html",revision:"f4c52da9b52cb48b28f55ff1c6afb881"},{url:"config/plugin/photo-swipe/index.html",revision:"8a6eab1b654a159d3f43365eeb402c44"},{url:"config/plugin/pwa/index.html",revision:"67c211c114437e108b60222246f2b9b7"},{url:"config/plugin/reading-time/index.html",revision:"a31cfb36eaada5e92b8d15a357f7e4b6"},{url:"config/plugin/seo/index.html",revision:"0c4eac679a8dac51086ab73764f56060"},{url:"config/plugin/sitemap/index.html",revision:"17f825ee2606a9257eb3439585b6dd8f"},{url:"config/stylus/index.html",revision:"fbcbf8d7c2a34eeae782345abfb32c20"},{url:"config/themeConfig/index.html",revision:"c794600cbc5097f82421e5e4db0e4d70"},{url:"demo/index.html",revision:"fca63444c57356336e31bad0f0590361"},{url:"en/basic/index.html",revision:"2c01914bd4eb6db4e4484a2edb6aa093"},{url:"en/basic/markdown/demo/index.html",revision:"ed2fe437891a0810b0ca8d4e8b62b773"},{url:"en/basic/markdown/emoji/index.html",revision:"5401090c42db8a2d543e67a7c14ea9c9"},{url:"en/basic/markdown/emoji/nature/index.html",revision:"c14b964f240d8f7be7ec158fe91b5876"},{url:"en/basic/markdown/emoji/object/index.html",revision:"9b87101312e01e282b419bb3b2ba05d0"},{url:"en/basic/markdown/emoji/people/index.html",revision:"b869851688029c702060cd6f65a80004"},{url:"en/basic/markdown/emoji/place/index.html",revision:"8810d754ca0117bafd884008bdd16db1"},{url:"en/basic/markdown/emoji/symbol/index.html",revision:"7515528173494b5375098bc18b7b315d"},{url:"en/basic/markdown/index.html",revision:"3881db7e3b373c84e4129e98eacd3490"},{url:"en/basic/vuepress/case/index.html",revision:"05c3d4a1042588bea3ed8ebd287cc3cd"},{url:"en/basic/vuepress/command/index.html",revision:"3af859b2425410bc7a6c541415b1d3b8"},{url:"en/basic/vuepress/file/index.html",revision:"4c24d2063ee657ce795c029c0aad6724"},{url:"en/basic/vuepress/index.html",revision:"fbe87f4f7b3d9774b8aba0c37da806cf"},{url:"en/basic/vuepress/plugin/index.html",revision:"da2f23b9cf380e7c6fd3950397d88e3b"},{url:"en/basic/vuepress/theme/index.html",revision:"4e2caa99a5b7fd8ce3c13cfa5f180c6d"},{url:"en/config/index.html",revision:"bc55de8e7cefc17ca1eea71f291c3a28"},{url:"en/config/page/index.html",revision:"0d032fc5e50f7da27b55afc42a07da1e"},{url:"en/config/plugin/container/index.html",revision:"27ac73c8a0bdb0bd735bccae8dde8c8d"},{url:"en/config/plugin/copyright/index.html",revision:"4064a2479411910529ecc28a0a6dbbfd"},{url:"en/config/plugin/index.html",revision:"6469c866deade1ce15ff5cb541d58174"},{url:"en/config/plugin/last-update/index.html",revision:"7166122ff5daf27361c032019bbc96bf"},{url:"en/config/plugin/photo-swipe/index.html",revision:"46597c94efee8cf4040b9d30ec357491"},{url:"en/config/plugin/pwa/index.html",revision:"4203b59843fa52d56692e53023d3ea9e"},{url:"en/config/plugin/reading-time/index.html",revision:"ed40a66d01ab75c17964667a859ba428"},{url:"en/config/plugin/seo/index.html",revision:"32b375057535fc23a97509073a18aae0"},{url:"en/config/plugin/sitemap/index.html",revision:"fc5ea9c4a7135f05474593bb36f92958"},{url:"en/config/stylus/index.html",revision:"f4bed85f4a70e716fd16975aece2c54d"},{url:"en/config/themeConfig/index.html",revision:"4930a5bbdeff805bddf51c689d740fec"},{url:"en/demo/index.html",revision:"eac3aebcb2fb5bbd2dbbb15945a3a824"},{url:"en/FAQ/index.html",revision:"44050f8bf08904389db205bc8efbdfb1"},{url:"en/guide/feature/blog/index.html",revision:"59e39e3bce9ecc85918f0a029592514d"},{url:"en/guide/feature/comment/index.html",revision:"0f84d00beea2d557f7c13b9238970a01"},{url:"en/guide/feature/component/index.html",revision:"23cfa3a7880bd42d3965c0089b1fb3fd"},{url:"en/guide/feature/encrypt/index.html",revision:"f1fcc89679d9c86be2025673af7e5470"},{url:"en/guide/feature/index.html",revision:"4f060618fb4e7d00e35174cc34be92a8"},{url:"en/guide/feature/markdown/align/index.html",revision:"d1aa20f08dfa8fb9cf166cc72f296f17"},{url:"en/guide/feature/markdown/flowchart/index.html",revision:"c06dcd4e67c19315a16db01c8320d0aa"},{url:"en/guide/feature/markdown/footnote/index.html",revision:"0c2e8d4af18c7638560603fc298e5830"},{url:"en/guide/feature/markdown/index.html",revision:"b7a876d879a235a12940dcf886212ef3"},{url:"en/guide/feature/markdown/mark/index.html",revision:"a5974c89114c13f0063f9165ce755607"},{url:"en/guide/feature/markdown/sup-sub/index.html",revision:"c5c1f62719655bf73564bdad30be3f8e"},{url:"en/guide/feature/markdown/tex/index.html",revision:"09e60896d547bcb18883a575b7937b64"},{url:"en/guide/feature/page-info/index.html",revision:"fa2aa8d24e8468c9531d66ca49b589ba"},{url:"en/guide/feature/seoAndSitemap/index.html",revision:"2ef4b3fd5d09fe98040b290372330aaf"},{url:"en/guide/feature/theme/index.html",revision:"d0918f63735956d6b7a1d08138f0a8f4"},{url:"en/guide/feature/typescript/index.html",revision:"843ef00678616e181acd44c8820fb4a0"},{url:"en/guide/index.html",revision:"fe9090f4f1ac3ac694013927569c1bfc"},{url:"en/guide/install/index.html",revision:"f0ae596b22393883ac8baa142b38aca5"},{url:"en/guide/layout/blog/index.html",revision:"6b3234d45847704a1a54d64af17f7e99"},{url:"en/guide/layout/home/index.html",revision:"a780bc7b1558cd483ddc928b590e37fd"},{url:"en/guide/layout/index.html",revision:"e9af653880c12284d62f956aeba8b52f"},{url:"en/guide/layout/navbar/index.html",revision:"7c28ac9d5a5a89fe50b3142f02a66e28"},{url:"en/guide/layout/page/index.html",revision:"3c79e14a83d6aed57a33ce618616cb20"},{url:"en/guide/layout/sidebar/index.html",revision:"08d48b5b23ac1bb469e60e84516afc7b"},{url:"en/index.html",revision:"1c52cba1e8d088ffc9020061238659d6"},{url:"FAQ/index.html",revision:"694953b3a23bcf99bc7c5b6e47967f0f"},{url:"guide/feature/blog/index.html",revision:"2013496b3bdec9e6d794555934e9d9cc"},{url:"guide/feature/comment/index.html",revision:"daabc36040441784116d323cf8fc6555"},{url:"guide/feature/component/index.html",revision:"b6c46817d4e4c6dd9b780432907e99cf"},{url:"guide/feature/encrypt/index.html",revision:"e99e929c29b44c1e854d7123b61861a3"},{url:"guide/feature/index.html",revision:"8824f9fb9e247a0289d3072db0922f72"},{url:"guide/feature/markdown/align/index.html",revision:"8d32a6c5970ddef8c0b124123e727c49"},{url:"guide/feature/markdown/flowchart/index.html",revision:"7414c451250ef190bea43e24a263254e"},{url:"guide/feature/markdown/footnote/index.html",revision:"f9889c620d47abe048d7b33f92174dee"},{url:"guide/feature/markdown/index.html",revision:"26140c70f1f3a015a5a7b2e45d34f8b3"},{url:"guide/feature/markdown/mark/index.html",revision:"e95613595e259d41d3230dbf69c8d5f9"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"2dc6c7b570384df660f11913ed17898e"},{url:"guide/feature/markdown/tex/index.html",revision:"289db212081e2cf8e2271b52688a5ed4"},{url:"guide/feature/page-info/index.html",revision:"a396a15b8c527af7addd621fe70a03b7"},{url:"guide/feature/seoAndSitemap/index.html",revision:"0b924a534fae68a2c606f830c76cf6b5"},{url:"guide/feature/theme/index.html",revision:"fedcccd2141c14bf34fae8489ac0619f"},{url:"guide/feature/typescript/index.html",revision:"c5f77aa3544700bda47096f3bb4299f1"},{url:"guide/index.html",revision:"570fb1adc1ad297d05db4b310c2a5e51"},{url:"guide/install/index.html",revision:"c942b643c5ba4aa45d46082f140a6de8"},{url:"guide/layout/blog/index.html",revision:"0071256fd0b6977438b99f84299d0a56"},{url:"guide/layout/home/index.html",revision:"daa9182d02323a36b913fa0f721eac54"},{url:"guide/layout/index.html",revision:"71e39844e38d243c6b51efb0abdd9021"},{url:"guide/layout/navbar/index.html",revision:"eec9cfdd163b12e933d0c0e22a32eae3"},{url:"guide/layout/page/index.html",revision:"3091681dd495b4eb55bb2dbf987fcbbe"},{url:"guide/layout/sidebar/index.html",revision:"35916d9a0399d39ea04a8c71d3f476e9"},{url:"index.html",revision:"640bcf1a11d86111474f177c6a166731"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"1232910f8dbd70a1b0bac53333c3ef4f"},{url:"tag/comment/index.html",revision:"6c9a6b717b5336663e9bfb2f2ac382e6"},{url:"tag/components/index.html",revision:"be02680b6fedabeba57c3f3769e0e216"},{url:"tag/config/index.html",revision:"d8669a326a21c7204a96927515d803d9"},{url:"tag/config/page/2/index.html",revision:"74ed3d521b60d8f75475b0e651696df5"},{url:"tag/config/page/3/index.html",revision:"c5df5aebeba570b041bc404bcc81c821"},{url:"tag/emoji/index.html",revision:"2f9fc6e3386be09f841cfbb4153ce55c"},{url:"tag/emoji/page/2/index.html",revision:"1b5d12b5170ec4911bbe27691047c828"},{url:"tag/encrypt/index.html",revision:"2cb13bfc8714d26f3320e457027761a2"},{url:"tag/feature/index.html",revision:"8fb31bdafbd3e58922cafe510c6badc6"},{url:"tag/feature/page/2/index.html",revision:"3f58543bbe75cf9f8de6d6d104096c0a"},{url:"tag/frontmatter/index.html",revision:"12e5224618e14919e93e06842d0c3a38"},{url:"tag/function/index.html",revision:"6a0092157d2aef864989fe0478a51520"},{url:"tag/function/page/2/index.html",revision:"81beb65531ba433430334006a4a6378b"},{url:"tag/home/index.html",revision:"a849e8f1aff6f8ca63e9fa49561d6aab"},{url:"tag/index.html",revision:"a750c94a12eabf41bcda3da7a7a92f6b"},{url:"tag/intro/index.html",revision:"3289f4f96fb6882b2da9aeec5873ba9f"},{url:"tag/layout/index.html",revision:"2573e21776ffaaa5170d535253e4835c"},{url:"tag/layout/page/2/index.html",revision:"baa6515317b02c3a8547fe51003f1b50"},{url:"tag/markdown/index.html",revision:"591b0061f3c4f8782fbb4f087128e98d"},{url:"tag/markdown/page/2/index.html",revision:"c94e9b271a433d20e08cfda797cc4c6c"},{url:"tag/markdown/page/3/index.html",revision:"306b9da1ce256d1582c3de0116688202"},{url:"tag/navbar/index.html",revision:"1006ff8fc80b6ab06be3d0780d42f0f0"},{url:"tag/page-info/index.html",revision:"5694462a5ee348b253d0491381692b69"},{url:"tag/plugin/index.html",revision:"f3fb14b7aaab8d27369a7657a5c5b38d"},{url:"tag/plugin/page/2/index.html",revision:"bf5ad70e5917a23f92e49d655f7f9622"},{url:"tag/seo/index.html",revision:"b54c8b63e655d5a43c77af42b2b619f5"},{url:"tag/sidebar/index.html",revision:"199f55add5e36b8e63f4797529a075a3"},{url:"tag/sitemap/index.html",revision:"72fcaae3062bc2f5e4c2089b156b58ef"},{url:"tag/style/index.html",revision:"3c470e77f4bed42848b1effcb20030ca"},{url:"tag/themeConfig/index.html",revision:"1385d432abf51665dbda624259a4fbfb"},{url:"tag/typescript/index.html",revision:"1bf8e50a82a24ec1c3477232f736a207"},{url:"tag/vuepress/index.html",revision:"cba6c215724748b38fbf2631062d3599"},{url:"timeline/index.html",revision:"d6c83ad679b0685d427fee8c400e4c06"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
