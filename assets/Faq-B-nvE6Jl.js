import{d as oe,r as N,c as ne,Z as te,x as se,i as ae,q as X,ap as re,p as ie,a as P,o as k,b as g,z as de,aZ as ce,e as Q,t as I,F as le,W as ue}from"./main-SvL3tlZy.js";const Z=new Set,m=new WeakMap,M=new WeakMap,q=new WeakMap,j=new WeakMap,pe=new WeakMap,C=new WeakMap,B=new WeakMap,L=new WeakSet;let y,$=0,H=0;const v="__aa_tgt",R="__aa_del",O="__aa_new",me=e=>{const a=ve(e);a&&a.forEach((e=>ye(e)))},fe=e=>{e.forEach((e=>{e.target===y&&he(),m.has(e.target)&&S(e.target)}))};function ge(e){const a=j.get(e);null==a||a.disconnect();let o=m.get(e),n=0;o||(o=T(e),m.set(e,o));const{offsetWidth:t,offsetHeight:s}=y,r=[o.top-5,t-(o.left+5+o.width),s-(o.top+5+o.height),o.left-5].map((e=>-1*Math.floor(e)+"px")).join(" "),i=new IntersectionObserver((()=>{++n>1&&S(e)}),{root:y,threshold:1,rootMargin:r});i.observe(e),j.set(e,i)}function S(e){clearTimeout(B.get(e));const a=z(e),o=x(a)?500:a.duration;B.set(e,setTimeout((async()=>{const a=q.get(e);try{await(null==a?void 0:a.finished),m.set(e,T(e)),ge(e)}catch{}}),o))}function he(){clearTimeout(B.get(y)),B.set(y,setTimeout((()=>{Z.forEach((e=>ee(e,(e=>G((()=>S(e)))))))}),100))}function be(e){setTimeout((()=>{pe.set(e,setInterval((()=>G(S.bind(null,e))),2e3))}),Math.round(2e3*Math.random()))}function G(e){"function"==typeof requestIdleCallback?requestIdleCallback((()=>e())):requestAnimationFrame((()=>e()))}let A,E;const we=typeof window<"u"&&"ResizeObserver"in window;function ve(e){return!e.reduce(((e,a)=>[...e,...Array.from(a.addedNodes),...Array.from(a.removedNodes)]),[]).every((e=>"#comment"===e.nodeName))&&e.reduce(((e,a)=>{if(!1===e)return!1;if(a.target instanceof Element){if(W(a.target),!e.has(a.target)){e.add(a.target);for(let o=0;o<a.target.children.length;o++){const n=a.target.children.item(o);if(n){if(R in n)return!1;W(a.target,n),e.add(n)}}}if(a.removedNodes.length)for(let o=0;o<a.removedNodes.length;o++){const n=a.removedNodes[o];if(R in n)return!1;n instanceof Element&&(e.add(n),W(a.target,n),M.set(n,[a.previousSibling,a.nextSibling]))}}return e}),new Set)}function W(e,a){a||v in e?a&&!(v in a)&&Object.defineProperty(a,v,{value:e}):Object.defineProperty(e,v,{value:e})}function ye(e){var a;const o=e.isConnected,n=m.has(e);o&&M.has(e)&&M.delete(e),q.has(e)&&(null===(a=q.get(e))||void 0===a||a.cancel()),O in e?V(e):n&&o?Se(e):n&&!o?Ee(e):V(e)}function w(e){return Number(e.replace(/[^0-9.\-]/g,""))}function qe(e){let a=e.parentElement;for(;a;){if(a.scrollLeft||a.scrollTop)return{x:a.scrollLeft,y:a.scrollTop};a=a.parentElement}return{x:0,y:0}}function T(e){const a=e.getBoundingClientRect(),{x:o,y:n}=qe(e);return{top:a.top+n,left:a.left+o,width:a.width,height:a.height}}function J(e,a,o){let n=a.width,t=a.height,s=o.width,r=o.height;const i=getComputedStyle(e);if("content-box"===i.getPropertyValue("box-sizing")){const e=w(i.paddingTop)+w(i.paddingBottom)+w(i.borderTopWidth)+w(i.borderBottomWidth),a=w(i.paddingLeft)+w(i.paddingRight)+w(i.borderRightWidth)+w(i.borderLeftWidth);n-=a,s-=a,t-=e,r-=e}return[n,s,t,r].map(Math.round)}function z(e){return v in e&&C.has(e[v])?C.get(e[v]):{duration:250,easing:"ease-in-out"}}function K(e){if(v in e)return e[v]}function Y(e){const a=K(e);return!!a&&L.has(a)}function ee(e,...a){a.forEach((a=>a(e,C.has(e))));for(let o=0;o<e.children.length;o++){const n=e.children.item(o);n&&a.forEach((e=>e(n,C.has(n))))}}function _(e){return Array.isArray(e)?e:[e]}function x(e){return"function"==typeof e}function Se(e){const a=m.get(e),o=T(e);if(!Y(e))return m.set(e,o);let n;if(!a)return;const t=z(e);if("function"!=typeof t){const s=a.left-o.left,r=a.top-o.top,[i,l,d,c]=J(e,a,o),u={transform:`translate(${s}px, ${r}px)`},m={transform:"translate(0, 0)"};i!==l&&(u.width=`${i}px`,m.width=`${l}px`),d!==c&&(u.height=`${d}px`,m.height=`${c}px`),n=e.animate([u,m],{duration:t.duration,easing:t.easing})}else{const[s]=_(t(e,"remain",a,o));n=new Animation(s),n.play()}q.set(e,n),m.set(e,o),n.addEventListener("finish",S.bind(null,e))}function V(e){O in e&&delete e[O];const a=T(e);m.set(e,a);const o=z(e);if(!Y(e))return;let n;if("function"!=typeof o)n=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*o.duration,easing:"ease-in"});else{const[t]=_(o(e,"add",a));n=new Animation(t),n.play()}q.set(e,n),n.addEventListener("finish",S.bind(null,e))}function U(e,a){var o;e.remove(),m.delete(e),M.delete(e),q.delete(e),null===(o=j.get(e))||void 0===o||o.disconnect(),setTimeout((()=>{if(R in e&&delete e[R],Object.defineProperty(e,O,{value:!0,configurable:!0}),a&&e instanceof HTMLElement)for(const o in a)e.style[o]=""}),0)}function Ee(e){var a;if(!M.has(e)||!m.has(e))return;const[o,n]=M.get(e);Object.defineProperty(e,R,{value:!0,configurable:!0});const t=window.scrollX,s=window.scrollY;if(n&&n.parentNode&&n.parentNode instanceof Element?n.parentNode.insertBefore(e,n):o&&o.parentNode?o.parentNode.appendChild(e):null===(a=K(e))||void 0===a||a.appendChild(e),!Y(e))return U(e);const[r,i,l,d]=Ce(e),c=z(e),u=m.get(e);(t!==$||s!==H)&&Me(e,t,s,c);let p,g={position:"absolute",top:`${r}px`,left:`${i}px`,width:`${l}px`,height:`${d}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(x(c)){const[a,o]=_(c(e,"remove",u));!1!==(null==o?void 0:o.styleReset)&&(g=(null==o?void 0:o.styleReset)||g,Object.assign(e.style,g)),p=new Animation(a),p.play()}else Object.assign(e.style,g),p=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"});q.set(e,p),p.addEventListener("finish",U.bind(null,e,g))}function Me(e,a,o,n){const t=$-a,s=H-o,r=document.documentElement.style.scrollBehavior;if("smooth"===getComputedStyle(y).scrollBehavior&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+t,window.scrollY+s),!e.parentElement)return;const i=e.parentElement;let l=i.clientHeight,d=i.clientWidth;const c=performance.now();!function e(){requestAnimationFrame((()=>{if(!x(n)){const a=l-i.clientHeight,o=d-i.clientWidth;c+n.duration>performance.now()?(window.scrollTo({left:window.scrollX-o,top:window.scrollY-a}),l=i.clientHeight,d=i.clientWidth,e()):document.documentElement.style.scrollBehavior=r}}))}()}function Ce(e){const a=m.get(e),[o,,n]=J(e,a,T(e));let t=e.parentElement;for(;t&&("static"===getComputedStyle(t).position||t instanceof HTMLBodyElement);)t=t.parentElement;t||(t=document.body);const s=getComputedStyle(t),r=m.get(t)||T(t);return[Math.round(a.top-r.top)-w(s.borderTopWidth),Math.round(a.left-r.left)-w(s.borderLeftWidth),o,n]}function Te(e,a={}){return A&&E&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!x(a)&&!a.disrespectUserMotionPreference||(L.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),ee(e,S,be,(e=>null==E?void 0:E.observe(e))),x(a)?C.set(e,a):C.set(e,{duration:250,easing:"ease-in-out",...a}),A.observe(e,{childList:!0}),Z.add(e))),Object.freeze({parent:e,enable:()=>{L.add(e)},disable:()=>{L.delete(e)},isEnabled:()=>L.has(e)})}we&&(y=document.documentElement,A=new MutationObserver(me),E=new ResizeObserver(fe),window.addEventListener("scroll",(()=>{H=window.scrollY,$=window.scrollX})),E.observe(y));const Ne=oe({name:"Faq",setup(){const e=N([{id:1,question:"¿Qué es la RSS?",answer:"La RSS es un grupo de jugadores de NMS de habla hispana (aunque también se aceptan miembros de otros idiomas) que tiene una página en la wikipedia de NMS donde se registran los descubrimientos de sus miembros."},{id:2,question:"¿Cómo funciona la wiki de NMS?",answer:"La wiki de NMS tiene administradores que han definido una serie de normas para añadir páginas. Estas normas son de cumplimiento obligatorio. Los administradores pueden modificar o eliminar páginas que no respeten las reglas. Para registrar páginas en la wiki, se debe crear una civilización o una compañía dentro del espacio civilizado."},{id:3,question:"¿Cómo puedo ser miembro de la RSS?",answer:"Para ser miembro de la RSS debes registrarte como usuario de Fandom y darte de alta en el Censo de Miembros de la RSS."},{id:4,question:"¿Cómo puedo colaborar con la RSS?",answer:"Puedes colaborar añadiendo páginas a la wiki con tus descubrimientos, tales como sistemas estelares, planetas, fauna, flora, naves, cargueros o multiherramientas."},{id:5,question:"¿Hay algún requisito para nombrar los descubrimientos?",answer:"Para los sistemas estelares, se recomienda añadir 'RSS' al inicio del nombre del sistema. Para los planetas es opcional, pero agradecemos que también se añada."},{id:6,question:"¿Qué datos e imágenes necesito para dar de alta una página en la wiki?",answer:"En la herramienta mencionada hay una ayuda para cada campo que necesitas rellenar. Si tienes alguna dificultad, puedes solicitar asistencia en Discord."},{id:7,question:"¿Qué necesito para dar de alta mi base en el Censo de Bases de la RSS?",answer:"La base debe estar ubicada en uno de los sistemas registrados por la RSS. Puedes consultar las regiones registradas por la RSS."},{id:8,question:"¿Qué tipo de base puedo dar de alta en el Censo de Bases de la RSS?",answer:"Cualquier base puede registrarse, pero recomendamos que sea tu base principal o una base bien desarrollada. Es posible cambiar la base registrada en cualquier momento."},{id:9,question:"¿Qué tengo que hacer para mantener mi base en el Censo de Bases de la RSS?",answer:"El censo se actualiza anualmente. Debes renovar tu registro cada año, preferentemente en enero. Para renovar, simplemente edita la página de tu base y cambia el campo 'censusrenewal' al año actual (por ejemplo: 'censusrenewal = 2024')."},{id:10,question:"¿Por qué no aparezco en el Censo de Miembros de la RSS si tengo mi base registrada en el Censo de Bases?",answer:"Los administradores de la wiki decidieron que los jugadores con una base registrada en el Censo de Bases no pueden aparecer en el Censo de Miembros, al igual que solo se puede tener una base por jugador en el censo de bases. Cabe destacar que el censo de bases tiene una mayor importancia para la RSS que el censo de miembros. Además, este registro conlleva el compromiso de actualizar la entrada en el censo de la base cada año."},{id:11,question:"¿Puedo registrar sistemas, planetas o bases fuera de las regiones registradas por la RSS?",answer:"No es recomendable registrar elementos fuera de las regiones registradas por la RSS para evitar problemas con los administradores de la wiki."},{id:12,question:"¿Por qué me da error de Inline Templates?",answer:'Eso es porque usas un editor que se carga el formato que crea esta web, cambia el editor a editor clásico aquí: <a href="https://nomanssky.fandom.com/wiki/Special:Preferences#mw-prefsection-editing" target="_blank">Editor clásico</a>'}]),a=N(""),o=N(""),n=N(!1),t=ne((()=>e.value.filter((e=>e.question.toLowerCase().includes(a.value.toLowerCase())||e.answer.toLowerCase().includes(a.value.toLowerCase()))))),s=async()=>{await re(),d.value.forEach((e=>{e&&Te(e)}))};te(s),se(t,s);const r=["¿Has probado a buscar algo que tenga sentido?","¿Seguro que escribiste bien? Yo lo encontré a la primera.","Bueno, si no está aquí, será que no era tan importante.","¿No será que estás buscando en el lugar equivocado?","¿Seguro que es algo que existe? Porque yo no veo nada.","A ver si pruebas con otra búsqueda, porque yo lo encontraría en 5 segundos.","No te rindas, pero... ¿estás seguro de que lo escribiste correctamente?","Hmm, eso no parece estar por aquí. ¿Lo estás buscando bien?","Parece que el universo no tiene esa respuesta... ¿Estás seguro de lo que buscas?","¿Revisaste si la ortografía está bien? A veces los detalles importan.","No encuentro nada con eso... Tal vez es una búsqueda demasiado avanzada para mí.","¡Vaya! ¿Estás seguro de que existe algo con esa descripción?","¿Seguro que esa es la pregunta correcta? Yo no lo encuentro por aquí.","A lo mejor intentas buscar en otro lugar... ¡Yo no veo nada!","¿Lo escribiste bien? A veces con una sola letra cambia todo.","Parece que esa información no está aquí, pero ¿has probado con otro término?","¿Has probado a hacer una búsqueda más precisa? Esto se está volviendo difícil.","Nada encontrado... tal vez estamos buscando en el lugar equivocado.","Eso no lo tengo, ¿pero seguro que es algo relevante?","¿Has probado con otro término? Esto se está poniendo interesante.","¿Estás buscando algo que realmente exista? Porque no lo encuentro por aquí.","No sé si me estoy perdiendo algo, pero no encuentro nada relacionado.","Hmm... eso no me suena. Tal vez necesites un mejor término de búsqueda.","Eso de buscar en internet no es tan difícil, ¿eh? Solo tienes que saber cómo hacerlo.","Es que, si supieras cómo funciona esto, lo encontrarías enseguida.","Te lo dije, no hay nada ahí, es obvio. Mejor prueba en otro sitio.","Yo lo busqué y lo encontré en 3 segundos. ¿No estarás escribiendo mal?","Si no encuentras nada, tal vez es porque no estás buscando bien.","Es que, con lo fácil que es buscar esto, no entiendo cómo no lo encuentras.","No sé, yo no tendría muchas esperanzas con eso. Mejor busca algo más sencillo.","Yo me acuerdo que hace años encontré eso sin problema, pero seguro que tú lo complicaste.","La respuesta está ahí, pero claro, si no sabes cómo buscar, es normal que no la encuentres.","Tienes que poner más atención, porque eso que buscas es fácil de encontrar, no sé cómo no lo ves.","Te lo estoy diciendo, eso no existe o ya no está. Mejor busca otra cosa.","Pues si yo lo encontré hace poco, y ahora tú no. ¿Qué hiciste mal?","Yo ni busqué y ya sé lo que hay, ¿cómo no lo encontraste tú?","Claro, la respuesta estaba frente a tus narices, pero ¿quién sabe buscar, no?","Es que no lo entiendo, a mí no me costó nada encontrarlo. ¿Seguiste todos los pasos?"];ae((()=>{""===a.value?(o.value="",n.value=!1):0!==t.value.length||n.value?t.value.length>0&&(o.value="",n.value=!1):(o.value=(()=>{const e=Math.floor(Math.random()*r.length);return r[e]})(),n.value=!0)}));const i=X({}),l=X({}),d=N([]);return{searchTerm:a,filteredFaqs:t,randomMessage:o,onToggle:e=>{const a=e.currentTarget,o=Number(a.dataset.id),n=a.querySelector("p");a.open&&n?i[o]={height:`${n.scrollHeight}px`,opacity:"1"}:i[o]={height:"0",opacity:"0"}},getStyle:e=>i[e]||{height:"0",opacity:"0"},showStates:l,toggleShow:e=>{l[e]=!l[e]},dropdowns:d}}}),Pe={class:"search-container"},ke={id:"faqList"},Le={key:0,class:"no-results-message"},Re=["onClick"],xe=["innerHTML"];function Be(e,a,o,n,t,s){return k(),P("div",null,[g("div",Pe,[de(g("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=a=>e.searchTerm=a),placeholder:"Buscar preguntas..."},null,512),[[ce,e.searchTerm]]),a[1]||(a[1]=g("i",{class:"search-icon"},"🔍",-1))]),g("div",ke,[0===e.filteredFaqs.length&&e.randomMessage?(k(),P("p",Le,I(e.randomMessage),1)):Q("",!0),(k(!0),P(le,null,ue(e.filteredFaqs,(o=>(k(),P("div",{key:o.id,class:"box faq-item"},[g("div",{ref_for:!0,ref:"dropdowns",class:"dropdown"},[g("strong",{class:"dropdown-label",onClick:a=>e.toggleShow(o.id)},I(o.question),9,Re),a[2]||(a[2]=g("br",null,null,-1)),e.showStates[o.id]?(k(),P("p",{key:0,class:"dropdown-content",innerHTML:o.answer},null,8,xe)):Q("",!0)],512)])))),128))]),a[3]||(a[3]=g("footer",null,[g("h4",null,[g("p",null,[g("i",null,"Creado y mantenido por MoonWatcher75")])])],-1))])}const ze=ie(Ne,[["render",Be]]);export{ze as default};
