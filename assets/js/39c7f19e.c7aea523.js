"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7195],{3905:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return m},MDXProvider:function(){return p},mdx:function(){return x},useMDXComponents:function(){return s},withMDXComponents:function(){return u}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=r.createContext({}),u=function(e){return function(a){var t=s(a.components);return r.createElement(e,l({},a,{components:t}))}},s=function(e){var a=r.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return r.createElement(m.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),p=n,h=u["".concat(d,".").concat(p)]||u[p]||c[p]||l;return t?r.createElement(h,o(o({ref:a},m),{},{components:t})):r.createElement(h,o({ref:a},m))}));function x(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,d=new Array(l);d[0]=h;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,d[1]=o;for(var m=2;m<l;m++)d[m]=t[m];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7754:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return s}});var r=t(87462),n=t(63366),l=(t(67294),t(3905)),d=["components"],o={id:"youtube",title:"overwolf.social.youtube API",sidebar_label:"overwolf.social.youtube"},i=void 0,m={unversionedId:"api/social/youtube",id:"api/social/youtube",title:"overwolf.social.youtube API",description:"Provides access to the YouTube social provider.",source:"@site/pages/docs/api/social/youtube.mdx",sourceDirName:"api/social",slug:"/api/social/youtube",permalink:"/api/social/youtube",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/social/youtube.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657711065,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"youtube",title:"overwolf.social.youtube API",sidebar_label:"overwolf.social.youtube"},sidebar:"api",previous:{title:"overwolf.social.twitter",permalink:"/api/social/twitter"},next:{title:"overwolf.streaming",permalink:"/api/streaming/"}},u={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"performUserLogin()",id:"performuserlogin",level:2},{value:"Version added: 0.128",id:"version-added-0128",level:4},{value:"performLogout(callback)",id:"performlogoutcallback",level:2},{value:"Version added: 0.125",id:"version-added-0125",level:4},{value:"getUserInfo(callback)",id:"getuserinfocallback",level:2},{value:"Version added: 0.125",id:"version-added-0125-1",level:4},{value:"share(YouTubeShareParameters, callback)",id:"shareyoutubeshareparameters-callback",level:2},{value:"Version added: 0.125",id:"version-added-0125-2",level:4},{value:"shareEx(YouTubeShareParameters, callback, callback)",id:"shareexyoutubeshareparameters-callback-callback",level:2},{value:"Version added: 0.198",id:"version-added-0198",level:4},{value:"cancelShare(string, callback)",id:"cancelsharestring-callback",level:2},{value:"Version added: 0.198",id:"version-added-0198-1",level:4},{value:"onLoginStateChanged",id:"onloginstatechanged",level:2},{value:"Version added: 0.125",id:"version-added-0125-3",level:4},{value:"YouTubeShareParameters Object",id:"youtubeshareparameters-object",level:2},{value:"Version added: 0.125",id:"version-added-0125-4",level:4},{value:"id note",id:"id-note",level:4},{value:"useOverwolfNotifications note",id:"useoverwolfnotifications-note",level:4},{value:"SocialShareResult Object",id:"socialshareresult-object",level:2},{value:"Version added: 0.198",id:"version-added-0198-2",level:4},{value:"Example data",id:"example-data",level:4},{value:"SocialShareProgress Object",id:"socialshareprogress-object",level:2},{value:"Version added: 0.198",id:"version-added-0198-3",level:4},{value:"Example data",id:"example-data-1",level:4},{value:"ShareState Enum",id:"sharestate-enum",level:2},{value:"Version added: 0.198",id:"version-added-0198-4",level:4},{value:"YouTubePrivacy Enum",id:"youtubeprivacy-enum",level:2},{value:"version added: 0.198",id:"version-added-0198-5",level:4}],p={toc:s};function c(e){var a=e.components,t=(0,n.Z)(e,d);return(0,l.mdx)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Provides access to the YouTube social provider."),(0,l.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"You can use ",(0,l.mdx)("a",{parentName:"p",href:".#getdisabledservicescallback"},(0,l.mdx)("inlineCode",{parentName:"a"},"verwolf.social.getDisabledServices()"))," method to check if the service is available."))),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#performuserlogin"},"overwolf.social.youtube.performUserLogin()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#performlogoutcallback"},"overwolf.social.youtube.performLogout()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getuserinfocallback"},"overwolf.social.youtube.getUserInfo()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#shareyoutubeshareparameters-callback"},"overwolf.social.youtube.share()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#shareexyoutubeshareparameters-callback-callback"},"overwolf.social.youtube.shareEx()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#cancelsharestring-callback"},"overwolf.social.youtube.cancelShare()"))),(0,l.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onloginstatechanged"},"ooverwolf.social.youtube.onLoginStateChanged"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#youtubeshareparameters-object"},"overwolf.social.youtube.YouTubeShareParameters")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#socialshareresult-object"},"overwolf.social.youtube.SocialShareResult")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#socialshareprogress-object"},"overwolf.social.youtube.SocialShareProgress")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#sharestate-enum"},"overwolf.social.youtube.enums.ShareState")," Enum"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#youtubeprivacy-enum"},"overwolf.social.youtube.YouTubePrivacy")," Enum")),(0,l.mdx)("h2",{id:"performuserlogin"},"performUserLogin()"),(0,l.mdx)("h4",{id:"version-added-0128"},"Version added: 0.128"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Opens the login dialog.")),(0,l.mdx)("p",null,"There is no callback for this method and the only way to know if the user signed in is via ",(0,l.mdx)("a",{parentName:"p",href:"#onloginstatechanged"},"onLoginStateChanged")," event."),(0,l.mdx)("h2",{id:"performlogoutcallback"},"performLogout(callback)"),(0,l.mdx)("h4",{id:"version-added-0125"},"Version added: 0.125"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},'Performs a "strong" sign out of YouTube, so that even if the user performs a login via the Overwolf Settings / Accounts page, he will be considered signed out.')),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.mdx)("h2",{id:"getuserinfocallback"},"getUserInfo(callback)"),(0,l.mdx)("h4",{id:"version-added-0125-1"},"Version added: 0.125"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"If the user is currently logged into YouTube, this will return user information, Otherwise, an error is returned.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:".#getuserinforesult-object"},"(Result: GetUserInfoResult)")," => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.mdx)("h2",{id:"shareyoutubeshareparameters-callback"},"share(YouTubeShareParameters, callback)"),(0,l.mdx)("h4",{id:"version-added-0125-2"},"Version added: 0.125"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"If the user is currently logged into YouTube, this will perform the video share.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"youTubeShareParams"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#youtubeshareparameters-object"},"YouTubeShareParameters")," Object"),(0,l.mdx)("td",{parentName:"tr",align:null},"The share parameters")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,l.mdx)("p",null,"Types of errors that can occur:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Disconnected (user isn't signed in)"),(0,l.mdx)("li",{parentName:"ul"},"MissingFile (trying to share a missing file)"),(0,l.mdx)("li",{parentName:"ul"},"UnsupportedFile (trying to share an unsupported format)"),(0,l.mdx)("li",{parentName:"ul"},"Forbidden (user did not give overwolf permissions to upload videos)")),(0,l.mdx)("h2",{id:"shareexyoutubeshareparameters-callback-callback"},"shareEx(YouTubeShareParameters, callback, callback)"),(0,l.mdx)("h4",{id:"version-added-0198"},"Version added: 0.198"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"If the user is currently logged into Youtube, this will perform the video share.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"youtubeShareParams"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#youtubeshareparameters-object"},"YoutubeShareParameters")," Object"),(0,l.mdx)("td",{parentName:"tr",align:null},"The share parameters")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"resultCallback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#socialshareresult-object"},"SocialShareResult"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the resulting status of the request")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"progressCallback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#socialshareprogress-object"},"socialShareProgress"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called whenever share progress is made")))),(0,l.mdx)("p",null,"Types of errors that can occur:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Disconnected (user isn't signed in)"),(0,l.mdx)("li",{parentName:"ul"},"MissingFile (trying to share a missing file)"),(0,l.mdx)("li",{parentName:"ul"},"UnsupportedFile (trying to share an unsupported format)"),(0,l.mdx)("li",{parentName:"ul"},"Forbidden (user did not give overwolf permissions to upload videos)")),(0,l.mdx)("h2",{id:"cancelsharestring-callback"},"cancelShare(string, callback)"),(0,l.mdx)("h4",{id:"version-added-0198-1"},"Version added: 0.198"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"cancels an ongoing share request with the given id, if valid. Callback will be invoked with success if such a request was found and a cancellation order was executed (may take a while)")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The request ID")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Called with the result of the cancellation")))),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'overwolf.social.youtube.cancelShare("2", console.log)\n')),(0,l.mdx)("h2",{id:"onloginstatechanged"},"onLoginStateChanged"),(0,l.mdx)("h4",{id:"version-added-0125-3"},"Version added: 0.125"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when the user\u2019s login state changes, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:".#loginstatechangedevent-object"},"LoginStateChangedEvent")," Object.")),(0,l.mdx)("h2",{id:"youtubeshareparameters-object"},"YouTubeShareParameters Object"),(0,l.mdx)("h4",{id:"version-added-0125-4"},"Version added: 0.125"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"This object defines all parameters that can/should be passed to the Youtube ",(0,l.mdx)("a",{parentName:"p",href:"#shareyoutubeshareparameters-callback"},(0,l.mdx)("inlineCode",{parentName:"a"},"Share()"))," and ",(0,l.mdx)("a",{parentName:"p",href:"#shareexyoutubeshareparameters-callback-callback"},(0,l.mdx)("inlineCode",{parentName:"a"},"shareEx()"))," methods.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"file"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The file to share")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id (Optional)"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The ID for the current share request. See ",(0,l.mdx)("a",{parentName:"td",href:"#id-note"},"note"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"useOverwolfNotifications"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether or not overwolf notifications should be used. See ",(0,l.mdx)("a",{parentName:"td",href:"#useoverwolfnotifications-note"},"note"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"title"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The shared video's title")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"description"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The shared video's description")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"trimming (Optional)"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"../media/videos#videocompositionsegment-object"},"VideoCompositionSegment")),(0,l.mdx)("td",{parentName:"tr",align:null},"An object containing start time and end time for the desired VideoCompositionSegment")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"privacy"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#youtubeprivacy-enum"},"YouTubePrivacy")),(0,l.mdx)("td",{parentName:"tr",align:null},"The privacy policy of the uploaded video, defaults to public")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"tags (Optional)"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"An array of chronological events that occurred during the capture")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"gameClassId (Optional)"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null},"The associated game's class ID")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"gameTitle (Optional)"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The associated game's title")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"metadata (Optional)"),(0,l.mdx)("td",{parentName:"tr",align:null},"Object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Extra information about the game session")))),(0,l.mdx)("h4",{id:"id-note"},"id note"),(0,l.mdx)("p",null,"When calling ",(0,l.mdx)("a",{parentName:"p",href:"#shareexyoutubeshareparameters-callback-callback"},(0,l.mdx)("inlineCode",{parentName:"a"},"overwolf.social.youtube.shareEx()")),", it is required to supply it with a request ID. This ID will also be used in case you wish to cancel this share using ",(0,l.mdx)("a",{parentName:"p",href:"#cancelsharestring-callback"},(0,l.mdx)("inlineCode",{parentName:"a"},"overwolf.social.youtube.cancelShare()")),"."),(0,l.mdx)("h4",{id:"useoverwolfnotifications-note"},"useOverwolfNotifications note"),(0,l.mdx)("p",null,"When calling ",(0,l.mdx)("a",{parentName:"p",href:"#shareyoutubeshareparameters-callback"},(0,l.mdx)("inlineCode",{parentName:"a"},"overwolf.social.youtube.share()")),", this will default to true.\nWhen calling ",(0,l.mdx)("a",{parentName:"p",href:"#shareexyoutubeshareparameters-callback-callback"},(0,l.mdx)("inlineCode",{parentName:"a"},"overwolf.social.youtube.shareEx()")),", this will default to false."),(0,l.mdx)("h2",{id:"socialshareresult-object"},"SocialShareResult Object"),(0,l.mdx)("h4",{id:"version-added-0198-2"},"Version added: 0.198"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Container for the url shared in a successful share.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"url"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The url of the generated result")))),(0,l.mdx)("h4",{id:"example-data"},"Example data"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://www.youtube.com/watch?v=iik25wq1251"\n}\n')),(0,l.mdx)("h2",{id:"socialshareprogress-object"},"SocialShareProgress Object"),(0,l.mdx)("h4",{id:"version-added-0198-3"},"Version added: 0.198"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"The current progress of the share request")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"progress"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null},"The current precentage of upload progress")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The id of the share request")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"state"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#sharestate-enum"},"ShareState")),(0,l.mdx)("td",{parentName:"tr",align:null},"The current state of the share request")))),(0,l.mdx)("h4",{id:"example-data-1"},"Example data"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "progress": 99,\n  "id": "7",\n  "state": "Uploading"\n}\n')),(0,l.mdx)("h2",{id:"sharestate-enum"},"ShareState Enum"),(0,l.mdx)("h4",{id:"version-added-0198-4"},"Version added: 0.198"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"The current state of the ",(0,l.mdx)("a",{parentName:"p",href:"#shareexyoutubeshareparameters-callback-callback"},(0,l.mdx)("inlineCode",{parentName:"a"},"overwolf.social.youtube.shareEx()"))," operation.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Options"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Started"),(0,l.mdx)("td",{parentName:"tr",align:null},"The upload has started")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Uploading"),(0,l.mdx)("td",{parentName:"tr",align:null},"The upload is in progress")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Finished"),(0,l.mdx)("td",{parentName:"tr",align:null},"The upload has finished")))),(0,l.mdx)("h2",{id:"youtubeprivacy-enum"},"YouTubePrivacy Enum"),(0,l.mdx)("h4",{id:"version-added-0198-5"},"version added: 0.198"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"The listing status of the uplaoded video.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Option"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Public"),(0,l.mdx)("td",{parentName:"tr",align:null},"The video will be public")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Unlisted"),(0,l.mdx)("td",{parentName:"tr",align:null},"The video will be unlisted")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Private"),(0,l.mdx)("td",{parentName:"tr",align:null},"The video will be private")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},"string")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"state"),(0,l.mdx)("td",{parentName:"tr",align:null},"string")))))}c.isMDXComponent=!0}}]);