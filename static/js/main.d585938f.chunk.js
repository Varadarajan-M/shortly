(this["webpackJsonpreact-url-shortner-landing-page"]=this["webpackJsonpreact-url-shortner-landing-page"]||[]).push([[0],{100:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(32),a=n.n(c),r=(n(100),n(139)),i=n(137),l=n(144),o=n(140),d=n(92),j=n(1);var u=function(){return Object(j.jsx)(r.a,{expand:"lg",children:Object(j.jsxs)(i.a,{className:"p-3",fluid:!0,children:[Object(j.jsx)(r.a.Brand,{children:"Shortly"}),Object(j.jsx)(r.a.Toggle,{"aria-controls":"navbar"}),Object(j.jsxs)(r.a.Collapse,{id:"navbar",children:[Object(j.jsxs)(l.a,{id:"navbar",className:"ms-lg-4",children:[Object(j.jsx)(l.a.Link,{children:"Features"}),Object(j.jsx)(l.a.Link,{children:"Pricing"}),Object(j.jsx)(l.a.Link,{children:"Resources"})]}),Object(j.jsx)(o.a.Divider,{className:"navigation-divider"}),Object(j.jsxs)(l.a,{className:"action-buttons",children:[Object(j.jsx)(l.a.Link,{children:Object(j.jsx)(d.a,{className:"auth-btns login",children:"Login"})}),Object(j.jsx)(l.a.Link,{children:Object(j.jsx)(d.a,{className:"auth-btns signup",children:"Sign Up"})})]})]})]})})},b=n.p+"static/media/illustration-working.c9b5ef54.svg",h=n(142);var x=function(){return Object(j.jsxs)("section",{className:"d-flex showcase-banner align-items-center my-5",children:[Object(j.jsx)("div",{className:"d-flex get-started ",children:Object(j.jsxs)("div",{className:"banner-content",children:[Object(j.jsxs)("h1",{children:[" ","More than just ",Object(j.jsx)("br",{})," shorter links"," "]}),Object(j.jsxs)("p",{children:["Build your brand\u2019s recognition and get detailed",Object(j.jsx)("br",{})," insights on how your links are performing."]}),Object(j.jsx)(d.a,{className:"get-started-btn",children:"Get Started"})]})}),Object(j.jsx)("div",{className:"banner-image d-flex",children:Object(j.jsx)(h.a,{children:Object(j.jsx)(h.a.Image,{src:b})})})]})},m=n(41),O=n.n(m),p=n(42),v=n(67),g=n(7),f=n(143),N=n(141),k=n(93),w=n(2),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET";return Object(w.a)({method:t,mode:"cors"},"GET"!==t&&Object.keys(e).length>0&&{body:JSON.stringify(e)})},S=function(){var e=Object(v.a)(O.a.mark((function e(t){var n,s,c,a=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.prev=1,e.next=4,fetch(t,n);case 4:return s=e.sent,e.next=7,s.json();case 7:return c=e.sent,e.abrupt("return",{status:s.status,data:c});case 11:e.prev=11,e.t0=e.catch(1),console.log("Something went wrong ".concat(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),L=function(e,t){localStorage.setItem(e,JSON.stringify(t))},C=function(e){var t=localStorage.getItem(e);return void 0!==t||null!==t?JSON.parse(t):null};var B=function(){var e,t=Object(s.useRef)(null),n=Object(s.useState)(-1),c=Object(g.a)(n,2),a=c[0],r=c[1],i=Object(s.useState)(!1),l=Object(g.a)(i,2),o=l[0],u=l[1],b=Object(s.useState)(null!==(e=C("urlList"))&&void 0!==e?e:[]),h=Object(g.a)(b,2),x=h[0],m=h[1],w=function(){var e=Object(v.a)(O.a.mark((function e(){var n,s,c,a,r,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.current.value.trim().length>0)){e.next=9;break}return u(!0),s="https://api.shrtco.de/v2/shorten?url=".concat(t.current.value),e.next=5,S(s,y({},"POST"));case 5:(null===(c=e.sent)||void 0===c||null===(n=c.data)||void 0===n?void 0:n.ok)?(i={orginalLink:null===(a=c.data)||void 0===a?void 0:a.result.original_link,shortenedLink:null===(r=c.data)||void 0===r?void 0:r.result.full_short_link},m((function(e){return[i].concat(Object(p.a)(null!==e&&void 0!==e?e:{}))})),t.current.value=""):alert("Please Enter Valid URL"),e.next=10;break;case 9:alert("URL Cannot be empty");case 10:u(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(v.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(t),e.prev=1,e.next=4,navigator.clipboard.writeText(n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert("Something went wrong");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),R=function(e){return a===e};return Object(s.useEffect)((function(){L("urlList",x)}),[x]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"url-form-card w-75",children:Object(j.jsx)(f.a,{className:"w-100 input-card p-5 mt-n5",children:Object(j.jsxs)(N.a.Group,{className:"d-flex group",children:[Object(j.jsx)(k.a,{ref:t,placeholder:"Shorten a link here..."}),Object(j.jsx)(d.a,{onClick:w,className:"ms-2 shorten-btn",children:"Shorten it!"})]})})}),o&&Object(j.jsx)("div",{className:"text-danger w-50 p-3 text-center processing-text",children:"Shortening your URL Please wait..."}),x.length>0&&Object(j.jsx)("div",{className:"shortened-urls w-75 mx-3",children:x.map((function(e,t){return Object(j.jsxs)(f.a,{className:"shadow-md url-card",children:[Object(j.jsx)("div",{className:"p long-link",children:e.orginalLink}),Object(j.jsx)("div",{className:"p short-link",children:e.shortenedLink}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return B(t,e.shortenedLink)},className:"copy-btn",style:{background:R(t)?"black":""},children:R(t)?"Copied!":"Copy"})})]})}))})]})};var R=function(){return Object(j.jsxs)("div",{className:"statistics-label",children:[Object(j.jsx)("div",{className:"title h4",children:"Advanced Statistics"}),Object(j.jsx)("div",{className:"sub h6",children:"Track how your links are performing across the web with our advanced statistics dashboard."})]})},G=n.p+"static/media/icon-brand-recognition.c349d3b6.svg",I=n.p+"static/media/icon-detailed-records.265c8aea.svg",T=n.p+"static/media/icon-fully-customizable.a1532a74.svg";var E=function(){var e=[{icon:G,title:"Brand Recognition",desc:"Boost your brand recognition with each click. Generic links don\u2019t mean a thing.Branded links help instil confidence in your content."},{icon:I,title:"Detailed Records",desc:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."},{icon:T,title:"Fully Customizable",desc:"Improve brand awareness and content discoverability through customizable links,supercharging audience engagement"}];return Object(j.jsx)("div",{className:"stats-cards d-flex my-0 p-5 justify-content-between",children:e.map((function(e,t){return Object(j.jsxs)(f.a,{className:"stat-card shadow-md p-4 pt-5 mx-3 ".concat(t>0&&"stat-card-".concat(t+1)),children:[Object(j.jsx)("div",{className:"icon-wrapper",children:Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(h.a,{children:Object(j.jsx)(h.a.Image,{src:e.icon})})})}),Object(j.jsx)("div",{className:"stat-text",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h5",{children:e.title}),Object(j.jsx)("p",{children:e.desc})]})})]},t)}))})};var J=function(){return Object(j.jsx)("section",{className:"advertise d-flex flex-column justify-content-center align-items-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{className:"text-white fw-bolder mt-4",children:"Boost your links today"}),Object(j.jsx)(d.a,{className:"get-started-btn mt-3",children:"Get Started"})]})})},A=n(138),F=n(94),P=n.p+"static/media/icon-facebook.229c75a0.svg",U=n.p+"static/media/icon-instagram.df587328.svg",z=n.p+"static/media/icon-pinterest.a2d25ab4.svg",D=n.p+"static/media/icon-twitter.1d5c6d5e.svg";var _=function(){var e=[P,U,z,D];return Object(j.jsxs)("footer",{className:"w-100 footer p-5 bg-dark",children:[Object(j.jsx)("div",{className:"brand",children:Object(j.jsx)("h5",{className:"text-white",children:"Shortly"})}),[{title:"Features",list:["Link Shortening","Branded Links","Analytics"]},{title:"Resources",list:["Blog","Developers","Support"]},{title:"Company",list:["About","Our Team","Carrers","Contact"]}].map((function(e){return Object(j.jsx)("div",{className:"footer-sections",children:Object(j.jsx)("div",{className:"footer-list",children:Object(j.jsxs)(A.a,{as:"ul",children:[Object(j.jsx)(F.a,{as:"li",className:"footer-list-title",children:e.title}),e.list.map((function(e){return Object(j.jsx)(F.a,{as:"li",className:"footer-list-item",children:e})}))]})})})})),Object(j.jsx)("div",{className:"social-icons d-flex justify-content-evenly mt-3",children:e.map((function(e){return Object(j.jsx)(h.a,{children:Object(j.jsx)(h.a.Image,{src:e,height:"15px",width:"15px"})})}))})]})};var K=function(){return Object(j.jsxs)("section",{className:"App hero",children:[Object(j.jsxs)("section",{className:"my-2 top-section",children:[Object(j.jsx)(u,{}),Object(j.jsx)(x,{})]}),Object(j.jsxs)("section",{className:"adv-statistics w-100 d-flex justify-content-center",children:[Object(j.jsx)(B,{}),Object(j.jsx)(R,{}),Object(j.jsx)(E,{})]}),Object(j.jsxs)("section",{children:[Object(j.jsx)(J,{}),Object(j.jsx)(_,{})]})]})};n(107),n(108);a.a.render(Object(j.jsx)(K,{}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.d585938f.chunk.js.map