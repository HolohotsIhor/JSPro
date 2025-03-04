// Рекурсія. Функція звертається сама до себе. Може заходити глибше і глибше в рекурсію.
function factorial(value) {
    if (value > 1) {
        return value * factorial(value - 1);
    }

    return value;
}

//////
const company = {
    id: 1,
    title: 'Boss',
    employees: [
        {
            id: 2,
            title: 'Chief tech Officier',
            employees: [
                {
                    id: 4,
                    title: 'Architect',
                    employees: [
                        {
                            id: 5,
                            title: 'Senior',
                        },
                        {
                            id: 6,
                            title: 'Middle',
                        },
                        {
                            id: 6,
                            title: 'Junior',
                        },
                    ]
                }
            ]
        },
        {
            id: 3,
            title: 'Chief tech Officier 2',
        }
    ]
}

function showCompany(obj) {
    console.log(`${obj.id}: ${obj.title}`);

    if (!obj.employees || !obj.employees.length > 0) return;

    for (let i = 0; i < obj.employees.length; i++) {
        showCompany(obj.employees[i]);
    }
}

// Dynamic
// Object.keys(obj).filter(function(key) {
//     if (Array.isArray(obj[key])) {
//         for (let i = 0; i < obj.employees.length; i++) {
//             showCompany(obj.employees[i]);
//         }
//     }
// })

showCompany(company);

// Function CONTEXT. this
// window - глобальный об'єкт. Контекст по дефолту
// use strict - вимикає контекст у функції. Буде undefined
console.log(window);

function f() {
    console.log(this);
    /*this.alert();*/ // Не відпрацює при юз стрікт
}
f();
//Arrow func
// Нема контексту. В объекте - классические функции
// Не можна застосовувати call, apply and bind
// Arguments. Не працює у стрілочній функції
const user = {
    id: 12,
    name: 'Ihor',
    showId: function() {
        // const self = this;
        console.log(`Id: ${this.id}`)

        // Через те, що немає контексту, бачить this об'єкту.
        const showName = () => {
            console.log(this.name)
        }
        showName();
    }
}
user.showId()

// Arguments. Не працює у стрілочній функції
function f1() {
    console.log(arguments);
}
console.log(12, 232, 12)

// Callback
const logger = (text = 'Ihor') => {
    console.log(`Text: ${text}`);
}
const showText = (callback) => {
    callback('Den');
}
showText(logger);

// HOF. Hight order functions
// Якщо функція приймає як параметр коллбек, то данна функція - функція вищого порядку.
// Або, функція створює і повертає іншу функцію

// Методи массивів
// .forEach() - просто щось показуємо
// .map() - на базі массиву, повертаємо новий, модифікований
// .filter() - на базі массиву, повертаємо новий, який задовольняє умову
// .find() - повертає перший елемент, для якого умова true
// .findIndex() - повертає індекс першого елемент, для якого умова true

const array = [1, 2, 3, 6, 10];
array.reduce((prevValue, value) => {
    console.log(prevValue);
    console.log(value);
    console.log('======')

    prevValue += value;
    return prevValue;
})

// for off - массиви
// for in - об'єкти та массиви

const users = {
    id: 1,
    name: 'Ihor',
}

for (let key in users) {
    console.log(`${key.id}: ${key.name}`)
}
