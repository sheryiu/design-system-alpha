import{a as A}from"./chunk-FVNZKQTF.js";import{a as B}from"./chunk-EYQKS35T.js";import"./chunk-42ZTV3V5.js";import{Aa as l,Ad as Ee,B as R,Ba as s,Bc as _e,Bd as He,Cc as Se,Cd as Me,D as C,Dc as V,Dd as Le,Ea as F,Ed as Ne,Fa as x,Fc as ve,Ga as d,Gd as Oe,Ha as Q,Hc as he,Hd as Ie,Ia as W,Id as Re,Ja as z,Jb as te,Jd as je,Ka as q,Kb as ie,Kd as Pe,L as m,La as f,Lb as T,Ld as Qe,Mb as re,Md as We,N as _,Nb as oe,Oa as G,Ob as ne,Pa as g,Qa as E,Qb as H,Ra as w,S,T as v,Ta as J,Tb as ae,Tc as ye,Ua as Y,Ub as le,Uc as Fe,W as h,Wb as pe,Xb as ce,Yb as me,Zb as ue,Zc as xe,_b as se,ab as K,bc as de,ca as c,d as M,db as U,eb as X,fc as D,hc as fe,i as L,kc as k,la as y,na as u,nd as ge,od as we,p as N,pd as Te,qa as a,qc as be,qd as De,r as O,rc as Ce,rd as ke,sa as j,sd as Ve,td as $e,ua as P,ud as Be,v as I,vd as $,xb as Z,za as n,zb as ee,zd as Ae}from"./chunk-PX5QVNHM.js";import"./chunk-6RDLFHTQ.js";import"./chunk-CWTPBX7D.js";var Ye=e=>({"!text-primary-950 dark:!text-primary-50":e});function Ke(e,t){if(e&1){let i=F();n(0,"form",4),x("ngSubmit",function(){S(i);let o=d();return v(o.onSubmit())}),n(1,"pui-fieldset",5),s(2,"pui-field-def",6)(3,"pui-field-def",7),l(),n(4,"button",8),f(5,"Add"),l()()}if(e&2){let i=d();c(),a("formControl",i.formControl)}}var ze=(()=>{let t=class t extends D{constructor(){super(...arguments),this.service=m(A),this.builder=m(de),this.formControl=this.builder.control(null),this.onSubmit=this.createEffectFn(r=>r.pipe(N(()=>this.formControl.value!=null),I(()=>this.service.create(this.formControl.value).pipe(O(()=>M))),C(()=>this.formControl.reset())))}};t.\u0275fac=(()=>{let r;return function(p){return(r||(r=h(t)))(p||t)}})(),t.\u0275cmp=_({type:t,selectors:[["mhw-drawer-create"]],standalone:!0,features:[y,g],decls:8,vars:6,consts:[["trigger","accordionTrigger"],["puiSidebarDrawerSection",""],["puiSidebarDrawerSectionHeader","","puiHoverable","","role","button","type","button","puiAccordionTrigger","","opened","",3,"ngClass"],["puiSidebarDrawerSectionContent",""],["puiSidebarDrawerSectionContent","",3,"ngSubmit"],[3,"formControl"],["key","name>en","label","English Name","fieldType","string"],["key","name>jp","label","Japanese Name","fieldType","string"],["puiHoverable","","role","button","type","submit",1,"rounded-1","mx-1","py-2","text-sm","text-primary-700","dark:text-primary-500"]],template:function(o,p){if(o&1&&(n(0,"div",1)(1,"button",2,0)(3,"i"),f(4,"add"),l(),n(5,"p"),f(6,"Insert New"),l()(),u(7,Ke,6,1,"form",3),l()),o&2){let b=q(2);j("bg-drawer-content",b.isOpened$$()),c(),a("ngClass",w(4,Ye,!b.isOpened$$())),c(6),P(7,b.isOpened$$()?7:-1)}},dependencies:[B,U,k,Fe,ye,he,ue,pe,ce,me,se,V,_e,$,De,ke,Ve]});let e=t;return e})();var Ue=()=>["name"],Xe=()=>["1fr"],Ze=e=>[e];function et(e,t){if(e&1){let i=F();n(0,"div",12)(1,"pui-input-field")(2,"input",13),x("input",function(o){S(i);let p=d(3);return v(p.onChangeFilter({name:o.currentTarget.value}))}),l()()()}if(e&2){let i,r=d(3);a("cdkTrapFocusAutoCapture",!0),c(2),a("value",(i=r.filterByName$$())!==null&&i!==void 0?i:"")}}function tt(e,t){if(e&1&&(n(0,"pui-table-header-cell",10),f(1," Name "),u(2,et,3,2,"div",11),l()),e&2){let i=d(2);a("filtered",i.filterByName$$()!=null)}}function it(e,t){if(e&1&&(n(0,"pui-table-cell"),f(1),l()),e&2){let i=t.$implicit;c(),G(" ",i.name==null?null:i.name.jp," / ",i.name==null?null:i.name.en," ")}}function rt(e,t){if(e&1&&s(0,"pui-table-row",14),e&2){let i=t.$implicit;a("route",w(2,Ze,i.id))("item",i)}}function ot(e,t){if(e&1&&(n(0,"pui-table",4),u(1,tt,3,1,"pui-table-header-cell",5)(2,it,2,2,"pui-table-cell",6),n(3,"cdk-virtual-scroll-viewport",7)(4,"pui-table-body"),s(5,"pui-table-header-row"),u(6,rt,1,4,"pui-table-row",8),J(7,"async"),n(8,"pui-table-footer-row",9),s(9,"pui-table-simple-footer"),l()()()()),e&2){let i=d();a("columns",E(9,Ue))("columnWidths",E(10,Xe)),c(),a("puiTableHeaderCellDef","name"),c(),a("puiTableCellDef","name"),c(),a("extraHeight",48*2),c(3),a("cdkVirtualForOf",Y(7,7,i.data$))("cdkVirtualForTrackBy",i.trackingFn)}}function nt(e,t){e&1&&s(0,"mhw-drawer-create")}var Bt=(()=>{let t=class t extends D{constructor(){super(...arguments),this.service=m(A),this.overlay=m(fe),this.router=m(ee),this.route=m(Z),this.data$=L({filter:H(this.service.mainListFilter$$),sort:H(this.service.mainListSort$$)}).pipe(R(({filter:r,sort:o})=>this.service.list(r,o))),this.filterByName$$=K(()=>this.service.mainListFilter$$().name),this.onChangeSort=this.createEffectFn(r=>r.pipe(C(([o,p])=>{this.service.mainListSort$$.set({[o]:p})}))),this.onChangeFilter=this.createEffectFn(r=>r.pipe(C(o=>{this.service.mainListFilter$$.set(o)}),C()))}onHeaderClick(){this.router.navigate(["./"],{relativeTo:this.route}),this.scrollViewport?.scrollToOffset(0,"smooth")}trackingFn(r,o){return o.id}};t.\u0275fac=(()=>{let r;return function(p){return(r||(r=h(t)))(p||t)}})(),t.\u0275cmp=_({type:t,selectors:[["app-armor-set-bonus-list"]],viewQuery:function(o,p){if(o&1&&Q(T,5),o&2){let b;W(b=z())&&(p.scrollViewport=b.first)}},standalone:!0,features:[y,g],decls:8,vars:0,consts:[["puiSidebarContainer","","cdkVirtualScrollingElement","","cdkScrollable",""],["puiSidebarBreadcrumbs",""],["itemHeight","48",3,"columns","columnWidths",4,"puiSidebarMain"],[4,"puiSidebarDrawer"],["itemHeight","48",3,"columns","columnWidths"],[3,"filtered",4,"puiTableHeaderCellDef"],[4,"puiTableCellDef"],["itemSize","",3,"extraHeight"],["puiHoverable","",3,"route","item",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],[1,"px-4","py-1"],[3,"filtered"],["cdkTrapFocus","",3,"cdkTrapFocusAutoCapture",4,"puiTableHeaderCellFilter"],["cdkTrapFocus","",3,"cdkTrapFocusAutoCapture"],["type","search","placeholder","Type to search",3,"input","value"],["puiHoverable","",3,"route","item"]],template:function(o,p){o&1&&(n(0,"pui-layered-container")(1,"div",0)(2,"div",1),s(3,"pui-breadcrumbs"),l(),n(4,"pui-sidebar-content"),u(5,ot,10,11,"pui-table",2),n(6,"pui-accordion"),u(7,nt,1,0,"mhw-drawer-create",3),l()()()())},dependencies:[B,k,Ce,be,ve,X,ze,xe,We,He,Qe,Me,je,Re,Le,Ae,Ie,Ee,Oe,Ne,Pe,$,we,ge,Be,$e,Te,ne,ie,te,re,T,oe,V,Se,le,ae],encapsulation:2});let e=t;return e})();export{Bt as ArmorSetBonusListComponent};
