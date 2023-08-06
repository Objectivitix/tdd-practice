import calculator from "./calculator";

test("addition", () => {
  expect(calculator.add(-3489.1, 5000.2))
    .toBeCloseTo(1511.1);
});

test("subtraction", () => {
  expect(calculator.subtract(-3489.1, 5000.2))
    .toBeCloseTo(-8489.3);
});

test("multiplication", () => {
  expect(calculator.multiply(-3489.1, 5000.2))
    .toBeCloseTo(-17446197.82);
});

test("division", () => {
  expect(calculator.divide(-3489.1, 5000.2))
    .toBeCloseTo(-0.698, 3);
});

test("disallow division by 0", () => {
  expect(() => calculator.divide(1, 0))
    .toThrow(/^cannot divide by 0$/);
});

test("disallow infinities", () => {
  expect(() => calculator.add(1, -Infinity))
    .toThrow(/^arguments must be finite numbers$/);
});

test("disallow NaN", () => {
  expect(() => calculator.add(1, NaN))
    .toThrow(/^arguments must be finite numbers$/);
});

test("disallow other types as arguments", () => {
  expect(() => calculator.add("a", "b"))
    .toThrow(/^arguments must be finite numbers$/);
});
