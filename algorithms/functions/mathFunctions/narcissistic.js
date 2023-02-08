// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
// each raised to the power of the number of digits in a given base.
// n this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

const narcissistic = (value) => {
  const str = value.toString();
  const power = str.length;
  const nums = [...str];
  let sum = 0;
  let isNarcissistic = false;

  if (power === 1) {
    isNarcissistic = true;
  }
  for (let strNum of nums) {
    let num = +strNum;
    // sum += Math.pow(num, power);
    sum += num ** power;
  }
  if (sum === value) {
    isNarcissistic = true;
  }

  return isNarcissistic;
};

console.log(narcissistic(7)); // true
console.log(narcissistic(371)); // true
console.log(narcissistic(153)); // true
console.log(narcissistic(1938)); // false
