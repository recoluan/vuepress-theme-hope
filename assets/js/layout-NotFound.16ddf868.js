(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{298:function(t,e,n){"use strict";n.r(e);var o=n(299),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e.default=r.a},299:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(e,"__esModule",{value:!0});const r=n(2),i=n(300),a=n(59);let c=class extends r.Vue{get i18n(){return this.$themeLocaleConfig.error404||a.i18n.getDefaultLocale().error404}get msg(){return this.i18n.hint[Math.floor(Math.random()*this.i18n.hint.length)]}back(){window.history.go(-1)}};c=o([r.Component({components:{Common:i.default}})],c),e.default=c},353:function(t,e,n){},491:function(t,e,n){"use strict";var o=n(353);n.n(o).a},535:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Common",{attrs:{sidebar:!1}},[n("main",{staticClass:"page not-found"},[n("h1",[t._v("404")]),t._v(" "),n("blockquote",{domProps:{textContent:t._s(t.msg)}}),t._v(" "),n("div",{staticClass:"action-button",on:{click:t.back}},[t._v(t._s(t.i18n.back))]),t._v(" "),n("router-link",{staticClass:"action-button",attrs:{to:"/"}},[t._v(t._s(t.i18n.home))])],1)])},r=[]},566:function(t,e,n){"use strict";n.r(e);var o=n(535),r=n(298);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n(491);var a=n(1),c=Object(a.a)(r.default,o.a,o.b,!1,null,null,null);e.default=c.exports}}]);