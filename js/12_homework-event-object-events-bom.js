'use strict'
const DATA_TYPE = 'data-type';
const TEXT_REMOVE = 'Видалити';

// ДЗ 12.1. Переход на сторінку
const initRedirect = () => {
    const buttonPrompt = document.querySelector('#button1');
    const buttonRedirect = document.querySelector('#button2');
    let url = null;

    buttonPrompt.addEventListener('click', () => url = prompt('Введіть url'));
    buttonRedirect.addEventListener('click', () => url ? location.href = url : alert('Введіть url'));
}

// ДЗ 12.2. Використання подій
const initButtons = () => {
    const trigger =  document.querySelector('.js-buttons-trigger');
    const root = document.querySelector('#root');

    trigger.addEventListener('click', event => {
        const data = event.target.getAttribute(DATA_TYPE)

        switch(data){
            case 'button1':
                writeMessage(`Клік по Button 1`, root);
                break;
            case 'button2':
                writeMessage(`Клік по Button 2`, root);
                break;
            case 'button3':
                writeMessage(`Клік по Button 3`, root);
                break;
        }
    })
}

// ДЗ 12.3. TODO лист
const initTodoList = () => {
    const parent = document.querySelector('.js-todo-list');

    const initNewItem = () => {
        const trigger = document.querySelector('.js-add-item');

        trigger.addEventListener('click', () => {
            const item = document.querySelector('#new-todo-item').value;

            if (item) {
                const liEl = document.createElement('li');
                const spanEl = document.createElement('span');
                const buttonEl = document.createElement('button')

                liEl.classList.add('list__item');
                spanEl.classList.add('list__title');
                spanEl.innerHTML = item;
                buttonEl.innerHTML = TEXT_REMOVE;
                buttonEl.classList.add('button');

                liEl.appendChild(spanEl);
                liEl.appendChild(buttonEl);
                parent.appendChild(liEl);
            } else alert('Введіть корректну назву');
        })
    }

    parent.addEventListener('click', event => {
        if (event.target.classList.contains('button')) {
            const item = event.target.closest('.list__item'); // Ищем ближайший родительский элемент с классом "item"
            item && item.remove();
        }
    });

    initNewItem();
};

document.addEventListener('DOMContentLoaded', () => {
    initRedirect();
    initButtons();
    initTodoList();
})
