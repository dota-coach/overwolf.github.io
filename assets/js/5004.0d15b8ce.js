(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5004],{35318:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>f});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=i(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},27406:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=()=>null},74903:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(27378),o=n(38944),r=n(75484),l=n(99213);const c="admonition_uH4V",s="admonitionHeading_P5_N",i="admonitionIcon_MF44",d="admonitionContent_yySL";const m={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},u={secondary:"note",important:"info",success:"tip",warning:"danger"};function p(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function f(e){const{children:t,type:n,title:l,icon:f}=p(e),h=function(e){const t=u[e]??e,n=m[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),m.info)}(n),g=l??h.label,{iconComponent:v}=h,b=f??a.createElement(v,null);return a.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${h.infimaClassName}`,c)},a.createElement("div",{className:s},a.createElement("span",{className:i},b),g),a.createElement("div",{className:d},t))}},36538:(e,t,n)=>{"use strict";n.d(t,{Z:()=>W});var a=n(25773),o=n(27378),r=n(76457),l=n(38944),c=n(55421),s=n(20624);function i(){const{prism:e}=(0,s.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var d=n(75484),m=n(6324),u=n.n(m);const p=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function g(e,t){const n=e.map((e=>{const{start:n,end:a}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:o,metastring:r}=t;if(r&&f.test(r)){const e=r.match(f).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,a=u()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);default:return g(Object.keys(h),t)}}(a,o),c=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let u=0;u<c.length;){const e=c[u].match(l);if(!e){u+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${u},`:d[t]?s[d[t]].start=u:m[t]&&(s[m[t]].range+=`${s[m[t]].start}-${u-1},`),c.splice(u,1)}n=c.join("\n");const p={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;u()(n).forEach((e=>{p[e]??=[],p[e].push(t)}))})),{lineClassNames:p,code:n}}const b="codeBlockContainer_mQmQ";function E(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,o]=e;const r=t[a];r&&"string"==typeof o&&(n[r]=o)})),n}(i());return o.createElement(t,(0,a.Z)({},n,{style:r,className:(0,l.Z)(n.className,b,d.k.common.codeBlock)}))}const y={codeBlockContent:"codeBlockContent_D5yF",codeBlockTitle:"codeBlockTitle_x_ju",codeBlock:"codeBlock_RMoD",codeBlockStandalone:"codeBlockStandalone_wQog",codeBlockLines:"codeBlockLines_AclH",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_O625",buttonGroup:"buttonGroup_aaMX"};function k(e){let{children:t,className:n}=e;return o.createElement(E,{as:"pre",tabIndex:0,className:(0,l.Z)(y.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:y.codeBlockLines},t))}var N=n(41763);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,a]=(0,o.useState)(),r=(0,o.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,o.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=L);const a=(0,N.zX)(t),r=(0,N.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,r),()=>t.disconnect()}),[e,a,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const w={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var _={Prism:n(52349).Z,theme:w};function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}var B=/\r\n|\r|\n/,x=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},O=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},H=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=T({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=T({},n,{backgroundColor:null}),o};function j(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const A=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),Z(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?H(e.theme,e.language):void 0;return t.themeDict=n})),Z(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=T({},j(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?T({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),Z(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(c))}})),Z(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=T({},j(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?T({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),Z(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,c=[],s=[c];l>-1;){for(;(r=a[l]++)<o[l];){var i=void 0,d=t[l],m=n[l][r];if("string"==typeof m?(d=l>0?d:["plain"],i=m):(d=O(d,m.type),m.alias&&(d=O(d,m.alias)),i=m.content),"string"==typeof i){var u=i.split(B),p=u.length;c.push({types:d,content:u[0]});for(var f=1;f<p;f++)x(c),s.push(c=[]),c.push({types:d,content:u[f]})}else l++,t.push(d),n.push(i),a.push(0),o.push(i.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return x(c),s}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),I="codeLine_FAqz",M="codeLineNumber_BE9Z",S="codeLineContent_EF2y";function P(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:c,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=c({line:t,className:(0,l.Z)(n,r&&I)}),d=t.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},s({token:e,key:t})))));return o.createElement("span",i,r?o.createElement(o.Fragment,null,o.createElement("span",{className:M}),o.createElement("span",{className:S},d)):d,o.createElement("br",null))}var z=n(99213);const U={copyButtonCopied:"copyButtonCopied_TYdd",copyButtonIcons:"copyButtonIcons_z5j7",copyButtonIcon:"copyButtonIcon_FoOz",copyButtonSuccessIcon:"copyButtonSuccessIcon_L0B6"};function D(e){let{code:t,className:n}=e;const[a,r]=(0,o.useState)(!1),c=(0,o.useRef)(void 0),s=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),o&&o.focus()}(t),r(!0),c.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),o.createElement("button",{type:"button","aria-label":a?(0,z.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,z.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,U.copyButton,a&&U.copyButtonCopied),onClick:s},o.createElement("span",{className:U.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:U.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:U.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const R="wordWrapButtonIcon_HV9T",V="wordWrapButtonEnabled_XzR1";function $(e){let{className:t,onClick:n,isEnabled:a}=e;const r=(0,z.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,a&&V),"aria-label":r,title:r},o.createElement("svg",{className:R,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function F(e){let{children:t,className:n="",metastring:r,title:c,showLineNumbers:d,language:m}=e;const{prism:{defaultLanguage:u,magicComments:f}}=(0,s.L)(),h=m??n.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")??u;const g=i(),b=function(){const[e,t]=(0,o.useState)(!1),[n,a]=(0,o.useState)(!1),r=(0,o.useRef)(null),l=(0,o.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),c=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");a(n)}),[r]);return C(r,c),(0,o.useEffect)((()=>{c()}),[e,c]),(0,o.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:l}}(),k=function(e){return e?.match(p)?.groups.title??""}(r)||c,{lineClassNames:N,code:L}=v(t,{metastring:r,language:h,magicComments:f}),w=d??function(e){return Boolean(e?.includes("showLineNumbers"))}(r);return o.createElement(E,{as:"div",className:(0,l.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},k&&o.createElement("div",{className:y.codeBlockTitle},k),o.createElement("div",{className:y.codeBlockContent},o.createElement(A,(0,a.Z)({},_,{theme:g,code:L,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:r}=e;return o.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,l.Z)(t,y.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,l.Z)(y.codeBlockLines,w&&y.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(P,{key:t,line:e,getLineProps:a,getTokenProps:r,classNames:N[t],showLineNumbers:w})))))})),o.createElement("div",{className:y.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&o.createElement($,{className:y.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),o.createElement(D,{className:y.codeButton,code:L}))))}function W(e){let{children:t,...n}=e;const l=(0,r.Z)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?F:k;return o.createElement(s,(0,a.Z)({key:String(l)},n),c)}},89424:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var a=n(25773),o=n(27378),r=n(38944),l=n(76457),c=n(80376);const s="details_IpIu",i="isBrowser_QD4r",d="collapsibleContent_Fd2D";function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function u(e,t){return!!e&&(e===t||u(e.parentElement,t))}function p(e){let{summary:t,children:n,...p}=e;const f=(0,l.Z)(),h=(0,o.useRef)(null),{collapsed:g,setCollapsed:v}=(0,c.u)({initialState:!p.open}),[b,E]=(0,o.useState)(p.open);return o.createElement("details",(0,a.Z)({},p,{ref:h,open:b,"data-collapsed":g,className:(0,r.Z)(s,f&&i,p.className),onMouseDown:e=>{m(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;m(t)&&u(t,h.current)&&(e.preventDefault(),g?(v(!1),E(!0)):v(!0))}}),t??o.createElement("summary",null,"Details"),o.createElement(c.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{v(e),E(!e)}},o.createElement("div",{className:d},n)))}const f="details_jERq";function h(e){let{...t}=e;return o.createElement(p,(0,a.Z)({},t,{className:(0,r.Z)("alert alert--info",f,t.className)}))}},20586:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>He});var a=n(27378),o=n(1123),r=n(41763);const l=a.createContext(null);function c(e){let{children:t,content:n}=e;const o=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(l.Provider,{value:o},t)}function s(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=s();return a.createElement(o.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(38944),m=n(58357),u=n(25773),p=n(99213),f=n(81884);function h(e){const{permalink:t,title:n,subLabel:o,isNext:r}=e;return a.createElement(f.Z,{className:(0,d.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}function g(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(h,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(h,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function v(){const{metadata:e}=s();return a.createElement(g,{previous:e.previous,next:e.next})}var b=n(50353),E=n(62935),y=n(75484),k=n(24453),N=n(25611);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function C(e){const t=L[e.versionMetadata.banner];return a.createElement(t,e)}function w(e){let{versionLabel:t,to:n,onClick:o}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(f.Z,{to:n,onClick:o},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function _(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,b.Z)(),{pluginId:r}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,k.J)(r),{latestDocSuggestion:c,latestVersionSuggestion:s}=(0,E.Jo)(r),i=c??(m=s).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(C,{siteTitle:o,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(w,{versionLabel:s.label,to:i.path,onClick:()=>l(s.name)})))}function Z(e){let{className:t}=e;const n=(0,N.E)();return n.banner?a.createElement(_,{className:t,versionMetadata:n}):null}function T(e){let{className:t}=e;const n=(0,N.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,y.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function B(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function x(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function O(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:o}=e;return a.createElement("span",{className:y.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(B,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:o?a.createElement(x,{lastUpdatedBy:o}):""}},"Last updated{atDate}{byUser}"),!1)}const H="iconEdit_bHB7";function j(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(H,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function A(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:y.k.common.editThisPage},a.createElement(j,null),a.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const I="tag_otG2",M="tagRegular_s0E1",S="tagWithCount_PGyn";function P(e){let{permalink:t,label:n,count:o}=e;return a.createElement(f.Z,{href:t,className:(0,d.Z)(I,o?S:M)},n,o&&a.createElement("span",null,o))}const z="tags_Ow0B",U="tag_DFxh";function D(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.Z)(z,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:U},a.createElement(P,{label:t,permalink:n}))}))))}const R="lastUpdated_pbO5";function V(e){return a.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(D,e)))}function $(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(A,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",R)},(n||o)&&a.createElement(O,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:o})))}function F(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:r,tags:l}=e,c=l.length>0,i=!!(t||n||r);return c||i?a.createElement("footer",{className:(0,d.Z)(y.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(V,{tags:l}),i&&a.createElement($,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:o})):null}var W=n(80376),G=n(20624);function q(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function Q(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=Q({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function X(e){const t=e.getBoundingClientRect();return t.top===t.bottom?X(e.parentNode):t}function J(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>X(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(X(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function Y(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,G.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function K(e){const t=(0,a.useRef)(void 0),n=Y();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),s=J(c,{anchorTopOffset:n.current}),i=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===i)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function ee(e){let{toc:t,className:n,linkClassName:o,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(ee,{isChild:!0,toc:e.children,className:n,linkClassName:o}))))):null}const te=a.memo(ee);function ne(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:c,...s}=e;const i=(0,G.L)(),d=l??i.tableOfContents.minHeadingLevel,m=c??i.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,a.useMemo)((()=>Q({toc:q(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:d,maxHeadingLevel:m});return K((0,a.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:d,maxHeadingLevel:m}}),[o,r,d,m])),a.createElement(te,(0,u.Z)({toc:p,className:n,linkClassName:o},s))}const ae="tocCollapsibleButton_iI2p",oe="tocCollapsibleButtonExpanded_cHjC";function re(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",ae,!t&&oe,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const le="tocCollapsible_wXna",ce="tocCollapsibleContent_vea0",se="tocCollapsibleExpanded_BbRn";function ie(e){let{toc:t,className:n,minHeadingLevel:o,maxHeadingLevel:r}=e;const{collapsed:l,toggleCollapsed:c}=(0,W.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(le,!l&&se,n)},a.createElement(re,{collapsed:l,onClick:c}),a.createElement(W.z,{lazy:!0,className:ce,collapsed:l},a.createElement(ne,{toc:t,minHeadingLevel:o,maxHeadingLevel:r})))}const de="tocMobile_Ojys";function me(){const{toc:e,frontMatter:t}=s();return a.createElement(ie,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(y.k.docs.docTocMobile,de)})}const ue="tableOfContents_XG6w";function pe(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,d.Z)(ue,"thin-scrollbar",t)},a.createElement(ne,(0,u.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function fe(){const{toc:e,frontMatter:t}=s();return a.createElement(pe,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:y.k.docs.docTocDesktop})}var he=n(1999),ge=n(35318),ve=n(50526);function be(e){let{children:t}=e;return a.createElement(ge.Zo,{components:ve.Z},t)}function Ee(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(y.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(he.Z,{as:"h1"},n)),a.createElement(be,null,t))}var ye=n(45161),ke=n(8862),Ne=n(98948);function Le(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const Ce={breadcrumbsContainer:"breadcrumbsContainer_T5ub",breadcrumbHomeIcon:"breadcrumbHomeIcon_GlTw"};function we(e){let{children:t,href:n,isLast:o}=e;const r="breadcrumbs__link";return o?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(f.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function _e(e){let{children:t,active:n,index:o,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(o+1)}))}function Ze(){const e=(0,Ne.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(f.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",Ce.breadcrumbsItemLink),href:e},a.createElement(Le,{className:Ce.breadcrumbHomeIcon})))}function Te(){const e=(0,ye.s1)(),t=(0,ke.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(y.k.docs.docBreadcrumbs,Ce.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Ze,null),e.map(((t,n)=>{const o=n===e.length-1;return a.createElement(_e,{key:n,active:o,index:n,addMicrodata:!!t.href},a.createElement(we,{href:t.href,isLast:o},t.label))})))):null}const Be="docItemContainer_tjFy",xe="docItemCol_Qr34";function Oe(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,m.i)(),o=e.hide_table_of_contents,r=!o&&t.length>0;return{hidden:o,mobile:r?a.createElement(me,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(fe,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&xe)},a.createElement(Z,null),a.createElement("div",{className:Be},a.createElement("article",null,a.createElement(Te,null),a.createElement(T,null),n.mobile,a.createElement(Ee,null,t),a.createElement(F,null)),a.createElement(v,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function He(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(o.FG,{className:t},a.createElement(i,null),a.createElement(Oe,null,a.createElement(n,null))))}},1999:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(25773),o=n(27378),r=n(38944),l=n(99213),c=n(20624);const s="anchorWithStickyNavbar_JmGV",i="anchorWithHideOnScrollNavbar_pMLv";function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,c.L)();return"h1"!==t&&n?o.createElement(t,(0,a.Z)({},d,{className:(0,r.Z)("anchor",m?i:s),id:n}),d.children,o.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,a.Z)({},d,{id:void 0}))}},97813:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(25773),o=n(27378),r=n(38944);const l="img_SS3x";function c(e){return o.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,l))}));var t}},15847:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(25773),o=n(27378),r=n(38944);const l="containsTaskList_QWGu";function c(e){return o.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,r.Z)(t,t?.includes("contains-task-list")&&l))}));var t}},39798:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(27378),o=n(38944);const r="tabItem_wHwb";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},6324:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},29738:(e,t,n)=>{"use strict";n.d(t,{$0:()=>o,OR:()=>r,LI:()=>l});var a=n(27378);function o(e){const t=(0,a.useRef)((()=>{throw new Error("Cannot call an event handler while rendering.")}));return l((()=>{t.current=e}),[e]),(0,a.useCallback)(((...e)=>t.current(...e)),[t])}const r=function(e,t,n,o){const r=(0,a.useRef)(t);l((()=>{r.current=t}),[t]),(0,a.useEffect)((()=>{var t;const a=null!==(t=null==n?void 0:n.current)&&void 0!==t?t:window;if(!a||!a.addEventListener)return;const l=e=>r.current(e);return a.addEventListener(e,l,o),()=>{a.removeEventListener(e,l,o)}}),[e,n,o])};const l="undefined"!=typeof window?a.useLayoutEffect:a.useEffect}}]);