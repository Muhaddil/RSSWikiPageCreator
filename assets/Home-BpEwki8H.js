import{Y as d,c as u,b as l,d as o,q as y,X as $,E as k,L as w,F as f,e as b,o as C,_ as P,Q as p,R as v,O as T,J as L}from"./@vue-a971EMsi.js";import{b as h}from"./main-CrxmQj1z.js";import"./primevue-DWrlVcq3.js";import"./@primevue-DHo6Bl5a.js";import"./@primeuix-DcC4a19q.js";import"./@vueuse-WjXJKVhx.js";import"./pinia-DP1x6KiP.js";import"./parse-mediawiki-template-BV5n0XSg.js";import"./vue-toastification-BPeKAQMF.js";const S=["href"],V=["src","alt"],M=d({__name:"CivImage",props:{link:{},imgAlt:{},img:{}},setup:t=>(t,e)=>(l(),u("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},[o("img",{src:t.img,alt:t.imgAlt},null,8,V)],8,S))}),B=h(M,[["__scopeId","data-v-4b9dc930"]]),E=["href","title"],I={key:0,class:"alt-text"},N=d({__name:"PageLink",props:{text:{},url:{},imgAlt:{},img:{},inactive:{type:Boolean}},setup(t){const e=t,s=y((()=>{const t=e.text.slice(0,1).toLowerCase();return`Crea ${"aeiou".includes(t)?"un":"una"} página de ${e.imgAlt}`}));return(t,e)=>(l(),u("a",{href:t.url,title:s.value,class:"button",style:$({backgroundImage:"url("+t.img+")"})},[k(f(t.text)+" ",1),t.img?w("",!0):(l(),u("span",I,f(t.imgAlt),1))],12,E))}}),R=h(N,[["__scopeId","data-v-09953143"]]),F={class:"page-options"},H=["onMouseenter","onMouseleave"],U={class:"images"},W=d({__name:"Home",setup(t){const e=[{text:"",url:"./base.html",img:"./assets/images/buttons/1_001.png",imgAlt:"Bases Censo"},{text:"",url:"./basecensusno.html",img:"./assets/images/buttons/1_002.png",imgAlt:"Bases Normales"},{text:"",url:"./racetrack.html",img:"./assets/images/buttons/1_003.png",imgAlt:"Circuitos"},{text:"",url:"./settlement.html",img:"./assets/images/buttons/1_004.png",imgAlt:"Asentamientos"},{text:"",url:"./fauna.html",img:"./assets/images/buttons/1_012_2.png",imgAlt:"Fauna"},{text:"",url:"./sandworm.html",img:"./assets/images/buttons/1_015.png",imgAlt:"Gusano de Arena"},{text:"",url:"./flora.html",img:"./assets/images/buttons/1_006.png",imgAlt:"Flora"},{text:"",url:"./starship.html",img:"./assets/images/buttons/1_013.png",imgAlt:"Naves"},{text:"",url:"./multitool.html",img:"./assets/images/buttons/1_007.png",imgAlt:"Multiherramientas"},{text:"",url:"./mineral.html",img:"./assets/images/buttons/1_005.png",imgAlt:"Mineral"},{text:"",url:"./derelict.html",img:"./assets/images/buttons/1_014.png",imgAlt:"Carguero Abandonado"},{text:"",url:"./biofrig.html",img:"./assets/images/buttons/1_009.png",imgAlt:"Fragatas Organicas"},{text:"",url:"./system.html",img:"./assets/images/buttons/1_008.png",imgAlt:"Sistemas"},{text:"",url:"./planet.html",img:"./assets/images/buttons/1_010.png",imgAlt:"Planetas"},{text:"",url:"./moon.html",img:"./assets/images/buttons/1_011.png",imgAlt:"Lunas"}];function s(t){let e=getComputedStyle(document.documentElement).getPropertyValue(t).trim();if(e.startsWith("url(")&&e.endsWith(")")){let t=e.slice(4,-1);return t.startsWith('"')&&t.endsWith('"')&&(t=t.slice(1,-1)),t}return e}const a=b([]),i=b({value:""});C((()=>{i.value=s("--hublogo"),a.push({link:"https://nomanssky.fandom.com/es/wiki/Royal_Space_Society",imgAlt:"Royal Space Society logo",img:i.value}),setInterval((()=>{const t=s("--hublogo");t!==i.value&&(i.value=t,a[0].img=i.value)}),10)}));const n=new Map;function m(t){const e=n.get(t);e&&clearTimeout(e);const s=setTimeout((()=>{r(t),n.delete(t)}),100);n.set(t,s)}function r(t,e=3){const s=new URL(t,window.location.href).href;fetch(s,{mode:"no-cors"}).then((t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`)})).catch((a=>{console.error(`[Prefetch] Error al cargar: ${s}`,a),e>0?(console.log(`[Prefetch] Reintentando (${e} intentos restantes)...`),setTimeout((()=>r(t,e-1)),1e3)):console.error(`[Prefetch] No se pudo cargar: ${s} después de varios intentos.`)}))}return P((()=>{n.forEach((t=>clearTimeout(t)))})),(t,s)=>(l(),u(p,null,[s[0]||(s[0]=o("p",{class:"subtitle is-4 has-text-centered"},"Elige qué página quieres crear:",-1)),o("div",F,[(l(),u(p,null,v(e,(t=>o("div",{onMouseenter:e=>m(t.url),onMouseleave:e=>function(t){const e=n.get(t);e&&(clearTimeout(e),n.delete(t))}(t.url)},[T(R,{url:t.url,text:t.text,img:t.img,imgAlt:t.imgAlt,disabled:t.inactive},null,8,["url","text","img","imgAlt","disabled"])],40,H))),64))]),s[1]||(s[1]=o("div",{class:"built-by is-4 has-text-centered"},[o("div",null,"Traído a usted por:")],-1)),o("div",U,[(l(!0),u(p,null,v(a,(t=>(l(),L(B,{img:t.img,"img-alt":t.imgAlt,link:t.link},null,8,["img","img-alt","link"])))),256))]),s[2]||(s[2]=o("div",{class:"images"},[o("b",null,"Royal Space Society")],-1))],64))}}),Z=h(W,[["__scopeId","data-v-874b89ac"]]);export{Z as default};
