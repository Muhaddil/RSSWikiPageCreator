import{At as e,Dt as t,G as n,M as r,P as i,W as a,c as o,h as s,j as c,k as l,l as u,s as d,u as f,w as p}from"./runtime-core.esm-bundler-CNadvJx8.js";import{o as m,t as h}from"./runtime-dom.esm-bundler-rkPjeQEv.js";import{W as g,c as _,l as v,n as y,t as b}from"./button-D1ppH4Ef.js";import{n as x,t as S}from"./minus-I7VNL3G0.js";var C=v.extend({name:`panel`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-panel p-component`,{"p-panel-toggleable":t.toggleable}]},header:`p-panel-header`,title:`p-panel-title`,headerActions:`p-panel-header-actions`,pcToggleButton:`p-panel-toggle-button`,contentContainer:`p-panel-content-container`,content:`p-panel-content`,footer:`p-panel-footer`}}),w={name:`Panel`,extends:{name:`BasePanel`,extends:_,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}}},style:C,provide:function(){return{$pcPanel:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return g({toggleable:this.toggleable})}},components:{PlusIcon:x,MinusIcon:S,Button:b},directives:{ripple:y}},T=[`data-p`],E=[`data-p`],D=[`id`],O=[`id`,`aria-labelledby`];function k(g,_,v,y,b,x){var S=r(`Button`);return l(),f(`div`,p({class:g.cx(`root`),"data-p":x.dataP},g.ptmi(`root`)),[d(`div`,p({class:g.cx(`header`),"data-p":x.dataP},g.ptm(`header`)),[c(g.$slots,`header`,{id:g.$id+`_header`,class:t(g.cx(`title`)),collapsed:b.d_collapsed},function(){return[g.header?(l(),f(`span`,p({key:0,id:g.$id+`_header`,class:g.cx(`title`)},g.ptm(`title`)),e(g.header),17,D)):u(``,!0)]}),d(`div`,p({class:g.cx(`headerActions`)},g.ptm(`headerActions`)),[c(g.$slots,`icons`),g.toggleable?c(g.$slots,`togglebutton`,{key:0,collapsed:b.d_collapsed,toggleCallback:function(e){return x.toggle(e)},keydownCallback:function(e){return x.onKeyDown(e)}},function(){return[s(S,p({id:g.$id+`_header`,class:g.cx(`pcToggleButton`),"aria-label":x.buttonAriaLabel,"aria-controls":g.$id+`_content`,"aria-expanded":!b.d_collapsed,unstyled:g.unstyled,onClick:_[0]||=function(e){return x.toggle(e)},onKeydown:_[1]||=function(e){return x.onKeyDown(e)}},g.toggleButtonProps,{pt:g.ptm(`pcToggleButton`)}),{icon:a(function(e){return[c(g.$slots,g.$slots.toggleicon?`toggleicon`:`togglericon`,{collapsed:b.d_collapsed},function(){return[(l(),o(i(b.d_collapsed?`PlusIcon`:`MinusIcon`),p({class:e.class},g.ptm(`pcToggleButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`id`,`class`,`aria-label`,`aria-controls`,`aria-expanded`,`unstyled`,`pt`])]}):u(``,!0)],16)],16,E),s(h,p({name:`p-toggleable-content`},g.ptm(`transition`)),{default:a(function(){return[n(d(`div`,p({id:g.$id+`_content`,class:g.cx(`contentContainer`),role:`region`,"aria-labelledby":g.$id+`_header`},g.ptm(`contentContainer`)),[d(`div`,p({class:g.cx(`content`)},g.ptm(`content`)),[c(g.$slots,`default`)],16),g.$slots.footer?(l(),f(`div`,p({key:0,class:g.cx(`footer`)},g.ptm(`footer`)),[c(g.$slots,`footer`)],16)):u(``,!0)],16,O),[[m,!b.d_collapsed]])]}),_:3},16)],16,T)}w.render=k;export{w as t};