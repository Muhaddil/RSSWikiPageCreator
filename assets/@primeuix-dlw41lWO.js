var tr=Object.defineProperty,fo=Object.getOwnPropertySymbols,nr=Object.prototype.hasOwnProperty,dr=Object.prototype.propertyIsEnumerable,bo=(o,r,e)=>r in o?tr(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,ir=(o,r)=>{for(var e in r||(r={}))nr.call(r,e)&&bo(o,e,r[e]);if(fo)for(var e of fo(r))dr.call(r,e)&&bo(o,e,r[e]);return o};function D(o){return null==o||""===o||Array.isArray(o)&&0===o.length||!(o instanceof Date)&&"object"==typeof o&&0===Object.keys(o).length}function ar(o,r,e,t=1){let n=-1;const d=D(o),i=D(r);return n=d&&i?0:d?t:i?-t:"string"==typeof o&&"string"==typeof r?e(o,r):o<r?-1:o>r?1:0,n}function no(o,r,e=new WeakSet){if(o===r)return!0;if(!o||!r||"object"!=typeof o||"object"!=typeof r||e.has(o)||e.has(r))return!1;e.add(o).add(r);const t=Array.isArray(o),n=Array.isArray(r);let d,i,a;if(t&&n){if(i=o.length,i!=r.length)return!1;for(d=i;0!=d--;)if(!no(o[d],r[d],e))return!1;return!0}if(t!=n)return!1;const c=o instanceof Date,l=r instanceof Date;if(c!=l)return!1;if(c&&l)return o.getTime()==r.getTime();const s=o instanceof RegExp,u=r instanceof RegExp;if(s!=u)return!1;if(s&&u)return o.toString()==r.toString();const p=Object.keys(o);if(i=p.length,i!==Object.keys(r).length)return!1;for(d=i;0!=d--;)if(!Object.prototype.hasOwnProperty.call(r,p[d]))return!1;for(d=i;0!=d--;)if(a=p[d],!no(o[a],r[a],e))return!1;return!0}function cr(o,r){return no(o,r)}function $o(o){return"function"==typeof o&&"call"in o&&"apply"in o}function b(o){return!D(o)}function mo(o,r){if(!o||!r)return null;try{const e=o[r];if(b(e))return e}catch{}if(Object.keys(o).length){if($o(r))return r(o);if(-1===r.indexOf("."))return o[r];{const e=r.split(".");let t=o;for(let o=0,r=e.length;o<r;++o){if(null==t)return null;t=t[e[o]]}return t}}return null}function lr(o,r,e){return e?mo(o,e)===mo(r,e):cr(o,r)}function ll(o,r){if(null!=o&&r&&r.length)for(const e of r)if(lr(o,e))return!0;return!1}function z(o,r=!0){return o instanceof Object&&o.constructor===Object&&(r||0!==Object.keys(o).length)}function Bo(o={},r={}){const e=ir({},o);return Object.keys(r).forEach((t=>{const n=t;z(r[n])&&n in o&&z(o[n])?e[n]=Bo(o[n],r[n]):e[n]=r[n]})),e}function zo(...o){return o.reduce(((o,r,e)=>0===e?r:Bo(o,r)),{})}function sl(o,r){let e=-1;if(b(o))try{e=o.findLastIndex(r)}catch{e=o.lastIndexOf([...o].reverse().find(r))}return e}function O(o,...r){return $o(o)?o(...r):o}function R(o,r=!0){return"string"==typeof o&&(r||""!==o)}function ho(o){return R(o)?o.replace(/(-|_)/g,"").toLowerCase():o}function sr(o,r="",e={}){const t=ho(r).split("."),n=t.shift();if(!n)return O(o,e);if(z(o)){return sr(O(o[Object.keys(o).find((o=>ho(o)===n))||""],e),t.join("."),e)}}function Ro(o,r=!0){return Array.isArray(o)&&(r||0!==o.length)}function ur(o){return b(o)&&!isNaN(o)}function ul(o=""){return b(o)&&1===o.length&&!!o.match(/\S| /)}function pl(){return new Intl.Collator(void 0,{numeric:!0}).compare}function B(o,r){if(r){const e=r.test(o);return r.lastIndex=0,e}return!1}function gl(...o){return zo(...o)}function ko(o){return o&&o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function fl(o){if(o&&/[\xC0-\xFF\u0100-\u017E]/.test(o)){const r={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(const e in r)o=o.replace(r[e],e)}return o}function bl(o,r,e=1,t,n=1){const d=ar(o,r,t,e);let i=e;return(D(o)||D(r))&&(i=1===n?e:n),i*d}function ml(o){return R(o,!1)?o[0].toUpperCase()+o.slice(1):o}function So(o){return R(o)?o.replace(/(_)/g,"-").replace(/[A-Z]/g,((o,r)=>0===r?o:"-"+o.toLowerCase())).toLowerCase():o}function vo(o){return R(o)?o.replace(/[A-Z]/g,((o,r)=>0===r?o:"."+o.toLowerCase())).toLowerCase():o}function pr(){const o=new Map;return{on(r,e){let t=o.get(r);return t?t.push(e):t=[e],o.set(r,t),this},off(r,e){const t=o.get(r);return t&&t.splice(t.indexOf(e)>>>0,1),this},emit(r,e){const t=o.get(r);t&&t.forEach((o=>{o(e)}))},clear(){o.clear()}}}function gr(...o){if(o){let r=[];for(let e=0;e<o.length;e++){const t=o[e];if(!t)continue;const n=typeof t;if("string"===n||"number"===n)r.push(t);else if("object"===n){const o=Array.isArray(t)?[gr(...t)]:Object.entries(t).map((([o,r])=>r?o:void 0));r=o.length?r.concat(o.filter((o=>!!o))):r}}return r.join(" ").trim()}}function fr(o,r){return!!o&&(o.classList?o.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(o.className))}function xo(o,r){if(o&&r){const e=r=>{fr(o,r)||(o.classList?o.classList.add(r):o.className+=" "+r)};[r].flat().filter(Boolean).forEach((o=>o.split(" ").forEach(e)))}}function br(){return window.innerWidth-document.documentElement.offsetWidth}function hl(o){"string"==typeof o?xo(document.body,o||"p-overflow-hidden"):(null!=o&&o.variableName&&document.body.style.setProperty(o.variableName,br()+"px"),xo(document.body,(null==o?void 0:o.className)||"p-overflow-hidden"))}function yo(o,r){if(o&&r){const e=r=>{o.classList?o.classList.remove(r):o.className=o.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[r].flat().filter(Boolean).forEach((o=>o.split(" ").forEach(e)))}}function kl(o){"string"==typeof o?yo(document.body,o||"p-overflow-hidden"):(null!=o&&o.variableName&&document.body.style.removeProperty(o.variableName),yo(document.body,(null==o?void 0:o.className)||"p-overflow-hidden"))}function oo(o){for(const r of null==document?void 0:document.styleSheets)try{for(const e of null==r?void 0:r.cssRules)for(const r of null==e?void 0:e.style)if(o.test(r))return{name:r,value:e.style.getPropertyValue(r).trim()}}catch{}return null}function _o(o){const r={width:0,height:0};return o&&(o.style.visibility="hidden",o.style.display="block",r.width=o.offsetWidth,r.height=o.offsetHeight,o.style.display="none",o.style.visibility="visible"),r}function Do(){const o=window,r=document,e=r.documentElement,t=r.getElementsByTagName("body")[0];return{width:o.innerWidth||e.clientWidth||t.clientWidth,height:o.innerHeight||e.clientHeight||t.clientHeight}}function io(o){return o?Math.abs(o.scrollLeft):0}function mr(){const o=document.documentElement;return(window.pageXOffset||io(o))-(o.clientLeft||0)}function hr(){const o=document.documentElement;return(window.pageYOffset||o.scrollTop)-(o.clientTop||0)}function kr(o){return!!o&&"rtl"===getComputedStyle(o).direction}function vl(o,r,e=!0){var t,n,d,i;if(o){const a=o.offsetParent?{width:o.offsetWidth,height:o.offsetHeight}:_o(o),c=a.height,l=a.width,s=r.offsetHeight,u=r.offsetWidth,p=r.getBoundingClientRect(),g=hr(),b=mr(),f=Do();let m,h,k="top";p.top+s+c>f.height?(m=p.top+g-c,k="bottom",m<0&&(m=g)):m=s+p.top+g,h=p.left+l>f.width?Math.max(0,p.left+b+u-l):p.left+b,kr(o)?o.style.insetInlineEnd=h+"px":o.style.insetInlineStart=h+"px",o.style.top=m+"px",o.style.transformOrigin=k,e&&(o.style.marginTop="bottom"===k?`calc(${null!=(n=null==(t=oo(/-anchor-gutter$/))?void 0:t.value)?n:"2px"} * -1)`:null!=(i=null==(d=oo(/-anchor-gutter$/))?void 0:d.value)?i:"")}}function xl(o,r){o&&("string"==typeof r?o.style.cssText=r:Object.entries(r||{}).forEach((([r,e])=>o.style[r]=e)))}function yl(o,r){return o instanceof HTMLElement?o.offsetWidth:0}function wl(o,r,e=!0){var t,n,d,i;if(o){const a=o.offsetParent?{width:o.offsetWidth,height:o.offsetHeight}:_o(o),c=r.offsetHeight,l=r.getBoundingClientRect(),s=Do();let u,p,g="top";l.top+c+a.height>s.height?(u=-1*a.height,g="bottom",l.top+u<0&&(u=-1*l.top)):u=c,p=a.width>s.width?-1*l.left:l.left+a.width>s.width?-1*(l.left+a.width-s.width):0,o.style.top=u+"px",o.style.insetInlineStart=p+"px",o.style.transformOrigin=g,e&&(o.style.marginTop="bottom"===g?`calc(${null!=(n=null==(t=oo(/-anchor-gutter$/))?void 0:t.value)?n:"2px"} * -1)`:null!=(i=null==(d=oo(/-anchor-gutter$/))?void 0:d.value)?i:"")}}function lo(o){if(o){let r=o.parentNode;return r&&r instanceof ShadowRoot&&r.host&&(r=r.host),r}return null}function Cl(o){return!!(null!==o&&typeof o<"u"&&o.nodeName&&lo(o))}function I(o){return typeof Element<"u"?o instanceof Element:null!==o&&"object"==typeof o&&1===o.nodeType&&"string"==typeof o.nodeName}function Wo(o,r={}){if(I(o)){const e=(r,t)=>{var n,d;const i=null!=(n=null==o?void 0:o.$attrs)&&n[r]?[null==(d=null==o?void 0:o.$attrs)?void 0:d[r]]:[];return[t].flat().reduce(((o,t)=>{if(null!=t){const n=typeof t;if("string"===n||"number"===n)o.push(t);else if("object"===n){const n=Array.isArray(t)?e(r,t):Object.entries(t).map((([o,e])=>"style"!==r||!e&&0!==e?e?o:void 0:`${o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${e}`));o=n.length?o.concat(n.filter((o=>!!o))):o}}return o}),i)};Object.entries(r).forEach((([r,t])=>{if(null!=t){const n=r.match(/^on(.+)/);n?o.addEventListener(n[1].toLowerCase(),t):"p-bind"===r||"pBind"===r?Wo(o,t):(t="class"===r?[...new Set(e("class",t))].join(" ").trim():"style"===r?e("style",t).join(";").trim():t,(o.$attrs=o.$attrs||{})&&(o.$attrs[r]=t),o.setAttribute(r,t))}}))}}function $l(o,r={},...e){{const t=document.createElement(o);return Wo(t,r),t.append(...e),t}}function vr(o,r){return I(o)?Array.from(o.querySelectorAll(r)):[]}function xr(o,r){return I(o)?o.matches(r)?o:o.querySelector(r):null}function Bl(o,r){o&&document.activeElement!==o&&o.focus(r)}function zl(o,r){if(I(o)){const e=o.getAttribute(r);return isNaN(e)?"true"===e||"false"===e?"true"===e:e:+e}}function Oo(o,r=""){const e=vr(o,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},\n            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},\n            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},\n            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},\n            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},\n            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},\n            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r}`),t=[];for(const o of e)"none"!=getComputedStyle(o).display&&"hidden"!=getComputedStyle(o).visibility&&t.push(o);return t}function Rl(o,r){const e=Oo(o,r);return e.length>0?e[0]:null}function Sl(o){if(o){let r=o.offsetHeight;const e=getComputedStyle(o);return r-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),r}return 0}function _l(o){var r;if(o){const e=null==(r=lo(o))?void 0:r.childNodes;let t=0;if(e)for(let r=0;r<e.length;r++){if(e[r]===o)return t;1===e[r].nodeType&&t++}}return-1}function Dl(o,r){const e=Oo(o,r);return e.length>0?e[e.length-1]:null}function Wl(o){if(o){const r=o.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||io(document.documentElement)||io(document.body)||0)}}return{top:"auto",left:"auto"}}function Ol(o,r){return o?o.offsetHeight:0}function Io(o,r=[]){const e=lo(o);return null===e?r:Io(e,r.concat([e]))}function Il(o){const r=[];if(o){const e=Io(o),t=/(auto|scroll)/,n=o=>{try{const r=window.getComputedStyle(o,null);return t.test(r.getPropertyValue("overflow"))||t.test(r.getPropertyValue("overflowX"))||t.test(r.getPropertyValue("overflowY"))}catch{return!1}};for(const o of e){const e=1===o.nodeType&&o.dataset.scrollselectors;if(e){const t=e.split(",");for(const e of t){const t=xr(o,e);t&&n(t)&&r.push(t)}}9!==o.nodeType&&n(o)&&r.push(o)}}return r}function El(o){if(o){let r=o.offsetWidth;const e=getComputedStyle(o);return r-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),r}return 0}function Ll(){return/(android)/i.test(navigator.userAgent)}function Fl(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Nl(o,r=""){return!!I(o)&&o.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},\n            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},\n            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},\n            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},\n            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},\n            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},\n            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r}`)}function Pl(o){return!(!o||null==o.offsetParent)}function jl(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Tl(o,r="",e){I(o)&&null!=e&&o.setAttribute(r,e)}var Q={};function Al(o="pui_id_"){return Object.hasOwn(Q,o)||(Q[o]=0),Q[o]++,`${o}${Q[o]}`}function yr(){let o=[];const r=(r,e,t=0)=>[...o].reverse().find((o=>!0))||{key:r,value:t},e=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:e,set:(e,t,n)=>{t&&(t.style.zIndex=String(((e,t,n=999)=>{const d=r(e,t,n),i=d.value+(d.key===e?0:n)+1;return o.push({key:e,value:i}),i})(e,!0,n)))},clear:r=>{r&&((r=>{o=o.filter((o=>o.value!==r))})(e(r)),r.style.zIndex="")},getCurrent:o=>(o=>r(o).value)(o)}}var Hl=yr(),wr=Object.defineProperty,Cr=Object.defineProperties,$r=Object.getOwnPropertyDescriptors,ro=Object.getOwnPropertySymbols,Eo=Object.prototype.hasOwnProperty,Lo=Object.prototype.propertyIsEnumerable,wo=(o,r,e)=>r in o?wr(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,C=(o,r)=>{for(var e in r||(r={}))Eo.call(r,e)&&wo(o,e,r[e]);if(ro)for(var e of ro(r))Lo.call(r,e)&&wo(o,e,r[e]);return o},eo=(o,r)=>Cr(o,$r(r)),$=(o,r)=>{var e={};for(var t in o)Eo.call(o,t)&&r.indexOf(t)<0&&(e[t]=o[t]);if(null!=o&&ro)for(var t of ro(o))r.indexOf(t)<0&&Lo.call(o,t)&&(e[t]=o[t]);return e};function Vl(...o){return zo(...o)}var Br=pr(),_=Br;function Co(o,r){Ro(o)?o.push(...r||[]):z(o)&&Object.assign(o,r)}function zr(o){return z(o)&&o.hasOwnProperty("$value")&&o.hasOwnProperty("$type")?o.$value:o}function Rr(o){return o.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function ao(o="",r=""){return Rr(`${R(o,!1)&&R(r,!1)?`${o}-`:o}${r}`)}function Fo(o="",r=""){return`--${ao(o,r)}`}function Sr(o=""){return((o.match(/{/g)||[]).length+(o.match(/}/g)||[]).length)%2!=0}function No(o,r="",e="",t=[],n){if(R(o)){const r=/{([^}]*)}/g,d=o.trim();if(Sr(d))return;if(B(d,r)){const o=d.replaceAll(r,(o=>{const r=o.replace(/{|}/g,"").split(".").filter((o=>!t.some((r=>B(o,r)))));return`var(${Fo(e,So(r.join("-")))}${b(n)?`, ${n}`:""})`})),i=/(\d+\s+[\+\-\*\/]\s+\d+)/g,a=/var\([^)]+\)/g;return B(o.replace(a,"0"),i)?`calc(${o})`:o}return d}if(ur(o))return o}function _r(o,r,e){R(r,!1)&&o.push(`${r}:${e};`)}function W(o,r){return o?`${o}{${r}}`:""}function Po(o,r){const e=o=>{let r=0,e=-1;for(let t=0;t<o.length;t++)if("dt("===o.slice(t,t+3))0===r&&(e=t),r++,t+=2;else if(")"===o[t]&&r>0&&(r--,0===r))return{start:e,end:t,content:o.slice(e,t+1)};return null},t=o=>{const r=[];let e="",t=0,d=null;for(let i=0;i<o.length;i++){const a=o[i],c=o[i-1];(('"'===a||"'"===a||"`"===a)&&"\\"!==c&&(d=d===a?null:a),d||("("===a&&t++,")"===a&&t--,","!==a||0!==t))?e+=a:(r.push(n(e.trim())),e="")}return e.trim()&&r.push(n(e.trim())),r},n=o=>{if(o.startsWith("dt("))return Po(o,r);if(/^(['"`])(.*)\1$/.test(o))return o.slice(1,-1);const e=Number(o);return isNaN(e)?o:e};let d=o;for(;;){const o=e(d);if(!o)break;const n=t(o.content.slice(3,-1)),i=r(...n);d=d.slice(0,o.start)+i+d.slice(o.end+1)}return d}var Yl=o=>{var r;const e=N.getTheme(),t=co(e,o,void 0,"variable");return{name:null==(r=null==t?void 0:t.match(/--[\w-]+/g))?void 0:r[0],variable:t,value:co(e,o,void 0,"value")}},to=(...o)=>co(N.getTheme(),...o),co=(o={},r,e,t)=>{if(r){const{variable:n,options:d}=N.defaults||{},{prefix:i,transform:a}=(null==o?void 0:o.options)||d||{},c=B(r,/{([^}]*)}/g)?r:`{${r}}`;return"value"===t||D(t)&&"strict"===a?N.getTokenValue(r):No(c,void 0,i,[n.excludedKeyRegex],e)}return""};function f(o,...r){if(o instanceof Array){return Po(o.reduce(((o,e,t)=>{var n;return o+e+(null!=(n=O(r[t],{dt:to}))?n:"")}),""),to)}return O(o,{dt:to})}function Dr(o,r={}){const e=N.defaults.variable,{prefix:t=e.prefix,selector:n=e.selector,excludedKeyRegex:d=e.excludedKeyRegex}=r,i=(o,r="")=>Object.entries(o).reduce(((o,[e,n])=>{const a=B(e,d)?ao(r):ao(r,So(e)),c=zr(n);if(z(c)){const{variables:r,tokens:e}=i(c,a);Co(o.tokens,e),Co(o.variables,r)}else o.tokens.push((t?a.replace(`${t}-`,""):a).replaceAll("-",".")),_r(o.variables,Fo(a),No(c,a,t,[d]));return o}),{variables:[],tokens:[]}),{variables:a,tokens:c}=i(o,t);return{value:a,tokens:c,declarations:a.join(""),css:W(n,a.join(""))}}var w={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(o){return{type:"class",selector:o,matched:this.pattern.test(o.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(o){return{type:"attr",selector:`:root${o}`,matched:this.pattern.test(o.trim())}}},media:{pattern:/^@media (.*)$/,resolve(o){return{type:"media",selector:`${o}{:root{[CSS]}}`,matched:this.pattern.test(o.trim())}}},system:{pattern:/^system$/,resolve(o){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(o.trim())}}},custom:{resolve:o=>({type:"custom",selector:o,matched:!0})}},resolve(o){const r=Object.keys(this.rules).filter((o=>"custom"!==o)).map((o=>this.rules[o]));return[o].flat().map((o=>{var e;return null!=(e=r.map((r=>r.resolve(o))).find((o=>o.matched)))?e:this.rules.custom.resolve(o)}))}},_toVariables:(o,r)=>Dr(o,{prefix:null==r?void 0:r.prefix}),getCommon({name:o="",theme:r={},params:e,set:t,defaults:n}){var d,i,a,c,l,s,u;const{preset:p,options:g}=r;let m,h,k,v,x,y,w;if(b(p)&&"strict"!==g.transform){const{primitive:r,semantic:e,extend:C}=p,B=e||{},{colorScheme:z}=B,R=$(B,["colorScheme"]),S=C||{},{colorScheme:W}=S,D=$(S,["colorScheme"]),O=z||{},{dark:j}=O,I=$(O,["dark"]),N=W||{},{dark:L}=N,F=$(N,["dark"]),E=b(r)?this._toVariables({primitive:r},g):{},P=b(R)?this._toVariables({semantic:R},g):{},T=b(I)?this._toVariables({light:I},g):{},_=b(j)?this._toVariables({dark:j},g):{},H=b(D)?this._toVariables({semantic:D},g):{},A=b(F)?this._toVariables({light:F},g):{},Y=b(L)?this._toVariables({dark:L},g):{},[X,M]=[null!=(d=E.declarations)?d:"",E.tokens],[V,G]=[null!=(i=P.declarations)?i:"",P.tokens||[]],[K,Q]=[null!=(a=T.declarations)?a:"",T.tokens||[]],[Z,U]=[null!=(c=_.declarations)?c:"",_.tokens||[]],[q,J]=[null!=(l=H.declarations)?l:"",H.tokens||[]],[oo,ro]=[null!=(s=A.declarations)?s:"",A.tokens||[]],[eo,to]=[null!=(u=Y.declarations)?u:"",Y.tokens||[]];m=this.transformCSS(o,X,"light","variable",g,t,n),h=M;k=`${this.transformCSS(o,`${V}${K}`,"light","variable",g,t,n)}${this.transformCSS(o,`${Z}`,"dark","variable",g,t,n)}`,v=[...new Set([...G,...Q,...U])];x=`${this.transformCSS(o,`${q}${oo}color-scheme:light`,"light","variable",g,t,n)}${this.transformCSS(o,`${eo}color-scheme:dark`,"dark","variable",g,t,n)}`,y=[...new Set([...J,...ro,...to])],w=f`${p.css}`}return{primitive:{css:m,tokens:h},semantic:{css:k,tokens:v},global:{css:x,tokens:y},style:w}},getPreset({name:o="",preset:r={},options:e,params:t,set:n,defaults:d,selector:i}){var a,c,l;let s,u,p;if(b(r)&&"strict"!==e.transform){const t=o.replace("-directive",""),g=r,{colorScheme:m,extend:h,css:k}=g,v=$(g,["colorScheme","extend","css"]),x=h||{},{colorScheme:y}=x,w=$(x,["colorScheme"]),B=m||{},{dark:z}=B,R=$(B,["dark"]),S=y||{},{dark:W}=S,D=$(S,["dark"]),O=b(v)?this._toVariables({[t]:C(C({},v),w)},e):{},j=b(R)?this._toVariables({[t]:C(C({},R),D)},e):{},I=b(z)?this._toVariables({[t]:C(C({},z),W)},e):{},[N,L]=[null!=(a=O.declarations)?a:"",O.tokens||[]],[F,E]=[null!=(c=j.declarations)?c:"",j.tokens||[]],[P,T]=[null!=(l=I.declarations)?l:"",I.tokens||[]];s=`${this.transformCSS(t,`${N}${F}`,"light","variable",e,n,d,i)}${this.transformCSS(t,P,"dark","variable",e,n,d,i)}`,u=[...new Set([...L,...E,...T])],p=f`${k}`}return{css:s,tokens:u,style:p}},getPresetC({name:o="",theme:r={},params:e,set:t,defaults:n}){var d;const{preset:i,options:a}=r,c=null==(d=null==i?void 0:i.components)?void 0:d[o];return this.getPreset({name:o,preset:c,options:a,params:e,set:t,defaults:n})},getPresetD({name:o="",theme:r={},params:e,set:t,defaults:n}){var d,i;const a=o.replace("-directive",""),{preset:c,options:l}=r,s=(null==(d=null==c?void 0:c.components)?void 0:d[a])||(null==(i=null==c?void 0:c.directives)?void 0:i[a]);return this.getPreset({name:a,preset:s,options:l,params:e,set:t,defaults:n})},applyDarkColorScheme:o=>!("none"===o.darkModeSelector||!1===o.darkModeSelector),getColorSchemeOption(o,r){var e;return this.applyDarkColorScheme(o)?this.regex.resolve(!0===o.darkModeSelector?r.options.darkModeSelector:null!=(e=o.darkModeSelector)?e:r.options.darkModeSelector):[]},getLayerOrder(o,r={},e,t){const{cssLayer:n}=r;return n?`@layer ${O(n.order||"primeui",e)}`:""},getCommonStyleSheet({name:o="",theme:r={},params:e,props:t={},set:n,defaults:d}){const i=this.getCommon({name:o,theme:r,params:e,set:n,defaults:d}),a=Object.entries(t).reduce(((o,[r,e])=>o.push(`${r}="${e}"`)&&o),[]).join(" ");return Object.entries(i||{}).reduce(((o,[r,e])=>{if(z(e)&&Object.hasOwn(e,"css")){const t=ko(e.css),n=`${r}-variables`;o.push(`<style type="text/css" data-primevue-style-id="${n}" ${a}>${t}</style>`)}return o}),[]).join("")},getStyleSheet({name:o="",theme:r={},params:e,props:t={},set:n,defaults:d}){var i;const a={name:o,theme:r,params:e,set:n,defaults:d},c=null==(i=o.includes("-directive")?this.getPresetD(a):this.getPresetC(a))?void 0:i.css,l=Object.entries(t).reduce(((o,[r,e])=>o.push(`${r}="${e}"`)&&o),[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${o}-variables" ${l}>${ko(c)}</style>`:""},createTokens(o={},r,e="",t="",n={}){return Object.entries(o).forEach((([o,d])=>{const i=B(o,r.variable.excludedKeyRegex)?e:e?`${e}.${vo(o)}`:vo(o),a=t?`${t}.${o}`:o;z(d)?this.createTokens(d,r,i,a,n):(n[i]||(n[i]={paths:[],computed(o,r={}){var e,t;return 1===this.paths.length?null==(e=this.paths[0])?void 0:e.computed(this.paths[0].scheme,r.binding):o&&"none"!==o?null==(t=this.paths.find((r=>r.scheme===o)))?void 0:t.computed(o,r.binding):this.paths.map((o=>o.computed(o.scheme,r[o.scheme])))}}),n[i].paths.push({path:a,value:d,scheme:a.includes("colorScheme.light")?"light":a.includes("colorScheme.dark")?"dark":"none",computed(o,r={}){const e=/{([^}]*)}/g;let t=d;if(r.name=this.path,r.binding||(r.binding={}),B(d,e)){const i=d.trim().replaceAll(e,(e=>{var t;const d=e.replace(/{|}/g,""),i=null==(t=n[d])?void 0:t.computed(o,r);return Ro(i)&&2===i.length?`light-dark(${i[0].value},${i[1].value})`:null==i?void 0:i.value})),a=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,c=/var\([^)]+\)/g;t=B(i.replace(c,"0"),a)?`calc(${i})`:i}return D(r.binding)&&delete r.binding,{colorScheme:o,path:this.path,paths:r,value:t.includes("undefined")?void 0:t}}}))})),n},getTokenValue(o,r,e){var t;const n=r.split(".").filter((o=>!B(o.toLowerCase(),e.variable.excludedKeyRegex))).join("."),d=r.includes("colorScheme.light")?"light":r.includes("colorScheme.dark")?"dark":void 0,i=[null==(t=o[n])?void 0:t.computed(d)].flat().filter((o=>o));return 1===i.length?i[0].value:i.reduce(((o={},r)=>{const e=r,{colorScheme:t}=e,n=$(e,["colorScheme"]);return o[t]=n,o}),void 0)},getSelectorRule:(o,r,e,t)=>"class"===e||"attr"===e?W(b(r)?`${o}${r},${o} ${r}`:o,t):W(o,b(r)?W(r,t):t),transformCSS(o,r,e,t,n={},d,i,a){if(b(r)){const{cssLayer:c}=n;if("style"!==t){const o=this.getColorSchemeOption(n,i);r="dark"===e?o.reduce(((o,{type:e,selector:t})=>(b(t)&&(o+=t.includes("[CSS]")?t.replace("[CSS]",r):this.getSelectorRule(t,a,e,r)),o)),""):W(a??":root",r)}if(c){const e={name:"primeui"};z(c)&&(e.name=O(c.name,{name:o,type:t})),b(e.name)&&(r=W(`@layer ${e.name}`,r),null==d||d.layerNames(e.name))}return r}return""}},N={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(o={}){const{theme:r}=o;r&&(this._theme=eo(C({},r),{options:C(C({},this.defaults.options),r.options)}),this._tokens=w.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var o;return(null==(o=this.theme)?void 0:o.preset)||{}},get options(){var o;return(null==(o=this.theme)?void 0:o.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(o){this.update({theme:o}),_.emit("theme:change",o)},getPreset(){return this.preset},setPreset(o){this._theme=eo(C({},this.theme),{preset:o}),this._tokens=w.createTokens(o,this.defaults),this.clearLoadedStyleNames(),_.emit("preset:change",o),_.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(o){this._theme=eo(C({},this.theme),{options:o}),this.clearLoadedStyleNames(),_.emit("options:change",o),_.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(o){this._layerNames.add(o)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(o){return this._loadedStyleNames.has(o)},setLoadedStyleName(o){this._loadedStyleNames.add(o)},deleteLoadedStyleName(o){this._loadedStyleNames.delete(o)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(o){return w.getTokenValue(this.tokens,o,this.defaults)},getCommon(o="",r){return w.getCommon({name:o,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(o="",r){const e={name:o,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return w.getPresetC(e)},getDirective(o="",r){const e={name:o,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return w.getPresetD(e)},getCustomPreset(o="",r,e,t){const n={name:o,preset:r,options:this.options,selector:e,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return w.getPreset(n)},getLayerOrderCSS(o=""){return w.getLayerOrder(o,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(o="",r,e="style",t){return w.transformCSS(o,r,t,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(o="",r,e={}){return w.getCommonStyleSheet({name:o,theme:this.theme,params:r,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(o,r,e={}){return w.getStyleSheet({name:o,theme:this.theme,params:r,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(o){this._loadingStyles.add(o)},onStyleUpdated(o){this._loadingStyles.add(o)},onStyleLoaded(o,{name:r}){this._loadingStyles.size&&(this._loadingStyles.delete(r),_.emit(`theme:${r}:load`,o),!this._loadingStyles.size&&_.emit("theme:load"))}},Xl=f`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`,Ml=f`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`,Kl=f`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`,Gl=f`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,ql=f`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`,Zl=f`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`,Ul=f`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,Jl=f`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-dialog-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .p-dialog-enter-from,
    .p-dialog-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 0.75rem;
        transform: translate3d(0px, 0px, 0px);
    }

    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-top .p-dialog-leave-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-leave-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-left .p-dialog-leave-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-right .p-dialog-leave-active,
    .p-dialog-topleft .p-dialog-enter-active,
    .p-dialog-topleft .p-dialog-leave-active,
    .p-dialog-topright .p-dialog-enter-active,
    .p-dialog-topright .p-dialog-leave-active,
    .p-dialog-bottomleft .p-dialog-enter-active,
    .p-dialog-bottomleft .p-dialog-leave-active,
    .p-dialog-bottomright .p-dialog-enter-active,
    .p-dialog-bottomright .p-dialog-leave-active {
        transition: all 0.3s ease-out;
    }

    .p-dialog-top .p-dialog-enter-from,
    .p-dialog-top .p-dialog-leave-to {
        transform: translate3d(0px, -100%, 0px);
    }

    .p-dialog-bottom .p-dialog-enter-from,
    .p-dialog-bottom .p-dialog-leave-to {
        transform: translate3d(0px, 100%, 0px);
    }

    .p-dialog-left .p-dialog-enter-from,
    .p-dialog-left .p-dialog-leave-to,
    .p-dialog-topleft .p-dialog-enter-from,
    .p-dialog-topleft .p-dialog-leave-to,
    .p-dialog-bottomleft .p-dialog-enter-from,
    .p-dialog-bottomleft .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-right .p-dialog-enter-from,
    .p-dialog-right .p-dialog-leave-to,
    .p-dialog-topright .p-dialog-enter-from,
    .p-dialog-topright .p-dialog-leave-to,
    .p-dialog-bottomright .p-dialog-enter-from,
    .p-dialog-bottomright .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-left:dir(rtl) .p-dialog-enter-from,
    .p-dialog-left:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-right:dir(rtl) .p-dialog-enter-from,
    .p-dialog-right:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topright:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }
`,Ql=f`
    .p-iconfield {
        position: relative;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`,os=f`
    .p-virtualscroller-loader {
        background: dt('virtualscroller.loader.mask.background');
        color: dt('virtualscroller.loader.mask.color');
    }

    .p-virtualscroller-loading-icon {
        font-size: dt('virtualscroller.loader.icon.size');
        width: dt('virtualscroller.loader.icon.size');
        height: dt('virtualscroller.loader.icon.size');
    }
`,rs=f`
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select:has(.p-select-clear-icon) .p-select-label {
        padding-inline-end: calc(1rem + dt('select.padding.x'));
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select .p-select-overlay {
        min-width: 100%;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }

    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }
`,es=f`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,ts=f`
    .p-confirmdialog .p-dialog-content {
        display: flex;
        align-items: center;
        gap: dt('confirmdialog.content.gap');
    }

    .p-confirmdialog-icon {
        color: dt('confirmdialog.icon.color');
        font-size: dt('confirmdialog.icon.size');
        width: dt('confirmdialog.icon.size');
        height: dt('confirmdialog.icon.size');
    }
`,Wr={transitionDuration:"{transition.duration}"},Or={borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},Ir={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},Er={borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"},ns={root:Wr,panel:Or,header:Ir,content:Er},Lr={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},Fr={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Nr={padding:"{list.padding}",gap:"{list.gap}"},Pr={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},jr={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Tr={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ar={borderRadius:"{border.radius.sm}"},Hr={padding:"{list.option.padding}"},Vr={light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},ds={root:Lr,overlay:Fr,list:Nr,option:Pr,optionGroup:jr,dropdown:Tr,chip:Ar,emptyMessage:Hr,colorScheme:Vr},Yr={width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Xr={size:"1rem"},Mr={borderColor:"{content.background}",offset:"-0.75rem"},Kr={width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},Gr={width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}},is={root:Yr,icon:Xr,group:Mr,lg:Kr,xl:Gr},qr={borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},Zr={size:"0.5rem"},Ur={fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},Jr={fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},Qr={fontSize:"1rem",minWidth:"2rem",height:"2rem"},oe={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},as={root:qr,dot:Zr,sm:Ur,lg:Jr,xl:Qr,colorScheme:oe},re={borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},ee={transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}},cs={primitive:re,semantic:ee},te={borderRadius:"{content.border.radius}"},ls={root:te},ne={padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},de={color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ie={color:"{navigation.item.icon.color}"},ss={root:ne,item:de,separator:ie},ae={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},ce={light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},us={root:ae,colorScheme:ce},le={background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},se={padding:"1.25rem",gap:"0.5rem"},ue={gap:"0.5rem"},pe={fontSize:"1.25rem",fontWeight:"500"},ge={color:"{text.muted.color}"},ps={root:le,body:se,caption:ue,title:pe,subtitle:ge},fe={transitionDuration:"{transition.duration}"},be={gap:"0.25rem"},me={padding:"1rem",gap:"0.5rem"},he={width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ke={light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},gs={root:fe,content:be,indicatorList:me,indicator:he,colorScheme:ke},ve={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},xe={width:"2.5rem",color:"{form.field.icon.color}"},ye={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},we={padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},Ce={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},$e={color:"{form.field.icon.color}"},fs={root:ve,dropdown:xe,overlay:ye,list:we,option:Ce,clearIcon:$e},Be={borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},ze={size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},bs={root:Be,icon:ze},Re={borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},Se={width:"2rem",height:"2rem"},_e={size:"1rem"},De={size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},We={light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}},ms={root:Re,image:Se,icon:_e,removeIcon:De,colorScheme:We},Oe={transitionDuration:"{transition.duration}"},Ie={width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ee={shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},Le={light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}},hs={root:Oe,preview:Ie,panel:Ee,colorScheme:Le},Fe={size:"2rem",color:"{overlay.modal.color}"},Ne={gap:"1rem"},ks={icon:Fe,content:Ne},Pe={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},je={padding:"{overlay.popover.padding}",gap:"1rem"},Te={size:"1.5rem",color:"{overlay.popover.color}"},Ae={gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"},vs={root:Pe,content:je,icon:Te,footer:Ae},He={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},Ve={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},Ye={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},Xe={mobileIndent:"1rem"},Me={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},Ke={borderColor:"{content.border.color}"},xs={root:He,list:Ve,item:Ye,submenu:Xe,submenuIcon:Me,separator:Ke},Ge={transitionDuration:"{transition.duration}"},qe={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Ze={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Ue={fontWeight:"600"},Je={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Qe={borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},ot={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},rt={fontWeight:"600"},et={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},tt={color:"{primary.color}"},nt={width:"0.5rem"},dt={width:"1px",color:"{primary.color}"},it={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},at={size:"2rem"},ct={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},lt={inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},st={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},ut={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},pt={light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},ys={root:Ge,header:qe,headerCell:Ze,columnTitle:Ue,row:Je,bodyCell:Qe,footerCell:ot,columnFooter:rt,footer:et,dropPoint:tt,columnResizer:nt,resizeIndicator:dt,sortIcon:it,loadingIcon:at,rowToggleButton:ct,filter:lt,paginatorTop:st,paginatorBottom:ut,colorScheme:pt},gt={borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},ft={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},bt={background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},mt={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},ht={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},kt={borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"},ws={root:gt,header:ft,content:bt,footer:mt,paginatorTop:ht,paginatorBottom:kt},vt={transitionDuration:"{transition.duration}"},xt={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},yt={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},wt={gap:"0.5rem",fontWeight:"500"},Ct={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},$t={color:"{form.field.icon.color}"},Bt={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},zt={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},Rt={borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},St={margin:"0.5rem 0 0 0"},_t={padding:"0.25rem",fontWeight:"500",color:"{content.color}"},Dt={hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Wt={margin:"0.5rem 0 0 0"},Ot={padding:"0.375rem",borderRadius:"{content.border.radius}"},It={margin:"0.5rem 0 0 0"},Et={padding:"0.375rem",borderRadius:"{content.border.radius}"},Lt={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},Ft={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},Nt={light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},Cs={root:vt,panel:xt,header:yt,title:wt,dropdown:Ct,inputIcon:$t,selectMonth:Bt,selectYear:zt,group:Rt,dayView:St,weekDay:_t,date:Dt,monthView:Wt,month:Ot,yearView:It,year:Et,buttonbar:Lt,timePicker:Ft,colorScheme:Nt},Pt={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},jt={padding:"{overlay.modal.padding}",gap:"0.5rem"},Tt={fontSize:"1.25rem",fontWeight:"600"},At={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},Ht={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"},$s={root:Pt,header:jt,title:Tt,content:At,footer:Ht},Vt={borderColor:"{content.border.color}"},Yt={background:"{content.background}",color:"{text.color}"},Xt={margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},Mt={margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}},Bs={root:Vt,content:Yt,horizontal:Xt,vertical:Mt},Kt={background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},Gt={borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},zs={root:Kt,item:Gt},qt={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},Zt={padding:"{overlay.modal.padding}"},Ut={fontSize:"1.5rem",fontWeight:"600"},Jt={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},Qt={padding:"{overlay.modal.padding}"},Rs={root:qt,header:Zt,title:Ut,content:Jt,footer:Qt},on={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},rn={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},en={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},tn={focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},nn={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Ss={toolbar:on,toolbarItem:rn,overlay:en,overlayOption:tn,content:nn},dn={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},an={background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},cn={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},ln={padding:"0"},_s={root:dn,legend:an,toggleIcon:cn,content:ln},sn={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},un={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},pn={highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},gn={padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fn={gap:"0.5rem"},bn={height:"0.25rem"},mn={gap:"0.5rem"},Ds={root:sn,header:un,content:pn,file:gn,fileList:fn,progressbar:bn,basic:mn},hn={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},kn={active:{top:"-1.25rem"}},vn={input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},xn={borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}},Ws={root:hn,over:kn,in:vn,on:xn},yn={borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},wn={background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Cn={size:"1.5rem"},$n={background:"{content.background}",padding:"1rem 0.25rem"},Bn={size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},zn={size:"1rem"},Rn={background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},Sn={gap:"0.5rem",padding:"1rem"},_n={width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Dn={background:"rgba(0, 0, 0, 0.5)"},Wn={background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},On={size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},In={size:"1.5rem"},En={light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}},Os={root:yn,navButton:wn,navIcon:Cn,thumbnailsContent:$n,thumbnailNavButton:Bn,thumbnailNavButtonIcon:zn,caption:Rn,indicatorList:Sn,indicatorButton:_n,insetIndicatorList:Dn,insetIndicatorButton:Wn,closeButton:On,closeButtonIcon:In,colorScheme:En},Ln={color:"{form.field.icon.color}"},Is={icon:Ln},Fn={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},Nn={paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},Es={root:Fn,input:Nn},Pn={transitionDuration:"{transition.duration}"},jn={icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},Tn={position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},An={hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ls={root:Pn,preview:jn,toolbar:Tn,action:An},Hn={size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Fs={handle:Hn},Vn={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},Yn={fontWeight:"500"},Xn={size:"1rem"},Mn={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}},Ns={root:Vn,text:Yn,icon:Xn,colorScheme:Mn},Kn={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},Gn={hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"},Ps={root:Kn,display:Gn},qn={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},Zn={borderRadius:"{border.radius.sm}"},Un={light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}},js={root:qn,chip:Zn,colorScheme:Un},Jn={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"},Ts={addon:Jn},Qn={transitionDuration:"{transition.duration}"},od={width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},rd={light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},As={root:Qn,button:od,colorScheme:rd},ed={gap:"0.5rem"},td={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}},Hs={root:ed,input:td},nd={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Vs={root:nd},dd={transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},id={background:"{primary.color}"},ad={background:"{content.border.color}"},cd={color:"{text.muted.color}"},Ys={root:dd,value:id,range:ad,text:cd},ld={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},sd={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},ud={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},pd={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},gd={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},fd={padding:"{list.option.padding}"},bd={light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},Xs={root:ld,list:sd,option:ud,optionGroup:pd,checkmark:gd,emptyMessage:fd,colorScheme:bd},md={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},hd={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},kd={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},vd={padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},xd={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},yd={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},wd={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},Cd={borderColor:"{content.border.color}"},$d={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ms={root:md,baseItem:hd,item:kd,overlay:vd,submenu:xd,submenuLabel:yd,submenuIcon:wd,separator:Cd,mobileButton:$d},Bd={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},zd={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},Rd={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},Sd={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},_d={borderColor:"{content.border.color}"},Ks={root:Bd,list:zd,item:Rd,submenuLabel:Sd,separator:_d},Dd={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},Wd={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},Od={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},Id={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},Ed={borderColor:"{content.border.color}"},Ld={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Gs={root:Dd,baseItem:Wd,item:Od,submenu:Id,separator:Ed,mobileButton:Ld},Fd={borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},Nd={padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},Pd={fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},jd={size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},Td={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},Ad={size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},Hd={root:{borderWidth:"1px"}},Vd={content:{padding:"0"}},Yd={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}},qs={root:Fd,content:Nd,text:Pd,icon:jd,closeButton:Td,closeIcon:Ad,outlined:Hd,simple:Vd,colorScheme:Yd},Xd={borderRadius:"{content.border.radius}",gap:"1rem"},Md={background:"{content.border.color}",size:"0.5rem"},Kd={gap:"0.5rem"},Gd={size:"0.5rem"},qd={size:"1rem"},Zd={verticalGap:"0.5rem",horizontalGap:"1rem"},Zs={root:Xd,meters:Md,label:Kd,labelMarker:Gd,labelIcon:qd,labelList:Zd},Ud={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Jd={width:"2.5rem",color:"{form.field.icon.color}"},Qd={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},oi={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},ri={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},ei={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},ti={color:"{form.field.icon.color}"},ni={borderRadius:"{border.radius.sm}"},di={padding:"{list.option.padding}"},Us={root:Ud,dropdown:Jd,overlay:Qd,list:oi,option:ri,optionGroup:ei,chip:ni,clearIcon:ti,emptyMessage:di},ii={gap:"1.125rem"},ai={gap:"0.5rem"},Js={root:ii,controls:ai},ci={gutter:"0.75rem",transitionDuration:"{transition.duration}"},li={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},si={background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ui={color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"},Qs={root:ci,node:li,nodeToggleButton:si,connector:ui},pi={outline:{width:"2px",color:"{content.background}"}},ou={root:pi},gi={padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},fi={background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},bi={color:"{text.muted.color}"},mi={maxWidth:"2.5rem"},ru={root:gi,navButton:fi,currentPageReport:bi,jumpToPageInput:mi},hi={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},ki={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},vi={padding:"0.375rem 1.125rem"},xi={fontWeight:"600"},yi={padding:"0 1.125rem 1.125rem 1.125rem"},wi={padding:"0 1.125rem 1.125rem 1.125rem"},eu={root:hi,header:ki,toggleableHeader:vi,title:xi,content:yi,footer:wi},Ci={gap:"0.5rem",transitionDuration:"{transition.duration}"},$i={background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},Bi={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},zi={indent:"1rem"},Ri={color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},tu={root:Ci,panel:$i,item:Bi,submenu:zi,submenuIcon:Ri},Si={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},_i={color:"{form.field.icon.color}"},Di={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},Wi={gap:"0.5rem"},Oi={light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}},nu={meter:Si,icon:_i,overlay:Di,content:Wi,colorScheme:Oi},Ii={gap:"1.125rem"},Ei={gap:"0.5rem"},du={root:Ii,controls:Ei},Li={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},Fi={padding:"{overlay.popover.padding}"},iu={root:Li,content:Fi},Ni={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},Pi={background:"{primary.color}"},ji={color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"},au={root:Ni,value:Pi,label:ji},Ti={light:{root:{colorOne:"{red.500}",colorTwo:"{blue.500}",colorThree:"{green.500}",colorFour:"{yellow.500}"}},dark:{root:{colorOne:"{red.400}",colorTwo:"{blue.400}",colorThree:"{green.400}",colorFour:"{yellow.400}"}}},cu={colorScheme:Ti},Ai={width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},Hi={size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}},lu={root:Ai,icon:Hi},Vi={gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Yi={size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},su={root:Vi,icon:Yi},Xi={light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}},uu={colorScheme:Xi},Mi={transitionDuration:"{transition.duration}"},Ki={size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Gi={light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}},pu={root:Mi,bar:Ki,colorScheme:Gi},qi={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Zi={width:"2.5rem",color:"{form.field.icon.color}"},Ui={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Ji={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},Qi={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},oa={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},ra={color:"{form.field.icon.color}"},ea={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},ta={padding:"{list.option.padding}"},gu={root:qi,dropdown:Zi,overlay:Ui,list:Ji,option:Qi,optionGroup:oa,clearIcon:ra,checkmark:ea,emptyMessage:ta},na={borderRadius:"{form.field.border.radius}"},da={light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}},fu={root:na,colorScheme:da},ia={borderRadius:"{content.border.radius}"},aa={light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}},bu={root:ia,colorScheme:aa},ca={transitionDuration:"{transition.duration}"},la={background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},sa={background:"{primary.color}"},ua={width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},pa={light:{handle:{content:{background:"{surface.0}"}}},dark:{handle:{content:{background:"{surface.950}"}}}},mu={root:ca,track:la,range:sa,handle:ua,colorScheme:pa},ga={gap:"0.5rem",transitionDuration:"{transition.duration}"},hu={root:ga},fa={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"},ku={root:fa},ba={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},ma={background:"{content.border.color}"},ha={size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},vu={root:ba,gutter:ma,handle:ha},ka={transitionDuration:"{transition.duration}"},va={background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},xa={padding:"0.5rem",gap:"1rem"},ya={padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},wa={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},Ca={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},$a={padding:"0.875rem 0.5rem 1.125rem 0.5rem"},Ba={background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},xu={root:ka,separator:va,step:xa,stepHeader:ya,stepTitle:wa,stepNumber:Ca,steppanels:$a,steppanel:Ba},za={transitionDuration:"{transition.duration}"},Ra={background:"{content.border.color}"},Sa={borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},_a={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},Da={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},yu={root:za,separator:Ra,itemLink:Sa,itemLabel:_a,itemNumber:Da},Wa={transitionDuration:"{transition.duration}"},Oa={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},Ia={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ea={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},La={height:"1px",bottom:"-1px",background:"{primary.color}"},wu={root:Wa,tablist:Oa,item:Ia,itemIcon:Ea,activeBar:La},Fa={transitionDuration:"{transition.duration}"},Na={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},Pa={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},ja={background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},Ta={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Aa={height:"1px",bottom:"-1px",background:"{primary.color}"},Ha={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},Cu={root:Fa,tablist:Na,tab:Pa,tabpanel:ja,navButton:Ta,activeBar:Aa,colorScheme:Ha},Va={transitionDuration:"{transition.duration}"},Ya={background:"{content.background}",borderColor:"{content.border.color}"},Xa={borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Ma={background:"{content.background}",color:"{content.color}"},Ka={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},Ga={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},$u={root:Va,tabList:Ya,tab:Xa,tabPanel:Ma,navButton:Ka,colorScheme:Ga},qa={fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},Za={size:"0.75rem"},Ua={light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},Bu={root:qa,icon:Za,colorScheme:Ua},Ja={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},Qa={gap:"0.25rem"},oc={margin:"2px 0"},zu={root:Ja,prompt:Qa,commandResponse:oc},rc={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Ru={root:rc},ec={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},tc={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},nc={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},dc={mobileIndent:"1rem"},ic={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},ac={borderColor:"{content.border.color}"},Su={root:ec,list:tc,item:nc,submenu:dc,submenuIcon:ic,separator:ac},cc={minHeight:"5rem"},lc={eventContent:{padding:"1rem 0"}},sc={eventContent:{padding:"0 1rem"}},uc={size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},pc={color:"{content.border.color}",size:"2px"},_u={event:cc,horizontal:lc,vertical:sc,eventMarker:uc,eventConnector:pc},gc={width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},fc={size:"1.125rem"},bc={padding:"{overlay.popover.padding}",gap:"0.5rem"},mc={gap:"0.5rem"},hc={fontWeight:"500",fontSize:"1rem"},kc={fontWeight:"500",fontSize:"0.875rem"},vc={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},xc={size:"1rem"},yc={light:{root:{blur:"1.5px"},info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{root:{blur:"10px"},info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}},Du={root:gc,icon:fc,content:bc,text:mc,summary:hc,detail:kc,closeButton:vc,closeIcon:xc,colorScheme:yc},wc={padding:"0.25rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.25rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.25rem"}},Cc={disabledColor:"{form.field.disabled.color}"},$c={padding:"0.25rem 0.75rem",borderRadius:"{content.border.radius}",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",sm:{padding:"0.25rem 0.75rem"},lg:{padding:"0.25rem 0.75rem"}},Bc={light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}},Wu={root:wc,icon:Cc,content:$c,colorScheme:Bc},zc={width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},Rc={borderRadius:"50%",size:"1rem"},Sc={light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}},Ou={root:zc,handle:Rc,colorScheme:Sc},_c={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"},Iu={root:_c},Dc={maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},Wc={light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}},Eu={root:Dc,colorScheme:Wc},Oc={background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},Ic={padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},Ec={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},Lc={borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Fc={size:"2rem"},Nc={margin:"0 0 0.5rem 0"},Lu={root:Oc,node:Ic,nodeIcon:Ec,nodeToggleButton:Lc,loadingIcon:Fc,filter:Nc},Pc={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},jc={width:"2.5rem",color:"{form.field.icon.color}"},Tc={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Ac={padding:"{list.padding}"},Hc={padding:"{list.option.padding}"},Vc={borderRadius:"{border.radius.sm}"},Yc={color:"{form.field.icon.color}"},Fu={root:Pc,dropdown:jc,overlay:Tc,tree:Ac,emptyMessage:Hc,chip:Vc,clearIcon:Yc},Xc={transitionDuration:"{transition.duration}"},Mc={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},Kc={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Gc={fontWeight:"600"},qc={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Zc={borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},Uc={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},Jc={fontWeight:"600"},Qc={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},ol={width:"0.5rem"},rl={width:"1px",color:"{primary.color}"},el={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},tl={size:"2rem"},nl={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},dl={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},il={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},al={light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},Nu={root:Xc,header:Mc,headerCell:Kc,columnTitle:Gc,row:qc,bodyCell:Zc,footerCell:Uc,columnFooter:Jc,footer:Qc,columnResizer:ol,resizeIndicator:rl,sortIcon:el,loadingIcon:tl,nodeToggleButton:nl,paginatorTop:dl,paginatorBottom:il,colorScheme:al},cl={mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}},Pu={loader:cl},ju=f`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,Tu=f`
    .p-message {
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
        height: 100%;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin 0.3s;
    }

    .p-message-leave-active .p-message-close-button {
        opacity: 0;
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }
`,Au=f`
    .p-progressbar {
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`,Hu=f`
    .p-fileupload input[type='file'] {
        display: none;
    }

    .p-fileupload-advanced {
        border: 1px solid dt('fileupload.border.color');
        border-radius: dt('fileupload.border.radius');
        background: dt('fileupload.background');
        color: dt('fileupload.color');
    }

    .p-fileupload-header {
        display: flex;
        align-items: center;
        padding: dt('fileupload.header.padding');
        background: dt('fileupload.header.background');
        color: dt('fileupload.header.color');
        border-style: solid;
        border-width: dt('fileupload.header.border.width');
        border-color: dt('fileupload.header.border.color');
        border-radius: dt('fileupload.header.border.radius');
        gap: dt('fileupload.header.gap');
    }

    .p-fileupload-content {
        border: 1px solid transparent;
        display: flex;
        flex-direction: column;
        gap: dt('fileupload.content.gap');
        transition: border-color dt('fileupload.transition.duration');
        padding: dt('fileupload.content.padding');
    }

    .p-fileupload-content .p-progressbar {
        width: 100%;
        height: dt('fileupload.progressbar.height');
    }

    .p-fileupload-file-list {
        display: flex;
        flex-direction: column;
        gap: dt('fileupload.filelist.gap');
    }

    .p-fileupload-file {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: dt('fileupload.file.padding');
        border-block-end: 1px solid dt('fileupload.file.border.color');
        gap: dt('fileupload.file.gap');
    }

    .p-fileupload-file:last-child {
        border-block-end: 0;
    }

    .p-fileupload-file-info {
        display: flex;
        flex-direction: column;
        gap: dt('fileupload.file.info.gap');
    }

    .p-fileupload-file-thumbnail {
        flex-shrink: 0;
    }

    .p-fileupload-file-actions {
        margin-inline-start: auto;
    }

    .p-fileupload-highlight {
        border: 1px dashed dt('fileupload.content.highlight.border.color');
    }

    .p-fileupload-basic {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: dt('fileupload.basic.gap');
    }
`,Vu=f`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`,Yu=f`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,Xu=f`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`,Mu=f`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`,Ku=f`
    .p-panel {
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,Gu=f`
    .p-datepicker {
        display: inline-flex;
        max-width: 100%;
    }

    .p-datepicker-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-datepicker-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('datepicker.dropdown.width');
        border-start-end-radius: dt('datepicker.dropdown.border.radius');
        border-end-end-radius: dt('datepicker.dropdown.border.radius');
        background: dt('datepicker.dropdown.background');
        border: 1px solid dt('datepicker.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('datepicker.dropdown.color');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        outline-color: transparent;
    }

    .p-datepicker-dropdown:not(:disabled):hover {
        background: dt('datepicker.dropdown.hover.background');
        border-color: dt('datepicker.dropdown.hover.border.color');
        color: dt('datepicker.dropdown.hover.color');
    }

    .p-datepicker-dropdown:not(:disabled):active {
        background: dt('datepicker.dropdown.active.background');
        border-color: dt('datepicker.dropdown.active.border.color');
        color: dt('datepicker.dropdown.active.color');
    }

    .p-datepicker-dropdown:focus-visible {
        box-shadow: dt('datepicker.dropdown.focus.ring.shadow');
        outline: dt('datepicker.dropdown.focus.ring.width') dt('datepicker.dropdown.focus.ring.style') dt('datepicker.dropdown.focus.ring.color');
        outline-offset: dt('datepicker.dropdown.focus.ring.offset');
    }

    .p-datepicker:has(.p-datepicker-input-icon-container) {
        position: relative;
    }

    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-datepicker-input-icon-container {
        cursor: pointer;
        position: absolute;
        top: 50%;
        inset-inline-end: dt('form.field.padding.x');
        margin-block-start: calc(-1 * (dt('icon.size') / 2));
        color: dt('datepicker.input.icon.color');
        line-height: 1;
    }

    .p-datepicker-fluid {
        display: flex;
    }

    .p-datepicker-fluid .p-datepicker-input {
        width: 1%;
    }

    .p-datepicker .p-datepicker-panel {
        min-width: 100%;
    }

    .p-datepicker-panel {
        width: auto;
        padding: dt('datepicker.panel.padding');
        background: dt('datepicker.panel.background');
        color: dt('datepicker.panel.color');
        border: 1px solid dt('datepicker.panel.border.color');
        border-radius: dt('datepicker.panel.border.radius');
        box-shadow: dt('datepicker.panel.shadow');
    }

    .p-datepicker-panel-inline {
        display: inline-block;
        overflow-x: auto;
        box-shadow: none;
    }

    .p-datepicker-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('datepicker.header.padding');
        background: dt('datepicker.header.background');
        color: dt('datepicker.header.color');
        border-block-end: 1px solid dt('datepicker.header.border.color');
    }

    .p-datepicker-next-button:dir(rtl) {
        order: -1;
    }

    .p-datepicker-prev-button:dir(rtl) {
        order: 1;
    }

    .p-datepicker-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: dt('datepicker.title.gap');
        font-weight: dt('datepicker.title.font.weight');
    }

    .p-datepicker-select-year,
    .p-datepicker-select-month {
        border: none;
        background: transparent;
        margin: 0;
        cursor: pointer;
        font-weight: inherit;
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration');
    }

    .p-datepicker-select-month {
        padding: dt('datepicker.select.month.padding');
        color: dt('datepicker.select.month.color');
        border-radius: dt('datepicker.select.month.border.radius');
    }

    .p-datepicker-select-year {
        padding: dt('datepicker.select.year.padding');
        color: dt('datepicker.select.year.color');
        border-radius: dt('datepicker.select.year.border.radius');
    }

    .p-datepicker-select-month:enabled:hover {
        background: dt('datepicker.select.month.hover.background');
        color: dt('datepicker.select.month.hover.color');
    }

    .p-datepicker-select-year:enabled:hover {
        background: dt('datepicker.select.year.hover.background');
        color: dt('datepicker.select.year.hover.color');
    }

    .p-datepicker-select-month:focus-visible,
    .p-datepicker-select-year:focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-calendar-container {
        display: flex;
    }

    .p-datepicker-calendar-container .p-datepicker-calendar {
        flex: 1 1 auto;
        border-inline-start: 1px solid dt('datepicker.group.border.color');
        padding-inline-end: dt('datepicker.group.gap');
        padding-inline-start: dt('datepicker.group.gap');
    }

    .p-datepicker-calendar-container .p-datepicker-calendar:first-child {
        padding-inline-start: 0;
        border-inline-start: 0 none;
    }

    .p-datepicker-calendar-container .p-datepicker-calendar:last-child {
        padding-inline-end: 0;
    }

    .p-datepicker-day-view {
        width: 100%;
        border-collapse: collapse;
        font-size: 1rem;
        margin: dt('datepicker.day.view.margin');
    }

    .p-datepicker-weekday-cell {
        padding: dt('datepicker.week.day.padding');
    }

    .p-datepicker-weekday {
        font-weight: dt('datepicker.week.day.font.weight');
        color: dt('datepicker.week.day.color');
    }

    .p-datepicker-day-cell {
        padding: dt('datepicker.date.padding');
    }

    .p-datepicker-day {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        width: dt('datepicker.date.width');
        height: dt('datepicker.date.height');
        border-radius: dt('datepicker.date.border.radius');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        border: 1px solid transparent;
        outline-color: transparent;
        color: dt('datepicker.date.color');
    }

    .p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
        background: dt('datepicker.date.hover.background');
        color: dt('datepicker.date.hover.color');
    }

    .p-datepicker-day:focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-day-selected {
        background: dt('datepicker.date.selected.background');
        color: dt('datepicker.date.selected.color');
    }

    .p-datepicker-day-selected-range {
        background: dt('datepicker.date.range.selected.background');
        color: dt('datepicker.date.range.selected.color');
    }

    .p-datepicker-today > .p-datepicker-day {
        background: dt('datepicker.today.background');
        color: dt('datepicker.today.color');
    }

    .p-datepicker-today > .p-datepicker-day-selected {
        background: dt('datepicker.date.selected.background');
        color: dt('datepicker.date.selected.color');
    }

    .p-datepicker-today > .p-datepicker-day-selected-range {
        background: dt('datepicker.date.range.selected.background');
        color: dt('datepicker.date.range.selected.color');
    }

    .p-datepicker-weeknumber {
        text-align: center;
    }

    .p-datepicker-month-view {
        margin: dt('datepicker.month.view.margin');
    }

    .p-datepicker-month {
        width: 33.3%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        padding: dt('datepicker.month.padding');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        border-radius: dt('datepicker.month.border.radius');
        outline-color: transparent;
        color: dt('datepicker.date.color');
    }

    .p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {
        color: dt('datepicker.date.hover.color');
        background: dt('datepicker.date.hover.background');
    }

    .p-datepicker-month-selected {
        color: dt('datepicker.date.selected.color');
        background: dt('datepicker.date.selected.background');
    }

    .p-datepicker-month:not(.p-disabled):focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-year-view {
        margin: dt('datepicker.year.view.margin');
    }

    .p-datepicker-year {
        width: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        padding: dt('datepicker.year.padding');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        border-radius: dt('datepicker.year.border.radius');
        outline-color: transparent;
        color: dt('datepicker.date.color');
    }

    .p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {
        color: dt('datepicker.date.hover.color');
        background: dt('datepicker.date.hover.background');
    }

    .p-datepicker-year-selected {
        color: dt('datepicker.date.selected.color');
        background: dt('datepicker.date.selected.background');
    }

    .p-datepicker-year:not(.p-disabled):focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-buttonbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('datepicker.buttonbar.padding');
        border-block-start: 1px solid dt('datepicker.buttonbar.border.color');
    }

    .p-datepicker-buttonbar .p-button {
        width: auto;
    }

    .p-datepicker-time-picker {
        display: flex;
        justify-content: center;
        align-items: center;
        border-block-start: 1px solid dt('datepicker.time.picker.border.color');
        padding: 0;
        gap: dt('datepicker.time.picker.gap');
    }

    .p-datepicker-calendar-container + .p-datepicker-time-picker {
        padding: dt('datepicker.time.picker.padding');
    }

    .p-datepicker-time-picker > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: dt('datepicker.time.picker.button.gap');
    }

    .p-datepicker-time-picker span {
        font-size: 1rem;
    }

    .p-datepicker-timeonly .p-datepicker-time-picker {
        border-block-start: 0 none;
    }

    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {
        width: dt('datepicker.dropdown.sm.width');
    }

    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,
    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {
        width: dt('datepicker.dropdown.lg.width');
    }

    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,
    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }
`,qu=f`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,Zu=f`
    .p-multiselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('multiselect.background');
        border: 1px solid dt('multiselect.border.color');
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration');
        border-radius: dt('multiselect.border.radius');
        outline-color: transparent;
        box-shadow: dt('multiselect.shadow');
    }

    .p-multiselect:not(.p-disabled):hover {
        border-color: dt('multiselect.hover.border.color');
    }

    .p-multiselect:not(.p-disabled).p-focus {
        border-color: dt('multiselect.focus.border.color');
        box-shadow: dt('multiselect.focus.ring.shadow');
        outline: dt('multiselect.focus.ring.width') dt('multiselect.focus.ring.style') dt('multiselect.focus.ring.color');
        outline-offset: dt('multiselect.focus.ring.offset');
    }

    .p-multiselect.p-variant-filled {
        background: dt('multiselect.filled.background');
    }

    .p-multiselect.p-variant-filled:not(.p-disabled):hover {
        background: dt('multiselect.filled.hover.background');
    }

    .p-multiselect.p-variant-filled.p-focus {
        background: dt('multiselect.filled.focus.background');
    }

    .p-multiselect.p-invalid {
        border-color: dt('multiselect.invalid.border.color');
    }

    .p-multiselect.p-disabled {
        opacity: 1;
        background: dt('multiselect.disabled.background');
    }

    .p-multiselect-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('multiselect.dropdown.color');
        width: dt('multiselect.dropdown.width');
        border-start-end-radius: dt('multiselect.border.radius');
        border-end-end-radius: dt('multiselect.border.radius');
    }

    .p-multiselect-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        color: dt('multiselect.clear.icon.color');
        inset-inline-end: dt('multiselect.dropdown.width');
    }

    .p-multiselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-multiselect-label {
        display: flex;
        align-items: center;
        gap: calc(dt('multiselect.padding.y') / 2);
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: dt('multiselect.padding.y') dt('multiselect.padding.x');
        color: dt('multiselect.color');
    }

    .p-multiselect-label.p-placeholder {
        color: dt('multiselect.placeholder.color');
    }

    .p-multiselect.p-invalid .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }

    .p-multiselect.p-disabled .p-multiselect-label {
        color: dt('multiselect.disabled.color');
    }

    .p-multiselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-multiselect .p-multiselect-overlay {
        min-width: 100%;
    }

    .p-multiselect-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('multiselect.overlay.background');
        color: dt('multiselect.overlay.color');
        border: 1px solid dt('multiselect.overlay.border.color');
        border-radius: dt('multiselect.overlay.border.radius');
        box-shadow: dt('multiselect.overlay.shadow');
    }

    .p-multiselect-header {
        display: flex;
        align-items: center;
        padding: dt('multiselect.list.header.padding');
    }

    .p-multiselect-header .p-checkbox {
        margin-inline-end: dt('multiselect.option.gap');
    }

    .p-multiselect-filter-container {
        flex: 1 1 auto;
    }

    .p-multiselect-filter {
        width: 100%;
    }

    .p-multiselect-list-container {
        overflow: auto;
    }

    .p-multiselect-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('multiselect.list.padding');
        display: flex;
        flex-direction: column;
        gap: dt('multiselect.list.gap');
    }

    .p-multiselect-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: dt('multiselect.option.gap');
        padding: dt('multiselect.option.padding');
        border: 0 none;
        color: dt('multiselect.option.color');
        background: transparent;
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration');
        border-radius: dt('multiselect.option.border.radius');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option.p-multiselect-option-selected {
        background: dt('multiselect.option.selected.background');
        color: dt('multiselect.option.selected.color');
    }

    .p-multiselect-option.p-multiselect-option-selected.p-focus {
        background: dt('multiselect.option.selected.focus.background');
        color: dt('multiselect.option.selected.focus.color');
    }

    .p-multiselect-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('multiselect.option.group.padding');
        background: dt('multiselect.option.group.background');
        color: dt('multiselect.option.group.color');
        font-weight: dt('multiselect.option.group.font.weight');
    }

    .p-multiselect-empty-message {
        padding: dt('multiselect.empty.message.padding');
    }

    .p-multiselect-label .p-chip {
        padding-block-start: calc(dt('multiselect.padding.y') / 2);
        padding-block-end: calc(dt('multiselect.padding.y') / 2);
        border-radius: dt('multiselect.chip.border.radius');
    }

    .p-multiselect-label:has(.p-chip) {
        padding: calc(dt('multiselect.padding.y') / 2) calc(dt('multiselect.padding.x') / 2);
    }

    .p-multiselect-fluid {
        display: flex;
        width: 100%;
    }

    .p-multiselect-sm .p-multiselect-label {
        font-size: dt('multiselect.sm.font.size');
        padding-block: dt('multiselect.sm.padding.y');
        padding-inline: dt('multiselect.sm.padding.x');
    }

    .p-multiselect-sm .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.sm.font.size');
        width: dt('multiselect.sm.font.size');
        height: dt('multiselect.sm.font.size');
    }

    .p-multiselect-lg .p-multiselect-label {
        font-size: dt('multiselect.lg.font.size');
        padding-block: dt('multiselect.lg.padding.y');
        padding-inline: dt('multiselect.lg.padding.x');
    }

    .p-multiselect-lg .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.lg.font.size');
        width: dt('multiselect.lg.font.size');
        height: dt('multiselect.lg.font.size');
    }
`,Uu=f`
    .p-carousel {
        display: flex;
        flex-direction: column;
    }

    .p-carousel-content-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .p-carousel-content {
        display: flex;
        flex-direction: row;
        gap: dt('carousel.content.gap');
    }

    .p-carousel-content:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-carousel-item-list {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-item-list:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-prev-button,
    .p-carousel-next-button {
        align-self: center;
        flex-shrink: 0;
    }

    .p-carousel-indicator-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        padding: dt('carousel.indicator.list.padding');
        gap: dt('carousel.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-carousel-indicator-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('carousel.indicator.background');
        width: dt('carousel.indicator.width');
        height: dt('carousel.indicator.height');
        border: 0 none;
        transition:
            background dt('carousel.transition.duration'),
            color dt('carousel.transition.duration'),
            outline-color dt('carousel.transition.duration'),
            box-shadow dt('carousel.transition.duration');
        outline-color: transparent;
        border-radius: dt('carousel.indicator.border.radius');
        padding: 0;
        margin: 0;
        user-select: none;
        cursor: pointer;
    }

    .p-carousel-indicator-button:focus-visible {
        box-shadow: dt('carousel.indicator.focus.ring.shadow');
        outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');
        outline-offset: dt('carousel.indicator.focus.ring.offset');
    }

    .p-carousel-indicator-button:hover {
        background: dt('carousel.indicator.hover.background');
    }

    .p-carousel-indicator-active .p-carousel-indicator-button {
        background: dt('carousel.indicator.active.background');
    }

    .p-carousel-vertical .p-carousel-content {
        flex-direction: column;
    }

    .p-carousel-vertical .p-carousel-item-list {
        flex-direction: column;
        height: 100%;
    }

    .p-items-hidden .p-carousel-item {
        visibility: hidden;
    }

    .p-items-hidden .p-carousel-item.p-carousel-item-active {
        visibility: visible;
    }
`,Ju=f`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,Qu=f`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;export{fu as $,gl as A,cs as B,Pu as C,Eu as D,pr as E,Iu as F,Du as G,Nu as H,Fu as I,Lu as J,Ou as K,Wu as L,_u as M,zu as N,Bu as O,Su as P,Ru as Q,$u as R,Cu as S,wu as T,yu as U,xu as V,ku as W,vu as X,hu as Y,mu as Z,bu as _,Tl as a,Ml as a$,gu as a0,pu as a1,uu as a2,su as a3,lu as a4,cu as a5,au as a6,du as a7,tu as a8,eu as a9,Es as aA,Ds as aB,_s as aC,Ss as aD,Rs as aE,zs as aF,Bs as aG,$s as aH,ys as aI,ws as aJ,xs as aK,vs as aL,ks as aM,hs as aN,ms as aO,bs as aP,fs as aQ,gs as aR,ps as aS,Cs as aT,us as aU,ss as aV,ls as aW,as as aX,is as aY,ds as aZ,ns as a_,nu as aa,ru as ab,iu as ac,ou as ad,Qs as ae,Js as af,Us as ag,Zs as ah,qs as ai,Gs as aj,Ks as ak,Ms as al,Xs as am,Ys as an,Vs as ao,Hs as ap,As as aq,Ts as ar,js as as,Ps as at,Ns as au,Fs as av,Ls as aw,Is as ax,Os as ay,Ws as az,Fl as b,Kl as b0,gr as b1,Gl as b2,zl as b3,yo as b4,Sl as b5,El as b6,yl as b7,Ol as b8,Wl as b9,ul as bA,es as bB,vr as bC,ts as bD,ju as bE,Tu as bF,Au as bG,Hu as bH,Vu as bI,Yu as bJ,Xu as bK,Mu as bL,ll as bM,Ku as bN,Gu as bO,pl as bP,_l as bQ,qu as bR,Zu as bS,Uu as bT,bl as bU,Ju as bV,Qu as bW,Vl as bX,xo as ba,$l as bb,ql as bc,Zl as bd,Ul as be,Dl as bf,Bl as bg,Rl as bh,Nl as bi,kl as bj,Yl as bk,hl as bl,Jl as bm,Do as bn,xl as bo,Hl as bp,Ql as bq,os as br,Pl as bs,rs as bt,sl as bu,Oo as bv,jl as bw,wl as bx,vl as by,Ll as bz,Xl as c,N as d,b as e,to as f,R as g,Ro as h,Cl as i,sr as j,_ as k,$o as l,ko as m,xr as n,I as o,D as p,ml as q,O as r,Wo as s,ho as t,Al as u,z as v,lr as w,fl as x,mo as y,Il as z};
