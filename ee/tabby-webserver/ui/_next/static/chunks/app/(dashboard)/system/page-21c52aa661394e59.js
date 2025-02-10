(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2666],{41721:function(e,t,n){Promise.resolve().then(n.bind(n,81551))},81551:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B},getDiskUsageStats:function(){return I}});var s=n(36164),r=n(71480),a=n(35814),l=n(91655),i=n(40055),o=n(43240),c=n(18500),d=n(6246),u=n(3546),h=n(78007),x=n(11634),f=n(31458),m=n(81565),p=n(82394),v=n(11208),j=n(3448),g=n(48537),w=n(57288);function b(e){let{title:t,description:n,className:r,children:a,statusText:l,hideChildren:i}=e,o="",c=n||"Oops! Please try again later.";switch(l){case"Too Many Requests":o="Too Many Requests";break;case"Bad Request":o="Bad Request";break;default:o=t||"Something went wrong"}return(0,s.jsxs)("div",{className:(0,w.cn)("mx-auto mt-8 max-w-md text-center",r),children:[(0,s.jsx)("h1",{className:"text-2xl font-bold tracking-tight text-foreground sm:text-3xl",children:o}),!!c&&(0,s.jsx)("p",{className:"mt-4 text-muted-foreground",children:c}),!i&&(0,s.jsx)("div",{children:a||(0,s.jsx)(f.z,{className:(0,w.cn)("mt-6"),onClick:e=>window.location.reload(),children:"Refresh"})})]})}var N=n(6230),k=n(74630),y=n(79972),C=n(90615);let M=(0,o.BX)("\n  query TestModelConnection($backend: ModelHealthBackend!) {\n    testModelConnection(backend: $backend) {\n      latencyMs\n    }\n  }\n");function T(e){let{addr:t,name:n,kind:r,device:a,cudaDevices:l,cpuCount:i,cpuInfo:o}=e,c=(0,w.cn)("ml-2","whitespace-nowrap","overflow-hidden","text-ellipsis"),d="".concat(o," (").concat(i," cores)");return(0,s.jsxs)(y.Zb,{className:"rounded-xl p-2 shadow-md lg:w-[260px]",children:[(0,s.jsx)(y.Ol,{className:"p-0 px-4 pb-2 pt-4",children:(0,s.jsxs)(y.ll,{className:"text-md flex items-center font-normal",children:[(0,s.jsx)(O,{type:r}),(0,s.jsx)("p",{title:n,className:c,children:n})]})}),(0,s.jsxs)(y.aY,{className:"flex flex-col gap-2 p-0 px-4 pb-4 pt-2",children:[(0,s.jsxs)(R,{children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:" h-5 w-5",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}),(0,s.jsx)("rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}),(0,s.jsx)("rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}),(0,s.jsx)("path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}),(0,s.jsx)("path",{d:"M12 12V8"})]}),(0,s.jsx)("p",{title:t,className:c,children:t})]}),(0,s.jsxs)(R,{children:[(0,s.jsxs)("svg",{className:" h-5 w-5",fill:"none",height:"24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{height:"16",rx:"2",width:"16",x:"4",y:"4"}),(0,s.jsx)("rect",{height:"6",width:"6",x:"9",y:"9"}),(0,s.jsx)("path",{d:"M15 2v2"}),(0,s.jsx)("path",{d:"M15 20v2"}),(0,s.jsx)("path",{d:"M2 15h2"}),(0,s.jsx)("path",{d:"M2 9h2"}),(0,s.jsx)("path",{d:"M20 15h2"}),(0,s.jsx)("path",{d:"M20 9h2"}),(0,s.jsx)("path",{d:"M9 2v2"}),(0,s.jsx)("path",{d:"M9 20v2"})]}),(0,s.jsx)("p",{title:d,className:c,children:d})]}),"cuda"==a&&(null==l?void 0:l.length)&&l.map((e,t)=>(0,s.jsxs)(R,{children:[(0,s.jsxs)("svg",{className:" h-5 w-5",fill:"none",height:"24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M6 19v-3"}),(0,s.jsx)("path",{d:"M10 19v-3"}),(0,s.jsx)("path",{d:"M14 19v-3"}),(0,s.jsx)("path",{d:"M18 19v-3"}),(0,s.jsx)("path",{d:"M8 11V9"}),(0,s.jsx)("path",{d:"M16 11V9"}),(0,s.jsx)("path",{d:"M12 11V9"}),(0,s.jsx)("path",{d:"M2 15h20"}),(0,s.jsx)("path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"})]}),(0,s.jsx)("p",{title:e,className:c,children:e})]},t)),(0,s.jsxs)(R,{children:[(0,s.jsx)(m.IconSquareActivity,{className:"h-5 w-5"}),(0,s.jsx)(z,{backend:r,className:c})]})]})]})}function R(e){let{children:t}=e;return(0,s.jsx)("div",{className:"mt-2 flex items-center text-sm text-card-foreground/70",children:t})}function O(e){let{type:t}=e,n="h-5 w-5";return"COMPLETION"==t?(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:n,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),(0,s.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,s.jsx)("path",{d:"m10 13-2 2 2 2"}),(0,s.jsx)("path",{d:"m14 17 2-2-2-2"})]}):"CHAT"==t?(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:n,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"}),(0,s.jsx)("path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"})]}):"EMBEDDING"==t?(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:n,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"m9 9-2 2 2 2"}),(0,s.jsx)("path",{d:"m13 13 2-2-2-2"}),(0,s.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,s.jsx)("path",{d:"m21 21-4.3-4.3"})]}):void 0}function z(e){var t;let{backend:n,className:r}=e,[{data:a,fetching:l,stale:o,error:c},d]=(0,i.aM)({query:M,variables:{backend:n}}),u=!(0,k.Z)(null==a?void 0:null===(t=a.testModelConnection)||void 0===t?void 0:t.latencyMs);return l||o?(0,s.jsx)("div",{className:(0,w.cn)(r),children:(0,s.jsx)(m.IconSpinner,{})}):(0,s.jsxs)("div",{className:(0,w.cn)("flex items-center gap-3",r),children:[u?(0,s.jsx)("p",{className:"flex items-center gap-0.5",children:"Connected"}):(0,s.jsxs)(C.zs,{openDelay:0,children:[(0,s.jsx)(C.Yi,{asChild:!0,children:(0,s.jsxs)("div",{className:"flex cursor-pointer items-center gap-0.5 text-destructive hover:text-destructive/20 hover:underline",children:[(0,s.jsx)(m.IconCircleHelp,{}),"Unreachable"]})}),(0,s.jsx)(C.bZ,{className:"w-96 bg-secondary",align:"start",children:(0,s.jsx)("div",{className:"whitespace-pre-wrap break-all",children:(null==c?void 0:c.message)||"Failed to connect model"})})]}),(0,s.jsx)(f.z,{className:"h-5 w-5 rounded-sm",size:"icon",variant:"ghost",disabled:l,onClick:d,children:(0,s.jsx)(m.IconRotate,{className:"h-3.5 w-3.5"})})]})}let _=(0,o.BX)("\n  query GetRegistrationToken {\n    registrationToken\n  }\n"),Z=(0,o.BX)("\n  mutation ResetRegistrationToken {\n    resetRegistrationToken\n  }\n");function B(){let{data:e,error:t}=(0,d.Q)(),{data:n,isLoading:a,error:l}=function(){let{data:e,isLoading:t,error:n}=(0,d.Q)(),s=u.useMemo(()=>{let t=[];return(null==e?void 0:e.model)&&t.push({kind:c.mi.Completion,device:e.device,addr:"localhost",arch:"",cpuInfo:e.cpu_info,name:e.model,cpuCount:e.cpu_count,cudaDevices:e.cuda_devices}),(null==e?void 0:e.chat_model)&&t.push({kind:c.mi.Chat,device:e.chat_device,addr:"localhost",arch:"",cpuInfo:e.cpu_info,name:e.chat_model,cpuCount:e.cpu_count,cudaDevices:e.cuda_devices}),(0,h.Z)(t,"kind")},[e]);return{data:s,isLoading:t,error:n}}(),[{data:o},w]=(0,i.aM)({query:_}),k=(0,x.Db)(Z,{onCompleted(){w()}}),y=t||l;return y?(0,s.jsx)(b,{title:null==y?void 0:y.message}):e?(0,s.jsxs)("div",{className:"flex w-full flex-col gap-3",children:[(0,s.jsxs)("h1",{children:[(0,s.jsx)("span",{className:"font-bold",children:"Congratulations"}),", your tabby instance is up!"]}),(0,s.jsx)("span",{className:"flex flex-wrap gap-1",children:(0,s.jsx)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby/releases/tag/".concat(e.version.git_describe),children:(0,s.jsx)("img",{src:"https://img.shields.io/badge/version-".concat(encodeURIComponent(e.version.git_describe.replaceAll("-","--")),"-green")})})}),(0,s.jsx)(v.Z,{}),(0,s.jsx)(F,{}),(0,s.jsx)(v.Z,{}),(0,s.jsx)(N.Z,{loading:a,fallback:(0,s.jsx)(j.O,{className:"mt-3 h-32 w-full lg:w-2/3"}),children:(0,s.jsxs)(s.Fragment,{children:[!!(null==o?void 0:o.registrationToken)&&(0,s.jsxs)("div",{className:"flex items-center gap-1 pt-2",children:["Registration token:",(0,s.jsx)(p.I,{className:"max-w-[320px] font-mono",value:o.registrationToken,onChange:r.Z}),(0,s.jsx)(f.z,{title:"Rotate",size:"icon",variant:"hover-destructive",onClick:()=>k(),children:(0,s.jsx)(m.IconRotate,{})}),(0,s.jsx)(g.q,{value:o.registrationToken})]}),(0,s.jsxs)("div",{className:"mt-3 flex flex-col gap-4 lg:flex-row lg:flex-wrap",children:[!!(null==n?void 0:n.COMPLETION)&&(0,s.jsx)(s.Fragment,{children:n.COMPLETION.map((e,t)=>(0,s.jsx)(T,{...e},t))}),!!(null==n?void 0:n.CHAT)&&(0,s.jsx)(s.Fragment,{children:n.CHAT.map((e,t)=>(0,s.jsx)(T,{...e},t))}),(0,s.jsx)(T,{addr:"localhost",name:"Embedding",kind:c.mi.Embedding,arch:"",device:e.device,cudaDevices:e.cuda_devices,cpuCount:e.cpu_count,cpuInfo:e.cpu_info})]})]})})]}):void 0}(0,o.BX)("\n  query TestModelConnection($backend: ModelHealthBackend!) {\n    testModelConnection(backend: $backend) {\n      latencyMs\n    }\n  }\n");let I=(0,o.BX)("\n  query GetDiskUsageStats {\n    diskUsageStats {\n      events {\n        filepath\n        sizeKb\n      }\n      indexedRepositories {\n        filepath\n        sizeKb\n      }\n      database {\n        filepath\n        sizeKb\n      }\n      models {\n        filepath\n        sizeKb\n      }\n    }\n  }\n"),E=[{label:"Model",key:"models",color:"#0088FE"},{label:"Indexing",key:"indexedRepositories",color:"#00C49F"},{label:"Event Logs",key:"events",color:"#FF8042"},{label:"Other",key:"database",color:"#FFBB28"}];function F(){let[{data:e,fetching:t}]=(0,i.aM)({query:I}),n=[],r=0;return e&&(n=E.map(t=>{if(!e.diskUsageStats[t.key])return null;let n=e.diskUsageStats[t.key];return{...t,sizeKb:n.sizeKb}}).filter(e=>e),r=(0,a.Z)(n.map(e=>e.sizeKb))),(0,s.jsx)(N.Z,{loading:t,fallback:(0,s.jsx)(j.O,{className:"mt-3 h-32 w-full lg:w-2/3"}),children:(0,s.jsxs)("div",{className:"flex flex-col gap-y-1.5 py-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mb-1 text-sm  text-muted-foreground",children:"Disk Usage"}),(0,s.jsx)("p",{className:"text-3xl font-bold leading-none",children:L(r)})]}),(0,s.jsxs)("div",{className:"pt-3",children:[(0,s.jsx)("p",{className:"mb-1 text-sm text-muted-foreground",children:"Storage utilization by Type"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-y-3",children:n.map(e=>(0,s.jsxs)("div",{className:"flex w-1/2 pt-1 text-sm md:w-36",children:[(0,s.jsx)("div",{className:"mr-3 mt-1 h-2 w-2 rounded-full",style:{backgroundColor:e.color}}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mb-1 leading-none",children:e.label}),(0,s.jsx)("p",{className:"text-card-foreground/70",children:L(e.sizeKb)})]})]},e.key))})]})]})})}function L(e){return(0,l.Z)(1e3*e)}},48537:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var s=n(36164);n(3546);var r=n(28312),a=n(31458),l=n(81565);function i(e){let{className:t,value:n,onCopyContent:i,text:o,...c}=e,{isCopied:d,copyToClipboard:u}=(0,r.m)({timeout:2e3,onCopyContent:i});return n?(0,s.jsxs)(a.z,{variant:"ghost",size:o?"default":"icon",className:t,onClick:()=>{d||u(n)},...c,children:[d?(0,s.jsx)(l.IconCheck,{className:"text-green-600"}):(0,s.jsx)(l.IconCopy,{}),o&&(0,s.jsx)("span",{children:o}),!o&&(0,s.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},6230:function(e,t,n){"use strict";var s=n(36164),r=n(3546),a=n(24449),l=n(90379);t.Z=e=>{let{loading:t,fallback:n,delay:i,children:o}=e,[c,d]=r.useState(!t),[u]=(0,a.n)(c,null!=i?i:200);return(r.useEffect(()=>{t||c||d(!0)},[t]),u)?o:n||(0,s.jsx)(l.cg,{})}},90379:function(e,t,n){"use strict";n.d(t,{PF:function(){return o},cg:function(){return l},tB:function(){return i}});var s=n(36164),r=n(57288),a=n(3448);let l=e=>{let{className:t,...n}=e;return(0,s.jsxs)("div",{className:(0,r.cn)("space-y-3",t),...n,children:[(0,s.jsx)(a.O,{className:"h-4 w-full"}),(0,s.jsx)(a.O,{className:"h-4 w-full"}),(0,s.jsx)(a.O,{className:"h-4 w-full"}),(0,s.jsx)(a.O,{className:"h-4 w-full"})]})},i=e=>{let{className:t,...n}=e;return(0,s.jsx)(a.O,{className:(0,r.cn)("h-4 w-full",t),...n})},o=e=>{let{className:t,...n}=e;return(0,s.jsxs)("div",{className:(0,r.cn)("flex flex-col gap-3",t),...n,children:[(0,s.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,s.jsx)(a.O,{className:"h-4 w-full"}),(0,s.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,s.jsx)(a.O,{className:"h-4 w-full"})]})}},79972:function(e,t,n){"use strict";n.d(t,{Ol:function(){return i},Zb:function(){return l},aY:function(){return d},eW:function(){return u},ll:function(){return o}});var s=n(36164),r=n(3546),a=n(57288);let l=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...r})});l.displayName="Card";let i=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",n),...r})});i.displayName="CardHeader";let o=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("h3",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",n),...r})});o.displayName="CardTitle";let c=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",n),...r})});c.displayName="CardDescription";let d=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("p-6 pt-0",n),...r})});d.displayName="CardContent";let u=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",n),...r})});u.displayName="CardFooter"},90615:function(e,t,n){"use strict";n.d(t,{Yi:function(){return o},bZ:function(){return c},zs:function(){return i}});var s=n(36164),r=n(3546),a=n(38421),l=n(57288);let i=a.fC,o=a.xz;a.h_;let c=r.forwardRef((e,t)=>{let{className:n,align:r="center",sideOffset:i=4,...o}=e;return(0,s.jsx)(a.VY,{ref:t,align:r,sideOffset:i,className:(0,l.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...o})});c.displayName=a.VY.displayName},82394:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var s=n(36164),r=n(3546),a=n(57288);let l=r.forwardRef((e,t)=>{let{className:n,type:r,...l}=e;return(0,s.jsx)("input",{type:r,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...l})});l.displayName="Input"},11208:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(36164),r=n(3546),a=n(74225),l=n(57288);let i=r.forwardRef((e,t)=>{let{className:n,orientation:r="horizontal",decorative:i=!0,...o}=e;return(0,s.jsx)(a.f,{ref:t,decorative:i,orientation:r,className:(0,l.cn)("shrink-0 bg-border","horizontal"===r?"h-[1px] w-full":"h-full w-[1px]",n),...o})});i.displayName=a.f.displayName},3448:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var s=n(36164),r=n(57288);function a(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,r.cn)("h-4 animate-pulse rounded-md bg-border",t),...n})}},28312:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var s=n(3546),r=n(61200),a=n.n(r),l=n(2578);function i(e){let{timeout:t=2e3,onError:n,onCopyContent:r}=e,[i,o]=s.useState(!1),c=()=>{o(!0),setTimeout(()=>{o(!1)},t)},d=e=>{if("function"==typeof n){null==n||n(e);return}l.A.error("Failed to copy.")};return{isCopied:i,copyToClipboard:e=>{var t;if(e){if(r){r(e),c();return}if(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)navigator.clipboard.writeText(e).then(c).catch(d);else{let t=a()(e);t?c():d()}}}}}},24449:function(e,t,n){"use strict";n.d(t,{S:function(){return i},n:function(){return o}});var s=n(3546),r=n(45391),a=n(16784);let l=e=>{let t=(0,a.d)(e);s.useEffect(()=>()=>{t.current()},[])};function i(e,t,n){let i=(0,a.d)(e),o=s.useMemo(()=>(0,r.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.current(...t)},t,n),[]);return l(()=>{var e;null==n||null===(e=n.onUnmount)||void 0===e||e.call(n,o),o.cancel()}),{run:o,cancel:o.cancel,flush:o.flush}}function o(e,t,n){let[r,a]=s.useState(e),{run:l}=i(()=>{a(e)},t,n);return s.useEffect(()=>{l()},[e]),[r,a]}},6246:function(e,t,n){"use strict";n.d(t,{Q:function(){return a}});var s=n(21454),r=n(3765);function a(){return(0,s.ZP)("/v1/health",e=>(0,r.Z)(e,{errorHandler:e=>{throw Error((null==e?void 0:e.statusText.toString())||"Unhealth")}}),{shouldRetryOnError:!1})}},16784:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});var s=n(3546);function r(e){let t=s.useRef(e);return t.current=e,t}},3765:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(44745),r=n(57778),a=n(79716),l=n(91302),i=n(66794);async function o(e,t){var n;let s=null!==(n=null==t?void 0:t.customFetch)&&void 0!==n?n:window.fetch;if(function(e){var t;if(e.startsWith("/oauth/providers"))return!1;let n=null===(t=(0,i.bW)())||void 0===t?void 0:t.accessToken;if(!n)return!0;try{let{exp:e}=(0,a.o)(n);return(0,i.pw)(e)}catch(e){return!0}}(e))return i.gN.refreshToken(c).then(n=>h(e,t));let r=await s(e,d(t));return 401===r.status?(i.gN.clearAccessToken(),i.gN.refreshToken(c).then(n=>h(e,t))):x(r,t)}async function c(){var e,t;let n=null===(e=(0,i.bW)())||void 0===e?void 0:e.refreshToken;if(!n)return;let s=await u(n);return null==s?void 0:null===(t=s.data)||void 0===t?void 0:t.refreshToken}function d(e){var t;let n=new Headers(null==e?void 0:e.headers);return n.append("authorization","Bearer ".concat(null===(t=(0,i.bW)())||void 0===t?void 0:t.accessToken)),{...e||{},headers:n}}async function u(e){let t=new s.KU({url:"/graphql",requestPolicy:"network-only",exchanges:[s.Ek]}),n=t.createRequestOperation("mutation",(0,r.h)(l.Dp,{refreshToken:e}));return t.executeMutation(n)}function h(e,t){var n;let s=null!==(n=null==t?void 0:t.customFetch)&&void 0!==n?n:window.fetch;return s(e,d(t)).then(e=>x(e,t))}function x(e,t){return(null==e?void 0:e.ok)?(null==t?void 0:t.responseFormatter)?t.responseFormatter(e):(null==t?void 0:t.responseFormat)==="blob"?e.blob():e.json():(null==t?void 0:t.errorHandler)?t.errorHandler(e):void 0}}},function(e){e.O(0,[8415,7430,55,7176,340,2546,1283,3449,2578,7070,1454,1288,7288,1565,3240,4656,3375,5289,1744],function(){return e(e.s=41721)}),_N_E=e.O()}]);