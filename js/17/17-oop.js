'use strict'
// ООП. Сутність -> Екземпляр
// 1. Інкапсуляція
// 2. Успадкування
// 3. Полімарфізм. Здатність екземпляра вести себе по різному, в залежності від умов використання.
// 4. Абстракція - високорівневе проектування без урахування деталей.

// Функції конструкції. Класси базуються на функціях.
// Сутності створюються в окремих файлах
// - З великої літери
// - this в середині
// - new при визові.

const personObj = new Person('Bill Gets', 50);

console.log(personObj);
console.log(personObj.name);
console.log(personObj.age);
console.log(personObj instanceof Person); // true
console.log(personObj instanceof Object); // true

document.addEventListener('DOMContentLoaded', () => {

})
