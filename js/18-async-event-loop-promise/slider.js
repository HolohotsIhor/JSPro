'use strict'

const config = {
    speed: 3000,
    firstIndex: 0,
    currentIndex: 0,
    interval: null,
}

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
        if (i === config.currentIndex) el.classList.add(ACTIVE);
        parent.appendChild(el);
    });

    parent.addEventListener(CLICK, (event) => {
        const index = Number(event.target.getAttribute(DATA_DOT_ATTR));
        if (!isNaN(index) && index !== config.currentIndex) {
            updateSlides(items, config.currentIndex, index);
            updateDots(index);
            config.currentIndex = index;
        }
    });
};

const toggleNexSlide = (slides, lastSlideIndex) => {
    if (config.currentIndex < lastSlideIndex) {
        updateSlides(slides, config.currentIndex, ++config.currentIndex);
        updateDots(config.currentIndex);
    } else {
        updateSlides(slides, config.currentIndex, config.firstIndex);
        updateDots(config.firstIndex);
        config.currentIndex = config.firstIndex;
    }
}

const togglePrevSlide = (slides, lastSlideIndex) => {
    if (config.currentIndex > config.firstIndex) {
        updateSlides(slides, config.currentIndex, --config.currentIndex);
        updateDots(config.currentIndex);
    } else {
        updateSlides(slides, config.currentIndex, lastSlideIndex);
        updateDots(lastSlideIndex);
        config.currentIndex = lastSlideIndex;
    }
}

const initAutoplay = (callback, speed) => {
    config.interval = setInterval(callback, speed);
};

const restartAutoplay = (callback, speed) => {
    clearInterval(config.interval);
    initAutoplay(callback, speed);
};

const initSlider = () => {
    const slides = document.querySelectorAll('.slider__item');
    const triggerNext = document.querySelector('.slider__arrow--next');
    const triggerPrev = document.querySelector('.slider__arrow--prev');
    const lastSlideIndex = slides.length - 1;

    // Init state
    slides[config.currentIndex].classList.add(ACTIVE);
    initDotsNav(slides);
    initAutoplay(() => toggleNexSlide(slides, lastSlideIndex), config.speed);

    // Logic
    triggerNext?.addEventListener(CLICK, () => {
        toggleNexSlide(slides, lastSlideIndex);
        restartAutoplay(() => toggleNexSlide(slides, lastSlideIndex), config.speed);
    });

    triggerPrev?.addEventListener(CLICK, () => {
        togglePrevSlide(slides, lastSlideIndex);
        restartAutoplay(() => toggleNexSlide(slides, lastSlideIndex), config.speed);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initSlider();
})
