(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[146],{9623:(t,n,e)=>{"use strict";e.d(n,{J:()=>s}),e(8441);var i=e(1116),o=e(5366);let s=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.ez]]}),t})()},6146:(t,n,e)=>{"use strict";e.r(n),e.d(n,{AuthSignOutModule:()=>_});var i=e(3464),o=e(4369),s=e(9623),u=e(5425),r=e(5959),c=e(2132),a=e(1520),d=e(1521),l=e(5416),g=e(6599),m=e(5366),p=e(3675),f=e(1116);function x(t,n){if(1&t&&(m.ynx(0),m._uU(1),m.ALo(2,"i18nPlural"),m.BQk()),2&t){const t=m.oxw();m.xp6(1),m.hij(" Redirecting in ",m.xi3(2,1,t.countdown,t.countdownMapping)," ")}}function h(t,n){1&t&&(m.ynx(0),m._uU(1," You are now being redirected! "),m.BQk())}const w=function(){return["/sign-in"]},Z=[{path:"",component:(()=>{class t{constructor(t,n){this._authService=t,this._router=n,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new r.xQ}ngOnInit(){this._authService.signOut(),(0,c.H)(1e3,1e3).pipe((0,a.x)(()=>{this._router.navigate(["sign-in"])}),(0,d.o)(()=>this.countdown>0),(0,l.R)(this._unsubscribeAll),(0,g.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return t.\u0275fac=function(n){return new(n||t)(m.Y36(p.e),m.Y36(i.F0))},t.\u0275cmp=m.Xpm({type:t,selectors:[["auth-sign-out"]],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12","mx-auto"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(t,n){1&t&&(m.TgZ(0,"div",0),m.TgZ(1,"div",1),m.TgZ(2,"div",2),m.TgZ(3,"div",3),m._UZ(4,"img",4),m.qZA(),m.TgZ(5,"div",5),m._uU(6,"You have signed out!"),m.qZA(),m.TgZ(7,"div",6),m.YNc(8,x,3,4,"ng-container",7),m.YNc(9,h,2,0,"ng-container",7),m.qZA(),m.TgZ(10,"div",8),m.TgZ(11,"span"),m._uU(12,"Go to"),m.qZA(),m.TgZ(13,"a",9),m._uU(14,"sign in "),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&t&&(m.xp6(8),m.Q6J("ngIf",n.countdown>0),m.xp6(1),m.Q6J("ngIf",0===n.countdown),m.xp6(4),m.Q6J("routerLink",m.DdM(3,w)))},directives:[f.O5,i.yS],pipes:[f.Gx],encapsulation:2}),t})()}];let _=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[i.Bz.forChild(Z),o.ot,s.J,u.m]]}),t})()}}]);