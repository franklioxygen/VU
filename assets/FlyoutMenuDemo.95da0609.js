import{_ as v}from"./index.5623d7dc.js";import{D as h}from"./deviceType.c4ba19d5.js";import{r as g,d as f,$ as y,o as M,c as b,a as u,F as p,h as S,t as A,p as P,b as F,s as r,f as d,g as o}from"./vendor.d9b9588d.js";import{F as G}from"./FooterMessage.1f52ea86.js";const R={name:"FlyoutMenu",props:{menuProps:{type:Object,required:!0}},setup(l){const s=()=>{document.getElementsByClassName("flyout-menu-wrapper")[0].children[0].classList.toggle("show-menu")};let m=g({subMenu:[l.menuProps]}),n=g({number:0});const k=(e,L)=>{m.subMenu[L]=e.subMenu,n.number=L,c(L+1)},c=e=>{m.subMenu[e]=""},a=()=>{m.subMenu=[l.menuProps]},t=e=>{e.target.classList.add("active"),e.target.classList.add("focus")},i=e=>{e.target.classList.remove("active")};return f(()=>{let e;y(".flyout-menu-wrapper").on("mousemove",()=>{const L=y("li.active");document.documentElement.style.setProperty("--coneHeight","300%"),clearTimeout(e),e=setTimeout(()=>{L.hasClass("active")&&document.documentElement.style.setProperty("--coneHeight","0")},500)})}),{toggleMenu:s,menuLevels:m,focusLevel:n,genSubMenu:k,hideSubMenu:c,clearAll:a,addActive:t,removeActive:i}}},_=l=>(P("data-v-582e8075"),l=l(),F(),l),C=_(()=>u("div",null,null,-1)),D=_(()=>u("div",null,null,-1)),w=_(()=>u("div",null,null,-1)),I=[C,D,w],j=["onMouseover","onMouseout"],T=["href"];function x(l,s,m,n,k,c){return M(),b(p,null,[u("span",{class:"expand-menu-button",onClick:s[0]||(s[0]=(...a)=>n.toggleMenu&&n.toggleMenu(...a))},I),u("nav",{class:"flyout-menu-wrapper",onMouseleave:s[3]||(s[3]=(...a)=>n.clearAll&&n.clearAll(...a))},[(M(!0),b(p,null,S(n.menuLevels.subMenu,(a,t)=>(M(),b("ul",{key:a,class:"menus"},[(M(!0),b(p,null,S(a,i=>(M(),b("li",{key:i,onMouseover:e=>n.genSubMenu(i,t+1),onMouseout:e=>n.hideSubMenu(t+2),onMouseenter:s[1]||(s[1]=(...e)=>n.addActive&&n.addActive(...e)),onMouseleave:s[2]||(s[2]=(...e)=>n.removeActive&&n.removeActive(...e))},[u("a",{href:i.link},A(i.name),9,T)],40,j))),128))]))),128))],32)],64)}var B=v(R,[["render",x],["__scopeId","data-v-582e8075"]]);const E={name:"FlyoutMenuDemo",components:{FlyoutMenu:B,DataTable:h,FooterMessage:G},setup(){const l=r(()=>`
<FlyoutMenu :menu-props="menuProps" />
      `),s=r(()=>`
import { FlyoutMenu } from "air-vue";
      `),m=r(()=>`
const menuProps = computed(() => {
  return [
    { 
      name: "Home", 
      link: "/" 
    },
    {
      name: "Action",
      link: "/action",
      subMenu: [
        {
          name: "Action L2 subMenu1",
          link: "/#",
          subMenu: [
            {...}
        }]
    },
    ...
    ];
`),n=r(()=>({name:"Props/Events Guide",tableHead:[{label:"Name",field:"name"},{label:"Type",field:"type"},{label:"Required",field:"required"},{label:"Default",field:"default"},{label:"Description",field:"description"}],tableBody:[{name:"menuProps",type:"Object",required:"true",default:"-",description:"list of layers of menu"}]})),k=r(()=>[{name:"Home",link:"/"},{name:"Action",link:"/action",subMenu:[{name:"Action L2 subMenu1",link:"/#",subMenu:[{name:"L3 subMenu11",link:"/#",subMenu:[{name:"L4 subMenu11",link:"/#"},{name:"L4 subMenu21",link:"/#"},{name:"L4 subMenu31",link:"/#"},{name:"L4 subMenu41",link:"/#"},{name:"L4 subMenu51",link:"/#"},{name:"L4 subMenu61",link:"/#"},{name:"L4 subMenu71",link:"/#"},{name:"L4 subMenu81",link:"/#"},{name:"L4 subMenu91",link:"/#"},{name:"L4 subMenu11",link:"/#"}]},{name:"L3 subMenu21",link:"/#"},{name:"L3 subMenu31",link:"/#"},{name:"L3 subMenu41",link:"/#"},{name:"L3 subMenu51",link:"/#"},{name:"L3 subMenu61",link:"/#"},{name:"L3 subMenu71",link:"/#"},{name:"L3 subMenu81",link:"/#"},{name:"L3 subMenu91",link:"/#"},{name:"L3 subMenu11",link:"/#"}]},{name:"Action L2 subMenu2",link:"/#"},{name:"Action L2 subMenu3",link:"/#",subMenu:[{name:"L3 subMenu11",link:"/#",subMenu:[{name:"L4 subMenu11",link:"/#"},{name:"L4 subMenu21",link:"/#"},{name:"L4 subMenu31",link:"/#"},{name:"L4 subMenu41",link:"/#"},{name:"L4 subMenu51",link:"/#"},{name:"L4 subMenu61",link:"/#"},{name:"L4 subMenu71",link:"/#"},{name:"L4 subMenu81",link:"/#"},{name:"L4 subMenu91",link:"/#"},{name:"L4 subMenu11",link:"/#"}]},{name:"L3 subMenu21",link:"/#"},{name:"L3 subMenu31",link:"/#"},{name:"L3 subMenu41",link:"/#"},{name:"L3 subMenu51",link:"/#"},{name:"L3 subMenu61",link:"/#"},{name:"L3 subMenu71",link:"/#"},{name:"L3 subMenu81",link:"/#"},{name:"L3 subMenu91",link:"/#"},{name:"L3 subMenu11",link:"/#"}]},{name:"Action L2 subMenu4",link:"/#"},{name:"Action L2 subMenu5",link:"/#"},{name:"Action L2 subMenu6",link:"/#"},{name:"Action L2 subMenu7",link:"/#"},{name:"Action L2 subMenu8",link:"/#"},{name:"Action L2 subMenu9",link:"/#"},{name:"Action L2 subMenu10",link:"/#"}]},{name:"RPG",link:"/rpg",subMenu:[{name:"RPG L2 subMenu1",link:"/#",subMenu:[{name:"L3 subMenu11",link:"/#"},{name:"L3 subMenu21",link:"/#"},{name:"L3 subMenu31",link:"/#"},{name:"L3 subMenu41",link:"/#"},{name:"L3 subMenu51",link:"/#"},{name:"L3 subMenu61",link:"/#"},{name:"L3 subMenu71",link:"/#"},{name:"L3 subMenu81",link:"/#"},{name:"L3 subMenu91",link:"/#"},{name:"L3 subMenu11",link:"/#"}]},{name:"RPG L2 subMenu2",link:"/#"},{name:"RPG L2 subMenu3",link:"/#",subMenu:[{name:"L3 subMenu13",link:"/#"},{name:"L3 subMenu23",link:"/#"},{name:"L3 subMenu33",link:"/#"},{name:"L3 subMenu43",link:"/#"},{name:"L3 subMenu53",link:"/#"},{name:"L3 subMenu63",link:"/#"},{name:"L3 subMenu73",link:"/#"},{name:"L3 subMenu83",link:"/#"},{name:"L3 subMenu93",link:"/#"},{name:"L3 subMenu13",link:"/#"}]},{name:"RPG L2 subMenu4",link:"/#"},{name:"RPG L2 subMenu5",link:"/#",subMenu:[{name:"L3 subMenu15",link:"/#"},{name:"L3 subMenu25",link:"/#"},{name:"L3 subMenu35",link:"/#"},{name:"L3 subMenu45",link:"/#"},{name:"L3 subMenu55",link:"/#"},{name:"L3 subMenu65",link:"/#"},{name:"L3 subMenu75",link:"/#"},{name:"L3 subMenu85",link:"/#"},{name:"L3 subMenu95",link:"/#"},{name:"L3 subMenu15",link:"/#"}]},{name:"RPG L2 subMenu6",link:"/#",subMenu:[{name:"L3 subMenu16",link:"/#"},{name:"L3 subMenu26",link:"/#"},{name:"L3 subMenu36",link:"/#"},{name:"L3 subMenu46",link:"/#"},{name:"L3 subMenu56",link:"/#"},{name:"L3 subMenu66",link:"/#"},{name:"L3 subMenu76",link:"/#"},{name:"L3 subMenu86",link:"/#"},{name:"L3 subMenu96",link:"/#"},{name:"L3 subMenu16",link:"/#"}]},{name:"RPG L2 subMenu7",link:"/#",subMenu:[{name:"L3 subMenu17",link:"/#"},{name:"L3 subMenu27",link:"/#"},{name:"L3 subMenu37",link:"/#"},{name:"L3 subMenu47",link:"/#"},{name:"L3 subMenu57",link:"/#"},{name:"L3 subMenu67",link:"/#"},{name:"L3 subMenu77",link:"/#"},{name:"L3 subMenu87",link:"/#"},{name:"L3 subMenu97",link:"/#"},{name:"L3 subMenu17",link:"/#"}]},{name:"RPG L2 subMenu8",link:"/#",subMenu:[{name:"L3 subMenu18",link:"/#"},{name:"L3 subMenu28",link:"/#"},{name:"L3 subMenu38",link:"/#"},{name:"L3 subMenu48",link:"/#"},{name:"L3 subMenu58",link:"/#"},{name:"L3 subMenu68",link:"/#"},{name:"L3 subMenu78",link:"/#"},{name:"L3 subMenu88",link:"/#"},{name:"L3 subMenu98",link:"/#"},{name:"L3 subMenu18",link:"/#"}]},{name:"RPG L2 subMenu9",link:"/#",subMenu:[{name:"L3 subMenu19",link:"/#"},{name:"L3 subMenu29",link:"/#"},{name:"L3 subMenu39",link:"/#"},{name:"L3 subMenu49",link:"/#"},{name:"L3 subMenu59",link:"/#"},{name:"L3 subMenu69",link:"/#"},{name:"L3 subMenu79",link:"/#"},{name:"L3 subMenu89",link:"/#"},{name:"L3 subMenu99",link:"/#"},{name:"L3 subMenu19",link:"/#"}]},{name:"RPG L2 subMenu10",link:"/#",subMenu:[{name:"L3 subMenu10",link:"/#"},{name:"L3 subMenu20",link:"/#"},{name:"L3 subMenu30",link:"/#"},{name:"L3 subMenu40",link:"/#"},{name:"L3 subMenu50",link:"/#"},{name:"L3 subMenu60",link:"/#"},{name:"L3 subMenu70",link:"/#"},{name:"L3 subMenu80",link:"/#"},{name:"L3 subMenu90",link:"/#"},{name:"L3 subMenu10",link:"/#"}]}]},{name:"Sports",link:"/sports",subMenu:[{name:"Sports L2 subMenu1",link:"/#"},{name:"Sports L2 subMenu2",link:"/#"},{name:"Sports L2 subMenu3",link:"/#"},{name:"Sports L2 subMenu4",link:"/#"},{name:"Sports L2 subMenu5",link:"/#"},{name:"Sports L2 subMenu6",link:"/#"},{name:"Sports L2 subMenu7",link:"/#"},{name:"Sports L2 subMenu8",link:"/#"},{name:"Sports L2 subMenu9",link:"/#"},{name:"Sports L2 subMenu10",link:"/#"}]},{name:"Simulation",link:"/Simulation",subMenu:[{name:"Simu L2 subMenu1",link:"/#"},{name:"Simu L2 subMenu2",link:"/#"},{name:"Simu L2 subMenu3",link:"/#"},{name:"Simu L2 subMenu4",link:"/#"},{name:"Simu L2 subMenu5",link:"/#"},{name:"Simu L2 subMenu6",link:"/#"},{name:"Simu L2 subMenu7",link:"/#"},{name:"Simu L2 subMenu8",link:"/#"},{name:"Simu L2 subMenu9",link:"/#"},{name:"Simu L2 subMenu10",link:"/#"}]},{name:"Strategy",link:"/Strategy",subMenu:[{name:"Stgy L2 subMenu1",link:"/#"},{name:"Stgy L2 subMenu2",link:"/#"},{name:"Stgy L2 subMenu3",link:"/#"},{name:"Stgy L2 subMenu4",link:"/#"},{name:"Stgy L2 subMenu5",link:"/#"},{name:"Stgy L2 subMenu6",link:"/#"},{name:"Stgy L2 subMenu7",link:"/#"},{name:"Stgy L2 subMenu8",link:"/#"},{name:"Stgy L2 subMenu9",link:"/#"},{name:"Stgy L2 subMenu10",link:"/#"}]},{name:"About",link:"/about"}]);return{insertCode:l,importCode:s,templateCode:m,tableProps:n,menuProps:k}}},H=u("h3",null,"Flyout Menu",-1),q=u("p",null," Flyout Menu is a navigation of infinite layers menu. It can predict user's intention, prevent unwanted item highlighted. ",-1),N=u("p",null,"Mobile view work in progress.",-1),$=u("h5",null,"Demo:",-1),O={class:"demo-wrapper"},V=u("h5",null,"Usage:",-1),U=u("h6",null,"Insert component:",-1),z=u("h6",null,"Import:",-1),J=u("h6",null,"Apply in template\uFF1A",-1);function K(l,s,m,n,k,c){const a=d("FlyoutMenu"),t=d("DataTable"),i=d("highlightjs"),e=d("FooterMessage");return M(),b(p,null,[H,q,N,$,u("div",O,[o(a,{"menu-props":n.menuProps},null,8,["menu-props"])]),o(t,{"table-props":n.tableProps},null,8,["table-props"]),V,U,o(i,{language:"html",code:n.insertCode},null,8,["code"]),z,o(i,{language:"js",code:n.importCode},null,8,["code"]),J,o(i,{language:"js",code:n.templateCode},null,8,["code"]),o(e)],64)}var Z=v(E,[["render",K]]);export{Z as default};
