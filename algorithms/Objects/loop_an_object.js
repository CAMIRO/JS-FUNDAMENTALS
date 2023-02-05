const pokemons = {
  Charmander: "fire",
  Bulbasaur: "plant",
  Squirtle: "water",
};

for (let pokemon in pokemons) {
  console.log(pokemon); // key
  console.log(pokemons[pokemon]); // value
}

// pekemonsString = "";
// for (let poke in pokemons) {
//   pekemonsString += pokemons[poke];
// }

// console.log(pekemonsString);
