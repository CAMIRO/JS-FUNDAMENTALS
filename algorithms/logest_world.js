const longestWord = (str) => {
  // Array of splitted words
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    // if the word length is bigger that the saved longestWord, then the world will be replaced.
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(longestWord("I woke up early today")); //expected: early
console.log(longestWord("I went straight to the beach")); //expected: straight
