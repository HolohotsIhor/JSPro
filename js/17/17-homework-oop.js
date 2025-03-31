'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const ihor = new Student('Ihor', 'Holohots', 1994, [100, 90, 81, 99, 89]);

    console.log(ihor.getAge());
    console.log(ihor.getGPA());
    for (let i = 0; i < VISIT_SIZE; i++) console.log(ihor.present());
    console.log(ihor.absent()); // No more size in log visitor
    console.log(ihor.summary());
    console.log('\n');

    const alina = new Student('Alina', 'Papina', 1994, [0, 90, 81, 99, 89]);

    console.log(alina.getAge());
    console.log(alina.getGPA());
    for (let i = 0; i < VISIT_SIZE; i++) console.log(alina.present());
    console.log(alina.summary());
    console.log('\n');

    const pasha = new Student('Pasha', 'Mamin', 1994, [0, 90, 81, 99, 89]);

    console.log(pasha.getAge());
    console.log(pasha.getGPA());
    for (let i = 0; i < VISIT_SIZE; i++) console.log(pasha.absent());
    console.log(pasha.summary());
})
