(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1de46ef4":"c18e1d54","chunk-01502b60":"a1d2f11d","chunk-4103aec8":"7c22741e","chunk-36e430c6":"9cbecf20","chunk-6d0a0471":"e6cc38b0","chunk-dd2420aa":"e098cca9"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-1de46ef4":1,"chunk-01502b60":1,"chunk-4103aec8":1,"chunk-36e430c6":1,"chunk-6d0a0471":1,"chunk-dd2420aa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1de46ef4":"c7af056b","chunk-01502b60":"8837df34","chunk-4103aec8":"8e77aa7d","chunk-36e430c6":"0ec0cdb3","chunk-6d0a0471":"05bc76b6","chunk-dd2420aa":"dfdc0ee9"}[e]+".css",i=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],m.parentNode.removeChild(m),n(o)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"096f":function(e,t,n){"use strict";n("d80b")},"1bc2":function(e,t,n){"use strict";n("9d05")},2100:function(e,t,n){},3794:function(e,t,n){},"3afa":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("appbar",{staticClass:"z-index"}),n("v-main",{staticClass:"pb-md-15 pt-md-0 overflow-hidden-x background"},[n("keep-alive",{attrs:{include:["Home","Profile"]}},[n("router-view")],1)],1),n("speed-dial"),n("navbar",{staticClass:"d-none d-sm-flex z-index"})],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-app-bar",{staticClass:"navbar",attrs:{"elevate-on-scroll":"",app:"",elevation:e.hideOnScroll?4:"",collapse:e.hideOnScroll,"hide-on-scroll":e.hideOnScroll}},[r("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:function(t){e.drawer=!0}}}),r("v-toolbar-title",{staticClass:"font-weight-bold pl-0 font-weight-light pointer nocopy",on:{click:function(t){return e.goToHome()}}},[r("v-img",{staticClass:"logoImg",attrs:{src:n("cf05"),height:"30",width:"115"}})],1),r("v-spacer"),r("v-dialog",{staticClass:"transparent",attrs:{"overlay-opacity":"0.9",width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",e._g(e._b({staticClass:"mr-1",attrs:{icon:""}},"v-btn",a,!1),n),[r("v-icon",{attrs:{color:"white"}},[e._v("mdi-magnify")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{staticClass:"pa-1 px-4 rounded elevation-24"},[r("v-form",{ref:"searchForm",on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[r("v-card-actions",[r("v-text-field",{attrs:{spellcheck:"false",placeholder:"Search...",autofocus:"",rules:e.rules},on:{input:e.watchButtonState},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),r("v-btn",{staticClass:"ml-2",attrs:{icon:"",large:"",color:"navbar",type:"submit",disabled:e.buttonDisabled}},[r("v-icon",[e._v("mdi-send")])],1)],1)],1)],1)],1),r("v-btn",{staticClass:"mr-1 d-md-none",attrs:{icon:"",to:"/profile"}},[r("v-icon",{attrs:{color:"white"}},[e._v("mdi-account")])],1)],1),r("v-navigation-drawer",{attrs:{"overlay-opacity":"0.8",app:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list-item",{staticClass:"navbar"},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"title pointer",on:{click:function(t){return e.goToHome()}}},[r("center",[r("v-img",{staticClass:"logoImg",attrs:{src:n("cf05"),height:"30",width:"115"}})],1)],1)],1)],1),r("v-divider"),r("v-list",{attrs:{nav:""}},[r("v-list-item-group",{attrs:{"active-class":""},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[e._l(e.navLinks,(function(t){return r("v-list-item",{key:t.title,attrs:{to:t.routePath}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"primary"}},[e._v(e._s(t.icon))])],1),r("v-list-item-title",{staticClass:"primary--text"},[e._v(e._s(t.title))])],1)})),r("v-list-item",{on:{click:e.changeTheme}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"primary"}},[e._v(" mdi-theme-light-dark ")])],1),r("v-list-item-title",{staticClass:"primary--text"},[e._v(" Change Theme ")])],1)],2)],1)],1)],1)},s=[],c={data:function(){return{buttonDisabled:!0,drawer:!1,group:null,navLinks:this.$store.state.navLinks,dialog:!1,searchText:"",searchPlaceholder:"Search manga",colors:this.$store.state.colors,hideOnScroll:!0,rules:[function(e){return!!e||"Required"},function(e){return(e||"").length<=20||"Max 20 characters"}]}},watch:{dialog:function(e){var t=this;e||setTimeout((function(){t.$refs.searchForm.reset()}),200)}},methods:{changeTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},watchButtonState:function(){this.$refs.searchForm.validate()?this.buttonDisabled=!1:this.buttonDisabled=!0},goToHome:function(){this.$router.push("/").catch((function(e){}))},search:function(){this.$refs.searchForm.validate()&&(this.dialog=!1,this.$router.push({path:"/search",query:{search:this.searchText}}))},setHideOnScroll:function(){this.hideOnScroll=window.innerWidth>960}},computed:{searchQuery:function(){return this.searchText.toLowerCase()}},mounted:function(){this.setHideOnScroll(),window.addEventListener("resize",this.setHideOnScroll)},beforeDestroy:function(){window.removeEventListener("resize",this.setHideOnScroll)}},l=c,u=(n("695e"),n("2877")),d=n("6544"),m=n.n(d),p=n("40dc"),h=n("5bc1"),f=n("8336"),g=n("b0af"),v=n("99d9"),b=n("169a"),y=n("ce7e"),x=n("4bd4"),w=n("132d"),C=n("adda"),k=n("8860"),_=n("da13"),I=n("5d23"),T=n("1baa"),S=n("34c3"),V=n("f774"),$=n("2fa4"),E=n("8654"),j=n("2a7f"),P=Object(u["a"])(l,o,s,!1,null,null,null),O=P.exports;m()(P,{VAppBar:p["a"],VAppBarNavIcon:h["a"],VBtn:f["a"],VCard:g["a"],VCardActions:v["a"],VDialog:b["a"],VDivider:y["a"],VForm:x["a"],VIcon:w["a"],VImg:C["a"],VList:k["a"],VListItem:_["a"],VListItemContent:I["a"],VListItemGroup:T["a"],VListItemIcon:S["a"],VListItemTitle:I["b"],VNavigationDrawer:V["a"],VSpacer:$["a"],VTextField:E["a"],VToolbarTitle:j["a"]});var L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-bottom-navigation",{staticClass:"align-center elevation-0",attrs:{app:"",id:"nav",fixed:"",shift:""},model:{value:e.currentBtn,callback:function(t){e.currentBtn=t},expression:"currentBtn"}},[n("div",{staticClass:"navbarBtns navbar rounded-t elevation-24"},e._l(e.navLinks,(function(t,r){return n("v-tooltip",{key:r,attrs:{top:"",height:"100%"},scopedSlots:e._u([{key:"activator",fn:function(a){var i=a.on,o=a.attrs;return[n("v-btn",e._g(e._b({class:e.colors[t.colorProp].text,attrs:{to:t.routePath}},"v-btn",o,!1),i),[n("span",[e._v(e._s(t.title))]),n("v-icon",{attrs:{color:r===e.currentBtn?"":"white"}},[e._v(e._s(t.icon))])],1)]}}],null,!0)},[n("span",[e._v(e._s(t.title))])])})),1)])},A=[],M={computed:{navLinks:function(){return this.$store.state.navLinks},colors:function(){return this.$store.state.colors}},data:function(){return{currentBtn:2}}},N=M,B=(n("b6ae"),n("b81c")),R=n("3a2f"),D=Object(u["a"])(N,L,A,!1,null,"db2a64c6",null),F=D.exports;m()(D,{VBottomNavigation:B["a"],VBtn:f["a"],VIcon:w["a"],VTooltip:R["a"]});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-speed-dial",{staticClass:"d-fixed d-sm-none",attrs:{fixed:"",app:"",bottom:"",right:"",direction:"top"},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{elevation:"24",large:"",color:"navbar white--text",fab:""}},[e.fab?n("v-icon",[e._v(" mdi-close ")]):n("v-icon",[e._v(" mdi-menu ")])],1)]},proxy:!0}]),model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[n("v-btn",{staticClass:"navbar white--text",attrs:{fab:"",medium:"",color:"#4a4a4a"},on:{click:e.scrollToTop}},[n("v-icon",[e._v("mdi-arrow-up")])],1),e._l(e.navLinks,(function(t){return n("v-btn",{key:t.title,attrs:{fab:"",small:"",dark:"",to:t.routePath,color:e.colors[t.title.toLowerCase()].block}},[n("v-icon",[e._v(e._s(t.icon))])],1)}))],2)},q=[],G={data:function(){return{fab:!1,navLinks:this.$store.state.navLinks,colors:this.$store.state.colors}},methods:{scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},z=G,U=n("c73b"),W=Object(u["a"])(z,H,q,!1,null,null,null),Q=W.exports;m()(W,{VBtn:f["a"],VIcon:w["a"],VSpeedDial:U["a"]});var J={name:"App",components:{Navbar:F,Appbar:O,SpeedDial:Q},mounted:function(){var e=this.$cookies.get("user");e&&this.$store.commit("setUser",e)}},K=J,X=(n("5c0b"),n("7496")),Y=n("f6c4"),Z=Object(u["a"])(K,a,i,!1,null,null,null),ee=Z.exports;m()(Z,{VApp:X["a"],VMain:Y["a"]});n("b0c0"),n("d3b7");var te=n("8c4f"),ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("typewriter-header"),n("trending-section",{ref:"animeSection",attrs:{sectionType:"anime"}}),n("trending-section",{attrs:{sectionType:"manga"}}),n("fluid-media-list")],1)},re=[],ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"mb-0 pa-0",attrs:{fluid:""}},[n("v-row",{staticClass:"fill-height my-10 flex-column",attrs:{align:"center",justify:"center"}},[n("h1",{staticClass:"primary--text"},[e._v(" Anivue"),n("span",{staticClass:"light-green--text text--accent-4"},[e._v(".")]),e._v("ru ")]),n("h1",{staticClass:"primary--text my-3"},[n("span",{staticClass:"font-weight-light"},[e._v("Explore ")]),n("span",{ref:"typed"})]),n("div",e._l(e.buttons,(function(t,r){return n("v-btn",{key:r,staticClass:"ma-3",attrs:{color:"navbar white--text",elevation:"5",to:{path:t.route}}},[e.md?n("span",[e._v(e._s(t.title))]):e._e(),n("v-icon",{attrs:{right:e.md}},[e._v(" "+e._s(t.icon)+" ")])],1)})),1)])],1)},ie=[],oe=n("f79d"),se=n.n(oe),ce={data:function(){return{md:window.innerWidth>=960,colors:this.$store.state.colors,buttons:[{title:"Manga",icon:this.$store.state.icons.manga,route:"/search/manga"},{title:"Anime",icon:this.$store.state.icons.anime,route:"/search/anime"},{title:"Characters",icon:this.$store.state.icons.characters,route:"/search/characters"}]}},methods:{setMd:function(){this.md=window.innerWidth>=960}},mounted:function(){window.addEventListener("resize",this.setMd),new se.a(this.$refs.typed,{strings:["<span class='".concat(this.colors.anime.text,"'>Anime</span>"),"<span class='".concat(this.colors.manga.text,"'>Manga</span>"),"<span class='".concat(this.colors.characters.text,"'>Characters</span>")],autoStart:!0,loop:!0,delay:100,deleteSpeed:30})},beforeDestroy:function(){window.removeEventListener("resize",this.setMd)}},le=ce,ue=(n("6f31"),n("a523")),de=n("0fd9"),me=Object(u["a"])(le,ae,ie,!1,null,"61228d58",null),pe=me.exports;m()(me,{VBtn:f["a"],VContainer:ue["a"],VIcon:w["a"],VRow:de["a"]});var he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-10"},[n("v-container",{staticClass:"mb-3"},[n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"8"}},[n("h2",[n("v-icon",{attrs:{color:"red"}},[e._v("mdi-fire")]),n("span",{staticClass:"font-weight-light primary--text"},[e._v(" Trending ")]),n("span",{class:e.colors.text},[e._v(e._s(e.sectionType))])],1)]),n("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"4"}},[n("v-btn",{staticClass:"white--text",attrs:{elevation:"24",color:e.colors.block,to:{name:"mediahome",params:{type:e.sectionType},query:{sort:"TRENDING_DESC"}}}},[e._v(" See more ")])],1)],1)],1),n("media-grid",{attrs:{loading:e.loading,media:e.mediaArray,limit:6,lgCols:2}})],1)},fe=[],ge=n("b50e"),ve=n("ed15"),be={components:{MediaGrid:ge["a"]},props:{sectionType:{type:String,default:"anime",required:!0}},computed:{colors:function(){return this.$store.state.colors[this.sectionType]}},data:function(){return{loading:!0,mediaArray:[],error:!1,errorMsg:null}},created:function(){var e=this;this.loading=!0;var t={type:this.sectionType,pageNumber:1,perPage:6,sortBy:"TRENDING_DESC"};Object(ve["d"])(t).then((function(t){if(!t.res.ok)throw Error(t.res.status);e.mediaArray=t.data.Page.media,e.loading=!1,e.error=!1})).catch((function(t){e.error=!0,e.errorMsg=t.message}))}},ye=be,xe=(n("5ae4"),n("62ad")),we=Object(u["a"])(ye,he,fe,!1,null,"1f6a8ba8",null),Ce=we.exports;m()(we,{VBtn:f["a"],VCol:xe["a"],VContainer:ue["a"],VIcon:w["a"],VRow:de["a"]});var ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center mb-6"},[n("h5",{staticClass:"text-h4 mb-3 font-weight-light primary--text"},[e._v(" Top 10 "),n("span",{staticClass:"font-weight-bold",class:e.colors[e.type.toLowerCase()].text},[e._v(e._s(e.title))]),n("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"ml-2",attrs:{icon:""},on:{click:e.switchTab}},"v-btn",a,!1),r),[n("v-icon",{attrs:{color:"primary"}},[e._v(" "+e._s(e.mediaIcon)+" ")])],1)]}}])},[n("span",[e._v("Swtitch to "+e._s(e.nextTab))])])],1),n("p",{staticClass:"text-subtitle secondary--text"},[e._v(" Based on users rating ")])]),e.loading?n("v-col",{attrs:{cols:"12"}},e._l(e.media,(function(e,t){return n("fluid-media-item-loader",{key:t,attrs:{index:t}})})),1):n("v-col",{attrs:{cols:"12"}},e._l(e.media,(function(t,r){return n("fluid-media-item",{key:r,attrs:{loading:e.loading,index:r,media:t}})})),1)],1)],1)},_e=[],Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"mediaCard",staticClass:"d-flex my-5 card"},[n("div",{staticClass:"mr-5 index d-md-flex d-none justify-center align-center"},[n("p",{staticClass:"text-h5 ma-0 pa-0 nocopy"},[n("span",{staticClass:"hashtag secondary--text"},[e._v("#")]),n("span",{staticClass:"number primary--text"},[e._v(e._s(e.index+1))])])]),n("v-card",{staticClass:"pa-2 flex-grow-1 d-flex mediaCard",attrs:{to:{name:"mediafullpage",params:{type:e.type,id:e.id}},elevation:"1"}},[n("div",{staticClass:"coverImage d-flex justify-center align-center cursor"},[n("v-badge",{attrs:{color:e.media.coverImage.color,left:"",bordered:"",overlap:"",content:e.index+1,value:e.showBadge}},[n("v-img",{staticClass:"mr-2",attrs:{"aspect-ratio":.8,width:"50",height:"70",src:e.media.coverImage.medium}})],1)],1),n("div",{staticClass:"mediaInfo pa-2 d-flex justify-space-between"},[n("div",{staticClass:"mediaMain d-flex flex-column justify-space-around"},[n("div",{staticClass:"mediaTitle cursor primary--text"},[n("span",{ref:"mediaCardTitle",staticClass:"cardTitle d-md-inline d-none font-weight-bold"},[e._v(e._s(e.title))]),n("span",{staticClass:"d-md-none font-weight-bold"},[e._v(e._s(e.trimmedTitle))])]),n("media-card-genres",{attrs:{media:e.media}})],1),n("div",{staticClass:"mediaRating d-flex flex-column justify-center align-center"},[n("v-icon",{attrs:{color:e.ratingIconColor}},[e._v(" mdi-robot-happy ")]),n("strong",[n("span",{class:e.ratingScoreColor},[e._v(" "+e._s(e.media.averageScore)+" ")])])],1)])])],1)},Te=[],Se=(n("99af"),n("fb6a"),n("a9e3"),n("7136")),Ve={components:{MediaCardGenres:Se["a"]},props:{index:{type:[Number,String],required:!0},media:{type:Object,required:!0}},computed:{title:function(){return this.media.title.english||this.media.title.romaji},ratingIconColor:function(){return this.getRatingColor().iconColor},ratingScoreColor:function(){return this.getRatingColor().textColor},trimmedTitle:function(){var e=this.title;return"".concat(e.slice(0,22)).concat(e.length>22?"...":"")},showBadge:function(){var e=window.innerWidth;return e<=600},type:function(){return this.media.type.toLowerCase()},id:function(){return this.media.id}},methods:{getRatingColor:function(){var e=this.media.averageScore,t=this.$store.state.colors.score,n="",r="";return e>=t.super.score?(n=t.super.text,r=t.super.icon):e>=t.good.score?(n=t.good.text,r=t.good.icon):e>=t.meh.score?(n=t.meh.text,r=t.meh.icon):e>t.bad.score?(n=t.bad.text,r=t.bad.icon):(n=t.none.text,r=t.none.icon),{textColor:n,iconColor:r}}},mounted:function(){var e=this;this.$refs.mediaCard.addEventListener("mouseenter",(function(){e.$refs.mediaCardTitle.style.color=e.media.coverImage.color})),this.$refs.mediaCard.addEventListener("mouseleave",(function(){e.$refs.mediaCardTitle.style.color=""}))}},$e=Ve,Ee=(n("b58b"),n("4ca6")),je=Object(u["a"])($e,Ie,Te,!1,null,"85ab1e08",null),Pe=je.exports;m()(je,{VBadge:Ee["a"],VCard:g["a"],VIcon:w["a"],VImg:C["a"]});var Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex my-5 card"},[n("div",{staticClass:"mr-5 index d-md-flex d-none justify-center align-center"},[n("p",{staticClass:"text-h5 ma-0 pa-0 nocopy"},[n("span",{staticClass:"hashtag secondary--text"},[e._v("#")]),n("span",{staticClass:"number primary--text"},[e._v(e._s(e.index+1))])])]),n("div",{staticClass:"flex-grow-1 d-flex"},[n("v-skeleton-loader",{staticStyle:{width:"100%",height:"100%"},attrs:{type:"image"}})],1)])},Le=[],Ae={props:{index:{type:Number,required:!0}}},Me=Ae,Ne=(n("1bc2"),n("3129")),Be=Object(u["a"])(Me,Oe,Le,!1,null,"4ffbc4b4",null),Re=Be.exports;m()(Be,{VSkeletonLoader:Ne["a"]});var De={components:{FluidMediaItem:Pe,FluidMediaItemLoader:Re},data:function(){return{media:Array(10),colors:this.$store.state.colors,mangaIcon:this.$store.state.icons.manga,animeIcon:this.$store.state.icons.anime,type:"ANIME",loading:!0}},computed:{mediaIcon:function(){return"ANIME"===this.type?this.animeIcon:this.mangaIcon},title:function(){return"ANIME"===this.type?"Anime":"Manga"},nextTab:function(){return"ANIME"===this.type?"Manga":"Anime"}},methods:{switchTab:function(){"ANIME"===this.type?this.type="MANGA":this.type="ANIME"},fetchMedia:function(){var e=this;this.loading=!0;var t={sortBy:"SCORE_DESC",type:this.type,pageNumber:1,perPage:10};Object(ve["d"])(t).then((function(t){e.media=t.data.Page.media,e.loading=!1})).catch((function(e){console.log(e)}))}},mounted:function(){this.fetchMedia()},watch:{type:{handler:function(){this.fetchMedia()}}}},Fe=De,He=Object(u["a"])(Fe,ke,_e,!1,null,null,null),qe=He.exports;m()(He,{VBtn:f["a"],VCol:xe["a"],VContainer:ue["a"],VIcon:w["a"],VRow:de["a"],VTooltip:R["a"]});var Ge={name:"Home",components:{TrendingSection:Ce,TypewriterHeader:pe,FluidMediaList:qe}},ze=Ge,Ue=Object(u["a"])(ze,ne,re,!1,null,null,null),We=Ue.exports,Qe=n("323e"),Je=n.n(Qe);r["a"].use(te["a"]);var Ke=[{path:"/",redirect:"/home"},{path:"/search",name:"search",component:function(){return n.e("chunk-6d0a0471").then(n.bind(null,"2d3b"))},props:!0},{path:"/home",name:"home",component:We},{path:"/search/:type",name:"mediahome",component:function(){return n.e("chunk-dd2420aa").then(n.bind(null,"a097"))},props:!0},{path:"/search/:type/:id",name:"mediafullpage",component:function(){return Promise.all([n.e("chunk-1de46ef4"),n.e("chunk-4103aec8")]).then(n.bind(null,"b37d"))},props:!0},{path:"/404",name:"404",component:function(){return n.e("chunk-36e430c6").then(n.bind(null,"9703"))}},{path:"/profile(&.*)?",name:"profile",component:function(){return Promise.all([n.e("chunk-1de46ef4"),n.e("chunk-01502b60")]).then(n.bind(null,"c66d"))}},{path:"*",name:"notfound",redirect:"/404"}],Xe=new te["a"]({base:"/",routes:Ke,scrollBehavior:function(){return{x:0,y:0}}});Xe.beforeResolve((function(e,t,n){e.name&&Je.a.start(),n()})),Xe.afterEach((function(){Je.a.done()}));var Ye=Xe,Ze=n("2f62");r["a"].use(Ze["a"]);var et=new Ze["a"].Store({state:{anilistClientId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_ANILIST_CLIENT_ID,user:{loggedIn:!1,token:null,data:{}},navLinks:[{title:"Characters",routePath:"/search/characters",icon:"mdi-human-handsup",colorProp:"characters"},{title:"Anime",routePath:"/search/anime",icon:"mdi-movie",colorProp:"anime"},{title:"Home",routePath:"/home",icon:"mdi-home",colorProp:"home"},{title:"Manga",routePath:"/search/manga",icon:"mdi-book",colorProp:"manga"},{title:"Profile",routePath:"/profile",icon:"mdi-account",colorProp:"profile"}],icons:{anime:"mdi-movie",manga:"mdi-book",profile:"mdi-account",home:"mdi-home",characters:"mdi-human-handsup",episodes:"mdi-play-box-multiple",relations:"mdi-transit-connection-variant"},colors:{anime:{text:"red--text darken-1",block:"red darken-1"},manga:{text:"blue--text",block:"blue"},characters:{text:"pink--text text--lighten-2",block:"pink lighten-2"},home:{text:"light-green--text",block:"light-green"},profile:{text:"yellow--text lighten-1",block:"yellow lighten-1"},score:{super:{score:90,text:"green--text",icon:"green",iconValue:"mdi-robot-happy"},good:{score:70,text:"light-green--text",icon:"light-green",iconValue:"mdi-robot-happy"},meh:{score:50,text:"orange--text text--lighten-1",icon:"orange lighten-1",iconValue:"mdi-robot"},bad:{score:0,text:"red--text",icon:"red",iconValue:"mdi-robot-dead"},none:{text:"grey--text text-lighten-1",icon:"grey lighten-1",iconValue:"mdi-robot-confused"}},gradient:{bannerImage:{dark:"0deg, rgba(0,0,0,0.8225490025111607) 0%, rgba(255,255,255,0) 100%",light:"0deg, rgba(52,52,52,0.4402354691876751) 0%, rgba(179,179,179,0.18253238795518212) 100%"}}}},mutations:{setUser:function(e,t){e.user.loggedIn=t.loggedIn,e.user.token=t.token,e.user.data=t.data},clearUser:function(e){e.user={loggedIn:!1,token:null,data:{}}}},actions:{},modules:{}}),tt=(n("5363"),n("f309")),nt=n("fcf4");r["a"].use(tt["a"]);var rt=new tt["a"]({theme:{themes:{light:{primary:nt["a"].blueGrey.darken3,secondary:nt["a"].blueGrey.lighten1,accent:nt["a"].shades.white,navbar:nt["a"].blueGrey.darken3,background:nt["a"].blueGrey.lighten5,cardgenres:"#fff",description:nt["a"].blueGrey.darken1},dark:{primary:nt["a"].shades.white,secondary:nt["a"].grey.lighten1,navbar:"#333333",background:"#181818",cardgenres:"#1e1e1e",accent:"#333333",description:nt["a"].grey.lighten2}},dark:!1},icons:{iconfont:"mdi"}}),at=(n("d236"),n("2b27")),it=n.n(at);r["a"].config.productionTip=!1,r["a"].use(it.a),new r["a"]({router:Ye,store:et,vuetify:rt,render:function(e){return e(ee)}}).$mount("#app")},"5ae4":function(e,t,n){"use strict";n("fc10")},"5bed":function(e,t,n){"use strict";n("dca8"),n("d3b7"),n("96cf");var r=n("1da1"),a=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch.apply(void 0,r);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,Object.freeze(n),e.abrupt("return",{res:t,data:n.data});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t["a"]=a},"5c0b":function(e,t,n){"use strict";n("9c0c")},6326:function(e,t,n){},"66a0":function(e,t,n){"use strict";n("3794")},6930:function(e,t,n){},"695e":function(e,t,n){"use strict";n("6326")},"6f31":function(e,t,n){"use strict";n("b9ba")},7136:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex"},e._l(e.genres,(function(t,r){return n("v-chip",{key:r,staticClass:"mr-2 font-weight-bold mediaGenre",attrs:{small:"",color:e.media.coverImage.color,to:{name:"mediahome",params:{type:e.media.type.toLowerCase()},query:{genre:t}}}},[n("span",{style:{color:e.genreColor}},[e._v(" "+e._s(t)+" ")])])})),1)},a=[],i=(n("fb6a"),n("ac1f"),{props:{media:{type:Object,required:!0}},data:function(){return{genres:this.media.genres.slice(0,4),genreColor:"#fff"}},methods:{trimGenres:function(){var e=window.innerWidth>=960?4:2;this.genres=this.media.genres.slice(0,e)},getGenreColor:function(){var e=this.media.coverImage.color||"#ffffff";function t(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function n(e){var n=t(e),r=.2126*n["r"]+.7152*n["g"]+.0722*n["b"];return r<140?"#ffffff":"#8a2c0f"}return n(e)}},mounted:function(){this.genreColor=this.getGenreColor(),this.trimGenres(),window.addEventListener("resize",this.trimGenres)},beforeDestroy:function(){window.removeEventListener("resize",this.trimGenres)}}),o=i,s=(n("66a0"),n("2877")),c=n("6544"),l=n.n(c),u=n("cc20"),d=Object(s["a"])(o,r,a,!1,null,"cf43af70",null);t["a"]=d.exports;l()(d,{VChip:u["a"]})},"9c0c":function(e,t,n){},"9d05":function(e,t,n){},ac33:function(e,t,n){"use strict";n("6930")},b50e:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",[e.loading?n("v-row",e._l(e.limit,(function(t){return n("v-col",{key:t,attrs:{cols:"4",sm:"3",md:"2",xl:e.lgCols}},[n("v-skeleton-loader",{attrs:{type:"image",height:e.skeletonHeigth,elevation:"12"}})],1)})),1):n("v-row",e._l(e.media,(function(t,r){return n("v-col",{key:r,attrs:{cols:"4",sm:"3",md:"2",xl:e.lgCols}},[n("media-card",{attrs:{title:e.getCardTitle(t),mediaId:t.id,image:e.checkForLarge(t),imageLQ:e.checkForMedium(t),mediaType:e.getType(t),color:e.checkForColor(t)}})],1)})),1)],1)],1)},a=[],i=(n("a15b"),n("b0c0"),n("a9e3"),n("07ac"),n("ac1f"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"pointer mediaCard",attrs:{ripple:!1,to:{name:"mediafullpage",params:{type:e.mediaType,id:e.mediaId}},height:"100%",color:"transparent",elevation:"0"}},[n("center",[n("v-img",{ref:"cardImg",staticClass:"elevation-12 rounded",attrs:{"lazy-src":e.imageLQ,src:e.image,"max-height":"400","max-width":"240","aspect-ratio":.6},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),n("v-card-title",{staticClass:"secondary--text break-word text-caption text-sm-subtitle-1 bold-title font-weight-regular d-inline-block text-truncate px-0 pt-2 pt-sm-5 text-center",style:{"max-width":e.maxWidth}},[n("span",{staticClass:"cardTitle"},[e._v(" "+e._s(e.title)+" ")])])],1)],1)}),o=[],s={props:{title:{type:String,default:"NoTitle"},mediaId:{type:Number,default:0,requred:!0},image:{type:String,required:!0},imageLQ:{type:String,required:!0},mediaType:{type:String},color:{type:String}},methods:{trimTitle:function(){this.maxWidth="".concat(this.$refs.cardImg.$el.offsetWidth-15,"px")}},mounted:function(){window.addEventListener("resize",this.trimTitle),this.trimTitle()},beforeDestroy:function(){window.removeEventListener("resize",this.trimTitle)},updated:function(){this.trimTitle()},data:function(){return{maxWidth:"100px"}}},c=s,l=(n("096f"),n("2877")),u=n("6544"),d=n.n(u),m=n("b0af"),p=n("99d9"),h=n("adda"),f=n("490a"),g=n("0fd9"),v=Object(l["a"])(c,i,o,!1,null,"79b62560",null),b=v.exports;d()(v,{VCard:m["a"],VCardTitle:p["c"],VImg:h["a"],VProgressCircular:f["a"],VRow:g["a"]});var y={components:{MediaCard:b},props:{media:{type:[Object,Array]},loading:{type:Boolean,default:!0},limit:{type:Number,default:50},charactersGrid:{type:Boolean,default:!1},lgCols:{type:Number,default:1}},methods:{getTitle:function(e){return e.english?e.english:e.romaji},beatifyMediaFormat:function(e){return e.split("_").join(" ")},getCardTitle:function(e){return"characters"===this.getType(e)?Object.values(e.name).join(" "):this.getTitle(e.title)},checkForLarge:function(e){return"characters"===this.getType(e)?e.image.large:e.coverImage.extraLarge},checkForMedium:function(e){return"characters"===this.getType(e)?e.image.medium:e.coverImage.medium},checkForColor:function(e){if("characters"!==this.getType(e))return e.coverImage.color},getType:function(e){return"type"in e?e.type.toLowerCase():"characters"},resizeSkeletonHeight:function(){var e=window.innerWidth;this.skeletonHeigth=e>1904?230:e>600?300:170}},data:function(){return{skeletonHeigth:150}},mounted:function(){this.resizeSkeletonHeight(),window.addEventListener("resize",this.resizeSkeletonHeight)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeSkeletonHeight)}},x=y,w=(n("ac33"),n("62ad")),C=n("a523"),k=n("3129"),_=Object(l["a"])(x,r,a,!1,null,null,null);t["a"]=_.exports;d()(_,{VCol:w["a"],VContainer:C["a"],VRow:g["a"],VSkeletonLoader:k["a"]})},b58b:function(e,t,n){"use strict";n("2100")},b6ae:function(e,t,n){"use strict";n("3afa")},b9ba:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.a403524e.png"},d236:function(e,t,n){},d80b:function(e,t,n){},ed15:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return h})),n.d(t,"e",(function(){return g}));n("96cf");var r=n("1da1"),a=n("5bed"),i=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,i,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:null,r="https://graphql.anilist.co",i={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:t,variables:n})},e.next=4,Object(a["a"])(r,i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=i,s=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="\n        query ($id: Int, $type: MediaType) {\n            Media (id: $id, type: $type) {\n                title {\n                    english\n                    romaji\n                    native\n                }\n                status\n                startDate {\n                    year\n                }\n                type\n                genres\n                episodes\n                id\n                isFavourite\n                chapters\n                duration\n                status\n                nextAiringEpisode {\n                    airingAt\n                }\n                relations {\n                    nodes {\n                        id\n                        type\n                        title {\n                            english\n                            romaji\n                        }\n                        coverImage {\n                            extraLarge\n                            medium\n                            large\n                            color\n                        } \n                    }\n                }\n                description (asHtml: true)\n                startDate {\n                    day\n                    month\n                    year\n                }\n                endDate {\n                    day\n                    month\n                    year\n                }\n\n                coverImage {\n                    extraLarge\n                    medium\n                    color\n                }\n                bannerImage\n                averageScore\n                characters(sort: FAVOURITES_DESC) {\n                    nodes {\n                        name {\n                            first\n                            last\n                        }\n                        image {\n                            medium\n                            large\n                        }\n                        id\n                    }\n                }\n                streamingEpisodes {\n                    title\n                    thumbnail\n                    url\n                }\n            }\n        }\n    ",t=t.toUpperCase(),e.next=4,o(r,{id:n,type:t});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=s,l=(n("99af"),function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,s,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.type=t.type.toUpperCase(),n="sortBy"in t?"$sortBy: [MediaSort],":"",r=n?"sort: $sortBy,":"sort: FAVOURITES_DESC",a="title"in t?"$title: String,":"",i=a?"search: $title,":"",s="genre"in t?"$genre: String,":"",c=s?"genre: $genre,":"",l="\n        query (".concat(n," ").concat(a," ").concat(s," $type: MediaType $pageNumber: Int, $perPage: Int) {\n            Page (page: $pageNumber, perPage: $perPage) {\n                pageInfo {\n                    total\n                    currentPage\n                    hasNextPage\n                }\n                media (").concat(i," ").concat(r," ").concat(c," type: $type, isAdult: false) {\n                    id\n                    type\n                    status\n                    genres\n                    episodes\n                    chapters\n                    averageScore\n                    description (asHtml: true)\n                    format\n                    startDate {\n                        year\n                    }\n                    studios (isMain: true) {\n                        nodes {\n                            name\n                        }\n                    }\n                    title {\n                        english\n                        romaji\n                    }\n                    coverImage {\n                        medium\n                        large\n                        extraLarge\n                        color\n                    } \n                }\n            }\n        }\n    "),e.next=10,o(l,t);case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u=l,d=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="title"in t?"$title: String,":"",r=n?"search: $title,":"",a="\n        query (".concat(n," $pageNumber: Int, $perPage: Int) {\n            Page (page: $pageNumber, perPage: $perPage) {\n                pageInfo {\n                    total\n                    currentPage\n                    hasNextPage\n                }\n                characters (").concat(r," sort: FAVOURITES_DESC) {\n                    id\n                    name {\n                        first\n                        last\n                    }\n                    image {\n                        medium\n                        large\n                    }\n                }\n            }\n        }\n    "),e.next=5,o(a,t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=d,p=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="\n        query ($id: Int) {\n            Character (id: $id) {\n                name {\n                    first\n                    last\n                    native\n                }\n                image {\n                    medium\n                    large\n                }\n                isFavourite\n                id\n                description (asHtml: true)\n                media (page: 1, perPage: 25, sort: FAVOURITES_DESC) {\n                    nodes {\n                        id\n                        type\n                        title {\n                            romaji\n                            english\n                        }\n                        coverImage {\n                            extraLarge\n                            medium\n                            large\n                            color\n                        }\n                    }\n                }\n            }\n        }\n    ",e.next=3,o(n,{id:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=p,f=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,i,o,s,c,l,d,p,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={},i={},o={},s={type:"ANIME",title:r,page:t,perPage:n},c={type:"MANGA",title:r,page:t,perPage:n},l={title:r,page:t,perPage:n},e.next=8,u(s);case 8:return d=e.sent,d.res.ok?(a.error=!1,a.data=d.data.Page.media,a.found=d.data.Page.pageInfo.total):a.error=!0,e.next=12,u(c);case 12:return p=e.sent,p.res.ok?(i.error=!1,i.data=p.data.Page.media,i.found=p.data.Page.pageInfo.total):i.error=!0,e.next=16,m(l);case 16:return h=e.sent,h.res.ok?(o.error=!1,o.data=h.data.Page.characters,o.found=h.data.Page.pageInfo.total):o.error=!0,e.abrupt("return",{anime:a,manga:i,characters:o});case 19:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=f},fc10:function(e,t,n){}});
//# sourceMappingURL=app.12b0f13c.js.map