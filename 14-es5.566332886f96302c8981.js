!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"T+lT":function(t,r,i){"use strict";i.r(r),i.d(r,"QuickWorkoutPageModule",(function(){return y}));var o=i("ofXK"),c=i("3Pt+"),a=i("TEn/"),s=i("tyNb"),u=i("mrSG"),l=i("Ah2X"),b=i("f2Wq"),p=i("PVgB"),m=i("fXoL"),f=i("2MiI"),d=i("LmEr");function h(e,n){if(1&e&&(m.Mb(0),m.Ob(1,"ion-item",9),m.Ob(2,"ion-avatar",10),m.Kb(3,"ion-icon",11),m.Nb(),m.Ob(4,"ion-label",12),m.mc(5),m.Nb(),m.Kb(6,"ion-icon",13),m.Kb(7,"ion-icon",14),m.Nb(),m.Ob(8,"ion-item",9),m.Ob(9,"ion-avatar",10),m.Kb(10,"ion-icon",15),m.Nb(),m.Ob(11,"ion-label",12),m.mc(12,"Rest"),m.Nb(),m.Ob(13,"ion-label",12),m.mc(14),m.Nb(),m.Nb(),m.Lb()),2&e){var t=n.$implicit;m.xb(5),m.nc(t.name||"Unamed Exercice"),m.xb(9),m.pc(" ",t.elements[t.elements.length-1].value," ",t.elements[t.elements.length-1].unit," ")}}var g,v,x,w=[{path:"",component:(g=function(){function t(n){e(this,t),this.modalController=n,this.exercices=[],this.workoutName=""}var r,i,o;return r=t,(i=[{key:"ngOnInit",value:function(){}},{key:"start",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:this.workoutName||"Quick Workout",exercices:this.exercices},e.next=3,this.modalController.create({component:p.a,componentProps:{back:function(){return Object(u.a)(r,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.dismiss();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},workout:Object(l.a)(n)}});case 3:return t=e.sent,e.next=6,t.present();case 6:this.exercices=[],this.workoutName="";case 8:case"end":return e.stop()}}),e,this)})))}},{key:"createExercice",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:b.a,componentProps:{back:function(){return Object(u.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.dismiss();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},actionName:"CREATE",action:function(e){return t.exercices.push(e)}}});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}}])&&n(r.prototype,i),o&&n(r,o),t}(),g.\u0275fac=function(e){return new(e||g)(m.Jb(a.v))},g.\u0275cmp=m.Db({type:g,selectors:[["app-quick-workout"]],decls:14,vars:1,consts:[[2,"border-top","solid white 1px"],["lines","full","color","tertiary"],[2,"display","flex","justify-content","space-around","width","100%","height","100%","align-items","center"],["name","save-outline"],["placeholder","Enter Workout Name"],["name","add-circle-outline",3,"click"],[4,"ngFor","ngForOf"],["color","tertiary",2,"border-bottom","solid white 1px",3,"click"],[1,"ion-activatable","ripple-parent",2,"display","flex","width","100%","justify-content","center"],["lines","full"],["slot","start"],["name","barbell-outline","color","primary"],[2,"text-align","center"],["name","pencil-outline","color","warning","slot","end"],["name","trash-outline","color","danger","slot","end"],["name","time-outline","color","primary"]],template:function(e,n){1&e&&(m.Kb(0,"app-header"),m.Ob(1,"ion-content"),m.Ob(2,"ion-list",0),m.Ob(3,"ion-item",1),m.Ob(4,"div",2),m.Kb(5,"ion-icon",3),m.Kb(6,"ion-input",4),m.Ob(7,"ion-icon",5),m.Wb("click",(function(){return n.createExercice()})),m.Nb(),m.Nb(),m.Nb(),m.lc(8,h,15,3,"ng-container",6),m.Nb(),m.Nb(),m.Ob(9,"ion-toolbar",7),m.Wb("click",(function(){return n.start()})),m.Ob(10,"div",8),m.mc(11," START "),m.Kb(12,"ion-ripple-effect"),m.Nb(),m.Nb(),m.Kb(13,"app-footer")),2&e&&(m.xb(8),m.ec("ngForOf",n.exercices))},directives:[f.a,a.f,a.m,a.k,a.i,a.j,a.x,o.h,a.s,a.n,d.a,a.b,a.l],styles:["ion-avatar[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{font-size:40px!important}.workout-setting-item-body[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-around;align-items:center;margin-top:5px}.workout-setting-item-title[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:30px}ion-input[_ngcontent-%COMP%]{display:flex;justify-content:center;text-align:center}"]}),g)}],k=((v=function n(){e(this,n)}).\u0275mod=m.Hb({type:v}),v.\u0275inj=m.Gb({factory:function(e){return new(e||v)},imports:[[s.i.forChild(w)],s.i]}),v),O=i("j1ZV"),y=((x=function n(){e(this,n)}).\u0275mod=m.Hb({type:x}),x.\u0275inj=m.Gb({factory:function(e){return new(e||x)},imports:[[o.b,c.a,a.t,k,O.a]]}),x)}}])}();