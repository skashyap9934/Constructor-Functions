"use strict";

// Creating an array for storing the balance of all active accounts
const balanceData = new Array();

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
  if (amount <= this.balance) {
    this.balance -= amount;
    return `Rs. ${amount} Withdrawn.`;
  }
  return "Transaction Failed.";
};

// Adding the function 'checkBalance' to the prototype of the above constructor function
BankAccount.prototype.checkBalance = function () {
  return `Total: Rs. ${this.balance}`;
};

// Adding the function 'isActive' to the prototype of the above constructor function
BankAccount.prototype.isActive = function () {
  return this.balance >= 0;
};

// Creating first object
const acc_one = new BankAccount(12345, "Saurav Kashyap", "Saving", 10111);
console.log(acc_one.deposit(5000));
console.log(acc_one.withdraw(6000));
console.log(acc_one.checkBalance());
console.log(acc_one.isActive());
getTotalBalance.call(acc_one, acc_one.isActive());

// Creating second object
const acc_two = new BankAccount(3456745, "Raghav Jha", "Current", 98111);
console.log(acc_two.deposit(5000));
console.log(acc_two.withdraw(6000));
console.log(acc_two.checkBalance());
console.log(acc_two.isActive());
getTotalBalance.call(acc_two, acc_two.isActive());

// Creating third object
const acc_three = new BankAccount(
  9809812345,
  "Abhinav Shandilya",
  "Salary",
  56456
);
console.log(acc_three.deposit(5000));
console.log(acc_three.withdraw(6000));
console.log(acc_three.checkBalance());
console.log(acc_three.isActive());
getTotalBalance.call(acc_three, acc_three.isActive());

// Creating a function called 'getTotalBalance' for getting the total balance of all the active accounts
function getTotalBalance(isActive) {
  if (isActive) balanceData.push(+this.balance);
}

let totalBalance = 0;
balanceData.forEach((data) => (totalBalance += +data));
console.log(totalBalance);
