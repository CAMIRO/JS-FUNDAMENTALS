// REDUCE

// Return the longest string from an array of strings
// Write a function that takes an array of strings as argument. Return the longest string.

function fun(arr) {
    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, '')
}


console.log(fun(['I', 'need', 'candy']));