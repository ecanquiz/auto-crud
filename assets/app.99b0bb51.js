import{a0 as p,A as s,a1 as u,a2 as c,a3 as l,a4 as d,a5 as f,a6 as m,a7 as h,a8 as A,a9 as y,aa as g,ab as P,d as v,u as w,j as C,x as R,ac as _,ad as b,ae as D}from"./chunks/framework.4e944e74.js";import{t as r}from"./chunks/theme.82b7a072.js";const E={...r,Layout:()=>p(r.Layout,null,{}),enhanceApp({app:e,router:a,siteData:t}){}};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=i(E),L=v({name:"VitePressApp",setup(){const{site:e}=w();return C(()=>{R(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),_(),b(),D(),o.setup&&o.setup(),()=>p(o.Layout)}});async function T(){const e=x(),a=j();a.provide(c,e);const t=l(e.route);return a.provide(d,t),a.component("Content",f),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function j(){return A(L)}function x(){let e=s,a;return y(t=>{let n=g(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),P(()=>import(n),[])):null},o.NotFound)}s&&T().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{T as createApp};
