let obj = { value: 10};
let x = 10;

let obj2 = obj;
obj2.value = 15;

console.log(obj.value); // 15
console.log(obj2.value); // 15

function testX(value) {
    value++; // 11
}
testX(x) // 10

const obj3 = { value: 10 };

function testObj (obj) {
    obj.value++;
}

console.log(obj3.value) // 11

let myObj = { value: 10 } // Не для такого варіанту { value: 10, arr: []} // arr - посилання на масив. Глибоке копіювання.
let myObj1 = { ...myObj } //  or Object.assign({}, obj1)

let newObj = {
    value: 1,
    arr: [
        'HTML',
        'CSS',
        'REACT',
    ]
}

let newObj2 = { ...newObj }
newObj2.arr.push('Angular');

console.log(newObj);


//////// Functions context
const user = {
    name: 'John',
    showName: function () {
        console.log(this.name);
    }
}

user.showName();

const user2 = { name: 'Ihor' }
user.showName.call(user2)

// Вкладена функція. Замикання потрібні для замикання контекстую Інкапсуляція логіки

// Карування. Замикання з результатом лишке в кінці.
function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        }
    }
}

let firstStep = multiply(5);
//....
let secondStep = firstStep(7);
//...
let thirdStep = secondStep(1);
console.log(thirdStep);

// Рекурсія. Функція звертається сама до себе. Може заходити глибше і глибше в рекурсію.
function factorial(value) {
    if (value > 1) {
        return value * factorial(value - 1);
    }

    return value;
}

console.log(factorial(3));

/////
const youObj = {
    id: 1,
    name: 'Boss',
    employees: [{
        id: 2,
        name: 'CTO',
        employees: [
            {
                id: 3,
                name: 'Dev1'
            },
            {
                id: 4,
                name: 'Dev2'
            },
        ]
        },
        {
            id: 5,
            name: 'Architect'
        }
    ]
}

// Output. Name: ID. Умова для рекурсії, якщо в масиві є данні
