const targetChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";

export default function caesarCipher(string, shift) {
  let ciphertext = "";

  for (const codePoint of string) {
    if (!targetChars.includes(codePoint)) {
      ciphertext += codePoint;
      continue;
    }

    const index = lowerChars.indexOf(codePoint.toLowerCase());
    let shifted = lowerChars[(index + shift) % 26];

    if (codePoint === codePoint.toUpperCase()) {
      shifted = shifted.toUpperCase();
    }

    ciphertext += shifted;
  }

  return ciphertext;
}
