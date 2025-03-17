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

if (window.location.pathname === '/pages/howorks.html' || window.location.pathname === '/pages/blog.html'){
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
    });
}

if(window.location.pathname === '/pages/blog.html'){
    const carts = [
        {
            id: 1,
            img: '../img/blogCart.svg',
            time: '24.07.2023',
            title: 'Покупать товары из Америки просто и выгодно (рубрика 1)',
            filter: 'rub1'
        },
        {
            id: 2,
            img: '../img/blogCart.svg',
            time: '24.07.2023',
            title:'Покупать товары из Америки просто и выгодно (рубрика 2)',
            filter: 'rub2'
        },
        {
            id: 3,
            img: '../img/blogCart.svg',
            time: '24.07.2023',
            title:'Покупать товары из Америки просто и выгодно (рубрика 3)',
            filter: 'rub3'
        },
        {
            id: 4,
            img: '../img/blogCart.svg',
            time: '24.07.2023',
            title:'Покупать товары из Америки просто и выгодно (рубрика 1)',
            filter: 'rub1'
        },
        {
            id: 5,
            img: '../img/blogCart.svg',
            time: '24.07.2023',
            title:'Покупать товары из Америки просто и выгодно (рубрика 3)',
            filter: 'rub3'
        },
        {
            id: 6,
            img: '../img/blogCart.svg',
            time: '24.07.2023',
            title:'Покупать товары из Америки просто и выгодно (рубрика 2)',
            filter: 'rub2'
        },
        {
            id: 7,
            img: '../img/blogCart.svg',
            time: '24.07.2023',
            title:'Покупать товары из Америки просто и выгодно (рубрика 4)',
            filter: 'rub4'
        },
        {
            id: 8,
            img: '../img/blogCart.svg',
            time: '24.07.2023',
            title:'Покупать товары из Америки просто и выгодно (рубрика 4)',
            filter: 'rub4'
        },
        {
            id: 9,
            img: '../img/blogCart.svg',
            time: '24.07.2023',
            title:'Покупать товары из Америки просто и выгодно (рубрика 3)',
            filter: 'rub3'
        }
    ]; 

    const cartContainer = document.querySelector('.main__blog-carts');

    carts.forEach((el) => {
        cartContainer.insertAdjacentHTML('beforeend', `
            <div id="${el.id}" class="blog__cart ${el.filter}">
                <img src="${el.img}" alt="blogCart">
                <div class="blog__cart-time">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_119_1356)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.45455C4.38505 1.45455 1.45455 4.38505 1.45455 8C1.45455 11.615 4.38505 14.5455 8 14.5455C11.615 14.5455 14.5455 11.615 14.5455 8C14.5455 4.38505 11.615 1.45455 8 1.45455ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#004169"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00071 2.90906C8.40237 2.90906 8.72798 3.23467 8.72798 3.63633V7.55049L11.235 8.80402C11.5943 8.98365 11.7399 9.42051 11.5603 9.77976C11.3807 10.139 10.9438 10.2847 10.5845 10.105L7.67546 8.65046C7.42908 8.52727 7.27344 8.27544 7.27344 7.99997V3.63633C7.27344 3.23467 7.59905 2.90906 8.00071 2.90906Z" fill="#004169"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_119_1356">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <span>${el.time}</span>
                </div>
                <p>${el.title}</p>
            </div>
        `);
    });

    const blogCartsNav = document.querySelectorAll('.blog__carts-nav li');
    const cart = document.querySelectorAll('.blog__cart');

    const arrBlogNav = Array.from(blogCartsNav);

    const arrCart = Array.from(cart);

    arrBlogNav.map((e) => {
        e.addEventListener('click', () => {
            arrBlogNav.map((item) => {
                item.classList.remove('active');
            })
            e.classList.add('active');
            if(e.innerHTML === 'Рубрика 1'){
                arrCart.map((index) => {
                    index.style.display = 'none';
                    if(index.classList.contains('rub1')){
                        index.style.display = 'grid';
                    }
                })
            }else if (e.innerHTML === 'Рубрика 2'){
                arrCart.map((index) => {
                    index.style.display = 'none';
                    if(index.classList.contains('rub2')){
                        index.style.display = 'grid';
                    }
                })
            }else if (e.innerHTML === 'Рубрика 3'){
                arrCart.map((index) => {
                    index.style.display = 'none';
                    if(index.classList.contains('rub3')){
                        index.style.display = 'grid';
                    }
                })
            }else if (e.innerHTML === 'Рубрика 4'){
                arrCart.map((index) => {
                    index.style.display = 'none';
                    if(index.classList.contains('rub4')){
                        index.style.display = 'grid';
                    }
                })
            }else if (e.innerHTML === 'Все новости'){
                arrCart.map((index) => {
                    index.style.display = 'grid';
                })
            }
        })
    })
}