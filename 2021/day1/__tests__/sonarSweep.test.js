const { sonarSweep, part2 } = require("../sonarSweep");
const testInput = require("../testInput");
const input = require("../input");

describe("sonarSweep", () => {
  test("returns 0 when 1 number passed in", () => {
    expect(sonarSweep("234")).toBe(0);
  });

  test("returns 0 when passed 2 numbers when 2nd number isnt greater than the first", () => {
    expect(sonarSweep("234\n199")).toBe(0);
  });

  test("returns correct sum when passed multiple numbers", () => {
    expect(sonarSweep(testInput)).toBe(7);
  });

  test("main input", () => {
    expect(sonarSweep(input)).toBe(1529);
  });
});

describe("part2", () => {
  test("returns correct sum when passed multiple nums with three-meaurement sliding window", () => {
    expect(part2(testInput)).toBe(5);
  });

  test("main input", () => {
    expect(part2(input)).toBe(1567);
  });
});
