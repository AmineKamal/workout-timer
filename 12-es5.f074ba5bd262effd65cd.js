!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{cgDO:function(t,r,i){"use strict";i.r(r),i.d(r,"ExercicesPageModule",(function(){return E}));var o=i("ofXK"),c=i("3Pt+"),a=i("TEn/"),s=i("tyNb"),u=i("mrSG"),b=i("UFF1"),f=i("2Q/g"),l=i("Ot/k"),p=i("f2Wq"),m=i("fXoL"),d=i("2MiI"),v=i("LmEr");function h(e,n){if(1&e){var t=m.Pb();m.Ob(0,"ion-item-sliding"),m.Ob(1,"ion-item",9),m.Wb("click",(function(){m.hc(t);var e=n.index;return m.Zb(2).start(e)})),m.Kb(2,"ion-icon",10),m.Ob(3,"ion-label",11),m.oc(4),m.Nb(),m.Ob(5,"ion-chip",12),m.Kb(6,"ion-icon",13),m.Ob(7,"ion-label"),m.oc(8),m.Nb(),m.Nb(),m.Nb(),m.Ob(9,"ion-item-options",14),m.Ob(10,"ion-item-option",15),m.Wb("click",(function(){m.hc(t);var e=n.index;return m.Zb(2).editExercice(e)})),m.Kb(11,"ion-icon",16),m.Nb(),m.Ob(12,"ion-item-option",17),m.Wb("click",(function(){m.hc(t);var e=n.index;return m.Zb(2).removeExercice(e)})),m.Kb(13,"ion-icon",18),m.Nb(),m.Nb(),m.Nb()}if(2&e){var r=n.$implicit,i=m.Zb(2);m.xb(4),m.pc(r.name),m.xb(4),m.pc(i.toTime(r.totalTime,!0))}}function x(e,n){if(1&e){var t=m.Pb();m.Ob(0,"ion-content"),m.Ob(1,"ion-list",4),m.nc(2,h,14,2,"ion-item-sliding",5),m.Nb(),m.Ob(3,"ion-fab",6),m.Ob(4,"ion-fab-button",7),m.Wb("click",(function(){return m.hc(t),m.Zb().addExercice()})),m.Kb(5,"ion-icon",8),m.Nb(),m.Nb(),m.Nb()}if(2&e){var r=m.Zb();m.xb(2),m.ec("ngForOf",r.exercices)}}function g(e,n){if(1&e){var t=m.Pb();m.Ob(0,"ion-item-sliding"),m.Ob(1,"ion-item",19),m.Kb(2,"ion-icon",10),m.Ob(3,"ion-label",11),m.oc(4),m.Nb(),m.Ob(5,"ion-chip",20),m.Ob(6,"ion-label"),m.oc(7),m.Nb(),m.Nb(),m.Nb(),m.Ob(8,"ion-item-options",14),m.Ob(9,"ion-item-option",15),m.Wb("click",(function(){m.hc(t);var e=n.index;return m.Zb(2).editPreset(e)})),m.Kb(10,"ion-icon",16),m.Nb(),m.Ob(11,"ion-item-option",17),m.Wb("click",(function(){m.hc(t);var e=n.index;return m.Zb(2).removePreset(e)})),m.Kb(12,"ion-icon",18),m.Nb(),m.Nb(),m.Nb()}if(2&e){var r=n.$implicit;m.xb(4),m.pc(r.name),m.xb(3),m.pc("PRESET")}}function O(e,n){if(1&e){var t=m.Pb();m.Ob(0,"ion-content"),m.Ob(1,"ion-list"),m.nc(2,g,13,2,"ion-item-sliding",5),m.Nb(),m.Ob(3,"ion-fab",6),m.Ob(4,"ion-fab-button",7),m.Wb("click",(function(){return m.hc(t),m.Zb().addPreset()})),m.Kb(5,"ion-icon",8),m.Nb(),m.Nb(),m.Nb()}if(2&e){var r=m.Zb();m.xb(2),m.ec("ngForOf",r.presets)}}var k,w,N,y=[{path:"",component:(k=function(){function t(n){e(this,t),this.modalController=n,this.currentTab="exercices"}var r,i,o;return r=t,(i=[{key:"ngOnInit",value:function(){this.presets=b.a.presets,this.exercices=b.a.exercices}},{key:"toTime",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(f.e)(n?e/1e3:e)}},{key:"removeExercice",value:function(e){b.a.update("exercices",(function(n){return n.splice(e,1)}))}},{key:"removePreset",value:function(e){b.a.update("presets",(function(n){return n.splice(e,1)}))}},{key:"editExercice",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,r,i,o,c=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.exercices[e],r=t.elements,i=t.name,n.next=5,this.modalController.create({component:p.a,componentProps:{back:function(){return Object(u.a)(c,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.dismiss();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},actions:[{name:"EDIT",action:function(n){return b.a.update("exercices",(function(t){return t[e]=n}))},quit:!0}],elements:r,exerciceName:i}});case 5:return o=n.sent,n.next=8,o.present();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n,this)})))}},{key:"editPreset",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,r,i,o,c=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.presets[e],r=t.elements,i=t.name,n.next=5,this.modalController.create({component:p.a,componentProps:{back:function(){return Object(u.a)(c,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.dismiss();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},actions:[{name:"EDIT",action:function(n){return b.a.update("presets",(function(t){return t[e]=n}))},quit:!0}],elements:r,exerciceName:i,forcePreset:!0}});case 5:return o=n.sent,n.next=8,o.present();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n,this)})))}},{key:"start",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:l.a.start(this.modalController,this.exercices[e]);case 1:case"end":return n.stop()}}),n,this)})))}},{key:"addExercice",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:p.a,componentProps:{back:function(){return Object(u.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.dismiss();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},actions:[{name:"CREATE",action:function(e){return b.a.update("exercices",(function(n){return n.push(e)}))},quit:!0}]}});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"addPreset",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:p.a,componentProps:{back:function(){return Object(u.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.dismiss();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},actions:[{name:"CREATE",action:function(e){return b.a.update("presets",(function(n){return n.push(e)}))},quit:!0}],forcePreset:!0}});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}}),e,this)})))}}])&&n(r.prototype,i),o&&n(r,o),t}(),k.\u0275fac=function(e){return new(e||k)(m.Jb(a.Ab))},k.\u0275cmp=m.Db({type:k,selectors:[["app-exercices"]],decls:9,vars:3,consts:[[3,"ngModel","ngModelChange"],["value","exercices"],["value","presets"],[4,"ngIf"],[2,"border-top","solid white 1px"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","primary",3,"click"],["name","add-outline"],["color","secondary","lines","none",2,"border-bottom","solid 0.5px white",3,"click"],["name","barbell-outline",2,"font-size","40px"],[2,"text-align","center"],["outline","","color","light"],["name","alarm-outline"],["side","end"],["color","warning",3,"click"],["slot","icon-only","name","pencil-outline"],["color","danger",3,"click"],["slot","icon-only","name","trash-outline"],["color","secondary","lines","none",2,"border-bottom","solid 0.5px white"],["outline",""]],template:function(e,n){1&e&&(m.Ob(0,"app-header"),m.Ob(1,"ion-segment",0),m.Wb("ngModelChange",(function(e){return n.currentTab=e})),m.Ob(2,"ion-segment-button",1),m.oc(3," Exercices "),m.Nb(),m.Ob(4,"ion-segment-button",2),m.oc(5," Presets "),m.Nb(),m.Nb(),m.Nb(),m.nc(6,x,6,1,"ion-content",3),m.nc(7,O,6,1,"ion-content",3),m.Kb(8,"app-footer")),2&e&&(m.xb(1),m.ec("ngModel",n.currentTab),m.xb(5),m.ec("ngIf","exercices"===n.currentTab),m.xb(1),m.ec("ngIf","presets"===n.currentTab))},directives:[d.a,a.fb,a.Gb,c.j,c.m,a.gb,o.t,v.a,a.r,a.L,o.s,a.t,a.u,a.z,a.J,a.E,a.K,a.p,a.I,a.H],styles:["ion-chip[_ngcontent-%COMP%]{--color:#fff;border-color:#fff}ion-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fff}"]}),k)}],P=((w=function n(){e(this,n)}).\u0275mod=m.Hb({type:w}),w.\u0275inj=m.Gb({factory:function(e){return new(e||w)},imports:[[s.k.forChild(y)],s.k]}),w),R=i("j1ZV"),E=((N=function n(){e(this,n)}).\u0275mod=m.Hb({type:N}),N.\u0275inj=m.Gb({factory:function(e){return new(e||N)},imports:[[o.c,c.e,a.yb,R.a,P]]}),N)}}])}();