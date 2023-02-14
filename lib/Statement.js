const Account = require("./Account");

class Statement {
  constructor() {
    this.array = [];
    this.header = "date || credit || debit || balance";
  }

  transaction(number) {
    this.array.push(number);
  }

  printStatement() {
    const reversedArray = [...this.array].reverse();
    return reversedArray;
  }
}
module.exports = Statement;
