const Account = require("../lib/Account");
const account = new Account(1000.0000);

// complete tests on other functions
describe("class Account()", () => {
  it("returns date, first deposit and balance to 2 decimal places", () => {
    expect(account.returnBalance()).toEqual(`3/2/2023||1000.00||||1000.00`);
  });
  ``;
  xit("returns date, amount deposited, new balance", () => {
    expect(account.deposit(2000.0)).toEqual(`3/2/2023||2000||||3000`);
  });
});
