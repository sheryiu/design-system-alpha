import{a as H}from"./chunk-KHFG7HDT.js";import{a as V}from"./chunk-AI3TQUT4.js";import"./chunk-7YPE7GPU.js";import{$c as Fe,Aa as l,B as j,Ba as d,Bc as Ce,Bd as Me,Cc as Se,Cd as Be,D as b,Dc as A,Dd as Oe,Ea as v,Ed as Ne,Fa as y,Fc as ve,Fd as Re,Ga as s,Gd as Ie,Ha as z,Hc as ye,Hd as je,Ia as q,Id as Qe,Ja as G,Jb as ie,Jd as Pe,Ka as J,Kb as re,Kd as ze,L as _,La as m,Lb as w,Ld as qe,Mb as ne,Md as Ge,N as g,Na as Y,Nb as oe,Nd as Je,Oa as K,Ob as ae,Oc as he,Od as Ye,Pa as F,Pc as xe,Qa as h,Qb as M,Qc as ge,Ra as x,S as C,T as S,Ta as U,Tb as le,Tc as Te,Ua as W,Ub as pe,Uc as De,W as T,Wb as ce,Xb as me,Yb as se,Zb as ue,_b as de,ab as L,bc as _e,ca as p,d as B,db as X,eb as Z,fc as $,i as O,kc as k,la as D,na as u,p as N,pd as we,qa as a,qc as fe,qd as $e,r as R,rc as be,rd as ke,sa as Q,sd as Ae,td as Ee,ua as P,ud as Ve,v as I,vd as He,wd as Le,xb as ee,xd as E,za as n,zb as te}from"./chunk-IE6HEDN2.js";import"./chunk-6RDLFHTQ.js";import"./chunk-CWTPBX7D.js";var Ze=e=>({"!text-primary-950 dark:!text-primary-50":e}),et=()=>({}),tt=()=>["base","iceborne"],it=e=>({enum:e});function rt(e,i){if(e&1){let t=v();n(0,"form",4),y("ngSubmit",function(){C(t);let r=s();return S(r.onSubmit())}),n(1,"pui-fieldset",5),d(2,"pui-field-def",6)(3,"pui-field-def",7)(4,"pui-field-def",8)(5,"pui-field-def",9),l(),n(6,"button",10),m(7,"Add"),l()()}if(e&2){let t=s();p(),a("formControl",t.formControl),p(3),a("fieldConfig",h(3,et)),p(),a("fieldConfig",x(5,it,h(4,tt)))}}var Ke=(()=>{let i=class i extends ${constructor(){super(...arguments),this.service=_(H),this.builder=_(_e),this.formControl=this.builder.control(null),this.onSubmit=this.createEffectFn(o=>o.pipe(N(()=>this.formControl.value!=null),I(()=>this.service.create(this.formControl.value).pipe(R(()=>B))),b(()=>this.formControl.reset())))}};i.\u0275fac=(()=>{let o;return function(c){return(o||(o=T(i)))(c||i)}})(),i.\u0275cmp=g({type:i,selectors:[["mhw-drawer-create"]],standalone:!0,features:[D,F],decls:8,vars:6,consts:[["trigger","accordionTrigger"],["puiSidebarDrawerSection",""],["puiSidebarDrawerSectionHeader","","puiHoverable","","role","button","type","button","puiAccordionTrigger","","opened","",3,"ngClass"],["puiSidebarDrawerSectionContent",""],["puiSidebarDrawerSectionContent","",3,"ngSubmit"],[3,"formControl"],["key","name>en","label","English Name","fieldType","string"],["key","name>jp","label","Japanese Name","fieldType","string"],["key","rarity","label","Rarity","fieldType","number",3,"fieldConfig"],["key","rank","label","Rank","fieldType","string",3,"fieldConfig"],["puiHoverable","","role","button","type","submit",1,"rounded-1","mx-1","py-2","text-sm","text-primary-700","dark:text-primary-500"]],template:function(r,c){if(r&1&&(n(0,"div",1)(1,"button",2,0)(3,"i"),m(4,"add"),l(),n(5,"p"),m(6,"Insert New"),l()(),u(7,rt,8,7,"form",3),l()),r&2){let f=J(2);Q("bg-drawer-content",f.isOpened$$()),p(),a("ngClass",x(4,Ze,!f.isOpened$$())),p(6),P(7,f.isOpened$$()?7:-1)}},dependencies:[V,X,k,De,Te,ye,ue,ce,me,se,de,A,Ce,E,Ae,Ee,Ve]});let e=i;return e})();var nt=()=>["name","rarity"],ot=e=>[e];function at(e,i){if(e&1){let t=v();n(0,"div",13)(1,"pui-input-field")(2,"input",14),y("input",function(r){C(t);let c=s(3);return S(c.onChangeFilter({name:r.currentTarget.value}))}),l()()()}if(e&2){let t,o=s(3);a("cdkTrapFocusAutoCapture",!0),p(2),a("value",(t=o.filterByName$$())!==null&&t!==void 0?t:"")}}function lt(e,i){if(e&1&&(n(0,"pui-table-header-cell",11),m(1," Name "),u(2,at,3,2,"div",12),l()),e&2){let t=s(2);a("filtered",t.filterByName$$()!=null)}}function pt(e,i){e&1&&(n(0,"div",19)(1,"i",20),m(2,"sort"),l(),n(3,"span",21),m(4,"1 to 9"),l()())}function ct(e,i){e&1&&(n(0,"div",19)(1,"i",22),m(2,"sort"),l(),n(3,"span",21),m(4,"9 to 1"),l()())}function mt(e,i){if(e&1){let t=v();n(0,"pui-segmented-options",17),y("valueChange",function(r){C(t);let c=s(3);return S(c.onChangeSort(["rarity",r]))}),u(1,pt,5,0,"div",18)(2,ct,5,0,"div",18),l()}if(e&2){let t=s(3);a("value",t.sortByRarity$$()),p(),a("puiOption","asc"),p(),a("puiOption","desc")}}function st(e,i){if(e&1&&(n(0,"pui-table-header-cell",15),m(1," Rarity "),u(2,mt,3,3,"pui-segmented-options",16),l()),e&2){let t=s(2);a("sortedAsc",t.sortByRarity$$()==="asc")("sortedDesc",t.sortByRarity$$()==="desc")}}function ut(e,i){if(e&1&&(n(0,"pui-table-cell"),m(1),l()),e&2){let t=i.$implicit;p(),K(" ",t.name==null?null:t.name.jp," / ",t.name==null?null:t.name.en," ")}}function dt(e,i){if(e&1&&(n(0,"pui-table-cell"),m(1),l()),e&2){let t=i.$implicit;p(),Y(" ",t.rarity," ")}}function _t(e,i){if(e&1&&d(0,"pui-table-row",23),e&2){let t=i.$implicit;a("route",x(2,ot,t.id))("item",t)}}function ft(e,i){if(e&1&&(n(0,"pui-table",4),u(1,lt,3,1,"pui-table-header-cell",5)(2,st,3,2,"pui-table-header-cell",6)(3,ut,2,2,"pui-table-cell",7)(4,dt,2,1,"pui-table-cell",7),n(5,"cdk-virtual-scroll-viewport",8)(6,"pui-table-body"),d(7,"pui-table-header-row"),u(8,_t,1,4,"pui-table-row",9),U(9,"async"),n(10,"pui-table-footer-row",10),d(11,"pui-table-simple-footer"),l()()()()),e&2){let t=s();a("columns",h(10,nt)),p(),a("puiTableHeaderCellDef","name"),p(),a("puiTableHeaderCellDef","rarity"),p(),a("puiTableCellDef","name"),p(),a("puiTableCellDef","rarity"),p(),a("extraHeight",48*2),p(3),a("cdkVirtualForOf",W(9,8,t.data$))("cdkVirtualForTrackBy",t.trackingFn)}}function bt(e,i){e&1&&d(0,"mhw-drawer-create")}var Qt=(()=>{let i=class i extends ${constructor(){super(...arguments),this.service=_(H),this.router=_(te),this.route=_(ee),this.data$=O({filter:M(this.service.mainListFilter$$),sort:M(this.service.mainListSort$$)}).pipe(j(({filter:o,sort:r})=>this.service.list(o,r))),this.filterByName$$=L(()=>this.service.mainListFilter$$().name),this.sortByRarity$$=L(()=>this.service.mainListSort$$().rarity),this.onChangeSort=this.createEffectFn(o=>o.pipe(b(([r,c])=>{this.service.mainListSort$$.set({[r]:c})}))),this.onChangeFilter=this.createEffectFn(o=>o.pipe(b(r=>{this.service.mainListFilter$$.set(r)}),b()))}onHeaderClick(){this.router.navigate(["./"],{relativeTo:this.route}),this.scrollViewport?.scrollToOffset(0,"smooth")}trackingFn(o,r){return r.id}};i.\u0275fac=(()=>{let o;return function(c){return(o||(o=T(i)))(c||i)}})(),i.\u0275cmp=g({type:i,selectors:[["app-armor-set-list"]],viewQuery:function(r,c){if(r&1&&z(w,5),r&2){let f;q(f=G())&&(c.scrollViewport=f.first)}},standalone:!0,features:[D,F],decls:8,vars:0,consts:[["puiSidebarContainer","","cdkVirtualScrollingElement","","cdkScrollable",""],["puiSidebarBreadcrumbs",""],["itemHeight","48",3,"columns",4,"puiSidebarMain"],[4,"puiSidebarDrawer"],["itemHeight","48",3,"columns"],[3,"filtered",4,"puiTableHeaderCellDef"],[3,"sortedAsc","sortedDesc",4,"puiTableHeaderCellDef"],[4,"puiTableCellDef"],["itemSize","",3,"extraHeight"],["puiHoverable","",3,"route","item",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],[1,"px-4","py-1"],[3,"filtered"],["cdkTrapFocus","",3,"cdkTrapFocusAutoCapture",4,"puiTableHeaderCellFilter"],["cdkTrapFocus","",3,"cdkTrapFocusAutoCapture"],["type","search","placeholder","Type to search",3,"input","value"],[3,"sortedAsc","sortedDesc"],["color","accent",3,"value","valueChange",4,"puiTableHeaderCellSort"],["color","accent",3,"valueChange","value"],["class","flex items-center gap-1",4,"puiOption"],[1,"flex","items-center","gap-1"],[1,"icon-4","rotate-180","-scale-x-100"],[1,"text-sm/[0]","font-bold"],[1,"icon-4"],["puiHoverable","",3,"route","item"]],template:function(r,c){r&1&&(n(0,"pui-layered-container")(1,"div",0)(2,"div",1),d(3,"pui-breadcrumbs"),l(),n(4,"pui-sidebar-content"),u(5,ft,12,11,"pui-table",2),n(6,"pui-accordion"),u(7,bt,1,0,"mhw-drawer-create",3),l()()()())},dependencies:[V,k,be,fe,ve,Z,Ke,Fe,Ye,Oe,Je,Ne,qe,ze,Re,Me,Pe,Be,je,Qe,Ie,Ge,E,$e,we,Le,He,ke,ge,xe,he,A,Se,ae,re,ie,ne,w,oe,pe,le],encapsulation:2});let e=i;return e})();export{Qt as ArmorSetListComponent};