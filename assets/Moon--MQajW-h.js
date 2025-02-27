import{_ as Ee}from"./PageCreator.vue_vue_type_script_setup_true_lang-DRA1AEhQ.js";import{u as ne,e as T,I as G,d as j,g as h,b as Me,_ as M,G as Fe,c as Ae}from"./main-Drd2fmKP.js";import{s as pe}from"./pinia-DP1x6KiP.js";import{c as Le,_ as ce,S as fe,G as Oe}from"./GalleryInput-Bo2uIaJ3.js";import{_ as R}from"./WikiTemplate.vue_vue_type_script_setup_true_lang-BfGLU8qF.js";import{Y as F,q as B,w as te,c as g,b as d,d as n,L as P,a8 as ye,O as i,E as v,F as t,x as e,K as p,Q as le,a3 as H,a4 as W,J as D,r as Ce,R as Ve,i as S}from"./@vue-a971EMsi.js";import{T as qe}from"./TextareaInput-DA6loOKh.js";import{_ as Re}from"./GameModeSelect.vue_vue_type_script_setup_true_lang-DKVNXhER.js";import{_ as ge}from"./DateSelect.vue_vue_type_script_setup_true_lang-CSbiIgP4.js";import{_ as Se}from"./FileUploadNotice.vue_vue_type_script_setup_true_lang-3CdIahJR.js";import{m as Be,a as Te,_ as Ge,b as Ne,c as je,d as He,e as We}from"./planetflora-C-KpYRvw.js";import{m as ze}from"./biomes-DiF7MMeX.js";import{k as Ye,s as xe}from"./primevue-B8OBORDc.js";import{P as _e,a as Je,b as Xe}from"./PlanetMineralInputs--gRaV5Pt.js";import"./@vueuse-WjXJKVhx.js";import"./parse-mediawiki-template-BV5n0XSg.js";import"./vue-toastification-BPeKAQMF.js";import"./@primeuix-DcC4a19q.js";import"./@primevue-DHo6Bl5a.js";import"./debounce-B7UkYTDg.js";import"./vue-draggable-plus-DM2Lmg2D.js";import"./ActivitySelect.vue_vue_type_script_setup_true_lang-CGsjnVuZ.js";import"./floranutSourceInput.vue_vue_type_script_setup_true_lang-SDcB8P06.js";import"./common-e0wkwqxj.js";import"./blueimp-md5-DEkzI5uv.js";const Ze={key:0},Ke={key:1},Qe={key:2},he={key:3},el={key:4},ll={key:5},nl={key:6},tl={key:7},ol={key:8},al={key:9},il={key:10},sl={key:11},ul={key:12},dl={key:13},rl={key:14},ml={class:"pre-wrap"},pl={key:15},vl={class:"pre-wrap"},bl={key:16},fl={class:"pre-wrap"},yl={key:17},Vl=F({__name:"PlanetOutput",setup(l){const a=ne(),{name:o,discovered:u,discoveredlink:s,image:r,glyphs:m,mode:c,researchteam2:b,orgName:y,docBy:f,regionData:V,release:h,system:_,docDate:S,discDate:D,chemicalSymbolsOutput:j,resourceListOutput:M,biome:x,type:C,planet:N,Planetdescriptors:w,atmosphere:k,faunaNum:U,weather:E,sentinels:I,flora:A,fauna:F,locations:L,sentinelInfo:q,generatedOutput:G,additionalInfo:O,generatedOutputFauna:T,generatedOutputFlora:W,generatedOutputMinerals:H}=pe(a),K=B((()=>function(e){if(12!==e.length)return"";const l=2049,n=2047,a=129,t=127,i=parseInt(e.substring(9,12),16),o=parseInt(e.substring(4,6),16),u=parseInt(e.substring(6,9),16),d=e.substring(1,4),s=o>=a?o-a:o+t,r=u>=l?u-l:u+n;return[(i>=l?i-l:i+n).toString(16).toUpperCase().padStart(4,"0"),s.toString(16).toUpperCase().padStart(4,"0"),r.toString(16).toUpperCase().padStart(4,"0"),d.padStart(4,"0")].join(":")}(m.value)));te(s,(e=>{e&&(u.value="")}));const J=B((()=>{const e=G.value.split(",").map((e=>e.trim()));return e.length>1?e.join(" and "):e[0]})),$=B((()=>{const e=parseInt(U.value);return isNaN(e)?"are":1===e?"is":"are"}));return(l,a)=>(d(),g(le,null,[n("div",null,[a[0]||(a[0]=n("span",null,"{{Version|",-1)),v(t(e(h)),1),a[1]||(a[1]=n("span",null,"}}",-1))]),a[12]||(a[12]=n("div",null,[n("span",null,"{{Royal Space Society}}")],-1)),a[13]||(a[13]=n("div",null,"{{Moon infobox",-1)),n("div",null,"| name = "+t(e(o)),1),n("div",null,"| image = "+t(e(r)||"nmsMisc_NotAvailable.png"),1),n("div",null,"| region = "+t(e(V).region),1),n("div",null,"| galaxy = "+t(e(V).galaxy),1),n("div",null,"| system = "+t(e(_)),1),n("div",null,"| planet = "+t(e(N)),1),n("div",null,"| coordinates = "+t(K.value),1),n("div",null,"| type = "+t(e(C)),1),n("div",null,"| description = "+t(e(w)),1),n("div",null,"| atmosphere = "+t(e(k)),1),a[14]||(a[14]=n("div",null,"| terrain = Pangean",-1)),n("div",null,"| weather = "+t(e(E)),1),n("div",null,"| resources = "+t(e(j)),1),n("div",null,"| sentinel = "+t(e(I)),1),n("div",null,"| flora = "+t(e(A)),1),n("div",null,"| fauna = "+t(e(F))+" ("+t(e(U))+")",1),n("div",null,"| mode = "+t(e(c)),1),n("div",null,"| civilized = "+t(e(Le)),1),n("div",null,"| researchteam = "+t(e(b)),1),n("div",null,"| discoveredlink = "+t(e(s)),1),n("div",null,"| discovered = "+t(e(u)),1),n("div",null,"| release = "+t(e(h)),1),a[15]||(a[15]=n("div",null,"}}",-1)),n("div",null,"'''"+t(e(o))+"''' is a moon.",1),a[16]||(a[16]=n("br",null,null,-1)),a[17]||(a[17]=n("div",null,"==Summary==",-1)),n("div",null,"'''"+t(e(o))+"''' is a [[moon]] in the [["+t(e(_))+"]] star system.",1),a[18]||(a[18]=n("br",null,null,-1)),n("div",null,"It orbits the [[planet]] [["+t(e(N))+"]].",1),a[19]||(a[19]=n("br",null,null,-1)),a[20]||(a[20]=n("div",null,"==Alias Names==",-1)),e(y)?(d(),g("div",Ze,[i(R,{"template-name":"aliasc"},{default:p((()=>[v("text=Original|name="+t(e(y)),1)])),_:1})])):P("",!0),n("div",null,[i(R,{"template-name":"aliasc"},{default:p((()=>[v("text=Current|name="+t(e(o)),1)])),_:1})]),a[21]||(a[21]=n("br",null,null,-1)),a[22]||(a[22]=n("div",null,"==Discovery==",-1)),e(D)&&!e(S)&&e(s)?(d(),g("div",Ke,[a[2]||(a[2]=v(" Discovered and uploaded by ")),i(R,{"template-name":"profile"},{default:p((()=>[v(t(e(s)),1)])),_:1}),v(" on "+t(e(D)),1)])):e(D)&&!e(S)&&e(u)?(d(),g("div",Qe," Discovered and uploaded by ''"+t(e(u))+"'' on "+t(e(D)),1)):e(D)&&e(S)&&e(u)&&e(f)&&e(D)===e(S)?(d(),g("div",he," Discovered and uploaded by ''"+t(e(u))+"'' and explored and documented by ''"+t(e(f))+"'' on "+t(e(D)),1)):e(D)&&e(S)&&e(s)&&e(f)&&e(D)!==e(S)?(d(),g("div",el,[a[3]||(a[3]=v(" * Discovered and uploaded by ")),i(R,{"template-name":"profile"},{default:p((()=>[v(t(e(s)),1)])),_:1}),v(" on "+t(e(D)),1),a[4]||(a[4]=n("br",null,null,-1)),v(" * Explored and documented by ''"+t(e(f))+"'' on "+t(e(S)),1)])):e(D)&&e(S)&&e(u)&&e(f)&&e(D)!==e(S)?(d(),g("div",ll,[v(" * Discovered and uploaded by ''"+t(e(u))+"'' on "+t(e(D)),1),a[5]||(a[5]=n("br",null,null,-1)),v(" * Explored and documented by ''"+t(e(f))+"'' on "+t(e(S)),1)])):!e(D)&&e(S)&&e(s)&&e(f)?(d(),g("div",nl," Explored and documented by ''"+t(e(f))+"'' on "+t(e(S)),1)):!e(D)&&e(S)&&e(u)&&e(f)?(d(),g("div",tl," Explored and documented by ''"+t(e(f))+"'' on "+t(e(S)),1)):e(D)&&e(S)&&e(s)&&!e(f)&&e(D)===e(S)?(d(),g("div",ol,[a[6]||(a[6]=v(" Discovered and uploaded by ")),i(R,{"template-name":"profile"},{default:p((()=>[v(t(e(s)),1)])),_:1}),v(" on "+t(e(D)),1)])):e(D)&&e(S)&&e(s)&&!e(f)&&e(D)!==e(S)?(d(),g("div",al,[a[7]||(a[7]=v(" Discovered by ")),i(R,{"template-name":"profile"},{default:p((()=>[v(t(e(s)),1)])),_:1}),v(" on "+t(e(D))+" and uploaded on "+t(e(S)),1)])):e(D)&&e(S)&&e(u)&&!e(f)&&e(D)===e(S)?(d(),g("div",il," Discovered and uploaded by ''"+t(e(u))+"'' on "+t(e(D)),1)):e(D)&&e(S)&&e(u)&&!e(f)&&e(D)!==e(S)?(d(),g("div",sl," Discovered by ''"+t(e(u))+"'' on "+t(e(D))+" and uploaded on "+t(e(S)),1)):P("",!0),a[23]||(a[23]=n("br",null,null,-1)),a[24]||(a[24]=n("div",null,"==Planet Type==",-1)),n("div",null,[a[8]||(a[8]=n("span",null,"{{",-1)),v("Biome|"+t(e(x)),1),a[9]||(a[9]=n("span",null,"}}",-1)),v(" - "+t(e(w)),1)]),a[25]||(a[25]=n("br",null,null,-1)),a[26]||(a[26]=n("div",null,"==Moons==",-1)),J.value?(d(),g("div",ul,"This planet's [[moon]] is "+t(J.value)+".",1)):P("",!0),J.value?P("",!0):(d(),g("div",dl,"This planet has no moons.")),a[27]||(a[27]=n("br",null,null,-1)),a[28]||(a[28]=n("div",null,"==Location==",-1)),n("div",null,"It can be found in the [["+t(e(_))+"]] [[star system]] in the [["+t(e(V).region)+"]] [[region]] of [[Royal Space Society]], in the [["+t(e(V).galaxy)+"]] [[galaxy]].",1),a[29]||(a[29]=n("br",null,null,-1)),n("div",null,[a[10]||(a[10]=n("span",null,"{{CoordGlyphConvert|",-1)),v(t(K.value),1),a[11]||(a[11]=n("span",null,"}}",-1))]),a[30]||(a[30]=n("br",null,null,-1)),a[31]||(a[31]=n("div",null,"===Documented Bases===",-1)),a[32]||(a[32]=n("div",null,[n("span",null,"{{CARGOBasesPlanet|{{PAGENAME}}}}")],-1)),a[33]||(a[33]=n("br",null,null,-1)),a[34]||(a[34]=n("div",null,"===Documented Multi-Tool Sites===",-1)),a[35]||(a[35]=n("div",null,[n("span",null,"{{CARGOMTPlanetShort|planet={{PAGENAME}}}}")],-1)),a[36]||(a[36]=n("br",null,null,-1)),a[37]||(a[37]=n("div",null,"===Notable Locations / Waypoints===",-1)),n("div",null,t(e(L)),1),a[38]||(a[38]=n("br",null,null,-1)),a[39]||(a[39]=n("div",null,"==Life==",-1)),a[40]||(a[40]=n("div",null,"===Fauna===",-1)),n("div",null,"* There "+t($.value)+" "+t(e(U))+" fauna on this planet",1),a[41]||(a[41]=n("div",null,[n("span",null,'{| class="article-table" style="text-align:center; width:100%; max-width: 1250px"')],-1)),a[42]||(a[42]=n("div",null,"|-",-1)),a[43]||(a[43]=n("div",null,'! style="width:150px" | Image',-1)),a[44]||(a[44]=n("div",null,"! Name",-1)),a[45]||(a[45]=n("div",null,"! Ecosystem",-1)),a[46]||(a[46]=n("div",null,"! Genus",-1)),a[47]||(a[47]=n("div",null,"! Height",-1)),a[48]||(a[48]=n("div",null,"! Weight",-1)),a[49]||(a[49]=n("div",null,"! Discovered by",-1)),e(T)?(d(),g("div",rl,[n("div",null,[n("pre",ml,t(e(T)),1)])])):P("",!0),a[50]||(a[50]=ye("<div>|}</div><br><div>===Flora===</div><div><span>{| class=&quot;article-table&quot; style=&quot;text-align:center; width:100%; max-width: 1250px&quot;</span></div><div>|-</div><div>! style=&quot;width:150px&quot; | Image</div><div>! Name</div><div>! Age</div><div>! Root Structure</div><div>! Nutrient Source</div><div>! Notes</div><div>! Elements</div><div>! Discovered by</div>",13)),e(W)?(d(),g("div",pl,[n("div",null,[n("pre",vl,t(e(W)),1)])])):P("",!0),a[51]||(a[51]=ye("<div>|}</div><br><div>===Minerals===</div><div><span>{| class=&quot;article-table&quot; style=&quot;text-align:center; width:100%; max-width: 1250px&quot;</span></div><div>|-</div><div>! style=&quot;width:150px&quot; | Image</div><div>! Name</div><div>! Metal Content</div><div>! Formation Process</div><div>! Notes</div><div>! Elements</div><div>! Discovered by</div>",12)),e(H)?(d(),g("div",bl,[n("div",null,[n("pre",fl,t(e(H)),1)])])):P("",!0),a[52]||(a[52]=n("div",null,"|}",-1)),a[53]||(a[53]=n("br",null,null,-1)),a[54]||(a[54]=n("div",null,"==Sentinels==",-1)),n("div",null,t(e(q)),1),a[55]||(a[55]=n("br",null,null,-1)),a[56]||(a[56]=n("div",null,"==Resources==",-1)),e(M)?(d(),g("div",yl,[n("div",null,[n("pre",null,t(e(M)),1)])])):P("",!0),a[57]||(a[57]=n("br",null,null,-1)),a[58]||(a[58]=n("div",null,"==Additional Information==",-1)),n("div",null,t(e(O)),1),a[59]||(a[59]=n("br",null,null,-1)),a[60]||(a[60]=n("div",null,"==Gallery==",-1)),i(ce)],64))}}),gl={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Sl=["id"],Nl=F({__name:"PlanetDescriptors",props:H({resetEvent:{},isMoon:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=W(l,"modelValue"),t=T("planetdescriptors");return(l,o)=>(d(),D(G,null,{label:p((()=>[n("div",gl,[n("label",{id:e(t)},"Descripción de la Luna:",8,Sl),i(h,{tooltip:"Se puede encontrar en la guía de exploración.","help-img":"planet/planetDesc","help-title":"Descripción de la Luna"},{default:p((()=>o[1]||(o[1]=[v(" Se puede encontrar en la guía de exploración. ")]))),_:1})])])),input:p((()=>[i(j,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"aria-labelledby":e(t),options:l.isMoon?e(Be):e(Te),"reset-event":l.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),xl={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Cl=["id"],wl=F({__name:"BiomeInput",props:H({resetEvent:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=W(l,"modelValue"),t=T("biomeinput");return(l,o)=>(d(),D(G,null,{label:p((()=>[n("div",xl,[n("label",{id:e(t)},"Bioma de la Luna:",8,Cl)])])),input:p((()=>[i(j,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"aria-labelledby":e(t),options:e(ze),"reset-event":l.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Il={id:"resource",style:{display:"none"}},kl=F({__name:"PlanetResourceInputs",setup(l){const a=ne();const o=Ce([{id:0,name:"",image:"",imagelandscape:"",biome:"",descriptors:"",ismoon:"",resources:["","",""],weather:"",sentinels:"",faunatotal:"",flora:"",fauna:""}]),u=()=>{const e=o.value.flatMap((e=>e.resources)).filter((e=>e)),l=function(e){return"The following resources can be found on this moon:\n"+Array.from(new Set(e)).map((e=>`* {{ilink|${e}}}`)).join("\n")}(e),n=function(e){const l={Copper:"Cu",Cadmium:"Cd",Emeril:"Em",Indium:"In","Activated Copper":"Cu+","Activated Cadmium":"Cd+","Activated Emeril":"Em+","Activated Indium":"In+",Ammonia:"NH3",Dioxite:"CO2",Paraffinium:"Pf",Phosphorus:"P",Pyrite:"Py",Uranium:"U",Silver:"Ag",Gold:"Au","Magnetised Ferrite":"Fe++",Sodium:"Na",Cobalt:"Co",Salt:"NaCl","Star Bulb":"Sb","Cactus Flesh":"Cc","Gamma Root":"Gr","Fungal Mould":"Ml","Frost Crystal":"Fc",Solanium:"So",Mordite:"Mo",Faecium:"Fa","Ancient Bones":"Ab","Salvageable Scrap":"Sa","Rusted Metal":"Jn",Basalt:"B"};return Array.from(new Set(e)).map((e=>`[[${l[e]||e}]]`)).join(", ")}(e);a.resourceListOutput=l,a.chemicalSymbolsOutput=n};return te(o,(()=>{u()}),{deep:!0}),(l,a)=>(d(),D(e(Ye),{class:"my-4",header:"Recursos",toggleable:""},{default:p((()=>[(d(!0),g(le,null,Ve(o.value,((l,u)=>(d(),g("div",{key:l.id,class:"planet-container"},[(d(!0),g(le,null,Ve(l.resources,((a,s)=>(d(),g("div",{key:s,class:"resource-container"},[n("div",Il,t(a),1),l.resources.length>3?(d(),D(e(xe),{key:0,onClick:e=>((e,l)=>{o.value[e].resources.splice(l,1)})(u,s),icon:"pi pi-times",class:"remove-resource-button","aria-label":"Eliminar recurso"},null,8,["onClick"])):P("",!0),i(Ge,{modelValue:l.resources[s],"onUpdate:modelValue":e=>l.resources[s]=e,label:"Nombre del recurso:",class:"resource-select"},null,8,["modelValue","onUpdate:modelValue"])])))),128)),i(e(xe),{onClick:e=>(e=>{o.value[e].resources.length<6&&o.value[e].resources.push("")})(u),disabled:l.resources.length>=6},{default:p((()=>a[0]||(a[0]=[v(" Agregar Recurso ")]))),_:2},1032,["onClick","disabled"])])))),128))])),_:1}))}}),$l=Me(kl,[["__scopeId","data-v-8f116a20"]]),Pl={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Dl=["id"],Ul=F({__name:"PlanetSentinels",props:H({resetEvent:{},isMoon:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=W(l,"modelValue"),t=T("planetdescriptors"),o=ne(),{sentinelInfo:u,sentinels:s}=pe(o),r={Bajo:"[[Sentinel]] activity on this moon is classified as: ''{sentinels}''. The sentinels don't present an immediate threat.",Alto:"[[Sentinel]] activity on this moon is classified as: ''{sentinels}''. The sentinels present an immediate threat.",Agresivo:"[[Sentinel]] activity on this moon is classified as: ''{sentinels}''. The sentinels present an immediate threat.",Corruptos:"[[Sentinel]] activity on this moon is classified as: ''{sentinels}''. The sentinels present an immediate threat."};return te(a,(e=>{var l;const n=null==(l=Ne.find((l=>l.items.some((l=>l.value===e)))))?void 0:l.groupLabel;n&&r[n]?u.value=r[n].replace("{sentinels}",s.value):u.value=""})),(l,o)=>(d(),D(G,null,{label:p((()=>[n("div",Pl,[n("label",{id:e(t)},"Nivel centinela de la Luna:",8,Dl),i(h,{tooltip:"Se puede encontrar en el menú de descubrimiento.","help-img":"planet/sentinels","help-title":"Nivel planetario de los centinelas"},{default:p((()=>o[1]||(o[1]=[v(" Se puede encontrar en el menú de descubrimiento. ")]))),_:1})])])),input:p((()=>[i(j,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"aria-labelledby":e(t),options:e(Ne),optionLabel:"label",optionGroupLabel:"groupLabel",optionGroupChildren:"items","reset-event":l.resetEvent,filter:""},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),El={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Ml=["id"],Fl=F({__name:"PlanetWeather",props:H({resetEvent:{},isMoon:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=W(l,"modelValue"),t=T("planetweather");return(l,o)=>(d(),D(G,null,{label:p((()=>[n("div",El,[n("label",{id:e(t)},"Clima de la Luna:",8,Ml),i(h,{tooltip:"Se puede encontrar en el menú de descubrimiento.","help-img":"planet/weather","help-title":"El tiempo de la Luna"},{default:p((()=>o[1]||(o[1]=[v(" Se puede encontrar en el menú de descubrimiento. ")]))),_:1})])])),input:p((()=>[i(j,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"aria-labelledby":e(t),options:e(je),"reset-event":l.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Al={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Ll=["id"],cl=F({__name:"PlanetFauna",props:H({resetEvent:{},isMoon:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=W(l,"modelValue"),t=T("planetdescriptors");return(l,o)=>(d(),D(G,null,{label:p((()=>[n("div",Al,[n("label",{id:e(t)},"Fauna:",8,Ll),i(h,{tooltip:"Se puede encontrar en el menú de descubrimiento.","help-img":"planet/fauna","help-title":"Nivel de fauna de la Luna"},{default:p((()=>o[1]||(o[1]=[v(" Se puede encontrar en el menú de descubrimiento. ")]))),_:1})])])),input:p((()=>[i(j,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"aria-labelledby":e(t),options:e(He),"reset-event":l.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Ol={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},ql=["id"],Rl=F({__name:"PlanetFlora",props:H({resetEvent:{},isMoon:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const a=W(l,"modelValue"),t=T("planetdescriptors");return(l,o)=>(d(),D(G,null,{label:p((()=>[n("div",Ol,[n("label",{id:e(t)},"Flora:",8,ql),i(h,{tooltip:"Se puede encontrar en el menú de descubrimiento.","help-img":"planet/flora","help-title":"Nivel de flora de la Luna"},{default:p((()=>o[1]||(o[1]=[v(" Se puede encontrar en el menú de descubrimiento. ")]))),_:1})])])),input:p((()=>[i(j,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),"aria-labelledby":e(t),options:e(We),"reset-event":l.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Bl=F({__name:"PlanetInput",setup(l){const n=ne(),{name:a,discovered:t,discoveredlink:o,image:u,glyphs:s,atmosphere:r,mode:m,orgName:c,additionalInfo:b,discDate:y,Planetdescriptors:f,docBy:V,biome:h,sentinels:_,weather:j,faunaNum:x,platform:C,docDate:N,navImage:w,system:k,fauna:U,flora:E,researchteam2:I,planet:A}=pe(n),F=Ce(""),L=B((()=>/^\d*$/.test(F.value)));te(F,(e=>{x.value=(e=>{const l=e.replace(/[^0-9.]/g,"");if(!l)return"";const[n,a]=l.split("."),t=n.replace(/\B(?=(\d{3})+(?!\d))/g,",");return a?`${t}.${a}`:t})(e)}));const R=B((()=>!t.value)),q=B((()=>!o.value));return(l,n)=>(d(),g(le,null,[i(M,{modelValue:e(a),"onUpdate:modelValue":n[0]||(n[0]=e=>S(a)?a.value=e:null),"help-img":"planet/planetName","help-title":"Nombre del Planeta",label:"Nombre de la Luna:",tooltip:"Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o)."},{default:p((()=>n[24]||(n[24]=[v(" Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o). ")]))),_:1},8,["modelValue"]),i(M,{modelValue:e(c),"onUpdate:modelValue":n[1]||(n[1]=e=>S(c)?c.value=e:null),label:"Nombre original antes de registrar (si está disponible):"},null,8,["modelValue"]),i(fe,{modelValue:e(u),"onUpdate:modelValue":n[2]||(n[2]=e=>S(u)?u.value=e:null),label:"Imagen principal:","help-title":"Subida de Archivo",tooltip:"La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."},{default:p((()=>[i(Se)])),_:1},8,["modelValue"]),i(fe,{modelValue:e(w),"onUpdate:modelValue":n[3]||(n[3]=e=>S(w)?w.value=e:null),label:"Nombre de la imagen principal:","help-title":"Subida de Archivo",tooltip:"La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."},{default:p((()=>[i(Se)])),_:1},8,["modelValue"]),i(M,{modelValue:e(k),"onUpdate:modelValue":n[4]||(n[4]=e=>S(k)?k.value=e:null),"help-img":"planet/planetName","help-title":"Nombre del Sistema",label:"Nombre del Sistema:",tooltip:"Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o)."},{default:p((()=>n[25]||(n[25]=[v(" Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o). ")]))),_:1},8,["modelValue"]),i(M,{modelValue:e(A),"onUpdate:modelValue":n[5]||(n[5]=e=>S(A)?A.value=e:null),label:"Nombre del planeta de la luna:",tooltip:"Nombre del planeta que orbita esta luna."},null,8,["modelValue"]),i(Fe,{modelValue:e(s),"onUpdate:modelValue":n[6]||(n[6]=e=>S(s)?s.value=e:null)},null,8,["modelValue"]),i(wl,{modelValue:e(h),"onUpdate:modelValue":n[7]||(n[7]=e=>S(h)?h.value=e:null)},null,8,["modelValue"]),i(Nl,{modelValue:e(f),"onUpdate:modelValue":n[8]||(n[8]=e=>S(f)?f.value=e:null)},null,8,["modelValue"]),i(M,{modelValue:e(r),"onUpdate:modelValue":n[9]||(n[9]=e=>S(r)?r.value=e:null),label:"Atmósfera de la Luna:",tooltip:"Se puede encontrar en la guía de exploración.","help-img":"planet/atmosphere","help-title":"Atmósfera de la Luna"},{default:p((()=>n[26]||(n[26]=[v("Se puede encontrar en la guía de exploración.")]))),_:1},8,["modelValue"]),i(Fl,{modelValue:e(j),"onUpdate:modelValue":n[10]||(n[10]=e=>S(j)?j.value=e:null)},null,8,["modelValue"]),i($l),i(Ul,{modelValue:e(_),"onUpdate:modelValue":n[11]||(n[11]=e=>S(_)?_.value=e:null)},null,8,["modelValue"]),i(Rl,{modelValue:e(E),"onUpdate:modelValue":n[12]||(n[12]=e=>S(E)?E.value=e:null)},null,8,["modelValue"]),i(cl,{modelValue:e(U),"onUpdate:modelValue":n[13]||(n[13]=e=>S(U)?U.value=e:null)},null,8,["modelValue"]),i(M,{modelValue:F.value,"onUpdate:modelValue":n[14]||(n[14]=e=>F.value=e),label:"Número de Fauna:","help-img":"planet/faunaNum","help-title":"Número de fauna de la Luna",invalid:!L.value,"error-message":"Solo debe contener numeros",tooltip:"Se puede encontrar en el menú de descubrimiento."},{default:p((()=>n[27]||(n[27]=[v("Se puede encontrar en el menú de descubrimiento. ")]))),_:1},8,["modelValue","invalid"]),i(_e),i(Je),i(Xe),i(ge,{modelValue:e(y),"onUpdate:modelValue":n[15]||(n[15]=e=>S(y)?y.value=e:null),label:"¿Cuándo se descubrió esta Luna?"},null,8,["modelValue"]),i(ge,{modelValue:e(N),"onUpdate:modelValue":n[16]||(n[16]=e=>S(N)?N.value=e:null),label:"¿Cuándo se documentó esta Luna?"},null,8,["modelValue"]),i(M,{modelValue:e(I),"onUpdate:modelValue":n[17]||(n[17]=e=>S(I)?I.value=e:null),label:"Departamento: (Opcional)"},null,8,["modelValue"]),i(Re,{modelValue:e(m),"onUpdate:modelValue":n[18]||(n[18]=e=>S(m)?m.value=e:null)},null,8,["modelValue"]),i(Ae,{modelValue:e(C),"onUpdate:modelValue":n[19]||(n[19]=e=>S(C)?C.value=e:null)},null,8,["modelValue"]),R.value?(d(),D(M,{key:0,modelValue:e(o),"onUpdate:modelValue":n[20]||(n[20]=e=>S(o)?o.value=e:null),label:"Nombre en la wiki del descubridor:"},null,8,["modelValue"])):P("",!0),q.value?(d(),D(M,{key:1,modelValue:e(t),"onUpdate:modelValue":n[21]||(n[21]=e=>S(t)?t.value=e:null),label:"Alias del descubridor si no tiene wiki:"},null,8,["modelValue"])):P("",!0),i(M,{modelValue:e(V),"onUpdate:modelValue":n[22]||(n[22]=e=>S(V)?V.value=e:null),label:"Nombre del documentador si no es el descubridor:"},null,8,["modelValue"]),i(qe,{modelValue:e(b),"onUpdate:modelValue":n[23]||(n[23]=e=>S(b)?b.value=e:null),label:"Información Adicional:"},null,8,["modelValue"]),i(Oe)],64))}}),fn=F({__name:"Moon",setup:e=>(e,l)=>(d(),D(Ee,null,{input:p((()=>[i(Bl)])),output:p((()=>[i(Vl)])),_:1}))});export{fn as default};
