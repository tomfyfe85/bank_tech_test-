class Account {
  constructor(balance) {
    this.balance = balance
    this.newBal = 0
    this.withdrawalBalance = 0
  }
  
  returnBalance() {
    return this.balance;
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