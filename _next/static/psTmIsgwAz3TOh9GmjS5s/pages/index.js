(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4b23":function(e,t,n){var r=self.crypto||self.msCrypto;e.exports=function(e){e=e||21;for(var t="",n=r.getRandomValues(new Uint8Array(e));0<e--;)t+="Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-"[63&n[e]];return t}},H0SL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("cMU6");return{page:e.default||e}}])},cMU6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("doui"),c=(n("17x9"),n("vOnD")),a=Object(c.css)(["border-radius:50%;overflow:hidden;"]),u=c.default.div.withConfig({componentId:"sc-1ct83iv-0"})(["padding:",";background-color:rgba(255,255,255,.6);",""],function(e){return e.theme.space.small},function(e){return e.rounded&&a}),l=c.default.div.withConfig({componentId:"sc-1ct83iv-1"})(["width:100%;padding-top:50%;padding-bottom:50%;position:relative;",""],function(e){return e.rounded&&a}),s=c.default.img.withConfig({componentId:"sc-1ct83iv-2"})(["position:absolute;top:0;left:0;bottom:0;right:0;height:100%;"]);function f(e){var t=e.src,n=e.alt,r=e.rounded;return o.a.createElement(u,{rounded:r},o.a.createElement(l,{rounded:r},o.a.createElement(s,{src:t,alt:n})))}f.defaultProps={rounded:!1};var d=f,m=Object(c.css)(["opacity:",";visibility:",";"],function(e){return e.isOpen?"1":"0"},function(e){return e.isOpen?"visible":"hidden"}),p=Object(c.css)(["position:absolute;top:100%;right:0;left:0;transition:opacity .2s ease,visibility .2s ease;",""],m),h=c.default.div.withConfig({componentId:"sc-193bp5u-0"})(["position:relative;"]);function g(e){var t=e.handler,n=e.content,r=e.isOpen;return o.a.createElement(h,null,t,n({contentStyle:p,isOpen:r}))}g.defaultProps={isOpen:!1};var b=g,v=n("UXZV"),w=n.n(v);function y(){return(y=w.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O=n("4mXO"),E=n.n(O),j=n("pLtp"),x=n.n(j);function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=x()(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(E.a){var i=E()(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k=function(e,t){var n=e.split(" "),r=Object(i.default)(n,2),o=r[0],c=r[1];return c?t.colors[o][c]:t.colors[o]},I=Object(c.css)(["width:",";height:",";"],function(e){return e.theme.space.small},function(e){return e.theme.space.small}),z=Object(c.css)(["width:",";height:",";"],function(e){return e.theme.space.base},function(e){return e.theme.space.base}),P=Object(c.css)(["width:",";height:",";"],function(e){return e.theme.space.large},function(e){return e.theme.space.large}),S=Object(c.css)(["margin-right:",";"],function(e){return e.theme.space.micro}),_=Object(c.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(-360deg);}"]),T=c.default.svg.withConfig({componentId:"sc-1o6gpms-0"})([""," "," "," ",";"," "," ",""],function(e){return"small"===e.size&&I},function(e){return"base"===e.size&&z},function(e){return"large"===e.size&&P},function(e){return e.beforeText&&S},function(e){var t=e.color,n=e.theme;return t&&Object(c.css)(["color:",";"],k(t,n))},function(e){var t=e.rotate;return t&&Object(c.css)(["transform:rotate(","deg);"],t)},function(e){return e.spin&&Object(c.css)(["animation:"," 1.8s linear infinite;"],_)});function U(e){var t=e.glyph,n=e.size,r=C(e,["glyph","size"]);return o.a.createElement(T,y({},r,{size:n}),o.a.createElement("use",{href:"/static/svg/".concat(n,".svg#").concat(t)}))}U.defaultProps={size:"base",color:"",beforeText:!1,rotate:null,spin:!1};var X=U,L=n("4b23"),M=n.n(L);function A(e,t){return"".concat(e,"-").concat(t)}var H=c.default.ul.withConfig({componentId:"scbner-0"})(["width:100%;"]),J=c.default.li.withConfig({componentId:"scbner-1"})([""," "," font-weight:600;text-transform:uppercase;cursor:pointer;padding:",";color:",";&:hover{color:",";}"],function(e){return e.centered&&Object(c.css)(["text-align:center;"])},function(e){return e.theme.typography.regular},function(e){return e.theme.space.micro},function(e){return e.theme.colors.silver.dark},function(e){return e.theme.colors.silver.default}),N=M()(10);function V(e){var t=e.centered,n=e.items;return o.a.createElement(H,null,n.map(function(e){var n=e.title,r=e.action;return o.a.createElement(J,{key:A(N,n),onClick:r,centered:t},n)}))}V.defaultProps={centered:!1,items:[]};var q=V,D=c.default.div.withConfig({componentId:"ggwhw6-0"})(["width:100%;background-color:",";","{width:17rem;height:100%;}"],function(e){return e.theme.colors.primary},function(e){return e.theme.breakpoints.lg}),R=c.default.div.withConfig({componentId:"ggwhw6-1"})(["display:block;","{display:none;}"],function(e){return e.theme.breakpoints.lg}),Z=c.default.div.withConfig({componentId:"ggwhw6-2"})(["display:flex;justify-content:space-between;align-items:center;"]),B=c.default.span.withConfig({componentId:"ggwhw6-3"})(["",";font-family:",";text-transform:inherit;color:",";padding:",";","{padding:",";}"],function(e){return e.theme.typography.lead},function(e){return e.theme.fonts.openSans},function(e){return e.theme.colors.silver.light},function(e){var t=e.theme.space;return"".concat(t.small," ").concat(t.micro)},function(e){return e.theme.breakpoints.sm},function(e){return e.theme.space.small}),F=c.default.button.withConfig({componentId:"ggwhw6-4"})(["background:transparent;cursor:pointer;border:none;box-sizing:border-box;display:flex;align-items:center;padding:",";"],function(e){return e.theme.space.small}),G=c.default.div.withConfig({componentId:"ggwhw6-5"})(["background-color:",";",""],function(e){return e.theme.colors.primary},function(e){return e.contentStyle}),K=c.default.div.withConfig({componentId:"ggwhw6-6"})(["display:none;width:100%;height:100%;padding:",";flex-direction:column;justify-content:center;box-sizing:border-box;","{display:flex;}"],function(e){return e.theme.space.mega},function(e){return e.theme.breakpoints.lg}),Q=c.default.div.withConfig({componentId:"ggwhw6-7"})(["margin-bottom:",";"],function(e){return e.theme.space.small}),W={title:"Matheus Alves",items:[{title:"sobre",action:function(){}},{title:"experiências",action:function(){}},{title:"projetos",action:function(){}},{title:"educação",action:function(){}},{title:"habilidades",action:function(){}},{title:"interesses",action:function(){}},{title:"prêmios",action:function(){}},{title:"resumé",action:function(){}}]};var Y=function(){var e=Object(r.useState)(!1),t=Object(i.default)(e,2),n=t[0],c=t[1];return o.a.createElement(D,null,o.a.createElement(R,null,o.a.createElement(b,{handler:o.a.createElement(Z,null,o.a.createElement(B,null,W.title),o.a.createElement(F,{onClick:function(){return c(!n)}},o.a.createElement(X,{glyph:"menu",color:"silver light"}))),content:function(e){return o.a.createElement(G,e,o.a.createElement(q,{items:W.items}))},isOpen:n})),o.a.createElement(K,null,o.a.createElement(Q,null,o.a.createElement(d,{src:"/static/img/profile.jpg",alt:W.title,rounded:!0})),o.a.createElement(q,{centered:!0,items:W.items})))},$=c.default.div.withConfig({componentId:"lk1z2t-0"})(["width:100%;height:100vh;display:flex;flex-direction:column;","{flex-direction:row;}"],function(e){return e.theme.breakpoints.lg});var ee=function(){return o.a.createElement($,null,o.a.createElement(Y,null))};t.default=function(){return o.a.createElement(ee,null)}}},[["H0SL",1,0]]]);