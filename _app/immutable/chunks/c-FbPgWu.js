import{A as i,j as f,R as p,g as _,T as h,S as E,D as d,r as o,q as T,p as g}from"./DS5pTvnU.js";function y(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=_;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function M(r,t){var e=(t&h)!==0,c=(t&E)!==0,a,m=!r.startsWith("<!>");return()=>{if(d)return n(o,null),o;a===void 0&&(a=y(m?r:"<!>"+r),e||(a=f(a)));var s=c||p?document.importNode(a,!0):a.cloneNode(!0);if(e){var l=f(s),v=s.lastChild;n(l,v)}else n(s,s);return s}}function N(r=""){if(!d){var t=i(r+"");return n(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=i()),g(e)),n(e,e),e}function A(){if(d)return n(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=i();return r.append(t,e),n(t,e),r}function L(r,t){if(d){_.nodes_end=o,T();return}r!==null&&r.before(t)}const w="5";var u;typeof window<"u"&&((u=window.__svelte??(window.__svelte={})).v??(u.v=new Set)).add(w);export{L as a,n as b,A as c,N as d,M as t};
