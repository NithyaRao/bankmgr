const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', () => {
  describe('constructor', () => {
    it('constructs a a new object', () => {
      const a1 = new Account('Nithya');
      expect(a1).to.be.instanceof(Account);
      expect(a1.name).to.equal('Nithya');
      expect(a1.balance).to.equal(0);
      expect(a1.deposits).to.be.length(0);
      expect(a1.withdraws).to.be.length(0);
    });
  });
  describe('#deposit', () => {
    it('should add to deposits and update the balance', () => {
      const a1 = new Account('Nithya');
      const bal = a1.deposit(10);
      expect(a1).to.be.instanceof(Account);
      expect(a1.name).to.equal('Nithya');
      expect(a1.balance).to.equal(10);
      expect(bal).to.equal(10);
      expect(a1.deposits).to.be.length(1);
      expect(a1.withdraws).to.be.length(0);
    });
  });
  describe('#withdraw', () => {
    it('should return add to withdraw and update the balance', () => {
      const a1 = new Account('Nithya');
      a1.deposit(50);
      const bal1 = a1.withdraw(20);
      expect(a1).to.be.instanceof(Account);
      expect(a1.name).to.equal('Nithya');
      expect(a1.balance).to.equal(30);
      expect(bal1).to.equal(30);
      expect(a1.deposits).to.be.length(1);
      expect(a1.withdraws).to.be.length(1);
    });
    it('given a withrawal greater than the balance, the balance should remain unchanged', () => {
      const a1 = new Account('Nithya');
      a1.deposit(40);
      a1.withdraw(100);
      expect(a1.balance).to.equal(40);
      expect(a1.withdraws).to.be.length(0);
    });
  });
});
