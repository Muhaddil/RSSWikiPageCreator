import{c as ie,_ as re,s as me,d as Z,a as pe,S as ve,b as be,e as Ve}from"./FileUploadNotice.vue_vue_type_script_setup_true_lang-B6urbl9g.js";import{d as G,u as Q,s as X,c as B,o as k,a as K,b as l,e as w,t as a,f as e,g as M,h as u,F as le,r as P,w as J,i as h,j as D,k as b,n as fe,_ as g,l as t,m as ge,I as ae,p as ce,q as ye,v as ke,x as xe,E as Ue,y as $e,z as Ce,G as Ne,A as Ie}from"./main-W8z41cxm.js";import{T as ee}from"./TextareaInput-CYpis8I9.js";import{G as Se,s as De}from"./GridCheckboxWrapper-UPGMJZf_.js";import{_ as we}from"./GameModeSelect.vue_vue_type_script_setup_true_lang-DH5byE8V.js";import{r as je,i as Ae,_ as Ee}from"./CoordinateInput.vue_vue_type_script_setup_true_lang-B7oXkPud.js";import{s as Te}from"./index-BMAs_XV7.js";import{_ as Re}from"./DateSelect.vue_vue_type_script_setup_true_lang-BNJIfSSH.js";import{_ as Be}from"./FeatureInput.vue_vue_type_script_setup_true_lang-BqHLYaia.js";import"./index-0kwsbDWQ.js";const Me={class:"keep-linebreaks"},Ge={class:"keep-linebreaks"},Fe={key:0},Pe=G({__name:"baseOutput",setup(o){const n=Q(),{name:s,release:d,image:t,discovered:i,discoveredlink:r,axes:m,researchteam2:c,system:p,planet:v,moon:b,glyphs:g,type:V,platform:_,mode:y,regionData:f,farm:h,geobay:U,landingpad:j,arena:x,terminal:D,racetrack:C,censusplayer:N,censussocial:G,censusreddit:I,censusdiscord:A,censusfriend:P,censusarrival:S,censusshow:E,features:T,layout:R,additionalInfo:F,docBy:z,docBySentence:J}=X(n),O=(new Date).getUTCFullYear(),Z=B((()=>{const e=`planet [[${v.value}]]`,l=`moon [[${b.value}]] of the`;return b.value?`${l} ${e}`:e})),q=B((()=>T.value&&0!==T.value.length?T.value.map((e=>`* [[${e}]]`)).join("\n"):""));return(o,n)=>(k(),K(le,null,[l("div",null,[n[0]||(n[0]=l("span",null,"{{Version|",-1)),w(a(e(d)),1),n[1]||(n[1]=l("span",null,"}}",-1))]),n[5]||(n[5]=l("div",null,"{{Base infobox",-1)),l("div",null,"| name = "+a(e(s)),1),l("div",null,"| image = "+a(e(t)||"nmsMisc_NotAvailable.png"),1),l("div",null,"| civilized = "+a(e(ie)),1),l("div",null,"| researchteam = "+a(e(c)),1),l("div",null,"| builderlink = "+a(e(r)),1),l("div",null,"| builder = "+a(e(i)),1),l("div",null,"| galaxy = "+a(e(f).galaxy),1),l("div",null,"| region = "+a(e(f).region),1),l("div",null,"| system = "+a(e(p)),1),l("div",null,"| planet = "+a(e(v)),1),l("div",null,"| moon = "+a(e(b)),1),l("div",null,"| axes = "+a(e(m)),1),l("div",null,[n[2]||(n[2]=w("| coordinates = ")),n[3]||(n[3]=l("span",null,"{{Glyphs2Coords|",-1)),w(a(e(g)),1),n[4]||(n[4]=l("span",null,"}}",-1))]),l("div",null,"| portalglyphs = "+a(e(g)),1),l("div",null,"| type = "+a(e(V)),1),l("div",null,"| mode = "+a(e(y)),1),l("div",null,"| platform = "+a(e(_)),1),l("div",null,"| release = "+a(e(d)),1),l("div",null,"| farm = "+a(e(h)),1),l("div",null,"| geobay = "+a(e(U)),1),l("div",null,"| landingpad = "+a(e(j)),1),l("div",null,"| arena = "+a(e(x)),1),l("div",null,"| terminal = "+a(e(D)),1),l("div",null,"| racetrack = "+a(e(C)),1),l("div",null,"| censusplayer = "+a(e(N)),1),l("div",null,"| "+a(e(I)?"censusreddit":"censussocial")+" = "+a(e(G)||e(I)),1),l("div",null,"| censusdiscord = "+a(e(A)),1),l("div",null,"| censusfriend = "+a(e(P)),1),l("div",null,"| censusarrival = "+a(e(S)),1),l("div",null,"| censusrenewal = "+a(e(O)),1),l("div",null,"| censusshow = "+a(e(E)),1),n[6]||(n[6]=l("div",null,"}}",-1)),l("div",null,"'''"+a(e(s))+"''' is a player base.",1),n[7]||(n[7]=l("br",null,null,-1)),n[8]||(n[8]=l("div",null,"==Summary==",-1)),l("div",null," '''"+a(e(s))+"''' is a [[Habitable Base|player base]], located on the "+a(Z.value)+" in the [["+a(e(p))+"]] system. ",1),n[9]||(n[9]=l("br",null,null,-1)),n[10]||(n[10]=l("div",null,"==Layout==",-1)),l("div",Me,a(e(R)),1),n[11]||(n[11]=l("br",null,null,-1)),n[12]||(n[12]=l("div",null,"==Features==",-1)),l("div",Ge,a(q.value),1),n[13]||(n[13]=l("br",null,null,-1)),n[14]||(n[14]=l("div",null,"==Additional Information==",-1)),l("div",null,a(e(F)),1),e(z)&&e(z)!==e(r)&&e(z)!==e(i)?(k(),K("div",Fe,"Documented by "+a(e(J)),1)):M("",!0),n[15]||(n[15]=l("br",null,null,-1)),n[16]||(n[16]=l("div",null,"==Gallery==",-1)),u(re)],64))}}),Oe=G({__name:"CensusInputs",setup(a){const o=Q(),{censusplayer:n,censussocial:s,censusreddit:d,censusdiscord:i,censusfriend:r,censusarrival:m,censusshow:c}=X(o),p=P(!1),v=P(!0);J(i,(e=>{const l=/^[a-z0-9._]+$/.test(e);v.value=!e||l}),{debounce:Z}),h((()=>{d.value.toLowerCase().startsWith("u/")&&(d.value=d.value.substring(2))}));const V=B((()=>!d.value.includes(" ")));h((()=>r.value=r.value.toUpperCase()));const _=P(!0);J(r,(e=>{const l=new RegExp(/(?:[0-9A-Za-z]{4}-){2}[0-9A-Za-z]{5}/),a=je(e,l);_.value=!e||a}),{debounce:Z});const y=P(!0);return J(s,(e=>y.value=!e||Ae(e)||e.startsWith("{{")),{debounce:Z}),(a,o)=>(k(),D(e(me),{collapsed:p.value,"onUpdate:collapsed":o[7]||(o[7]=e=>p.value=e),class:"my-4",header:"Censo",toggleable:""},{toggleicon:b((()=>[l("span",{class:fe("pi pi-chevron-"+(p.value?"down":"up"))},null,2)])),default:b((()=>[u(g,{modelValue:e(n),"onUpdate:modelValue":o[0]||(o[0]=e=>t(n)?n.value=e:null),"help-img":"base/playerName","help-title":"Nombre del Jugador",label:"Nombre en el juego",tooltip:"Tu nombre en el juego"},{default:b((()=>o[8]||(o[8]=[w("Tu nombre en el juego. No incluyas los títulos del juego. ")]))),_:1},8,["modelValue"]),e(s)?M("",!0):(k(),D(g,{key:0,modelValue:e(d),"onUpdate:modelValue":o[1]||(o[1]=e=>t(d)?d.value=e:null),invalid:!V.value,"error-message":"El nombre de Reddit no debe incluir espacios",label:"Nombre de Reddit",tooltip:'Tu nombre de Reddit. "u/" no es necesario'},null,8,["modelValue","invalid"])),e(d)?M("",!0):(k(),D(g,{key:1,modelValue:e(s),"onUpdate:modelValue":o[2]||(o[2]=e=>t(s)?s.value=e:null),invalid:!y.value,"error-message":"Por favor proporciona el enlace completo",label:"Nombre en redes sociales",tooltip:"Perfil en redes sociales si no tienes Reddit (Facebook, Instagram, Wiki, etc). Pon aquí el enlace completo"},null,8,["modelValue","invalid"])),u(g,{modelValue:e(i),"onUpdate:modelValue":o[3]||(o[3]=e=>t(i)?i.value=e:null),invalid:!v.value,"error-message":"'Etiqueta de Discord inválida. Por favor da tu nombre de usuario, no tu apodo.'",label:"Nombre de Discord",tooltip:"Tu nombre de Discord. Por favor ingresa tu nombre de usuario, no tu apodo"},null,8,["modelValue","invalid"]),u(ge,{modelValue:e(r),"onUpdate:modelValue":o[4]||(o[4]=e=>t(r)?r.value=e:null),invalid:!_.value,"error-message":"Formato de código de amigo incorrecto","help-img":"base/friendCode","help-title":"Código de Amigo NMS",label:"Código de amigo",tooltip:"Se puede encontrar en las Opciones"},{default:b((()=>o[9]||(o[9]=[w(" Puedes encontrar tu código de amigo en Opciones → Red → Ver Lista de Amigos de No Man's Sky → Mostrar mi Código de Amigo de No Man's Sky ")]))),_:1},8,["modelValue","invalid"]),u(Re,{modelValue:e(m),"onUpdate:modelValue":o[5]||(o[5]=e=>t(m)?m.value=e:null),label:"Fecha de llegada a la RSS"},null,8,["modelValue"]),u(ae,{class:"census-row"},{label:b((()=>o[10]||(o[10]=[l("label",{for:"census-checkbox"},"Crear entrada de censo",-1)]))),input:b((()=>[u(e(Te),{modelValue:e(c),"onUpdate:modelValue":o[6]||(o[6]=e=>t(c)?c.value=e:null),"false-value":"","input-id":"census-checkbox","true-value":"Y",binary:""},null,8,["modelValue"])])),_:1})])),_:1},8,["collapsed"]))}}),ze=ce(Oe,[["__scopeId","data-v-43031f59"]]),Le=["","Artistic","Embassy","Farm","Headquarters","Industrial","Memorial","Residential"],qe=["","Artístico","Embajada","Granja","Cuartel General","Industrial","Memorial","Residencial"],We=qe.map(((e,l)=>({label:e,value:Le[l]}))),He={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Ye=["id"],Ze=G({__name:"BaseTypeSelect",props:ye({resetEvent:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const o=ke(a,"modelValue"),n=xe("hemisphere");return(a,s)=>(k(),D(ae,null,{label:b((()=>[l("div",He,[l("label",{id:e(n)},"Tipo de la base",8,Ye),u(Ue,{tooltip:"Tipo y propósito de la base","help-title":"Tipo y propósito de la base"},{default:b((()=>s[1]||(s[1]=[l("div",{class:"dialog-center"},[l("ul",{class:"dialog-list"},[l("li",null,"Artístico"),l("li",null,"Embajada"),l("li",null,"Granja"),l("li",null,"Cuartel General"),l("li",null,"Industrial"),l("li",null,"Memorial"),l("li",null,"Residencial")])],-1)]))),_:1})])])),input:b((()=>[u($e,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=e=>o.value=e),"aria-labelledby":e(n),options:e(We),"reset-event":a.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Je={class:"is-flex is-flex-direction-column is-gap-2"},Ke=G({__name:"BaseInput",setup(a){const o=Q(),{name:n,discovered:s,discoveredlink:d,image:i,glyphs:r,type:m,system:c,planet:p,moon:v,axes:V,platform:_,mode:y,researchteam2:f,farm:h,geobay:U,landingpad:j,terminal:x,arena:C,racetrack:N,layout:G,features:I,additionalInfo:A,docBy:P}=X(o),S=Ce([{model:h,label:"Granja"},{model:U,label:"Geobahías"},{model:j,label:"Plataforma de Aterrizaje"},{model:x,label:"Terminal"},{model:C,label:"Arena"},{model:N,label:"Pista de Carreras"}]),E=B((()=>!s.value)),T=B((()=>!d.value));return(a,o)=>(k(),K(le,null,[u(g,{modelValue:e(n),"onUpdate:modelValue":o[0]||(o[0]=e=>t(n)?n.value=e:null),"help-img":"base/baseName","help-title":"Nombre de la Base",label:"Nombre",tooltip:"Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o)."},{default:b((()=>o[17]||(o[17]=[w(" Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o). ")]))),_:1},8,["modelValue"]),u(ve,{modelValue:e(i),"onUpdate:modelValue":o[1]||(o[1]=e=>t(i)?i.value=e:null),label:"Imagen principal","help-title":"Subida de Archivo",tooltip:"La imagen no se subirá a la wiki. Esto es solo para completar automáticamente el nombre de la imagen."},{default:b((()=>[u(pe)])),_:1},8,["modelValue"]),u(g,{modelValue:e(c),"onUpdate:modelValue":o[2]||(o[2]=e=>t(c)?c.value=e:null),label:"Sistema"},null,8,["modelValue"]),u(g,{modelValue:e(p),"onUpdate:modelValue":o[3]||(o[3]=e=>t(p)?p.value=e:null),label:"Nombre del Planeta",tooltip:"Nombre del Planeta O el planeta rodeado por la luna donde se puede encontrar la base."},null,8,["modelValue"]),u(g,{modelValue:e(v),"onUpdate:modelValue":o[4]||(o[4]=e=>t(v)?v.value=e:null),label:"Nombre de la Luna",tooltip:"Si la base está ubicada en una luna. Déjalo en blanco si la base está en un planeta."},null,8,["modelValue"]),u(Ee,{modelValue:e(V),"onUpdate:modelValue":o[5]||(o[5]=e=>t(V)?V.value=e:null)},null,8,["modelValue"]),u(Ne,{modelValue:e(r),"onUpdate:modelValue":o[6]||(o[6]=e=>t(r)?r.value=e:null)},null,8,["modelValue"]),u(Ze,{modelValue:e(m),"onUpdate:modelValue":o[7]||(o[7]=e=>t(m)?m.value=e:null)},null,8,["modelValue"]),u(e(De),{class:"mb-4",legend:"Características"},{default:b((()=>[u(Se,{checkboxes:S},null,8,["checkboxes"])])),_:1}),E.value?(k(),D(g,{key:0,modelValue:e(d),"onUpdate:modelValue":o[8]||(o[8]=e=>t(d)?d.value=e:null),label:"Nombre en la wiki del constructor"},null,8,["modelValue"])):M("",!0),T.value?(k(),D(g,{key:1,modelValue:e(s),"onUpdate:modelValue":o[9]||(o[9]=e=>t(s)?s.value=e:null),label:"Alias del constructor si no hay wiki"},null,8,["modelValue"])):M("",!0),u(g,{modelValue:e(P),"onUpdate:modelValue":o[10]||(o[10]=e=>t(P)?P.value=e:null),label:"Documentado por (en caso de no ser el constructor):"},null,8,["modelValue"]),u(we,{modelValue:e(y),"onUpdate:modelValue":o[11]||(o[11]=e=>t(y)?y.value=e:null)},null,8,["modelValue"]),u(Ie,{modelValue:e(_),"onUpdate:modelValue":o[12]||(o[12]=e=>t(_)?_.value=e:null)},null,8,["modelValue"]),u(g,{modelValue:e(f),"onUpdate:modelValue":o[13]||(o[13]=e=>t(f)?f.value=e:null),label:"Departamento: (Opcional)"},null,8,["modelValue"]),u(ze),l("div",Je,[u(ee,{modelValue:e(G),"onUpdate:modelValue":o[14]||(o[14]=e=>t(G)?G.value=e:null),label:"Distribución de la Base"},null,8,["modelValue"]),u(Be,{modelValue:e(I),"onUpdate:modelValue":o[15]||(o[15]=e=>t(I)?I.value=e:null)},null,8,["modelValue"]),u(ee,{modelValue:e(A),"onUpdate:modelValue":o[16]||(o[16]=e=>t(A)?A.value=e:null),label:"Información Adicional"},null,8,["modelValue"])]),u(be)],64))}}),ul=G({__name:"Base",setup:e=>(e,l)=>(k(),D(Ve,null,{input:b((()=>[u(Ke)])),output:b((()=>[u(Pe)])),_:1}))});export{ul as default};
