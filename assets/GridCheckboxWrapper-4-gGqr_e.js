import{C as O,D as j,a7 as S,E as B,a8 as C,a9 as _,a as i,o as s,b as u,f as b,z as g,e as m,X as v,H as a,t as f,n as D,j as I,U as L,k as $,Y as E,aa as K,d as k,K as F,L as N,N as M,h as p,c as A,F as y,J as h,p as U}from"./main-CUdmV-Wl.js";import{s as G,a as T}from"./index-BSGj8d_z.js";import{s as z}from"./index-CAdXwqgj.js";var W=O`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`,Y={root:function(e){return["p-fieldset p-component",{"p-fieldset-toggleable":e.props.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},q=j.extend({name:"fieldset",style:W,classes:Y}),H={name:"BaseFieldset",extends:B,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:q,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},J={name:"Fieldset",extends:H,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){("Enter"===e.code||"NumpadEnter"===e.code||"Space"===e.code)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return C({toggleable:this.toggleable})}},directives:{ripple:S},components:{PlusIcon:T,MinusIcon:G}};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function P(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?w(Object(o),!0).forEach((function(t){R(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function R(e,t,o){return(t=X(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function X(e){var t=x(e,"string");return"symbol"==c(t)?t:t+""}function x(e,t){if("object"!=c(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var l=o.call(e,t);if("object"!=c(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var Q=["data-p"],Z=["data-p"],ee=["id"],te=["id","aria-controls","aria-expanded","aria-label"],oe=["id","aria-labelledby"];function le(e,t,o,l,n,d){var r=_("ripple");return s(),i("fieldset",a({class:e.cx("root"),"data-p":d.dataP},e.ptmi("root")),[u("legend",a({class:e.cx("legend"),"data-p":d.dataP},e.ptm("legend")),[g(e.$slots,"legend",{toggleCallback:d.toggle},(function(){return[e.toggleable?m("",!0):(s(),i("span",a({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17,ee)),e.toggleable?v((s(),i("button",a({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!n.d_collapsed,"aria-label":d.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return d.toggle&&d.toggle.apply(d,arguments)}),onKeydown:t[1]||(t[1]=function(){return d.onKeyDown&&d.onKeyDown.apply(d,arguments)})},P(P({},e.toggleButtonProps),e.ptm("toggleButton"))),[g(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:n.d_collapsed,class:D(e.cx("toggleIcon"))},(function(){return[(s(),I(L(n.d_collapsed?"PlusIcon":"MinusIcon"),a({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]})),u("span",a({class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17)],16,te)),[[r]]):m("",!0)]}))],16,Z),b(K,a({name:"p-toggleable-content"},e.ptm("transition")),{default:$((function(){return[v(u("div",a({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[u("div",a({class:e.cx("content")},e.ptm("content")),[g(e.$slots,"default")],16)],16,oe),[[E,!n.d_collapsed]])]})),_:3},16)],16,Q)}J.render=le;const ne={class:"is-flex is-align-items-end is-gap-1 is-flex-grow-1"},re=["for"],ae=k({__name:"CompactCheckbox",props:F({label:{},trueValue:{},falseValue:{},value:{},name:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=N(e,"modelValue"),o=M("checkbox-");return(e,l)=>(s(),i("div",ne,[b(p(z),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),"false-value":e.falseValue,"input-id":p(o),"true-value":e.trueValue,binary:""},null,8,["modelValue","false-value","input-id","true-value"]),u("label",{for:p(o),class:"is-flex-grow-1"},f(e.label),9,re)]))}});function se(e,t){return e.reduce(((e,o,l)=>{const n=Math.floor(l/t);return e[n]||(e[n]=[]),e[n].push(o),e}),[])}const de={class:"columns is-mobile mb-0 checkbox-row"},ie="Yes",ue="No",ce=k({__name:"GridCheckboxWrapper",props:{checkboxes:{}},setup(e){const t=e,o=A((()=>se(t.checkboxes,2)));return(e,t)=>(s(!0),i(y,null,h(o.value,(e=>(s(),i("div",de,[(s(!0),i(y,null,h(e,(e=>(s(),i("div",{key:e.label,class:"column is-flex is-align-items-center checkbox-wrapper"},[b(ae,{modelValue:e.model,"onUpdate:modelValue":t=>e.model=t,"false-value":e.falseValue??ue,label:e.label,"true-value":e.trueValue??ie},null,8,["modelValue","onUpdate:modelValue","false-value","label","true-value"])])))),128))])))),256))}}),be=U(ce,[["__scopeId","data-v-bd36cdd8"]]);export{be as G,J as s};