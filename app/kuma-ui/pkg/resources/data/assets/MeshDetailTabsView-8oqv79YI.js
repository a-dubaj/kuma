import{d as h,l as f,V as w,a as m,o as R,b as V,w as i,W as b,q as p,e as o,m as v,f as d}from"./index-KQusT94Q.js";import{N as x}from"./NavTabs-AQF6Hb5F.js";const I=h({__name:"MeshDetailTabsView",setup(N){var u;const{t:l}=f(),_=(((u=w().getRoutes().find(e=>e.name==="mesh-detail-tabs-view"))==null?void 0:u.children)??[]).filter(e=>{var t;return!((t=e.meta)!=null&&t.shouldIgnoreInNavTabs)}).map(e=>{var n,s;const t=typeof e.name>"u"?(n=e.children)==null?void 0:n[0]:e,a=t.name,r=((s=t.meta)==null?void 0:s.module)??"";return{title:l(`meshes.routes.item.navigation.${a}`),routeName:a,module:r}});return(e,t)=>{const a=m("RouteTitle"),r=m("RouterView"),c=m("AppView"),n=m("RouteView");return R(),V(n,{name:"mesh-detail-tabs-view",params:{mesh:""}},{default:i(({route:s})=>[o(c,null,{title:i(()=>[v("h1",null,[o(b,{text:s.params.mesh},{default:i(()=>[o(a,{title:p(l)("meshes.routes.item.title",{name:s.params.mesh})},null,8,["title"])]),_:2},1032,["text"])])]),default:i(()=>[d(),o(x,{class:"route-mesh-view-tabs",tabs:p(_)},null,8,["tabs"]),d(),o(r)]),_:2},1024)]),_:1})}}});export{I as default};
