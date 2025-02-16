//* Бінарні оператори *//
console.log(1 && true) // true
console.log(0 && true) // 0
console.log(0 || 5) // 5

console.log(0 || 5 || 0 || 1) // 5
//Example:
let isAdmin = true;
let balance = 100;
let isAuthenticated = false;
console.log(isAdmin || balance > 0 || isAuthenticated)

//Example:
console.log(1 && 3 && -1 && 0 && 7) // 0
// 1 && 5 && alert('Hello!') // true alert
1 && 0 && alert('Hello!') // false alert
// isValid && sendFormData()

// const data = propmpt('Enter your name') || 'Default name';

// a = a + 1
// a += 1
// a -= 1
// a *= 2
// a /= 2

// Шаблонні рядки
const myName = 'Ihor'
console.log(`Hello my name is ${myName}`)

//* Умовні оператори *//
// if else
const firstNum = 1;
const secondNum = 8;

if (firstNum > secondNum) {
    console.log('first')
} else if (firstNum < secondNum) {
    console.log('sec')
} else {
    console.log('rivno')
}

// switch case
let symbol = 'a';

switch(symbol) {
    case 'a':
    case 'A':
        document.write('It is "A"')
        break;
    case 'b':
        document.write('It is "b"')
        break;
    default:
        document.write('Def action')
        break;
}

// Тернарний оператор
const isValid = true;

document.write( isValid ? 'TRUE' : 'FALSE')
