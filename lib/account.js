const uuid = require('uuid');
function Account(name, balance){
  this.name = name;
  this.balance = balance;
  this.number = uuid.v1();
  this.deposits = [];
  this.withdraws = [];
}

Account.prototype.deposit = function(amt){
  this.deposits.push(amt);
  this.balance += amt;
}

Account.prototype.withdraw = function(amt){
  this.withdraws.push(amt);
  this.balance -= amt;
}

module.exports = Account;
