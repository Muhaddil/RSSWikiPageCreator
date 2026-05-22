import{Bt as e,Gt as t,H as n,Pt as r,Q as i,Rt as a,Sn as o,U as s,Vt as c,Xt as l,Z as u,an as d,dn as f,en as p,fn as m,kt as h,nn as g,rn as _,vt as v,yn as y,zt as b}from"./main-C2lISuvY.js";import{n as x,t as S}from"./minus-5FpyScpS.js";var C=i.extend({name:`panel`,style:`
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

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,classes:{root:function(e){return[`p-panel p-component`,{"p-panel-toggleable":e.props.toggleable}]},header:`p-panel-header`,title:`p-panel-title`,headerActions:`p-panel-header-actions`,pcToggleButton:`p-panel-toggle-button`,contentContainer:`p-panel-content-container`,contentWrapper:`p-panel-content-wrapper`,content:`p-panel-content`,footer:`p-panel-footer`}}),w={name:`Panel`,extends:{name:`BasePanel`,extends:u,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}}},style:C,provide:function(){return{$pcPanel:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return v({toggleable:this.toggleable})}},components:{PlusIcon:x,MinusIcon:S,Button:n},directives:{ripple:s}},T=[`data-p`],E=[`data-p`],D=[`id`],O=[`id`,`aria-labelledby`];function k(n,i,s,u,v,x){var S=_(`Button`);return p(),c(`div`,l({class:n.cx(`root`),"data-p":x.dataP},n.ptmi(`root`)),[a(`div`,l({class:n.cx(`header`),"data-p":x.dataP},n.ptm(`header`)),[g(n.$slots,`header`,{id:n.$id+`_header`,class:y(n.cx(`title`)),collapsed:v.d_collapsed},function(){return[n.header?(p(),c(`span`,l({key:0,id:n.$id+`_header`,class:n.cx(`title`)},n.ptm(`title`)),o(n.header),17,D)):e(``,!0)]}),a(`div`,l({class:n.cx(`headerActions`)},n.ptm(`headerActions`)),[g(n.$slots,`icons`),n.toggleable?g(n.$slots,`togglebutton`,{key:0,collapsed:v.d_collapsed,toggleCallback:function(e){return x.toggle(e)},keydownCallback:function(e){return x.onKeyDown(e)}},function(){return[t(S,l({id:n.$id+`_header`,class:n.cx(`pcToggleButton`),"aria-label":x.buttonAriaLabel,"aria-controls":n.$id+`_content`,"aria-expanded":!v.d_collapsed,unstyled:n.unstyled,onClick:i[0]||=function(e){return x.toggle(e)},onKeydown:i[1]||=function(e){return x.onKeyDown(e)}},n.toggleButtonProps,{pt:n.ptm(`pcToggleButton`)}),{icon:f(function(e){return[g(n.$slots,n.$slots.toggleicon?`toggleicon`:`togglericon`,{collapsed:v.d_collapsed},function(){return[(p(),b(d(v.d_collapsed?`PlusIcon`:`MinusIcon`),l({class:e.class},n.ptm(`pcToggleButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`id`,`class`,`aria-label`,`aria-controls`,`aria-expanded`,`unstyled`,`pt`])]}):e(``,!0)],16)],16,E),t(h,l({name:`p-collapsible`},n.ptm(`transition`)),{default:f(function(){return[m(a(`div`,l({id:n.$id+`_content`,class:n.cx(`contentContainer`),role:`region`,"aria-labelledby":n.$id+`_header`},n.ptm(`contentContainer`)),[a(`div`,l({class:n.cx(`contentWrapper`)},n.ptm(`contentWrapper`)),[a(`div`,l({class:n.cx(`content`)},n.ptm(`content`)),[g(n.$slots,`default`)],16),n.$slots.footer?(p(),c(`div`,l({key:0,class:n.cx(`footer`)},n.ptm(`footer`)),[g(n.$slots,`footer`)],16)):e(``,!0)],16)],16,O),[[r,!v.d_collapsed]])]}),_:3},16)],16,T)}w.render=k;export{w as t};