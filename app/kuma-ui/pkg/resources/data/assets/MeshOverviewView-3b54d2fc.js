import{U as S,P as K}from"./kongponents.es-c3c87d30.js";import{d as q,u as F,q as f,c as _,o as u,e as h,h as o,g as c,r as Q,a as y,w as i,b as p,k as T,j as N,t as b,F as w,f as j}from"./index-915d42a5.js";import{i as U,h as W,e as z,s as A,q as G,D as C,g as H,r as R,f as X,_ as Y}from"./RouteView.vue_vue_type_script_setup_true_lang-ce7f15c9.js";import{_ as Z}from"./RouteTitle.vue_vue_type_script_setup_true_lang-534dcac2.js";import{D as O,a as E}from"./DefinitionListItem-f8be772b.js";import{_ as ee}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-daafe192.js";import{_ as te}from"./StatusInfo.vue_vue_type_script_setup_true_lang-3238b898.js";import{T as ae}from"./TextWithCopyButton-ed532790.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-97797141.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-3707b324.js";import"./ErrorBlock-4e13de22.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-324eb686.js";const se={class:"chart-box-list"},ne=q({__name:"MeshCharts",setup(J){const r=U(),D=W(),M=F(),m=z(),g=f(!1),v=f({total:0,online:0,partiallyDegraded:0,offline:0}),l=f({total:0,internal:0,external:0}),d=f({kumaDp:{},envoy:{}}),P=_(()=>{const t=[],{internal:a,external:e}=l.value;return a&&m.state.selectedMesh!==null&&t.push({title:r.t("common.charts.services.internalLabel"),data:a,route:{name:"services-list-view",params:{mesh:m.state.selectedMesh}}}),e&&m.state.selectedMesh!==null&&t.push({title:r.t("common.charts.services.externalLabel"),data:e,route:{name:"services-list-view",params:{mesh:m.state.selectedMesh}}}),{title:r.t("common.charts.services.title"),showTotal:!0,dataPoints:t}}),V=_(()=>{const t=[],{total:a,online:e,partiallyDegraded:n}=v.value;if(a>0){t.push({title:r.t("http.api.value.online"),statusKeyword:"online",data:e}),n>0&&t.push({title:r.t("http.api.value.partially_degraded"),statusKeyword:"partially_degraded",data:n});const x=a-n-e;x>0&&t.push({title:r.t("http.api.value.offline"),statusKeyword:"offline",data:x})}return{title:r.t("common.charts.dataPlaneProxies.title"),showTotal:!0,dataPoints:t}}),$=_(()=>{const t=Object.entries(d.value.kumaDp).map(([a,e])=>({title:a,data:e.total??0}));return t.sort((a,e)=>a.title==="unknown"?1:e.title==="unknown"?-1:A(a.title,e.title)),{title:r.t("common.charts.kumaDp.title"),subtitle:r.t("common.charts.kumaDp.subtitle"),dataPoints:t}}),B=_(()=>{const t=Object.entries(d.value.envoy).map(([a,e])=>({title:a,data:e.total??0}));return t.sort((a,e)=>a.title==="unknown"?1:e.title==="unknown"?-1:A(a.title,e.title)),{title:r.t("common.charts.envoy.title"),subtitle:r.t("common.charts.envoy.subtitle"),dataPoints:t}});I();async function I(){g.value=!0;const t=M.params.mesh;try{const a=await D.getMeshInsights({name:t}),e=G([a]);k(e),L(e),s(e)}catch{v.value={total:0,online:0,partiallyDegraded:0,offline:0},l.value={total:0,internal:0,external:0},d.value={kumaDp:{},envoy:{}}}finally{g.value=!1}}function k(t){const{total:a,online:e,partiallyDegraded:n}=t.dataplanes;v.value={total:a,online:e,partiallyDegraded:n,offline:a-e-n}}function L(t){const{total:a,internal:e,external:n}=t.services;l.value={total:a,internal:e,external:n}}function s(t){d.value=t.dpVersions}return(t,a)=>(u(),h("div",se,[o(C,{data:P.value},null,8,["data"]),c(),o(C,{data:V.value},null,8,["data"]),c(),o(C,{data:$.value},null,8,["data"]),c(),o(C,{data:B.value},null,8,["data"])]))}});const le=H(ne,[["__scopeId","data-v-ba256931"]]),oe={class:"kcard-stack"},re={class:"columns"},ie={key:0},ue=q({__name:"MeshOverviewView",setup(J){const{t:r}=U(),D=W(),M=F(),m=z(),g=f(!0),v=f(!1),l=f(null),d=f(null),P=_(()=>{if(l.value===null||d.value===null)return null;const{name:s,creationTime:t,modificationTime:a}=l.value;return{name:s,created:R(t),modified:R(a),"Data Plane Proxies":d.value.dataplanes.total}}),V=_(()=>{var x;if(l.value===null)return null;const s=k(l.value,"mtls"),t=k(l.value,"logging"),a=k(l.value,"metrics"),e=k(l.value,"tracing"),n=!!((x=l.value.routing)!=null&&x.localityAwareLoadBalancing);return{mtls:s,logging:t,metrics:a,tracing:e,localityAwareLoadBalancing:n}}),$=_(()=>m.state.sidebar.insights.mesh.policies.total),B=_(()=>m.state.policyTypes.map(s=>{var t,a;return{...s,length:((a=(t=d.value)==null?void 0:t.policies[s.name])==null?void 0:a.total)??0}}));I();async function I(){g.value=!0,v.value=!1;const s=M.params.mesh;try{l.value=await D.getMesh({name:s}),d.value=await D.getMeshInsights({name:s});const t=G([d.value]);m.state.currentMeshPolicies=t.policies}catch(t){v.value=!0,l.value=null,d.value=null,console.error(t)}finally{g.value=!1}}function k(s,t){if(s===null||s[t]===void 0)return!1;const a=s[t].enabledBackend??s[t].defaultBackend??s[t].backends[0].name,e=s[t].backends.find(n=>n.name===a);return`${e.type} / ${e.name}`}async function L(s){const t=M.params.mesh;return await D.getMesh({name:t},s)}return(s,t)=>{const a=Q("router-link");return u(),y(Y,{module:"meshes"},{default:i(()=>[o(Z,{title:p(r)("meshes.routes.overview.title")},null,8,["title"]),c(),o(X,null,{default:i(()=>[T("div",oe,[o(p(S),null,{body:i(()=>[o(le)]),_:1}),c(),l.value!==null?(u(),y(p(S),{key:0},{body:i(()=>[T("div",re,[o(te,{"is-loading":g.value,"has-error":v.value,"is-empty":l.value===null||d.value===null},{default:i(()=>[o(O,null,{default:i(()=>[(u(!0),h(w,null,N(P.value,(e,n)=>(u(),y(E,{key:n,term:p(r)(`http.api.property.${n}`)},{default:i(()=>[typeof e=="boolean"?(u(),y(p(K),{key:0,appearance:e?"success":"danger"},{default:i(()=>[c(b(e?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):n==="name"&&typeof e=="string"?(u(),y(ae,{key:1,text:e},null,8,["text"])):(u(),h(w,{key:2},[c(b(e),1)],64))]),_:2},1032,["term"]))),128))]),_:1})]),_:1},8,["is-loading","has-error","is-empty"]),c(),o(O,null,{default:i(()=>[(u(!0),h(w,null,N(V.value,(e,n)=>(u(),y(E,{key:n,term:p(r)(`http.api.property.${n}`)},{default:i(()=>[typeof e=="boolean"?(u(),y(p(K),{key:0,appearance:e?"success":"danger"},{default:i(()=>[c(b(e?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):(u(),h(w,{key:1},[c(b(e),1)],64))]),_:2},1032,["term"]))),128))]),_:1}),c(),o(O,null,{default:i(()=>[o(E,{term:`Policies (${$.value})`},{default:i(()=>[T("ul",null,[(u(!0),h(w,null,N(B.value,(e,n)=>(u(),h(w,{key:n},[e.length!==0?(u(),h("li",ie,[o(a,{to:{name:"policies-list-view",params:{policyPath:e.path}}},{default:i(()=>[c(b(e.name)+": "+b(e.length),1)]),_:2},1032,["to"])])):j("",!0)],64))),128))])]),_:1},8,["term"])]),_:1})])]),_:1})):j("",!0),c(),o(p(S),null,{body:i(()=>{var e;return[o(ee,{id:"code-block-mesh","resource-fetcher":L,"resource-fetcher-watch-key":((e=l.value)==null?void 0:e.name)||null},null,8,["resource-fetcher-watch-key"])]}),_:1})])]),_:1})]),_:1})}}});const we=H(ue,[["__scopeId","data-v-10b1dba3"]]);export{we as default};
