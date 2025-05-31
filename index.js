import{a as d,S as u,i as s}from"./assets/vendor-g8RIeo89.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="50582422-1579f90b4d4d4016b97d9d478",p="https://pixabay.com/api/";async function m(a){return(await d.get(p,{params:{key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(a){const o=a.map(t=>`
         <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${t.likes}</p>
            <p><b>Views</b> ${t.views}</p>
            <p><b>Comments</b> ${t.comments}</p>
            <p><b>Downloads</b> ${t.downloads}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function h(){l.innerHTML=""}function b(){c.style.display="block"}function L(){c.style.display="none"}const v="data:image/svg+xml;utf8,"+encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path fill="#FAFAFB" d="M6.81.219A.75.75 0 0 1 7.34 0h9.32a.75.75 0 0 1 .53.219l6.591 6.591a.75.75 0 0 1 .219.53v9.32a.75.75 0 0 1-.219.53l-6.591 6.591a.75.75 0 0 1-.53.219H7.34a.75.75 0 0 1-.53-.219L.219 17.19A.75.75 0 0 1 0 16.66V7.34a.75.75 0 0 1 .219-.53L6.81.219ZM7.65 1.5 1.5 7.65v8.7l6.15 6.15h8.7l6.15-6.15v-8.7L16.35 1.5h-8.7Z"/>
      <path fill="#FAFAFB" d="M6.969 6.969a.75.75 0 0 1 1.062 0L12 10.939l3.969-3.97a.75.75 0 1 1 1.062 1.062L13.061 12l3.97 3.969a.752.752 0 0 1-1.062 1.062L12 13.061l-3.969 3.97a.752.752 0 0 1-1.282-.531.751.751 0 0 1 .22-.531L10.939 12 6.97 8.031a.75.75 0 0 1 0-1.062Z"/>
    </svg>
    `),w=document.querySelector(".form");w.addEventListener("submit",async a=>{a.preventDefault();const o=a.target.elements["search-text"].value.trim();if(!o){s.warning({message:"Enter a search query!"});return}h(),b();try{const t=await m(o);t.hits.length===0?s.error({theme:"dark",title:"",message:"Sorry, there are no images matching<br>your search query.Please, try again!",position:"topRight",timeout:5e3,backgroundColor:"#ef4040",сolor:"#fafafb",iconUrl:v,icon:""}):(y(t.hits),a.target.elements["search-text"].value="")}catch(t){s.error({message:"An error occurred while loading images."}),console.error(t)}finally{L()}});
//# sourceMappingURL=index.js.map
