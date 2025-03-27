'use strict'

const regExp = {
    name: /^[a-z]{2,}$/i,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^\+?380\d{9}$/,
}
let newOrder = null;
let currentProducts = null;
let isValid = true;
let orders = [];

const removeErrors = (items) => {
    items.length > 0 &&
    items.forEach(item => item.remove())
}

const removeForm = () => {
    const form = document.querySelector('#formValidation');
    form.classList.add(HIDDEN);
}

const showForm = () => {
    const form = document.querySelector('#formValidation');
    form.classList.remove(HIDDEN);
}

const setError = (parentId) => {
    const errorEl = document.createElement('div');
    const parent = document.querySelector(`#${parentId}`);

    errorEl.classList.add('error-message');
    errorEl.innerText = "Please input correct data";

    isValid = false;
    parent.appendChild(errorEl);
}

const showValidData = (form, data) => {
    const root = document.querySelector('#order-details');

    addDataToStorage();
    removeForm();

    root.innerHTML = `
        <h2>User data:</h2>
        <p><strong>Name:</strong> ${data.firstname}</p>
        <p><strong>Lastname:</strong> ${data.lastname}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>Post number:</strong> ${data.post}</p>
        <p><strong>Delivery:</strong> ${data.gender}</p>
        <p><strong>Message:</strong> ${data.message}</p>
        <br />
        <h2>Order data:</h2>
        <p><strong>Name:</strong> ${newOrder.name}</p>
        <p><strong>Price:</strong> ${newOrder.price}</p>
        <p><strong>Description:</strong> ${newOrder.description}</p>
    `;
    console.log(newOrder);
}

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
    el.innerHTML = `Thank you for the order! Please fill out the form.`
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

const removeOrderData = () => {
    const root = document.querySelector('#order-details');
    root.innerHTML = '';
}
const handleButtonClick = (martRoot, button) => {
    cleanMart();
    showSuccessMessage(martRoot, button);
    showForm();
    removeOrderData();
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

const initForm = () => {
    const trigger = document.querySelector('.js-form-button');
    const formElements = document.forms.formValidation;
    const form = document.querySelector('#formValidation');

    trigger.addEventListener('click', () => {
        console.log('click');
        const firstname = formElements.firstname.value;
        const lastname = formElements.lastname.value;
        const email = formElements.email.value;
        const phone = formElements.phone.value;
        const city = formElements.city.value;
        const post = formElements.post.value;
        const gender = formElements.gender.value;
        const message = formElements.message.value;
        let formData = {}

        removeErrors(document.querySelectorAll('.error-message'));

        firstname.match(regExp.name) ? formData = { ...formData, firstname } : setError('firstname-parent');
        lastname.match(regExp.name) ? formData = { ...formData, lastname } : setError('lastname-parent');
        email.match(regExp.email) ? formData = { ...formData, email } : setError('email-parent');
        phone.match(regExp.phone) ? formData = { ...formData, phone } : setError('phone-parent');
        city !== '-1' ? formData = { ...formData, city } : setError('city-parent');
        post !== '-1' ? formData = { ...formData, post } : setError('post-parent');
        gender ? formData = { ...formData, gender } : setError('gender-parent');
        message ? formData = { ...formData, message } : setError('message-parent');

        isValid ? showValidData(form, formData) : isValid = true;
    })
}

document.addEventListener('DOMContentLoaded', () => {
    initMarket(productCatalog);
    initForm();
})
