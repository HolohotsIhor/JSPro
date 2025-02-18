//while
// while(true) {
// }
//
// do {
// } while(true)

// for
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;

    if (i === 7) break;

    // console.log(i)
}

// for in for
let a = 0;
let b = 0;

for (let i = 0; i < 10; i++) {
    a++;

    for (let j = 0; j < 10; j++) {
        b++;
    }
}

// console.log(a);
// console.log(b)


// Homework
let start = 10;
let end = 20;

document.write('Task 1');
document.write('<br />');

for (let i = start; i <= end; i++) {
    document.write(i + ', ');
}

document.write('<br /><br />');
document.write('Task 2');
document.write('<br />');

for (let i = start; i <= end; i++) {
    document.write(i*i + ', ');
}

document.write('<br /><br />');
document.write('Task 3');
document.write('<br />');

const number = 7;

for (let i = 1; i <= 10; i++) {
    document.write(`${i} * ${number} = ${i*number}, `);
}

document.write('<br /><br />');
document.write('Task 4');
document.write('<br />');
let sum = 0;

for (let i = 1; i <= 15; i++) {
    sum += i;
}

document.write(sum);

document.write('<br /><br />');
document.write('Task 5');
document.write('<br />');
let dobutok = 1;

for (let i = 15; i <= 35; i++) {
    dobutok *= i;
}

document.write(dobutok);

document.write('<br /><br />');
document.write('Task 6');
document.write('<br />');
let sum500 = 0;

for (let i = 1; i <= 500; i++) {
    sum500 += i;
}

document.write(sum500 / 500);

document.write('<br /><br />');
document.write('Task 7');
document.write('<br />');
let sumOdd = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) sumOdd += i;
}

document.write(sumOdd);

document.write('<br /><br />');
document.write('Task 8');
document.write('<br />');
let sumEven = 0;

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) sumEven += i;
}

document.write(sumEven);

document.write('<br /><br />');
document.write('Task 9');
document.write('<br />');
const naturalNumber = parseInt(prompt('Input natural number'));

for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0) document.write(`${i} `);
}

document.write('<br /><br />');
document.write('Task 10');
document.write('<br />');

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(`${j * i} `);
    }
    document.write(`<br />`);
}
