// Sort the array of numbers

numbers = [4, 6, 1, 3, 4, 2, 0];

// my solution
// sortedNumbers = numbers.sort();

// another way:
const result = numbers.sort((a, b) => a - b); // if we change the order (b -a) we will get from bigger to lower
console.log(numbers, result); // note that sort() is mutating the numbers array directly
