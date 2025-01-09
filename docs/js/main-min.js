import{openDrop}from"./module/openDrop.js";import{initQuiz}from"./module/initQuiz.js";import{newQuiz}from"./module/newQuiz.js";import{toggleActiveClass}from"./module/toggleActiveClass.js";import{handleResize}from"./module/handleResize.js";import{initTabLogic}from"./module/initTabLogic.js";import{handleSwiperClasses}from"./module/handleSwiperClasses.js";import{initTabs}from"./module/initTabs.js";import{testWebP}from"./module/testWebP.js";import{playVideo}from"./module/playVideo.js";import{initCatalogTabs1}from"./module/initCatalogTabs1.js";import{handleSwiperControls}from"./module/handleSwiperControls.js";import{setupModal}from"./module/setupModal.js";if(testWebP(function(e){1==e?(document.querySelector("body").classList.add("webp"),console.log("выполнился webp")):document.querySelector("body").classList.add("no-webp")}),document.querySelector("#openSearch")){const e=document.querySelector("#openSearch");e.addEventListener("click",()=>{openDrop(e,!1)})}if(document.querySelector("#openAboutCompany")){const e=document.querySelector("#openAboutCompany");e.addEventListener("click",()=>{openDrop(e,!1)})}if(document.querySelector("#openDrop2")){const e=document.querySelector("#openDrop2");e.addEventListener("click",()=>{openDrop(e,".drop-down-1__item",!0,!0)})}if(document.querySelectorAll(".swiper-container").length&&document.querySelectorAll(".swiper-container").forEach(e=>{const t=e.querySelector(".swiper"),o=e.querySelector(".swiper-wrapper"),r=e.querySelector(".slider-hero__swiper-button-next, .slider-partners__swiper-button-next"),i=e.querySelector(".slider-hero__swiper-button-prev, .slider-partners__swiper-button-prev");if(!o)return;const s=e.classList.contains("slider-hero"),n=e.classList.contains("box-swiper"),l=n?e.querySelector(".box-swiper__swiper-button-next"):null,c=n?e.querySelector(".box-swiper__swiper-button-prev"):null;new Swiper(t,{spaceBetween:s?30:n?10:15,slidesPerView:s?1:n?1:2,effect:s?"fade":"slide",fadeEffect:s?{crossFade:!0}:void 0,navigation:{nextEl:c||i||null,prevEl:l||r||null},breakpoints:{650:{slidesPerView:s?1:n?2:4},900:{slidesPerView:s?1:n?3:5,spaceBetween:15},1210:{spaceBetween:s?30:n?23:20,slidesPerView:s?1:n?3:6}},on:{init:function(){const e=t.querySelector(".loaded");e&&e.classList.remove("loaded")}}})}),document.querySelector(".quiz-container")&&document.querySelectorAll(".quiz-container__question")&&newQuiz(),document.querySelector(".header__burger")&&document.querySelector(".header__box-info")&&toggleActiveClass({buttonClass:"header__burger",targetClass:"header__box-info",closeOnLinkClick:!0,linkSelector:"a",addStopScroll:!0}),document.querySelector(".main-section-3__btn")&&document.querySelector(".main-section-3__top")&&document.querySelector(".main-section-3__mobil-hidden")){const e=document.querySelector(".main-section-3__btn"),t=document.querySelector(".main-section-3__top"),o=document.querySelector(".main-section-3__mobil-hidden");handleResize(o,e,t,512),window.addEventListener("resize",()=>handleResize(o,e,t,512))}if(document.querySelector(".watch-rest")&&document.querySelector(".box-blog__list>li:last-child")&&document.querySelector(".box-blog__mobil-hidden")){const e=document.querySelector(".watch-rest"),t=document.querySelector(".box-blog__list>li:last-child"),o=document.querySelector(".box-blog__mobil-hidden");handleResize(o,e,t,1210),window.addEventListener("resize",()=>handleResize(o,e,t,1210))}if(document.querySelector(".box-swiper__link")&&document.querySelector(".box-swiper__top-line")&&document.querySelector(".box-swiper__mobail-hidden")){const e=document.querySelector(".box-swiper__link"),t=document.querySelector(".box-swiper__top-line"),o=document.querySelector(".box-swiper__mobail-hidden");handleResize(o,e,t,650),window.addEventListener("resize",()=>handleResize(o,e,t,650))}if(document.querySelector(".service-support-section-3__link")&&document.querySelector(".service-support-section-3__top-line")&&document.querySelector(".service-support-section-3__mobil-hidden")){const e=document.querySelector(".service-support-section-3__link"),t=document.querySelector(".service-support-section-3__top-line"),o=document.querySelector(".service-support-section-3__mobil-hidden");handleResize(o,e,t,650),window.addEventListener("resize",()=>handleResize(o,e,t,650))}if(document.querySelector("#swiper-5")&&document.querySelector("#swiper-5 > .swiper-wrapper")&&document.querySelectorAll("#swiper-5 > .swiper-slide")&&document.querySelector("#swiper-6")&&document.querySelector("#swiper-6 > .swiper-wrapper")&&document.querySelectorAll("#swiper-6 > .swiper-slide")){const e=new Swiper("#swiper-6",{spaceBetween:10,slidesPerView:4,freeMode:!1,breakpoints:{650:{spaceBetween:17}}});new Swiper("#swiper-5",{spaceBetween:10,navigation:{nextEl:".product-card-section-1__button-prev",prevEl:".product-card-section-1__button-next"},thumbs:{swiper:e}})}document.querySelector(".box-info")&&initTabLogic(".box-info"),document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".quiz-container__question.question-6"),t=document.querySelector(".quiz-container__img"),o=document.querySelector(".quiz-container__form"),r=document.getElementById("contacts-form-7"),i=document.getElementById("quiz-navigation-1"),s=document.getElementById("quiz-navigation-2"),n=document.getElementById("prev-btn");if(!(e.length&&t&&o&&r&&i&&s&&n))return;const l=new MutationObserver(e=>{e.forEach(e=>{"attributes"===e.type&&"class"===e.attributeName&&(e.target.classList.contains("active")?(t.style.display="none",o.classList.add("question-6")):(t.style.display="",o.classList.remove("question-6")),r.classList.contains("active")?(i.style.display="none",s.insertBefore(n,s.firstChild)):(i.style.display="",i.insertBefore(n,i.firstChild)))})});e.forEach(e=>{l.observe(e,{attributes:!0})}),l.observe(r,{attributes:!0})}),(document.querySelector("#swiper-7")||document.querySelector("#swiper-8"))&&document.addEventListener("DOMContentLoaded",()=>{let e;handleSwiperClasses([{elementId:"swiper-7",classWrapp:".about-company-section-4__list",breakpoint:900,swiperConfig:{slidesPerView:1,spaceBetween:18,grid:{rows:3,fill:"row"},navigation:{nextEl:".swiper-7__swiper-button-prev",prevEl:".swiper-7__swiper-button-next"},loop:!1,breakpoints:{650:{slidesPerView:2,spaceBetween:18,grid:{rows:3}}}}},{elementId:"swiper-8",classWrapp:".box-blog__list",breakpoint:900,swiperConfig:{slidesPerView:1,spaceBetween:10,navigation:{nextEl:".swiper-8__swiper-button-prev",prevEl:".swiper-8__swiper-button-next"},breakpoints:{650:{slidesPerView:2,spaceBetween:20}}}}]),window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{handleSwiperClasses([{elementId:"swiper-7",classWrapp:".about-company-section-4__list",breakpoint:900,swiperConfig:{grid:{rows:3,fill:"row"},navigation:{nextEl:".swiper-7__swiper-button-next",prevEl:".swiper-7__swiper-button-prev"}}},{elementId:"swiper-8",classWrapp:".box-blog__list",breakpoint:900,swiperConfig:{slidesPerView:2,spaceBetween:20,navigation:{nextEl:".swiper-8__swiper-button-next",prevEl:".swiper-8__swiper-button-prev"}}}])},200)})}),document.querySelector("#tabs-1")&&initTabs("#tabs-1",".tabs__btn",".tabs__info"),document.querySelectorAll(".btn-video-play")&&playVideo(),document.querySelector(".filter")&&initCatalogTabs1(".filter__list","drop-down-2__btn","drop-down-2__box","active"),document.querySelector(".initFilter")&&document.querySelector(".catalog-section-1__aside")&&toggleActiveClass({buttonClass:"initFilter",targetClass:"catalog-section-1__aside",closeOnLinkClick:!0,linkSelector:"a",addStopScroll:!0}),document.querySelectorAll(".box-swiper-1__swiper")&&document.querySelectorAll(".box-swiper-1__swiper").forEach(e=>{new Swiper(e,{slidesPerView:2,spaceBetween:10,navigation:{nextEl:e.closest(".box-swiper-1__container").querySelector(".box-swiper-1__swiper-button-prev"),prevEl:e.closest(".box-swiper-1__container").querySelector(".box-swiper-1__swiper-button-next")},breakpoints:{650:{slidesPerView:3,spaceBetween:15},1030:{slidesPerView:4,spaceBetween:20}}})}),document.querySelectorAll(".box-swiper-1__swiper-slide")&&handleSwiperControls({swiperSlideClass:"box-swiper-1__swiper-slide",buttonsGroupClass:"box-swiper-1__group-btn",breakpoint:1030}),document.querySelectorAll(".box-reviews__swiper")&&document.querySelectorAll(".box-reviews__swiper").forEach(e=>{new Swiper(e,{slidesPerView:1,slidesPerGroup:1,grid:{rows:3,fill:"row"},spaceBetween:20,navigation:{nextEl:e.closest(".box-reviews").querySelector(".box-reviews__swiper-button-prev"),prevEl:e.closest(".box-reviews").querySelector(".box-reviews__swiper-button-next")},breakpoints:{650:{slidesPerView:2,slidesPerGroup:2,grid:{rows:2,fill:"row"},spaceBetween:20},1030:{slidesPerView:3,slidesPerGroup:3,grid:{rows:1,fill:"row"},spaceBetween:20}}})}),document.querySelectorAll(".open-modal-1")&&document.querySelector(".modal")&&setupModal({openButtonClass:".open-modal-1",modalClass:".modal",closeButtonClass:".btn-close",stopScrollClass:"stop-scroll",activeClass:"active"});