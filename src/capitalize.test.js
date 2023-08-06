import capitalize from "./capitalize";

test("one word", () => {
  expect(capitalize("apple"))
    .toBe("Apple");
});

test("sentence with punctuation", () => {
  expect(capitalize("i like apples, bananas, and oranges!"))
    .toBe("I like apples, bananas, and oranges!");
});

test("first char is special: do nothing", () => {
  expect(capitalize("¿me estás bromeando?"))
    .toBe("¿me estás bromeando?");
});

test("first char has a diacritic", () => {
  expect(capitalize("ááá"))
    .toBe("Ááá");
});
