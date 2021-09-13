"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return f}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return o?r.createElement(m,i(i({ref:t},c),{},{components:o})):r.createElement(m,i({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6810:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],l={sidebar_position:1},s="Get started",u={unversionedId:"tutorial-module-reality/get-started",id:"tutorial-module-reality/get-started",isDocsHomePage:!1,title:"Get started",description:"About the Zodiac Reality Module",source:"@site/docs/tutorial-module-reality/get-started.md",sourceDirName:"tutorial-module-reality",slug:"/tutorial-module-reality/get-started",permalink:"/zodiac/docs/tutorial-module-reality/get-started",editUrl:"https://github.com/gnosis/zodiac/edit/master/website/docs/tutorial-module-reality/get-started.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/zodiac/docs/tutorial-module-bridge/get-started"},next:{title:"Add template",permalink:"/zodiac/docs/tutorial-module-reality/add-template"}},c=[{value:"About the Zodiac Reality Module",id:"about-the-zodiac-reality-module",children:[]},{value:"Setup a Gnosis Safe",id:"setup-a-gnosis-safe",children:[]},{value:"Navigate to the Zodiac App",id:"navigate-to-the-zodiac-app",children:[]}],p={toc:c};function d(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-started"},"Get started"),(0,a.kt)("h2",{id:"about-the-zodiac-reality-module"},"About the Zodiac Reality Module"),(0,a.kt)("p",null,"This module (formerly SafeSnap) allows on-chain execution based on the outcome of events reported by the Reality.eth oracle. While built initially to execute Gnosis Safe transactions according to Snapshot proposals, this module is framework agnostic. It can enable proposal execution from just about anywhere. For example, it can bring Discord polls on-chain. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/gnosis/zodiac-module-reality"},"Read more here")),(0,a.kt)("h2",{id:"setup-a-gnosis-safe"},"Setup a Gnosis Safe"),(0,a.kt)("p",null,"If you've already set up a Gnosis Safe you'd like to use for this tutorial, skip to the next step below."),(0,a.kt)("p",null,"If not, check out the Gnosis Safe Help Center. The ",(0,a.kt)("a",{parentName:"p",href:"https://help.gnosis-safe.io/en/articles/3876461-create-a-safe"},"Create a Safe")," tutorial will walk you through the full process of creating a new Gnosis Safe account in just 60 seconds."),(0,a.kt)("p",null,"Note that for the purposes of this tutorial, we'll be using a Gnosis Safe deployed on the Rinkeby testnetwork. You can create a Gnosis Safe on Rinkeby at ",(0,a.kt)("a",{parentName:"p",href:"http://rinkeby.gnosis-safe.io/"},"http://rinkeby.gnosis-safe.io"),"."),(0,a.kt)("h2",{id:"navigate-to-the-zodiac-app"},"Navigate to the Zodiac App"),(0,a.kt)("p",null,"On your Gnosis Safe's left menu, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"APPS")," option. Here you'll find apps available through Gnosis Safe. Scroll to the end of this list, and you'll find the Zodiac App."),(0,a.kt)("p",null,"image"),(0,a.kt)("p",null,"Once entering the Zodiac App, you'll see the current Zodiac compliant collection of tools."),(0,a.kt)("p",null,"image"))}d.isMDXComponent=!0}}]);