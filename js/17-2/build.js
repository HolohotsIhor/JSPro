'use strict'

class Build {
    constructor({ apartmentId, apartments, address, stages }) {
        this.apartmentId = apartmentId;
        this.apartments = apartments; // Array or Map
        this.address = address;
        this.stages = stages;
    }
    showBuildInfo() {
        console.log(`Build id: ${this.apartmentId}. Address: ${this.address}. Stages: ${this.stages}. Apartments: ${this.apartments}`)
    }
}

const build1Params = {
    apartmentId: 3,
    apartments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    address: 'Kvartal 278 street, build 3',
    stages: 9,
}
const build1 = new Build(build1Params);

build1.showBuildInfo()

//////////////////////////////////////
class Person {
    constructor(fullName, age, roomNumber) {
        this.fullName = fullName;
        this.age = age;
        this.roomNumber = roomNumber;
    }
    showPersonInfo() {
        console.log(`${this.fullName}. Age: ${this.age}. Room number: ${this.roomNumber}`);
    }
}

const person1 = new Person('Ihor Holohots', 31, 61);

/////////////////////////////////////
class Apartment {
    constructor(number, rooms, people) {
        this.number = number;
        this.rooms = rooms;
        this.people = Apartment.generateSet(people);
    }
    static generateSet(people) {
        const peopleSet = new Set();
        people.forEach(person => peopleSet.add(person));
        return peopleSet;
    }
    showApartmentInfo() {
        console.log(`Apartment number: ${this.number}.`);
        this.people.forEach(person => person.showPersonInfo());
    }
}

const apartment1 = new Apartment(61, 3, [
    new Person('Ihor Holohots', 31, 61),
    new Person('Tanya Holohots', 27, 61),
]);
apartment1.showApartmentInfo();

