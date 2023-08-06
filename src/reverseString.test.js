import reverseString from "./reverseString";

test("one word", () => {
  expect(reverseString("apple"))
    .toBe("elppa");
});

test("mix of \"normal\" characters", () => {
  expect(reverseString("!@a E5-=[ ]P "))
    .toBe(" P] [=-5E a@!");
});

test("graphemes consisting of a single code point", () => {
  expect(reverseString("!😊🍎"))
    .toBe("🍎😊!");
});

test("grapheme consisting of multiple code points", () => {
  expect(reverseString("👨‍👩‍👧"))
    .toBe("👧\u200D👩\u200D👨");
});
