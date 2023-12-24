"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1463],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>T,frontMatter:()=>c,metadata:()=>d,toc:()=>k});var o=n(25773),r=(n(27378),n(35318));const a=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},i=a("SkipMe"),p=a("Tabs"),s=a("TabItem"),l={toc:[{value:"Sample App",id:"sample-app",level:3},{value:"Creating an <code>Overwolf App</code> Tebex Store",id:"creating-an-overwolf-app-tebex-store",level:3},{value:"Setting up webhook",id:"setting-up-webhook",level:3},{value:"Setting up subscription plans",id:"setting-up-subscription-plans",level:3},{value:"Store ID and Private Key",id:"store-id-and-private-key",level:3},{value:"Link store",id:"link-store",level:3},{value:"Implement in your App",id:"implement-in-your-app",level:3}]};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Overwolf Subscriptions API works by exposing a few simple endpoints, which the App can then interact with,\nin order to perform most common interactions with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tebex.io/developers/checkout-api/overview"},"Tebex Checkout API"),"."),(0,r.kt)("h3",{id:"sample-app"},"Sample App"),(0,r.kt)("p",null,"For an example implementation of the Overwolf Subscriptions API, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overwolf/tebex-subs-sample"},"relevant sample app"),"."),(0,r.kt)("h3",{id:"creating-an-overwolf-app-tebex-store"},"Creating an ",(0,r.kt)("inlineCode",{parentName:"h3"},"Overwolf App")," Tebex Store"),(0,r.kt)("p",null,'The Tebex Checkout API requires an appropriate "Store" to be defined. To create a store:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Head to the ",(0,r.kt)("a",{parentName:"li",href:"https://accounts.tebex.io/profile"},"Tebex Control Panel"),",\nand make sure you have a registered account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/support/contact-us"},"Contact us")," to be given a link to create an Overwolf App type store.")),(0,r.kt)("h3",{id:"setting-up-webhook"},"Setting up webhook"),(0,r.kt)("p",null,"To make sure that the store is synchronized with the Overwolf Subscriptions API, you MUST create a webhook linking the two:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Head to the ",(0,r.kt)("a",{parentName:"li",href:"https://creator.tebex.io/webhooks/endpoints"},"Webhooks Endpoints")," page (make sure you're viewing the right store)."),(0,r.kt)("li",{parentName:"ul"},"First of all - at the bottom of the page, you'll find the ",(0,r.kt)("inlineCode",{parentName:"li"},"Secret Key"),", used for linking your store with the Overwolf Subscriptions API."),(0,r.kt)("li",{parentName:"ul"},"Now, Create a new Endpoint, and mark ",(0,r.kt)("strong",{parentName:"li"},"ALL")," Webhook Types for it."),(0,r.kt)("li",{parentName:"ul"},"For the Endpoint's URL, use ",(0,r.kt)("inlineCode",{parentName:"li"},"https://subscriptions-api.overwolf.com/tebex-webhooks/${YOUR_PUBLIC_TOKEN}"),".")),(0,r.kt)("h3",{id:"setting-up-subscription-plans"},"Setting up subscription plans"),(0,r.kt)("admonition",{title:"Package Deliverables",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You MUST first ",(0,r.kt)("a",{parentName:"p",href:"#setting-up-webhook"},"configure a webhook")," before you can create a package.")),(0,r.kt)("p",null,"The store is now set up, but it still needs to define packages that can be sold. To do that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Head to the ",(0,r.kt)("a",{parentName:"li",href:"https://creator.tebex.io/packages"},"Packages")," page (make sure you're viewing the right store)."),(0,r.kt)("li",{parentName:"ul"},"Create a package for every plan you wish to support, supplying it with all the details you want. Keep in mind that:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pricing")," - The package MUST be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"Recurring Payment = Charge a recurring subscription"),", to ensure that it is an actual subscription.")))),(0,r.kt)("h3",{id:"store-id-and-private-key"},"Store ID and Private Key"),(0,r.kt)("p",null,"In order to ",(0,r.kt)("a",{parentName:"p",href:"#link-store"},"link")," your store to the Overwolf API, you will need to know your store's public and private keys.\nThese can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://creator.tebex.io/developers/api-keys"},"API Keys")," page."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Private Key - A private key, used by the Overwolf Subscriptions API."),(0,r.kt)("li",{parentName:"ul"},"Public Token - Also called Store ID - A public key, used as your store's identifier with the Overwolf Subscriptions API.")),(0,r.kt)("h3",{id:"link-store"},"Link store"),(0,r.kt)("p",null,"To finish linking your Tebex Store with the Overwolf Subscriptions API, ",(0,r.kt)("a",{parentName:"p",href:"/support/contact-us"},"contact us"),". ",(0,r.kt)("strong",{parentName:"p"},"You will then be asked to provide the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  // Can be gotten [here](#store-id-and-private-key)\n  public_token: '',\n  // Can be gotten [here](#store-id-and-private-key)\n  private_key: '',\n  // Can be gotten [here](#setting-up-webhook)\n  webhook_token: '',\n  /**\n   * Your App's UID.\n   * - Overwolf Platform: Can be seen in the Overwolf Packages view window under your App's entry, under the `UID` field\n   * - Overwolf Electron: Can be gotten [as follows](https://overwolf.github.io/tools/ow-electron#fetching-your-app-id)\n   */\n  app_id: '',\n  /**\n   * Your desired deeplink scheme. This scheme will be used to notify you of the Checkout flow's progress.\n   * - Overwolf Platform: Can be set using [url_protocol](https://overwolf.github.io/api/manifest#url_protocol-object)\n   * - Overwolf Electron: See [Electron Deeplinks](https://www.electronjs.org/docs/latest/tutorial/launch-app-from-url-in-another-app)\n   */\n  deeplink_scheme: '',\n}\n")),(0,r.kt)(i,{type:"TODO",mdxType:"SkipMe"},(0,r.kt)("h3",{id:"implement-in-your-app"},"Implement in your App"),(0,r.kt)(p,{groupId:"frameworks",mdxType:"Tabs"},(0,r.kt)(s,{value:"overwolf-platform",label:"Overwolf Platform",mdxType:"TabItem"},(0,r.kt)("p",null,"Configure your manifest json to allow external connections to tebex")),(0,r.kt)(s,{value:"electron-platform",label:"Overwolf Electron",mdxType:"TabItem"})),(0,r.kt)("p",null,"Implement Deeplinks")))}u.isMDXComponent=!0;const c={id:"implementation",image:"/img/embed/getting-started.jpg",title:"Implementation",sidebar_position:50,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},m=void 0,d={unversionedId:"start/monetize-your-app/subscriptions/implementation",id:"start/monetize-your-app/subscriptions/implementation",title:"Implementation",description:"This page discusses the different available Subscriptions APIs and their specific implementation details.",source:"@site/pages/docs/start/monetize-your-app/subscriptions/implementation.mdx",sourceDirName:"start/monetize-your-app/subscriptions",slug:"/start/monetize-your-app/subscriptions/implementation",permalink:"/start/monetize-your-app/subscriptions/implementation",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/monetize-your-app/subscriptions/implementation.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1703443255,formattedLastUpdatedAt:"Dec 24, 2023",sidebarPosition:50,frontMatter:{id:"implementation",image:"/img/embed/getting-started.jpg",title:"Implementation",sidebar_position:50,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"start",previous:{title:"Guidelines",permalink:"/start/monetize-your-app/subscriptions/guidelines"},next:{title:"!! Experimental !!",permalink:"/start/monetize-your-app/experimental/"}},h={},k=[{value:"Getting Started",id:"getting-started",level:2},{value:"Implementation",id:"implementation",level:2}],b=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},f=b("SkipMe"),y=b("SubscriptionsComparisonTable"),g=b("Tabs"),v=b("TabItem"),w={toc:k};function T(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"About Subscriptions",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This page discusses the different available Subscriptions APIs and their specific implementation details."),(0,r.kt)(f,{type:"TODO",mdxType:"SkipMe"},(0,r.kt)("p",{parentName:"admonition"},"If you haven't already, do also check out ","[",(0,r.kt)("strong",{parentName:"p"},"Subscriptions Guidelines"),"][guidelines]",", for an overview\nof what working with Subscriptions entails on the App design level."))),(0,r.kt)("p",null,"The Overwolf Subscriptions APIs are several sets of endpoints, allowing App developers to easily integrate\nsubscriptions into their Apps, using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tebex.io/developers"},"Tebex Checkout"),".\nApps using this API can then access a simple subscriptions management system, without needing to worry\nabout processing payments and keeping track of subscription statuses, and without the need for any server-side logic."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To get started, it is important to choose the right API for you and your use-case"),(0,r.kt)(y,{mdxType:"SubscriptionsComparisonTable"}),(0,r.kt)(f,{type:"TODO",mdxType:"SkipMe"},' Add "I am a, I should use b" section '),(0,r.kt)(g,{groupId:"subscription",mdxType:"Tabs"},(0,r.kt)(v,{value:"overwolf",label:"Overwolf Subscriptions",mdxType:"TabItem"},(0,r.kt)(u,{mdxType:"OverwolfSetup"})),(0,r.kt)(v,{value:"headless",label:"Tebex Headless",mdxType:"TabItem"},(0,r.kt)("p",null,"The Tebex Headless API works by exposing several endpoints, allowing you to easily\ncreate baskets, manage the packages within them, and eventually produce a checkout link for the\nuser to pay in, directly within your App."),(0,r.kt)("p",null,"However, you will still need to run your own backend server to receive webhooks\non purchase updates, as well as manage the current subscription statuses for your different users."),(0,r.kt)("p",null,"For more information on implementing the Tebex Headless API, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tebex.io/developers/headless-api/overview"},"official documentation"))),(0,r.kt)(v,{value:"checkout",label:"Tebex Checkout",mdxType:"TabItem"},(0,r.kt)("p",null,"The Tebex Checkout API works by exposing the raw endpoints used for any payment processing,\ngiving you full control over the entire subscription flow, at the cost of requiring a dedicated\nbackend server to manage every single part of it, with which your App and or website will interact."),(0,r.kt)("p",null,"For more information on implementing the Tebex Checkout API, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tebex.io/developers/checkout-api/overview"},"official documentation")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"*"," Note that currently, the Tebex Checkout API is still considered in beta. To get started using it, please ",(0,r.kt)("a",{parentName:"em",href:"https://www.tebex.io/contact-customer?category=7"},"contact Tebex Support"))))),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)(f,{type:"TODO",mdxType:"SkipMe"},"Make the links below change to the relevant link per subs api."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Full API documentation for the Overwolf Subscriptions API is available ",(0,r.kt)("a",{parentName:"em",href:"/api/general/subscriptions-api"},"here"),".")),(0,r.kt)("p",null,"In order to actually implement subscriptions in your App, you need to implement the following three general flows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Checking the current status of all ",(0,r.kt)("a",{parentName:"li",href:"/api/general/subscriptions-api#subscriptions"},"active subscriptions"),", affecting the App properly."),(0,r.kt)("li",{parentName:"ul"},"Fetching a list of available ",(0,r.kt)("a",{parentName:"li",href:"/api/general/subscriptions-api#packages"},"subscription plans"),"."),(0,r.kt)("li",{parentName:"ul"},"Generating a Tebex ",(0,r.kt)("a",{parentName:"li",href:"/api/general/subscriptions-api#checkout"},"Checkout link")," to let a user pay for a plan they want.")),(0,r.kt)("p",null,"The exact implementation may vary drastically between Apps, in the same way that the plans themselves may differ. However,\nusually, it'll act in the following way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On App launch, check for the current subscription status, and initialize the different features accordingly."),(0,r.kt)("li",{parentName:"ul"},"In a specific section of the App, show users a listing of all available subscription plans."),(0,r.kt)("li",{parentName:"ul"},"If they choose to purchase a specific plan, open the relevant checkout link for them in their browser, where they can purchase it."),(0,r.kt)("li",{parentName:"ul"},"Periodically, and especially after a successful subscription purchase, re-check the current subscription status, and change the App's behavior accordingly.")))}T.isMDXComponent=!0}}]);