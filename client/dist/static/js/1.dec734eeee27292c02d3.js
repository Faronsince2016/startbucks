webpackJsonp([1],{"0YNW":function(t,e){},"9bBU":function(t,e,a){a("mClu");var i=a("FeBl").Object;t.exports=function(t,e,a){return i.defineProperty(t,e,a)}},C4MV:function(t,e,a){t.exports={default:a("9bBU"),__esModule:!0}},bOdI:function(t,e,a){"use strict";e.__esModule=!0;var i,n=a("C4MV"),s=(i=n)&&i.__esModule?i:{default:i};e.default=function(t,e,a){return e in t?(0,s.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},"kQ+N":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n,s=a("bOdI"),r=a.n(s),o=(a("NYxO"),a("mtWM"),a("gyMJ")),c=(n={props:{},components:{},data:function(){return{dataList:{}}},computed:{},methods:(i={getStartTime:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},getCreateTime:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}},r()(i,"getStartTime",function(t){return new Date(t).toLocaleTimeString()}),r()(i,"getEndTime",function(t){return new Date(t).toLocaleTimeString()}),r()(i,"getHours",function(t,e){var a=new Date(t),i=new Date(e);return console.log(a,i),((a-i)/3600/1e3).toFixed(2)}),r()(i,"backBtn",function(){this.$router.back()}),i)},r()(n,"props",{id:String}),r()(n,"created",function(){var t=this,e=this.id;o.a.overTime({params:{applicationNumber:e}}).then(function(e){t.dataList=e.data,console.log(t.dataList)})}),r()(n,"mounted",function(){}),n),v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editBox"},[a("div",{staticClass:"top"},[a("h2",[a("b",{staticClass:"iconfont icon-arrow-left",on:{click:t.backBtn}}),t._v(" 详情。。。。。")]),t._v(" "),a("div",{staticClass:"con"},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:t.dataList.avatar,alt:""}})]),t._v(" "),a("div",{staticClass:"right"},[a("p",[t._v("申请人姓名: "),a("b",[t._v(t._s(t.dataList.nickname))])]),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("申请单号： "),a("b",[t._v(t._s(t.dataList.applicationNumber))])]),t._v(" "),a("p",[t._v("发起时间： "),a("b",[t._v(t._s(t.getStartTime(t.dataList.startTime)))])])])])]),t._v(" "),a("div",{staticClass:"content"},[a("ul",[a("li",[t._v("申请信息")]),t._v(" "),a("li",[a("span",[t._v("加班日期")]),a("b",[t._v(t._s(t.getCreateTime(t.dataList.create_at)))])]),t._v(" "),a("li",[a("span",[t._v("加班类型")]),a("b",[t._v(t._s("overtime"==t.dataList.list_type?"加班":"休假"))])]),t._v(" "),a("li",[a("span",[t._v("加班起始时间")]),a("b",[t._v(t._s(t.getStartTime(t.dataList.startTime)))])]),t._v(" "),a("li",[a("span",[t._v("加班截止时间")]),a("b",[t._v(t._s(t.getEndTime(t.dataList.endTime)))])]),t._v(" "),a("li",[a("span",[t._v("共计时数")]),a("b",[t._v(t._s(t.getHours(t.dataList.startTime,t.dataList.endTime)))])])]),t._v(" "),a("ul",[a("li",[t._v("加班事由")]),t._v(" "),a("li",[a("p",[t._v(t._s(t.dataList.describes))])])]),t._v(" "),a("ul",[a("li",[t._v("附件")]),t._v(" "),a("div",{staticClass:"big"},t._l(t.dataList.annex,function(t,e){return a("div",{key:e,staticClass:"imgBox"},[a("img",{attrs:{src:"http://localhost:3000"+t,alt:""}})])}),0)]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("直接主管： "),e("b",[this._v("霞姐姐")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottom"},[e("span",[this._v("审批历史")]),this._v(" "),e("button",[this._v("返回")]),this._v(" "),e("button",[this._v("同意")])])}]};var _=a("VU/8")(c,v,!1,function(t){a("0YNW")},"data-v-53371fbc",null);e.default=_.exports},mClu:function(t,e,a){var i=a("kM2E");i(i.S+i.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})}});
//# sourceMappingURL=1.dec734eeee27292c02d3.js.map