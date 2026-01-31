import{c as o,j as s,u as l,B as a,S as d,a as x,L as h,F as r}from"./index-BW0vPJFN.js";/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],u=o("BadgeDollarSign",p);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]],_=o("Gavel",j);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],i=o("Users",v);function t({title:e,total:c,icon:n}){return s.jsx("div",{className:"w-[300px] h-[120px] shadow p-5 bg-sidebar text-sidebar-foreground border border-sidebar-border rounded-2xl",children:s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"text-sm mb-2",children:e}),s.jsx("h4",{className:"text-3xl font-bold",children:c})]}),n]})})}function m(){const{data:e}=l();return console.log(e,"datadata"),s.jsxs("div",{children:[s.jsx(a,{title:"Dashboard"}),s.jsxs("div",{className:"p-2 flex flex-wrap gap-4",children:[s.jsx(t,{title:"Total Users",total:(e==null?void 0:e.user_counts)||"0",icon:s.jsx(i,{size:30})}),s.jsx(t,{title:"Total Vendors",total:(e==null?void 0:e.vendor_counts)||"0",icon:s.jsx(i,{size:30})}),s.jsx(t,{title:"Active Vendors",total:(e==null?void 0:e.vendor_active_counts)||"0",icon:s.jsx(d,{size:30})}),s.jsx(t,{title:"Total Products",total:(e==null?void 0:e.product_counts)||"0",icon:s.jsx(x,{size:30})}),s.jsx(t,{title:"Total Auctions",total:(e==null?void 0:e.product_auction_counts)||"0",icon:s.jsx(u,{size:30})}),s.jsx(t,{title:"Total Orders",total:(e==null?void 0:e.order_counts)||"0",icon:s.jsx(h,{size:30})}),s.jsx(t,{title:"Total Disputes",total:(e==null?void 0:e.order_disputed_counts)||"0",icon:s.jsx(_,{size:30})}),s.jsx(t,{title:"Total Review Report",total:(e==null?void 0:e.review_report_counts)||"0",icon:s.jsx(r,{size:30})}),s.jsx(t,{title:"Total Chat Report",total:(e==null?void 0:e.chat_report_counts)||"0",icon:s.jsx(r,{size:30})})]})]})}export{m as default};
