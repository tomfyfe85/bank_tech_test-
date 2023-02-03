class Account {
  constructor(balance) {
    this.balance = balance;
    this.newBal = 0;
    this.withdrawalBalance = 0;
    this.date = new Date();
    this.dateString = `${this.date.getDate()}/${
      this.date.getMonth() + 1
    }/${this.date.getFullYear()}`;
  }
  // test completed 
  returnBalance() {
    return `${this.dateString}||${this.balance}||||${this.balance}`;
  }
// test complete
  deposit(sumIn) {
    this.newBal = this.balance + sumIn;
    return `${this.dateString}||${sumIn}||||${this.newBal}`
  }
// testing
  withdraw(sumOut) {
    this.withdrawalBalance = this.newBal - sumOut;
    return this.withdrawalBalance;
  }
}
module.exports = Account;
