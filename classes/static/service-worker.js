if(!self.define){let e,n={};const i=(i,c)=>(i=new URL(i+".js",c).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let o={};const a=e=>i(e,r),t={module:{uri:r},exports:o,require:a};n[r]=Promise.all(c.map((e=>t[e]||a(e)))).then((e=>(s(...e),o)))}}define(["./workbox-8bf5e0ce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"abcd44cc67d428b30af6.jpg",revision:null},{url:"account.93447167.chunk.js",revision:null},{url:"administration.21b08f7d.chunk.js",revision:null},{url:"content/account.93447167f23c2a8f422b.css",revision:null},{url:"content/administration.21b08f7de58735d299b3.css",revision:null},{url:"content/css/loading.css",revision:"599a5041670ab722ae6e7852b2863034"},{url:"content/images/QR_huy.jpg",revision:"81255308c02b473d6bd6bb90493a6f68"},{url:"content/images/QR_ut.jpg",revision:"45627a2e0ca40dc42a15db5bbaf62c3f"},{url:"content/images/anh_co_dau.jpg",revision:"9ca5785d3a69980833bec3980916ab8a"},{url:"content/images/back_2.jpg",revision:"598c667bfecc9b93ad028177f73708a0"},{url:"content/images/jhipster_family_member_0.svg",revision:"068483b5e9a98559fe8b9755f577c433"},{url:"content/images/layout_link.jpg",revision:"b4e009ff57865dd4e6c5c65feb9ad679"},{url:"content/images/slides/sl06.jpg",revision:"9ca5785d3a69980833bec3980916ab8a"},{url:"content/images/wedding-ring.png",revision:"db04f0629158d6d710eca5310303a661"},{url:"content/images/wellcome.jpg",revision:"412706177150b74032230a9fe82e9279"},{url:"content/main.c67b55f5ce94fdc2df85.css",revision:null},{url:"favicon.ico",revision:"913de1b97435ae662d33c2e4b9de7295"},{url:"index.html",revision:"14ffb7bf56c78ae340023945f252a3b5"},{url:"main.4be4a26f.js",revision:null},{url:"main.4be4a26f.js.LICENSE.txt",revision:"976e980c44ae4a3c1c04dbdaa1f99778"},{url:"manifest.webapp",revision:"de001370b12639ba2d3a5c3834fc0a5f"},{url:"robots.txt",revision:"436c49a4c39946fadc049d85acde335e"}],{})}));
