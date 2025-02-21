import{_ as ke}from"./PageCreator.vue_vue_type_script_setup_true_lang-D_d47-0L.js";import{u as ne,e as T,I as G,d as c,g as _,b as De,_ as D,G as Fe,c as Ae}from"./main-DCnk6kBe.js";import{s as pe}from"./pinia-DP1x6KiP.js";import{c as Le,_ as Oe,a as fe,S as Ve,G as qe}from"./FileUploadNotice.vue_vue_type_script_setup_true_lang-CbVs2fEQ.js";import{_ as ee}from"./WikiTemplate.vue_vue_type_script_setup_true_lang-BfGLU8qF.js";import{Y as F,q as B,w as te,c as S,b as m,d as n,L as $,a8 as ge,O as i,E as b,F as o,x as l,K as d,Q as le,a3 as j,a4 as H,J as E,r as Ce,R as ye,i as V}from"./@vue-a971EMsi.js";import{T as Re}from"./TextareaInput-D040Fitb.js";import{_ as Be}from"./GameModeSelect.vue_vue_type_script_setup_true_lang-15THey8S.js";import{_ as Se}from"./DateSelect.vue_vue_type_script_setup_true_lang-DA2tfi7n.js";import{m as Te,a as Ge,_ as ce,b as Ne,c as je,d as He,e as We}from"./planetflora-x3dQC1-f.js";import{m as ze}from"./biomes-DiF7MMeX.js";import{k as Ye,s as xe}from"./primevue-DWrlVcq3.js";import{P as Je,a as Xe,b as Ze}from"./PlanetMineralInputs-CKFZsNKo.js";import"./@vueuse-WjXJKVhx.js";import"./parse-mediawiki-template-BV5n0XSg.js";import"./vue-toastification-BPeKAQMF.js";import"./@primeuix-DcC4a19q.js";import"./@primevue-DHo6Bl5a.js";import"./debounce-B7UkYTDg.js";import"./vue-draggable-plus-DM2Lmg2D.js";import"./ActivitySelect.vue_vue_type_script_setup_true_lang-BUJaqGIl.js";import"./floranutSourceInput.vue_vue_type_script_setup_true_lang-D8Uq0bUJ.js";import"./common-0UCZKJJ5.js";import"./blueimp-md5-DEkzI5uv.js";const Ke={key:0},Qe={key:1},_e={key:2},he={key:3},el={key:4},ll={key:5},nl={key:6},tl={key:7},ol={class:"pre-wrap"},al={key:8},il={class:"pre-wrap"},sl={key:9},ul={class:"pre-wrap"},dl={key:10},rl=F({__name:"PlanetOutput",setup(e){const a=ne(),{name:t,discovered:u,discoveredlink:s,image:r,glyphs:p,mode:v,researchteam2:c,orgName:V,docBy:f,regionData:g,release:y,system:_,docDate:h,discDate:D,chemicalSymbolsOutput:j,resourceListOutput:C,biome:x,type:E,planet:N,Planetdescriptors:U,atmosphere:w,faunaNum:F,weather:k,sentinels:M,flora:I,fauna:A,locations:P,sentinelInfo:L,generatedOutput:q,additionalInfo:G,generatedOutputFauna:T,generatedOutputFlora:O,generatedOutputMinerals:R}=pe(a),H=B((()=>function(e){if(12!==e.length)return"";const l=2049,n=2047,a=129,t=127,o=parseInt(e.substring(9,12),16),i=parseInt(e.substring(4,6),16),u=parseInt(e.substring(6,9),16),d=e.substring(1,4),s=i>=a?i-a:i+t,r=u>=l?u-l:u+n;return[(o>=l?o-l:o+n).toString(16).toUpperCase().padStart(4,"0"),s.toString(16).toUpperCase().padStart(4,"0"),r.toString(16).toUpperCase().padStart(4,"0"),d.padStart(4,"0")].join(":")}(p.value)));te(s,(e=>{e&&(u.value="")}));const J=B((()=>{const e=q.value.split(",").map((e=>e.trim()));return e.length>1?e.join(" and "):e[0]})),K=B((()=>{const e=parseInt(F.value);return isNaN(e)?"are":1===e?"is":"are"}));return(e,a)=>(m(),S(le,null,[n("div",null,[a[0]||(a[0]=n("span",null,"{{Version|",-1)),b(o(l(y)),1),a[1]||(a[1]=n("span",null,"}}",-1))]),a[10]||(a[10]=n("div",null,[n("span",null,"{{Royal Space Society}}")],-1)),a[11]||(a[11]=n("div",null,"{{Moon infobox",-1)),n("div",null,"| name = "+o(l(t)),1),n("div",null,"| image = "+o(l(r)||"nmsMisc_NotAvailable.png"),1),n("div",null,"| region = "+o(l(g).region),1),n("div",null,"| galaxy = "+o(l(g).galaxy),1),n("div",null,"| system = "+o(l(_)),1),n("div",null,"| planet = "+o(l(N)),1),n("div",null,"| coordinates = "+o(H.value),1),n("div",null,"| type = "+o(l(E)),1),n("div",null,"| description = "+o(l(U)),1),n("div",null,"| atmosphere = "+o(l(w)),1),a[12]||(a[12]=n("div",null,"| terrain = Pangean",-1)),n("div",null,"| weather = "+o(l(k)),1),n("div",null,"| resources = "+o(l(j)),1),n("div",null,"| sentinel = "+o(l(M)),1),n("div",null,"| flora = "+o(l(I)),1),n("div",null,"| fauna = "+o(l(A))+" ("+o(l(F))+")",1),n("div",null,"| mode = "+o(l(v)),1),n("div",null,"| civilized = "+o(l(Le)),1),n("div",null,"| researchteam = "+o(l(c)),1),n("div",null,"| discoveredlink = "+o(l(s)),1),n("div",null,"| discovered = "+o(l(u)),1),n("div",null,"| release = "+o(l(y)),1),a[13]||(a[13]=n("div",null,"}}",-1)),n("div",null,"'''"+o(l(t))+"''' is a moon.",1),a[14]||(a[14]=n("br",null,null,-1)),a[15]||(a[15]=n("div",null,"==Summary==",-1)),n("div",null,"'''"+o(l(t))+"''' is a [[moon]] in the [["+o(l(_))+"]] star system.",1),a[16]||(a[16]=n("br",null,null,-1)),n("div",null,"It orbits the [[planet]] [["+o(l(N))+"]].",1),a[17]||(a[17]=n("br",null,null,-1)),a[18]||(a[18]=n("div",null,"==Alias Names==",-1)),l(V)?(m(),S("div",Ke,[i(ee,{"template-name":"aliasc"},{default:d((()=>[b("text=Original|name="+o(l(V)),1)])),_:1})])):$("",!0),n("div",null,[i(ee,{"template-name":"aliasc"},{default:d((()=>[b("text=Current|name="+o(l(t)),1)])),_:1})]),a[19]||(a[19]=n("br",null,null,-1)),a[20]||(a[20]=n("div",null,"==Discovery==",-1)),l(D)&&!l(f)&&l(s)?(m(),S("div",Qe,[a[2]||(a[2]=b("Discovered and uploaded by ")),i(ee,{"template-name":"profile"},{default:d((()=>[b(o(l(s)),1)])),_:1}),b(" on "+o(l(D)),1)])):$("",!0),l(D)&&!l(f)&&l(u)?(m(),S("div",_e,"Discovered and uploaded by ''"+o(l(u))+"'' on "+o(l(D)),1)):$("",!0),l(D)&&l(h)&&l(s)&&l(f)&&l(f)!==l(s)?(m(),S("div",he,[a[3]||(a[3]=b("* Discovered and uploaded by ")),i(ee,{"template-name":"profile"},{default:d((()=>[b(o(l(s)),1)])),_:1}),b(" on "+o(l(D)),1),a[4]||(a[4]=n("br",null,null,-1)),b(" * Explored and documented by ''"+o(l(f))+"'' on "+o(l(h)),1)])):$("",!0),l(D)&&l(h)&&l(u)&&l(f)&&l(f)!==l(u)?(m(),S("div",el,[b("* Discovered and uploaded by ''"+o(l(u))+"'' on "+o(l(D)),1),a[5]||(a[5]=n("br",null,null,-1)),b(" * Explored and documented by ''"+o(l(f))+"'' on "+o(l(h)),1)])):$("",!0),a[21]||(a[21]=n("br",null,null,-1)),a[22]||(a[22]=n("div",null,"==Planet Type==",-1)),n("div",null,[a[6]||(a[6]=n("span",null,"{{",-1)),b("Biome|"+o(l(x)),1),a[7]||(a[7]=n("span",null,"}}",-1)),b(" - "+o(l(U)),1)]),a[23]||(a[23]=n("br",null,null,-1)),a[24]||(a[24]=n("div",null,"==Moons==",-1)),J.value?(m(),S("div",ll,"This planet's [[moon]] is "+o(J.value)+".",1)):$("",!0),J.value?$("",!0):(m(),S("div",nl,"This planet has no moons.")),a[25]||(a[25]=n("br",null,null,-1)),a[26]||(a[26]=n("div",null,"==Location==",-1)),n("div",null,"It can be found in the [["+o(l(_))+"]] [[star system]] in the [["+o(l(g).region)+"]] [[region]] of [[Royal Space Society]], in the [["+o(l(g).galaxy)+"]] [[galaxy]].",1),a[27]||(a[27]=n("br",null,null,-1)),n("div",null,[a[8]||(a[8]=n("span",null,"{{CoordGlyphConvert|",-1)),b(o(H.value),1),a[9]||(a[9]=n("span",null,"}}",-1))]),a[28]||(a[28]=n("br",null,null,-1)),a[29]||(a[29]=n("div",null,"===Documented Bases===",-1)),a[30]||(a[30]=n("div",null,[n("span",null,"{{CARGOBasesPlanet|{{PAGENAME}}}}")],-1)),a[31]||(a[31]=n("br",null,null,-1)),a[32]||(a[32]=n("div",null,"===Documented Multi-Tool Sites===",-1)),a[33]||(a[33]=n("div",null,[n("span",null,"{{CARGOMTPlanetShort|planet={{PAGENAME}}}}")],-1)),a[34]||(a[34]=n("br",null,null,-1)),a[35]||(a[35]=n("div",null,"===Notable Locations / Waypoints===",-1)),n("div",null,o(l(P)),1),a[36]||(a[36]=n("br",null,null,-1)),a[37]||(a[37]=n("div",null,"==Life==",-1)),a[38]||(a[38]=n("div",null,"===Fauna===",-1)),n("div",null,"* There "+o(K.value)+" "+o(l(F))+" fauna on this planet",1),a[39]||(a[39]=n("div",null,[n("span",null,'{| class="article-table" style="text-align:center; width:100%; max-width: 1250px"')],-1)),a[40]||(a[40]=n("div",null,"|-",-1)),a[41]||(a[41]=n("div",null,'! style="width:150px" | Image',-1)),a[42]||(a[42]=n("div",null,"! Name",-1)),a[43]||(a[43]=n("div",null,"! Ecosystem",-1)),a[44]||(a[44]=n("div",null,"! Genus",-1)),a[45]||(a[45]=n("div",null,"! Height",-1)),a[46]||(a[46]=n("div",null,"! Weight",-1)),a[47]||(a[47]=n("div",null,"! Discovered by",-1)),l(T)?(m(),S("div",tl,[n("div",null,[n("pre",ol,o(l(T)),1)])])):$("",!0),a[48]||(a[48]=ge("<div>|}</div><br><div>===Flora===</div><div><span>{| class=&quot;article-table&quot; style=&quot;text-align:center; width:100%; max-width: 1250px&quot;</span></div><div>|-</div><div>! style=&quot;width:150px&quot; | Image</div><div>! Name</div><div>! Age</div><div>! Root Structure</div><div>! Nutrient Source</div><div>! Notes</div><div>! Elements</div><div>! Discovered by</div>",13)),l(O)?(m(),S("div",al,[n("div",null,[n("pre",il,o(l(O)),1)])])):$("",!0),a[49]||(a[49]=ge("<div>|}</div><br><div>===Minerals===</div><div><span>{| class=&quot;article-table&quot; style=&quot;text-align:center; width:100%; max-width: 1250px&quot;</span></div><div>|-</div><div>! style=&quot;width:150px&quot; | Image</div><div>! Name</div><div>! Metal Content</div><div>! Formation Process</div><div>! Notes</div><div>! Elements</div><div>! Discovered by</div>",12)),l(R)?(m(),S("div",sl,[n("div",null,[n("pre",ul,o(l(R)),1)])])):$("",!0),a[50]||(a[50]=n("div",null,"|}",-1)),a[51]||(a[51]=n("br",null,null,-1)),a[52]||(a[52]=n("div",null,"==Sentinels==",-1)),n("div",null,o(l(L)),1),a[53]||(a[53]=n("br",null,null,-1)),a[54]||(a[54]=n("div",null,"==Resources==",-1)),l(C)?(m(),S("div",dl,[n("div",null,[n("pre",null,o(l(C)),1)])])):$("",!0),a[55]||(a[55]=n("br",null,null,-1)),a[56]||(a[56]=n("div",null,"==Additional Information==",-1)),n("div",null,o(l(G)),1),a[57]||(a[57]=n("br",null,null,-1)),a[58]||(a[58]=n("div",null,"==Gallery==",-1)),i(Oe)],64))}}),ml={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},pl=["id"],vl=F({__name:"PlanetDescriptors",props:j({resetEvent:{},isMoon:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=H(e,"modelValue"),t=T("planetdescriptors");return(e,o)=>(m(),E(G,null,{label:d((()=>[n("div",ml,[n("label",{id:l(t)},"Descripción de la Luna:",8,pl),i(_,{tooltip:"Se puede encontrar en la guía de exploración.","help-img":"planet/planetDesc","help-title":"Descripción de la Luna"},{default:d((()=>o[1]||(o[1]=[b(" Se puede encontrar en la guía de exploración. ")]))),_:1})])])),input:d((()=>[i(c,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"aria-labelledby":l(t),options:e.isMoon?l(Te):l(Ge),"reset-event":e.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),bl={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},fl=["id"],Vl=F({__name:"BiomeInput",props:j({resetEvent:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=H(e,"modelValue"),t=T("biomeinput");return(e,o)=>(m(),E(G,null,{label:d((()=>[n("div",bl,[n("label",{id:l(t)},"Bioma de la Luna:",8,fl)])])),input:d((()=>[i(c,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"aria-labelledby":l(t),options:l(ze),"reset-event":e.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),gl={id:"resource",style:{display:"none"}},yl=F({__name:"PlanetResourceInputs",setup(e){const a=ne();const t=Ce([{id:0,name:"",image:"",imagelandscape:"",biome:"",descriptors:"",ismoon:"",resources:["","",""],weather:"",sentinels:"",faunatotal:"",flora:"",fauna:""}]),u=()=>{const e=t.value.flatMap((e=>e.resources)).filter((e=>e)),l=function(e){return"The following resources can be found on this moon:\n"+Array.from(new Set(e)).map((e=>`* {{ilink|${e}}}`)).join("\n")}(e),n=function(e){const l={Copper:"Cu",Cadmium:"Cd",Emeril:"Em",Indium:"In","Activated Copper":"Cu+","Activated Cadmium":"Cd+","Activated Emeril":"Em+","Activated Indium":"In+",Ammonia:"NH3",Dioxite:"CO2",Paraffinium:"Pf",Phosphorus:"P",Pyrite:"Py",Uranium:"U",Silver:"Ag",Gold:"Au","Magnetised Ferrite":"Fe++",Sodium:"Na",Cobalt:"Co",Salt:"NaCl","Star Bulb":"Sb","Cactus Flesh":"Cc","Gamma Root":"Gr","Fungal Mould":"Ml","Frost Crystal":"Fc",Solanium:"So",Mordite:"Mo",Faecium:"Fa","Ancient Bones":"Ab","Salvageable Scrap":"Sa","Rusted Metal":"Jn",Basalt:"B"};return Array.from(new Set(e)).map((e=>`[[${l[e]||e}]]`)).join(", ")}(e);a.resourceListOutput=l,a.chemicalSymbolsOutput=n};return te(t,(()=>{u()}),{deep:!0}),(e,a)=>(m(),E(l(Ye),{class:"my-4",header:"Recursos",toggleable:""},{default:d((()=>[(m(!0),S(le,null,ye(t.value,((e,u)=>(m(),S("div",{key:e.id,class:"planet-container"},[(m(!0),S(le,null,ye(e.resources,((a,d)=>(m(),S("div",{key:d,class:"resource-container"},[n("div",gl,o(a),1),e.resources.length>3?(m(),E(l(xe),{key:0,onClick:e=>((e,l)=>{t.value[e].resources.splice(l,1)})(u,d),icon:"pi pi-times",class:"remove-resource-button","aria-label":"Eliminar recurso"},null,8,["onClick"])):$("",!0),i(ce,{modelValue:e.resources[d],"onUpdate:modelValue":l=>e.resources[d]=l,label:"Nombre del recurso:",class:"resource-select"},null,8,["modelValue","onUpdate:modelValue"])])))),128)),i(l(xe),{onClick:e=>(e=>{t.value[e].resources.length<6&&t.value[e].resources.push("")})(u),disabled:e.resources.length>=6},{default:d((()=>a[0]||(a[0]=[b(" Agregar Recurso ")]))),_:2},1032,["onClick","disabled"])])))),128))])),_:1}))}}),Sl=De(yl,[["__scopeId","data-v-8f116a20"]]),Nl={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},xl=["id"],Cl=F({__name:"PlanetSentinels",props:j({resetEvent:{},isMoon:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=H(e,"modelValue"),t=T("planetdescriptors"),o=ne(),{sentinelInfo:u,sentinels:s}=pe(o),r={Bajo:"[[Sentinel]] activity on this moon is classified as: ''{sentinels}''. The sentinels don't present an immediate threat.",Alto:"[[Sentinel]] activity on this moon is classified as: ''{sentinels}''. The sentinels present an immediate threat.",Agresivo:"[[Sentinel]] activity on this moon is classified as: ''{sentinels}''. The sentinels present an immediate threat.",Corruptos:"[[Sentinel]] activity on this moon is classified as: ''{sentinels}''. The sentinels present an immediate threat."};return te(a,(e=>{var l;const n=null==(l=Ne.find((l=>l.items.some((l=>l.value===e)))))?void 0:l.groupLabel;n&&r[n]?u.value=r[n].replace("{sentinels}",s.value):u.value=""})),(e,o)=>(m(),E(G,null,{label:d((()=>[n("div",Nl,[n("label",{id:l(t)},"Nivel centinela de la Luna:",8,xl),i(_,{tooltip:"Se puede encontrar en el menú de descubrimiento.","help-img":"planet/sentinels","help-title":"Nivel planetario de los centinelas"},{default:d((()=>o[1]||(o[1]=[b(" Se puede encontrar en el menú de descubrimiento. ")]))),_:1})])])),input:d((()=>[i(c,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"aria-labelledby":l(t),options:l(Ne),optionLabel:"label",optionGroupLabel:"groupLabel",optionGroupChildren:"items","reset-event":e.resetEvent,filter:""},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),wl={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Il=["id"],$l=F({__name:"PlanetWeather",props:j({resetEvent:{},isMoon:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=H(e,"modelValue"),t=T("planetweather");return(e,o)=>(m(),E(G,null,{label:d((()=>[n("div",wl,[n("label",{id:l(t)},"Clima de la Luna:",8,Il),i(_,{tooltip:"Se puede encontrar en el menú de descubrimiento.","help-img":"planet/weather","help-title":"El tiempo de la Luna"},{default:d((()=>o[1]||(o[1]=[b(" Se puede encontrar en el menú de descubrimiento. ")]))),_:1})])])),input:d((()=>[i(c,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"aria-labelledby":l(t),options:l(je),"reset-event":e.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Pl={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Ul=["id"],El=F({__name:"PlanetFauna",props:j({resetEvent:{},isMoon:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=H(e,"modelValue"),t=T("planetdescriptors");return(e,o)=>(m(),E(G,null,{label:d((()=>[n("div",Pl,[n("label",{id:l(t)},"Fauna:",8,Ul),i(_,{tooltip:"Se puede encontrar en el menú de descubrimiento.","help-img":"planet/fauna","help-title":"Nivel de fauna de la Luna"},{default:d((()=>o[1]||(o[1]=[b(" Se puede encontrar en el menú de descubrimiento. ")]))),_:1})])])),input:d((()=>[i(c,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"aria-labelledby":l(t),options:l(He),"reset-event":e.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Ml={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},kl=["id"],Dl=F({__name:"PlanetFlora",props:j({resetEvent:{},isMoon:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=H(e,"modelValue"),t=T("planetdescriptors");return(e,o)=>(m(),E(G,null,{label:d((()=>[n("div",Ml,[n("label",{id:l(t)},"Flora:",8,kl),i(_,{tooltip:"Se puede encontrar en el menú de descubrimiento.","help-img":"planet/flora","help-title":"Nivel de flora de la Luna"},{default:d((()=>o[1]||(o[1]=[b(" Se puede encontrar en el menú de descubrimiento. ")]))),_:1})])])),input:d((()=>[i(c,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"aria-labelledby":l(t),options:l(We),"reset-event":e.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Fl=F({__name:"PlanetInput",setup(e){const n=ne(),{name:a,discovered:t,discoveredlink:o,image:u,glyphs:s,atmosphere:r,mode:p,orgName:v,additionalInfo:c,discDate:f,Planetdescriptors:g,docBy:y,biome:_,sentinels:h,weather:j,faunaNum:C,platform:x,docDate:N,navImage:U,system:w,fauna:F,flora:k,researchteam2:M,planet:I}=pe(n),A=Ce(""),P=B((()=>/^\d*$/.test(A.value)));te(A,(e=>{C.value=(e=>{const l=e.replace(/[^0-9.]/g,"");if(!l)return"";const[n,a]=l.split("."),t=n.replace(/\B(?=(\d{3})+(?!\d))/g,",");return a?`${t}.${a}`:t})(e)}));const L=B((()=>!t.value)),q=B((()=>!o.value));return(e,n)=>(m(),S(le,null,[i(D,{modelValue:l(a),"onUpdate:modelValue":n[0]||(n[0]=e=>V(a)?a.value=e:null),"help-img":"planet/planetName","help-title":"Nombre del Planeta",label:"Nombre de la Luna:",tooltip:"Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o)."},{default:d((()=>n[24]||(n[24]=[b(" Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o). ")]))),_:1},8,["modelValue"]),i(D,{modelValue:l(v),"onUpdate:modelValue":n[1]||(n[1]=e=>V(v)?v.value=e:null),label:"Nombre original antes de registrar (si está disponible):"},null,8,["modelValue"]),i(Ve,{modelValue:l(u),"onUpdate:modelValue":n[2]||(n[2]=e=>V(u)?u.value=e:null),label:"Imagen principal:","help-title":"Subida de Archivo",tooltip:"La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."},{default:d((()=>[i(fe)])),_:1},8,["modelValue"]),i(Ve,{modelValue:l(U),"onUpdate:modelValue":n[3]||(n[3]=e=>V(U)?U.value=e:null),label:"Nombre de la imagen principal:","help-title":"Subida de Archivo",tooltip:"La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."},{default:d((()=>[i(fe)])),_:1},8,["modelValue"]),i(D,{modelValue:l(w),"onUpdate:modelValue":n[4]||(n[4]=e=>V(w)?w.value=e:null),"help-img":"planet/planetName","help-title":"Nombre del Sistema",label:"Nombre del Sistema:",tooltip:"Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o)."},{default:d((()=>n[25]||(n[25]=[b(" Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o). ")]))),_:1},8,["modelValue"]),i(D,{modelValue:l(I),"onUpdate:modelValue":n[5]||(n[5]=e=>V(I)?I.value=e:null),label:"Nombre del planeta de la luna:",tooltip:"Nombre del planeta que orbita esta luna."},null,8,["modelValue"]),i(Fe,{modelValue:l(s),"onUpdate:modelValue":n[6]||(n[6]=e=>V(s)?s.value=e:null)},null,8,["modelValue"]),i(Vl,{modelValue:l(_),"onUpdate:modelValue":n[7]||(n[7]=e=>V(_)?_.value=e:null)},null,8,["modelValue"]),i(vl,{modelValue:l(g),"onUpdate:modelValue":n[8]||(n[8]=e=>V(g)?g.value=e:null)},null,8,["modelValue"]),i(D,{modelValue:l(r),"onUpdate:modelValue":n[9]||(n[9]=e=>V(r)?r.value=e:null),label:"Atmósfera de la Luna:",tooltip:"Se puede encontrar en la guía de exploración.","help-img":"planet/atmosphere","help-title":"Atmósfera de la Luna"},{default:d((()=>n[26]||(n[26]=[b("Se puede encontrar en la guía de exploración.")]))),_:1},8,["modelValue"]),i($l,{modelValue:l(j),"onUpdate:modelValue":n[10]||(n[10]=e=>V(j)?j.value=e:null)},null,8,["modelValue"]),i(Sl),i(Cl,{modelValue:l(h),"onUpdate:modelValue":n[11]||(n[11]=e=>V(h)?h.value=e:null)},null,8,["modelValue"]),i(Dl,{modelValue:l(k),"onUpdate:modelValue":n[12]||(n[12]=e=>V(k)?k.value=e:null)},null,8,["modelValue"]),i(El,{modelValue:l(F),"onUpdate:modelValue":n[13]||(n[13]=e=>V(F)?F.value=e:null)},null,8,["modelValue"]),i(D,{modelValue:A.value,"onUpdate:modelValue":n[14]||(n[14]=e=>A.value=e),label:"Número de Fauna:","help-img":"planet/faunaNum","help-title":"Número de fauna de la Luna",invalid:!P.value,"error-message":"Solo debe contener numeros",tooltip:"Se puede encontrar en el menú de descubrimiento."},{default:d((()=>n[27]||(n[27]=[b("Se puede encontrar en el menú de descubrimiento. ")]))),_:1},8,["modelValue","invalid"]),i(Je),i(Xe),i(Ze),i(Se,{modelValue:l(f),"onUpdate:modelValue":n[15]||(n[15]=e=>V(f)?f.value=e:null),label:"¿Cuándo se descubrió esta Luna?"},null,8,["modelValue"]),i(Se,{modelValue:l(N),"onUpdate:modelValue":n[16]||(n[16]=e=>V(N)?N.value=e:null),label:"¿Cuándo se documentó esta Luna?"},null,8,["modelValue"]),i(D,{modelValue:l(M),"onUpdate:modelValue":n[17]||(n[17]=e=>V(M)?M.value=e:null),label:"Departamento: (Opcional)"},null,8,["modelValue"]),i(Be,{modelValue:l(p),"onUpdate:modelValue":n[18]||(n[18]=e=>V(p)?p.value=e:null)},null,8,["modelValue"]),i(Ae,{modelValue:l(x),"onUpdate:modelValue":n[19]||(n[19]=e=>V(x)?x.value=e:null)},null,8,["modelValue"]),L.value?(m(),E(D,{key:0,modelValue:l(o),"onUpdate:modelValue":n[20]||(n[20]=e=>V(o)?o.value=e:null),label:"Nombre en la wiki del descubridor:"},null,8,["modelValue"])):$("",!0),q.value?(m(),E(D,{key:1,modelValue:l(t),"onUpdate:modelValue":n[21]||(n[21]=e=>V(t)?t.value=e:null),label:"Alias del descubridor si no tiene wiki:"},null,8,["modelValue"])):$("",!0),i(D,{modelValue:l(y),"onUpdate:modelValue":n[22]||(n[22]=e=>V(y)?y.value=e:null),label:"Nombre del documentador si no es el descubridor:"},null,8,["modelValue"]),i(Re,{modelValue:l(c),"onUpdate:modelValue":n[23]||(n[23]=e=>V(c)?c.value=e:null),label:"Información Adicional:"},null,8,["modelValue"]),i(qe)],64))}}),sn=F({__name:"Moon",setup:e=>(e,l)=>(m(),E(ke,null,{input:d((()=>[i(Fl)])),output:d((()=>[i(rl)])),_:1}))});export{sn as default};
