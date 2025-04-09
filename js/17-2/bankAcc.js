'use strict'

class BankAcc {
    #balance = 0; // Можемо звертатися лише в межах классу, напряму змінювати не можемо.

    constructor(fullName, balance) {
        this.fullName = fullName;
        this.#balance = balance;
    }

    changeBalance(value, reason) {
        console.log(reason);
        this.#balance += value;
    }
}

const myAcc = new BankAcc('Ihor Siemens', 1000)

myAcc.changeBalance(2000, 'Salary');
console.log(myAcc);

////////////////////////////////////////////////////////////
class Base {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Base {
    constructor(name) {
        super(name); // - Виклик батьківського з свойствами. При наслідуванні
        console.log(`${this.name}`);
    }
    showInfo() {

    }
}

const myChild = new Child();
console.log(myChild);

////////////////////////////////////////////////////////////

class Human {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
    getInfo() {
        console.log(`This full name: ${this.fullName}. Age: ${this.age}`)
    }
}

class Developer extends Human {
    constructor(fullName, age, skills, industry) {
        super(fullName, age);
        this.skills = skills;
        this.industry = industry;
    }

    getProfInfo() {
        console.log(`Skilla: ${this.skills}. Industry: ${this.industry}`)
    }
}

const student = new Developer('Helen Helen', 22, ['JS', 'TS', 'React'], 'Web')

student.getInfo();
student.getProfInfo();
console.log(student);
