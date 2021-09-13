"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[823],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7919:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:2},u="Designate token",c={unversionedId:"tutorial-module-exit/designate-token",id:"tutorial-module-exit/designate-token",isDocsHomePage:!1,title:"Designate token",description:"Next you should click on the Exit Module available through the Zodiac App on Gnosis Safe. When you open the Exit Module, it will look like this:",source:"@site/docs/tutorial-module-exit/designate-token.md",sourceDirName:"tutorial-module-exit",slug:"/tutorial-module-exit/designate-token",permalink:"/zodiac/docs/tutorial-module-exit/designate-token",editUrl:"https://github.com/gnosis/zodiac/edit/master/website/docs/tutorial-module-exit/designate-token.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/zodiac/docs/tutorial-module-exit/get-started"},next:{title:"Add module",permalink:"/zodiac/docs/tutorial-module-exit/add-module"}},s=[{value:"Token Contract Address",id:"token-contract-address",children:[]},{value:"Circulating Supply Amount",id:"circulating-supply-amount",children:[]}],d={toc:s};function p(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"designate-token"},"Designate token"),(0,i.kt)("p",null,"Next you should click on the Exit Module available through the Zodiac App on Gnosis Safe. When you open the Exit Module, it will look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Exit Module",src:n(306).Z})),(0,i.kt)("p",null,"The Exit Module prompts you to enter a ",(0,i.kt)("inlineCode",{parentName:"p"},"Token Contract Address")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Circulating Supply Amount"),". The Token Contract Address and Circulting Supply Amount refer to the ERC20 token participants can redeem for a proportional share of this account\u2019s compatible ERC20 digital assets."),(0,i.kt)("h2",{id:"token-contract-address"},"Token Contract Address"),(0,i.kt)("p",null,"If you need to find the Token Contract Address, look up the token on a block explorer like ",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io"},"https://etherscan.io"),". Be sure to verify these details are correct, and do not correspond to another similarly named token. We can help you in the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/wwmBWTgyEq"},"Gnosis Guild Discord")," if you have any questions. "),(0,i.kt)("h2",{id:"circulating-supply-amount"},"Circulating Supply Amount"),(0,i.kt)("p",null,"This is how you can define the token's circulating supply. Rather than directly reading the token's circulating supply on-chain, this allows you to define the amount in case there are tokens held by the DAO that should not count towards the circulating supply."),(0,i.kt)("p",null,"If you need to find the Circulating Supply Amount, look up the token on a token tracker with historical data like ",(0,i.kt)("a",{parentName:"p",href:"https://coinmarketcap.com/"},"https://coinmarketcap.com"),". Be sure to verify these details are correct, and do not correspond to another similarly named token. We can help you in the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/wwmBWTgyEq"},"Gnosis Guild Discord")," if you have any questions. "),(0,i.kt)("p",null,"In this tutorial, we'll use the ",(0,i.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/token/0x022e292b44b5a146f2e8ee36ff44d3dd863c915c?a=0x9313f9b6a2255f46ca963780665e51afb80bd15a"},"XEENUS")," token, a test token on the Rinkeby testnetwork."))}p.isMDXComponent=!0},306:function(e,t,n){t.Z=n.p+"assets/images/exit_1-657bd5704999c772e4dfa2752186ff6f.png"}}]);