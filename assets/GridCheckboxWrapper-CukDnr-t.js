import{C as e,Ft as t,H as n,I as r,J as i,L as a,Mt as o,N as s,P as c,S as l,c as u,g as d,h as f,j as p,l as m,o as h,pt as g,q as _,r as v,s as y,u as b}from"./runtime-core.esm-bundler-DSejMO-g.js";import{c as x,t as S}from"./runtime-dom.esm-bundler-CLsAWWoP.js";import{t as C}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{a as w}from"./SanitisedTextInput-Bha1r-_W.js";import{c as T,it as E,l as D,n as O}from"./button-B6ZreK2I.js";import{n as k,t as A}from"./minus-noiREMKb.js";import{t as j}from"./checkbox-XTzipaSf.js";var M=D.extend({name:`fieldset`,style:`
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
        color: dt('fieldset.legend.color');
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

    .p-fieldset-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-fieldset-content-wrapper {
        min-height: 0;
    }

    .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`,classes:{root:function(e){return[`p-fieldset p-component`,{"p-fieldset-toggleable":e.props.toggleable}]},legend:`p-fieldset-legend`,legendLabel:`p-fieldset-legend-label`,toggleButton:`p-fieldset-toggle-button`,toggleIcon:`p-fieldset-toggle-icon`,contentContainer:`p-fieldset-content-container`,contentWrapper:`p-fieldset-content-wrapper`,content:`p-fieldset-content`}}),N={name:`Fieldset`,extends:{name:`BaseFieldset`,extends:T,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:M,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return E({toggleable:this.toggleable})}},directives:{ripple:O},components:{PlusIcon:k,MinusIcon:A}};function P(e){"@babel/helpers - typeof";return P=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},P(e)}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?F(Object(n),!0).forEach(function(t){L(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function L(e,t,n){return(t=R(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){var t=z(e,`string`);return P(t)==`symbol`?t:t+``}function z(e,t){if(P(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(P(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var B=[`data-p`],V=[`data-p`],H=[`id`],U=[`id`,`aria-controls`,`aria-expanded`,`aria-label`],W=[`id`,`aria-labelledby`];function G(n,s,l,d,h,g){var v=r(`ripple`);return p(),b(`fieldset`,e({class:n.cx(`root`),"data-p":g.dataP},n.ptmi(`root`)),[y(`legend`,e({class:n.cx(`legend`),"data-p":g.dataP},n.ptm(`legend`)),[c(n.$slots,`legend`,{toggleCallback:g.toggle},function(){return[n.toggleable?m(``,!0):(p(),b(`span`,e({key:0,id:n.$id+`_header`,class:n.cx(`legendLabel`)},n.ptm(`legendLabel`)),t(n.legend),17,H)),n.toggleable?i((p(),b(`button`,e({key:1,id:n.$id+`_header`,type:`button`,"aria-controls":n.$id+`_content`,"aria-expanded":!h.d_collapsed,"aria-label":g.buttonAriaLabel,class:n.cx(`toggleButton`),onClick:s[0]||=function(){return g.toggle&&g.toggle.apply(g,arguments)},onKeydown:s[1]||=function(){return g.onKeyDown&&g.onKeyDown.apply(g,arguments)}},I(I({},n.toggleButtonProps),n.ptm(`toggleButton`))),[c(n.$slots,n.$slots.toggleicon?`toggleicon`:`togglericon`,{collapsed:h.d_collapsed,class:o(n.cx(`toggleIcon`))},function(){return[(p(),u(a(h.d_collapsed?`PlusIcon`:`MinusIcon`),e({class:n.cx(`toggleIcon`)},n.ptm(`toggleIcon`)),null,16,[`class`]))]}),y(`span`,e({class:n.cx(`legendLabel`)},n.ptm(`legendLabel`)),t(n.legend),17)],16,U)),[[v]]):m(``,!0)]})],16,V),f(S,e({name:`p-collapsible`},n.ptm(`transition`)),{default:_(function(){return[i(y(`div`,e({id:n.$id+`_content`,class:n.cx(`contentContainer`),role:`region`,"aria-labelledby":n.$id+`_header`},n.ptm(`contentContainer`)),[y(`div`,e({class:n.cx(`contentWrapper`)},n.ptm(`contentWrapper`)),[y(`div`,e({class:n.cx(`content`)},n.ptm(`content`)),[c(n.$slots,`default`)],16)],16)],16,W),[[x,!h.d_collapsed]])]}),_:3},16)],16,B)}N.render=G;var K={class:`is-flex is-align-items-end is-gap-1 is-flex-grow-1`},q=[`for`],J=d({__name:`CompactCheckbox`,props:l({label:{},trueValue:{},falseValue:{},value:{},name:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let r=n(e,`modelValue`),i=w(`checkbox-`);return(n,a)=>(p(),b(`div`,K,[f(g(j),{modelValue:r.value,"onUpdate:modelValue":a[0]||=e=>r.value=e,"false-value":e.falseValue,"input-id":g(i),"true-value":e.trueValue,binary:``},null,8,[`modelValue`,`false-value`,`input-id`,`true-value`]),y(`label`,{for:g(i),class:`is-flex-grow-1`},t(e.label),9,q)]))}});function Y(e,t){return e.reduce((e,n,r)=>{let i=Math.floor(r/t);return e[i]||(e[i]=[]),e[i].push(n),e},[])}var X={class:`columns is-mobile mb-0 checkbox-row`},Z=`Yes`,Q=`No`,$=C(d({__name:`GridCheckboxWrapper`,props:{checkboxes:{}},setup(e){let t=e,n=h(()=>Y(t.checkboxes,2));return(e,t)=>(p(!0),b(v,null,s(n.value,e=>(p(),b(`div`,X,[(p(!0),b(v,null,s(e,e=>(p(),b(`div`,{key:e.label,class:`column is-flex is-align-items-center checkbox-wrapper`},[f(J,{modelValue:e.model,"onUpdate:modelValue":t=>e.model=t,"false-value":e.falseValue??Q,label:e.label,"true-value":e.trueValue??Z},null,8,[`modelValue`,`onUpdate:modelValue`,`false-value`,`label`,`true-value`])]))),128))]))),256))}}),[[`__scopeId`,`data-v-7542eed2`]]);export{N as n,$ as t};