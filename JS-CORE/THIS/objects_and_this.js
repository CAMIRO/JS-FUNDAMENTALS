//// more here: https://www.udemy.com/course/understand-javascript/learn/lecture/2237526#overview// functions (all of them) will point to the global object:// function a() {
//   console.log(this) //// this will point to the global object
// }
// a()

// Objects and methods:
const b = {
  name: 'the b object',
  log() {
    // const self = this; // a short solution:
    this.name = 'update: the b object'
    console.log(this)

    const setName = function (newName) {
      this.name = newName // this will point to the global object 💁🏻‍♂
      // self.name = newName; // use this to fix the problem
    }
    setName('Updated again!')
    console.log(this)
  }
}
b.log() // outputs: { name: 'the b object', log: [Function: log] }

// Object -> function -> function: this needs to be bind
const person = {
  age: 30,
  getAge() {
    const inner = function () {
      console.log(this.age)
      return this.age
    }
    return inner.bind(this)()
  }
}

person.getAge() //// log will be 30 (without the bind will be undefined)
