function b(){}const Z=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function V(){return Object.create(null)}function k(t){t.forEach(tt)}function J(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t,e,n){t.$$.on_destroy.push(gt(e,n))}function Gt(t,e,n,s){if(t){const r=et(t,e,n,s);return t[0](r)}}function et(t,e,n,s){return t[1]&&s?mt(n.ctx.slice(),t[1](s(e))):n.ctx}function Jt(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],i=Math.max(e.dirty.length,r.length);for(let l=0;l<i;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function Kt(t,e,n,s,r,u){if(r){const i=et(e,n,s,u);t.p(i,r)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Ut(t,e,n){return t.set(n),e}function Vt(t){return t&&J(t.destroy)?t.destroy:b}const nt=typeof window<"u";let it=nt?()=>window.performance.now():()=>Date.now(),K=nt?t=>requestAnimationFrame(t):b;const C=new Set;function st(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&K(st)}function rt(t){let e;return C.size===0&&K(st),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let T=!1;function bt(){T=!0}function xt(){T=!1}function wt(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const d=e[c];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,d=(r>0&&e[n[r]].claim_order<=c?r+1:wt(1,r,a=>e[n[a]].claim_order,c))-1;s[o]=n[d]+1;const f=d+1;n[f]=o,r=Math.max(f,r)}const u=[],i=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=s[o-1]){for(u.push(e[o-1]);l>=o;l--)i.push(e[l]);l--}for(;l>=0;l--)i.push(e[l]);u.reverse(),i.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<i.length;o++){for(;c<u.length&&i[o].claim_order>=u[c].claim_order;)c++;const d=c<u.length?u[c]:null;t.insertBefore(i[o],d)}}function vt(t,e){t.appendChild(e)}function Et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t,e){return vt(t.head||t,e),e.sheet}function Ct(t,e){if(T){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Xt(t,e,n){T&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode.removeChild(t)}function Yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ct(t){return document.createElement(t)}function kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function Zt(){return Q(" ")}function te(){return Q("")}function ee(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,s,r=!1){At(t);const u=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const l=t[i];if(e(l)){const o=n(l);return o===void 0?t.splice(i,1):t[i]=o,r||(t.claim_info.last_index=i),l}}for(let i=t.claim_info.last_index-1;i>=0;i--){const l=t[i];if(e(l)){const o=n(l);return o===void 0?t.splice(i,1):t[i]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,l}}return s()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ut(t,e,n,s){return lt(t,r=>r.nodeName===e,r=>{const u=[];for(let i=0;i<r.attributes.length;i++){const l=r.attributes[i];n[l.name]||u.push(l.name)}u.forEach(i=>r.removeAttribute(i))},()=>s(e))}function ie(t,e,n){return ut(t,e,n,ct)}function se(t,e,n){return ut(t,e,n,kt)}function Mt(t,e){return lt(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>Q(e),!0)}function re(t){return Mt(t," ")}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function le(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function ue(t,e=document.body){return Array.from(e.querySelectorAll(t))}const P=new Map;let D=0;function Rt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t){const e={style_element:ct("style"),rules:{}};return P.set(t,e),e}function W(t,e,n,s,r,u,i,l=0){const o=16.666/s;let c=`{
`;for(let m=0;m<=1;m+=o){const y=e+(n-e)*u(m);c+=m*100+`%{${i(y,1-y)}}
`}const d=c+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Rt(d)}_${l}`,a=Et(t),{style_element:_,rules:h}=P.get(a)||qt(a);if(!h[f]){const m=St(a,_);h[f]=!0,m.insertRule(`@keyframes ${f} ${d}`,m.cssRules.length)}const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${s}ms linear ${r}ms 1 both`,D+=1,f}function at(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),D-=r,D||Bt())}function Bt(){K(()=>{D||(P.forEach(t=>{const{style_element:e}=t;ot(e)}),P.clear())})}function ae(t,e,n,s){if(!e)return b;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return b;const{delay:u=0,duration:i=300,easing:l=Z,start:o=it()+u,end:c=o+i,tick:d=b,css:f}=n(t,{from:e,to:r},s);let a=!0,_=!1,h;function g(){f&&(h=W(t,0,1,i,u,l,f)),u||(_=!0)}function m(){f&&at(t,h),a=!1}return rt(y=>{if(!_&&y>=o&&(_=!0),_&&y>=c&&(d(1,0),m()),!a)return!1;if(_){const v=y-o,x=0+1*l(v/i);d(x,1-x)}return!0}),g(),d(0,1),m}function fe(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,zt(t,r)}}function zt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const s=getComputedStyle(t),r=s.transform==="none"?"":s.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let j;function M(t){j=t}function U(){if(!j)throw new Error("Function called outside component initialization");return j}function _e(t){U().$$.on_mount.push(t)}function de(t){U().$$.after_update.push(t)}function he(t,e){return U().$$.context.set(t,e),e}const A=[],X=[],z=[],Y=[],ft=Promise.resolve();let G=!1;function _t(){G||(G=!0,ft.then(dt))}function me(){return _t(),ft}function L(t){z.push(t)}const H=new Set;let B=0;function dt(){const t=j;do{for(;B<A.length;){const e=A[B];B++,M(e),Ot(e.$$)}for(M(null),A.length=0,B=0;X.length;)X.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];H.has(n)||(H.add(n),n())}z.length=0}while(A.length);for(;Y.length;)Y.pop()();G=!1,H.clear(),M(t)}function Ot(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}let N;function Pt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function I(t,e,n){t.dispatchEvent(jt(`${e?"intro":"outro"}${n}`))}const O=new Set;let E;function pe(){E={r:0,c:[],p:E}}function ye(){E.r||k(E.c),E=E.p}function ht(t,e){t&&t.i&&(O.delete(t),t.i(e))}function Dt(t,e,n,s){if(t&&t.o){if(O.has(t))return;O.add(t),E.c.push(()=>{O.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Lt={duration:0};function ge(t,e,n,s){let r=e(t,n),u=s?0:1,i=null,l=null,o=null;function c(){o&&at(t,o)}function d(a,_){const h=a.b-u;return _*=Math.abs(h),{a:u,b:a.b,d:h,duration:_,start:a.start,end:a.start+_,group:a.group}}function f(a){const{delay:_=0,duration:h=300,easing:g=Z,tick:m=b,css:y}=r||Lt,v={start:it()+_,b:a};a||(v.group=E,E.r+=1),i||l?l=v:(y&&(c(),o=W(t,u,a,h,_,g,y)),a&&m(0,1),i=d(v,h),L(()=>I(t,a,"start")),rt(x=>{if(l&&x>l.start&&(i=d(l,h),l=null,I(t,i.b,"start"),y&&(c(),o=W(t,u,i.b,i.duration,0,g,r.css))),i){if(x>=i.end)m(u=i.b,1-u),I(t,i.b,"end"),l||(i.b?c():--i.group.r||k(i.group.c)),i=null;else if(x>=i.start){const R=x-i.start;u=i.a+i.d*g(R/i.duration),m(u,1-u)}}return!!(i||l)}))}return{run(a){J(r)?Pt().then(()=>{r=r(),f(a)}):f(a)},end(){c(),i=l=null}}}function Tt(t,e){Dt(t,1,1,()=>{e.delete(t.key)})}function be(t,e){t.f(),Tt(t,e)}function xe(t,e,n,s,r,u,i,l,o,c,d,f){let a=t.length,_=u.length,h=a;const g={};for(;h--;)g[t[h].key]=h;const m=[],y=new Map,v=new Map;for(h=_;h--;){const p=f(r,u,h),w=n(p);let $=i.get(w);$?s&&$.p(p,e):($=c(w,p),$.c()),y.set(w,m[h]=$),w in g&&v.set(w,Math.abs(h-g[w]))}const x=new Set,R=new Set;function F(p){ht(p,1),p.m(l,d),i.set(p.key,p),d=p.first,_--}for(;a&&_;){const p=m[_-1],w=t[a-1],$=p.key,q=w.key;p===w?(d=p.first,a--,_--):y.has(q)?!i.has($)||x.has($)?F(p):R.has(q)?a--:v.get($)>v.get(q)?(R.add($),F(p)):(x.add(q),a--):(o(w,i),a--)}for(;a--;){const p=t[a];y.has(p.key)||o(p,i)}for(;_;)F(m[_-1]);return m}function we(t){t&&t.c()}function $e(t,e){t&&t.l(e)}function Ft(t,e,n,s){const{fragment:r,on_mount:u,on_destroy:i,after_update:l}=t.$$;r&&r.m(e,n),s||L(()=>{const o=u.map(tt).filter(J);i?i.push(...o):k(o),t.$$.on_mount=[]}),l.forEach(L)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(A.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,s,r,u,i,l=[-1]){const o=j;M(t);const c=t.$$={fragment:null,ctx:null,props:u,update:b,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:V(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};i&&i(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(f,a,..._)=>{const h=_.length?_[0]:a;return c.ctx&&r(c.ctx[f],c.ctx[f]=h)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](h),d&&It(t,f)),a}):[],c.update(),d=!0,k(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){bt();const f=Nt(e.target);c.fragment&&c.fragment.l(f),f.forEach(ot)}else c.fragment&&c.fragment.c();e.intro&&ht(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),xt(),dt()}M(o)}class Ee{$destroy(){Ht(this,1),this.$destroy=b}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const S=[];function Se(t,e=b){let n;const s=new Set;function r(l){if(pt(t,l)&&(t=l,n)){const o=!S.length;for(const c of s)c[1](),S.push(c,t);if(o){for(let c=0;c<S.length;c+=2)S[c][0](S[c+1]);S.length=0}}}function u(l){r(l(t))}function i(l,o=b){const c=[l,o];return s.add(c),s.size===1&&(n=e(r)||b),l(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:i}}export{Se as A,Ct as B,b as C,Wt as D,Gt as E,Kt as F,Qt as G,Jt as H,he as I,Ut as J,kt as K,se as L,le as M,ee as N,Yt as O,J as P,ue as Q,Vt as R,Ee as S,xe as T,fe as U,zt as V,ae as W,L as X,ge as Y,k as Z,be as _,Zt as a,Xt as b,re as c,ye as d,te as e,ht as f,pe as g,ot as h,ve as i,de as j,ct as k,ie as l,Nt as m,ne as n,_e as o,ce as p,Q as q,Mt as r,pt as s,Dt as t,oe as u,we as v,$e as w,Ft as x,Ht as y,me as z};
