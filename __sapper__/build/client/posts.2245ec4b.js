import{S as t,i as e,s as l,e as s,b as n,c as a,d as r,g as o,f as i,j as m,D as u,k as p,l as c,E as f,G as y,r as h,I as g,q as $,z as d,J as b,B as v,C as P,t as E,h as x,x as S,a as w,w as I,K as L,m as A,o as O,p as G,L as _,M as z,u as N,N as V,O as B,y as T,n as R}from"./client.ed211df1.js";import{p as U}from"./Tags.58e14e75.js";import{P as X,S as j,B as D}from"./Bloghero.759e5a48.js";function M({totalItems:t,pageSize:e,currentPage:l,limit:s=null,showStepOptions:n=!1}){const a=Math.ceil(t/e),r=function({limit:t}){return 2*t+3+2}({limit:s});let o=s&&a>r?function({totalPages:t,limit:e,currentPage:l}){const s=2*e+2,n=1+s,a=t-s,r=n+2;if(l<=n-e)return Array(r).fill(null).map((e,l)=>l===r-1?{type:"number",value:t}:l===r-2?{type:"symbol",symbol:"ELLIPSIS",value:n+1}:{type:"number",value:l+1});if(l>=a+e)return Array(r).fill(null).map((t,e)=>0===e?{type:"number",value:1}:1===e?{type:"symbol",symbol:"ELLIPSIS",value:a-1}:{type:"number",value:a+e-2});if(l>=n-e&&l<=a+e)return Array(r).fill(null).map((s,n)=>0===n?{type:"number",value:1}:1===n?{type:"symbol",symbol:"ELLIPSIS",value:l-e+(n-2)}:n===r-1?{type:"number",value:t}:n===r-2?{type:"symbol",symbol:"ELLIPSIS",value:l+e+1}:{type:"number",value:l-e+(n-2)})}({totalPages:a,limit:s,currentPage:l}):function({totalPages:t}){return new Array(t).fill(null).map((t,e)=>({type:"number",value:e+1}))}({totalPages:a});return n?function({options:t,currentPage:e,totalPages:l}){return[{type:"symbol",symbol:"PREVIOUS_PAGE",value:e<=1?1:e-1},...t,{type:"symbol",symbol:"NEXT_PAGE",value:e>=l?l:e+1}]}({options:o,currentPage:l,totalPages:a}):o}const k=t=>({}),C=t=>({}),Z=t=>({}),q=t=>({}),J=t=>({}),K=t=>({}),F=t=>({value:2&t}),H=t=>({value:t[12].value});function Q(t,e,l){const s=t.slice();return s[12]=e[l],s}function W(t){let e;const l=t[9].next,s=v(l,t,t[8],C),n=s||function(t){let e,l;return{c(){e=w("svg"),l=w("path"),this.h()},l(t){e=a(t,"svg",{style:!0,viewBox:!0},1);var s=r(e);l=a(s,"path",{fill:!0,d:!0},1),r(l).forEach(i),s.forEach(i),this.h()},h(){m(l,"fill","#000000"),m(l,"d","M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"),I(e,"width","24px"),I(e,"height","24px"),m(e,"viewBox","0 0 24 24")},m(t,s){p(t,e,s),c(e,l)},d(t){t&&i(e)}}}();return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,l){n&&n.m(t,l),e=!0},p(t,e){s&&s.p&&256&e&&P(s,l,t,t[8],e,k,C)},i(t){e||($(n,t),e=!0)},o(t){h(n,t),e=!1},d(t){n&&n.d(t)}}}function Y(t){let e;const l=t[9].prev,s=v(l,t,t[8],q),n=s||function(t){let e,l;return{c(){e=w("svg"),l=w("path"),this.h()},l(t){e=a(t,"svg",{style:!0,viewBox:!0},1);var s=r(e);l=a(s,"path",{fill:!0,d:!0},1),r(l).forEach(i),s.forEach(i),this.h()},h(){m(l,"fill","#000000"),m(l,"d","M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"),I(e,"width","24px"),I(e,"height","24px"),m(e,"viewBox","0 0 24 24")},m(t,s){p(t,e,s),c(e,l)},d(t){t&&i(e)}}}();return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,l){n&&n.m(t,l),e=!0},p(t,e){s&&s.p&&256&e&&P(s,l,t,t[8],e,Z,q)},i(t){e||($(n,t),e=!0)},o(t){h(n,t),e=!1},d(t){n&&n.d(t)}}}function tt(t){let e;const l=t[9].ellipsis,n=v(l,t,t[8],K),o=n||function(t){let e,l;return{c(){e=s("span"),l=E("...")},l(t){e=a(t,"SPAN",{});var s=r(e);l=x(s,"..."),s.forEach(i)},m(t,s){p(t,e,s),c(e,l)},d(t){t&&i(e)}}}();return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,l){o&&o.m(t,l),e=!0},p(t,e){n&&n.p&&256&e&&P(n,l,t,t[8],e,J,K)},i(t){e||($(o,t),e=!0)},o(t){h(o,t),e=!1},d(t){o&&o.d(t)}}}function et(t){let e;const l=t[9].number,n=v(l,t,t[8],H),o=n||function(t){let e,l,n=t[12].value+"";return{c(){e=s("span"),l=E(n)},l(t){e=a(t,"SPAN",{});var s=r(e);l=x(s,n),s.forEach(i)},m(t,s){p(t,e,s),c(e,l)},p(t,e){2&e&&n!==(n=t[12].value+"")&&S(l,n)},d(t){t&&i(e)}}}(t);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,l){o&&o.m(t,l),e=!0},p(t,e){n?n.p&&258&e&&P(n,l,t,t[8],e,F,H):o&&o.p&&2&e&&o.p(t,e)},i(t){e||($(o,t),e=!0)},o(t){h(o,t),e=!1},d(t){o&&o.d(t)}}}function lt(t){let e,l,d,b,v,P,E;const x=[et,tt,Y,W],S=[];function w(t,e){return"number"===t[12].type?0:"symbol"===t[12].type&&"ELLIPSIS"===t[12].symbol?1:"symbol"===t[12].type&&"PREVIOUS_PAGE"===t[12].symbol?2:"symbol"===t[12].type&&"NEXT_PAGE"===t[12].symbol?3:-1}function I(...e){return t[10](t[12],...e)}return~(l=w(t))&&(d=S[l]=x[l](t)),{c(){e=s("span"),d&&d.c(),b=n(),this.h()},l(t){e=a(t,"SPAN",{class:!0});var l=r(e);d&&d.l(l),b=o(l),l.forEach(i),this.h()},h(){m(e,"class","option"),u(e,"number","number"===t[12].type),u(e,"prev","symbol"===t[12].type&&"PREVIOUS_PAGE"===t[12].symbol),u(e,"next","symbol"===t[12].type&&"NEXT_PAGE"===t[12].symbol),u(e,"disabled","symbol"===t[12].type&&"NEXT_PAGE"===t[12].symbol&&t[0]>=t[2]||"symbol"===t[12].type&&"PREVIOUS_PAGE"===t[12].symbol&&t[0]<=1),u(e,"ellipsis","symbol"===t[12].type&&"ELLIPSIS"===t[12].symbol),u(e,"active","number"===t[12].type&&t[12].value===t[0])},m(t,s){p(t,e,s),~l&&S[l].m(e,null),c(e,b),v=!0,P||(E=f(e,"click",I),P=!0)},p(s,n){let a=l;l=w(t=s),l===a?~l&&S[l].p(t,n):(d&&(y(),h(S[a],1,1,()=>{S[a]=null}),g()),~l?(d=S[l],d||(d=S[l]=x[l](t),d.c()),$(d,1),d.m(e,b)):d=null),2&n&&u(e,"number","number"===t[12].type),2&n&&u(e,"prev","symbol"===t[12].type&&"PREVIOUS_PAGE"===t[12].symbol),2&n&&u(e,"next","symbol"===t[12].type&&"NEXT_PAGE"===t[12].symbol),7&n&&u(e,"disabled","symbol"===t[12].type&&"NEXT_PAGE"===t[12].symbol&&t[0]>=t[2]||"symbol"===t[12].type&&"PREVIOUS_PAGE"===t[12].symbol&&t[0]<=1),2&n&&u(e,"ellipsis","symbol"===t[12].type&&"ELLIPSIS"===t[12].symbol),3&n&&u(e,"active","number"===t[12].type&&t[12].value===t[0])},i(t){v||($(d),v=!0)},o(t){h(d),v=!1},d(t){t&&i(e),~l&&S[l].d(),P=!1,E()}}}function st(t){let e,l,n=t[1],o=[];for(let e=0;e<n.length;e+=1)o[e]=lt(Q(t,n,e));const u=t=>h(o[t],1,1,()=>{o[t]=null});return{c(){e=s("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var l=r(e);for(let t=0;t<o.length;t+=1)o[t].l(l);l.forEach(i),this.h()},h(){m(e,"class","pagination-nav")},m(t,s){p(t,e,s);for(let t=0;t<o.length;t+=1)o[t].m(e,null);l=!0},p(t,[l]){if(271&l){let s;for(n=t[1],s=0;s<n.length;s+=1){const a=Q(t,n,s);o[s]?(o[s].p(a,l),$(o[s],1)):(o[s]=lt(a),o[s].c(),$(o[s],1),o[s].m(e,null))}for(y(),s=n.length;s<o.length;s+=1)u(s);g()}},i(t){if(!l){for(let t=0;t<n.length;t+=1)$(o[t]);l=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)h(o[t]);l=!1},d(t){t&&i(e),d(o,t)}}}function nt(t,e,l){let{$$slots:s={},$$scope:n}=e;const a=b();let{totalItems:r=0}=e,{pageSize:o=1}=e,{currentPage:i=1}=e,{limit:m=null}=e,{showStepOptions:u=!1}=e;function p(t){a("setPage",{page:t.value})}let c,f;return t.$$set=t=>{"totalItems"in t&&l(4,r=t.totalItems),"pageSize"in t&&l(5,o=t.pageSize),"currentPage"in t&&l(0,i=t.currentPage),"limit"in t&&l(6,m=t.limit),"showStepOptions"in t&&l(7,u=t.showStepOptions),"$$scope"in t&&l(8,n=t.$$scope)},t.$$.update=()=>{241&t.$$.dirty&&l(1,c=M({totalItems:r,pageSize:o,currentPage:i,limit:m,showStepOptions:u})),48&t.$$.dirty&&l(2,f=Math.ceil(r/o))},[i,c,f,p,r,o,m,u,n,s,t=>p(t)]}class at extends t{constructor(t){super(),e(this,t,nt,st,l,{totalItems:4,pageSize:5,currentPage:0,limit:6,showStepOptions:7})}}function rt(t){let e,l,n;const o=[t[0]];let u={};for(let t=0;t<o.length;t+=1)u=L(u,o[t]);return l=new at({props:u}),l.$on("setPage",t[1]),{c(){e=s("div"),A(l.$$.fragment),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=r(e);O(l.$$.fragment,s),s.forEach(i),this.h()},h(){m(e,"class","light-pagination-nav svelte-s5ru8s")},m(t,s){p(t,e,s),G(l,e,null),n=!0},p(t,[e]){const s=1&e?_(o,[z(t[0])]):{};l.$set(s)},i(t){n||($(l.$$.fragment,t),n=!0)},o(t){h(l.$$.fragment,t),n=!1},d(t){t&&i(e),N(l)}}}function ot(t,e,l){return t.$$set=t=>{l(0,e=L(L({},e),V(t)))},[e=V(e),function(e){B(t,e)}]}class it extends t{constructor(t){super(),e(this,t,ot,rt,l,{})}}function mt(t){let e,l,u,f,y,g,d,b,v;return u=new X({props:{posts:t[1]}}),y=new it({props:{totalItems:t[2].length,pageSize:ut,currentPage:t[0],limit:1,showStepOptions:!0}}),y.$on("setPage",t[3]),b=new j({}),{c(){e=s("section"),l=s("div"),A(u.$$.fragment),f=n(),A(y.$$.fragment),g=n(),d=s("div"),A(b.$$.fragment),this.h()},l(t){e=a(t,"SECTION",{class:!0});var s=r(e);l=a(s,"DIV",{class:!0});var n=r(l);O(u.$$.fragment,n),f=o(n),O(y.$$.fragment,n),n.forEach(i),g=o(s),d=a(s,"DIV",{class:!0});var m=r(d);O(b.$$.fragment,m),m.forEach(i),s.forEach(i),this.h()},h(){m(l,"class","lg:px-16 px-6 flex flex-wrap justify-center my-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"),m(d,"class","container my-6 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"),m(e,"class","flex flex-wrap mx-2 overflow-hidden sm:mx-2 md:mx-2 lg:mx-2 xl:mx-2")},m(t,s){p(t,e,s),c(e,l),G(u,l,null),c(l,f),G(y,l,null),c(e,g),c(e,d),G(b,d,null),v=!0},p(t,[e]){const l={};2&e&&(l.posts=t[1]),u.$set(l);const s={};1&e&&(s.currentPage=t[0]),y.$set(s)},i(t){v||($(u.$$.fragment,t),$(y.$$.fragment,t),$(b.$$.fragment,t),v=!0)},o(t){h(u.$$.fragment,t),h(y.$$.fragment,t),h(b.$$.fragment,t),v=!1},d(t){t&&i(e),N(u),N(y),N(b)}}}let ut=4;function pt(t,e,l){let s=U,n=1;let a;return t.$$.update=()=>{1&t.$$.dirty&&l(1,a=function({items:t,pageSize:e,currentPage:l}){return t.slice((l-1)*e,(l-1)*e+e)}({items:s,pageSize:ut,currentPage:n}))},[n,a,s,t=>l(0,n=t.detail.page)]}class ct extends t{constructor(t){super(),e(this,t,pt,mt,l,{})}}function ft(t){let e,l,s,a,r;return l=new D({props:{title1:"Latest",title2:"Articles..."}}),a=new ct({}),{c(){e=n(),A(l.$$.fragment),s=n(),A(a.$$.fragment),this.h()},l(t){T('[data-svelte="svelte-1so41zt"]',document.head).forEach(i),e=o(t),O(l.$$.fragment,t),s=o(t),O(a.$$.fragment,t),this.h()},h(){document.title="Latest Articles..."},m(t,n){p(t,e,n),G(l,t,n),p(t,s,n),G(a,t,n),r=!0},p:R,i(t){r||($(l.$$.fragment,t),$(a.$$.fragment,t),r=!0)},o(t){h(l.$$.fragment,t),h(a.$$.fragment,t),r=!1},d(t){t&&i(e),N(l,t),t&&i(s),N(a,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,ft,l,{})}}