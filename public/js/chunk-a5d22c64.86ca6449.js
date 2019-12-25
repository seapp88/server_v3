(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5d22c64"],{"1e84":function(t,s,e){},bb51:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"flex flex-wrap -mx-2"},[i("div",{staticClass:"w-full lg:w-1/2 xl:w-1/3 mb-4 px-4"},[i("vx-card",[i("div",{staticStyle:{padding:"5px 21px 21px 21px"},attrs:{slot:"no-body"},slot:"no-body"},[i("vs-list",[i("vs-list-header",{attrs:{"icon-pack":"feather",icon:"icon-airplay",title:"Точки подключения"}}),i("vs-list-item",{attrs:{title:"Ethernet"}},[i("div",{staticClass:"item-value"},[t._v(t._s(t.$store.state.settings.network.ethernet.ip.length?t.$store.state.settings.network.ethernet.ip+":"+t.$store.state.settings.network.ethernet.port:"-"))])]),i("vs-list-header",{staticClass:"mt-2",attrs:{"icon-pack":"feather",icon:"icon-airplay",title:"Ethernet"}}),i("vs-list-item",{attrs:{title:"IP адрес"}},[i("div",{staticClass:"item-value"},[t._v(t._s(t.$store.state.settings.network.ethernet.ip.length?""+t.$store.state.settings.network.ethernet.ip:"-"))])]),i("vs-list-item",{attrs:{title:"MAC адрес"}},[i("div",{staticClass:"item-value"},[t._v(t._s(t.$store.state.settings.network.ethernet.mac))])]),i("vs-list-header",{staticClass:"mt-2",attrs:{"icon-pack":"feather",icon:"icon-hard-drive",title:"Версия ПО"}}),i("vs-list-item",{attrs:{title:"1.0.0",subtitle:"ПО сервера"}},[i("vs-button",{attrs:{disabled:"",color:"warning",type:"filled"}},[t._v("Обновить")])],1),i("div")],1),i("div",{staticClass:"home-actions mt-10"},[i("vs-button",{staticClass:"mb-3",attrs:{color:"primary",type:"filled"},on:{click:function(s){t.activeExportSettings=!0}}},[t._v("Экспорт настроек Бэгхолдеров")]),i("vs-button",{staticClass:"mb-3",attrs:{color:"primary",type:"filled"},on:{click:function(s){t.activeExportMac=!0}}},[t._v("Экспорт MAC адресов")])],1)],1)])],1),i("div",{staticClass:"w-full lg:w-1/2 xl:w-2/3 mb-4 px-4"},[i("vx-card",{staticClass:"mb-4"},[i("h3",{staticStyle:{"line-height":"27px"}},[t._v("Список бэгхолдеров")])]),i("div",{staticClass:"flex flex-wrap -mx-4"},[t.$store.state.bagholders.list.length?t._l(t.$store.state.bagholders.list,(function(s){return i("div",{staticClass:"w-full lg:w-1/1 xl:w-1/2 mb-4 px-4"},[i("vx-card",{staticStyle:{overflow:"hidden"}},[i("div",{attrs:{slot:"no-body"},slot:"no-body"},[i("div",{staticClass:"item",class:{error:!t.$store.getters["bagholders/isOnline"](s.id)}},[i("div",{staticClass:"label"},[t._v("\n                                        "+t._s(s.name)+"\n                                    ")]),i("div",{staticClass:"status"},[i("div",{staticClass:"chip",class:{error:!t.$store.getters["bagholders/isOnline"](s.id)}},[t._v("\n                                            "+t._s(t.$store.getters["bagholders/isOnline"](s.id)?"Online":"Offline")+"\n                                        ")])])])])])],1)})):i("div",{staticClass:"w-full lg:w-1/1 xl:w-1/1 px-4"},[i("vx-card",{staticStyle:{overflow:"hidden"}},[i("div",{staticClass:"not-bagholders"},[i("div",{staticClass:"icon"},[i("img",{attrs:{src:e("cb56"),alt:""}})]),i("div",{staticClass:"message"},[t._v("\n                                    У вас нет зарегистрированных бэгхолдеров\n                                ")]),i("div",{staticClass:"sub-message"},[t._v("\n                                    Чтобы отслеживать работу бэгхолдеров, их необходимо зарегистрировать\n                                ")]),i("div",{staticClass:"actions"},[i("vs-button",{on:{click:function(s){return t.$router.push("/bagholders")}}},[t._v("Зарегистрировать бэгхолдеры")])],1)])])],1)],2)],1)]),i("vs-prompt",{attrs:{title:"Экспорт настроек Бэгхолдеров","accept-text":"Экспортировать","cancel-text":"Отмена",active:t.activeExportSettings},on:{cancel:t.cancelExportSettings,accept:t.acceptExportSettings,close:t.cancelExportSettings,"update:active":function(s){t.activeExportSettings=s}}},[i("div",{staticClass:"con-exemple-prompt"},[i("div",{staticClass:"mb-1"},[t._v("Выберите накопитель")]),t.$store.getters["settings/drive"].length?t._e():i("h5",{staticClass:"mt-2"},[t._v("Вставьте USB FLASH накопитель!")]),t.$store.getters["settings/drive"].length?i("v-select",{attrs:{clearable:!1,options:t.$store.getters["settings/drive"]},model:{value:t.valExportSettings,callback:function(s){t.valExportSettings=s},expression:"valExportSettings"}}):t._e(),i("br")],1)]),i("vs-prompt",{attrs:{title:"Экспорт MAC адресов","accept-text":"Экспортировать","cancel-text":"Отмена",active:t.activeExportMac},on:{cancel:t.cancelExportMac,accept:t.acceptExportMac,close:t.cancelExportMac,"update:active":function(s){t.activeExportMac=s}}},[i("div",{staticClass:"con-exemple-prompt"},[i("div",{staticClass:"mb-1"},[t._v("Выберите накопитель")]),t.$store.getters["settings/drive"].length?t._e():i("h5",{staticClass:"mt-2"},[t._v("Вставьте USB FLASH накопитель!")]),t.$store.getters["settings/drive"].length?i("v-select",{attrs:{clearable:!1,options:t.$store.getters["settings/drive"]},model:{value:t.valExportSettings,callback:function(s){t.valExportSettings=s},expression:"valExportSettings"}}):t._e(),i("br")],1)])],1)},a=[],n=e("4a7a"),c=e.n(n),l={components:{"v-select":c.a},computed:{valExportSettings:{get:function(){return this.pathUsb=this.$store.getters["settings/drive"][0],this.$store.getters["settings/drive"][0]},set:function(t){this.pathUsb=t}}},data:function(){return{activeExportSettings:!1,activeExportMac:!1,pathUsb:null}},methods:{acceptExportSettings:function(){this.pathUsb.id&&this.$io.emit("export:settings",this.pathUsb.id)},cancelExportSettings:function(){this.pathUsb=null,this.activeExportSettings=!1},acceptExportMac:function(){this.pathUsb.id&&this.$io.emit("export:mac",this.pathUsb.id)},cancelExportMac:function(){this.pathUsb=null,this.activeExportMac=!1}}},r=l,o=(e("f8bd"),e("2877")),v=Object(o["a"])(r,i,a,!1,null,"3ef269b8",null);s["default"]=v.exports},cb56:function(t,s,e){t.exports=e.p+"img/reg_bh.d5fdb28c.svg"},f8bd:function(t,s,e){"use strict";var i=e("1e84"),a=e.n(i);a.a}}]);
//# sourceMappingURL=chunk-a5d22c64.86ca6449.js.map