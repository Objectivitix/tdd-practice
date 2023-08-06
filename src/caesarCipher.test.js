import caesarCipher from "./caesarCipher";

test("one word", () => {
  expect(caesarCipher("apple", 1))
    .toBe("bqqmf");
});

test("z wraps to a", () => {
  expect(caesarCipher("xyz", 5))
    .toBe("cde");
});

test("preserve case", () => {
  expect(caesarCipher("aBcXyZ", 5))
    .toBe("fGhCdE");
});

test("ignore all other characters", () => {
  expect(caesarCipher("1![á😊 abc", 5))
    .toBe("1![á😊 fgh");
});
