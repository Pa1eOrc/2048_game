parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";function t(t){return o(t)||r(t)||n(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function r(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var a=document.querySelector(".container"),i=a.querySelector(".button"),l=a.querySelectorAll(".field-cell"),s=a.querySelector(".message-start"),u=a.querySelector(".message-win"),f=a.querySelector(".message-lose"),d=a.querySelector(".game-score"),h=a.querySelectorAll("tr"),m=.1,y=4,v=2,C="ArrowLeft",x="ArrowRight",A="ArrowUp",p="ArrowDown",S=document.querySelector("h1").textContent,g=!1,E=!1;function L(){var e=t(l).filter(function(t){return""===t.textContent});if(0!==e.length){var n=e[Math.floor(Math.random()*e.length)],r=Math.random()<m?y:v;n.textContent=r,n.classList.add("field-cell--".concat(r))}}function b(){l.forEach(function(t){""===t.textContent?t.className="field-cell":t.className="field-cell field-cell--".concat(t.textContent)})}function q(t){return t.filter(function(t){return""!==t})}function w(t){for(var e=q(t),n=0,r=q(e.map(function(t,r){return t===e[r+1]?(n+=2*t,e[r+1]="",2*t):t}));r.length<t.length;)r.push("");return d.textContent=parseInt(d.textContent)+n,r}function k(){g=!1,h.forEach(function(e){var n=e.querySelectorAll("td"),r=w(t(n).map(function(t){return t.textContent}));n.forEach(function(t,e){t.textContent!==r[e]&&(g=!0),t.textContent=r[e]})}),g&&(b(),L())}function j(){g=!1,h.forEach(function(e){var n=e.querySelectorAll("td"),r=t(n).map(function(t){return t.textContent});r.reverse();var o=w(r);o.reverse(),n.forEach(function(t,e){t.textContent!==o[e]&&(g=!0),t.textContent=o[e]})}),g&&(b(),L())}function I(){g=!1,Array.from({length:h[0].childElementCount}).forEach(function(t,e){var n=w(Array.from(h).map(function(t){return t.children[e].textContent}));h.forEach(function(t,r){var o=t.children[e].textContent,c=n[r];o!==c&&(g=!0),t.children[e].textContent=c})}),g&&(b(),L())}function M(){g=!1,Array.from({length:h[0].childElementCount}).forEach(function(t,e){var n=Array.from(h).map(function(t){return t.children[e].textContent});n.reverse();var r=w(n);r.reverse(),h.forEach(function(t,n){var o=t.children[e].textContent,c=r[n];o!==c&&(g=!0),t.children[e].textContent=c})}),g&&(b(),L())}function N(){Array.from(l).some(function(t){return t.textContent===S})&&u.classList.remove("hidden")}function O(){var e=Array.from(l).some(function(t){return""===t.textContent});E=!1,h.forEach(function(e,n){var r=t(e.querySelectorAll("td")).map(function(t){return t.textContent});r.forEach(function(t,e){var o=r[e+1],c=n<h.length-1?h[n+1].children[e].textContent:null;(o&&t===o||c&&t===c)&&(E=!0)})}),e||E||f.classList.remove("hidden")}i.addEventListener("click",function(){i.classList.contains("start")?(L(),L(),s.classList.add("hidden"),i.classList.remove("start"),i.classList.add("restart"),i.textContent="Restart"):(l.forEach(function(t){t.textContent="",t.className="field-cell"}),s.classList.remove("hidden"),i.classList.remove("restart"),i.classList.add("start"),i.textContent="Start",d.textContent="0",f.classList.add("hidden"),u.classList.add("hidden"))}),document.addEventListener("keydown",function(t){switch(t.key){case C:k();break;case x:j();break;case A:I();break;case p:M()}N(),O()});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.5b199fdb.js.map