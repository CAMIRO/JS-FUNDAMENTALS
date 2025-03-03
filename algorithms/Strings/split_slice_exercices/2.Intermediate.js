// Intermediate Problems
// Extract the Middle Part:

// Given a string "abcdefgh", extract the middle part "cdef".

const middleExtractor = (word) => word.slice(2, -2)
console.log(middleExtractor('abcdefgh'))

// Remove the First and Last Character:

// Given a string "JavaScript", remove the first and last character to get "avaScrip".

const removeExtractor = (word) => word.slice(1, -1)
console.log(removeExtractor('JavaScript'))

// Split a CSV String:

// Given a string "apple,banana,cherry,date", break it into an array of fruits: ["apple", "banana", "cherry", "date"].

const splitter = (string) => string.split(',')
console.log(splitter('apple,banana,cherry,date'))

// Extract the Year from a Date:

// Given a string "2023-10-05", extract the year "2023".
const dateExtractor = (date) => date.split('-')[0]
console.log(dateExtractor("2023-10-05"))

// Get the Second Word:

// Given a string "The quick brown fox", extract the second word "quick".
const wordExtractor = (word) => word.split(' ')[1]
console.log(wordExtractor("The quick brown fox"))