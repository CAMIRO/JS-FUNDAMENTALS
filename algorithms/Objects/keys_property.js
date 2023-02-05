/// Como saber si un objecto JS tiene propiedades?
//RTA: con el Object.keys() method
// example:
const person = {
  john: 11,
  maria: 57,
};
Object.keys(person); // ['john', 'maria']

// we can check this way
Object.keys(person).length ? true : false;
