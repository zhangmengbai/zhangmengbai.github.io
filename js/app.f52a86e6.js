(function(t){function e(e){for(var n,i,r=e[0],c=e[1],u=e[2],f=0,p=[];f<r.length;f++)i=r[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"3afa":function(t,e,s){"use strict";var n=s("544e"),a=s.n(n);a.a},"544e":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],i={name:"app",created:function(){var t=document.getElementById("loading");t.style.opacity="0",t.style.transition="opacity 1s ease",setTimeout((function(){t.style.display="none"}))}},r=i,c=(s("7faf"),s("2877")),u=Object(c["a"])(r,a,o,!1,null,null,null),l=u.exports,f=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"start",class:{begin:t.begin}},[s("button",{staticClass:"begin-button",on:{click:t.start}},[t._v("Let ‘s GO")]),s("p",{staticClass:"tip"},[t._v("你汪提示：")]),s("p",{staticClass:"tip"},[t._v("阿叽记得开启音量哦")]),s("p",{staticClass:"tip"},[t._v("PC端食用体验更佳")])]),s("audio",{ref:"audio"},[s("source",{attrs:{src:"https://cdn.jiajicompany.com/bg.mp3",type:"audio/mpeg"}})]),s("section",{staticClass:"content"},[s("ul",{staticClass:"bg-list"},[s("li",{staticClass:"bg-item",class:{fade:!t.stage1},attrs:{id:"bg-item1"}}),s("li",{staticClass:"bg-item",class:{fade:!t.stage2},attrs:{id:"bg-item2"}}),s("li",{staticClass:"bg-item",class:{fade:!t.stage3},attrs:{id:"bg-item3"}}),s("li",{staticClass:"bg-item",class:{fade:!t.stage4},attrs:{id:"bg-item4"}}),s("li",{staticClass:"bg-item",class:{fade:!t.stage5},attrs:{id:"bg-item5"}}),s("li",{staticClass:"bg-item",attrs:{id:"bg-item6"}})]),s("p",{staticClass:"story-content",class:{fade:!t.update,content1:t.firstContent},style:{color:t.storyColor}},[t._v("\n      "+t._s(t.storyItem)+"\n    ")])])])},d=[],m={name:"home",data:function(){return{begin:!1,update:!1,storyItem:"大二那年在龙之谷认识了一只小叽，得亏阿汪是个女号，不然永远也不会知道小叽还有又腐又污的一面",storyIndex:0,storyList:["大二那年在龙之谷认识了一只小叽，得亏阿汪是个女号，不然永远也不会知道小叽还有又腐又污的一面","大三的时候把小叽拖进了天刀，刚入坑的小叽傻白傻白的，然后阿汪又是个甩手掌柜，直接把小叽放养了","阿汪和小叽两只小天香成天正事不干，到处拍照。话说拍照的最好地点莫过于黄昏下的杭州了，只可惜当年电脑太差，拍的画质太渣。","阿汪一直觉得小叽打游戏很菜，没想到小叽天赋异禀，直上秋水，把阿汪打击得不行，从此退隐江湖","不打游戏的时候，两条大咸鱼就开始谈天说地，但是小叽每次都嘲笑阿汪是老年人打字，把阿汪气的不行","小叽时不时会送点小礼物给阿汪，第一次是个便便emmm...，然后还有明信片，衣服什么的","不过明信片每次都收不到，后来小叽再也不给阿汪寄了，该不会是生气了吧，哎...","我学校的小学部·天鹅湖·我走时真的有两只黑天鹅，一只白天鹅，还有一对鸳鸯。觉得这东西会被扔掉，于是不写多了，就酱。生日快乐是第一次，也许会是最后一次，唯一一次。快乐，天天乐。","小叽曾如是写道，还附了句'全球限量发行'","阿汪也想给小叽送礼物，但阿汪无论如何也要不到小叽的地址","和小叽闹矛盾的时候也有，还记得有一次阿汪说错了话，大家不欢而散。正在绞尽脑汁写道歉信的时候，没想到宽宏大量的小叽主动原谅了阿汪","有一段时间大家都忙，阿汪和小叽很默契的没有打扰对方（不会是互相都忘记了8）","听说小叽去了澳洲，阿汪心里好羡慕啊，阿汪也想去国外深造，后悔当初不好好学习，但话说回来，好好学习不打游戏的话岂不就遇不到小叽咯","想当初的小叽傻呆傻呆的，最近似乎改变挺大，别的不说，至少拍照水平更凑合了","以后的小叽会变成什么风格的呢?猜不到，肯定会更漂亮的吧，不过只要看起来没我年轻就好了，诶嘿嘿","说了好些无关紧要的话，本来只是想跟已经长成大叽的小叽说一句:'好好学习呀，别成天刷剧打游戏啦！'","骗你的，不是这句。真正要说的是：","我叽生日快乐，永远快乐","Happy birthday to Lisa’s 24th birthday","你汪完工于2019.10.2"],stage1:!0,stage2:!0,stage3:!0,stage4:!0,stage5:!0,storyColor:"#595758",firstContent:!0}},methods:{start:function(){var t=this;this.begin=!0,this.$refs.audio.play();var e=setInterval((function(){t.storyIndex+=1,t.update=!1,setTimeout((function(){t.storyItem=t.storyList[t.storyIndex],t.update=!0}),1e3)}),7e3);setTimeout((function(){t.firstContent=!1}),7e3),setTimeout((function(){t.stage1=!1,t.storyColor="#697E92"}),28e3),setTimeout((function(){t.stage2=!1,t.storyColor="#585858"}),7e4),setTimeout((function(){t.stage3=!1}),98e3),setTimeout((function(){t.stage4=!1}),105e3),setTimeout((function(){clearInterval(e),t.stage5=!1}),14e4)}},created:function(){},mounted:function(){}},g=m,b=(s("3afa"),Object(c["a"])(g,p,d,!1,null,"40ee7a11",null)),y=b.exports;n["a"].use(f["a"]);var v=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:y}]}),h=s("2f62");n["a"].use(h["a"]);var C=new h["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:v,store:C,render:function(t){return t(l)}}).$mount("#app")},"7faf":function(t,e,s){"use strict";var n=s("8fba"),a=s.n(n);a.a},"8fba":function(t,e,s){}});
//# sourceMappingURL=app.f52a86e6.js.map