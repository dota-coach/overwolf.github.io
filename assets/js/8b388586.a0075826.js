"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[353],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return m},MDXProvider:function(){return p},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),d=function(e){return function(n){var t=u(n.components);return a.createElement(e,o({},n,{components:t}))}},u=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,f=d["".concat(i,".").concat(p)]||d[p]||c[p]||o;return t?a.createElement(f,l(l({ref:n},m),{},{components:t})):a.createElement(f,l({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22264:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:173,image:"/img/embed/changelogs.jpg",title:"Version 0.173",sidebar_label:"0.173",sidebar_position:173},s=void 0,m={unversionedId:"api/changelogs/2021/june/173",id:"api/changelogs/2021/june/173",title:"Version 0.173",description:"* Note that iterations 171 to 173 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/2021/6-june/173.mdx",sourceDirName:"api/changelogs/2021/6-june",slug:"/api/changelogs/2021/june/173",permalink:"/api/changelogs/2021/june/173",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/2021/6-june/173.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1661780153,formattedLastUpdatedAt:"8/29/2022",sidebarPosition:173,frontMatter:{id:"173",image:"/img/embed/changelogs.jpg",title:"Version 0.173",sidebar_label:"0.173",sidebar_position:-173},sidebar:"api",previous:{title:"0.174",permalink:"/api/changelogs/2021/july/174"},next:{title:"0.170",permalink:"/api/changelogs/2021/may/170"}},d={},u=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Game events",id:"game-events",level:3}],p={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Note that iterations 171 to 173 were combined into a single iteration. ")),(0,o.mdx)("h3",{id:"api"},"API"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"overwolf.utils.openUrlInDefaultBrowser - enhance security by checking the scheme and only allow requests to http/s or protocols allowed in the manifest.  ",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Manifest example: ",(0,o.mdx)("inlineCode",{parentName:"li"},'"data": {"allowed_protocols": { "protocols": ["mailto", "steam"]}}')),(0,o.mdx)("li",{parentName:"ul"},"'file' in the scheme will always be blocked."))),(0,o.mdx)("li",{parentName:"ul"},"Added ",(0,o.mdx)("inlineCode",{parentName:"li"},"processId")," to ",(0,o.mdx)("a",{parentName:"li",href:"/api/games#getrunninggameinfocallback"},"overwolf.games.getRunningGameInfo")," and ",(0,o.mdx)("a",{parentName:"li",href:"/api/games#ongameinfoupdated"},"overwolf.games.onGameInfoUpdated"),"."),(0,o.mdx)("li",{parentName:"ul"},"Coexistence API - Event to indicate if there is another overlay library running + if Overwolf doesn't manage to render anything, allow the app to give a relevant notification",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Added a new object, ",(0,o.mdx)("a",{parentName:"li",href:"/api/games#overlayinfo-object"},"overwolf.games.OverlayInfo"),",  with info about the current out of process overlays."),(0,o.mdx)("li",{parentName:"ul"},"Added a new ",(0,o.mdx)("a",{parentName:"li",href:"/api/games#gameinfochangereason-enum"},"GameInfoChangeReason")," enum to the ",(0,o.mdx)("a",{parentName:"li",href:"/api/games#ongameinfoupdated"},"overwolf.games.onGameInfoUpdated")," event,with some info about the hooking error reason. (if an hooking error has occurred)."),(0,o.mdx)("li",{parentName:"ul"},"Added a new ",(0,o.mdx)("a",{parentName:"li",href:"/api/games#knownoverlaycoexistenceapps-enum"},"KnownOverlayCoexistenceApps")," enum with a list of known apps causing overlay coexistence issues with OW."),(0,o.mdx)("li",{parentName:"ul"},"New API: ",(0,o.mdx)("a",{parentName:"li",href:"/api/games##getlastrunninggameinfocallback"},"overwolf.games.getLastRunningGameInfo()")," - returns the last played gameinfo (when no game is currently running). "),(0,o.mdx)("li",{parentName:"ul"},"new API: ",(0,o.mdx)("a",{parentName:"li",href:"/api/settings/games#setautolaunchenabledgameclassid-callback"},"overwolf.settings.games.setAutoLaunchEnabled"),": allows apps to control what games they auto-launch for following user gesture (similar to performUpdate)."),(0,o.mdx)("li",{parentName:"ul"},"New API: ",(0,o.mdx)("a",{parentName:"li",href:"/api/os/tray#destroy"},"overwolf.os.tray.destroy")," - Added a new method for removing an extension tray icon and menu immediately.")))),(0,o.mdx)("h3",{id:"platform"},"Platform"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"New client settings (Capture => Advanced Settings) with Rate Control and Max Kb/s sliders."),(0,o.mdx)("li",{parentName:"ul"},"Rebranding - we\u2019re releasing almost all of Overwolf\u2019s client modules with a new branding.")),(0,o.mdx)("h3",{id:"dev-console"},"Dev Console"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"App Channels - a new feature that enables you to create and distribute different app versions for your users /testers. The first part of this feature ",(0,o.mdx)("a",{parentName:"li",href:"#api-1"},"announced already on v0.170"),", and now ",(0,o.mdx)("a",{parentName:"li",href:"/topics/developers-console/app-channels"},"the second")," (and last) part is released - the app channels management tools from the dev console. ")),(0,o.mdx)("h3",{id:"bug-fixes"},"Bug fixes"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Extension tray icons would get blurry when changing display settings (try changing DPI from 100% to 175%)."),(0,o.mdx)("li",{parentName:"ul"},"Replay API - TurnOffResult typo."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/api/games#gameinfoupdatedevent-object"},"GameInfoUpdatedEvent")," Object - fixed the issue that runningChanged is not being updated once a game starts running."),(0,o.mdx)("li",{parentName:"ul"},"Fixed the issue that Video recording won't start if game is minimized."),(0,o.mdx)("li",{parentName:"ul"},"Fixed a bug where subs oneapp page sometimes won't open."),(0,o.mdx)("li",{parentName:"ul"},"New Reddit (new.reddit.com) has an issue with escaped space characters in redirects. This fix ensures space (%20) won't be re-encoded to %2B and break the redirect")),(0,o.mdx)("h3",{id:"game-events"},"Game events"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"overwolf.media.replays TurnOffResult typo."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/api/games/events/football-manager-2021"},"Football Manager2021"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"New supported game with updates and events under:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"match_info"))))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/api/games/events/call-of-duty-warzone"},"Warzone"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"New update under:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"match_info")))))))}c.isMDXComponent=!0}}]);