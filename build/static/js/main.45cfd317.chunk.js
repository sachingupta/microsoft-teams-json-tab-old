(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{222:function(e,t,o){},294:function(e,t,o){e.exports=o(445)},299:function(e,t,o){},443:function(e,t,o){},444:function(e,t,o){},445:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),a=o(43),i=o.n(a);o(299),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,l=o(29),u=o(146),s=(o(222),o(27)),d=o(111),m=function(e,t){console.log("Err value: ".concat(e,", result value : ").concat(t))},g=function(e){if(e.content.type&&"AdaptiveCard"===e.content.type){var t={height:void 0,width:600,title:e.preview.title,url:void 0,card:e.content,completionBotId:e.botId};s.tasks.startTask(t,m)}else alert("Could not load data, card type is not supported.")},v=function(e){return d.parseUrl(e).query.commandId},f=function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""},p=function(e){return{id:e.id,type:e.type,title:e.title,enabled:["Action.OpenUrl"].includes(e.type),url:"Action.OpenUrl"===e.type?e.url:void 0}},h=o(81),b=o(103),C=o(66),k=function(e,t,o){s.bot.sendQuery(e,t,o)},w=function(){var e=r.useState([]),t=Object(l.a)(e,2),o=t[0],n=t[1],a=r.useState(""),i=Object(l.a)(a,2),c=(i[0],i[1]),u=r.useState(""),d=Object(l.a)(u,2),m=d[0],g=d[1],v=r.useState("JSONTabDefault"),f=Object(l.a)(v,2),p=f[0],k=f[1],w=function(e){alert(e)},y=function(e){n(e),s.appInitialization.notifySuccess()},x=function(e){c(e.id),e.initialRun?g("https://microsoft-teams-json-tab.azurewebsites.net?theme={theme}&frameContext=content&commandId=".concat(e.id,"&initialRun=").concat(e.initialRun)):g("https://microsoft-teams-json-tab.azurewebsites.net?theme={theme}&frameContext=content&commandId=".concat(e.id)),s.settings.setValidityState(!0)},E=function(e){s.settings.setSettings({entityId:"JSONTab",contentUrl:m,suggestedDisplayName:p}),e.notifySuccess()};return r.useEffect(function(){s.initialize(),s.appInitialization.notifyAppLoaded(),s.settings.registerOnSaveHandler(E),function(e,t){s.bot.getSupportedCommands(e,t)}(y,w)}),r.createElement("div",null,r.createElement("div",null,r.createElement(h.a,{size:"medium",content:"Name your tab"})),r.createElement(b.a,{fluid:!0,placeholder:"Tab name",onChange:function(e){k(e.target.value)}}),r.createElement("div",{style:{marginTop:"16px"}},r.createElement(h.a,{size:"medium",content:"Select the command you'd like query your bot with"})),r.createElement(C.a,{fluid:!0,items:o.map(function(e){return e.title}),noResultsMessage:"We couldn't find any matches.",onSelectedChange:function(e,t){var r=o.find(function(e){return e.title===t.value});r&&x(r)},placeholder:"Select the command"}))},y=o(47),x=o(67),E=o(452);!function(e){e.List="List",e.Grid="Grid"}(c||(c={}));var T,S=function(e){var t=function(t,o){e.onChange(o.value)},o=[{key:"list",icon:{name:"menu",outline:!0},"aria-label":"List View",onClick:function(e){return t(0,{value:c.List})}},{key:"card",icon:{name:"gallery",outline:!0},"aria-label":"Card View",onClick:function(e){return t(0,{value:c.Grid})}}];return n.a.createElement(y.a,{styles:e.styles,vAlign:"center"},n.a.createElement(x.a,{items:o,defaultActiveIndex:0,accessibility:E.a,iconOnly:!0}))},I=o(286);!function(e){e.List="List",e.Grid="Grid"}(T||(T={}));var B,L=function(e){var t=n.a.useState(""),o=Object(l.a)(t,2),r=o[0],a=o[1],i=Object(I.debounce)(e.onSearch,300);return n.a.createElement(y.a,{gap:"gap.small",vAlign:"center"},n.a.createElement(y.a.Item,{push:!0},n.a.createElement(y.a,null,n.a.createElement(S,{onChange:function(t){var o=t===T.List?T.List:T.Grid;e.onViewChange(o)},styles:{margin:"0 0 16px 0"}}))),n.a.createElement(b.a,{placeholder:"Search",icon:{name:"search",outline:!0},input:{styles:{width:"250px"}},styles:{margin:"0px 0px 16px 0px"},onChange:function(e){var t=e.currentTarget.value;e.currentTarget.value.length>=1?i(t):i(""),a(t)},onKeyPress:function(t){"Enter"===t.key&&e.onSearch(r)}}))},O=o(44),z=o(99),R=function(e){var t=[{key:"more",icon:{name:"more",outline:!0},indicator:!1,menu:{items:e.card.content.actions.map(p).map(function(e){return{key:e.id,content:e.title,disabled:!e.enabled,onClick:e.url?function(){return window.open(e.url)}:void 0}})}}];return n.a.createElement(x.a,{iconOnly:!0,items:t,styles:e.styles,title:e.title})},A=function(e){var t=0,o=e.itemList.map(function(e){return{key:++t,content:n.a.createElement(y.a,{vAlign:"center",fill:!0,gap:"gap.small"},n.a.createElement(y.a.Item,{styles:{width:"32px",height:"100%"}},n.a.createElement(O.a,{src:e.preview.heroImageSrc,className:"listItemImage"})),n.a.createElement(y.a.Item,{size:"size.small",shrink:0,grow:1},n.a.createElement(h.a,{truncated:!0,size:"medium",weight:"semibold",content:f(e.preview.title),title:f(e.preview.title)})),e.preview.subTitle?n.a.createElement(y.a.Item,{size:"size.medium",shrink:1,grow:0},n.a.createElement(h.a,{truncated:!0,size:"medium",weight:"regular",content:f(e.preview.subTitle),title:f(e.preview.subTitle)})):null,e.preview.text?n.a.createElement(y.a.Item,{size:"size.half",shrink:3,grow:0,"aria-label":f(e.preview.title)},n.a.createElement(h.a,{truncated:!0,size:"medium",weight:"regular",content:f(e.preview.text),title:f(e.preview.text)})):null,n.a.createElement(y.a.Item,{shrink:0},n.a.createElement(R,{card:e,title:"More Options"}))),styles:{margin:"2px 2px 0 0"},onClick:function(){return g(e)}}});return n.a.createElement("div",null,n.a.createElement(z.a,{selectable:!0,items:o}))},j=o(144),W=o(145),V=o(450),N=function(e){var t=function(e){return Math.floor(e/278)},o=n.a.useState(t(window.innerWidth)),r=Object(l.a)(o,2),a=r[0],i=r[1],c=function(){i(t(window.innerWidth))};n.a.useEffect(function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}},[a]);return n.a.createElement("div",{style:{margin:"0 0 0 8px"}},n.a.createElement(W.a,{columns:a,accessibility:V.a,content:e.itemList.map(function(e){return n.a.createElement(j.a,{"data-is-focusable":"true",styles:{margin:"0 0 16px 12px",height:"146px",padding:"20px 20px 20px 20px",borderRadius:"3px",boxShadow:"0px 2px 4px -0.75px rgba(0,0,0,0.1)",position:"relative"},onClick:function(){return g(e)},onKeyPress:function(t){"Enter"===t.key&&g(e)}},n.a.createElement(R,{card:e,styles:{position:"absolute",right:"0",top:"0",margin:"0 8px 0px 0px"}}),n.a.createElement(y.a,{gap:"gap.small"},n.a.createElement(y.a.Item,null,n.a.createElement(O.a,{styles:{width:"48px",height:"100%"},src:e.preview.heroImageSrc,className:"listItemImage"})),n.a.createElement(y.a.Item,{size:"size.half",grow:!0},n.a.createElement(y.a,{column:!0,styles:{textAlign:"left"}},n.a.createElement(y.a.Item,{styles:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:1,overflow:"hidden"}},n.a.createElement(h.a,{content:f(e.preview.title),styles:{margin:"0 0 2px 0"},size:"medium",weight:"semibold",title:f(e.preview.title)})),e.preview.subTitle?n.a.createElement(y.a.Item,{styles:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:1,overflow:"hidden"}},n.a.createElement(h.a,{content:f(e.preview.subTitle),styles:{margin:"0 0 2px 0"},weight:"regular",size:"medium",title:f(e.preview.subTitle)})):null,e.preview.text?n.a.createElement(y.a.Item,{grow:!0,size:"size.half",styles:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:3,overflow:"hidden"}},n.a.createElement(h.a,{content:f(e.preview.text),weight:"regular",size:"medium",title:f(e.preview.text)})):null))))})}))};!function(e){e.List="List",e.Grid="Grid"}(B||(B={}));var q,F=function(e){return n.a.createElement("div",null,e.viewOption===B.List?n.a.createElement(A,{itemList:e.results}):n.a.createElement(N,{itemList:e.results}))},P=o(147),H=(o(443),function(e){return n.a.createElement("div",{className:"loadIcon"}," ",e.isLoading?n.a.createElement(P.a,null):null," ")}),G=o(46),U=(o(444),function(e){var t="";e.buttonText&&e.onClick&&(t=n.a.createElement(G.a,{id:"button",content:e.buttonText,onClick:e.onClick,primary:!0}));var o="";e.message&&(o=e.message);var r="error.svg";return e.imageSrc&&(r=e.imageSrc),n.a.createElement("div",{className:"EmptyScreenView"},n.a.createElement(O.a,{id:"image",src:r}),n.a.createElement("div",{id:"textblock"},n.a.createElement(h.a,{id:"title",size:"large",weight:"bold",content:e.title}),n.a.createElement(h.a,{styles:{marginTop:"8px"},size:"medium",content:n.a.createElement("p",null,e.subTitle)}),n.a.createElement(h.a,{id:"error",size:"small",content:o})),t)}),D=function(e){return n.a.createElement(U,{title:"There was a problem communicating with the bot",subTitle:"You may not be able to use this feature",message:e.message})},J=function(e){var t=n.a.useState(""),o=Object(l.a)(t,2),r=o[0],a=o[1],i=function(t){e.onAuthenticated({data:t,type:s.bot.ResponseType.Results})},c=function(e){a("Something went wrong, please try again")};return n.a.createElement(U,{buttonText:"Sign In",title:e.title,subTitle:"You'll need to sign in to use this app.",message:r,onClick:function(){var t={query:e.currentQuery.query,commandId:e.currentQuery.commandId,url:e.url};s.bot.authenticate(t,i,c)}})},M=o(38);!function(e){e.Loading="Loading",e.Error="Error",e.Render="Render",e.Auth="Auth",e.NoResults="NoResults"}(q||(q={}));var Q,K=function(e){var t=n.a.useState("List"),o=Object(l.a)(t,2),r=o[0],a=o[1],i=n.a.useState([]),c=Object(l.a)(i,2),u=c[0],m=c[1],g=n.a.useState(q.Render),f=Object(l.a)(g,2),p=f[0],h=f[1],b=n.a.useState(""),C=Object(l.a)(b,2),w=C[0],y=C[1],x=n.a.useState({url:"",title:"Sign in"}),E=Object(l.a)(x,2),T=E[0],S=E[1],I=n.a.useState({query:"",commandId:v(window.location.href)}),B=Object(l.a)(I,2),O=B[0],z=B[1],R=function(e){h(q.Error),y(e)},A=function(e){if(e.type===s.bot.ResponseType.Auth){var t=e.data;S({url:t.url,title:t.title}),h(q.Auth)}else{var o=e.data;m(function(e){return e&&e.attachments?e.attachments.map(function(t){return function(e,t){var o="";return e.previewRawPayload.content.hasOwnProperty("images")&&e.previewRawPayload.content.images&&e.previewRawPayload.content.images[0]&&e.previewRawPayload.content.images[0].url&&(o=e.previewRawPayload.content.images[0].url),{contentType:"AdaptiveCard",content:e.card.content,preview:{title:e.previewRawPayload.content.title,subTitle:e.previewRawPayload.content.subtitle,text:e.previewRawPayload.content.text,heroImageSrc:o},botId:t}}(t,e.botId)}):[]}(o)),j(o.attachments),s.appInitialization.notifySuccess()}},j=function(e){0===e.length?h(q.NoResults):h(q.Render)};n.a.useEffect(function(){if(s.initialize(),s.appInitialization.notifyAppLoaded(),s.registerOnThemeChangeHandler(e.onThemeChange),function(){var e=d.parseUrl(window.location.href);return null!=e.query.initialRun&&"true"==e.query.initialRun}()){var t={query:"",commandId:v(window.location.href)};k(t,A,R)}},[e.onThemeChange]);var W=n.a.createElement(F,{results:u,viewOption:r});switch(p){case"Loading":W=n.a.createElement(H,{isLoading:!0});break;case"Error":W=n.a.createElement(D,{message:w});break;case"Auth":W=n.a.createElement(J,{title:T.title,url:T.url,currentQuery:O,onAuthenticated:A});break;case"NoResults":W=n.a.createElement(U,{title:"We couldn't find any results",subTitle:"Search, or try refining your query!"})}return n.a.createElement("div",{className:e.customClass},n.a.createElement(L,{onSearch:function(e){void 0!==e&&(z({query:e,commandId:v(window.location.href)}),k(O,A,R),h(q.Loading))},onViewChange:function(e){e&&a(e)}}),W)},Y=Object(M.createComponent)({displayName:"ContentViewWrapper",render:function(e){var t=e.stardust,o=e.onThemeChange,r=t.classes;return n.a.createElement(K,{customClass:r.root,onThemeChange:o})}}),$=function(e){var t,o=window.location.href;return"settings"===(t=o,d.parseUrl(t).query.frameContext)?n.a.createElement("div",null,n.a.createElement(w,null)):n.a.createElement(Y,{onThemeChange:e.onThemeChange})},X=o(23);!function(e){e.Dark="dark",e.Default="default",e.Contrast="contrast"}(Q||(Q={}));var Z=function(e){var t;switch(e){case Q.Contrast:return t={componentVariables:{ContentViewWrapper:function(e){return{backgroundColor:e.colorScheme.default.background2}},ListItem:function(e){var t=e.colorScheme;return{backgroundColor:t.default.background,hoverBackgroundColor:t.default.backgroundHover1,hoverTextColor:t.default.foregroundFocus,activeBackgroundColor:t.default.borderActive,activeTextColor:t.default.foregroundFocus}},Segment:function(e){var t=e.colorScheme;return{backgroundColor:t.default.background,hoverBackgroundColor:t.default.backgroundHover1,hoverTextColor:t.default.foregroundFocus,activeBackgroundColor:t.default.borderActive,activeTextColor:t.default.foregroundFocus}},Input:function(e){return{inputBackgroundColor:e.colorScheme.default.background}}},componentStyles:{ContentViewWrapper:{root:function(e){return{backgroundColor:e.variables.backgroundColor}}},ListItem:{root:function(e){var t=e.variables;return{backgroundColor:t.backgroundColor,":hover":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor},":active":{backgroundColor:t.activeBackgroundColor,color:t.activeTextColor},":focus":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor}}}},Input:{input:function(e){return{backgroundColor:e.variables.inputBackgroundColor}}},Segment:{root:function(e){var t=e.variables;return{":hover":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor},":active":{backgroundColor:t.activeBackgroundColor,color:t.activeTextColor},":focus":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor}}}}}},Object(X.a)(M.themes.teamsHighContrast,t);case Q.Dark:return t={componentVariables:{ContentViewWrapper:function(e){return{backgroundColor:e.colorScheme.default.background2}},ListItem:function(e){var t=e.colorScheme;return{backgroundColor:t.default.background,hoverBackgroundColor:t.default.backgroundHover1,hoverTextColor:t.default.foregroundFocus,activeBackgroundColor:t.default.borderActive,activeTextColor:t.default.foregroundFocus}},Segment:function(e){var t=e.colorScheme;return{backgroundColor:t.default.background,hoverBackgroundColor:t.default.backgroundHover1,hoverTextColor:t.default.foregroundFocus,activeBackgroundColor:t.default.borderActive,activeTextColor:t.default.foregroundFocus}},Input:function(e){return{inputBackgroundColor:e.colorScheme.default.background}}},componentStyles:{ContentViewWrapper:{root:function(e){return{backgroundColor:e.variables.backgroundColor}}},ListItem:{root:function(e){var t=e.variables;return{backgroundColor:t.backgroundColor,":hover":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor},":active":{backgroundColor:t.activeBackgroundColor,color:t.activeTextColor},":focus":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor}}}},Input:{input:function(e){return{backgroundColor:e.variables.inputBackgroundColor}}},Segment:{root:function(e){var t=e.variables;return{":hover":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor},":active":{backgroundColor:t.activeBackgroundColor,color:t.activeTextColor},":focus":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor}}}}}},Object(X.a)(M.themes.teamsDark,t);default:return t={componentVariables:{ContentViewWrapper:function(e){return{backgroundColor:e.colorScheme.default.background2}},ListItem:function(e){var t=e.colorScheme;return{backgroundColor:t.default.background,hoverBackgroundColor:t.default.backgroundHover1,hoverTextColor:t.default.foregroundFocus,activeBackgroundColor:t.default.borderActive,activeTextColor:t.default.foregroundFocus}},Segment:function(e){var t=e.colorScheme;return{backgroundColor:t.default.background,hoverBackgroundColor:t.default.backgroundHover1,hoverTextColor:t.default.foregroundFocus,activeBackgroundColor:t.default.borderActive,activeTextColor:t.default.foregroundFocus}},Input:function(e){return{inputBackgroundColor:e.colorScheme.default.background}}},componentStyles:{ContentViewWrapper:{root:function(e){return{backgroundColor:e.variables.backgroundColor}}},ListItem:{root:function(e){var t=e.variables;return{backgroundColor:t.backgroundColor,":hover":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor},":active":{backgroundColor:t.activeBackgroundColor,color:t.activeTextColor},":focus":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor}}}},Input:{input:function(e){return{backgroundColor:e.variables.inputBackgroundColor}}},Segment:{root:function(e){var t=e.variables;return{":hover":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor},":active":{backgroundColor:t.activeBackgroundColor,color:t.activeTextColor},":focus":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor}}}}}},Object(X.a)(M.themes.teams,t)}};i.a.render(n.a.createElement(function(){var e=Z(function(e){var t=d.parseUrl(e).query.theme;return t||"default"}(window.location.href)),t=n.a.useState(e),o=Object(l.a)(t,2),r=o[0],a=o[1];return n.a.createElement(u.a,{theme:r},n.a.createElement($,{onThemeChange:function(e){a(Z(e))}}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[294,1,2]]]);
//# sourceMappingURL=main.45cfd317.chunk.js.map