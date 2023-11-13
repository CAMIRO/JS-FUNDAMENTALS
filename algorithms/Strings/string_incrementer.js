// String incrementer

// Your job is to write a function which increments a string, to create a new string.


// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString (str) {
    let newArr = []
    let arrIndex = []
    let stopAdding = false;
    const number = str
        .split('')
        .reverse()
        .forEach((num, i) => {
            if(isNaN(+num) || stopAdding) {
                arrIndex.push(i)
                stopAdding = true;
                return
            }
            newArr.push(+num)
        })
        
    const word = str
        .split('')
        .reverse()
        .slice(arrIndex[0])
        .reverse()
        .join('')

        const num = newArr.reverse().join('')
        const lastNum = Number(num.charAt(num.length - 1)) + 1
        const newNum = num.slice(0, -1) + lastNum
        
        const numResult = num[0] === '0' ? newNum : Number(num) + 1
        

        return `${word}${numResult}`   
}

console.log(incrementString('foobar000'));

