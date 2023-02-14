const Account = require("../../lib/Account");
const account = new Account(1000);
const Statement = require("../../lib/Statement");
const statement = new Statement();

describe("class Statement()", () => {
  it("(1)returns header, printStatement", () => {
    statement.transaction(account.returnBalance());
    expect(statement.printStatement()).toEqual([
      // "date || credit || debit || balance",
      "14/2/2023||1000.00||||1000.00",
    ]);
  });

  it("(2)prints an array containing the results of header, account.deposit, account.balance as elements", () => {
    statement.transaction(account.deposit(1000));
    expect(statement.printStatement()).toEqual([
      // "date || credit || debit || balance",
      "14/2/2023||1000.00||||2000.00",
      "14/2/2023||1000.00||||1000.00",
    ]);
  });

  xit("(3)prints an array containing the results of header, account.withdrawal, account.balance account.deposit as elements", () => {
    statement.transaction(account.withdraw(500));
    expect(statement.printStatement()).toEqual([
      "date || credit || debit || balance",
      "14/2/2023||||500.00||1500.00",
      "14/2/2023||1000.00||||2000.00",
      "14/2/2023||1000.00||||1000.00",
    ]);
  });
});
