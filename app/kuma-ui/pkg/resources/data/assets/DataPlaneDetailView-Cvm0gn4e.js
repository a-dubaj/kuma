import{d as E,I as j,F as M,o,m as y,w as n,c as l,t as r,p as I,G as st,E as tt,H as et,J as at,k as s,K as rt,q as H,r as x,a as D,e,j as ct,b as d,l as u,L as f,M as B,n as ut,D as pt,T as X,Z as T,S as _t,a3 as ft,N as J,a2 as mt,a4 as nt,a5 as yt,a6 as gt}from"./index-of_8QwXw.js";import{m as vt}from"./kong-icons.es338-Cv4qtwvD.js";import{S as ht}from"./SummaryView-Bf2AxXAt.js";import{T as dt}from"./TagList-DFI_JAIP.js";import{_ as bt}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-D1An6LRY.js";import"./AccordionList-ja1ORayM.js";const kt=i=>(et("data-v-98cc7304"),i=i(),at(),i),xt=["aria-hidden"],wt={key:0,"data-testid":"kui-icon-svg-title"},$t=kt(()=>s("path",{d:"M15 18L21 12L15 6L13.6 7.4L17.2 11H3V13H17.2L13.6 16.6L15 18Z",fill:"currentColor"},null,-1)),St=E({__name:"ForwardIcon",props:{title:{type:String,required:!1,default:""},color:{type:String,required:!1,default:"currentColor"},display:{type:String,required:!1,default:"block"},decorative:{type:Boolean,required:!1,default:!1},size:{type:[Number,String],required:!1,default:j,validator:i=>{if(typeof i=="number"&&i>0)return!0;if(typeof i=="string"){const a=String(i).replace(/px/gi,""),t=Number(a);if(t&&!isNaN(t)&&Number.isInteger(t)&&t>0)return!0}return!1}},as:{type:String,required:!1,default:"span"}},setup(i){const a=i,t=M(()=>{if(typeof a.size=="number"&&a.size>0)return`${a.size}px`;if(typeof a.size=="string"){const b=String(a.size).replace(/px/gi,""),m=Number(b);if(m&&!isNaN(m)&&Number.isInteger(m)&&m>0)return`${m}px`}return j}),v=M(()=>({boxSizing:"border-box",color:a.color,display:a.display,flexShrink:"0",height:t.value,lineHeight:"0",width:t.value}));return(b,m)=>(o(),y(tt(i.as),{"aria-hidden":i.decorative?"true":void 0,class:"kui-icon forward-icon","data-testid":"kui-icon-wrapper-forward-icon",style:st(v.value)},{default:n(()=>[(o(),l("svg",{"aria-hidden":i.decorative?"true":void 0,"data-testid":"kui-icon-svg-forward-icon",fill:"none",height:"100%",role:"img",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg"},[i.title?(o(),l("title",wt,r(i.title),1)):I("",!0),$t],8,xt))]),_:1},8,["aria-hidden","style"]))}}),Ct=rt(St,[["__scopeId","data-v-98cc7304"]]),Bt=i=>(et("data-v-ed8523a2"),i=i(),at(),i),It=["aria-hidden"],Nt={key:0,"data-testid":"kui-icon-svg-title"},Tt=Bt(()=>s("path",{d:"M12 21V19H19V5H12V3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H12ZM10 17L8.625 15.55L11.175 13H3V11H11.175L8.625 8.45L10 7L15 12L10 17Z",fill:"currentColor"},null,-1)),qt=E({__name:"GatewayIcon",props:{title:{type:String,required:!1,default:""},color:{type:String,required:!1,default:"currentColor"},display:{type:String,required:!1,default:"block"},decorative:{type:Boolean,required:!1,default:!1},size:{type:[Number,String],required:!1,default:j,validator:i=>{if(typeof i=="number"&&i>0)return!0;if(typeof i=="string"){const a=String(i).replace(/px/gi,""),t=Number(a);if(t&&!isNaN(t)&&Number.isInteger(t)&&t>0)return!0}return!1}},as:{type:String,required:!1,default:"span"}},setup(i){const a=i,t=M(()=>{if(typeof a.size=="number"&&a.size>0)return`${a.size}px`;if(typeof a.size=="string"){const b=String(a.size).replace(/px/gi,""),m=Number(b);if(m&&!isNaN(m)&&Number.isInteger(m)&&m>0)return`${m}px`}return j}),v=M(()=>({boxSizing:"border-box",color:a.color,display:a.display,flexShrink:"0",height:t.value,lineHeight:"0",width:t.value}));return(b,m)=>(o(),y(tt(i.as),{"aria-hidden":i.decorative?"true":void 0,class:"kui-icon gateway-icon","data-testid":"kui-icon-wrapper-gateway-icon",style:st(v.value)},{default:n(()=>[(o(),l("svg",{"aria-hidden":i.decorative?"true":void 0,"data-testid":"kui-icon-svg-gateway-icon",fill:"none",height:"100%",role:"img",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg"},[i.title?(o(),l("title",Nt,r(i.title),1)):I("",!0),Tt],8,It))]),_:1},8,["aria-hidden","style"]))}}),zt=rt(qt,[["__scopeId","data-v-ed8523a2"]]),Lt=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Dt=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],Kt=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],Vt=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],it=(i,a,t)=>{let v=i;return typeof a=="string"||Array.isArray(a)?v=i.toLocaleString(a,t):(a===!0||t!==void 0)&&(v=i.toLocaleString(void 0,t)),v};function Y(i,a){if(!Number.isFinite(i))throw new TypeError(`Expected a finite number, got ${typeof i}: ${i}`);a={bits:!1,binary:!1,space:!0,...a};const t=a.bits?a.binary?Vt:Kt:a.binary?Dt:Lt,v=a.space?" ":"";if(a.signed&&i===0)return` 0${v}${t[0]}`;const b=i<0,m=b?"-":a.signed?"+":"";b&&(i=-i);let w;if(a.minimumFractionDigits!==void 0&&(w={minimumFractionDigits:a.minimumFractionDigits}),a.maximumFractionDigits!==void 0&&(w={maximumFractionDigits:a.maximumFractionDigits,...w}),i<1){const K=it(i,a.locale,w);return m+K+v+t[0]}const C=Math.min(Math.floor(a.binary?Math.log(i)/Math.log(1024):Math.log10(i)/3),t.length-1);i/=(a.binary?1024:1e3)**C,w||(i=i.toPrecision(3));const L=it(Number(i),a.locale,w),q=t[C];return m+L+v+q}const Et={},Mt={class:"card"},Ht={class:"title"},Rt={class:"body"};function Pt(i,a){const t=x("KCard");return o(),y(t,{class:"data-card"},{default:n(()=>[s("dl",null,[s("div",Mt,[s("dt",Ht,[D(i.$slots,"title",{},void 0,!0)]),e(),s("dd",Rt,[D(i.$slots,"default",{},void 0,!0)])])])]),_:3})}const lt=H(Et,[["render",Pt],["__scopeId","data-v-3f9a3cf3"]]),At={class:"title"},Ut={key:0},Ft={"data-testid":"grpc-success"},Zt={"data-testid":"grpc-failure"},Gt={"data-testid":"rq-2xx"},Ot={"data-testid":"rq-4xx"},Yt={"data-testid":"rq-5xx"},jt={"data-testid":"connections-total"},Xt={key:0,"data-testid":"bytes-received"},Jt={key:1,"data-testid":"bytes-sent"},Wt=E({__name:"ConnectionCard",props:{protocol:{},service:{default:""},traffic:{default:void 0},direction:{default:"downstream"}},setup(i){const{t:a}=ct(),t=i,v=b=>{const m=b.target;if(b.isTrusted&&m.nodeName.toLowerCase()!=="a"){const w=m.closest(".service-traffic-card, a");if(w){const C=w.nodeName.toLowerCase()==="a"?w:w.querySelector("[data-action]");C!==null&&"click"in C&&typeof C.click=="function"&&C.click()}}};return(b,m)=>{const w=x("KBadge"),C=x("KSkeletonBox");return o(),y(lt,{class:"service-traffic-card",onClick:v},{title:n(()=>[t.service.length>0?(o(),y(dt,{key:0,tags:[{label:"kuma.io/service",value:t.service}]},null,8,["tags"])):I("",!0),e(),s("div",At,[d(w,{class:"protocol",appearance:t.protocol==="passthrough"?"success":"info"},{default:n(()=>[e(r(u(a)(`data-planes.components.service_traffic_card.protocol.${t.protocol}`,{},{defaultMessage:u(a)(`http.api.value.${t.protocol}`)})),1)]),_:1},8,["appearance"]),e(),D(b.$slots,"default",{},void 0,!0)])]),default:n(()=>{var L,q,K,R,P,A,U,F,Z,G,$,p;return[e(),t.traffic?(o(),l("dl",Ut,[t.protocol==="passthrough"?(o(!0),l(f,{key:0},B([["http","tcp"].reduce((k,h)=>{var O;const z=t.direction;return Object.entries(((O=t.traffic)==null?void 0:O[h])||{}).reduce((c,[_,g])=>[`${z}_cx_tx_bytes_total`,`${z}_cx_rx_bytes_total`].includes(_)?{...c,[_]:g+(c[_]??0)}:c,k)},{})],(k,h)=>(o(),l(f,{key:h},[s("div",null,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.tx")),1),e(),s("dd",null,r(u(Y)(k.downstream_cx_rx_bytes_total??0)),1)]),e(),s("div",null,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.rx")),1),e(),s("dd",null,r(u(Y)(k.downstream_cx_tx_bytes_total??0)),1)])],64))),128)):t.protocol==="grpc"?(o(),l(f,{key:1},[s("div",Ft,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.grpc_success")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:(L=t.traffic.grpc)==null?void 0:L.success})),1)]),e(),s("div",Zt,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.grpc_failure")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:(q=t.traffic.grpc)==null?void 0:q.failure})),1)])],64)):t.protocol.startsWith("http")?(o(),l(f,{key:2},[(o(!0),l(f,null,B([((K=t.traffic.http)==null?void 0:K[`${t.direction}_rq_1xx`])??0].filter(k=>k!==0),k=>(o(),l("div",{key:k,"data-testid":"rq-1xx"},[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.1xx")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:k})),1)]))),128)),e(),s("div",Gt,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.2xx")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:(R=t.traffic.http)==null?void 0:R[`${t.direction}_rq_2xx`]})),1)]),e(),(o(!0),l(f,null,B([((P=t.traffic.http)==null?void 0:P[`${t.direction}_rq_3xx`])??0].filter(k=>k!==0),k=>(o(),l("div",{key:k,"data-testid":"rq-3xx"},[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.3xx")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:k})),1)]))),128)),e(),s("div",Ot,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.4xx")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:(A=t.traffic.http)==null?void 0:A[`${t.direction}_rq_4xx`]})),1)]),e(),s("div",Yt,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.5xx")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:(U=t.traffic.http)==null?void 0:U[`${t.direction}_rq_5xx`]})),1)])],64)):(o(),l(f,{key:3},[s("div",jt,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.cx")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:(F=t.traffic.tcp)==null?void 0:F[`${t.direction}_cx_total`]})),1)]),e(),typeof((Z=t.traffic.tcp)==null?void 0:Z[`${t.direction}_cx_tx_bytes_total`])<"u"?(o(),l("div",Xt,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.rx")),1),e(),s("dd",null,r(u(Y)((G=t.traffic.tcp)==null?void 0:G[`${t.direction}_cx_tx_bytes_total`])),1)])):I("",!0),e(),typeof(($=t.traffic.tcp)==null?void 0:$[`${t.direction}_cx_rx_bytes_total`])<"u"?(o(),l("div",Jt,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.tx")),1),e(),s("dd",null,r(u(Y)((p=t.traffic.tcp)==null?void 0:p[`${t.direction}_cx_rx_bytes_total`])),1)])):I("",!0)],64))])):(o(),y(C,{key:1,width:"10"}))]}),_:3})}}}),W=H(Wt,[["__scopeId","data-v-f7ef7711"]]),Qt={class:"body"},te=E({__name:"ConnectionGroup",props:{type:{}},setup(i){const a=i;return(t,v)=>{const b=x("KCard");return o(),y(b,{class:ut(["service-traffic-group",`type-${a.type}`])},{default:n(()=>[s("div",Qt,[D(t.$slots,"default",{},void 0,!0)])]),_:3},8,["class"])}}}),Q=H(te,[["__scopeId","data-v-9402d5d1"]]),ee={class:"service-traffic"},ae={class:"actions"},ne=E({__name:"ConnectionTraffic",setup(i){return(a,t)=>(o(),l("div",ee,[s("div",ae,[D(a.$slots,"actions",{},void 0,!0)]),e(),d(lt,{class:"header"},{title:n(()=>[D(a.$slots,"title",{},void 0,!0)]),_:3}),e(),D(a.$slots,"default",{},void 0,!0)]))}}),ot=H(ne,[["__scopeId","data-v-e6bd176c"]]),ie=i=>(et("data-v-d4439766"),i=i(),at(),i),oe={"data-testid":"dataplane-warnings"},se=["data-testid","innerHTML"],re={key:0,"data-testid":"warning-stats-loading"},de={class:"stack","data-testid":"dataplane-details"},le={class:"stack"},ce={class:"columns"},ue={class:"status-with-reason"},pe={class:"columns"},_e={class:"columns"},fe=ie(()=>s("span",null,"Outbounds",-1)),me={"data-testid":"dataplane-mtls"},ye={class:"columns"},ge=["innerHTML"],ve={key:0,"data-testid":"dataplane-subscriptions"},he=E({__name:"DataPlaneDetailView",props:{data:{}},setup(i){const a=pt(),t=i,v=M(()=>t.data.warnings.concat(...t.data.isCertExpired?[{kind:"CERT_EXPIRED"}]:[]));return(b,m)=>{const w=x("KTooltip"),C=x("DataCollection"),L=x("XAction"),q=x("KCard"),K=x("KInputSwitch"),R=x("KButton"),P=x("RouterLink"),A=x("RouterView"),U=x("KAlert"),F=x("AppView"),Z=x("DataSource"),G=x("RouteView");return o(),y(G,{params:{mesh:"",dataPlane:"",inactive:!1},name:"data-plane-detail-view"},{default:n(({route:$,t:p,can:k})=>[d(Z,{src:`/meshes/${$.params.mesh}/dataplanes/${$.params.dataPlane}/stats/${t.data.dataplane.networking.inboundAddress}`},{default:n(({data:h,error:z,refresh:O})=>[d(F,null,X({default:n(()=>[e(),s("div",de,[d(q,null,{default:n(()=>[s("div",le,[s("div",ce,[d(T,null,{title:n(()=>[e(r(p("http.api.property.status")),1)]),body:n(()=>[s("div",ue,[d(_t,{status:t.data.status},null,8,["status"]),e(),t.data.dataplaneType==="standard"?(o(),y(C,{key:0,items:t.data.dataplane.networking.inbounds,predicate:c=>!c.health.ready,empty:!1},{default:n(({items:c})=>[d(w,{class:"reason-tooltip"},{content:n(()=>[s("ul",null,[(o(!0),l(f,null,B(c,_=>(o(),l("li",{key:`${_.service}:${_.port}`},r(p("data-planes.routes.item.unhealthy_inbound",{service:_.service,port:_.port})),1))),128))])]),default:n(()=>[d(u(vt),{color:u(ft),size:u(J)},null,8,["color","size"]),e()]),_:2},1024)]),_:2},1032,["items","predicate"])):I("",!0)])]),_:2},1024),e(),k("use zones")&&t.data.zone?(o(),y(T,{key:0},{title:n(()=>[e(`
                    Zone
                  `)]),body:n(()=>[d(L,{to:{name:"zone-cp-detail-view",params:{zone:t.data.zone}}},{default:n(()=>[e(r(t.data.zone),1)]),_:1},8,["to"])]),_:1})):I("",!0),e(),d(T,null,{title:n(()=>[e(`
                    Type
                  `)]),body:n(()=>[e(r(p(`data-planes.type.${t.data.dataplaneType}`)),1)]),_:2},1024),e(),t.data.namespace.length>0?(o(),y(T,{key:1},{title:n(()=>[e(`
                    Namespace
                  `)]),body:n(()=>[e(r(t.data.namespace),1)]),_:1})):I("",!0)]),e(),s("div",pe,[d(T,null,{title:n(()=>[e(r(p("data-planes.routes.item.last_updated")),1)]),body:n(()=>[e(r(p("common.formats.datetime",{value:Date.parse(t.data.modificationTime)})),1)]),_:2},1024),e(),t.data.dataplane.networking.gateway?(o(),l(f,{key:0},[d(T,null,{title:n(()=>[e(r(p("http.api.property.tags")),1)]),body:n(()=>[d(dt,{tags:t.data.dataplane.networking.gateway.tags},null,8,["tags"])]),_:2},1024),e(),d(T,null,{title:n(()=>[e(r(p("http.api.property.address")),1)]),body:n(()=>[d(mt,{text:`${t.data.dataplane.networking.address}`},null,8,["text"])]),_:2},1024)],64)):I("",!0)])])]),_:2},1024),e(),d(q,{class:"traffic","data-testid":"dataplane-traffic"},{default:n(()=>[s("div",_e,[d(ot,null,{title:n(()=>[d(u(Ct),{display:"inline-block",decorative:"",size:u(J)},null,8,["size"]),e(`
                  Inbounds
                `)]),default:n(()=>[e(),d(Q,{type:"inbound","data-testid":"dataplane-inbounds"},{default:n(()=>[(o(!0),l(f,null,B([t.data.dataplane.networking.type==="gateway"?Object.entries((h==null?void 0:h.inbounds)??{}).reduce((c,[_,g])=>{var N;const S=_.split("_").at(-1);return S===(((N=t.data.dataplane.networking.admin)==null?void 0:N.port)??"9901")?c:c.concat([{...t.data.dataplane.networking.inbounds[0],name:_,port:Number(S),protocol:["http","tcp"].find(V=>typeof g[V]<"u")??"tcp",addressPort:`${t.data.dataplane.networking.inbounds[0].address}:${S}`}])},[]):t.data.dataplane.networking.inbounds],c=>(o(),y(C,{key:c,items:c,predicate:_=>_.port!==49151},X({default:n(({items:_})=>[(o(!0),l(f,null,B(_,g=>(o(),l(f,{key:`${g.name}`},[(o(!0),l(f,null,B([h==null?void 0:h.inbounds[g.name]],S=>(o(),y(W,{key:S,"data-testid":"dataplane-inbound",protocol:g.protocol,service:g.tags["kuma.io/service"],traffic:typeof z>"u"?S:{name:"",protocol:g.protocol,port:`${g.port}`}},{default:n(()=>[d(L,{"data-action":"",to:{name:(N=>N.includes("bound")?N.replace("-outbound-","-inbound-"):"connection-inbound-summary-overview-view")(String(u(a).name)),params:{connection:g.name},query:{inactive:$.params.inactive}}},{default:n(()=>[e(r(g.name.replace("localhost","").replace("_",":")),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","service","traffic"]))),128))],64))),128))]),_:2},[t.data.dataplaneType==="delegated"?{name:"empty",fn:n(()=>[d(nt,null,{default:n(()=>[e(`
                          This proxy is a delegated gateway therefore `+r(p("common.product.name"))+` does not have any visibility into inbounds for this gateway
                        `,1)]),_:2},1024)]),key:"0"}:void 0]),1032,["items","predicate"]))),128))]),_:2},1024)]),_:2},1024),e(),d(ot,null,X({title:n(()=>[d(u(zt),{display:"inline-block",decorative:"",size:u(J)},null,8,["size"]),e(),fe]),default:n(()=>[e(),e(),typeof z>"u"?(o(),l(f,{key:0},[typeof h>"u"?(o(),y(yt,{key:0})):(o(),l(f,{key:1},B(["upstream"],c=>(o(),l(f,{key:c},[d(Q,{type:"passthrough"},{default:n(()=>[d(W,{protocol:"passthrough",traffic:h.passthrough},{default:n(()=>[e(`
                          Non mesh traffic
                        `)]),_:2},1032,["traffic"])]),_:2},1024),e(),d(C,{predicate:$.params.inactive?void 0:([_,g])=>{var S,N;return((typeof g.tcp<"u"?(S=g.tcp)==null?void 0:S[`${c}_cx_rx_bytes_total`]:(N=g.http)==null?void 0:N[`${c}_rq_total`])??0)>0},items:Object.entries(h.outbounds)},{default:n(({items:_})=>[_.length>0?(o(),y(Q,{key:0,type:"outbound","data-testid":"dataplane-outbounds"},{default:n(()=>[(o(),l(f,null,B([/-([a-f0-9]){16}$/],g=>(o(),l(f,{key:g},[(o(!0),l(f,null,B(_,([S,N])=>(o(),y(W,{key:`${S}`,"data-testid":"dataplane-outbound",protocol:["grpc","http","tcp"].find(V=>typeof N[V]<"u")??"tcp",traffic:N,service:N.$kind===""?S.replace(g,""):void 0,direction:c},{default:n(()=>[d(P,{"data-action":"",to:{name:(V=>V.includes("bound")?V.replace("-inbound-","-outbound-"):"connection-outbound-summary-overview-view")(String(u(a).name)),params:{connection:S},query:{inactive:$.params.inactive?null:void 0}}},{default:n(()=>[e(r(S),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","traffic","service","direction"]))),128))],64))),64))]),_:2},1024)):I("",!0)]),_:2},1032,["predicate","items"])],64))),64))],64)):(o(),y(nt,{key:1}))]),_:2},[h?{name:"actions",fn:n(()=>[d(K,{modelValue:$.params.inactive,"onUpdate:modelValue":c=>$.params.inactive=c,"data-testid":"dataplane-outbounds-inactive-toggle"},{label:n(()=>[e(`
                      Show inactive
                    `)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(),d(R,{appearance:"primary",onClick:O},{default:n(()=>[d(u(gt)),e(`

                    Refresh
                  `)]),_:2},1032,["onClick"])]),key:"0"}:void 0]),1024)])]),_:2},1024),e(),d(A,null,{default:n(c=>[c.route.name!==$.name?(o(),y(ht,{key:0,width:"670px",onClose:function(){$.replace({name:"data-plane-detail-view",params:{mesh:$.params.mesh,dataPlane:$.params.dataPlane},query:{inactive:$.params.inactive?null:void 0}})}},{default:n(()=>[(o(),y(tt(c.Component),{data:c.route.name.includes("-inbound-")?t.data.dataplane.networking.inbounds:(h==null?void 0:h.outbounds)||{},"dataplane-overview":t.data},null,8,["data","dataplane-overview"]))]),_:2},1032,["onClose"])):I("",!0)]),_:2},1024),e(),s("div",me,[s("h2",null,r(p("data-planes.routes.item.mtls.title")),1),e(),t.data.dataplaneInsight.mTLS?(o(!0),l(f,{key:0},B([t.data.dataplaneInsight.mTLS],c=>(o(),y(q,{key:c,class:"mt-4"},{default:n(()=>[s("div",ye,[d(T,null,{title:n(()=>[e(r(p("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:n(()=>[e(r(p("common.formats.datetime",{value:Date.parse(c.certificateExpirationTime)})),1)]),_:2},1024),e(),d(T,null,{title:n(()=>[e(r(p("data-planes.routes.item.mtls.generation_time.title")),1)]),body:n(()=>[e(r(p("common.formats.datetime",{value:Date.parse(c.lastCertificateRegeneration)})),1)]),_:2},1024),e(),d(T,null,{title:n(()=>[e(r(p("data-planes.routes.item.mtls.regenerations.title")),1)]),body:n(()=>[e(r(p("common.formats.integer",{value:c.certificateRegenerations})),1)]),_:2},1024),e(),d(T,null,{title:n(()=>[e(r(p("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:n(()=>[e(r(c.issuedBackend),1)]),_:2},1024),e(),d(T,null,{title:n(()=>[e(r(p("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:n(()=>[s("ul",null,[(o(!0),l(f,null,B(c.supportedBackends,_=>(o(),l("li",{key:_},r(_),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):(o(),y(U,{key:1,class:"mt-4",appearance:"warning"},{default:n(()=>[s("div",{innerHTML:p("data-planes.routes.item.mtls.disabled")},null,8,ge)]),_:2},1024))]),e(),t.data.dataplaneInsight.subscriptions.length>0?(o(),l("div",ve,[s("h2",null,r(p("data-planes.routes.item.subscriptions.title")),1),e(),d(q,{class:"mt-4"},{default:n(()=>[d(bt,{subscriptions:t.data.dataplaneInsight.subscriptions},null,8,["subscriptions"])]),_:1})])):I("",!0)])]),_:2},[v.value.length>0||z?{name:"notifications",fn:n(()=>[s("ul",oe,[(o(!0),l(f,null,B(v.value,c=>(o(),l("li",{key:c.kind,"data-testid":`warning-${c.kind}`,innerHTML:p(`common.warnings.${c.kind}`,c.payload)},null,8,se))),128)),e(),z?(o(),l("li",re,[e(`
              The below view is not enhanced with runtime stats (Error loading stats: `),s("strong",null,r(z.toString()),1),e(`)
            `)])):I("",!0)])]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]),_:1})}}}),Ce=H(he,[["__scopeId","data-v-d4439766"]]);export{Ce as default};
