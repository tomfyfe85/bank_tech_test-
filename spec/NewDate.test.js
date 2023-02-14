const NewDate = require("../lib/NewDate");
const date = new NewDate();

describe("class Date()", () => {
 it("returns todays day/month/year", () => {
    expect(date.getDateString()).toEqual("14/2/2023");
  });
});
