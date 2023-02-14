const Account = require("./Account");

class Statement {
  constructor() {
    this.array = [];
    this.header = "date || credit || debit || balance";
    this.accountHeader = "date || balance";
  }

  transaction(number) {
    this.array.push(number);
  }

  printBalance(balance) {
    return [this.accountHeader, balance];
  }

  printStatement() {
    const reversedArray = [...this.array].reverse();
    reversedArray.unshift(this.header);
    return reversedArray;
  }
}
module.exports = Statement;
