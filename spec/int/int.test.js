const Account = require("../../lib/Account");
const account = new Account(1000);
const Statement = require("../../lib/Statement");
const statement = new Statement();

describe("class Statement()", () => {
  xit("returns printStatement", () => {
    statement.transaction(account.returnBalance());
    expect(statement.printStatement()).toEqual([1000]);
  });
  
  xit("prints an array with orig balance and balance with new total after deposit", () => {
    statement.transaction(account.deposit(1000));
    expect(statement.printStatement()).toEqual([1000, 2000]);
  });

   xit("prints an array with the orig balance and balance with new total after withdrawal", () => {
    
    statement.transaction(account.withdraw(500));
    expect(statement.printStatement()).toEqual([1000, 2000, 1500]);
   })
});
