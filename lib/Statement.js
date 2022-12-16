const Account = require("./Account");

class Statement {
  constructor() {
    this.array = [];
  }

  transaction(number) {
    this.array.push(number);
  }

  printStatement() {
    return this.array;
  }
}
module.exports = Statement;
