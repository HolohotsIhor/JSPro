'use strict'
// Асинхронний код блокує стейт
// Ajax - asynchronous JS and Xml
// XMLHttpRequest
// fetch
// axios library

// fetch
// fetch configure
// 1. url
// 2. request configuration body: {
//  method: 'POST',
//  body: json.STRINGIFY([{a: 1}, {b: 2}])
//  header: {
//   'authToken': 'someToken'
//  }
// }

// fetch('http://localhost:63342/js-pro/api/database.json')
//     ,then(response => {
//         return response.json(); // .json - асинхронний метод
//     })
//     .then(result => {
//         console.log(result);
//     })



const loadProducts = async () => {
    const response = await fetch('http://localhost:63342/js-pro/api/database.json');
    const result = await response.json();
    console.log(result);
}

const showProducts = (data) => {
    const parent = document.querySelector('main');

    data.forEach(item => {
        const el = document.createElement('div');
        el.setAttribute('data-id', item.id);
        el.innerHTML = "";
    })
}
document.addEventListener('DOMContentLoaded', () => {

});
