import{r as h,j as l,M as w,a as t,T as v,G as j,F as x,B as k,O as u,L as m,b as L,R as F,c as f,d as R,e as O}from"./vendor.6766b953.js";const T=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};T();const S=13,B={height:"100vh",width:"100%"},g={url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:`
    &copy; 
    <a href="https://www.openstreetmap.org/copyright">
      OpenStreetMap
    </a> 
    contributors'
  `},C=[-7.131098,-34.851901];function M(s){const[a,r]=h.exports.useState();return h.exports.useEffect(()=>{fetch(s.layer.pathToFetch).then(n=>n.json()).then(n=>r(n)).catch(n=>console.log(n))},[]),l(w,{center:C,zoom:S,style:B,children:[t(v,{url:g.url,attribution:g.attribution}),a&&t(j,{data:a,style:{color:s.layer.color||"blue"}})]})}var d={baseRoute:"/geojampa"},p=[{key:"bairros",name:"Bairros",pathToFetch:"https://raw.githubusercontent.com/paulovitorweb/geodata-jp/main/data/bairros.geojson"},{key:"pracas",name:"Pra\xE7as",pathToFetch:"https://raw.githubusercontent.com/paulovitorweb/geodata-jp/main/data/pracas.geojson"},{key:"parques",name:"Parques",pathToFetch:"https://raw.githubusercontent.com/paulovitorweb/geodata-jp/main/data/parques.geojson"},{key:"rios",name:"Rios",pathToFetch:"https://raw.githubusercontent.com/paulovitorweb/geodata-jp/main/data/rios.geojson"},{key:"cloviario",name:"Ciclovi\xE1rio",pathToFetch:"https://raw.githubusercontent.com/paulovitorweb/geodata-jp/main/data/ciclo.geojson"},{key:"fx-exclusiva",name:"Faixas exclusivas",pathToFetch:"https://raw.githubusercontent.com/paulovitorweb/geodata-jp/main/data/faixas_exclusivas.geojson"},{key:"corredores",name:"Corredores",pathToFetch:"https://raw.githubusercontent.com/paulovitorweb/geodata-jp/main/data/corredores.geojson"}];function y(s){const[a,r]=h.exports.useState(!1),n=()=>r(!1),e=()=>r(!0),i=(c=>p.filter(b=>b.key===c)[0])(s.layer);return l(x,{children:[t(k,{variant:"dark",size:"lg",onClick:e,className:"position-absolute top-0 end-0 opacity-75",style:{zIndex:900,margin:"10px 10px 0px 0px"},children:"Layers"}),t(M,{layer:i}),l(u,{show:a,onHide:n,children:[t(u.Header,{closeButton:!0,children:t(u.Title,{children:"GeoJampa Layers"})}),t(u.Body,{children:t(m,{variant:"flush",children:p.map(c=>l(m.Item,{action:!0,href:d.baseRoute+"/"+c.key,children:[" ",c.name]},c.key))})})]})]})}function E(){const s=p[0];return t(L,{children:l(F,{children:[t(f,{path:d.baseRoute,element:t(y,{layer:s.key})},"first-layer"),p.map(a=>{const{key:r}=a;return t(f,{path:`${d.baseRoute}/${r}`,element:t(y,{layer:r})},r)})]})})}function G(){return t(E,{})}R.render(t(O.StrictMode,{children:t(G,{})}),document.getElementById("root"));