(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df5a37e0"],{"0333":function(t,s,e){"use strict";var n=e("5769"),a=e.n(n);a.a},"49e8":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[t.$store.state.bagholders.list.length?t._l(t.$store.state.bagholders.list,(function(s){return n("div",[n("vs-divider",{staticClass:"section-title",attrs:{position:"left"}},[n("div",{staticClass:"header"},[n("h3",[t._v(t._s(s.name))])])]),n("div",{staticClass:"flex flex-wrap -mx-2"},t._l(s.modules,(function(s){return n("div",{staticClass:"w-full lg:w-1/4 xl:w-1/4 mb-2 px-4"},[n("vx-card",{staticClass:"mb-4 pointer"},[n("div",{attrs:{slot:"no-body"},slot:"no-body"},[n("div",{staticClass:"item",on:{click:function(e){return t.turn(s.id)}}},[n("div",{staticClass:"label"},[t._v("\n                                "+t._s(s.name)+"\n                            ")]),n("div",{staticClass:"sub-label"},[t._v("\n                                Нажмите для включения\n                            ")])])])])],1)})),0)],1)})):n("div",[n("vx-card",{staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"not-bagholders"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:e("cb56"),alt:""}})]),n("div",{staticClass:"message"},[t._v("\n                    У вас нет зарегистрированных бэгхолдеров\n                ")]),n("div",{staticClass:"sub-message"},[t._v("\n                    Для начала отладки необходимо зарегистрировать бэгхолдеры\n                ")]),n("div",{staticClass:"actions"},[n("vs-button",{on:{click:function(s){return t.$router.push("/bagholders")}}},[t._v("Зарегистрировать бэгхолдеры")])],1)])])],1)],2)},a=[],i=(e("96cf"),e("3b8d")),r={methods:{turn:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.get("/turn/"+s);case 3:t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function s(s){return t.apply(this,arguments)}return s}()}},c=r,l=(e("0333"),e("2877")),o=Object(l["a"])(c,n,a,!1,null,"ad3c7f96",null);s["default"]=o.exports},5769:function(t,s,e){},cb56:function(t,s,e){t.exports=e.p+"img/reg_bh.d5fdb28c.svg"}}]);
//# sourceMappingURL=chunk-df5a37e0.6c5435c9.js.map