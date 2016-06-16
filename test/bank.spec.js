const expect = require('chai').expect;
const Account = require('../lib/account');
const Bank = require('../lib/bank');

describe('Bank', () => {
  describe('constructor', () => {
    it('constructs a new Bank object', () => {
      const b1 = new Bank('Bank of Nithya');
      expect(b1).to.be.instanceof(Bank);
      expect(b1.name).to.equal('Bank of Nithya');
      expect(b1.accounts).to.be.length(0);
      expect(b1.accounts).to.deep.equal([]);
    });
  });
  describe('#addAccount', () => {
    it('Adds accounts to the Bank', () => {
      const b1 = new Bank('Bank of Nithya');
      const a1 = new Account('Alex');
      b1.addAccount(a1);
      expect(b1.accounts).to.be.length(1);
      expect(b1.accounts[0].name).to.equal('Alex');
    });
  });
  describe('#getValue', () => {
    it('Returns the sum of the balances of all the accounts', () => {
      const b1 = new Bank('Bank of Nithya');
      const a1 = new Account('Alex');
      const a2 = new Account('Nithya');
      const a3 = new Account('Chyld');
      a1.deposit(100);
      a2.deposit(525);
      a3.deposit(5);
      b1.addAccount(a1);
      b1.addAccount(a2);
      b1.addAccount(a3);
      expect(b1.accounts).to.be.length(3);
      expect(b1.getValue()).to.equal(630);
    });
  });
});
