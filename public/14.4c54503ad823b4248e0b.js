(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{ksni:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("j5oB"),e=function(){function l(l,n){this.peliService=l,this.activatedRoute=n,this.content=null}return l.prototype.ngOnInit=function(){var l=this,n=this.activatedRoute.snapshot.paramMap.get("id");this.peliService.getDetails(n).subscribe(function(n){return l.content=n})},l}(),i=function(){return function(){}}(),b=u("pMnS"),a=u("oBZk"),c=u("ZZ/e"),r=u("Ip0R"),p=u("ZYCi"),s=t.nb({encapsulation:0,styles:[[".info-img[_ngcontent-%COMP%]{max-height:50vh;max-width:50vh;padding:5px}@media (max-width:800px){.info-img[_ngcontent-%COMP%]{max-height:100%}}"]],data:{}});function h(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,34,"ion-card",[],null,null,null,a.C,a.e)),t.ob(1,49152,null,0,c.k,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,7,"ion-card-header",[["text-center",""]],null,null,null,a.z,a.g)),t.ob(3,49152,null,0,c.m,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,2,"ion-card-title",[],null,null,null,a.B,a.i)),t.ob(5,49152,null,0,c.o,[t.h,t.k],null,null),(l()(),t.Fb(6,0,["",""])),(l()(),t.pb(7,0,null,0,2,"ion-card-subtitle",[],null,null,null,a.A,a.h)),t.ob(8,49152,null,0,c.n,[t.h,t.k],null,null),(l()(),t.Fb(9,0,[" "," "," "])),(l()(),t.pb(10,0,null,0,24,"ion-card-content",[],null,null,null,a.y,a.f)),t.ob(11,49152,null,0,c.l,[t.h,t.k],null,null),(l()(),t.pb(12,0,null,0,0,"img",[["class","info-img"]],[[8,"src",4]],null,null,null,null)),(l()(),t.Fb(13,0,[" "," "])),(l()(),t.pb(14,0,null,0,6,"ion-item",[["lines","none"]],null,null,null,a.G,a.m)),t.ob(15,49152,null,0,c.F,[t.h,t.k],{lines:[0,"lines"]},null),(l()(),t.pb(16,0,null,0,1,"ion-icon",[["name","star-half"],["slot","start"]],null,null,null,a.F,a.l)),t.ob(17,49152,null,0,c.A,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.pb(18,0,null,0,2,"ion-label",[],null,null,null,a.H,a.n)),t.ob(19,49152,null,0,c.L,[t.h,t.k],null,null),(l()(),t.Fb(20,0,[" "," "])),(l()(),t.pb(21,0,null,0,6,"ion-item",[["lines","none"]],null,null,null,a.G,a.m)),t.ob(22,49152,null,0,c.F,[t.h,t.k],{lines:[0,"lines"]},null),(l()(),t.pb(23,0,null,0,1,"ion-icon",[["name","clipboard"],["slot","start"]],null,null,null,a.F,a.l)),t.ob(24,49152,null,0,c.A,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.pb(25,0,null,0,2,"ion-label",[["text-wrap",""]],null,null,null,a.H,a.n)),t.ob(26,49152,null,0,c.L,[t.h,t.k],null,null),(l()(),t.Fb(27,0,[" "," "])),(l()(),t.pb(28,0,null,0,6,"ion-item",[["lines","none"]],null,null,null,a.G,a.m)),t.ob(29,49152,null,0,c.F,[t.h,t.k],{lines:[0,"lines"]},null),(l()(),t.pb(30,0,null,0,1,"ion-icon",[["name","people"],["slot","start"]],null,null,null,a.F,a.l)),t.ob(31,49152,null,0,c.A,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.pb(32,0,null,0,2,"ion-label",[["text-wrap",""]],null,null,null,a.H,a.n)),t.ob(33,49152,null,0,c.L,[t.h,t.k],null,null),(l()(),t.Fb(34,0,[" "," "]))],function(l,n){l(n,15,0,"none"),l(n,17,0,"star-half"),l(n,22,0,"none"),l(n,24,0,"clipboard"),l(n,29,0,"none"),l(n,31,0,"people")},function(l,n){var u=n.component;l(n,6,0,null==u.content?null:u.content.Title),l(n,9,0,u.content.Year,u.content.Language),l(n,12,0,t.rb(1,"",u.content.Poster,"")),l(n,13,0,u.content.Plot),l(n,20,0,null==u.content?null:u.content.imdbRating),l(n,27,0,null==u.content?null:u.content.Director),l(n,34,0,null==u.content?null:u.content.Actors)})}function f(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,11,"ion-header",[],null,null,null,a.E,a.k)),t.ob(1,49152,null,0,c.z,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,9,"ion-toolbar",[["color","danger"]],null,null,null,a.N,a.t)),t.ob(3,49152,null,0,c.zb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.x,a.d)),t.ob(5,49152,null,0,c.j,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.zb(l,8).onClick(u)&&o),o},a.w,a.c)),t.ob(7,49152,null,0,c.e,[t.h,t.k],{defaultHref:[0,"defaultHref"]},null),t.ob(8,16384,null,0,c.f,[[2,c.fb],c.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.pb(9,0,null,0,2,"ion-title",[],null,null,null,a.M,a.s)),t.ob(10,49152,null,0,c.xb,[t.h,t.k],null,null),(l()(),t.Fb(11,0,["",""])),(l()(),t.pb(12,0,null,null,3,"ion-content",[["padding",""]],null,null,null,a.D,a.j)),t.ob(13,49152,null,0,c.s,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,h)),t.ob(15,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,"danger"),l(n,7,0,"/"),l(n,8,0,"/"),l(n,15,0,u.content)},function(l,n){var u=n.component;l(n,11,0,null==u.content?null:u.content.Title)})}function d(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-peli-details",[],null,null,null,f,s)),t.ob(1,114688,null,0,e,[o.a,p.a],null,null)],function(l,n){l(n,1,0)},null)}var m=t.lb("app-peli-details",e,d,{},{},[]),k=u("gIcY");u.d(n,"PeliDetailsPageModuleNgFactory",function(){return g});var g=t.mb(i,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[b.a,m]],[3,t.j],t.x]),t.xb(4608,r.l,r.k,[t.u,[2,r.s]]),t.xb(4608,k.g,k.g,[]),t.xb(4608,c.a,c.a,[t.z,t.g]),t.xb(4608,c.Db,c.Db,[c.a,t.j,t.q]),t.xb(4608,c.Gb,c.Gb,[c.a,t.j,t.q]),t.xb(1073742336,r.c,r.c,[]),t.xb(1073742336,k.f,k.f,[]),t.xb(1073742336,k.a,k.a,[]),t.xb(1073742336,c.Bb,c.Bb,[]),t.xb(1073742336,p.o,p.o,[[2,p.u],[2,p.m]]),t.xb(1073742336,i,i,[]),t.xb(1024,p.k,function(){return[[{path:"",component:e}]]},[])])})}}]);