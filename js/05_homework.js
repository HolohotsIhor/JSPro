const UNIT_NUMBER = 'number'
const UNIT_KM = 'kilometers';
const UNIT_ML = 'miles';
const rootEl = document.getElementById('root');
const rootEl1 = document.getElementById('root1');
const rootEl2 = document.getElementById('root2');
const rootEl3 = document.getElementById('root3');
const rootEl4 = document.getElementById('root4');
const rootEl5 = document.getElementById('root5');
const rootEl6 = document.getElementById('root6');

// Check 2 values
const checkTwoValue = (first, second, unit, root) => {
    if (isNaN(first) || isNaN(second)) {
        writeMessage(`Error. All data must be numbers`, root);
    } else {
        if (first > second) writeMessage(`First ${unit} biggest then second`, root);
        else if (first < second) writeMessage(`Second ${unit} biggest then first`, root);
        else writeMessage(`${unit} are equals`, root);
    }
}

//***** 1 *****//
const handleTask1 = () => {
    const firstValue = parseInt(document.getElementById('first-number').value);
    const secondValue = parseInt(document.getElementById('second-number').value);

    checkTwoValue(firstValue, secondValue, UNIT_NUMBER, rootEl);
}

//***** 2 *****//
const handleTask2 = () => {
    const kmValue = parseInt(document.getElementById('km-value').value);
    const mlValue = parseInt(document.getElementById('ml-value').value);

    const lengthToMeters = (value, type) => {
        if (type === UNIT_KM) return value * 1000;
        if (type === UNIT_ML) return value * 0.305;
    }

    checkTwoValue(lengthToMeters(kmValue, UNIT_KM), lengthToMeters(mlValue, UNIT_ML), UNIT_NUMBER, rootEl1);
}

//***** 3 *****//
const handleTask3 = () => {
    const a = parseInt(document.getElementById('a-number').value);
    const b = parseInt(document.getElementById('b-number').value);

    if (a > b) {
        console.log(a / b)
        if ((a % b) === 0) writeMessage(`Number "b" is a divisor of number a`, rootEl2);
        else writeMessage(`Number "b" is NOT a divisor of number a`, rootEl2);
    } else if (a < b) {
        if ((b % a) === 0) writeMessage(`Number "a" is a divisor of number b`, rootEl2);
        else writeMessage(`Number "a" is NOT a divisor of number b`, rootEl2);
    } else if (a === b) writeMessage(`Numbers are equals`, rootEl2);
    else writeMessage(`Error. All data must be numbers`, rootEl2)
}

//***** 4 *****//
const handleTask4 = () => {
    const a = parseInt(document.getElementById('last-number').value);
    const lastNumber = a % 10;

    console.log(`4. Last number: ${lastNumber}`);

    if (lastNumber === 0) writeMessage(`Last number is zero. Paired. Last number: <strong>${lastNumber}</strong>`, rootEl3);
    else if ((lastNumber % 2) === 0) writeMessage(`Pair last number. Last number: <strong>${lastNumber}</strong>`, rootEl3);
    else if ((lastNumber % 2) > 0) writeMessage(`Last number is not paired. Last number: <strong>${lastNumber}</strong>`, rootEl3);
    else if (isNaN(lastNumber)) writeMessage(`Error. Please input correct number. Last number: <strong>${lastNumber}</strong>`, rootEl3);
}

//***** 5 *****//
const handleTask5 = () => {
    const inputValue = document.getElementById('some-number').value;
    const number = parseInt(inputValue);
    const secondNum = number % 10;
    const firstNum = (number - secondNum) / 10;

    if (inputValue.length === 2) {
        if (firstNum > secondNum) writeMessage(`First number biggest then second`, rootEl4);
        else if (firstNum < secondNum) writeMessage(`Second number biggest then first`, rootEl4);
        else if (firstNum === secondNum) writeMessage(`Numbers are equals`, rootEl4);
        else  writeMessage(`Error. All data must be numbers`, rootEl4);
    } else writeMessage(`The number is not two digits`, rootEl4);
}

//***** 6 *****//
const handleTask6 = () => {
    const inputValue = document.getElementById('three-digit-number').value;
    const number = parseInt(inputValue);
    const thirdNum = number % 10;
    const secondNum = ((number % 100) - (number % 10)) / 10;
    const firstNum = (number - (number % 100)) / 100;
    let answerMessage = '';

    if (inputValue.length === 3) {
        if ((firstNum + secondNum + thirdNum) % 2 === 0) answerMessage += 'Paired sum of numbers.<br />';
        else if ((firstNum + secondNum + thirdNum) % 2 !== 0) answerMessage += 'NOT paired sum of numbers.<br />';

        if((firstNum + secondNum + thirdNum) % 5 === 0) answerMessage += 'Sum amount is a multiple of 5.<br />';
        else if((firstNum + secondNum + thirdNum) % 5 !== 0) answerMessage += 'Sum amount is NOT multiple of 5.<br />';

        if((firstNum * secondNum * thirdNum) > 100) answerMessage += 'Product of numbers greater than 100.<br />';
        else if((firstNum * secondNum * thirdNum) <= 100) answerMessage += 'Product of numbers less than 100.<br />';

        if((firstNum === secondNum && firstNum === thirdNum)) answerMessage += 'All numbers are equal.<br />';
        else if((firstNum === secondNum)) answerMessage += 'First and second numbers are equal.<br />';
        else if((firstNum === thirdNum)) answerMessage += 'First and third numbers are equal.<br />';
        else if((secondNum === thirdNum)) answerMessage += 'Second and third numbers are equal.<br />';
        else answerMessage += 'Numbers NOT are equal.<br />';


        writeMessage(answerMessage, rootEl5);
    } else writeMessage(`The number is not three digits`, rootEl5);
}

//***** 6 *****//
const handleTask7 = () => {
    const inputValue = document.getElementById('mirror-number').value;

    if (inputValue.length === 6) {
        const numbers = inputValue.split('');
        const firstPart = numbers.slice(0, 3);
        const secondPart = numbers.slice(3, 6).reverse();
        if (firstPart.join('') === secondPart.join('')) writeMessage(`This is mirror number`, rootEl6)
        else writeMessage(`This is NOT mirror number`, rootEl6)
    } else writeMessage(`The number is not six digits`, rootEl6);
}

window.addEventListener('load', () => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    const button5 = document.getElementById('button5');
    const button6 = document.getElementById('button6');
    const button7 = document.getElementById('button7');

    button1.addEventListener('click',  handleTask1);
    button2.addEventListener('click',  handleTask2);
    button3.addEventListener('click',  handleTask3);
    button4.addEventListener('click',  handleTask4);
    button5.addEventListener('click',  handleTask5);
    button6.addEventListener('click',  handleTask6);
    button7.addEventListener('click',  handleTask7);
});
