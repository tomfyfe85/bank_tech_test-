class Account {
  constructor(balance) {
    this.balance = balance
    this.newBalIn = 0
  }
  
  returnBalance() {
    return this.balance;
  }

  deposit(sumIn) {
   this.newBalIn = this.balance + sumIn;
   return this.newBalIn
  }
} 
module.exports = Account;