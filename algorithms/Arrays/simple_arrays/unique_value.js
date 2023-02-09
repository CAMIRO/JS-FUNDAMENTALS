// function findUniq(arr) {
//   let valSet = new Set();
//   let i = 0;

//   // Loop until we have min 2 values
//   // Loop until we have 2 diff values

//   while (valSet.size <= 2) {
//     // if (valSet.has(arr[i]) && valSet.size === 2) {
//     //   valSet.delete(arr[i]);
//     //   const [first] = valSet;
//     //   console.log("🚀 ~ file: unique_value.js:26 ~ findUniq ~ first", first);
//     //   return first;
//     //   //break;
//     // }
//     if (valSet.size === 2) {
//       console.log("hello");
//     }
//     valSet.add(arr[i]);

//     i++;
//   }
// }

// console.log(findUniq([0.55, 1, 1, 1, 1]));

//// let test function
// const letTest = () => {
//   let val = 0;
//   val = 2;
//   let i = 0;
//   if (true) {
//     val = 3;
//   }

//   while (i < 2) {
//     val = 4;
//     if (true) {
//       val = 5;
//     }
//     i++;
//   }

//   console.log(val);
// };

// letTest();

// function findUniq(arr) {
//   let valSet = new Set();
//   let i = 0;
//   let unique = 0;

//   do {
//     if (valSet.has(arr[i]) && valSet.size > 1) {
//       valSet.delete(arr[i]);
//       const [first] = valSet;
//       unique = first;
//     }
//     valSet.add(arr[i]);
//     i++;
//   } while (unique === 0);

//   return unique;
// }

function findUniq(arr) {
  let valSet = new Set();
  let unique = 0;

  for (let i = 0; i < arr.length && unique === 0; i++) {
    if (valSet.has(arr[i]) && valSet.size > 1) {
      valSet.delete(arr[i]);
      const [first] = valSet;
      unique = first;
    }
    valSet.add(arr[i]);
  }

  return unique;
}

console.log(findUniq([3, 10, 3, 3, 3]));

// best solution on codewars
// function findUniq(arr) {
//   let ans=arr.filter(x=>Object.is(x,arr[0])?false:true)
//   return ans.length==1?ans.pop():arr[0]
// }
