// Given three arrays of integers, return the sum of elements that are common in all three arrays.

// For example:

// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
// More examples in the test cases.

// Good luck!

function common(ar1,ar2,ar3){
    const comnonOne = ar1.filter(num => ar2.includes(num))
    const commonTwo = ar3.filter(num => comnonOne.includes(num))
    const sum = commonTwo.reduce((ct, el) => ct += el, 0)
    return sum
}   

console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2]));