import{C as e,P as t,j as n,l as r,s as i,u as a}from"./runtime-core.esm-bundler-DdnIPB3D.js";import{c as o,l as s}from"./button-cKZorYEn.js";var c={name:`Card`,extends:{name:`BaseCard`,extends:o,style:s.extend({name:`card`,style:`
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
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function l(o,s,c,l,u,d){return n(),a(`div`,e({class:o.cx(`root`)},o.ptmi(`root`)),[o.$slots.header?(n(),a(`div`,e({key:0,class:o.cx(`header`)},o.ptm(`header`)),[t(o.$slots,`header`)],16)):r(``,!0),i(`div`,e({class:o.cx(`body`)},o.ptm(`body`)),[o.$slots.title||o.$slots.subtitle?(n(),a(`div`,e({key:0,class:o.cx(`caption`)},o.ptm(`caption`)),[o.$slots.title?(n(),a(`div`,e({key:0,class:o.cx(`title`)},o.ptm(`title`)),[t(o.$slots,`title`)],16)):r(``,!0),o.$slots.subtitle?(n(),a(`div`,e({key:1,class:o.cx(`subtitle`)},o.ptm(`subtitle`)),[t(o.$slots,`subtitle`)],16)):r(``,!0)],16)):r(``,!0),i(`div`,e({class:o.cx(`content`)},o.ptm(`content`)),[t(o.$slots,`content`)],16),o.$slots.footer?(n(),a(`div`,e({key:1,class:o.cx(`footer`)},o.ptm(`footer`)),[t(o.$slots,`footer`)],16)):r(``,!0)],16)],16)}c.render=l;export{c as t};