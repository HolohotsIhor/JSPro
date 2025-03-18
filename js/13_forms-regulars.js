'use strict'

const initForm = () => {
    const trigger = document.querySelector('.js-form-button');

    trigger.addEventListener('click', () => {
        // Api forms
        // const formElements = document.forms[0].elements;
        const formElements = document.forms.signin;
        const login = formElements.login.value;
        const city = formElements.city.value;
        const gender = formElements.gender.value;
        const selectedSkills = [];

        for (let i = 0; i < formElements.skills.length; i++) {
            if (formElements.skills[i].checked) selectedSkills.push(formElements.skills[i].value);
        }

        const obj = {
            login,
            city,
            gender,
            skills: selectedSkills,
        }

        console.log(obj);
    })
}

const initRegistrationForm = () => {
    const trigger = document.querySelector('.js-save-button');
    let isValid = true;

    trigger.addEventListener('click', () => {
        const formElements = document.forms.registration;
        const name = formElements.username;

        if (name === '') {
            isValid = false;
            // todo: show div with error
        }
    })
}

// Validation Regular expression.
// mods i - інсенсетів, регістронезалежний.
// g - globally пошуук всіх співпадінь в рядку, не лише першого
// m - multiline matching - багаторядковий пошук
// /pattern/modifiers
// /abs/i
// /[0-9]{5}/

// Метод строк
// str.search(/@/) - повертає індекс, з якого починається співпадіння. Якщо ні: -1
// str.match(/abc/) - повертає колекію, де буде індекс
// str.match(/abc/g) - массив співпадінь
// str.split(/\s/) - розбити рядок по регулярному виразу
// \w - беква або цифра; \d - цифра; \s - пробіл
// /\w\d\s\d\w/ - A1 2e
// [abcd]
// (xxx | yyy)
let str = 'qqqwww   123 aksfjsjdkfh';
let regExp = /[0-9]{3}/;
console.log(str.match(regExp));

let str1 = 'qqqwww   123 aksfjsjdkfh 333';
let regExp1 = /[0-9]{3}/g;
console.log(str1.match(regExp1));

let userStr = 'Why have I bought this Samsung? Better iPhone or lg';
const regExpSamsung = /(LG|iphone)/igm;
console.log(userStr.replace(regExpSamsung, '***'));
let str3 = 'banana potato, +380987465543'
const pattern = /(\+38[0-9]{10}|ba(na){2}|[0-9]{16})/g;

// Квантифікатори. x{N} - N входжень
// x+ хоча б одне входження
// x* -нуль чи більше входжень
document.addEventListener('DOMContentLoaded', () => {
    // initForm();
    initRegistrationForm();
})
