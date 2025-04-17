'use strict'
// ASYNC AWAIT
// Сучасний підхід, без ланцюгів чейнінгу

const doAction = async () => {
    return 45;

    // async ретьорнить результат в обгортці Promise
    // return new Promise(resolve => {
    //     resolve(43);
    // })
}

const sleep = async (delay = 1000) => {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    })
}

const start = async () => {
    console.log('START');

    try {
        await sleep(2000);
        let value = await doAction();
        console.log(value);
    } catch(error) {
        console.log(error);
    }
    console.log('END');
}

const start1 = async () => {
    console.log('START');
    doAction()
        .then(response => {
            console.log(response);
        })
        .then(() => {
            console.log('End');
        })
}

document.addEventListener('DOMContentLoaded', () => {
    start1();
    start();
});
