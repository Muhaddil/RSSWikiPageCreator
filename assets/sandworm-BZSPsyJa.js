import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as n,w as c,g as u,n as i,d as b,x as w,z as p,c as y,u as h,a as S,b as l}from"./links-DvbpPHwL.js";import{a as m,b as x,c as E,d as P}from"./startup-B0d98G02.js";import"./gallery-UTuHIgsz.js";import"./runtime-dom.esm-bundler-D7aUqjIY.js";import"./creatureData-CvCsmM5P.js";import"./Explanation.vue_vue_type_script_setup_true_lang-CDMDNdc8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function d(){const a=n.planet,e=n.moon;if(!a)return void(n.name="");const t=e||a;c(t,"bodyName"),n.name=`Immortal Worm ${t}`}function g(){const n=(()=>{const n=u.input.autoSpawn;for(const a of Array.from(n))if(a.checked)return a.value;return""})(),a=`This creature ${n} automatically spawn on game reload`,e=u.output.autoSpawn;e.style.display=n?"":"none",n&&(e.innerText=a),i()}function f(){const a=b(),e="Royal Space Society Rare Fauna Album";c(`[[${e}]]${a}`,"addInfo"),i(),n.catalogue=e}function I(){return n.catalogue.split("|").at(-1)}function v(){w();const{name:a,wormclass:e}=n;return`${a}|${"Unstoppable Nematode"===e?"Unstopp. Nematode":e}`}function M(){const{wormmaxdepth:a,wormstomach:e}=n;return`(${a}ku)<br>${"Consumed waypoints"===e?"Stom.":"Stomach"}: ${e}`}function $(){return n.catalogue.split("|")[0]}const o={"Worm scan":"Escaneo de gusano","Moon Page":"Página de la Luna","Planet Page":"Página del Planeta","System Page":"Página del Sistema","Galaxy Map":"Mapa galáctico"};function N(){const a=["",o["Worm scan"],o["Moon Page"],o["Planet Page"],o["System Page"],o["Galaxy Map"]];if(!n.moon){const n=a.findIndex((n=>n.toLowerCase().includes("luna")));a.splice(n,1)}n.galleryArray=a}const k=[{element:["planetInput","moonInput"],func:()=>{d(),p(void 0,void 0,!0),m()}},{element:"autoSpawn",func:()=>g()},{element:"researchTeam",func:()=>f()},{element:"wormclassInput",func:()=>m()},{element:["wormmaxdepthInput","wormstomachInput"],func:()=>x()},{element:["discoveredInput","discoveredlinkInput"],func:()=>E()}],G={input:{autoSpawn:"autoSpawnInput"}};l.generateGalleryArray=()=>N(),l.albumLinkGen=()=>$(),l.albumOtherExternal=()=>M(),l.albumNameExternal=()=>v(),l.albumItemTypeExternal=()=>I(),y("galleryExplanationExternal","\nEl orden preferido de las imágenes es el siguiente:\n<div class='dialog-center'>\n<ol class='dialog-list'>\n<li>Escaneo de gusanos</li>\n<li>Página del planeta</li>\n<li>Página del sistema</li>\n<li>Mapa de galaxias</li>\n</ol>\n\t</div>"),h(G),S(k),d(),p(void 0,void 0,!0),f(),g(),P();
