(this["webpackJsonpcrowfi-frontend"]=this["webpackJsonpcrowfi-frontend"]||[]).push([[3],{1035:function(t,e,n){var r=n(631),c=n(1043),a=n(1044),i=4294967295,o=Math.min;t.exports=function(t,e){if((t=a(t))<1||t>9007199254740991)return[];var n=i,u=o(t,i);e=c(e),t-=i;for(var s=r(u,e);++n<t;)e(n);return s}},1043:function(t,e,n){var r=n(311);t.exports=function(t){return"function"==typeof t?t:r}},1044:function(t,e,n){var r=n(632);t.exports=function(t){var e=r(t),n=e%1;return e===e?n?e-n:e:0}},1097:function(t,e,n){"use strict";var r,c,a,i=n(3),o=n.n(i),u=n(11),s=n(5),l=n(10),d=n(64),b=n(9),f=n(4),j=n(2),O=n(12),p=n(47),x=n(15),h=n(238),v=n(0),m=["onValidAddress","onAddressClick"];!function(t){t[t.NOT_VALID=0]="NOT_VALID",t[t.FOUND=1]="FOUND",t[t.NOT_FOUND=2]="NOT_FOUND"}(a||(a={}));var g=O.e.div(r||(r=Object(b.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(t){return t.theme.colors.input}),(function(t){return t.theme.colors.inputSecondary}),(function(t){return t.theme.radii.default}),(function(t){return t.theme.radii.default}),(function(t){return t.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),F=Object(O.e)(j.uc)(c||(c=Object(b.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),k={isFetching:!1,resultFound:a.NOT_VALID,value:""},w=function(){return Promise.resolve(!0)};e.a=function(t){var e=t.onValidAddress,n=void 0===e?w:e,r=t.onAddressClick,c=Object(d.a)(t,m),i=Object(f.useState)(k),b=Object(l.a)(i,2),O=b[0],A=b[1],y=Object(x.b)().t,N=O.isFetching,D=O.resultFound,I=O.value;return Object(f.useEffect)((function(){var t=!1!==Object(p.i)(I),e=function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,A((function(t){return Object(s.a)(Object(s.a)({},t),{},{isFetching:!0})})),t.next=4,n(I);case 4:e=t.sent,A((function(t){return Object(s.a)(Object(s.a)({},t),{},{isFetching:!1,resultFound:e?a.FOUND:a.NOT_FOUND})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),A((function(t){return Object(s.a)(Object(s.a)({},t),{},{isFetching:!1})}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t?e():A((function(t){return Object(s.a)(Object(s.a)({},t),{},{resultFound:a.NOT_VALID})}))}),[I,n,A]),Object(v.jsxs)(j.o,Object(s.a)(Object(s.a)({position:"relative"},c),{},{children:[Object(v.jsx)(j.jb,{placeholder:y("Search %subject%",{subject:y("Address").toLowerCase()}),value:O.value,onChange:function(t){var e=t.target.value;A((function(t){return Object(s.a)(Object(s.a)({},t),{},{value:e})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),N&&Object(v.jsx)(j.o,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(v.jsx)(h.a,{})}),Object(v.jsx)(g,{isOpen:D!==a.NOT_VALID,children:D===a.FOUND?Object(v.jsx)(F,{onClick:function(){A(k),r(O.value)},children:O.value}):Object(v.jsx)(j.uc,{px:"16px",fontWeight:"bold",children:y("No results found.")})})]}))}},1115:function(t,e,n){"use strict";var r=n(5),c=(n(4),n(466)),a=n(114),i=n(0);e.a=function(t){var e=Object(a.a)().theme.isDark?"linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)":"linear-gradient(111.68deg, #f2ecf2 0%, #e8f2f6 100%)";return Object(i.jsx)(c.a,Object(r.a)({background:e},t))}},1116:function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));var r=n(3),c=n.n(r),a=n(5),i=n(11),o=n(10),u=n(4),s=n(81),l=n(120),d=function(){var t=Object(u.useState)({isFetching:!1,data:null}),e=Object(o.a)(t,2),n=e[0],r=e[1];return Object(u.useEffect)((function(){var t=function(){var t=Object(i.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r((function(t){return Object(a.a)(Object(a.a)({},t),{},{isFetching:!0})})),t.next=3,Object(s.g)(l.b);case 3:e=t.sent,r({isFetching:!1,data:e.data});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[r]),n};e.a=function(t){var e=Object(u.useState)({isFetching:!1,data:null}),n=Object(o.a)(e,2),r=n[0],l=n[1];return Object(u.useEffect)((function(){var e=function(){var e=Object(i.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l((function(t){return Object(a.a)(Object(a.a)({},t),{},{isFetching:!0})})),e.next=3,Object(s.g)(t);case 3:n=e.sent,l({isFetching:!1,data:n.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,l]),r}},1153:function(t,e,n){"use strict";var r,c=n(9),a=n(12).e.div.attrs((function(t){return{alt:t.alt}}))(r||(r=Object(c.a)(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n  border: 4px "," solid;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])),(function(t){return t.src}),(function(t){return t.borderColor||"#f2ecf2"}));e.a=a},1154:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r,c=n(9),a=n(5),i=n(64),o=(n(4),n(12)),u=n(2),s=n(0),l=["title","stat"],d=function(t){var e=t.title,n=t.stat,r=Object(i.a)(t,l);return Object(s.jsxs)(u.o,Object(a.a)(Object(a.a)({},r),{},{children:[Object(s.jsx)(u.uc,{fontSize:"12px",color:"textSubtle",textAlign:"center",children:e}),null===n?Object(s.jsx)(u.cc,{height:"24px",width:"50%",mx:"auto"}):Object(s.jsx)(u.uc,{fontWeight:"600",textAlign:"center",children:n})]}))},b=Object(o.e)(u.ab)(r||(r=Object(c.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  justify-content: space-around;\n  padding: 8px;\n  width: 100%;\n"])),(function(t){return t.theme.colors.invertedContrast}),(function(t){return t.theme.colors.cardBorder}),(function(t){return t.theme.radii.card}));e.b=b},1233:function(t,e,n){"use strict";var r=n(5),c=(n(4),n(89)),a=n(1097),i=n(120),o=n(0);e.a=function(t){var e=Object(c.g)();return Object(o.jsx)(a.a,Object(r.a)({onAddressClick:function(t){e.push("".concat(i.a,"/profile/").concat(t))}},t))}},1234:function(t,e,n){"use strict";var r=n(5),c=n(64),a=(n(4),n(2)),i=n(0),o=["title","description","children"];e.a=function(t){var e=t.title,n=t.description,u=t.children,s=Object(c.a)(t,o);return Object(i.jsxs)(a.bb,Object(r.a)(Object(r.a)({gridGap:"16px",alignItems:"center",gridTemplateColumns:["1fr",null,null,null,"repeat(2, 1fr)"]},s),{},{children:[Object(i.jsxs)(a.o,{children:[Object(i.jsx)(a.cb,{as:"h1",scale:"xl",color:"secondary",mb:"16px",children:e}),n]}),Object(i.jsx)(a.o,{children:u})]}))}},1236:function(t,e,n){"use strict";var r,c=n(9),a=n(2),i=n(12),o=Object(i.e)(a.mc)(r||(r=Object(c.a)(["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"])),(function(t){return t.theme.colors.cardBorder}));e.a=o},1245:function(t,e,n){"use strict";var r,c=n(5),a=n(64),i=(n(4),n(2)),o=n(9),u=n(12).e.div.attrs((function(t){return{alt:t.alt}}))(r||(r=Object(o.a)(["\n  ",";\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 100%;\n  border-radius: 32px;\n  height: 123px;\n\n  "," {\n    height: 192px;\n  }\n\n  "," {\n    height: 256px;\n  }\n"])),(function(t){var e=t.src,n=t.theme;return e?"background-image: url('".concat(e,"')"):"background-color: ".concat(n.colors.cardBorder)}),(function(t){return t.src}),(function(t){return t.theme.mediaQueries.sm}),(function(t){return t.theme.mediaQueries.md})),s=n(0),l=["bannerImage","bannerAlt","avatar","children"];e.a=function(t){var e=t.bannerImage,n=t.bannerAlt,r=t.avatar,o=t.children,d=Object(a.a)(t,l);return Object(s.jsx)(i.ab,Object(c.a)(Object(c.a)({flexDirection:"column",mb:"24px"},d),{},{children:Object(s.jsxs)(i.o,{position:"relative",pb:"56px",children:[Object(s.jsx)(u,{src:e,alt:n}),Object(s.jsx)(i.o,{position:"absolute",bottom:0,left:-4,children:Object(s.jsxs)(i.ab,{alignItems:"flex-end",children:[r,o]})})]})}))}},1418:function(t,e,n){var r=n(472),c=n(1942);t.exports=function(t){return c(r(t).toLowerCase())}},1419:function(t,e){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return n.test(t)}},1423:function(t,e,n){"use strict";var r,c=n(4),a=n(89),i=n(2),o=n(42),u=n(15),s=n(305),l=n(1115),d=n(1234),b=n(1154),f=n(1245),j=n(1153),O=n(1236),p=n(120),x=n(9),h=n(132),v=n(12),m=n(1233),g=n(0),F=Object(v.e)(h.a)(r||(r=Object(x.a)(["\n  align-items: center;\n  color: ",";\n  display: inline-flex;\n  font-weight: 600;\n"])),(function(t){return t.theme.colors.primary})),k=function(){var t=Object(u.b)().t;return Object(g.jsxs)(i.ab,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[Object(g.jsxs)(F,{to:"".concat(p.a,"/collections"),children:[Object(g.jsx)(i.L,{color:"primary",width:"24px"}),t("All Collections")]}),Object(g.jsx)(i.o,{children:Object(g.jsx)(m.a,{})})]})},w=n(5),A=n(3),y=n.n(A),N=n(11),D=n(10),I=n(64),C=n(81),L=["collectionAddress"],S=function(t){var e=t.collectionAddress,n=Object(I.a)(t,L),r=Object(c.useState)(null),a=Object(D.a)(r,2),i=a[0],o=a[1],s=Object(u.b)().t;Object(c.useEffect)((function(){var t=function(){var t=Object(N.a)(y.a.mark((function t(){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.m)(e);case 2:n=t.sent,o(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e,o]);var l=null===i?null:i.toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3});return Object(g.jsx)(b.a,Object(w.a)({title:s("Lowest (%symbol%)",{symbol:"BNB"}),stat:l},n))};e.a=function(t){var e=t.collection,n=Object(a.i)().collectionAddress,r=e.totalSupply,c=e.numberTokensListed,x=e.totalVolumeBNB,h=e.banner,v=e.avatar,m=Object(u.b)().t,F=Object(a.h)(),w=F.pathname,A=F.hash,y=x?parseFloat(x).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}):"0",N=[{label:m("Items"),href:"".concat(p.a,"/collections/").concat(n,"#items")},{label:m("Traits"),href:"".concat(p.a,"/collections/").concat(n,"#traits")}];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(l.a,{children:[Object(g.jsx)(k,{}),Object(g.jsx)(f.a,{bannerImage:h.large,avatar:Object(g.jsx)(j.a,{src:v})}),Object(g.jsx)(d.a,{title:e.name,description:e.description?Object(g.jsx)(i.uc,{color:"textSubtle",children:m(e.description)}):null,children:Object(g.jsxs)(b.b,{children:[Object(g.jsx)(b.a,{title:m("Items"),stat:Object(o.d)(Number(r),0,0)}),Object(g.jsx)(b.a,{title:m("Items listed"),stat:c?Object(o.d)(Number(c),0,0):"0"}),Object(g.jsx)(S,{collectionAddress:e.address}),Object(g.jsx)(b.a,{title:m("Vol. (%symbol%)",{symbol:"BNB"}),stat:y})]})})]}),Object(g.jsx)(s.a,{children:Object(g.jsx)(O.a,{items:N,activeItem:"".concat(w).concat(A||"#items"),mt:"24px",mb:"8px"})})]})}},1942:function(t,e,n){var r=n(1943)("toUpperCase");t.exports=r},1943:function(t,e,n){var r=n(1944),c=n(1419),a=n(1946),i=n(472);t.exports=function(t){return function(e){e=i(e);var n=c(e)?a(e):void 0,o=n?n[0]:e.charAt(0),u=n?r(n,1).join(""):e.slice(1);return o[t]()+u}}},1944:function(t,e,n){var r=n(1945);t.exports=function(t,e,n){var c=t.length;return n=void 0===n?c:n,!e&&n>=c?t:r(t,e,n)}},1945:function(t,e){t.exports=function(t,e,n){var r=-1,c=t.length;e<0&&(e=-e>c?0:c+e),(n=n>c?c:n)<0&&(n+=c),c=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(c);++r<c;)a[r]=t[r+e];return a}},1946:function(t,e,n){var r=n(1947),c=n(1419),a=n(1948);t.exports=function(t){return c(t)?a(t):r(t)}},1947:function(t,e){t.exports=function(t){return t.split("")}},1948:function(t,e){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",c="\\ud83c[\\udffb-\\udfff]",a="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+r+"|"+c+")"+"?",s="[\\ufe0e\\ufe0f]?",l=s+u+("(?:\\u200d(?:"+[a,i,o].join("|")+")"+s+u+")*"),d="(?:"+[a+r+"?",r,i,o,n].join("|")+")",b=RegExp(c+"(?="+c+")|"+d+l,"g");t.exports=function(t){return t.match(b)||[]}}}]);
//# sourceMappingURL=3.ac22c222.chunk.js.map