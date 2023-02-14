const BigNumber = require("bignumber.js");
const NewDate = require('./NewDate')

class Account {
  constructor(balance) {
    this.balance = new BigNumber(balance);
    this.bal = Math.floor(this.balance * 100) / 100;
    this.newBal = new BigNumber(0);
    this.withdrawalBalance = new BigNumber(0);
    this.date = new NewDate();
  }
  
  returnBalance() {
    const bal = this.bal.toFixed(2);
    return `${this.date.getDateString()} || ${bal} |||| ${bal}`;
  }
  // test returns as expected
  deposit(sumIn) {
    const sumIn2decimals = Math.floor(sumIn * 100) / 100;
    this.newBal = this.bal + sumIn2decimals;
    return `${this.date.getDateString()} || ${sumIn2decimals.toFixed(
      2
    )} |||| ${this.newBal.toFixed(2)}`;
  }
  // test returns as expected 
  withdraw(sumOut) {
    const sumOut2decimals = Math.floor(sumOut * 100) / 100;
    this.withdrawalBalance = this.newBal - sumOut;
    return `${this.date.getDateString()} |||| ${sumOut2decimals.toFixed(
      2
    )} || ${this.withdrawalBalance.toFixed(2)}`;
  }
}
module.exports = Account;
