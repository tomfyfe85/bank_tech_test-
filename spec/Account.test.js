const Account = require("../lib/Account");
const account = new Account(1000.00
);

// complete tests on other functions
describe("class Account()", () => {
  it("returns date, first deposit and balance to 2 decimal places", () => {
    expect(account.returnBalance()).toEqual(`8/2/2023||1000.00||||1000.00`);
  });
  // incomplete -  test returns"6/2/2023||2000||||10002000"
  it("returns date, amount deposited, new balance", () => {
    expect(account.deposit(2000.00)).toEqual(`8/2/2023||2000.00||||3000.00`);
  });
});
// Write more edge case tests