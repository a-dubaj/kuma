import{_ as c,r as u,d as _,l as p,a as i,o as f,b as m,a5 as b,w as s,f as n,t as r,q as o,e as g,D as v,aa as B}from"./index-KQusT94Q.js";const x={};function C(t,e){return u(t.$slots,"default")}const S=c(x,[["render",C]]),h=_({__name:"StatusBadge",props:{status:{}},setup(t){const{t:e}=p(),l={online:"success",offline:"danger",partially_degraded:"warning",not_available:"neutral",disabled:"neutral"},a=t;return(y,A)=>{const d=i("KBadge");return f(),m(v(a.status==="not_available"?o(B):S),null,b({default:s(()=>[g(d,{class:"status-badge",appearance:l[a.status],"max-width":"auto","data-testid":"status-badge"},{default:s(()=>[n(r(o(e)(`http.api.value.${a.status}`)),1)]),_:1},8,["appearance"]),n()]),_:2},[a.status==="not_available"?{name:"content",fn:s(()=>[n(r(o(e)("components.status-badge.tooltip.not_available")),1)]),key:"0"}:void 0]),1024)}}}),D=c(h,[["__scopeId","data-v-681bdb4a"]]);export{D as S};
