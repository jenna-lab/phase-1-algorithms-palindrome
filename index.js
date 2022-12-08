function reverse(word) {
  //`abc` => `cba`
  // const wordArray = word.split("");
  // const reversedWordArray = wordArray.reverse();
  // const reversedWord = reversedWordArray.join("");
  // return reversedWord;
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverse(word);
  //check if input is the same as reverse
  return word === reversedWord;
}
/* 
  Add your pseudocode here

it means that if a word same as the reverse word return as true
reverse input string

check if input is the same as reverse
return true
else
return false
/*
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
