//1. write code to get array of names from given array of user
//2. get back only active users
//3. sort users by age descending
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

// const namesArray = [];
//users.forEach((user) => {
//   namesArray.push(user.name);
// });
// console.log(namesArray);

//1. best solution
const names = users.map((user) => user.name);
//console.log("🚀  names", names);

//2.
const activeUsers = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
//console.log("🚀 ~ activeUsers", activeUsers);

//3.
const sortedUsers = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log("🚀  sortedUsers", sortedUsers);
