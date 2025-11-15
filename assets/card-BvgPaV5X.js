import{j as e,k as t,l as n,s as r,u as i,w as a}from"./runtime-core.esm-bundler-C0lSAh8T.js";import{c as o,l as s}from"./button-CbARRVr_.js";var c={name:`Card`,extends:{name:`BaseCard`,extends:o,style:s.extend({name:`card`,style:`
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
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function l(o,s,c,l,u,d){return t(),i(`div`,a({class:o.cx(`root`)},o.ptmi(`root`)),[o.$slots.header?(t(),i(`div`,a({key:0,class:o.cx(`header`)},o.ptm(`header`)),[e(o.$slots,`header`)],16)):n(``,!0),r(`div`,a({class:o.cx(`body`)},o.ptm(`body`)),[o.$slots.title||o.$slots.subtitle?(t(),i(`div`,a({key:0,class:o.cx(`caption`)},o.ptm(`caption`)),[o.$slots.title?(t(),i(`div`,a({key:0,class:o.cx(`title`)},o.ptm(`title`)),[e(o.$slots,`title`)],16)):n(``,!0),o.$slots.subtitle?(t(),i(`div`,a({key:1,class:o.cx(`subtitle`)},o.ptm(`subtitle`)),[e(o.$slots,`subtitle`)],16)):n(``,!0)],16)):n(``,!0),r(`div`,a({class:o.cx(`content`)},o.ptm(`content`)),[e(o.$slots,`content`)],16),o.$slots.footer?(t(),i(`div`,a({key:1,class:o.cx(`footer`)},o.ptm(`footer`)),[e(o.$slots,`footer`)],16)):n(``,!0)],16)],16)}c.render=l;export{c as t};