"use strict";import{C as b,D as f,a7 as m,$ as y,E as $,a8 as _,ae as x,a as i,o as r,b as s,f as c,z as l,e as p,H as t,t as v,n as B,k as g,j as P,U as k,X as w,Y as C,aa as A}from"./main-aIHs9t3-.js";import{s as D,a as I}from"./index-FSSz-Fjz.js";var E=b`
    .p-panel {
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,K={root:function(e){var o=e.props;return["p-panel p-component",{"p-panel-toggleable":o.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},L=f.extend({name:"panel",style:E,classes:K}),T={name:"BasePanel",extends:$,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:L,provide:function(){return{$pcPanel:this,$parentInstance:this}}},u={name:"Panel",extends:T,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return _({toggleable:this.toggleable})}},components:{PlusIcon:I,MinusIcon:D,Button:y},directives:{ripple:m}},j=["data-p"],M=["data-p"],S=["id"],z=["id","aria-labelledby"];function H(e,o,N,O,d,n){var h=x("Button");return r(),i("div",t({class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[s("div",t({class:e.cx("header"),"data-p":n.dataP},e.ptm("header")),[l(e.$slots,"header",{id:e.$id+"_header",class:B(e.cx("title"))},function(){return[e.header?(r(),i("span",t({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),v(e.header),17,S)):p("",!0)]}),s("div",t({class:e.cx("headerActions")},e.ptm("headerActions")),[l(e.$slots,"icons"),e.toggleable?l(e.$slots,"togglebutton",{key:0,collapsed:d.d_collapsed,toggleCallback:function(a){return n.toggle(a)},keydownCallback:function(a){return n.onKeyDown(a)}},function(){return[c(h,t({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":n.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!d.d_collapsed,unstyled:e.unstyled,onClick:o[0]||(o[0]=function(a){return n.toggle(a)}),onKeydown:o[1]||(o[1]=function(a){return n.onKeyDown(a)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:g(function(a){return[l(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:d.d_collapsed},function(){return[(r(),P(k(d.d_collapsed?"PlusIcon":"MinusIcon"),t({class:a.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):p("",!0)],16)],16,M),c(A,t({name:"p-toggleable-content"},e.ptm("transition")),{default:g(function(){return[w(s("div",t({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[s("div",t({class:e.cx("content")},e.ptm("content")),[l(e.$slots,"default")],16),e.$slots.footer?(r(),i("div",t({key:0,class:e.cx("footer")},e.ptm("footer")),[l(e.$slots,"footer")],16)):p("",!0)],16,z),[[C,!d.d_collapsed]])]}),_:3},16)],16,j)}u.render=H;export{u as s};
