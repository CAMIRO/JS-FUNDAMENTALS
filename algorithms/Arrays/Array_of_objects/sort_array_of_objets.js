// sort array of objects by author's lastName

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

books.sort((book1, book2) => {
  const lastName1 = book1.author.split(" ")[1];
  const lastName2 = book2.author.split(" ")[1];
  return lastName1 < lastName2 ? -1 : 1;
});

console.log(books);
