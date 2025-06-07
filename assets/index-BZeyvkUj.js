import{C as l,D as u,E as g,a8 as p,a as i,o as s,j as y,e as c,z as f,H as o,U as b,b as m,t as v}from"./main-CUdmV-Wl.js";var k=l`
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
`,h={root:function(t){var a=t.props;return["p-tag p-component",{"p-tag-info":"info"===a.severity,"p-tag-success":"success"===a.severity,"p-tag-warn":"warn"===a.severity,"p-tag-danger":"danger"===a.severity,"p-tag-secondary":"secondary"===a.severity,"p-tag-contrast":"contrast"===a.severity,"p-tag-rounded":a.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},S=u.extend({name:"tag",style:k,classes:h}),w={name:"BaseTag",extends:g,props:{value:null,severity:null,rounded:Boolean,icon:String},style:S,provide:function(){return{$pcTag:this,$parentInstance:this}}};function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function $(t,a,o){return(a=P(a))in t?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o,t}function P(t){var o=z(t,"string");return"symbol"==a(o)?o:o+""}function z(t,o){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,o);if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(t)}var B={name:"Tag",extends:w,inheritAttrs:!1,computed:{dataP:function(){return p($({rounded:this.rounded},this.severity,this.severity))}}},j=["data-p"];function T(t,a,r,n,e,d){return s(),i("span",o({class:t.cx("root"),"data-p":d.dataP},t.ptmi("root")),[t.$slots.icon?(s(),y(b(t.$slots.icon),o({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(s(),i("span",o({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):c("",!0),null!=t.value||t.$slots.default?f(t.$slots,"default",{key:2},(function(){return[m("span",o({class:t.cx("label")},t.ptm("label")),v(t.value),17)]})):c("",!0)],16,j)}B.render=T;export{B as s};