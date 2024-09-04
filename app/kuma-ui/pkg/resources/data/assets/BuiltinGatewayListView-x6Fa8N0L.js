import{d as f,r as n,o as r,m as _,w as a,b as t,l as k,aw as C,A,a2 as v,e as l,t as c,c as V,L as x}from"./index-of_8QwXw.js";const X=f({__name:"BuiltinGatewayListView",setup(D){return(L,B)=>{const m=n("XAction"),u=n("XActionGroup"),g=n("DataCollection"),d=n("DataLoader"),w=n("KCard"),h=n("AppView"),b=n("RouteView");return r(),_(b,{name:"builtin-gateway-list-view",params:{page:1,size:50,mesh:"",gateway:""}},{default:a(({route:s,t:p,can:y,me:i,uri:z})=>[t(h,{docs:p("builtin-gateways.href.docs")},{default:a(()=>[t(w,null,{default:a(()=>[t(d,{src:z(k(C),"/meshes/:mesh/mesh-gateways",{mesh:s.params.mesh},{page:s.params.page,size:s.params.size})},{loadable:a(({data:o})=>[t(g,{type:"gateways",items:(o==null?void 0:o.items)??[void 0]},{default:a(()=>[t(A,{class:"builtin-gateway-collection","data-testid":"builtin-gateway-collection",headers:[{...i.get("headers.name"),label:"Name",key:"name"},...y("use zones")?[{...i.get("headers.zone"),label:"Zone",key:"zone"}]:[],{...i.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],"page-number":s.params.page,"page-size":s.params.size,total:o==null?void 0:o.total,items:o==null?void 0:o.items,onChange:s.update,onResize:i.set},{name:a(({row:e})=>[t(v,{text:e.name},{default:a(()=>[t(m,{"data-action":"",to:{name:"builtin-gateway-detail-view",params:{mesh:e.mesh,gateway:e.name}}},{default:a(()=>[l(c(e.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),zone:a(({row:e})=>[e.labels&&e.labels["kuma.io/origin"]==="zone"&&e.labels["kuma.io/zone"]?(r(),_(m,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.labels["kuma.io/zone"]}}},{default:a(()=>[l(c(e.labels["kuma.io/zone"]),1)]),_:2},1032,["to"])):(r(),V(x,{key:1},[l(c(p("common.detail.none")),1)],64))]),actions:a(({row:e})=>[t(u,null,{default:a(()=>[t(m,{to:{name:"builtin-gateway-detail-view",params:{mesh:e.mesh,gateway:e.name}}},{default:a(()=>[l(c(p("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","page-number","page-size","total","items","onChange","onResize"])]),_:2},1032,["items"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["docs"])]),_:1})}}});export{X as default};
