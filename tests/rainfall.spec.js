const rainfall = require("../src/rainfall");
describe("rainfall function", () => {
test("Case 1", () => {
    expect(rainfall(1)).toBeTruthy();
  });

test("Case 2", () => {
    expect(rainfall(1)).toBeFalsy();
  });

test("Case 3", () => {
    const expected = 'expected!';
    expect(rainfall(1)).toBe(expected);
  });

});
