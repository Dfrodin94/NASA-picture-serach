(this["webpackJsonpspace-picture-search"]=this["webpackJsonpspace-picture-search"]||[]).push([[0],{64:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(13),s=c.n(a),i=c(36),r=c(3),o=c(38),j=c(10),l=c(31),b=c.n(l),u=c(1),p=Object(n.createContext)(null),h=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(j.a)(c,2),s=a[0],i=a[1];return Object(u.jsx)(p.Provider,{value:[s,i],children:t})},d=c(88);c(64);function O(){var e=Object(n.useContext)(p),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(j.a)(s,2),r=i[0],l=i[1],h=Object(n.useState)({}),O=Object(j.a)(h,2),m=O[0],x=O[1],g=Object(n.useState)(!1),v=Object(j.a)(g,2),f=v[0],_=v[1];return Object(n.useEffect)((function(){var e="https://api.nasa.gov/planetary/apod?date=".concat(r,"&api_key=").concat("Iq9MemSuUlX8W6T4TKpGPp2hzFEIHOcPdmc03OuJ");b.a.get(e).then((function(e){x(e.data)})).catch((function(e){console.log(e,"failed to fetch data")}))}),[f]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("main",{className:"home__wrapper",children:[Object(u.jsx)("form",{children:Object(u.jsx)("input",{type:"date",onChange:function(e){l(e.target.value)},value:r})}),Object(u.jsxs)("div",{className:"button__container",children:[Object(u.jsx)(d.a,{variant:"contained",color:"primary",size:"small",onClick:function(e){_((function(e){return!e})),e.preventDefault()},children:"Submit"}),Object(u.jsx)(d.a,{variant:"contained",color:"primary",size:"small",onClick:function(e){var t={date:m.date,title:m.title,picture:m.url,copyright:m.copyright};a((function(e){return[].concat(Object(o.a)(e),[t])})),console.log(c),e.preventDefault()},children:"Save"})]}),Object(u.jsxs)("div",{className:"item__wrapper",children:[Object(u.jsx)("h1",{children:m.title}),Object(u.jsx)("hr",{className:"item__line"}),Object(u.jsx)("a",{href:m.url,target:"_blank",children:Object(u.jsx)("img",{className:"picture",src:m.url,alt:""})}),Object(u.jsx)("p",{className:"item__paragraph-main",children:m.explanation}),Object(u.jsxs)("p",{children:["Copyright: ",m.copyright]}),Object(u.jsx)("p",{children:m.date})]})]})})}c(68);function m(e){return Object(u.jsxs)("section",{className:"post__wrapper",children:[Object(u.jsxs)("h2",{children:[e.title," "]}),Object(u.jsx)("hr",{className:"item__line"}),Object(u.jsx)("div",{className:"post-image__wrapper",children:Object(u.jsx)("img",{className:"picture",src:e.img,alt:""})}),Object(u.jsxs)("p",{children:["\xa9: ",e.copyright]})]})}var x=[{date:"2020-11-02",picture:"https://apod.nasa.gov/apod/image/2011/HalfSunProm_Colacurcio_960.jpg",title:"Half Sun with Prominence",copyright:"Rainee Colacurcio"},{date:"2020-09-28",picture:"https://apod.nasa.gov/apod/image/2009/CygnusFilament_HubbleShatz_1080.jpg",title:"Filaments of the Cygnus Loop",copyright:""},{date:"2020-03-04",picture:"https://apod.nasa.gov/apod/image/2003/NGC5394n5_gemini_960.jpg",title:"The Slow Dance of Galaxies NGC 5394 and 5395",copyright:""}];c(69);function g(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useContext)(p),i=Object(j.a)(s,2),r=i[0];i[1];return Object(u.jsxs)("main",{className:"posts__wrapper",children:[Object(u.jsxs)("div",{className:"posts-button__wrapper",children:[Object(u.jsx)(d.a,{variant:"contained",color:"primary",size:"small",classes:{label:"saved-items-button"},onClick:function(){a(!0)},children:"Editors choice "}),Object(u.jsx)(d.a,{variant:"contained",color:"primary",size:"small",classes:{label:"saved-items-button"},onClick:function(){a(!1)},children:"Saved posts "})]}),Object(u.jsx)("div",{className:"saved-items__wrapper",children:c?Object(u.jsx)(u.Fragment,{children:x.map((function(e,t){return Object(u.jsx)(m,{title:e.title,img:e.picture,copyright:e.copyright})}))}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{children:[0===r.length?"ooobs! No saved posts, please save a post":null," "]}),r.map((function(e,t){return Object(u.jsx)(m,{title:e.title,img:e.picture,copyright:e.copyright})}))]})})]})}function v(){return Object(u.jsxs)("main",{children:[Object(u.jsx)("h1",{children:"About"}),Object(u.jsx)("p",{children:"This page was made using React.js"}),Object(u.jsx)("p",{children:"Data is fetched from the NSA astronomic picture of the day API"}),Object(u.jsx)("p",{children:"Coming updates: "}),Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:"Building a node.js server and implementing authorisation"})}),Object(u.jsxs)("p",{children:["To view source code, see  ",Object(u.jsx)("a",{href:"",children:"Github"})," "]})]})}var f="/",_="/saved",N="/about",y=function(e){var t=e.children;return Object(u.jsxs)(i.a,{children:[t,Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:f,component:O}),Object(u.jsx)(r.a,{exact:!0,path:_,component:g}),Object(u.jsx)(r.a,{exact:!0,path:N,component:v}),Object(u.jsx)(r.a,{path:"*",component:function(){var e=Object(r.g)();return Object(u.jsx)("div",{children:Object(u.jsxs)("h3",{children:["No match for ",Object(u.jsx)("code",{children:e.pathname})]})})}})]})]})},C=(c(72),function(){var e=Object(r.f)(),t=Object(n.useContext)(p),c=Object(j.a)(t,2);c[0],c[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{className:"navbar--desktop",children:[Object(u.jsx)("span",{className:"navbar__logo--desktop",children:" \ud83d\udc7d "}),Object(u.jsxs)("ul",{className:"navbar__list--desktop",children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"navbar__button",onClick:function(){return e.push(N)},children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"navbar__button",onClick:function(){return e.push(f)},children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"navbar__button",onClick:function(){return e.push(_)},children:"Saved posts"})})]}),Object(u.jsx)("span",{className:"navbar__login--desktop",children:"Sign in"})]}),Object(u.jsx)("div",{className:"navbar__line"})]})}),S=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(C,{})})};c(73);function k(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h,{children:Object(u.jsx)(y,{children:Object(u.jsx)(S,{})})})})}s.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.128e68b5.chunk.js.map