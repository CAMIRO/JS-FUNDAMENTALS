const obj = {
  Charmander: "fire",
  Bulbasaur: "plant",
  Squirtle: "water",
};

for (const [key, value] of Object.entries(obj)) {
  console.log(`
    1. key: ${key} 
    2. value: ${value}
  `);
}
