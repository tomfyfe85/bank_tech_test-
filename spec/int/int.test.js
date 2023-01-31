const Account = require("../../lib/Account");
const account = new Account(500);
const Statement = require("../../lib/Statement");
const statement = new Statement();

describe("class Statement()", () => {
  it("returns printStatement", () => {
    statement.transaction(account.returnBalance());
    expect(statement.printStatement()).toEqual([500]);
  });
  it("prints an array with orig balance and balance with new total after deposit", () => {
    
    statement.transaction(account.deposit(500));
    expect(statement.printStatement()).toEqual([500, 1000]);
  });

  it("prints an array with the orig balance and balance with new total after withdrawal", () => {

   })
});
