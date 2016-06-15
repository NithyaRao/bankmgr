const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', function(){
  describe('constructor', function(){
    it('constructs a a new object', function(){
    const a1 = new Account('Nithya', 100);
      expect(a1).to.be.instanceof(Account);
      expect(a1.name).to.equal('Nithya');
      expect(a1.balance).to.equal(100);
      expect(a1.deposits).to.be.length(0);
      expect(a1.withdraws).to.be.length(0);
    });
  });
  describe('#deposit', function(){
    it('should add to deposits and update the balance', function(){
     const a1 = new Account('Nithya', 100);
     a1.deposit(10);
      expect(a1).to.be.instanceof(Account);
      expect(a1.name).to.equal('Nithya');
      expect(a1.balance).to.equal(110);
      expect(a1.deposits).to.be.length(1);
      expect(a1.withdraws).to.be.length(0);
    });
  });
  describe('#withdraw', function(){
    it('should return add to withdraw and update the balance', function(){
     const a1 = new Account('Nithya', 100);
     a1.withdraw(20);
      expect(a1).to.be.instanceof(Account);
      expect(a1.name).to.equal('Nithya');
      expect(a1.balance).to.equal(80);
      expect(a1.deposits).to.be.length(0);
      expect(a1.withdraws).to.be.length(1);
    });
  });
});
