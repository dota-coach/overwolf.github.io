"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3821],{35318:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>N});var n=t(27378);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=p(t),d=r,N=g["".concat(i,".").concat(d)]||g[d]||u[d]||l;return t?n.createElement(N,m(m({ref:a},s),{},{components:t})):n.createElement(N,m({ref:a},s))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,m=new Array(l);m[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[g]="string"==typeof e?e:r,m[1]=o;for(var p=2;p<l;p++)m[p]=t[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54391:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>m,default:()=>N,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(25773),r=(t(27378),t(35318));const l={id:"league-of-legends",image:"/img/embed/games/launchers/league-of-legends.jpg",title:"League of Legends Launcher Events",hide_title:!0,sidebar_label:"LOL Launcher",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},m=void 0,o={unversionedId:"api/live-game-data/supported-launchers/league-of-legends",id:"api/live-game-data/supported-launchers/league-of-legends",title:"League of Legends Launcher Events",description:"Please read the overwolf.games.launchers.events documentation page to learn how to use Overwolf game launchers events.",source:"@site/pages/docs/api/live-game-data/supported-launchers/league-of-legends.mdx",sourceDirName:"api/live-game-data/supported-launchers",slug:"/api/live-game-data/supported-launchers/league-of-legends",permalink:"/api/live-game-data/supported-launchers/league-of-legends",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/live-game-data/supported-launchers/league-of-legends.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1695290010,formattedLastUpdatedAt:"Sep 21, 2023",frontMatter:{id:"league-of-legends",image:"/img/embed/games/launchers/league-of-legends.jpg",title:"League of Legends Launcher Events",hide_title:!0,sidebar_label:"LOL Launcher",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"World of Warships",permalink:"/api/live-game-data/supported-games/world-of-warships"},next:{title:"Deprecated",permalink:"/api/live-game-data/deprecated/"}},i={},p=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2}],s=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},g=s("GameInfo"),u=s("Tagger"),d={toc:p};function N(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"keywords",content:"API for League of Legends Launcher, League of Legends Launcher API, SDK for League of Legends Launcher, League of Legends Launcher SDK"})),(0,r.kt)(g,{gameId:10902,page:"docs",mdxType:"GameInfo"}),(0,r.kt)("p",null,"Please read the ",(0,r.kt)("a",{parentName:"p",href:"/api/live-game-data#how-to-register-for-features"},"overwolf.games.launchers.events")," documentation page to learn how to use Overwolf game launchers events."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"if the  game launcher wasn't closed by the user, it is possible to access game launcher methods while being in-game.")),(0,r.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"LOL game launcher sample app"))),(0,r.kt)("h2",{id:"available-features"},"Available Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#game_flow"},"game_flow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#summoner_info"},"summoner_info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#champ_select"},"champ_select")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#lobby_info"},"lobby_info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#end_game"},"end_game")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#lcu_info"},"lcu_info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clash"},"clash"))),(0,r.kt)(u,{type:"InfoUpdate",mdxType:"Tagger"},(0,r.kt)("h2",{parentName:"Tagger",id:"game_flow"},(0,r.kt)("inlineCode",{parentName:"h2"},"game_flow")),(0,r.kt)("h3",{parentName:"Tagger",id:"info-updates"},"Info Updates"),(0,r.kt)("table",{parentName:"Tagger"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phase"),(0,r.kt)("td",{parentName:"tr",align:null},"game_flow"),(0,r.kt)("td",{parentName:"tr",align:null},"Current phase in the game"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#phase-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")))),(0,r.kt)("h4",{parentName:"Tagger",id:"phase-note"},(0,r.kt)("em",{parentName:"h4"},"phase")," note"),(0,r.kt)("p",{parentName:"Tagger"},"Data Example:"),(0,r.kt)("pre",{parentName:"Tagger"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_flow","category":"game_flow","key":"phase","value":"Lobby"}\n{"feature":"game_flow","category":"game_flow","key":"phase","value":"ReadyCheck"}\n{"feature":"game_flow","category":"game_flow","key":"phase","value":"ChampSelect"}\n{"feature":"game_flow","category":"game_flow","key":"phase","value":"GameStart"}\n{"feature":"game_flow","category":"game_flow","key":"phase","value":"InProgress"}\n{"feature":"game_flow","category":"game_flow","key":"phase","value":"WaitingForStats"}\n{"feature":"game_flow","category":"game_flow","key":"phase","value":"PreEndOfGame"}\n{"feature":"game_flow","category":"game_flow","key":"phase","value":"EndOfGame"}\n'))),(0,r.kt)(u,{type:"InfoUpdate",mdxType:"Tagger"},(0,r.kt)("h2",{parentName:"Tagger",id:"summoner_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"summoner_info")),(0,r.kt)("h3",{parentName:"Tagger",id:"info-updates-1"},"Info Updates"),(0,r.kt)("table",{parentName:"Tagger"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account_id"),(0,r.kt)("td",{parentName:"tr",align:null},"summoner_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Local player\u2019s account id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"summoner_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Local player\u2019s display name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"internal_name"),(0,r.kt)("td",{parentName:"tr",align:null},"summoner_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Local player\u2019s internal name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"profile_icon_id"),(0,r.kt)("td",{parentName:"tr",align:null},"summoner_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Local player\u2019s icon id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"summoner_id"),(0,r.kt)("td",{parentName:"tr",align:null},"summoner_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Local player\u2019s summoner id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"summoner_level"),(0,r.kt)("td",{parentName:"tr",align:null},"summoner_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Local player\u2019s summoner level"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"region"),(0,r.kt)("td",{parentName:"tr",align:null},"summoner_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Local player\u2019s server (EU/NA etc)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"locale"),(0,r.kt)("td",{parentName:"tr",align:null},"summoner_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Local player\u2019s selected LoL client language"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web_language"),(0,r.kt)("td",{parentName:"tr",align:null},"summoner_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Local player\u2019s type of language"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web_region"),(0,r.kt)("td",{parentName:"tr",align:null},"summoner_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Local player\u2019s web region"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platform_id"),(0,r.kt)("td",{parentName:"tr",align:null},"summoner_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Local player\u2019s platform id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_garena_user"),(0,r.kt)("td",{parentName:"tr",align:null},"summoner_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean - True / False"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#is_garena_user-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,r.kt)("h4",{parentName:"Tagger",id:"is_garena_user-note"},(0,r.kt)("em",{parentName:"h4"},"is_garena_user")," note"),(0,r.kt)("p",{parentName:"Tagger"},"Data Example:"),(0,r.kt)("pre",{parentName:"Tagger"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"summoner_info","category":"summoner_info","key":"is_garena_user","value":false}\n{"feature":"summoner_info","category":"summoner_info","key":"is_garena_user","value":true}\n'))),(0,r.kt)(u,{type:"InfoUpdate",mdxType:"Tagger"},(0,r.kt)("h2",{parentName:"Tagger",id:"champ_select"},(0,r.kt)("inlineCode",{parentName:"h2"},"champ_select")),(0,r.kt)("h3",{parentName:"Tagger",id:"info-updates-2"},"Info Updates"),(0,r.kt)("table",{parentName:"Tagger"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"raw"),(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},"All relevant information regarding Champion selection pre-start of the game. See ",(0,r.kt)("a",{parentName:"td",href:"#raw-notes"},"notes below")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"125.0")))),(0,r.kt)("h4",{parentName:"Tagger",id:"raw-notes"},(0,r.kt)("inlineCode",{parentName:"h4"},"raw")," notes"),(0,r.kt)("p",{parentName:"Tagger"},"There is a great deal of information provided. Few Example:"),(0,r.kt)("ul",{parentName:"Tagger"},(0,r.kt)("li",{parentName:"ul"},"Assigned Position"),(0,r.kt)("li",{parentName:"ul"},"Skin ID"),(0,r.kt)("li",{parentName:"ul"},"Champion ID"),(0,r.kt)("li",{parentName:"ul"},"Summoner Name")),(0,r.kt)("p",{parentName:"Tagger"},"And much more."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Data example: (Click here to toggle)"),(0,r.kt)("pre",{parentName:"Tagger"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "actions": [\n    \n  ],\n  "allowBattleBoost": false,\n  "allowDuplicatePicks": false,\n  "allowLockedEvents": false,\n  "allowRerolling": false,\n  "allowSkinSelection": true,\n  "bans": {\n    "myTeamBans": [\n      \n    ],\n    "numBans": 0,\n    "theirTeamBans": [\n      \n    ]\n  },\n  "benchChampionIds": [\n    \n  ],\n  "benchEnabled": false,\n  "boostableSkinCount": 1,\n  "chatDetails": {\n    "chatRoomName": "",\n    "chatRoomPassword": null\n  },\n  "counter": -1,\n  "entitledFeatureState": {\n    "additionalRerolls": 0,\n    "unlockedSkinIds": [\n      \n    ]\n  },\n  "hasSimultaneousBans": false,\n  "hasSimultaneousPicks": false,\n  "isSpectating": false,\n  "localPlayerCellId": -1,\n  "lockedEventIndex": -1,\n  "myTeam": [\n    \n  ],\n  "rerollsRemaining": 0,\n  "skipChampionSelect": false,\n  "theirTeam": [\n    \n  ],\n  "timer": {\n    "adjustedTimeLeftInPhase": 0,\n    "adjustedTimeLeftInPhaseInSec": 0,\n    "internalNowInEpochMs": 0,\n    "isInfinite": false,\n    "phase": "",\n    "timeLeftInPhase": 0,\n    "timeLeftInPhaseInSec": 0,\n    "totalTimeInPhase": 0\n  },\n  "trades": [\n    \n  ]\n}\n')))),(0,r.kt)(u,{type:"InfoUpdate",mdxType:"Tagger"},(0,r.kt)("h2",{parentName:"Tagger",id:"lobby_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"lobby_info")),(0,r.kt)("h3",{parentName:"Tagger",id:"info-updates-3"},"Info Updates"),(0,r.kt)("table",{parentName:"Tagger"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queueID"),(0,r.kt)("td",{parentName:"tr",align:null},"lobby_info"),(0,r.kt)("td",{parentName:"tr",align:null},"The queueID of the currently chosen game mode. See ",(0,r.kt)("a",{parentName:"td",href:"#queueid-notes"},"notes below")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"126.0")))),(0,r.kt)("h4",{parentName:"Tagger",id:"queueid-notes"},(0,r.kt)("inlineCode",{parentName:"h4"},"queueID")," notes"),(0,r.kt)("p",{parentName:"Tagger"},"The queueID of the currently chosen game mode. Example:"),(0,r.kt)("p",{parentName:"Tagger"},(0,r.kt)("inlineCode",{parentName:"p"},'{"feature":"lobby_info","category":"lobby_info","key":"queueId","value":1090}')),(0,r.kt)("ul",{parentName:"Tagger"},(0,r.kt)("li",{parentName:"ul"},"You can find here a ",(0,r.kt)("a",{parentName:"li",href:"https://developer.riotgames.com/game-constants.html"},"list of possible queue ids"),". "),(0,r.kt)("li",{parentName:"ul"},"1090 is the queueID of TFT regular match."),(0,r.kt)("li",{parentName:"ul"},"1100 is the queueID of TFT ranked match."))),(0,r.kt)(u,{type:"InfoUpdate",mdxType:"Tagger"},(0,r.kt)("h2",{parentName:"Tagger",id:"end_game"},(0,r.kt)("inlineCode",{parentName:"h2"},"end_game")),(0,r.kt)("h3",{parentName:"Tagger",id:"info-updates-4"},"Info Updates"),(0,r.kt)("table",{parentName:"Tagger"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tft_end_game_stats"),(0,r.kt)("td",{parentName:"tr",align:null},"end_game_tft"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#tft_end_game_stats-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"134.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lol_end_game_stats"),(0,r.kt)("td",{parentName:"tr",align:null},"end_game_lol"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#lol_end_game_stats-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"137.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"league_points"),(0,r.kt)("td",{parentName:"tr",align:null},"end_game_lol"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#league_points_stats-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"194.0")))),(0,r.kt)("h4",{parentName:"Tagger",id:"tft_end_game_stats-note"},(0,r.kt)("em",{parentName:"h4"},"tft_end_game_stats")," note"),(0,r.kt)("p",{parentName:"Tagger"},"Data Example:"),(0,r.kt)("pre",{parentName:"Tagger"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "launcherClassId": 10902,\n   "feature": "end_game",\n   "info": {\n      "end_game_tft": \n      {\n         "tft_end_game_stats":\n         "{"gameId":4156875865,"gameLength":1983,"isRanked":false,"localPlayer": {"boardPieces":[{"icon":"/lol-game-data/assets/v1/champion-icons/10.png","level":2,"name":"Kayle","price":5} ,{"icon":"/lol-game-data/assets/v1/champion-icons/222.png","level":2,"name":"Jinx","price":4}, {"icon":"/lol-game-data/assets/v1/champion-icons/89.png","level":2,"name":"Leona","price":4}, {"icon":"/lol-game-data/assets/v1/champion-icons/254.png","level":2,"name":"Vi","price":3}, {"icon":"/lol-game-data/assets/v1/champion-icons/236.png","level":2,"name":"Lucian","price":2}, {"icon":"/lol-game-data/assets/v1/champion-icons/114.png","level":2,"name":"Fiora","price":1}, {"icon":"/lol-game-data/assets/v1/champion-icons/86.png","level":2,"name":"Garen","price":1}, {"icon":"/lol-game-data/assets/v1/champion-icons/67.png","level":2,"name":"Vayne","price":1}],"companion":{"colorName":"","icon":"lol-game-data/assets/ASSETS/Loadouts/Companions/Tooltip_MiniGolem_Grey_Tier1.Companions.png","speciesName":"Runespirit"} ,"ffaStanding":0,"health":13,"iconId":3552,"isLocalPlayer":true,"puuid":"4379f318-5717-5891-8c29-29d703729921","rank":2,"summonerId":57427695,"summonerName":"PoSeiDonProX1"}\n      }\n   }\n}\n')),(0,r.kt)("h4",{parentName:"Tagger",id:"lol_end_game_stats-note"},(0,r.kt)("em",{parentName:"h4"},"lol_end_game_stats")," note"),(0,r.kt)("p",{parentName:"Tagger"},"Provides a variety of data regarding the previous game.",(0,r.kt)("br",{parentName:"p"}),"\n","Data includes information such as:"),(0,r.kt)("ul",{parentName:"Tagger"},(0,r.kt)("li",{parentName:"ul"},"Damage Dealt"),(0,r.kt)("li",{parentName:"ul"},"Damage Taken"),(0,r.kt)("li",{parentName:"ul"},"Heals Given"),(0,r.kt)("li",{parentName:"ul"},"Magic Damage"),(0,r.kt)("li",{parentName:"ul"},"True Damage"),(0,r.kt)("li",{parentName:"ul"},"etc. etc..")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Data example: (Click here to toggle)"),(0,r.kt)("pre",{parentName:"Tagger"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accountId": 2152743763473376,\n  "basePoints": 0,\n  "battleBoostIpEarned": 0,\n  "boostIpEarned": 0,\n  "boostXpEarned": 0,\n  "causedEarlySurrender": false,\n  "championId": 122,\n  "coOpVsAiMinutesLeftToday": 180,\n  "coOpVsAiMsecsUntilReset": 0,\n  "completionBonusPoints": 0,\n  "currentLevel": 2,\n  "customMinutesLeftToday": 0,\n  "customMsecsUntilReset": 0,\n  "difficulty": "EASY",\n  "earlySurrenderAccomplice": false,\n  "elo": 0,\n  "eloChange": 0,\n  "experienceEarned": 0,\n  "experienceTotal": 6,\n  "firstWinBonus": 0,\n  "gameEndedInEarlySurrender": false,\n  "gameId": 2371440758,\n  "gameLength": 1092,\n  "gameMode": "CLASSIC",\n  "gameMutators": [\n    "Banana",\n    "Moments",\n    "TeambuilderRosterPositions(1)",\n    "BannerSystem(1)",\n    "TrophySystem(1)",\n    "TeamPass_Summer2019",\n    "SRTrophyWinner(8)"\n  ],\n  "gameType": "CUSTOM_GAME",\n  "globalBoostXpEarned": 0,\n  "imbalancedTeamsNoPoints": false,\n  "invalid": false,\n  "ipEarned": 0,\n  "ipTotal": 0,\n  "leveledUp": false,\n  "loyaltyBoostIpEarned": 0,\n  "loyaltyBoostXpEarned": 0,\n  "missionsXpEarned": 0,\n  "myTeamStatus": "",\n  "newSpells": [\n    \n  ],\n  "nextLevelXp": 144,\n  "odinBonusIp": 0,\n  "partyRewardsBonusIpEarned": 0,\n  "pointsPenalties": null,\n  "preLevelUpExperienceTotal": 0,\n  "preLevelUpNextLevelXp": 0,\n  "previousLevel": 2,\n  "previousXpTotal": 6,\n  "queueBonusEarned": 0,\n  "queueType": "NONE",\n  "ranked": false,\n  "reportGameId": 2371440758,\n  "rerollData": {\n    "pointChangeFromChampionsOwned": 0,\n    "pointChangeFromGameplay": 0,\n    "pointsUntilNextReroll": 0,\n    "pointsUsed": 0,\n    "previousPoints": 0,\n    "rerollCount": 0,\n    "totalPoints": 0\n  },\n  "roomName": "endGame2371440758",\n  "roomPassword": "B4esuu1usdpgIDWh",\n  "rpEarned": 0,\n  "sendStatsToTournamentProvider": false,\n  "skinId": 122000,\n  "skinIndex": 0,\n  "summonerId": 78474202,\n  "summonerName": "eransharv",\n  "talentPointsGained": 0,\n  "teamBoost": null,\n  "teamEarlySurrendered": false,\n  "teams": [\n    {\n      "championBans": [\n        \n      ],\n      "fullId": "",\n      "isBottomTeam": true,\n      "isPlayerTeam": true,\n      "isWinningTeam": false,\n      "memberStatusString": "",\n      "name": "",\n      "players": [\n        {\n          "botPlayer": false,\n          "championId": 122,\n          "detectedTeamPosition": "MIDDLE",\n          "elo": 0,\n          "eloChange": 0,\n          "gameId": 2371440758,\n          "isReportingDisabled": false,\n          "items": [\n            2003,\n            1054,\n            1054,\n            1054,\n            1054,\n            1054,\n            3340\n          ],\n          "leaver": false,\n          "leaves": 0,\n          "level": 2,\n          "losses": 0,\n          "profileIconId": 3546,\n          "selectedPosition": "",\n          "skinIndex": 0,\n          "skinName": "Darius",\n          "spell1Id": 6,\n          "spell2Id": 7,\n          "stats": {\n            "ASSISTS": 0,\n            "BARRACKS_KILLED": 0,\n            "CHAMPIONS_KILLED": 0,\n            "COMBAT_PLAYER_SCORE": 0,\n            "GAME_ENDED_IN_EARLY_SURRENDER": 0,\n            "GAME_ENDED_IN_SURRENDER": 1,\n            "GOLD_EARNED": 3811,\n            "LARGEST_CRITICAL_STRIKE": 0,\n            "LARGEST_KILLING_SPREE": 0,\n            "LARGEST_MULTI_KILL": 0,\n            "LEVEL": 9,\n            "LOSE": 1,\n            "MAGIC_DAMAGE_DEALT_PLAYER": 0,\n            "MAGIC_DAMAGE_DEALT_TO_CHAMPIONS": 0,\n            "MAGIC_DAMAGE_TAKEN": 0,\n            "MINIONS_KILLED": 41,\n            "NEUTRAL_MINIONS_KILLED": 0,\n            "NEUTRAL_MINIONS_KILLED_ENEMY_JUNGLE": 0,\n            "NEUTRAL_MINIONS_KILLED_YOUR_JUNGLE": 0,\n            "NUM_DEATHS": 5,\n            "OBJECTIVE_PLAYER_SCORE": 0,\n            "PERK0": 8437,\n            "PERK0_VAR1": 0,\n            "PERK0_VAR2": 0,\n            "PERK0_VAR3": 0,\n            "PERK1": 8446,\n            "PERK1_VAR1": 2059,\n            "PERK1_VAR2": 0,\n            "PERK1_VAR3": 0,\n            "PERK2": 8444,\n            "PERK2_VAR1": 0,\n            "PERK2_VAR2": 0,\n            "PERK2_VAR3": 0,\n            "PERK3": 8451,\n            "PERK3_VAR1": 112,\n            "PERK3_VAR2": 0,\n            "PERK3_VAR3": 0,\n            "PERK4": 8224,\n            "PERK4_VAR1": 0,\n            "PERK4_VAR2": 0,\n            "PERK4_VAR3": 0,\n            "PERK5": 8237,\n            "PERK5_VAR1": 0,\n            "PERK5_VAR2": 0,\n            "PERK5_VAR3": 0,\n            "PERK_PRIMARY_STYLE": 8400,\n            "PERK_SUB_STYLE": 8200,\n            "PHYSICAL_DAMAGE_DEALT_PLAYER": 20384,\n            "PHYSICAL_DAMAGE_DEALT_TO_CHAMPIONS": 0,\n            "PHYSICAL_DAMAGE_TAKEN": 11724,\n            "SIGHT_WARDS_BOUGHT_IN_GAME": 0,\n            "SPELL1_CAST": 0,\n            "SPELL2_CAST": 29,\n            "TEAM_EARLY_SURRENDERED": 0,\n            "TEAM_OBJECTIVE": 0,\n            "TIME_CCING_OTHERS": 0,\n            "TOTAL_DAMAGE_DEALT": 21924,\n            "TOTAL_DAMAGE_DEALT_TO_BUILDINGS": 4117,\n            "TOTAL_DAMAGE_DEALT_TO_CHAMPIONS": 0,\n            "TOTAL_DAMAGE_DEALT_TO_OBJECTIVES": 4117,\n            "TOTAL_DAMAGE_DEALT_TO_TURRETS": 4117,\n            "TOTAL_DAMAGE_SELF_MITIGATED": 6377,\n            "TOTAL_DAMAGE_SHIELDED_ON_TEAMMATES": 0,\n            "TOTAL_DAMAGE_TAKEN": 11724,\n            "TOTAL_HEAL": 120,\n            "TOTAL_HEAL_ON_TEAMMATES": 0,\n            "TOTAL_PLAYER_SCORE": 0,\n            "TOTAL_SCORE_RANK": 0,\n            "TOTAL_TIME_CROWD_CONTROL_DEALT": 52,\n            "TOTAL_TIME_SPENT_DEAD": 133,\n            "TRUE_DAMAGE_DEALT_PLAYER": 1540,\n            "TRUE_DAMAGE_DEALT_TO_CHAMPIONS": 0,\n            "TRUE_DAMAGE_TAKEN": 0,\n            "TURRETS_KILLED": 0,\n            "VISION_SCORE": 0,\n            "VISION_WARDS_BOUGHT_IN_GAME": 0,\n            "WARD_KILLED": 0,\n            "WARD_PLACED": 0\n          },\n          "summonerId": 78474202,\n          "summonerName": "eransharv",\n          "teamId": 100,\n          "userId": 78474202,\n          "wins": 0\n        }\n      ],\n      "stats": {\n        "ASSISTS": 0,\n        "BARRACKS_KILLED": 0,\n        "CHAMPIONS_KILLED": 0,\n        "COMBAT_PLAYER_SCORE": 0,\n        "GAME_ENDED_IN_EARLY_SURRENDER": 0,\n        "GAME_ENDED_IN_SURRENDER": 1,\n        "GOLD_EARNED": 3811,\n        "LARGEST_CRITICAL_STRIKE": 0,\n        "LARGEST_KILLING_SPREE": 0,\n        "LARGEST_MULTI_KILL": 0,\n        "LEVEL": 9,\n        "LOSE": 1,\n        "MAGIC_DAMAGE_DEALT_PLAYER": 0,\n        "MAGIC_DAMAGE_DEALT_TO_CHAMPIONS": 0,\n        "MAGIC_DAMAGE_TAKEN": 0,\n        "MINIONS_KILLED": 41,\n        "NEUTRAL_MINIONS_KILLED": 0,\n        "NEUTRAL_MINIONS_KILLED_ENEMY_JUNGLE": 0,\n        "NEUTRAL_MINIONS_KILLED_YOUR_JUNGLE": 0,\n        "NUM_DEATHS": 5,\n        "OBJECTIVE_PLAYER_SCORE": 0,\n        "PERK0": 8437,\n        "PERK0_VAR1": 0,\n        "PERK0_VAR2": 0,\n        "PERK0_VAR3": 0,\n        "PERK1": 8446,\n        "PERK1_VAR1": 2059,\n        "PERK1_VAR2": 0,\n        "PERK1_VAR3": 0,\n        "PERK2": 8444,\n        "PERK2_VAR1": 0,\n        "PERK2_VAR2": 0,\n        "PERK2_VAR3": 0,\n        "PERK3": 8451,\n        "PERK3_VAR1": 112,\n        "PERK3_VAR2": 0,\n        "PERK3_VAR3": 0,\n        "PERK4": 8224,\n        "PERK4_VAR1": 0,\n        "PERK4_VAR2": 0,\n        "PERK4_VAR3": 0,\n        "PERK5": 8237,\n        "PERK5_VAR1": 0,\n        "PERK5_VAR2": 0,\n        "PERK5_VAR3": 0,\n        "PERK_PRIMARY_STYLE": 8400,\n        "PERK_SUB_STYLE": 8200,\n        "PHYSICAL_DAMAGE_DEALT_PLAYER": 20384,\n        "PHYSICAL_DAMAGE_DEALT_TO_CHAMPIONS": 0,\n        "PHYSICAL_DAMAGE_TAKEN": 11724,\n        "SIGHT_WARDS_BOUGHT_IN_GAME": 0,\n        "SPELL1_CAST": 0,\n        "SPELL2_CAST": 29,\n        "TEAM_EARLY_SURRENDERED": 0,\n        "TEAM_OBJECTIVE": 0,\n        "TIME_CCING_OTHERS": 0,\n        "TOTAL_DAMAGE_DEALT": 21924,\n        "TOTAL_DAMAGE_DEALT_TO_BUILDINGS": 4117,\n        "TOTAL_DAMAGE_DEALT_TO_CHAMPIONS": 0,\n        "TOTAL_DAMAGE_DEALT_TO_OBJECTIVES": 4117,\n        "TOTAL_DAMAGE_DEALT_TO_TURRETS": 4117,\n        "TOTAL_DAMAGE_SELF_MITIGATED": 6377,\n        "TOTAL_DAMAGE_SHIELDED_ON_TEAMMATES": 0,\n        "TOTAL_DAMAGE_TAKEN": 11724,\n        "TOTAL_HEAL": 120,\n        "TOTAL_HEAL_ON_TEAMMATES": 0,\n        "TOTAL_PLAYER_SCORE": 0,\n        "TOTAL_SCORE_RANK": 0,\n        "TOTAL_TIME_CROWD_CONTROL_DEALT": 52,\n        "TOTAL_TIME_SPENT_DEAD": 133,\n        "TRUE_DAMAGE_DEALT_PLAYER": 1540,\n        "TRUE_DAMAGE_DEALT_TO_CHAMPIONS": 0,\n        "TRUE_DAMAGE_TAKEN": 0,\n        "TURRETS_KILLED": 0,\n        "VISION_SCORE": 0,\n        "VISION_WARDS_BOUGHT_IN_GAME": 0,\n        "WARD_KILLED": 0,\n        "WARD_PLACED": 0\n      },\n      "tag": "",\n      "teamId": 100\n    },\n    {\n      "championBans": [\n        \n      ],\n      "fullId": "",\n      "isBottomTeam": false,\n      "isPlayerTeam": false,\n      "isWinningTeam": false,\n      "memberStatusString": "",\n      "name": "",\n      "players": [\n        \n      ],\n      "stats": null,\n      "tag": "",\n      "teamId": 200\n    }\n  ],\n  "timeUntilNextFirstWinBonus": 0,\n  "userId": 2152743763473376\n}\n'))),(0,r.kt)("h4",{parentName:"Tagger",id:"league_points_stats-note"},(0,r.kt)("em",{parentName:"h4"},"league_points_stats")," note"),(0,r.kt)("p",{parentName:"Tagger"},"Total league points earned in the last game"),(0,r.kt)("p",{parentName:"Tagger"},"Data Example:"),(0,r.kt)("pre",{parentName:"Tagger"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"end_game","category":"end_game_lol","key":"league_points","value":56}\n'))),(0,r.kt)(u,{type:"InfoUpdate",mdxType:"Tagger"},(0,r.kt)("h2",{parentName:"Tagger",id:"lcu_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"lcu_info")),(0,r.kt)("h3",{parentName:"Tagger",id:"info-updates-5"},"Info Updates"),(0,r.kt)("table",{parentName:"Tagger"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lcu_info"),(0,r.kt)("td",{parentName:"tr",align:null},"credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"Credentials that are used to connect to the launcher API"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#lcu_info-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"135.0")))),(0,r.kt)("h4",{parentName:"Tagger",id:"lcu_info-note"},(0,r.kt)("em",{parentName:"h4"},"lcu_info")," note:"),(0,r.kt)("p",{parentName:"Tagger"},"Data Example:"),(0,r.kt)("pre",{parentName:"Tagger"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"lcu_info","category":"credentials","key":"token","value":"cmlvdDoyZ3ltZUNKN3JxNUNNdTliaGlCUlNR"}\n{"feature":"lcu_info","category":"credentials","key":"port","value":"61862"}\n'))),(0,r.kt)(u,{type:"InfoUpdate",mdxType:"Tagger"},(0,r.kt)("h2",{parentName:"Tagger",id:"game_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,r.kt)("h3",{parentName:"Tagger",id:"info-updates-6"},"Info Updates"),(0,r.kt)("table",{parentName:"Tagger"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"game_version"),(0,r.kt)("td",{parentName:"tr",align:null},"game_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Numerical version of the client."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#game_version-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"137.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close_client_during_game"),(0,r.kt)("td",{parentName:"tr",align:null},"game_info"),(0,r.kt)("td",{parentName:"tr",align:null},"True / False (Bool)"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#close_client_during_game-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"137.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selected_game"),(0,r.kt)("td",{parentName:"tr",align:null},"game_info"),(0,r.kt)("td",{parentName:"tr",align:null},"The selected game by the player"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#selected_game-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"218.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selected_positions"),(0,r.kt)("td",{parentName:"tr",align:null},"game_info"),(0,r.kt)("td",{parentName:"tr",align:null},"The first and second selected position"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#selected_positions-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"219.0")))),(0,r.kt)("h4",{parentName:"Tagger",id:"game_version-note"},(0,r.kt)("em",{parentName:"h4"},"game_version")," note:"),(0,r.kt)("p",{parentName:"Tagger"},"Data Example:"),(0,r.kt)("pre",{parentName:"Tagger"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"game_version","value":"9.21.2940813"}\n')),(0,r.kt)("h4",{parentName:"Tagger",id:"close_client_during_game-note"},(0,r.kt)("em",{parentName:"h4"},"close_client_during_game")," note"),(0,r.kt)("p",{parentName:"Tagger"},"Data Example:"),(0,r.kt)("pre",{parentName:"Tagger"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"close_client_during_game","value":false}\n')),(0,r.kt)("pre",{parentName:"Tagger"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"close_client_during_game","value":true}\n')),(0,r.kt)("h4",{parentName:"Tagger",id:"selected_game-note"},(0,r.kt)("em",{parentName:"h4"},"selected_game")," note"),(0,r.kt)("p",{parentName:"Tagger"},"Possible values:"),(0,r.kt)("ul",{parentName:"Tagger"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tft")," - this is a Teamfight Tactics game"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lol")," - this is a League of Legends game"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arena")," - this is a League of Legends Arena game")),(0,r.kt)("p",{parentName:"Tagger"},"Data Example:"),(0,r.kt)("pre",{parentName:"Tagger"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"selected_game","value":"tft"}\n{"feature":"game_info","category":"game_info","key":"selected_game","value":"lol"}\n{"feature":"game_info","category":"game_info","key":"selected_game","value":"arena"}\n')),(0,r.kt)("h4",{parentName:"Tagger",id:"selected_positions-note"},(0,r.kt)("em",{parentName:"h4"},"selected_positions")," note"),(0,r.kt)("p",{parentName:"Tagger"},"Possible values:"),(0,r.kt)("ul",{parentName:"Tagger"},(0,r.kt)("li",{parentName:"ul"},"TOP"),(0,r.kt)("li",{parentName:"ul"},"JUNGLE"),(0,r.kt)("li",{parentName:"ul"},"MIDDLE"),(0,r.kt)("li",{parentName:"ul"},"BOTTOM"),(0,r.kt)("li",{parentName:"ul"},"UTILITY (SUPPORT in the UI)"),(0,r.kt)("li",{parentName:"ul"},"FILL")),(0,r.kt)("p",{parentName:"Tagger"},"Data Example:"),(0,r.kt)("pre",{parentName:"Tagger"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"game_info","key":"selected_positions","value":"{\\"first_preference\\": \\"TOP\\", \\"second_preference\\": \\"JUNGLE\\"}"}\n'))),(0,r.kt)(u,{type:"InfoUpdate",mdxType:"Tagger"},(0,r.kt)("h2",{parentName:"Tagger",id:"clash"},(0,r.kt)("inlineCode",{parentName:"h2"},"clash")),(0,r.kt)("h3",{parentName:"Tagger",id:"info-updates-7"},"Info Updates"),(0,r.kt)("table",{parentName:"Tagger"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tournament_summary"),(0,r.kt)("td",{parentName:"tr",align:null},"clash"),(0,r.kt)("td",{parentName:"tr",align:null},"Summary of clash match"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"153.0"))))))}N.isMDXComponent=!0}}]);