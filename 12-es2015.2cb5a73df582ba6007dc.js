(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{cgDO:function(e,n,t){"use strict";t.r(n),t.d(n,"ExercicesPageModule",(function(){return y}));var i=t("ofXK"),o=t("3Pt+"),c=t("TEn/"),r=t("tyNb"),s=t("mrSG"),b=t("UFF1"),a=t("2Q/g"),l=t("Ot/k"),d=t("f2Wq"),u=t("fXoL"),m=t("2MiI"),p=t("LmEr");function f(e,n){if(1&e){const e=u.Pb();u.Ob(0,"ion-item-sliding"),u.Ob(1,"ion-item",9),u.Wb("click",(function(){u.gc(e);const t=n.index;return u.Zb(2).start(t)})),u.Kb(2,"ion-icon",10),u.Ob(3,"ion-label",11),u.mc(4),u.Nb(),u.Ob(5,"ion-chip",12),u.Kb(6,"ion-icon",13),u.Ob(7,"ion-label"),u.mc(8),u.Nb(),u.Nb(),u.Nb(),u.Ob(9,"ion-item-options",14),u.Ob(10,"ion-item-option",15),u.Wb("click",(function(){u.gc(e);const t=n.index;return u.Zb(2).editExercice(t)})),u.Kb(11,"ion-icon",16),u.Nb(),u.Ob(12,"ion-item-option",17),u.Wb("click",(function(){u.gc(e);const t=n.index;return u.Zb(2).removeExercice(t)})),u.Kb(13,"ion-icon",18),u.Nb(),u.Nb(),u.Nb()}if(2&e){const e=n.$implicit,t=u.Zb(2);u.xb(4),u.nc(e.name),u.xb(4),u.nc(t.toTime(e.totalTime,!0))}}function O(e,n){if(1&e){const e=u.Pb();u.Ob(0,"ion-content"),u.Ob(1,"ion-list",4),u.lc(2,f,14,2,"ion-item-sliding",5),u.Nb(),u.Ob(3,"ion-fab",6),u.Ob(4,"ion-fab-button",7),u.Wb("click",(function(){return u.gc(e),u.Zb().addExercice()})),u.Kb(5,"ion-icon",8),u.Nb(),u.Nb(),u.Nb()}if(2&e){const e=u.Zb();u.xb(2),u.ec("ngForOf",e.exercices)}}function x(e,n){if(1&e){const e=u.Pb();u.Ob(0,"ion-item-sliding"),u.Ob(1,"ion-item",19),u.Kb(2,"ion-icon",10),u.Ob(3,"ion-label",11),u.mc(4),u.Nb(),u.Ob(5,"ion-chip",20),u.Ob(6,"ion-label"),u.mc(7),u.Nb(),u.Nb(),u.Nb(),u.Ob(8,"ion-item-options",14),u.Ob(9,"ion-item-option",15),u.Wb("click",(function(){u.gc(e);const t=n.index;return u.Zb(2).editPreset(t)})),u.Kb(10,"ion-icon",16),u.Nb(),u.Ob(11,"ion-item-option",17),u.Wb("click",(function(){u.gc(e);const t=n.index;return u.Zb(2).removePreset(t)})),u.Kb(12,"ion-icon",18),u.Nb(),u.Nb(),u.Nb()}if(2&e){const e=n.$implicit;u.xb(4),u.nc(e.name),u.xb(3),u.nc("PRESET")}}function g(e,n){if(1&e){const e=u.Pb();u.Ob(0,"ion-content"),u.Ob(1,"ion-list"),u.lc(2,x,13,2,"ion-item-sliding",5),u.Nb(),u.Ob(3,"ion-fab",6),u.Ob(4,"ion-fab-button",7),u.Wb("click",(function(){return u.gc(e),u.Zb().addPreset()})),u.Kb(5,"ion-icon",8),u.Nb(),u.Nb(),u.Nb()}if(2&e){const e=u.Zb();u.xb(2),u.ec("ngForOf",e.presets)}}const h=[{path:"",component:(()=>{class e{constructor(e){this.modalController=e,this.currentTab="exercices"}ngOnInit(){this.presets=b.a.presets,this.exercices=b.a.exercices}toTime(e,n=!1){return Object(a.c)(n?e/1e3:e)}removeExercice(e){b.a.update("exercices",n=>n.splice(e,1))}removePreset(e){b.a.update("presets",n=>n.splice(e,1))}editExercice(e){return Object(s.a)(this,void 0,void 0,(function*(){const n=this.exercices[e],t=n.elements,i=n.name,o=yield this.modalController.create({component:d.a,componentProps:{back:()=>Object(s.a)(this,void 0,void 0,(function*(){return yield o.dismiss()})),actions:[{name:"EDIT",action:n=>b.a.update("exercices",t=>t[e]=n),quit:!0}],elements:t,exerciceName:i}});return yield o.present()}))}editPreset(e){return Object(s.a)(this,void 0,void 0,(function*(){const n=this.presets[e],t=n.elements,i=n.name,o=yield this.modalController.create({component:d.a,componentProps:{back:()=>Object(s.a)(this,void 0,void 0,(function*(){return yield o.dismiss()})),actions:[{name:"EDIT",action:n=>b.a.update("presets",t=>t[e]=n),quit:!0}],elements:t,exerciceName:i,forcePreset:!0}});return yield o.present()}))}start(e){return Object(s.a)(this,void 0,void 0,(function*(){l.a.start(this.modalController,this.exercices[e])}))}addExercice(){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:d.a,componentProps:{back:()=>Object(s.a)(this,void 0,void 0,(function*(){return yield e.dismiss()})),actions:[{name:"CREATE",action:e=>b.a.update("exercices",n=>n.push(e)),quit:!0}]}});return yield e.present()}))}addPreset(){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:d.a,componentProps:{back:()=>Object(s.a)(this,void 0,void 0,(function*(){return yield e.dismiss()})),actions:[{name:"CREATE",action:e=>b.a.update("presets",n=>n.push(e)),quit:!0}],forcePreset:!0}});yield e.present()}))}}return e.\u0275fac=function(n){return new(n||e)(u.Jb(c.G))},e.\u0275cmp=u.Db({type:e,selectors:[["app-exercices"]],decls:9,vars:3,consts:[[3,"ngModel","ngModelChange"],["value","exercices"],["value","presets"],[4,"ngIf"],[2,"border-top","solid white 1px"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","primary",3,"click"],["name","add-outline"],["color","secondary","lines","none",2,"border-bottom","solid 0.5px white",3,"click"],["name","barbell-outline",2,"font-size","40px"],[2,"text-align","center"],["outline","","color","light"],["name","alarm-outline"],["side","end"],["color","warning",3,"click"],["slot","icon-only","name","pencil-outline"],["color","danger",3,"click"],["slot","icon-only","name","trash-outline"],["color","secondary","lines","none",2,"border-bottom","solid 0.5px white"],["outline",""]],template:function(e,n){1&e&&(u.Ob(0,"app-header"),u.Ob(1,"ion-segment",0),u.Wb("ngModelChange",(function(e){return n.currentTab=e})),u.Ob(2,"ion-segment-button",1),u.mc(3," Exercices "),u.Nb(),u.Ob(4,"ion-segment-button",2),u.mc(5," Presets "),u.Nb(),u.Nb(),u.Nb(),u.lc(6,O,6,1,"ion-content",3),u.lc(7,g,6,1,"ion-content",3),u.Kb(8,"app-footer")),2&e&&(u.xb(1),u.ec("ngModel",n.currentTab),u.xb(5),u.ec("ngIf","exercices"===n.currentTab),u.xb(1),u.ec("ngIf","presets"===n.currentTab))},directives:[m.a,c.x,c.I,o.d,o.e,c.y,i.i,p.a,c.g,c.t,i.h,c.i,c.j,c.m,c.r,c.o,c.s,c.f,c.q,c.p],styles:["ion-chip[_ngcontent-%COMP%]{--color:#fff;border-color:#fff}ion-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fff}"]}),e})()}];let N=(()=>{class e{}return e.\u0275mod=u.Hb({type:e}),e.\u0275inj=u.Gb({factory:function(n){return new(n||e)},imports:[[r.i.forChild(h)],r.i]}),e})();var v=t("j1ZV");let y=(()=>{class e{}return e.\u0275mod=u.Hb({type:e}),e.\u0275inj=u.Gb({factory:function(n){return new(n||e)},imports:[[i.b,o.a,c.E,v.a,N]]}),e})()}}]);