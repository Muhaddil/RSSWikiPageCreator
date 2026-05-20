import{Bt as e,Gt as t,It as n,Kt as r,Lt as i,M as a,Pt as o,Q as s,Rt as c,Sn as l,U as u,Vt as d,Xt as f,Yt as p,Z as m,an as h,dn as g,en as _,fn as v,in as y,kt as b,nn as x,sn as S,tn as C,vn as w,vt as T,x as E,yn as D,zt as O}from"./main-dzz14f38.js";import{n as k,t as A}from"./minus-C9UnGGyw.js";import{t as j}from"./checkbox-BS_Ss4bZ.js";var M=s.extend({name:`fieldset`,style:`
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
`,classes:{root:function(e){return[`p-fieldset p-component`,{"p-fieldset-toggleable":e.props.toggleable}]},legend:`p-fieldset-legend`,legendLabel:`p-fieldset-legend-label`,toggleButton:`p-fieldset-toggle-button`,toggleIcon:`p-fieldset-toggle-icon`,contentContainer:`p-fieldset-content-container`,contentWrapper:`p-fieldset-content-wrapper`,content:`p-fieldset-content`}}),N={name:`Fieldset`,extends:{name:`BaseFieldset`,extends:m,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:M,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return T({toggleable:this.toggleable})}},directives:{ripple:u},components:{PlusIcon:k,MinusIcon:A}};function P(e){"@babel/helpers - typeof";return P=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},P(e)}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?F(Object(n),!0).forEach(function(t){L(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function L(e,t,n){return(t=R(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){var t=z(e,`string`);return P(t)==`symbol`?t:t+``}function z(e,t){if(P(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(P(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var B=[`data-p`],V=[`data-p`],H=[`id`],U=[`id`,`aria-controls`,`aria-expanded`,`aria-label`],W=[`id`,`aria-labelledby`];function G(n,r,i,a,s,u){var p=y(`ripple`);return _(),d(`fieldset`,f({class:n.cx(`root`),"data-p":u.dataP},n.ptmi(`root`)),[c(`legend`,f({class:n.cx(`legend`),"data-p":u.dataP},n.ptm(`legend`)),[x(n.$slots,`legend`,{toggleCallback:u.toggle},function(){return[n.toggleable?e(``,!0):(_(),d(`span`,f({key:0,id:n.$id+`_header`,class:n.cx(`legendLabel`)},n.ptm(`legendLabel`)),l(n.legend),17,H)),n.toggleable?v((_(),d(`button`,f({key:1,id:n.$id+`_header`,type:`button`,"aria-controls":n.$id+`_content`,"aria-expanded":!s.d_collapsed,"aria-label":u.buttonAriaLabel,class:n.cx(`toggleButton`),onClick:r[0]||=function(){return u.toggle&&u.toggle.apply(u,arguments)},onKeydown:r[1]||=function(){return u.onKeyDown&&u.onKeyDown.apply(u,arguments)}},I(I({},n.toggleButtonProps),n.ptm(`toggleButton`))),[x(n.$slots,n.$slots.toggleicon?`toggleicon`:`togglericon`,{collapsed:s.d_collapsed,class:D(n.cx(`toggleIcon`))},function(){return[(_(),O(h(s.d_collapsed?`PlusIcon`:`MinusIcon`),f({class:n.cx(`toggleIcon`)},n.ptm(`toggleIcon`)),null,16,[`class`]))]}),c(`span`,f({class:n.cx(`legendLabel`)},n.ptm(`legendLabel`)),l(n.legend),17)],16,U)),[[p]]):e(``,!0)]})],16,V),t(b,f({name:`p-collapsible`},n.ptm(`transition`)),{default:g(function(){return[v(c(`div`,f({id:n.$id+`_content`,class:n.cx(`contentContainer`),role:`region`,"aria-labelledby":n.$id+`_header`},n.ptm(`contentContainer`)),[c(`div`,f({class:n.cx(`contentWrapper`)},n.ptm(`contentWrapper`)),[c(`div`,f({class:n.cx(`content`)},n.ptm(`content`)),[x(n.$slots,`default`)],16)],16)],16,W),[[o,!s.d_collapsed]])]}),_:3},16)],16,B)}N.render=G;var K={class:`is-flex is-align-items-end is-gap-1 is-flex-grow-1`},q=[`for`],J=r({__name:`CompactCheckbox`,props:p({label:{},trueValue:{},falseValue:{},value:{},name:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let n=S(e,`modelValue`),r=E(`checkbox-`);return(i,a)=>(_(),d(`div`,K,[t(w(j),{modelValue:n.value,"onUpdate:modelValue":a[0]||=e=>n.value=e,"false-value":e.falseValue,"input-id":w(r),"true-value":e.trueValue,binary:``},null,8,[`modelValue`,`false-value`,`input-id`,`true-value`]),c(`label`,{for:w(r),class:`is-flex-grow-1`},l(e.label),9,q)]))}});function Y(e,t){return e.reduce((e,n,r)=>{let i=Math.floor(r/t);return e[i]||(e[i]=[]),e[i].push(n),e},[])}var X={class:`columns is-mobile mb-0 checkbox-row`},Z=`Yes`,Q=`No`,$=a(r({__name:`GridCheckboxWrapper`,props:{checkboxes:{}},setup(e){let r=e,a=i(()=>Y(r.checkboxes,2));return(e,r)=>(_(!0),d(n,null,C(a.value,e=>(_(),d(`div`,X,[(_(!0),d(n,null,C(e,e=>(_(),d(`div`,{key:e.label,class:`column is-flex is-align-items-center checkbox-wrapper`},[t(J,{modelValue:e.model,"onUpdate:modelValue":t=>e.model=t,"false-value":e.falseValue??Q,label:e.label,"true-value":e.trueValue??Z},null,8,[`modelValue`,`onUpdate:modelValue`,`false-value`,`label`,`true-value`])]))),128))]))),256))}}),[[`__scopeId`,`data-v-bd36cdd8`]]);export{N as n,$ as t};