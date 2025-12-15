import{D as e,E as t,F as n,H as r,I as i,K as a,P as o,R as s,d as c,dt as l,f as u,h as d,l as f,m as p,mt as m,o as h,p as g,q as _,t as v,ut as y,x as b,y as x,z as S}from"./runtime-dom.esm-bundler-BxVoWjA0.js";import{W as C,c as w,l as T,n as E}from"./button-BjSjIJD1.js";import{a as D}from"./SanitisedTextInput-BYY2vgzV.js";import{t as O}from"./_plugin-vue_export-helper-D6098ZHW.js";import{n as k,t as A}from"./minus-BjGaqWu5.js";import{t as j}from"./checkbox-wWYEqkHb.js";var M=T.extend({name:`fieldset`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-fieldset p-component`,{"p-fieldset-toggleable":t.toggleable}]},legend:`p-fieldset-legend`,legendLabel:`p-fieldset-legend-label`,toggleButton:`p-fieldset-toggle-button`,toggleIcon:`p-fieldset-toggle-icon`,contentContainer:`p-fieldset-content-container`,contentWrapper:`p-fieldset-content-wrapper`,content:`p-fieldset-content`}}),N={name:`Fieldset`,extends:{name:`BaseFieldset`,extends:w,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:M,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return C({toggleable:this.toggleable})}},directives:{ripple:E},components:{PlusIcon:k,MinusIcon:A}};function P(e){"@babel/helpers - typeof";return P=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},P(e)}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?F(Object(n),!0).forEach(function(t){L(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function L(e,t,n){return(t=R(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){var t=z(e,`string`);return P(t)==`symbol`?t:t+``}function z(e,t){if(P(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(P(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var B=[`data-p`],V=[`data-p`],H=[`id`],U=[`id`,`aria-controls`,`aria-expanded`,`aria-label`],W=[`id`,`aria-labelledby`];function G(t,n,r,c,f,y){var b=s(`ripple`);return o(),d(`fieldset`,e({class:t.cx(`root`),"data-p":y.dataP},t.ptmi(`root`)),[u(`legend`,e({class:t.cx(`legend`),"data-p":y.dataP},t.ptm(`legend`)),[i(t.$slots,`legend`,{toggleCallback:y.toggle},function(){return[t.toggleable?p(``,!0):(o(),d(`span`,e({key:0,id:t.$id+`_header`,class:t.cx(`legendLabel`)},t.ptm(`legendLabel`)),m(t.legend),17,H)),t.toggleable?_((o(),d(`button`,e({key:1,id:t.$id+`_header`,type:`button`,"aria-controls":t.$id+`_content`,"aria-expanded":!f.d_collapsed,"aria-label":y.buttonAriaLabel,class:t.cx(`toggleButton`),onClick:n[0]||=function(){return y.toggle&&y.toggle.apply(y,arguments)},onKeydown:n[1]||=function(){return y.onKeyDown&&y.onKeyDown.apply(y,arguments)}},I(I({},t.toggleButtonProps),t.ptm(`toggleButton`))),[i(t.$slots,t.$slots.toggleicon?`toggleicon`:`togglericon`,{collapsed:f.d_collapsed,class:l(t.cx(`toggleIcon`))},function(){return[(o(),g(S(f.d_collapsed?`PlusIcon`:`MinusIcon`),e({class:t.cx(`toggleIcon`)},t.ptm(`toggleIcon`)),null,16,[`class`]))]}),u(`span`,e({class:t.cx(`legendLabel`)},t.ptm(`legendLabel`)),m(t.legend),17)],16,U)),[[b]]):p(``,!0)]})],16,V),x(v,e({name:`p-collapsible`},t.ptm(`transition`)),{default:a(function(){return[_(u(`div`,e({id:t.$id+`_content`,class:t.cx(`contentContainer`),role:`region`,"aria-labelledby":t.$id+`_header`},t.ptm(`contentContainer`)),[u(`div`,e({class:t.cx(`contentWrapper`)},t.ptm(`contentWrapper`)),[u(`div`,e({class:t.cx(`content`)},t.ptm(`content`)),[i(t.$slots,`default`)],16)],16)],16,W),[[h,!f.d_collapsed]])]}),_:3},16)],16,B)}N.render=G;var K={class:`is-flex is-align-items-end is-gap-1 is-flex-grow-1`},q=[`for`],J=b({__name:`CompactCheckbox`,props:t({label:{},trueValue:{},falseValue:{},value:{},name:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=r(e,`modelValue`),n=D(`checkbox-`);return(r,i)=>(o(),d(`div`,K,[x(y(j),{modelValue:t.value,"onUpdate:modelValue":i[0]||=e=>t.value=e,"false-value":e.falseValue,"input-id":y(n),"true-value":e.trueValue,binary:``},null,8,[`modelValue`,`false-value`,`input-id`,`true-value`]),u(`label`,{for:y(n),class:`is-flex-grow-1`},m(e.label),9,q)]))}});function Y(e,t){return e.reduce((e,n,r)=>{let i=Math.floor(r/t);return e[i]||(e[i]=[]),e[i].push(n),e},[])}var X={class:`columns is-mobile mb-0 checkbox-row`},Z=`Yes`,Q=`No`,$=O(b({__name:`GridCheckboxWrapper`,props:{checkboxes:{}},setup(e){let t=e,r=c(()=>Y(t.checkboxes,2));return(e,t)=>(o(!0),d(f,null,n(r.value,e=>(o(),d(`div`,X,[(o(!0),d(f,null,n(e,e=>(o(),d(`div`,{key:e.label,class:`column is-flex is-align-items-center checkbox-wrapper`},[x(J,{modelValue:e.model,"onUpdate:modelValue":t=>e.model=t,"false-value":e.falseValue??Q,label:e.label,"true-value":e.trueValue??Z},null,8,[`modelValue`,`onUpdate:modelValue`,`false-value`,`label`,`true-value`])]))),128))]))),256))}}),[[`__scopeId`,`data-v-bd36cdd8`]]);export{N as n,$ as t};