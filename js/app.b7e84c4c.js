(function(t){function e(e){for(var n,h,a=e[0],o=e[1],c=e[2],l=0,f=[];l<a.length;l++)h=a[l],s[h]&&f.push(s[h][0]),s[h]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var o=i[a];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=h(h.s=i[0]))}return t}var n={},s={app:0},r=[];function h(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,h),i.l=!0,i.exports}h.m=t,h.c=n,h.d=function(t,e,i){h.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},h.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},h.t=function(t,e){if(1&e&&(t=h(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(h.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)h.d(i,n,function(e){return t[e]}.bind(null,n));return i},h.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return h.d(e,"a",e),e},h.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},h.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=o;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},r=[],h=(i("7faf"),i("2877")),a={},o=Object(h["a"])(a,s,r,!1,null,null,null),c=o.exports,u=i("8c4f"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"home",staticClass:"home"},[i("canvas",{staticClass:"flow-canvas",attrs:{id:"canvas"}}),i("div",{attrs:{id:"noiseLayer"}}),!0===t.bLoad?i("div",{staticClass:"preloader"},[t._m(0)]):t._e(),i("section",{attrs:{id:"welcome"}},[i("div",{staticClass:"hero-content"},[i("vue-typed-js",{staticClass:"typed",attrs:{strings:["Had I not seen the Sun ^1000","I could have borne the shade ^1000"],typeSpeed:100,loop:!0,backSpeed:70}},[i("span",{staticClass:"typing"})])],1)]),i("div",{staticClass:"menuIcon"},[i("svg",{staticClass:"ham hamRotate ham7 ",class:{active:t.mActive},attrs:{viewBox:"0 0 100 100",width:"60"},on:{click:t.mToggle}},[i("path",{staticClass:"line top",attrs:{d:"m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"}}),i("path",{staticClass:"line middle",attrs:{d:"m 70,50 h -40"}}),i("path",{staticClass:"line bottom",attrs:{d:"m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"}})])]),i("transition",{attrs:{name:"fade"}},[t.isShowMenu?i("div",{staticClass:"menuList"},[i("a",{staticClass:"menuItem"},[t._v("音乐主题页(制作中)")]),i("a",{staticClass:"menuTitle"},[t._v("更多主题持续制作中")])]):t._e()])],1)},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"status"},[i("img",{attrs:{src:"",alt:"logo"}})])}],d=i("8cb8");function p(t,e,i,n){return t=1,e=window.innerWidth*t,i=window.innerHeight*t,{width:e,height:i}}function v(t,e,i,n){this.R=t,this.G=e,this.B=i,this.A=n}v.prototype.clone=function(){return new v(this.R,this.G,this.B,this.A)};var g=i("d225"),w=i("bd86"),m=function t(){Object(g["a"])(this,t),Object(w["a"])(this,"range",function(t,e){return Math.round(t+Math.random()*(e-t))}),Object(w["a"])(this,"rangeFloat",function(t,e){return t+Math.random()*(e-t)}),Object(w["a"])(this,"rangeArray",function(t,e,i){for(var n=[],s=0;s<i;s++)n.push(this.range(t,e));return n}),Object(w["a"])(this,"rangeFloatArray",function(t,e,i){for(var n=[],s=0;s<i;s++)n.push(this.range(t,e));return n}),Object(w["a"])(this,"dice",function(t,e){t=Math.round(t),e=Math.round(e);for(var i=0,n=0;n<t;n++)i+=1+Math.floor(Math.random()*e);return i}),Object(w["a"])(this,"diceArray",function(t,e,i){for(var n=[],s=0;s<i;s++)n.push(this.dice(t,e));return n}),Object(w["a"])(this,"fudge",function(t,e){t=Math.round(t),e=Math.round(e)||1;for(var i=0,n=0;n<t;n++)i+=-e+Math.floor(Math.random()*(2*e+1));return i}),Object(w["a"])(this,"fudgeFloat",function(t,e){t=Math.round(t),e=e||1;for(var i=0,n=0;n<t;n++)i+=-e+Math.random()*(2*e);return i}),Object(w["a"])(this,"fudgeArray",function(t,e,i){for(var n=[],s=0;s<i;s++)n.push(this.fudge(t,e));return n}),Object(w["a"])(this,"fudgeFloatArray",function(t,e,i){for(var n=[],s=0;s<i;s++)n.push(this.fudgeFloat(t,e));return n}),Object(w["a"])(this,"chance",function(t,e){var i=Math.random()*e;return i<t}),Object(w["a"])(this,"chanceArray",function(t,e,i){for(var n=[],s=0;s<i;s++)n.push(this.chance(t,e));return n}),Object(w["a"])(this,"percent",function(t){var e=100*Math.random();return e<t}),Object(w["a"])(this,"percentArray",function(t,e){for(var i=[],n=0;n<e;n++)i.push(this.percent(t));return i}),Object(w["a"])(this,"item",function(t){var e=t.length,i=Math.floor(Math.random()*e);return t[i]}),Object(w["a"])(this,"weightedNumber",function(t){for(var e=t.length,i=0,n=0;n<e;n++)i+=t[n];var s=Math.random()*i,r=0;for(n=0;n<e;n++)if(r+=t[n],s<=r)return n+1}),Object(w["a"])(this,"weightedItem",function(t,e){for(var i=t.length,n=0,s=0;s<i;s++)n+=e[s]||0;var r=Math.random()*n,h=0;for(s=0;s<i;s++)if(h+=e[s]||0,r<=h)return t[s]}),Object(w["a"])(this,"weightedFunction",function(t,e){for(var i=t.length,n=0,s=0;s<i;s++)n+=e[s]||0;var r=Math.random()*n,h=0;for(s=0;s<i;s++)if(h+=e[s]||0,r<=h){t[s]();break}}),Object(w["a"])(this,"cluster",function(t,e,i,n){for(var s=this.range(e,i),r=[],h=0;h<t;h++)r.push(s+this.range(-n,n));return r}),Object(w["a"])(this,"clusterFudge",function(t,e,i,n,s){s=s||1;for(var r=this.range(e,i),h=[],a=0;a<t;a++)h.push(r+this.fudge(n,s));return h}),Object(w["a"])(this,"deck",function(t){return new M(t)}),Object(w["a"])(this,"weightedDeck",function(t,e){return new b(t,e)})};function b(t,e){var i;if(e=e||{},this.contents=t||[],this.weights=e.weights||[],this.instances=e.instances||[],0===this.weights.length)for(i=0;i<t.length;i++)this.weights.push(1);if(0===this.instances.length)for(i=0;i<t.length;i++)this.instances.push(1)}function M(t){this.contents=t||[]}b.prototype.draw=function(t){if(this.contents.length>0){var e=this.contents.length;if(!(t>=0&&t<e)){for(var i=0,n=0;n<e;n++)i+=this.weights[n]||0;var s=Math.random()*i,r=0;for(n=0;n<e;n++)if(r+=this.weights[n]||0,s<=r){t=n;break}}var h=this.contents[t];return this.instances[t]-=1,this.instances[t]<1&&(this.contents.splice(t,1),this.weights.splice(t,1),this.instances.splice(t,1)),h}return null},b.prototype.look=function(t){if(this.contents.length>0){var e=this.contents.length;if(!(t>=0&&t<e)){for(var i=0,n=0;n<e;n++)i+=this.weights[n]||0;var s=Math.random()*i,r=0;for(n=0;n<e;n++)if(r+=this.weights[n]||0,s<=r){t=n;break}}return this.contents[t]}return null},b.prototype.insert=function(t,e){e=e||{};var i=e.index||Math.round(Math.random()*this.contents.length),n=e.weight||1,s=e.instances||1;this.contents.splice(i,0,t),this.weights.splice(i,0,n),this.instances.splice(i,0,s)},b.prototype.shuffle=function(){for(var t=[],e=[],i=[],n=this.contents.length,s=0;s<n;s++){var r=Math.floor(Math.random()*this.contents.length);t.push(this.contents[r]),e.push(this.weights[r]),i.push(this.instances[r]),this.contents.splice(r,1),this.weights.splice(r,1),this.instances.splice(r,1)}this.contents=t,this.weights=e,this.instances=i},b.prototype.show=function(){return this.contents},M.prototype.draw=function(t){if(this.contents.length>0){t=t||Math.floor(Math.random()*this.contents.length);var e=this.contents[t];return this.contents.splice(t,1),e}return null},M.prototype.look=function(t){return this.contents.length>0?(t=t||Math.floor(Math.random()*this.contents.length),this.contents[t]):null},M.prototype.insert=function(t,e){e=e||Math.round(Math.random()*this.contents.length),this.contents.splice(e,0,t)},M.prototype.shuffle=function(){for(var t=[],e=this.contents.length,i=0;i<e;i++)t.push(this.draw());this.contents=t},M.prototype.show=function(){return this.contents};i("6c7b"),i("0b21");var y=i("b0b4"),j=function(){function t(e){Object(g["a"])(this,t),void 0===e&&(e=Math),this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.p=[];for(var i=0;i<256;i++)this.p[i]=Math.floor(256*e.random());this.perm=[];for(var n=0;n<512;n++)this.perm[n]=this.p[255&n];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}return Object(y["a"])(t,[{key:"noise",value:function(e,i){var n,s,r,h,a,o=.5*(Math.sqrt(3)-1),c=(e+i)*o,u=Math.floor(e+c),l=Math.floor(i+c),f=(3-Math.sqrt(3))/6,d=(u+l)*f,p=u-d,v=l-d,g=e-p,w=i-v;g>w?(h=1,a=0):(h=0,a=1);var m=g-h+f,b=w-a+f,M=g-1+2*f,y=w-1+2*f,j=255&u,O=255&l,k=this.perm[j+this.perm[O]]%12,R=this.perm[j+h+this.perm[O+a]]%12,x=this.perm[j+1+this.perm[O+1]]%12,A=.5-g*g-w*w;A<0?n=0:(A*=A,n=A*A*t.dot(this.grad3[k],g,w));var B=.5-m*m-b*b;B<0?s=0:(B*=B,s=B*B*t.dot(this.grad3[R],m,b));var C=.5-M*M-y*y;return C<0?r=0:(C*=C,r=C*C*t.dot(this.grad3[x],M,y)),70*(n+s+r)}},{key:"noise3d",value:function(e,i,n){var s,r,h,a,o,c,u,l,f,d,p=1/3,v=(e+i+n)*p,g=Math.floor(e+v),w=Math.floor(i+v),m=Math.floor(n+v),b=1/6,M=(g+w+m)*b,y=g-M,j=w-M,O=m-M,k=e-y,R=i-j,x=n-O;k>=R?R>=x?(o=1,c=0,u=0,l=1,f=1,d=0):k>=x?(o=1,c=0,u=0,l=1,f=0,d=1):(o=0,c=0,u=1,l=1,f=0,d=1):R<x?(o=0,c=0,u=1,l=0,f=1,d=1):k<x?(o=0,c=1,u=0,l=0,f=1,d=1):(o=0,c=1,u=0,l=1,f=1,d=0);var A=k-o+b,B=R-c+b,C=x-u+b,_=k-l+2*b,G=R-f+2*b,I=x-d+2*b,S=k-1+3*b,P=R-1+3*b,F=x-1+3*b,H=255&g,T=255&w,L=255&m,Y=this.perm[H+this.perm[T+this.perm[L]]]%12,E=this.perm[H+o+this.perm[T+c+this.perm[L+u]]]%12,$=this.perm[H+l+this.perm[T+f+this.perm[L+d]]]%12,X=this.perm[H+1+this.perm[T+1+this.perm[L+1]]]%12,J=.6-k*k-R*R-x*x;J<0?s=0:(J*=J,s=J*J*t.dot(this.grad3[Y],k,R,x));var N=.6-A*A-B*B-C*C;N<0?r=0:(N*=N,r=N*N*t.dot(this.grad3[E],A,B,C));var q=.6-_*_-G*G-I*I;q<0?h=0:(q*=q,h=q*q*t.dot(this.grad3[$],_,G,I));var U=.6-S*S-P*P-F*F;return U<0?a=0:(U*=U,a=U*U*t.dot(this.grad3[X],S,P,F)),32*(s+r+h+a)}}],[{key:"dot",value:function(t,e,i){return t[0]*e+t[1]*i}}]),t}(),O=function(){function t(){Object(g["a"])(this,t),this.master=new v(0,0,0,0),this.highPass=new v(0,0,0,0),this.lowPass=new v(0,0,0,0)}return Object(y["a"])(t,[{key:"fill",value:function(t,e){t.fillStyle=this.processRGBA(e)}},{key:"stroke",value:function(t,e){t.strokeStyle=this.processRGBA(e)}},{key:"fillRGBA",value:function(t,e,i,n,s){t.fillStyle=this.processRGBA(new v(e,i,n,s))}},{key:"strokeRGBA",value:function(t,e,i,n,s){t.strokeStyle=this.processRGBA(new v(e,i,n,s))}},{key:"string",value:function(t){return this.processRGBA(t)}},{key:"stringRGBA",value:function(t,e,i,n){return this.processRGBA(new v(t,e,i,n))}},{key:"processRGBA",value:function(e,i){var n=Math.round(e.R+this.master.R),s=Math.round(e.G+this.master.G),r=Math.round(e.B+this.master.B),h=e.A+this.master.A,a=(n+s+r)/3,o=a/255,c=1-a/255;return n+=Math.round(this.highPass.R*o+this.lowPass.R*c),s+=Math.round(this.highPass.G*o+this.lowPass.G*c),r+=Math.round(this.highPass.B*o+this.lowPass.B*c),n=t.valueInRange(n,0,255),s=t.valueInRange(s,0,255),r=t.valueInRange(r,0,255),h=t.valueInRange(h,0,1),i?new v(n,s,r,h):t.buildColour(n,s,r,h)}}],[{key:"blend",value:function(t,e,i){var n=t.R+Math.round((e.R-t.R)*(i/100)),s=t.G+Math.round((e.G-t.G)*(i/100)),r=t.B+Math.round((e.B-t.B)*(i/100)),h=t.A+(e.A-t.A)*(i/100);return new v(n,s,r,h)}},{key:"blend2",value:function(t,e,i){var n=i/100,s=Math.floor(t.R*(1-n))+Math.ceil(e.R*n),r=Math.floor(t.G*(1-n))+Math.ceil(e.G*n),h=Math.floor(t.B*(1-n))+Math.ceil(e.B*n),a=t.A*(1-n)+e.A*n;return new v(s,r,h,a)}},{key:"darkerColor",value:function(e,i){var n=t.valueInRange(e.R-i,0,255),s=t.valueInRange(e.G-i,0,255),r=t.valueInRange(e.B-i,0,255);return new v(n,s,r,e.A)}},{key:"lighterColor",value:function(e,i){var n=t.valueInRange(e.R+i,0,255),s=t.valueInRange(e.G+i,0,255),r=t.valueInRange(e.B+i,0,255);return new v(n,s,r,e.A)}},{key:"buildColour",value:function(t,e,i,n){return"rgba("+t+","+e+","+i+","+n+")"}},{key:"valueInRange",value:function(t,e,i){return t<e&&(t=e),t>i&&(t=i),t}},{key:"getLuminosity",value:function(t){return.299*t.R+.587*t.G+.114*t.B}}]),t}(),k=new O,R=new m,x=function(){function t(e,i,n,s,r,h,a,o,c,u,l,f,d){Object(g["a"])(this,t),this.i=-1,this.j=0,this.completeCols=[],this.ctx=e,this.col1=h,this.col2=a,this.col3=o,this.ratio=s,this.noiseLevel=4*s,this.thickness=3,this.addNoise=l,this.resetPaint=f,this.TAU=d,this.simplex=new j,this.rowHeight=135*r,this.height=Math.ceil(n),this.width=Math.ceil(i),this.contrast=100*c,this.cells=this.width,this.streakIndex=0,this.rowOffset=0,r*=Math.max(this.width,this.height)/(255*s),this.wobbleHeight=R.rangeFloat(17,26)*r,this.driftHeight=140*r,this.vertOffset=this.rowHeight+this.wobbleHeight+this.driftHeight,this.banding=(u||.8)*(r/1),this.pScale=this.banding/r,this.scale=400*r,this.heightX=1.5*this.scale,this.heightY=2*this.scale,this.wobbleX=this.scale/2,this.wobbleY=this.scale/1.5,this.driftY=1.6*this.scale,this.colorY=2*this.scale,this.rows=this.height+2*this.vertOffset,this._newRow()}return Object(y["a"])(t,[{key:"draw",value:function(t){var e=this;if(this.i<this.rows)for(var i=this.ctx,n=this.width*t,s=0;s<n;s++){var r=this.simplex.noise(this.j/this.heightX,this.i/this.heightY)*this.rowHeight,h=this.simplex.noise((this.j+1e3)/this.wobbleX,this.i/this.wobbleY)*this.wobbleHeight,a=this.simplex.noise(2e3,this.j/this.driftY)*this.driftHeight,o=this.i-this.vertOffset+(r+h+a);if(o+this.thickness<0)this._proceed(),s--;else{if(this.completeCols.length>=this.width-2)return this.specks(),this.i=this.rows,void setTimeout(function(){e.resetPaint()},800);if(o>=this.height)-1===this.completeCols.indexOf(this.j)&&this.completeCols.push(this.j),this._proceed();else{var c=this.simplex.noise(this.streakIndex,(this.j+this.rowOffset)/this.colorY);c+=.01*Math.sign(c)*this.contrast,c=(c+1)/2;var u=void 0;if(c>.5?(c=2*(c-.5),u=O.blend2(this.col2,this.col3,100*c)):(c*=2,u=O.blend2(this.col1,this.col2,100*c)),this.addNoise){var l=R.rangeFloat(-this.noiseLevel,this.noiseLevel);u.R+=l,u.G+=l,u.B+=l}k.fill(i,u),i.fillRect(this.j,o,1,this.thickness),this._proceed()}}}}},{key:"_proceed",value:function(){this.j++,this.j>=this.width&&this._newRow()}},{key:"_newRow",value:function(){this.i++,this.j=0,this.rowOffset+=R.rangeFloat(-10,10);var t=.6;this.streakIndex+=R.rangeFloat(-.05*t,.05*t),R.percent(1.2*this.pScale)?this.streakIndex+=R.rangeFloat(.2*t,.3*t):R.percent(.7*this.pScale)&&(this.streakIndex+=R.rangeFloat(1*t,2*t))}},{key:"specks",value:function(){if(R.percent(40)){var t=R.weightedNumber([3,2,1,1]),e=this.scale/(1040/this.ratio),i=1.1,n=O.blend2(this.col1,this.col2,R.range(0,50));k.fill(this.ctx,n);for(var s=0;s<t;s++)for(var r=R.range(5,11),h=R.range(0,this.cells),a=R.range(this.vertOffset,this.rows-this.vertOffset),o=0;o<r;o++){var c=R.rangeFloat(.1*e,.6*e);R.percent(10)&&(c=R.rangeFloat(.6*e,.9*e)),R.percent(2)&&(c=R.rangeFloat(.9*e,i*e));var u=i*e/c,l=23*u,f=4*u,d=h+R.range(-l,l),p=a+R.range(-f,f),v=this.simplex.noise(d/this.heightX,p/this.heightY)*this.rowHeight;l=this.simplex.noise((d+1e3)/this.wobbleX,p/this.wobbleY)*this.wobbleHeight;var g=this.simplex.noise(2e3,d/this.driftY)*this.driftHeight;p+=v+l+g-this.vertOffset,this.ctx.beginPath(),this.ctx.arc(d,p,c,0,this.TAU),this.ctx.fill()}}}}]),t}();function A(t,e,i,n,s){var r=document.createElement("canvas"),h=r.getContext("2d"),a=t*i,o=e*i;r.width=a,r.height=o,n*=i;for(var c=0;c<o;c++)for(var u=0;u<a;u++){var l=Math.round(255*Math.random());l=255*Math.round(Math.random());var f=Math.random();h.fillStyle="rgba("+l+","+l+","+l+","+f+")",h.globalAlpha=n,h.fillRect(u,c,1,1)}var d=r.toDataURL(),p=document.getElementById(s);p.style.backgroundImage="url("+d+")",p.style.backgroundSize=t+"px "+e+"px"}var B=null,C=0,_=0,G=1,I=2*Math.PI,S=[],P=[],F=0,H={},T=[],L={},Y=!1;function E(){B=document.getElementById("canvas"),L=B.getContext("2d"),A(100,100,G,.1,"noiseLayer"),B.width=p(G,C,_,L).width,B.height=p(G,C,_,L).height,S=[new v(0,32,185,1),new v(235,98,216,1),new v(10,200,200,1),new v(255,245,235,1),new v(5,5,5,1),new v(255,160,180,1),new v(255,170,170,1),new v(255,140,90,1),new v(245,25,35,1),new v(10,10,70,1),new v(255,80,100,1),new v(70,0,80,1),new v(120,235,200,1),new v(160,150,170,1),new v(220,20,80,1),new v(210,150,120,1)],P=[new v(0,0,40,1),new v(0,52,65,1),new v(255,230,140,1),new v(255,80,100,1),new v(255,180,210,1)],T=[[P[0],S[10],P[1]],[P[0],P[3],S[15]],[P[0],P[1],P[2]],[S[4],P[1],S[10]],[S[4],S[9],S[11]],[S[4],P[0],S[11]],[S[4],S[11],S[12]],[P[1],S[14],S[10]],[S[9],S[10],S[12]],[P[1],S[10],S[12]],[S[4],S[9],S[14]],[S[4],S[9],S[12]],[S[4],S[9],S[8]],[P[0],P[3],S[6]],[S[4],P[0],P[3]],[S[4],P[0],S[7]],[S[4],S[9],S[7]],[P[0],P[1],S[10]],[S[4],P[1],S[14]],[P[0],S[13],S[5]],[S[10],S[13],S[5]],[P[1],S[13],S[10]],[S[3],S[13],S[10]],[S[3],S[13],S[9]],[S[4],S[9],P[1]],[S[3],P[0],S[4]],[P[0],P[1],S[7]],[P[0],S[9],S[5]],[S[6],S[13],S[10]],[S[4],P[0],S[15]],[S[4],S[9],S[13]],[S[4],S[9],S[6]],[S[4],S[9],S[10]],[P[0],S[0],S[5]],[S[0],P[0],S[4]]],setTimeout(function(){$(),X()},1e3)}function $(){var t=F,e=new m;while(t===F)t=e.range(0,T.length-1);var i=T[t];F=t,H=new x(L,B.width,B.height,G,e.rangeFloat(.6,2),i[0],i[1],i[2],.05,.3,Y,$,I)}function X(){H.draw(1),requestAnimationFrame(X)}x.lowPass=new v(50,45,25,0);var J={data:function(){return{bLoad:!1,mActive:!1,isShowMenu:!1}},computed:{},methods:{toMusic:function(){this.$router.push({name:"Music"})},toCas:function(){this.$router.push({name:"CanvasTest"})},mToggle:function(){this.mActive=!this.mActive,this.isShowMenu=!this.isShowMenu,console.log(this.mActive)}},mounted:function(){var t=this;setTimeout(function(){t.bLoad=!1},500),E()},components:{VueTypedJs:d["VueTypedJs"]}},N=J,q=(i("648f"),Object(h["a"])(N,l,f,!1,null,"5dfed3e7",null)),U=q.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"music"})},V=[],z={name:"music",data:function(){return{}},methods:{},mounted:function(){}},W=z,K=Object(h["a"])(W,D,V,!1,null,"1a1ce910",null),Q=K.exports;n["a"].use(u["a"]);var Z=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:U},{path:"/music",name:"music",component:Q}]}),tt=i("2f62");n["a"].use(tt["a"]);var et=new tt["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:Z,store:et,render:function(t){return t(c)}}).$mount("#app")},"648f":function(t,e,i){"use strict";var n=i("ae01"),s=i.n(n);s.a},"7faf":function(t,e,i){"use strict";var n=i("8fba"),s=i.n(n);s.a},"8fba":function(t,e,i){},ae01:function(t,e,i){}});
//# sourceMappingURL=app.b7e84c4c.js.map