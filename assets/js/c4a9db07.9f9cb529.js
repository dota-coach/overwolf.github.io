"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9707],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return u},mdx:function(){return v},useMDXComponents:function(){return d},withMDXComponents:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){return function(t){var n=d(t.components);return r.createElement(e,a({},t,{components:n}))}},d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,f=m["".concat(i,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"overwolf-io-paths",title:"overwolf.io.paths API",sidebar_label:"overwolf.io.paths"},p=void 0,s={unversionedId:"api/overwolf-io-paths",id:"api/overwolf-io-paths",title:"overwolf.io.paths API",description:"Use this API to obtain system folder paths.",source:"@site/pages/docs/api/overwolf-io-paths.mdx",sourceDirName:"api",slug:"/api/overwolf-io-paths",permalink:"/docs/api/overwolf-io-paths",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/overwolf-io-paths.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"overwolf-io-paths",title:"overwolf.io.paths API",sidebar_label:"overwolf.io.paths"},sidebar:"api",previous:{title:"overwolf.io",permalink:"/docs/api/overwolf-io"},next:{title:"overwolf.logitech",permalink:"/docs/api/overwolf-logitech"}},m={},d=[{value:"Supported paths",id:"supported-paths",level:2},{value:"Usage Example",id:"usage-example",level:2}],u={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Use this API to obtain system folder paths."),(0,a.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"}," For more I/O functionalities, please use our ",(0,a.mdx)("a",{parentName:"p",href:"../topics/simple-io-plugin"},"simple I/O plugin"),"."))),(0,a.mdx)("p",null,"You can call the object properties to get the requested path:"),(0,a.mdx)("h2",{id:"supported-paths"},"Supported paths"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"programFiles"),(0,a.mdx)("li",{parentName:"ul"},"programFilesX86"),(0,a.mdx)("li",{parentName:"ul"},"commonFiles"),(0,a.mdx)("li",{parentName:"ul"},"commonFilesX86"),(0,a.mdx)("li",{parentName:"ul"},"commonAppData"),(0,a.mdx)("li",{parentName:"ul"},"desktop"),(0,a.mdx)("li",{parentName:"ul"},"windows"),(0,a.mdx)("li",{parentName:"ul"},"system"),(0,a.mdx)("li",{parentName:"ul"},"systemX86"),(0,a.mdx)("li",{parentName:"ul"},"documents"),(0,a.mdx)("li",{parentName:"ul"},"videos"),(0,a.mdx)("li",{parentName:"ul"},"pictures"),(0,a.mdx)("li",{parentName:"ul"},"music"),(0,a.mdx)("li",{parentName:"ul"},"commonDocuments"),(0,a.mdx)("li",{parentName:"ul"},"favorites"),(0,a.mdx)("li",{parentName:"ul"},"fonts"),(0,a.mdx)("li",{parentName:"ul"},"startMenu"),(0,a.mdx)("li",{parentName:"ul"},"localAppData"),(0,a.mdx)("li",{parentName:"ul"},"overwolf install dir - ",(0,a.mdx)("strong",{parentName:"li"},"Version added: 0.169")),(0,a.mdx)("li",{parentName:"ul"},"overwolf install dir with version number - ",(0,a.mdx)("strong",{parentName:"li"},"Version added: 0.169")),(0,a.mdx)("li",{parentName:"ul"},"OBS dir - ",(0,a.mdx)("strong",{parentName:"li"},"Version added: 0.169"))),(0,a.mdx)("h2",{id:"usage-example"},"Usage Example"),(0,a.mdx)("p",null,"To get the system path:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'console.log(overwolf.io.paths.system)\n//prints "C:\\WINDOWS\\system32"\n')),(0,a.mdx)("p",null,"To get the full path of the current extension (OW app), you can call ",(0,a.mdx)("inlineCode",{parentName:"p"},"overwolf.io.paths.localAppData")," and concatenate your extension id and your app version to it:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'overwolf.io.paths.localAppData + "/overwolf/extensions/[your extension id]/[version]"\n')),(0,a.mdx)("p",null,"Where version can be ",(0,a.mdx)("a",{parentName:"p",href:"overwolf-extensions-current#getmanifestcallback"},"retrieved from the app manifest"),"."),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"note that this will not work if the extension is loaded as unpacked while developing.")))}c.isMDXComponent=!0}}]);