import{a as De,b as ue}from"./chunk-Y32VCZHN.js";import{c as X,d as Z,e as ee,f as te,g as ie,h as ne,i as ae,j as oe,k as le,l as re,s as me,t as de}from"./chunk-OZGHU3U3.js";import{a as M}from"./chunk-CS5DIBGY.js";import{c as q}from"./chunk-VCN7NLWZ.js";import{D as G,E as K,F as W}from"./chunk-H3O7WNVK.js";import"./chunk-SVE2YL27.js";import"./chunk-ULLV7S74.js";import"./chunk-QUP7HUYX.js";import{_ as J,ca as Q}from"./chunk-IEBCTDCP.js";import"./chunk-Q2D5K3UP.js";import"./chunk-4JFQO7YW.js";import"./chunk-ENFDYGGX.js";import{C as P,D as V,f as z,m as Y,t as L}from"./chunk-B42JGF2N.js";import{Ac as B,Cc as N,Dc as A,Eb as d,Gb as r,K as E,Mc as O,Qb as t,Rb as i,Sb as u,Tb as f,Ub as v,cc as b,da as C,eb as y,f as xe,fa as k,fc as I,gb as w,ja as h,jb as o,kb as D,kc as T,lc as a,m as R,mc as x,n as j,nc as p,oa as _,sc as $,tc as H,ua as U}from"./chunk-4W73EOMH.js";var F=xe(De());var g=(()=>{let n=class n{constructor(m){this._httpClient=m,this._data=new j(null)}get data$(){return this._data.asObservable()}getData(){return this._httpClient.get("api/dashboards/project").pipe(k(m=>this._data.next(m)))}};n.\u0275fac=function(s){return new(s||n)(_(L))},n.\u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"});let e=n;return e})();var he=()=>["../family"];function _e(e,n){e&1&&(t(0,"th",51),a(1," Event"),i())}function be(e,n){if(e&1&&(t(0,"td",52),a(1),i()),e&2){let l=n.$implicit;o(),p(" ",l.title," ")}}function ge(e,n){e&1&&(t(0,"th",51),a(1," Date"),i())}function Se(e,n){if(e&1&&(t(0,"td",52),a(1),B(2,"date"),i()),e&2){let l=n.$implicit;o(),p(" ",N(2,1,l.start,"MMM d, y, h:mm a")," ")}}function Ee(e,n){e&1&&u(0,"tr",53)}function Ce(e,n){e&1&&u(0,"tr",54)}function ye(e,n){e&1&&(t(0,"th",51),a(1," No."),i())}function we(e,n){if(e&1&&(t(0,"td",52),a(1),i()),e&2){let l=n.$implicit;o(),p(" ",l.position," ")}}function Ie(e,n){e&1&&(t(0,"th",51),a(1," Name"),i())}function Te(e,n){if(e&1&&(t(0,"td",52),a(1),i()),e&2){let l=n.$implicit;o(),p(" ",l.name," ")}}function Ae(e,n){e&1&&(t(0,"th",51),a(1," Date"),i())}function Me(e,n){if(e&1&&(t(0,"td",52),a(1),i()),e&2){let l=n.$implicit;o(),p(" ",l.dob," ")}}function Fe(e,n){e&1&&u(0,"tr",53)}function Re(e,n){e&1&&u(0,"tr",54)}function je(e,n){e&1&&(t(0,"th",51),a(1," No."),i())}function ke(e,n){if(e&1&&(t(0,"td",52),a(1),i()),e&2){let l=n.$implicit;o(),p(" ",l.position," ")}}function Ue(e,n){e&1&&(t(0,"th",51),a(1," Name"),i())}function $e(e,n){if(e&1&&(t(0,"td",52),a(1),i()),e&2){let l=n.$implicit;o(),p(" ",l.name," ")}}function He(e,n){e&1&&(t(0,"th",51),a(1," Date"),i())}function Be(e,n){if(e&1&&(t(0,"td",52),a(1),i()),e&2){let l=n.$implicit;o(),p(" ",l.dob," ")}}function Ne(e,n){e&1&&u(0,"tr",53)}function Oe(e,n){e&1&&u(0,"tr",54)}function ze(e,n){if(e&1&&(t(0,"div",63)(1,"iframe",64),a(2),i()()),e&2){let l=b().post;o(2),p(" ",l.contentUrl," ")}}function Ye(e,n){if(e&1&&(t(0,"div",65)(1,"div",66),u(2,"img",67),t(3,"div",68)(4,"span",58),a(5),i()()()()),e&2){let l=b().post;o(2),r("src",l.contentUrl,y),o(3),x(l.title)}}function Le(e,n){if(e&1&&(t(0,"div",55),u(1,"img",56),t(2,"div",57)(3,"span",58),a(4),i(),t(5,"span",59),a(6),i()()(),d(7,ze,3,1,"div",60)(8,Ye,6,2,"div",61),t(9,"div",62),a(10),i()),e&2){let l=n.post;o(),I("alt",l.addedBy),I("src",l.addedByAvatar,y),o(3),p(" ",l.addedBy,""),o(2),x(l.addedOn),o(),r("ngIf",l.contentType=="youtube"&&l.contentUrl),o(),r("ngIf",l.contentType=="image"),o(2),x(l.description)}}function Pe(e,n){if(e&1&&(t(0,"div",76),u(1,"mat-icon",71),t(2,"div",77),a(3),i()()),e&2){let l=b().event;o(),r("svgIcon","heroicons_outline:menu-alt-2"),o(2),x(l.description)}}function Ve(e,n){if(e&1&&(t(0,"div",69)(1,"div",70),u(2,"mat-icon",71),t(3,"div",72)(4,"div")(5,"div",73),a(6),i(),t(7,"div",74),a(8),i()()()(),d(9,Pe,4,2,"div",75),i()),e&2){let l=n.event;o(2),r("svgIcon","heroicons_outline:calendar"),o(4),x(l.title||"(No title)"),o(2),x(l.start),o(),r("ngIf",l.description)}}var pe=(()=>{let n=class n{constructor(m,s,c,S){this._dashboardService=m,this._router=s,this._calendarService=c,this._changeDetectorRef=S,this.events=[],this.eventDisplayedColumns=["title","start"],this.displayedColumns=["position","name","date"],this.anniversaries=[],this._unsubscribeAll=new R}ngAfterViewInit(){this._dashboardService.getData(),this._calendarService.getEvents((0,F.default)(),(0,F.default)().add(1,"month"),!0).subscribe()}ngOnInit(){this._calendarService.events$.pipe(C(this._unsubscribeAll)&&E(M)).subscribe(m=>{this.events=q(m),this.event=this.events[0],this._changeDetectorRef.markForCheck()}),this._dashboardService.data$.pipe(C(this._unsubscribeAll)&&E(M)).subscribe(m=>{this.data=m})}ngOnDestroy(){}trackByFn(m,s){return s.id||m}};n.\u0275fac=function(s){return new(s||n)(D(g),D(P),D(ue),D(O))},n.\u0275cmp=U({type:n,selectors:[["app-dashboard"]],standalone:!0,features:[$],decls:152,vars:15,consts:[["overdueMenu","matMenu"],["issuesMenu","matMenu"],["postText",""],["postEvent",""],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex-auto","p-6","sm:p-10"],[1,"flex","flex-wrap","items-start","w-full","max-w-400","-m-4"],[1,"relative","flex","flex-col","w-full","p-4","filter-testimonial"],[1,"absolute","top-0","left-0","text-7xl","font-serif","text-primary","leading-none","ml-5"],[1,"text-md","italic","leading-relaxed","mt-2","ql-align-justify",2,"text-align","center"],[1,"text-md","font-medium","text-primary","mt-4"],[1,"flex-auto","mt-4","sm:mt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","gap-6","w-full","min-w-0"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden",3,"routerLink"],[1,"flex","items-start","justify-between"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"flex","flex-col","items-center","mt-2"],[1,"text-7xl","sm:text-8xl","font-bold","tracking-tight","leading-none","text-blue-500"],[1,"text-lg","font-medium","text-blue-600","dark:text-blue-500"],[1,"flex","items-center","justify-center","w-full","mt-5","text-secondary"],[1,"text-md","font-medium","truncate"],[1,"ml-1.5","text-lg","font-semibold"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"ml-2","-mt-2","-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],[1,"icon-size-5",3,"svgIcon"],["mat-menu-item",""],[1,"text-7xl","sm:text-8xl","font-bold","tracking-tight","leading-none","text-red-500"],[1,"text-lg","font-medium","text-red-600","dark:text-red-500"],[1,"text-7xl","sm:text-8xl","font-bold","tracking-tight","leading-none","text-amber-500"],[1,"text-lg","font-medium","text-amber-600","dark:text-amber-500"],[1,"flex-auto","p-6"],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-2","gap-6","w-full","min-w-0"],[1,"flex","flex-wrap","items-middle","object-center","w-full","max-w-400","video-container"],["allow","picture-in-picture","allowfullscreen","","frameborder","0","src",w`https://www.youtube.com/embed/8CxkzeeuoIA`,"title","YouTube video player",1,"video"],[1,"sm:col-span-2","md:col-span-2","lg:col-span-1","flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","flex-col","sm:flex-row","items-start","justify-between"],[1,"flex","flex-col","mt-2","divide-y"],["mat-table","",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","start"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"sm:col-span-2","md:col-span-4","lg:col-span-1","flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],["matColumnDef","position"],["matColumnDef","name"],["matColumnDef","date"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],[1,"flex","items-center","mx-6","sm:mx-8","mt-6","mb-2"],[1,"w-10","h-10","rounded-full","mr-4",3,"alt","src"],[1,"flex","flex-col"],[1,"font-medium","leading-none"],[1,"text-sm","text-secondary","leading-none","mt-1"],["class","flex flex-col mt-2 divide-y video-container ",4,"ngIf"],["class","flex flex-col mt-2  ",4,"ngIf"],[1,"mx-6","sm:mx-8","mt-2","mb-6"],[1,"flex","flex-col","mt-2","divide-y","video-container"],["src",w`https://www.youtube.com/embed/s53ko8P8gAQ`,"title","YouTube video player","frameborder","0","allow","  picture-in-picture","allowfullscreen",""],[1,"flex","flex-col","mt-2"],[1,"flex","items-center"],["alt","Card cover image",1,"w-full","h-full","object-cover",3,"src"],[1,"flex","flex-col","ml-3"],[1,"flex-auto","p-8"],[1,"flex"],[3,"svgIcon"],[1,"flex","flex-auto","justify-between","ml-6"],[1,"text-3xl","font-semibold","tracking-tight","leading-none"],[1,"mt-0.5","text-secondary"],["class","flex mt-6",4,"ngIf"],[1,"flex","mt-6"],[1,"flex-auto","ml-6"]],template:function(s,c){if(s&1&&(t(0,"div",4)(1,"div",5)(2,"div",6)(3,"div",7)(4,"span",8),a(5,"\u201C"),i(),t(6,"div",9),a(7," \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 \u0D06\u0D30\u0D41\u0D02 \u0D26\u0D48\u0D35\u0D24\u0D4D\u0D24\u0D46 \u0D15\u0D23\u0D4D\u0D1F\u0D3F\u0D1F\u0D4D\u0D1F\u0D3F\u0D32\u0D4D\u0D32; \u0D0E\u0D28\u0D4D\u0D28\u0D3E\u0D7D \u0D28\u0D3E\u0D02 \u0D2A\u0D30\u0D38\u0D4D\u0D2A\u0D30\u0D02 \u0D38\u0D4D\u0D28\u0D47\u0D39\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D41\u0D35\u0D46\u0D19\u0D4D\u0D15\u0D3F\u0D7D, \u0D26\u0D48\u0D35\u0D02 \u0D28\u0D2E\u0D4D\u0D2E\u0D3F\u0D7D \u0D35\u0D38\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D41, \u0D05\u0D35\u0D28\u0D4D\u0D31\u0D46 \u0D38\u0D4D\u0D28\u0D47\u0D39\u0D02 \u0D28\u0D2E\u0D4D\u0D2E\u0D3F\u0D7D \u0D2A\u0D30\u0D3F\u0D2A\u0D42\u0D7C\u0D23\u0D4D\u0D23\u0D2E\u0D3E\u0D23\u0D4D. "),i(),t(8,"div",10),a(9," \xA0\xA0 \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 \u2014 1 John 4:12 "),i()()()(),t(10,"div",11)(11,"div",12)(12,"div",13)(13,"div",14)(14,"div",15)(15,"div",16)(16,"div",17),a(17,"Families"),i()(),t(18,"div",18)(19,"div",19),a(20,"21 "),i(),t(21,"div",20),a(22,"Active"),i(),t(23,"div",21)(24,"div",22),a(25,"Total:"),i(),t(26,"div",23),a(27,"66"),i()()()(),t(28,"div",24)(29,"div",16)(30,"div",17),a(31,"Members"),i()(),t(32,"div",18)(33,"div",19),a(34,"121 "),i(),t(35,"div",20),a(36,"Active"),i(),t(37,"div",21)(38,"div",22),a(39,"Total:"),i(),t(40,"div",23),a(41,"160"),i()()()(),t(42,"div",24)(43,"div",16)(44,"div",17),a(45,"App Installs"),i(),t(46,"div",25)(47,"button",26),u(48,"mat-icon",27),i(),t(49,"mat-menu",null,0)(51,"button",28),a(52,"Yesterday"),i(),t(53,"button",28),a(54,"2 days ago"),i(),t(55,"button",28),a(56,"3 days ago"),i()()()(),t(57,"div",18)(58,"div",29),a(59,"17 "),i(),t(60,"div",30),a(61,"Active"),i(),t(62,"div",21)(63,"div",22),a(64,"Total:"),i(),t(65,"div",23),a(66,"100"),i()()()(),t(67,"div",24)(68,"div",16)(69,"div",17),a(70,"Issues"),i(),t(71,"div",25)(72,"button",26),u(73,"mat-icon",27),i(),t(74,"mat-menu",null,1)(76,"button",28),a(77,"Yesterday"),i(),t(78,"button",28),a(79,"2 days ago"),i(),t(80,"button",28),a(81,"3 days ago"),i()()()(),t(82,"div",18)(83,"div",31),a(84,"24 "),i(),t(85,"div",32),a(86,"Open"),i(),t(87,"div",21)(88,"div",22),a(89,"Closed today:"),i(),t(90,"div",23),a(91,"19"),i()()()()()()()(),t(92,"div",33)(93,"div",34)(94,"div",35),u(95,"iframe",36),i()()(),t(96,"div",11)(97,"div",12)(98,"div",13)(99,"div",34)(100,"div",37)(101,"div",38)(102,"div",17),a(103,"Upcoming Events"),i()(),t(104,"div",39)(105,"table",40),f(106,41),d(107,_e,2,0,"th",42)(108,be,2,1,"td",43),v(),f(109,44),d(110,ge,2,0,"th",42)(111,Se,3,4,"td",43),v(),d(112,Ee,1,0,"tr",45)(113,Ce,1,0,"tr",46),i()()(),t(114,"div",47)(115,"div",38)(116,"div",17),a(117,"Upcoming Birthdays"),i()(),t(118,"div",39)(119,"table",40),f(120,48),d(121,ye,2,0,"th",42)(122,we,2,1,"td",43),v(),f(123,49),d(124,Ie,2,0,"th",42)(125,Te,2,1,"td",43),v(),f(126,50),d(127,Ae,2,0,"th",42)(128,Me,2,1,"td",43),v(),d(129,Fe,1,0,"tr",45)(130,Re,1,0,"tr",46),i()()(),t(131,"div",47)(132,"div",38)(133,"div",17),a(134,"Upcoming Anniversary "),i()(),t(135,"div",39)(136,"table",40),f(137,48),d(138,je,2,0,"th",42)(139,ke,2,1,"td",43),v(),f(140,49),d(141,Ue,2,0,"th",42)(142,$e,2,1,"td",43),v(),f(143,50),d(144,He,2,0,"th",42)(145,Be,2,1,"td",43),v(),d(146,Ne,1,0,"tr",45)(147,Oe,1,0,"tr",46),i()()()()()()(),d(148,Le,11,7,"ng-template",null,2,A)(150,Ve,10,4,"ng-template",null,3,A),i()),s&2){let S=T(50),ve=T(75);o(14),r("routerLink",H(14,he)),o(33),r("matMenuTriggerFor",S),o(),r("svgIcon","heroicons_solid:dots-vertical"),o(24),r("matMenuTriggerFor",ve),o(),r("svgIcon","heroicons_solid:dots-vertical"),o(32),r("dataSource",c.events),o(7),r("matHeaderRowDef",c.eventDisplayedColumns),o(),r("matRowDefColumns",c.eventDisplayedColumns),o(6),r("dataSource",c.data.birthdays),o(10),r("matHeaderRowDef",c.displayedColumns),o(),r("matRowDefColumns",c.displayedColumns),o(6),r("dataSource",c.data.anniversaries),o(10),r("matHeaderRowDef",c.displayedColumns),o(),r("matRowDefColumns",c.displayedColumns)}},dependencies:[de,V,z,Y,me,J,Q,K,G,W,X,ee,ae,te,Z,oe,ie,ne,le,re],styles:[`.video-container{position:relative;width:100%;padding-bottom:56.25%}.video{position:absolute;top:0;left:0;width:100%;height:100%;border:0}.video-container{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden}.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}
`],encapsulation:2,changeDetection:0});let e=n;return e})();var fe=(()=>{let n=class n{constructor(m){this._dashboardService=m}resolve(m,s){return this._dashboardService.getData()}};n.\u0275fac=function(s){return new(s||n)(_(g))},n.\u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"});let e=n;return e})();var ct=[{path:"",component:pe,resolve:{dashboard:fe}}];export{ct as default};
