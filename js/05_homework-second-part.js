const rootEl = document.getElementById('root');
const rootE1 = document.getElementById('roo1');
const currentYear = new Date().getFullYear();
const locations = [
    {
        capital: 'Київ',
        country: 'Україна',
    },
    {
        capital: 'Вашингтон',
        country: 'США',
    },
    {
        capital: 'Лондон',
        country: 'Великобританії',
    },
];
const sports = [
    {
        sport: 'Бокс',
        person: 'Майк Тайсон',
    },
    {
        sport: 'Футбол',
        person: 'Андрій Шевченко',
    },
    {
        sport: 'Баскетбол',
        person: 'Майкл Джордан',
    },
];

//***** 4.1 *****//
const handleTask1 = () => {
    const userName = prompt('Please input user name');
    alert(`Hello, ${userName}! How are you?`);
}

//***** 4.2 *****//
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

const handleTask3 = () => {
    const birthYear = parseInt(document.getElementById('birth-year').value);
    const city = document.getElementById('city').value;
    const sport = document.getElementById('sport').value;
    let message = '';
    let isCapital = false;
    let isSport = false;

    message += `Твій вік: ${currentYear - birthYear} рік/ів. `

    locations.forEach(location => {
        if (location.capital === city) {
            message += `Ти живеш у столиці ${location.country}. `
            isCapital = true;
        }
    })
    if (isCapital === false) message += `Ти живеш у місті ${city}. `

    sports.forEach(item => {
        if (item.sport === sport) {
            message += `Круто! Хочеш стати ${item.person}?. `
            isSport = true;
        }
    })
    if (isSport === false) message += `Виду спорту немає у списку(Обери: Бокс, Футбол або Баскетбол). `

    alert(message);
}

const handleTask4 = () => {
    const birthYear = document.getElementById('birth-year').value;
    const city = document.getElementById('city').value;
    const sport = document.getElementById('sport').value;
    let message = '';

    if (birthYear === '') message += `Ви не захотіли вводити дату народження. `;
    if (city === '') message += `Ви не захотіли вводити місто. `;
    if (sport === '') message += `Ви не захотіли вводити вид спорту. `;

    alert(message);
}

const handleTask5 = () => {
    let numOrStr = prompt('input number or string');
    console.log(numOrStr)

    // if (numOrStr === null) {
    //     console.log('ви скасували')
    // } else if (numOrStr.trim() === '') {
    //     console.log('Empty String');
    // } else if (isNaN(+numOrStr)) {
    //     console.log(' number is Ba_NaN')
    // } else {
    //     console.log('OK!')
    // }

    switch(true) {
        case numOrStr === null:
            console.log('ви скасували');
            break;
        case numOrStr.trim() === '':
            console.log('Empty String');
            break;
        case isNaN(+numOrStr):
            console.log('number is Ba_NaN');
            break;
        default:
            console.log('OK!');
    }
}

window.addEventListener('load', () => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');

    // handleTask1();
    button1.addEventListener('click',  handleTask2);
    button2.addEventListener('click',  handleTask3);
    button3.addEventListener('click',  handleTask4);
    button4.addEventListener('click',  handleTask5);
});
