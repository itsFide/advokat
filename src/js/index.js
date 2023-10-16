document.addEventListener('DOMContentLoaded', ()=>{
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
})