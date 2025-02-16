const rootEl = document.getElementById('root');

//***** 2 *****//
const handleTask2 = () => {
    const inputValue = document.getElementById('three-digit-number').value;
    const number = parseInt(inputValue);
    const thirdNum = number % 10;
    const secondNum = ((number % 100) - (number % 10)) / 10;
    const firstNum = (number - (number % 100)) / 100;
    let answerMessage = '';

    if (inputValue.length === 3) {
        if((firstNum === secondNum && firstNum === thirdNum)) answerMessage += 'All numbers are equal.<br />';
        else if((firstNum === secondNum)) answerMessage += 'First and second numbers are equal.<br />';
        else if((firstNum === thirdNum)) answerMessage += 'First and third numbers are equal.<br />';
        else if((secondNum === thirdNum)) answerMessage += 'Second and third numbers are equal.<br />';
        else answerMessage += 'Numbers NOT are equal.<br />';


        writeMessage(answerMessage, rootEl);
    } else writeMessage(`The number is not three digits`, rootEl);
}

window.addEventListener('load', () => {
    const button1 = document.getElementById('button1');

    // 1
    // const userName = prompt('Please input user name');
    // alert(`Hello, ${userName}! How are you?`)

    // 2
    button1.addEventListener('click',  handleTask2);
});
