import{_ as x}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-WlHKgwfK.js";import{d as w,a as s,o as a,b as r,w as n,e as t,m as E,f as R,E as V,A as k,p as z}from"./index-KQusT94Q.js";import"./CodeBlock-A5fzLugD.js";import"./toYaml-sPaYOD3i.js";const N=w({__name:"ZoneIngressConfigView",setup(v){return(y,F)=>{const m=s("RouteTitle"),i=s("DataSource"),g=s("KCard"),_=s("AppView"),u=s("RouteView");return a(),r(u,{name:"zone-ingress-config-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:n(({route:e,t:f})=>[t(_,null,{title:n(()=>[E("h2",null,[t(m,{title:f("zone-ingresses.routes.item.navigation.zone-ingress-config-view")},null,8,["title"])])]),default:n(()=>[R(),t(g,null,{default:n(()=>[t(i,{src:`/zone-ingresses/${e.params.zoneIngress}`},{default:n(({data:l,error:p})=>[p!==void 0?(a(),r(V,{key:0,error:p},null,8,["error"])):l===void 0?(a(),r(k,{key:1})):(a(),r(x,{key:2,resource:l.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},{default:n(({copy:o,copying:h})=>[h?(a(),r(i,{key:0,src:`/zone-ingresses/${e.params.zoneIngress}/as/kubernetes?no-store`,onChange:c=>{o(d=>d(c))},onError:c=>{o((d,C)=>C(c))}},null,8,["src","onChange","onError"])):z("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{N as default};
