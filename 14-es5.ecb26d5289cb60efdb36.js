!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6pfz":function(e,o,r){"use strict";r.r(o),r.d(o,"WorkoutsPageModule",(function(){return N}));var i=r("ofXK"),c=r("3Pt+"),a=r("TEn/"),u=r("tyNb"),s=r("mrSG"),b=r("UFF1"),l=r("Ot/k"),f=r("2Q/g"),m=r("Jn3H"),p=r("fXoL"),d=r("2MiI"),v=r("LmEr");function h(n,t){if(1&n){var e=p.Pb();p.Ob(0,"ion-item-sliding"),p.Ob(1,"ion-item",4),p.Wb("click",(function(){p.gc(e);var n=t.index;return p.Zb().start(n)})),p.Kb(2,"ion-icon",5),p.Ob(3,"ion-label",6),p.mc(4),p.Nb(),p.Ob(5,"ion-chip",7),p.Kb(6,"ion-icon",8),p.Ob(7,"ion-label"),p.mc(8),p.Nb(),p.Nb(),p.Nb(),p.Ob(9,"ion-item-options",9),p.Ob(10,"ion-item-option",10),p.Wb("click",(function(){p.gc(e);var n=t.index;return p.Zb().edit(n)})),p.Kb(11,"ion-icon",11),p.Nb(),p.Ob(12,"ion-item-option",12),p.Wb("click",(function(){p.gc(e);var n=t.index;return p.Zb().remove(n)})),p.Kb(13,"ion-icon",13),p.Nb(),p.Nb(),p.Nb()}if(2&n){var o=t.$implicit,r=p.Zb();p.xb(4),p.nc(o.name),p.xb(4),p.nc(r.toTime(o.totalTime))}}var k,w,g,O=[{path:"",component:(k=function(){function e(t){n(this,e),this.modalController=t}var o,r,i;return o=e,(r=[{key:"ngOnInit",value:function(){this.workouts=b.a.workouts}},{key:"start",value:function(n){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.a.start(this.modalController,this.workouts[n]);case 1:case"end":return t.stop()}}),t,this)})))}},{key:"add",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:m.a,componentProps:{back:function(){return Object(s.a)(e,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.dismiss();case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))},actions:[{name:"CREATE",action:function(n){return b.a.update("workouts",(function(t){return t.push(n)}))},quit:!0}]}});case 2:return t=n.sent,n.next=5,t.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"remove",value:function(n){b.a.update("workouts",(function(t){return t.splice(n,1)}))}},{key:"edit",value:function(n){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,o,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.workouts[n],t.next=3,this.modalController.create({component:m.a,componentProps:{back:function(){return Object(s.a)(r,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.dismiss();case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))},actions:[{name:"EDIT",action:function(t){return b.a.update("workouts",(function(e){return e[n]=t}))},quit:!0}],exercices:e.exercices,workoutName:e.name}});case 3:return o=t.sent,t.next=6,o.present();case 6:case"end":return t.stop()}}),t,this)})))}},{key:"toTime",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(f.b)(t?n/1e3:n)}}])&&t(o.prototype,r),i&&t(o,i),e}(),k.\u0275fac=function(n){return new(n||k)(p.Jb(a.z))},k.\u0275cmp=p.Db({type:k,selectors:[["app-workouts"]],decls:8,vars:1,consts:[[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","primary",3,"click"],["name","add-outline"],["color","tertiary","lines","none",2,"border-bottom","solid 0.5px white",3,"click"],["name","barbell-outline",2,"font-size","40px"],[2,"text-align","center"],["outline","","color","light"],["name","alarm-outline"],["side","end"],["color","warning",3,"click"],["slot","icon-only","name","pencil-outline"],["color","danger",3,"click"],["slot","icon-only","name","trash-outline"]],template:function(n,t){1&n&&(p.Kb(0,"app-header"),p.Ob(1,"ion-content"),p.Ob(2,"ion-list"),p.lc(3,h,14,2,"ion-item-sliding",0),p.Nb(),p.Ob(4,"ion-fab",1),p.Ob(5,"ion-fab-button",2),p.Wb("click",(function(){return t.add()})),p.Kb(6,"ion-icon",3),p.Nb(),p.Nb(),p.Nb(),p.Kb(7,"app-footer")),2&n&&(p.xb(3),p.ec("ngForOf",t.workouts))},directives:[d.a,a.f,a.r,i.h,a.g,a.h,a.k,v.a,a.p,a.m,a.q,a.e,a.o,a.n],styles:["ion-avatar[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{font-size:40px!important}ion-item[_ngcontent-%COMP%]{--border-color:#fff}"]}),k)}],x=((w=function t(){n(this,t)}).\u0275mod=p.Hb({type:w}),w.\u0275inj=p.Gb({factory:function(n){return new(n||w)},imports:[[u.i.forChild(O)],u.i]}),w),y=r("j1ZV"),N=((g=function t(){n(this,t)}).\u0275mod=p.Hb({type:g}),g.\u0275inj=p.Gb({factory:function(n){return new(n||g)},imports:[[i.b,c.a,a.x,y.a,x]]}),g)}}])}();