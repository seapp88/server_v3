(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],d=0,u=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);h&&h(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},r={app:0},a=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1972157c":"1b29b674","chunk-22f85aae":"50ae1321","chunk-2d22c341":"97af3406","chunk-634c71cd":"d4baad1e","chunk-8129d6b2":"a018b9b9","chunk-ab1e13c8":"a27f3298","chunk-bf2ec1ca":"f6e3e496","chunk-c6e9edc6":"d7f516ed","chunk-df5a37e0":"6c5435c9","chunk-ffccf694":"e96ec1f3"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-1972157c":1,"chunk-22f85aae":1,"chunk-8129d6b2":1,"chunk-ab1e13c8":1,"chunk-bf2ec1ca":1,"chunk-c6e9edc6":1,"chunk-df5a37e0":1,"chunk-ffccf694":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-1972157c":"3461bf7c","chunk-22f85aae":"05c2cb4e","chunk-2d22c341":"31d6cfe0","chunk-634c71cd":"31d6cfe0","chunk-8129d6b2":"0cdccd30","chunk-ab1e13c8":"82dbd57f","chunk-bf2ec1ca":"ecbb2327","chunk-c6e9edc6":"6b95fe8a","chunk-df5a37e0":"e1bdcdc4","chunk-ffccf694":"fd44891b"}[t]+".css",r=c.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===r))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===o||d===r)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var o=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[t],h.parentNode.removeChild(h),n(a)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){i[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=a);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(h);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var h=d;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),i=n.n(o);i.a},1:function(t,e){},"1dff":function(t,e,n){"use strict";var o=n("2b0e"),i=n("fb9a"),r=n.n(i),a={primary:"#7367F0",success:"#28C76F",danger:"#EA5455",warning:"#FF9F43",dark:"#1E1E1E"};o["default"].use(r.a,{theme:{colors:a}});var s={disableCustomizer:!0,disableThemeTour:!1,footerType:"sticky",hideScrollToTop:!1,mainLayoutType:"horizontal",navbarColor:"#fff",navbarType:"sticky",routerTransition:"zoom-fade",sidebarCollapsed:!1,theme:"light",userInfoLocalStorageKey:"userInfo"};e["a"]=s},"3a10":function(t,e,n){},"41a6":function(t,e,n){},4363:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var o,i,r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],c=(n("96cf"),n("3b8d")),l=(n("4917"),n("1dff")),d={watch:{"$store.state.theme":function(t){this.toggleClassInBody(t)}},methods:{toggleClassInBody:function(t){"dark"==t?(document.body.className.match("theme-semi-dark")&&document.body.classList.remove("theme-semi-dark"),document.body.classList.add("theme-dark")):"semi-dark"==t?(document.body.className.match("theme-dark")&&document.body.classList.remove("theme-dark"),document.body.classList.add("theme-semi-dark")):(document.body.className.match("theme-dark")&&document.body.classList.remove("theme-dark"),document.body.className.match("theme-semi-dark")&&document.body.classList.remove("theme-semi-dark"))},handleWindowResize:function(){this.$store.commit("UPDATE_WINDOW_WIDTH",window.innerWidth)},handleScroll:function(){this.$store.commit("UPDATE_WINDOW_SCROLL_Y",window.scrollY)}},mounted:function(){this.toggleClassInBody(l["a"].theme),this.$store.commit("UPDATE_WINDOW_WIDTH",window.innerWidth)},created:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.addEventListener("resize",this.handleWindowResize),window.addEventListener("scroll",this.handleScroll);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),destroyed:function(){window.removeEventListener("resize",this.handleWindowResize),window.removeEventListener("scroll",this.handleScroll)}},u=d,h=(n("034f"),n("2877")),f=Object(h["a"])(u,a,s,!1,null,null,null),p=f.exports,g=n("fb9a"),m=n.n(g),v=(n("c789"),n("04f2"),n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"convstooltip",staticClass:"con-vs-tooltip",on:{mouseleave:t.mouseleavex,mouseenter:t.mouseenterx,mouseup:t.destroy}},[n("transition",{attrs:{name:"tooltip-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],ref:"vstooltip",staticClass:"vs-tooltip",class:["vs-tooltip-"+(t.positionx||t.position),"vs-tooltip-"+t.color,{"after-none":t.noneAfter}],style:t.style},[t.title?n("h4",[t._v(t._s(t.title))]):t._e(),t._v("\n      "+t._s(t.text)+"\n    ")])]),t._t("default")],2)}),b=[],C=(n("0b21"),n("c5f6"),{insertBody:function(t){document.body.insertBefore(t,document.body.firstChild)},removeBody:function(t){var e=document.body;e.removeChild(t)},changePosition:function(t,e,n){var o=0,i=0,r=0,a=window.pageYOffset||document.documentElement.scrollTop;t.getBoundingClientRect().top+300>=window.innerHeight?setTimeout((function(){o=n?t.getBoundingClientRect().top-e.clientHeight+a:t.getBoundingClientRect().top-e.clientHeight+t.clientHeight+a}),1):o=n?t.getBoundingClientRect().top+t.clientHeight+a+5:t.getBoundingClientRect().top+a,i=t.getBoundingClientRect().left,r=t.offsetWidth;var s={left:"".concat(i,"px"),top:"".concat(o,"px"),width:"".concat(r,"px")};return s}}),y=(n("6762"),n("a481"),n("386d"),n("28a5"),{darken:function(t,e){var n=t.split(","),o=e<0?0:255,i=e<0?-1*e:e,r=parseInt(n[0].slice(4)),a=parseInt(n[1]),s=parseInt(n[2]);return"rgb("+(Math.round((o-r)*i)+r)+","+(Math.round((o-a)*i)+a)+","+(Math.round((o-s)*i)+s)+")"},getColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(/^[#]/.test(t)){var o=this.hexToRgb(t);t=1==e?"rgb(".concat(o.r,",").concat(o.g,",").concat(o.b,")"):"rgba(".concat(o.r,",").concat(o.g,",").concat(o.b,",").concat(e,")")}else/^rgba/.test(t)?-1!=t.search(/.([0-9]\))$/)||n||(t=t.replace(/.?([0-9]\))$/,"".concat(e,")"))):/^(rgb)/.test(t)&&1!=e&&(t=t.replace(/^(rgb)/,"rgba"),t=t.replace(/\)$/,",".concat(e,")")));return t},isColor:function(t){var e=["primary","secondary","success","danger","warning","dark","light"];return e.includes(t)},RandomColor:function(){function t(t,e){return Math.floor(Math.random()*(e-t))+t}return"rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")")},rColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(/^[#]/.test(t)){var n=this.hexToRgb(t);t="rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",").concat(e,")")}else if(/^[rgb]/.test(t)){var o=t.split(")")[0];/^[rgba]/.test(t)?o+=")":(o.replace("rgb","rgba"),o+=",".concat(e,")")),t=o}var i=["primary","success","danger","warning","dark"];return t?/[#()]/.test(t)?t:i.includes(t)?"rgba(var(--".concat(t,"),").concat(e,")"):"rgba(var(--primary),".concat(e,")"):"rgba(var(--primary),".concat(e,")")},contrastColor:function(t){var e=t;if(/[#]/g.test(t)){var n=this.hexToRgb(t);e="rgb(".concat(n.r,",").concat(n.g,",").concat(n.b,")")}var o=e.replace(/^(rgb|rgba)\(/,"").replace(/\)$/,"").replace(/\s/g,"").split(","),i=(299*o[0]+587*o[1]+114*o[2])/1e3;return i>=128},setCssVariable:function(t,e){"undefined"!==typeof window&&document.documentElement.style.setProperty(t,e)},hexToRgb:function(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,(function(t,e,n,o){return e+e+n+n+o+o}));var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null},getVariable:function(t,e){return String(t.getPropertyValue(e)).trim()},changeColor:function(t){var e,n=["primary","success","danger","warning","dark"];if(n.includes(t)){var o=getComputedStyle(document.documentElement);e=this.getVariable(o,"--"+t)}else if(/[rgb()]/g.test(t))e=t.replace(/[rgb()]/g,"");else if(/[#]/g.test(t)){var i=this.hexToRgb(t);e="".concat(i.r,",").concat(i.g,",").concat(i.b)}else e="--"+t;return e}}),_={name:"vx-tooltip",props:{title:{default:null,type:[String,Number]},text:{default:null,type:[String,Number]},color:{default:null,type:String},position:{default:"top",type:String},delay:{default:"0s",type:[Number,String]}},data:function(){return{cords:{},active:!1,widthx:"auto",positionx:null,noneAfter:!1}},computed:{style:function(){return{left:this.cords.left,top:this.cords.top,transitionDelay:this.active?this.delay:"0s",background:y.getColor(this.color,1),width:this.widthx}}},methods:{mouseenterx:function(){var t=this;this.active=!0,this.$nextTick((function(){C.insertBody(t.$refs.vstooltip),t.changePosition(t.$refs.convstooltip,t.$refs.vstooltip)}))},mouseleavex:function(){this.active=!1},changePosition:function(t,e){this.noneAfter=!1,this.positionx=null;var n=t.closest(".con-vs-tooltip"),o=window.pageYOffset||document.documentElement.scrollTop,i=n.getBoundingClientRect().top+o-e.clientHeight-4,r=n.getBoundingClientRect().left-e.clientWidth/2+n.clientWidth/2,a=n.clientWidth;"bottom"==this.position?i=n.getBoundingClientRect().top+o+n.clientHeight+4:"left"==this.position?(r=n.getBoundingClientRect().left-e.clientWidth-4,i=n.getBoundingClientRect().top+o+n.clientHeight/2-e.clientHeight/2,-1==Math.sign(r)&&(r=n.getBoundingClientRect().left,i=n.getBoundingClientRect().top+o+n.clientHeight+4,this.positionx="bottom",this.noneAfter=!0)):"right"==this.position&&(r=n.getBoundingClientRect().left+n.clientWidth+4,i=n.getBoundingClientRect().top+o+n.clientHeight/2-e.clientHeight/2,window.innerWidth-(r+e.clientWidth)<=20&&(r=n.getBoundingClientRect().left-e.clientWidth/2-10,i=n.getBoundingClientRect().top+o+n.clientHeight+4,this.positionx="bottom",this.noneAfter=!0)),this.cords={left:"".concat(r,"px"),top:"".concat(i,"px"),width:"".concat(a,"px")}},destroy:function(){var t=this;this.active=!1,this.$nextTick((function(){t.active&&C.removeBody(t.$refs.vstooltip)}))}}},x=_,w=Object(h["a"])(x,v,b,!1,null,null,null),A=w.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({ref:"card",staticClass:"vx-card",class:[{"overflow-hidden":t.tempHidden},{"no-shadow":t.noShadow},{"rounded-none":t.noRadius},{"card-border":t.cardBorder},t.cardClasses],style:t.cardStyles},t.$listeners),[t.hasHeader?n("div",{staticClass:"vx-card__header"},[n("div",{staticClass:"vx-card__title"},[this.$props.title?n("h4",{class:t.titleClasses,style:t.titleStyles},[t._v(t._s(t.title))]):t._e(),this.$props.subtitle?n("h6",{class:t.subtitleClasses,style:t.subtitleStyles},[t._v(t._s(t.subtitle))]):t._e()]),t.hasAction?n("div",{staticClass:"vx-card__actions"},[t._t("actions",[(t.actionButtons||t.collapseAction||t.refreshContentAction||t.removeCardAction)&&!t.codeToggler?n("div",{staticClass:"vx-card__action-buttons"},[t.actionButtons||t.collapseAction?n("feather-icon",{staticClass:"ml-4",class:{rotate180:!t.isContentCollapsed},attrs:{icon:"ChevronUpIcon"},on:{click:t.toggleContent}}):t._e(),t.actionButtons||t.refreshContentAction?n("feather-icon",{staticClass:"ml-4",attrs:{icon:"RotateCwIcon"},on:{click:t.refreshcard}}):t._e(),t.actionButtons||t.removeCardAction?n("feather-icon",{staticClass:"ml-4",attrs:{icon:"XIcon"},on:{click:t.removeCard}}):t._e()],1):t._e(),t.codeToggler&&!t.actionButtons?n("div",{staticClass:"vx-card__code-toggler sm:block hidden"},[n("feather-icon",{class:{"border border-solid border-primary border-t-0 border-r-0 border-l-0":t.showCode},attrs:{icon:"CodeIcon"},on:{click:t.toggleCode}})],1):t._e()])],2):t._e()]):t._e(),n("div",{ref:"content",staticClass:"vx-card__collapsible-content vs-con-loading__container",class:[{collapsed:t.isContentCollapsed},{"overflow-hidden":t.tempHidden}],style:t.StyleItems},[t._t("no-body"),this.$slots.default?n("div",{staticClass:"vx-card__body"},[t._t("default")],2):t._e(),t._t("no-body-bottom"),this.$slots.footer?n("div",{staticClass:"vx-card__footer"},[t._t("footer")],2):t._e()],2),n("div",{directives:[{name:"show",rawName:"v-show",value:this.$slots.codeContainer,expression:"this.$slots.codeContainer"}],ref:"codeContainer",staticClass:"vx-card__code-container",class:{collapsed:!t.showCode},style:t.codeContainerStyles},[n("div",{staticClass:"code-content"},[n("prism",{attrs:{language:t.codeLanguage}},[t._t("codeContainer")],2)],1)])])},k=[],T=n("8d51"),S=n.n(T),R={name:"vx-card",props:{title:String,subtitle:String,actionButtons:{type:Boolean,default:!1},actionButtonsColor:{type:String,default:"success"},codeToggler:{type:Boolean,default:!1},noShadow:{default:!1,type:Boolean},noRadius:{default:!1,type:Boolean},cardBorder:{default:!1,type:Boolean},codeLanguage:{default:"markup",type:String},collapseAction:{default:!1,type:Boolean},refreshContentAction:{default:!1,type:Boolean},removeCardAction:{default:!1,type:Boolean},headerBackground:{default:"",type:String},cardBackground:{default:"",type:String},contentColor:{default:"",type:String},titleColor:{default:"",type:String},subtitleColor:{default:"#b8c2cc",type:String}},data:function(){return{isContentCollapsed:!1,showCode:!1,maxHeight:null,cardMaxHeight:null,codeContainerMaxHeight:"0px",tempHidden:!1}},computed:{hasAction:function(){return this.$slots.actions||this.actionButtons||this.collapseAction||this.refreshContentAction||this.removeCardAction||this.codeToggler},hasHeader:function(){return this.hasAction||this.title||this.subtitle},StyleItems:function(){return{maxHeight:this.maxHeight}},cardStyles:function(){var t={maxHeight:this.cardMaxHeight};return y.isColor(this.cardBackground)||(t.background=y.getColor(this.cardBackground)),y.isColor(this.contentColor)||(t.color=y.getColor(this.contentColor)),t},codeContainerStyles:function(){return{maxHeight:this.codeContainerMaxHeight}},cardClasses:function(){var t="";return y.isColor(this.cardBackground)&&(t+=" bg-".concat(this.cardBackground)),y.isColor(this.contentColor)&&(t+=" text-".concat(this.contentColor)),t.trim()},titleStyles:function(){return{color:y.getColor(this.titleColor)}},titleClasses:function(){var t="";return y.isColor(this.titleColor)&&(t+=" text-".concat(this.titleColor)),t.trim()},subtitleStyles:function(){var t={};return y.isColor(this.subtitleColor)||(t.color=y.getColor(this.subtitleColor)),t},subtitleClasses:function(){var t="";return y.isColor(this.subtitleColor)&&(t+=" text-".concat(this.subtitleColor)),t.trim()}},methods:{toggleContent:function(){var t=this;this.$refs.content.style.overflow="hidden";var e=this.$refs.content.scrollHeight;"1.5rem"==this.maxHeight?(this.maxHeight="".concat(e,"px"),setTimeout((function(){t.maxHeight="none",t.$refs.content.style.overflow="hidden"}),300)):(this.maxHeight="".concat(e,"px"),setTimeout((function(){t.maxHeight="1.5rem",t.$refs.content.style.overflow="hidden"}),50)),this.isContentCollapsed=!this.isContentCollapsed,this.$emit("toggleCollapse",this.isContentCollapsed)},refreshcard:function(){this.$vs.loading({container:this.$refs.content,scale:.5}),this.tempHidden=!0,this.$emit("refresh",this)},removeRefreshAnimation:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;setTimeout((function(){t.$vs.loading.close(t.$refs.content),t.tempHidden=!1}),e)},removeCard:function(){var t=this,e=this.$refs.card.scrollHeight;this.cardMaxHeight="".concat(e,"px"),this.$el.style.overflow="hidden",setTimeout((function(){t.cardMaxHeight="0px"}),50),this.$emit("remove")},toggleCode:function(){var t=this;this.tempHidden=!0,this.showCode=!this.showCode;var e=this.$refs.codeContainer.scrollHeight;"0px"==this.codeContainerMaxHeight?(this.codeContainerMaxHeight="".concat(e,"px"),setTimeout((function(){t.codeContainerMaxHeight="none",t.tempHidden=!1}),300)):(this.codeContainerMaxHeight="".concat(e,"px"),setTimeout((function(){t.codeContainerMaxHeight="0px",t.tempHidden=!1}),150))}},components:{Prism:S.a}},I=R,B=(n("89b8"),Object(h["a"])(I,E,k,!1,null,null,null)),P=B.exports,O=function(t,e){var n=e._c;return n("ul",{staticClass:"list"},e._l(e.props.list,(function(t,o){return n("li",{key:o,staticClass:"list__item"},[n("feather-icon",{staticClass:"w-5 h-5 mr-1",attrs:{icon:e.props.icon}}),n("span",{domProps:{innerHTML:e._s(t)}})],1)})),0)},H=[],L={name:"vx-list",props:{list:{type:Array,required:!0},icon:{type:String,default:"ChevronsRightIcon"}}},M=L,N=(n("dca1"),Object(h["a"])(M,O,H,!0,null,null,null)),W=N.exports,$=function(t,e){var n=e._c;return n("div",{staticClass:"vx-breadcrumb",class:e.data.staticClass},[n("ul",{staticClass:"flex flex-wrap items-center"},[n("li",{staticClass:"inline-flex items-end"},[n("router-link",{attrs:{to:"/"}},[n("feather-icon",{attrs:{icon:"HomeIcon",svgClasses:"h-5 w-5 mb-1 stroke-current text-primary"}})],1),n("span",{staticClass:"breadcrumb-separator mx-2"},[n("feather-icon",{attrs:{icon:"ChevronsRightIcon",svgClasses:"w-4 h-4"}})],1)],1),e._l(e.props.route.meta.breadcrumb.slice(1,-1),(function(t,o){return n("li",{key:o,staticClass:"inline-flex items-center"},[t.url?n("router-link",{attrs:{to:t.url}},[e._v(e._s(t.title))]):n("span",{staticClass:"text-primary cursor-default"},[e._v(e._s(t.title))]),n("span",{staticClass:"breadcrumb-separator mx-2 flex items-start"},[n("feather-icon",{attrs:{icon:"ChevronsRightIcon",svgClasses:"w-4 h-4"}})],1)],1)})),n("li",{staticClass:"inline-flex"},[e.props.route.meta.breadcrumb.slice(-1)[0].active?n("span",{staticClass:"cursor-default"},[e._v(e._s(e.props.route.meta.breadcrumb.slice(-1)[0].title))]):e._e()])],2)])},D=[],U={name:"vx-breadcrumb"},j=U,V=Object(h["a"])(j,$,D,!0,null,null,null),G=V.exports,Y=n("0a35"),F={functional:!0,name:"feather-icon",props:{icon:{required:!0},svgClasses:{type:[String,Object,Array],default:""},badge:{}},render:function(t,e){var n=e.props,o=e.data;o.staticClass?o.staticClass=o.staticClass+" feather-icon select-none relative":o.staticClass="feather-icon select-none relative";var i=t(Y[n.icon],{class:n.svgClasses}),r=t("span",{class:"feather-icon-badge bg-primary text-white h-5 w-5 absolute rounded-full text-xs flex items-center justify-center",style:"top: -7px; right: -5px"},[n.badge]),a=[i];return n.badge&&a.push(r),t("span",o,a)}},z=F,J=(n("9943"),Object(h["a"])(z,o,i,!1,null,null,null)),q=J.exports,K=function(t,e){var n=e._c;return n("div",{staticClass:"vx-input-group flex",class:e.data.staticClass},[e.slots().prepend?n("div",{staticClass:"vx-input-group-prepend flex",class:e.props.prependClasses},[e._t("prepend")],2):e._e(),n("div",{staticClass:"vx-input-group-default flex-grow"},[e._t("default")],2),e.slots().append?n("div",{staticClass:"vx-input-group-append flex",class:e.props.appendClasses},[e._t("append")],2):e._e()])},X=[],Q={name:"vx-input-group",props:{prependClasses:{type:String},appendClasses:{type:String}}},Z=Q,tt=(n("a4fc"),Object(h["a"])(Z,K,X,!0,null,null,null)),et=tt.exports,nt=n("4a7a"),ot=n.n(nt);r["default"].component(A.name,A),r["default"].component(P.name,P),r["default"].component(W.name,W),r["default"].component(G.name,G),r["default"].component(q.name,q),r["default"].component(et.name,et),ot.a.props.components.default=function(){return{Deselect:{render:function(t){return t("feather-icon",{props:{icon:"XIcon",svgClasses:"w-4 h-4 mt-1"}})}},OpenIndicator:{render:function(t){return t("feather-icon",{props:{icon:"ChevronDownIcon",svgClasses:"w-5 h-5"}})}}}},r["default"].component(ot.a);n("c1c3"),n("5aea");var it=n("8c4f");r["default"].use(it["a"]);var rt=new it["a"]({mode:"hash",base:"/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"",component:function(){return n.e("chunk-c6e9edc6").then(n.bind(null,"f135"))},children:[{path:"/",name:"home",component:function(){return n.e("chunk-1972157c").then(n.bind(null,"bb51"))}},{path:"/bagholders",name:"bagholders",component:function(){return n.e("chunk-ffccf694").then(n.bind(null,"8be7"))}},{path:"/bagholders/:id",name:"bagholder",meta:{parent:"bagholders"},component:function(){return n.e("chunk-22f85aae").then(n.bind(null,"6ba4"))}},{path:"/debug",name:"debug",component:function(){return n.e("chunk-df5a37e0").then(n.bind(null,"49e8"))}},{path:"/monitor",name:"monitor",component:function(){return n.e("chunk-ab1e13c8").then(n.bind(null,"b3e2"))}},{path:"/settings",name:"settings",component:function(){return n.e("chunk-bf2ec1ca").then(n.bind(null,"61c2"))}}]},{path:"",component:function(){return n.e("chunk-2d22c341").then(n.bind(null,"f1dd"))},children:[{path:"/pages/login",name:"page-login",component:function(){return n.e("chunk-8129d6b2").then(n.bind(null,"8b48"))}},{path:"/pages/error-404",name:"page-error-404",component:function(){return n.e("chunk-634c71cd").then(n.bind(null,"c0ba"))}}]},{path:"*",redirect:"/pages/error-404"}]});rt.afterEach((function(){var t=document.getElementById("loading-bg");t&&(t.style.display="none")}));var at=rt,st=n("2f62"),ct={actionIcon:"StarIcon",highlightColor:"warning",data:[{index:0,label:"Home",url:"/",labelIcon:"HomeIcon",highlightAction:!1},{index:1,label:"Page 2",url:"/page2",labelIcon:"FileIcon",highlightAction:!1}]},lt={uid:0,displayName:"John Doe",about:"Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",photoURL:n("ce9f"),status:"online",userRole:"admin"},dt={AppActiveUser:lt,bodyOverlay:!1,isVerticalNavMenuActive:!0,mainLayoutType:l["a"].mainLayoutType||"vertical",navbarSearchAndPinList:ct,reduceButton:l["a"].sidebarCollapsed,verticalNavMenuWidth:"default",verticalNavMenuItemsMin:!1,scrollY:0,starredPages:ct.data.filter((function(t){return t.highlightAction})),theme:l["a"].theme||"light",themePrimaryColor:l["a"].primary,windowWidth:null},ut=dt,ht={windowBreakPoint:function(t){return t.windowWidth>=1200?"xl":t.windowWidth>=992?"lg":t.windowWidth>=768?"md":t.windowWidth>=576?"sm":"xs"}},ft=ht,pt=(n("ac6a"),n("456d"),n("20d6"),{TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE:function(t,e){t.isVerticalNavMenuActive=e},TOGGLE_REDUCE_BUTTON:function(t,e){t.reduceButton=e},UPDATE_MAIN_LAYOUT_TYPE:function(t,e){t.mainLayoutType=e},UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN:function(t,e){t.verticalNavMenuItemsMin=e},UPDATE_VERTICAL_NAV_MENU_WIDTH:function(t,e){t.verticalNavMenuWidth=e},UPDATE_STARRED_PAGE:function(t,e){var n=t.navbarSearchAndPinList.data.findIndex((function(t){return t.index==e.index}));if(t.navbarSearchAndPinList.data[n].highlightAction=e.val,e.val)t.starredPages.push(t.navbarSearchAndPinList.data[n]);else{var o=t.starredPages.findIndex((function(t){return t.index==e.index}));t.starredPages.splice(o,1)}},ARRANGE_STARRED_PAGES_LIMITED:function(t,e){var n=t.starredPages.slice(10);t.starredPages=e.concat(n)},ARRANGE_STARRED_PAGES_MORE:function(t,e){var n=!1,o=t.starredPages[10],i=t.starredPages.slice(0,10);t.starredPages=i.concat(e),t.starredPages.slice(0,10).map((function(t){e.indexOf(t)>-1&&(n=!0)})),n||t.starredPages.splice(10,0,o)},TOGGLE_CONTENT_OVERLAY:function(t,e){t.bodyOverlay=e},UPDATE_PRIMARY_COLOR:function(t,e){t.themePrimaryColor=e},UPDATE_THEME:function(t,e){t.theme=e},UPDATE_WINDOW_WIDTH:function(t,e){t.windowWidth=e},UPDATE_WINDOW_SCROLL_Y:function(t,e){t.scrollY=e},UPDATE_USER_INFO:function(t,e){for(var n=JSON.parse(localStorage.getItem("userInfo"))||t.AppActiveUser,o=0,i=Object.keys(e);o<i.length;o++){var r=i[o];null!=e[r]&&(t.AppActiveUser[r]=e[r],n[r]=e[r])}localStorage.setItem("userInfo",JSON.stringify(n))}}),gt=pt,mt={updateVerticalNavMenuWidth:function(t,e){var n=t.commit;n("UPDATE_VERTICAL_NAV_MENU_WIDTH",e)},updateStarredPage:function(t,e){var n=t.commit;n("UPDATE_STARRED_PAGE",e)},arrangeStarredPagesLimited:function(t,e){var n=t.commit;n("ARRANGE_STARRED_PAGES_LIMITED",e)},arrangeStarredPagesMore:function(t,e){var n=t.commit;n("ARRANGE_STARRED_PAGES_MORE",e)},toggleContentOverlay:function(t){var e=t.commit;e("TOGGLE_CONTENT_OVERLAY")},updateTheme:function(t,e){var n=t.commit;n("UPDATE_THEME",e)},updateUserInfo:function(t,e){var n=t.commit;n("UPDATE_USER_INFO",e)}},vt=mt,bt={namespaced:!0,state:{wifiList:[],currentWifi:null,baseColor:175.82130731969337,errorColor:359.44533323151444,mdm:!0},mutations:{setWifiList:function(t,e){t.wifiList=e},setCurrentWifi:function(t,e){t.currentWifi=e},setBaseColor:function(t,e){t.baseColor=e},setErrorColor:function(t,e){t.errorColor=e},setMdm:function(t,e){t.mdm=e}},actions:{setWifi:function(t,e){var n=t.commit;n("setWifiList",e.list),n("setCurrentWifi",e.current)},setBaseColor:function(t,e){var n=t.commit;n("setBaseColor",e)},setErrorColor:function(t,e){var n=t.commit;n("setErrorColor",e)},setMdm:function(t,e){var n=t.commit;n("setMdm",e)}}},Ct={namespaced:!0,state:{list:[]},mutations:{add:function(t,e){30===t.list.length&&t.list.splice(29,1),t.list.unshift(e)}},actions:{add:function(t,e){var n=t.commit;n("add",e)}}},yt=(n("7514"),n("2fdb"),{namespaced:!0,state:{online:[],list:[]},getters:{isOnline:function(t){return function(e){return!!t.online.includes(e)}},newList:function(t){var e=t.list.map((function(t){return t.id}));return t.online.filter((function(t){return!e.includes(t)}))},getId:function(t){return function(e){return t.list.find((function(t){return t.id===e}))}}},mutations:{setOnline:function(t,e){t.online=e},setList:function(t,e){t.list=e}},actions:{setOnline:function(t,e){var n=t.commit;n("setOnline",e)},setList:function(t,e){var n=t.commit;n("setList",e)}}}),_t={settings:bt,httpLog:Ct,bagholders:yt};r["default"].use(st["a"]);var xt=new st["a"].Store({getters:ft,mutations:gt,state:ut,actions:vt,modules:_t,strict:!1}),wt=n("6591"),At=(n("c197"),n("84bf"),n("bc3a")),Et=n.n(At),kt=n("8055"),Tt=n.n(kt);r["default"].use(m.a),r["default"].use(wt["VueHammer"]),n("3a10"),r["default"].config.productionTip=!1;var St=Et.a.create({baseURL:"/api/v1/"});r["default"].prototype.$http=St,St.get("/wifi").then((function(t){xt.dispatch("settings/setWifi",t.data)})),St.get("/settings").then((function(t){xt.dispatch("settings/setBaseColor",t.data.baseColor.hue),xt.dispatch("settings/setErrorColor",t.data.errorColor.hue),xt.dispatch("settings/setMdm",t.data.mdm)})),St.get("/bagholders").then((function(t){xt.dispatch("bagholders/setList",t.data)})),St.get("/bagholders/online").then((function(t){xt.dispatch("bagholders/setOnline",t.data)}));var Rt=Tt()("/");r["default"].prototype.$io=Rt,Rt.on("disconnect",(function(){xt.dispatch("bagholders/setOnline",[])})),Rt.on("setting:wifi:scan",(function(t){xt.dispatch("settings/setWifi",t)})),Rt.on("settings:color:set:base",(function(t){xt.dispatch("settings/setBaseColor",t.hue)})),Rt.on("settings:color:set:error",(function(t){xt.dispatch("settings/setErrorColor",t.hue)})),Rt.on("settings:mdm:set",(function(t){xt.dispatch("settings/setMdm",t)})),Rt.on("log:http",(function(t){xt.dispatch("httpLog/add",t)})),Rt.on("bagholders:online",(function(t){xt.dispatch("bagholders/setOnline",t)})),Rt.on("bagholders:update",(function(t){xt.dispatch("bagholders/setList",t)})),new r["default"]({router:at,store:xt,render:function(t){return t(p)}}).$mount("#app")},"5aea":function(t,e,n){},"64a9":function(t,e,n){},"89b8":function(t,e,n){"use strict";var o=n("e8ae"),i=n.n(o);i.a},9943:function(t,e,n){"use strict";var o=n("4363"),i=n.n(o);i.a},a4fc:function(t,e,n){"use strict";var o=n("e84c"),i=n.n(o);i.a},c1c3:function(t,e,n){},ce9f:function(t,e,n){t.exports=n.p+"img/avatar-s-11.51a23c07.png"},dca1:function(t,e,n){"use strict";var o=n("41a6"),i=n.n(o);i.a},e84c:function(t,e,n){},e8ae:function(t,e,n){}});
//# sourceMappingURL=app.81f46ae7.js.map