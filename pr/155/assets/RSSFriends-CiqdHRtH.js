import{l as I,r as G,s as L,b as T,p as N}from"./primevue-BrRcJYPX.js";import{_ as $}from"./FileUploadNotice.vue_vue_type_script_setup_true_lang-BRGDaEtm.js";import{_ as y,g as B,G as M,b as K}from"./main-YAVZ2Xd3.js";import{h as q}from"./html2canvas-pro-96BRS6AZ.js";import{r as J}from"./inputValidation-BfiqxGfe.js";import{d as O}from"./debounce-B7UkYTDg.js";import{Y as Z,r as t,o as Q,_ as Y,v as H,c as p,b as n,J as g,L as i,K as f,d as a,O as r,x as c,M as b,F as v,E as X,Q as ee,n as ae}from"./@vue-BVuy3UwB.js";import{w as le}from"./@vueuse-mn-U9ctI.js";import"./@primevue-CYWj3w9m.js";import"./@primeuix-B0kugbDQ.js";import"./pinia-CGu4iIBQ.js";import"./parse-mediawiki-template--QNsUU1W.js";import"./vue-toastification-Cd_xC2xJ.js";const se="/RSSWikiPageCreator/assets/images/friends/marco.png",oe={class:"upload-section"},te={class:"columns is-mobile mb-0"},ne={class:"column is-flex"},ie={class:"columns is-mobile mb-0"},re={class:"column is-flex"},de={class:"columns is-mobile mb-0"},ue={class:"column is-flex"},ce={ref:"cardElement",class:"rss-card-wrapper"},me=["src"],ve={class:"card-image-container"},pe=["src"],ge={class:"card-race-icon-field"},fe=["src"],be={class:"download-section"},xe=Z({__name:"RSSFriends",setup(e){const l=t(""),s=t(""),o=t(""),u=t(""),d=t(""),m=t(""),h=t(""),x=t(""),k=t(""),w=t(1),S=t(!1),V=t([{label:"Korvax",value:"Korvax",icon:"/RSSWikiPageCreator/assets/images/friends/holo-korvax.png"},{label:"Gek",value:"Gek",icon:"/RSSWikiPageCreator/assets/images/friends/holo-gek.png"},{label:"Vy'keen",value:"Vy'keen",icon:"/RSSWikiPageCreator/assets/images/friends/holo-vykeen.png"},{label:"Anomalía",value:"Anomalía",icon:"/RSSWikiPageCreator/assets/images/friends/holo-anomalia.png"},{label:"Autofago",value:"Autofago",icon:"/RSSWikiPageCreator/assets/images/friends/holo-autofago.png"},{label:"Viajero",value:"Viajero",icon:"/RSSWikiPageCreator/assets/images/friends/holo-viajero.png"}]),C=e=>{const a=e.files[0];if(a){const e=new FileReader;e.onload=e=>{var a;d.value=null==(a=e.target)?void 0:a.result},e.readAsDataURL(a)}},R=t(window.innerWidth);let U=null;const j=()=>{const e=window.innerWidth;Math.abs(e-R.value)>50&&(U&&clearTimeout(U),U=setTimeout((()=>{R.value=e}),500))};Q((()=>{window.addEventListener("resize",j)})),Y((()=>{window.removeEventListener("resize",j)}));const _=()=>{const e=V.value.find((e=>e.value===s.value));o.value=e?e.icon:""},W=async()=>{const e=document.querySelector(".rss-card-wrapper");if(!e)return;await ae();const a=e.getBoundingClientRect();S.value=!0;try{requestAnimationFrame((async()=>{try{const l=(await q(e,{scale:w.value||1,backgroundColor:null,useCORS:!0,width:a.width,height:a.height,logging:!1})).toDataURL("image/png");A(l)}catch(e){console.error("Error al generar la imagen:",e)}finally{S.value=!1}}))}catch(e){console.error("Error al descargar la imagen:",e),S.value=!1}},A=e=>{const a=document.createElement("a");a.href=e,a.download="tarjeta.png",document.body.appendChild(a),a.click(),document.body.removeChild(a)};H((()=>u.value=u.value.toUpperCase()));const E=t(!0);return le(u,(e=>{const a=new RegExp(/(?:[0-9A-Za-z]{4}-){2}[0-9A-Za-z]{5}/),l=J(e,a);E.value=!e||l}),{debounce:O}),(e,t)=>(n(),p(ee,null,[R.value>768?(n(),g(c(N),{key:0,class:"rss-card-container"},{content:f((()=>[a("div",oe,[a("div",te,[t[8]||(t[8]=a("div",{class:"column is-flex is-align-items-center"},[a("label",null,"¿En blanco?")],-1)),a("div",ne,[r(c(I),{modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=e=>m.value=e),"true-value":"true","false-value":"",class:"input-text",style:{width:"185px",left:"-12px"},binary:""},null,8,["modelValue"])])]),a("div",ie,[t[9]||(t[9]=a("div",{class:"column is-flex is-align-items-center"},[a("label",null,"¿Usar ubicación personalizada?")],-1)),a("div",re,[r(c(I),{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=e=>k.value=e),"true-value":"true","false-value":"",class:"input-text",style:{width:"185px",left:"-12px"},binary:""},null,8,["modelValue"])])]),r(y,{"model-value":w.value.toString(),"onUpdate:modelValue":t[2]||(t[2]=e=>w.value=Math.min(Number(e)||1,10)),placeholder:"Número",class:"input-text",label:"Escala de salida de la foto",tooltip:"La escala máxima es 10"},null,8,["model-value"]),r(y,{modelValue:l.value,"onUpdate:modelValue":t[3]||(t[3]=e=>l.value=e),placeholder:"Nombre",class:"input-text",label:"Nombre del jugador"},null,8,["modelValue"]),a("div",de,[t[10]||(t[10]=a("div",{class:"column is-flex is-align-items-center"},[a("label",null,"Raza del Jugador")],-1)),a("div",ue,[r(B,{modelValue:s.value,"onUpdate:modelValue":[t[4]||(t[4]=e=>s.value=e),_],options:V.value.map((e=>e.value)),class:"input-text",style:{width:"185px",left:"-12px"}},null,8,["modelValue","options"])])]),k.value?(n(),g(M,{key:0,modelValue:h.value,"onUpdate:modelValue":t[5]||(t[5]=e=>h.value=e)},null,8,["modelValue"])):i("",!0),k.value?(n(),g(y,{key:1,modelValue:x.value,"onUpdate:modelValue":t[6]||(t[6]=e=>x.value=e),placeholder:"Ubicación",class:"input-text",label:"Ubicación"},null,8,["modelValue"])):i("",!0),r(y,{modelValue:u.value,"onUpdate:modelValue":t[7]||(t[7]=e=>u.value=e),placeholder:"Código de amigo",class:"input-text",label:"Código de amigo",invalid:!E.value,"error-message":"Formato de código de amigo incorrecto"},null,8,["modelValue","invalid"]),t[11]||(t[11]=a("br",null,null,-1)),r(c(G),{mode:"basic",name:"navImage",auto:!0,customUpload:!0,onUploader:C,accept:"image/*",chooseLabel:"Subir imagen"},{content:f((()=>[r($)])),_:1})]),t[15]||(t[15]=a("br",null,null,-1)),a("div",ce,[a("img",{class:"rss-card-background",src:k.value?m.value?"/RSSWikiPageCreator/assets/images/friends/friend-white-noglyphs.png":"/RSSWikiPageCreator/assets/images/friends/friend-noglyphs.png":m.value?"/RSSWikiPageCreator/assets/images/friends/friend-white.png":"/RSSWikiPageCreator/assets/images/friends/friend.png",alt:"Tarjeta RSS"},null,8,me),a("div",ve,[d.value?(n(),p("img",{key:0,src:d.value,alt:"Imagen subida",class:"uploaded-image"},null,8,pe)):i("",!0)]),t[12]||(t[12]=a("div",{class:"card-name-title"}," Nombre ",-1)),t[13]||(t[13]=a("div",{class:"card-race-title"}," Raza ",-1)),t[14]||(t[14]=a("img",{class:"card-image-marco",src:se,alt:"Tarjeta RSS"},null,-1)),a("div",{class:b(["card-name-field",{"text-black":m.value,"text-white":!m.value}])},v(l.value),3),a("div",{class:b(["card-race-field",{"text-black":m.value,"text-white":!m.value}])},v(s.value),3),k.value?(n(),p("div",{key:0,class:b(["card-glyphs-field",{"text-black":m.value,"text-white":!m.value}])},v(h.value),3)):i("",!0),k.value?(n(),p("div",{key:1,class:b(["card-location-field",{"text-black":m.value,"text-white":!m.value}])},v(x.value),3)):i("",!0),a("div",{class:b(["card-friend-code-field",{"text-black":m.value,"text-white":!m.value}])},v(u.value),3),a("div",ge,[o.value?(n(),p("img",{key:0,src:o.value,alt:"Icono de raza",class:"race-icon"},null,8,fe)):i("",!0)])],512),t[16]||(t[16]=a("br",null,null,-1)),a("div",be,[r(c(L),{onClick:W,class:"download-button",disabled:S.value,loading:S.value,style:{color:"white"}},{icon:f((()=>[S.value?(n(),g(c(T),{key:0,class:"pi pi-spin pi-spinner"})):i("",!0)])),default:f((()=>[X(" "+v(S.value?"Generando imagen...":"Descargar Carta"),1)])),_:1},8,["disabled","loading"])]),t[17]||(t[17]=a("br",null,null,-1)),t[18]||(t[18]=a("br",null,null,-1)),t[19]||(t[19]=a("br",null,null,-1)),t[20]||(t[20]=a("h2",null,[a("i",null,"Imágenes creadas por paux1926.")],-1))])),_:1})):i("",!0),R.value<=768?(n(),g(c(N),{key:1,class:"rss-card-container"},{content:f((()=>t[21]||(t[21]=[a("h1",null,"Esta página solo está disponible en pantallas de escritorio.",-1)]))),_:1})):i("",!0)],64))}}),Ae=K(xe,[["__scopeId","data-v-acab96c0"]]);export{Ae as default};
