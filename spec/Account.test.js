const Account = require("../lib/Account");
const account = new Account(1000.0);

// complete tests on other functions
// Write more edge case tests
describe("class Account()", () => {
  it("(1) returns date, first deposit and balance to 2 decimal places", () => {
    expect(account.returnBalance()).toEqual(`14/2/2023 || 1000.00`);
  });

  it("(2) returns date, amount deposited, new balance after deposit", () => {
    expect(account.deposit(2000.0)).toEqual(
      `14/2/2023 || 2000.00 |||| 3000.00`
    );
  });

  it("(3) returns date, amount deposited, new balance after withdrawal", () => {
    expect(account.withdraw(500.0)).toEqual(`14/2/2023 |||| 500.00 || 2500.00`);
  });
});
