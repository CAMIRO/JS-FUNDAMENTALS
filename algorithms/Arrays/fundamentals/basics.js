// Check if all array elements are equal

function myFunction(arr) {
    return arr.every((el, index, array) => el === array[0] )
}

// console.log(myFunction([true, true, true, true]));
// console.log(myFunction(['10',10,10,10]));


// Merge an arbitrary number of arrays

function myFunction(...arr) {
    return [].concat(...arr)
}
    
console.log(myFunction([1, 2, 3], [4, 5, 6]));
// OR

function myFunction( ...arrays ) {
    return arrays.flat()
}