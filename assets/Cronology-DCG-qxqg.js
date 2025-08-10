"use strict";import{_ as k}from"./logo-white-CwkOOWqZ.js";import{C as j,D as R,a7 as P,aM as q,a as c,o as s,F as y,H as S,E as p,b as t,z as g,e as _,d as C,r as T,c as O,j as M,k as m,f as h,h as b,g as f,t as W,p as H}from"./main-D2Q7YD8Q.js";import{s as x}from"./index-C1r3xZ_O.js";import{s as $}from"./index-C3e1_BY2.js";import"./index-dVRDBysy.js";var E=`
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
`,L={root:function(e){var a=e.props;return["p-timeline p-component","p-timeline-"+a.align,"p-timeline-"+a.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},F=j.extend({name:"timeline",style:E,classes:L}),K={name:"BaseTimeline",extends:R,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:F,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function u(e){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},u(e)}function z(e,a,l){return(a=N(a))in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function N(e){var a=V(e,"string");return u(a)=="symbol"?a:a+""}function V(e,a){if(u(e)!="object"||!e)return e;var l=e[Symbol.toPrimitive];if(l!==void 0){var r=l.call(e,a);if(u(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var w={name:"Timeline",extends:K,inheritAttrs:!1,methods:{getKey:function(e,a){return this.dataKey?q(e,this.dataKey):a},getPTOptions:function(e,a){return this.ptm(e,{context:{index:a,count:this.value.length}})}},computed:{dataP:function(){return P(z(z({},this.layout,this.layout),this.align,this.align))}}},A=["data-p"],B=["data-p"],D=["data-p"],G=["data-p"],I=["data-p"],Q=["data-p"],U=["data-p"];function J(e,a,l,r,i,n){return s(),c("div",p({class:e.cx("root")},e.ptmi("root"),{"data-p":n.dataP}),[(s(!0),c(y,null,S(e.value,function(d,o){return s(),c("div",p({key:n.getKey(d,o),class:e.cx("event")},{ref_for:!0},n.getPTOptions("event",o),{"data-p":n.dataP}),[t("div",p({class:e.cx("eventOpposite",{index:o})},{ref_for:!0},n.getPTOptions("eventOpposite",o),{"data-p":n.dataP}),[g(e.$slots,"opposite",{item:d,index:o})],16,D),t("div",p({class:e.cx("eventSeparator")},{ref_for:!0},n.getPTOptions("eventSeparator",o),{"data-p":n.dataP}),[g(e.$slots,"marker",{item:d,index:o},function(){return[t("div",p({class:e.cx("eventMarker")},{ref_for:!0},n.getPTOptions("eventMarker",o),{"data-p":n.dataP}),null,16,I)]}),o!==e.value.length-1?g(e.$slots,"connector",{key:0,item:d,index:o},function(){return[t("div",p({class:e.cx("eventConnector")},{ref_for:!0},n.getPTOptions("eventConnector",o),{"data-p":n.dataP}),null,16,Q)]}):_("",!0)],16,G),t("div",p({class:e.cx("eventContent")},{ref_for:!0},n.getPTOptions("eventContent",o),{"data-p":n.dataP}),[g(e.$slots,"content",{item:d,index:o})],16,U)],16,B)}),128))],16,A)}w.render=J;const X={class:"timeline-page-container"},Y={class:"quadrant-title"},Z={class:"event-list"},ee=["innerHTML"],ae=C({__name:"Cronology",setup(e){const a=T([{title:"Futuro",date:"01 / 01 / 2025",description:"Se plantea el proyecto de las famosas 120 bases en el censo. \xA1Proyecto para obtener el estatus de Nexo en la wiki!",category:"Royal Space Society"},{title:"Censo",date:"31 / 12 / 2024",description:"Se consigue el m\xE1ximo n\xFAmero de bases censadas, 58 bases.",category:"Royal Space Society"},{title:"M\xE9ritos",date:"08 / 02 / 2022",description:"La Royal Space Society obtiene su segunda estrella y obtiene el titulo de HUB-R al tener registradas 20 bases.",category:"Royal Space Society"},{title:"M\xE9ritos",date:"08 / 09 / 2021",description:"La Royal Space Society obtiene el titulo de HUB al alcanzar mas de 20 miembros y tener registrados mas de 20 sistemas en la wiki.",category:"Royal Space Society"},{title:"Capital",date:"01 / 06 / 2021",description:"Construci\xF3n de Mamadisimo City, capital de la RSS.",category:"Royal Space Society"},{title:"Fundaci\xF3n",date:"08 / 02 / 2020",description:"Fundaci\xF3n de la Royal Space Society.",category:"Royal Space Society"},{title:"Descubrimiento",date:"25 / 01 / 2020",description:"Descubrimiento de Urticalia por Kaos193, sistema elegido para ser la sede de la RSS.",category:"Royal Space Society"},{title:"1.0.6461",date:"10 / 08 / 2025",description:"Se ha actualizado una dependencia a su \xFAltima versi\xF3n (node).",category:"Web"},{title:"1.0.646",date:"08 / 08 / 2025",description:`Se actualiz\xF3 la dependencia Vite a su versi\xF3n 7.1.1.
    El resto de mejoras son para el apartado del censo de la RSS:
    \u2022 Se a\xF1adi\xF3 paginaci\xF3n con opci\xF3n de configurar el n\xFAmero de filas por p\xE1gina.
    \u2022 Se incorpor\xF3 un bot\xF3n para volver al inicio que aparece al hacer scroll.
    \u2022 Se mejor\xF3 el dise\xF1o y la disposici\xF3n de la secci\xF3n de filtros.`,category:"Web"},{title:"1.0.645",date:"07 / 08 / 2025",description:"Se ha actualizado una dependencia a su \xFAltima versi\xF3n (vite).",category:"Web"},{title:"1.0.644",date:"05 / 08 / 2025",description:"Se ha actualizado una dependencia a su \xFAltima versi\xF3n (node).",category:"Web"},{title:"1.0.643",date:"03 / 08 / 2025",description:"Se ha a\xF1adido un sistema de paginaci\xF3n para el apartado de todos los sistemas de la RSS.",category:"Web"},{title:"1.0.642",date:"31 / 07 / 2025",description:"Se ha a\xF1adido un sistema para filtrar por regiones en el apartado de sistemas.",category:"Web"},{title:"1.0.641",date:"31 / 07 / 2025",description:"Se han arreglado diversos problemas con la web de los sistemas.",category:"Web"},{title:"1.0.64",date:"31 / 07 / 2025",description:"Se han actualizado las dependencias y se ha a\xF1adido una p\xE1gina para visualizar todos los sistemas de la RSS.",category:"Web"},{title:"1.0.639-a3",date:"21 / 07 / 2025",description:"Se han a\xF1adido nuevos botones para subir directamente arriba de la web.",category:"Web"},{title:"1.0.639-a2",date:"14 / 07 / 2025",description:"Se han actualizado varias dependencias de la web.",category:"Web"},{title:"1.0.639-a1",date:"10 / 07 / 2025",description:"Se han actualizado varias dependencias de la web para mejorar su estabilidad y velocidad.",category:"Web"},{title:"1.0.639",date:"05 / 07 / 2025",description:"Se ha una de las depencias m\xE1s importantes de la web (vite).",category:"Web"},{title:"1.0.638",date:"03 / 07 / 2025",description:"Se ha mejorado el mensaje de actualizaci\xF3n de la web, detallando de que versi\xF3n se pasa y a cual se va a ir.",category:"Web"},{title:"1.0.637",date:"03 / 07 / 2025",description:"Se ha modificado la fecha de la \xFAltima actualizaci\xF3n en el apartado de actualizaciones del NMS, ahora mostrar\xE1 la fecha de la \xFAltima actualizaci\xF3n.",category:"Web"},{title:"1.0.636",date:"03 / 07 / 2025",description:"Se han actualizado varias dependencias de la web para mejorar su estabilidad y velocidad.",category:"Web"},{title:"1.0.635",date:"01 / 07 / 2025",description:"Se han actualizado dos dependencias de la web (node y vue-tsc).",category:"Web"},{title:"1.0.634",date:"28 / 06 / 2025",description:"Se han actualizado dos dependencias de la web para mejorar su rendimiento y seguridad.",category:"Web"},{title:"1.0.633",date:"26 / 06 / 2025",description:"Se ha a\xF1adido una nueva regi\xF3n y se han actualizado las dependencias de la web.",category:"Web"},{title:"1.0.632",date:"16 / 06 / 2025",description:"Se ha actualizado una dependencia vital de la web.",category:"Web"},{title:"1.0.631",date:"15 / 06 / 2025",description:"Se han actualizado las dependencias necesarias de la web y se ha mejorado el sistema encargado de los labels del apartado de RSSLinks.",category:"Web"},{title:"1.0.63",date:"15 / 06 / 2025",description:"Se ha realizado un lavado de cara al apartado de recursos estrategicos de la RSS.",category:"Web"},{title:"1.0.6242",date:"15 / 06 / 2025",description:"Se han actualizado las dependencias necesarias de la web.",category:"Web"},{title:"1.0.6241",date:"08 / 06 / 2025",description:"Se ha a\xF1adido un nuevo parametro faltante para el sistema de minificado de la web al momento de subirse a GHub Pages.",category:"Web"},{title:"1.0.624",date:"08 / 06 / 2025",description:"Se ha sustituido el sistema de minificado de la web a la hora de subirse a GHub Pages.",category:"Web"},{title:"1.0.623",date:"08 / 06 / 2025",description:"Se ha implementado un modal la primera vez que se suba una foto a la web, para que el usuario sepa que la imagen no se subir\xE1 a la wiki.",category:"Web"},{title:"1.0.622",date:"07 / 06 / 2025",description:"Se ha implementado un nuevo sistema que permite visualizar la actividad m\xE1s reciente en la wiki, tanto en su versi\xF3n inglesa como en la espa\xF1ola.",category:"Web"},{title:"1.0.621",date:"07 / 06 / 2025",description:"Se ha mejorado el mensaje de error al mandar los logs a discord.",category:"Web"},{title:"1.0.62",date:"07 / 06 / 2025",description:"Se ha mejorado el mensaje de aviso sobre las nuevas actualizaciones de la web.",category:"Web"},{title:"1.0.61",date:"07 / 06 / 2025",description:"Se ha corregido el nombre en espa\xF1ol de las regiones Nebulosa de Gumita y Nebulosa de Emcalh.",category:"Web"},{title:"1.0.6",date:"07 / 06 / 2025",description:"Se ha a\xF1adido una nueva p\xE1gina para ver las \xFAltimas actualizaciones del NMS.",category:"Web"},{title:"1.0.57",date:"06 / 06 / 2025",description:"Se ha a\xF1adido una nueva p\xE1gina de feedback para que los Viajeros de la RSS puedan dejar sus comentarios y feedback.",category:"Web"},{title:"1.0.564",date:"05 / 06 / 2025",description:"Se ha a\xF1adido la nueva regi\xF3n al apartado del generador de glifos.",category:"Web"},{title:"1.0.563",date:"05 / 06 / 2025",description:'Se ha arreglado un peque\xF1o error con un "label" en la interfaz de usuario.',category:"Web"},{title:"1.0.562",date:"05 / 06 / 2025",description:"Se han actualizado las dependencias de la web.",category:"Web"},{title:"1.0.561",date:"04 / 06 / 2025",description:"Se han actualizado las dependencias y mejorado la descripci\xF3n de la p\xE1gina del censo.",category:"Web"},{title:"1.0.56",date:"31 / 05 / 2025",description:"Se a\xF1adi\xF3 una nueva regi\xF3n compatible con el creador de p\xE1ginas de la RSS.",category:"Web"},{title:"1.0.5582",date:"19 / 05 / 2025",description:"Se arregl\xF3 un error con el actualizador autom\xE1tico.",category:"Web"},{title:"1.0.5581",date:"19 / 05 / 2025",description:"Se actualizaron las dependencias.",category:"Web"},{title:"1.0.558",date:"18 / 05 / 2025",description:"Se a\xF1adi\xF3 un nuevo sistema que permite conocer cuando la web se actualiz\xF3 en tiempo real.",category:"Web"},{title:"1.0.556",date:"11 / 05 / 2025",description:"Se a\xF1adi\xF3 un nuevo apartado a la p\xE1gina de las regiones para mostrar las regiones que requieren de exploraci\xF3n.",category:"Web"},{title:"1.0.555",date:"03 / 05 / 2025",description:"Se a\xF1adieron muchas mas preguntas y respuestas al apartado de FAQs.",category:"Web"},{title:"1.0.554",date:"02 / 04 / 2025",description:"Se actualizaron las dependencias y se mejor\xF3 el apartado tarjetas de amigo de la RSS.",category:"Web"},{title:"1.0.553",date:"27 / 03 / 2025",description:"Se actualizaron las dependencias y se mejor\xF3 el apartado de preguntas frecuentes.",category:"Web"},{title:"1.0.552",date:"22 / 03 / 2025",description:"Se actualizaron las dependencias.",category:"Web"},{title:"1.0.551",date:"08 / 01 / 2025",description:"Se a\xF1adi\xF3 una nueva gu\xEDa.",category:"Web"},{title:"1.0.55",date:"04 / 01 / 2025",description:"Se a\xF1adi\xF3 una p\xE1gina experimental.",category:"Web"},{title:"1.0.544",date:"03 / 01 / 2025",description:"Se mejor\xF3 el sistema de descarga de tarjetas de amigo, y se a\xF1adi\xF3 la posibilidad de tener los planetas como antes, con informaci\xF3n extra.",category:"Web"},{title:"1.0.543",date:"02 / 28 / 2025",description:"Se refactoriz\xF3 la obtenci\xF3n de estad\xEDsticas de la regi\xF3n para utilizar consultas basadas en categor\xEDas.",category:"Web"},{title:"1.0.542",date:"02 / 28 / 2025",description:"Se mejor\xF3 la funci\xF3n de descarga en la p\xE1gina de c\xF3digos de amigos.",category:"Web"},{title:"1.0.541",date:"02 / 28 / 2025",description:"Se modific\xF3 la representaci\xF3n de funciones formateadas en baseOutput.vue para una salida HTML mejorada.",category:"Web"},{title:"1.0.54",date:"02 / 27 / 2025",description:"Se a\xF1adi\xF3 un nuevo tipo de econom\xEDa, adem\xE1s se a\xF1adi\xF3 una nueva p\xE1gina para crear fichas con el c\xF3digo de amigo de cada uno.",category:"Web"},{title:"1.0.53",date:"02 / 25 / 2025",description:"Se corrigieron las categor\xEDas de riqueza y se mejor\xF3 el sistema de ocultaci\xF3n de los apartados de la estaci\xF3n espacial en los sistemas que no tienen.",category:"Web"},{title:"1.0.529",date:"02 / 23 / 2025",description:"Se mejor\xF3 ciertos la l\xF3gica de documentaci\xF3n de descubrimiento.",category:"Web"},{title:"1.0.528",date:"02 / 23 / 2025",description:"Se a\xF1adieron ciertos descriptores planetarios faltantes.",category:"Web"},{title:"1.0.527",date:"02 / 22 / 2025",description:"Se mejor\xF3 es sistema del apartado de la cronolog\xEDa ademas se implement\xF3 un sistema nuevo de prefetch en la p\xE1gina principal.",category:"Web"},{title:"1.0.526",date:"02 / 22 / 2025",description:"Se a\xF1adieron dos nuevas bases al apartado de bases destacadas.",category:"Web"},{title:"1.0.525",date:"02 / 21 / 2025",description:"Se reordenaron los eventos hist\xF3ricos en Cronology.vue.",category:"Web"},{title:"1.0.524",date:"02 / 21 / 2025",description:"Se implement\xF3 un cuadro de di\xE1logo de confirmaci\xF3n para eliminar objetos comercializables y limpiar el c\xF3digo comentado en PlanetInputs.vue. Se arreglaron los descriptores del tiempo de los planetas y se a\xF1adieron los faltantes.",category:"Web"},{title:"1.0.523",date:"02 / 21 / 2025",description:"Se ajust\xF3 el l\xEDmite de advertencia del tama\xF1o de fragmento sumado a un splitter para evitar futuros errores y se modificaron las clases de \xEDconos en los datos del portal de comunidad.",category:"Web"},{title:"1.0.522",date:"02 / 21 / 2025",description:"Se a\xF1adieron algunos descriptores del clima faltantes.",category:"Web"},{title:"1.0.521",date:"02 / 21 / 2025",description:"Se ajust\xF3 el m\xE1ximo de etiquetas seleccionadas a 2, se modific\xF3 el mensaje de mantenimiento en indextest.html y se a\xF1adi\xF3 una nueva base al apartado de bases destacadas.",category:"Web"},{title:"1.0.52",date:"02 / 21 / 2025",description:"Se a\xF1adi\xF3 la p\xE1gina de cronolog\xEDa de la Royal Space Society y de esta misma web.",category:"Web"},{title:"1.0.51",date:"02 / 13 / 2025",description:"Se a\xF1adi\xF3 la p\xE1gina de regiones de la Royal Space Society.",category:"Web"},{title:"1.0.501",date:"02 / 13 / 2025",description:"Se mejor\xF3 el sistema de generaci\xF3n de glifos de la RSS con animaciones y mejoras de su c\xF3digo.",category:"Web"},{title:"1.0.50",date:"02 / 13 / 2025",description:"Se a\xF1adi\xF3 un sistema de im\xE1genes din\xE1mico para las bases censadas.",category:"Web"},{title:"1.0.483",date:"02 / 09 / 2025",description:"Se arregl\xF3 un problema con la traducci\xF3n de un apartado del registro de asentamientos.",category:"Web"},{title:"1.0.482",date:"02 / 09 / 2025",description:"Se a\xF1adieron animaciones a la p\xE1gina de FAQs sumado a un nuevo sistema de logs.",category:"Web"},{title:"1.0.48",date:"02 / 08 / 2025",description:"Se a\xF1adi\xF3 la nueva p\xE1gina del portal de comunidad de la RSS.",category:"Web"},{title:"1.0.4751",date:"02 / 08 / 2025",description:"Se a\xF1adi\xF3 la regi\xF3n Qudsor Void de la galaxia Eissentam.",category:"Web"},{title:"1.0.475",date:"02 / 08 / 2025",description:"Se a\xF1adieron los nuevos sistemas gaseosos sumado a una nueva p\xE1gina, la de bases destacadas.",category:"Web"},{title:"1.0.474",date:"02 / 07 / 2025",description:"Se elimin\xF3 el apartado de imagen del paisaje del apartado de sistemas.",category:"Web"},{title:"1.0.473",date:"02 / 05 / 2025",description:"Se a\xF1adi\xF3 la nueva p\xE1gina del censo, con informaci\xF3n actualizada dinamicamente de la wiki.",category:"Web"},{title:"1.0.472",date:"01 / 31 / 2025",description:"Se arregl\xF3 un problema con las fotos en las explicaciones de la web.",category:"Web"},{title:"1.0.47",date:"01 / 02 / 2025",description:"Se mejora la l\xF3gica del n\xFAmero de planetas en el apartado de sistemas.",category:"Web"},{title:"1.0.46",date:"01 / 01 / 2025",description:"Se a\xF1ade la nueva plantilla de la Royal Space Society a cada apartado de la web.",category:"Web"},{title:"1.0.45",date:"12 / 31 / 2024",description:"Se termina de portar todas las p\xE1ginas de la web a PrimeVue, con la \xFAltima siendo la de las preguntas frecuentes.",category:"Web"},{title:"1.0.0",date:"12 / 24 / 2024",description:"Versi\xF3n 1.00 del creador de p\xE1ginas wiki para la RSS.",category:"Web"},{title:"Alpha",date:"12 / 08 / 2023",description:"Primera versi\xF3n del creador de p\xE1ginas wiki para la RSS.",category:"Web"}]),l=O(()=>a.value.reduce((r,i)=>(r[i.category]||(r[i.category]={}),r[i.category][i.date]||(r[i.category][i.date]=[]),r[i.category][i.date].push(i),r),{}));return(r,i)=>(s(),M(b(x),{class:"galactic-card timeline-card"},{content:m(()=>[t("div",X,[i[1]||(i[1]=t("div",{class:"header-section"},[t("div",{class:"header-content"},[t("a",{href:"https://example.com",target:"_blank",class:"logo-link"},[t("img",{src:k,class:"logo-image",alt:"Logo"})]),t("div",{class:"text-content"},[t("h1",{class:"galactic-title"},[t("span",{class:"title-text"},"Cronolog\xEDa de Eventos")]),t("p",{class:"text-stellar-gray subtitle"},"Explora los eventos importantes de la Royal Space Society")])])],-1)),i[2]||(i[2]=t("br",null,null,-1)),(s(!0),c(y,null,S(l.value,(n,d)=>(s(),c("div",{key:d,class:"galaxy-panel"},[h(b($),{class:"quadrant-panel",toggleable:"",collapsed:""},{header:m(()=>[t("h3",Y,[i[0]||(i[0]=t("i",{class:"pi pi-th-large"},null,-1)),f(" "+W(d),1)])]),default:m(()=>[h(b(w),{value:Object.entries(n),align:"alternate",class:"custom-timeline"},{content:m(({item:o})=>[h(b(x),{class:"event-card separated-card"},{title:m(()=>[f(W(o[0]),1)]),content:m(()=>[t("ul",Z,[(s(!0),c(y,null,S(o[1],v=>(s(),c("li",{key:v.title,class:"event-item",innerHTML:`<strong>${v.title}</strong> - ${v.description.replace(/\n/g,"<br>")}`},null,8,ee))),128))])]),_:2},1024)]),_:2},1032,["value"])]),_:2},1024)]))),128))])]),_:1}))}}),te=H(ae,[["__scopeId","data-v-7366f447"]]);export{te as default};
