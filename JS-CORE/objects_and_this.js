// Object -> function -> function: this needs to be bind
const person = {
  age: 30,
  getAge() {
    const inner = function () {
      console.log(this.age);
      return this.age;
    };
    return inner.bind(this)();
  },
};

person.getAge(); // log will be 30 (without the bind will be undefined)
