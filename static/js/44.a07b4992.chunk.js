(this["webpackJsonpcrowfi-frontend"]=this["webpackJsonpcrowfi-frontend"]||[]).push([[44],{1974:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var i,o=n(10),c=n(9),r=n(4),u=n(12),l=n(2),d=n(132),s=n(15),a=n(27),j=n(474),b=n(130),O=n(131),x=n(58),f=n(275),h=n(232),p=n(317),m=n(0),v=Object(u.e)(l.z)(i||(i=Object(c.a)(["\n  background-color: ",";\n"])),(function(t){return t.theme.colors.input}));function k(){var t=Object(a.a)().account,e=Object(s.b)().t,n=Object(x.k)(),i=Object(r.useMemo)((function(){return n.map((function(t){return{liquidityToken:Object(x.a)(t),tokens:t}}))}),[n]),c=Object(r.useMemo)((function(){return i.map((function(t){return t.liquidityToken}))}),[i]),u=Object(b.f)(null!==t&&void 0!==t?t:void 0,c),k=Object(o.a)(u,2),y=k[0],g=k[1],q=Object(r.useMemo)((function(){return i.filter((function(t){var e,n=t.liquidityToken;return null===(e=y[n.address])||void 0===e?void 0:e.greaterThan("0")}))}),[i,y]),w=Object(O.c)(q.map((function(t){return t.tokens}))),A=g||(null===w||void 0===w?void 0:w.length)<q.length||(null===w||void 0===w?void 0:w.some((function(t){return!t}))),T=w.map((function(t){return Object(o.a)(t,2)[1]})).filter((function(t){return Boolean(t)}));return Object(m.jsx)(p.a,{children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(h.b,{title:e("Your Liquidity"),subtitle:e("Remove liquidity to receive tokens back")}),Object(m.jsxs)(v,{children:[t?A?Object(m.jsx)(l.uc,{color:"textSubtle",textAlign:"center",children:Object(m.jsx)(f.a,{children:e("Loading")})}):(null===T||void 0===T?void 0:T.length)>0?T.map((function(t,e){return Object(m.jsx)(j.b,{pair:t,mb:e<T.length-1?"16px":0},t.liquidityToken.address)})):Object(m.jsx)(l.uc,{color:"textSubtle",textAlign:"center",children:e("No liquidity found.")}):Object(m.jsx)(l.uc,{color:"textSubtle",textAlign:"center",children:e("Connect to a wallet to view your liquidity.")}),t&&!A&&Object(m.jsxs)(l.ab,{flexDirection:"column",alignItems:"center",mt:"24px",children:[Object(m.jsx)(l.uc,{color:"textSubtle",mb:"8px",children:e("Don't see a pool you joined?")}),Object(m.jsx)(l.t,{id:"import-pool-link",variant:"secondary",scale:"sm",as:d.a,to:"/find",children:e("Find other LP tokens")})]})]}),Object(m.jsx)(l.A,{style:{textAlign:"center"},children:Object(m.jsx)(l.t,{id:"join-pool-button",as:d.a,to:"/add",width:"100%",startIcon:Object(m.jsx)(l.a,{color:"white"}),children:e("Add Liquidity")})})]})})}}}]);
//# sourceMappingURL=44.a07b4992.chunk.js.map