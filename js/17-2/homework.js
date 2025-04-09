'use strict'

document.addEventListener('DOMContentLoaded', () => {
    // 17.1
    console.log('17.1')
    const calc = new Calculator();

    console.log(calc.add(5, 3)); // 8
    console.log(calc.subtract(10, 4)); // 6
    console.log(calc.multiply(3, 6)); // 18
    console.log(calc.divide(8, 2)); // 4

    // 17.2
    console.log('\n17.2')
    const coach1 = new Coach('John Doe', 'Fitness', 4.7);
    const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

    coach1.showInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
    coach2.showInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"

    // 17.3
    console.log('\n17.3')
    const account1 = new BankAccount(1000);

    console.log(account1.getBalance()); // 1000
    account1.deposit(500);
    console.log(account1.getBalance()); // 1500
    account1.withdraw(200);
    console.log(account1.getBalance()); // 1300
    account1.deposit(2500, 'Deposit second salary');
    console.log(account1.getHistory());
    console.log(account1.getBalance()); // 3800
})
