"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9242],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),m=function(e){return function(r){var t=d(r.components);return a.createElement(e,o({},r,{components:t}))}},d=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=d(e.components);return a.createElement(p.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},v=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=n,c=m["".concat(i,".").concat(u)]||m[u]||f[u]||o;return t?a.createElement(c,l(l({ref:r},p),{},{components:t})):a.createElement(c,l({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=v;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},55242:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const o={id:169,image:"/img/embed/changelogs.jpg",title:"Version 0.169",sidebar_label:"0.169",sidebar_position:169,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2021/april/169",id:"api/changelogs/overwolf-platform/2021/april/169",title:"Version 0.169",description:"API",source:"@site/pages/docs/api/changelogs/overwolf-platform/2021/4-april/169.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/4-april",slug:"/api/changelogs/overwolf-platform/2021/april/169",permalink:"/api/changelogs/overwolf-platform/2021/april/169",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2021/4-april/169.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1671967940,formattedLastUpdatedAt:"Dec 25, 2022",sidebarPosition:169,frontMatter:{id:"169",image:"/img/embed/changelogs.jpg",title:"Version 0.169",sidebar_label:"0.169",sidebar_position:169,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.168",permalink:"/api/changelogs/overwolf-platform/2021/april/168"},next:{title:"0.170",permalink:"/api/changelogs/overwolf-platform/2021/may/170"}},s={},p=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Game events",id:"game-events",level:3}],m={toc:p};function d(e){let{components:r,...t}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.mdx)("h3",{id:"api"},"API"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Improve OBS encoders support detection using the ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming#getstreamencoderscallback"},"overrwolf.streaming.getStreamEncoders()")," API (we added new error state for unsupported encoders ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming#encoderdata-object"},"EncoderData")," object)."),(0,n.mdx)("li",{parentName:"ul"},"Added the following properties to ",(0,n.mdx)("a",{parentName:"li",href:"/api/io/paths"},"overwolf.io.paths"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Overwolf install dir : 'overwolf.io.paths.overwolfInstallation'."),(0,n.mdx)("li",{parentName:"ul"},"Overwolf install dir with version number : 'overwolf.io.paths.overwolfInstallationWithVersion'."),(0,n.mdx)("li",{parentName:"ul"},"obs dir : 'overwolf.io.paths.obsBin'."))),(0,n.mdx)("li",{parentName:"ul"},"Improved behavior when switching a video to full screen in an Overwolf native window."),(0,n.mdx)("li",{parentName:"ul"},"New event: ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming#supportedencodersupdatedevent-object"},"overwolf.streaming.onSupportedEncodersUpdated")," -  Fired upon support encoder list updated.")),(0,n.mdx)("h3",{id:"platform"},"Platform"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"General stability fixes for OBS and uncommon recording failures, Improved error indications when we do fail to record."),(0,n.mdx)("li",{parentName:"ul"},"Added support for overlay above UWP (Universal Windows Platform) games (minecraft, sea of thieves & roblox). some of these games are still not working perfectly, and currently, the plan is to only enable Sea of Thieves for UWP in the near future. ")),(0,n.mdx)("h3",{id:"dev-console"},"Dev Console"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"General enhancments for the crash reports section.")),(0,n.mdx)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fixed the issue where native windows can be resized greater than their manifest maximum size."),(0,n.mdx)("li",{parentName:"ul"},'Fixed the issue where Video elements "glitched" when switching the app to full-screen mode.'),(0,n.mdx)("li",{parentName:"ul"},"Fixed the issue where you got an error that you should update your graphic card drivers only AFTER the game capturing starts. Now, you get this error before the capture starts."),(0,n.mdx)("li",{parentName:"ul"},"Fixed the Rocket league (Epic version) invisible cursor issue."),(0,n.mdx)("li",{parentName:"ul"},'CS:GO\u2019s "Out of Process Overlay" is no longer the only supported overlay mode.'),(0,n.mdx)("li",{parentName:"ul"},"We've killed the nameless Overwolf window that would sometimes appear when going in-game.")),(0,n.mdx)("h3",{id:"game-events"},"Game events"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/valheim"},"Valehim"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New supported game"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/dota-2"},"Dota"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New info update",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"game_mode"))))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/teamfight-tactics"},"TFT")),(0,n.mdx)("li",{parentName:"ul"},'Riot is working on a new TFT mode named "Hyperoll". The mode is currently available in the PBE servers and soon in live servers and can be detected as 1130 in the ',(0,n.mdx)("inlineCode",{parentName:"li"},"queueID"),".")))}d.isMDXComponent=!0}}]);