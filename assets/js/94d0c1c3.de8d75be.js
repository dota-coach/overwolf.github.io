"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4361],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){return function(t){var n=p(t.components);return a.createElement(e,l({},t,{components:n}))}},p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,g=s["".concat(o,".").concat(u)]||s[u]||c[u]||l;return n?a.createElement(g,d(d({ref:t},m),{},{components:n})):a.createElement(g,d({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},66144:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var a,r=n(87462),l=n(63366),o=(n(67294),n(3905)),d=["components"],i={id:"legends-of-runeterra",title:"Legends of Runeterra Game events",hide_title:!0,sidebar_label:"Legends of Runeterra"},m=void 0,s={unversionedId:"api/games/events/legends-of-runeterra",id:"api/games/events/legends-of-runeterra",title:"Legends of Runeterra Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/legends-of-runeterra.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/legends-of-runeterra",permalink:"/api/games/events/legends-of-runeterra",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/legends-of-runeterra.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657792208,formattedLastUpdatedAt:"7/14/2022",frontMatter:{id:"legends-of-runeterra",title:"Legends of Runeterra Game events",hide_title:!0,sidebar_label:"Legends of Runeterra"},sidebar:"api",previous:{title:"League of Legends",permalink:"/api/games/events/league-of-legends"},next:{title:"Magic: The Gathering Arena",permalink:"/api/games/events/magic-the-gathering-arena"}},p={},u=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"<code>game_client_data</code>",id:"game_client_data",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>active_deck</em> note",id:"active_deck-note",level:4},{value:"<em>card_positions</em> note",id:"card_positions-note",level:4},{value:"<em>expeditions</em> note",id:"expeditions-note",level:4},{value:"<em>game_result</em> note",id:"game_result-note",level:4}],c=(a="GameInfo",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),g={toc:u};function f(e){var t=e.components,n=(0,l.Z)(e,d);return(0,o.mdx)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("head",null,(0,o.mdx)("meta",{name:"keywords",content:"API for Legends of Runeterra, Legends of Runeterra API, SDK for Legends of Runeterra, Legends of Runeterra SDK"})),(0,o.mdx)(c,{gameID:21620,showCompliance:!0,showDocs:!1,mdxType:"GameInfo"}),(0,o.mdx)("p",null,"Please read the ",(0,o.mdx)("a",{parentName:"p",href:"."},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,o.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"Legends of Runeterra game events sample app"))),(0,o.mdx)("p",null,"An official Riot API is available at the following link - ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.riotgames.com/docs/lor"},"https://developer.riotgames.com/docs/lor"),".\nIf you have further requests for events that you require please contact us at ",(0,o.mdx)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com")),(0,o.mdx)("h2",{id:"available-features"},"Available Features"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#game_client_data"},"game_client_data"))),(0,o.mdx)("h2",{id:"game_client_data"},(0,o.mdx)("inlineCode",{parentName:"h2"},"game_client_data")),(0,o.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"key"),(0,o.mdx)("th",{parentName:"tr",align:null},"Category"),(0,o.mdx)("th",{parentName:"tr",align:null},"Values"),(0,o.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,o.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"active_deck"),(0,o.mdx)("td",{parentName:"tr",align:null},"game_client_data"),(0,o.mdx)("td",{parentName:"tr",align:null},"The current active deck (deck that is being played)"),(0,o.mdx)("td",{parentName:"tr",align:null},"See ",(0,o.mdx)("a",{parentName:"td",href:"#active_deck-note"},"notes")),(0,o.mdx)("td",{parentName:"tr",align:null},"146.0.7")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"card_positions"),(0,o.mdx)("td",{parentName:"tr",align:null},"game_client_data"),(0,o.mdx)("td",{parentName:"tr",align:null},"The card positions on the screen."),(0,o.mdx)("td",{parentName:"tr",align:null},"See ",(0,o.mdx)("a",{parentName:"td",href:"#card_positions-note"},"notes")),(0,o.mdx)("td",{parentName:"tr",align:null},"146.0.7")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"expeditions"),(0,o.mdx)("td",{parentName:"tr",align:null},"game_client_data"),(0,o.mdx)("td",{parentName:"tr",align:null},"Whether an expedition game is in progress or not."),(0,o.mdx)("td",{parentName:"tr",align:null},"See ",(0,o.mdx)("a",{parentName:"td",href:"#expeditions-note"},"notes")),(0,o.mdx)("td",{parentName:"tr",align:null},"146.0.7")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"game_result"),(0,o.mdx)("td",{parentName:"tr",align:null},"game_client_data"),(0,o.mdx)("td",{parentName:"tr",align:null},"Victory / Defeat"),(0,o.mdx)("td",{parentName:"tr",align:null},"See ",(0,o.mdx)("a",{parentName:"td",href:"#game_result-note"},"notes")),(0,o.mdx)("td",{parentName:"tr",align:null},"146.0.7")))),(0,o.mdx)("h4",{id:"active_deck-note"},(0,o.mdx)("em",{parentName:"h4"},"active_deck")," note"),(0,o.mdx)("p",null,"Describe the player's current deck in an active game."),(0,o.mdx)("p",null,"Data Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'// player is not in an active game\n{"active_deck":"{\\"DeckCode\\":null,\\"CardsInDeck\\":null}"}},"feature":"game_client_data"}\n\n// player is in an active game\n{"active_deck":"{\\"DeckCode\\":\\"CEBAGAIDFYYTOBABAIBAQDZZAICACAYEEQVDMBIBAIFQYJBFHAAQCAICEE\\",\\"CardsInDeck\\":{\\"01NX046\\":3,\\"01NX049\\":3,\\"01NX055\\":3,\\"01IO002\\":3,\\"01IO008\\":3,\\"01IO015\\":3,\\"01IO057\\":3,\\"01NX004\\":2,\\"01NX036\\":2,\\"01NX042\\":2,\\"01NX054\\":2,\\"01IO011\\":2,\\"01IO012\\":2,\\"01IO036\\":2,\\"01IO037\\":2,\\"01IO056\\":2,\\"01IO033\\":1}}"}},"feature":"game_client_data"}\n')),(0,o.mdx)("h4",{id:"card_positions-note"},(0,o.mdx)("em",{parentName:"h4"},"card_positions")," note"),(0,o.mdx)("p",null,"Determine the position of the cards in the collection, deck builder, Expedition drafts, and active games. returns the position of the cards at the time of the request."),(0,o.mdx)("p",null,"Data Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{"PlayerName":null,"OpponentName":null,"GameState":"Menus","Screen":{"ScreenWidth":1920,"ScreenHeight":1080},"Rectangles":[]}"}\n\n//OR \n\n{"PlayerName":"Sh4rgaas","OpponentName":"decks_mediumelise_name","GameState":"InProgress","Screen":{"ScreenWidth":1920,"ScreenHeight":1080},"Rectangles":[{"CardID":1510579131,"CardCode":"face","TopLeftX":179,"TopLeftY":481,"Width":117,"Height":117,"LocalPlayer":true},{"CardID":1487329530,"CardCode":"face","TopLeftX":179,"TopLeftY":716,"Width":117,"Height":117,"LocalPlayer":false}]}"}\n')),(0,o.mdx)("h4",{id:"expeditions-note"},(0,o.mdx)("em",{parentName:"h4"},"expeditions")," note"),(0,o.mdx)("p",null,"Determine the cards player drafts during an Expedition.\nReturns a number of fields including the current state of the Expedition and a list of card codes that have been drafted."),(0,o.mdx)("p",null,"Data Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{"game_client_data":{"expeditions":"{"IsActive":true,"State":"Picking","Record":[],"DraftPicks":[],"Deck":[],"Games":0,"Wins":0,"Losses":0}"}}\n')),(0,o.mdx)("h4",{id:"game_result-note"},(0,o.mdx)("em",{parentName:"h4"},"game_result")," note"),(0,o.mdx)("p",null,"Determine the result of the player's most recently completed game.\nThe request returns an int for GameID and a boolean for LocalPlayerWon."),(0,o.mdx)("p",null,"Data Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{"GameID":2,"LocalPlayerWon":false}"}\n')))}f.isMDXComponent=!0}}]);