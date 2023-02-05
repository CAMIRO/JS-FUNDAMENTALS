// Ref: https://www.youtube.com/watch?v=HoNTMDTufTU&list=PLnHJACx3NwAdQElswAscNtHAZLAQYgpDA&index=2
// Determine if the parameter arr is an Arithmetic pattern, Geometric or no Pattern.
// NO NEGATIVE NUMBERS SUPPORTED

const mathSequences = (arr) => {
  let arith = new Set(); // Sets will only save one time same value: exp [1,1,1] it will only be [1]
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arith.add(number1); // NOTE: when we work with Sets, instead of using push() we use add()

    let number2 = arr[i] / arr[i - 1];
    geo.add(number2);
  }
  // console.log(arith);
  // console.log(geo);

  if (arith.size === 1) {
    // NOTE: when we work with Sets, instead of using .length we use .size
    return "Arithmetic";
  }
  if (geo.size === 1) {
    return "Geometric";
  }
  return -1;
};

console.log(mathSequences([2, 4, 6, 8])); // Should return Arithmetic
console.log(mathSequences([3, 9, 27])); // Should return Geometric
console.log(mathSequences([2, 5, 14, 89])); // Should return -1
