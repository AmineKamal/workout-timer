!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"9v8Q":function(i,t,o){"use strict";o.r(t),o.d(t,"WeightTrackerPageModule",(function(){return k}));var c=o("ofXK"),r=o("3Pt+"),a=o("TEn/"),b=o("tyNb"),s=o("UFF1"),l=o("fXoL"),h=o("2MiI"),u=o("LmEr");function g(e,n){if(1&e&&(l.Ob(0,"ion-label"),l.mc(1),l.Nb()),2&e){var i=l.Zb();l.xb(1),l.nc(i.currentWeight)}}function m(e,n){if(1&e&&(l.Ob(0,"ion-label"),l.mc(1),l.Nb()),2&e){var i=l.Zb();l.xb(1),l.nc(i.hiddenWeight)}}function f(e,n){if(1&e){var i=l.Pb();l.Ob(0,"ion-icon",7),l.Wb("click",(function(){return l.gc(i),l.Zb().toggleHideWeight()})),l.Nb()}}function d(e,n){if(1&e){var i=l.Pb();l.Ob(0,"ion-icon",8),l.Wb("click",(function(){return l.gc(i),l.Zb().toggleHideWeight()})),l.Nb()}}function p(e,n){if(1&e){var i=l.Pb();l.Ob(0,"ion-card-content"),l.Ob(1,"ion-item",0),l.Ob(2,"ion-label",9),l.mc(3,"Calories"),l.Nb(),l.Ob(4,"ion-input",6),l.Wb("ngModelChange",(function(e){return l.gc(i),l.Zb().macros.calories=e})),l.Nb(),l.Nb(),l.Ob(5,"ion-item",0),l.Ob(6,"ion-label",9),l.mc(7,"Protein"),l.Nb(),l.Ob(8,"ion-input",6),l.Wb("ngModelChange",(function(e){return l.gc(i),l.Zb().macros.protein=e})),l.Nb(),l.Nb(),l.Ob(9,"ion-item",0),l.Ob(10,"ion-label",9),l.mc(11,"Fat"),l.Nb(),l.Ob(12,"ion-input",6),l.Wb("ngModelChange",(function(e){return l.gc(i),l.Zb().macros.fat=e})),l.Nb(),l.Nb(),l.Ob(13,"ion-item",0),l.Ob(14,"ion-label",9),l.mc(15,"Carbs"),l.Nb(),l.Ob(16,"ion-input",6),l.Wb("ngModelChange",(function(e){return l.gc(i),l.Zb().macros.carbs=e})),l.Nb(),l.Nb(),l.Ob(17,"ion-item",10),l.Wb("click",(function(){return l.gc(i),l.Zb().logMacros()})),l.Ob(18,"div",11),l.mc(19,"Save Macros"),l.Nb(),l.Nb(),l.Nb()}if(2&e){var t=l.Zb();l.xb(4),l.ec("ngModel",t.macros.calories),l.xb(4),l.ec("ngModel",t.macros.protein),l.xb(4),l.ec("ngModel",t.macros.fat),l.xb(4),l.ec("ngModel",t.macros.carbs)}}function N(e,n){if(1&e){var i=l.Pb();l.Ob(0,"ion-card-content"),l.Ob(1,"ion-item",0),l.Ob(2,"ion-label"),l.mc(3,"Calories"),l.Nb(),l.Ob(4,"ion-label"),l.mc(5),l.Nb(),l.Nb(),l.Ob(6,"ion-item",0),l.Ob(7,"ion-label"),l.mc(8,"Protein"),l.Nb(),l.Ob(9,"ion-label"),l.mc(10),l.Nb(),l.Nb(),l.Ob(11,"ion-item",0),l.Ob(12,"ion-label"),l.mc(13,"Fat"),l.Nb(),l.Ob(14,"ion-label"),l.mc(15),l.Nb(),l.Nb(),l.Ob(16,"ion-item",0),l.Ob(17,"ion-label"),l.mc(18,"Carbs"),l.Nb(),l.Ob(19,"ion-label"),l.mc(20),l.Nb(),l.Nb(),l.Ob(21,"ion-item",10),l.Wb("click",(function(){return l.gc(i),l.Zb().forceUpdateMacroForm()})),l.Ob(22,"div",11),l.mc(23,"Update Macros"),l.Nb(),l.Nb(),l.Nb()}if(2&e){var t=l.Zb();l.xb(5),l.nc(t.macros.calories),l.xb(5),l.nc(t.macros.protein),l.xb(5),l.nc(t.macros.fat),l.xb(5),l.nc(t.macros.carbs)}}var O,W,v,M=[{path:"",component:(O=function(){function i(){e(this,i),this.showMacroForm=!1}var t,o,c;return t=i,(o=[{key:"ngOnInit",value:function(){var e;this.lossPercent=100*s.a.lossPercent,this.macros=s.a.macros;var n=this.macros;this.showMacroForm=!(n.calories&&n.protein&&n.fat&&n.carbs),this.currentWeight=null!==(e=s.a.weights[s.a.weights.length-1])&&void 0!==e?e:"-",this.hideWeight=s.a.hideWeight}},{key:"toggleHideWeight",value:function(){this.hideWeight=!this.hideWeight,s.a.hideWeight=this.hideWeight,s.a.save("hideWeight")}},{key:"forceUpdateMacroForm",value:function(){this.showMacroForm=!0}},{key:"logMacros",value:function(){var e=this.macros;this.showMacroForm=!(e.calories&&e.protein&&e.fat&&e.carbs),s.a.save("macros")}},{key:"logWeight",value:function(){if(this.newWeight){var e=this.newWeight,n=s.a.macros;if(n.calories&&n.protein&&n.fat&&n.carbs){var i=s.a.weights[s.a.weights.length-1];if(i){var t=i-this.lossPercent/100*i;console.log(this.lossPercent,t,i),s.a.macros=this.adjustMacros(n,t,e),s.a.save("macros"),this.macros=s.a.macros}}s.a.update("weights",(function(n){return n.push(e)})),this.currentWeight=s.a.weights[s.a.weights.length-1],this.newWeight=void 0}}},{key:"updateFatLoss",value:function(){var e=this.lossPercent/100,n=s.a.macros;this.currentWeight&&"number"==typeof this.currentWeight&&n.calories&&n.protein&&n.fat&&n.carbs&&(s.a.macros=this.adjustMacros(n,this.currentWeight-e*this.currentWeight,this.currentWeight-s.a.lossPercent*this.currentWeight),s.a.save("macros"),this.macros=s.a.macros),s.a.lossPercent=e,s.a.save("lossPercent")}},{key:"adjustMacros",value:function(e,n,i){var t=n-i,o=e.calories,c=e.protein,r=e.fat,a=e.carbs;console.log(o,t);var b=o+500*t,s=b/o,l=c*s,h=r*s,u=a*s;return{calories:Math.round(b),fat:Math.round(h),carbs:Math.round(u),protein:Math.round(l)}}},{key:"hiddenWeight",get:function(){return this.currentWeight.toString().split("").map((function(){return"*"})).join("")}}])&&n(t.prototype,o),c&&n(t,c),i}(),O.\u0275fac=function(e){return new(e||O)},O.\u0275cmp=l.Db({type:O,selectors:[["app-weight-tracker"]],decls:39,vars:8,consts:[["lines","full"],[4,"ngIf"],["name","eye-outline","color","primary",3,"click",4,"ngIf"],["name","eye-off-outline","color","primary",3,"click",4,"ngIf"],["placeholder","New Weight","type","number",3,"ngModel","ngModelChange"],["slot","end",3,"click"],["type","number",3,"ngModel","ngModelChange"],["name","eye-outline","color","primary",3,"click"],["name","eye-off-outline","color","primary",3,"click"],["position","floating"],["color","primary","button","","detail","false",3,"click"],[2,"width","100%","height","100%","display","flex","justify-content","center","align-items","center"]],template:function(e,n){1&e&&(l.Ob(0,"app-header"),l.Ob(1,"ion-title"),l.mc(2," Weight Tracker "),l.Nb(),l.Nb(),l.Ob(3,"ion-content"),l.Ob(4,"ion-card"),l.Ob(5,"ion-card-header"),l.Ob(6,"ion-card-title"),l.mc(7,"Weight"),l.Nb(),l.Nb(),l.Ob(8,"ion-card-content"),l.Ob(9,"ion-item",0),l.Ob(10,"ion-label"),l.mc(11,"Current Weight"),l.Nb(),l.lc(12,g,2,1,"ion-label",1),l.lc(13,m,2,1,"ion-label",1),l.lc(14,f,1,0,"ion-icon",2),l.lc(15,d,1,0,"ion-icon",3),l.Nb(),l.Ob(16,"ion-item",0),l.Ob(17,"ion-input",4),l.Wb("ngModelChange",(function(e){return n.newWeight=e})),l.Nb(),l.Ob(18,"ion-button",5),l.Wb("click",(function(){return n.logWeight()})),l.mc(19," Log Weight "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(20,"ion-card"),l.Ob(21,"ion-card-header"),l.Ob(22,"ion-card-title"),l.mc(23,"Fat Loss"),l.Nb(),l.Nb(),l.Ob(24,"ion-card-content"),l.Ob(25,"ion-item",0),l.Ob(26,"ion-label"),l.mc(27,"Weekly Fat Loss target (%)"),l.Nb(),l.Nb(),l.Ob(28,"ion-item",0),l.Ob(29,"ion-input",6),l.Wb("ngModelChange",(function(e){return n.lossPercent=e})),l.Nb(),l.Ob(30,"ion-button",5),l.Wb("click",(function(){return n.updateFatLoss()})),l.mc(31," Update "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(32,"ion-card"),l.Ob(33,"ion-card-header"),l.Ob(34,"ion-card-title"),l.mc(35,"Macros"),l.Nb(),l.Nb(),l.lc(36,p,20,4,"ion-card-content",1),l.lc(37,N,24,4,"ion-card-content",1),l.Nb(),l.Nb(),l.Kb(38,"app-footer")),2&e&&(l.xb(12),l.ec("ngIf",!n.hideWeight),l.xb(1),l.ec("ngIf",n.hideWeight),l.xb(1),l.ec("ngIf",!n.hideWeight),l.xb(1),l.ec("ngIf",n.hideWeight),l.xb(2),l.ec("ngModel",n.newWeight),l.xb(12),l.ec("ngModel",n.lossPercent),l.xb(7),l.ec("ngIf",n.showMacroForm),l.xb(1),l.ec("ngIf",!n.showMacroForm))},directives:[h.a,a.F,a.k,a.f,a.h,a.i,a.g,a.s,a.w,c.i,a.r,a.L,r.d,r.e,a.d,u.a,a.q],styles:[""]}),O)}],w=((W=function n(){e(this,n)}).\u0275mod=l.Hb({type:W}),W.\u0275inj=l.Gb({factory:function(e){return new(e||W)},imports:[[b.i.forChild(M)],b.i]}),W),y=o("j1ZV"),k=((v=function n(){e(this,n)}).\u0275mod=l.Hb({type:v}),v.\u0275inj=l.Gb({factory:function(e){return new(e||v)},imports:[[c.b,r.a,a.I,y.a,w]]}),v)}}])}();