const header = document.querySelector('.header.section');

const headerScrollHandler = () => {
    if (window.scrollY > 0) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');

    }
}

window.addEventListener('scroll', headerScrollHandler);
