"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3669],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return p}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),p=function(e){return function(t){var a=d(t.components);return r.createElement(e,o({},t,{components:a}))}},d=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,f=p["".concat(i,".").concat(u)]||p[u]||c[u]||o;return a?r.createElement(f,l(l({ref:t},m),{},{components:a})):r.createElement(f,l({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},42173:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:155,image:"/img/embed/api-docs.jpg",title:"Version 0.155",sidebar_label:"0.155",sidebar_position:155},s=void 0,m={unversionedId:"api/changelogs/2020/september/155",id:"api/changelogs/2020/september/155",title:"Version 0.155",description:"Note that iterations 154 and 155 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/2020/9-september/155.mdx",sourceDirName:"api/changelogs/2020/9-september",slug:"/api/changelogs/2020/september/155",permalink:"/api/changelogs/2020/september/155",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/2020/9-september/155.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",sidebarPosition:155,frontMatter:{id:"155",image:"/img/embed/api-docs.jpg",title:"Version 0.155",sidebar_label:"0.155",sidebar_position:-155},sidebar:"api",previous:{title:"0.156",permalink:"/api/changelogs/2020/october/156"},next:{title:"0.153",permalink:"/api/changelogs/2020/august/153"}},p={},d=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Game events",id:"game-events",level:3}],u={toc:d};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Note that iterations 154 and 155 were combined into a single iteration.  "),(0,o.mdx)("h3",{id:"api"},"API"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"/api/utils#placeonclipboarddata"},"overwolf.utils.placeOnClipboard()")," and ",(0,o.mdx)("a",{parentName:"p",href:"/api/utils#getfromclipboardcallback"},"overwolf.utils.getFromClipboard()")," reimplemented so that we tackle the coexistence issues with AutoHotKey script.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"/api/games/input-tracking#getactivityinformationcallback"},"overwolf.games.inputTracking.getActivityInformation()")," - remove the 5 minutes min time for getting a result.",(0,o.mdx)("br",{parentName:"p"}),"\n","Note that We're still not recording the first 30 characters, and we will send the activity info to our servers only if your sessions is longer than 5 minutes.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"New flag for ",(0,o.mdx)("a",{parentName:"p",href:"/api/media/replays#replayvideooptions-object"},"replay")," \\ ",(0,o.mdx)("a",{parentName:"p",href:"/api/streaming#streamvideooptions-object"},"streaming")," video settings object: ",(0,o.mdx)("strong",{parentName:"p"},"use_app_display_name"),".",(0,o.mdx)("br",{parentName:"p"}),"\n",'If this flag in on, when creating a video capture folder, it will use the app "short name" as the folder name, instead of using the app name from the manifest. (the app "short name" is defined in the ',(0,o.mdx)("a",{parentName:"p",href:"/api/manifest#meta-dock"},"dock_button_title")," manifest flag).")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"it is now possible to change the number of maximum saved log files that\napps are saving with the new max_rotation_log_file manifest flag\nNew manifest flag ",(0,o.mdx)("a",{parentName:"p",href:"/api/manifest#max_rotation_log_files"},"max_rotation_log_files")," - for app Log rotaion control. It allow to increase app log's file rotation (up to 40).\n")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"New feature: Set window zoom level - ",(0,o.mdx)("a",{parentName:"p",href:"/api/windows#setzoomwinzoomfactorowid-windowid"},"overwolf.window.setZoom()"),".",(0,o.mdx)("br",{parentName:"p"}),"\n","Now you can change the zoom factor of your window through the API (the effect is exactly like changing the zoom in a web browser).")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("a",{parentName:"p",href:"/api/media/audio"},"overwolf.media.audio")," is now considered obsolete, and will display the relevant warning in the console when using it.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"We marked several functions and APIs as ",(0,o.mdx)("strong",{parentName:"p"},"OBSOLETE"),". Soon, we altogether remove them from the docs and from the API itself. Note that you should get a warning in your dev console when using one of the obsolete functions.",(0,o.mdx)("br",{parentName:"p"}),"\n","This is the full list of OBSOLETE functions and APIs:"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"overwolf.media.stopGifBuffer()"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.media.generateGif()"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.media.startGifBuffer()"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.media.replays.turnOff(replyID, callback) - this signature already removed from the docs."),(0,o.mdx)("li",{parentName:"ul"},"overwolf.media.replays.getState()"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.media.replays.startCapture(replayType, pastDuration, callback)"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.media.replays.stopCapture(ReplayType, replayId, callback)"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.media.replays.capture(replayType, pastDuration, futureDuration, captureFinishedCallback, callback)"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.media.replays.finishCapture() - already removed from the docs."),(0,o.mdx)("li",{parentName:"ul"},"overwolf.streaming.updateStreamingDesktopOptions()"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.benchmarking (all)"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.tobii (all)"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.media.audio (all)"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.settings.setFpsSettings()"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.settings.getHotKey()"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.settings.registerHotKey()"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.settings.getCurrentOverwolfLanguage()"),(0,o.mdx)("li",{parentName:"ul"},"overwolf.settings.OnHotkeyChanged")))),(0,o.mdx)("h3",{id:"platform"},"Platform"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"WebServer: ",(0,o.mdx)("a",{parentName:"li",href:"/api/web/webserver"},"overwolf.web.webserver")," now allow CORS.",(0,o.mdx)("br",{parentName:"li"}),"Now the built-in OW webserver sends the correct CORS headers (",(0,o.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin"},"Access-Control-Allow-Origin"),") to client.",(0,o.mdx)("br",{parentName:"li"}),"It's useful for case when you need to pass some data (ex: authentication token) from your website to Overwolf app. More info ",(0,o.mdx)("a",{parentName:"li",href:"/api/web/webserver"},"here"),"."),(0,o.mdx)("li",{parentName:"ul"},"Windows 10 version 2004 ",(0,o.mdx)("em",{parentName:"li"},"Hardware-Accelerated GPU Scheduling")," feature might cause captured videos to be laggy. More info ",(0,o.mdx)("a",{parentName:"li",href:"/topics/best-practices/video-capture#windows-10-hardware-accelerated-gpu-scheduling-notice"},"here"),".")),(0,o.mdx)("h3",{id:"bug-fixes"},"Bug fixes"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"On Uninstall, Overwolf now deletes all related registry entries from all users."),(0,o.mdx)("li",{parentName:"ul"},"Fixed a highlights bug where on rare occasions it would record the video, but wouldn't inform the app requesting it."),(0,o.mdx)("li",{parentName:"ul"},"Fixed cases where the video onStop/onStart listeners wouldn't return a callback."),(0,o.mdx)("li",{parentName:"ul"},"Fixed a bug where HTML5 audio would play twice."),(0,o.mdx)("li",{parentName:"ul"},"Fixed a bug with video naming when using the split API and the configuration include_full_size_video was false.")),(0,o.mdx)("h3",{id:"dev-console"},"Dev Console"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Now you can edit your subscription plan and manage your subscribers.",(0,o.mdx)("br",{parentName:"li"}),'We have added to the Dev Console a new tab: "Subscription". When clicked, two options will appear:',(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Plans - you can edit the subscription plans you already own: title, price, description, period, status, and assets (that'll be shown in Overwolf's app store).",(0,o.mdx)("br",{parentName:"li"}),"For now, you can only edit current plans. To create one, please ask your dev-rel manager."),(0,o.mdx)("li",{parentName:"ul"},"Subscribers - you\u2019ll be able to edit each subscriber expiration date and status (active/canceled/revoked/invalid)."))),(0,o.mdx)("li",{parentName:"ul"},"You can now see your app's URL to the Overwolf store listing directly from the console."),(0,o.mdx)("li",{parentName:"ul"},"To make our apps more transparent to users, we added the option to configure if you have ads, subs, and if the app is free. This will be shown to users on the app store."),(0,o.mdx)("li",{parentName:"ul"},"You can now see which tags are enabled for your app when searching for a game. To add more tags contact your dev-rel manager.")),(0,o.mdx)("h3",{id:"game-events"},"Game events"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/api/games/events/hearthstone"},"Hearthstone"),' - "match_end" now includes a match outcome value.d'),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/api/games/events/league-of-legends#live_client_data"},"League of Legends"),' - new event - "port". Random port that comes from Riot')))}c.isMDXComponent=!0}}]);