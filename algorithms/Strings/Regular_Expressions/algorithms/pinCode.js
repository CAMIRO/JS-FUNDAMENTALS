// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
const validatePIN = (pin) =>
  (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin) ? true : false;

console.log(validatePIN("1234")); // true
console.log(validatePIN("12345")); // false
console.log(validatePIN("1")); // false
console.log(validatePIN(".123")); // false
console.log(validatePIN("a123")); // false

// another approach
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
