import{C as e,F as t,J as n,L as r,P as i,Pt as a,c as o,h as s,j as c,jt as l,l as u,q as d,s as f,u as p}from"./runtime-core.esm-bundler-BOpRv4eI.js";import{c as m,t as h}from"./runtime-dom.esm-bundler-CuUzqqzy.js";import{c as g,it as _,l as v,n as y,t as b}from"./button-4ww8I7si.js";import{n as x,t as S}from"./minus-K2bthuxy.js";var C=v.extend({name:`panel`,style:`
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
`,classes:{root:function(e){return[`p-panel p-component`,{"p-panel-toggleable":e.props.toggleable}]},header:`p-panel-header`,title:`p-panel-title`,headerActions:`p-panel-header-actions`,pcToggleButton:`p-panel-toggle-button`,contentContainer:`p-panel-content-container`,contentWrapper:`p-panel-content-wrapper`,content:`p-panel-content`,footer:`p-panel-footer`}}),w={name:`Panel`,extends:{name:`BasePanel`,extends:g,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}}},style:C,provide:function(){return{$pcPanel:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return _({toggleable:this.toggleable})}},components:{PlusIcon:x,MinusIcon:S,Button:b},directives:{ripple:y}},T=[`data-p`],E=[`data-p`],D=[`id`],O=[`id`,`aria-labelledby`];function k(g,_,v,y,b,x){var S=t(`Button`);return c(),p(`div`,e({class:g.cx(`root`),"data-p":x.dataP},g.ptmi(`root`)),[f(`div`,e({class:g.cx(`header`),"data-p":x.dataP},g.ptm(`header`)),[i(g.$slots,`header`,{id:g.$id+`_header`,class:l(g.cx(`title`)),collapsed:b.d_collapsed},function(){return[g.header?(c(),p(`span`,e({key:0,id:g.$id+`_header`,class:g.cx(`title`)},g.ptm(`title`)),a(g.header),17,D)):u(``,!0)]}),f(`div`,e({class:g.cx(`headerActions`)},g.ptm(`headerActions`)),[i(g.$slots,`icons`),g.toggleable?i(g.$slots,`togglebutton`,{key:0,collapsed:b.d_collapsed,toggleCallback:function(e){return x.toggle(e)},keydownCallback:function(e){return x.onKeyDown(e)}},function(){return[s(S,e({id:g.$id+`_header`,class:g.cx(`pcToggleButton`),"aria-label":x.buttonAriaLabel,"aria-controls":g.$id+`_content`,"aria-expanded":!b.d_collapsed,unstyled:g.unstyled,onClick:_[0]||=function(e){return x.toggle(e)},onKeydown:_[1]||=function(e){return x.onKeyDown(e)}},g.toggleButtonProps,{pt:g.ptm(`pcToggleButton`)}),{icon:d(function(t){return[i(g.$slots,g.$slots.toggleicon?`toggleicon`:`togglericon`,{collapsed:b.d_collapsed},function(){return[(c(),o(r(b.d_collapsed?`PlusIcon`:`MinusIcon`),e({class:t.class},g.ptm(`pcToggleButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`id`,`class`,`aria-label`,`aria-controls`,`aria-expanded`,`unstyled`,`pt`])]}):u(``,!0)],16)],16,E),s(h,e({name:`p-collapsible`},g.ptm(`transition`)),{default:d(function(){return[n(f(`div`,e({id:g.$id+`_content`,class:g.cx(`contentContainer`),role:`region`,"aria-labelledby":g.$id+`_header`},g.ptm(`contentContainer`)),[f(`div`,e({class:g.cx(`contentWrapper`)},g.ptm(`contentWrapper`)),[f(`div`,e({class:g.cx(`content`)},g.ptm(`content`)),[i(g.$slots,`default`)],16),g.$slots.footer?(c(),p(`div`,e({key:0,class:g.cx(`footer`)},g.ptm(`footer`)),[i(g.$slots,`footer`)],16)):u(``,!0)],16)],16,O),[[m,!b.d_collapsed]])]}),_:3},16)],16,T)}w.render=k;export{w as t};