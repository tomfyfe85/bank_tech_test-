class Bank {
  constructor(balance) {
    this.balance = balance;
    this.date = new Date();
    this.dateString = `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`;
    this.array = [];
    this.final = 0;
    this.remainingSum = this.balance;
  }

  deposit(sumIn) {
    this.final = this.remainingSum + sumIn;

    const newBalIn = `${this.dateString} || ${sumIn} || || ${this.final}`;
    this.array.push(newBalIn);
    this.remainingSum = this.final;
  }

  withDraw(sumOut) {
    this.final = this.remainingSum - sumOut;

    const newBalOut = `${this.dateString} || || ${sumOut} || ${this.final}`;
    this.array.push(newBalOut);
    this.remainingSum = this.final;
  }

  

  checkBalance() {
   
    let bal = `${this.dateString}|| ${this.balance}|||| ${this.balance}`;
    this.balance = this.final

    this.array.unshift(bal);
    return this.array.reverse().map((transaction) => console.log(transaction));
  }
}

module.exports = Bank;
