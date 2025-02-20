const rootEl = document.getElementById('root');
const rootE2 = document.getElementById('root1');
const rootE3 = document.getElementById('root2');

// 6.1 Remove symbols
const handleTask1 = () => {
    let array = document.getElementById('symbols')
        // .value.replaceAll(" ", "").replaceAll(",", "").replaceAll(".", "").split("");
        .value.split(""); // .split - return array
    let inputData = document.getElementById('string').value;

    array.forEach(item => {
        inputData = inputData.replaceAll(item, "");
    })
    writeMessage(inputData, rootEl);
}

// 6.2 Middle value
const handleTask2 = (array) => {
    let sum = 0;
    let count = 0;

    array.forEach(item => {
        if (typeof item === 'number') {
            sum += item;
            count++;
        }
    })
    console.log(`Arithmetic mean: ${sum / count}`);
    writeMessage(`Arithmetic mean: ${sum / count}`, rootE2);
}

// 6.3 Remove element
const removeElement = (array, item) => {
    const result = array.filter(el => el !== item);

    console.log(result);
    writeMessage(`Filtered Array: ${result.join(', ')}`, rootE3);
}

window.addEventListener('load', () => {
    const button = document.getElementById('button');
    const someArray = [123, 'you', 15, 'asdasd'];
    const item = 13;

    button.addEventListener('click',  handleTask1);
    handleTask2(someArray);
    removeElement(someArray, item);
});
