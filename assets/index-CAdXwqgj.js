import{C as k,D as x,al as f,at as m,a8 as y,aO as g,az as v,ae as h,a as C,o as d,b as s,H as n,z as w,j as b,e as P,n as S}from"./main-CUdmV-Wl.js";import{s as z}from"./index-BSGj8d_z.js";var B=k`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`,_={root:function(e){var o=e.instance,t=e.props;return["p-checkbox p-component",{"p-checkbox-checked":o.checked,"p-disabled":t.disabled,"p-invalid":o.$pcCheckboxGroup?o.$pcCheckboxGroup.$invalid:o.$invalid,"p-variant-filled":"filled"===o.$variant,"p-checkbox-sm p-inputfield-sm":"small"===t.size,"p-checkbox-lg p-inputfield-lg":"large"===t.size}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},I=x.extend({name:"checkbox",style:B,classes:_}),A={name:"BaseCheckbox",extends:m,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:I,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,o,t){return(o=T(o))in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function T(e){var o=G(e,"string");return"symbol"==a(o)?o:o+""}function G(e,o){if("object"!=a(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var c=t.call(e,o);if("object"!=a(c))return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(e)}function j(e){return V(e)||$(e)||F(e)||N()}function N(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function F(e,o){if(e){if("string"==typeof e)return l(e,o);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,o):void 0}}function $(e){if(typeof Symbol<"u"&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function V(e){if(Array.isArray(e))return l(e)}function l(e,o){(null==o||o>e.length)&&(o=e.length);for(var t=0,c=Array(o);t<o;t++)c[t]=e[t];return c}var q={name:"Checkbox",extends:A,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(e){this.d_indeterminate=e}},methods:{getPTOptions:function(e){return("root"===e?this.ptmi:this.ptm)(e,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(e){var o=this;if(!this.disabled&&!this.readonly){var t,c=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;t=this.binary?this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?c.filter((function(e){return!v(e,o.value)})):c?[].concat(j(c),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(t,e):this.writeValue(t,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var o,t;this.$emit("blur",e),null===(o=(t=this.formField).onBlur)||void 0===o||o.call(t,e)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var e=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return!this.d_indeterminate&&(this.binary?e===this.trueValue:g(this.value,e))},dataP:function(){return y(O({invalid:this.$invalid,checked:this.checked,disabled:this.disabled,filled:"filled"===this.$variant},this.size,this.size))}},components:{CheckIcon:f,MinusIcon:z}},L=["data-p-checked","data-p-indeterminate","data-p-disabled","data-p"],E=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"],H=["data-p"];function D(e,o,t,c,i,a){var r=h("CheckIcon"),l=h("MinusIcon");return d(),C("div",n({class:e.cx("root")},a.getPTOptions("root"),{"data-p-checked":a.checked,"data-p-indeterminate":i.d_indeterminate||void 0,"data-p-disabled":e.disabled,"data-p":a.dataP}),[s("input",n({id:e.inputId,type:"checkbox",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:a.groupName,checked:a.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,"aria-checked":i.d_indeterminate?"mixed":void 0,onFocus:o[0]||(o[0]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:o[1]||(o[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onChange:o[2]||(o[2]=function(){return a.onChange&&a.onChange.apply(a,arguments)})},a.getPTOptions("input")),null,16,E),s("div",n({class:e.cx("box")},a.getPTOptions("box"),{"data-p":a.dataP}),[w(e.$slots,"icon",{checked:a.checked,indeterminate:i.d_indeterminate,class:S(e.cx("icon")),dataP:a.dataP},(function(){return[a.checked?(d(),b(r,n({key:0,class:e.cx("icon")},a.getPTOptions("icon"),{"data-p":a.dataP}),null,16,["class","data-p"])):i.d_indeterminate?(d(),b(l,n({key:1,class:e.cx("icon")},a.getPTOptions("icon"),{"data-p":a.dataP}),null,16,["class","data-p"])):P("",!0)]}))],16,H)],16,L)}q.render=D;export{q as s};
