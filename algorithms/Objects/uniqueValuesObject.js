// return true only if all values are unique, otherwise false

//2. Object
const uniqueObj = (str) => {
  let values = {};
  for (let letter of str) {
    console.log(values);
    if (values[letter]) {
      return false;
    }
    values[letter] = "exists";
  }
  return true;
};

console.log(uniqueObj("abcde"));
console.log(uniqueObj("abacdefb"));
