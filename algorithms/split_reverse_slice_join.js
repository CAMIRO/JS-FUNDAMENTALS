// Kata instructions: Complete the solution so that it returns true if the
// first argument(string) passed in ends with the 2nd argument (also a string).

const solution = (str, ending) => {
  s1 = str.toLowerCase();
  s2 = ending.toLowerCase();

  cutter = s2.length;

  // split('') : make an array ['a','b','c'] // reverse() will reverse order ['c','b','a']
  // slice(0,cutter) will cut to the s2 length ['c','b'] // join('') will make a string 'cb'
  s1Arr = s1.split("").reverse().slice(0, cutter).join("");
  s2Arr = s2.split("").reverse().join("");

  if (s1Arr == s2Arr) {
    return true;
  } else {
    return false;
  }
};

// better solution:

const solution = (str, ending) => str.endsWith(ending);
