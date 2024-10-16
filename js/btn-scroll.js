const btn = document.querySelector('.btn-up');

const handleBtnScroll = () => {
    if (window.scrollY > 500) {
        btn.classList.add('btn-scroll');
    } else {
        btn.classList.remove('btn-scroll');

    }
}

const handleBtnClick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

window.addEventListener('scroll', handleBtnScroll);
btn.addEventListener('click', handleBtnClick)