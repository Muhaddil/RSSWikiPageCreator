import{_}from"./PageCreator.vue_vue_type_script_setup_true_lang-DWQFBd2r.js";import{d as U,u as F,s as z,c as D,a as T,o as V,b as l,e as L,f as s,g as B,t,h as e,F as H,ab as O,ac as R,ae as j,j as x,I as W,k as g,Z as q,l as i,_ as f,G as Z,x as J}from"./main-BW6OG3nc.js";import{c as K,_ as Q,a as X,S as Y,G as h}from"./FileUploadNotice.vue_vue_type_script_setup_true_lang-CGXbBXE4.js";import{_ as ee}from"./GameModeSelect.vue_vue_type_script_setup_true_lang-BttQKkui.js";import{_ as le}from"./CoordinateInput.vue_vue_type_script_setup_true_lang-i3XzhPnM.js";import{T as ae}from"./TextareaInput-CwhrZeqi.js";import"./index-DheFGZAk.js";import"./debounce-B7UkYTDg.js";import"./index-Cl8xohoo.js";const ne={class:"keep-linebreaks"},oe={class:"keep-linebreaks"},te={class:"keep-linebreaks"},se={class:"keep-linebreaks"},ue={key:0},de=U({__name:"SandwormOutput",setup(a){const n=F(),{release:o,image:u,discovered:i,discoveredlink:d,mode:r,system:m,planet:p,moon:v,glyphs:c,appearonreload:b,regionData:g,researchteam2:h,stomachContent:_,maxdepth:y,appearance:f,docBy:U,docBySentence:C}=z(n),w=D((()=>{const e=`planet [[${p.value}]]`,l=`moon [[${v.value}]] of the`;return v.value?`${l} ${e}`:e}));return(a,n)=>(V(),T(H,null,[l("div",null,[n[0]||(n[0]=l("span",null,"{{Version|",-1)),B(t(e(o)),1),n[1]||(n[1]=l("span",null,"}}",-1))]),n[7]||(n[7]=l("div",null,[l("span",null,"{{Royal Space Society}}")],-1)),n[8]||(n[8]=l("div",null,"{{Settlement infobox",-1)),l("div",null,"| name = Immortal Worm "+t(e(p)),1),l("div",null,"| image = "+t(e(u)||"nmsMisc_NotAvailable.png"),1),l("div",null,"| galaxy = "+t(e(g).galaxy),1),l("div",null,"| region = "+t(e(g).region),1),l("div",null,"| system = "+t(e(m)),1),l("div",null,"| planet = "+t(e(p)),1),l("div",null,"| moon = "+t(e(v)),1),l("div",null,[n[2]||(n[2]=B("| coordinates = ")),n[3]||(n[3]=l("span",null,"{{Glyphs2Coords|",-1)),B(t(e(c)),1),n[4]||(n[4]=l("span",null,"}}",-1))]),n[9]||(n[9]=l("div",null,"| genus = Shaihuluda",-1)),n[10]||(n[10]=l("div",null,"| wormclass = Ceaseless Burrower",-1)),l("div",null,"| wormmaxdepth = "+t(e(y)),1),l("div",null,"| wormstomach = "+t(e(_)),1),l("div",null,"| civilized = "+t(e(K)),1),l("div",null,"| discovered = "+t(e(i)),1),l("div",null,"| discoveredlink = "+t(e(d)),1),l("div",null,"| researchteam = "+t(e(h)),1),l("div",null,"| mode = "+t(e(r)),1),l("div",null,"| release = "+t(e(o)),1),n[11]||(n[11]=l("div",null,"}}",-1)),l("div",null,"'''Immortal Worm "+t(e(p))+"''' is a creature.",1),n[12]||(n[12]=l("br",null,null,-1)),n[13]||(n[13]=l("div",null,"==Summary==",-1)),l("div",null,[l("div",null," '''Immortal Worm "+t(e(p))+"''' is a [[creature]], a member of the [[Shaihuluda]] [[genus]]. ",1)]),n[14]||(n[14]=l("br",null,null,-1)),n[15]||(n[15]=l("div",null,"==Appearance==",-1)),l("div",ne,t(e(f)),1),n[16]||(n[16]=l("br",null,null,-1)),n[17]||(n[17]=l("div",null,"==Location==",-1)),l("div",oe,"It can be found on the "+t(w.value)+" in the [["+t(e(m))+"]] [[star system]].",1),n[18]||(n[18]=l("br",null,null,-1)),l("div",te,[n[5]||(n[5]=l("span",null,"{{CoordGlyphConvert",-1)),B("|"+t(e(c)),1),n[6]||(n[6]=l("span",null,"}}",-1))]),n[19]||(n[19]=l("br",null,null,-1)),n[20]||(n[20]=l("div",null,"==Additional Information==",-1)),l("div",se,t(e(b)),1),e(U)&&e(U)!==e(d)&&e(U)!==e(i)?(V(),T("div",ue,"Documented by "+t(e(C)),1)):L("",!0),n[21]||(n[21]=l("br",null,null,-1)),n[22]||(n[22]=l("div",null,"==Gallery==",-1)),s(Q)],64))}}),ie=["Consumed waypoints","Entire Trade Outpost","Freighter components","Horrific Eggs","Layers of teeth","Lost starships","Magma","Many Sentinels","Minerals","Mostly sand","Other gargantuans","Planetary beacon","Rubble","Sentinel Walkers","Several Gek","Unpleasant liquid"],re=["Puntos de control consumidos","Puesto comercial entero","Componentes de carguero","Huevos horrorosos","Capas de dientes","Naves perdidas","Magma","Muchos Centinelas","Minerales","Principalmente arena","Otros seres pantagruélicos","Baliza planetaria","Escombros","Caminantes Centinelas","Varios Gek","Líquido desagradable"],me=re.map(((e,l)=>({label:e,value:ie[l]}))),pe={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},ve=["id"],be=U({__name:"StomachContentInput",props:O({resetEvent:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const n=R(a,"modelValue"),o=j("stomachcontentinput");return(a,t)=>(V(),x(W,null,{label:g((()=>[l("div",pe,[l("label",{id:e(o)},"Contenido del estómago:",8,ve)])])),input:g((()=>[s(q,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),"aria-labelledby":e(o),options:e(me),"reset-event":a.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Ve=["Ceaseless Burrower","Colossal Being","Gargantuan","Giant Parasite","Planetary Maggot","The Consumer","Unstoppable Nematode","Worm Lord"],ge=["Excavador incesante","Ser colosal","Pantagruélico","Parásito gigante","Cresa planetaria","El Consumidor","Nematodo imparable","Señor de los gusanos"],fe=ge.map(((e,l)=>({label:e,value:Ve[l]}))),ye={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Se=["id"],we=U({__name:"Class",props:O({resetEvent:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const n=R(a,"modelValue"),o=j("stomachcontentinput");return(a,t)=>(V(),x(W,null,{label:g((()=>[l("div",ye,[l("label",{id:e(o)},"Clase:",8,Se)])])),input:g((()=>[s(q,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),"aria-labelledby":e(o),options:e(fe),"reset-event":a.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Ce=["","This creature will automatically spawn on game reload.","This creature will not automatically spawn on game reload."],$e=["No se","Sí","No"],ke=$e.map(((e,l)=>({label:e,value:Ce[l]}))),xe={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Ue=["id"],Ie=U({__name:"AppearonReload",props:O({resetEvent:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const n=R(a,"modelValue"),o=j("stomachcontentinput");return(a,t)=>(V(),x(W,null,{label:g((()=>[l("div",xe,[l("label",{id:e(o)},"¿Este gusano aparece al recargar el juego?",8,Ue)])])),input:g((()=>[s(q,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),"aria-labelledby":e(o),options:e(ke),"reset-event":a.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Ee=U({__name:"SandwormInput",setup(l){const a=F(),{discovered:n,discoveredlink:o,image:t,glyphs:u,appearonreload:d,system:r,planet:m,moon:p,axes:v,stomachContent:c,mode:b,docBy:_,maxdepth:y,appearance:U,sandwormclass:C,researchteam2:w}=z(a),k=D((()=>/^\d*$/.test(y.value))),S=D((()=>!n.value)),j=D((()=>!o.value));return(l,a)=>(V(),T(H,null,[s(Y,{modelValue:e(t),"onUpdate:modelValue":a[0]||(a[0]=e=>i(t)?t.value=e:null),label:"Imagen principal","help-title":"Subida de Archivo",tooltip:"La imagen no se subirá a la wiki. Esto es solo para completar automáticamente el nombre de la imagen."},{default:g((()=>[s(X)])),_:1},8,["modelValue"]),s(f,{modelValue:e(r),"onUpdate:modelValue":a[1]||(a[1]=e=>i(r)?r.value=e:null),label:"Nombre del Sistema"},null,8,["modelValue"]),s(f,{modelValue:e(m),"onUpdate:modelValue":a[2]||(a[2]=e=>i(m)?m.value=e:null),label:"Nombre del Planeta",tooltip:"Nombre del Planeta O el planeta rodeado por la luna donde se puede encontrar el asentamiento."},null,8,["modelValue"]),s(f,{modelValue:e(p),"onUpdate:modelValue":a[3]||(a[3]=e=>i(p)?p.value=e:null),label:"Nombre de la Luna",tooltip:"Si asentamiento está en una luna. Déjalo en blanco si la base está en un planeta."},null,8,["modelValue"]),s(le,{modelValue:e(v),"onUpdate:modelValue":a[4]||(a[4]=e=>i(v)?v.value=e:null)},null,8,["modelValue"]),s(Z,{modelValue:e(u),"onUpdate:modelValue":a[5]||(a[5]=e=>i(u)?u.value=e:null)},null,8,["modelValue"]),s(we,{modelValue:e(C),"onUpdate:modelValue":a[6]||(a[6]=e=>i(C)?C.value=e:null)},null,8,["modelValue"]),s(f,{modelValue:e(y),"onUpdate:modelValue":a[7]||(a[7]=e=>i(y)?y.value=e:null),label:"Máxima profundidad:",invalid:!k.value,"error-message":"Sólo debe contener números"},null,8,["modelValue","invalid"]),s(be,{modelValue:e(c),"onUpdate:modelValue":a[8]||(a[8]=e=>i(c)?c.value=e:null)},null,8,["modelValue"]),s(Ie,{modelValue:e(d),"onUpdate:modelValue":a[9]||(a[9]=e=>i(d)?d.value=e:null)},null,8,["modelValue"]),s(ee,{modelValue:e(b),"onUpdate:modelValue":a[10]||(a[10]=e=>i(b)?b.value=e:null)},null,8,["modelValue"]),S.value?(V(),x(f,{key:0,modelValue:e(o),"onUpdate:modelValue":a[11]||(a[11]=e=>i(o)?o.value=e:null),label:"Nombre en la wiki del descubridor:"},null,8,["modelValue"])):L("",!0),j.value?(V(),x(f,{key:1,modelValue:e(n),"onUpdate:modelValue":a[12]||(a[12]=e=>i(n)?n.value=e:null),label:"Alias del descubridor si no tiene wiki:"},null,8,["modelValue"])):L("",!0),s(f,{modelValue:e(_),"onUpdate:modelValue":a[13]||(a[13]=e=>i(_)?_.value=e:null),label:"Alias del documentador si no es el descubridor:"},null,8,["modelValue"]),s(f,{modelValue:e(w),"onUpdate:modelValue":a[14]||(a[14]=e=>i(w)?w.value=e:null),label:"Departamento: (Opcional)"},null,8,["modelValue"]),s(ae,{modelValue:e(U),"onUpdate:modelValue":a[15]||(a[15]=e=>i(U)?U.value=e:null),label:"Apariencia"},null,8,["modelValue"]),s(h)],64))}}),Le=U({__name:"Sandworm",setup:e=>(J((()=>{window.location.href="/RSSWikiPageCreator/indextest.html"})),(e,l)=>(V(),x(_,null,{input:g((()=>[s(Ee)])),output:g((()=>[s(de)])),_:1})))});export{Le as default};
