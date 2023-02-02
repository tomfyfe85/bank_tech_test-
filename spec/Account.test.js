const Account = require("../lib/Account");
const account = new Account(1000.0);
// complete tests on other functions
describe("class Account()", () => {
  it("returns date, first deposit and balance", () => {
    expect(account.returnBalance()).toEqual(`2/2/2023||1000||||1000`);
  });
});
