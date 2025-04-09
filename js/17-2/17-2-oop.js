'use strict'
// Classes - шаблон для опису сутності. Базове поняття в ООП будь-якої класичної мови програмування.
// Клас -> екземпляр.

class Human {
    static x = 1;

    static getDefaultTitle() {
        return 'Default title';
    }

    constructor(title, age) {
        Human.amount++; // Статична властивість
        this.title = title || Human.getDefaultTitle();
        this.age = age;
        console.log('Human.amount num: ', Human.amount);
    }
    getInfo() {
        console.log(`This full name: ${this.fullName}. Age: ${this.age}`)
    }

    get title() {
        return `${this.title}`;
    }

    set title(value) {
        this.title = value
    }
}

Human.amount = 0;

const myHuman1 = new Human();
const myHuman2 = new Human();
const myHuman3 = new Human();

class Task {
    #balance = 0; // решітка інкапсулює, поза класом звернутись не можемо
    #cSecurityKey = '0000';

    constructor(title, priority) {
        this.title = title;
        this.priority = priority;
    }

    showInfo() {
        console.log(``);
    }
}

const myTask = new Task();
console.log(typeof Task); // function
console.log(typeof myTask); // object

document.addEventListener('DOMContentLoaded', () => {

})
