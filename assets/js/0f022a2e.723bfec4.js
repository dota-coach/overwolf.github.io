"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9670],{35318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=p(a),k=l,h=d["".concat(i,".").concat(k)]||d[k]||u[k]||r;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[d]="string"==typeof e?e:l,o[1]=m;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},30802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var n=a(25773),l=(a(27378),a(35318));const r={id:"heroes-of-the-storm",image:"/img/embed/games/heroes-of-the-storm.jpg",title:"Heroes of the Storm Game events",hide_title:!0,sidebar_label:"Heroes of the Storm",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},o=void 0,m={unversionedId:"api/live-game-data/supported-games/heroes-of-the-storm",id:"api/live-game-data/supported-games/heroes-of-the-storm",title:"Heroes of the Storm Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/live-game-data/supported-games/heroes-of-the-storm.mdx",sourceDirName:"api/live-game-data/supported-games",slug:"/api/live-game-data/supported-games/heroes-of-the-storm",permalink:"/api/live-game-data/supported-games/heroes-of-the-storm",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/live-game-data/supported-games/heroes-of-the-storm.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1698152482,formattedLastUpdatedAt:"Oct 24, 2023",sidebarPosition:0,frontMatter:{id:"heroes-of-the-storm",image:"/img/embed/games/heroes-of-the-storm.jpg",title:"Heroes of the Storm Game events",hide_title:!0,sidebar_label:"Heroes of the Storm",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Hearthstone",permalink:"/api/live-game-data/supported-games/hearthstone"},next:{title:"League of Legends: Arena",permalink:"/api/live-game-data/supported-games/league-of-legends-arena"}},i={},p=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>me</code>",id:"me",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>battletag</em> note",id:"battletag-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"Events",id:"events",level:3},{value:"<em>pseudo_match_id</em> note",id:"pseudo_match_id-note",level:4},{value:"<em>teams_level</em> note:",id:"teams_level-note",level:4},{value:"<em>score</em> note:",id:"score-note",level:4},{value:"<em>match_state</em> note:",id:"match_state-note",level:4},{value:"<em>game_mode</em> note:",id:"game_mode-note",level:4},{value:"<em>draft</em> note:",id:"draft-note",level:4},{value:"<em>bans</em> note:",id:"bans-note",level:4},{value:"<em>match_start</em> note:",id:"match_start-note",level:5},{value:"<em>match_end</em> note:",id:"match_end-note",level:5},{value:"<em>talent_available</em> note:",id:"talent_available-note",level:4},{value:"<em>gates_opened</em> note:",id:"gates_opened-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-3",level:3},{value:"<em>scene</em> note:",id:"scene-note",level:4},{value:"<code>roster</code>",id:"roster",level:2},{value:"Info Updates",id:"info-updates-4",level:3},{value:"<em>roster</em> note:",id:"roster-note",level:4},{value:"<code>kill</code>",id:"kill",level:2},{value:"Events",id:"events-1",level:3},{value:"<em>kill</em> note:",id:"kill-note",level:4},{value:"<em>assist</em> note:",id:"assist-note",level:4},{value:"<em>minion_kill</em> note:",id:"minion_kill-note",level:4},{value:"<em>takedown</em> note:",id:"takedown-note",level:4},{value:"<code>death</code>",id:"death",level:2},{value:"Events",id:"events-2",level:3},{value:"<em>death</em> note:",id:"death-note",level:4}],s=(d="GameInfo",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var d;const u={toc:p};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"keywords",content:"API for Heroes of the Storm, Heroes of the Storm API, SDK for Heroes of the Storm, Heroes of the Storm SDK"})),(0,l.kt)(s,{gameId:10624,page:"docs",mdxType:"GameInfo"}),(0,l.kt)("p",null,"Please read the ",(0,l.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,l.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"HOTS game events sample app"))),(0,l.kt)("h2",{id:"available-features"},"Available Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#match_info"},"match_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#me"},"me")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#roster"},"roster")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#death"},"death")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kill"},"kill"))),(0,l.kt)("h2",{id:"game-events-status"},"Game events status"),(0,l.kt)("p",null,"It's highly recommended to communicate errors and warnings to your app users. Check game event status ",(0,l.kt)("a",{parentName:"p",href:"/status/"},"here")," or easily check game event status from your app ",(0,l.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,l.kt)("h2",{id:"gep_internal"},(0,l.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,l.kt)("h3",{id:"info-updates"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,l.kt)("h4",{id:"gep_internal-note"},(0,l.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,l.kt)("h2",{id:"me"},(0,l.kt)("inlineCode",{parentName:"h2"},"me")),(0,l.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"battletag"),(0,l.kt)("td",{parentName:"tr",align:null},"me"),(0,l.kt)("td",{parentName:"tr",align:null},"Battletag of local player"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#battletag-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")))),(0,l.kt)("h4",{id:"battletag-note"},(0,l.kt)("em",{parentName:"h4"},"battletag")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"me":{"battletag":"Shargaas#2430"}},"feature":"me"}\n')),(0,l.kt)("h2",{id:"match_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,l.kt)("h3",{id:"info-updates-2"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pseudo_match_id"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Current match\u2019s ID code."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#pseudo_match_id-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"teams_level"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Current level of both teams"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#teams_level-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"score"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Current kill-score of both teams."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#score-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_state"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Is a match in progress - true/false."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_state-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"game_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Current match's game_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#game_mode-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"draft_XX"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Currently selected hero for draft"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#draft-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bans_XX"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Currently selected hero for ban"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#bans-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")))),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_start"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Match starts"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_end"),(0,l.kt)("td",{parentName:"tr",align:null},"victory/defeat"),(0,l.kt)("td",{parentName:"tr",align:null},"Match ends"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"talent_available"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"A skill point is available for use."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#talent_available-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gates_opened"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"When pregame preparation countdown has ended and the match begins."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#gates_opened-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")))),(0,l.kt)("h4",{id:"pseudo_match_id-note"},(0,l.kt)("em",{parentName:"h4"},"pseudo_match_id")," note"),(0,l.kt)("p",null,"The reason that pseudo_match_id is different for each player is that its internal Overwolf info that created for highlights recording capabilities. You should not use it to determine that individual players are playing in the same match. For that, you should use the ",(0,l.kt)("a",{parentName:"p",href:"#roster"},"roster")," info."),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"pseudo_match_id":"055accd3-5948-4444-903a-12400d484d4b"}}, "feature":"match_info"}\n')),(0,l.kt)("h4",{id:"teams_level-note"},(0,l.kt)("em",{parentName:"h4"},"teams_level")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"teams_level":{"order":1, "chaos":1}}}, "feature":"match_info"}\n')),(0,l.kt)("h4",{id:"score-note"},(0,l.kt)("em",{parentName:"h4"},"score")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"score":{"order":8, "chaos":19}}}, "feature":"match_info"}\n')),(0,l.kt)("h4",{id:"match_state-note"},(0,l.kt)("em",{parentName:"h4"},"match_state")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"match_state":{"in_progress":true}}}, "feature":"match_info"}\n')),(0,l.kt)("h4",{id:"game_mode-note"},(0,l.kt)("em",{parentName:"h4"},"game_mode")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"game_mode":"ranked_play"}},"feature":"match_info"}\n')),(0,l.kt)("p",null,"Possible game_mode values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"ai_play", "quick_play", "ranked_play", "unranked_play"\n')),(0,l.kt)("h4",{id:"draft-note"},(0,l.kt)("em",{parentName:"h4"},"draft")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"draft_6":"{"player_name" : "Azurites","hero_name" : "Valeera"}"}},"feature":"draft"}\n{"info":{"match_info":{"draft_6":"{"player_name" : "Azurites","hero_name" : "Mei"}"}},"feature":"draft"}\n')),(0,l.kt)("h4",{id:"bans-note"},(0,l.kt)("em",{parentName:"h4"},"bans")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"bans_1":"{"hero_name" : "Mei"}"}},"feature":"bans"}\n{"info":{"match_info":{"bans_1":"{"hero_name" : "Valeera"}"}},"feature":"bans"}\n')),(0,l.kt)("h5",{id:"match_start-note"},(0,l.kt)("em",{parentName:"h5"},"match_start")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start", "data":""}]}\n')),(0,l.kt)("h5",{id:"match_end-note"},(0,l.kt)("em",{parentName:"h5"},"match_end")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end", "data":"victory"}]}\n')),(0,l.kt)("h4",{id:"talent_available-note"},(0,l.kt)("em",{parentName:"h4"},"talent_available")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"talent_available", "data":""}]}\n')),(0,l.kt)("h4",{id:"gates_opened-note"},(0,l.kt)("em",{parentName:"h4"},"gates_opened")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"gates_opened", "data":""}]}\n')),(0,l.kt)("h2",{id:"game_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,l.kt)("h3",{id:"info-updates-3"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scene"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Current menu state"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")))),(0,l.kt)("h4",{id:"scene-note"},(0,l.kt)("em",{parentName:"h4"},"scene")," note:"),(0,l.kt)("p",null,"Data Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"scene":"loading_screen"}},"feature":"game_info"}\n{"info":{"game_info":{"scene":"hero_select"}}, "feature":"game_info"}\n{"info":{"game_info":{"scene":"unranked_preparing"}}, "feature":"game_info"}\n{"info":{"game_info":{"scene":"collection"}}, "feature":"game_info"}\n{"info":{"game_info":{"scene":"home"}}, "feature":"game_info"}\n{"info":{"game_info":{"scene":"ai_search"}}, "feature":"game_info"}\n{"info":{"game_info":{"scene":"loot"}}, "feature":"game_info"}\n{"info":{"game_info":{"scene":"quick_search"}}, "feature":"game_info"}\n{"info":{"game_info":{"scene":"ranked_preparing"}}, "feature":"game_info"}\n{"info":{"game_info":{"scene":"ranked_search"}}, "feature":"game_info"}\n{"info":{"game_info":{"scene":"score"}}, "feature":"game_info"}\n{"info":{"game_info":{"scene":"unknown_hots_game_scene"}}, "feature":"game_info"}\n')),(0,l.kt)("h2",{id:"roster"},(0,l.kt)("inlineCode",{parentName:"h2"},"roster")),(0,l.kt)("h3",{id:"info-updates-4"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"roster"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Full player roster"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#roster-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")))),(0,l.kt)("h4",{id:"roster-note"},(0,l.kt)("em",{parentName:"h4"},"roster")," note:"),(0,l.kt)("p",null,"Provided data:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"player_level"),(0,l.kt)("li",{parentName:"ul"},"battletag"),(0,l.kt)("li",{parentName:"ul"},"if local = true/false"),(0,l.kt)("li",{parentName:"ul"},"team - chaos/order"),(0,l.kt)("li",{parentName:"ul"},"hero_name")),(0,l.kt)("p",null,"For a full list of hero names check the following ",(0,l.kt)("a",{parentName:"p",href:"https://heroespatchnotes.github.io/heroes-talents/"},"link")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ \n   "info":{ \n      "roster":{ \n         "roster":"{"Cerese":{ \n            "player_name":"Cerese",\n            "battletag":"Cerese#2249",\n            "player_level":"811",\n            "hero_name":"Ana",\n            "local":false,\n            "team":"order"\n         },\n         "DREADr":{ \n            "player_name":"DREADr",\n            "battletag":"DREADr#2716",\n            "player_level":"1001",\n            "hero_name":"Falstad",\n            "local":false,\n            "team":"chaos"\n         },\n         "Devastator":{ \n            "player_name":"Devastator",\n            "battletag":"Devastator#22538",\n            "player_level":"454",\n            "hero_name":"Valla",\n            "local":false,\n            "team":"order"\n         },\n         "Hostik":{ \n            "player_name":"Hostik",\n            "battletag":"Hostik#2133",\n            "player_level":"975",\n            "hero_name":"Abathur",\n            "local":false,\n            "team":"order"\n         },\n         "Kafei":{ \n            "player_name":"Kafei",\n            "battletag":"Kafei#2771",\n            "player_level":"250",\n            "hero_name":"Nova",\n            "local":false,\n            "team":"order"\n         },\n         "Monomax":{ \n            "player_name":"Monomax",\n            "battletag":"Monomax#2130",\n            "player_level":"813",\n            "hero_name":"Artanis",\n            "local":false,\n            "team":"chaos"\n         },\n         "SouthernUral":{ \n            "player_name":"SouthernUral",\n            "battletag":"SouthernUral#2738",\n            "player_level":"1379",\n            "hero_name":"Rehgar",\n            "local":false,\n            "team":"chaos"\n         },\n         "ladyboner":{ \n            "player_name":"ladyboner",\n            "battletag":"ladyboner#2168",\n            "player_level":"519",\n            "hero_name":"Zarya",\n            "local":false,\n            "team":"chaos"\n         },\n         "moustacho":{ \n            "player_name":"moustacho",\n            "battletag":"moustacho#21261",\n            "player_level":"264",\n            "hero_name":"Imperius",\n            "local":false,\n            "team":"order"\n         },\n         "?????????":{ \n            "player_name":"?????????",\n            "battletag":"?????????#2698",\n            "player_level":"40",\n            "hero_name":"Butcher",\n            "local":true,\n            "team":"chaos"\n         }\n      }      "\n    }\n  },\n  "      feature":"roster"\n   }\n')),(0,l.kt)("h2",{id:"kill"},(0,l.kt)("inlineCode",{parentName:"h2"},"kill")),(0,l.kt)("h3",{id:"events-1"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kill"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Local player kills an opponent."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#kill-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assist"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Local player takes part in the killing of an opponent."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#assist-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minion_kill"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Local player kills a minion."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#minion_kill-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"takedown"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Local player kills an opponent."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#takedown-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")))),(0,l.kt)("h4",{id:"kill-note"},(0,l.kt)("em",{parentName:"h4"},"kill")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"kill", "data":""}]}\n')),(0,l.kt)("h4",{id:"assist-note"},(0,l.kt)("em",{parentName:"h4"},"assist")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"assist", "data":""}]}\n')),(0,l.kt)("h4",{id:"minion_kill-note"},(0,l.kt)("em",{parentName:"h4"},"minion_kill")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"minion_kill", "data":""}]}\n')),(0,l.kt)("h4",{id:"takedown-note"},(0,l.kt)("em",{parentName:"h4"},"takedown")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"takedown" ,"data":""}]}\n')),(0,l.kt)("h2",{id:"death"},(0,l.kt)("inlineCode",{parentName:"h2"},"death")),(0,l.kt)("h3",{id:"events-2"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"death"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Local player dies."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#death-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")))),(0,l.kt)("h4",{id:"death-note"},(0,l.kt)("em",{parentName:"h4"},"death")," note:"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"death", "data":""}]}\n')))}k.isMDXComponent=!0}}]);