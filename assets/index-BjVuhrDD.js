"use strict";import{s as b,a as f}from"./index-CSioWivY.js";import{C as m,a6 as y,Z as _,D as $,a7 as x,ad as v,a as i,o as r,b as s,f as c,z as l,e as p,E as e,t as B,n as k,k as g,j as P,T as w,W as C,X as A,a9 as D}from"./main-WhmDEAp0.js";var I=`
    .p-panel {
        display: block;
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
`,T={root:function(t){var n=t.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},E=m.extend({name:"panel",style:I,classes:T}),K={name:"BasePanel",extends:$,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:E,provide:function(){return{$pcPanel:this,$parentInstance:this}}},u={name:"Panel",extends:K,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return x({toggleable:this.toggleable})}},components:{PlusIcon:f,MinusIcon:b,Button:_},directives:{ripple:y}},L=["data-p"],j=["data-p"],M=["id"],S=["id","aria-labelledby"];function z(t,n,N,O,d,o){var h=v("Button");return r(),i("div",e({class:t.cx("root"),"data-p":o.dataP},t.ptmi("root")),[s("div",e({class:t.cx("header"),"data-p":o.dataP},t.ptm("header")),[l(t.$slots,"header",{id:t.$id+"_header",class:k(t.cx("title"))},function(){return[t.header?(r(),i("span",e({key:0,id:t.$id+"_header",class:t.cx("title")},t.ptm("title")),B(t.header),17,M)):p("",!0)]}),s("div",e({class:t.cx("headerActions")},t.ptm("headerActions")),[l(t.$slots,"icons"),t.toggleable?l(t.$slots,"togglebutton",{key:0,collapsed:d.d_collapsed,toggleCallback:function(a){return o.toggle(a)},keydownCallback:function(a){return o.onKeyDown(a)}},function(){return[c(h,e({id:t.$id+"_header",class:t.cx("pcToggleButton"),"aria-label":o.buttonAriaLabel,"aria-controls":t.$id+"_content","aria-expanded":!d.d_collapsed,unstyled:t.unstyled,onClick:n[0]||(n[0]=function(a){return o.toggle(a)}),onKeydown:n[1]||(n[1]=function(a){return o.onKeyDown(a)})},t.toggleButtonProps,{pt:t.ptm("pcToggleButton")}),{icon:g(function(a){return[l(t.$slots,t.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:d.d_collapsed},function(){return[(r(),P(w(d.d_collapsed?"PlusIcon":"MinusIcon"),e({class:a.class},t.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):p("",!0)],16)],16,j),c(D,e({name:"p-toggleable-content"},t.ptm("transition")),{default:g(function(){return[C(s("div",e({id:t.$id+"_content",class:t.cx("contentContainer"),role:"region","aria-labelledby":t.$id+"_header"},t.ptm("contentContainer")),[s("div",e({class:t.cx("content")},t.ptm("content")),[l(t.$slots,"default")],16),t.$slots.footer?(r(),i("div",e({key:0,class:t.cx("footer")},t.ptm("footer")),[l(t.$slots,"footer")],16)):p("",!0)],16,S),[[A,!d.d_collapsed]])]}),_:3},16)],16,L)}u.render=z;export{u as s};
