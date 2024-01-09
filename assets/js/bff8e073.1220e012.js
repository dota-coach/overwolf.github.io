"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[7458],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87631:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(25773),o=(n(27378),n(35318));const r={toc:[{value:"Fetching your app ID",id:"fetching-your-app-id",level:4}]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every Overwolf application (ow-electron or Overwolf platform), has a unique app id. This unique id is automatically generated, and is based on the app's name,\nand the app's author's name."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"ow-electron"),", these fields correspond to the following fields in the package.json file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"App name - The ",(0,o.kt)("inlineCode",{parentName:"li"},"productName")," (defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," if missing) properties"),(0,o.kt)("li",{parentName:"ul"},"App author - The ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," field under the ",(0,o.kt)("inlineCode",{parentName:"li"},"author")," field.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Partial package.json with the relevant fields"',title:'"Partial',"package.json":!0,with:!0,the:!0,relevant:!0,'fields"':!0},'{\n  ...\n  "name": "ow-electron-sample-app",\n  ...\n  "author": {\n    "name": "Overwolf"\n  },\n  "productName": "real-ow-electron-sample-app",\n  ...\n  "build": {\n    ...\n    "productName": "unrelated-name-passed-to-builder",\n    ...\n  },\n  ...\n}\n')),(0,o.kt)("h4",{id:"fetching-your-app-id"},"Fetching your app ID"),(0,o.kt)("p",null,"Once your app has loaded, you can fetch the app ID through the API as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import app from 'electron';\n...\napp.whenReady().then(() => {\n  const appID = process.env.OVERWOLF_APP_UID;\n});\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note that this environment variable will only exist once the app is ready.")))}i.isMDXComponent=!0},31442:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(25773),o=(n(27378),n(35318));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="start and build command variants for @overwolf/ow-electron"',title:'"start',and:!0,build:!0,command:!0,variants:!0,for:!0,'@overwolf/ow-electron"':!0},'{\n  ...\n  "scripts": {\n    ...\n    "start:ow-electron": "ow-electron .",\n    "build:ow-electron": "ow-electron-builder --publish=never"\n  },\n  ...\n}\n')))}i.isMDXComponent=!0},70537:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(25773),o=(n(27378),n(35318));const r={toc:[{value:"Introducing the CMP",id:"introducing-the-cmp",level:3}]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A CMP makes it easier for you to meet the stricter legal requirements governing data collection in certain parts of the world,\nby helping you handle the process of receiving consent to collect user cookies. This also allows you to show ads to users living in those areas."),(0,o.kt)("p",null,"ow-electron comes with a built in CMP, which your app can utilize out of the box.\nThis allows you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check if a user needs to be informed of the CMP"),(0,o.kt)("li",{parentName:"ul"},"Show them the CMP itself if necessary, applying any settings they use to the entire ow-electron package")),(0,o.kt)("p",null,"The relevant users should then be informed about the existence of the CMP, as well as where they can find it in the app."),(0,o.kt)("h3",{id:"introducing-the-cmp"},"Introducing the CMP"),(0,o.kt)("p",null,"There are two ways to introduce the relevant users to the CMP:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"During the app's installation - ",(0,o.kt)("strong",{parentName:"li"},"Recommended")),(0,o.kt)("li",{parentName:"ul"},"On the app's first start, as part of the First Time User Experience (FTUE)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you are migrating your app to ow-electron, this will also apply to the first time that existing users start the app after the update")))))}i.isMDXComponent=!0},4409:(e,t,n)=>{n.d(t,{ZP:()=>h});var a=n(25773),o=(n(27378),n(35318));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deploying, distributing, and monitoring an app requires a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Content_delivery_network"},"CDN"),"."),(0,o.kt)("p",null,"Overwolf Electron is built to seamlessly integrate with the Overwolf CDN, offering the following capabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"App release file hosting/distribution"),(0,o.kt)("li",{parentName:"ul"},"Support for multiple release channels"),(0,o.kt)("li",{parentName:"ul"},"Archive of all past releases, including older release files"),(0,o.kt)("li",{parentName:"ul"},"App usage analytics (can be turned off)")),(0,o.kt)("p",null,"All of this is then managed from within the ",(0,o.kt)("a",{parentName:"p",href:"/tools/developers-console"},"Overwolf Developers' Console"),"."))}i.isMDXComponent=!0;const l={toc:[{value:"Supported UTM Parameters",id:"supported-utm-parameters",level:4}]};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Your app's user experience starts as soon as the user runs it for the first time. To help you make it a success from the very start,\nwe have adapted the ",(0,o.kt)("a",{parentName:"p",href:"/tools/ow-installer"},"Overwolf Installer"),", making it also work with ow-electron."),(0,o.kt)("p",null,"This installer can (optionally) handle any of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tracking of installation ",(0,o.kt)("a",{parentName:"li",href:"#supported-utm-parameters"},"UTM Parameters"),", which will be shown in your ",(0,o.kt)("a",{parentName:"li",href:"/tools/developers-console/all-applications/dashboard"},"app's Dashboard"),"."),(0,o.kt)("li",{parentName:"ul"},"CMP flow introduction (for users living in countries where that is required)."),(0,o.kt)("li",{parentName:"ul"},"Desktop shortcut creation (as well as allowing the user to avoid creating one)."),(0,o.kt)("li",{parentName:"ul"},"App installation folder control.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"*","Apart from that, most of the installer's text/graphics can be changed/configured to fit your specific app. For more details, see ",(0,o.kt)("a",{parentName:"em",href:"/tools/ow-installer"},"Overwolf Installer")),"."),(0,o.kt)("h4",{id:"supported-utm-parameters"},"Supported UTM Parameters"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/UTM_parameters#UTM_parameters"},"UTM parameters")," allow your team to better track the installation sources for your app. Currently, the following three parameters are supported in the custom installer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"utm_source"),' - "Identifies which site sent the traffic, and is a required parameter".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"utm_medium"),' - "Identifies what type of link was used, such as cost per click or email".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"utm_campaign"),' - "Identifies a specific product promotion or strategic campaign".')),(0,o.kt)("admonition",{title:"Retrieving UTM parameters in runtime",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Once the app finishes initializing, its UTM parameters can be retrieved through the API, under the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.overwolf.utmParams")," field.")),(0,o.kt)("p",null,"If you have any more questions about the installer, or wish to see if it is right for your app, feel free to ",(0,o.kt)("a",{parentName:"p",href:"/support/contact-us"},"contact-us"),"."))}p.isMDXComponent=!0;const s=(u="SkipMe",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const c={toc:[{value:"Setting up the updater endpoint",id:"setting-up-the-updater-endpoint",level:4},{value:"Using app testing channels",id:"using-app-testing-channels",level:4}]};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Electron comes with a built in ",(0,o.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/auto-updater"},"automatic app updater"),", which handles all update-related matters on its own.\nHowever, in order for Electron to be able to automatically update your app, it must be configured with a consistent endpoint it can check against for updates/download updates from."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Overwolf Electron apps that choose to use our ",(0,o.kt)("a",{parentName:"strong",href:"/tools/ow-electron/distribution#app-file-hosting"},"App File Hosting")),", Overwolf handles the maintenance of this endpoint."),(0,o.kt)("h4",{id:"setting-up-the-updater-endpoint"},"Setting up the updater endpoint"),(0,o.kt)("p",null,"In order to set up the endpoint, simply add the following to your main .js file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Setting up ow-electron auto updates"',title:'"Setting',up:!0,"ow-electron":!0,auto:!0,'updates"':!0},"const { autoUpdater } = require(\"electron\")\n...\n\nautoUpdater.setFeedURL({\n  provider: 'generic',\n  url: `https://electron-updates.overwolf.com/electron-updates/electron/${your_app_id}`\n});\n")),(0,o.kt)(s,{type:"TODO",mdxType:"SkipMe"},(0,o.kt)("h4",{id:"using-app-testing-channels"},"Using app testing channels"),(0,o.kt)("p",null,"The automatic updater endpoint also supports the usage of ",(0,o.kt)("a",{parentName:"p",href:"/tools/developers-console/all-applications/release-management#what-are-release-channels"},"app channels"),". To set the app to use a specific channel,\nsimply change the ",(0,o.kt)("inlineCode",{parentName:"p"},"autoUpdater.channel")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Changing the app channel"',title:'"Changing',the:!0,app:!0,'channel"':!0},"autoUpdater.channel = channel_name;\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"To go back to the production channel, simply set the channel name to ",(0,o.kt)("inlineCode",{parentName:"em"},"''"),"."))))}d.isMDXComponent=!0;const m={toc:[{value:"App File Hosting (CDN)",id:"app-file-hosting-cdn",level:3},{value:"Customizable Installer",id:"customizable-installer",level:3},{value:"Electron Updater Endpoint",id:"electron-updater-endpoint",level:3}]};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Overwolf provides several different hosting/distribution services for apps running on its different platforms. These services have been adapted to support Overwolf Electron, and include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#app-file-hosting-cdn"},"CDN")," - Free hosting and distribution of app release files, managed through the ",(0,o.kt)("a",{parentName:"li",href:"/tools/developers-console/all-applications/release-management"},"App Developers' Console"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#customizable-installer"},"Custom Installer")," - A customizable designed installer, with a built-in ",(0,o.kt)("a",{parentName:"li",href:"/tools/ow-electron/consent-management-platform"},"CMP introduction flow"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#electron-updater-endpoint"},"Updater Endpoint")," - An ",(0,o.kt)("a",{parentName:"li",href:"https://www.electronjs.org/docs/latest/api/auto-updater"},"electron-updater")," endpoint, to ensure your app is always kept up to date.")),(0,o.kt)("p",null,"To get started with any of these services for your ",(0,o.kt)("a",{parentName:"p",href:"https://electronjs.org"},"electron.js")," app, ",(0,o.kt)("a",{parentName:"p",href:"/support/contact-us"},"contact us"),"."),(0,o.kt)("h3",{id:"app-file-hosting-cdn"},"App File Hosting (CDN)"),(0,o.kt)(i,{mdxType:"Hosting"}),(0,o.kt)("h3",{id:"customizable-installer"},"Customizable Installer"),(0,o.kt)(p,{mdxType:"Installer"}),(0,o.kt)("h3",{id:"electron-updater-endpoint"},"Electron Updater Endpoint"),(0,o.kt)(d,{mdxType:"OWUpdater"}))}h.isMDXComponent=!0},21391:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(25773),o=(n(27378),n(35318));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Ad Enablement",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In order for your app to be able to display Ads, we first have to set up our backend to support your ",(0,o.kt)("a",{parentName:"p",href:"#unique-app-id"},"app's uid"),".\nPlease contact us for further details ",(0,o.kt)("a",{parentName:"p",href:"/support/contact-us"},"here"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Until then, you can test how Ads would look and behave in your app, by passing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"--test-ad")," commandline argument."),(0,o.kt)("p",{parentName:"admonition"},"To enable ads for users in areas with more strict data collection regulations, it is also required to fully follow our ",(0,o.kt)("a",{parentName:"p",href:"/tools/ow-electron/consent-management-platform"},"CMP Implementation Guidelines"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<owadview/>")," tag, which is based on the Electron ",(0,o.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/webview-tag"},(0,o.kt)("inlineCode",{parentName:"a"},"<webview/>"))," tag, automatically hosts and manages ads in your app."),(0,o.kt)("p",null,"To use it, place the ",(0,o.kt)("inlineCode",{parentName:"p"},"<owadview/>")," tag (no attributes required) inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," tag, with the size of the ",(0,o.kt)("a",{parentName:"p",href:"/start/monetize-your-app/advertising/working-with-ads#list-of-ad-sizes"},"standard IAB Ad unit")," you wish to display."),(0,o.kt)("p",null,"For more information about supported ad units + General Ads guidelines, visit ",(0,o.kt)("a",{parentName:"p",href:"/start/monetize-your-app/advertising/working-with-ads"},"Working with Ads"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div style="width: 400px; height: 300px; background: transparent;">\n  <owadview />\n</div>\n')),(0,o.kt)("admonition",{title:"Transparent Background",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"background: transparent"),", in order to allow your app to show a background image as a fallback when there is no ads inventory to display.")),(0,o.kt)("p",null,"Other things to keep in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"<owadview/>")," tag starts muted by default. This can be ",(0,o.kt)("a",{parentName:"li",href:"https://www.electronjs.org/docs/latest/api/webview-tag#webviewsetaudiomutedmuted"},"changed"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"<owadview/>")," tag is automatically managed, so it will already handle any issues involving ad visibility or crashes.")))}i.isMDXComponent=!0},44142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var a=n(25773),o=(n(27378),n(35318)),r=n(31442),i=n(87631),l=n(21391),p=n(70537),s=n(4409);const u={toc:[{value:"Unique App ID",id:"unique-app-id",level:2},{value:"The owadview tag",id:"the-owadview-tag",level:2},{value:"Anonymous Analytics",id:"anonymous-analytics",level:2},{value:"Consent Management Platform (CMP)",id:"consent-management-platform-cmp",level:2},{value:"Distribution Resources",id:"distribution-resources",level:2}]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There is no problem with running both ow-electron and electron side-by-side on the same project. In order to run your app with ow-electron,\nyou only need to add new start and build scripts in your package.json file:"),(0,o.kt)(r.ZP,{mdxType:"StartAndBuild"}),(0,o.kt)("h2",{id:"unique-app-id"},"Unique App ID"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Unique app ids are used for ads optimizations, as well as for optional ",(0,o.kt)("a",{parentName:"em",href:"#anonymous-analytics"},"anonymous analytics")," reports that you may review on our developer's console.")),(0,o.kt)(i.ZP,{mdxType:"AppAndAuthorName"}),(0,o.kt)("h2",{id:"the-owadview-tag"},"The owadview tag"),(0,o.kt)(l.ZP,{mdxType:"OverwolfAdView"}),(0,o.kt)("h2",{id:"anonymous-analytics"},"Anonymous Analytics"),(0,o.kt)("p",null,"In order to generate usage reports for your ow-electron app, we collect a small number of anonymous analytics (such as when the app is launched,\nand when a certain app's window is shown)."),(0,o.kt)("p",null,"You can disable these analytics with the following piece of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { app } from 'ow-electron';\n\napp.overwolf.disableAnonymousAnalytics();\n\n...\n\napp.whenReady().then(...)\n")),(0,o.kt)("admonition",{title:"Disabling Analytics",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"App analytics are disabled on a per-session basis. If you wish to completely disable them, you must do so before every app start, when initailizing your app.")),(0,o.kt)("h2",{id:"consent-management-platform-cmp"},"Consent Management Platform (CMP)"),(0,o.kt)(p.ZP,{mdxType:"CMPIntro"}),(0,o.kt)("p",null,"For more infromation about the CMP and how to work with it, refer to ",(0,o.kt)("a",{parentName:"p",href:"ow-electron/consent-management-platform"},"Consent-Management-Platform"),"."),(0,o.kt)("h2",{id:"distribution-resources"},"Distribution Resources"),(0,o.kt)(s.ZP,{mdxType:"Distribution"}))}c.isMDXComponent=!0;const d={id:"ow-electron",image:"/img/embed/electron.jpg",title:"ow-electron",sidebar_custom_props:{tags:{overwolf_platform:!1,electron_platform:!0},category:{id:"frameworks"}}},m=void 0,h={unversionedId:"tools/ow-electron/ow-electron",id:"tools/ow-electron/ow-electron",title:"ow-electron",description:"ow-electron is a solution built on top of electron, aimed at allowing electron apps access to Overwolf APIs.",source:"@site/../pages/tools/ow-electron/ow-electron.mdx",sourceDirName:"tools/ow-electron",slug:"/tools/ow-electron/",permalink:"/tools/ow-electron/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/tools/ow-electron/ow-electron.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1704128143,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"ow-electron",image:"/img/embed/electron.jpg",title:"ow-electron",sidebar_custom_props:{tags:{overwolf_platform:!1,electron_platform:!0},category:{id:"frameworks"}}},sidebar:"tools",previous:{title:"Frameworks Overview",permalink:"/tools/frameworks/"},next:{title:"Frequently Asked Questions",permalink:"/tools/ow-electron/frequently-asked-questions"}},w={},f=[],k={toc:f};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ow-electron is a solution built on top of ",(0,o.kt)("a",{parentName:"p",href:"https://www.electronjs.org/"},"electron"),", aimed at allowing electron apps access to Overwolf APIs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@overwolf/ow-electron"},"@overwolf/ow-electron")," is a package based on the\n",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/electron"},"electron")," package, adding several new features to it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@overwolf/ow-electron-builder"},"@overwolf/ow-electron-builder")," is a package based on the\n",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/electron-builder"},"electron-builder")," package, which supports building ow-electron apps."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@overwolf/electron-is-overwolf"},"@overwolf/electron-is-overwolf")," - similar to the\n",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/electron-is-dev"},"electron-is-dev")," package, allows your app to check whether it's currently running as ",(0,o.kt)("inlineCode",{parentName:"li"},"ow-electron"),", or as a base ",(0,o.kt)("inlineCode",{parentName:"li"},"electron")," app.")),(0,o.kt)("div",{className:"underline-patch"},(0,o.kt)("admonition",{title:"ow-electron App Creation",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The following page lists the different ow-electron features and how to enable them.",(0,o.kt)("br",{parentName:"p"}),"\n","General Overwolf ",(0,o.kt)("a",{parentName:"p",href:"/start/getting-started/app-creation-process"},"app creation resources")," and ",(0,o.kt)("a",{parentName:"p",href:"/start/getting-started"},"intro to Overwolf apps")," are available at their respective pages."))),(0,o.kt)(c,{mdxType:"ReadMe"}))}g.isMDXComponent=!0}}]);