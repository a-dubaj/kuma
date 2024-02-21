import{d as C,a as o,o as r,b as i,w as t,e as l,m as V,f as n,E as z,t as S,D as x,p as y,_ as k}from"./index-KQusT94Q.js";import{D as P,F as q}from"./FilterBar-KvGUvCjN.js";import{S as T}from"./SummaryView-z1bNhMKA.js";import"./AppCollection-WlSbbR7B.js";import"./StatusBadge-e0YwD099.js";const R=C({__name:"DelegatedGatewayDataPlaneProxiesView",setup($){return(B,N)=>{const _=o("RouteTitle"),u=o("KSelect"),f=o("KCard"),w=o("RouterView"),m=o("DataSource"),h=o("AppView"),v=o("RouteView");return r(),i(m,{src:"/me"},{default:t(({data:d})=>[d?(r(),i(v,{key:0,name:"delegated-gateway-data-plane-proxies-view",params:{page:1,size:d.pageSize,query:"",dataplaneType:"all",s:"",mesh:"",service:"",dataPlane:""}},{default:t(({can:b,route:e,t:c})=>[l(h,null,{title:t(()=>[V("h2",null,[l(_,{title:c("delegated-gateways.routes.item.navigation.delegated-gateway-data-plane-proxies-view")},null,8,["title"])])]),default:t(()=>[n(),l(m,{src:`/meshes/${e.params.mesh}/dataplanes/for/${e.params.service}/of/${e.params.dataplaneType}?page=${e.params.page}&size=${e.params.size}&search=${e.params.s}`},{default:t(({data:s,error:p})=>[l(f,null,{default:t(()=>[p!==void 0?(r(),i(z,{key:0,error:p},null,8,["error"])):(r(),i(P,{key:1,"data-testid":"data-plane-collection","page-number":e.params.page,"page-size":e.params.size,total:s==null?void 0:s.total,items:s==null?void 0:s.items,error:p,"is-selected-row":a=>a.name===e.params.dataPlane,"summary-route-name":"delegated-gateway-data-plane-summary-view","is-global-mode":b("use zones"),onChange:e.update},{toolbar:t(()=>[l(q,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:e.params.query,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},onFieldsChange:a=>e.update({query:a.query,s:a.query.length>0?JSON.stringify(a.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"]),n(),l(u,{class:"filter-select",label:"Type",items:["all","standard","builtin","delegated"].map(a=>({value:a,label:c(`data-planes.type.${a}`),selected:a===e.params.dataplaneType})),onSelected:a=>e.update({dataplaneType:String(a.value)})},{"item-template":t(({item:a})=>[n(S(a.label),1)]),_:2},1032,["items","onSelected"])]),_:2},1032,["page-number","page-size","total","items","error","is-selected-row","is-global-mode","onChange"]))]),_:2},1024),n(),e.params.dataPlane?(r(),i(w,{key:0},{default:t(a=>[l(T,{onClose:g=>e.replace({name:"delegated-gateway-data-plane-proxies-view",params:{mesh:e.params.mesh},query:{page:e.params.page,size:e.params.size}})},{default:t(()=>[(r(),i(x(a.Component),{name:e.params.dataPlane,"dataplane-overview":s==null?void 0:s.items.find(g=>g.name===e.params.dataPlane)},null,8,["name","dataplane-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):y("",!0)]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["params"])):y("",!0)]),_:1})}}}),J=k(R,[["__scopeId","data-v-d85685c9"]]);export{J as default};
