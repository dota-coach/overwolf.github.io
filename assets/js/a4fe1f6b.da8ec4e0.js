"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4428],{35318:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>b,useMDXComponents:()=>f,withMDXComponents:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){return function(t){var r=f(t.components);return n.createElement(e,o({},t,{components:r}))}},f=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=f(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=f(r),c=a,u=m["".concat(i,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(u,l(l({ref:t},s),{},{components:r})):n.createElement(u,l({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},71080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(25773),a=(r(27378),r(35318));const o={id:218,image:"/img/embed/changelogs.jpg",title:"Version 0.218",sidebar_label:"0.218",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2023/february/218",id:"api/changelogs/overwolf-platform/2023/february/218",title:"Version 0.218",description:"API",source:"@site/pages/docs/api/changelogs/overwolf-platform/2023/february/218.mdx",sourceDirName:"api/changelogs/overwolf-platform/2023/february",slug:"/api/changelogs/overwolf-platform/2023/february/218",permalink:"/api/changelogs/overwolf-platform/2023/february/218",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2023/february/218.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1675351885,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{id:"218",image:"/img/embed/changelogs.jpg",title:"Version 0.218",sidebar_label:"0.218",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"Version 23.6.0",permalink:"/api/changelogs/electron-platform/ow-electron-builder/v23.6.0"},next:{title:"0.217",permalink:"/api/changelogs/overwolf-platform/2023/january/217"}},p={},s=[{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],m={toc:s};function f(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h3",{id:"api"},"API"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Updated API - ",(0,a.mdx)("a",{parentName:"li",href:"/api/games#runninggameinfo-object"},(0,a.mdx)("inlineCode",{parentName:"a"},"overwolf.games.RunningGameInfo"))," for games where overlay stays even if the game loses focus:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/api/games#onGameInfoUpdated"},(0,a.mdx)("inlineCode",{parentName:"a"},"overwolf.games.onGameInfoUpdated"))," will now also fire when losing focus in these games."),(0,a.mdx)("li",{parentName:"ul"},"Added the ",(0,a.mdx)("a",{parentName:"li",href:"/api/games#runninggameinfo-object"},(0,a.mdx)("inlineCode",{parentName:"a"},"gameIsInFocus"))," field to ",(0,a.mdx)("a",{parentName:"li",href:"/api/games#runninggameinfo-object"},(0,a.mdx)("inlineCode",{parentName:"a"},"overwolf.games.RunningGameInfo")),", to indicate if the game itself (or any of its overlay windows) is focused.")))),(0,a.mdx)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Fixed a bug where ",(0,a.mdx)("a",{parentName:"li",href:"/api/notifications#ontoastinteraction"},(0,a.mdx)("inlineCode",{parentName:"a"},"overwolf.notifications.onToastInteraction"))," would only fire in the same window as the original ",(0,a.mdx)("a",{parentName:"li",href:"/api/notifications#showtoastnotificationargs-callback"},(0,a.mdx)("inlineCode",{parentName:"a"},"overwolf.notifications.showToastNotification()"))," call.")))}f.isMDXComponent=!0}}]);