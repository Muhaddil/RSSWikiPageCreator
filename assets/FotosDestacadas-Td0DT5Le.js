import{_ as C}from"./RSS-Logo-DQ9FNx22.js";import{n as k,o as y,k as q,p as S,a as E}from"./primevue-DWrlVcq3.js";import{Y as A,o as L,r as c,q as V,c as p,b as r,O as d,K as s,d as a,x as i,F as l,L as D,Q as v,R as F,J as I,E as g,M}from"./@vue-a971EMsi.js";import{b as R}from"./main-BW8tBZc8.js";import"./@primevue-DHo6Bl5a.js";import"./@primeuix-DcC4a19q.js";import"./@vueuse-WjXJKVhx.js";import"./pinia-DP1x6KiP.js";import"./parse-mediawiki-template-BV5n0XSg.js";import"./vue-toastification-BPeKAQMF.js";const T={class:"space-page-container"},W={class:"base-card relative"},$={class:"image-container"},B=["src","alt","onClick"],G={class:"base-info"},N={class:"info-content"},z={class:"text-3xl font-bold mb-2"},O={class:"metadata-container space-y-3"},j={class:"location-tag"},H={class:"autor-tag"},K={key:0,class:"equipment-tag"},Q={class:"flex flex-wrap gap-3 my-4"},U={class:"technique-text"},J=["href"],X={class:"modal-content"},Y=["src"],Z=A({__name:"FotosDestacadas",setup(e){const t=new URLSearchParams(window.location.search);L((()=>{t.has("dev")||(window.location.href="/RSSWikiPageCreator/indextest.html")}));const o=c([{title:"Crash at the Sky",image:"assets/images/fotosdestacadas/Fk03.webp",location:"Galaxia Euclides - Sistema Desconocido",photographer:"Fran.Korvax",equipment:"",technique:"Exposición prolongada multiespectral",tags:["Desastres","Color cósmico","HDRI"]},{title:"Suns Over The Rings",image:"assets/images/fotosdestacadas/Moonw01.webp",location:"Galaxia Euclides - Sistema Desconocido",photographer:"MoonWatcher",equipment:"",technique:"Captura de triple espectro",tags:["Exoplanetas","Amaneceres","Geología alienígena"]},{title:"Cúmulo Estelar Omega Centauri",image:"assets/images/fotosdestacadas/cluster1.webp",location:"Vía Láctea - Brazo de Sagitario",photographer:"CosmoLens",equipment:"",technique:"Stacking de 500 exposiciones",tags:["Cúmulos estelares","Astrofotografía","Resolución extrema"]},{title:"Eclipse Cuántico en Persei",image:"assets/images/fotosdestacadas/eclipse1.webp",location:"Sistema Algol - Planeta Secundario",photographer:"QuantumSnap",equipment:"Hubble Mark VII",technique:"Captura de evento transitorio",tags:["Eclipses","Fenómenos raros","Dinámica orbital"]}]),n=c(!1),u=c(""),m=c(window.innerWidth),h=V((()=>m.value<768?1:2));return window.addEventListener("resize",(()=>{Math.abs(window.innerWidth-m.value)>50&&(m.value=window.innerWidth,setTimeout((()=>location.reload()),500))})),(e,t)=>(r(),p(v,null,[d(i(S),{class:"p-0 galactic-card"},{content:s((()=>[a("div",T,[t[8]||(t[8]=a("div",{class:"flex items-start justify-between mb-6 header-container"},[a("div",{class:"flex flex-col"},[a("h1",{class:"text-4xl font-bold galactic-title"},"GALERÍA INTERGALÁCTICA"),a("p",{class:"text-stellar-gray mt-2"}," Colección de las capturas más impresionantes del universo conocido ")]),a("div",{class:"rss-logo"},[a("img",{src:C,class:"logo-image animate-pulse",alt:"AstroCam Logo"})])],-1)),d(i(k),{value:o.value,numVisible:h.value,numScroll:1,circular:"",autoplayInterval:6e3,class:"galactic-carousel"},{item:s((e=>[a("div",W,[a("div",$,[a("img",{src:e.data.image,alt:e.data.title,class:"galactic-image object-cover w-full h-full",onClick:a=>(a=>{m.value<=768?window.open(a,"_blank"):(u.value=a,n.value=!0)})(e.data.image)},null,8,B)]),a("div",G,[a("div",N,[a("h2",z,l(e.data.title),1),a("div",O,[a("div",j,[t[2]||(t[2]=a("i",{class:"pi pi-satellite mr-2"},null,-1)),a("span",null,l(e.data.location),1)]),a("div",H,[t[3]||(t[3]=a("i",{class:"pi pi-camera mr-2"},null,-1)),a("span",null,l(e.data.photographer),1)]),e.data.equipment?(r(),p("div",K,[t[4]||(t[4]=a("i",{class:"pi pi-microchip mr-2"},null,-1)),a("span",null,l(e.data.equipment),1)])):D("",!0),a("div",Q,[(r(!0),p(v,null,F(e.data.tags,((a,e)=>(r(),I(i(y),{key:e,value:a,icon:"pi pi-tag",class:"tag-style"},null,8,["value"])))),128))]),a("p",U,[t[5]||(t[5]=a("span",{class:"font-bold"},"Técnica:",-1)),g(" "+l(e.data.technique),1)])])])])])])),_:1},8,["value","numVisible"]),d(i(q),{class:"galactic-panel mt-6"},{header:s((()=>t[6]||(t[6]=[a("h2",{class:"text-2xl font-bold",style:{background:"linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","text-shadow":"0 0 15px rgba(103, 232, 249, 0.3)"}}," Certificación Astrofotográfica ",-1)]))),default:s((()=>[a("p",{class:M(["m-0 text-stellar-gray w-full",{"keep-linebreaks":m.value>=768}])},t[7]||(t[7]=[g(" Las imágenes aquí exhibidas han sido validadas por el Colegio Intergaláctico de Fotografía Cósmica bajo los criterios de: "),a("br",null,null,-1),a("span",{class:"text-cyan-300 font-semibold"},[a("b",null,"Composición estética, Valor científico y Dominio técnico.")],-1),a("br",null,null,-1),a("br",null,null,-1),g(" Actualización del catálogo: 2567.8.1 (Ciclo Fotónico) ")]),2)])),_:1})])])),_:1}),d(i(E),{visible:n.value,"onUpdate:visible":t[1]||(t[1]=a=>n.value=a),modal:"",closable:!1,class:"custom-modal",style:{width:"90vw",height:"90vh"}},{header:s((()=>[a("button",{type:"button",class:"close-modal",onClick:t[0]||(t[0]=a=>n.value=!1)},"X")])),default:s((()=>[a("a",{href:u.value,target:"_blank"},[a("div",X,[a("img",{src:u.value,class:"modal-image"},null,8,Y)])],8,J)])),_:1},8,["visible"])],64))}}),ua=R(Z,[["__scopeId","data-v-991fe510"]]);export{ua as default};
