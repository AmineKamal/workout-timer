(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6pfz":function(o,t,n){"use strict";n.r(t),n.d(t,"WorkoutsPageModule",(function(){return w}));var i=n("ofXK"),e=n("3Pt+"),c=n("TEn/"),r=n("tyNb"),s=n("mrSG"),a=n("UFF1"),l=n("Ot/k"),b=n("2Q/g"),u=n("Jn3H"),d=n("fXoL"),m=n("2MiI"),p=n("LmEr");function f(o,t){if(1&o){const o=d.Pb();d.Ob(0,"ion-item-sliding"),d.Ob(1,"ion-item",4),d.Wb("click",(function(){d.gc(o);const n=t.index;return d.Zb().start(n)})),d.Kb(2,"ion-icon",5),d.Ob(3,"ion-label",6),d.mc(4),d.Nb(),d.Ob(5,"ion-chip",7),d.Kb(6,"ion-icon",8),d.Ob(7,"ion-label"),d.mc(8),d.Nb(),d.Nb(),d.Nb(),d.Ob(9,"ion-item-options",9),d.Ob(10,"ion-item-option",10),d.Wb("click",(function(){d.gc(o);const n=t.index;return d.Zb().edit(n)})),d.Kb(11,"ion-icon",11),d.Nb(),d.Ob(12,"ion-item-option",12),d.Wb("click",(function(){d.gc(o);const n=t.index;return d.Zb().remove(n)})),d.Kb(13,"ion-icon",13),d.Nb(),d.Nb(),d.Nb()}if(2&o){const o=t.$implicit,n=d.Zb();d.xb(4),d.nc(o.name),d.xb(4),d.nc(n.toTime(o.totalTime))}}const O=[{path:"",component:(()=>{class o{constructor(o){this.modalController=o}ngOnInit(){this.workouts=a.a.workouts}start(o){return Object(s.a)(this,void 0,void 0,(function*(){l.a.start(this.modalController,this.workouts[o])}))}add(){return Object(s.a)(this,void 0,void 0,(function*(){const o=yield this.modalController.create({component:u.a,componentProps:{back:()=>Object(s.a)(this,void 0,void 0,(function*(){return yield o.dismiss()})),actions:[{name:"CREATE",action:o=>a.a.update("workouts",t=>t.push(o)),quit:!0}]}});yield o.present()}))}remove(o){a.a.update("workouts",t=>t.splice(o,1))}edit(o){return Object(s.a)(this,void 0,void 0,(function*(){const t=this.workouts[o],n=yield this.modalController.create({component:u.a,componentProps:{back:()=>Object(s.a)(this,void 0,void 0,(function*(){return yield n.dismiss()})),actions:[{name:"EDIT",action:t=>a.a.update("workouts",n=>n[o]=t),quit:!0}],exercices:t.exercices,workoutName:t.name}});yield n.present()}))}toTime(o,t=!1){return Object(b.c)(t?o/1e3:o)}}return o.\u0275fac=function(t){return new(t||o)(d.Jb(c.C))},o.\u0275cmp=d.Db({type:o,selectors:[["app-workouts"]],decls:8,vars:1,consts:[[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","tertiary",3,"click"],["name","add-outline"],["color","tertiary","lines","none",2,"border-bottom","solid 0.5px white",3,"click"],["name","barbell-outline",2,"font-size","40px"],[2,"text-align","center"],["outline","","color","light"],["name","alarm-outline"],["side","end"],["color","warning",3,"click"],["slot","icon-only","name","pencil-outline"],["color","danger",3,"click"],["slot","icon-only","name","trash-outline"]],template:function(o,t){1&o&&(d.Kb(0,"app-header"),d.Ob(1,"ion-content"),d.Ob(2,"ion-list"),d.lc(3,f,14,2,"ion-item-sliding",0),d.Nb(),d.Ob(4,"ion-fab",1),d.Ob(5,"ion-fab-button",2),d.Wb("click",(function(){return t.add()})),d.Kb(6,"ion-icon",3),d.Nb(),d.Nb(),d.Nb(),d.Kb(7,"app-footer")),2&o&&(d.xb(3),d.ec("ngForOf",t.workouts))},directives:[m.a,c.f,c.s,i.h,c.h,c.i,c.l,p.a,c.q,c.n,c.r,c.e,c.p,c.o],styles:["ion-avatar[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{font-size:40px!important}ion-item[_ngcontent-%COMP%]{--border-color:#fff}"]}),o})()}];let h=(()=>{class o{}return o.\u0275mod=d.Hb({type:o}),o.\u0275inj=d.Gb({factory:function(t){return new(t||o)},imports:[[r.i.forChild(O)],r.i]}),o})();var k=n("j1ZV");let w=(()=>{class o{}return o.\u0275mod=d.Hb({type:o}),o.\u0275inj=d.Gb({factory:function(t){return new(t||o)},imports:[[i.b,e.a,c.A,k.a,h]]}),o})()}}]);