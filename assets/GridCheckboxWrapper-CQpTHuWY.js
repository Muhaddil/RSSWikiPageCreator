"use strict";import{C as O,D as j,a7 as V,E as $,a8 as B,a9 as S,a as s,o as d,b as c,f as g,z as p,e as m,X as h,H as r,t as f,n as I,j as L,U as C,k as D,Y as E,aa as K,d as y,K as F,L as M,N,h as b,c as U,F as v,J as x,p as A}from"./main-DtQo8f2b.js";import{s as G,a as Y}from"./index-DElaopMb.js";import{s as q}from"./index-DpmbN5eb.js";var z=O`
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
`,H={root:function(e){var t=e.props;return["p-fieldset p-component",{"p-fieldset-toggleable":t.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},J=j.extend({name:"fieldset",style:z,classes:H}),T={name:"BaseFieldset",extends:$,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:J,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},w={name:"Fieldset",extends:T,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return B({toggleable:this.toggleable})}},directives:{ripple:V},components:{PlusIcon:Y,MinusIcon:G}};function u(e){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(e)}function k(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),o.push.apply(o,l)}return o}function _(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?k(Object(o),!0).forEach(function(l){W(e,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):k(Object(o)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(o,l))})}return e}function W(e,t,o){return(t=X(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function X(e){var t=Q(e,"string");return u(t)=="symbol"?t:t+""}function Q(e,t){if(u(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var l=o.call(e,t);if(u(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var R=["data-p"],Z=["data-p"],ee=["id"],te=["id","aria-controls","aria-expanded","aria-label"],oe=["id","aria-labelledby"];function le(e,t,o,l,a,n){var i=S("ripple");return d(),s("fieldset",r({class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[c("legend",r({class:e.cx("legend"),"data-p":n.dataP},e.ptm("legend")),[p(e.$slots,"legend",{toggleCallback:n.toggle},function(){return[e.toggleable?m("",!0):(d(),s("span",r({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17,ee)),e.toggleable?h((d(),s("button",r({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!a.d_collapsed,"aria-label":n.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return n.toggle&&n.toggle.apply(n,arguments)}),onKeydown:t[1]||(t[1]=function(){return n.onKeyDown&&n.onKeyDown.apply(n,arguments)})},_(_({},e.toggleButtonProps),e.ptm("toggleButton"))),[p(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:a.d_collapsed,class:I(e.cx("toggleIcon"))},function(){return[(d(),L(C(a.d_collapsed?"PlusIcon":"MinusIcon"),r({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),c("span",r({class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17)],16,te)),[[i]]):m("",!0)]})],16,Z),g(K,r({name:"p-toggleable-content"},e.ptm("transition")),{default:D(function(){return[h(c("div",r({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[c("div",r({class:e.cx("content")},e.ptm("content")),[p(e.$slots,"default")],16)],16,oe),[[E,!a.d_collapsed]])]}),_:3},16)],16,R)}w.render=le;const ne={class:"is-flex is-align-items-end is-gap-1 is-flex-grow-1"},ae=["for"],de=y({__name:"CompactCheckbox",props:F({label:{},trueValue:{},falseValue:{},value:{},name:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=M(e,"modelValue"),o=N("checkbox-");return(l,a)=>(d(),s("div",ne,[g(b(q),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=n=>t.value=n),"false-value":l.falseValue,"input-id":b(o),"true-value":l.trueValue,binary:""},null,8,["modelValue","false-value","input-id","true-value"]),c("label",{for:b(o),class:"is-flex-grow-1"},f(l.label),9,ae)]))}});function re(e,t){return e.reduce((o,l,a)=>{const n=Math.floor(a/t);return o[n]||(o[n]=[]),o[n].push(l),o},[])}const ie={class:"columns is-mobile mb-0 checkbox-row"},se="Yes",ce="No",ue=y({__name:"GridCheckboxWrapper",props:{checkboxes:{}},setup(e){const t=e,o=U(()=>re(t.checkboxes,2));return(l,a)=>(d(!0),s(v,null,x(o.value,n=>(d(),s("div",ie,[(d(!0),s(v,null,x(n,i=>(d(),s("div",{key:i.label,class:"column is-flex is-align-items-center checkbox-wrapper"},[g(de,{modelValue:i.model,"onUpdate:modelValue":P=>i.model=P,"false-value":i.falseValue??ce,label:i.label,"true-value":i.trueValue??se},null,8,["modelValue","onUpdate:modelValue","false-value","label","true-value"])]))),128))]))),256))}}),ge=A(ue,[["__scopeId","data-v-bd36cdd8"]]);export{ge as G,w as s};
