import{d as V,a as d,o as e,b as l,w as t,E as C,A as B,a3 as b,t as n,m as D,Y as p,f as s,W as h,e as a,p as T,c,F as N,aw as P}from"./index-KQusT94Q.js";import{S as $}from"./StatusBadge-e0YwD099.js";import{T as A}from"./TagList-NoctLv71.js";const R={key:0},E={key:3,class:"columns"},F={key:1,class:"columns"},j=V({__name:"ServiceDetailView",props:{data:{}},setup(f){const r=f;return(K,S)=>{const k=d("DataSource"),g=d("KCard"),v=d("AppView"),w=d("RouteView");return e(),l(w,{name:"service-detail-view",params:{mesh:"",service:""}},{default:t(({can:x,route:_,t:o})=>[a(v,null,{default:t(()=>[a(g,null,{default:t(()=>{var m,u;return[!x("use gateways ui")&&r.data.serviceType==="external"?(e(),c("div",R,[a(k,{src:`/meshes/${_.params.mesh}/external-services/for/${_.params.service}`},{default:t(({data:i,error:y})=>[y?(e(),l(C,{key:0,error:y},null,8,["error"])):i===void 0?(e(),l(B,{key:1})):i===null?(e(),l(b,{key:2,"data-testid":"no-matching-external-service"},{title:t(()=>[D("p",null,n(o("services.detail.no_matching_external_service",{name:_.params.service})),1)]),_:2},1024)):(e(),c("div",E,[a(p,null,{title:t(()=>[s(n(o("http.api.property.address")),1)]),body:t(()=>[a(h,{text:i.networking.address},null,8,["text"])]),_:2},1024),s(),i.tags!==null?(e(),l(p,{key:0},{title:t(()=>[s(n(o("http.api.property.tags")),1)]),body:t(()=>[a(A,{tags:i.tags},null,8,["tags"])]),_:2},1024)):T("",!0)]))]),_:2},1032,["src"])])):(e(),c("div",F,[a(p,null,{title:t(()=>[s(n(o("http.api.property.status")),1)]),body:t(()=>[a($,{status:r.data.status},null,8,["status"])]),_:2},1024),s(),a(p,null,{title:t(()=>[s(n(o("http.api.property.address")),1)]),body:t(()=>[r.data.addressPort?(e(),l(h,{key:0,text:r.data.addressPort},null,8,["text"])):(e(),c(N,{key:1},[s(n(o("common.detail.none")),1)],64))]),_:2},1024),s(),a(P,{online:((m=r.data.dataplanes)==null?void 0:m.online)??0,total:((u=r.data.dataplanes)==null?void 0:u.total)??0},{title:t(()=>[s(n(o("http.api.property.dataPlaneProxies")),1)]),_:2},1032,["online","total"])]))]}),_:2},1024)]),_:2},1024)]),_:1})}}});export{j as default};
