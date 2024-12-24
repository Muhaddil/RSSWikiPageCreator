import{c as Y,_ as Z,a as _,S as c,b as h,e as ee}from"./FileUploadNotice.vue_vue_type_script_setup_true_lang-B6urbl9g.js";import{d as G,u as q,s as H,c as E,i as le,B as ne,o as f,a as D,b as l,e as V,t,f as e,h as i,k as r,g as w,F as W,x as ae,j as R,E as oe,y as te,I as ie,l as u,_ as p,G as ue}from"./main-W8z41cxm.js";import{_ as z}from"./WikiTemplate.vue_vue_type_script_setup_true_lang-DFO_-MsP.js";import{T as de}from"./TextareaInput-CYpis8I9.js";import{_ as se}from"./DateSelect.vue_vue_type_script_setup_true_lang-BNJIfSSH.js";import{m as re,n as K,_ as me,a as pe}from"./common-Do6ycOuC.js";const ve={key:0},be={key:0},Ve={key:1},fe={key:2},ge=G({__name:"MineralOutput",setup(a){const n=q(),{name:o,discovered:u,discoveredlink:d,image:s,glyphs:m,system:p,planet:v,moon:c,mode:b,researchteam2:_,orgName:y,appearance:g,elements:h,discDate:x,polymorphic:N,metalContent:U,formation:j,docBy:k,regionData:C,release:I,notes:M,docBySentence:S}=H(n),G=E((()=>{const e=parseInt(U.value);if(!isNaN(e))return e+"%"}));le((()=>{h.value[0]===h.value[1]&&(h.value[1]="")})),ne(d,(e=>{e&&(u.value="")}));const O=E((()=>h.value.filter(Boolean)));return(a,n)=>(f(),D(W,null,[l("div",null,[n[0]||(n[0]=l("span",null,"{{Version|",-1)),V(t(e(I)),1),n[1]||(n[1]=l("span",null,"}}",-1))]),n[3]||(n[3]=l("div",null,"{{Mineral infobox",-1)),l("div",null,"| name = "+t(e(o)),1),l("div",null,"| image = "+t(e(s)||"nmsMisc_NotAvailable.png"),1),l("div",null,"| galaxy = "+t(e(C).galaxy),1),l("div",null,"| region = "+t(e(C).region),1),l("div",null,"| system = "+t(e(p)),1),l("div",null,"| planet = "+t(e(v)),1),l("div",null,"| moon = "+t(e(c)),1),l("div",null,"| content = "+t(G.value),1),l("div",null,"| formation = "+t(e(j)),1),l("div",null,"| notes = "+t(e(M)),1),l("div",null,"| element_primary = "+t(e(h)[0]),1),l("div",null,"| element_secondary = "+t(e(h)[1]),1),l("div",null,"| polymorphic = "+t(e(N)),1),l("div",null,"| civilized = "+t(e(Y)),1),l("div",null,"| discoveredlink = "+t(e(d)),1),l("div",null,"| discovered = "+t(e(u)),1),l("div",null,"| discovered_on = "+t(e(x)),1),l("div",null,"| mode = "+t(e(b)),1),l("div",null,"| researchteam = "+t(e(_)),1),l("div",null,"| release = "+t(e(I)),1),n[4]||(n[4]=l("div",null,"}}",-1)),l("div",null,"'''"+t(e(o))+"''' is a variety of mineral.",1),n[5]||(n[5]=l("br",null,null,-1)),n[6]||(n[6]=l("div",null,"==Summary==",-1)),l("div",null,"'''"+t(e(o))+"''' is a type of [[mineral]]. "+t(e(g)),1),n[7]||(n[7]=l("br",null,null,-1)),n[8]||(n[8]=l("div",null,"==Alias Names==",-1)),e(y)?(f(),D("div",ve,[i(z,{"template-name":"aliasc"},{default:r((()=>[V("text=Original|name="+t(e(y)),1)])),_:1})])):w("",!0),l("div",null,[i(z,{"template-name":"aliasc"},{default:r((()=>[V("text=Current|name="+t(e(o)),1)])),_:1})]),n[9]||(n[9]=l("br",null,null,-1)),n[10]||(n[10]=l("div",null,"==Discovery Menu==",-1)),l("div",null,"* Metal Content: "+t(G.value),1),l("div",null,"* Formation Process: "+t(e(j)),1),l("div",null,"* Notes: "+t(e(M)),1),n[11]||(n[11]=l("br",null,null,-1)),n[12]||(n[12]=l("div",null,"==Location==",-1)),l("div",null,[n[2]||(n[2]=V(" It can be found on the ")),e(c)?(f(),D("span",be,"[[moon]] [["+t(e(c))+"]] of the",1)):w("",!0),V(" [[planet]] [["+t(e(v))+"]] in the [["+t(e(p))+"]] [[star system]]. ",1)]),l("div",null,[i(z,{"template-name":"CoordGlyphConvert"},{default:r((()=>[V(t(e(m)),1)])),_:1})]),n[13]||(n[13]=l("br",null,null,-1)),n[14]||(n[14]=l("div",null,"==Resources==",-1)),O.value.length?(f(),D("div",Ve," This mineral provides the "+t(O.value.length>1?"resources":"resource")+" "+t(O.value.map((e=>`[[${e}]]`)).join(" and "))+" when mined. ",1)):w("",!0),n[15]||(n[15]=l("br",null,null,-1)),n[16]||(n[16]=l("div",null,"==Additional Information==",-1)),e(k)&&e(k)!==e(d)&&e(k)!==e(u)?(f(),D("div",fe,"Documented by "+t(e(S)),1)):w("",!0),n[17]||(n[17]=l("br",null,null,-1)),n[18]||(n[18]=l("div",null,"==Gallery==",-1)),i(Z)],64))}}),ye={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Ne=["id"],Q=G({__name:"ResourceInput",props:{resetEvent:{},label:{},index:{}},setup(a){const n=q(),{elements:o}=H(n),u=ae("resourcesMineral");return(a,n)=>(f(),R(ie,null,{label:r((()=>[l("div",ye,[l("label",{id:e(u)},t(a.label),9,Ne),i(oe,{tooltip:"Encontrado en el escaneo de mineral. Dejar vacío si no está en la lista.","help-img":`mineral/element${a.index}`,"help-title":`${a.label}`},{default:r((()=>n[1]||(n[1]=[V(" Encontrado en el escaneo de mineral. Dejar vacío si no está en la lista.")]))),_:1},8,["help-img","help-title"])])])),input:r((()=>[i(te,{modelValue:e(o)[a.index],"onUpdate:modelValue":n[0]||(n[0]=l=>e(o)[a.index]=l),"aria-labelledby":e(u),options:e(re),"reset-event":a.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),xe=G({__name:"MineralInput",setup(l){const a=q(),{name:n,discovered:o,discoveredlink:t,image:d,glyphs:s,system:m,planet:v,moon:b,researchteam2:y,orgName:g,appearance:x,notes:N,discDate:U,polymorphic:j,metalContent:k,formation:C,docBy:I}=H(a),M=E((()=>""!==K(k.value))),S=E((()=>""!==K(j.value))),G=E((()=>!o.value)),O=E((()=>!t.value));return(l,a)=>(f(),D(W,null,[i(p,{modelValue:e(n),"onUpdate:modelValue":a[0]||(a[0]=e=>u(n)?n.value=e:null),"help-img":"mineral/mineralName","help-title":"Nombre del Mineral",label:"Nombre del Mineral:",tooltip:"Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o)."},{default:r((()=>a[17]||(a[17]=[V(" Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o). ")]))),_:1},8,["modelValue"]),i(c,{modelValue:e(d),"onUpdate:modelValue":a[1]||(a[1]=e=>u(d)?d.value=e:null),label:"Imagen principal","help-title":"Subida de Archivo",tooltip:"La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."},{default:r((()=>[i(_)])),_:1},8,["modelValue"]),i(p,{modelValue:e(g),"onUpdate:modelValue":a[2]||(a[2]=e=>u(g)?g.value=e:null),label:"Nombre original antes de registrar (si está disponible):"},null,8,["modelValue"]),i(p,{modelValue:e(m),"onUpdate:modelValue":a[3]||(a[3]=e=>u(m)?m.value=e:null),label:"Nombre del sistema:"},null,8,["modelValue"]),i(p,{modelValue:e(v),"onUpdate:modelValue":a[4]||(a[4]=e=>u(v)?v.value=e:null),label:"Nombre del planeta:",tooltip:"Nombre del planeta O el planeta alrededor del cual orbita la luna donde se encuentra la criatura."},null,8,["modelValue"]),i(p,{modelValue:e(b),"onUpdate:modelValue":a[5]||(a[5]=e=>u(b)?b.value=e:null),label:"Nombre de la luna (si la planta está en la luna):",tooltip:"Si la criatura está ubicada en una luna. Déjelo en blanco si la planta está en un planeta."},null,8,["modelValue"]),i(ue,{modelValue:e(s),"onUpdate:modelValue":a[6]||(a[6]=e=>u(s)?s.value=e:null)},null,8,["modelValue"]),i(p,{modelValue:e(k),"onUpdate:modelValue":a[7]||(a[7]=e=>u(k)?k.value=e:null),label:"Contenido de metales:",tooltip:"Encontrado en el escaneo de minerales.","help-img":"mineral/content","help-title":"Contenido metálico",invalid:M.value,"error-message":"Sólo debe contener números",maxlength:"2"},{default:r((()=>a[18]||(a[18]=[V("Encontrado en el escaneo de minerales.")]))),_:1},8,["modelValue","invalid"]),i(me,{modelValue:e(C),"onUpdate:modelValue":a[8]||(a[8]=e=>u(C)?C.value=e:null)},null,8,["modelValue"]),i(pe,{modelValue:e(N),"onUpdate:modelValue":a[9]||(a[9]=e=>u(N)?N.value=e:null)},null,8,["modelValue"]),i(p,{modelValue:e(j),"onUpdate:modelValue":a[10]||(a[10]=e=>u(j)?j.value=e:null),label:"Polimórfico (número de instancias):",maxlength:"2",invalid:S.value,"error-message":"Sólo debe contener números","help-title":"Polimorfismo",tooltip:"Cuántos modelos diferentes de este mineral se descubrieron."},{default:r((()=>a[19]||(a[19]=[V('A veces, varios modelos de minerales tienen el mismo nombre. Esto se llama "polimorfismo". Introduzca el número de cuantos modelos minerales diferentes tenían este nombre. ')]))),_:1},8,["modelValue","invalid"]),i(Q,{label:"Elemento Primario",index:0}),i(Q,{label:"Elemento Secundario",index:1}),i(se,{modelValue:e(U),"onUpdate:modelValue":a[11]||(a[11]=e=>u(U)?U.value=e:null),label:"Fecha del descubrimiento"},null,8,["modelValue"]),G.value?(f(),R(p,{key:0,modelValue:e(t),"onUpdate:modelValue":a[12]||(a[12]=e=>u(t)?t.value=e:null),label:"Nombre en la wiki del descubridor:"},null,8,["modelValue"])):w("",!0),O.value?(f(),R(p,{key:1,modelValue:e(o),"onUpdate:modelValue":a[13]||(a[13]=e=>u(o)?o.value=e:null),label:"Alias del descubridor si no tiene wiki:"},null,8,["modelValue"])):w("",!0),i(p,{modelValue:e(I),"onUpdate:modelValue":a[14]||(a[14]=e=>u(I)?I.value=e:null),label:"Nombre del documentador si no es el descubridor:"},null,8,["modelValue"]),i(p,{modelValue:e(y),"onUpdate:modelValue":a[15]||(a[15]=e=>u(y)?y.value=e:null),label:"Departamento: (Opcional)"},null,8,["modelValue"]),i(de,{modelValue:e(x),"onUpdate:modelValue":a[16]||(a[16]=e=>u(x)?x.value=e:null),label:"Apariencia:"},null,8,["modelValue"]),i(h)],64))}}),Ee=G({__name:"Mineral",setup:e=>(e,l)=>(f(),R(ee,null,{input:r((()=>[i(xe)])),output:r((()=>[i(ge)])),_:1}))});export{Ee as default};
