// 7.1 Closes
console.log('7.1 Closes')
const sumCreator = () => {
    let sum = 0;

    return (num) => sum += num;
}

const sum = sumCreator();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));

// 7.2 Multiply
console.log('\n 7.2 Multiply')

const multiply = (a) => {
    return (b) => {
        return a * b;
    }
}

console.log(multiply(5)(2));
console.log(multiply(10)(10));

// 7.3 Function with loop.
//     Added closes functional
console.log('\n 7.3 Function with loop')

const checkValue = (value, minValue) => {
    const parseValue = parseInt(value);

    if ((isNaN(parseValue) || parseValue > minValue) && value !== '' && value !== null) {
        console.log(`Value: ${value}`);
        return true;
    }
}

const createDataLoop = (start, end, minValue) => {
    return () => {
        for (let i = start; i < end; i++) {
            const value = prompt(`Please input number > ${minValue}`);

            if (checkValue(value, minValue)) break;
        }
    }
}

const dataLoop = createDataLoop(0, 10, 100);
dataLoop();
