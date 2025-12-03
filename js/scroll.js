const header = document.querySelector('.navbar');
window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
