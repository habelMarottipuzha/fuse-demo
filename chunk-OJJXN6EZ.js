import{k as f}from"./chunk-L5UTKO6L.js";import{a as v}from"./chunk-BWPKGL5O.js";import{Da as u,Eb as c,Gb as b,Kb as m,Nb as o,Qb as n,Rb as d,cc as x,dc as w,ec as r,jb as p,sc as h,ua as l}from"./chunk-RZ6U6XFQ.js";var y=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],_=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];function k(a,e){a&1&&(n(0,"div",0),r(1),d(),n(2,"div",1),r(3,1),d())}function F(a,e){a&1&&(n(0,"div",2),r(1,3),d()),a&2&&b("@expandCollapse",void 0)}function $(a,e){if(a&1&&(r(0,2),c(1,F,2,1,"div",2)),a&2){let C=x();p(),o(C.expanded?1:-1)}}var M=(()=>{let e=class e{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&this.face==="back","fuse-card-face-front":this.flippable&&this.face==="front","fuse-card-flippable":this.flippable}}ngOnChanges(t){"expanded"in t&&(this.expanded=f(t.expanded.currentValue)),"flippable"in t&&(this.flippable=f(t.flippable.currentValue))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(i,s){i&2&&m(s.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],standalone:!0,features:[u,h],ngContentSelectors:_,decls:2,vars:2,consts:[[1,"fuse-card-front"],[1,"fuse-card-back"],[1,"fuse-card-expansion"]],template:function(i,s){i&1&&(w(y),c(0,k,4,0)(1,$,2,1)),i&2&&(o(s.flippable?0:-1),p(),o(s.flippable?-1:1))},styles:[`fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}
`],encapsulation:2,data:{animation:v}});let a=e;return a})();var g=class{static fileUpload(){return`${this._baseUrl()}/v1/files/upload`}static getMembers(){return`${this._baseUrl()}/v1/members`}static createMember(){return`${this._baseUrl()}/v1/members`}static getMemberById(e){return`${this._baseUrl()}/v1/members/${e}`}static getPost(e){return`${this._baseUrl()}/v1/posts?orgId=${e}`}static createPost(){return`${this._baseUrl()}/v1/posts`}static _baseUrl(){return"https://socio01.line.pm/api"}};export{M as a,g as b};