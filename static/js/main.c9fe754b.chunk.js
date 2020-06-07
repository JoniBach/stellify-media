(this["webpackJsonptech-test"]=this["webpackJsonptech-test"]||[]).push([[0],{100:function(e,t,a){e.exports=a(115)},105:function(e,t,a){},106:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),l=(a(105),a(161)),c=a(90),m=a(176),s=a(171),d=(a(106),a(45)),p=a.n(d),u=a(178),E=a(177),f=a(159);function b(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo",style:{filter:"sepia(100%)"}}),r.a.createElement("p",null,"Welcome to Stellify Media"),r.a.createElement(u.a,{width:"100"},r.a.createElement(E.a,{required:!0,id:"User-Email",label:"Email",variant:"outlined",fullWidth:!0}),r.a.createElement(f.a,{variant:"outlined",color:"primary",height:"100",fullWidth:!0,href:"/media"},"Submit"))))}var y=a(89),h=a(10),x=a(175),w=a(54),k=a(35),A=a(53),g=a(55),v=a(172),O=a(167),P=a(181),R=a(180),j=a(174),H=a(158),S=a(168),Z=a(169),F=a(170),U=a(88),V=a.n(U),K=a(173),B=a(56),I=a(160),W=a(12),N=a(163),J=a(164),C=a(166),z=a(165),G=a(162),L=a(179),M=a(182),X=a(40),D=Object(I.a)((function(e){return{root:{flexGrow:1},media:{height:200},content:{flexGrow:1,padding:e.spacing(3)},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(1,3,1)}}})),q=r.a.forwardRef((function(e,t){var a=e.in,n=e.children,i=e.onEnter,o=e.onExited,l=Object(A.a)(e,["in","children","onEnter","onExited"]),c=Object(X.useSpring)({from:{opacity:0},to:{opacity:a?1:0},onStart:function(){a&&i&&i()},onRest:function(){!a&&o&&o()}});return r.a.createElement(X.animated.div,Object.assign({ref:t,style:c},l),n)}));function T(e){var t=e.cardData,a=D(),n=Object(W.a)(),i=r.a.useState(!1),o=Object(k.a)(i,2),c=o[0],m=o[1],s=r.a.useState(),d=Object(k.a)(s,2),p=d[0],u=d[1],E=function(e,t){m(!0),u(t)},f=function(){m(!1)},b=Object(l.a)(n.breakpoints.up("sm"));return r.a.createElement("div",{className:a.root},b?r.a.createElement(G.a,{container:!0,spacing:3},t.map((function(e){return r.a.createElement(G.a,{item:!0,xs:4},r.a.createElement(N.a,{width:"100%"},r.a.createElement(J.a,{onClick:function(t){return E(0,e.id)}},e.image?r.a.createElement(z.a,{className:a.media,image:e.image}):null,e.title||e.description?r.a.createElement(C.a,null,e.title?r.a.createElement(B.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title):null,e.description?r.a.createElement(B.a,{variant:"body2",color:"textSecondary",component:"p"},e.description):null):null)))}))):r.a.createElement(G.a,{container:!0,spacing:3},t.map((function(e){return r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(N.a,{width:"100%"},r.a.createElement(J.a,{onClick:function(t){return E(0,e.id)}},e.image?r.a.createElement(z.a,{className:a.media,image:e.image}):null,e.title||e.description?r.a.createElement(C.a,null,e.title?r.a.createElement(B.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title):null,e.description?r.a.createElement(B.a,{variant:"body2",color:"textSecondary",component:"p"},e.description):null):null)))}))),r.a.createElement("div",null,t.filter((function(e){return e.id===p})).map((function(e){return r.a.createElement(L.a,{"aria-label":"opened-media-content",className:a.modal,open:c,onClose:f,closeAfterTransition:!0,BackdropComponent:M.a,BackdropProps:{timeout:500}},r.a.createElement(q,{in:c},r.a.createElement("div",{className:a.paper},r.a.createElement("iframe",{width:"100%",height:"100%",src:e.href,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement("h2",{id:"spring-modal-title"},e.title),r.a.createElement("p",{id:"spring-modal-description"},e.description))))}))))}var Y=a(80),Q=a(81),$=a.n(Q),_=a(82),ee=a.n(_),te=a(83),ae=a.n(te),ne=a(84),re=a.n(ne),ie=a(85),oe=a.n(ie),le=a(86),ce=a.n(le),me=a(87),se=a.n(me),de=Object(I.a)((function(e){return{root:{display:"flex"},drawer:Object(g.a)({},e.breakpoints.up("sm"),{width:180,flexShrink:0}),appBar:Object(g.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(180,"px)"),marginLeft:180}),menuButton:Object(g.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:180},content:{flexGrow:1,padding:e.spacing(3)}}})),pe=[{text:"Home",icon:r.a.createElement($.a,null)},{text:"Trending",icon:r.a.createElement(ee.a,null)},{text:"Subscriptions",icon:r.a.createElement(ae.a,null)}],ue=[{text:"Library",icon:r.a.createElement(re.a,null)},{text:"History",icon:r.a.createElement(oe.a,null)},{text:"Your Videos",icon:r.a.createElement(ce.a,null)},{text:"Watch Later",icon:r.a.createElement(se.a,null)}];r.a.forwardRef((function(e,t){var a=e.in,n=e.children,i=e.onEnter,o=e.onExited,l=Object(A.a)(e,["in","children","onEnter","onExited"]),c=Object(X.useSpring)({from:{opacity:0},to:{opacity:a?1:0},onStart:function(){a&&i&&i()},onRest:function(){!a&&o&&o()}});return r.a.createElement(X.animated.div,Object.assign({ref:t,style:c},l),n)}));var Ee=function(e){var t=e.window,a=de(),n=Object(W.a)(),i=r.a.useState(!1),o=Object(k.a)(i,2),l=o[0],c=o[1],m=function(){c(!l)},d=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(O.a,null),r.a.createElement(H.a,null,pe.map((function(e,t){return r.a.createElement(S.a,{button:!0,key:e.text},r.a.createElement(Z.a,null,e.icon),r.a.createElement(F.a,{primary:e.text}))}))),r.a.createElement(O.a,null),r.a.createElement(H.a,null,ue.map((function(e,t){return r.a.createElement(S.a,{button:!0,key:e.text,src:e.link},r.a.createElement(Z.a,null,e.icon),r.a.createElement(F.a,{primary:e.text}))})))),u=void 0!==t?function(){return t().document.body}:void 0;return r.a.createElement("div",{className:a.root},r.a.createElement(s.a,null),r.a.createElement(v.a,{position:"fixed",className:a.appBar},r.a.createElement(K.a,null,r.a.createElement(j.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:m,className:a.menuButton},r.a.createElement(V.a,null)),r.a.createElement("img",{src:p.a,height:"60",alt:"logo"}),r.a.createElement(B.a,{variant:"h6",noWrap:!0},"Stellify Media"))),r.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},r.a.createElement(R.a,{smUp:!0,implementation:"css"},r.a.createElement(P.a,{container:u,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:l,onClose:m,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},d)),r.a.createElement(R.a,{xsDown:!0,implementation:"css"},r.a.createElement(P.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},d))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(T,{cardData:Y.a})))},fe={primary:"#c4a747",secondary:x.a[500],status:w.a[500]};var be=function(){var e=Object(l.a)("(prefers-color-scheme: dark)"),t=r.a.useMemo((function(){return Object(c.a)({palette:{type:e?"dark":"light",primary:{main:fe.primary},secondary:{main:fe.secondary},status:{main:fe.status}}})}),[e]);return r.a.createElement(y.a,null,r.a.createElement(m.a,{theme:t},r.a.createElement(s.a,null),r.a.createElement(h.a,{exact:!0,path:"/",component:b}),r.a.createElement(h.a,{exact:!0,path:"/media",component:Ee})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=r.a.createContext(),he=function(e){var t=Object(n.useState)([]),a=Object(k.a)(t,2),i=a[0],o=a[1];return r.a.createElement(ye.Provider,{value:[i,o]},e.children)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null,r.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t){e.exports="data:image/png;base64,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"},80:function(e){e.exports=JSON.parse('{"a":[{"id":1,"image":"https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/butterfly.png","title":"Butterfly","description":"An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects","href":"https://www.youtube.com/embed/R1_Z7zR6drM"},{"id":2,"image":"https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/parkinglot.png","title":"Parking Lot","description":"An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects","href":"https://www.youtube.com/embed/PoLar73R4Zw"},{"id":3,"image":"https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/rainbowcar.png","title":"Rainbow Rd","description":"An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects","href":"https://www.youtube.com/embed/Fu2tjMiWqGU"},{"id":4,"image":"https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/rainbowman.png","title":"Rainbow Man","description":"An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects","href":"https://www.youtube.com/embed/D0s8BGV2fQ"},{"id":5,"image":"https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/strut.png","title":"Strut Fur","description":"An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects","href":"https://www.youtube.com/embed/ncLb4wvw9uY"},{"id":6,"image":"https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/wateralien.png","title":"Fluid Alien","description":"An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects","href":"https://www.youtube.com/embed/Wo40N4g04QI"}]}')}},[[100,1,2]]]);
//# sourceMappingURL=main.c9fe754b.chunk.js.map