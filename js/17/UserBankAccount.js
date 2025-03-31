function UserBankAccount(fullName, birthName, balance) {
    this.fullName = fullName;
    this.birthName = birthName;
    let _balance = balance; // Інкапсуляція

    this.changeBalance = function(value, reason) {
        _balance += value;
        console.log(_balance + " " + reason);
    }
}

const max = new UserBankAccount('Maksym', '24', 1000)

max.changeBalance(10000, `Balance on your acc changed on UAH`)
max.changeBalance(-8000, `Balance on your acc changed on UAH`)



