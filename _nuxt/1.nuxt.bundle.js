webpackJsonp([1],{127:function(s,t,i){i(131);var a=i(16)(i(130),i(135),"data-v-52050809",null);s.exports=a.exports},128:function(s,t,i){s.exports=i.p+"img/1-2.5b27945.png"},130:function(s,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(60),e=i.n(a);t.default={mounted:function(){var s=this;this.$nextTick(function(){e()("#fullpage").fullpage({verticalCentered:!0,resize:!1,scrollingSpeed:800,easing:"easeInOutCirc",menu:!1,navigation:!0,navigationPosition:"right",slidesNavigation:!0,slidesNavPosition:"bottom",loopBottom:!1,loopTop:!1,loopHorizontal:!0,autoScrolling:!0,scrollOverflow:!1,css3:!0,paddingTop:"0px",paddingBottom:"0em",normalScrollElementTouchThreshold:5,keyboardScrolling:!0,touchSensitivity:15,continuousVertical:!1,animateAnchor:!0,sectionSelector:".section",slideSelector:".slide",onLeave:function(t,i,a){s.jianyin(i),s.changebg(i)},afterLoad:function(t,i){s.run(i),s.svg(i)}}),s.run(1)})},methods:{run:function(s){e()(".page1").find("*").css("animationPlayState","paused"),e()(".page2").find("*").css("animationPlayState","paused"),e()(".page3").find("*").css("animationPlayState","paused"),e()(".page4").find("*").css("animationPlayState","paused"),e()(".page"+s).find("*").css("animationPlayState","running")},jianyin:function(s){var t=e()(".section");switch(s){case 1:e()(t[3]).addClass("pagehide").removeClass("pageshow"),e()(t[0]).removeClass("pagehide").addClass("pageshow");break;case 2:e()(t[0]).addClass("pagehide").removeClass("pageshow"),e()(t[1]).removeClass("pagehide").addClass("pageshow");break;case 3:e()(t[1]).addClass("pagehide").removeClass("pageshow"),e()(t[2]).removeClass("pagehide").addClass("pageshow");break;case 4:e()(t[2]).addClass("pagehide").removeClass("pageshow"),e()(t[3]).removeClass("pagehide").addClass("pageshow")}},svg:function(s){2===s&&e()(".page2 .line path").css("animationPlayState","running"),3===s&&e()(".computersvg  path").css("animationPlayState","running")},changebg:function(s){switch(s){case 1:e()("body").css("background","#FCAF03");break;case 2:e()("body").css("background","#75e0b9");break;case 3:e()("body").css("background","#5aa3e0");break;case 4:e()("body").css("background","#ff6f4d")}}}}},131:function(s,t){},135:function(s,t,i){s.exports={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{attrs:{id:"fullpage"}},[s._m(0),i("div",{staticClass:"section"},[i("div",{staticClass:"page"},[s._m(1),i("div",{staticClass:"box-left boxodd-right"},[i("div",{staticClass:" page2"},[s._m(2),i("div",{staticClass:" stips magic"}),i("div",{staticClass:" stips hat"}),i("div",{staticClass:" phone"}),i("div",{staticClass:" stips card card1"}),i("div",{staticClass:" stips card card2"}),i("div",{staticClass:" stips card card3"}),i("div",{staticClass:" stips Chip1"}),i("div",{staticClass:" stips Chip2"}),i("div",{staticClass:" stips Chip3"}),i("div",{staticClass:" stips coin"}),i("div",{staticClass:" stips money"}),i("div",{staticClass:" stips banner"}),i("div",{staticClass:" stips line",attrs:{id:"line"}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:se":"http://svg-edit.googlecode.com","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 480 277"}},[i("g",[i("line",{attrs:{y2:"12.50247",x2:"241.74997",y1:"176.99925",x1:"15.7544"}}),i("line",{attrs:{y2:"55.00164",x2:"258.74963",y1:"16.5024",x1:"250.2498"}}),i("line",{attrs:{y2:"186.99905",x2:"248.74983",y1:"63.00148",x1:"260.74959"}}),i("line",{attrs:{y2:"192.49894",x2:"251.74977",y1:"172.49934",x1:"275.7493"}}),i("line",{attrs:{y2:"89.50096",x2:"367.2475",y1:"161.99954",x1:"289.24903"}}),i("line",{attrs:{y2:"35.50202",x2:"426.24635",y1:"80.00115",x1:"375.74734"}}),i("line",{attrs:{y2:"140.49996",x2:"467.24554",y1:"35.50202",x1:"435.24617"}}),i("line",{attrs:{y2:"168.49942",x2:"421.24645",y1:"152.99972",x1:"463.24562"}}),i("line",{attrs:{y2:"171.99935",x2:"414.24658",y1:"200.49879",x1:"331.24821"}}),i("line",{attrs:{y2:"172.99933",x2:"288.24905",y1:"198.99882",x1:"321.7484"}}),i("line",{attrs:{y2:"21.5023",x2:"116.75242",y1:"160.99956",x1:"274.24933"}}),i("line",{attrs:{y2:"273.99735",x2:"136.75202",y1:"23.50226",x1:"110.75253"}}),i("line",{attrs:{y2:"275.99731",x2:"136.25203",y1:"189.499",x1:"15.7544"}}),i("line",{attrs:{y2:"53.00168",x2:"340.24803",y1:"167.49944",x1:"111.75252"}}),i("line",{attrs:{y2:"80.50114",x2:"365.74753",y1:"53.00168",x1:"347.74789"}}),i("line",{attrs:{y2:"176.99925",x2:"421.24645",y1:"90.00095",x1:"374.74736"}}),i("line",{attrs:{y2:"228.99823",x2:"328.74826",y1:"186.99905",x1:"420.24647"}}),i("line",{attrs:{y2:"268.49745",x2:"235.25009",y1:"237.99805",x1:"311.2486"}}),i("line",{attrs:{y2:"271.99739",x2:"235.25009",y1:"258.49765",x1:"408.74669"}}),i("line",{attrs:{y2:"236.99807",x2:"328.74826",y1:"253.99774",x1:"409.74667"}}),i("line",{attrs:{y2:"174.4993",x2:"111.25252",y1:"232.99815",x1:"308.74865"}})])])])])])])]),i("div",{staticClass:"section"},[i("div",{staticClass:" page"},[i("div",{staticClass:"box-left"},[i("div",{staticClass:" page3"},[i("svg",{staticClass:" computersvg",attrs:{overflow:"hidden",xmlns:"http://www.w3.org/2000/svg","xmlns:se":"http://svg-edit.googlecode.com","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 376 258"}},[i("g",{staticStyle:{"pointer-events":"all"}},[i("title",{staticStyle:{"pointer-events":"inherit"}},[s._v("compuster")]),i("path",{attrs:{stroke:"#191919","fill-opacity":"0","stroke-width":"25",d:"M 0 0 H 376  V 0 230"}}),i("path",{attrs:{stroke:"#292a2b","fill-opacity":"0","stroke-width":"28",d:"M -6 0 V 0 245 L 376 245"}}),i("path",{attrs:{stroke:"#191919","fill-opacity":"0","stroke-width":"12",d:"M 6 0 V 0 225 L 376 225"}})])]),i("div",{staticClass:" stips computerzhezhao"}),s._m(3),s._m(4),i("div",{staticClass:" stips Gear1"}),i("div",{staticClass:" stips Gear2"}),i("div",{staticClass:" stips Gear3"}),i("div",{staticClass:" stips Rocket"}),s._m(5),s._m(6),i("div",{staticClass:" stips xingxing"})])]),s._m(7)])]),s._m(8)])},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:"page"},[a("div",{staticClass:"box-left"},[a("div",{staticClass:" page1"},[a("div",{staticClass:" stips cloud1"}),a("div",{staticClass:" stips cloud2"}),a("div",{staticClass:" stips cloud4"}),a("div",{staticClass:" left"},[a("div",{staticClass:" stips shan"}),a("div",{staticClass:" stips balloon"}),a("div",{staticClass:" stips money1"}),a("div",{staticClass:" stips money2"}),a("div",{staticClass:" stips money3"}),a("div",{staticClass:" stips money4"})]),a("div",{staticClass:" right-box"},[a("div",{staticClass:" right"},[a("div",{staticClass:" stips shan"}),a("div",{staticClass:"stips shanxiaocao"}),a("div",{staticClass:" stips groud1"}),a("div",{staticClass:" stips groud2"}),a("div",{staticClass:" stips groud3 car-box"}),a("div",{staticClass:" groud4 car-box"},[a("div",{staticClass:" stips car"})]),a("div",{staticClass:" stips ktvfont"}),a("div",{staticClass:" stips ktv"},[a("div",{staticClass:" stips deng"})]),a("div",{staticClass:" stips xiaocao"})])]),a("div",{staticClass:" phone"})])]),a("div",{staticClass:"box-right"},[a("img",{attrs:{src:i(128)}})])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"box-right boxodd-left"},[a("img",{attrs:{src:i(128)}})])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:" magicbox"},[i("div",{staticClass:" stips diamond"}),i("div",{staticClass:" stips Starbig"}),i("div",{staticClass:" stips Starsmall"}),i("div",{staticClass:" stips Ray"},[i("div",{staticClass:" stips Ray2"})]),i("div",{staticClass:" stips Circle1"}),i("div",{staticClass:" stips Circle2"}),i("div",{staticClass:" stips Circle3"})])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:" computer"},[i("div",{staticClass:" colorblock1"}),i("div",{staticClass:" colorblock2"},[i("div",{staticClass:" stips music"}),i("div",{staticClass:" stips load"}),i("div",{staticClass:" jindubox"},[i("li",{staticClass:"stips jindutiao d1"}),i("li",{staticClass:"stips jindutiao d2"}),i("li",{staticClass:"stips jindutiao d3"}),i("li",{staticClass:"stips jindutiao d4"})])]),i("div",{staticClass:" colorblock3"},[i("div",{staticClass:"stips music"})]),i("div",{staticClass:" colorblock4"}),i("div",{staticClass:" colorblock5"},[i("div",{staticClass:"stips music"})])])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:" phone"},[i("div",{staticClass:" xinhao1"}),i("div",{staticClass:" xinhao2"}),i("div",{staticClass:" xinhao3"})])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:" huxian-box"},[i("div",{staticClass:" stips huxian"})])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:" huxian1box"},[i("div",{staticClass:"stips huxian1"})])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"box-right"},[a("img",{attrs:{src:i(128)}})])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:" page"},[a("div",{staticClass:" box-right boxodd-left"},[a("img",{attrs:{src:i(128)}})]),a("div",{staticClass:"box-left boxodd-right"},[a("div",{staticClass:" page4",staticStyle:{margin:"0px -33px 0px 0px"}},[a("div",{staticClass:"stips Street"}),a("div",{staticClass:"phone"}),a("div",{staticClass:"stips Building-red"}),a("div",{staticClass:"stips Building-yellow"}),a("div",{staticClass:"stips Building-green"}),a("div",{staticClass:"stips Building-Purple"}),a("div",{staticClass:"stips Building-yellow2"}),a("div",{staticClass:"stips Building-Gray1"}),a("div",{staticClass:"stips Building-Gray2"}),a("div",{staticClass:"stips Building-Gray3"}),a("div",{staticClass:"stips Light-left"}),a("div",{staticClass:"stips Light-right"}),a("div",{staticClass:"stips xiaocao1"}),a("div",{staticClass:"stips xiaocao2"}),a("div",{staticClass:"stips xiaocao3"}),a("div",{staticClass:"stips tree1"}),a("div",{staticClass:"stips tree2"}),a("div",{staticClass:"stips tree3"}),a("div",{staticClass:"stips tree4"}),a("div",{staticClass:"stips could"}),a("div",{staticClass:"stips msg1"}),a("div",{staticClass:"stips msg2"}),a("div",{staticClass:"stips msg3"}),a("div",{staticClass:"stips balloon"})])])])])}]}}});