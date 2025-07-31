"use strict";import{C as u,D as l,a7 as p,a as c,o as s,j as y,e as i,z as b,E as e,T as f,b as m,t as v}from"./main-CBJ4mWdh.js";var k=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,h={root:function(t){var a=t.props;return["p-tag p-component",{"p-tag-info":a.severity==="info","p-tag-success":a.severity==="success","p-tag-warn":a.severity==="warn","p-tag-danger":a.severity==="danger","p-tag-secondary":a.severity==="secondary","p-tag-contrast":a.severity==="contrast","p-tag-rounded":a.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},w=u.extend({name:"tag",style:k,classes:h}),x={name:"BaseTag",extends:l,props:{value:null,severity:null,rounded:Boolean,icon:String},style:w,provide:function(){return{$pcTag:this,$parentInstance:this}}};function o(t){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(t)}function S(t,a,r){return(a=z(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function z(t){var a=$(t,"string");return o(a)=="symbol"?a:a+""}function $(t,a){if(o(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,a);if(o(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}var d={name:"Tag",extends:x,inheritAttrs:!1,computed:{dataP:function(){return p(S({rounded:this.rounded},this.severity,this.severity))}}},j=["data-p"];function P(t,a,r,n,T,g){return s(),c("span",e({class:t.cx("root"),"data-p":g.dataP},t.ptmi("root")),[t.$slots.icon?(s(),y(f(t.$slots.icon),e({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(s(),c("span",e({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):i("",!0),t.value!=null||t.$slots.default?b(t.$slots,"default",{key:2},function(){return[m("span",e({class:t.cx("label")},t.ptm("label")),v(t.value),17)]}):i("",!0)],16,j)}d.render=P;export{d as s};
