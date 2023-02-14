const Account = require("../../lib/Account");
const account = new Account(1000);
const Statement = require("../../lib/Statement");
const statement = new Statement();

describe("class Statement()", () => {
  it("(1) returns header, printStatement", () => {
   expect(statement.printBalance(account.returnBalance());).toEqual([
      "date || balance",
      "14/2/2023 || 1000.00",
    ]);
  });

  it("(2) prints an array containing the results of header, account.deposit, account.balance as elements", () => {
    statement.transaction(account.deposit(2000.0));
    expect(statement.printStatement()).toEqual([
      "date || credit || debit || balance",
      "14/2/2023 || 2000.00 |||| 3000.00",
      "14/2/2023 || 1000.00 |||| 1000.00",
    ]);
  });

  it("(3) prints an array containing the results of header, account.withdrawal, account.balance account.deposit as elements", () => {
    statement.transaction(account.withdraw(500));
    expect(statement.printStatement()).toEqual([
      "date || credit || debit || balance",
      "14/2/2023 |||| 500.00 || 2500.00",
      "14/2/2023 || 2000.00 |||| 3000.00",
      "14/2/2023 || 1000.00 |||| 1000.00",
    ]);
  });

  it("(4) returns correct output after another deposit", () => {
    statement.transaction(account.deposit(1000));
    expect(statement.printStatement()).toEqual([
      "date || credit || debit || balance",
      "14/2/2023 || 1000.00 |||| 3500.00",
      "14/2/2023 |||| 500.00 || 2500.00",
      "14/2/2023 || 2000.00 |||| 3000.00",
      "14/2/2023 || 1000.00 |||| 1000.00",
    ]);
  });

  it("(5) returns correct output after another deposit", () => {
    statement.transaction(account.withdraw(500));
    expect(statement.printStatement()).toEqual([
      "date || credit || debit || balance",
      "14/2/2023 |||| 500.00 || 3000.00",
      "14/2/2023 || 1000.00 |||| 3500.00",
      "14/2/2023 |||| 500.00 || 2500.00",
      "14/2/2023 || 2000.00 |||| 3000.00",
      "14/2/2023 || 1000.00 |||| 1000.00",
    ]);
  });

  it("(6) ", () => {
    statement.printStatement();
    statement.transaction(account.withdraw(500));
    statement.transaction(account.deposit(500));
    statement.printStatement();
    statement.transaction(account.returnBalance());
    expect(statement.printStatement()).toEqual([
      "date || credit || debit || balance",
      "14/2/2023 || 3000.00 |||| 3000.00",
      "14/2/2023 || 500.00 |||| 3000.00",
      "14/2/2023 |||| 500.00 || 2500.00",
      "14/2/2023 |||| 500.00 || 3000.00",
      "14/2/2023 || 1000.00 |||| 3500.00",
      "14/2/2023 |||| 500.00 || 2500.00",
      "14/2/2023 || 2000.00 |||| 3000.00",
      "14/2/2023 || 1000.00 |||| 1000.00",
    ]);
  });

  it("(7) gives only the account balance", () => {
    expect(statement.printBalance(account.returnBalance())).toEqual([
      "date || balance",
      "14/2/2023 || 3000.00",
    ]);
  });
});
