webpackJsonp([6],{"3uZ1":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),s=a.n(i),n=a("NYxO"),c=a("gyMJ"),l=a("6Pj+"),o=a("kvay"),d=a("G3uJ"),m={name:"detail",mixins:[a("5jRo").a],components:{MmLoading:l.a,MusicList:o.a},data:function(){return{list:[]}},created:function(){var t=this;Object(c.f)(this.$route.params.id).then(function(e){200===e.data.code&&(t.list=Object(d.c)(e.data.playlist.tracks),document.title=e.data.playlist.name+" - Ysamaの网易云歌单",t._hideLoad())})},methods:s()({selectItem:function(t,e){this.selectPlay({list:this.list,index:e})}},Object(n.b)(["selectPlay"]))},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details"},[a("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),t._v(" "),a("music-list",{attrs:{list:t.list},on:{select:t.selectItem}})],1)},staticRenderFns:[]};var u=a("VU/8")(m,r,!1,function(t){a("aS97")},"data-v-3fcfa33a",null);e.default=u.exports},aS97:function(t,e){}});