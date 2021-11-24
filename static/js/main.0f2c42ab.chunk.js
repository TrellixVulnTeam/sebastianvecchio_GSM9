(this["webpackJsonpsebastianvecchio.github.io"]=this["webpackJsonpsebastianvecchio.github.io"]||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},28:function(e,c,t){},30:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){"use strict";t.r(c);var n=t(2),o=t.n(n),r=t(15),a=t.n(r),l=(t(21),t(22),t(23),t(13)),s=t.n(l),i=t(5),b=t(16),j=t.n(b),u=t(4),h=t(12),d=(t(28),t(0)),f=function(){var e=Object(n.useState)("0%"),c=Object(i.a)(e,2),t=c[0],o=c[1],r=function(){return o("0%"===t?"100%":"0%")};return Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{children:"Sebastian Vecchio"}),Object(d.jsx)("h2",{children:Object(d.jsx)(j.a,{options:{cursor:"\u2588",strings:["Junior FullStack Developer with Node.js & React."],deleteSpeed:40,autoStart:!0,loop:!0}})}),Object(d.jsx)("span",{className:"btn-menu",onClick:function(){return r()},children:Object(d.jsx)(u.a,{icon:h.a})}),Object(d.jsx)("span",{className:"btn-contact",onClick:function(){return r()},children:"\ud83d\udce7 Contact me!"}),Object(d.jsxs)("nav",{className:"overlay",style:{width:t},children:[Object(d.jsx)("span",{className:"btn-close",onClick:function(){return r()},children:Object(d.jsx)(u.a,{icon:h.b,className:"icon",color:"#fff"})}),Object(d.jsxs)("div",{className:"overlay-content",children:[Object(d.jsx)("a",{href:"mailto:sebastianvecchio5@gmail.com",target:"_blank",rel:"noreferrer",children:"Gmail"}),Object(d.jsx)("a",{href:"https://github.com/totevecchio/",target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/sebastian-vecchio-68787792/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})]})]})]})},O=(t(30),function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("p",{className:"left",children:["Made by",Object(d.jsx)("a",{href:"https://www.linkedin.com/in/sebastian-vecchio-68787792/",target:"_blank",rel:"noreferrer",children:"Sebastian Vecchio"})]}),Object(d.jsx)("p",{className:"right",children:Object(d.jsxs)("a",{href:"https://github.com/totevecchio/sebastianvecchio",target:"_blank",rel:"noreferrer",children:["View the source code ",Object(d.jsx)(u.a,{icon:"code"})]})})]})})}),x=t(6),m=function(e){var c=e.resource,t=e.label,n=e.color,o=void 0===n?"black":n;return Object(d.jsxs)("div",{className:"icon-box",style:{backgroundColor:o},children:[Object(d.jsx)(u.a,{icon:c,style:{fontSize:"80px"}}),Object(d.jsx)("p",{children:t})]})},v=t(3),p=[{icon:v.a,label:"Aws",color:"#ff9900"},{icon:v.d,label:"Docker",color:"#60b6e9"},{icon:v.m,label:"Yarn",color:"#2c8ebb"},{icon:v.l,label:"SASS",color:"#cf649a"},{icon:v.i,label:"Npm",color:"#cc3534"}],w=[{icon:v.h,label:"Node",color:"#026e00"},{icon:v.k,label:"React",color:"#61dbfb"},{icon:v.f,label:"Javascript",color:"#fcdc00"},{icon:v.e,label:"HTML",color:"#e86229"},{icon:v.c,label:"CSS",color:"#2862e9"},{icon:v.b,label:"Bootstrap",color:"#7952b3"},{icon:v.j,label:"php",color:"#8892bf"},{icon:v.g,label:"Laravel",color:"#fb503b"}],N=(t(31),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"body",children:[Object(d.jsx)("h3",{children:"Frameworks, libraries, languages and tools"}),Object(d.jsx)("div",{className:"wrapper",children:[].concat(Object(x.a)(p),Object(x.a)(w)).map((function(e,c){return Object(d.jsx)(m,{resource:e.icon,label:e.label,color:e.color},"tools_".concat(c,"_").concat(e.label.toLowerCase()))}))})]})})}),g=(t(32),t(33),function(e){var c=e.children,t=e.show,o=Object(n.useState)(0),r=Object(i.a)(o,2),a=r[0],l=r[1],s=Object(n.useState)(c.length),b=Object(i.a)(s,2),j=b[0],u=b[1],h=Object(n.useState)(null),f=Object(i.a)(h,2),O=f[0],x=f[1];Object(n.useEffect)((function(){u(c.length)}),[c]);var m=function(){a<j-t&&l((function(e){return e+1}))},v=function(){a>0&&l((function(e){return e-1}))};return function(e){Object(n.useEffect)((function(){var c=setInterval(e,3e3);return function(){return clearInterval(c)}}))}((function(){l(a+2),a>j-t&&l(0)})),Object(d.jsx)("div",{className:"carousel-container",children:Object(d.jsxs)("div",{className:"carousel-wrapper",children:[a>0&&Object(d.jsx)("button",{onClick:v,className:"left-arrow",children:"<"}),Object(d.jsx)("div",{className:"carousel-content-wrapper",onTouchStart:function(e){var c=e.touches[0].clientX;x(c)},onTouchMove:function(e){if(null!==O){var c=O-e.touches[0].clientX;c>5&&m(),c<-5&&v(),x(null)}},children:Object(d.jsx)("div",{className:"carousel-content show-".concat(t),style:{transform:"translateX(-".concat(a*(100/t),"%)")},children:c})}),a<j-t&&Object(d.jsx)("button",{onClick:m,className:"right-arrow",children:">"})]})})}),k=function(){return Object(d.jsxs)("div",{className:"body",children:[Object(d.jsx)("h3",{children:"Frameworks, libraries, languages and tools"}),Object(d.jsx)(g,{show:4,children:[].concat(Object(x.a)(w),Object(x.a)(p)).map((function(e,c){return Object(d.jsx)("div",{className:"",children:Object(d.jsx)(m,{resource:e.icon,label:e.label,color:e.color},"tools_".concat(c,"_").concat(e.label.toLowerCase()))})}))})]})},S=function(){return Object(d.jsxs)("div",{className:"content-box",children:[Object(d.jsx)(f,{}),Object(d.jsx)(s.a,{maxWidth:600,children:Object(d.jsx)(N,{})}),Object(d.jsx)(s.a,{minWidth:600,children:Object(d.jsx)(k,{})}),Object(d.jsx)(O,{})]})};a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0f2c42ab.chunk.js.map