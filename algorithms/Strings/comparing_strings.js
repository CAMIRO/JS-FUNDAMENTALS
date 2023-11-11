//Write a function to determine if you can generate a sentence using the avaiable characters.
// If you can generate the sentence you should return true otherwise return false.
// Sample Input
//   characters = "Bstesi Tt!eh rella "
//   sentence = "Taller is the Best!"
// Sample Output
//     true

// This function takes two parameters, characters and sentence.
// The function checks if it is possible to generate the sentence
// using the characters. It returns true if it is possible, otherwise it returns false.
const generateSentence = (characters, sentence) => {
  let charMap = {}; // Create an object to store character count
  let canGenerate = true; // Set boolean flag to true

  // Iterate through characters and store character count in charMap
  [...characters].forEach((char) => {
    charMap[char] = charMap[char] + 1 || 1;
  });

  // Iterate through sentence and check if each character is available in charMap.
  [...sentence].forEach((char) => {
    if (charMap[char] > 0) {
      charMap[char]--; // Decrement character count in charMap
    } else {
      canGenerate = false;
    }
  });
  console.log("🚀  canGenerate", canGenerate);
  return canGenerate;
};

generateSentence("Bstesi Tt!eh rella ", "Taller is the Best!"); // true

generateSentence("leeehhhoooo", "hello"); // false
