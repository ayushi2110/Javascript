function checkPalindrome(str) {
  if (str.length <= 1) return str;
  let longest = "";
  function expand(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.slice(left + 1, right);
  }
  for (let i = 0; i < str.length; i++) {
    let odd = expand(i, i); // start from (0,0), (1,1), (2,2)...
    let even = expand(i, i + 1); // start from (0,1), (1,2), (2,3)...
    let current = odd.length > even.length ? odd : even;
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
}

console.log(checkPalindrome("edfabbaij"));

// b = b
// b = a
// a = a
// a = b

// brute force approach

function longestPalindromeBruteForce(str) {
  let longest = "";
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j <= str.length; j++) {
      let substring = str.slice(i, j);
      let reversed = substring.split("").reverse().join("");
      if (substring === reversed && substring.length > longest.length) {
        longest = substring;
      }
      console.log(longest);
    }
  }
}

longestPalindromeBruteForce("abbaab");
