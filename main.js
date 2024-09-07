(()=>{"use strict";var e,n,t,r,o,a,i={365:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(1601),o=t.n(r),a=t(6314),i=t.n(a)()(o());i.push([e.id,'body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n}\n\n.container {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-areas: \n        "sidebar display";\n}\n\n.sidebar {\n    grid-area: sidebar;\n    background-color: rgb(6, 90, 175);\n    overflow: auto;\n    padding: 10px 20px;\n    & p {\n        font-size: 30px;\n        color: white;\n    }\n\n    & .icon {\n        width: 30px;\n    }\n\n    & .projects,\n      .notes {\n        display: flex;\n        justify-content: space-between;\n        & :hover {\n            color: rgb(175, 198, 211);\n            text-decoration: underline;\n            cursor: grab;\n            width: 35px;\n            transition: 0.3s;\n        }\n        max-height: 50%;\n        overflow: auto;\n        margin-bottom: 0;\n    }\n}\n\n.projects-list {\n    overflow: auto;\n    margin-left: 30px;\n    & p {\n        font-size: 20px;\n    }\n    & p:hover {\n        text-decoration: underline;\n        cursor: pointer;\n    }\n    max-height: 30%;\n    margin-top: 0px;\n}\n\n.hidden {\n    display: none;\n}\n\n.display {\n    grid-area: display;\n    background-color: rgb(172, 216, 255);\n    overflow: auto;\n    padding: 40px;\n    display: flex;\n}\n\n.add-new-note-button {\n    padding: 20px;\n    border-radius: 10px;\n    margin-top: 10px;\n    font-size: 30px;\n    color: white;\n    background-color: rgb(6, 90, 175);\n}\n\n.text-area {\n    width: 60%;\n    height: 20%;\n    background-color: rgb(207, 228, 235);\n}\n\narticle {\n    margin: 10px;\n    background-color: rgb(3, 76, 140);\n    padding: 20px;\n    color: rgb(214, 229, 236);\n    font-size: 1.2rem;\n    border-radius: 5px;\n    text-align: center;\n    border: 5px solid #607791\n}\n\n\n/* Styling for Javascript To-do */\n.display {\n    display: flex;\n    flex-direction: column;\n}\n\n.header-container {\n    display: flex;\n    justify-content: space-between;\n    & button {\n        height: 2.3rem;\n        background-color: rgb(28, 246, 28);\n        border-radius: 5px;\n    }\n    & h1 {\n        margin-top: 0;\n        font-size: 2rem;\n        text-decoration: underline;\n    }\n}\n\n.add-new-project-button {\n    height: 2.3rem;\n    background-color: rgb(255, 255, 255);\n    border-radius: 5px;\n}\n\n.todo-container {\n    display: flex;\n    justify-content: space-between;\n    box-sizing: border-box;\n    height: 10%;\n    width: 100%;\n    padding: 0px 15px;\n    border-radius: 4px;\n    background-color: rgb(105, 147, 202);\n    margin-bottom: 10px;\n    & .right-aligned,\n      .left-aligned {\n        display: flex;\n        gap: 20px;\n        font-size: 1rem;\n        align-items: center;\n        & p {\n            margin: 0;\n        }\n        & button {\n            padding: 5px 20px;\n            background-color: rgb(77, 208, 255);\n            border-radius: 5px; \n        }\n        & img {\n            height: 30px;\n        }\n    }\n}\n\n.details-container {\n    background-color: rgb(178, 204, 209);\n    box-sizing: border-box;\n    margin: -9px 0 10px;\n    text-align: center;\n    padding: 10px 0;\n    border-radius: 5px;\n}\n\n.low-priority {\n    border-left: 15px solid rgb(17, 184, 17);\n}\n\n.medium-priority {\n    border-left: 15px solid gold;\n}\n\n.high-priority {\n    border-left: 15px solid red;\n}\n\n.date-made,\n.due-date {\n    text-align: center;\n    width: 105px;\n}\n\n.date-made,\n.due-date {\n    & :first-child {\n        color: rgb(235, 241, 245);\n    }\n}\n\n.checked {\n    background-color: rgb(142, 142, 142);\n    text-decoration: line-through;\n}\n\n.highlighted {\n    background-color: white;\n}',""]);const d=i},6314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var p=0;p<e.length;p++){var c=[].concat(e[p]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),n.push(c))}},n}},1601:e=>{e.exports=function(e){return e[1]}},4788:(e,n,t)=>{var r=t(5072),o=t.n(r),a=t(7825),i=t.n(a),d=t(7659),s=t.n(d),p=t(5056),c=t.n(p),l=t(540),u=t.n(l),h=t(1113),f=t.n(h),m=t(365),b={};b.styleTagTransform=f(),b.setAttributes=c(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=u(),o()(m.A,b),m.A&&m.A.locals&&m.A.locals},5072:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var s=e[d],p=r.base?s[0]+r.base:s[0],c=a[p]||0,l="".concat(p," ").concat(c);a[p]=c+1;var u=t(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=o(h,r);r.byIndex=d,n.splice(d,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var s=r(e,o),p=0;p<a.length;p++){var c=t(a[p]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}a=s}}},7659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},5056:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},7825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},1113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},44:(e,n,t)=>{t.a(e,(async(e,n)=>{try{t(4788),localStorage.projects||localStorage.setItem("projects",JSON.stringify([{name:"Study (example)",todos:[{title:"Learn Webpack (example)",details:"Research how to merge webpack.common.js and the production and development mode versions of those files",dateNow:"September 4th",dueDate:"September 5th",priority:"medium"},{title:"Finish Todo List (example)",details:"Update functionalities in my Todo list app",dateNow:"September 4th",dueDate:"September 5th",priority:"high"},{title:"Finish TOP Course (example)",details:"I'd really like to get this course done in record time in about a month and a half or so",dateNow:"September 4th",dueDate:"October 15th",priority:"high"}],id:0},{name:"Weight Loss (example)",todos:[{title:"Lose 20 Pounds (example)",details:"This fat has to come off some way, somehow!",dateNow:"September 4th",dueDate:"October 30th",priority:"high"}],id:1},{name:"Get Job (example)",todos:[{title:"Research Market (example)",details:"Look for information about job openings in my area",dateNow:"September 4th",dueDate:"November 13th",priority:"medium"},{title:"Read job listings (example)",details:"Look at the newspaper to see if there are any job listings in my field of interest",dateNow:"September 4th",dueDate:"September 25th",priority:"low"}],id:2},{name:"Shopping List (example)",todos:[{title:"Buy Phone (example)",details:"Look for a phone within my budget and buy it, hopefully less than 50k",dateNow:"September 5th",dueDate:"September 5th",priority:"high"}],id:3}])),localStorage.notes||localStorage.setItem("notes",JSON.stringify(["This is an example of a note","I need to remember to practice coding","Maybe add a few more features to my todo app","No worries about the weather app project coming up!","This is the last default note, add more if you want!"])),await Promise.all([t.e(705),t.e(674)]).then(t.bind(t,9674)),await t.e(633).then(t.bind(t,4633)),n()}catch(e){n(e)}}),1)}},d={};function s(e){var n=d[e];if(void 0!==n)return n.exports;var t=d[e]={id:e,exports:{}};return i[e](t,t.exports,s),t.exports}s.m=i,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(o,a,i)=>{var d;i&&((d=[]).d=-1);var s,p,c,l=new Set,u=o.exports,h=new Promise(((e,n)=>{c=n,p=e}));h[n]=u,h[e]=e=>(d&&e(d),l.forEach(e),h.catch((e=>{}))),o.exports=h,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[n]=e,r(a)}),(e=>{i[t]=e,r(a)}));var i={};return i[e]=e=>e(a),i}}var d={};return d[e]=e=>{},d[n]=o,d})))(o);var i=()=>s.map((e=>{if(e[t])throw e[t];return e[n]})),p=new Promise((n=>{(a=()=>n(i)).r=0;var t=e=>e!==d&&!l.has(e)&&(l.add(e),e&&!e.d&&(a.r++,e.push(a)));s.map((n=>n[e](t)))}));return a.r?p:i()}),(e=>(e?c(h[t]=e):p(u),r(d)))),d&&d.d<0&&(d.d=0)},s.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return s.d(n,{a:n}),n},s.d=(e,n)=>{for(var t in n)s.o(n,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((n,t)=>(s.f[t](e,n),n)),[])),s.u=e=>e+".main.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o={},a="to-do-list:",s.l=(e,n,t,r)=>{if(o[e])o[e].push(n);else{var i,d;if(void 0!==t)for(var p=document.getElementsByTagName("script"),c=0;c<p.length;c++){var l=p[c];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+t){i=l;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",a+t),i.src=e),o[e]=[n];var u=(n,t)=>{i.onerror=i.onload=null,clearTimeout(h);var r=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(t))),n)return n(t)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),d&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var n=s.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={792:0};s.f.j=(n,t)=>{var r=s.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(((t,o)=>r=e[n]=[t,o]));t.push(r[2]=o);var a=s.p+s.u(n),i=new Error;s.l(a,(t=>{if(s.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+n,n)}};var n=(n,t)=>{var r,o,[a,i,d]=t,p=0;if(a.some((n=>0!==e[n]))){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);d&&d(s)}for(n&&n(t);p<a.length;p++)o=a[p],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkto_do_list=self.webpackChunkto_do_list||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),s.nc=void 0,s(44)})();