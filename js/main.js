const toggleTrailer = () => {
    let trailer = document.querySelector('.trailer');
    let video = document.querySelector('.trailer__Video');

    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}

const toggleNav = () => {
    let nav = document.querySelector('.header__Nav');
    nav.classList.toggle('active');
}