(function(t){function e(e){for(var a,s,i=e[0],u=e[1],l=e[2],c=0,p=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function s(t){return i.p+"../../static/vue/js/"+({about:"about"}[t]||t)+"."+{about:"01b53d27"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var l=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("Vuetify")]),n("span",{staticClass:"font-weight-light"},[t._v("MATERIAL DESIGN")])]),n("v-spacer"),n("v-btn",{attrs:{text:"",href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank"}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")])])],1),n("v-content",[n("HelloWorld")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),a("br"),t._v("please join our online\n        "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},i=[],u={data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},l=u,c=n("2877"),f=n("6544"),p=n.n(f),h=n("a523"),v=n("0e8f"),m=n("adda"),d=n("a722"),y=Object(c["a"])(l,s,i,!1,null,null,null),b=y.exports;p()(y,{VContainer:h["a"],VFlex:v["a"],VImg:m["a"],VLayout:d["a"]});var g={name:"App",components:{HelloWorld:b},data:()=>({})},x=g,_=n("7496"),w=n("40dc"),j=n("8336"),k=n("a75b"),C=n("2fa4"),O=n("2a7f"),V=Object(c["a"])(x,r,o,!1,null,null,null),E=V.exports;p()(V,{VApp:_["a"],VAppBar:w["a"],VBtn:j["a"],VContent:k["a"],VSpacer:C["a"],VToolbarTitle:O["a"]});var P=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},T=[],A={components:{HelloWorld:b}},L=A,M=Object(c["a"])(L,S,T,!1,null,null,null),W=M.exports;a["a"].use(P["a"]);var q=new P["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]}),H=n("2f62");a["a"].use(H["a"]);var I=new H["a"].Store({state:{},mutations:{},actions:{}}),$=n("f309");a["a"].use($["a"]);var D=new $["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({router:q,store:I,vuetify:D,render:t=>t(E)}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"../../static/vue/img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.1785b9fb.js.map