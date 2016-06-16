/* eslint-disable func-names */
const uuid = require('uuid');
function Account(name) {
  this.name = name;
  this.balance = 0;
  this.number = uuid.v1();
  this.deposits = [];
  this.withdraws = [];
}

Account.prototype.deposit = function (amt) {
  this.deposits.push(amt);
  this.balance += amt;
  return this.balance;
};

Account.prototype.withdraw = function (amt) {
  if (amt <= this.balance) {
    this.withdraws.push(amt);
    this.balance -= amt;
  }
  return this.balance;
};

module.exports = Account;
