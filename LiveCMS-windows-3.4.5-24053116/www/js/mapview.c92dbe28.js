webpackJsonp([10],{"29ET":function(t,e,o){var a=o("bnvK");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("59a7912a",a,!0,{})},"7yjH":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["modal",{fade:t.fade}],attrs:{"data-keyboard":"true","data-backdrop":"static",tabindex:"-1"}},[o("div",{class:["modal-dialog",t.size]},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[t._m(0),t._v(" "),o("a",{directives:[{name:"show",rawName:"v-show",value:t.showPTZButton,expression:"showPTZButton"}],staticClass:"ptz",attrs:{role:"button",title:"云台控制"},on:{click:t.togglePTZVisible}},[o("span",{attrs:{"aria-hidden":"true"}},[t.ptzVisible?o("i",{staticClass:"fa fa-minus"}):o("i",{staticClass:"fa fa-plus"})])]),t._v(" "),o("h4",{staticClass:"modal-title text-primary text-center"},[o("span",[t._v(t._s(t.videoTitle))])])]),t._v(" "),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"play-area",on:{mousemove:t.resetActiveTimer,touchstart:t.resetActiveTimer}},[t.bShow?o("LivePlayer",{directives:[{name:"loading",rawName:"v-loading",value:t.bLoading,expression:"bLoading"}],ref:"player",attrs:{videoUrl:t.videoUrl,waterMark:t.osd,poster:t.snapUrl,hideBigPlayButton:!!t.serverInfo.HideBigPlayButton,live:"",controls:t.controls,showCameraButton:t.snap,showCustomButton:t.custom,fluent:t.fluent,stretch:t.stretch,autoplay:t.autoplay,muted:t.muted,alt:t.alt,loading:t.bLoading,"element-loading-text":"加载中...","element-loading-background":"#000"},on:{media_info:t.onMediaInfo,ended:t.onEnded,error:t.onError,message:t.$message,fullscreen:t.onFullscreenChange,"update:loading":function(e){t.bLoading=e}}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showPTZBlock,expression:"showPTZBlock"}],staticClass:"ptz-block-fs"},[o("div",{staticClass:"ptz-cell ptz-up",attrs:{title:"上"},on:{mousedown:function(e){e.preventDefault(),t.ptzControl("up",e)}}},[o("i",{staticClass:"fa fa-chevron-up"})]),t._v(" "),o("div",{staticClass:"ptz-cell ptz-left",attrs:{title:"左"},on:{mousedown:function(e){e.preventDefault(),t.ptzControl("left",e)}}},[o("i",{staticClass:"fa fa-chevron-left"})]),t._v(" "),o("div",{staticClass:"ptz-cell ptz-center",attrs:{title:"云台控制"}},[o("i",{staticClass:"fa fa-arrows"})]),t._v(" "),o("div",{staticClass:"ptz-cell ptz-right",attrs:{title:"右"},on:{mousedown:function(e){e.preventDefault(),t.ptzControl("right",e)}}},[o("i",{staticClass:"fa fa-chevron-right"})]),t._v(" "),o("div",{staticClass:"ptz-cell ptz-down",attrs:{title:"下"},on:{mousedown:function(e){e.preventDefault(),t.ptzControl("down",e)}}},[o("i",{staticClass:"fa fa-chevron-down"})]),t._v(" "),o("div",{staticClass:"ptz-cell ptz-zoomin",attrs:{title:"放大"},on:{mousedown:function(e){e.preventDefault(),t.ptzControl("zoomin",e)}}},[o("i",{staticClass:"fa fa-plus-circle"})]),t._v(" "),t.showTalk?o("div",{staticClass:"ptz-cell ptz-talk",on:{mousedown:function(e){e.preventDefault(),t.talkStart(e)}}},[o("i",{staticClass:"fa fa-microphone"})]):t._e(),t._v(" "),o("div",{staticClass:"ptz-cell ptz-zoomout",attrs:{title:"缩小"},on:{mousedown:function(e){e.preventDefault(),t.ptzControl("zoomout",e)}}},[o("i",{staticClass:"fa fa-minus-circle"})])])]):t._e()],1),t._v(" "),t.isDemoUser(t.serverInfo,t.userInfo)&&!t.bOutHevcTip?o("div",{staticClass:"text-center"},[o("br"),t._v("\n                  提示: 演示系统限制匿名登录播放时间, 若需测试长时间播放, 请"),o("a",{attrs:{target:"_blank",href:"//www.liveqing.com/docs/download/LiveGBS.html"}},[t._v("下载使用")]),t._v(" "),o("br"),t._v(" "),o("br")]):t._e(),t._v(" "),t.bOutHevcTip?o("div",{staticClass:"text-center text-red"},[o("br"),t._v("\n                  提示: 正在播放 H265 直出流, 确保浏览器版本较新, 并且开启硬件加速\n                  "),o("br"),t._v(" "),o("br")]):t._e(),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showPTZBottom,expression:"showPTZBottom"}],staticClass:"ptz-block-bottom"},[t.ws?o("el-progress",{staticClass:"mic-level-bar",attrs:{percentage:t.level,"text-inside":!0}}):t._e(),t._v(" "),o("div",{staticClass:"ptz-cell ptz-up",attrs:{command:"up",title:"上"},on:{mousedown:function(e){e.preventDefault(),t.ptzControl("up",e)},touchstart:function(e){e.preventDefault(),t.ptzControl("up",e)}}},[o("i",{staticClass:"fa fa-chevron-up"})]),t._v(" "),o("div",{staticClass:"ptz-cell ptz-left",attrs:{command:"left",title:"左"},on:{mousedown:function(e){e.preventDefault(),t.ptzControl("left",e)},touchstart:function(e){e.preventDefault(),t.ptzControl("left",e)}}},[o("i",{staticClass:"fa fa-chevron-left"})]),t._v(" "),o("div",{staticClass:"ptz-cell ptz-center",attrs:{title:"云台控制"}},[t.showTalk?o("i",{staticClass:"fa fa-microphone",attrs:{title:"按住喊话"},on:{mousedown:function(e){e.preventDefault(),t.talkStart(e)},touchstart:function(e){e.preventDefault(),t.talkStart(e)}}}):t._e()]),t._v(" "),o("div",{staticClass:"ptz-cell ptz-right",attrs:{command:"right",title:"右"},on:{mousedown:function(e){e.preventDefault(),t.ptzControl("right",e)},touchstart:function(e){e.preventDefault(),t.ptzControl("right",e)}}},[o("i",{staticClass:"fa fa-chevron-right"})]),t._v(" "),o("div",{staticClass:"ptz-cell ptz-down",attrs:{command:"down",title:"下"},on:{mousedown:function(e){e.preventDefault(),t.ptzControl("down",e)},touchstart:function(e){e.preventDefault(),t.ptzControl("down",e)}}},[o("i",{staticClass:"fa fa-chevron-down"})]),t._v(" "),o("div",{staticClass:"ptz-cell ptz-zoomin",attrs:{command:"zoomin",title:"放大"},on:{mousedown:function(e){e.preventDefault(),t.ptzControl("zoomin",e)},touchstart:function(e){e.preventDefault(),t.ptzControl("zoomin",e)}}},[o("i",{staticClass:"fa fa-plus"})]),t._v(" "),o("div",{staticClass:"ptz-cell ptz-zoomout",attrs:{command:"zoomout",title:"缩小"},on:{mousedown:function(e){e.preventDefault(),t.ptzControl("zoomout",e)},touchstart:function(e){e.preventDefault(),t.ptzControl("zoomout",e)}}},[o("i",{staticClass:"fa fa-minus"})])],1)])])])])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close",title:"关闭"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],n={render:a,staticRenderFns:i};e.a=n},Q2Lj:function(t,e,o){"use strict";function a(t){o("iIXZ")}Object.defineProperty(e,"__esModule",{value:!0});var i=o("Yr3d"),n=o.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(t){o.d(e,t,function(){return i[t]})}(s);var r=o("XRYq"),l=o("VU/8"),d=a,c=l(n.a,r.a,!1,d,"data-v-8e066762",null);e.default=c.exports},QEnu:function(t,e,o){"use strict";function a(t){o("29ET")}Object.defineProperty(e,"__esModule",{value:!0});var i=o("kOR3"),n=o.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(t){o.d(e,t,function(){return i[t]})}(s);var r=o("7yjH"),l=o("VU/8"),d=a,c=l(n.a,r.a,!1,d,"data-v-d882d632",null);e.default=c.exports},XRYq:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],style:"height:"+this.pageHeight+"px;min-height:500px;",attrs:{id:"wrapper"}},[o("div",{attrs:{id:"map"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.bShowSearch,expression:"bShowSearch"}],staticClass:"form-group has-feedback search"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.q,expression:"q",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"q",autocomplete:"off",placeholder:"搜索"},domProps:{value:t.q},on:{mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()},dblclick:function(t){t.stopPropagation()},contextmenu:function(t){t.stopPropagation()},input:function(e){e.target.composing||(t.q=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),o("span",{staticClass:"glyphicon glyphicon-search form-control-feedback text-gray"})])]),t._v(" "),o("SimpleVideoDlg",{ref:"videoDlg",attrs:{id:"video-dlg",ptz:"",talk:""}}),t._v(" "),o("el-dialog",{attrs:{title:t.msgDlgTitle,visible:t.bMsgDlg,"modal-append-to-body":!1,"lock-scroll":!1,width:"450px",top:"30vh"},on:{"update:visible":function(e){t.bMsgDlg=e}}},[o("span",{domProps:{innerHTML:t._s(t.msgDlgText)}}),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.copyMsgText}},[t._v("一键复制")])],1)])],1)},i=[],n={render:a,staticRenderFns:i};e.a=n},Yr3d:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,o){function a(i,n){try{var s=e[i](n),r=s.value}catch(t){return void o(t)}if(!s.done)return Promise.resolve(r).then(function(t){a("next",t)},function(t){a("throw",t)});t(r)}return a("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},s=o("NYxO"),r=o("QEnu"),l=a(r),d=o("0iPh"),c=a(d),p=o("M4fF"),u=a(p),h=L.icon({iconUrl:"/images/camera-on.png",iconSize:[30,30],iconAnchor:[10,30]}),f=L.icon({iconUrl:"/images/camera-off.png",iconSize:[30,30],iconAnchor:[10,30]}),m=(L.icon({iconUrl:"/images/camera-red-on.png",iconSize:[30,30],iconAnchor:[10,30]}),L.icon({iconUrl:"/images/camera-red-off.png",iconSize:[30,30],iconAnchor:[10,30]}),L.icon({iconUrl:"/images/dome-on.png",iconSize:[30,30],iconAnchor:[10,30]}),L.icon({iconUrl:"/images/dome-off.png",iconSize:[30,30],iconAnchor:[10,30]}),L.icon({iconUrl:"/images/dome-red-on.png",iconSize:[30,30],iconAnchor:[10,30]}),L.icon({iconUrl:"/images/dome-red-off.png",iconSize:[30,30],iconAnchor:[10,30]}),[31.82,117.22]);e.default={components:{SimpleVideoDlg:l.default},data:function(){return{q:"",pageHeight:0,loading:!1,bShowSearch:!1,map:null,center:m,zoom:8,minZoom:8,maxZoom:9,markerZoom:9,attribution:"",attributionPrefix:"<a href='//www.liveqing.com' target='_blank'>LiveQing</a>",channels:[],channelMarkers:[],msgDlgTitle:"提示",msgDlgText:"",bMsgDlg:!1}},beforeDestroy:function(){this.map&&(this.map.remove(),this.map=null),(0,c.default)(window).off("resize",this.initHeight)},created:function(){this.initHeight()},mounted:function(){var t=this,e=this.serverInfo.MapInfo||{};e.Center&&e.Center.length>=2&&(this.center=[e.Center[1],e.Center[0]]),this.zoom=e.Zoom||8,this.minZoom=e.MinZoom||8,this.maxZoom=e.MaxZoom||9,this.markerZoom=e.MarkerZoom||9,this.attribution=e.Attribution||"",this.attributionPrefix=e.AttributionPrefix||"<a href='//www.liveqing.com' target='_blank'>LiveQing</a>",this.map=L.map("map",{fullscreenControl:!0,fullscreenControlOptions:{fullscreenElement:this.$el},contextmenu:!0,contextmenuItems:[{text:"显示坐标",callback:this.showCoordinates}],center:this.center,zoom:this.zoom,attributionControl:!!this.attribution}),L.tileLayer("/map/{z}/{x}/{y}.png",{minZoom:this.minZoom,maxZoom:this.maxZoom,attribution:this.attribution}).addTo(this.map),this.map.attributionControl&&this.attributionPrefix&&this.map.attributionControl.setPrefix(this.attributionPrefix),this.bShowSearch=this.zoom>=this.markerZoom,this.map.on("move",function(e){if(t.map.getZoom()<t.markerZoom)return t.bShowSearch=!1,void(t.channels.length>0&&(t.channels=[],t.refreshChannelMarkers()));t.bShowSearch=!0,t.doDelaySearch()}).whenReady(function(){t.map.getZoom()>=t.markerZoom&&t.getChannels()}),(0,c.default)(window).on("resize",this.initHeight)},computed:n({},(0,s.mapState)(["serverInfo","userInfo"])),watch:{q:function(t,e){this.doDelaySearch()}},methods:{doDelaySearch:u.default.debounce(function(){this.getChannels()},800),getChannels:function(){var t=this;if(this.map)return this.map.getZoom()<this.markerZoom?void(this.channels.length>0&&(this.channels=[],this.refreshChannelMarkers())):void c.default.get("/api/v1/device/channellist",{channel_type:"device",bounds:this.map.getBounds().toBBoxString(),q:this.q}).then(function(e){t.channels=e.ChannelList||[],t.refreshChannelMarkers()})},refreshChannelMarkers:function(){if(this.map){var t=this.channels.reduce(function(t,e){return t[e.DeviceID+"_"+e.ID]=e,t},{});this.channelMarkers=this.channelMarkers.filter(function(e){var o=t[e.ID];if(o){var a=o.CustomLatitude||o.Latitude,i=o.CustomLongitude||o.Longitude;if(e.Lat==a&&e.Lng==i&&e.Status==o.Status)return delete t[e.ID],!0}return e.remove(),!1});for(var e in t){var o=t[e],a=o.CustomLatitude||o.Latitude,i=o.CustomLongitude||o.Longitude,n=L.marker([a,i],{icon:"ON"==o.Status?h:f,title:(o.CustomName||o.Name)+" | "+("ON"==o.Status?"在线":"离线"),contextmenu:!0,contextmenuItems:[{text:"设备信息",callback:this.showChannelInfo}]});n.ID=e,n.Lat=a,n.Lng=i,n.Serial=o.DeviceID,n.Code=o.ID,n.Status=o.Status,n.ChannelInfo=o,n.Title=o.CustomName||o.Name||o.Code,n.PTZType=o.CustomPTZType||o.PTZType||0,n.SnapURL=o.SnapURL||"",n.SnapURL&&n.bindTooltip('<img src="'+n.SnapURL+'" width="288" height="162" onerror="this.src=\'/images/default_snap.png\';"/>',{direction:"top",offset:[0,-20],opacity:1,className:"tooltip-snap",sticky:!0}),"ON"==o.Status?n.on("click",this.onChannelMarkerClick):n.on("dblclick",this.onChannelMarkerClick),n.addTo(this.map),this.channelMarkers.push(n)}}},onChannelMarkerClick:function(t){var e=this,o=t.sourceTarget;if(o){var a=o.ChannelInfo;a&&(this.loading=!0,c.default.ajax({method:"GET",url:"/api/v1/stream/start",global:!1,data:{serial:a.DeviceID,code:a.ID}}).then(function(t){e.$refs.videoDlg.play(a.DeviceID,a.ID,t)}).fail(function(t){var o="加载视频失败";"ON"!=a.Status?o="设备离线":t&&(o=t.status+" "+t.responseText),e.$refs.videoDlg.play(a.DeviceID,a.ID,{ChannelName:a.CustomName||a.Name,Message:o})}).always(function(){e.loading=!1}))}},initHeight:function(){this.pageHeight=window.innerHeight,"number"!=typeof this.pageWidth&&("CSS1Compat"==document.compatMode?this.pageHeight=document.documentElement.clientHeight:this.pageHeight=document.body.clientHeight),this.pageHeight=this.pageHeight-91},showCoordinates:function(t){this.showMsgDlg("坐标(经,纬)",parseFloat(t.latlng.lng.toFixed(5))+","+parseFloat(t.latlng.lat.toFixed(5)))},showChannelInfo:function(t){var e=t.relatedTarget,o="编号: "+e.ID+"<br>";o+="名称: "+e.Title+"<br>",o+="经纬: "+parseFloat(e.Lng.toFixed(5))+","+parseFloat(e.Lat.toFixed(5)),this.showMsgDlg("设备信息",o)},showMsgDlg:function(t,e){this.msgDlgTitle=t,this.msgDlgText=e,this.bMsgDlg=!0},copyMsgText:function(){this.copy(this.msgDlgText.replaceAll("<br>","\r\n")),this.bMsgDlg=!1},centerHere:function(t){this.map.panTo(t.latlng)},copy:function(t){var e=this;return i(regeneratorRuntime.mark(function o(){var a;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,a=document.createElement("textarea"),a.value=t,a.style.position="absolute",a.style.opacity=0,a.style.left="-999999px",a.style.top="-999999px",e.$el.appendChild(a),a.focus(),a.select(),o.next=12,new Promise(function(t,e){document.execCommand("copy")?t():e(),a.remove()});case 12:e.$message.success("复制成功！"),o.next=27;break;case 15:return o.prev=15,o.t0=o.catch(0),o.prev=17,o.next=20,navigator.clipboard.writeText(t);case 20:e.$message.success("复制成功！！"),o.next=27;break;case 23:o.prev=23,o.t1=o.catch(17),console.log(o.t0,o.t1),e.$message.error("复制失败",o.t0,o.t1);case 27:case"end":return o.stop()}},o,e,[[0,15],[17,23]])}))()}}}},bnvK:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,".modal-dialog[data-v-d882d632]{margin-top:110px;margin-bottom:0}.modal-content[data-v-d882d632]{border-radius:6px}.modal-title[data-v-d882d632]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.modal-header[data-v-d882d632]{padding:4px}.modal-header .ptz[data-v-d882d632]{position:absolute;top:5px;right:35px;margin-top:0;line-height:24px;color:#000;opacity:.2}.modal-header .ptz[data-v-d882d632]:focus,.modal-header .ptz[data-v-d882d632]:hover{color:#000;opacity:.5}.modal-header .close[data-v-d882d632]{position:absolute;top:5px;right:10px;margin-top:0;line-height:24px}.modal-body[data-v-d882d632]{padding:0}.ptz-block-bottom[data-v-d882d632]{width:150px;height:210px;margin:0 auto;margin-top:10px;text-align:center;position:relative;font-size:24px}.ptz-block-bottom .ptz-cell[data-v-d882d632]{width:50px;height:50px;line-height:50px;position:absolute}.ptz-block-bottom .ptz-cell.active[data-v-d882d632]{color:#ccc;font-size:26px}.ptz-block-bottom .fa-microphone-slash[data-v-d882d632],.ptz-block-bottom .fa-microphone[data-v-d882d632]{padding:10px 13px;border-radius:25px}.ptz-block-bottom .fa-microphone.active[data-v-d882d632]{color:#fff}.ptz-block-bottom .mic-level-bar[data-v-d882d632]{position:absolute;transform:rotate(-90deg);width:100%;top:70px;left:-80px}.ptz-block-bottom .ptz-center[data-v-d882d632]{top:50px;left:50px;border-radius:25px;background-color:#ccc}.ptz-block-bottom .ptz-up[data-v-d882d632]{top:0;left:50px}.ptz-block-bottom .ptz-left[data-v-d882d632]{top:50px;left:0}.ptz-block-bottom .ptz-right[data-v-d882d632]{top:50px;left:100px}.ptz-block-bottom .ptz-down[data-v-d882d632]{top:100px;left:50px}.ptz-block-bottom .ptz-zoomin[data-v-d882d632]{top:150px;left:20px}.ptz-block-bottom .ptz-talk[data-v-d882d632]{top:150px;left:50px}.ptz-block-bottom .ptz-zoomout[data-v-d882d632]{top:150px;left:80px}.ptz-block-bottom .ptz-center>.fa-microphone[data-v-d882d632],.ptz-block-bottom .ptz-down[data-v-d882d632],.ptz-block-bottom .ptz-left[data-v-d882d632],.ptz-block-bottom .ptz-right[data-v-d882d632],.ptz-block-bottom .ptz-talk>.fa-microphone[data-v-d882d632],.ptz-block-bottom .ptz-up[data-v-d882d632],.ptz-block-bottom .ptz-zoomin[data-v-d882d632],.ptz-block-bottom .ptz-zoomout[data-v-d882d632]{cursor:pointer}.ptz-block-bottom .ptz-center>.fa-microphone.readonly[data-v-d882d632],.ptz-block-bottom .ptz-down.readonly[data-v-d882d632],.ptz-block-bottom .ptz-left.readonly[data-v-d882d632],.ptz-block-bottom .ptz-right.readonly[data-v-d882d632],.ptz-block-bottom .ptz-talk>.fa-microphone.readonly[data-v-d882d632],.ptz-block-bottom .ptz-up.readonly[data-v-d882d632],.ptz-block-bottom .ptz-zoomin.readonly[data-v-d882d632],.ptz-block-bottom .ptz-zoomout.readonly[data-v-d882d632]{cursor:auto}.ptz-block-fs[data-v-d882d632]{position:fixed;margin:0;margin-bottom:50px;top:0;right:0;width:150px;height:200px;text-align:center;font-size:24px}.ptz-block-fs .ptz-cell[data-v-d882d632]{width:50px;height:50px;line-height:50px;position:absolute}.ptz-block-fs .ptz-cell.active[data-v-d882d632]{color:#ccc;font-size:26px}.ptz-block-fs .ptz-cell.readonly[data-v-d882d632]{color:#ddd}.ptz-block-fs .fa-microphone-slash[data-v-d882d632],.ptz-block-fs .fa-microphone[data-v-d882d632]{padding:10px 13px;border-radius:25px}.ptz-block-fs .fa-microphone.active[data-v-d882d632]{color:#ccc}.ptz-block-fs .fa-microphone-slash.readonly[data-v-d882d632],.ptz-block-fs .fa-microphone.readonly[data-v-d882d632]{color:#ddd}.ptz-block-fs .mic-level-bar[data-v-d882d632]{position:absolute;transform:rotate(-90deg);width:100%;top:70px;left:-80px}.ptz-block-fs .ptz-center[data-v-d882d632]{width:50px;height:50px;top:50px;left:50px;line-height:50px;border-radius:25px;background-color:#ccc;cursor:move;position:absolute}.ptz-block-fs .ptz-up[data-v-d882d632]{top:0;left:50px}.ptz-block-fs .ptz-left[data-v-d882d632]{top:50px;left:0}.ptz-block-fs .ptz-right[data-v-d882d632]{top:50px;left:100px}.ptz-block-fs .ptz-down[data-v-d882d632]{top:100px;left:50px}.ptz-block-fs .ptz-zoomin[data-v-d882d632]{top:150px;left:15px}.ptz-block-fs .ptz-zoomout[data-v-d882d632]{top:150px;left:85px}.ptz-block-fs .ptz-talk[data-v-d882d632]{top:150px;left:50px}.ptz-block-fs .ptz-center>.fa-microphone[data-v-d882d632],.ptz-block-fs .ptz-down[data-v-d882d632],.ptz-block-fs .ptz-left[data-v-d882d632],.ptz-block-fs .ptz-right[data-v-d882d632],.ptz-block-fs .ptz-talk>.fa-microphone[data-v-d882d632],.ptz-block-fs .ptz-up[data-v-d882d632],.ptz-block-fs .ptz-zoomin[data-v-d882d632],.ptz-block-fs .ptz-zoomout[data-v-d882d632]{cursor:pointer}.ptz-block-fs .ptz-center>.fa-microphone.readonly[data-v-d882d632],.ptz-block-fs .ptz-down.readonly[data-v-d882d632],.ptz-block-fs .ptz-left.readonly[data-v-d882d632],.ptz-block-fs .ptz-right.readonly[data-v-d882d632],.ptz-block-fs .ptz-talk>.fa-microphone.readonly[data-v-d882d632],.ptz-block-fs .ptz-up.readonly[data-v-d882d632],.ptz-block-fs .ptz-zoomin.readonly[data-v-d882d632],.ptz-block-fs .ptz-zoomout.readonly[data-v-d882d632]{cursor:auto}@media screen and (min-width:768px){.modal-dialog.modal-lgg[data-v-d882d632]{width:90%}.tab-info[data-v-d882d632]{display:none}}@media screen and (min-width:1200px){.modal-dialog.modal-lgg[data-v-d882d632]{width:1200px}.tab-info[data-v-d882d632]{display:block}}",""])},iIXZ:function(t,e,o){var a=o("oO3j");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("d4ad27d0",a,!0,{})},kOR3:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t};o("F8S1");var i=o("eAMf"),n=function(t){return t&&t.__esModule?t:{default:t}}(i),s=o("NYxO");e.default={data:function(){return{videoUrl:"",videoTitle:"",protocol_:"",osd:"",snapUrl:"",serial:"",code:"",streamid:"",streamInfo:null,bShow:!1,bLoading:!1,recorder:null,ws:null,level:0,mediaInfo:null,bOutHevcTip:!1,bControls:!1,alt:"无信号",fullscreen:!1,ptzVisible:!1,ptzType:0,activeTimer:null,activeInterval:0}},props:{fade:{type:Boolean,default:!1},size:{type:String,default:""},protocol:{type:String,default:""},talk:{type:Boolean,default:!1},ptz:{type:Boolean,default:!1},token:{type:String,default:""},controls:{type:Boolean,default:!0},snap:{type:Boolean,default:void 0},custom:{type:Boolean,default:!0},fluent:{type:Boolean,default:!0},stretch:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},muted:{type:Boolean,default:!0}},computed:a({},(0,s.mapState)(["userInfo","serverInfo"]),{showTalk:function(){return this.talk&&this.canTalk()&&"标准版"!=this.serverInfo.VersionType},canPTZ:function(){return this.videoUrl&&(0===this.ptzType||1===this.ptzType)},showPTZButton:function(){return this.videoUrl&&(this.ptz||this.talk)&&this.hasAnyRole(this.serverInfo,this.userInfo,"管理员","操作员")},showPTZBottom:function(){return this.ptzVisible&&this.videoUrl},showPTZBlock:function(){return this.ptzVisible&&this.videoUrl&&this.fullscreen&&!this.isMobile()&&this.bControls}}),beforeDestroy:function(){this.ws&&(this.ws.close(),this.ws=null),this.activeTimer&&(clearTimeout(this.activeTimer),this.activeTimer=null),this.ctrlStop(),t(document).off("mouseup touchend",this.mouseUp)},mounted:function(){var e=this;t(this.$el).find(".modal-content").draggable({handle:".modal-header",cancel:".modal-title span, .close, .ptz",addClasses:!1,containment:"document",delay:100,opacity:.5}),t(this.$el).on("hide.bs.modal",function(){e.ptzVisible=!1,e.ptzType=0,e.streamInfo=null,e.mediaInfo=null,e.bOutHevcTip=!1,e.snapUrl="",e.videoUrl="",e.videoTitle="",e.protocol_="",e.osd="",e.alt="无信号",e.ctrlStop(),e.bControls=!1,e.$nextTick(function(){e.bShow=!1}),e.activeTimer&&(clearTimeout(e.activeTimer),e.activeTimer=null)}).on("show.bs.modal",function(){e.bShow=!0}),t(document).on("mouseup touchend",this.mouseUp)},components:{LivePlayer:n.default},methods:{play:function(e,o,a){this.serial=e||"",this.code=o||"",a=a||{};var i=a.HLS,n="HLS";switch(this.flvSupported()&&(i=this.isIE()?a.WS_FLV:a.FLV,n=this.isIE()?"WS_FLV":"FLV"),String(this.protocol||this.serverInfo.PreferStreamFmt).toUpperCase()){case"WEBRTC":this.rtcSupported()&&(i=a.WEBRTC,n="WEBRTC");break;case"FLV":this.flvSupported()&&!this.isIE()&&(i=a.FLV,n="FLV");break;case"WS_FLV":case"WS-FLV":this.flvSupported()&&(i=a.WS_FLV,n="WS_FLV");break;case"HLS":i=a.HLS,n="HLS";break;case"RTMP":i=a.RTMP,n="RTMP"}this.streamid=a.StreamID||"",this.streamInfo=a,this.videoTitle=a.ChannelName||o||"",this.osd=a.ChannelOSD||"",this.ptzType=a.ChannelPTZType||0,this.snapUrl="RTMP"==n?"":a.SnapURL||"",this.protocol_=n,this.videoUrl=i||"",!i&&a.Message&&"string"==typeof a.Message&&(this.alt=a.Message),t(this.$el).modal("show")},ptzControl:function(e,o){var a=this;t.ajax({method:"GET",url:"/api/v1/control/ptz",global:!1,data:{serial:this.serial,code:this.code,command:e,token:this.token}}).fail(function(t){t&&(console.log("ptz "+e+" ajax error: "+t.status+" "+t.responseText),401==t.status&&a.$route&&a.$route.path&&(location.href="/login?r="+encodeURIComponent(window.location.href)))}),t(o.target).closest(".ptz-cell").addClass("active")},ptzStop:function(){var e=this;t(this.$el).find(".ptz-cell.active").length>0&&(t.ajax({method:"GET",url:"/api/v1/control/ptz",global:!1,data:{serial:this.serial,code:this.code,command:"stop",token:this.token}}).fail(function(t){t&&(console.log("ptz stop ajax error: "+t.status+" "+t.responseText),401==t.status&&e.$route&&e.$route.path&&(location.href="/login?r="+encodeURIComponent(window.location.href)))}).always(function(){!e.isMobile()&&e.fullscreen&&e.bControls&&(e.activeInterval=5e3,e.resetActiveTimer())}),t(this.$el).find(".ptz-cell.active").removeClass("active"))},talkStart:function(e){var o=this;if(this.ws){if(this.serverInfo.TalkHold)return void this.talkStop()}else this.ws=new WebSocket(this.wsTalkURL()),this.ws.onopen=function(t){console.log("ws talk open")},this.ws.onclose=function(t){console.log("ws talk close")},this.ws.onerror=function(t){console.log("ws talk error",t)};var a=t(e.currentTarget);if(this.recorder)return a.addClass("active"),void this.recorder.start();LiveRecorder.get(function(t,e){if(e)return alert(e),void o.talkStop();a.addClass("active"),o.recorder=t,o.recorder.start()},{sampleBits:16,sampleRate:8e3,pcmCallback:function(t,e){var a=new window.FileReader;a.onloadend=function(){var t=a.result,t=t.split(",")[1];o.ws&&o.ws.readyState===WebSocket.OPEN&&(o.ws.send(t),o.level=e)},a.readAsDataURL(t)}})},talkStop:function(){this.recorder&&(this.recorder.destroy(),this.recorder=null,t(this.$el).find(".fa-microphone.active").removeClass("active")),this.ws&&(this.ws.close(),this.ws=null,!this.isMobile()&&this.fullscreen&&this.bControls&&(this.activeInterval=5e3,this.resetActiveTimer())),this.level=0},ctrlStop:function(){this.talkStop(),this.ptzStop()},mouseUp:function(){this.serverInfo.TalkHold||this.talkStop(),this.ptzStop()},wsTalkURL:function(){var t="ws:";location.protocol.startsWith("https")&&(t="wss:");var e=t+"//"+location.host+"/api/v1/control/ws-talk/"+this.serial+"/"+this.code+"?format=pcm";return this.token&&(e+="&token="+this.token),e},onMediaInfo:function(t){this.mediaInfo=t},onEnded:function(t){this.mediaInfo=null},onError:function(t){"MediaError"==t&&(this.mediaInfo&&String(this.mediaInfo.videoCodec).startsWith("hvc")||"HLS"==this.protocol_)&&(this.bOutHevcTip=!0,console.log("提示: 正在播放 H265 直出流, 确保浏览器版本较新, 并且开启硬件加速"))},onFullscreenChange:function(e){this.fullscreen=e,e?t(this.$el).find(".ptz-block-fs").draggable({handle:".ptz-center",containment:".play-area .video-js",delay:100}):t(this.$el).find(".ptz-block-fs").draggable("destroy"),this.$emit("fullscreen",e)},togglePTZVisible:function(){this.ptzVisible=!this.ptzVisible},resetActiveTimer:function(){var e=this;this.bControls=!0,this.activeTimer&&clearTimeout(this.activeTimer),this.activeTimer=setTimeout(function(){e.activeInterval=0,0==t(e.$el).find(".ptz-block-fs .ptz-cell.active").length&&(e.bControls=!1)},this.activeInterval||2e3)}}}}).call(e,o("0iPh"))},oO3j:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"#wrapper[data-v-8e066762]{width:100%}#wrapper #map[data-v-8e066762]{width:100%;height:100%}#wrapper #map .form-group.search[data-v-8e066762]{position:absolute;z-index:1000;top:15px;right:15px;width:200px}",""])}});