import{a as u}from"./kongponents.es-c3c87d30.js";import{O as f,a as v,b as y}from"./OnboardingPage-7db35ebd.js";import{t as b,v as h,e as V,i as x,f as z,_ as S,g as G}from"./RouteView.vue_vue_type_script_setup_true_lang-ce7f15c9.js";import{_ as M}from"./RouteTitle.vue_vue_type_script_setup_true_lang-534dcac2.js";import{d as D,q as w,c as C,x as N,o as r,a as m,w as e,h as t,b as s,g as n,k as d,t as O,i as T}from"./index-915d42a5.js";const k={class:"graph-list mb-6"},B={class:"radio-button-group"},$=D({__name:"DeploymentTypes",setup(I){const p=b(),c={standalone:h(),"multi-zone":p},_=V(),{t:i}=x(),a=w("standalone"),g=C(()=>c[a.value]);return N(function(){a.value=_.getters["config/getMulticlusterStatus"]?"multi-zone":"standalone"}),(U,o)=>(r(),m(S,null,{default:e(()=>[t(M,{title:s(i)("onboarding.routes.deployment-types.title")},null,8,["title"]),n(),t(z,null,{default:e(()=>[t(f,{"with-image":""},{header:e(()=>[t(v,null,{title:e(()=>[n(`
              Learn about deployments
            `)]),description:e(()=>[d("p",null,O(s(i)("common.product.name"))+" can be deployed in standalone or multi-zone mode.",1)]),_:1})]),content:e(()=>[d("div",k,[(r(),m(T(g.value)))]),n(),d("div",B,[t(s(u),{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value=l),name:"mode","selected-value":"standalone","data-testid":"onboarding-standalone-radio-button"},{default:e(()=>[n(`
              Standalone deployment
            `)]),_:1},8,["modelValue"]),n(),t(s(u),{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=l=>a.value=l),name:"mode","selected-value":"multi-zone","data-testid":"onboarding-multi-zone-radio-button"},{default:e(()=>[n(`
              Multi-zone deployment
            `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[t(y,{"next-step":"onboarding-configuration-types","previous-step":"onboarding-welcome"})]),_:1})]),_:1})]),_:1}))}});const E=G($,[["__scopeId","data-v-d468ea32"]]);export{E as default};
