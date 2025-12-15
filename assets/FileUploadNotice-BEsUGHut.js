import{D as e,F as t,I as n,K as r,L as i,P as a,R as o,dt as s,f as c,ft as l,h as u,l as d,m as f,mt as p,p as m,q as h,s as g,t as _,v,x as y,y as b,z as x}from"./runtime-dom.esm-bundler-BxVoWjA0.js";import{C as S,W as C,a as w,c as T,k as E,l as D,n as O,s as k,t as A}from"./button-BjSjIJD1.js";import{n as j}from"./portal-4JU3kS7u.js";import{n as ee,t as te}from"./WikiLink-DCoQa9as.js";import{n as M}from"./minus-BjGaqWu5.js";import{t as N}from"./progressbar-C_gmCZbA.js";var P={name:`UploadIcon`,extends:k};function F(e){return ie(e)||re(e)||ne(e)||I()}function I(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(e,t){if(e){if(typeof e==`string`)return L(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function re(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ie(e){if(Array.isArray(e))return L(e)}function L(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ae(t,n,r,i,o,s){return a(),u(`svg`,e({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},t.pti()),F(n[0]||=[c(`path`,{"fill-rule":`evenodd`,"clip-rule":`evenodd`,d:`M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z`,fill:`currentColor`},null,-1)]),16)}P.render=ae;var oe=D.extend({name:`message`,style:`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}}),se={name:`BaseMessage`,extends:T,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:oe,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function R(e){"@babel/helpers - typeof";return R=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},R(e)}function z(e,t,n){return(t=B(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){var t=V(e,`string`);return R(t)==`symbol`?t:t+``}function V(e,t){if(R(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(R(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var H={name:`Message`,extends:se,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return C(z(z({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:O},components:{TimesIcon:j}};function U(e){"@babel/helpers - typeof";return U=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},U(e)}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?W(Object(n),!0).forEach(function(t){K(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function K(e,t,n){return(t=ce(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(e){var t=le(e,`string`);return U(t)==`symbol`?t:t+``}function le(e,t){if(U(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(U(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ue=[`data-p`],de=[`data-p`],fe=[`data-p`],pe=[`aria-label`,`data-p`],me=[`data-p`];function he(t,l,d,p,g,v){var y=i(`TimesIcon`),b=o(`ripple`);return a(),m(_,e({name:`p-message`,appear:``},t.ptmi(`transition`)),{default:r(function(){return[g.visible?(a(),u(`div`,e({key:0,class:t.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":v.dataP},t.ptm(`root`)),[c(`div`,e({class:t.cx(`contentWrapper`)},t.ptm(`contentWrapper`)),[t.$slots.container?n(t.$slots,`container`,{key:0,closeCallback:v.close}):(a(),u(`div`,e({key:1,class:t.cx(`content`),"data-p":v.dataP},t.ptm(`content`)),[n(t.$slots,`icon`,{class:s(t.cx(`icon`))},function(){return[(a(),m(x(t.icon?`span`:null),e({class:[t.cx(`icon`),t.icon],"data-p":v.dataP},t.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),t.$slots.default?(a(),u(`div`,e({key:0,class:t.cx(`text`),"data-p":v.dataP},t.ptm(`text`)),[n(t.$slots,`default`)],16,fe)):f(``,!0),t.closable?h((a(),u(`button`,e({key:1,class:t.cx(`closeButton`),"aria-label":v.closeAriaLabel,type:`button`,onClick:l[0]||=function(e){return v.close(e)},"data-p":v.dataP},G(G({},t.closeButtonProps),t.ptm(`closeButton`))),[n(t.$slots,`closeicon`,{},function(){return[t.closeIcon?(a(),u(`i`,e({key:0,class:[t.cx(`closeIcon`),t.closeIcon],"data-p":v.dataP},t.ptm(`closeIcon`)),null,16,me)):(a(),m(y,e({key:1,class:[t.cx(`closeIcon`),t.closeIcon],"data-p":v.dataP},t.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,pe)),[[b]]):f(``,!0)],16,de))],16)],16,ue)):f(``,!0)]}),_:3},16)}H.render=he;var ge=D.extend({name:`fileupload`,style:`
    .p-fileupload input[type='file'] {
        display: none;
    }

    .p-fileupload-advanced {
        border: 1px solid dt('fileupload.border.color');
        border-radius: dt('fileupload.border.radius');
        background: dt('fileupload.background');
        color: dt('fileupload.color');
    }

    .p-fileupload-header {
        display: flex;
        align-items: center;
        padding: dt('fileupload.header.padding');
        background: dt('fileupload.header.background');
        color: dt('fileupload.header.color');
        border-style: solid;
        border-width: dt('fileupload.header.border.width');
        border-color: dt('fileupload.header.border.color');
        border-radius: dt('fileupload.header.border.radius');
        gap: dt('fileupload.header.gap');
    }

    .p-fileupload-content {
        border: 1px solid transparent;
        display: flex;
        flex-direction: column;
        gap: dt('fileupload.content.gap');
        transition: border-color dt('fileupload.transition.duration');
        padding: dt('fileupload.content.padding');
    }

    .p-fileupload-content .p-progressbar {
        width: 100%;
        height: dt('fileupload.progressbar.height');
    }

    .p-fileupload-file-list {
        display: flex;
        flex-direction: column;
        gap: dt('fileupload.filelist.gap');
    }

    .p-fileupload-file {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: dt('fileupload.file.padding');
        border-block-end: 1px solid dt('fileupload.file.border.color');
        gap: dt('fileupload.file.gap');
    }

    .p-fileupload-file:last-child {
        border-block-end: 0;
    }

    .p-fileupload-file-info {
        display: flex;
        flex-direction: column;
        gap: dt('fileupload.file.info.gap');
    }

    .p-fileupload-file-thumbnail {
        flex-shrink: 0;
    }

    .p-fileupload-file-actions {
        margin-inline-start: auto;
    }

    .p-fileupload-highlight {
        border: 1px dashed dt('fileupload.content.highlight.border.color');
    }

    .p-fileupload-basic .p-message {
        margin-block-end: dt('fileupload.basic.gap');
    }

    .p-fileupload-basic-content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: dt('fileupload.basic.gap');
    }
`,classes:{root:function(e){return[`p-fileupload p-fileupload-${e.props.mode} p-component`]},header:`p-fileupload-header`,pcChooseButton:`p-fileupload-choose-button`,pcUploadButton:`p-fileupload-upload-button`,pcCancelButton:`p-fileupload-cancel-button`,content:`p-fileupload-content`,fileList:`p-fileupload-file-list`,file:`p-fileupload-file`,fileThumbnail:`p-fileupload-file-thumbnail`,fileInfo:`p-fileupload-file-info`,fileName:`p-fileupload-file-name`,fileSize:`p-fileupload-file-size`,pcFileBadge:`p-fileupload-file-badge`,fileActions:`p-fileupload-file-actions`,pcFileRemoveButton:`p-fileupload-file-remove-button`,basicContent:`p-fileupload-basic-content`}}),_e={name:`BaseFileUpload`,extends:T,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:`advanced`},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:`{0}: Invalid file size, file size should be smaller than {1}.`},invalidFileTypeMessage:{type:String,default:`{0}: Invalid file type, allowed file types: {1}.`},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:`Maximum number of files exceeded, limit is {0} at most.`},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:`secondary`}}},cancelButtonProps:{type:Object,default:function(){return{severity:`secondary`}}}},style:ge,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},q={name:`FileContent`,hostName:`FileUpload`,extends:T,emits:[`remove`],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:`warn`},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(e){var t=1024,n=3,r=this.$primevue.config.locale?.fileSizeTypes||[`B`,`KB`,`MB`,`GB`,`TB`,`PB`,`EB`,`ZB`,`YB`];if(e===0)return`0 ${r[0]}`;var i=Math.floor(Math.log(e)/Math.log(t));return`${parseFloat((e/t**+i).toFixed(n))} ${r[i]}`}},components:{Button:A,Badge:w,TimesIcon:j}},ve=[`alt`,`src`,`width`];function ye(n,o,l,f,h,g){var _=i(`Badge`),v=i(`TimesIcon`),y=i(`Button`);return a(!0),u(d,null,t(l.files,function(t,i){return a(),u(`div`,e({key:t.name+t.type+t.size,class:n.cx(`file`)},{ref_for:!0},n.ptm(`file`)),[c(`img`,e({role:`presentation`,class:n.cx(`fileThumbnail`),alt:t.name,src:t.objectURL,width:l.previewWidth},{ref_for:!0},n.ptm(`fileThumbnail`)),null,16,ve),c(`div`,e({class:n.cx(`fileInfo`)},{ref_for:!0},n.ptm(`fileInfo`)),[c(`div`,e({class:n.cx(`fileName`)},{ref_for:!0},n.ptm(`fileName`)),p(t.name),17),c(`span`,e({class:n.cx(`fileSize`)},{ref_for:!0},n.ptm(`fileSize`)),p(g.formatSize(t.size)),17)],16),b(_,{value:l.badgeValue,class:s(n.cx(`pcFileBadge`)),severity:l.badgeSeverity,unstyled:n.unstyled,pt:n.ptm(`pcFileBadge`)},null,8,[`value`,`class`,`severity`,`unstyled`,`pt`]),c(`div`,e({class:n.cx(`fileActions`)},{ref_for:!0},n.ptm(`fileActions`)),[b(y,{onClick:function(e){return n.$emit(`remove`,i)},text:``,rounded:``,severity:`danger`,class:s(n.cx(`pcFileRemoveButton`)),unstyled:n.unstyled,pt:n.ptm(`pcFileRemoveButton`)},{icon:r(function(r){return[l.templates.fileremoveicon?(a(),m(x(l.templates.fileremoveicon),{key:0,class:s(r.class),file:t,index:i},null,8,[`class`,`file`,`index`])):(a(),m(v,e({key:1,class:r.class,"aria-hidden":`true`},{ref_for:!0},n.ptm(`pcFileRemoveButton`).icon),null,16,[`class`]))]}),_:2},1032,[`onClick`,`class`,`unstyled`,`pt`])],16)],16)}),128)}q.render=ye;function J(e){return Se(e)||xe(e)||X(e)||be()}function be(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xe(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Se(e){if(Array.isArray(e))return Z(e)}function Y(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=X(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function X(e,t){if(e){if(typeof e==`string`)return Z(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function Z(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Q={name:`FileUpload`,extends:_e,inheritAttrs:!1,emits:[`select`,`uploader`,`before-upload`,`progress`,`upload`,`error`,`before-send`,`clear`,`remove`,`remove-uploaded-file`],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(e){e.button===0&&this.$refs.fileInput.click()},onFileSelect:function(e){if(e.type!==`drop`&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.isBasic&&this.hasFiles&&(this.files=[]),this.messages=[],this.files=this.files||[];var t=Y(e.dataTransfer?e.dataTransfer.files:e.target.files),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;!this.isFileSelected(r)&&!this.isFileLimitExceeded()&&this.validate(r)&&(this.isImage(r)&&(r.objectURL=window.URL.createObjectURL(r)),this.files.push(r))}}catch(e){t.e(e)}finally{t.f()}this.$emit(`select`,{originalEvent:e,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),e.type!==`drop`&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var e=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit(`uploader`,{files:this.files});else{var t=new XMLHttpRequest,n=new FormData;this.$emit(`before-upload`,{xhr:t,formData:n});var r=Y(this.files),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;n.append(this.name,a,a.name)}}catch(e){r.e(e)}finally{r.f()}t.upload.addEventListener(`progress`,function(t){t.lengthComputable&&(e.progress=Math.round(t.loaded*100/t.total)),e.$emit(`progress`,{originalEvent:t,progress:e.progress})}),t.onreadystatechange=function(){if(t.readyState===4){if(e.progress=0,t.status>=200&&t.status<300){var n;e.fileLimit&&(e.uploadedFileCount+=e.files.length),e.$emit(`upload`,{xhr:t,files:e.files}),(n=e.uploadedFiles).push.apply(n,J(e.files))}else e.$emit(`error`,{xhr:t,files:e.files});e.clear()}},this.url&&(t.open(`POST`,this.url,!0),this.$emit(`before-send`,{xhr:t,formData:n}),t.withCredentials=this.withCredentials,t.send(n))}},clear:function(){this.files=[],this.messages=null,this.$emit(`clear`),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(e){if(this.files&&this.files.length){var t=Y(this.files),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;if(r.name+r.type+r.size===e.name+e.type+e.size)return!0}}catch(e){t.e(e)}finally{t.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(e){return this.accept&&!this.isFileTypeValid(e)?(this.messages.push(this.invalidFileTypeMessage.replace(`{0}`,e.name).replace(`{1}`,this.accept)),!1):this.maxFileSize&&e.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace(`{0}`,e.name).replace(`{1}`,this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(e){var t=Y(this.accept.split(`,`).map(function(e){return e.trim()})),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;if(this.isWildcard(r)?this.getTypeClass(e.type)===this.getTypeClass(r):e.type==r||this.getFileExtension(e).toLowerCase()===r.toLowerCase())return!0}}catch(e){t.e(e)}finally{t.f()}return!1},getTypeClass:function(e){return e.substring(0,e.indexOf(`/`))},isWildcard:function(e){return e.indexOf(`*`)!==-1},getFileExtension:function(e){return`.`+e.name.split(`.`).pop()},isImage:function(e){return/^image\//.test(e.type)},onDragEnter:function(e){!this.disabled&&(!this.hasFiles||this.multiple)&&(e.stopPropagation(),e.preventDefault())},onDragOver:function(e){!this.disabled&&(!this.hasFiles||this.multiple)&&(!this.isUnstyled&&E(this.$refs.content,`p-fileupload-highlight`),this.$refs.content.setAttribute(`data-p-highlight`,!0),e.stopPropagation(),e.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&S(this.$refs.content,`p-fileupload-highlight`),this.$refs.content.setAttribute(`data-p-highlight`,!1))},onDrop:function(e){if(!this.disabled){!this.isUnstyled&&S(this.$refs.content,`p-fileupload-highlight`),this.$refs.content.setAttribute(`data-p-highlight`,!1),e.stopPropagation(),e.preventDefault();var t=e.dataTransfer?e.dataTransfer.files:e.target.files;(this.multiple||t&&t.length===1)&&this.onFileSelect(e)}},remove:function(e){this.clearInputElement();var t=this.files.splice(e,1)[0];this.files=J(this.files),this.$emit(`remove`,{file:t,files:this.files})},removeUploadedFile:function(e){var t=this.uploadedFiles.splice(e,1)[0];this.uploadedFiles=J(this.uploadedFiles),this.$emit(`remove-uploaded-file`,{file:t,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=``},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value=``)},formatSize:function(e){var t=1024,n=3,r=this.$primevue.config.locale?.fileSizeTypes||[`B`,`KB`,`MB`,`GB`,`TB`,`PB`,`EB`,`ZB`,`YB`];if(e===0)return`0 ${r[0]}`;var i=Math.floor(Math.log(e)/Math.log(t));return`${parseFloat((e/t**+i).toFixed(n))} ${r[i]}`},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace(`{0}`,this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode===`advanced`},isBasic:function(){return this.mode===`basic`},chooseButtonClass:function(){return[this.cx(`pcChooseButton`),this.class]},basicFileChosenLabel:function(){if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var e;return this.files&&this.files.length===1?this.files[0].name:(e=this.$primevue.config.locale)==null||(e=e.fileChosenMessage)==null?void 0:e.replace(`{0}`,this.files.length)}return this.$primevue.config.locale?.noFileChosenMessage||``},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:A,ProgressBar:N,Message:H,FileContent:q,PlusIcon:M,UploadIcon:P,TimesIcon:j},directives:{ripple:O}},Ce=[`multiple`,`accept`,`disabled`],$=[`accept`,`disabled`,`multiple`];function we(o,h,_,y,S,C){var w=i(`Button`),T=i(`ProgressBar`),E=i(`Message`),D=i(`FileContent`);return C.isAdvanced?(a(),u(`div`,e({key:0,class:o.cx(`root`)},o.ptmi(`root`)),[c(`input`,e({ref:`fileInput`,type:`file`,onChange:h[0]||=function(){return C.onFileSelect&&C.onFileSelect.apply(C,arguments)},multiple:o.multiple,accept:o.accept,disabled:C.chooseDisabled},o.ptm(`input`)),null,16,Ce),c(`div`,e({class:o.cx(`header`)},o.ptm(`header`)),[n(o.$slots,`header`,{files:S.files,uploadedFiles:S.uploadedFiles,chooseCallback:C.choose,uploadCallback:C.uploader,clearCallback:C.clear},function(){return[b(w,e({label:C.chooseButtonLabel,class:C.chooseButtonClass,style:o.style,disabled:o.disabled,unstyled:o.unstyled,onClick:C.choose,onKeydown:g(C.choose,[`enter`]),onFocus:C.onFocus,onBlur:C.onBlur},o.chooseButtonProps,{pt:o.ptm(`pcChooseButton`)}),{icon:r(function(t){return[n(o.$slots,`chooseicon`,{},function(){return[(a(),m(x(o.chooseIcon?`span`:`PlusIcon`),e({class:[t.class,o.chooseIcon],"aria-hidden":`true`},o.ptm(`pcChooseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`label`,`class`,`style`,`disabled`,`unstyled`,`onClick`,`onKeydown`,`onFocus`,`onBlur`,`pt`]),o.showUploadButton?(a(),m(w,e({key:0,class:o.cx(`pcUploadButton`),label:C.uploadButtonLabel,onClick:C.uploader,disabled:C.uploadDisabled,unstyled:o.unstyled},o.uploadButtonProps,{pt:o.ptm(`pcUploadButton`)}),{icon:r(function(t){return[n(o.$slots,`uploadicon`,{},function(){return[(a(),m(x(o.uploadIcon?`span`:`UploadIcon`),e({class:[t.class,o.uploadIcon],"aria-hidden":`true`},o.ptm(`pcUploadButton`).icon,{"data-pc-section":`uploadbuttonicon`}),null,16,[`class`]))]})]}),_:3},16,[`class`,`label`,`onClick`,`disabled`,`unstyled`,`pt`])):f(``,!0),o.showCancelButton?(a(),m(w,e({key:1,class:o.cx(`pcCancelButton`),label:C.cancelButtonLabel,onClick:C.clear,disabled:C.cancelDisabled,unstyled:o.unstyled},o.cancelButtonProps,{pt:o.ptm(`pcCancelButton`)}),{icon:r(function(t){return[n(o.$slots,`cancelicon`,{},function(){return[(a(),m(x(o.cancelIcon?`span`:`TimesIcon`),e({class:[t.class,o.cancelIcon],"aria-hidden":`true`},o.ptm(`pcCancelButton`).icon,{"data-pc-section":`cancelbuttonicon`}),null,16,[`class`]))]})]}),_:3},16,[`class`,`label`,`onClick`,`disabled`,`unstyled`,`pt`])):f(``,!0)]})],16),c(`div`,e({ref:`content`,class:o.cx(`content`),onDragenter:h[1]||=function(){return C.onDragEnter&&C.onDragEnter.apply(C,arguments)},onDragover:h[2]||=function(){return C.onDragOver&&C.onDragOver.apply(C,arguments)},onDragleave:h[3]||=function(){return C.onDragLeave&&C.onDragLeave.apply(C,arguments)},onDrop:h[4]||=function(){return C.onDrop&&C.onDrop.apply(C,arguments)}},o.ptm(`content`),{"data-p-highlight":!1}),[n(o.$slots,`content`,{files:S.files,uploadedFiles:S.uploadedFiles,removeUploadedFileCallback:C.removeUploadedFile,removeFileCallback:C.remove,progress:S.progress,messages:S.messages},function(){return[C.hasFiles?(a(),m(T,{key:0,value:S.progress,showValue:!1,unstyled:o.unstyled,pt:o.ptm(`pcProgressbar`)},null,8,[`value`,`unstyled`,`pt`])):f(``,!0),(a(!0),u(d,null,t(S.messages,function(e){return a(),m(E,{key:e,severity:`error`,onClose:C.onMessageClose,unstyled:o.unstyled,pt:o.ptm(`pcMessage`)},{default:r(function(){return[v(p(e),1)]}),_:2},1032,[`onClose`,`unstyled`,`pt`])}),128)),C.hasFiles?(a(),u(`div`,{key:1,class:s(o.cx(`fileList`))},[b(D,{files:S.files,onRemove:C.remove,badgeValue:C.pendingLabel,previewWidth:o.previewWidth,templates:o.$slots,unstyled:o.unstyled,pt:o.pt},null,8,[`files`,`onRemove`,`badgeValue`,`previewWidth`,`templates`,`unstyled`,`pt`])],2)):f(``,!0),C.hasUploadedFiles?(a(),u(`div`,{key:2,class:s(o.cx(`fileList`))},[b(D,{files:S.uploadedFiles,onRemove:C.removeUploadedFile,badgeValue:C.completedLabel,badgeSeverity:`success`,previewWidth:o.previewWidth,templates:o.$slots,unstyled:o.unstyled,pt:o.pt},null,8,[`files`,`onRemove`,`badgeValue`,`previewWidth`,`templates`,`unstyled`,`pt`])],2)):f(``,!0)]}),o.$slots.empty&&!C.hasFiles&&!C.hasUploadedFiles?(a(),u(`div`,l(e({key:0},o.ptm(`empty`))),[n(o.$slots,`empty`)],16)):f(``,!0)],16)],16)):C.isBasic?(a(),u(`div`,e({key:1,class:o.cx(`root`)},o.ptmi(`root`)),[(a(!0),u(d,null,t(S.messages,function(e){return a(),m(E,{key:e,severity:`error`,onClose:C.onMessageClose,unstyled:o.unstyled,pt:o.ptm(`pcMessage`)},{default:r(function(){return[v(p(e),1)]}),_:2},1032,[`onClose`,`unstyled`,`pt`])}),128)),c(`div`,e({class:o.cx(`basicContent`)},o.ptm(`basicContent`)),[b(w,e({label:C.chooseButtonLabel,class:C.chooseButtonClass,style:o.style,disabled:o.disabled,unstyled:o.unstyled,onMouseup:C.onBasicUploaderClick,onKeydown:g(C.choose,[`enter`]),onFocus:C.onFocus,onBlur:C.onBlur},o.chooseButtonProps,{pt:o.ptm(`pcChooseButton`)}),{icon:r(function(t){return[n(o.$slots,`chooseicon`,{},function(){return[(a(),m(x(o.chooseIcon?`span`:`PlusIcon`),e({class:[t.class,o.chooseIcon],"aria-hidden":`true`},o.ptm(`pcChooseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`label`,`class`,`style`,`disabled`,`unstyled`,`onMouseup`,`onKeydown`,`onFocus`,`onBlur`,`pt`]),o.auto?f(``,!0):n(o.$slots,`filelabel`,{key:0,class:s(o.cx(`filelabel`)),files:S.files},function(){return[c(`span`,{class:s(o.cx(`filelabel`))},p(C.basicFileChosenLabel),3)]}),c(`input`,e({ref:`fileInput`,type:`file`,accept:o.accept,disabled:o.disabled,multiple:o.multiple,onChange:h[5]||=function(){return C.onFileSelect&&C.onFileSelect.apply(C,arguments)},onFocus:h[6]||=function(){return C.onFocus&&C.onFocus.apply(C,arguments)},onBlur:h[7]||=function(){return C.onBlur&&C.onBlur.apply(C,arguments)}},o.ptm(`input`)),null,16,$)],16)],16)):f(``,!0)}Q.render=we;var Te=y({__name:`FileUploadNotice`,setup(e){return(e,t)=>(a(),u(d,null,[c(`p`,null,[t[0]||=v(` Las imágenes que cargues aquí no se cargarán en la wiki. Esto es solo para completar automáticamente el nombre de la imagen. El tamaño máximo de archivo es de 10 MB. Puedes cargar tus imágenes en la wiki en `,-1),b(te,{link:`Special:Upload?multiple=true`,text:`Especial:Subir`}),t[1]||=v(`. `,-1)]),c(`p`,null,[t[2]||=v(` Puedes comprimir tus imágenes con el `,-1),b(ee,{link:`https://nmscd.com/Image-Compressor/`,text:`Compresor de imágenes`}),t[3]||=v(`. `,-1)])],64))}});export{Q as n,Te as t};