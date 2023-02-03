const Account = require("../lib/Account");
const account = new Account(1000.00);
// complete tests on other functions
describe("class Account()", () => {
  it("returns date, first deposit and balance", () => {
    expect(account.returnBalance()).toEqual(`3/2/2023||1000||||1000`);
  });
``
  it("returns date, amount deposited, new balance", () => {
    expect(account.deposit(2000.00)).toEqual(`3/2/2023||2000||||3000`)
  })
});
