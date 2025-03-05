const langContainer = document.querySelector(".lang");
const dropdown = document.querySelector(".lang__dropdown");

let showTimeout, hideTimeout;

langContainer.addEventListener("mouseenter", () => {
    langContainer.classList.add("active")
    clearTimeout(hideTimeout); // Очищаем таймер скрытия
    showTimeout = setTimeout(() => {
        dropdown.classList.add("active");
    }, 0); // Задержка 300ms перед появлением
});

langContainer.addEventListener("mouseleave", () => {
    clearTimeout(showTimeout); // Очищаем таймер показа
    langContainer.classList.remove("active")
    hideTimeout = setTimeout(() => {
        dropdown.classList.remove("active");
    }, 300); // Задержка 300ms перед скрытием
});


let subitemsShowTimeout, subitemsHideTimeout;

const subitemsContainer = document.querySelector(".nav__item.subitems");
const information = document.querySelector(".information");

subitemsContainer.addEventListener("mouseenter", () => {
    subitemsContainer.classList.add("active")
    clearTimeout(subitemsHideTimeout); // Очищаем таймер скрытия
    subitemsShowTimeout = setTimeout(() => {
        information.classList.add("active");
    }, 0); // Задержка 300ms перед появлением
});

subitemsContainer.addEventListener("mouseleave", () => {
    clearTimeout(subitemsShowTimeout); // Очищаем таймер показа
    subitemsContainer.classList.remove("active")
    subitemsHideTimeout = setTimeout(() => {
        information.classList.remove("active");
    }, 300); // Задержка 300ms перед скрытием
});


new ItcAccordion(document.querySelector('.accordion'), {
    alwaysOpen: false
  });


const swiper = new Swiper('#reviews_swiper', {
// Optional parameters
// direction: 'vertical',
loop: true,
slidesPerView: 4,
spaceBetween: 20,

// Navigation arrows
navigation: {
    nextEl: '.swiper-button-next-reviews',
    prevEl: '.swiper-button-prev-reviews',
},

});