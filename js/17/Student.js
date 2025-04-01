const VISIT_SIZE = 25;
const START = 0;

function Student(name, lastname, birthYear, grades) {
    let daysCounter = 0;

    this.name = name;
    this.lastname = lastname;
    this.birthYear = birthYear;
    this.grades = grades;
    this.visits = new Array(VISIT_SIZE);

    this.getAge = function() {
        return `Student ${this.lastname} ${this.name} is ${new Date().getFullYear() - 1994}`;
    }

    this.calculateGPA = function() {
        return this.grades.reduce((acc, num) => acc += num, 0) / grades.length;
    }

    this.getGPA = function() {
        return `GPA of ${this.lastname} ${this.name} is ${this.calculateGPA()}`;
    }

    this.setVisit = function (value) {
        this.visits[daysCounter] = value;
        daysCounter++;
        return `To visitors log set value ${value}`;
    }

    this.present = function() {
        return daysCounter < VISIT_SIZE ? this.setVisit(true) : ('No more size in log visitor');
    }

    this.absent = function() {
        return daysCounter < VISIT_SIZE ? this.setVisit(false) : ('No more size in log visitor');
    }

    this.summary = function() {
        let presentDays = 0;
        let absentDays = 0;
        let otherDays = 0;
        let mediumGrades = this.calculateGPA();

        for (let i = START; i < VISIT_SIZE; i++) {
            this.visits[i]
                ? presentDays += 1
                : ( this.visits[i] === false ? absentDays += 1 : otherDays += 1 )
        }

        let attendanceRate = presentDays / (VISIT_SIZE - otherDays);

        if (mediumGrades > 90 && attendanceRate > 0.9) return 'Молодець!';
        else if (mediumGrades > 90 || attendanceRate > 0.9) return 'Добре, але можна краще.';
        else return `Редиска! Ти пропустив аж ${absentDays} занять`;
    }
}
