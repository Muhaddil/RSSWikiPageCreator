import{_ as j}from"./logo-white-CwkOOWqZ.js";import{C as x,D as _,a7 as P,aM as R,a as c,o as l,F as S,H as h,E as s,b as i,z as g,e as q,d as C,r as T,c as O,j as M,k as p,f as v,h as b,g as f,t as W,p as E}from"./main-D2e2PT2j.js";import{s as z}from"./index-Djzz_FPf.js";import{s as N}from"./index-p00nyhqA.js";import"./index-CePq29mv.js";var V=`
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
`,B={root:function(a){var o=a.props;return["p-timeline p-component","p-timeline-"+o.align,"p-timeline-"+o.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},H=x.extend({name:"timeline",style:V,classes:B}),K={name:"BaseTimeline",extends:_,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:H,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function u(e){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},u(e)}function w(e,a,o){return(a=L(a))in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function L(e){var a=F(e,"string");return u(a)=="symbol"?a:a+""}function F(e,a){if(u(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var m=o.call(e,a);if(u(m)!="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var k={name:"Timeline",extends:K,inheritAttrs:!1,methods:{getKey:function(a,o){return this.dataKey?R(a,this.dataKey):o},getPTOptions:function(a,o){return this.ptm(a,{context:{index:o,count:this.value.length}})}},computed:{dataP:function(){return P(w(w({},this.layout,this.layout),this.align,this.align))}}},$=["data-p"],A=["data-p"],D=["data-p"],G=["data-p"],I=["data-p"],Q=["data-p"],U=["data-p"];function J(e,a,o,m,r,t){return l(),c("div",s({class:e.cx("root")},e.ptmi("root"),{"data-p":t.dataP}),[(l(!0),c(S,null,h(e.value,function(d,n){return l(),c("div",s({key:t.getKey(d,n),class:e.cx("event")},{ref_for:!0},t.getPTOptions("event",n),{"data-p":t.dataP}),[i("div",s({class:e.cx("eventOpposite",{index:n})},{ref_for:!0},t.getPTOptions("eventOpposite",n),{"data-p":t.dataP}),[g(e.$slots,"opposite",{item:d,index:n})],16,D),i("div",s({class:e.cx("eventSeparator")},{ref_for:!0},t.getPTOptions("eventSeparator",n),{"data-p":t.dataP}),[g(e.$slots,"marker",{item:d,index:n},function(){return[i("div",s({class:e.cx("eventMarker")},{ref_for:!0},t.getPTOptions("eventMarker",n),{"data-p":t.dataP}),null,16,I)]}),n!==e.value.length-1?g(e.$slots,"connector",{key:0,item:d,index:n},function(){return[i("div",s({class:e.cx("eventConnector")},{ref_for:!0},t.getPTOptions("eventConnector",n),{"data-p":t.dataP}),null,16,Q)]}):q("",!0)],16,G),i("div",s({class:e.cx("eventContent")},{ref_for:!0},t.getPTOptions("eventContent",n),{"data-p":t.dataP}),[g(e.$slots,"content",{item:d,index:n})],16,U)],16,A)}),128))],16,$)}k.render=J;const X={class:"timeline-page-container"},Y={class:"quadrant-title"},Z={class:"event-list"},ee=["innerHTML"],ae=C({__name:"Cronology",setup(e){const a=T([{title:"Futuro",date:"01 / 01 / 2025",description:"Se plantea el proyecto de las famosas 120 bases en el censo. ¡Proyecto para obtener el estatus de Nexo en la wiki!",category:"Royal Space Society"},{title:"Censo",date:"31 / 12 / 2024",description:"Se consigue el máximo número de bases censadas, 58 bases.",category:"Royal Space Society"},{title:"Méritos",date:"08 / 02 / 2022",description:"La Royal Space Society obtiene su segunda estrella y obtiene el titulo de HUB-R al tener registradas 20 bases.",category:"Royal Space Society"},{title:"Méritos",date:"08 / 09 / 2021",description:"La Royal Space Society obtiene el titulo de HUB al alcanzar mas de 20 miembros y tener registrados mas de 20 sistemas en la wiki.",category:"Royal Space Society"},{title:"Capital",date:"01 / 06 / 2021",description:"Construción de Mamadisimo City, capital de la RSS.",category:"Royal Space Society"},{title:"Fundación",date:"08 / 02 / 2020",description:"Fundación de la Royal Space Society.",category:"Royal Space Society"},{title:"Descubrimiento",date:"25 / 01 / 2020",description:"Descubrimiento de Urticalia por Kaos193, sistema elegido para ser la sede de la RSS.",category:"Royal Space Society"},{title:"1.0.663",date:"09 / 09 / 2025",description:"Se ha solucionado un problema y se ha actualizado una dependencia de la web.",category:"Web"},{title:"1.0.662",date:"07 / 09 / 2025",description:"Se ha solucionado un problema con los paneles de los cuadrantes de las regiones.",category:"Web"},{title:"1.0.661",date:"07 / 09 / 2025",description:"Se ha solucionado un problema con el nuevo apartado de corbetas.",category:"Web"},{title:"1.0.66",date:"07 / 09 / 2025",description:"Se ha añadido un nuevo apartado para poder subir las corbetas a la wiki.",category:"Web"},{title:"1.0.65",date:"02 / 09 / 2025",description:"Se le ha realizado un lavado de cara al componente principal para que los anuncios, versión y actualización tengan una estética mejor, además de mejorar el funcionamiento del mismo.",category:"Web"},{title:"1.0.6492",date:"01 / 09 / 2025",description:"Se ha mejorado el sistema de obtención de anuncios.",category:"Web"},{title:"1.0.6491",date:"01 / 09 / 2025",description:"Se ha arreglado un error con el apartado de cronologías.",category:"Web"},{title:"1.0.649",date:"01 / 09 / 2025",description:"Se ha añadido un sistema de avisos para la web.",category:"Web"},{title:"1.0.648",date:"01 / 09 / 2025",description:`• Se ha mejorado el sistema que muestra las correcciones en el apartado de últimas actualizaciones.
    • Se han actualizado varias dependencias de la web.`,category:"Web"},{title:"1.0.647",date:"29 / 08 / 2025",description:"Se ha añadido un nuevo tipo de filtro al apartado de sistemas de la RSS.",category:"Web"},{title:"1.0.6464",date:"29 / 08 / 2025",description:"Se han actualizado varias dependencias a sus últimas versiones.",category:"Web"},{title:"1.0.6463",date:"26 / 08 / 2025",description:"Se han actualizado varias dependencias a sus últimas versiones.",category:"Web"},{title:"1.0.6462",date:"10 / 08 / 2025",description:"Se han actualizado varias dependencias a sus últimas versiones.",category:"Web"},{title:"1.0.6461",date:"10 / 08 / 2025",description:"Se ha actualizado una dependencia a su última versión (node).",category:"Web"},{title:"1.0.646",date:"08 / 08 / 2025",description:`Se actualizó la dependencia Vite a su versión 7.1.1.
    El resto de mejoras son para el apartado del censo de la RSS:
    • Se añadió paginación con opción de configurar el número de filas por página.
    • Se incorporó un botón para volver al inicio que aparece al hacer scroll.
    • Se mejoró el diseño y la disposición de la sección de filtros.`,category:"Web"},{title:"1.0.645",date:"07 / 08 / 2025",description:"Se ha actualizado una dependencia a su última versión (vite).",category:"Web"},{title:"1.0.644",date:"05 / 08 / 2025",description:"Se ha actualizado una dependencia a su última versión (node).",category:"Web"},{title:"1.0.643",date:"03 / 08 / 2025",description:"Se ha añadido un sistema de paginación para el apartado de todos los sistemas de la RSS.",category:"Web"},{title:"1.0.642",date:"31 / 07 / 2025",description:"Se ha añadido un sistema para filtrar por regiones en el apartado de sistemas.",category:"Web"},{title:"1.0.641",date:"31 / 07 / 2025",description:"Se han arreglado diversos problemas con la web de los sistemas.",category:"Web"},{title:"1.0.64",date:"31 / 07 / 2025",description:"Se han actualizado las dependencias y se ha añadido una página para visualizar todos los sistemas de la RSS.",category:"Web"},{title:"1.0.639-a3",date:"21 / 07 / 2025",description:"Se han añadido nuevos botones para subir directamente arriba de la web.",category:"Web"},{title:"1.0.639-a2",date:"14 / 07 / 2025",description:"Se han actualizado varias dependencias de la web.",category:"Web"},{title:"1.0.639-a1",date:"10 / 07 / 2025",description:"Se han actualizado varias dependencias de la web para mejorar su estabilidad y velocidad.",category:"Web"},{title:"1.0.639",date:"05 / 07 / 2025",description:"Se ha una de las depencias más importantes de la web (vite).",category:"Web"},{title:"1.0.638",date:"03 / 07 / 2025",description:"Se ha mejorado el mensaje de actualización de la web, detallando de que versión se pasa y a cual se va a ir.",category:"Web"},{title:"1.0.637",date:"03 / 07 / 2025",description:"Se ha modificado la fecha de la última actualización en el apartado de actualizaciones del NMS, ahora mostrará la fecha de la última actualización.",category:"Web"},{title:"1.0.636",date:"03 / 07 / 2025",description:"Se han actualizado varias dependencias de la web para mejorar su estabilidad y velocidad.",category:"Web"},{title:"1.0.635",date:"01 / 07 / 2025",description:"Se han actualizado dos dependencias de la web (node y vue-tsc).",category:"Web"},{title:"1.0.634",date:"28 / 06 / 2025",description:"Se han actualizado dos dependencias de la web para mejorar su rendimiento y seguridad.",category:"Web"},{title:"1.0.633",date:"26 / 06 / 2025",description:"Se ha añadido una nueva región y se han actualizado las dependencias de la web.",category:"Web"},{title:"1.0.632",date:"16 / 06 / 2025",description:"Se ha actualizado una dependencia vital de la web.",category:"Web"},{title:"1.0.631",date:"15 / 06 / 2025",description:"Se han actualizado las dependencias necesarias de la web y se ha mejorado el sistema encargado de los labels del apartado de RSSLinks.",category:"Web"},{title:"1.0.63",date:"15 / 06 / 2025",description:"Se ha realizado un lavado de cara al apartado de recursos estrategicos de la RSS.",category:"Web"},{title:"1.0.6242",date:"15 / 06 / 2025",description:"Se han actualizado las dependencias necesarias de la web.",category:"Web"},{title:"1.0.6241",date:"08 / 06 / 2025",description:"Se ha añadido un nuevo parametro faltante para el sistema de minificado de la web al momento de subirse a GHub Pages.",category:"Web"},{title:"1.0.624",date:"08 / 06 / 2025",description:"Se ha sustituido el sistema de minificado de la web a la hora de subirse a GHub Pages.",category:"Web"},{title:"1.0.623",date:"08 / 06 / 2025",description:"Se ha implementado un modal la primera vez que se suba una foto a la web, para que el usuario sepa que la imagen no se subirá a la wiki.",category:"Web"},{title:"1.0.622",date:"07 / 06 / 2025",description:"Se ha implementado un nuevo sistema que permite visualizar la actividad más reciente en la wiki, tanto en su versión inglesa como en la española.",category:"Web"},{title:"1.0.621",date:"07 / 06 / 2025",description:"Se ha mejorado el mensaje de error al mandar los logs a discord.",category:"Web"},{title:"1.0.62",date:"07 / 06 / 2025",description:"Se ha mejorado el mensaje de aviso sobre las nuevas actualizaciones de la web.",category:"Web"},{title:"1.0.61",date:"07 / 06 / 2025",description:"Se ha corregido el nombre en español de las regiones Nebulosa de Gumita y Nebulosa de Emcalh.",category:"Web"},{title:"1.0.6",date:"07 / 06 / 2025",description:"Se ha añadido una nueva página para ver las últimas actualizaciones del NMS.",category:"Web"},{title:"1.0.57",date:"06 / 06 / 2025",description:"Se ha añadido una nueva página de feedback para que los Viajeros de la RSS puedan dejar sus comentarios y feedback.",category:"Web"},{title:"1.0.564",date:"05 / 06 / 2025",description:"Se ha añadido la nueva región al apartado del generador de glifos.",category:"Web"},{title:"1.0.563",date:"05 / 06 / 2025",description:'Se ha arreglado un pequeño error con un "label" en la interfaz de usuario.',category:"Web"},{title:"1.0.562",date:"05 / 06 / 2025",description:"Se han actualizado las dependencias de la web.",category:"Web"},{title:"1.0.561",date:"04 / 06 / 2025",description:"Se han actualizado las dependencias y mejorado la descripción de la página del censo.",category:"Web"},{title:"1.0.56",date:"31 / 05 / 2025",description:"Se añadió una nueva región compatible con el creador de páginas de la RSS.",category:"Web"},{title:"1.0.5582",date:"19 / 05 / 2025",description:"Se arregló un error con el actualizador automático.",category:"Web"},{title:"1.0.5581",date:"19 / 05 / 2025",description:"Se actualizaron las dependencias.",category:"Web"},{title:"1.0.558",date:"18 / 05 / 2025",description:"Se añadió un nuevo sistema que permite conocer cuando la web se actualizó en tiempo real.",category:"Web"},{title:"1.0.556",date:"11 / 05 / 2025",description:"Se añadió un nuevo apartado a la página de las regiones para mostrar las regiones que requieren de exploración.",category:"Web"},{title:"1.0.555",date:"03 / 05 / 2025",description:"Se añadieron muchas mas preguntas y respuestas al apartado de FAQs.",category:"Web"},{title:"1.0.554",date:"02 / 04 / 2025",description:"Se actualizaron las dependencias y se mejoró el apartado tarjetas de amigo de la RSS.",category:"Web"},{title:"1.0.553",date:"27 / 03 / 2025",description:"Se actualizaron las dependencias y se mejoró el apartado de preguntas frecuentes.",category:"Web"},{title:"1.0.552",date:"22 / 03 / 2025",description:"Se actualizaron las dependencias.",category:"Web"},{title:"1.0.551",date:"08 / 01 / 2025",description:"Se añadió una nueva guía.",category:"Web"},{title:"1.0.55",date:"04 / 01 / 2025",description:"Se añadió una página experimental.",category:"Web"},{title:"1.0.544",date:"03 / 01 / 2025",description:"Se mejoró el sistema de descarga de tarjetas de amigo, y se añadió la posibilidad de tener los planetas como antes, con información extra.",category:"Web"},{title:"1.0.543",date:"02 / 28 / 2025",description:"Se refactorizó la obtención de estadísticas de la región para utilizar consultas basadas en categorías.",category:"Web"},{title:"1.0.542",date:"02 / 28 / 2025",description:"Se mejoró la función de descarga en la página de códigos de amigos.",category:"Web"},{title:"1.0.541",date:"02 / 28 / 2025",description:"Se modificó la representación de funciones formateadas en baseOutput.vue para una salida HTML mejorada.",category:"Web"},{title:"1.0.54",date:"02 / 27 / 2025",description:"Se añadió un nuevo tipo de economía, además se añadió una nueva página para crear fichas con el código de amigo de cada uno.",category:"Web"},{title:"1.0.53",date:"02 / 25 / 2025",description:"Se corrigieron las categorías de riqueza y se mejoró el sistema de ocultación de los apartados de la estación espacial en los sistemas que no tienen.",category:"Web"},{title:"1.0.529",date:"02 / 23 / 2025",description:"Se mejoró ciertos la lógica de documentación de descubrimiento.",category:"Web"},{title:"1.0.528",date:"02 / 23 / 2025",description:"Se añadieron ciertos descriptores planetarios faltantes.",category:"Web"},{title:"1.0.527",date:"02 / 22 / 2025",description:"Se mejoró es sistema del apartado de la cronología ademas se implementó un sistema nuevo de prefetch en la página principal.",category:"Web"},{title:"1.0.526",date:"02 / 22 / 2025",description:"Se añadieron dos nuevas bases al apartado de bases destacadas.",category:"Web"},{title:"1.0.525",date:"02 / 21 / 2025",description:"Se reordenaron los eventos históricos en Cronology.vue.",category:"Web"},{title:"1.0.524",date:"02 / 21 / 2025",description:"Se implementó un cuadro de diálogo de confirmación para eliminar objetos comercializables y limpiar el código comentado en PlanetInputs.vue. Se arreglaron los descriptores del tiempo de los planetas y se añadieron los faltantes.",category:"Web"},{title:"1.0.523",date:"02 / 21 / 2025",description:"Se ajustó el límite de advertencia del tamaño de fragmento sumado a un splitter para evitar futuros errores y se modificaron las clases de íconos en los datos del portal de comunidad.",category:"Web"},{title:"1.0.522",date:"02 / 21 / 2025",description:"Se añadieron algunos descriptores del clima faltantes.",category:"Web"},{title:"1.0.521",date:"02 / 21 / 2025",description:"Se ajustó el máximo de etiquetas seleccionadas a 2, se modificó el mensaje de mantenimiento en indextest.html y se añadió una nueva base al apartado de bases destacadas.",category:"Web"},{title:"1.0.52",date:"02 / 21 / 2025",description:"Se añadió la página de cronología de la Royal Space Society y de esta misma web.",category:"Web"},{title:"1.0.51",date:"02 / 13 / 2025",description:"Se añadió la página de regiones de la Royal Space Society.",category:"Web"},{title:"1.0.501",date:"02 / 13 / 2025",description:"Se mejoró el sistema de generación de glifos de la RSS con animaciones y mejoras de su código.",category:"Web"},{title:"1.0.50",date:"02 / 13 / 2025",description:"Se añadió un sistema de imágenes dinámico para las bases censadas.",category:"Web"},{title:"1.0.483",date:"02 / 09 / 2025",description:"Se arregló un problema con la traducción de un apartado del registro de asentamientos.",category:"Web"},{title:"1.0.482",date:"02 / 09 / 2025",description:"Se añadieron animaciones a la página de FAQs sumado a un nuevo sistema de logs.",category:"Web"},{title:"1.0.48",date:"02 / 08 / 2025",description:"Se añadió la nueva página del portal de comunidad de la RSS.",category:"Web"},{title:"1.0.4751",date:"02 / 08 / 2025",description:"Se añadió la región Qudsor Void de la galaxia Eissentam.",category:"Web"},{title:"1.0.475",date:"02 / 08 / 2025",description:"Se añadieron los nuevos sistemas gaseosos sumado a una nueva página, la de bases destacadas.",category:"Web"},{title:"1.0.474",date:"02 / 07 / 2025",description:"Se eliminó el apartado de imagen del paisaje del apartado de sistemas.",category:"Web"},{title:"1.0.473",date:"02 / 05 / 2025",description:"Se añadió la nueva página del censo, con información actualizada dinamicamente de la wiki.",category:"Web"},{title:"1.0.472",date:"01 / 31 / 2025",description:"Se arregló un problema con las fotos en las explicaciones de la web.",category:"Web"},{title:"1.0.47",date:"01 / 02 / 2025",description:"Se mejora la lógica del número de planetas en el apartado de sistemas.",category:"Web"},{title:"1.0.46",date:"01 / 01 / 2025",description:"Se añade la nueva plantilla de la Royal Space Society a cada apartado de la web.",category:"Web"},{title:"1.0.45",date:"12 / 31 / 2024",description:"Se termina de portar todas las páginas de la web a PrimeVue, con la última siendo la de las preguntas frecuentes.",category:"Web"},{title:"1.0.0",date:"12 / 24 / 2024",description:"Versión 1.00 del creador de páginas wiki para la RSS.",category:"Web"},{title:"Alpha",date:"12 / 08 / 2023",description:"Primera versión del creador de páginas wiki para la RSS.",category:"Web"}]),o=O(()=>a.value.reduce((r,t)=>(r[t.category]||(r[t.category]={}),r[t.category][t.date]||(r[t.category][t.date]=[]),r[t.category][t.date].push(t),r),{}));return(m,r)=>(l(),M(b(z),{class:"galactic-card timeline-card"},{content:p(()=>[i("div",X,[r[1]||(r[1]=i("div",{class:"header-section"},[i("div",{class:"header-content"},[i("a",{href:"https://example.com",target:"_blank",class:"logo-link"},[i("img",{src:j,class:"logo-image",alt:"Logo"})]),i("div",{class:"text-content"},[i("h1",{class:"galactic-title"},[i("span",{class:"title-text"},"Cronología de Eventos")]),i("p",{class:"text-stellar-gray subtitle"},"Explora los eventos importantes de la Royal Space Society")])])],-1)),r[2]||(r[2]=i("br",null,null,-1)),(l(!0),c(S,null,h(o.value,(t,d)=>(l(),c("div",{key:d,class:"galaxy-panel"},[v(b(N),{class:"quadrant-panel",toggleable:"",collapsed:""},{header:p(()=>[i("h3",Y,[r[0]||(r[0]=i("i",{class:"pi pi-th-large"},null,-1)),f(" "+W(d),1)])]),default:p(()=>[v(b(k),{value:Object.entries(t),align:"alternate",class:"custom-timeline"},{content:p(({item:n})=>[v(b(z),{class:"event-card separated-card"},{title:p(()=>[f(W(n[0]),1)]),content:p(()=>[i("ul",Z,[(l(!0),c(S,null,h(n[1],y=>(l(),c("li",{key:y.title,class:"event-item",innerHTML:`<strong>${y.title}</strong> - ${y.description.replace(/\n/g,"<br>")}`},null,8,ee))),128))])]),_:2},1024)]),_:1},8,["value"])]),_:2},1024)]))),128))])]),_:1}))}}),de=E(ae,[["__scopeId","data-v-bfc549a8"]]);export{de as default};
