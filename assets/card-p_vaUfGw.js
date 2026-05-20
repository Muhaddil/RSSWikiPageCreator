import{Bt as e,Q as t,Rt as n,Vt as r,Xt as i,Z as a,en as o,nn as s}from"./main-C1YiLsg3.js";var c={name:`Card`,extends:{name:`BaseCard`,extends:a,style:t.extend({name:`card`,style:`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function l(t,a,c,l,u,d){return o(),r(`div`,i({class:t.cx(`root`)},t.ptmi(`root`)),[t.$slots.header?(o(),r(`div`,i({key:0,class:t.cx(`header`)},t.ptm(`header`)),[s(t.$slots,`header`)],16)):e(``,!0),n(`div`,i({class:t.cx(`body`)},t.ptm(`body`)),[t.$slots.title||t.$slots.subtitle?(o(),r(`div`,i({key:0,class:t.cx(`caption`)},t.ptm(`caption`)),[t.$slots.title?(o(),r(`div`,i({key:0,class:t.cx(`title`)},t.ptm(`title`)),[s(t.$slots,`title`)],16)):e(``,!0),t.$slots.subtitle?(o(),r(`div`,i({key:1,class:t.cx(`subtitle`)},t.ptm(`subtitle`)),[s(t.$slots,`subtitle`)],16)):e(``,!0)],16)):e(``,!0),n(`div`,i({class:t.cx(`content`)},t.ptm(`content`)),[s(t.$slots,`content`)],16),t.$slots.footer?(o(),r(`div`,i({key:1,class:t.cx(`footer`)},t.ptm(`footer`)),[s(t.$slots,`footer`)],16)):e(``,!0)],16)],16)}c.render=l;export{c as t};