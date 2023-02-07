// return the first word with greatest number of repeated letters

// Object approach:
const countLetters = (str) => {
  const words = str.split(" ");
  let wordsObjects = [];
  let maxCounter = 0;
  let greatest = "";

  for (let word of words) {
    let lettersSet = new Set(word);
    let difference = word.length - lettersSet.size;
    wordsObjects = [...wordsObjects, { word, count: difference }];
  }

  wordsObjects.forEach((word) => {
    if (word.count > maxCounter) {
      maxCounter = word.count;
      greatest = word.word;
    }
  });

  return greatest;
};

console.log(countLetters("Javascript is the greatest programming language"));
