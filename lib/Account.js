class Account {
  constructor(balance) {
    this.balance = balance
    this.newBal = 0
    this.withdrawalBalance = 0
    this.date = new Date();
    this.dateString = `${this.date.getDate()}/${this.date.getMonth()+1}/${this.date.getFullYear()}`;
 }
  // add date to the other functions
  returnBalance() {
    return `${this.dateString}||${this.balance}||||${this.balance}`
  }

  deposit(sumIn) {
   this.newBal = this.balance + sumIn;
   return this.newBal
  }

  withdraw(sumOut) {
   this.withdrawalBalance = this.newBal - sumOut;
   return this.withdrawalBalance
  }
} 
module.exports = Account;