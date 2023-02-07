const BigNumber = require("bignumber.js");

class Account {
  constructor(balance) {
    this.balance = new BigNumber(balance);
    this.bal = Math.floor(this.balance * 100) / 100;
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
  // test returns as expected 
  deposit(sumIn) {
    const sumIn2decimals = Math.floor(sumIn * 100) / 100;
    this.newBal = this.bal + sumIn2decimals;
    return `${this.dateString}||${sumIn2decimals.toFixed(2)}||||${this.newBal.toFixed(2)}`;
  }
  // testing
  withdraw(sumOut) {
    this.withdrawalBalance = this.newBal - sumOut;
    return this.withdrawalBalance;
  }
}
module.exports = Account;
