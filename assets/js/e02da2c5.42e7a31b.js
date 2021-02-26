(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(144)),o={title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",author:"nic-chen",authorURL:"https://github.com/nic-chen",authorImageURL:"https://avatars0.githubusercontent.com/u/33000667"},l={permalink:"/blog/2020/12/16/another-way-to-implement-envoy-filter",source:"@site/blog/2020-12-16-another-way-to-implement-envoy-filter.md",description:"@nic-chen, Apache APISIX PMC from Shenzhen Zhiliu Technology Co.",date:"2020-12-16T00:00:00.000Z",tags:[],title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",readingTime:4.71,truncated:!1,prevItem:{title:"\u521d\u63a2 Kubernetes Service APIs",permalink:"/blog/2020/12/18/a-first-look-at-kubernetes-service-api"},nextItem:{title:"New website for Apache APISIX",permalink:"/blog/2020/08/22/new-website"}},c=[{value:"Ways to implement Envoy filter",id:"ways-to-implement-envoy-filter",children:[{value:"Envoy filter",id:"envoy-filter",children:[]},{value:"Expansion method",id:"expansion-method",children:[]}]},{value:"Apache APISIX solution",id:"apache-apisix-solution",children:[{value:"Example",id:"example",children:[]},{value:"How does it work",id:"how-does-it-work",children:[]}]},{value:"Future outlook",id:"future-outlook",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://github.com/nic-chen"},"@nic-chen"),", Apache APISIX PMC from ",Object(i.b)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co.")),Object(i.b)("p",{parentName:"blockquote"},"Source: ",Object(i.b)("a",{parentName:"p",href:"https://www.apiseven.com/en/blog/another-way-to-implement-envoy-filter"},"https://www.apiseven.com/en/blog/another-way-to-implement-envoy-filter"))),Object(i.b)("h2",{id:"ways-to-implement-envoy-filter"},"Ways to implement Envoy filter"),Object(i.b)("h3",{id:"envoy-filter"},"Envoy filter"),Object(i.b)("p",null,"Envoy is an L7 proxy and communication bus designed for large modern service oriented architectures.\nA pluggable filter chain mechanism allows filters to be written to perform different tasks and inserted into the main server."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://static.apiseven.com/filters.png",alt:"Envoy filter"})),Object(i.b)("h3",{id:"expansion-method"},"Expansion method"),Object(i.b)("p",null,"The existing filters may not meet the user's custom requirements. In this case, Envoy needs to be extended. Customize new filters according to the existing filter chain to achieve customization requirements."),Object(i.b)("p",null,"Developers can extend Envoy in three ways:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"}),Object(i.b)("th",{parentName:"tr",align:"center"},"Getting Started difficulty"),Object(i.b)("th",{parentName:"tr",align:"center"},"stability"),Object(i.b)("th",{parentName:"tr",align:"center"},"development efficiency"),Object(i.b)("th",{parentName:"tr",align:"center"},"Deploy and compile"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"C++"),Object(i.b)("td",{parentName:"tr",align:"center"},"high"),Object(i.b)("td",{parentName:"tr",align:"center"},"stable"),Object(i.b)("td",{parentName:"tr",align:"center"},"low"),Object(i.b)("td",{parentName:"tr",align:"center"},"long time to compile")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"Lua"),Object(i.b)("td",{parentName:"tr",align:"center"},"low"),Object(i.b)("td",{parentName:"tr",align:"center"},"stable"),Object(i.b)("td",{parentName:"tr",align:"center"},"High"),Object(i.b)("td",{parentName:"tr",align:"center"},"no need to compile, deploy directly")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"WASM"),Object(i.b)("td",{parentName:"tr",align:"center"},"high-medium"),Object(i.b)("td",{parentName:"tr",align:"center"},"on the fence"),Object(i.b)("td",{parentName:"tr",align:"center"},"depends on language"),Object(i.b)("td",{parentName:"tr",align:"center"},"compilation time depends on language")))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Using C++ to extend")),Object(i.b)("p",null,"In this way, C++ code is written directly on the basis of Envoy for functional enhancement. After implementing a custom filter, the new binary file is recompiled to complete the upgrade. There are two problems with this way:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Limited by the C++ language, difficulty of getting started, scarcity of developers.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Increasing the complexity of deployment, operation and maintenance, and upgrades. Envoy will become heavier and heavier, and every change requires recompiling the binary file, which is not conducive to iteration and management."))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Using Lua to extend")),Object(i.b)("p",null,"Lua is born to be embedded in the application, so as to provide flexible extension and customization features for application, and is widely used."),Object(i.b)("p",null,"Lua Filter allows Lua scripts to be run in the request and response process. The main features currently supported include: inspection of headers, body, and trailers while streaming in either the request flow, response flow;modification of headers and trailers;blocking and buffering the full request/response body for inspection;performing an outbound async HTTP call to an upstream host;performing a direct response and skipping further filter iteration, etc."),Object(i.b)("p",null,"At present, many people directly distribute Lua code in configuration, which is not conducive to code organization and management, and it is difficult to share with others to form an ecosystem."),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Using WASM extension")),Object(i.b)("p",null,"Developers can write filters in their own programming language, compile them into WASM format using tools, and embed them into Envoy to run."),Object(i.b)("p",null,"It currently supports few languages, and using these languages \u200b\u200bto extend is still not that simple. On the other hand, many people still have reservations about WASM and may not directly use it."),Object(i.b)("h2",{id:"apache-apisix-solution"},"Apache APISIX solution"),Object(i.b)("p",null,"Based on the above analysis, we could see that Lua is very suitable for extending Envoy, and it is easy to learn, and the development efficiency is extremely high. Because it is embedded in Envoy, there is no additional network overhead, and the performance is good."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," community proposes its own solution based on Lua, which is to provide a powerful and flexible basic library to implement all plugins of Apache APISIX and plugins that will be developed in the future to run on Envoy. Developers could also develop their own customized plugins based on this basic library."),Object(i.b)("p",null,"Apache APISIX is a dynamic, real-time, high-performance API gateway, based on the Nginx library and Lua. Apache APISIX provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Please check the repo for specific code and how to run: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/api7/envoy-apisix"},"https://github.com/api7/envoy-apisix")),Object(i.b)("p",null,"The relevant configuration of Envoy is as follows:"),Object(i.b)("p",null,"Define a Filter:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'http_filters:\n- name: entry.lua\n  typed_config:\n    "@type": type.googleapis.com/envoy.extensions.filters.http.lua.v3.Lua\n    source_codes:\n      entry.lua:\n        filename: /apisix/entry.lua\n')),Object(i.b)("p",null,"Enable the Filter for a route and configure it with metadata:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'routes:\n- match:\n    prefix: "/foo"\n  route:\n    cluster: web_service\n  typed_per_filter_config:\n    envoy.filters.http.lua:\n      "@type": type.googleapis.com/envoy.extensions.filters.http.lua.v3.LuaPerRoute\n      name: entry.lua\n  metadata:\n    filter_metadata:\n      envoy.filters.http.lua:\n        plugins:\n        - name: uri-blocker\n          conf:\n            rejected_code: 403\n            block_rules:\n            - root.exe\n            - root.m+\n')),Object(i.b)("h3",{id:"how-does-it-work"},"How does it work"),Object(i.b)("p",null,"We don't need to make major changes to Envoy, only some optimizations that are suitable for public needs."),Object(i.b)("p",null,"We shield platform differences for the plugin layer. All interfaces that need to be used are abstracted in the underlying framework, which we call apisix.core, so that all plugins can run on Envoy and Apache APISIX at the same time."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://static.apiseven.com/main.png",alt:"Architecture diagram"})),Object(i.b)("p",null,"We use the previous example to show how the plugin runs:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://static.apiseven.com/workflow.png",alt:"Plugin workflow"})),Object(i.b)("h4",{id:"first-step-read-configuration"},"First step, read configuration"),Object(i.b)("p",null,"We configure through metadata to determine what plugins need to run on each route and what configuration is for each plugin.\nIn the example, we configured plugin ",Object(i.b)("inlineCode",{parentName:"p"},"uri-blocker")," for the route whose prefix is \u200b\u200b",Object(i.b)("inlineCode",{parentName:"p"},"/foo"),", as well as the block rule of the plugin and the response status when a block is required."),Object(i.b)("h4",{id:"second-step-parse-request"},"Second step, parse request"),Object(i.b)("p",null,"We encapsulated the client request data into ",Object(i.b)("inlineCode",{parentName:"p"},"ctx")," so that it can be used directly in the entire process."),Object(i.b)("h4",{id:"third-step-run-the-plugin"},"Third step, run the plugin"),Object(i.b)("p",null,"We determine whether we need to block this request by matching the configured rules and the obtained uri. If a block is needed, we call ",Object(i.b)("inlineCode",{parentName:"p"},"respond")," to directly respond, otherwise we let it go."),Object(i.b)("h2",{id:"future-outlook"},"Future outlook"),Object(i.b)("p",null,"More and more APISIX plugins are available to run on Envoy, and finally all APISIX plugins (Even that will be developed in the future) will be available to run on Envoy."),Object(i.b)("p",null,"At the same time, we hope that we could work with the Envoy community in the direction of Lua Filter, optimize and improve Lua Filter, enhance the expansion capabilities of Envoy, and reduce the difficulty of Envoy expansion."))}s.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);