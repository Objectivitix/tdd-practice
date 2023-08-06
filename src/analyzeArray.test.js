import analyzeArray from "./analyzeArray";

test("basic case", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("non-integer average", () => {
  expect(analyzeArray([1, 2, 3, 5]).average)
    .toBeCloseTo(2.75);
});
