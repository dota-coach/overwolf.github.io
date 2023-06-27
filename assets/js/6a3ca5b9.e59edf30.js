"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1874],{35318:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>i,MDXProvider:()=>u,mdx:()=>_,useMDXComponents:()=>s,withMDXComponents:()=>p});var n=t(27378);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,m=function(e,a){if(null==e)return{};var t,n,m={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(m[t]=e[t]);return m}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(m[t]=e[t])}return m}var i=n.createContext({}),p=function(e){return function(a){var t=s(a.components);return n.createElement(e,l({},a,{components:t}))}},s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},x="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,m=e.mdxType,l=e.originalType,r=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=s(t),u=m,x=p["".concat(r,".").concat(u)]||p[u]||c[u]||l;return t?n.createElement(x,o(o({ref:a},i),{},{components:t})):n.createElement(x,o({ref:a},i))}));function _(e,a){var t=arguments,m=a&&a.mdxType;if("string"==typeof e||m){var l=t.length,r=new Array(l);r[0]=g;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o[x]="string"==typeof e?e:m,r[1]=o;for(var i=2;i<l;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},65281:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=t(25773),m=(t(27378),t(35318));const l={id:"valheim",image:"/img/embed/games/valheim.jpg",title:"Valheim",sidebar_label:"Valheim",sidebar_position:0,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},r=void 0,o={unversionedId:"api/games/events/valheim",id:"api/games/events/valheim",title:"Valheim",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/valheim.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/valheim",permalink:"/api/games/events/valheim",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/valheim.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1687791687,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:0,frontMatter:{id:"valheim",image:"/img/embed/games/valheim.jpg",title:"Valheim",sidebar_label:"Valheim",sidebar_position:0,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"Teamfight Tactics",permalink:"/api/games/events/teamfight-tactics"},next:{title:"Valorant",permalink:"/api/games/events/valorant"}},d={},i=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>scene</em> note",id:"scene-note",level:4},{value:"<em>player_name</em> note",id:"player_name-note",level:4},{value:"<em>death</em> note",id:"death-note",level:4},{value:"<em>state</em> note",id:"state-note",level:4},{value:"<em>time</em> note",id:"time-note",level:4},{value:"<em>inventory</em> note",id:"inventory-note",level:4},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>location</em> note",id:"location-note",level:4},{value:"<code>kill</code>",id:"kill",level:2},{value:"Events",id:"events-1",level:3},{value:"<em>damage</em> note",id:"damage-note",level:4},{value:"<em>kill</em> note",id:"kill-note",level:4}],p=(s="GameInfo",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)});var s;const u={toc:i};function x(e){let{components:a,...t}=e;return(0,m.mdx)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("head",null,(0,m.mdx)("meta",{name:"keywords",content:"API for Valheim, Valheim API, SDK for Valheim, Valheim SDK"})),(0,m.mdx)(p,{gameId:21668,page:"docs",mdxType:"GameInfo"}),(0,m.mdx)("p",null,"Please read the ",(0,m.mdx)("a",{parentName:"p",href:"../events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,m.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"Valheim game events sample app"))),(0,m.mdx)("h2",{id:"available-features"},"Available Features"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#kill"},"kill"))),(0,m.mdx)("h2",{id:"game-events-status"},"Game events status"),(0,m.mdx)("p",null,"It is highly recommended to communicate errors and warnings to your app users. "),(0,m.mdx)("p",null,"Check ",(0,m.mdx)("a",{parentName:"p",href:"/status/"},"here")," the game events status. OR -  easily check the game events status from your app, ",(0,m.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,m.mdx)("h2",{id:"gep_internal"},(0,m.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,m.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,m.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,m.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,m.mdx)("h4",{id:"gep_internal-note"},(0,m.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,m.mdx)("h2",{id:"game_info"},(0,m.mdx)("inlineCode",{parentName:"h2"},"game_info")),(0,m.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"scene"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The current game scene."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"169.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"player_name"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"Name of local Player"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#player-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"169.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"death"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"Total number of deaths"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#death-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"169.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"state"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"In progress / Not in progress"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#state-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"169.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"time"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"Current time of day"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#time-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"171.1")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"inventory"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"Names and amounts of items in inventory slots."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#inventory-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"171.1")))),(0,m.mdx)("h4",{id:"scene-note"},(0,m.mdx)("em",{parentName:"h4"},"scene")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"game_info":{"scene":"MainMenu"}},"feature":"game_info"}\n{"game_info":{"scene":"SelectCharacter"}},"feature":"game_info"}\n{"game_info":{"scene":"WorldList"}},"feature":"game_info"}\n{"game_info":{"scene":"ServerList"}},"feature":"game_info"}\n{"game_info":{"scene":"Loading"}},"feature":"game_info"}\n')),(0,m.mdx)("h4",{id:"player_name-note"},(0,m.mdx)("em",{parentName:"h4"},"player_name")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"game_info":{"player_name":"Shargaas"}},"feature":"game_info"}\n')),(0,m.mdx)("h4",{id:"death-note"},(0,m.mdx)("em",{parentName:"h4"},"death")," note"),(0,m.mdx)("p",null,"This info is updated on the start of a match. The number of deaths is saved across multiple sessions."),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"game_info":{"death":"14"}},"feature":"game_info"}\n')),(0,m.mdx)("h4",{id:"state-note"},(0,m.mdx)("em",{parentName:"h4"},"state")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"game_info":{"state":"in_progress"}},"feature":"game_info"}\n{"game_info":{"state":"ended"}},"feature":"game_info"}\n')),(0,m.mdx)("h4",{id:"time-note"},(0,m.mdx)("em",{parentName:"h4"},"time")," note"),(0,m.mdx)("p",null,"Possible values:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"DAY"),(0,m.mdx)("li",{parentName:"ul"},"AFTERNOON"),(0,m.mdx)("li",{parentName:"ul"},"NIGHT")),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"time":"{"day":"11","day_time":"0.610754","part":"AFTERNOON"}"}},"feature":"game_info"}\n')),(0,m.mdx)("h4",{id:"inventory-note"},(0,m.mdx)("em",{parentName:"h4"},"inventory")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"inventory":"{"slot_0":{"name":"tem_axe_blackmetal","type":"OneHandedWeapon","count":"1","max_count":"1"},"slot_1":{"name":"tem_bow_draugrfang","type":"Bow","count":"1","max_count":"1"},"slot_2":{"name":"tem_mace_needle","type":"OneHandedWeapon","count":"1","max_count":"1"},"slot_3":{"name":"tem_shield_blackmetal","type":"Shield","count":"1","max_count":"1"},"slot_4":{"name":"tem_sledge_iron","type":"TwoHandedWeapon","count":"1","max_count":"1"},"slot_5":{"name":"tem_hammer","type":"Tool","count":"1","max_count":"1"},"slot_6":{"name":"tem_pickaxe_iron","type":"TwoHandedWeapon","count":"1","max_count":"1"},"slot_7":{"name":"tem_hoe","type":"Tool","count":"1","max_count":"1"},"slot_8":{"name":"tem_chest_pcuirass","type":"Chest","count":"1","max_count":"1"},"slot_9":{"name":"tem_arrow_needle","type":"Ammo","count":"100","max_count":"100"},"slot_10":{"name":"tem_arrow_needle","type":"Ammo","count":"8","max_count":"100"},"slot_11":{"name":"tem_fishingbait","type":"Ammo","count":"37","max_count":"100"},"slot_12":{"name":"tem_fishingrod","type":"TwoHandedWeapon","count":"1","max_count":"1"},"slot_13":{},"slot_14":{},"slot_15":{},"slot_16":{"name":"tem_cape_lox","type":"Shoulder","count":"1","max_count":"1"},"slot_17":{"name":"tem_loxpie","type":"Consumable","count":"5","max_count":"10"},"slot_18":{"name":"tem_fishwraps","type":"Consumable","count":"2","max_count":"10"},"slot_19":{"name":"tem_bloodpudding","type":"Consumable","count":"5","max_count":"10"},"slot_20":{"name":"tem_mead_hp_minor","type":"Consumable","count":"9","max_count":"10"},"slot_21":{},"slot_22":{},"slot_23":{},"slot_24":{"name":"tem_helmet_padded","type":"Helmet","count":"1","max_count":"1"},"slot_25":{"name":"tem_legs_pgreaves","type":"Legs","count":"1","max_count":"1"},"slot_26":{"name":"tem_beltstrength","type":"Utility","count":"1","max_count":"1"},"slot_27":{"name":"tem_bread","type":"Consumable","count":"7","max_count":"20"},"slot_28":{"name":"tem_arrow_frost","type":"Ammo","count":"35","max_count":"100"},"slot_29":{"name":"tem_thistle","type":"Material","count":"6","max_count":"50"},"slot_30":{"name":"tem_necktail","type":"Material","count":"1","max_count":"50"},"slot_31":{"name":"tem_bonefragments","type":"Material","count":"1","max_count":"50"}}"}},"feature":"game_info"}\n')),(0,m.mdx)("h3",{id:"events"},"Events"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Event"),(0,m.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,m.mdx)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"respawn"),(0,m.mdx)("td",{parentName:"tr",align:null},"null"),(0,m.mdx)("td",{parentName:"tr",align:null},"Entering a game / Dying."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#respawn-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"169.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"location"),(0,m.mdx)("td",{parentName:"tr",align:null},"XYZ numerics"),(0,m.mdx)("td",{parentName:"tr",align:null},"Local player's location changes."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#location-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"171.1")))),(0,m.mdx)("h4",{id:"match_start-note"},(0,m.mdx)("em",{parentName:"h4"},"match_start")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"name":"respawn","data":""}\n')),(0,m.mdx)("h4",{id:"location-note"},(0,m.mdx)("em",{parentName:"h4"},"location")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"location","data":"{"x":"-563.196045","y":"78.863182","z":"353.648682"}"}]}\n')),(0,m.mdx)("h2",{id:"kill"},(0,m.mdx)("inlineCode",{parentName:"h2"},"kill")),(0,m.mdx)("h3",{id:"events-1"},"Events"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Event"),(0,m.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,m.mdx)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"damage"),(0,m.mdx)("td",{parentName:"tr",align:null},"Numeric damage value performed."),(0,m.mdx)("td",{parentName:"tr",align:null},"Damage is done"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#damage-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"171.1")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"kill"),(0,m.mdx)("td",{parentName:"tr",align:null},"Type of enemy killed."),(0,m.mdx)("td",{parentName:"tr",align:null},"Enemy dies."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#kill-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"171.1")))),(0,m.mdx)("h4",{id:"damage-note"},(0,m.mdx)("em",{parentName:"h4"},"damage")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"damage","data":"{"damage":"45.066856","current_hp":"0.000000","max_hp":"40.000000","enemy_name":"skeleton","enemy_category":"Undead"}"}]}\n')),(0,m.mdx)("h4",{id:"kill-note"},(0,m.mdx)("em",{parentName:"h4"},"kill")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"kill","data":"{"enemy_name":"skeleton","enemy_category":"Undead"}"}]}\n')))}x.isMDXComponent=!0}}]);