(function(){"use strict";var e={2764:function(e,t,n){var r=n(9242),o=n(3396),i=n(7139),u=n(4870);function a(){const e=(0,u.iH)(!1);function t(){e.value=!e.value}return{menuState:e,changeMneuState:t}}function c(){const e=(0,u.iH)(!1);let t;return document.addEventListener("scroll",(()=>{window.pageYOffset>t&&window.pageYOffset>0?e.value=!0:e.value=!1,t=window.pageYOffset})),{scrollSwitch:e}}const s=(0,o._)("span",null,null,-1),l=[s];var f=(0,o.aZ)({__name:"H5Menu",props:{state:Boolean},setup(e){const t=e,{state:n}=(0,u.BK)(t);return(e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(["H5_menu","icon",(0,u.SU)(n)?"cross":""])},l,2))}});const d=f;var p=d;const v={class:"navBar-container"},m=(0,o._)("div",{class:"front"},[(0,o._)("a",{href:"#"},"xxxx")],-1),h=(0,o._)("div",null,[(0,o._)("a",{class:"item"},"xxx"),(0,o._)("a",{class:"item"},"xxx"),(0,o._)("a",{class:"item"},"xxx"),(0,o._)("a",{class:"item"},"contact")],-1);var g=(0,o.aZ)({__name:"Header",setup(e){const{scrollSwitch:t}=c(),{menuState:n,changeMneuState:r}=a();return(e,a)=>((0,o.wg)(),(0,o.iD)("header",{id:"header",class:(0,i.C_)(["header bg-white animated",[(0,u.SU)(t)?"slideUp":"slideDown"]])},[(0,o._)("div",v,[m,(0,o.Wm)(p,{state:(0,u.SU)(n),onClick:(0,u.SU)(r)},null,8,["state","onClick"]),h])],2))}});const b=g;var y=b,w=(0,o.aZ)({__name:"App",setup(e){return(e,t)=>{const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(y),(0,o.Wm)(n)],64)}}});const _=w;var O=_,S=n(2483);const x=[{path:"/",name:"home",component:()=>n.e(369).then(n.bind(n,7369))}];var k=x;const C=(0,S.p7)({history:(0,S.PO)("/"),routes:k});var j=C,E=n(65),A=(0,E.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(O).use(A).use(j).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".3162cf83.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".ac2138e9.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="demo:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={369:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var l=c(n)}for(t&&t(r);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2764)}));r=n.O(r)})();
//# sourceMappingURL=app.ed5c96cd.js.map