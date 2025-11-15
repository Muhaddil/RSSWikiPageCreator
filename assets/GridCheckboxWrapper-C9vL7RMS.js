import{A as e,At as t,C as n,Dt as r,G as i,N as a,P as o,W as s,_ as c,c as l,ct as u,h as d,j as f,k as p,l as m,o as h,r as g,s as _,u as v,w as y,z as b}from"./runtime-core.esm-bundler-C0lSAh8T.js";import{o as x,t as S}from"./runtime-dom.esm-bundler-BlcQw9Rb.js";import{W as C,c as w,l as T,n as E}from"./button-CbARRVr_.js";import{a as D}from"./SanitisedTextInput-M2qhH_Gj.js";import{t as O}from"./_plugin-vue_export-helper-DyZRSbhD.js";import{n as k,t as A}from"./minus-BSgQpDmw.js";import{t as j}from"./checkbox-Dp7awmQx.js";var M=T.extend({name:`fieldset`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-fieldset p-component`,{"p-fieldset-toggleable":t.toggleable}]},legend:`p-fieldset-legend`,legendLabel:`p-fieldset-legend-label`,toggleButton:`p-fieldset-toggle-button`,toggleIcon:`p-fieldset-toggle-icon`,contentContainer:`p-fieldset-content-container`,content:`p-fieldset-content`}}),N={name:`Fieldset`,extends:{name:`BaseFieldset`,extends:w,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:M,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return C({toggleable:this.toggleable})}},directives:{ripple:E},components:{PlusIcon:k,MinusIcon:A}};function P(e){"@babel/helpers - typeof";return P=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},P(e)}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?F(Object(n),!0).forEach(function(t){L(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function L(e,t,n){return(t=R(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){var t=z(e,`string`);return P(t)==`symbol`?t:t+``}function z(e,t){if(P(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(P(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var B=[`data-p`],V=[`data-p`],H=[`id`],U=[`id`,`aria-controls`,`aria-expanded`,`aria-label`],W=[`id`,`aria-labelledby`];function G(e,n,c,u,h,g){var b=a(`ripple`);return p(),v(`fieldset`,y({class:e.cx(`root`),"data-p":g.dataP},e.ptmi(`root`)),[_(`legend`,y({class:e.cx(`legend`),"data-p":g.dataP},e.ptm(`legend`)),[f(e.$slots,`legend`,{toggleCallback:g.toggle},function(){return[e.toggleable?m(``,!0):(p(),v(`span`,y({key:0,id:e.$id+`_header`,class:e.cx(`legendLabel`)},e.ptm(`legendLabel`)),t(e.legend),17,H)),e.toggleable?i((p(),v(`button`,y({key:1,id:e.$id+`_header`,type:`button`,"aria-controls":e.$id+`_content`,"aria-expanded":!h.d_collapsed,"aria-label":g.buttonAriaLabel,class:e.cx(`toggleButton`),onClick:n[0]||=function(){return g.toggle&&g.toggle.apply(g,arguments)},onKeydown:n[1]||=function(){return g.onKeyDown&&g.onKeyDown.apply(g,arguments)}},I(I({},e.toggleButtonProps),e.ptm(`toggleButton`))),[f(e.$slots,e.$slots.toggleicon?`toggleicon`:`togglericon`,{collapsed:h.d_collapsed,class:r(e.cx(`toggleIcon`))},function(){return[(p(),l(o(h.d_collapsed?`PlusIcon`:`MinusIcon`),y({class:e.cx(`toggleIcon`)},e.ptm(`toggleIcon`)),null,16,[`class`]))]}),_(`span`,y({class:e.cx(`legendLabel`)},e.ptm(`legendLabel`)),t(e.legend),17)],16,U)),[[b]]):m(``,!0)]})],16,V),d(S,y({name:`p-toggleable-content`},e.ptm(`transition`)),{default:s(function(){return[i(_(`div`,y({id:e.$id+`_content`,class:e.cx(`contentContainer`),role:`region`,"aria-labelledby":e.$id+`_header`},e.ptm(`contentContainer`)),[_(`div`,y({class:e.cx(`content`)},e.ptm(`content`)),[f(e.$slots,`default`)],16)],16,W),[[x,!h.d_collapsed]])]}),_:3},16)],16,B)}N.render=G;var K={class:`is-flex is-align-items-end is-gap-1 is-flex-grow-1`},q=[`for`],J=c({__name:`CompactCheckbox`,props:n({label:{},trueValue:{},falseValue:{},value:{},name:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let n=b(e,`modelValue`),r=D(`checkbox-`);return(i,a)=>(p(),v(`div`,K,[d(u(j),{modelValue:n.value,"onUpdate:modelValue":a[0]||=e=>n.value=e,"false-value":e.falseValue,"input-id":u(r),"true-value":e.trueValue,binary:``},null,8,[`modelValue`,`false-value`,`input-id`,`true-value`]),_(`label`,{for:u(r),class:`is-flex-grow-1`},t(e.label),9,q)]))}});function Y(e,t){return e.reduce((e,n,r)=>{let i=Math.floor(r/t);return e[i]||(e[i]=[]),e[i].push(n),e},[])}var X={class:`columns is-mobile mb-0 checkbox-row`},Z=`Yes`,Q=`No`,$=O(c({__name:`GridCheckboxWrapper`,props:{checkboxes:{}},setup(t){let n=t,r=h(()=>Y(n.checkboxes,2));return(t,n)=>(p(!0),v(g,null,e(r.value,t=>(p(),v(`div`,X,[(p(!0),v(g,null,e(t,e=>(p(),v(`div`,{key:e.label,class:`column is-flex is-align-items-center checkbox-wrapper`},[d(J,{modelValue:e.model,"onUpdate:modelValue":t=>e.model=t,"false-value":e.falseValue??Q,label:e.label,"true-value":e.trueValue??Z},null,8,[`modelValue`,`onUpdate:modelValue`,`false-value`,`label`,`true-value`])]))),128))]))),256))}}),[[`__scopeId`,`data-v-bd36cdd8`]]);export{N as n,$ as t};