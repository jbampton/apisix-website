(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||b[m]||i;return r?a.a.createElement(f,c(c({ref:t},p),{},{components:r})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(144)),l={title:"Release Apache APISIX Ingress Controller 0.1.0"},c={permalink:"/events/2020/12/23/release-apache-apisix-ingress-controller-0.1.0",source:"@site/events/2020-12-23-release-apache-apisix-ingress-controller-0.1.0.md",description:"This release mainly improve basic features, bugfix and adds test cases.",date:"2020-12-23T00:00:00.000Z",tags:[],title:"Release Apache APISIX Ingress Controller 0.1.0",readingTime:.375,truncated:!0,prevItem:{title:"Release Apache APISIX Ingress Controller 0.2.0",permalink:"/events/2021/01/19/release-apache-apisix-ingress-controller-0.2.0"}},o=[{value:"Core",id:"core",children:[]},{value:"Test case",id:"test-case",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],p={toc:o};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This release mainly improve basic features, bugfix and adds test cases."),Object(i.b)("h2",{id:"core"},"Core"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Enriched documentation."),Object(i.b)("li",{parentName:"ul"},"CI Integration. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/75"},"#75")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/80"},"#80")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/84"},"#84")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/87"},"#87")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/89"},"#89")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/97"},"#97")),Object(i.b)("li",{parentName:"ul"},"Support retry when sync failed. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/103"},"#103")),Object(i.b)("li",{parentName:"ul"},"Support using kustomize install all resources. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/72"},"#72")),Object(i.b)("li",{parentName:"ul"},"Support command line configuration. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/61"},"#61")),Object(i.b)("li",{parentName:"ul"},"Support to define SSL by CRD. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/95"},"#95"))),Object(i.b)("h2",{id:"test-case"},"Test case"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add E2E test enviroment. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/101"},"#101"))),Object(i.b)("h2",{id:"bugfix"},"Bugfix"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"invalid memory address or nil pointer dereference. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/api7/seven/pull/9"},"#9"))))}s.isMDXComponent=!0}}]);