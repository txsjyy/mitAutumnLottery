import{r,s as f,g as y}from"./UTA.4b15a0e1.js";import{a as k,r as S,w as b,b as v,e as i,t as c,u as d,o as w}from"./entry.ebb9cffb.js";const D={class:"flex gap-3 justify-center"},B={class:"font-mono text-9xl bg-slate-200 shadow-inner rounded p-2 text-center opacity-60"},C={class:"font-mono text-9xl bg-slate-200 shadow-inner rounded p-2 text-center opacity-60"},E={class:"font-mono text-9xl bg-slate-200 shadow-inner rounded p-2 text-center opacity-60"},N=k({__name:"DigitDisplay",props:{target:null},emits:["animation-start","animation-end"],setup(u,{emit:p}){const h=u,e=S(["0","0","0"]);return b(()=>h.target,l=>{p("animation-start");const m=l.toString().padStart(3,"0").split("").map(Number),a=r(0,3).map(t=>{const n=t===0?f(r(0,4)):f(r(0,10)),s=n.indexOf(m[t]),_=t===0?4*(t+7)+s:10*(t+7)+s;return{shuffled:n,ticks:_}}),o=[0,0,0],g=()=>{p("animation-end")},x=()=>a.forEach((t,n)=>{const s=n===0?Math.round(o[n])%4:Math.round(o[n])%10;e[n]=t.shuffled[s].toString(),e[n]=t.shuffled[s].toString()});y.timeline({onUpdate:x,onComplete:g}).to(o,{0:a[0].ticks,duration:5},0).to(o,{1:a[1].ticks,duration:6},0).to(o,{2:a[2].ticks,duration:7},0)}),(l,m)=>(w(),v("div",D,[i("div",B,c(d(e)[0]),1),i("div",C,c(d(e)[1]),1),i("div",E,c(d(e)[2]),1)]))}});export{N as _};
