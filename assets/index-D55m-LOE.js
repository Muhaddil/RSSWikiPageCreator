"use strict";import{C as i,D as l,E as n,a as o,o as a,e as s,b as c,H as d,z as r}from"./main-DtQo8f2b.js";var p=i`
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
`,b={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},u=l.extend({name:"card",style:p,classes:b}),f={name:"BaseCard",extends:n,style:u,provide:function(){return{$pcCard:this,$parentInstance:this}}},e={name:"Card",extends:f,inheritAttrs:!1};function x(t,m,y,h,$,g){return a(),o("div",d({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(a(),o("div",d({key:0,class:t.cx("header")},t.ptm("header")),[r(t.$slots,"header")],16)):s("",!0),c("div",d({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(a(),o("div",d({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(a(),o("div",d({key:0,class:t.cx("title")},t.ptm("title")),[r(t.$slots,"title")],16)):s("",!0),t.$slots.subtitle?(a(),o("div",d({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[r(t.$slots,"subtitle")],16)):s("",!0)],16)):s("",!0),c("div",d({class:t.cx("content")},t.ptm("content")),[r(t.$slots,"content")],16),t.$slots.footer?(a(),o("div",d({key:1,class:t.cx("footer")},t.ptm("footer")),[r(t.$slots,"footer")],16)):s("",!0)],16)],16)}e.render=x;export{e as s};
