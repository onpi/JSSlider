!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3)},function(e,t,n){},function(e,t,n){},function(e,t){document.getElementById("prev"),document.getElementById("next"),document.getElementById("slider");var n=document.getElementsByClassName("slider_image"),r=document.getElementsByClassName("dots"),o=0,a="";function c(e){n[o].classList.remove("active"),r[o].classList.remove("active");var t=n.length;if("prev"==e.target.id)(o-=1)<0&&(o=t-1);else if("next"==e.target.id)(o+=1)>t-1&&(o=0);else if("dots"==e.target.className){var a=e.target.dataset.number;return n[o].classList.remove("active"),n[a].classList.add("active"),r[o].classList.remove("active"),r[a].classList.add("active"),console.log(a),o=a}r[o].classList.add("active"),n[o].classList.add("active"),console.log(o)}window.onload=function(){a+='<div class="dots_wrap">';for(var e=0;e<n.length;e++)a+='<button type="button" class="dots" data-number="'+e+'"></button>';a+="</div>",document.getElementById("dots").innerHTML=a,r[o].classList.add("active")},n[o].classList.add("active"),document.querySelector("#prev").addEventListener("click",c),document.querySelector("#next").addEventListener("click",c),document.querySelector("#dots").addEventListener("click",c)}]);
//# sourceMappingURL=index.js.map