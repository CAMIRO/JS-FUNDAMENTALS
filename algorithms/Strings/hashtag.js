// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false



const generateHashtag = str => {
        let words = str
            .split(' ')
            .filter(item => item !== '')
            .map(word=> {
                let firstLetter = word.slice(0,1).toUpperCase()
                let restOfWord = word.slice(1)
                return `${firstLetter}${restOfWord}`
            })
            .join('')
        
        return words.length < 1 || words.length >= 140 ? false : `#${words}`
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
