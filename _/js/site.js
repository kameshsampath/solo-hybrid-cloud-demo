!function(){"use strict";var s=/^sect(\d)$/,n=document.querySelector(".nav-container"),i=document.querySelector(".nav-toggle");i.addEventListener("click",function(e){if(i.classList.contains("is-active"))return u(e);var t=document.documentElement;t.classList.add("is-clipped--nav"),i.classList.add("is-active"),n.classList.add("is-active"),t.addEventListener("click",u),v(e)}),n.addEventListener("click",v);var c,r,o,l=n.querySelector("[data-panel=menu]");function e(){var e,t,n=window.location.hash;if(n&&(n.indexOf("%")&&(n=decodeURIComponent(n)),!(e=l.querySelector('.nav-link[href="'+n+'"]')))){n=document.getElementById(n.slice(1));if(n)for(var i=n,a=document.querySelector("article.doc");(i=i.parentNode)&&i!==a;){var c=i.id;if((c=!c&&(c=i.className.match(s))?(i.firstElementChild||{}).id:c)&&(e=l.querySelector('.nav-link[href="#'+c+'"]')))break}}if(e)t=e.parentNode;else{if(!o)return;e=(t=o).querySelector(".nav-link")}t!==r&&(f(l,".nav-item.is-active").forEach(function(e){e.classList.remove("is-active","is-current-path","is-current-page")}),t.classList.add("is-current-page"),d(r=t),m(l,e))}function d(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function a(){this.classList.toggle("is-active")}function u(e){var t=document.documentElement;t.classList.remove("is-clipped--nav"),i.classList.remove("is-active"),n.classList.remove("is-active"),t.removeEventListener("click",u),v(e)}function v(e){e.stopPropagation()}function m(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(c);"sticky"===a.position&&(i-=n.top-parseFloat(a.top)),e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}function f(e,t){return[].slice.call(e.querySelectorAll(t))}l&&(c=n.querySelector(".nav"),r=l.querySelector(".is-current-page"),(o=r)?(d(r),m(l,r.querySelector(".nav-link"))):l.scrollTop=0,f(l,".nav-item-toggle").forEach(function(e){var t=e.parentElement;e.addEventListener("click",a.bind(t));e=function(e,t){e=e.nextElementSibling;if(e)return(!t||e[e.matches?"matches":"msMatchesSelector"](t))&&e}(e,".nav-text");e&&(e.style.cursor="pointer",e.addEventListener("click",a.bind(t)))}),c.querySelector(".context").addEventListener("click",function(){var e=c.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),c.querySelector("[data-panel="+t+"]").classList.toggle("is-active")}),l.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()}),l.querySelector('.nav-link[href^="#"]')&&(window.location.hash&&e(),window.addEventListener("hashchange",e)))}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2);if(!(t<0)){for(var d,o,c,a=document.querySelector("article.doc"),n=[],i=0;i<=t;i++)n.push(i?".sect"+i+">h"+(i+1)+"[id]":"h1[id].sect0");if(o=n.join(","),!(d=[].slice.call((a||document).querySelectorAll(o))).length)return e.parentNode.removeChild(e);var s={},l=d.reduce(function(e,t){var o=document.createElement("a");o.textContent=t.textContent,s[o.href="#"+t.id]=o;var n=document.createElement("li");return n.dataset.level=parseInt(t.nodeName.slice(1))-1,n.appendChild(o),e.appendChild(n),e},document.createElement("ul")),r=e.querySelector(".toc-menu");r||((r=document.createElement("div")).className="toc-menu");var u=document.createElement("h3");u.textContent=e.dataset.title||"Contents",r.appendChild(u),r.appendChild(l);e=!document.getElementById("toc")&&a.querySelector("h1.page ~ :not(.is-before-toc)");e&&((u=document.createElement("aside")).className="toc embedded",u.appendChild(r.cloneNode(!0)),e.parentNode.insertBefore(u,e)),window.addEventListener("load",function(){m(),window.addEventListener("scroll",m)})}}function m(){var t,e=window.pageYOffset,o=1.15*f(document.documentElement,"fontSize"),n=a.offsetTop;if(e&&window.innerHeight+e+2>=document.documentElement.scrollHeight){c=Array.isArray(c)?c:Array(c||0);var i=[],r=d.length-1;return d.forEach(function(e,t){var o="#"+e.id;t===r||e.getBoundingClientRect().top+f(e,"paddingTop")>n?(i.push(o),c.indexOf(o)<0&&s[o].classList.add("is-active")):~c.indexOf(o)&&s[c.shift()].classList.remove("is-active")}),l.scrollTop=l.scrollHeight-l.offsetHeight,void(c=1<i.length?i:i[0])}Array.isArray(c)&&(c.forEach(function(e){s[e].classList.remove("is-active")}),c=void 0),d.some(function(e){return e.getBoundingClientRect().top+f(e,"paddingTop")-o>n||void(t="#"+e.id)}),t?t!==c&&(c&&s[c].classList.remove("is-active"),(e=s[t]).classList.add("is-active"),l.scrollHeight>l.offsetHeight&&(l.scrollTop=Math.max(0,e.offsetTop+e.offsetHeight-l.offsetHeight)),c=t):c&&(s[c].classList.remove("is-active"),c=void 0)}function f(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function c(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n,o;(n=i(window.location.hash))&&(o=document.getElementById(n))&&(c.bind(o)(),setTimeout(c.bind(o),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,n;(t=i(e.hash))&&(n=document.getElementById(t))&&e.addEventListener("click",c.bind(n))})}();
!function(){"use strict";var t,e=document.querySelector(".page-versions .version-menu-toggle");e&&(t=document.querySelector(".page-versions"),e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")}))}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})});
!function(){"use strict";var l=window.location.hash;function o(t,a){return Array.prototype.slice.call((a||document).querySelectorAll(t))}o(".tabset").forEach(function(c){var n,r,t=c.querySelector(".tabs");t&&(o("li",t).forEach(function(t,a){var e,i,s=(t.querySelector("a[id]")||t).id;s&&(i=s,e=o(".tab-pane",c).find(function(t){return t.getAttribute("aria-labelledby")===i}),a||(r={tab:t,pane:e}),!n&&l==="#"+s&&(n=!0)?(t.classList.add("is-active"),e&&e.classList.add("is-active")):a||(t.classList.remove("is-active"),e&&e.classList.remove("is-active")),t.addEventListener("click",function(t){var a=this.tab,e=this.pane;o(".tabs li, .tab-pane",this.tabset).forEach(function(t){t===a||t===e?t.classList.add("is-active"):t.classList.remove("is-active")}),t.preventDefault()}.bind({tabset:c,tab:t,pane:e})))}),!n&&r&&(r.tab.classList.add("is-active"),r.pane&&r.pane.classList.add("is-active"))),c.classList.remove("is-loading")})}();
document.addEventListener("DOMContentLoaded",function(){for(var c=function(e){e=e||window.location.href;var n={},t=document.createElement("a");t.href=e;for(var r=t.search.substring(1).split("&"),a=0;a<r.length;a++){var o=r[a].split("=");n[o[0]]=decodeURIComponent(o[1])}return n}(),l=Object.keys(c),e=0;e<l.length;e++)!function e(n,t,r){var a;if((!n.parentElement||"code"!==n.parentElement.nodeName&&"CODE"!==n.parentElement.nodeName)&&(3===n.nodeType&&(a=n.data,n.data=d(a,t,r)),1===n.nodeType&&"SCRIPT"!==n.nodeName))for(var o=0;o<n.childNodes.length;o++)e(n.childNodes[o],t,r)}(document.body,l[e],c[l[e]]);var n=document.querySelectorAll(".query-params-link");n&&n.forEach(t);n=document.querySelectorAll(".params-link");n&&n.forEach(t);n=document.querySelectorAll(".nav-link");function t(e){var n,t=window.location.search,r=e.classList.contains("query-params-link")||e.classList.contains("nav-link");if(n=e.href,!new RegExp(/\?.+=.*/g).test(n)&&t){for(var a=e.href,o=0;o<l.length;o++)a=d(a,l[o],c[l[o]]);e.href=r?a+t:a}}function d(e,n,t){n=new RegExp("(%25"+n+"%25|(?<!-)%"+n+"%(?!-))","gi");return e.replace(n,t)}n&&n.forEach(t)});