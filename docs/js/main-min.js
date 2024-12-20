import{openDrop}from"./module/openDrop.js";import{initQuiz}from"./module/initQuiz.js";import{newQuiz}from"./module/newQuiz.js";import{toggleActiveClass}from"./module/toggleActiveClass.js";import{handleResize}from"./module/handleResize.js";import{initTabLogic}from"./module/initTabLogic.js";if(document.querySelector("#openSearch")){const e=document.querySelector("#openSearch");e.addEventListener("click",()=>{openDrop(e,!1)})}if(document.querySelector("#openDrop1")){const e=document.querySelector("#openDrop1");e.addEventListener("click",()=>{openDrop(e,!1)})}if(document.querySelectorAll(".swiper-container").length&&document.querySelectorAll(".swiper-container").forEach(e=>{const r=e.querySelector(".swiper"),o=e.querySelector(".swiper-wrapper"),t=e.querySelector(".slider-hero__swiper-button-next, .slider-partners__swiper-button-next"),i=e.querySelector(".slider-hero__swiper-button-prev, .slider-partners__swiper-button-prev");if(!o)return;const n=e.classList.contains("slider-hero"),c=e.classList.contains("box-swiper"),s=c?e.querySelector(".box-swiper__swiper-button-next"):null,l=c?e.querySelector(".box-swiper__swiper-button-prev"):null;new Swiper(r,{spaceBetween:n?30:c?10:15,slidesPerView:n?1:c?1:2,effect:n?"fade":"slide",fadeEffect:n?{crossFade:!0}:void 0,navigation:{nextEl:l||i||null,prevEl:s||t||null},breakpoints:{650:{slidesPerView:n?1:c?2:4},900:{slidesPerView:n?1:c?3:5,spaceBetween:15},1210:{spaceBetween:n?30:c?23:20,slidesPerView:n?1:c?3:6}},on:{init:function(){const e=r.querySelector(".loaded");e&&e.classList.remove("loaded")}}})}),document.querySelector(".quiz-container")&&document.querySelectorAll(".quiz-container__question")&&newQuiz(),document.querySelector(".header__burger")&&document.querySelector(".header__box-info")&&toggleActiveClass({buttonClass:"header__burger",targetClass:"header__box-info",closeOnLinkClick:!0,linkSelector:"a"}),document.querySelector(".main-section-3__btn")&&document.querySelector(".main-section-3__top")&&document.querySelector(".main-section-3__mobil-hidden")){const e=document.querySelector(".main-section-3__btn"),r=document.querySelector(".main-section-3__top"),o=document.querySelector(".main-section-3__mobil-hidden");handleResize(o,e,r,512),window.addEventListener("resize",()=>handleResize(o,e,r,512))}if(document.querySelector(".box-swiper__link")&&document.querySelector(".box-swiper__top-line")&&document.querySelector(".box-swiper__mobail-hidden")){const e=document.querySelector(".box-swiper__link"),r=document.querySelector(".box-swiper__top-line"),o=document.querySelector(".box-swiper__mobail-hidden");handleResize(o,e,r,650),window.addEventListener("resize",()=>handleResize(o,e,r,650))}if(document.querySelector("#swiper-5")&&document.querySelector("#swiper-5 > .swiper-wrapper")&&document.querySelectorAll("#swiper-5 > .swiper-slide")&&document.querySelector("#swiper-6")&&document.querySelector("#swiper-6 > .swiper-wrapper")&&document.querySelectorAll("#swiper-6 > .swiper-slide")){const e=new Swiper("#swiper-6",{spaceBetween:17,slidesPerView:4,freeMode:!1});new Swiper("#swiper-5",{spaceBetween:10,navigation:{nextEl:".product-card-section-1__button-prev",prevEl:".product-card-section-1__button-next"},thumbs:{swiper:e}})}document.querySelector(".box-info")&&initTabLogic(".box-info");