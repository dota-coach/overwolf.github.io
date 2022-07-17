"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5751],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return i},MDXProvider:function(){return s},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){return function(n){var t=u(n.components);return a.createElement(e,l({},n,{components:t}))}},u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=u(t),s=r,g=p["".concat(m,".").concat(s)]||p[s]||c[s]||l;return t?a.createElement(g,o(o({ref:n},i),{},{components:t})):a.createElement(g,o({ref:n},i))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,m=new Array(l);m[0]=g;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,m[1]=o;for(var i=2;i<l;i++)m[i]=t[i];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3006:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return s}});var a,r=t(87462),l=t(63366),m=(t(67294),t(3905)),o=["components"],d={id:"new-world",title:"New World Game events",hide_title:!0,sidebar_label:"New World"},i=void 0,p={unversionedId:"api/games/events/new-world",id:"api/games/events/new-world",title:"New World Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/new-world.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/new-world",permalink:"/api/games/events/new-world",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/new-world.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1658067227,formattedLastUpdatedAt:"7/17/2022",frontMatter:{id:"new-world",title:"New World Game events",hide_title:!0,sidebar_label:"New World"},sidebar:"api",previous:{title:"Minecraft",permalink:"/api/games/events/minecraft"},next:{title:"Overwatch",permalink:"/api/games/events/overwatch"}},u={},s=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>location</em> note",id:"location-note",level:4},{value:"<em>map</em> note",id:"map-note",level:4},{value:"<em>player_name</em> note",id:"player_name-note",level:4},{value:"<em>world_name</em> note",id:"world_name-note",level:4}],c=(a="GameInfo",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),g={toc:s};function f(e){var n=e.components,t=(0,l.Z)(e,o);return(0,m.mdx)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("head",null,(0,m.mdx)("meta",{name:"keywords",content:"API for New World, New World API, SDK for New World, New World SDK"})),(0,m.mdx)(c,{gameID:21816,showCompliance:!0,showDocs:!1,mdxType:"GameInfo"}),(0,m.mdx)("p",null,"Please read the ",(0,m.mdx)("a",{parentName:"p",href:"../events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,m.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"New World game events sample app"))),(0,m.mdx)("h2",{id:"available-features"},"Available Features"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#game_info"},"game_info"))),(0,m.mdx)("h2",{id:"game-events-status"},"Game events status"),(0,m.mdx)("p",null,"It is highly recommended to communicate errors and warnings to your app users. "),(0,m.mdx)("p",null,"Check ",(0,m.mdx)("a",{parentName:"p",href:"/status/"},"here")," the game events status. OR -  easily check the game events status from your app, ",(0,m.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,m.mdx)("h2",{id:"gep_internal"},(0,m.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,m.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,m.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,m.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"182.0")))),(0,m.mdx)("h4",{id:"gep_internal-note"},(0,m.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"gep_internal":{"version_info":"{"local_version":"182.0.1","public_version":"182.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,m.mdx)("h2",{id:"game_info"},(0,m.mdx)("inlineCode",{parentName:"h2"},"game_info")),(0,m.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"location"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The current game scene."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#location-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"182.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"map"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The current map."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#map-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"183.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"player_name"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The local player name."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#player_name-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"183.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"world_name"),(0,m.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The world name."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#world_name-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"183.0")))),(0,m.mdx)("h4",{id:"location-note"},(0,m.mdx)("em",{parentName:"h4"},"location")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"location":"{"player.position.x,9366.38,player.position.y,2762.52,player.position.z,89.21,player.rotation.x,0,player.rotation.y,0,player.rotation.z,223,player.compass,SW"}"}},"feature":"game_info"}\n')),(0,m.mdx)("h4",{id:"map-note"},(0,m.mdx)("em",{parentName:"h4"},"map")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"map":"NewWorld_VitaeEterna"}"}},"feature":"game_info"}\n')),(0,m.mdx)("h4",{id:"player_name-note"},(0,m.mdx)("em",{parentName:"h4"},"player_name")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"player_name":"Shargaas7"}"}},"feature":"game_info"}\n')),(0,m.mdx)("h4",{id:"world_name-note"},(0,m.mdx)("em",{parentName:"h4"},"world_name")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"world_name":"live-1-28-3"}"}},"feature":"game_info"}\n')))}f.isMDXComponent=!0}}]);