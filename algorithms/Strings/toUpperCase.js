// for loop version
let capitalizeWords = (str) => {
  let words = str.split(" ");
  let capitalizedWords = [];

  for (let i = 0; i < words.length; i++) {
    let firstLetter = words[i].slice(0, 1);
    let restOfWord = words[i].slice(1);
    capitalizedWords.push(firstLetter.toUpperCase() + restOfWord);
  }
  return capitalizedWords.join(" ");
};

// map version
let capitalizeWordsMap = (str) => {
  let words = str.split(" ").map((word) => {
    let firstLetter = word.slice(0, 1);
    let restOfWord = word.slice(1);

    firstLetter = firstLetter.toUpperCase();
    return `${firstLetter}${restOfWord}`; // NOTE: alternative way without anything inside the map we can only return this: word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(" ");
};

console.log(`➰ For Loop: ${capitalizeWords("I got up early today")}`);
console.log(
  `➰ For Loop: ${capitalizeWords("I walked straight to the beach")}`
);

console.log(`🗺️  Map: ${capitalizeWordsMap("I got up early today")}`);
console.log(`🗺️  Map: ${capitalizeWordsMap("I walked straight to the beach")}`);
