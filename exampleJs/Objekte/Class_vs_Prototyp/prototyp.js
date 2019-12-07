"use strict";
//old stuff prototype Inheritance

//wichtig ist diese funktion darf keinen Rückgabewert haben ! wiesooo ??
function BankAccount(balance) {
    this._initialBalance = balance;
    this._withdraws = [];
}


BankAccount.prototype.withdraw = function (amount) {
    if ( this.getBalance() - amount < 0){
        console.log("FEHLER");
    }
    else {
        this._withdraws.push(amount);
    }
};

BankAccount.prototype.getBalance = function () {
    let balance = this._initialBalance;
    for (let withdraw of this._withdraws){
        balance = balance - withdraw;
    }
    return balance;
};

let b = new BankAccount(2000);
b.withdraw(700);
b.withdraw(900);
console.log(b.getBalance());
