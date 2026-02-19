let currentSlide = 0;

function changeSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (!carousel || totalSlides === 0) return;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

window.changeSlide = changeSlide;

let autoPlay = setInterval(() => {
    changeSlide(1);
}, 5000);

function stopAutoPlay() {
    clearInterval(autoPlay);
}

window.changeSlide = function(direction) {
    stopAutoPlay(); 
    changeSlide(direction);
};