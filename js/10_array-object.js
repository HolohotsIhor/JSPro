'use strict'
// Use strict. ES5. Фіксить проблеми, помилки у js
// Можна додавати невизначену змінну бех const let
// myVar = 10
// Об'єкт { a: 5, a: 3 } - типу корректний
// this у функції === null|| undefined - не бачить глобальний об'єкт

// Правила Best Practices
// 'use strict'
// Область видимості не глобальна
// === замість ==
// && та ||.
// a > 0 && f()
// Example
// const defaultUsers = [{ id: 1, name: 'admin' }];
// function getUsersServer() {
//     // ...fetch...
//     return null
// }
// function showUsers(items) {
//     items.forEach(item => {})
// }
//
// const users = getUsersServer() || defaultUsers;
// showUsers(users);

// Кожна сутність в окремому файлі. Функції конструктори, класи, хелпери
// JS Code Style. airbnb

function generateKey(length, str) {
    let result = '';
    let randomValue = Math.round(Math.random() * 100);

    for (let i = 0; i < length; i++) {

    }
}

const characters = 'asdfghjklzxcvbnmqweytur12345678';

// MAP and SET. Структуры данных
// Як об'єкт, але ключом може бути number, string, boolean, object
// Map
const users = new Map();
users.set(231234, { name: 'Ihor'});
users.set(234, { name: 'Tatyana'});

users.get(231234);
users.delete(231234);
users.has(234);


// Set
const tools = new Set(); // массив унікальних значень
tools.add('hummer');
tools.add('screwdriver');
tools.add('hummer'); // не додастся

// WeakMap(ключі лише об'єкти), WeakSet(значення лише об'єкти)
