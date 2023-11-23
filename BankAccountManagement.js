"use strict";

// Creating the constructor function 'BankAccount'
function BankAccount(accountNumber, name, type, balance) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
}

// Adding the function 'deposit' to the prototype of the above constructor function
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  return `Rs. ${amount} Deposited.`;
};

// Adding the function 'withdraw' to the prototype of the above constructor function
BankAccount.prototype.withdraw = function (amount) {
    if(amount <= this.balance) {
        this.balance -= amount;
        return `Rs. ${amount} Withdrawn.`;
    };
    return 'Transaction Failed.';
};

BankAccount.prototype.checkBalance = function () {
    return `Total: Rs. ${this.balance}`;
};

BankAccount.prototype.isActive = function () {
    return (this.balance >= 0);
};

const acc_one = new BankAccount(12345, "Saurav Kashyap", "Saving", 10111);
console.log(acc_one.deposit(5000));
console.log(acc_one.withdraw(6000));
console.log(acc_one.checkBalance());
console.log(acc_one.isActive());

const acc_two = new BankAccount(3456745, "Raghav Jha", "Current", 98111);
console.log(acc_two.deposit(5000));
console.log(acc_two.withdraw(6000));
console.log(acc_two.checkBalance());
console.log(acc_two.isActive());

const acc_three = new BankAccount(9809812345, "Abhinav Shandilya", "Salary", 56456);
console.log(acc_three.deposit(5000));
console.log(acc_three.withdraw(6000));
console.log(acc_three.checkBalance());
console.log(acc_three.isActive());