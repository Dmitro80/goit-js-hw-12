import{a as m,s as b,i as n}from"./assets/vendor-da73009b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const e={form:document.querySelector(".js-search-form"),input:document.querySelector(".js-search-input"),gallery:document.querySelector(".js-gallery"),loadMoreBtn:document.querySelector(".js-load-more-btn"),loader:document.querySelector(".js-loader")};m.defaults.baseURL="https://pixabay.com/api/";const v="44774560-6cc9e3fc3beea571d43e1a675";async function g({q:o,page:t=1,per_page:i}={}){return(await m.get("/",{params:{key:v,q:encodeURIComponent(o),image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:i}})).data}function f(o){return o.map(({webformatURL:t,largeImageURL:i,tags:d,likes:r,views:a,comments:c,downloads:y})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img class="gallery-image" src="${t}" alt="${d}" width="360" height="152" />
            <ul class="description">
              <li class="description-items">
                <span class="accent">Likes </span>${r}
              </li>
              <li class="description-items">
                <span class="accent">Views </span>${a}
              </li>
              <li class="description-items">
                <span class="accent">Comments </span>${c}
              </li>
              <li class="description-items">
                <span class="accent">Downloads </span>${y}
              </li>
            </ul>
          </a>
        </li>`).join("")}function u(o){o.classList.remove("hidden")}function l(o){o.classList.add("hidden")}const h=new b(".js-gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),s={q:"",page:1,per_page:15,total_pages:0};l(e.loadMoreBtn);e.form.addEventListener("submit",C);async function C(o){if(o.preventDefault(),e.gallery.innerHTML="",s.page=1,e.loadMoreBtn.removeEventListener("click",p),l(e.loadMoreBtn),s.q=e.input.value.trim(),s.q==="")return n.error({message:"Search field can not be empty!",position:"topCenter",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"});u(e.loader);try{const t=await g(s);t.hits.length===0?(e.input.value="",n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"})):(s.total_pages=Math.ceil(t.totalHits/s.per_page),s.total_pages>1?(u(e.loadMoreBtn),e.loadMoreBtn.addEventListener("click",p)):(l(e.loadMoreBtn),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3,maxWidth:"432px"}),e.loadMoreBtn.removeEventListener("click",p)),e.input.value="",e.gallery.innerHTML=f(t.hits),h.refresh())}catch(t){n.error({message:`Something went wrong... Error: ${t}`,position:"topCenter",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"})}finally{l(e.loader)}}async function p(){u(e.loader),s.page+=1,l(e.loadMoreBtn);try{const o=await g(s);e.gallery.insertAdjacentHTML("beforeend",f(o.hits)),h.refresh();const t=document.querySelector(".gallery-item");if(t){const i=t.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}}catch(o){n.error({message:`Something went wrong... Error: ${o}`,position:"topCenter",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"})}finally{l(e.loader),s.page===s.total_pages?(e.loadMoreBtn.removeEventListener("click",p),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3,maxWidth:"432px"})):u(e.loadMoreBtn)}}
//# sourceMappingURL=commonHelpers.js.map
