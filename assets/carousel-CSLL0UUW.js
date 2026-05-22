import{Bt as e,Ct as t,H as n,It as r,Q as i,Rt as a,Sn as o,St as s,U as c,Vt as l,Wt as u,Xt as d,Z as f,_t as p,an as m,at as h,ct as g,dn as _,dt as v,en as y,g as b,lt as x,nn as S,ot as C,rn as w,tn as T,zt as E}from"./main-C2lISuvY.js";import{n as D,r as O,t as k}from"./chevronup-B5shcyw_.js";var A=i.extend({name:`carousel`,style:`
    .p-carousel {
        display: flex;
        flex-direction: column;
    }

    .p-carousel-content-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .p-carousel-content {
        display: flex;
        flex-direction: row;
        gap: dt('carousel.content.gap');
    }

    .p-carousel-content:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-carousel-item-list {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-item-list:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-prev-button,
    .p-carousel-next-button {
        align-self: center;
        flex-shrink: 0;
    }

    .p-carousel-indicator-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        padding: dt('carousel.indicator.list.padding');
        gap: dt('carousel.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-carousel-indicator-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('carousel.indicator.background');
        width: dt('carousel.indicator.width');
        height: dt('carousel.indicator.height');
        border: 0 none;
        transition:
            background dt('carousel.transition.duration'),
            color dt('carousel.transition.duration'),
            outline-color dt('carousel.transition.duration'),
            box-shadow dt('carousel.transition.duration');
        outline-color: transparent;
        border-radius: dt('carousel.indicator.border.radius');
        padding: 0;
        margin: 0;
        user-select: none;
        cursor: pointer;
    }

    .p-carousel-indicator-button:focus-visible {
        box-shadow: dt('carousel.indicator.focus.ring.shadow');
        outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');
        outline-offset: dt('carousel.indicator.focus.ring.offset');
    }

    .p-carousel-indicator-button:hover {
        background: dt('carousel.indicator.hover.background');
    }

    .p-carousel-indicator-active .p-carousel-indicator-button {
        background: dt('carousel.indicator.active.background');
    }

    .p-carousel-vertical .p-carousel-content {
        flex-direction: column;
    }

    .p-carousel-vertical .p-carousel-item-list {
        flex-direction: column;
        height: 100%;
    }

    .p-items-hidden .p-carousel-item {
        visibility: hidden;
    }

    .p-items-hidden .p-carousel-item.p-carousel-item-active {
        visibility: visible;
    }
`,classes:{root:function(e){var t=e.instance;return[`p-carousel p-component`,{"p-carousel-vertical":t.isVertical(),"p-carousel-horizontal":!t.isVertical()}]},header:`p-carousel-header`,contentContainer:`p-carousel-content-container`,content:`p-carousel-content`,pcPrevButton:function(e){return[`p-carousel-prev-button`,{"p-disabled":e.instance.backwardIsDisabled}]},viewport:`p-carousel-viewport`,itemList:`p-carousel-item-list`,itemClone:function(e){var t=e.index,n=e.value,r=e.totalShiftedItems,i=e.d_numVisible;return[`p-carousel-item p-carousel-item-clone`,{"p-carousel-item-active":r*-1===n.length+i,"p-carousel-item-start":t===0,"p-carousel-item-end":n.slice(-1*i).length-1===t}]},item:function(e){var t=e.instance,n=e.index;return[`p-carousel-item`,{"p-carousel-item-active":t.firstIndex()<=n&&t.lastIndex()>=n,"p-carousel-item-start":t.firstIndex()===n,"p-carousel-item-end":t.lastIndex()===n}]},pcNextButton:function(e){return[`p-carousel-next-button`,{"p-disabled":e.instance.forwardIsDisabled}]},indicatorList:`p-carousel-indicator-list`,indicator:function(e){var t=e.instance,n=e.index;return[`p-carousel-indicator`,{"p-carousel-indicator-active":t.d_page===n}]},indicatorButton:`p-carousel-indicator-button`,footer:`p-carousel-footer`}}),j={name:`BaseCarousel`,extends:f,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:`horizontal`},verticalViewPortHeight:{type:String,default:`300px`},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},nextButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}}},style:A,provide:function(){return{$pcCarousel:this,$parentInstance:this}}};function M(e){return I(e)||F(e)||P(e)||N()}function N(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(e,t){if(e){if(typeof e==`string`)return L(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function F(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function I(e){if(Array.isArray(e))return L(e)}function L(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var R={name:`Carousel`,extends:j,inheritAttrs:!1,emits:[`update:page`],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(e){e>this.d_page?this.navForward({},e):e<this.d_page&&this.navBackward({},e),this.d_page=e},circular:function(e){this.d_circular=e},numVisible:function(e,t){this.d_numVisible=e,this.d_oldNumVisible=t},numScroll:function(e,t){this.d_oldNumScroll=t,this.d_numScroll=e},value:function(e){this.d_oldValue=e}},mounted:function(){var e=!1;if(this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var t=this.totalShiftedItems;this.d_page===0?t=-1*this.d_numVisible:t===0&&(t=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),t!==this.totalShiftedItems&&(this.totalShiftedItems=t,e=!0)}!e&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var e=this.isCircular(),t=!1,n=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var r=this.d_page;this.totalIndicators!==0&&r>=this.totalIndicators&&(r=this.totalIndicators-1,this.$emit(`update:page`,r),this.d_page=r,t=!0),n=r*this.d_numScroll*-1,e&&(n-=this.d_numVisible),r===this.totalIndicators-1&&this.remainingItems>0?(n+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,n!==this.totalShiftedItems&&(this.totalShiftedItems=n,t=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?`translate3d(0, ${n*(100/this.d_numVisible)}%, 0)`:`translate3d(${n*(100/this.d_numVisible)}%, 0, 0)`}e&&(this.d_page===0?n=-1*this.d_numVisible:n===0&&(n=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),n!==this.totalShiftedItems&&(this.totalShiftedItems=n,t=!0)),!t&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(e,t){return this.ptm(e,{context:{highlighted:t===this.d_page}})},getItemPTOptions:function(e,t){return this.ptm(e,{context:{index:t,active:this.firstIndex()<=t&&this.lastIndex()>=t,start:this.firstIndex()===t,end:this.lastIndex()===t}})},step:function(e,t){var n=this.totalShiftedItems,r=this.isCircular();if(t!=null)n=this.d_numScroll*t*-1,r&&(n-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{n+=this.d_numScroll*e,this.isRemainingItemsAdded&&=(n+=this.remainingItems-this.d_numScroll*e,!1);var i=r?n+this.d_numVisible:n;t=Math.abs(Math.floor(i/this.d_numScroll))}r&&this.d_page===this.totalIndicators-1&&e===-1?(n=-1*(this.value.length+this.d_numVisible),t=0):r&&this.d_page===0&&e===1?(n=0,t=this.totalIndicators-1):t===this.totalIndicators-1&&this.remainingItems>0&&(n+=this.remainingItems*-1-this.d_numScroll*e,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&h(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transform=this.isVertical()?`translate3d(0, ${n*(100/this.d_numVisible)}%, 0)`:`translate3d(${n*(100/this.d_numVisible)}%, 0, 0)`,this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.totalShiftedItems=n,this.$emit(`update:page`,t),this.d_page=t},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var e=window.innerWidth,t={numVisible:this.numVisible,numScroll:this.numScroll},n=0;n<this.responsiveOptions.length;n++){var r=this.responsiveOptions[n];parseInt(r.breakpoint,10)>=e&&(t=r)}if(this.d_numScroll!==t.numScroll){var i=this.d_page;i=parseInt(i*this.d_numScroll/t.numScroll),this.totalShiftedItems=t.numScroll*i*-1,this.isCircular()&&(this.totalShiftedItems-=t.numVisible),this.d_numScroll=t.numScroll,this.$emit(`update:page`,i),this.d_page=i}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},navBackward:function(e,t){(this.d_circular||this.d_page!==0)&&this.step(1,t),this.allowAutoplay=!1,e.cancelable&&e.preventDefault()},navForward:function(e,t){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,t),this.allowAutoplay=!1,e.cancelable&&e.preventDefault()},onIndicatorClick:function(e,t){var n=this.d_page;t>n?this.navForward(e,t):t<n&&this.navBackward(e,t)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&g(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=``,(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?`translate3d(0, ${this.totalShiftedItems*(100/this.d_numVisible)}%, 0)`:`translate3d(${this.totalShiftedItems*(100/this.d_numVisible)}%, 0, 0)`))},onTouchStart:function(e){var t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove:function(e){var t=e.changedTouches[0],n=this.isVertical()?t.pageY-this.startPos.y:t.pageX-this.startPos.x;Math.abs(n)>this.swipeThreshold&&e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var t=e.changedTouches[0];this.isVertical()?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)},changePageOnTouch:function(e,t){Math.abs(t)>this.swipeThreshold&&(t<0?this.navForward(e):this.navBackward(e))},onIndicatorKeydown:function(e){switch(e.code){case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`ArrowUp`:case`ArrowDown`:case`PageUp`:case`PageDown`:e.preventDefault();break;case`Tab`:this.onTabKey();break}},onRightKey:function(){var e=M(x(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=M(x(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=M(x(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=e.findIndex(function(e){return C(e,`data-p-active`)===!0}),n=p(this.$refs.indicatorContent,`[data-pc-section="indicator"] > button[tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=M(x(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=p(this.$refs.indicatorContent,`[data-pc-section="indicator"] > button[tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=M(x(this.$refs.indicatorContent,`[data-pc-section="indicator"]`));n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(t){e.calculatePosition(t)},window.addEventListener(`resize`,this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&=(window.removeEventListener(`resize`,this.documentResizeListener),null)},startAutoplay:function(){var e=this;this.interval=setInterval(function(){e.d_page===e.totalIndicators-1?e.step(-1,0):e.step(-1,e.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var e;this.carouselStyle=document.createElement(`style`),this.carouselStyle.type=`text/css`,v(this.carouselStyle,`nonce`,(e=this.$primevue)==null||(e=e.config)==null||(e=e.csp)==null?void 0:e.nonce),document.body.appendChild(this.carouselStyle)}var n=`
                .p-carousel[${this.$attrSelector}] .p-carousel-item {
                    flex: 1 0 ${100/this.d_numVisible}%
                }
            `;if(this.responsiveOptions&&!this.isUnstyled){var r=M(this.responsiveOptions),i=s();r.sort(function(e,n){var r=e.breakpoint,a=n.breakpoint;return t(r,a,-1,i)});for(var a=0;a<r.length;a++){var o=r[a];n+=`
                        @media screen and (max-width: ${o.breakpoint}) {
                            .p-carousel[${this.$attrSelector}] .p-carousel-item {
                                flex: 1 0 ${100/o.numVisible}%
                            }
                        }
                    `}}this.carouselStyle.innerHTML=n},isVertical:function(){return this.orientation===`vertical`},hasValidItemCount:function(){return this.value&&this.value.length>this.d_numVisible},isCircular:function(){return this.hasValidItemCount()&&this.d_circular},isAutoplay:function(){return this.hasValidItemCount()&&this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var e;return((e=this.$primevue.config)==null||(e=e.locale)==null?void 0:e.emptyMessage)||``}},components:{Button:n,ChevronRightIcon:D,ChevronDownIcon:b,ChevronLeftIcon:O,ChevronUpIcon:k},directives:{ripple:c}},z=[`aria-live`],B=[`data-p-carousel-item-active`,`data-p-carousel-item-start`,`data-p-carousel-item-end`],V=[`aria-hidden`,`aria-label`,`aria-roledescription`,`data-p-carousel-item-active`,`data-p-carousel-item-start`,`data-p-carousel-item-end`],H=[`data-p-active`],U=[`tabindex`,`aria-label`,`aria-current`,`onClick`];function W(t,n,i,s,c,f){var p=w(`Button`);return y(),l(`div`,d({class:t.cx(`root`),role:`region`},t.ptmi(`root`)),[t.$slots.header?(y(),l(`div`,d({key:0,class:t.cx(`header`)},t.ptm(`header`)),[S(t.$slots,`header`)],16)):e(``,!0),f.empty?S(t.$slots,`empty`,{key:2},function(){return[u(o(f.emptyMessageText),1)]}):(y(),l(`div`,d({key:1,class:[t.cx(`contentContainer`),t.containerClass]},t.ptm(`contentContainer`)),[a(`div`,d({class:[t.cx(`content`),t.contentClass],"aria-live":c.allowAutoplay?`polite`:`off`},t.ptm(`content`)),[t.showNavigators?(y(),E(p,d({key:0,class:t.cx(`pcPrevButton`),disabled:f.backwardIsDisabled,"aria-label":f.ariaPrevButtonLabel,unstyled:t.unstyled,onClick:f.navBackward},t.prevButtonProps,{pt:t.ptm(`pcPrevButton`),"data-pc-group-section":`navigator`}),{icon:_(function(e){return[S(t.$slots,`previcon`,{},function(){return[(y(),E(m(f.isVertical()?`ChevronUpIcon`:`ChevronLeftIcon`),d({class:e.icon},t.ptm(`pcPrevButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`disabled`,`aria-label`,`unstyled`,`onClick`,`pt`])):e(``,!0),a(`div`,d({class:t.cx(`viewport`),style:[{height:f.isVertical()?t.verticalViewPortHeight:`auto`}],onTouchend:n[1]||=function(){return f.onTouchEnd&&f.onTouchEnd.apply(f,arguments)},onTouchstart:n[2]||=function(){return f.onTouchStart&&f.onTouchStart.apply(f,arguments)},onTouchmove:n[3]||=function(){return f.onTouchMove&&f.onTouchMove.apply(f,arguments)}},t.ptm(`viewport`)),[a(`div`,d({ref:`itemsContainer`,class:t.cx(`itemList`),onTransitionend:n[0]||=function(){return f.onTransitionEnd&&f.onTransitionEnd.apply(f,arguments)}},t.ptm(`itemList`)),[f.isCircular()?(y(!0),l(r,{key:0},T(t.value.slice(-1*c.d_numVisible),function(e,n){return y(),l(`div`,d({key:n+`_scloned`,class:t.cx(`itemClone`,{index:n,value:t.value,totalShiftedItems:c.totalShiftedItems,d_numVisible:c.d_numVisible})},{ref_for:!0},t.ptm(`itemClone`),{"data-p-carousel-item-active":c.totalShiftedItems*-1===t.value.length+c.d_numVisible,"data-p-carousel-item-start":n===0,"data-p-carousel-item-end":t.value.slice(-1*c.d_numVisible).length-1===n}),[S(t.$slots,`item`,{data:e,index:n})],16,B)}),128)):e(``,!0),(y(!0),l(r,null,T(t.value,function(e,n){return y(),l(`div`,d({key:n,class:t.cx(`item`,{index:n}),role:`group`,"aria-hidden":f.firstIndex()>n||f.lastIndex()<n?!0:void 0,"aria-label":f.ariaSlideNumber(n),"aria-roledescription":f.ariaSlideLabel},{ref_for:!0},f.getItemPTOptions(`item`,n),{"data-p-carousel-item-active":f.firstIndex()<=n&&f.lastIndex()>=n,"data-p-carousel-item-start":f.firstIndex()===n,"data-p-carousel-item-end":f.lastIndex()===n}),[S(t.$slots,`item`,{data:e,index:n})],16,V)}),128)),f.isCircular()?(y(!0),l(r,{key:1},T(t.value.slice(0,c.d_numVisible),function(e,n){return y(),l(`div`,d({key:n+`_fcloned`,class:t.cx(`itemClone`,{index:n,value:t.value,totalShiftedItems:c.totalShiftedItems,d_numVisible:c.d_numVisible})},{ref_for:!0},t.ptm(`itemClone`)),[S(t.$slots,`item`,{data:e,index:n})],16)}),128)):e(``,!0)],16)],16),t.showNavigators?(y(),E(p,d({key:1,class:t.cx(`pcNextButton`),disabled:f.forwardIsDisabled,"aria-label":f.ariaNextButtonLabel,unstyled:t.unstyled,onClick:f.navForward},t.nextButtonProps,{pt:t.ptm(`pcNextButton`),"data-pc-group-section":`navigator`}),{icon:_(function(e){return[S(t.$slots,`nexticon`,{},function(){return[(y(),E(m(f.isVertical()?`ChevronDownIcon`:`ChevronRightIcon`),d({class:e.class},t.ptm(`pcNextButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`disabled`,`aria-label`,`unstyled`,`onClick`,`pt`])):e(``,!0)],16,z),f.totalIndicators>=0&&t.showIndicators?(y(),l(`ul`,d({key:0,ref:`indicatorContent`,class:[t.cx(`indicatorList`),t.indicatorsContentClass],onKeydown:n[4]||=function(){return f.onIndicatorKeydown&&f.onIndicatorKeydown.apply(f,arguments)}},t.ptm(`indicatorList`)),[(y(!0),l(r,null,T(f.totalIndicators,function(e,n){return y(),l(`li`,d({key:`p-carousel-indicator-`+n.toString(),class:t.cx(`indicator`,{index:n})},{ref_for:!0},f.getIndicatorPTOptions(`indicator`,n),{"data-p-active":c.d_page===n}),[a(`button`,d({class:t.cx(`indicatorButton`),type:`button`,tabindex:c.d_page===n?`0`:`-1`,"aria-label":f.ariaPageLabel(n+1),"aria-current":c.d_page===n?`page`:void 0,onClick:function(e){return f.onIndicatorClick(e,n)}},{ref_for:!0},f.getIndicatorPTOptions(`indicatorButton`,n)),null,16,U)],16,H)}),128))],16)):e(``,!0)],16)),t.$slots.footer?(y(),l(`div`,d({key:3,class:t.cx(`footer`)},t.ptm(`footer`)),[S(t.$slots,`footer`)],16)):e(``,!0)],16)}R.render=W;export{R as t};