import{_ as z}from"./logo-white-CwkOOWqZ.js";import{C as _,D as j,E as P,a8 as R,aN as C,a as c,o as s,F as h,J as W,H as d,b as i,z as g,e as T,d as q,r as O,c as N,j as B,k as p,f,h as v,g as S,t as y,p as E}from"./main-CUdmV-Wl.js";import{s as k}from"./index-CfaTqabV.js";import{s as F}from"./index-j2ji1kaQ.js";import"./index-BSGj8d_z.js";var K=_`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`,M={root:function(e){var t=e.props;return["p-timeline p-component","p-timeline-"+t.align,"p-timeline-"+t.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},V=j.extend({name:"timeline",style:K,classes:M}),H={name:"BaseTimeline",extends:P,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:V,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t,a){return(t=D(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function D(e){var t=L(e,"string");return"symbol"==u(t)?t:t+""}function L(e,t){if("object"!=u(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t);if("object"!=u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var w={name:"Timeline",extends:H,inheritAttrs:!1,methods:{getKey:function(e,t){return this.dataKey?C(e,this.dataKey):t},getPTOptions:function(e,t){return this.ptm(e,{context:{index:t,count:this.value.length}})}},computed:{dataP:function(){return R(x(x({},this.layout,this.layout),this.align,this.align))}}},A=["data-p"],G=["data-p"],I=["data-p"],Q=["data-p"],U=["data-p"],$=["data-p"],J=["data-p"];function X(e,t,a,n,o,r){return s(),c("div",d({class:e.cx("root")},e.ptmi("root"),{"data-p":r.dataP}),[(s(!0),c(h,null,W(e.value,(function(t,a){return s(),c("div",d({key:r.getKey(t,a),class:e.cx("event")},{ref_for:!0},r.getPTOptions("event",a),{"data-p":r.dataP}),[i("div",d({class:e.cx("eventOpposite",{index:a})},{ref_for:!0},r.getPTOptions("eventOpposite",a),{"data-p":r.dataP}),[g(e.$slots,"opposite",{item:t,index:a})],16,I),i("div",d({class:e.cx("eventSeparator")},{ref_for:!0},r.getPTOptions("eventSeparator",a),{"data-p":r.dataP}),[g(e.$slots,"marker",{item:t,index:a},(function(){return[i("div",d({class:e.cx("eventMarker")},{ref_for:!0},r.getPTOptions("eventMarker",a),{"data-p":r.dataP}),null,16,U)]})),a!==e.value.length-1?g(e.$slots,"connector",{key:0,item:t,index:a},(function(){return[i("div",d({class:e.cx("eventConnector")},{ref_for:!0},r.getPTOptions("eventConnector",a),{"data-p":r.dataP}),null,16,$)]})):T("",!0)],16,Q),i("div",d({class:e.cx("eventContent")},{ref_for:!0},r.getPTOptions("eventContent",a),{"data-p":r.dataP}),[g(e.$slots,"content",{item:t,index:a})],16,J)],16,G)})),128))],16,A)}w.render=X;const Y={class:"timeline-page-container"},Z={class:"quadrant-title"},ee={class:"event-list"},te=q({__name:"Cronology",setup(e){const t=O([{title:"Futuro",date:"01 / 01 / 2025",description:"Se plantea el proyecto de las famosas 120 bases en el censo. ¡Proyecto para obtener el estatus de Nexo en la wiki!",category:"Royal Space Society"},{title:"Censo",date:"12 / 31 / 2024",description:"Se consigue el máximo número de bases censadas, 58 bases.",category:"Royal Space Society"},{title:"Méritos",date:"02 / 08 / 2022",description:"La Royal Space Society obtiene su segunda estrella y obtiene el titulo de HUB-R al tener registradas 20 bases.",category:"Royal Space Society"},{title:"Méritos",date:"09 / 08 / 2021",description:"La Royal Space Society obtiene el titulo de HUB al alcanzar mas de 20 miembros y tener registrados mas de 20 sistemas en la wiki.",category:"Royal Space Society"},{title:"Capital",date:"06 / 01 / 2021",description:"Construción de Mamadisimo City, capital de la RSS.",category:"Royal Space Society"},{title:"Fundación",date:"02 / 08 / 2020 ",description:"Fundación de la Royal Space Society.",category:"Royal Space Society"},{title:"Descubrimiento",date:"01 / 25 / 2020",description:"Descubrimiento de Urticalia por Kaos193, sistema elegido para ser la sede de la RSS.",category:"Royal Space Society"},{title:"1.0.6241",date:"08 / 06 / 2025",description:"Se ha añadido un nuevo parametro faltante para el sistema de minificado de la web al momento de subirse a GHub Pages.",category:"Web"},{title:"1.0.624",date:"08 / 06 / 2025",description:"Se ha sustituido el sistema de minificado de la web a la hora de subirse a GHub Pages.",category:"Web"},{title:"1.0.623",date:"08 / 06 / 2025",description:"Se ha implementado un modal la primera vez que se suba una foto a la web, para que el usuario sepa que la imagen no se subirá a la wiki.",category:"Web"},{title:"1.0.622",date:"07 / 06 / 2025",description:"Se ha implementado un nuevo sistema que permite visualizar la actividad más reciente en la wiki, tanto en su versión inglesa como en la española.",category:"Web"},{title:"1.0.621",date:"07 / 06 / 2025",description:"Se ha mejorado el mensaje de error al mandar los logs a discord.",category:"Web"},{title:"1.0.62",date:"07 / 06 / 2025",description:"Se ha mejorado el mensaje de aviso sobre las nuevas actualizaciones de la web.",category:"Web"},{title:"1.0.61",date:"07 / 06 / 2025",description:"Se ha corregido el nombre en español de las regiones Nebulosa de Gumita y Nebulosa de Emcalh.",category:"Web"},{title:"1.0.6",date:"07 / 06 / 2025",description:"Se ha añadido una nueva página para ver las últimas actualizaciones del NMS.",category:"Web"},{title:"1.0.57",date:"06 / 06 / 2025",description:"Se ha añadido una nueva página de feedback para que los Viajeros de la RSS puedan dejar sus comentarios y feedback.",category:"Web"},{title:"1.0.564",date:"05 / 06 / 2025",description:"Se ha añadido la nueva región al apartado del generador de glifos.",category:"Web"},{title:"1.0.563",date:"05 / 06 / 2025",description:'Se ha arreglado un pequeño error con un "label" en la interfaz de usuario.',category:"Web"},{title:"1.0.562",date:"05 / 06 / 2025",description:"Se han actualizado las dependencias de la web.",category:"Web"},{title:"1.0.561",date:"04 / 06 / 2025",description:"Se han actualizado las dependencias y mejorado la descripción de la página del censo.",category:"Web"},{title:"1.0.56",date:"31 / 05 / 2025",description:"Se añadió una nueva región compatible con el creador de páginas de la RSS.",category:"Web"},{title:"1.0.5582",date:"19 / 05 / 2025",description:"Se arregló un error con el actualizador automático.",category:"Web"},{title:"1.0.5581",date:"19 / 05 / 2025",description:"Se actualizaron las dependencias.",category:"Web"},{title:"1.0.558",date:"18 / 05 / 2025",description:"Se añadió un nuevo sistema que permite conocer cuando la web se actualizó en tiempo real.",category:"Web"},{title:"1.0.556",date:"11 / 05 / 2025",description:"Se añadió un nuevo apartado a la página de las regiones para mostrar las regiones que requieren de exploración.",category:"Web"},{title:"1.0.555",date:"03 / 05 / 2025",description:"Se añadieron muchas mas preguntas y respuestas al apartado de FAQs.",category:"Web"},{title:"1.0.554",date:"02 / 04 / 2025",description:"Se actualizaron las dependencias y se mejoró el apartado tarjetas de amigo de la RSS.",category:"Web"},{title:"1.0.553",date:"27 / 03 / 2025",description:"Se actualizaron las dependencias y se mejoró el apartado de preguntas frecuentes.",category:"Web"},{title:"1.0.552",date:"22 / 03 / 2025",description:"Se actualizaron las dependencias.",category:"Web"},{title:"1.0.551",date:"08 / 01 / 2025",description:"Se añadió una nueva guía.",category:"Web"},{title:"1.0.55",date:"04 / 01 / 2025",description:"Se añadió una página experimental.",category:"Web"},{title:"1.0.544",date:"03 / 01 / 2025",description:"Se mejoró el sistema de descarga de tarjetas de amigo, y se añadió la posibilidad de tener los planetas como antes, con información extra.",category:"Web"},{title:"1.0.543",date:"02 / 28 / 2025",description:"Se refactorizó la obtención de estadísticas de la región para utilizar consultas basadas en categorías.",category:"Web"},{title:"1.0.542",date:"02 / 28 / 2025",description:"Se mejoró la función de descarga en la página de códigos de amigos.",category:"Web"},{title:"1.0.541",date:"02 / 28 / 2025",description:"Se modificó la representación de funciones formateadas en baseOutput.vue para una salida HTML mejorada.",category:"Web"},{title:"1.0.54",date:"02 / 27 / 2025",description:"Se añadió un nuevo tipo de economía, además se añadió una nueva página para crear fichas con el código de amigo de cada uno.",category:"Web"},{title:"1.0.53",date:"02 / 25 / 2025",description:"Se corrigieron las categorías de riqueza y se mejoró el sistema de ocultación de los apartados de la estación espacial en los sistemas que no tienen.",category:"Web"},{title:"1.0.529",date:"02 / 23 / 2025",description:"Se mejoró ciertos la lógica de documentación de descubrimiento.",category:"Web"},{title:"1.0.528",date:"02 / 23 / 2025",description:"Se añadieron ciertos descriptores planetarios faltantes.",category:"Web"},{title:"1.0.527",date:"02 / 22 / 2025",description:"Se mejoró es sistema del apartado de la cronología ademas se implementó un sistema nuevo de prefetch en la página principal.",category:"Web"},{title:"1.0.526",date:"02 / 22 / 2025",description:"Se añadieron dos nuevas bases al apartado de bases destacadas.",category:"Web"},{title:"1.0.525",date:"02 / 21 / 2025",description:"Se reordenaron los eventos históricos en Cronology.vue.",category:"Web"},{title:"1.0.524",date:"02 / 21 / 2025",description:"Se implementó un cuadro de diálogo de confirmación para eliminar objetos comercializables y limpiar el código comentado en PlanetInputs.vue. Se arreglaron los descriptores del tiempo de los planetas y se añadieron los faltantes.",category:"Web"},{title:"1.0.523",date:"02 / 21 / 2025",description:"Se ajustó el límite de advertencia del tamaño de fragmento sumado a un splitter para evitar futuros errores y se modificaron las clases de íconos en los datos del portal de comunidad.",category:"Web"},{title:"1.0.522",date:"02 / 21 / 2025",description:"Se añadieron algunos descriptores del clima faltantes.",category:"Web"},{title:"1.0.521",date:"02 / 21 / 2025",description:"Se ajustó el máximo de etiquetas seleccionadas a 2, se modificó el mensaje de mantenimiento en indextest.html y se añadió una nueva base al apartado de bases destacadas.",category:"Web"},{title:"1.0.52",date:"02 / 21 / 2025",description:"Se añadió la página de cronología de la Royal Space Society y de esta misma web.",category:"Web"},{title:"1.0.51",date:"02 / 13 / 2025",description:"Se añadió la página de regiones de la Royal Space Society.",category:"Web"},{title:"1.0.501",date:"02 / 13 / 2025",description:"Se mejoró el sistema de generación de glifos de la RSS con animaciones y mejoras de su código.",category:"Web"},{title:"1.0.50",date:"02 / 13 / 2025",description:"Se añadió un sistema de imágenes dinámico para las bases censadas.",category:"Web"},{title:"1.0.483",date:"02 / 09 / 2025",description:"Se arregló un problema con la traducción de un apartado del registro de asentamientos.",category:"Web"},{title:"1.0.482",date:"02 / 09 / 2025",description:"Se añadieron animaciones a la página de FAQs sumado a un nuevo sistema de logs.",category:"Web"},{title:"1.0.48",date:"02 / 08 / 2025",description:"Se añadió la nueva página del portal de comunidad de la RSS.",category:"Web"},{title:"1.0.4751",date:"02 / 08 / 2025",description:"Se añadió la región Qudsor Void de la galaxia Eissentam.",category:"Web"},{title:"1.0.475",date:"02 / 08 / 2025",description:"Se añadieron los nuevos sistemas gaseosos sumado a una nueva página, la de bases destacadas.",category:"Web"},{title:"1.0.474",date:"02 / 07 / 2025",description:"Se eliminó el apartado de imagen del paisaje del apartado de sistemas.",category:"Web"},{title:"1.0.473",date:"02 / 05 / 2025",description:"Se añadió la nueva página del censo, con información actualizada dinamicamente de la wiki.",category:"Web"},{title:"1.0.472",date:"01 / 31 / 2025",description:"Se arregló un problema con las fotos en las explicaciones de la web.",category:"Web"},{title:"1.0.47",date:"01 / 02 / 2025",description:"Se mejora la lógica del número de planetas en el apartado de sistemas.",category:"Web"},{title:"1.0.46",date:"01 / 01 / 2025",description:"Se añade la nueva plantilla de la Royal Space Society a cada apartado de la web.",category:"Web"},{title:"1.0.45",date:"12 / 31 / 2024",description:"Se termina de portar todas las páginas de la web a PrimeVue, con la última siendo la de las preguntas frecuentes.",category:"Web"},{title:"1.0.0",date:"12 / 24 / 2024",description:"Versión 1.00 del creador de páginas wiki para la RSS.",category:"Web"},{title:"Alpha",date:"12 / 08 / 2023",description:"Primera versión del creador de páginas wiki para la RSS.",category:"Web"}]),a=N((()=>t.value.reduce(((e,t)=>(e[t.category]||(e[t.category]={}),e[t.category][t.date]||(e[t.category][t.date]=[]),e[t.category][t.date].push(t),e)),{})));return(e,t)=>(s(),B(v(k),{class:"galactic-card timeline-card"},{content:p((()=>[i("div",Y,[t[1]||(t[1]=i("div",{class:"header-section"},[i("div",{class:"header-content"},[i("a",{href:"https://example.com",target:"_blank",class:"logo-link"},[i("img",{src:z,class:"logo-image",alt:"Logo"})]),i("div",{class:"text-content"},[i("h1",{class:"galactic-title"},[i("span",{class:"title-text"},"Cronología de Eventos")]),i("p",{class:"text-stellar-gray subtitle"},"Explora los eventos importantes de la Royal Space Society")])])],-1)),t[2]||(t[2]=i("br",null,null,-1)),(s(!0),c(h,null,W(a.value,((e,a)=>(s(),c("div",{key:a,class:"galaxy-panel"},[f(v(F),{class:"quadrant-panel",toggleable:"",collapsed:""},{header:p((()=>[i("h3",Z,[t[0]||(t[0]=i("i",{class:"pi pi-th-large"},null,-1)),S(" "+y(a),1)])])),default:p((()=>[f(v(w),{value:Object.entries(e),align:"alternate",class:"custom-timeline"},{content:p((({item:e})=>[f(v(k),{class:"event-card separated-card"},{title:p((()=>[S(y(e[0]),1)])),content:p((()=>[i("ul",ee,[(s(!0),c(h,null,W(e[1],(e=>(s(),c("li",{key:e.title,class:"event-item"},[i("strong",null,y(e.title),1),S(" - "+y(e.description),1)])))),128))])])),_:2},1024)])),_:2},1032,["value"])])),_:2},1024)])))),128))])])),_:1}))}}),le=E(te,[["__scopeId","data-v-c7e9bbcd"]]);export{le as default};