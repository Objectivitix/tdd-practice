export default function reverseString(string) {
  let result = "";

  for (const codePoint of string) {
    result = codePoint + result;
  }

  return result;
}
