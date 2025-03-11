'use strict'
const TABLE_ITEM = 'table__item';
const TABLE_ITEM_DYNAMIC = 'table__item--dynamic';
const TABLE_ITEM_STATIC = 'table__item--static';
const DATA_X = 'data-x';
const DATA_Y = 'data-y';
const HOVER_CLASS = 'is-hovered';
const TEXT_RED_CLASS = 'text--red';

// ДЗ 11.1. Таблиця піфагора
const initItemHover = () => {
    const items = document.querySelectorAll(`.${TABLE_ITEM_DYNAMIC}`);

    items.forEach(item => {
        let xHovered= null;
        let yHovered = null;

        item.addEventListener('mouseenter', () => {
            const x = item.getAttribute(DATA_X);
            const y = item.getAttribute(DATA_Y);
            const xParent = document.querySelector(`.${TABLE_ITEM_STATIC}-x-${x}`);
            const yParent = document.querySelector(`.${TABLE_ITEM_STATIC}-y-${y}`);

            xParent.classList.add(HOVER_CLASS);
            yParent.classList.add(HOVER_CLASS);
            xHovered = xParent;
            yHovered = yParent;
        })
        item.addEventListener('mouseleave', () => {
            xHovered.classList.remove(HOVER_CLASS);
            yHovered.classList.remove(HOVER_CLASS);
        });
    })
}

const initPythagorasTable = () => {
    const rootEl = document.getElementById('root');
    const size = 10;
    const start = 1;

    for (let i = start; i <= size; i++) {
        for (let j = start; j <= size; j++) {
            const el = document.createElement('div');

            el.classList.add(TABLE_ITEM);

            if (i === start && j === start) el.innerHTML = ''
            else {
                el.innerHTML = (i * j).toString();

                if (i !== start && j !== start) {
                    el.classList.add(TABLE_ITEM_DYNAMIC);
                    el.setAttribute(DATA_Y, i.toString())
                    el.setAttribute(DATA_X, j.toString())
                } else {
                    i === start
                        ?  el.classList.add(`${TABLE_ITEM_STATIC}-x-${j}`)
                        : el.classList.add(`${TABLE_ITEM_STATIC}-y-${i}`)
                }
            }

            rootEl.appendChild(el);
        }
    }

    initItemHover();
}

// ДЗ 11.2. Кнопка зміни кольору
const initChangeTextColor = () => {
    const button = document.querySelector('#button');
    const text = document.querySelector('.js-text-color');

    button.addEventListener('click', () => {
        text.classList.toggle(TEXT_RED_CLASS);
    })
}

// ДЗ 11.3. Отримання випадкового зображення
const initRandomImage = () => {
    const image = document.querySelector('.js-random-image');
    const random = Math.floor(Math.random() * 6) + 1;

    image.setAttribute('src', `../images/${random}.jpg`);
}

window.addEventListener('load', () => {
    initPythagorasTable();
    initChangeTextColor();
    initRandomImage();
});
