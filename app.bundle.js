!function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=9)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var r=(A=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(A))))+" */"),o=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[t].concat(o).concat([r]).join("\n")}var A;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<n.length;r++){var A=n[r];null!=A[0]&&i[A[0]]||(t&&!A[2]?A[2]=t:t&&(A[2]="("+A[2]+") and ("+t+")"),e.push(A))}},e}},function(n,e,t){var i,r,o={},A=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var i=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}e[n]=i}return e[n]}}(),a=null,c=0,l=[],d=t(6);function p(n,e){for(var t=0;t<n.length;t++){var i=n[t],r=o[i.id];if(r){r.refs++;for(var A=0;A<r.parts.length;A++)r.parts[A](i.parts[A]);for(;A<i.parts.length;A++)r.parts.push(f(i.parts[A],e))}else{var s=[];for(A=0;A<i.parts.length;A++)s.push(f(i.parts[A],e));o[i.id]={id:i.id,refs:1,parts:s}}}}function h(n,e){for(var t=[],i={},r=0;r<n.length;r++){var o=n[r],A=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[A]?i[A].parts.push(s):t.push(i[A]={id:A,parts:[s]})}return t}function m(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===n.insertAt)i?i.nextSibling?t.insertBefore(e,i.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertAt.before,t);t.insertBefore(e,r)}}function C(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function g(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var i=function(){0;return t.nc}();i&&(n.attrs.nonce=i)}return u(e,n.attrs),m(n,e),e}function u(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function f(n,e){var t,i,r,o;if(e.transform&&n.css){if(!(o="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=o}if(e.singleton){var A=c++;t=a||(a=g(e)),i=y.bind(null,t,A,!1),r=y.bind(null,t,A,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",u(e,n.attrs),m(n,e),e}(e),i=function(n,e,t){var i=t.css,r=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=d(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var A=new Blob([i],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(A),s&&URL.revokeObjectURL(s)}.bind(null,t,e),r=function(){C(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(e),i=function(n,e){var t=e.css,i=e.media;i&&n.setAttribute("media",i);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){C(t)});return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=A()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=h(n,e);return p(t,e),function(n){for(var i=[],r=0;r<t.length;r++){var A=t[r];(s=o[A.id]).refs--,i.push(s)}n&&p(h(n,e),e);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete o[s.id]}}}};var E,B=(E=[],function(n,e){return E[n]=e,E.filter(Boolean).join("\n")});function y(n,e,t,i){var r=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=B(e,r);else{var o=document.createTextNode(r),A=n.childNodes;A[e]&&n.removeChild(A[e]),A.length?n.insertBefore(o,A[e]):n.appendChild(o)}}},function(n,e,t){var i=t(5);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(i,r);i.locals&&(n.exports=i.locals)},function(n,e,t){var i=t(7);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(i,r);i.locals&&(n.exports=i.locals)},function(n,e,t){var i=t(8);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(i,r);i.locals&&(n.exports=i.locals)},function(n,e,t){(n.exports=t(0)(!0)).push([n.i,"html {\n  font-size: 14rem;\n}\nbody {\n  display: grid;\n  grid-template-rows: 20% auto 10%;\n  justify-items: center;\n  grid-gap: 20px;\n  color: black;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n.clips {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-content: center;\n  grid-gap: 5%;\n  transform: translate(calc(var(--i, 100%)));\n  transition: transform .45s ease-out,opacity .5s,-webkit-transform .45s ease-out;\n}\n\n.clips-item {\n  position: relative;\n  width: 22rem;\n  height: 32rem;\n  background-color: #B0E0E6;\n  border-radius: 2%;\n  border: 3px solid #000080;\n}\n\n.img-of-clip {\n  position: relative;\n  top: 5px;\n  width: 22rem;\n  margin-bottom: 20px;\n}\n\n.title-cont {\n  position: absolute;\n  top: 10%;\n  margin: 0 auto;\n  width: 100%;\n  height: 80px;\n  background: rgba(240, 128, 128, 0.3);;\n  color: black;\n}\n.title-cont:hover {\n  cursor: pointer;\n}\n\nspan {\n  visibility: hidden;\n}\n\n.title-cont p {\n  height: 50px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n  color: #191970;\n  text-decoration: underline;\n}\n\n.description {\n  height: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-style: italic;\n  font-size: 0.8em;\n  padding: 5px;\n  font-weight: 600;\n  font-size: 1rem;\n  color: #191970;\n}\n\n.chanel-name {\n  height: 30px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n  color: #191970;\n}\n\n.date {\n  height: 30px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n  color: #191970;\n}\n\n.statistics {\n  height: 30px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n  color: #191970;\n}\n.opacity {\n  visibility: hidden;\n}\n.opacity {\n  animation-name: myopacity;\n  -webkit-animation-name: myopacity;\n  animation-duration: 1.7s;\n  -webkit-animation-duration: 1.7s;\n  animation-timing-function: ease-out;\n  -webkit-animation-timing-function: ease-out;\n  visibility: visible !important;\n}\n@keyframes myopacity {\n  0%{opacity:0}\n  10%{opacity:.1}\n  20%{opacity:.2}\n  30%{opacity:.3}\n  40%{opacity:.4}\n  50%{opacity:.5}\n  60%{opacity:.6}\n  70%{opacity:.7}\n  80%{opacity:.8}\n  90%{opacity:.9}\n  100%{opacity:1}\n}\n@-webkit-keyframes myopacity {\n    0%{opacity:0}\n    10%{opacity:.1}\n    20%{opacity:.2}\n    30%{opacity:.3}\n    40%{opacity:.4}\n    50%{opacity:.5}\n    60%{opacity:.6}\n    70%{opacity:.7}\n    80%{opacity:.8}\n    90%{opacity:.9}\n    100%{opacity:1}\n}\n\n@media screen and (max-width: 1450px) {\n  .clips {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 5px;\n  }\n}\n\n@media screen and (max-width: 990px) {\n  .clips {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 5px;\n  }\n  .clips-item {\n    width: 25rem;\n    height: 40rem;\n  }\n  .img-of-clip {\n    width: 25rem;\n  }\n}\n\n@media screen and (max-width: 750px) {\n  html {\n    height: 100%;\n  }\n  body {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 15% auto 15%;\n    justify-items: center;\n    grid-gap: 20px;\n    color: black;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n  }\n  .clips {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 5px;\n    align-items: center;\n  }\n\n  .clips-item {\n    position: relative;\n    width: 90%;\n    background-color: white;\n    border-radius: 1%;\n    margin: 0 auto;\n  }\n  .img-of-clip {\n    position: relative;\n    top: 2px;\n    width: 100%;\n  }\n\n  .title-cont {\n    position: absolute;\n    top: 5%;\n    font-size: 6rem;\n    margin: 0 auto;\n    width: 100%;\n    height: 215px;\n    background: rgba(240, 128, 128, 0.8);\n    color: black;\n  }\n\n  .title-cont p {\n    height: 150px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-align: center;\n    font-size: 4rem;\n  }\n\n  .description {\n    height: 200px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-style: italic;\n    font-size: 2rem;\n    padding: 2px;\n    margin-top: 4rem;\n    text-align: center;\n  }\n\n  .chanel-name {\n    height: 15px;\n    text-align: center;\n    font-size: 3rem;\n  }\n\n  .date {\n    height: 10px;\n    text-align: center;\n    font-size: 4rem;\n    margin-top: 3rem;\n  }\n\n  .statistics {\n    height: 10px;\n    text-align: center;\n    font-size: 4rem;\n  }\n}\n\n@media screen and (max-device-width: 1450px) {\n  .clips {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 5px;\n  }\n}\n\n@media screen and (max-device-width: 990px) {\n  .clips {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 5px;\n  }\n  .clips-item {\n    width: 25rem;\n    height: 40rem;\n  }\n  .img-of-clip {\n    width: 25rem;\n  }\n}\n\n@media screen and (max-device-width: 750px) {\n  html {\n    height: 100%;\n  }\n  body {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 15% auto 15%;\n    justify-items: center;\n    grid-gap: 20px;\n    color: black;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n  }\n  .clips {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 5px;\n    align-items: center;\n  }\n\n  .clips-item {\n    position: relative;\n    width: 90%;\n    background-color: white;\n    border-radius: 1%;\n    margin: 0 auto;\n  }\n  .img-of-clip {\n    position: relative;\n    top: 2px;\n    width: 100%;\n  }\n\n  .title-cont {\n    position: absolute;\n    top: 5%;\n    font-size: 6rem;\n    margin: 0 auto;\n    width: 100%;\n    height: 215px;\n    background: rgba(240, 128, 128, 0.8);\n    color: black;\n  }\n\n  .title-cont p {\n    height: 150px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-align: center;\n    font-size: 4rem;\n  }\n\n  .description {\n    height: 200px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-style: italic;\n    font-size: 2rem;\n    padding: 2px;\n    margin-top: 4rem;\n    text-align: center;\n  }\n\n  .chanel-name {\n    height: 15px;\n    text-align: center;\n    font-size: 3rem;\n  }\n\n  .date {\n    height: 10px;\n    text-align: center;\n    font-size: 4rem;\n    margin-top: 3rem;\n  }\n\n  .statistics {\n    height: 10px;\n    text-align: center;\n    font-size: 4rem;\n  }\n}\n","",{version:3,sources:["clipView.css","<no source>"],names:[],mappings:"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",file:"clipView.css",sourcesContent:["html {\n  font-size: 14rem;\n}\nbody {\n  display: grid;\n  grid-template-rows: 20% auto 10%;\n  justify-items: center;\n  grid-gap: 20px;\n  color: black;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n.clips {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-content: center;\n  grid-gap: 5%;\n  transform: translate(calc(var(--i, 100%)));\n  transition: transform .45s ease-out,opacity .5s,-webkit-transform .45s ease-out;\n}\n\n.clips-item {\n  position: relative;\n  width: 22rem;\n  height: 32rem;\n  background-color: #B0E0E6;\n  border-radius: 2%;\n  border: 3px solid #000080;\n}\n\n.img-of-clip {\n  position: relative;\n  top: 5px;\n  width: 22rem;\n  margin-bottom: 20px;\n}\n\n.title-cont {\n  position: absolute;\n  top: 10%;\n  margin: 0 auto;\n  width: 100%;\n  height: 80px;\n  background: rgba(240, 128, 128, 0.3);;\n  color: black;\n}\n.title-cont:hover {\n  cursor: pointer;\n}\n\nspan {\n  visibility: hidden;\n}\n\n.title-cont p {\n  height: 50px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n  color: #191970;\n  text-decoration: underline;\n}\n\n.description {\n  height: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-style: italic;\n  font-size: 0.8em;\n  padding: 5px;\n  font-weight: 600;\n  font-size: 1rem;\n  color: #191970;\n}\n\n.chanel-name {\n  height: 30px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n  color: #191970;\n}\n\n.date {\n  height: 30px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n  color: #191970;\n}\n\n.statistics {\n  height: 30px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n  color: #191970;\n}\n.opacity {\n  visibility: hidden;\n}\n.opacity {\n  animation-name: myopacity;\n  -webkit-animation-name: myopacity;\n  animation-duration: 1.7s;\n  -webkit-animation-duration: 1.7s;\n  animation-timing-function: ease-out;\n  -webkit-animation-timing-function: ease-out;\n  visibility: visible !important;\n}\n@keyframes myopacity {\n  0%{opacity:0}\n  10%{opacity:.1}\n  20%{opacity:.2}\n  30%{opacity:.3}\n  40%{opacity:.4}\n  50%{opacity:.5}\n  60%{opacity:.6}\n  70%{opacity:.7}\n  80%{opacity:.8}\n  90%{opacity:.9}\n  100%{opacity:1}\n}\n@-webkit-keyframes myopacity {\n    0%{opacity:0}\n    10%{opacity:.1}\n    20%{opacity:.2}\n    30%{opacity:.3}\n    40%{opacity:.4}\n    50%{opacity:.5}\n    60%{opacity:.6}\n    70%{opacity:.7}\n    80%{opacity:.8}\n    90%{opacity:.9}\n    100%{opacity:1}\n}\n@media screen and (max-device-width: 1450px) {\n  .clips {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 5px;\n  }\n}\n\n@media screen and (max-device-width: 990px) {\n  .clips {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 5px;\n  }\n  .clips-item {\n    width: 25rem;\n    height: 40rem;\n  }\n  .img-of-clip {\n    width: 25rem;\n  }\n}\n\n@media screen and (max-device-width: 750px) {\n  html {\n    height: 100%;\n  }\n  body {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 15% auto 15%;\n    justify-items: center;\n    grid-gap: 20px;\n    color: black;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n  }\n  .clips {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 5px;\n    align-items: center;\n  }\n\n  .clips-item {\n    position: relative;\n    width: 90%;\n    background-color: white;\n    border-radius: 1%;\n    margin: 0 auto;\n  }\n  .img-of-clip {\n    position: relative;\n    top: 2px;\n    width: 100%;\n  }\n\n  .title-cont {\n    position: absolute;\n    top: 5%;\n    font-size: 6rem;\n    margin: 0 auto;\n    width: 100%;\n    height: 215px;\n    background: rgba(240, 128, 128, 0.8);\n    color: black;\n  }\n\n  .title-cont p {\n    height: 150px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-align: center;\n    font-size: 4rem;\n  }\n\n  .description {\n    height: 200px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-style: italic;\n    font-size: 2rem;\n    padding: 2px;\n    margin-top: 4rem;\n    text-align: center;\n  }\n\n  .chanel-name {\n    height: 15px;\n    text-align: center;\n    font-size: 3rem;\n  }\n\n  .date {\n    height: 10px;\n    text-align: center;\n    font-size: 4rem;\n    margin-top: 3rem;\n  }\n\n  .statistics {\n    height: 10px;\n    text-align: center;\n    font-size: 4rem;\n  }\n\n}\n@media screen and (max-width: 1450px) {\n  .clips {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 5px;\n  }\n}\n\n@media screen and (max-width: 990px) {\n  .clips {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 5px;\n  }\n  .clips-item {\n    width: 25rem;\n    height: 40rem;\n  }\n  .img-of-clip {\n    width: 25rem;\n  }\n}\n\n@media screen and (max-width: 750px) {\n  html {\n    height: 100%;\n  }\n  body {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 15% auto 15%;\n    justify-items: center;\n    grid-gap: 20px;\n    color: black;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n  }\n  .clips {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 5px;\n    align-items: center;\n  }\n\n  .clips-item {\n    position: relative;\n    width: 90%;\n    background-color: white;\n    border-radius: 1%;\n    margin: 0 auto;\n  }\n  .img-of-clip {\n    position: relative;\n    top: 2px;\n    width: 100%;\n  }\n\n  .title-cont {\n    position: absolute;\n    top: 5%;\n    font-size: 6rem;\n    margin: 0 auto;\n    width: 100%;\n    height: 215px;\n    background: rgba(240, 128, 128, 0.8);\n    color: black;\n  }\n\n  .title-cont p {\n    height: 150px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-align: center;\n    font-size: 4rem;\n  }\n\n  .description {\n    height: 200px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-style: italic;\n    font-size: 2rem;\n    padding: 2px;\n    margin-top: 4rem;\n    text-align: center;\n  }\n\n  .chanel-name {\n    height: 15px;\n    text-align: center;\n    font-size: 3rem;\n  }\n\n  .date {\n    height: 10px;\n    text-align: center;\n    font-size: 4rem;\n    margin-top: 3rem;\n  }\n\n  .statistics {\n    height: 10px;\n    text-align: center;\n    font-size: 4rem;\n  }\n\n}\n",null]}])},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,i=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,e,t){(n.exports=t(0)(!0)).push([n.i,"html {\n  font-size: 14px;\n}\nbody {\n  background: repeating-radial-gradient(circle, #B9ECFE, #B9ECFE 10px, #82DDFF 10px, #82DDFF 20px);\n}\n.search-bar {\n  display: flex;\n  justify-content: center;\n}\n.input-search {\n  width: 28rem;\n  height: 1rem;\n  margin-top: 3%;\n  padding: 15px;\n  font-size: 1.5rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 700;\n  color: #000080;\n  border-radius: 1rem;\n  outline: none;\n  border: 3px solid #000080;\n}\n.input-search:hover, .input-search:focus {\n  background-color: #1E90FF;\n}\n@media only screen and (max-device-width: 750px) {\n  .input-search {\n    width: 700px;\n    height: 100px;\n    font-size: 4.5rem;\n  }\n}\n","",{version:3,sources:["searchBar.css","<no source>"],names:[],mappings:"AAAA;EACE,eAAe;AACjB;AACA;EACE,gGAAgG;AAClG;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,yCAAyC;EACzC,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;ACzBA;ED4BE;IACE,YAAY;IACZ,aAAa;IACb,iBAAiB;EACnB;AAAF",file:"searchBar.css",sourcesContent:["html {\n  font-size: 14px;\n}\nbody {\n  background: repeating-radial-gradient(circle, #B9ECFE, #B9ECFE 10px, #82DDFF 10px, #82DDFF 20px);\n}\n.search-bar {\n  display: flex;\n  justify-content: center;\n}\n.input-search {\n  width: 28rem;\n  height: 1rem;\n  margin-top: 3%;\n  padding: 15px;\n  font-size: 1.5rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 700;\n  color: #000080;\n  border-radius: 1rem;\n  outline: none;\n  border: 3px solid #000080;\n}\n.input-search:hover, .input-search:focus {\n  background-color: #1E90FF;\n}\n\n@media only screen and (max-device-width: 750px) {\n  .input-search {\n    width: 700px;\n    height: 100px;\n    font-size: 4.5rem;\n  }\n}\n",null]}])},function(n,e,t){(n.exports=t(0)(!0)).push([n.i,".nav {\n  margin: 2rem;\n  display: flex;\n}\n.prev-page {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background-color: #4169E1;\n  margin-right: 1rem;\n  border: 1px solid #DC143C;\n}\n.curr-page {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  margin-right: 1rem;\n  align-items: center;\n  background-color: #00008B;\n  display: flex;\n  justify-content: center;\n}\n.next-page {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  margin-right: 1rem;\n  background-color: #4169E1;\n  border: 1px solid #DC143C;\n}\n\n.next-page:hover, .prev-page:hover {\n  border: 3px solid #DC143C;\n}\n\n.tooltip {\n  border-bottom: 1px dotted #0077AA;\n\tcursor: pointer;\n}\n.tooltip::after {\n\tbackground: rgba(240, 128, 128, 0.8);\n\tborder-radius: 8px 8px 8px 0px;\n\tbox-shadow: 1px 1px 10px rgba(240, 128, 128, 0.5);\n\tcolor: #FFF;\n\tcontent: attr(data-tooltip);\n\tmargin-top: -24px;\n\topacity: 0;\n\tpadding: 6px 14px;\n\tposition: absolute;\n\tvisibility: hidden;\n\n\ttransition: all 0.4s ease-in-out;\n}\n\n.tooltip:hover::after {\n\topacity: 1;\n\tvisibility: visible;\n}\n\n.number {\n  color: white;\n  visibility: visible;\n}\n\n@media screen and (max-device-width: 750px) {\n  .prev-page, .next-page, .curr-page {\n    width: 6.5rem;\n    height: 6.5rem;\n  }\n\n  .tooltip::after {\n    font-size: 25px;\n    margin-top: -64px;\n\t  padding: 24px 32px;\n  }\n  .number {\n    font-size: 3rem;\n  }\n}\n","",{version:3,sources:["nav.css","<no source>"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iCAAiC;CAClC,eAAe;AAChB;AACA;CACC,oCAAoC;CACpC,8BAA8B;CAC9B,iDAAiD;CACjD,WAAW;CACX,2BAA2B;CAC3B,iBAAiB;CACjB,UAAU;CACV,iBAAiB;CACjB,kBAAkB;CAClB,kBAAkB;;CAElB,gCAAgC;AACjC;;AAEA;CACC,UAAU;CACV,mBAAmB;AACpB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AC9DA;EDiEE;IACE,aAAa;IACb,cAAc;EAChB;;EAEA;IACE,eAAe;IACf,iBAAiB;GAClB,kBAAkB;EACnB;EACA;IACE,eAAe;EACjB;AACF",file:"nav.css",sourcesContent:[".nav {\n  margin: 2rem;\n  display: flex;\n}\n.prev-page {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background-color: #4169E1;\n  margin-right: 1rem;\n  border: 1px solid #DC143C;\n}\n.curr-page {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  margin-right: 1rem;\n  align-items: center;\n  background-color: #00008B;\n  display: flex;\n  justify-content: center;\n}\n.next-page {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  margin-right: 1rem;\n  background-color: #4169E1;\n  border: 1px solid #DC143C;\n}\n\n.next-page:hover, .prev-page:hover {\n  border: 3px solid #DC143C;\n}\n\n.tooltip {\n  border-bottom: 1px dotted #0077AA;\n\tcursor: pointer;\n}\n.tooltip::after {\n\tbackground: rgba(240, 128, 128, 0.8);\n\tborder-radius: 8px 8px 8px 0px;\n\tbox-shadow: 1px 1px 10px rgba(240, 128, 128, 0.5);\n\tcolor: #FFF;\n\tcontent: attr(data-tooltip);\n\tmargin-top: -24px;\n\topacity: 0;\n\tpadding: 6px 14px;\n\tposition: absolute;\n\tvisibility: hidden;\n\n\ttransition: all 0.4s ease-in-out;\n}\n\n.tooltip:hover::after {\n\topacity: 1;\n\tvisibility: visible;\n}\n\n.number {\n  color: white;\n  visibility: visible;\n}\n\n@media screen and (max-device-width: 750px) {\n  .prev-page, .next-page, .curr-page {\n    width: 6.5rem;\n    height: 6.5rem;\n  }\n\n  .tooltip::after {\n    font-size: 25px;\n    margin-top: -64px;\n\t  padding: 24px 32px;\n  }\n  .number {\n    font-size: 3rem;\n  }\n}\n",null]}])},function(n,e,t){"use strict";t.r(e);t(2),t(3),t(4);const i=new class{constructor(n){this.fetch=n,this.nextPageToken="",this.clips=[],this.statistics=[],this.endpointSearch="search",this.endpointVideos="videos",this.baseLink="https://www.googleapis.com/youtube/v3/",this.settings={key:"AIzaSyBWtxPSToPQnHGveWXFkzYD1ICAh8XJeV4",type:"video",part:"snippet",maxResults:15},this.settingsForStat={key:"AIzaSyBWtxPSToPQnHGveWXFkzYD1ICAh8XJeV4",part:"statistics"}}makeUrl(n,e,t){if(void 0!==t){let n=`${this.baseLink}${this.endpointVideos}?`;const e={...this.settingsForStat};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n+=`${t}=${e[t]}&`);return(n+=`id=${t}`).slice()}const i={...this.settings};let r=`${this.baseLink}${this.endpointSearch}?`;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r+=`${n}=${i[n]}&`);return r+=`q=${n}`,""!==e&&(r+=`&pageToken=${e}`),r.slice()}getClips(n,e,t,i){let r="";if(this.clips.length-t*i<5&&(r=this.nextPageToken),""!==n||""!==r)fetch(this.makeUrl(n,r)).then(n=>n.json()).then(n=>{""!==r?(this.clips=this.clips.concat(n.items),this.nextPageToken=n.nextPageToken):(this.clips=n.items,this.nextPageToken=n.nextPageToken)}).then(()=>{const n=this.clips.slice((i-1)*t,i*t);e(n,i)}).catch(n=>console.log(n));else{const n=this.clips.slice((i-1)*t,i*t);e(n,i)}}getStatistics(n,e){const t=this.makeUrl(this.endpointSearch,this.endpointVideos,n);fetch(t).then(n=>n.json()).then(n=>{this.statistics=n.items,e(this.statistics)}).catch(n=>console.log(n))}}(fetch),r=new class{constructor(n,e){this.model=e,this.view=n,this.countVideoPerPage=4,this.currPage=1,this.x0=null,this.viewCount="123",this.baseLinkForWatch="https://www.youtube.com/watch?v="}beginPage(){this.view.enterSearch=this.enterSearch.bind(this),this.showClips=this.showClips.bind(this),this.videoPerPAgeFromExpanshion=this.videoPerPAgeFromExpanshion.bind(this),this.redrawOnresize=this.redrawOnresize.bind(this),this.view.slideStart=this.slideStart.bind(this),this.view.slideEnd=this.slideEnd.bind(this),this.view.openClip=this.openClip.bind(this),this.view.goToNextPage=this.goToNextPage.bind(this),this.view.render()}enterSearch(n){this.videoPerPAgeFromExpanshion(),this.currPage=1;const{value:e}=document.getElementById("input");13===n.keyCode&&this.model.getClips(e,this.showClips.bind(this),this.countVideoPerPage,this.currPage)}async showClips(n,e){const t=[];let i=0;n.forEach(n=>{t[i]={},t[i].thumbnails=n.snippet.thumbnails.medium.url,t[i].title=n.snippet.title,t[i].description=n.snippet.description,t[i].publishedAt=n.snippet.publishedAt,t[i].chanelName=n.snippet.channelTitle,t[i].id=n.id.videoId,setTimeout(this.model.getStatistics(n.id.videoId,this.showStatistics.bind(this)),15e3),i+=1}),this.view.drawClips(t,e)}videoPerPAgeFromExpanshion(){const n=document.documentElement.clientWidth;this.countVideoPerPage=4,(n<1450||window.screen.width<1450)&&(this.countVideoPerPage=3),(n<990||window.screen.width<990)&&(this.countVideoPerPage=2),(n<750||window.screen.width<750)&&(this.countVideoPerPage=1)}showStatistics(n){const e=[];let t=0;n.forEach(n=>{e[t]={},e[t].statistics=n.statistics.viewCount,t+=1}),setTimeout(this.view.drawStat(e),0)}goToNextPage(n){n.target.classList.contains("next-page")&&(this.currPage+=1),n.target.classList.contains("prev-page")&&(this.currPage-=1),this.model.getClips("",this.showClips.bind(this),this.countVideoPerPage,this.currPage)}slideStart(n){const e=n.changedTouches?n.changedTouches[0]:n;this.x0=e.clientX,document.querySelector("#clips").style.cursor="grab"}redrawOnresize(){const n=(this.currPage-1)*this.countVideoPerPage+1;this.videoPerPAgeFromExpanshion(),this.currPage=Math.ceil(n/this.countVideoPerPage),this.model.getClips("",this.showClips.bind(this),this.countVideoPerPage,this.currPage)}slideEnd(n){const e=n.changedTouches?n.changedTouches[0]:n;this.x0-e.clientX<0?1!==this.currPage&&(document.querySelector("#clips").style.setProperty("--i","100%"),this.currPage-=1,this.model.getClips("",this.showClips.bind(this),this.countVideoPerPage,this.currPage)):(document.querySelector("#clips").style.setProperty("--i","-100%"),this.currPage+=1,this.model.getClips("",this.showClips.bind(this),this.countVideoPerPage,this.currPage)),this.x0=null}openClip(n){let e=this.baseLinkForWatch;e+=`${n}`,window.open(e,"_blank")}}(new class{constructor(n){this.element=n,this.firstPageInPagingFrame=1,this.enterSearch=null,this.goToNextPage=null,this.slideStart=null,this.slideEnd=null,this.openClip=null}render(){const n=this.element.document.createDocumentFragment(),e=this.element.document.createElement("div"),t=this.element.document.createElement("input");t.setAttribute("type","text"),e.classList.add("search-bar"),t.setAttribute("id","input"),t.classList.add("input-search"),t.setAttribute("placeholder","What videos do you want to search?"),t.addEventListener("keyup",this.enterSearch),e.appendChild(t),n.appendChild(e);const i=this.element.document.createElement("section");i.classList.add("clips"),i.setAttribute("id","clips"),n.appendChild(i),this.element.document.body.appendChild(n);const r=this.element.document.createElement("section");r.classList.add("nav"),document.body.appendChild(r);const o=this.element.document.createElement("div");o.classList.add("prev-page"),o.classList.add("tooltip"),r.appendChild(o);const A=this.element.document.createElement("div");A.classList.add("curr-page"),r.appendChild(A);const s=this.element.document.createElement("div");s.classList.add("next-page"),s.classList.add("tooltip"),r.appendChild(s),r.style.visibility="hidden"}drawStat(n){const e=this.element.document.querySelector(".stat");for(let t=0;t<=n.length-1;t+=1)e.innerHTML=`<p><b>views:</b> ${n[t].statistics}</p>`,e.classList.remove("stat")}drawClips(n,e){const t=this.element.document.querySelector("#clips");t.style.setProperty("--i","0"),t.innerHTML="";for(let e=0;e<=n.length-1;e+=1){const i=this.element.document.createElement("div");i.classList.add("clips-item"),i.classList.add("opacity"),i.style.height="100%";const r=this.element.document.createDocumentFragment(),o=this.element.document.createElement("img");o.setAttribute("src",`${n[e].thumbnails}`),o.setAttribute("alt","clip thumbnail"),o.classList.add("img-of-clip"),r.appendChild(o);const A=this.element.document.createElement("div");A.classList.add("title-cont"),A.addEventListener("mousedown",()=>{this.openClip(n[e].id)}),A.addEventListener("touchend",()=>{this.openClip(n[e].id)}),A.innerHTML=`<p>${n[e].title}</p>`,r.appendChild(A);const s=this.element.document.createElement("div");s.classList.add("chanel-name"),s.innerHTML=`<p><b>chanel:</b> ${n[e].chanelName}</p>`,r.appendChild(s);const a=this.element.document.createElement("div");a.classList.add("date"),a.innerHTML=`<p><b>date:</b> ${n[e].publishedAt.slice(0,10)}</p>`,r.appendChild(a);const c=this.element.document.createElement("div");c.classList.add("statistics"),c.classList.add("stat"),r.appendChild(c);const l=this.element.document.createElement("div");l.classList.add("description"),l.innerHTML=`<p><b>descruption:</b> ${n[e].description}<span>Использование медиа запросов для создания таблицы стилей для телефонов. ... Вставка специфического кода для мобильных устройств в основную таблицу стилей может быть хорошим решением в случаях, когда нужно сделать небольшие изменения. Однако, если таблица стилей содержит большо</span></p>`,r.appendChild(l),i.appendChild(r),t.appendChild(i)}const i=this.element.document.querySelector(".nav");i.style.visibility="";const r=this.element.document.querySelector(".prev-page"),o=this.element.document.querySelector(".curr-page"),A=this.element.document.querySelector(".next-page"),s=e+1,a=e-1;r.style.visibility="",r.setAttribute("data-tooltip",a),A.setAttribute("data-tooltip",s),o.innerHTML=`<span class="number">${e}</span>`,i.addEventListener("click",this.goToNextPage),1===e&&(r.style.visibility="hidden"),this.element.document.getElementById("clips").addEventListener("mousedown",this.slideStart),this.element.document.getElementById("clips").addEventListener("touchstart",this.slideStart),this.element.document.getElementById("clips").addEventListener("mousedown",n=>{n.preventDefault()}),this.element.document.getElementById("clips").addEventListener("touchstart",n=>{n.preventDefault()}),this.element.document.getElementById("clips").addEventListener("mouseup",this.slideEnd),this.element.document.getElementById("clips").addEventListener("touchend",this.slideEnd)}}(window),i);window.addEventListener("load",r.beginPage()),window.addEventListener("resize",r.redrawOnresize)}]);
//# sourceMappingURL=app.bundle.js.map