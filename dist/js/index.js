document.addEventListener('DOMContentLoaded', ()=>{
    const swiper = new Swiper('.hero__slider', {
        // Optional parameters
        loop: true,
        speed: 1500,           
        effect: 'fade',
        autoplay: {
            delay: 3500,
        },
    });
    const about = new Swiper('.about__images', {
        // Optional parameters
        loop: true,
        speed: 1500,           
        effect: 'fade',
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    const certificates = new Swiper('.certificates__slider', {
        // Optional parameters
        loop: false,
        slidesPerView: 3,
        spaceBetween:30,
         // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        585: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        }
        }
    });
    // Burger menu
    const burger = document.querySelector('.header-burger');
    const menu = document.querySelector('.header__nav__mobile');
    const tagBody = document.querySelector('body')
    burger.addEventListener('click', () => {
        console.log('dgf');
        tagBody.classList.toggle('body-hidden')
        burger.classList.toggle('active')
        menu.classList.toggle('active')
    })

    function hideMenuResize() {
        const vw = window.innerWidth;
        if(vw > 1185){
            menu.classList.remove('active')
            tagBody.classList.remove('body-hidden')
            burger.classList.remove('active')
        }
        // document.documentElement.style.setProperty("--vh", `${vh}px`);
    }  
    window.addEventListener("resize", hideMenuResize);
    const header = document.querySelector('header'); 

    if (!header) {
        return; 
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) { 
        header.classList.add('active');
        } else {
        header.classList.remove('active');
        }
    });
    // Модальное окно
    function bindModal(trigger, modal, close) {
        trigger = document.querySelectorAll(trigger),
        modal = document.querySelector(modal),
        close = document.querySelector(close)
        trigger.forEach(element => {
            element.addEventListener('click', e => {
                e.preventDefault()
                modal.style.display = 'flex'
            });
        });
        close.addEventListener('click', () => {
        modal.style.display = 'none'
        });
        modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none'
        }
        })
    }

    // ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
    // ВТОРОЙ аргумент - класс самого модального окна.
    // ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
    bindModal('.modal__btn', '.modal__wrapper', '.modal__close')
    bindModal('.fixed-contact', '.modal__wrapper2', '.modal__close2')
    bindModal('.modal__info__open', '.modal__wrapper3', '.modal__close3')
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
})