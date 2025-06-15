"use strict";import{C as V,D as k,a7 as $,an as T,$ as A,E as L,aP as P,aQ as B,aX as N,aR as m,ax as _,aT as D,ah as R,ag as O,ae as E,a as c,o as r,e as h,z as u,H as l,b as v,j as g,k as S,U as w,F as b,J as I,g as F,t as K}from"./main-C3-UDBbC.js";import{s as M,b as z,a as U}from"./index-C75uSfkY.js";var j=V`
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
`,H={root:function(t){var i=t.instance;return["p-carousel p-component",{"p-carousel-vertical":i.isVertical(),"p-carousel-horizontal":!i.isVertical()}]},header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:function(t){var i=t.instance;return["p-carousel-prev-button",{"p-disabled":i.backwardIsDisabled}]},viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:function(t){var i=t.index,e=t.value,o=t.totalShiftedItems,s=t.d_numVisible;return["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":o*-1===e.length+s,"p-carousel-item-start":i===0,"p-carousel-item-end":e.slice(-1*s).length-1===i}]},item:function(t){var i=t.instance,e=t.index;return["p-carousel-item",{"p-carousel-item-active":i.firstIndex()<=e&&i.lastIndex()>=e,"p-carousel-item-start":i.firstIndex()===e,"p-carousel-item-end":i.lastIndex()===e}]},pcNextButton:function(t){var i=t.instance;return["p-carousel-next-button",{"p-disabled":i.forwardIsDisabled}]},indicatorList:"p-carousel-indicator-list",indicator:function(t){var i=t.instance,e=t.index;return["p-carousel-indicator",{"p-carousel-indicator-active":i.d_page===e}]},indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},X=k.extend({name:"carousel",style:j,classes:H}),Y={name:"BaseCarousel",extends:L,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},nextButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:X,provide:function(){return{$pcCarousel:this,$parentInstance:this}}};function p(t){return q(t)||W(t)||Q(t)||J()}function J(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(t,i){if(t){if(typeof t=="string")return x(t,i);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?x(t,i):void 0}}function W(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function q(t){if(Array.isArray(t))return x(t)}function x(t,i){(i==null||i>t.length)&&(i=t.length);for(var e=0,o=Array(i);e<i;e++)o[e]=t[e];return o}var C={name:"Carousel",extends:Y,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(t){t>this.d_page?this.navForward({},t):t<this.d_page&&this.navBackward({},t),this.d_page=t},circular:function(t){this.d_circular=t},numVisible:function(t,i){this.d_numVisible=t,this.d_oldNumVisible=i},numScroll:function(t,i){this.d_oldNumScroll=i,this.d_numScroll=t},value:function(t){this.d_oldValue=t}},mounted:function(){var t=!1;if(this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var i=this.totalShiftedItems;this.d_page===0?i=-1*this.d_numVisible:i===0&&(i=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),i!==this.totalShiftedItems&&(this.totalShiftedItems=i,t=!0)}!t&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var t=this.isCircular(),i=!1,e=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var o=this.d_page;this.totalIndicators!==0&&o>=this.totalIndicators&&(o=this.totalIndicators-1,this.$emit("update:page",o),this.d_page=o,i=!0),e=o*this.d_numScroll*-1,t&&(e-=this.d_numVisible),o===this.totalIndicators-1&&this.remainingItems>0?(e+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,e!==this.totalShiftedItems&&(this.totalShiftedItems=e,i=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(e*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(e*(100/this.d_numVisible),"%, 0, 0)")}t&&(this.d_page===0?e=-1*this.d_numVisible:e===0&&(e=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),e!==this.totalShiftedItems&&(this.totalShiftedItems=e,i=!0)),!i&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(t,i){return this.ptm(t,{context:{highlighted:i===this.d_page}})},getItemPTOptions:function(t,i){return this.ptm(t,{context:{index:i,active:this.firstIndex()<=i&&this.lastIndex()>=i,start:this.firstIndex()===i,end:this.lastIndex()===i}})},step:function(t,i){var e=this.totalShiftedItems,o=this.isCircular();if(i!=null)e=this.d_numScroll*i*-1,o&&(e-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{e+=this.d_numScroll*t,this.isRemainingItemsAdded&&(e+=this.remainingItems-this.d_numScroll*t,this.isRemainingItemsAdded=!1);var s=o?e+this.d_numVisible:e;i=Math.abs(Math.floor(s/this.d_numScroll))}o&&this.d_page===this.totalIndicators-1&&t===-1?(e=-1*(this.value.length+this.d_numVisible),i=0):o&&this.d_page===0&&t===1?(e=0,i=this.totalIndicators-1):i===this.totalIndicators-1&&this.remainingItems>0&&(e+=this.remainingItems*-1-this.d_numScroll*t,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&O(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(e*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(e*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=e,this.$emit("update:page",i),this.d_page=i},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var t=window.innerWidth,i={numVisible:this.numVisible,numScroll:this.numScroll},e=0;e<this.responsiveOptions.length;e++){var o=this.responsiveOptions[e];parseInt(o.breakpoint,10)>=t&&(i=o)}if(this.d_numScroll!==i.numScroll){var s=this.d_page;s=parseInt(s*this.d_numScroll/i.numScroll),this.totalShiftedItems=i.numScroll*s*-1,this.isCircular()&&(this.totalShiftedItems-=i.numVisible),this.d_numScroll=i.numScroll,this.$emit("update:page",s),this.d_page=s}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible)}},navBackward:function(t,i){(this.d_circular||this.d_page!==0)&&this.step(1,i),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},navForward:function(t,i){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,i),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},onIndicatorClick:function(t,i){var e=this.d_page;i>e?this.navForward(t,i):i<e&&this.navBackward(t,i)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&R(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(t){var i=t.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}},onTouchMove:function(t){var i=t.changedTouches[0],e=this.isVertical()?i.pageY-this.startPos.y:i.pageX-this.startPos.x;Math.abs(e)>this.swipeThreshold&&t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var i=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,i.pageY-this.startPos.y):this.changePageOnTouch(t,i.pageX-this.startPos.x)},changePageOnTouch:function(t,i){Math.abs(i)>this.swipeThreshold&&(i<0?this.navForward(t):this.navBackward(t))},onIndicatorKeydown:function(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=p(m(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===t.length?t.length-1:i+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=p(m(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,t.length-1)},onTabKey:function(){var t=p(m(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=t.findIndex(function(s){return D(s,"data-p-active")===!0}),e=_(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),o=t.findIndex(function(s){return s===e.parentElement});t[o].children[0].tabIndex="-1",t[i].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=p(m(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=_(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(function(e){return e===i.parentElement})},changedFocusedIndicator:function(t,i){var e=p(m(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));e[t].children[0].tabIndex="-1",e[i].children[0].tabIndex="0",e[i].children[0].focus()},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(i){t.calculatePosition(i)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var t=this;this.interval=setInterval(function(){t.d_page===t.totalIndicators-1?t.step(-1,0):t.step(-1,t.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var t;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",P(this.carouselStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.carouselStyle)}var i=`
                .p-carousel[`.concat(this.$attrSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var e=p(this.responsiveOptions),o=B();e.sort(function(f,d){var a=f.breakpoint,y=d.breakpoint;return N(a,y,-1,o)});for(var s=0;s<e.length;s++){var n=e[s];i+=`
                        @media screen and (max-width: `.concat(n.breakpoint,`) {
                            .p-carousel[`).concat(this.$attrSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/n.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=i},isVertical:function(){return this.orientation==="vertical"},hasValidItemCount:function(){return this.value&&this.value.length>this.d_numVisible},isCircular:function(){return this.hasValidItemCount()&&this.d_circular},isAutoplay:function(){return this.hasValidItemCount()&&this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var t;return((t=this.$primevue.config)===null||t===void 0||(t=t.locale)===null||t===void 0?void 0:t.emptyMessage)||""}},components:{Button:A,ChevronRightIcon:U,ChevronDownIcon:T,ChevronLeftIcon:z,ChevronUpIcon:M},directives:{ripple:$}},G=["aria-live"],Z=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],tt=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],it=["data-p-active"],et=["tabindex","aria-label","aria-current","onClick"];function nt(t,i,e,o,s,n){var f=E("Button");return r(),c("div",l({class:t.cx("root"),role:"region"},t.ptmi("root")),[t.$slots.header?(r(),c("div",l({key:0,class:t.cx("header")},t.ptm("header")),[u(t.$slots,"header")],16)):h("",!0),n.empty?u(t.$slots,"empty",{key:2},function(){return[F(K(n.emptyMessageText),1)]}):(r(),c("div",l({key:1,class:[t.cx("contentContainer"),t.containerClass]},t.ptm("contentContainer")),[v("div",l({class:[t.cx("content"),t.contentClass],"aria-live":s.allowAutoplay?"polite":"off"},t.ptm("content")),[t.showNavigators?(r(),g(f,l({key:0,class:t.cx("pcPrevButton"),disabled:n.backwardIsDisabled,"aria-label":n.ariaPrevButtonLabel,unstyled:t.unstyled,onClick:n.navBackward},t.prevButtonProps,{pt:t.ptm("pcPrevButton"),"data-pc-group-section":"navigator"}),{icon:S(function(d){return[u(t.$slots,"previcon",{},function(){return[(r(),g(w(n.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),l({class:d.icon},t.ptm("pcPrevButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):h("",!0),v("div",l({class:t.cx("viewport"),style:[{height:n.isVertical()?t.verticalViewPortHeight:"auto"}],onTouchend:i[1]||(i[1]=function(){return n.onTouchEnd&&n.onTouchEnd.apply(n,arguments)}),onTouchstart:i[2]||(i[2]=function(){return n.onTouchStart&&n.onTouchStart.apply(n,arguments)}),onTouchmove:i[3]||(i[3]=function(){return n.onTouchMove&&n.onTouchMove.apply(n,arguments)})},t.ptm("viewport")),[v("div",l({ref:"itemsContainer",class:t.cx("itemList"),onTransitionend:i[0]||(i[0]=function(){return n.onTransitionEnd&&n.onTransitionEnd.apply(n,arguments)})},t.ptm("itemList")),[n.isCircular()?(r(!0),c(b,{key:0},I(t.value.slice(-1*s.d_numVisible),function(d,a){return r(),c("div",l({key:a+"_scloned",class:t.cx("itemClone",{index:a,value:t.value,totalShiftedItems:s.totalShiftedItems,d_numVisible:s.d_numVisible})},{ref_for:!0},t.ptm("itemClone"),{"data-p-carousel-item-active":s.totalShiftedItems*-1===t.value.length+s.d_numVisible,"data-p-carousel-item-start":a===0,"data-p-carousel-item-end":t.value.slice(-1*s.d_numVisible).length-1===a}),[u(t.$slots,"item",{data:d,index:a})],16,Z)}),128)):h("",!0),(r(!0),c(b,null,I(t.value,function(d,a){return r(),c("div",l({key:a,class:t.cx("item",{index:a}),role:"group","aria-hidden":n.firstIndex()>a||n.lastIndex()<a?!0:void 0,"aria-label":n.ariaSlideNumber(a),"aria-roledescription":n.ariaSlideLabel},{ref_for:!0},n.getItemPTOptions("item",a),{"data-p-carousel-item-active":n.firstIndex()<=a&&n.lastIndex()>=a,"data-p-carousel-item-start":n.firstIndex()===a,"data-p-carousel-item-end":n.lastIndex()===a}),[u(t.$slots,"item",{data:d,index:a})],16,tt)}),128)),n.isCircular()?(r(!0),c(b,{key:1},I(t.value.slice(0,s.d_numVisible),function(d,a){return r(),c("div",l({key:a+"_fcloned",class:t.cx("itemClone",{index:a,value:t.value,totalShiftedItems:s.totalShiftedItems,d_numVisible:s.d_numVisible})},{ref_for:!0},t.ptm("itemClone")),[u(t.$slots,"item",{data:d,index:a})],16)}),128)):h("",!0)],16)],16),t.showNavigators?(r(),g(f,l({key:1,class:t.cx("pcNextButton"),disabled:n.forwardIsDisabled,"aria-label":n.ariaNextButtonLabel,unstyled:t.unstyled,onClick:n.navForward},t.nextButtonProps,{pt:t.ptm("pcNextButton"),"data-pc-group-section":"navigator"}),{icon:S(function(d){return[u(t.$slots,"nexticon",{},function(){return[(r(),g(w(n.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),l({class:d.class},t.ptm("pcNextButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):h("",!0)],16,G),n.totalIndicators>=0&&t.showIndicators?(r(),c("ul",l({key:0,ref:"indicatorContent",class:[t.cx("indicatorList"),t.indicatorsContentClass],onKeydown:i[4]||(i[4]=function(){return n.onIndicatorKeydown&&n.onIndicatorKeydown.apply(n,arguments)})},t.ptm("indicatorList")),[(r(!0),c(b,null,I(n.totalIndicators,function(d,a){return r(),c("li",l({key:"p-carousel-indicator-"+a.toString(),class:t.cx("indicator",{index:a})},{ref_for:!0},n.getIndicatorPTOptions("indicator",a),{"data-p-active":s.d_page===a}),[v("button",l({class:t.cx("indicatorButton"),type:"button",tabindex:s.d_page===a?"0":"-1","aria-label":n.ariaPageLabel(a+1),"aria-current":s.d_page===a?"page":void 0,onClick:function(y){return n.onIndicatorClick(y,a)}},{ref_for:!0},n.getIndicatorPTOptions("indicatorButton",a)),null,16,et)],16,it)}),128))],16)):h("",!0)],16)),t.$slots.footer?(r(),c("div",l({key:3,class:t.cx("footer")},t.ptm("footer")),[u(t.$slots,"footer")],16)):h("",!0)],16)}C.render=nt;export{C as s};
