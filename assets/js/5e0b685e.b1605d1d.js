"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8624],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),d=function(e){return function(n){var t=c(n.components);return r.createElement(e,i({},n,{components:t}))}},c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},38257:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],o={id:"maker-king",title:"MakerKing Game events",sidebar_label:"MakerKing"},s=void 0,u={unversionedId:"api/games/events/maker-king",id:"api/games/events/maker-king",title:"MakerKing Game events",description:"Support for this game is still work in progress",source:"@site/pages/docs/api/games/events/maker-king.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/maker-king",permalink:"/api/games/events/maker-king",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/maker-king.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1658067227,formattedLastUpdatedAt:"7/17/2022",frontMatter:{id:"maker-king",title:"MakerKing Game events",sidebar_label:"MakerKing"},sidebar:"api",previous:{title:"Magic: The Gathering Arena",permalink:"/api/games/events/magic-the-gathering-arena"},next:{title:"Minecraft",permalink:"/api/games/events/minecraft"}},d={},c=[{value:"Current game data",id:"current-game-data",level:2},{value:"Game events",id:"game-events",level:2},{value:"Event list",id:"event-list",level:3}],m={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"WIP")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},(0,i.mdx)("strong",{parentName:"p"},"Support for this game is still work in progress")))),(0,i.mdx)("p",null,"Please read the ",(0,i.mdx)("a",{parentName:"p",href:"../events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,i.mdx)("h2",{id:"current-game-data"},"Current game data"),(0,i.mdx)("p",null,"Upon connecting to the web socket for the game, the current game data is dumped in the following\nformat:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "currentUser": { // set to null when there is no logged user (playing offline or in titlescreen)\n    "userId": 1,\n    "username": "Winter"\n  },\n  "currentScreen": "OnlineGameScreen", // Current screen of the game, possible values are OnlineGameScreen, LocalGameScreen, EditorScreen, TitleScreen, AssetLoadingScreen, TransitionScreen, ReplayScreen and OfflineMenuScreen \n  "currentLevel": { // set to null when there is no current level (screen may be TransitionScreen or another screen without a level)\n    "levelId": 23,\n    "levelName": "Lost the key to my house!",\n    "authorId": 1, // player id of author\n    "authorName": "Winter",\n    "levelType": "hub", // hub or race, the 2 types of levels\n    "levelState": "online", // online, offline, new, workingcopy or finished\n    "levelTags": ["puzzle"], // a list of level tags among exploration, puzzle, troll, kaizo, practice, auto, speed_challenge or escape_room \n    "music": {\n      "type": "external", // either builtin or external, external being for songs with link URLS \n      "trackName": "Air Biscuits",\n      "trackAuthor": "Tippermusic", \n      "urls": [ // this whole section is excluded from the json when type = builtin\n        {\n          "url": "https://soundcloud.com/tippermusic/1-air-biscuits?in=tippermusic/sets/insolito",\n          "provider": "soundcloud" // either soundcloud or bandcamp at the moment but could be more eventually (like youtube)\n        }\n      ]\n    }\n  },\n  "currentSettings": { // dump of the current game settings for the player\n    "musicVolume": "0.0",\n    "soundVolume": "0.48999998",\n    "language": "en",\n    "replayFolder": "/home/winter/MakerKingReplays",\n    "screenshotFolder": "/home/winter/MakerKingScreenshots",\n    "invertSprint": "true",\n    "unlockedOffline": "true",\n    "vSyncEnabled": "true",\n    "fullscreen": "false",\n    "fpsMode": "DETAILED",\n    "msaaSamples": "2",\n    "fullscreenMode": "WINDOWED_BORDERLESS",\n    "textureQuality": "HIGH",\n    "screenShakeEnabled": "true",\n    "useParallax": "true",\n    "lightingEnabled": "true",\n    "editorLightingEnabled": "true",\n    "lightColorEnabled": "true",\n    "lightingQuality": "HIGH",\n    "particlesEnabled": "true",\n    "biomeTransitionEnabled": "true",\n    "iceReflectionEnabled": "true",\n    "hidePlayers": "false",\n    "editorHideLiquids": "false",\n    "editorAutoBack": "false",\n    "editorOverwriteBlocks": "false",\n    "disableExternalMusic": "false",\n    "disableOverwolf": "false",\n    "externalMusicReplacement": "CODEMANU_GRASSLANDS_THEME",\n    "editorMusic": "ORIGINAL_EDITORMUSIC",\n    "editorMusicInPlaytest": "true",\n    "disableEditorMusic": "false",\n    "randomizeEditorMusic": "false"\n  }\n}\n')),(0,i.mdx)("h2",{id:"game-events"},"Game events"),(0,i.mdx)("p",null,"After this initial message is sent, the game is going to send additional\nmessages for any event that happens. Those will be in the following format:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "eventType": "TYPE",\n    // ... additional data relative to event, sometimes events contain no data\n}\n')),(0,i.mdx)("h3",{id:"event-list"},"Event list"),(0,i.mdx)("p",null,"Here is the full list of events, followed by the list of json fields it includes\nas its data. As you can see most of the events do not contain extra data."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'loading_game\ngame_open\nsettings_changed "settings"\nentered_offline_menu \nlogged_in "account"\nlogged_out\nloading_level "levelid", "editing"\njoined_level "level"\nreached_checkpoint "position"\ncleared_level\nlevel_reset\njoined_editor "level"\nstarted_playtest\nended_playtest\nopened_replay\nclosed_replay\njoined_race\nstarted_race\nleft_race\n')),(0,i.mdx)("p",null,"Here are one example of each event that has that extra data. You may notice\nthings like the format of levels and settings are consistent and you can assume\nthey will remain this way. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "eventType": "settings_changed",\n  "settings": { // same format for settings as in the current data dump \n    "musicVolume": "0.29999998",\n    "soundVolume": "0.48999998",\n    "language": "en",\n    "replayFolder": "/home/winter/MakerKingReplays",\n    "screenshotFolder": "/home/winter/MakerKingScreenshots",\n    "invertSprint": "true",\n    "unlockedOffline": "true",\n    "vSyncEnabled": "true",\n    "fullscreen": "false",\n    "fpsMode": "DETAILED",\n    "msaaSamples": "2",\n    "fullscreenMode": "WINDOWED_BORDERLESS",\n    "textureQuality": "HIGH",\n    "screenShakeEnabled": "true",\n    "useParallax": "true",\n    "lightingEnabled": "true",\n    "editorLightingEnabled": "true",\n    "lightColorEnabled": "true",\n    "lightingQuality": "HIGH",\n    "particlesEnabled": "true",\n    "biomeTransitionEnabled": "true",\n    "iceReflectionEnabled": "true",\n    "hidePlayers": "false",\n    "editorHideLiquids": "false",\n    "editorAutoBack": "false",\n    "editorOverwriteBlocks": "false",\n    "disableExternalMusic": "false",\n    "disableOverwolf": "false",\n    "externalMusicReplacement": "CODEMANU_GRASSLANDS_THEME",\n    "editorMusic": "ORIGINAL_EDITORMUSIC",\n    "editorMusicInPlaytest": "true",\n    "disableEditorMusic": "false",\n    "randomizeEditorMusic": "false"\n  }\n}\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "eventType": "loading_level",\n  "levelId": "23",\n  "editing": "false" // true or false, true meaning the editor is opening and false meaning the level is about to be played\n}\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "eventType": "joined_level",\n  "level": { // same format as currentLevel in the current data dump except here level is never null\n    "levelId": 23,\n    "levelName": "Lost the key to my house!",\n    "authorId": 1,\n    "authorName": "Winter",\n    "levelType": "hub",\n    "levelState": "online",\n    "levelTags": [],\n    "music": {\n      "type": "builtin",\n      "trackName": "Intro Theme",\n      "trackAuthor": "CodeManu"\n    }\n  }\n}\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "eventType": "reached_checkpoint",\n  "position": [ // this is 2D game world position\n    -10750, // x\n    -4250 // y\n  ]\n}\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "eventType": "joined_editor",\n  "level": {\n    "levelId": -1,\n    "levelName": "Untitled",\n    "authorId": 1,\n    "authorName": "Winter",\n    "levelType": "race",\n    "levelState": "new",\n    "levelTags": [],\n    "music": {\n      "type": "builtin",\n      "trackName": "Intro Theme",\n      "trackAuthor": "CodeManu"\n    }\n  }\n}\n')))}p.isMDXComponent=!0}}]);