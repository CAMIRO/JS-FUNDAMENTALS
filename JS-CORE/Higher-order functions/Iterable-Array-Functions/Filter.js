// Filter
// [🍟,🥤,🍿] -> [🍟,🍿]

const products = [
  { id: '123', name: 'shirt', price: 500 },
  { id: '456', name: 'shoes', price: 2000 },
  { id: '789', name: 'pants', price: 1500 }
]

const isCheap = ({ price }) => price < 1000
const isExpensive = product => !isCheap(product)

const cheapProducts = products.filter(isCheap)
const expensiveProducts = products.filter(isExpensive)

console.log('📉 Cheap Products', cheapProducts)
console.log('💲 Expensive Products', expensiveProducts)

// can also be used to discard repeated elements:

const numbers = [1, 2, 3, 4, 3, 1]

const uniqueNums = numbers.filter((number, position, numbers) => {
  return position === numbers.indexOf(number)
})
