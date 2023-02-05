// filter the apple products

let products = [
  {
    title: "apple 5",
    company: "apple",
  },
  {
    title: "Galaxy 10",
    company: "Samsung",
  },
  {
    title: "apple 11",
    company: "apple",
  },
  {
    title: "HTC phone",
    company: "HTC",
  },
  {
    title: "Galaxy note",
    company: "Samsung",
  },
  {
    title: "ipod",
    company: "apple",
  },
];

let appleProducts = [];
products.some((product) => {
  if (product.company === "apple") {
    appleProducts = [...appleProducts, product];
  }
});

console.log(appleProducts);
