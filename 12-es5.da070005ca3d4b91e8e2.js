!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{cgDO:function(t,i,r){"use strict";r.r(i),r.d(i,"ExercicesPageModule",(function(){return K}));var o=r("ofXK"),c=r("3Pt+"),a=r("TEn/"),s=r("tyNb"),u=r("mrSG"),b=r("UFF1"),l=r("2Q/g"),m=r("Ot/k"),f=r("f2Wq"),p=r("fXoL"),d=r("2MiI"),v=r("LmEr");function x(e,n){if(1&e){var t=p.Pb();p.Ob(0,"ion-item-sliding"),p.Ob(1,"ion-item",8),p.Wb("click",(function(){p.gc(t);var e=n.index;return p.Zb(2).start(e)})),p.Kb(2,"ion-icon",9),p.Ob(3,"ion-label",10),p.mc(4),p.Nb(),p.Ob(5,"ion-chip",11),p.Kb(6,"ion-icon",12),p.Ob(7,"ion-label"),p.mc(8),p.Nb(),p.Nb(),p.Nb(),p.Ob(9,"ion-item-options",13),p.Ob(10,"ion-item-option",14),p.Wb("click",(function(){p.gc(t);var e=n.index;return p.Zb(2).editExercice(e)})),p.Kb(11,"ion-icon",15),p.Nb(),p.Ob(12,"ion-item-option",16),p.Wb("click",(function(){p.gc(t);var e=n.index;return p.Zb(2).removeExercice(e)})),p.Kb(13,"ion-icon",17),p.Nb(),p.Nb(),p.Nb()}if(2&e){var i=n.$implicit,r=p.Zb(2);p.xb(4),p.nc(i.name),p.xb(4),p.nc(r.toTime(i.totalTime))}}function g(e,n){if(1&e&&(p.Ob(0,"ion-content"),p.Ob(1,"ion-list"),p.lc(2,x,14,2,"ion-item-sliding",5),p.Nb(),p.Ob(3,"ion-fab",6),p.Ob(4,"ion-fab-button",0),p.Kb(5,"ion-icon",7),p.Nb(),p.Nb(),p.Nb()),2&e){var t=p.Zb();p.xb(2),p.ec("ngForOf",t.exercices)}}function h(e,n){if(1&e){var t=p.Pb();p.Ob(0,"ion-item-sliding"),p.Ob(1,"ion-item",18),p.Kb(2,"ion-icon",9),p.Ob(3,"ion-label",10),p.mc(4),p.Nb(),p.Ob(5,"ion-chip",19),p.Kb(6,"ion-icon",20),p.Ob(7,"ion-label"),p.mc(8),p.Nb(),p.Nb(),p.Nb(),p.Ob(9,"ion-item-options",13),p.Ob(10,"ion-item-option",14),p.Wb("click",(function(){p.gc(t);var e=n.index;return p.Zb(2).editPreset(e)})),p.Kb(11,"ion-icon",15),p.Nb(),p.Ob(12,"ion-item-option",16),p.Wb("click",(function(){p.gc(t);var e=n.index;return p.Zb(2).removePreset(e)})),p.Kb(13,"ion-icon",17),p.Nb(),p.Nb(),p.Nb()}if(2&e){var i=n.$implicit;p.xb(4),p.nc(i.name),p.xb(4),p.nc("PRESET")}}function O(e,n){if(1&e&&(p.Ob(0,"ion-content"),p.Ob(1,"ion-list"),p.lc(2,h,14,2,"ion-item-sliding",5),p.Nb(),p.Ob(3,"ion-fab",6),p.Ob(4,"ion-fab-button",0),p.Kb(5,"ion-icon",7),p.Nb(),p.Nb(),p.Nb()),2&e){var t=p.Zb();p.xb(2),p.ec("ngForOf",t.presets)}}var N,k,w,y=[{path:"",component:(N=function(){function t(n){e(this,t),this.modalController=n,this.currentTab="exercices"}var i,r,o;return i=t,(r=[{key:"ngOnInit",value:function(){this.presets=b.a.presets,this.exercices=b.a.exercices}},{key:"toTime",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(l.c)(n?e/1e3:e)}},{key:"removeExercice",value:function(e){b.a.update("exercices",(function(n){return n.splice(e,1)}))}},{key:"removePreset",value:function(e){b.a.update("presets",(function(n){return n.splice(e,1)}))}},{key:"editExercice",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,i,r,o,c=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.exercices[e],i=t.elements,r=t.name,n.next=5,this.modalController.create({component:f.a,componentProps:{back:function(){return Object(u.a)(c,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.dismiss();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},actions:[{name:"EDIT",action:function(n){return b.a.update("exercices",(function(t){return t[e]=n}))},quit:!0}],elements:i,exerciceName:r}});case 5:return o=n.sent,n.next=8,o.present();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n,this)})))}},{key:"editPreset",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,i,r,o,c=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.presets[e],i=t.elements,r=t.name,n.next=5,this.modalController.create({component:f.a,componentProps:{back:function(){return Object(u.a)(c,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.dismiss();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},actions:[{name:"EDIT",action:function(n){return b.a.update("presets",(function(t){return t[e]=n}))},quit:!0}],elements:i,exerciceName:r,forcePreset:!0}});case 5:return o=n.sent,n.next=8,o.present();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n,this)})))}},{key:"start",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:m.a.start(this.modalController,this.exercices[e]);case 1:case"end":return n.stop()}}),n,this)})))}}])&&n(i.prototype,r),o&&n(i,o),t}(),N.\u0275fac=function(e){return new(e||N)(p.Jb(a.G))},N.\u0275cmp=p.Db({type:N,selectors:[["app-exercices"]],decls:10,vars:3,consts:[["color","primary"],[3,"ngModel","ngModelChange"],["value","exercices"],["value","presets"],[4,"ngIf"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["name","add-outline"],["color","secondary","lines","none",2,"border-bottom","solid 0.5px white",3,"click"],["name","barbell-outline",2,"font-size","40px"],[2,"text-align","center"],["outline","","color","light"],["name","alarm-outline"],["side","end"],["color","warning",3,"click"],["slot","icon-only","name","pencil-outline"],["color","danger",3,"click"],["slot","icon-only","name","trash-outline"],["color","secondary","lines","none",2,"border-bottom","solid 0.5px white"],["outline","",2,"color","white"],["name","cog-outline"]],template:function(e,n){1&e&&(p.Kb(0,"app-header"),p.Ob(1,"ion-toolbar",0),p.Ob(2,"ion-segment",1),p.Wb("ngModelChange",(function(e){return n.currentTab=e})),p.Ob(3,"ion-segment-button",2),p.mc(4," Exercices "),p.Nb(),p.Ob(5,"ion-segment-button",3),p.mc(6," Presets "),p.Nb(),p.Nb(),p.Nb(),p.lc(7,g,6,1,"ion-content",4),p.lc(8,O,6,1,"ion-content",4),p.Kb(9,"app-footer")),2&e&&(p.xb(2),p.ec("ngModel",n.currentTab),p.xb(5),p.ec("ngIf","exercices"===n.currentTab),p.xb(1),p.ec("ngIf","presets"===n.currentTab))},directives:[d.a,a.D,a.x,a.I,c.d,c.e,a.y,o.i,v.a,a.g,a.t,o.h,a.i,a.j,a.m,a.r,a.o,a.s,a.f,a.q,a.p],styles:[""]}),N)}],E=((k=function n(){e(this,n)}).\u0275mod=p.Hb({type:k}),k.\u0275inj=p.Gb({factory:function(e){return new(e||k)},imports:[[s.i.forChild(y)],s.i]}),k),P=r("j1ZV"),K=((w=function n(){e(this,n)}).\u0275mod=p.Hb({type:w}),w.\u0275inj=p.Gb({factory:function(e){return new(e||w)},imports:[[o.b,c.a,a.E,P.a,E]]}),w)}}])}();