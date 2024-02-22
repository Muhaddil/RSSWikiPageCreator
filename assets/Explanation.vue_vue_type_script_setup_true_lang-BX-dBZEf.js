import{cK as Ft,cL as G,b9 as de,ax as me,cM as H,ay as he,cN as ge,cO as ot,b5 as lt,c6 as be,T as _e,bA as Se,ai as ut,aO as W,cP as P,W as Kt,cQ as Y,cR as q,cS as b,cT as X,cU as F,cV as B,aU as ve,U as ft,aG as ye,J as Ut,c3 as Ce,bB as Ee,bV as Te,b7 as we,bM as _t,bJ as St,cW as Ae,aS as Me,cX as Pe,cY as Ne,aP as xe,cZ as Le,c_ as jt,aM as Re,aa as y,ab as $e,L as U,M as Z,R as _,_ as tt,X as Ve,Q as vt,P as yt,aj as Ie}from"./links-DwIVHru5.js";
/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Oe="http://www.w3.org/2000/svg",De="http://www.w3.org/1998/Math/MathML",M=typeof document<"u"?document:null,Ct=M&&M.createElement("template"),Be={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o="svg"===t?M.createElementNS(Oe,e):"mathml"===t?M.createElementNS(De,e):M.createElement(e,n?{is:n}:void 0);return"select"===e&&s&&null!=s.multiple&&o.setAttribute("multiple",s.multiple),o},createText:e=>M.createTextNode(e),createComment:e=>M.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>M.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const a=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),o!==r&&(o=o.nextSibling););else{Ct.innerHTML="svg"===s?`<svg>${e}</svg>`:"mathml"===s?`<math>${e}</math>`:e;const o=Ct.content;if("svg"===s||"mathml"===s){const e=o.firstChild;for(;e.firstChild;)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},w="transition",I="animation",$=Symbol("_vtc"),Wt=(e,{slots:t})=>de(me,qt(e),t);Wt.displayName="Transition";const Gt={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ke=Wt.props=H({},he,Gt),L=(e,t=[])=>{b(e)?e.forEach((e=>e(...t))):e&&e(...t)},Et=e=>!!e&&(b(e)?e.some((e=>e.length>1)):e.length>1);function qt(e){const t={};for(const n in e)n in Gt||(t[n]=e[n]);if(!1===e.css)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=i,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,m=He(o),h=m&&m[0],v=m&&m[1],{onBeforeEnter:g,onEnter:b,onEnterCancelled:y,onLeave:_,onLeaveCancelled:E,onBeforeAppear:S=g,onAppear:w=b,onAppearCancelled:k=y}=t,x=(e,t,n)=>{A(e,t?u:i),A(e,t?c:a),n&&n()},P=(e,t)=>{e._isLeaving=!1,A(e,p),A(e,f),A(e,d),t&&t()},T=e=>(t,n)=>{const o=e?w:b,a=()=>x(t,e,n);L(o,[t,a]),Tt((()=>{A(t,e?l:r),C(t,e?u:i),Et(o)||wt(t,s,h,a)}))};return H(t,{onBeforeEnter(e){L(g,[e]),C(e,r),C(e,a)},onBeforeAppear(e){L(S,[e]),C(e,l),C(e,c)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>P(e,t);C(e,p),Xt(),C(e,d),Tt((()=>{e._isLeaving&&(A(e,p),C(e,f),Et(_)||wt(e,s,v,n))})),L(_,[e,n])},onEnterCancelled(e){x(e,!1),L(y,[e])},onAppearCancelled(e){x(e,!0),L(k,[e])},onLeaveCancelled(e){P(e),L(E,[e])}})}function He(e){if(null==e)return null;if(ge(e))return[et(e.enter),et(e.leave)];{const t=et(e);return[t,t]}}function et(e){return ot(e)}function C(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[$]||(e[$]=new Set)).add(t)}function A(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[$];n&&(n.delete(t),n.size||(e[$]=void 0))}function Tt(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Fe=0;function wt(e,t,n,s){const o=e._endId=++Fe,r=()=>{o===e._endId&&s()};if(n)return setTimeout(r,n);const{type:a,timeout:i,propCount:l}=zt(e,t);if(!a)return s();const c=a+"end";let u=0;const p=()=>{e.removeEventListener(c,d),r()},d=t=>{t.target===e&&++u>=l&&p()};setTimeout((()=>{u<l&&p()}),i+1),e.addEventListener(c,d)}function zt(e,t){const n=window.getComputedStyle(e),s=e=>(n[e]||"").split(", "),o=s(`${w}Delay`),r=s(`${w}Duration`),a=At(o,r),i=s(`${I}Delay`),l=s(`${I}Duration`),c=At(i,l);let u=null,p=0,d=0;t===w?a>0&&(u=w,p=a,d=r.length):t===I?c>0&&(u=I,p=c,d=l.length):(p=Math.max(a,c),u=p>0?a>c?w:I:null,d=u?u===w?r.length:l.length:0);return{type:u,timeout:p,propCount:d,hasTransform:u===w&&/\b(transform|all)(,|$)/.test(s(`${w}Property`).toString())}}function At(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Mt(t)+Mt(e[n]))))}function Mt(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function Xt(){return document.body.offsetHeight}function Ke(e,t,n){const s=e[$];s&&(t=(t?[t,...s]:[...s]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const k=Symbol("_vod"),Ue={beforeMount(e,{value:t},{transition:n}){e[k]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):O(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t==!n&&(e.style.display===e[k]||!t)||(s?t?(s.beforeEnter(e),O(e,!0),s.enter(e)):s.leave(e,(()=>{O(e,!1)})):O(e,t))},beforeUnmount(e,{value:t}){O(e,t)}};function O(e,t){e.style.display=t?e[k]:"none"}function je(){Ue.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Jt=Symbol("");function Rn(e){const t=lt();if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>rt(e,n)))},s=()=>{const s=e(t.proxy);it(t.subTree,s),n(s)};be(s),_e((()=>{const e=new MutationObserver(s);e.observe(t.subTree.el.parentNode,{childList:!0}),Se((()=>e.disconnect()))}))}function it(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{it(n.activeBranch,t)}))}for(;e.component;)e=e.component.subTree;if(1&e.shapeFlag&&e.el)rt(e.el,t);else if(e.type===ft)e.children.forEach((e=>it(e,t)));else if(e.type===ye){let{el:n,anchor:s}=e;for(;n&&(rt(n,t),n!==s);)n=n.nextSibling}}function rt(e,t){if(1===e.nodeType){const n=e.style;let s="";for(const e in t)n.setProperty(`--${e}`,t[e]),s+=`--${e}: ${t[e]};`;n[Jt]=s}}const We=/(^|;)\s*display\s*:/;function Ge(e,t,n){const s=e.style,o=G(n),r=s.display;let a=!1;if(n&&!o){if(t&&!G(t))for(const e in t)null==n[e]&&at(s,e,"");for(const e in n)"display"===e&&(a=!0),at(s,e,n[e])}else if(o){if(t!==n){const e=s[Jt];e&&(n+=";"+e),s.cssText=n,a=We.test(n)}}else t&&e.removeAttribute("style");k in e&&(e[k]=a?s.display:"",s.display=r)}const Pt=/\s*!important$/;function at(e,t,n){if(b(n))n.forEach((n=>at(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=qe(e,t);Pt.test(n)?e.setProperty(P(s),n.replace(Pt,""),"important"):e[s]=n}}const Nt=["Webkit","Moz","ms"],nt={};function qe(e,t){const n=nt[t];if(n)return n;let s=W(t);if("filter"!==s&&s in e)return nt[t]=s;s=xe(s);for(let n=0;n<Nt.length;n++){const o=Nt[n]+s;if(o in e)return nt[t]=o}return t}const xt="http://www.w3.org/1999/xlink";function ze(e,t,n,s,o){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(xt,t.slice(6,t.length)):e.setAttributeNS(xt,t,n);else{const s=Le(t);null==n||s&&!jt(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Xe(e,t,n,s,o,r,a){if("innerHTML"===t||"textContent"===t)return s&&a(s,o,r),void(e[t]=n??"");const i=e.tagName;if("value"===t&&"PROGRESS"!==i&&!i.includes("-")){e._value=n;const s=n??"";return("OPTION"===i?e.getAttribute("value"):e.value)!==s&&(e.value=s),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const s=typeof e[t];"boolean"===s?n=jt(n):null==n&&"string"===s?(n="",l=!0):"number"===s&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function E(e,t,n,s){e.addEventListener(t,n,s)}function Je(e,t,n,s){e.removeEventListener(t,n,s)}const Lt=Symbol("_vei");function Qe(e,t,n,s,o=null){const r=e[Lt]||(e[Lt]={}),a=r[t];if(s&&a)a.value=s;else{const[n,i]=Ye(t);if(s){E(e,n,r[t]=en(s,o),i)}else a&&(Je(e,n,a,i),r[t]=void 0)}}const Rt=/(?:Once|Passive|Capture)$/;function Ye(e){let t;if(Rt.test(e)){let n;for(t={};n=e.match(Rt);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[":"===e[2]?e.slice(3):P(e.slice(2)),t]}let st=0;const Ze=Promise.resolve(),tn=()=>st||(Ze.then((()=>st=0)),st=Date.now());function en(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();Re(nn(e,n.value),t,5,[e])};return n.value=e,n.attached=tn(),n}function nn(e,t){if(b(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const $t=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,sn=(e,t,n,s,o,r,a,i,l)=>{const c="svg"===o;"class"===t?Ke(e,s,c):"style"===t?Ge(e,n,s):Pe(t)?Ne(t)||Qe(e,t,n,s,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):on(e,t,s,c))?Xe(e,t,s,r,a,i,l):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),ze(e,t,s,c))};function on(e,t,n,s){if(s)return!!("innerHTML"===t||"textContent"===t||t in e&&$t(t)&&Ft(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"form"===t||"list"===t&&"INPUT"===e.tagName||"type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!$t(t)||!G(n))&&t in e}/*! #__NO_SIDE_EFFECTS__ */function rn(e,t){const n=Ut(e);class s extends pt{constructor(e){super(n,e,t)}}return s.def=n,s}/*! #__NO_SIDE_EFFECTS__ */const $n=e=>rn(e,vn),an=typeof HTMLElement<"u"?HTMLElement:class{};class pt extends an{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),ut((()=>{this._connected||(kt(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})),this._ob.observe(this,{attributes:!0});const e=(e,t=!1)=>{const{props:n,styles:s}=e;let o;if(n&&!b(n))for(const e in n){const t=n[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=ot(this._props[e])),(o||(o=Object.create(null)))[W(e)]=!0)}this._numberProps=o,t&&this._resolveProps(e),this._applyStyles(s),this._update()},t=this._def.__asyncLoader;t?t().then((t=>e(t,!0))):e(this._def)}_resolveProps(e){const{props:t}=e,n=b(t)?t:Object.keys(t||{});for(const e of Object.keys(this))"_"!==e[0]&&n.includes(e)&&this._setProp(e,this[e],!0,!1);for(const e of n.map(W))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t)}})}_setAttr(e){let t=this.getAttribute(e);const n=W(e);this._numberProps&&this._numberProps[n]&&(t=ot(t)),this._setProp(n,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,s=!0){t!==this._props[e]&&(this._props[e]=t,s&&this._instance&&this._update(),n&&(!0===t?this.setAttribute(P(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(P(e),t+""):t||this.removeAttribute(P(e))))}_update(){kt(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Kt(this._def,H({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};e.emit=(e,...n)=>{t(e,n),P(e)!==e&&t(P(e),n)};let n=this;for(;n=n&&(n.parentNode||n.host);)if(n instanceof pt){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}function Vn(e="$style"){{const t=lt();if(!t)return Y;const n=t.type.__cssModules;if(!n)return Y;return n[e]||Y}}const Qt=new WeakMap,Yt=new WeakMap,z=Symbol("_moveCb"),Vt=Symbol("_enterCb"),Zt={name:"TransitionGroup",props:H({},ke,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=lt(),s=Ce();let o,r;return Ee((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!pn(o[0].el,n.vnode.el,t))return;o.forEach(ln),o.forEach(un);const s=o.filter(fn);Xt(),s.forEach((e=>{const n=e.el,s=n.style;C(n,t),s.transform=s.webkitTransform=s.transitionDuration="";const o=n[z]=e=>{e&&e.target!==n||(!e||/transform$/.test(e.propertyName))&&(n.removeEventListener("transitionend",o),n[z]=null,A(n,t))};n.addEventListener("transitionend",o)}))})),()=>{const a=Te(e),i=qt(a);let l=a.tag||ft;o=r,r=t.default?we(t.default()):[];for(let e=0;e<r.length;e++){const t=r[e];null!=t.key&&_t(t,St(t,i,s,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];_t(t,St(t,i,s,n)),Qt.set(t,t.el.getBoundingClientRect())}return Kt(l,null,r)}}},cn=e=>delete e.mode,In=Zt;function ln(e){const t=e.el;t[z]&&t[z](),t[Vt]&&t[Vt]()}function un(e){Yt.set(e,e.el.getBoundingClientRect())}function fn(e){const t=Qt.get(e),n=Yt.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${s}px,${o}px)`,t.transitionDuration="0s",e}}function pn(e,t,n){const s=e.cloneNode(),o=e[$];o&&o.forEach((e=>{e.split(/\s+/).forEach((e=>e&&s.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&s.classList.add(e))),s.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(s);const{hasTransform:a}=zt(s);return r.removeChild(s),a}const N=e=>{const t=e.props["onUpdate:modelValue"]||!1;return b(t)?e=>Ae(t,e):t};function dn(e){e.target.composing=!0}function It(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const h=Symbol("_assign"),ct={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[h]=N(o);const r=s||o.props&&"number"===o.props.type;E(e,t?"change":"input",(t=>{if(t.target.composing)return;let s=e.value;n&&(s=s.trim()),r&&(s=q(s)),e[h](s)})),n&&E(e,"change",(()=>{e.value=e.value.trim()})),t||(E(e,"compositionstart",dn),E(e,"compositionend",It),E(e,"change",It))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:o}},r){if(e[h]=N(r),e.composing)return;const a=t??"";(o||"number"===e.type?q(e.value):e.value)!==a&&(document.activeElement===e&&"range"!==e.type&&(n||s&&e.value.trim()===a)||(e.value=a))}},te={deep:!0,created(e,t,n){e[h]=N(n),E(e,"change",(()=>{const t=e._modelValue,n=V(e),s=e.checked,o=e[h];if(b(t)){const e=X(t,n),r=-1!==e;if(s&&!r)o(t.concat(n));else if(!s&&r){const n=[...t];n.splice(e,1),o(n)}}else if(F(t)){const e=new Set(t);s?e.add(n):e.delete(n),o(e)}else o(ne(e,s))}))},mounted:Ot,beforeUpdate(e,t,n){e[h]=N(n),Ot(e,t,n)}};function Ot(e,{value:t,oldValue:n},s){e._modelValue=t,b(t)?e.checked=X(t,s.props.value)>-1:F(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=B(t,ne(e,!0)))}const ee={created(e,{value:t},n){e.checked=B(t,n.props.value),e[h]=N(n),E(e,"change",(()=>{e[h](V(e))}))},beforeUpdate(e,{value:t,oldValue:n},s){e[h]=N(s),t!==n&&(e.checked=B(t,s.props.value))}},mn={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=F(t);E(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?q(V(e)):V(e)));e[h](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,ut((()=>{e._assigning=!1}))})),e[h]=N(s)},mounted(e,{value:t,oldValue:n,modifiers:{number:s}}){Dt(e,t,n,s)},beforeUpdate(e,t,n){e[h]=N(n)},updated(e,{value:t,oldValue:n,modifiers:{number:s}}){e._assigning||Dt(e,t,n,s)}};function Dt(e,t,n,s){const o=e.multiple,r=b(t);if(!o||r||F(t)){for(let n=0,a=e.options.length;n<a;n++){const a=e.options[n],i=V(a);if(o)if(r){const e=typeof i;a.selected="string"===e||"number"===e?t.includes(s?q(i):i):X(t,i)>-1}else a.selected=t.has(i);else if(B(V(a),t))return void(e.selectedIndex!==n&&(e.selectedIndex=n))}!o&&-1!==e.selectedIndex&&(e.selectedIndex=-1)}}function V(e){return"_value"in e?e._value:e.value}function ne(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const hn={created(e,t,n){j(e,t,n,null,"created")},mounted(e,t,n){j(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){j(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){j(e,t,n,s,"updated")}};function se(e,t){switch(e){case"SELECT":return mn;case"TEXTAREA":return ct;default:switch(t){case"checkbox":return te;case"radio":return ee;default:return ct}}}function j(e,t,n,s,o){const r=se(e.tagName,n.props&&n.props.type)[o];r&&r(e,t,n,s)}function gn(){ct.getSSRProps=({value:e})=>({value:e}),ee.getSSRProps=({value:e},t)=>{if(t.props&&B(t.props.value,e))return{checked:!0}},te.getSSRProps=({value:e},t)=>{if(b(e)){if(t.props&&X(e,t.props.value)>-1)return{checked:!0}}else if(F(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},hn.getSSRProps=(e,t)=>{if("string"!=typeof t.type)return;const n=se(t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0}}const bn=["ctrl","shift","alt","meta"],_n={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>bn.some((n=>e[`${n}Key`]&&!t.includes(n)))},On=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(n,...s)=>{for(let e=0;e<t.length;e++){const s=_n[t[e]];if(s&&s(n,t))return}return e(n,...s)})},Sn={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Dn=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=n=>{if(!("key"in n))return;const s=P(n.key);return t.some((e=>e===s||Sn[e]===s))?e(n):void 0})},oe=H({patchProp:sn},Be);let D,Bt=!1;function ie(){return D||(D=ve(oe))}function re(){return D=Bt?D:Me(oe),Bt=!0,D}const kt=(...e)=>{ie().render(...e)},vn=(...e)=>{re().hydrate(...e)},Bn=(...e)=>{const t=ie().createApp(...e),{mount:n}=t;return t.mount=e=>{const s=ce(e);if(!s)return;const o=t._component;!Ft(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const r=n(s,!1,ae(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t},kn=(...e)=>{const t=re().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=ce(e);if(t)return n(t,!0,ae(t))},t};function ae(e){return e instanceof SVGElement?"svg":"function"==typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ce(e){return G(e)?document.querySelector(e):e}let Ht=!1;const Hn=()=>{Ht||(Ht=!0,gn(),je())},Fn=(e,t)=>{const n=e.__vccOpts||e;for(const[e,s]of t)n[e]=s;return n},yn="/RSSWikiPageCreator/assets/icons/help.svg",Cn=["aria-disabled"],En=_("img",{src:yn,alt:"Help"},null,-1),Tn={class:"tooltiptext nms-font"},wn={id:"explanationHeading",class:"explanationHeading title is-4"},An={id:"explanationContent",class:"explanationContent nms-font"},Mn=["href"],Pn=["srcset"],Nn=["src"],xn=_("form",{method:"dialog"},[_("button",{class:"button",type:"submit",autofocus:""}," Cerrar ")],-1),Kn=Ut({__name:"Explanation",props:{img:{},open:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){var n;const s=e,o=y(null),r=y(null),a=y(null),i=(null==(n=s.img)?void 0:n.trim())??"",l=y("0 -100vh"),c=y(""),u=y(0),p=y(0),d=y(!1),f=y(!1),m=t;function h(){l.value="0 -100vh",c.value||(c.value=i),d.value||(d.value=!0),m("update:open",!0),ut((()=>{o.value&&(o.value.showModal(),l.value="0 0",o.value.scrollTo(0,0))}))}function v(){p.value=1,u.value=1}return $e((()=>{s.open&&h()})),(e,t)=>(U(),Z(ft,null,[_("button",{"aria-disabled":!e.$slots.content||void 0,class:"tooltip",onClick:t[0]||(t[0]=t=>e.$slots.content&&h())},[En,_("p",Tn,[tt(e.$slots,"default")])],8,Cn),(U(),Ve(Ie,{to:"body"},[d.value?(U(),Z("dialog",{key:0,style:vt({translate:l.value}),class:"explanation modal-content content",ref_key:"dialogElement",ref:o,onClose:t[3]||(t[3]=t=>e.$emit("update:open",!1))},[_("h2",wn,[tt(e.$slots,"heading")]),_("div",An,[tt(e.$slots,"content")]),c.value&&!f.value?(U(),Z("a",{key:0,href:`./assets/images/jpg/${c.value}.jpg`,class:"explanationLink loading",id:"explanationLink",ref_key:"linkElement",ref:a,rel:"noopener noreferrer",target:"_blank"},[_("picture",null,[_("source",{srcset:`./assets/images/webp/${c.value}.webp`,class:"explanationWebpImg",id:"explanationWebpImg",type:"image/webp"},null,8,Pn),_("img",{src:`./assets/images/jpg/${c.value}.jpg`,style:vt({opacity:u.value,"margin-block-start":p.value+"rem"}),alt:"Explainer Image",class:"explanationFallbackImg",id:"explanationFallbackImg",ref_key:"imgElement",ref:r,onLoadstart:t[1]||(t[1]=e=>f.value=!1),onLoad:v,onError:t[2]||(t[2]=e=>f.value=!0)},null,44,Nn)])],8,Mn)):yt("",!0),xn],36)):yt("",!0)]))],64))}});export{Wt as T,pt as V,Fn as _,Kn as a,ct as b,te as c,Bn as d,In as e,kn as f,rn as g,$n as h,vn as i,Hn as j,Rn as k,hn as l,ee as m,Ue as n,Dn as o,kt as r,Vn as u,mn as v,On as w};
