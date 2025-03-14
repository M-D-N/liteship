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


if (window.location.pathname === '/index.html') {
    new ItcAccordion(document.querySelector('.accordion'), {
        alwaysOpen: false
    });
    const swiper = new Swiper('#reviews_swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-reviews',
            prevEl: '.swiper-button-prev-reviews',
        },
        breakpoints: {
            1000: {
                slidesPerView: 4,
            },
        }
        });
        
    const compareSwiper = new Swiper('#compare_swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-compare',
            prevEl: '.swiper-button-prev-compare',
        },
        breakpoints: {
            1000: {
                slidesPerView: 2,
            },
        }
        });
    
    const mainSwiper = new Swiper('#main_swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-main',
            prevEl: '.swiper-button-prev-main',
        },
        autoplay: {
            delay: 5000,
            },
        
        });
}

const burger = document.getElementById("burger");
const headerMobile = document.getElementById("mobileMenu");
const headerMobileDrop = document.getElementById("headerMobileDrop");
const headerMobileDropUl = document.querySelector(".header__mobile-drop");

headerMobileDrop.addEventListener("click", function(e){
    e.currentTarget.classList.toggle("active");
    if (e.currentTarget.classList.contains('active')) {
        headerMobileDropUl.style.display = "flex";
        setTimeout(() => {
            headerMobileDropUl.style.opacity = "1";
            headerMobileDropUl.style.height = "auto";
        }, 10);
    } else {
        setTimeout(() => {
            headerMobileDropUl.style.height = "0";
            headerMobileDropUl.style.opacity = "0";
            headerMobileDropUl.style.display = "none";
        }, 100);
    }
})

burger.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("active")
    headerMobile.classList.toggle("active")
    document.body.classList.toggle("hidden")
})

// how page

if (window.location.pathname === '/pages/howorks.html'){
    
}