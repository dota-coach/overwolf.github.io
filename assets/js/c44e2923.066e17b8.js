"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1462],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(o,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73247:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:201,title:"Version 0.201",sidebar_label:"0.201",sidebar_position:201},s=void 0,m={unversionedId:"api/changelogs/2022/july/201",id:"api/changelogs/2022/july/201",title:"Version 0.201",description:"* Note that iterations 200 and 201 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/2022/7-july/201.mdx",sourceDirName:"api/changelogs/2022/7-july",slug:"/api/changelogs/2022/july/201",permalink:"/api/changelogs/2022/july/201",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/2022/7-july/201.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1659614805,formattedLastUpdatedAt:"8/4/2022",sidebarPosition:201,frontMatter:{id:"201",title:"Version 0.201",sidebar_label:"0.201",sidebar_position:-201},sidebar:"api",previous:{title:"GEP Changelogs",permalink:"/api/changelogs/gep-changelogs"},next:{title:"0.203",permalink:"/api/changelogs/2022/july/203"}},d={},p=[{value:"Game events",id:"game-events",level:4},{value:"Docs",id:"docs",level:4},{value:"Platform",id:"platform",level:4},{value:"Bug Fixes",id:"bug-fixes",level:4}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Note that iterations 200 and 201 were combined into a single iteration.")),(0,i.mdx)("h4",{id:"game-events"},"Game events"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Pubg"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Support for new map - Deston"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Rainbow Six Siege"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},'New "suffix" field was added in roster event. According to Ubisoft privacy rules, in case there is a value in this field it must be linked to the player\'s name field wherever it appears during the match - More details ',(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/rainbow-six-siege#roster_xx-notes"},"here")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Axie Infinity origin"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New game support - More details ",(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/axie-infinity-origin"},"here")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Valorant"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New map support for Pitt - Pearl. More details ",(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/valorant"},"here")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Dota 2"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New support for Hero Pool detection for Captain\u2019s Draft ",(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/dota-2"},"here")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Diablo 2"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New game events. More details ",(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/diablo-2-resurrected"},"here"))))),(0,i.mdx)("h4",{id:"docs"},"Docs"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Site-wide search improvements"),(0,i.mdx)("li",{parentName:"ul"},"Better look and feel (modern, clean and fast!)"),(0,i.mdx)("li",{parentName:"ul"},"Fixed a lot of broken links and formatting"),(0,i.mdx)("li",{parentName:"ul"},"Updated from docusaurus 1.14.7 -> 2.0.0-beta-20")),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"If you are using a fork of the website's original repository, you should fetch the new update as soon as possible to avoid losing any changes."))),(0,i.mdx)("p",null,"Known website issues:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},'"view all search results" is sometimes broken'),(0,i.mdx)("li",{parentName:"ul"},"Changelog is not indexed when searching"),(0,i.mdx)("li",{parentName:"ul"},'The old "Get It On Overwolf" images from the ',(0,i.mdx)("a",{parentName:"li",href:"/topics/best-practices/communication-guidelines"},"Marketing Communication Guidelines")," page are unavailable from the old links. For now, the page has been updated with an extra set of links.")),(0,i.mdx)("h4",{id:"platform"},"Platform"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Added the ",(0,i.mdx)("inlineCode",{parentName:"li"},"tray_icon")," flag to the ",(0,i.mdx)("a",{parentName:"li",href:"/api/manifest"},"manifest"),". When provided, this icon will be used as the tray icon, rather than the launcher icon."),(0,i.mdx)("li",{parentName:"ul"},"Various improvements to high-dpi transparent windows.")),(0,i.mdx)("h4",{id:"bug-fixes"},"Bug Fixes"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Sharing Quick Sync videos recorded with overwolf to twitter now works with videos recorded on up to 30 fps."),(0,i.mdx)("li",{parentName:"ul"},"Fixed missing notification when sharing an image to reddit."),(0,i.mdx)("li",{parentName:"ul"},"Fixed issue where ",(0,i.mdx)("a",{parentName:"li",href:"/api/utils#openurlindefaultbrowserurl"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.utils.openUriInDefaultBrowser('ms-settings:display-advancedgraphics')"))," would not open the Microsoft Display settings."),(0,i.mdx)("li",{parentName:"ul"},"Fixed a bug involving ",(0,i.mdx)("a",{parentName:"li",href:"/api/windows#flashwindowid-behaviorcallback"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.windows.flash()")),"."),(0,i.mdx)("li",{parentName:"ul"},"Fixed a bug where opening a native window could sometimes cause games to lose focus."),(0,i.mdx)("li",{parentName:"ul"},"Fixed a bug where calling ",(0,i.mdx)("a",{parentName:"li",href:"/api/windows#bringtofrontgrabfocus-callback"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.windows.bringToFront(false, callback)"))," or ",(0,i.mdx)("a",{parentName:"li",href:"/api/windows#bringtofrontwindowid-grabfocus-callback"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.windows.bringToFront(windowId, false, callback)"))," could sometimes cause a game to lose focus.")))}c.isMDXComponent=!0}}]);