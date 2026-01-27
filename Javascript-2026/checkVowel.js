//Check Vowels

function checkVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];

  let isVowel = vowels.includes(char.toLowerCase());

  return isVowel ? "Vowel" : "Not a Vowel";
}
console.log(checkVowel("A"));

function checkVowelAlternative(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (val of vowels) {
    if (val === char.toLowerCase()) {
      return "Vowel";
    }
  }
  return "Not a Vowel";
}

console.log(checkVowelAlternative("b"));
