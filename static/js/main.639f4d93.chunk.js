(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),s=c(5),a=(c(20),c(21),c(2)),r=(c(22),c(6)),j=c.n(r),i=c(0),l=function(e){var t=e.title,c=e.to;return Object(i.jsx)(s.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:c,children:t})},o=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(l,{title:"Home",to:"/"}),Object(i.jsx)(l,{title:"People",to:"/people"})]})})})},b=c(8),d=c(11),h=c(4),O=c(1),x=function(e){var t=e.person,c=e.personSlug,n=t.name,a=t.sex,r=t.born,l=t.died,o=t.motherName,b=t.fatherName,d=t.slug,h=c===d;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":h}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(s.b,{to:"/people/".concat(d),className:j()({"has-text-danger":"f"===a}),children:n})}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:o||"-"}),Object(i.jsx)("td",{children:b||"-"})]},d)},p=function(e){var t=e.people,c=e.personSlug;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(x,{person:e,personSlug:c},e.slug)}))})]})};function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(24);var m=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},f=function(){var e=Object(O.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(O.useState)(!1),r=Object(h.a)(s,2),j=r[0],l=r[1],o=Object(a.h)().personSlug,x=void 0===o?"":o,f=Object(O.useCallback)(Object(d.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,u();case 3:t=e.sent,n(t),l(!1);case 6:case"end":return e.stop()}}),e)}))),[]);return Object(O.useEffect)((function(){f()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)(p,{people:c,personSlug:x}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[j&&Object(i.jsx)(m,{}),!c&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})]})})]})},v=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},g=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},N=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(a.d,{children:[Object(i.jsx)(a.b,{path:"/",element:Object(i.jsx)(v,{})}),Object(i.jsx)(a.b,{path:"home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})}),Object(i.jsxs)(a.b,{path:"/people",children:[Object(i.jsx)(a.b,{index:!0,element:Object(i.jsx)(f,{})}),Object(i.jsx)(a.b,{path:"/people/:personSlug",element:Object(i.jsx)(f,{})})]}),Object(i.jsx)(a.b,{path:"*",element:Object(i.jsx)(g,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(s.a,{children:Object(i.jsx)(N,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.639f4d93.chunk.js.map