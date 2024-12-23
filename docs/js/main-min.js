import{openDrop}from"./module/openDrop.js";import{initQuiz}from"./module/initQuiz.js";import{newQuiz}from"./module/newQuiz.js";import{toggleActiveClass}from"./module/toggleActiveClass.js";import{handleResize}from"./module/handleResize.js";import{initTabLogic}from"./module/initTabLogic.js";import{handleSwiperClasses}from"./module/handleSwiperClasses.js";if(document.querySelector("#openSearch")){const e=document.querySelector("#openSearch");e.addEventListener("click",()=>{openDrop(e,!1)})}if(document.querySelector("#openDrop1")){const e=document.querySelector("#openDrop1");e.addEventListener("click",()=>{openDrop(e,!1)})}if(document.querySelectorAll(".swiper-container").length&&document.querySelectorAll(".swiper-container").forEach(e=>{const t=e.querySelector(".swiper"),o=e.querySelector(".swiper-wrapper"),r=e.querySelector(".slider-hero__swiper-button-next, .slider-partners__swiper-button-next"),n=e.querySelector(".slider-hero__swiper-button-prev, .slider-partners__swiper-button-prev");if(!o)return;const i=e.classList.contains("slider-hero"),s=e.classList.contains("box-swiper"),c=s?e.querySelector(".box-swiper__swiper-button-next"):null,l=s?e.querySelector(".box-swiper__swiper-button-prev"):null;new Swiper(t,{spaceBetween:i?30:s?10:15,slidesPerView:i?1:s?1:2,effect:i?"fade":"slide",fadeEffect:i?{crossFade:!0}:void 0,navigation:{nextEl:l||n||null,prevEl:c||r||null},breakpoints:{650:{slidesPerView:i?1:s?2:4},900:{slidesPerView:i?1:s?3:5,spaceBetween:15},1210:{spaceBetween:i?30:s?23:20,slidesPerView:i?1:s?3:6}},on:{init:function(){const e=t.querySelector(".loaded");e&&e.classList.remove("loaded")}}})}),document.querySelector(".quiz-container")&&document.querySelectorAll(".quiz-container__question")&&newQuiz(),document.querySelector(".header__burger")&&document.querySelector(".header__box-info")&&toggleActiveClass({buttonClass:"header__burger",targetClass:"header__box-info",closeOnLinkClick:!0,linkSelector:"a"}),document.querySelector(".main-section-3__btn")&&document.querySelector(".main-section-3__top")&&document.querySelector(".main-section-3__mobil-hidden")){const e=document.querySelector(".main-section-3__btn"),t=document.querySelector(".main-section-3__top"),o=document.querySelector(".main-section-3__mobil-hidden");handleResize(o,e,t,512),window.addEventListener("resize",()=>handleResize(o,e,t,512))}if(document.querySelector(".box-swiper__link")&&document.querySelector(".box-swiper__top-line")&&document.querySelector(".box-swiper__mobail-hidden")){const e=document.querySelector(".box-swiper__link"),t=document.querySelector(".box-swiper__top-line"),o=document.querySelector(".box-swiper__mobail-hidden");handleResize(o,e,t,650),window.addEventListener("resize",()=>handleResize(o,e,t,650))}if(document.querySelector("#swiper-5")&&document.querySelector("#swiper-5 > .swiper-wrapper")&&document.querySelectorAll("#swiper-5 > .swiper-slide")&&document.querySelector("#swiper-6")&&document.querySelector("#swiper-6 > .swiper-wrapper")&&document.querySelectorAll("#swiper-6 > .swiper-slide")){const e=new Swiper("#swiper-6",{spaceBetween:17,slidesPerView:4,freeMode:!1});new Swiper("#swiper-5",{spaceBetween:10,navigation:{nextEl:".product-card-section-1__button-prev",prevEl:".product-card-section-1__button-next"},thumbs:{swiper:e}})}document.querySelector(".box-info")&&initTabLogic(".box-info"),document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".quiz-container__question.question-6"),t=document.querySelector(".quiz-container__img"),o=document.querySelector(".quiz-container__form"),r=document.getElementById("contacts-form-7"),n=document.getElementById("quiz-navigation-1"),i=document.getElementById("quiz-navigation-2"),s=document.getElementById("prev-btn");if(!(e.length&&t&&o&&r&&n&&i&&s))return;const c=new MutationObserver(e=>{e.forEach(e=>{"attributes"===e.type&&"class"===e.attributeName&&(e.target.classList.contains("active")?(t.style.display="none",o.classList.add("question-6")):(t.style.display="",o.classList.remove("question-6")),r.classList.contains("active")?(n.style.display="none",i.insertBefore(s,i.firstChild)):(n.style.display="",n.insertBefore(s,n.firstChild)))})});e.forEach(e=>{c.observe(e,{attributes:!0})}),c.observe(r,{attributes:!0})}),document.querySelector("#swiper-7")&&document.addEventListener("DOMContentLoaded",()=>{let e;handleSwiperClasses("swiper-7",".about-company-section-4__list",900),window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{handleSwiperClasses("swiper-7",".about-company-section-4__list",900)},200)})});