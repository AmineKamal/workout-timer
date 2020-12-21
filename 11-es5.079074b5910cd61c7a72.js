!function(){function t(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw s}}}}function e(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(c){o=!0,r=c}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"ct+p":function(i,o,s){"use strict";s.r(o),s.d(o,"HomePageModule",(function(){return ct}));var c=s("ofXK"),l=s("TEn/"),u=s("3Pt+"),b=s("tyNb"),p=s("mrSG"),h=s("haJZ");function d(t){return function(e){return e[t]}}function f(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return(t+="").length>=e?t:new Array(e-t.length+1).join(n)+t}function g(t){var e=Math.floor(t/60),n=t-60*e;return f(e,2)+":"+f(n,2)}var m=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;r(this,t),this.precision=e,this.subscribers=[],this.callbacks={}}return a(t,[{key:"subscribe",value:function(t){this.subscribers.push(t)}},{key:"on",value:function(t,e){var n=this;(Array.isArray(t)?t:[t]).forEach((function(t){n.callbacks[t]?n.callbacks[t].push(e):n.callbacks[t]=new v(e)}))}},{key:"start",value:function(t){var e=this;return Object.keys(this.callbacks).map(Number).forEach((function(t){return e.callbacks[t].unlock()})),new Promise((function(n,i){e.resolve=n,e.reject=i,e.remaining=Math.floor(t/e.precision),e.interval=setInterval((function(){return e.decrement()}),e.precision),e.publish()}))}},{key:"pause",value:function(){clearInterval(this.interval)}},{key:"resume",value:function(){var t=this;this.interval=setInterval((function(){return t.decrement()}),this.precision)}},{key:"stop",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];clearInterval(this.interval),t?this.reject():this.resolve()}},{key:"decrement",value:function(){this.remaining--,this.publish(),0===this.remaining&&this.stop(!1)}},{key:"publish",value:function(){var t,e=this,n=this.toSeconds();Object.keys(this.callbacks).map(Number).filter((t=1e3*n,function(e){return e>=t})).map((function(t){return e.callbacks[t]})).forEach((function(t){return t.run()})),this.subscribers.forEach((function(t){return t(n)}))}},{key:"toSeconds",value:function(){return this.remaining*this.precision/1e3}}]),t}(),v=function(){function t(e){r(this,t),this.locked=!1,this.actions=e?[e]:[]}return a(t,[{key:"push",value:function(t){this.actions.push(t)}},{key:"run",value:function(){this.locked||(this.actions.forEach((function(t){return t(void 0)})),this.locked=!0)}},{key:"unlock",value:function(){this.locked=!1}}]),t}(),k=s("fXoL"),y=s("HDdC"),x=s("D0XW"),w=s("DH7j");function S(t){return!Object(w.a)(t)&&t-parseFloat(t)+1>=0}var O=s("z+Ro");function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,i=-1;return S(e)?i=Number(e)<1?1:Number(e):Object(O.a)(e)&&(n=e),Object(O.a)(n)||(n=x.a),new y.a((function(e){var o=S(t)?t:+t-n.now();return n.schedule(F,o,{index:0,period:i,subscriber:e})}))}function F(t){var e=t.index,n=t.period,i=t.subscriber;if(i.next(e),!i.closed){if(-1===n)return i.complete();t.index=e+1,this.schedule(t,n)}}function I(t,e){if(1&t&&(k.Yb(),k.Ob(0,"linearGradient"),k.Kb(1,"stop",5),k.Kb(2,"stop",6),k.Nb()),2&t){var n=k.Zb(2);k.yb("id",n.svg.outerLinearGradient.id),k.xb(1),k.yb("stop-color",n.svg.outerLinearGradient.colorStop1)("stop-opacity",1),k.xb(1),k.yb("stop-color",n.svg.outerLinearGradient.colorStop2)("stop-opacity",1)}}function N(t,e){if(1&t&&(k.Yb(),k.Ob(0,"radialGradient"),k.Kb(1,"stop",5),k.Kb(2,"stop",6),k.Nb()),2&t){var n=k.Zb(2);k.yb("id",n.svg.radialGradient.id),k.xb(1),k.yb("stop-color",n.svg.radialGradient.colorStop1)("stop-opacity",1),k.xb(1),k.yb("stop-color",n.svg.radialGradient.colorStop2)("stop-opacity",1)}}function W(t,e){if(1&t&&(k.Yb(),k.Kb(0,"circle")),2&t){var n=k.Zb(3);k.yb("cx",n.svg.backgroundCircle.cx)("cy",n.svg.backgroundCircle.cy)("r",n.svg.backgroundCircle.r)("fill",n.svg.backgroundCircle.fill)("fill-opacity",n.svg.backgroundCircle.fillOpacity)("stroke",n.svg.backgroundCircle.stroke)("stroke-width",n.svg.backgroundCircle.strokeWidth)}}function M(t,e){if(1&t&&(k.Yb(),k.Kb(0,"circle")),2&t){var n=k.Zb(3);k.zb("fill","url(#",n.svg.radialGradient.id,")"),k.yb("cx",n.svg.backgroundCircle.cx)("cy",n.svg.backgroundCircle.cy)("r",n.svg.backgroundCircle.r)("fill-opacity",n.svg.backgroundCircle.fillOpacity)("stroke",n.svg.backgroundCircle.stroke)("stroke-width",n.svg.backgroundCircle.strokeWidth)}}function E(t,e){if(1&t&&(k.Yb(),k.Mb(0),k.lc(1,W,1,7,"circle",2),k.lc(2,M,1,7,"circle",2),k.Lb()),2&t){var n=k.Zb(2);k.xb(1),k.ec("ngIf",!n.options.backgroundGradient),k.xb(1),k.ec("ngIf",n.options.backgroundGradient)}}function z(t,e){if(1&t&&(k.Yb(),k.Kb(0,"circle")),2&t){var n=k.Zb(2);k.yb("cx",n.svg.circle.cx)("cy",n.svg.circle.cy)("r",n.svg.circle.r)("fill",n.svg.circle.fill)("stroke",n.svg.circle.stroke)("stroke-width",n.svg.circle.strokeWidth)}}function G(t,e){if(1&t&&(k.Yb(),k.Kb(0,"path")),2&t){var n=k.Zb(3);k.yb("d",n.svg.path.d)("stroke",n.svg.path.stroke)("stroke-width",n.svg.path.strokeWidth)("stroke-linecap",n.svg.path.strokeLinecap)("fill",n.svg.path.fill)}}function P(t,e){if(1&t&&(k.Yb(),k.Kb(0,"path")),2&t){var n=k.Zb(3);k.zb("stroke","url(#",n.svg.outerLinearGradient.id,")"),k.yb("d",n.svg.path.d)("stroke-width",n.svg.path.strokeWidth)("stroke-linecap",n.svg.path.strokeLinecap)("fill",n.svg.path.fill)}}function T(t,e){if(1&t&&(k.Yb(),k.Mb(0),k.lc(1,G,1,5,"path",2),k.lc(2,P,1,5,"path",2),k.Lb()),2&t){var n=k.Zb(2);k.xb(1),k.ec("ngIf",!n.options.outerStrokeGradient),k.xb(1),k.ec("ngIf",n.options.outerStrokeGradient)}}function j(t,e){if(1&t&&(k.Yb(),k.Ob(0,"tspan"),k.mc(1),k.Nb()),2&t){var n=e.$implicit,i=k.Zb(4);k.yb("x",i.svg.title.x)("y",i.svg.title.y)("dy",n.dy)("font-size",i.svg.title.fontSize)("font-weight",i.svg.title.fontWeight)("fill",i.svg.title.color),k.xb(1),k.nc(n.span)}}function _(t,e){if(1&t&&(k.Yb(),k.Mb(0),k.lc(1,j,2,7,"tspan",8),k.Lb()),2&t){var n=k.Zb(3);k.xb(1),k.ec("ngForOf",n.svg.title.tspans)}}function R(t,e){if(1&t&&(k.Yb(),k.Ob(0,"tspan"),k.mc(1),k.Nb()),2&t){var n=k.Zb(3);k.yb("font-size",n.svg.units.fontSize)("font-weight",n.svg.units.fontWeight)("fill",n.svg.units.color),k.xb(1),k.nc(n.svg.units.text)}}function A(t,e){if(1&t&&(k.Yb(),k.Ob(0,"tspan"),k.mc(1),k.Nb()),2&t){var n=e.$implicit,i=k.Zb(4);k.yb("x",i.svg.subtitle.x)("y",i.svg.subtitle.y)("dy",n.dy)("font-size",i.svg.subtitle.fontSize)("font-weight",i.svg.subtitle.fontWeight)("fill",i.svg.subtitle.color),k.xb(1),k.nc(n.span)}}function D(t,e){if(1&t&&(k.Yb(),k.Mb(0),k.lc(1,A,2,7,"tspan",8),k.Lb()),2&t){var n=k.Zb(3);k.xb(1),k.ec("ngForOf",n.svg.subtitle.tspans)}}function Z(t,e){if(1&t&&(k.Yb(),k.Ob(0,"text",7),k.lc(1,_,2,1,"ng-container",2),k.lc(2,R,2,4,"tspan",2),k.lc(3,D,2,1,"ng-container",2),k.Nb()),2&t){var n=k.Zb(2);k.yb("x",n.svg.circle.cx)("y",n.svg.circle.cy)("text-anchor",n.svg.title.textAnchor),k.xb(1),k.ec("ngIf",n.options.showTitle),k.xb(1),k.ec("ngIf",n.options.showUnits),k.xb(1),k.ec("ngIf",n.options.showSubtitle)}}function L(t,e){if(1&t&&(k.Yb(),k.Kb(0,"image",9)),2&t){var n=k.Zb(2);k.yb("height",n.svg.image.height)("width",n.svg.image.width)("href",n.svg.image.src,null,"xlink")("x",n.svg.image.x)("y",n.svg.image.y)}}function K(t,e){if(1&t){var n=k.Pb();k.Yb(),k.Ob(0,"svg",1),k.Wb("click",(function(t){return k.gc(n),k.Zb().emitClickEvent(t)})),k.Ob(1,"defs"),k.lc(2,I,3,5,"linearGradient",2),k.lc(3,N,3,5,"radialGradient",2),k.Nb(),k.lc(4,E,3,2,"ng-container",2),k.lc(5,z,1,6,"circle",2),k.lc(6,T,3,2,"ng-container",2),k.lc(7,Z,4,6,"text",3),k.lc(8,L,1,5,"image",4),k.Nb()}if(2&t){var i=k.Zb();k.yb("viewBox",i.svg.viewBox)("height",i.svg.height)("width",i.svg.width)("class",i.options.class),k.xb(2),k.ec("ngIf",i.options.outerStrokeGradient),k.xb(1),k.ec("ngIf",i.options.backgroundGradient),k.xb(1),k.ec("ngIf",i.options.showBackground),k.xb(1),k.ec("ngIf",i.options.showInnerStroke),k.xb(1),k.ec("ngIf",i.options.percent-0!=0||i.options.showZeroOuterStroke),k.xb(1),k.ec("ngIf",!i.options.showImage&&(i.options.showTitle||i.options.showUnits||i.options.showSubtitle)),k.xb(1),k.ec("ngIf",i.options.showImage)}}var V,Y,U=function t(){r(this,t),this.class="",this.backgroundGradient=!1,this.backgroundColor="transparent",this.backgroundGradientStopColor="transparent",this.backgroundOpacity=1,this.backgroundStroke="transparent",this.backgroundStrokeWidth=0,this.backgroundPadding=5,this.percent=0,this.radius=90,this.space=4,this.toFixed=0,this.maxPercent=1e3,this.renderOnClick=!0,this.units="%",this.unitsFontSize="10",this.unitsFontWeight="normal",this.unitsColor="#444444",this.outerStrokeGradient=!1,this.outerStrokeWidth=8,this.outerStrokeColor="#78C000",this.outerStrokeGradientStopColor="transparent",this.outerStrokeLinecap="round",this.innerStrokeColor="#C7E596",this.innerStrokeWidth=4,this.titleFormat=void 0,this.title="auto",this.titleColor="#444444",this.titleFontSize="20",this.titleFontWeight="normal",this.subtitleFormat=void 0,this.subtitle="progress",this.subtitleColor="#A9A9A9",this.subtitleFontSize="10",this.subtitleFontWeight="normal",this.imageSrc=void 0,this.imageHeight=void 0,this.imageWidth=void 0,this.animation=!0,this.animateTitle=!0,this.animateSubtitle=!1,this.animationDuration=500,this.showTitle=!0,this.showSubtitle=!0,this.showUnits=!0,this.showImage=!1,this.showBackground=!0,this.showInnerStroke=!0,this.clockwise=!0,this.responsive=!1,this.startFromZero=!0,this.showZeroOuterStroke=!0,this.lazy=!1},B=((Y=function(){function i(o,s,a){var c=this;r(this,i),this.elRef=s,this.document=a,this.onClick=new k.n,this.svgElement=null,this.isInViewport=!1,this.onViewportChanged=new k.n,this._viewportChangedSubscriber=null,this.options=new U,this.defaultOptions=new U,this._lastPercent=0,this._gradientUUID=null,this.render=function(){c.applyOptions(),c.options.lazy?(null===c.svgElement&&c.draw(c._lastPercent),c.isInViewport&&(c.options.animation&&c.options.animationDuration>0?c.animate(c._lastPercent,c.options.percent):c.draw(c.options.percent),c._lastPercent=c.options.percent)):(c.options.animation&&c.options.animationDuration>0?c.animate(c._lastPercent,c.options.percent):c.draw(c.options.percent),c._lastPercent=c.options.percent)},this.polarToCartesian=function(t,e,n,i){var o=i*Math.PI/180;return{x:t+Math.sin(o)*n,y:e-Math.cos(o)*n}},this.draw=function(i){var o,r=(i=void 0===i?c.options.percent:Math.abs(i))>100?100:i,s=2*c.options.radius+2*c.options.outerStrokeWidth;c.options.showBackground&&(s+=2*c.options.backgroundStrokeWidth+c.max(0,2*c.options.backgroundPadding));var a,l,u={x:s/2,y:s/2},b=u.x,p=u.y-c.options.radius,h=c.polarToCartesian(u.x,u.y,c.options.radius,360*(c.options.clockwise?r:100-r)/100);100===r&&(h.x=h.x+(c.options.clockwise?-.01:.01)),a=(o=n(r>50?c.options.clockwise?[1,1]:[1,0]:c.options.clockwise?[0,1]:[0,0],2))[0],l=o[1];var d=c.options.animateTitle?i:c.options.percent,f=d>c.options.maxPercent?c.options.maxPercent.toFixed(c.options.toFixed)+"+":d.toFixed(c.options.toFixed),g=c.options.animateSubtitle?i:c.options.percent,m={x:u.x,y:u.y,textAnchor:"middle",color:c.options.titleColor,fontSize:c.options.titleFontSize,fontWeight:c.options.titleFontWeight,texts:[],tspans:[]};if(void 0!==c.options.titleFormat&&"Function"===c.options.titleFormat.constructor.name){var v=c.options.titleFormat(d);v instanceof Array?m.texts=e(v):m.texts.push(v.toString())}else"auto"===c.options.title?m.texts.push(f):c.options.title instanceof Array?m.texts=e(c.options.title):m.texts.push(c.options.title.toString());var k={x:u.x,y:u.y,textAnchor:"middle",color:c.options.subtitleColor,fontSize:c.options.subtitleFontSize,fontWeight:c.options.subtitleFontWeight,texts:[],tspans:[]};if(void 0!==c.options.subtitleFormat&&"Function"===c.options.subtitleFormat.constructor.name){var y=c.options.subtitleFormat(g);y instanceof Array?k.texts=e(y):k.texts.push(y.toString())}else c.options.subtitle instanceof Array?k.texts=e(c.options.subtitle):k.texts.push(c.options.subtitle.toString());var x={text:""+c.options.units,fontSize:c.options.unitsFontSize,fontWeight:c.options.unitsFontWeight,color:c.options.unitsColor},w=0,S=1;if(c.options.showTitle&&(w+=m.texts.length),c.options.showSubtitle&&(w+=k.texts.length),c.options.showTitle){var O,C=t(m.texts);try{for(C.s();!(O=C.n()).done;){var F=O.value;m.tspans.push({span:F,dy:c.getRelativeY(S,w)}),S++}}catch(M){C.e(M)}finally{C.f()}}if(c.options.showSubtitle){var I,N=t(k.texts);try{for(N.s();!(I=N.n()).done;){var W=I.value;k.tspans.push({span:W,dy:c.getRelativeY(S,w)}),S++}}catch(M){N.e(M)}finally{N.f()}}null===c._gradientUUID&&(c._gradientUUID=c.uuid()),c.svg={viewBox:"0 0 ".concat(s," ").concat(s),width:c.options.responsive?"100%":s,height:c.options.responsive?"100%":s,backgroundCircle:{cx:u.x,cy:u.y,r:c.options.radius+c.options.outerStrokeWidth/2+c.options.backgroundPadding,fill:c.options.backgroundColor,fillOpacity:c.options.backgroundOpacity,stroke:c.options.backgroundStroke,strokeWidth:c.options.backgroundStrokeWidth},path:{d:"M ".concat(b," ").concat(p,"\n        A ").concat(c.options.radius," ").concat(c.options.radius," 0 ").concat(a," ").concat(l," ").concat(h.x," ").concat(h.y),stroke:c.options.outerStrokeColor,strokeWidth:c.options.outerStrokeWidth,strokeLinecap:c.options.outerStrokeLinecap,fill:"none"},circle:{cx:u.x,cy:u.y,r:c.options.radius-c.options.space-c.options.outerStrokeWidth/2-c.options.innerStrokeWidth/2,fill:"none",stroke:c.options.innerStrokeColor,strokeWidth:c.options.innerStrokeWidth},title:m,units:x,subtitle:k,image:{x:u.x-c.options.imageWidth/2,y:u.y-c.options.imageHeight/2,src:c.options.imageSrc,width:c.options.imageWidth,height:c.options.imageHeight},outerLinearGradient:{id:"outer-linear-"+c._gradientUUID,colorStop1:c.options.outerStrokeColor,colorStop2:"transparent"===c.options.outerStrokeGradientStopColor?"#FFF":c.options.outerStrokeGradientStopColor},radialGradient:{id:"radial-"+c._gradientUUID,colorStop1:c.options.backgroundColor,colorStop2:"transparent"===c.options.backgroundGradientStopColor?"#FFF":c.options.backgroundGradientStopColor}}},this.getAnimationParameters=function(t,e){var n,i,o,r=c.options.startFromZero||t<0?0:t,s=e<0?0:c.min(e,c.options.maxPercent),a=Math.abs(Math.round(s-r));return a>=100?(n=100,i=c.options.animateTitle||c.options.animateSubtitle?Math.round(a/n):1):(n=a,i=1),(o=Math.round(c.options.animationDuration/n))<10&&(o=10,n=c.options.animationDuration/o,i=!c.options.animateTitle&&!c.options.animateSubtitle&&a>100?Math.round(100/n):Math.round(a/n)),i<1&&(i=1),{times:n,step:i,interval:o}},this.animate=function(t,e){c._timerSubscription&&!c._timerSubscription.closed&&c._timerSubscription.unsubscribe();var n=c.options.startFromZero?0:t,i=e,o=c.getAnimationParameters(n,i),r=o.step,s=o.interval,a=n;c._timerSubscription=n<i?C(0,s).subscribe((function(){(a+=r)<=i?!c.options.animateTitle&&!c.options.animateSubtitle&&a>=100?(c.draw(i),c._timerSubscription.unsubscribe()):c.draw(a):(c.draw(i),c._timerSubscription.unsubscribe())})):C(0,s).subscribe((function(){(a-=r)>=i?!c.options.animateTitle&&!c.options.animateSubtitle&&i>=100?(c.draw(i),c._timerSubscription.unsubscribe()):c.draw(a):(c.draw(i),c._timerSubscription.unsubscribe())}))},this.emitClickEvent=function(t){c.options.renderOnClick&&c.animate(0,c.options.percent),c.onClick.emit(t)},this.applyOptions=function(){for(var t=0,e=Object.keys(c.options);t<e.length;t++){var n=e[t];c.hasOwnProperty(n)&&void 0!==c[n]?c.options[n]=c[n]:c.templateOptions&&void 0!==c.templateOptions[n]&&(c.options[n]=c.templateOptions[n])}c.options.radius=Math.abs(+c.options.radius),c.options.space=+c.options.space,c.options.percent=+c.options.percent>0?+c.options.percent:0,c.options.maxPercent=Math.abs(+c.options.maxPercent),c.options.animationDuration=Math.abs(c.options.animationDuration),c.options.outerStrokeWidth=Math.abs(+c.options.outerStrokeWidth),c.options.innerStrokeWidth=Math.abs(+c.options.innerStrokeWidth),c.options.backgroundPadding=+c.options.backgroundPadding},this.getRelativeY=function(t,e){return(1*(t-e/2)-.18).toFixed(2)+"em"},this.min=function(t,e){return t<e?t:e},this.max=function(t,e){return t>e?t:e},this.uuid=function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)}))},this.findSvgElement=function(){if(null===this.svgElement){var t=this.elRef.nativeElement.getElementsByTagName("svg");t.length>0&&(this.svgElement=t[0])}},this.checkViewport=function(){c.findSvgElement();var t=c.isInViewport;c.isInViewport=c.isElementInViewport(c.svgElement),t!==c.isInViewport&&c.onViewportChanged.emit({oldValue:t,newValue:c.isInViewport})},this.onScroll=function(t){c.checkViewport()},this.loadEventsForLazyMode=function(){if(c.options.lazy){c.document.addEventListener("scroll",c.onScroll,!0),c.window.addEventListener("resize",c.onScroll,!0),null===c._viewportChangedSubscriber&&(c._viewportChangedSubscriber=c.onViewportChanged.subscribe((function(t){t.newValue&&c.render()})));var t=C(0,50).subscribe((function(){null===c.svgElement?c.checkViewport():t.unsubscribe()}))}},this.unloadEventsForLazyMode=function(){c.document.removeEventListener("scroll",c.onScroll,!0),c.window.removeEventListener("resize",c.onScroll,!0),null!==c._viewportChangedSubscriber&&(c._viewportChangedSubscriber.unsubscribe(),c._viewportChangedSubscriber=null)},this.document=a,this.window=this.document.defaultView,Object.assign(this.options,o),Object.assign(this.defaultOptions,o)}return a(i,[{key:"isDrawing",value:function(){return this._timerSubscription&&!this._timerSubscription.closed}},{key:"isElementInViewport",value:function(t){if(null==t)return!1;var e,n=t.getBoundingClientRect(),i=t.parentNode;do{if(e=i.getBoundingClientRect(),n.top>=e.bottom)return!1;if(n.bottom<=e.top)return!1;if(n.left>=e.right)return!1;if(n.right<=e.left)return!1;i=i.parentNode}while(i!=this.document.body);return!(n.top>=(this.window.innerHeight||this.document.documentElement.clientHeight)||n.bottom<=0||n.left>=(this.window.innerWidth||this.document.documentElement.clientWidth)||n.right<=0)}},{key:"ngOnInit",value:function(){this.loadEventsForLazyMode()}},{key:"ngOnDestroy",value:function(){this.unloadEventsForLazyMode()}},{key:"ngOnChanges",value:function(t){this.render(),"lazy"in t&&(t.lazy.currentValue?this.loadEventsForLazyMode():this.unloadEventsForLazyMode())}}]),i}()).\u0275fac=function(t){return new(t||Y)(k.Jb(U),k.Jb(k.l),k.Jb(c.c))},Y.\u0275cmp=k.Db({type:Y,selectors:[["circle-progress"]],inputs:{name:"name",class:"class",backgroundGradient:"backgroundGradient",backgroundColor:"backgroundColor",backgroundGradientStopColor:"backgroundGradientStopColor",backgroundOpacity:"backgroundOpacity",backgroundStroke:"backgroundStroke",backgroundStrokeWidth:"backgroundStrokeWidth",backgroundPadding:"backgroundPadding",radius:"radius",space:"space",percent:"percent",toFixed:"toFixed",maxPercent:"maxPercent",renderOnClick:"renderOnClick",units:"units",unitsFontSize:"unitsFontSize",unitsFontWeight:"unitsFontWeight",unitsColor:"unitsColor",outerStrokeGradient:"outerStrokeGradient",outerStrokeWidth:"outerStrokeWidth",outerStrokeColor:"outerStrokeColor",outerStrokeGradientStopColor:"outerStrokeGradientStopColor",outerStrokeLinecap:"outerStrokeLinecap",innerStrokeColor:"innerStrokeColor",innerStrokeWidth:"innerStrokeWidth",titleFormat:"titleFormat",title:"title",titleColor:"titleColor",titleFontSize:"titleFontSize",titleFontWeight:"titleFontWeight",subtitleFormat:"subtitleFormat",subtitle:"subtitle",subtitleColor:"subtitleColor",subtitleFontSize:"subtitleFontSize",subtitleFontWeight:"subtitleFontWeight",imageSrc:"imageSrc",imageHeight:"imageHeight",imageWidth:"imageWidth",animation:"animation",animateTitle:"animateTitle",animateSubtitle:"animateSubtitle",animationDuration:"animationDuration",showTitle:"showTitle",showSubtitle:"showSubtitle",showUnits:"showUnits",showImage:"showImage",showBackground:"showBackground",showInnerStroke:"showInnerStroke",clockwise:"clockwise",responsive:"responsive",startFromZero:"startFromZero",showZeroOuterStroke:"showZeroOuterStroke",lazy:"lazy",templateOptions:["options","templateOptions"]},outputs:{onClick:"onClick"},features:[k.vb],decls:1,vars:1,consts:[["xmlns","http://www.w3.org/2000/svg","preserveAspectRatio","xMidYMid meet",3,"click",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","preserveAspectRatio","xMidYMid meet",3,"click"],[4,"ngIf"],["alignment-baseline","baseline",4,"ngIf"],["preserveAspectRatio","none",4,"ngIf"],["offset","5%"],["offset","95%"],["alignment-baseline","baseline"],[4,"ngFor","ngForOf"],["preserveAspectRatio","none"]],template:function(t,e){1&t&&k.lc(0,K,9,11,"svg",0),2&t&&k.ec("ngIf",e.svg)},directives:[c.i,c.h],encapsulation:2}),Y),H=((V=function(){function t(){r(this,t)}return a(t,null,[{key:"forRoot",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:t,providers:[{provide:U,useValue:e}]}}}]),t}()).\u0275mod=k.Hb({type:V}),V.\u0275inj=k.Gb({factory:function(t){return new(t||V)},imports:[[c.b]]}),V);function J(t,e){1&t&&k.Kb(0,"ion-icon",12)}function $(t,e){1&t&&k.Kb(0,"ion-icon",13)}var X,q=((X=function(){function t(e){r(this,t),this.changeDetectorRef=e,this.precision=50,this.remaining="00:00",this.elapsed="00:00",this.time="00:00",this.state="active",this.intervals="00/00"}return a(t,[{key:"ngOnInit",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,i,o,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.elapsedTime=0,this.remainingTime=this.exercice.totalTime,this.timer=new m(this.precision),this.timer.on([3100,2100,1100],(function(){return h.a.beep.play()})),this.timer.subscribe((function(t){return r.update(t)})),e=this.exercice.elements.map(d("value")),i=n(e,4),o=i[3],this.totalIntervals=o,this.currentInterval=1,t.next=6,this.start();case 6:this.currentElement="finish",this.changeDetectorRef.detectChanges();case 8:case"end":return t.stop()}}),t,this)})))}},{key:"goBack",value:function(){this.timer.stop(),this.back()}},{key:"toggle",value:function(){"active"===this.state?this.pause():this.resume()}},{key:"pause",value:function(){this.timer.pause(),this.state="paused"}},{key:"resume",value:function(){this.timer.resume(),this.state="active"}},{key:"start",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,i,o,r,s,a,c,l,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.exercice.elements.map(d("value")).map((function(t){return 1e3*t})),i=n(e,3),o=i[0],r=i[1],s=i[2],a=this.exercice.elements.map(d("value")),c=n(a,4),l=c[3],t.prev=1,t.next=4,this.set(o,"prepare");case 4:u=0;case 5:if(!(u<l)){t.next=17;break}return h.a.whistle.play(),t.next=9,this.set(r,"work");case 9:if(t.t0=u<l-1,!t.t0){t.next=14;break}return h.a.ding.play(),t.next=14,this.set(s,"rest");case 14:u++,t.next=5;break;case 17:t.next=21;break;case 19:t.prev=19,t.t1=t.catch(1);case 21:h.a.boxingSound.play();case 22:case"end":return t.stop()}}),t,this,[[1,19]])})))}},{key:"set",value:function(t,e){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.currentDuration=t/1e3,this.currentElement=e,n.next=4,this.timer.start(t);case 4:"work"===e&&this.currentInterval++;case 5:case"end":return n.stop()}}),n,this)})))}},{key:"update",value:function(t){this.elapsedTime+=this.precision,this.remainingTime-=this.precision,this.intervals=this.currentInterval+"/"+this.totalIntervals,this.elapsed=g(Math.round(this.elapsedTime/1e3)),this.remaining=g(Math.round(this.remainingTime/1e3)),this.time=g(Math.round(t)),this.percent=t/this.currentDuration*100,this.changeDetectorRef.detectChanges()}},{key:"color",get:function(){return"work"===this.currentElement?"danger":"rest"===this.currentElement?"primary":"finish"===this.currentElement?"tertiary":"success"}},{key:"hexColor",get:function(){return function(t){switch(t){case"success":return"#0b953d";case"danger":return"#ca0b00";default:return"#488aff"}}(this.color)}}]),t}()).\u0275fac=function(t){return new(t||X)(k.Jb(k.h))},X.\u0275cmp=k.Db({type:X,selectors:[["app-timer"]],inputs:{back:"back",exercice:"exercice"},decls:35,vars:17,consts:[[3,"color"],["slot","start"],[3,"click"],["name","arrow-back-outline"],["slot","primary"],["name","pause-outline",4,"ngIf"],["name","play-outline",4,"ngIf"],[3,"percent","title","outerStrokeColor","outerStrokeGradientStopColor","titleColor"],[2,"width","100%","display","flex","justify-content","space-around","align-items","center","height","100%"],[2,"display","flex","flex-direction","column","align-items","center"],[1,"info-title"],[1,"info-data"],["name","pause-outline"],["name","play-outline"]],template:function(t,e){1&t&&(k.Ob(0,"ion-header"),k.Ob(1,"ion-toolbar",0),k.Ob(2,"ion-buttons",1),k.Ob(3,"ion-button",2),k.Wb("click",(function(){return e.goBack()})),k.Kb(4,"ion-icon",3),k.Nb(),k.Nb(),k.Ob(5,"ion-buttons",4),k.Ob(6,"ion-button",2),k.Wb("click",(function(){return e.toggle()})),k.lc(7,J,1,0,"ion-icon",5),k.lc(8,$,1,0,"ion-icon",6),k.Nb(),k.Nb(),k.Ob(9,"ion-title"),k.mc(10),k.Nb(),k.Nb(),k.Nb(),k.Ob(11,"ion-content"),k.Ob(12,"ion-card"),k.Ob(13,"ion-toolbar",0),k.Ob(14,"ion-title"),k.mc(15),k.ac(16,"uppercase"),k.Nb(),k.Nb(),k.Kb(17,"circle-progress",7),k.Ob(18,"ion-toolbar",0),k.Ob(19,"div",8),k.Ob(20,"div",9),k.Ob(21,"span",10),k.mc(22,"Elapsed"),k.Nb(),k.Ob(23,"span",11),k.mc(24),k.Nb(),k.Nb(),k.Ob(25,"div",9),k.Ob(26,"span",10),k.mc(27,"Intervals"),k.Nb(),k.Ob(28,"span",11),k.mc(29),k.Nb(),k.Nb(),k.Ob(30,"div",9),k.Ob(31,"span",10),k.mc(32,"Remaining"),k.Nb(),k.Ob(33,"span",11),k.mc(34),k.Nb(),k.Nb(),k.Nb(),k.Nb(),k.Nb(),k.Nb()),2&t&&(k.xb(1),k.ec("color",e.color),k.xb(6),k.ec("ngIf","active"===e.state),k.xb(1),k.ec("ngIf","paused"===e.state),k.xb(2),k.nc(e.exercice.name),k.xb(3),k.ec("color",e.color),k.xb(2),k.nc(k.bc(16,15,e.currentElement)),k.xb(2),k.ec("percent",e.percent)("title",e.time)("outerStrokeColor",e.hexColor)("outerStrokeGradientStopColor",e.hexColor)("titleColor",e.hexColor),k.xb(1),k.ec("color",e.color),k.xb(6),k.nc(e.elapsed),k.xb(5),k.nc(e.intervals),k.xb(5),k.nc(e.remaining))},directives:[l.h,l.s,l.d,l.c,l.i,c.i,l.r,l.g,l.e,B],pipes:[c.l],styles:[".info-title[_ngcontent-%COMP%]{font-size:15px;margin-bottom:5px}.info-data[_ngcontent-%COMP%]{font-size:30px}"],changeDetection:0}),X);function Q(t,e){if(1&t){var n=k.Pb();k.Ob(0,"ion-item",15),k.Ob(1,"ion-avatar",1),k.Kb(2,"ion-icon",21),k.Nb(),k.Ob(3,"ion-label"),k.Ob(4,"h2",22),k.mc(5),k.Nb(),k.Ob(6,"div",23),k.Ob(7,"ion-icon",24),k.Wb("click",(function(){k.gc(n);var t=e.index;return k.Zb().decrementValue(t)})),k.Nb(),k.mc(8),k.Ob(9,"ion-icon",25),k.Wb("click",(function(){k.gc(n);var t=e.index;return k.Zb().incrementValue(t)})),k.Nb(),k.Nb(),k.Nb(),k.Nb()}if(2&t){var i=e.$implicit;k.xb(2),k.ec("name",i.icon),k.xb(3),k.nc(i.title),k.xb(3),k.pc(" ",i.value,"",i.unit," ")}}var tt,et,nt,it,ot=[{path:"",component:(tt=function(){function t(e,n){r(this,t),this.modalController=e,this.changeDetectorRef=n,this.elements=[{title:"Prepare",value:10,icon:"accessibility-outline",unit:"s"},{title:"Work",value:20,icon:"barbell-outline",unit:"s"},{title:"Rest",value:10,icon:"bed-outline",unit:"s"},{title:"Cycles",value:8,icon:"repeat-outline"}],this.time="04:00",this.intervals=16}return a(t,[{key:"ngOnInit",value:function(){h.a.load(),this.update()}},{key:"incrementValue",value:function(t){this.elements[t].value++,this.update()}},{key:"decrementValue",value:function(t){0!==this.elements[t].value&&(this.elements[t].value--,this.update())}},{key:"start",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:q,componentProps:{back:function(){return Object(p.a)(n,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.dismiss();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))},exercice:this.createExercice()}});case 2:return e=t.sent,t.next=5,e.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"createExercice",value:function(){return{name:"Exercice",elements:this.elements,totalTime:1e3*this.totalTime}}},{key:"update",value:function(){var t=n(this.elements.map(d("value")),4),e=t[0],i=t[1],o=t[2],r=t[3];this.totalTime=e,this.totalTime+=i*r,this.totalTime+=o*(r-1),this.time=g(this.totalTime),this.intervals=r,this.changeDetectorRef.detectChanges()}}]),t}(),tt.\u0275fac=function(t){return new(t||tt)(k.Jb(l.v),k.Jb(k.h))},tt.\u0275cmp=k.Db({type:tt,selectors:[["app-home"]],decls:35,vars:3,consts:[["color","primary"],["slot","start"],["auto-hide","false"],["slot","primary"],["slot","icon-only","ios","ellipsis-horizontal","md","ellipsis-vertical"],["value","all"],["name","list-outline"],["value","favorites"],["name","copy-outline"],["lines","full","color","primary"],[2,"display","flex","justify-content","space-around","width","100%","height","100%","align-items","center"],["name","refresh-circle-outline"],["value","Exercice"],["name","add-circle-outline"],["lines","full",4,"ngFor","ngForOf"],["lines","full"],[2,"display","flex","justify-content","space-around","width","100%"],["outline","","color","primary"],["name","alarm-outline"],["name","hourglass-outline"],["expand","block",3,"click"],["color","primary",3,"name"],[1,"workout-setting-item-title"],[1,"workout-setting-item-body"],["name","remove-circle-outline","color","primary",3,"click"],["name","add-circle-outline","color","primary",3,"click"]],template:function(t,e){1&t&&(k.Ob(0,"ion-app"),k.Ob(1,"ion-header"),k.Ob(2,"ion-toolbar",0),k.Ob(3,"ion-buttons",1),k.Kb(4,"ion-menu-button",2),k.Nb(),k.Ob(5,"ion-buttons",3),k.Ob(6,"ion-button"),k.Kb(7,"ion-icon",4),k.Nb(),k.Nb(),k.Ob(8,"ion-segment",5),k.Ob(9,"ion-segment-button",5),k.Kb(10,"ion-icon",6),k.Nb(),k.Ob(11,"ion-segment-button",7),k.Kb(12,"ion-icon",8),k.Nb(),k.Nb(),k.Nb(),k.Nb(),k.Ob(13,"ion-content"),k.Ob(14,"ion-card"),k.Ob(15,"ion-list"),k.Ob(16,"ion-item",9),k.Ob(17,"div",10),k.Kb(18,"ion-icon",11),k.Kb(19,"ion-input",12),k.Kb(20,"ion-icon",13),k.Nb(),k.Nb(),k.lc(21,Q,10,4,"ion-item",14),k.Ob(22,"ion-item",15),k.Ob(23,"div",16),k.Ob(24,"ion-chip",17),k.Kb(25,"ion-icon",18),k.Ob(26,"ion-label"),k.mc(27),k.Nb(),k.Nb(),k.Ob(28,"ion-chip",17),k.Kb(29,"ion-icon",19),k.Ob(30,"ion-label"),k.mc(31),k.Nb(),k.Nb(),k.Nb(),k.Nb(),k.Nb(),k.Ob(32,"ion-toolbar"),k.Ob(33,"ion-button",20),k.Wb("click",(function(){return e.start()})),k.mc(34,"START"),k.Nb(),k.Nb(),k.Nb(),k.Nb(),k.Nb()),2&t&&(k.xb(21),k.ec("ngForOf",e.elements),k.xb(6),k.nc(e.time),k.xb(4),k.oc("",e.intervals," Intervals"))},directives:[l.a,l.h,l.s,l.d,l.n,l.c,l.i,l.p,l.x,l.q,l.g,l.e,l.m,l.k,l.j,l.y,c.h,l.f,l.l,l.b],styles:["ion-avatar[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{font-size:40px!important}.workout-setting-item-body[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-around;align-items:center;margin-top:5px}.workout-setting-item-title[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:30px}ion-input[_ngcontent-%COMP%]{display:flex;justify-content:center;text-align:center}"],changeDetection:0}),tt)}],rt=((et=function t(){r(this,t)}).\u0275mod=k.Hb({type:et}),et.\u0275inj=k.Gb({factory:function(t){return new(t||et)},imports:[[b.i.forChild(ot)],b.i]}),et),st=new k.q("AdsenseConfig"),at=((it=function(){function t(){r(this,t)}return a(t,null,[{key:"forRoot",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:t,providers:[{provide:st,useValue:e}]}}}]),t}()).\u0275mod=k.Hb({type:it}),it.\u0275inj=k.Gb({factory:function(t){return new(t||it)},imports:[[c.b]]}),it),ct=((nt=function t(){r(this,t)}).\u0275mod=k.Hb({type:nt}),nt.\u0275inj=k.Gb({factory:function(t){return new(t||nt)},imports:[[c.b,u.a,l.t,rt,at.forRoot({adtest:"on"}),H.forRoot({radius:160,space:-10,maxPercent:100,outerStrokeGradient:!0,outerStrokeWidth:10,outerStrokeColor:"#4882c2",outerStrokeGradientStopColor:"#53a9ff",innerStrokeColor:"#e7e8ea",innerStrokeWidth:10,title:"",subtitle:"",titleFontSize:"92",subtitleFontSize:"49",animateTitle:!1,animation:!1,animationDuration:500,showUnits:!1,showBackground:!1,clockwise:!1,showSubtitle:!1})]]}),nt)}}])}();