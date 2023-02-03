// Remove all duplicates in the array
numbers = [1, 2, 2, 3, 4, 5, 4, 2];

// const set = new Set();
// numbers.forEach((num) => set.add(num));

// console.log(set);

// best way

const newArr = [...new Set(numbers)];
console.log("🚀", newArr);
