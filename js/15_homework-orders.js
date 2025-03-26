'use strict'

let orders = [];

const removeItem = (id) => {
    orders = orders.filter(order => parseInt(order.id) !== parseInt(id));
    localStorage.setItem('orders', JSON.stringify(orders));
    initOrders();
}

const showOrders = (orders, root) => {
    root.innerHTML = '';

    orders.forEach(order => {
        const orderEl = document.createElement('li');
        const deleteTrigger = document.createElement('span');

        deleteTrigger.innerHTML = 'Remove';
        deleteTrigger.classList.add('button');
        deleteTrigger.setAttribute(DATA_VALUE_ATTR, order.id);

        orderEl.classList.add(LIST_ITEM_CLASS);
        orderEl.innerHTML = `<div data-id="${order.id}">${order.date}: ${order.name} - ${order.price}</div>`;
        orderEl.appendChild(deleteTrigger);
        root.appendChild(orderEl);
    });

    root.addEventListener('click', event => {
        const productId = event.target.getAttribute(DATA_VALUE_ATTR);
        if (productId) {
            removeItem(productId);
        }
    });
}

const getOrders = (root) => {
    orders.length ? showOrders(orders, root) : root.innerHTML = 'No orders...';

    root.addEventListener('click', event => {
        const targetId = event.target.getAttribute(DATA_ID_ATTR);
        const targetProduct = orders.find(order => order.id === parseInt(targetId));
        if (targetProduct) {
            alert(`Заказ: ${targetProduct.name}\nЦена: ${targetProduct.price}\nДата: ${targetProduct.date}\nОписание: ${targetProduct.description}`);
        }
    });
}

const initOrders = () => {
    const root = document.querySelector('#orders');
    orders = JSON.parse(localStorage.getItem('orders')) || [];
    getOrders(root);
}

document.addEventListener('DOMContentLoaded', initOrders);
