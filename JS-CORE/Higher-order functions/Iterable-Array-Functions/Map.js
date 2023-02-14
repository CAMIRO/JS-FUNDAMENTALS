// Map
// [🥔,🍓,🌽 ] -> [🍟,🥤,🍿]

//🚫 NO SE PUEDE EJECUTAR FUNCIONES ASINCRONAS EN ESTE TIPO DE FUNCIONES
const products = [
  { id: '123', name: 'shirt', price: 500 },
  { id: '456', name: 'shoes', price: 2000 },
  { id: '789', name: 'pants', price: 1500 }
]

const discountedProducts = products.map(function (product) {
  if (product.price < 1000) return product
  // product.price = product.price * 0.9; -> this is WRONG cuz we are mutating the original array
  // ALSO: WE AREN'T RETURNING ANYTHING
  // instead, we do this:

  return {
    ...product,
    price: product.price * 0.9
  }
})
console.log('💲 discounted Products', discountedProducts)

// ANOTHER WAY TO USE MAP() EXTRACT SPECIFIC VALUE:

const idProducts = products.map(({ id }) => id)
console.log('🔻 id Products', idProducts)
