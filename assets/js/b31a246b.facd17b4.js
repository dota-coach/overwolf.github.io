"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[595],{35318:(e,t,o)=>{o.r(t),o.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>m});var r=o(27378);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n.apply(this,arguments)}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),m=function(e){return function(t){var o=u(t.components);return r.createElement(e,n({},t,{components:o}))}},u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(o),d=a,c=m["".concat(p,".").concat(d)]||m[d]||f[d]||n;return o?r.createElement(c,i(i({ref:t},l),{},{components:o})):r.createElement(c,i({ref:t},l))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,p=new Array(n);p[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<n;l++)p[l]=o[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},41445:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=o(25773),a=o(27378),n=o(35318);const p=e=>{const{loginUrl:t,createAccountUrl:o}=e;return a.createElement("section",{className:"submit-account-buttons"},a.createElement("a",{href:o,className:"btn-primary has-icon",target:"_blank"},"Create account to submit",a.createElement("svg",null,a.createElement("use",{href:"../../img/sprite.svg#external-url"}))),a.createElement("p",null,"Already have an account? ",a.createElement("a",{className:"external-icon",href:t,target:"_blank"},"Log in",a.createElement("svg",null,a.createElement("use",{href:"../../img/sprite.svg#external-url"})))," ","and submit your proposal now!"))},i={id:"submit-app-proposal",image:"/img/embed/getting-started.jpg",title:"Submitting an App Proposal",sidebar_label:"Submit App Proposal",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},s=void 0,l={unversionedId:"start/getting-started/submit-app-proposal",id:"start/getting-started/submit-app-proposal",title:"Submitting an App Proposal",description:"Overwolf Electron applications currently do not need to go through the app proposal process.",source:"@site/pages/docs/start/getting-started/submit-app-proposal.mdx",sourceDirName:"start/getting-started",slug:"/start/getting-started/submit-app-proposal",permalink:"/start/getting-started/submit-app-proposal",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/getting-started/submit-app-proposal.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1674725505,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{id:"submit-app-proposal",image:"/img/embed/getting-started.jpg",title:"Submitting an App Proposal",sidebar_label:"Submit App Proposal",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"start",previous:{title:"SDK Introduction",permalink:"/start/getting-started/sdk-introduction"},next:{title:"Using The Dev Tools",permalink:"/start/getting-started/using-dev-tools"}},m={},u=[{value:"Before you start",id:"before-you-start",level:3},{value:"Prepare your proposal",id:"prepare-your-proposal",level:3},{value:"Submit Your Proposal",id:"submit-your-proposal",level:3},{value:"What happens next?",id:"what-happens-next",level:2}],d=(c="SkipMe",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.mdx)("div",e)});var c;const f={toc:u};function h(e){let{components:t,...o}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("admonition",{title:"ow-electron",type:"tip"},(0,n.mdx)("p",{parentName:"admonition"},(0,n.mdx)("a",{parentName:"p",href:"/tools/ow-electron"},"Overwolf Electron")," applications currently do not need to go through the app proposal process.\nHowever, if you still wish to get feedback on your idea, feel free to ",(0,n.mdx)("a",{parentName:"p",href:"/support/contact-us"},"contact us"),"!")),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"So, you have a great idea for an Overwolf application. What's next?")),(0,n.mdx)("p",null,"We find that apps turn out much better the more feedback and experience are involved, and we are always glad to share ours with aspiring developers.",(0,n.mdx)("br",{parentName:"p"}),"\n","This also helps with ensuring that your idea is ",(0,n.mdx)("a",{parentName:"p",href:"/start/getting-started/game-compliance"},"compliant")," with the relevant game(s), before you even write a single line of code!"),(0,n.mdx)("p",null,"And so, before you begin, we want to see what you've thought up. It can be anything from a simple summary,\nto the general idea, to a list of planned features, UI demonstrations, or even some live, working mockups."),(0,n.mdx)("p",null,"The goal here is to understand what your app is about before you invest too much time and effort into development -\na simple one day change during planning could take several months later down the road."),(0,n.mdx)("admonition",{type:"note"},(0,n.mdx)("p",{parentName:"admonition"},"You don't need to have a registered business to - work on, apply for funding for, and even earn money from - an Overwolf app.\nThe Overwolf platform welcomes creators of all types and sizes, from solo developers to small casual teams to entire companies.")),(0,n.mdx)("h3",{id:"before-you-start"},"Before you start"),(0,n.mdx)("p",null,"If you want to take a deeper look at the Overwolf platform - no worries, we've got you covered."),(0,n.mdx)("p",null,"To get started, feel free to check out the ",(0,n.mdx)("a",{parentName:"p",href:"/start/basic-app/front-app"},"Overwolf Front App"),", so you can get a better idea of the platform's capabilities/common app patterns."),(0,n.mdx)("p",null,"Still have more questions? Feel free to ",(0,n.mdx)("a",{parentName:"p",href:"/support/contact-us"},"reach out"),", or join ",(0,n.mdx)("a",{parentName:"p",href:"https://discord.gg/overwolf-developers"},"the developers discord")," where you can get help from experts in the community."),(0,n.mdx)("h3",{id:"prepare-your-proposal"},"Prepare your proposal"),(0,n.mdx)("admonition",{title:"Want to refine your proposal even further?",type:"tip"},(0,n.mdx)("p",{parentName:"admonition"},(0,n.mdx)("a",{parentName:"p",href:"https://www.overwolf.com/appstore"},"Take a look at what\u2019s already out there")," - especially apps with similar features/ideas.\nThink of what your app can do better, or what it can offer that other apps don\u2019t, and capitalize on that.")),(0,n.mdx)("p",null,"Submitting your app concept for review is easy - since we\u2019re not looking for a complete set of technical documents just yet.\nInstead, the goal at this stage is to create a clear, concise description of what the app is and how it will work for gamers.",(0,n.mdx)("br",{parentName:"p"}),"\n","It also helps if you can already show a basic specification of which apis you plan to utilize for different features,\nand if you even have any mockups of your planned User Interface."),(0,n.mdx)("p",null,"This proposal (and the app itself) must be made in English, although you may freely support as many other languages as youw ant in the final app."),(0,n.mdx)("h3",{id:"submit-your-proposal"},"Submit Your Proposal"),(0,n.mdx)("admonition",{title:"Legal",type:"info"},(0,n.mdx)("p",{parentName:"admonition"},"To register your app proposal with Overwolf's Developer Relations team, you must ",(0,n.mdx)("a",{parentName:"p",href:"https://www.overwolf.com/app-proposal-submission-form/login-form#login"},"log in")," with an Overwolf account*.")),(0,n.mdx)("p",null,"Once you've registered your idea, you will be able to communicate with our team for help, reviews, release approvals, and more."),(0,n.mdx)(d,{mdxType:"SkipMe"},(0,n.mdx)("iframe",{src:"/html/submission-form/form.html",width:"100%",height:"820px",style:{marginButtom:"30px"}})),(0,n.mdx)(p,{loginUrl:"https://www.overwolf.com/app-proposal-submission-form/login-form#login",createAccountUrl:"https://www.overwolf.com/app-proposal-submission-form/login-form",mdxType:"SubmitAccountButtons"}),(0,n.mdx)("p",null,(0,n.mdx)("em",{parentName:"p"},"*","You do not need to be part of (or acting on behalf of) a registered business or company to work on (and make money from) Overwolf apps - Overwolf is open to independent developers and companies alike.")),(0,n.mdx)("h2",{id:"what-happens-next"},"What happens next?"),(0,n.mdx)("p",null,"We will review your proposal internally and reach back within 4 business days to provide feedback -\nincluding whether Overwolf approves or rejects your idea in its current form for the Overwolf platform."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("h4",{parentName:"li",id:"your-app-was-approved"},"Your app was approved:"),(0,n.mdx)("p",{parentName:"li"},"Great job! We think you'll be a great fit for the Overwolf ecosystem, and now the real fun begins! You are ready to start ",(0,n.mdx)("a",{parentName:"p",href:"/start/getting-started/app-creation-process#build"},"Building")," your app!")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("h4",{parentName:"li",id:"your-app-was-rejected"},"Your app was rejected:"),(0,n.mdx)("p",{parentName:"li"},"  As it is, the app concept you have submitted won't fit our Appstore, because of the reasons detailed in the rejection. If you are fine with it,\nand it is plausible, we encourage you to try and incorporate this feedback into the idea, so you can submit it again for further review."),(0,n.mdx)("p",{parentName:"li"},"  However, you may also decide that this feedback strays too far from your original idea. In those cases, while we wish you luck with it, we are unable\nto proceed with you on ",(0,n.mdx)("em",{parentName:"p"},"this specific")," app."),(0,n.mdx)("p",{parentName:"li"},"  Regardless of that, our door is always open for any other app ideas you may have, and we look forward to your future endeavors!"))))}h.isMDXComponent=!0}}]);