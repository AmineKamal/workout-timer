(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"ct+p":function(t,o,e){"use strict";e.r(o),e.d(o,"HomePageModule",(function(){return w}));var n=e("ofXK"),i=e("TEn/"),r=e("3Pt+"),c=e("tyNb"),a=e("mrSG"),s=e("zpQP"),l=e("UFF1"),u=e("Ot/k"),d=e("f2Wq"),b=e("Jn3H"),p=e("fXoL"),m=e("2MiI"),f=e("LmEr");const h=[{path:"",component:(()=>{class t{constructor(t,o,e){this.modalController=t,this.toastController=o,this.router=e}ngOnInit(){}quickWorkout(){return Object(a.a)(this,void 0,void 0,(function*(){const t=l.a.workouts.length,o=yield this.modalController.create({component:b.a,componentProps:{back:()=>Object(a.a)(this,void 0,void 0,(function*(){return yield o.dismiss()})),actions:[{name:"START",action:t=>u.a.start(this.modalController,t),quit:!0},{name:"SAVE",action:o=>{l.a.update("workouts",l.a.workouts.length>t?e=>e[t]=o:t=>t.push(o)),this.displaySaveToast("workout")}}]}});yield o.present()}))}quickExercice(){return Object(a.a)(this,void 0,void 0,(function*(){const t=l.a.exercices.length,o=yield this.modalController.create({component:d.a,componentProps:{back:()=>Object(a.a)(this,void 0,void 0,(function*(){return yield o.dismiss()})),actions:[{name:"START",action:t=>u.a.start(this.modalController,t),quit:!0},{name:"SAVE",action:o=>{l.a.update("exercices",l.a.exercices.length>t?e=>e[t]=o:t=>t.push(o)),this.displaySaveToast("exercice")}}]}});return yield o.present()}))}goto(t){return Object(a.a)(this,void 0,void 0,(function*(){s.a.currentPage.next(t),this.router.navigate([t])}))}displaySaveToast(t){return Object(a.a)(this,void 0,void 0,(function*(){const o=yield this.toastController.create({message:`Your ${t} has been saved.`,duration:2e3,color:"success"});yield o.present()}))}}return t.\u0275fac=function(o){return new(o||t)(p.Jb(i.Ab),p.Jb(i.Ib),p.Jb(c.g))},t.\u0275cmp=p.Db({type:t,selectors:[["app-home"]],decls:15,vars:0,consts:[[2,"border-top","solid 1px white"],["button","","detail","false","expand","block","color","secondary",3,"click"],["slot","end","name","barbell"],["button","","detail","false","expand","block","color","tertiary",3,"click"],["button","","detail","false","expand","block","color","primary",3,"click"]],template:function(t,o){1&t&&(p.Ob(0,"app-header"),p.Ob(1,"ion-title"),p.oc(2," Home "),p.Nb(),p.Nb(),p.Ob(3,"ion-content"),p.Ob(4,"ion-list",0),p.Ob(5,"ion-item",1),p.Wb("click",(function(){return o.quickExercice()})),p.oc(6," Quick Exercice "),p.Kb(7,"ion-icon",2),p.Nb(),p.Ob(8,"ion-item",3),p.Wb("click",(function(){return o.quickWorkout()})),p.oc(9," Quick Workout "),p.Kb(10,"ion-icon",2),p.Nb(),p.Ob(11,"ion-item",4),p.Wb("click",(function(){return o.goto("weight-tracker")})),p.oc(12," Weight Tracker "),p.Kb(13,"ion-icon",2),p.Nb(),p.Nb(),p.Nb(),p.Kb(14,"app-footer"))},directives:[m.a,i.ub,i.r,i.L,i.E,i.z,f.a],styles:["ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:35px}"]}),t})()}];let k=(()=>{class t{}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(o){return new(o||t)},imports:[[c.k.forChild(h)],c.k]}),t})();const y=new p.q("AdsenseConfig");let v=(()=>{class t{static forRoot(o={}){return{ngModule:t,providers:[{provide:y,useValue:o}]}}}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(o){return new(o||t)},imports:[[n.c]]}),t})();var g=e("j1ZV");let w=(()=>{class t{}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(o){return new(o||t)},imports:[[n.c,r.e,i.yb,k,g.a,v.forRoot({adtest:"on"})]]}),t})()}}]);