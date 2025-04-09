'use strict'

class BankAccount {
    #balance;
    #history = [];

    constructor(value) {
        this.#balance = value;
    }

    deposit(value, reason = 'Deposit') {
        this.#balance += value;
        this.#history.push(`${reason} $${value}`);
    }

    withdraw(value, reason = 'Withdraw') {
        this.#balance -= value;
        this.#history.push(`${reason} $${value}`);
    }

    getBalance() {
        return this.#balance;
    }

    getHistory() {
        return this.#history.join('\n');
    }
}
