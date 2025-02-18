const rootEl = document.getElementById('root');
const rootEl1 = document.getElementById('root1');
const rootEl2 = document.getElementById('root2');
const rootEl3 = document.getElementById('root3');
const rootEl4 = document.getElementById('root4');

// Task 1
const start = 20;
const end = 30;
const step = 0.5;
let message = '';

for (let i = start; i <= end; i++) {
    if (i !== 30) message += `${i} ${i + step} `;
    else message += `${i}`;
}
writeMessage(message, rootEl);

// Task 2
const dollarValue = 26;
const dollarStart = 10;
const dollarEnd = 100;
const dollarStep = 10;
let message1 = '';

for (let i = dollarStart; i <= dollarEnd; i += dollarStep) {
    message1 += `${i} dollar it's ${i * dollarValue} hryvnias.<br /> `;
}
writeMessage(message1, rootEl1);

// Task 3
const handleTask = () => {
    const number = parseInt(document.getElementById('integer-number').value)
    const start = 1;
    const end = 100;
    let result = '';

    for (let i = start; i <= end; i++) {
        if ((i * i) <= number) result += `${i}, `;
        else break;
    }

    writeMessage(result, rootEl2);
}

const handleTask2 = () => {
    const number = parseInt(document.getElementById('simple-number').value);
    const start = 2;
    let divider = 0;

    if (number > 1) {
        for (let i = start; i <= number; i++) {
            if (number % i === 0) divider++;
        }

        if (divider === 1) writeMessage(`Number is simple`, rootEl3);
        if (divider > 1) writeMessage(`Number is NOT simple`, rootEl3);
    } else writeMessage(`Please, input number > 1`, rootEl3);
}

const handleTask3 = () => {
    const powerNumber = 3;
    const number = parseInt(document.getElementById('square-number').value);
    const start = 1;
    const end = 99999;
    let squareResult = 0;
    let isSquare = false;
    let currentPower = 1;

    if (number === powerNumber) {
        writeMessage(`It is number 3 in ${currentPower} power.`, rootEl4);
        return;
    } else if (number < powerNumber) {
        writeMessage(`The number must be greater then ${powerNumber - 1} power.`, rootEl4);
        return;
    }

    for (let i = start; i < end; i++) {
        if (squareResult === 0) squareResult = powerNumber * powerNumber;
        else squareResult = squareResult * powerNumber;

        if (squareResult === number) {
            isSquare = true;
            currentPower = i;
            break;
        } else if ((squareResult > number)) break;
    }

    if (isSquare) writeMessage(`It is number 3 in ${currentPower} power.`, rootEl4)
    else writeMessage(`Number has no valid power`, rootEl4)
}

window.addEventListener('load', () => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    button1.addEventListener('click',  handleTask);
    button2.addEventListener('click',  handleTask2);
    button3.addEventListener('click',  handleTask3);
});
