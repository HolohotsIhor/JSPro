'use strict'
// Синхронный код — выполняется первым (основной стек вызовов).
// Микротаски (microtasks) — выполняются после завершения текущего синхронного кода:
// Promise.then/catch/finally
// queueMicrotask
// MutationObserver
// Макротаски (macrotasks) — выполняются после микротасков:
// setTimeout
// setInterval
// setImmediate (в Node.js)
// requestAnimationFrame (в браузере)
// события DOM (например, click, load, и т.п.)

const trigger = document.querySelector('.button');
const output = document.querySelector('.output');
let interval;

setTimeout(() => {
    console.log('Hello I am timeout');
})
//
// for (let i = 0; i < 100000; i++) {
//     console.log(i);
// }

document.addEventListener('DOMContentLoaded', () => {
    // interval = setInterval(() => {
    //     output.innerHTML += '<span>Message</span>';
    // }, 4000);

    trigger.addEventListener('click', () => {
        clearInterval(interval);
        // clearTimeout;
    })

    // Promise
    // Pending, resolved, rejected
    // resolve, reject - посилання на функції
    Promise.resolve()
        .then()
        .then()
        .then()
        .then()

    let hello = new Promise(function (resolve, reject) {
        // ajax request to server
        // resolve('Some info. Status ok.');
        reject('Oooops');
    })

    hello
        .then((str) => {
            return `${str} - resolve`;
        })
        .then((str) => {
            return `${str}!`;
        })
        .then((str) => {
            console.log(str);
        })
        .catch((errorMsg) => console.log(errorMsg));
});
