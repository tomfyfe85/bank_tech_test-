const Account = require("../lib/Account");
const account = new Account(500);

describe("class Account()", () => {
  it("returns balance", () => {
    expect(account.returnBalance()).toEqual(500);
  });
});