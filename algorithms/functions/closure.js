// create a counter function which has increment and getValue functionality

const privateCounter = (val) => {
  let count = 0; // this is the closure
  return {
    increment: (val = 1) => {
      count += val;
    },
    getValue: () => count,
  };
};

const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
