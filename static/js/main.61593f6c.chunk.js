(this["webpackJsonpsheet-happens-example"]=this["webpackJsonpsheet-happens-example"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);n(8);var l=n(0),o=n.n(l),r=n(6),i=n.n(r),c=n(3),a=n(2),y=n(1),s="_styles-module__sheetscroll__PxIi8";function f(e){void 0===e&&(e={});var t=e.onResize,n=Object(l.useRef)(void 0);n.current=t;var o=Object(l.useRef)(),r=Object(l.useState)({width:void 0,height:void 0}),i=r[0],c=r[1],a=Object(l.useRef)(!1);Object(l.useEffect)((function(){return function(){a.current=!0}}),[]);var y=Object(l.useRef)({width:void 0,height:void 0}),s=function(e,t){var n,o=null,r=Object(l.useRef)(null),i=Object(l.useRef)(null),c=Object(l.useCallback)((function(e){i.current=e,s()}),[]),a=Object(l.useRef)(null),y=Object(l.useRef)(),s=function(){var n=null;i.current?n=i.current:r.current?n=r.current:t instanceof HTMLElement&&(n=t),a.current!==n&&(y.current&&(y.current(),y.current=null),a.current=n,n&&(y.current=e(n)))};return!t||t instanceof HTMLElement||(o=t),Object(l.useEffect)((function(){o&&(r.current=o.current),s()}),[o,null==(n=o)?void 0:n.current,t]),c}((function(e){return o.current||(o.current=new ResizeObserver((function(e){if(Array.isArray(e)&&e.length){var t=e[0],l=Math.round(t.contentRect.width),o=Math.round(t.contentRect.height);if(y.current.width!==l||y.current.height!==o){var r={width:l,height:o};n.current?n.current(r):(y.current.width=l,y.current.height=o,a.current||c(r))}}}))),o.current.observe(e),function(){o.current&&o.current.unobserve(e)}}),e.ref);return Object(l.useMemo)((function(){return{ref:s,width:i.width,height:i.height}}),[s,i?i.width:null,i?i.height:null])}function u(e){const t=e.getBoundingClientRect(),n=t.width,l=t.height;let o=window.devicePixelRatio,r=void 0===o?1:o;r<1&&(r=1);const i=Math.round(n*r),c=Math.round(l*r);if(e.width!==i||e.height!==c){const t=e.getContext("2d");return e.width=i,e.height=c,t.scale(r,r),!0}return!1}function h(e,t){return n=>Array.isArray(e)?n>=0&&n<e.length?e[n]:t:"function"===typeof e?e(n):"number"===typeof e?e:t}function x(e,t){return(n,l)=>Array.isArray(e)?l>=0&&l<e.length&&n>=0&&n<e[l].length?e[l][n]:t:"function"===typeof e?e(n,l):null!==e&&void 0!==e?e:t}function d(e,t,n,l,o,r,i,c){n.color=n.color||l.color,n.fontSize=n.fontSize||l.fontSize,n.fontFamily=n.fontFamily||l.fontFamily,n.textAlign=n.textAlign||l.textAlign,n.marginRight=n.marginRight||l.marginRight,n.marginLeft=n.marginLeft||l.marginLeft,n.weight=n.weight||l.weight,e.fillStyle=n.color,e.font=n.weight+n.fontSize+"px "+n.fontFamily,e.textAlign=n.textAlign;const a=o+("right"===n.textAlign?i-n.marginRight:n.marginLeft),s=r+.5*c;if(e.save(),e.beginPath(),e.rect(o,r,i,c),e.clip(),n.backgroundColor&&(e.fillStyle=n.backgroundColor,e.fillRect(o,r,i,c),e.fillStyle=n.color),Array.isArray(t)){var f,u=Object(y.a)(t);try{for(u.s();!(f=u.n()).done;){const t=f.value;t.content instanceof HTMLImageElement?e.drawImage(t.content,o+t.x,s+t.y,t.width,t.height):"string"===typeof t.content&&e.fillText(t.content,o+t.x,s+t.y)}}catch(h){u.e(h)}finally{u.f()}}else e.fillText(t,a,s);e.restore()}function g(e,t,n,l,o){const r=[],i=[],c=[];let a=0;i.push(n),r.push(e>0?0:l),a=n+t(e>0?0:l),c.push(a);let y=e>0?1:l+1;if(e>0){for(;y<e;y++)r.push(y),i.push(a),a+=t(y),c.push(a);y=Math.max(l,e)}for(;r.push(y),i.push(a),a+=t(y),c.push(a),!(c[c.length-1]>=o);)y++;return{visible:r,start:i,end:c}}var b=function(e){const t=Object(l.useRef)(null),n=Object(l.useRef)(null),r=Object(l.useRef)(null),i=Object(l.useState)({x:5e3,y:5e3}),b=Object(a.a)(i,2),v=b[0],w=b[1],m=Object(l.useState)({x:0,y:0}),p=Object(a.a)(m,2),j=p[0],O=p[1],C=Object(l.useState)({x1:-1,y1:-1,x2:-1,y2:-1}),k=Object(a.a)(C,2),S=k[0],M=k[1],R=Object(l.useState)({x1:-1,y1:-1,x2:-1,y2:-1}),A=Object(a.a)(R,2),E=A[0],L=A[1],D=Object(l.useState)({x:-1,y:-1}),T=Object(a.a)(D,2),z=T[0],F=T[1],B=Object(l.useState)(""),H=Object(a.a)(B,2),I=H[0],W=H[1],Y=Object(l.useState)(!1),K=Object(a.a)(Y,2),X=K[0],P=K[1],N=Object(l.useState)(!1),U=Object(a.a)(N,2),_=U[0],J=U[1],q=Object(l.useState)(!1),G=Object(a.a)(q,2),Q=G[0],V=G[1],Z=Object(l.useState)(!1),$=Object(a.a)(Z,2),ee=$[0],te=$[1],ne=Object(l.useState)(null),le=Object(a.a)(ne,2),oe=le[0],re=le[1],ie=Object(l.useState)(null),ce=Object(a.a)(ie,2),ae=ce[0],ye=ce[1],se=Object(l.useState)(!1),fe=Object(a.a)(se,2),ue=fe[0],he=fe[1],xe=Object(l.useState)(!1),de=Object(a.a)(xe,2),ge=de[0],be=de[1],ve=Object(l.useState)({x:-1,y:-1,hitTarget:null}),we=Object(a.a)(ve,2),me=we[0],pe=we[1],je=f({ref:t}),Oe=je.width,Ce=void 0===Oe?3e3:Oe,ke=je.height,Se=void 0===ke?3e3:ke,Me=e.freezeColumns||0,Re=e.freezeRows||0,Ae={textAlign:"left",fontSize:13,marginRight:5,marginLeft:5,color:"#000",fontFamily:"sans-serif",weight:""},Ee=h(e.cellWidth,100),Le=h(e.cellHeight,22),De=h(e.columnHeaders,null),Te=x(e.readOnly,!1),ze=x(e.sourceData,null),Fe=x(e.displayData,null),Be=x(e.editData,null),He=x(e.cellStyle,Ae),Ie=g(Me,Ee,50,j.x,Ce),We=Ie.visible,Ye=Ie.start,Ke=Ie.end,Xe=g(Re,Le,22,j.y,Se),Pe=Xe.visible,Ne=Xe.start,Ue=Xe.end,_e=(t,l,o,r,i=!0)=>{if(M({x1:t,y1:l,x2:o,y2:r}),i){const e={x:j.x,y:j.y};let t=-1,l=-1;if(!We.includes(o)||We[We.length-1]===o){const n=We[We.length-1]<=o?1:-1,l=Math.max(j.x,Me)+n;e.x=l,t=30*l}if(!Pe.includes(r)||Pe[Pe.length-1]===r){const t=Pe[Pe.length-1]<=r?1:-1,n=Math.max(j.y,Re)+t;e.y=n,l=30*n}e.x===j.x&&j.y===e.y||(O({x:e.x,y:e.y}),setTimeout(()=>{n.current&&(-1!==t&&(n.current.scrollLeft=t),-1!==l&&(n.current.scrollTop=l))},0))}if(e.onSelectionChanged){let n=t,i=l,c=o,a=r;n>c&&(n=o,c=t),i>a&&(i=r,a=l),e.onSelectionChanged(n,i,c,a)}},Je=(e,t)=>{let n=0,l=0;for(let o=0;o<We.length;o++)if(e>=Ye[o]&&e<=Ke[o]){n=We[o];break}for(let o=0;o<Pe.length;o++)if(t>=Ne[o]&&t<=Ue[o]){l=Pe[o];break}return{x:n,y:l}},qe=(e,t)=>{let n=50;const l=We.findIndex(t=>t===e);if(-1!==l)n=Ye[l];else{for(let e=0;e<j.x;e++)n-=Ee(e);for(let t=0;t<e;t++)n+=Ee(t)}let o=22;const r=Pe.findIndex(e=>e===t);if(-1!==r)o=Ne[r];else{for(let e=0;e<j.y;e++)o-=Le(e);for(let e=0;e<t;e++)o+=Le(e)}return{x:n,y:o}},Ge=Object(l.useMemo)(()=>{if(-1!==S.x2&&-1!==S.y2){let e=S.x2;S.x1>S.x2&&(e=S.x1);let t=S.y2;S.y1>S.y2&&(t=S.y1);const n=qe(e,t);return{x:n.x+Ee(e),y:n.y+Le(t)}}return{x:-1,y:-1}},[S,Pe,We]),Qe=Object(l.useMemo)(()=>{const e={},n=t.current;if(!n)return e;u(n);let l=22;var o,r=Object(y.a)(Pe);try{for(r.s();!(o=r.n()).done;){const t=o.value;let n=50;var i,c=Object(y.a)(We);try{for(c.s();!(i=c.n()).done;){const o=i.value,r=Fe(o,t);if(null===r||void 0===r){n+=Ee(o);continue}const c=n,u=l+.5*Le(t);if(Array.isArray(r)){var a,s=Object(y.a)(r);try{for(s.s();!(a=s.n()).done;){const n=a.value;if(n.onClick){const l=c+n.x,r=u+n.y,i=l+n.width,a=r+n.height,y={cellX:o,cellY:t,x:l,y:r,w:n.width,h:n.height,onClick:n.onClick},s=Math.floor(l/10),f=Math.floor(i/10),h=Math.floor(r/10),x=Math.floor(a/10);for(let t=s;t<=f;t++){e[t]||(e[t]={});const n=e[t];for(let e=h;e<=x;e++)n[e]||(n[e]=[]),n[e].push(y)}}}}catch(f){s.e(f)}finally{s.f()}}n+=Ee(o)}}catch(f){c.e(f)}finally{c.f()}l+=Le(t)}}catch(f){r.e(f)}finally{r.f()}return e},[Fe,e.cellWidth,e.cellHeight,j.x,j.y]);Object(l.useEffect)(()=>{const e=t.current,n=e.getContext("2d");let l=window.requestAnimationFrame(()=>{u(e),n.clearRect(0,0,n.canvas.width,n.canvas.height),n.fillStyle="white",n.fillRect(0,0,n.canvas.width,n.canvas.height);let t=22;var l,o=Object(y.a)(Pe);try{for(o.s();!(l=o.n()).done;){const e=l.value;let o=50;var r,i=Object(y.a)(We);try{for(i.s();!(r=i.n()).done;){const l=r.value,i=He(l,e);i.fillColor&&(n.fillStyle=i.fillColor,n.fillRect(o,t,Ee(l),Le(e))),o+=Ee(l)}}catch(F){i.e(F)}finally{i.f()}t+=Le(e)}}catch(F){o.e(F)}finally{o.f()}let c=!1,a=S.x1,s=S.x2;S.x1>S.x2&&(a=S.x2,s=S.x1);let f=S.y1,h=S.y2;S.y1>S.y2&&(f=S.y2,h=S.y1);const x=-1!==a&&-1!==s&&-1!==f&&-1!==h,g=qe(a,f),b=qe(s,h);if(b.x+=Ee(s),b.y+=Le(h),g.x>=b.x){b.x=g.x;let e=a;for(;We.includes(e);)b.x+=Ee(e),e++;c=!0}if(g.y>=b.y){b.y=g.y;let e=f;for(;Pe.includes(e);)b.y+=Le(e),e++;c=!0}x&&(n.fillStyle="#e9f0fd",n.fillRect(g.x,g.y,b.x-g.x,b.y-g.y)),n.fillStyle="#f8f9fa",n.fillRect(0,0,50,n.canvas.height),x&&(n.fillStyle="#e8eaed",n.fillRect(0,g.y,50,b.y-g.y)),n.fillStyle="#f8f9fa",n.fillRect(0,0,n.canvas.width,22),x&&(n.fillStyle="#e8eaed",n.fillRect(g.x,0,b.x-g.x,22)),n.strokeStyle="#e2e3e3",n.lineWidth=1;let v=50;var w,m=Object(y.a)(We);try{for(m.s();!(w=m.n()).done;){const e=w.value;n.beginPath(),n.moveTo(v,0),n.lineTo(v,n.canvas.height),n.stroke(),v+=Ee(e)}}catch(F){m.e(F)}finally{m.f()}let p=22;var j,O=Object(y.a)(Pe);try{for(O.s();!(j=O.n()).done;){const e=j.value;n.beginPath(),n.moveTo(0,p),n.lineTo(n.canvas.width,p),n.stroke(),p+=Le(e)}}catch(F){O.e(F)}finally{O.f()}p=22,n.textBaseline="middle",n.textAlign="center",n.font=Ae.fontSize+"px "+Ae.fontFamily,n.fillStyle="#666666";var C,k=Object(y.a)(Pe);try{for(k.s();!(C=k.n()).done;){const e=C.value,t=25,l=p+.5*Le(e),o=e+1;n.fillText(o,t,l),p+=Le(e)}}catch(F){k.e(F)}finally{k.f()}v=50,n.textBaseline="middle",n.textAlign="center";var M,R=Object(y.a)(We);try{for(R.s();!(M=R.n()).done;){const e=M.value,t=v+.5*Ee(e),l=11,o=De(e);let r={},i=null;"object"===typeof o&&null!==o&&o.headerCellStyle&&(r=o.headerCellStyle),i="object"===typeof o&&null!==o?o.cellContent:o,r.color=r.color||"#666666",r.fontSize=r.fontSize||Ae.fontSize,r.fontFamily=r.fontFamily||Ae.fontFamily,r.weight=r.weight||Ae.weight,n.font=r.weight+r.fontSize+"px "+r.fontFamily,n.fillStyle=r.color,null!==i&&void 0!==i||(i=e+1),n.fillText(i,t,l),v+=Ee(e)}}catch(F){R.e(F)}finally{R.f()}if(x&&(n.strokeStyle="#1b73e7",n.lineWidth=1,n.beginPath(),n.rect(g.x,g.y,b.x-g.x,b.y-g.y),n.stroke()),Q){let e=E.x1,t=E.x2;E.x1>E.x2&&(e=E.x2,t=E.x1);let l=E.y1,o=E.y2;E.y1>E.y2&&(l=E.y2,o=E.y1);const r=qe(e,l),i=qe(t+1,o+1);n.strokeStyle="#707070",n.setLineDash([3,3]),n.lineWidth=1,n.beginPath(),n.rect(r.x,r.y-1,i.x-r.x,i.y-r.y),n.stroke(),n.setLineDash([])}x&&!c&&(n.fillStyle="#1b73e7",n.fillRect(b.x-3,b.y-3,6,6)),n.textBaseline="middle";let A=22;var L,D=Object(y.a)(Pe);try{for(D.s();!(L=D.n()).done;){const e=L.value;let t=50;const l=Le(e);var T,z=Object(y.a)(We);try{for(z.s();!(T=z.n()).done;){const o=T.value,r=Fe(o,e),i=Ee(o);if(null!==r&&void 0!==r){const c=He(o,e);d(n,r,c,Ae,t,A,i,l)}t+=i}}catch(F){z.e(F)}finally{z.f()}A+=l}}catch(F){D.e(F)}finally{D.f()}});return()=>{window.cancelAnimationFrame(l)}},[e.displayData,j.x,j.y,S,Q,E,Ce,Se,oe,Ee,Le]);const Ve=()=>{r.current&&(r.current.focus({preventScroll:!0}),r.current.select())};Object(l.useEffect)(()=>{if(!ct)if(nt(),document.activeElement===r.current)Ve();else{const e=document.activeElement.tagName.toLowerCase();"div"===e&&"true"===document.activeElement.contentEditable||"input"===e||"textarea"===e||"select"===e||Ve()}});const Ze=e=>{if(!r)return;if(e.target!==r.current)return;e.preventDefault();const t=e.clipboardData||window.clipboardData,n=t.types;if(n.includes("text/html")){const e=t.getData("text/html");et(e)}else if(n.includes("text/plain")){const e=t.getData("text/plain");tt(e)}};Object(l.useEffect)(()=>(window.document.addEventListener("paste",Ze),()=>{window.document.removeEventListener("paste",Ze)}));const $e=e=>{var t,n=Object(y.a)(e.children);try{for(n.s();!(t=n.n()).done;){const e=t.value;if("TABLE"===e.nodeName)return e;const n=$e(e);if(n)return n}}catch(l){n.e(l)}finally{n.f()}},et=t=>{const n=document.createElement("div");n.innerHTML=t.trim();let l=-1,o=-1;if(-1!==S.x1&&-1===S.x2&&(l=S.x1),-1!==S.y1&&-1===S.y2&&(o=S.y1),-1!==S.x1&&-1!==S.x2&&(l=Math.min(S.x1,S.x2)),-1!==S.y1&&-1!==S.y2&&(o=Math.min(S.y1,S.y2)),-1===l||-1===o)return;let r=l,i=o;const c=[],a=$e(n);if(!a)return;var s,f=Object(y.a)(a.children);try{for(f.s();!(s=f.n()).done;){const e=s.value;if("TBODY"===e.nodeName){var u,h=Object(y.a)(e.children);try{for(h.s();!(u=h.n()).done;){const e=u.value;if(r=l,"TR"===e.nodeName){var x,d=Object(y.a)(e.children);try{for(d.s();!(x=d.n()).done;){const e=x.value;"TD"===e.nodeName&&(c.push({y:i,x:r,value:e.innerHTML}),r++)}}catch(g){d.e(g)}finally{d.f()}i++}}}catch(g){h.e(g)}finally{h.f()}}}}catch(g){f.e(g)}finally{f.f()}e.onChange&&e.onChange(c),_e(l,o,r-1,i-1,!1)},tt=t=>{let n=-1,l=-1;if(-1!==S.x1&&-1===S.x2&&(n=S.x1),-1!==S.y1&&-1===S.y2&&(l=S.y1),-1!==S.x1&&-1!==S.x2&&(n=Math.min(S.x1,S.x2)),-1!==S.y1&&-1!==S.y2&&(l=Math.min(S.y1,S.y2)),-1===n||-1===l)return;const o=t.split(/\r?\n/);let r=n,i=l+o.length-1;const c=[];for(let e=0;e<o.length;e++){const t=o[e].split("\t");n+t.length-1>r&&(r=n+t.length-1);for(let o=0;o<t.length;o++)c.push({y:l+e,x:n+o,value:t[o]})}e.onChange&&e.onChange(c),_e(n,l,r,i,!1)},nt=()=>{if(-1===S.x1||-1===S.y1||-1===S.x2||-1===S.y2)return;let e=S.y1,t=S.y2;e>t&&(e=S.y2,t=S.y1);let n=S.x1,l=S.x2;n>l&&(n=S.x2,l=S.x1);const o=[];for(let r=e;r<=t;r++){const e=[];for(let t=n;t<=l;t++){const n=Be(t,r);null!==n&&void 0!==n?e.push(n):e.push("")}o.push(e.join("\t"))}const i=o.join("\n");r.current&&(r.current.value=i)},lt=()=>{e.onChange&&e.onChange([{x:z.x,y:z.y,value:I}]),F({x:-1,y:-1})},ot=e=>{if(Te(e.x,e.y))return;const t=Be(e.x,e.y);let n="";null!==t&&void 0!==t&&(n=t),F(e),W(n)},rt=t=>{if(Q){let t=S.x1,n=S.x2;S.x1>S.x2&&(t=S.x2,n=S.x1);let l=S.y1,o=S.y2;S.y1>S.y2&&(l=S.y2,o=S.y1);let r=E.x1,i=E.x2;E.x1>E.x2&&(r=E.x2,i=E.x1);let c=E.y1,a=E.y2;E.y1>E.y2&&(c=E.y2,a=E.y1);let y=r,s=c,f=i,u=a;const h=[];if(f-y===n-t){s===l?s=o+1:u=l-1;let e=l;for(let t=s;t<=u;t++){for(let n=y;n<=f;n++){const l=ze(n,e);h.push({x:n,y:t,value:l})}e+=1,e>o&&(e=l)}}else{y===t?y=n+1:f=t-1;let e=t;for(let l=y;l<=f;l++){for(let t=s;t<=u;t++){const n=ze(e,t);h.push({x:l,y:t,value:n})}e+=1,e>n&&(e=t)}}e.onChange&&e.onChange(h),_e(E.x1,E.y1,E.x2,E.y2)}if(te(!1),he(!1),be(!1),V(!1),re(null),ye(null),-1!==me.x&&-1!==me.y&&null!==me.hitTarget){const e=t.target.getBoundingClientRect(),n=t.clientX-e.left,l=t.clientY-e.top,o=me.hitTarget;o.x<=n&&n<=o.x+o.w&&o.y<=l&&l<=o.y+o.h&&o.onClick(),pe({x:-1,y:-1,hitTarget:null})}};Object(l.useEffect)(()=>(window.addEventListener("mouseup",rt),()=>{window.removeEventListener("mouseup",rt)}));const it=t=>{const n=t.target.getBoundingClientRect(),l=t.clientX-n.left,o=t.clientY-n.top;window.document.body.style.cursor="auto";const r=Math.floor(l/10),i=Math.floor(o/10);if(Qe[r]&&Qe[r][i]){var c,a=Object(y.a)(Qe[r][i]);try{for(a.s();!(c=a.n()).done;){const e=c.value;e.x<=l&&l<=e.x+e.w&&e.y<=o&&o<=e.y+e.h&&(window.document.body.style.cursor="pointer")}}catch(x){a.e(x)}finally{a.f()}}if(e.onCellWidthChange&&o<22){let e=50;var s,f=Object(y.a)(We);try{for(f.s();!(s=f.n()).done;){const t=s.value;if(Math.abs(e-l)<4){window.document.body.style.cursor="col-resize";break}e+=Ee(t)}}catch(x){f.e(x)}finally{f.f()}}if(e.onCellHeightChange&&l<50){let e=22;var u,h=Object(y.a)(Pe);try{for(h.s();!(u=h.n()).done;){const t=u.value;if(Math.abs(e-o)<4){window.document.body.style.cursor="row-resize";break}e+=Le(t)}}catch(x){h.e(x)}finally{h.f()}}if(Math.abs(l-Ge.x)<6&&Math.abs(o-Ge.y)<6&&(window.document.body.style.cursor="crosshair"),oe){if(e.onCellWidthChange){const t=Math.max(oe.oldWidth+l-oe.startX,50);e.onCellWidthChange(oe.colIdx,t)}}else if(ae){if(e.onCellHeightChange){const t=Math.max(ae.oldHeight+o-ae.startY,22);e.onCellHeightChange(ae.rowIdx,t)}}else{if(ee){const e=Je(l,o);ue?_e(S.x1,S.y1,S.x2,e.y,!1):ge?_e(S.x1,S.y1,e.x,S.y2,!1):_e(S.x1,S.y1,e.x,e.y)}if(Q){window.document.body.style.cursor="crosshair";const e=Je(l,o);let t=S.x1,n=S.y1,r=S.x2,i=S.y2;t>r&&(t=S.x2,r=S.x1),n>i&&(n=S.y2,i=S.y1),Math.abs(e.x-.5*(t+r))<Math.abs(e.y-.5*(n+i))?e.y<n?n=e.y:i=e.y:e.x<t?t=e.x:r=e.x,L({x1:t,y1:n,x2:r,y2:i})}}},ct=-1!==z.x&&-1!==z.y;let at={x:0,y:0},yt=0,st=0,ft="right";if(ct){at=qe(z.x,z.y);const e=He(z.x,z.y);at.x+=1,at.y+=1,yt=Ee(z.x)-2,st=Le(z.y)-2,ft=e.textAlign||Ae.textAlign}return o.a.createElement("div",{style:{position:"relative",height:"100%"}},o.a.createElement("canvas",{style:{width:"calc(100% - 14px)",height:"calc(100% - 15px)",outline:"1px solid #ddd"},ref:t}),o.a.createElement("div",{ref:n,onDoubleClick:e=>{const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,l=e.clientY-t.top,o=Je(n,l);P(!1),ot(o)},onMouseDown:e=>{if(0!==e.button)return;const t=e.target.getBoundingClientRect(),n=e.clientX-t.left,l=e.clientY-t.top;if(n>Ce||l>Se)return;const o=Math.floor(n/10),r=Math.floor(l/10);if(Qe[o]&&Qe[o][r]){var i,a=Object(y.a)(Qe[o][r]);try{for(a.s();!(i=a.n()).done;){const e=i.value;if(e.x<=n&&n<=e.x+e.w&&e.y<=l&&l<=e.y+e.h)return void pe({x:n,y:l,hitTarget:e})}}catch(b){a.e(b)}finally{a.f()}}if(l<22){let e=50;var s,f=Object(y.a)(We);try{for(f.s();!(s=f.n()).done;){const t=s.value;if(Math.abs(e-n)<4)return window.document.body.style.cursor="col-resize",void re({startX:e,oldWidth:Ee(t-1),colIdx:t-1});e+=Ee(t)}}catch(b){f.e(b)}finally{f.f()}}if(n<50){let e=22;var u,h=Object(y.a)(Pe);try{for(h.s();!(u=h.n()).done;){const t=u.value;if(Math.abs(e-l)<4)return window.document.body.style.cursor="row-resize",void ye({startY:e,oldHeight:Le(t-1),rowIdx:t-1});e+=Le(t)}}catch(b){h.e(b)}finally{h.f()}}if(Math.abs(n-Ge.x)<6&&Math.abs(l-Ge.y)<6)return V(!0),void L({x1:S.x1,y1:S.y1,x2:S.x2,y2:S.y2});const x=Je(n,l),d=_?{x:S.x1,y:S.y1}:Object(c.a)({},x);ct&&lt();let g=!0;n<50?(x.x=100,g=!1,he(!0)):he(!1),l<22?(x.y=100,g=!1,be(!0)):be(!1),te(!0),_e(d.x,d.y,x.x,x.y,g),F({x:-1,y:-1})},onMouseMove:it,onMouseLeave:e=>{window.document.body.style.cursor="auto"},onContextMenu:t=>{if(!e.onRightClick)return;const n=t.target.getBoundingClientRect(),l=t.clientX-n.left,o=t.clientY-n.top,r=Je(l,o);t.cellX=r.x,t.cellY=r.y,o>22&&l>50&&(it(t),e.onRightClick(t))},onScroll:e=>{const t=e.target.scrollLeft,n=e.target.scrollTop,l=Math.floor(t/30),o=Math.floor(n/30);l===j.x&&o===j.y||O({x:l,y:o});let r=Object(c.a)({},v);v.x/(t+.5)<1&&(r.x*=1.5),v.y/(n+.5)<1&&(r.y*=1.5),r.x===v.x&&v.y===r.y||w(Object(c.a)({},r))},className:s,style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,overflow:"scroll",borderBottom:"1px solid #ddd"}},o.a.createElement("div",{style:{position:"absolute",left:0,top:0,width:1,height:v.y+2e3,backgroundColor:"rgba(0,0,0,0.0)"}}),o.a.createElement("div",{style:{position:"absolute",left:0,top:0,width:v.x+5e3,height:1,backgroundColor:"rgba(0,0,0,0.0)"}})),o.a.createElement("textarea",{style:{position:"absolute",top:0,left:0,width:1,height:1,opacity:.01},ref:r,onFocus:e=>e.target.select(),autoFocus:!0,tabIndex:"0",onKeyDown:t=>{if(ct&&X&&["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"].includes(t.key))lt();else if("Shift"!==t.key){if((!t.metaKey&&!t.ctrlKey||"v"!==String.fromCharCode(t.which).toLowerCase())&&(!t.metaKey&&!t.ctrlKey||"c"!==String.fromCharCode(t.which).toLowerCase()))if("Backspace"!==t.key&&"Delete"!==t.key){if(-1!==S.x1&&-1!==S.x2&&-1!==S.y1&&-1!==S.y2){if(t.keyCode>=48&&t.keyCode<=57||t.keyCode>=96&&t.keyCode<=105||t.keyCode>=65&&t.keyCode<=90||"Enter"===t.key||"-"===t.key||"."===t.key||","===t.key)return Te(S.x1,S.y1)?void t.preventDefault():(ot({x:S.x1,y:S.y1}),void P("Enter"!==t.key));if(["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"].includes(t.key)){let e={x:S.x1,y:S.y1},n={x:S.x2,y:S.y2};return"ArrowRight"===t.key||"Tab"===t.key?n.x+=1:"ArrowLeft"===t.key?n.x-=1:"ArrowUp"===t.key?n.y-=1:"ArrowDown"===t.key&&(n.y+=1),n.x<0&&(n.x=0),n.y<0&&(n.y=0),t.shiftKey||(e=Object(c.a)({},n)),void _e(e.x,e.y,n.x,n.y)}t.preventDefault()}}else{let t=S.x1,n=S.y1,l=S.x2,o=S.y2;t>l&&(t=S.x2,l=S.x1),n>o&&(n=S.y2,o=S.y1);const r=[];for(let e=n;e<=o;e++)for(let n=t;n<=l;n++)r.push({x:n,y:e,value:null});e.onChange&&e.onChange(r)}}else J(!0)},onKeyUp:e=>{J(e.shiftKey)}}),ct&&o.a.createElement("input",{type:"text",onFocus:e=>e.target.select(),autoFocus:!0,onKeyDown:e=>{if("Escape"!==e.key){if("Enter"===e.key&&(lt(),_e(S.x1,S.y1+1,S.x1,S.y1+1)),"Tab"===e.key&&(e.preventDefault(),lt(),_e(S.x1+1,S.y1,S.x1+1,S.y1)),X&&["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"].includes(e.key)){e.preventDefault(),lt();let t=S.x1,n=S.y1,l=S.x1,o=S.y1;"ArrowRight"===e.key?(t=S.x1+1,l=S.x1+1):"ArrowLeft"===e.key?(t=S.x1-1,l=S.x1-1):"ArrowUp"===e.key?(n=S.y1-1,o=S.y1-1):"ArrowDown"===e.key&&(n=S.y1+1,o=S.y1+1),_e(t,n,l,o)}}else F({x:-1,y:-1})},value:I,onChange:e=>W(e.target.value),style:{position:"absolute",top:at.y,left:at.x,width:yt,height:st,outline:"none",border:"none",textAlign:ft,color:"black",fontSize:Ae.fontSize,fontFamily:"sans-serif"}}))};n(13);var v=()=>o.a.createElement(b,null);i.a.render(o.a.createElement(v,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)},8:function(e,t,n){}},[[7,1,2]]]);
//# sourceMappingURL=main.61593f6c.chunk.js.map