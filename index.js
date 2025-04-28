const slides = document.querySelectorAll('.slide-moves');


const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


let currentImageNumber = 1;


const totalSlides = slides.length;

nextButton.addEventListener('click', () => {
    moveSlide('next');
});

prevButton.addEventListener('click', () => {
    moveSlide('prev');
});

function moveSlide(direction) {
    slides.forEach(slide => {
        if (slide.dataset.imag == currentImageNumber) {
            slide.classList.remove('active');
        }
    });


    if (direction === 'next') {
        currentImageNumber++;
        if (currentImageNumber > totalSlides) {
            currentImageNumber = 1;
        }
    } else if (direction === 'prev') {
        currentImageNumber--;
        if (currentImageNumber < 1) {
            currentImageNumber = totalSlides;
        }
    }

    slides.forEach(slide => {
        if (slide.dataset.imag == currentImageNumber) {
            slide.classList.add('active');
        }
    });
}
