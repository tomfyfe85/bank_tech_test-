const Statement = require("../lib/Statement");
const statement = new Statement();

describe("class Statement()", () => {
  it("gives an empty array", () => {
    expect(statement.printStatement()).toEqual([]);
  });

});
