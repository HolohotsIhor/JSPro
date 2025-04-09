'use strict'

class Coach {
    constructor(fullName, specialization, rating) {
        this.fullName = fullName;
        this.specialization = specialization;
        this.rating = rating;
    }

    showInfo () {
        console.log(`Coach: ${this.fullName}. Specialization: ${this.specialization}. Rating: ${this.rating}`);
    }
}
