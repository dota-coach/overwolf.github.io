"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2795],{35318:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){return function(t){var n=d(t.components);return a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,u=m["".concat(i,".").concat(c)]||m[c]||f[c]||o;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const o={id:226,image:"/img/embed/changelogs.jpg",title:"Version 0.226",sidebar_label:"0.226",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2023/june/226",id:"api/changelogs/overwolf-platform/2023/june/226",title:"Version 0.226",description:"* Note that iterations 225 and 226 were combined into a single version.",source:"@site/pages/docs/api/changelogs/overwolf-platform/2023/june/226.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/june",slug:"/api/changelogs/overwolf-platform/2023/june/226",permalink:"/api/changelogs/overwolf-platform/2023/june/226",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2023/june/226.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1686837883,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{id:"226",image:"/img/embed/changelogs.jpg",title:"Version 0.226",sidebar_label:"0.226",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"Version 23.6.0",permalink:"/api/changelogs/electron-platform/ow-electron-builder/v23.6.0"},next:{title:"0.224",permalink:"/api/changelogs/overwolf-platform/2023/may/224"}},s={},p=[{value:"Platform",id:"platform",level:3},{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Note that iterations 225 and 226 were combined into a single version.")),(0,r.mdx)("h3",{id:"platform"},"Platform"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"As mentioned in a previous newsletter, this version will be the last supported Overwolf version for Windows 7/8/8.1."),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"A warning has been added to the installer as well as the clients of existing affected users."),(0,r.mdx)("li",{parentName:"ul"},"While support for this version will be removed, it will still continue working, and apps can still choose to release updates for it.")))),(0,r.mdx)("h3",{id:"api"},"API"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Deprecated API - Deprecated all ",(0,r.mdx)("a",{parentName:"li",href:"/api/deprecated/gfycat"},"Gfycat")," methods, as the site seems to ",(0,r.mdx)("a",{parentName:"li",href:"https://forums.tms.sx/threads/gfycat-is-dead.44691/"},"no longer be running"),"."),(0,r.mdx)("li",{parentName:"ul"},"New API - ",(0,r.mdx)("a",{parentName:"li",href:"/api/media#takescreenshotextargetpath-options-callback"},"overwolf.media.takeScreenshotEX()")," - Allows an app to further control the settings of file-based game screenshots.\t"),(0,r.mdx)("li",{parentName:"ul"},"New API - ",(0,r.mdx)("a",{parentName:"li",href:"/api/utils#createlogszipcallback"},"overwolf.utils.createLogsZip()")," - Allows an app to create a local logs.zip from the local users' logs, as opposed to just creating and uploading it directly to the server."),(0,r.mdx)("li",{parentName:"ul"},"Updated API - Added the ",(0,r.mdx)("a",{parentName:"li",href:"/api/games#getrunninggameinforesult-object"},(0,r.mdx)("inlineCode",{parentName:"a"},"GetRunningGameInfoResult.elevated"))," field, which indicates whether the running game is running with elevated permissions (Aka Running as Administrator)."),(0,r.mdx)("li",{parentName:"ul"},"Updated API - Improved the clarity of the exception thrown when selecting an unsupported encoder in ",(0,r.mdx)("a",{parentName:"li",href:"/api/streaming#streamsettings-object"},"StreamSettings")," - now uses the ",(0,r.mdx)("a",{parentName:"li",href:"/api/streaming#captureerrorcode-enum"},"CaptureErrorCode.UnsupportedEncoder")," error code.")),(0,r.mdx)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue involving app overlay enablement for newly targeted games."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where app windows would occassionally freeze when trying to open a new window."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/api/notifications#showtoastnotificationargs-callback"},"overwolf.notifications.showToastNotification()")," will no longer fail if passed an empty ",(0,r.mdx)("inlineCode",{parentName:"li"},"buttons")," array."),(0,r.mdx)("li",{parentName:"ul"},"Downloading an app through an app ",(0,r.mdx)("a",{parentName:"li",href:"/tools/developers-console/all-applications/release-management/testing"},"test channel")," whose name contains a space (",(0,r.mdx)("inlineCode",{parentName:"li"}," "),") character will no longer download the app's public version instead."),(0,r.mdx)("li",{parentName:"ul"},"Drag resizing an in-game window will no longer get stuck when releasing the drag outside of the game's screen."),(0,r.mdx)("li",{parentName:"ul"},"Game-specific hotkeys will no longer ignore settings changes on the next overwolf start."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue with the enable overlay notification not showing in some cases."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/api/extensions/io#deletespace-path-callback"},(0,r.mdx)("inlineCode",{parentName:"a"},"overwolf.overwolf.extensions.io.delete()"))," will no longer throw an error when passing in an empty file path.")))}d.isMDXComponent=!0}}]);