const Account = require("../../lib/Account");
const account = new Account(1000);
const Statement = require("../../lib/Statement");
const statement = new Statement();

describe("class Statement()", () => {
  it("returns printStatement", () => {
    statement.transaction(account.returnBalance());
    expect(statement.printStatement()).toEqual([
      "14/2/2023||1000.00||||1000.00",
    ]);
  });

  it("prints an array containing the results of account.deposit, account.balance as elements", () => {
    statement.transaction(account.deposit(1000));
    expect(statement.printStatement()).toEqual([
      "14/2/2023||1000.00||||2000.00",
      "14/2/2023||1000.00||||1000.00",
      ]);
  });

 xit("prints an array containing the results of account.balance, account.deposit and account.withdrawal as elements", () => {
    statement.transaction(account.withdraw(500));
    expect(statement.printStatement()).toEqual([
      "14/2/2023||1000.00||||1000.00",
      "14/2/2023||1000.00||||2000.00",
      "14/2/2023||||500.00||1500.00",
    ]);
  });
});
