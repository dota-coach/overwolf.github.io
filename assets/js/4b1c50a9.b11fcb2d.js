"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1169],{35318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},61620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(25773),r=(a(27378),a(35318));const l={id:"sons-of-the-forest",image:"/img/embed/games/sons-of-the-forest.jpg",title:"Sons of the Forest Game events",hide_title:!0,sidebar_label:"Sons of the Forest",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},o=void 0,i={unversionedId:"api/live-game-data/supported-games/sons-of-the-forest",id:"api/live-game-data/supported-games/sons-of-the-forest",title:"Sons of the Forest Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/live-game-data/supported-games/sons-of-the-forest.mdx",sourceDirName:"api/live-game-data/supported-games",slug:"/api/live-game-data/supported-games/sons-of-the-forest",permalink:"/api/live-game-data/supported-games/sons-of-the-forest",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/live-game-data/supported-games/sons-of-the-forest.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1698152482,formattedLastUpdatedAt:"Oct 24, 2023",sidebarPosition:0,frontMatter:{id:"sons-of-the-forest",image:"/img/embed/games/sons-of-the-forest.jpg",title:"Sons of the Forest Game events",hide_title:!0,sidebar_label:"Sons of the Forest",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Rocket League",permalink:"/api/live-game-data/supported-games/rocket-league"},next:{title:"Splitgate: Arena Warfare",permalink:"/api/live-game-data/supported-games/splitgate-arena-warfare"}},p={},m=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>death</em> note",id:"death-note",level:4},{value:"<code>location</code>",id:"location",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"<em>location</em> note",id:"location-note",level:4},{value:"<em>npc_location</em> note",id:"npc_location-note",level:4}],s=(d="GameInfo",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const u={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"keywords",content:"API for Sons of the Forest, Sons of the Forest API, SDK for Sons of the Forest, Sons of the Forest SDK"})),(0,r.kt)(s,{gameId:22638,page:"docs",mdxType:"GameInfo"}),(0,r.kt)("p",null,"Please read the ",(0,r.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Sons of the Forset game events sample app"))),(0,r.kt)("h2",{id:"available-features"},"Available Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#match_info"},"match_info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#location"},"location"))),(0,r.kt)("h2",{id:"game-event-status"},"Game event status"),(0,r.kt)("p",null,"It is highly recommended to communicate errors and warnings to app users. "),(0,r.kt)("p",null,"Check the current game event status ",(0,r.kt)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,r.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,r.kt)("h2",{id:"gep_internal"},(0,r.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,r.kt)("h3",{id:"info-updates"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,r.kt)("h4",{id:"gep_internal-note"},(0,r.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,r.kt)("h2",{id:"match_info"},(0,r.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,r.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location"),(0,r.kt)("td",{parentName:"tr",align:null},"match_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Current player location on the map"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#location-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"221.0")))),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_start"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Match started"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"221.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match_end"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Match ended"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"221.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"death"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Player died"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#death-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"221.0")))),(0,r.kt)("h4",{id:"match_start-note"},(0,r.kt)("em",{parentName:"h4"},"match_start")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":""}]}\n')),(0,r.kt)("h4",{id:"match_end-note"},(0,r.kt)("em",{parentName:"h4"},"match_end")," note"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":""}]}\n')),(0,r.kt)("h4",{id:"death-note"},(0,r.kt)("em",{parentName:"h4"},"death")," note"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"death","data":""}]}\n')),(0,r.kt)("h2",{id:"location"},(0,r.kt)("inlineCode",{parentName:"h2"},"location")),(0,r.kt)("h3",{id:"info-updates-2"},"Info Updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location"),(0,r.kt)("td",{parentName:"tr",align:null},"match_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Current player location on the map"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#location-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"221.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"npc_location"),(0,r.kt)("td",{parentName:"tr",align:null},"match_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Kelvin (NPC) location on the map"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#npc_location-note"},"notes")),(0,r.kt)("td",{parentName:"tr",align:null},"227.0")))),(0,r.kt)("h4",{id:"location-note"},(0,r.kt)("em",{parentName:"h4"},"location")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"location":"{\\"loc_x\\":-2173.760986,\\"loc_y\\":1170.244873,\\"loc_z\\":612.648438,\\"rot_x\\":0.845221,\\"rot_y\\":-0.367379,\\"rot_z\\":-0.388116}"}},"feature":"location"}\n')),(0,r.kt)("h4",{id:"npc_location-note"},(0,r.kt)("em",{parentName:"h4"},"npc_location")," note"),(0,r.kt)("p",null,"Data Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"npc_location":"{\\"npc_name\\":\\"Kelvin\\",\\"loc_x\\":-1148.589966,\\"loc_y\\":-225.529999,\\"loc_z\\":138.776138}"}},"feature":"location"}\n')))}c.isMDXComponent=!0}}]);