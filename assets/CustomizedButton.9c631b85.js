/* empty css                                                                 */import{_ as s}from"./index.b7942227.js";import{s as a,o as r,c as l,a as c,t as u,C as d,y as m}from"./vendor.54853348.js";const b={name:"CustomizedButton",props:{buttonText:{type:String,default:"Click me",required:!0},width:{type:String,default:""},level:{type:String,default:"primary"},buttonProps:{type:Object,default:()=>({}),required:!1}},emits:["click-button"],setup(n,{emit:t}){return{buttonStyle:a(()=>({width:n.width})),clickButtonEmit:()=>{t("click-button")}}}},p={class:"button-wrapper"},_=["disabled"];function f(n,t,e,o,y,k){return r(),l("div",p,[c("button",{class:d(["av-button",e.level]),style:m(o.buttonStyle),onClick:t[0]||(t[0]=(...i)=>o.clickButtonEmit&&o.clickButtonEmit(...i)),disabled:e.buttonProps.disabled},u(e.buttonText),15,_)])}var v=s(b,[["render",f],["__scopeId","data-v-068a0d2f"]]);export{v as C};