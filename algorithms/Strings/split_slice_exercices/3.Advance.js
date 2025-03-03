// Advanced Problems
// Extract a Substring Between Two Characters:

// Given a string "Hello [World]!", extract the substring between [ and ]: "World".
const slicing = (word) => word.slice(7, -2)
console.log(slicing("Hello [World]!"));
    

// Break a URL into Parts:

// Given a string "https://www.example.com/page?query=123", break it into an array of parts: ["https:", "", "www.example.com", "page?query=123"].

const cutUrl = (url) => url.split('/')
console.log(cutUrl("https://www.example.com/page?query=123"));

// Extract the Last Word:

// Given a string "The quick brown fox", extract the last word "fox".

// Remove Spaces from a String:

// Given a string " Hello World ", remove all spaces to get "HelloWorld".

// Extract a Specific Section:

// Given a string "Name: John, Age: 30, City: New York", extract the value for "City": "New York".