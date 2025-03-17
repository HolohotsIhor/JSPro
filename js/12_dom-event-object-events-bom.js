// Coordinates. USB, bluetooth, online
// Object navigator
// navigator.geolocation.getCurrentPosition(function (myGe) { console.log(myGe) });
console.log(window.navigator.language); // Язык пользователя
navigator.onLine; // is user online?

//Object locationƒ
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    // location.href = 'google.com';
    // location.reload();
    const myNewWindow = window.open('','','width=200,height=200')

    myNewWindow.document.body.innerHTML = 'You man!';

    // Set timeouts отработают почти одинаково. Не синхронно, если второй сет таймаут 1000
    setTimeout(() => {
        myNewWindow.resizeTo(800, 800)
    }, 1000)

    setTimeout(() => {
        myNewWindow.resizeTo(200, 200)
    }, 2000)
})

// Object screen
console.log(123)
console.log(screen.orientation.type)


// Events Capturing & Bubbling
// 3 Фази обробки події на сторінці
// 1. Фаза Занурення. Capture Phase. З рівня вікна опускаємось вниз по іерархії window -> table -> tr -> rd(клік по кнопці)
// 2. Цільова фаза. Target Phase
// 3. Фаза вспливання. Bubbling Phase

document.querySelector('div').addEventListener('click', event => {
    // console.log('div click capturing');
    // event.stopPropagation(); // глибше не підемо
    // console.log(event.target.value)
}, true) // true - виклик коллбеку на фазі занурення

document.querySelector('div').addEventListener('click', event => {
    // console.log('div click bubbling');
    // event.stopPropagation(); // глибше не підемо
    event.stopImmediatePropagation(); // Зупиняє занурення, всплиття і на інші івент лісенери самого елементу
})

document.querySelector('p').addEventListener('click', event => {
    // console.log('p click');
    event.stopPropagation();
})

// Кнопка - целевая фаза. По дефолту начінается все с не>, если не установлен параметр true
document.querySelector('#btn1').addEventListener('click', () => {
    // console.log('Button click');
})


// Event delegation. Обробка подіїї по батьківському елементу
document.querySelector('.parent').addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const dataType = event.target.getAttribute('data-type');

        if (dataType === 'open') console.log('click open');
        if (dataType === 'edit') console.log('click edit');
        if (dataType === 'add') console.log('click add');
    } else console.log('click on P');
})

// Live coding
const categories = [
    {
        id: 1,
        name: 'Leptops',
        products: [
            { id: 1, name: 'Mackbook', price: '1200' },
            { id: 2, name: 'Dell', price: '1300'},
            { id: 3, name: 'Asus', price: '1400'},
            { id: 4, name: 'Mackbook 4', price: '1500'}
        ]
    },
    {
        id: 2,
        name: 'Phones',
        products: [
            { id: 1, name: 'iPhone', price: '1000' },
            { id: 2, name: 'Samsung', price: '500'},
            { id: 3, name: 'Xiaomi', price: '200'},
            { id: 4, name: 'Honor', price: '300'}
        ]
    },
    {
        id: 3,
        name: 'Processors',
        products: [
            { id: 1, name: 'Intel', price: '1000' },
            { id: 2, name: 'AMD', price: '500'},
        ]
    }
];

const showCategories = () => {
    const parent = document.querySelector('.mart__categories > div');

    categories.forEach(category => {
        const categoryEl = document.createElement('div');
        categoryEl.textContent = category.name;
        categoryEl.setAttribute('data-category-id', category.id);
        categoryEl.classList.add('mart__category-item')

        parent.appendChild(categoryEl);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    showCategories();
})

const showProducts = (products) => {
    // Підбросити у продукт data-атрибутом id категорії
}

document.querySelector('.mart__categories').addEventListener('click', event => {
    if (!event.target.classList.contains('mart__category-item')) return

    const categoryId = event.target.getAttribute('data-category-id');
    const selectedCategory = categories.find( category => category.id === categoryId)

    if (!selectedCategory)  return;

    showProducts(selectedCategory.products);
})
