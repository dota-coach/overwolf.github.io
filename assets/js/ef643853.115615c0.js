"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[3524],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),f=o,d=u["".concat(s,".").concat(f)]||u[f]||c[f]||n;return a?r.createElement(d,l(l({ref:t},m),{},{components:a})):r.createElement(d,l({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},89662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(25773),o=(a(27378),a(35318));const n={id:155,image:"/img/embed/changelogs.jpg",title:"Version 0.155",sidebar_label:"0.155",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2020/september/155",id:"api/changelogs/overwolf-platform/2020/september/155",title:"Version 0.155",description:"Note that iterations 154 and 155 were combined into a single iteration.",source:"@site/../pages/api/changelogs/overwolf-platform/2020/september/155.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/september",slug:"/api/changelogs/overwolf-platform/2020/september/155",permalink:"/api/changelogs/overwolf-platform/2020/september/155",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2020/september/155.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1704128143,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"155",image:"/img/embed/changelogs.jpg",title:"Version 0.155",sidebar_label:"0.155",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.156",permalink:"/api/changelogs/overwolf-platform/2020/october/156"},next:{title:"0.153",permalink:"/api/changelogs/overwolf-platform/2020/august/153"}},s={},p=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Game events",id:"game-events",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Note that iterations 154 and 155 were combined into a single iteration.  "),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/api/utils#placeonclipboarddata"},"overwolf.utils.placeOnClipboard()")," and ",(0,o.kt)("a",{parentName:"p",href:"/api/utils#getfromclipboardcallback"},"overwolf.utils.getFromClipboard()")," reimplemented so that we tackle the coexistence issues with AutoHotKey script.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/api/games/input-tracking#getactivityinformationcallback"},"overwolf.games.inputTracking.getActivityInformation()")," - remove the 5 minutes min time for getting a result.",(0,o.kt)("br",{parentName:"p"}),"\n","Note that We're still not recording the first 30 characters, and we will send the activity info to our servers only if your sessions is longer than 5 minutes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"New flag for ",(0,o.kt)("a",{parentName:"p",href:"/api/media/replays#replayvideooptions-object"},"replay")," \\ ",(0,o.kt)("a",{parentName:"p",href:"/api/streaming#streamvideooptions-object"},"streaming")," video settings object: ",(0,o.kt)("strong",{parentName:"p"},"use_app_display_name"),".",(0,o.kt)("br",{parentName:"p"}),"\n",'If this flag in on, when creating a video capture folder, it will use the app "short name" as the folder name, instead of using the app name from the manifest. (the app "short name" is defined in the ',(0,o.kt)("a",{parentName:"p",href:"/api/manifest#meta-dock"},"dock_button_title")," manifest flag).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"it is now possible to change the number of maximum saved log files that\napps are saving with the new max_rotation_log_file manifest flag\nNew manifest flag ",(0,o.kt)("a",{parentName:"p",href:"/api/manifest#max_rotation_log_files"},"max_rotation_log_files")," - for app Log rotaion control. It allow to increase app log's file rotation (up to 40).\n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"New feature: Set window zoom level - ",(0,o.kt)("a",{parentName:"p",href:"/api/windows#setzoomwinzoomfactorowid-windowid"},"overwolf.window.setZoom()"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Now you can change the zoom factor of your window through the API (the effect is exactly like changing the zoom in a web browser).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("a",{parentName:"p",href:"/api/deprecated/audio"},"overwolf.media.audio")," is now considered obsolete, and will display the relevant warning in the console when using it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We marked several functions and APIs as ",(0,o.kt)("strong",{parentName:"p"},"OBSOLETE"),". Soon, we altogether remove them from the docs and from the API itself. Note that you should get a warning in your dev console when using one of the obsolete functions.",(0,o.kt)("br",{parentName:"p"}),"\n","This is the full list of OBSOLETE functions and APIs:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"overwolf.media.stopGifBuffer()"),(0,o.kt)("li",{parentName:"ul"},"overwolf.media.generateGif()"),(0,o.kt)("li",{parentName:"ul"},"overwolf.media.startGifBuffer()"),(0,o.kt)("li",{parentName:"ul"},"overwolf.media.replays.turnOff(replyID, callback) - this signature already removed from the docs."),(0,o.kt)("li",{parentName:"ul"},"overwolf.media.replays.getState()"),(0,o.kt)("li",{parentName:"ul"},"overwolf.media.replays.startCapture(replayType, pastDuration, callback)"),(0,o.kt)("li",{parentName:"ul"},"overwolf.media.replays.stopCapture(ReplayType, replayId, callback)"),(0,o.kt)("li",{parentName:"ul"},"overwolf.media.replays.capture(replayType, pastDuration, futureDuration, captureFinishedCallback, callback)"),(0,o.kt)("li",{parentName:"ul"},"overwolf.media.replays.finishCapture() - already removed from the docs."),(0,o.kt)("li",{parentName:"ul"},"overwolf.streaming.updateStreamingDesktopOptions()"),(0,o.kt)("li",{parentName:"ul"},"overwolf.benchmarking (all)"),(0,o.kt)("li",{parentName:"ul"},"overwolf.tobii (all)"),(0,o.kt)("li",{parentName:"ul"},"overwolf.media.audio (all)"),(0,o.kt)("li",{parentName:"ul"},"overwolf.settings.setFpsSettings()"),(0,o.kt)("li",{parentName:"ul"},"overwolf.settings.getHotKey()"),(0,o.kt)("li",{parentName:"ul"},"overwolf.settings.registerHotKey()"),(0,o.kt)("li",{parentName:"ul"},"overwolf.settings.getCurrentOverwolfLanguage()"),(0,o.kt)("li",{parentName:"ul"},"overwolf.settings.OnHotkeyChanged")))),(0,o.kt)("h3",{id:"platform"},"Platform"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WebServer: ",(0,o.kt)("a",{parentName:"li",href:"/api/web/webserver"},"overwolf.web.webserver")," now allow CORS.",(0,o.kt)("br",{parentName:"li"}),"Now the built-in OW webserver sends the correct CORS headers (",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin"},"Access-Control-Allow-Origin"),") to client.",(0,o.kt)("br",{parentName:"li"}),"It's useful for case when you need to pass some data (ex: authentication token) from your website to Overwolf app. More info ",(0,o.kt)("a",{parentName:"li",href:"/api/web/webserver"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"Windows 10 version 2004 ",(0,o.kt)("em",{parentName:"li"},"Hardware-Accelerated GPU Scheduling")," feature might cause captured videos to be laggy. More info ",(0,o.kt)("a",{parentName:"li",href:"/topics/best-practices/video-capture#windows-10-hardware-accelerated-gpu-scheduling-notice"},"here"),".")),(0,o.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On Uninstall, Overwolf now deletes all related registry entries from all users."),(0,o.kt)("li",{parentName:"ul"},"Fixed a highlights bug where on rare occasions it would record the video, but wouldn't inform the app requesting it."),(0,o.kt)("li",{parentName:"ul"},"Fixed cases where the video onStop/onStart listeners wouldn't return a callback."),(0,o.kt)("li",{parentName:"ul"},"Fixed a bug where HTML5 audio would play twice."),(0,o.kt)("li",{parentName:"ul"},"Fixed a bug with video naming when using the split API and the configuration include_full_size_video was false.")),(0,o.kt)("h3",{id:"dev-console"},"Dev Console"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now you can edit your subscription plan and manage your subscribers.",(0,o.kt)("br",{parentName:"li"}),'We have added to the Dev Console a new tab: "Subscription". When clicked, two options will appear:',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Plans - you can edit the subscription plans you already own: title, price, description, period, status, and assets (that'll be shown in Overwolf's app store).",(0,o.kt)("br",{parentName:"li"}),"For now, you can only edit current plans. To create one, please ask your DevRel manager."),(0,o.kt)("li",{parentName:"ul"},"Subscribers - you\u2019ll be able to edit each subscriber expiration date and status (active/canceled/revoked/invalid)."))),(0,o.kt)("li",{parentName:"ul"},"You can now see your app's URL to the Overwolf store listing directly from the console."),(0,o.kt)("li",{parentName:"ul"},"To make our apps more transparent to users, we added the option to configure if you have ads, subs, and if the app is free. This will be shown to users on the app store."),(0,o.kt)("li",{parentName:"ul"},"You can now see which tags are enabled for your app when searching for a game. To add more tags contact your DevRel manager.")),(0,o.kt)("h3",{id:"game-events"},"Game events"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/hearthstone"},"Hearthstone"),' - "match_end" now includes a match outcome value.d'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/live-game-data/supported-games/league-of-legends#live_client_data"},"League of Legends"),' - new event - "port". Random port that comes from Riot')))}u.isMDXComponent=!0}}]);