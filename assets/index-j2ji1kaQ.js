import{C as f,D as m,a7 as y,$ as v,E as B,a8 as k,ae as w,a as p,o as d,b as s,f as g,z as l,e as c,H as a,t as P,n as $,k as h,j as C,U as D,X as A,Y as S,aa as E}from"./main-CUdmV-Wl.js";import{s as I,a as K}from"./index-BSGj8d_z.js";var L=f`
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
`,T={root:function(e){return["p-panel p-component",{"p-panel-toggleable":e.props.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},N=m.extend({name:"panel",style:L,classes:T}),j={name:"BasePanel",extends:B,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:N,provide:function(){return{$pcPanel:this,$parentInstance:this}}},V={name:"Panel",extends:j,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){("Enter"===e.code||"NumpadEnter"===e.code||"Space"===e.code)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return k({toggleable:this.toggleable})}},components:{PlusIcon:K,MinusIcon:I,Button:v},directives:{ripple:y}},z=["data-p"],M=["data-p"],H=["id"],O=["id","aria-labelledby"];function R(e,t,n,o,r,i){var u=w("Button");return d(),p("div",a({class:e.cx("root"),"data-p":i.dataP},e.ptmi("root")),[s("div",a({class:e.cx("header"),"data-p":i.dataP},e.ptm("header")),[l(e.$slots,"header",{id:e.$id+"_header",class:$(e.cx("title"))},(function(){return[e.header?(d(),p("span",a({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),P(e.header),17,H)):c("",!0)]})),s("div",a({class:e.cx("headerActions")},e.ptm("headerActions")),[l(e.$slots,"icons"),e.toggleable?l(e.$slots,"togglebutton",{key:0,collapsed:r.d_collapsed,toggleCallback:function(e){return i.toggle(e)},keydownCallback:function(e){return i.onKeyDown(e)}},(function(){return[g(u,a({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":i.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!r.d_collapsed,unstyled:e.unstyled,onClick:t[0]||(t[0]=function(e){return i.toggle(e)}),onKeydown:t[1]||(t[1]=function(e){return i.onKeyDown(e)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:h((function(t){return[l(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:r.d_collapsed},(function(){return[(d(),C(D(r.d_collapsed?"PlusIcon":"MinusIcon"),a({class:t.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]}))]})),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]})):c("",!0)],16)],16,M),g(E,a({name:"p-toggleable-content"},e.ptm("transition")),{default:h((function(){return[A(s("div",a({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[s("div",a({class:e.cx("content")},e.ptm("content")),[l(e.$slots,"default")],16),e.$slots.footer?(d(),p("div",a({key:0,class:e.cx("footer")},e.ptm("footer")),[l(e.$slots,"footer")],16)):c("",!0)],16,O),[[S,!r.d_collapsed]])]})),_:3},16)],16,z)}V.render=R;export{V as s};