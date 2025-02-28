// Description: Implement a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.
const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            console.log([arr[left], arr[right]])
            return [arr[left], arr[right]]
        } else if (sum > 0){
            right--
        } else {
            left++
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])



//Multiple Pointers - countUniqueValues
//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr){
    let i = 0
    let j = 0
    
    while(arr[i] === arr[j]){
      j++
      if(arr[i] !== arr[j]){
        i++
        arr[i] = arr[j]
      }
    }
      
     return i;  
    
  }


countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4