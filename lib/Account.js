const BigNumber = require("bignumber.js");
const NewDate = require("./NewDate");

class Account {
  constructor(balance) {
    this.balance = new BigNumber(balance);
    this.newBal = Math.floor(this.balance * 100) / 100;
    this.date = new NewDate();
  }

  returnBalance() {
    const bal = this.newBal.toFixed(2);
    return `${this.date.getDateString()} || ${bal} |||| ${bal}`;
  }

  deposit(sumIn) {
    const sumIn2decimals = Math.floor(sumIn * 100) / 100;
    this.newBal = this.newBal + sumIn2decimals;
    return `${this.date.getDateString()} || ${sumIn2decimals.toFixed(
      2
    )} |||| ${this.newBal.toFixed(2)}`;
  }

  withdraw(sumOut) {
    const sumOut2decimals = Math.floor(sumOut * 100) / 100;
    this.newBal = this.newBal - sumOut2decimals;
    return `${this.date.getDateString()} |||| ${sumOut2decimals.toFixed(
      2
    )} || ${this.newBal.toFixed(2)}`;
  }
}
module.exports = Account;
