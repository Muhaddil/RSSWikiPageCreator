import{s as O,a as j}from"./index-DQn__TpS.js";import{C as S,a6 as B,D as C,a7 as D,a8 as _,a as i,o as d,b as u,f as b,z as g,e as m,W as v,E as a,t as f,n as I,j as $,T as L,k as E,X as K,a9 as F,d as k,J as M,K as N,M as A,h as p,c as T,F as y,H as h,p as x}from"./main-CmTm5rB-.js";import{s as G}from"./index-DeBlCc2G.js";var U=`
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
`,W={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},z=S.extend({name:"fieldset",style:U,classes:W}),q={name:"BaseFieldset",extends:C,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:z,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},H={name:"Fieldset",extends:q,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return D({toggleable:this.toggleable})}},directives:{ripple:B},components:{PlusIcon:j,MinusIcon:O}};function c(e){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(e)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(l){J(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function J(e,t,n){return(t=R(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){var t=X(e,"string");return c(t)=="symbol"?t:t+""}function X(e,t){if(c(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(c(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Y=["data-p"],Q=["data-p"],Z=["id"],ee=["id","aria-controls","aria-expanded","aria-label"],te=["id","aria-labelledby"];function ne(e,t,n,l,r,o){var s=_("ripple");return d(),i("fieldset",a({class:e.cx("root"),"data-p":o.dataP},e.ptmi("root")),[u("legend",a({class:e.cx("legend"),"data-p":o.dataP},e.ptm("legend")),[g(e.$slots,"legend",{toggleCallback:o.toggle},function(){return[e.toggleable?m("",!0):(d(),i("span",a({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17,Z)),e.toggleable?v((d(),i("button",a({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!r.d_collapsed,"aria-label":o.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return o.toggle&&o.toggle.apply(o,arguments)}),onKeydown:t[1]||(t[1]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)})},P(P({},e.toggleButtonProps),e.ptm("toggleButton"))),[g(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:r.d_collapsed,class:I(e.cx("toggleIcon"))},function(){return[(d(),$(L(r.d_collapsed?"PlusIcon":"MinusIcon"),a({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),u("span",a({class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17)],16,ee)),[[s]]):m("",!0)]})],16,Q),b(F,a({name:"p-toggleable-content"},e.ptm("transition")),{default:E(function(){return[v(u("div",a({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[u("div",a({class:e.cx("content")},e.ptm("content")),[g(e.$slots,"default")],16)],16,te),[[K,!r.d_collapsed]])]}),_:3},16)],16,Y)}H.render=ne;const oe={class:"is-flex is-align-items-end is-gap-1 is-flex-grow-1"},le=["for"],re=k({__name:"CompactCheckbox",props:M({label:{},trueValue:{},falseValue:{},value:{},name:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=N(e,"modelValue"),n=A("checkbox-");return(l,r)=>(d(),i("div",oe,[b(p(G),{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=o=>t.value=o),"false-value":e.falseValue,"input-id":p(n),"true-value":e.trueValue,binary:""},null,8,["modelValue","false-value","input-id","true-value"]),u("label",{for:p(n),class:"is-flex-grow-1"},f(e.label),9,le)]))}});function ae(e,t){return e.reduce((n,l,r)=>{const o=Math.floor(r/t);return n[o]||(n[o]=[]),n[o].push(l),n},[])}const de={class:"columns is-mobile mb-0 checkbox-row"},se="Yes",ie="No",ue=k({__name:"GridCheckboxWrapper",props:{checkboxes:{}},setup(e){const t=e,n=T(()=>ae(t.checkboxes,2));return(l,r)=>(d(!0),i(y,null,h(n.value,o=>(d(),i("div",de,[(d(!0),i(y,null,h(o,s=>(d(),i("div",{key:s.label,class:"column is-flex is-align-items-center checkbox-wrapper"},[b(re,{modelValue:s.model,"onUpdate:modelValue":V=>s.model=V,"false-value":s.falseValue??ie,label:s.label,"true-value":s.trueValue??se},null,8,["modelValue","onUpdate:modelValue","false-value","label","true-value"])]))),128))]))),256))}}),fe=x(ue,[["__scopeId","data-v-bd36cdd8"]]);export{fe as G,H as s};
