(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,a){},28:function(e,t,a){},47:function(e,t,a){},72:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(20),s=a.n(r),i=(a(47),a(28),a(5)),l=a(8),o=a.p+"static/media/bannerGamer.949e8282.jpg",d=a.p+"static/media/logo-joystick.56d72c73.png",b=a(13),j=a(3),m=a(11),u=a(4),g=a(14),h=a.n(g);function O(e){return function(t){var a=e?"?name=".concat(e):"/";return h.a.get("/videogames".concat(a)).then((function(e){t({type:"GET_GAMES",payload:e.data})}))}}function p(e){return{type:"SORT_GAMES",payload:e}}function x(e){return{type:"FILTER_GAMES",payload:e}}a(19);var f=a(0);var v=function(){var e=Object(u.b)(),t=Object(n.useState)({name:""}),a=Object(m.a)(t,2),c=a[0],r=a[1];return Object(f.jsxs)("form",{className:"form-container",onSubmit:function(t){t.preventDefault(),e(O(c.name))},children:[" ",Object(f.jsx)("input",{id:"search-bar",type:"text",name:"name",autoComplete:"off",value:c.name,onChange:function(e){r((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(b.a)({},e.target.name,e.target.value))}))}}),Object(f.jsx)("button",{type:"submit",className:"button-search",children:"Search games"})]})};a(72);var N=function(){var e=Object(i.g)().pathname;return"/"!==e?Object(f.jsxs)("div",{className:"navbar",style:{backgroundImage:"linear-gradient(0deg, rgba(52,58,64,1) 0%, rgba(52,58,64,0) 100%), url(".concat(o,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:[Object(f.jsx)(l.b,{className:"navbar-brand",to:"/",children:Object(f.jsx)("img",{id:"logo",src:d,height:190,className:"d-inline-block align-top",alt:""})}),Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{className:"list",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("li",{className:"list-item",children:Object(f.jsx)(l.b,{to:"/game/add",children:"Add game"})}),Object(f.jsx)("li",{className:"list-item",children:Object(f.jsx)(l.b,{to:"/games",children:"Games"})})]}),Object(f.jsx)("li",{className:"list-item",children:"/games"===e?Object(f.jsx)(v,{}):null})]})})]}):null},y=a(41),P=(a(91),a.p+"static/media/WMDx.3d61e471.gif");var k=function(){var e=Object(u.c)((function(e){return e.game})),t=Object(u.b)(),a=Object(i.h)().id;return Object(n.useEffect)((function(){return t(function(e){return function(t){return h.a.get("/videogame/".concat(e)).then((function(e){t({type:"GET_GAME_DETAIL",payload:e.data})})).catch((function(e){return t({type:"GET_GAME_DETAIL",payload:null})}))}}(a)),function(){return t({type:"GET_GAME_DETAIL",payload:void 0})}}),[a,t]),Object(f.jsx)(c.a.Fragment,{children:e?Object(f.jsx)("div",{className:"background-game-detail",style:{backgroundImage:"url(".concat(e.image_aditional||e.image,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(f.jsx)("div",{className:"game-detail background-games",style:{background:"linear-gradient(rgb(53 58 64) 0%, rgb(52 58 64 / 20%) 30%)"},children:Object(f.jsxs)("div",{className:"description-container",children:[Object(f.jsx)("h1",{className:"badge-title",children:e.name}),Object(f.jsxs)("div",{className:"description-container-up",children:[Object(f.jsx)("img",{className:"img-detail",src:e.image,alt:e.name}),Object(f.jsxs)("div",{className:"game-information",children:[Object(f.jsxs)("div",{className:"released items-game-information",children:["Title: ",e.name]}),Object(f.jsxs)("div",{className:"released items-game-information",children:["Release date: ",e.released]}),Object(f.jsxs)("div",{className:"Rating items-game-information",children:["Rating:",Object(f.jsx)("div",{className:"stars-outer",children:Object(f.jsx)("div",{className:"stars-inner",style:{width:"".concat(20*e.rating,"%"),overflow:"hidden"}})})]}),Object(f.jsxs)("div",{className:"container-genres items-game-information",children:["Genres:",e.genres.map((function(e,t){return Object(f.jsx)("span",{className:"badge-pill badge-dark-light",children:e.name},e.id)}))]}),Object(f.jsxs)("div",{className:"container-platforms items-game-information",children:["Platforms:",e.platforms.map((function(e,t){var a,n;return Object(f.jsx)("span",{className:"badge-pill badge-dark-light",children:(null===(n=e.platform)||void 0===n?void 0:n.name)||e},(null===(a=e.platform)||void 0===a?void 0:a.id)||t)}))]})]})]}),Object(f.jsx)("div",{className:"description-container-down",children:Object(f.jsxs)("div",{className:"description",children:["Description: ",Object(f.jsx)("p",{}),Object(y.a)(e.description.replaceAll("<br />","<br /><br />"))]})})]})})}):void 0===e?Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:P,alt:"spinner de carga"})}):Object(f.jsx)("h1",{children:"Inexist Game"})})};function S(e,t,a){var n="Alfabeticamente"===t?"name":"rating";return e.sort((function(e,t){return e[n]>t[n]?"Ascendente"===a?1:-1:e[n]<t[n]?"Ascendente"===a?-1:1:0}))}var I=function(){var e=Object(u.c)((function(e){return e.games})),t=Object(u.b)(),a=Object(n.useState)(!1),r=Object(m.a)(a,2),s=r[0],i=r[1],l=Object(n.useState)({modo:"Por rating",direccion:"Descendente",games:e}),o=Object(m.a)(l,2),d=o[0],g=o[1];function h(a){g((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(b.a)({games:e},a.target.name,a.target.value))})),"modo"===a.target.name&&t(p(S(e,a.target.value,d.direccion))),"direccion"===a.target.name&&t(p(S(e,d.modo,a.target.value)))}return Object(f.jsx)(c.a.Fragment,{children:Object(f.jsxs)("div",{className:"button-menu",children:[Object(f.jsxs)("div",{className:"buttons-menu-list",children:[Object(f.jsx)("button",{className:"button button-menu-list",hidden:!s,onClick:h,name:"modo",value:"Alfabeticamente",children:"Alphabetically"}),Object(f.jsx)("button",{className:"button button-menu-list",hidden:!s,onClick:h,name:"modo",value:"Por rating",children:"By rating"}),Object(f.jsx)("p",{}),Object(f.jsx)("button",{className:"button button-menu-list",hidden:!s,onClick:h,name:"direccion",value:"Ascendente",children:"Ascending"}),Object(f.jsx)("button",{className:"button button-menu-list",hidden:!s,onClick:h,name:"direccion",value:"Descendente",children:"Descending"})]}),Object(f.jsx)("button",{className:"button button-primary button-primary-".concat(s?"active":"inactive"),onClick:function(){i(!s)},children:"Order games"})]})})},C=a(92);function G(e,t,a){var n=t?e.filter((function(e){return e.genres.some((function(e){return e.name===t}))})):e;return"Ambos"===a?n:"Real"===a?n.filter((function(e){return!C.anyNonNil(e.id)})):n.filter((function(e){return C.anyNonNil(e.id)}))}var E=function(){var e=Object(u.c)((function(e){return[e.gamesSinFIltro,e.genres]})),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(u.b)(),i=Object(n.useState)(!1),l=Object(m.a)(i,2),o=l[0],d=l[1],g=Object(n.useState)({tipoGenero:"",tipoReal:"Ambos"}),h=Object(m.a)(g,2),O=h[0],p=h[1];function v(e){p((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(b.a)({},e.target.name,e.target.value))})),"tipoGenero"===e.target.name&&s(x(G(a,e.target.value,O.tipoReal))),"tipoReal"===e.target.name&&s(x(G(a,O.tipoGenero,e.target.value)))}return Object(f.jsx)(c.a.Fragment,{children:Object(f.jsxs)("div",{className:"button-menu",children:[Object(f.jsx)("button",{className:"button button-primary button-primary-".concat(o?"active":"inactive"),onClick:function(){d(!o)},children:"Filter games"}),Object(f.jsxs)("div",{className:"buttons-menu-list",children:[Object(f.jsx)("button",{className:"button button-menu-list",hidden:!o,onClick:v,name:"tipoGenero",value:"",children:"All"}),r&&r.map((function(e){return Object(f.jsx)("button",{className:"button button-menu-list",hidden:!o,onClick:v,name:"tipoGenero",value:e.name,children:e.name},e.id)})),Object(f.jsx)("p",{}),Object(f.jsx)("button",{className:"button button-menu-list",hidden:!o,onClick:v,name:"tipoReal",value:"Real",children:"Original"}),Object(f.jsx)("button",{className:"button button-menu-list",hidden:!o,onClick:v,name:"tipoReal",value:"Creado",children:"Created"}),Object(f.jsx)("button",{className:"button button-menu-list",hidden:!o,onClick:v,name:"tipoReal",value:"Ambos",children:"Both"})]})]})})};a(93);var F=function(){var e=Object(u.c)((function(e){return e})),t=Object(u.b)();function a(a){var n;t({type:"CHANGE_PAGE",payload:{currentPage:(n={currentPage:a,startIndex:(a-1)*e.gamesForPage,endIndex:a*e.gamesForPage}).currentPage,startIndex:n.startIndex,endIndex:n.endIndex}})}if(!e.totalPages||1===e.totalPages)return null;var n=function(){var t,a=[];t=e.currentPage<=Math.ceil(e.pagesToShow/2)?1:e.currentPage+Math.floor((e.pagesToShow-1)/2)>=e.totalPages?e.totalPages-(e.pagesToShow-1):e.currentPage-Math.floor(e.pagesToShow/2);for(var n=1;n<=e.pagesToShow;n++)a.push(t++);return{currentPage:e.currentPage,totalPages:e.totalPages,pages:a}}();return Object(f.jsxs)("ul",{className:"pagination",children:[Object(f.jsx)("li",{children:Object(f.jsx)("button",{disabled:1===n.currentPage,onClick:function(){return a(1)},children:"First"})}),Object(f.jsx)("li",{children:Object(f.jsx)("button",{disabled:1===n.currentPage,onClick:function(){return a(n.currentPage-1)},children:"Prev"})}),n.pages.map((function(e,t){return Object(f.jsx)("li",{children:Object(f.jsx)("button",{className:n.currentPage===e?"active":"",onClick:function(){return a(e)},children:e})},t)})),Object(f.jsx)("li",{children:Object(f.jsx)("button",{disabled:n.currentPage===n.totalPages,onClick:function(){return a(n.currentPage+1)},children:"Next"})}),Object(f.jsx)("li",{children:Object(f.jsx)("button",{disabled:n.currentPage===n.totalPages,onClick:function(){return a(n.totalPages)},children:"Latest"})})]})};a(94);var A=function(){var e=Object(u.c)((function(e){return e})),t=e.games,a=e.startIndex,n=e.endIndex;return Object(f.jsx)("div",{className:"gamesList",children:t.slice(a,n).map((function(e,t){return Object(f.jsx)(c.a.Fragment,{children:Object(f.jsx)(l.b,{to:"/game/".concat(e.id),children:Object(f.jsxs)("div",{className:"card bg-dark text-white border-0",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"img-zoom img-zoom-container card-background bg-secondary",children:Object(f.jsx)("img",{className:"card-img-top",src:e.image,alt:e.name})}),Object(f.jsxs)("div",{className:"badge-pill badge-warning position-absolute right-badge",children:["\u2605",e.rating,"/5"]})]}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsxs)("div",{className:"badge-pill badge-dark position-absolute badge-position",children:["#",Object(f.jsx)("strong",{children:a+t+1})]})}),Object(f.jsx)("h2",{className:"position-absolute h2-position",children:e.name}),Object(f.jsx)("div",{className:"position-absolute genre-badge-position",children:e.genres.map((function(e,t){return Object(f.jsx)("div",{className:"badge badge-dark genre-badge-margin",children:e.name},t+1)}))})]})})},e.id)}))})},T=a.p+"static/media/backgroundDefault.fdff9d07.jpg";var _=function(){var e,t=Object(u.c)((function(e){return e})),a=t.games,n=t.startIndex,r=t.endIndex;return Object(f.jsx)(c.a.Fragment,{children:Object(f.jsx)("div",{className:"background-games",style:{backgroundImage:"linear-gradient(rgba(52,58,64,1) 0%, rgba(52,58,64,0) 30%), url(".concat(a&&(null===(e=a[Math.floor(Math.random()*(r-n)+n)])||void 0===e?void 0:e.wallpaper)||T,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(f.jsx)("div",{className:"background-games",style:{background:"linear-gradient(rgb(52 58 64 / 50%) 50%, rgb(52 58 64 / 50%) 40%)"},children:a?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"buttons-functions",children:[Object(f.jsx)(E,{}),Object(f.jsx)(I,{})]}),Object(f.jsx)("hr",{style:{mixBlendMode:"soft-light"}}),Object(f.jsx)(F,{}),Object(f.jsx)(A,{})]}):void 0===a?Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:P,alt:"spinner de carga"})}):Object(f.jsx)("h1",{children:"Inexist Game"})})})})},R=a(27);a(95);var w=function(){var e=Object(u.c)((function(e){return e})),t=e.games,a=e.genres,r=e.platforms,s=Object(u.b)(),l=Object(i.f)().push,o=Object(n.useState)({name:"",description:"",released:"2021-08-07",rating:5,genres:[],platforms:[],image:"https://avatars.githubusercontent.com/u/57154655?s=200&v=4"}),d=Object(m.a)(o,2),g=d[0],p=d[1],x=Object(n.useState)({}),v=Object(m.a)(x,2),N=v[0],y=v[1];function P(e){p((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(b.a)({},e.target.name,"genres"!==e.target.name&&"platforms"!==e.target.name?e.target.value:"genres"===e.target.name?t.genres.includes(parseInt(e.target.value))?t.genres.filter((function(t){return t!==parseInt(e.target.value)})):[].concat(Object(R.a)(t.genres),[parseInt(e.target.value)]):t.platforms.includes(e.target.value)?t.platforms.filter((function(t){return t!==e.target.value})):[].concat(Object(R.a)(t.platforms),[e.target.value])))})),y(function(e){var a={};e.name?t.some((function(t){return t.name===e.name}))&&(a.name="Name already exists"):a.name="Name is required";e.platforms.length||(a.platforms="select at least one platform");e.description||(a.description="Description is required");return a}(Object(j.a)(Object(j.a)({},g),{},Object(b.a)({},e.target.name,e.target.value))))}return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)("div",{className:"title-addgame badge-title",children:"Add a Game"}),Object(f.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),Object.keys(N).length>0)return alert("check required fields");h.a.post("/videogame/",g).then((function(e){s(O()),e.data.error?alert(e.data.error):l("/game/".concat(e.data.id))}))},children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"name",className:" control-label",children:"Name"}),Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("input",{autoComplete:"off",onChange:P,value:g.name,name:"name",type:"text",className:N.name&&"has-error form-control",required:!0}),N.name&&Object(f.jsx)("p",{className:"has-error",children:N.name})]})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"description",className:" control-label",children:"Description"}),Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("input",{autoComplete:"off",onChange:P,value:g.description,name:"description",type:"text",className:N.description&&"has-error form-control",required:!0}),N.description&&Object(f.jsx)("p",{className:"has-error",children:N.description})]})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"released",className:" control-label",children:"Release date"}),Object(f.jsx)("div",{className:"",children:Object(f.jsx)("input",{className:"form-control",type:"date",id:"released",name:"released",onChange:P,value:g.released,min:"1980-01-01",max:"2021-08-07"})})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"rating",className:" control-label",children:"Rating"}),Object(f.jsxs)("div",{className:"rating",children:[Object(f.jsx)("input",{id:"radio5",type:"radio",name:"rating",value:"5",onChange:P}),Object(f.jsx)("label",{id:"estrellas",htmlFor:"radio5",children:"\u2605"}),Object(f.jsx)("input",{id:"radio4",type:"radio",name:"rating",value:"4",onChange:P}),Object(f.jsx)("label",{id:"estrellas",htmlFor:"radio4",children:"\u2605"}),Object(f.jsx)("input",{id:"radio3",type:"radio",name:"rating",value:"3",onChange:P}),Object(f.jsx)("label",{id:"estrellas",htmlFor:"radio3",children:"\u2605"}),Object(f.jsx)("input",{id:"radio2",type:"radio",name:"rating",value:"2",onChange:P}),Object(f.jsx)("label",{id:"estrellas",htmlFor:"radio2",children:"\u2605"}),Object(f.jsx)("input",{id:"radio1",type:"radio",name:"rating",value:"1",onChange:P}),Object(f.jsx)("label",{id:"estrellas",htmlFor:"radio1",children:"\u2605"})]})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"image",className:" control-label",children:"Image"}),Object(f.jsx)("div",{className:"",children:Object(f.jsx)("input",{autoComplete:"off",onChange:P,name:"image",type:"text",className:"form-control"})})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"platforms",className:N.platforms&&"has-error control-label",children:"Platforms"}),Object(f.jsx)("div",{className:"platforms",children:r.map((function(e,t){return Object(f.jsxs)("label",{id:"platforms",className:"checkbox-inline badge-pill badge-".concat(g.platforms.includes(e)?"warning":"dark-light"),htmlFor:e,children:[e,Object(f.jsx)("input",{id:e,onChange:P,type:"checkbox",className:"checkbox-inline",value:e,name:"platforms"})]},t)}))}),N.platforms&&Object(f.jsx)("p",{className:"has-error",children:N.platforms})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"genres",className:"control-label",children:"Genres"}),Object(f.jsx)("div",{className:"genres",children:a.map((function(e){return Object(f.jsxs)("label",{htmlFor:"genre-".concat(e.id),className:"checkbox-inline badge-pill badge-".concat(g.genres.includes(e.id)?"warning":"dark-light"),children:[e.name,Object(f.jsx)("input",{onChange:P,id:"genre-".concat(e.id),type:"checkbox",className:"checkbox-inline",name:"genres",value:e.id})]},e.id)}))})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",className:"button-addgame",style:{marginTop:"20px"},children:"Add Game"})})]})]})},M=a.p+"static/media/landingPage.87f6f826.jpg";a(96);var D=function(){var e=Object(u.b)();return Object(f.jsxs)("div",{className:"landing",children:[Object(f.jsx)("button",{type:"button",className:"button-landing  position-absolute",onClick:function(t){t.preventDefault(),e(O()),e((function(e){return h.a.get("/genres").then((function(t){e({type:"GET_GENRES",payload:t.data})}))}))},children:Object(f.jsx)(l.b,{to:"/games",children:"Enter the site"})}),Object(f.jsx)("img",{className:"img-landing",src:M,alt:"landing page"})]})};var L=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(i.a,{path:"/",component:N}),Object(f.jsx)(i.a,{path:"/",exact:!0,component:D}),Object(f.jsx)(i.a,{path:"/games",exact:!0,children:Object(f.jsx)(_,{})}),Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{path:"/game/add",exact:!0,component:w}),Object(f.jsx)(i.a,{path:"/game/:id",exact:!0,component:k})]})]})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,98)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},q=a(22),B={games:void 0,gamesSinFIltro:[],game:void 0,genres:"",platforms:["PC","PSone","PS2","PS3","PS4","PS5","Xbox","Xbox360","Xbox One","Nintendo","Sega Genesis","Wii"],totalGames:9,gamesForPage:9,totalPages:1,pagesToShow:5,currentPage:1,startIndex:0,endIndex:9};var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.payload.currentPage,startIndex:t.payload.startIndex,endIndex:t.payload.endIndex});case"GET_GENRES":return Object(j.a)(Object(j.a)({},e),{},{genres:t.payload});case"GET_GAMES":return Object(j.a)(Object(j.a)({},e),{},{games:t.payload,gamesSinFIltro:t.payload,totalGames:t.payload.length,totalPages:Math.ceil(t.payload.length/e.gamesForPage),pagesToShow:Math.ceil(t.payload.length/e.gamesForPage)<5?Math.ceil(t.payload.length/e.gamesForPage):5,currentPage:1,startIndex:0,endIndex:9});case"GET_GAME_DETAIL":return Object(j.a)(Object(j.a)({},e),{},{game:t.payload});case"SORT_GAMES":return Object(j.a)(Object(j.a)({},e),{},{games:t.payload,currentPage:1,startIndex:0,endIndex:9});case"FILTER_GAMES":return Object(j.a)(Object(j.a)({},e),{},{games:t.payload,totalGames:t.payload.length,totalPages:Math.ceil(t.payload.length/e.gamesForPage),currentPage:1,startIndex:0,endIndex:9});default:return e}},H=a(42),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.b,U=Object(q.c)(X,J(Object(q.a)(H.a)));h.a.defaults.baseURL="https://www.jpgamer.xyz/api",s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(u.a,{store:U,children:Object(f.jsx)(l.a,{children:Object(f.jsx)(L,{})})})}),document.getElementById("root")),z()}},[[97,1,2]]]);
//# sourceMappingURL=main.8a429a48.chunk.js.map