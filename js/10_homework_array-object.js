'use strict'

const start = 0;
const end = orders.length

// Presentation 1
console.log("Presentation 1");
const getOrdersCountReduce = (orders) => {
    return orders.reduce((acc, order) => {
        const user = order.user;

        acc[user] = (acc[user] || 0) + 1;

        return acc;
    }, {});
};

const ordersResult = getOrdersCountReduce(orders);
console.log("Orders Count:", ordersResult);

const getOrdersCountMap = (start = 0, end) => {
    const userOrdersCount = new Map();

    for (let i = start; i < end; i++) {
        const user = orders[i].user;
        const order = orders[i].items;

        !userOrdersCount.has(user)
            ? userOrdersCount.set(user, { orders: 1 })
            : order.length > 0 && userOrdersCount.get(user).orders++;
    }

    return userOrdersCount;
}
const ordersResultMap = getOrdersCountMap(start, end);
console.log(`Orders Map result: `, ordersResultMap);

// Presentation 2
console.log("\nPresentation 2");
const ordersSumReduce = (orders) => {
    return orders
        .map(order => ({
            user: order.user,
            total: order.items.reduce((acc, item) => acc + item.price, 0)
        }))
        .reduce((acc, { user, total }) => {
            acc[user] = (acc[user] || 0) + total;

            return acc;
        }, {})
}
const ordersSumReduceResult = ordersSumReduce(orders);
console.log('ordersSumReduceResult: ', ordersSumReduceResult);

const ordersSumMap = (orders) => {
    const result = new Map();

    orders.forEach(({ user, items }) => {
        const orderPrice = items.reduce((acc, item) => {
            acc += item.price;

            return acc;
        }, 0);

        result.has(user)
            ? result.get(user).sum += orderPrice
            : result.set(user, { sum: orderPrice })
    })

    return result;
}
const ordersSumMapResult = ordersSumMap(orders);
console.log('ordersSumMapResult: ', ordersSumMapResult);

// Presentation 3
console.log("\nPresentation 3");
const getUniqueProducts = (orders) => {
    const result = new Set();

    orders.forEach(({ items }) => {
        items.forEach(({ name }) => {
            result.add(name);
        })
    })

    return result;
}
const uniqueProductsResult = getUniqueProducts(orders);
console.log('uniqueProductsResult: ', uniqueProductsResult);

const maximumCostsSum = (orders) => {
    let maxCost = 0;
    let user = null;

    orders.forEach((order, index) => {
        if (order.sum > maxCost) {
            maxCost = order.sum;
            user = index;
        }
    })

    user
        ? console.log(`${user} витратив більше за всіх: $${maxCost}`)
        : console.log('Ще не має замовлень')
}
maximumCostsSum(ordersSumMapResult);

// ДЗ 10.1. Картка користувача
console.log('\nДЗ 10.1. Картка користувача');
const user = {
    name: 'Ihor',
    age: 30,
    location: 'Kremenchuk',
    showUserData: function () {
        console.log(`Ім'я: ${this.name}
            \nПроживає у місті/селі: ${this.location}
            \nВік: ${this.age}`);
    }
}
user.showUserData();

// ДЗ 10.2. Отримання парних чисел з масиву
console.log('\nДЗ 10.2. Отримання парних чисел з масиву');
const arrFilter = arr.filter( item => (item % 2 === 0))
console.log('Filter: ', arrFilter)

const arrReduce = arr.reduce((acc, value) => {
    value % 2 === 0 && acc.push(value)

    return acc;
}, [])
console.log('arrReduce: ', arrReduce)

const arrForEach = [];
arr.forEach(item => {
    if (item % 2 === 0) arrForEach.push(item);
});
console.log('arrForEach: ', arrForEach)

// ДЗ 10.3. Книга контактів
console.log('\nДЗ 10.3. Книга контактів');
const contactBook = {
    contacts: [
        {
            name: 'Ihor',
            phone: '+380987736253',
            email: 'gologotest@gmail.com'
        },
        {
            name: 'Andrey',
            phone: '+3809871153',
            email: 'andrest@gmail.com'
        },
    ],
    findUser: function(name) {
        this.contacts.forEach(contact => {
            contact.name === name && console.log(`Контакт: ${contact.name}\nТелефон: ${contact.phone}\nЕмайл: ${contact.email}`);
        })
    },
    addUser: function(name, phone, email) {
      this.contacts.push({ name: name, phone: phone, email: email });
      console.log(`Added new contact ${name}`)
    },
}
contactBook.findUser('Andrey');
contactBook.addUser('Snoop Dog', '+380977777', 'snoopWeed@gmail.com');
console.log(contactBook.contacts)
