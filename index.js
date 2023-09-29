function isPalindrome(word) {
  // Remove any non-letter characters and convert to lowercase
  word = word.replace(/[^a-z]/g, "").toLowerCase();

  // Check if the reversed word is the same as the original
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

/* 
  Pseudocode:
  1. Remove non-letter characters and convert the string to lowercase.
  2. Create a reversed version of the string.
  3. Compare the original string with the reversed string.
  4. If they are the same, return true (it's a palindrome), otherwise return false.

  Written Explanation:
  - We first remove any non-letter characters and convert the string to lowercase to simplify the comparison.
  - Then, we create a reversed version of the string and compare it with the original.
  - If the two versions are the same, we return true, indicating it's a palindrome. Otherwise, we return false.

  Time Complexity: O(n), where n is the length of the input string.
  Space Complexity: O(n), for the reversedWord variable.
*/

// Test Cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
