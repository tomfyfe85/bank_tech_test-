const BigNumber = require("bignumber.js");

class Account {
  constructor(balance) {
    this.balance = new BigNumber(balance);
    this.bal = this.balance.toFixed(2);
    this.newBal = new BigNumber(0);
    this.withdrawalBalance = new BigNumber(0);

    // this.dateString gives a of current date eg: 2/2/2023
    this.date = new Date();
    this.dateString = `${this.date.getDate()}/${
      this.date.getMonth() + 1
    }/${this.date.getFullYear()}`;
  }
  // test completed
  returnBalance() {
    return `${this.dateString}||${this.bal}||||${this.bal}`;
  }
  // test incomplete
  deposit(sumIn) {
    this.newBal = this.balance + sumIn;
    return `${this.dateString}||${sumIn}||||${this.newBal}`;
  }
  // testing
  withdraw(sumOut) {
    this.withdrawalBalance = this.newBal - sumOut;
    return this.withdrawalBalance;
  }
}
module.exports = Account;
