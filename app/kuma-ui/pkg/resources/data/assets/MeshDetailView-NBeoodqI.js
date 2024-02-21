import{_ as S}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-WlHKgwfK.js";import{d as D,l as y,o as a,c as k,f as n,t as i,q as s,e,U as E,_ as V,X as M,a as c,b as m,w as r,E as N,A,p as I,m as b}from"./index-KQusT94Q.js";import"./CodeBlock-A5fzLugD.js";import"./toYaml-sPaYOD3i.js";const q={class:"date-status"},U=D({__name:"ResourceDateStatus",props:{creationTime:{},modificationTime:{}},setup(p){const{t}=y(),l=p;return(T,f)=>(a(),k("span",q,[n(i(s(t)("common.detail.created"))+": "+i(s(t)("common.formats.datetime",{value:Date.parse(l.creationTime)}))+" "+i()+" ",1),e(s(E)),n(" "+i(s(t)("common.detail.modified"))+":"+i(s(t)("common.formats.datetime",{value:Date.parse(l.modificationTime)})),1)]))}}),X=V(U,[["__scopeId","data-v-785cac69"]]),j={key:2,class:"stack","data-testid":"detail-view-details"},z={class:"date-status-wrapper"},F=D({__name:"MeshDetailView",setup(p){const t=M();return(l,T)=>{const f=c("RouteTitle"),_=c("DataSource"),g=c("AppView"),$=c("RouteView");return a(),m($,{name:"mesh-detail-view",params:{mesh:""}},{default:r(({route:d,t:x})=>[e(f,{title:x("meshes.routes.overview.title"),render:!1},null,8,["title"]),n(),e(g,null,{default:r(()=>[e(_,{src:`/meshes/${d.params.mesh}`},{default:r(({data:o,error:h})=>[e(_,{src:`/mesh-insights/${d.params.mesh}`},{default:r(({data:C})=>[h?(a(),m(N,{key:0,error:h},null,8,["error"])):o===void 0?(a(),m(A,{key:1})):(a(),k("div",j,[e(s(t),{mesh:o,"mesh-insight":C},null,8,["mesh","mesh-insight"]),n(),e(S,{resource:o.config},{default:r(({copy:v,copying:R})=>[R?(a(),m(_,{key:0,src:`/meshes/${d.params.mesh}/as/kubernetes?no-store`,onChange:u=>{v(w=>w(u))},onError:u=>{v((w,B)=>B(u))}},null,8,["src","onChange","onError"])):I("",!0)]),_:2},1032,["resource"]),n(),b("div",z,[e(X,{"creation-time":o.creationTime,"modification-time":o.modificationTime},null,8,["creation-time","modification-time"])])]))]),_:2},1032,["src"])]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}}),L=V(F,[["__scopeId","data-v-029c73c0"]]);export{L as default};
