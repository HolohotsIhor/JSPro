'use strict'

const DATA_DOT_ATTR = 'data-active-id';
let currentIndex = 0;

const updateDots = (newIndex) => {
    document.querySelectorAll('.slider__dot-item').forEach((dot, i) => {
        dot.classList.toggle(ACTIVE, i === newIndex);
    });
};

const updateSlides = (items, oldIndex, currentIndex) => {
    items[oldIndex]?.classList.remove(ACTIVE);
    items[currentIndex]?.classList.add(ACTIVE);
}

const initDotsNav = (items) => {
    const parent = document.querySelector('.js-dots');
    parent.innerHTML = '';

    items.forEach((_, i) => {
        const el = document.createElement('div');
        el.classList.add('slider__dot-item');
        el.setAttribute(DATA_DOT_ATTR, i);
        if (i === currentIndex) el.classList.add(ACTIVE);
        parent.appendChild(el);
    });

    parent.addEventListener('click', (event) => {
        const index = Number(event.target.getAttribute(DATA_DOT_ATTR));
        if (!isNaN(index) && index !== currentIndex) {
            updateSlides(items, currentIndex, index);
            updateDots(index);
            currentIndex = index;
        }
    });
};

const initSlider = () => {
    const slides = document.querySelectorAll('.slider__item');
    const triggerNext = document.querySelector('.slider__arrow--next');
    const triggerPrev = document.querySelector('.slider__arrow--prev');

    // Init state
    slides[currentIndex].classList.add(ACTIVE);
    initDotsNav(slides);

    // Logic
    triggerNext?.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            updateSlides(slides, currentIndex, ++currentIndex);
            updateDots(currentIndex);
        }
    });

    triggerPrev?.addEventListener('click', () => {
        if (currentIndex > 0) {
            updateSlides(slides, currentIndex, --currentIndex);
            updateDots(currentIndex);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initSlider();
})
