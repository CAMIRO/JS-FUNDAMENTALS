// check that user with specific name exists in array of objects

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

const userChecker = (users, name) => {
  value = false;
  users.forEach((user) => {
    if (user.name === name) {
      value = true;
    }
  });

  return value;
};

// another cool solution
const isNameExist = (arr, name) => arr.some((el) => el.name === name);

// 3rt approach
const findMethod = (arr, name) => {
  const exist = arr.find((el) => el.name === name);
  return Boolean(exist);
};

// 4rt approach
const findIndexMethod = (arr, name) => {
  const index = arr.findIndex((el) => el.name === name);
  console.log("🚀 ~ ", index);
  return index > 0;
};

console.log(findIndexMethod(users, "Jack"));
console.log(findIndexMethod(users, "Pedro"));
