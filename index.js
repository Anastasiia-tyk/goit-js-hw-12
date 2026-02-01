import{a as S,S as v,i as a}from"./assets/vendor-B-FnSNcE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const B="https://pixabay.com/api/",q="54459012-5e63b86c877094f2e2839be1c";async function f(r,o=1){const e={key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12,page:o};try{return(await S.get(B,{params:e})).data}catch(n){console.log(n)}}const p=document.querySelector(".gallery"),g=document.querySelector(".loader"),m=document.querySelector(".load-more"),P=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function h(r){const o=r.map(e=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
        <img 
        class="gallery-image" 
        src="${e.webformatURL}" 
        alt="${e.tags}" 
        loading="lazy"
        />
        </a>
        <div class="info">
        <p class="text-info"><b>Likes:</b>${e.likes}</p>
        <p class="text-info"><b>Views:</b>${e.views}</p>
        <p class="text-info"><b>Comments:</b>${e.comments}</p>
        <p class="text-info"><b>Downloads:</b>${e.downloads}</p>
        </div>
        </li>
`).join("");p.insertAdjacentHTML("beforeend",o),P.refresh()}function x(){p.innerHTML=""}function y(){g.classList.remove("is-hidden")}function b(){g.classList.add("is-hidden")}function L(){m.classList.remove("is-hidden")}function l(){m.classList.add("is-hidden")}const w=document.querySelector(".form"),R=document.querySelector(".load-more");let d="",i=1,u=0;w.addEventListener("submit",F);R.addEventListener("click",M);async function F(r){r.preventDefault();const o=r.target.elements["search-text"].value.trim();if(!o){a.error({message:"Please enter a search query!",position:"topRight"});return}d=o,i=1,x(),l(),y();try{const e=await f(d,i);if(u=e.totalHits,e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#EF4040",progressBar:"#B51B1B",messageColor:"#FFFFFF"});return}h(e.hits),u>15&&L()}catch(e){a.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}finally{b(),w.reset()}}async function M(){i+=1,y(),l();try{const r=await f(d,i);h(r.hits);const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"}),i*15>=u?(l(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L()}catch(r){a.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(r)}finally{b()}}
//# sourceMappingURL=index.js.map
