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
`,Y={root:function(t){var o=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":o.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},q=j.extend({name:"fieldset",style:W,classes:Y}),H={name:"BaseFieldset",extends:B,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:q,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},J={name:"Fieldset",extends:H,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return C({toggleable:this.toggleable})}},directives:{ripple:S},components:{PlusIcon:T,MinusIcon:G}};function c(e){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(e)}function w(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,l)}return o}function P(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?w(Object(o),!0).forEach(function(l){R(e,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(o,l))})}return e}function R(e,t,o){return(t=X(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function X(e){var t=x(e,"string");return c(t)=="symbol"?t:t+""}function x(e,t){if(c(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var l=o.call(e,t);if(c(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Q=["data-p"],Z=["data-p"],ee=["id"],te=["id","aria-controls","aria-expanded","aria-label"],oe=["id","aria-labelledby"];function le(e,t,o,l,r,n){var d=_("ripple");return s(),i("fieldset",a({class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[u("legend",a({class:e.cx("legend"),"data-p":n.dataP},e.ptm("legend")),[g(e.$slots,"legend",{toggleCallback:n.toggle},function(){return[e.toggleable?m("",!0):(s(),i("span",a({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17,ee)),e.toggleable?v((s(),i("button",a({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!r.d_collapsed,"aria-label":n.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return n.toggle&&n.toggle.apply(n,arguments)}),onKeydown:t[1]||(t[1]=function(){return n.onKeyDown&&n.onKeyDown.apply(n,arguments)})},P(P({},e.toggleButtonProps),e.ptm("toggleButton"))),[g(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:r.d_collapsed,class:D(e.cx("toggleIcon"))},function(){return[(s(),I(L(r.d_collapsed?"PlusIcon":"MinusIcon"),a({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),u("span",a({class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17)],16,te)),[[d]]):m("",!0)]})],16,Z),b(K,a({name:"p-toggleable-content"},e.ptm("transition")),{default:$(function(){return[v(u("div",a({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[u("div",a({class:e.cx("content")},e.ptm("content")),[g(e.$slots,"default")],16)],16,oe),[[E,!r.d_collapsed]])]}),_:3},16)],16,Q)}J.render=le;const ne={class:"is-flex is-align-items-end is-gap-1 is-flex-grow-1"},re=["for"],ae=k({__name:"CompactCheckbox",props:F({label:{},trueValue:{},falseValue:{},value:{},name:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=N(e,"modelValue"),o=M("checkbox-");return(l,r)=>(s(),i("div",ne,[b(p(z),{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=n=>t.value=n),"false-value":l.falseValue,"input-id":p(o),"true-value":l.trueValue,binary:""},null,8,["modelValue","false-value","input-id","true-value"]),u("label",{for:p(o),class:"is-flex-grow-1"},f(l.label),9,re)]))}});function se(e,t){return e.reduce((o,l,r)=>{const n=Math.floor(r/t);return o[n]||(o[n]=[]),o[n].push(l),o},[])}const de={class:"columns is-mobile mb-0 checkbox-row"},ie="Yes",ue="No",ce=k({__name:"GridCheckboxWrapper",props:{checkboxes:{}},setup(e){const t=e,o=A(()=>se(t.checkboxes,2));return(l,r)=>(s(!0),i(y,null,h(o.value,n=>(s(),i("div",de,[(s(!0),i(y,null,h(n,d=>(s(),i("div",{key:d.label,class:"column is-flex is-align-items-center checkbox-wrapper"},[b(ae,{modelValue:d.model,"onUpdate:modelValue":V=>d.model=V,"false-value":d.falseValue??ue,label:d.label,"true-value":d.trueValue??ie},null,8,["modelValue","onUpdate:modelValue","false-value","label","true-value"])]))),128))]))),256))}}),be=U(ce,[["__scopeId","data-v-bd36cdd8"]]);export{be as G,J as s};
