const Account = require("../../lib/Account");
const account = new Account(500);
const Statement = require("../../lib/Statement");
const statement = new Statement();

describe("class Statement()", () => {
  it("returns prints statement", () => {
    statement.transaction(account.returnBalance());
    expect(statement.printStatement()).toEqual([500]);
  });
  
});