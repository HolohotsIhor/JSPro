'use strict'

let newOrder = null;
let currentProducts = null;

const removeProducts = root => root.innerHTML = '';

const addDataToStorage = () =>  {
    let orders = localStorage.getItem('orders');
    const currentDate = new Date().toISOString().split('T')[0];
    orders = orders ? JSON.parse(orders) : [];
    if (!Array.isArray(orders)) orders = [];

    orders.push({ ...newOrder, date: currentDate });
    localStorage.setItem('orders', JSON.stringify(orders));
}

const removeSuccessMessage = () => {
    const message = document.querySelector(`.${SUCCESS_CLASS}`);
    message && message.remove();
}

const showButton = () => {
    document.querySelector('#js-by-product').classList.remove(HIDDEN);
}

const showSuccessMessage = (root, button) => {
    const el = document.createElement('li');
    el.classList.add(LIST_ITEM_CLASS);
    el.classList.add(SUCCESS_CLASS);
    el.innerHTML = `Thank you for the order!`
    root.prepend(el);
    button.classList.add(HIDDEN);
}

const cleanMart = () => {
    const product = document.querySelector('.js-current-product');
    product && product.remove();
};

const showProductDetails = (product, root) => {
    const el = document.createElement('li');
    el.classList.add(LIST_ITEM_CLASS);
    el.classList.add('js-current-product');
    el.setAttribute(DATA_NAME_ATTR, product.name);
    el.innerHTML = `<strong>Product: </strong> ${product.name}<br />
                    <strong>Description: </strong> ${product.description}<br />
                    <strong>Price: </strong> ${product.price}<br />`;

    root.classList.remove(HIDDEN);
    root.prepend(el);
    showButton();
    newOrder = product;
}

const selectProduct = (root, martRoot) => {
    root.addEventListener('click', event => {
        const productId = event.target.getAttribute(DATA_ID_ATTR);
        const product = currentProducts.find(product => product.id === parseInt(productId));

        removeSuccessMessage();
        cleanMart();
        showProductDetails(product, martRoot);
    });
}

const showProducts = ((products, root, martRoot) => {
    root.classList.remove(HIDDEN);

    products.forEach(product => {
        const el = document.createElement('li');
        el.classList.add(LIST_ITEM_CLASS);
        el.innerHTML = `${product.name} - ${product.price}`;
        el.setAttribute('title', product.description);
        el.setAttribute(DATA_ID_ATTR, product.id)
        root.appendChild(el);
    })
})

const showCategories = (data, root) => {
    data.forEach(item => {
        const el = document.createElement('li');
        el.classList.add(LIST_ITEM_CLASS);
        el.innerHTML = item.name;
        root.appendChild(el);
    })
}

const handleButtonClick = (martRoot, button) => {
    addDataToStorage();
    cleanMart();
    showSuccessMessage(martRoot, button);
}

const initMarket = data => {
    const categoriesRoot = document.querySelector('#categories');
    const productsRoot = document.querySelector('#products');
    const martRoot = document.querySelector('#mart');
    const triggerButton = document.querySelector('#js-by-product');
    const button = document.querySelector('#js-by-product');

    showCategories(data, categoriesRoot);
    triggerButton.addEventListener('click', () => handleButtonClick(martRoot, button));

    categoriesRoot.addEventListener('click', event => {
        const targetName = event.target.textContent;
        const category = data.find(cat => cat.name === targetName)
        currentProducts = category.products;

        if (!category) return;

        removeProducts(productsRoot);
        showProducts(category.products, productsRoot, martRoot);
        selectProduct(productsRoot, martRoot);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    initMarket(productCatalog);
})
