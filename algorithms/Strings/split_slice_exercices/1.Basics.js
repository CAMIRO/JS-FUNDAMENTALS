// Basic Problems
// Extract the Domain:

// Given a string "https://www.example.com/page", extract the domain "www.example.com".

const domainExtractor = (string) => string.slice(8, -5)

console.log(domainExtractor('https://www.example.com/page'))

// Get the File Extension:

// Given a string "document.pdf", extract the file extension "pdf".

const exExtractor = (string) => string.split('.')[1]

console.log(exExtractor('document.pdf'))

// Extract the First Word:

// Given a string "Hello World", extract the first word "Hello".

const wordExtractor = (string) => string.split(' ')[0]

console.log(wordExtractor('Hello World'))

// Break a Sentence into Words:

// Given a string "The quick brown fox", break it into an array of words: ["The", "quick", "brown", "fox"].
const wordsSplitter = (string) => string.split(' ')
console.log(wordsSplitter("The quick brown fox"))

// Extract the Last Three Characters:

// Given a string "JavaScript", extract the last three characters "ipt".

const slicer = (word) => word.slice(-3)
console.log(slicer("JavaScript"))