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
    const howBtns = document.querySelectorAll('.how__content-ul li');
    const arrBtns = Array.from(howBtns);

    const contentBars = document.querySelectorAll('.how__content-bar')
    const arrBars = Array.from(contentBars);

    const dropHow = document.getElementById('howMobileDrop');
    const mobilSpan = document.querySelector('.how-mobile-nav')

    arrBtns.map((e) => {
        e.addEventListener('click', () => {
            arrBtns.map((el) => {
                el.classList.remove('active');
            })
            e.classList.add('active');
            

            dropHow.classList.toggle('active');

            if(dropHow.classList.contains('active')){
                e.classList.add('activearr');
            }

            dropHow.addEventListener('click', () => {
                mobilSpan.innerHTML = e.innerHTML;
                e.classList.add('active');
                e.classList.remove('activearr');
            })

            
            
            // console.log(e.innerHTML);
            if(e.innerHTML == "1. Регистрируемся"){
                arrBars.map((item) => {
                    if(item.classList.contains('reg')){
                        arrBars.map((index) => {
                            index.classList.remove('active')
                        })
                        item.classList.add('active');
                    }
                })      
            }else if(e.innerHTML == "2. Делаем покупки"){
                arrBars.map((item) => {
                    if(item.classList.contains('shop')){
                        arrBars.map((index) => {
                            index.classList.remove('active')
                        })
                        item.classList.add('active');
                    }
                })      
            }else if(e.innerHTML == "3. Создаем отправку"){
                arrBars.map((item) => {
                    if(item.classList.contains('send')){
                        arrBars.map((index) => {
                            index.classList.remove('active')
                        })
                        item.classList.add('active');
                    }
                })      
            }else if(e.innerHTML == "4. Получаем посылку"){
                arrBars.map((item) => {
                    if(item.classList.contains('post')){
                        arrBars.map((index) => {
                            index.classList.remove('active')
                        })
                        item.classList.add('active');
                    }
                })      
            }
        })
    })
}