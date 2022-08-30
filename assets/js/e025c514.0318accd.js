"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[9975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,s={unversionedId:"Standard Library/OS Functions",id:"Standard Library/OS Functions",title:"OS Functions",description:"New functions for the os library, implemented by Pluto.",source:"@site/docs/Standard Library/OS Functions.md",sourceDirName:"Standard Library",slug:"/Standard Library/OS Functions",permalink:"/docs/Standard Library/OS Functions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IO Functions",permalink:"/docs/Standard Library/IO Functions"},next:{title:"String Functions",permalink:"/docs/Standard Library/String Functions"}},l={},c=[{value:"os.sleep",id:"ossleep",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Example",id:"example",level:4},{value:"os.millis",id:"osmillis",level:3},{value:"os.nanos",id:"osnanos",level:3},{value:"os.seconds",id:"osseconds",level:3},{value:"os.unixseconds",id:"osunixseconds",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"New functions for the ",(0,o.kt)("inlineCode",{parentName:"p"},"os")," library, implemented by Pluto."),(0,o.kt)("h3",{id:"ossleep"},"os.sleep"),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The amount of milliseconds to sleep for.")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Basic Usage"',showLineNumbers:!0,title:'"Basic','Usage"':!0},"os.sleep(1000) --\x3e Pause this thread for 1000ms.\n")),(0,o.kt)("h3",{id:"osmillis"},"os.millis"),(0,o.kt)("p",null,"Returns milliseconds since epoch."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The return of this function is implementation-specific.")),(0,o.kt)("h3",{id:"osnanos"},"os.nanos"),(0,o.kt)("p",null,"Returns nanoseconds since epoch."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The return of this function is implementation-specific.")),(0,o.kt)("h3",{id:"osseconds"},"os.seconds"),(0,o.kt)("p",null,"Returns seconds since epoch."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The return of this function is implementation-specific.")),(0,o.kt)("h3",{id:"osunixseconds"},"os.unixseconds"),(0,o.kt)("p",null,"Returns seconds since UNIX epoch."))}u.isMDXComponent=!0}}]);