### split()

```
const str = "I woke today"
let words = str.split(" ");
output: ['I', 'woke','today']
```

### join() "the opposite of split()"

### Set(); "adds unique value"

```
const mySet = new Set()

mySet.add(1)    // Set [ 1 ]
mySet.add(5)    // Set [ 1, 5 ]
mySet.add(5)    // Set [ 1, 5 ]

mySet.has(5)    // true
mySet.delete(5)     //deletes 5
mySet.size   // 1
```

### slice(); "deletes strings and arrays"

```
var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']
```

### splice(); "deletes, replace adds elements in arrays"

deletes

```
let meses = ["enero", "febrero", "lunes", "martes"];
let dias = meses.splice(2, 2);
```

replaces

```
let meses = ["enero", "febrero", "lunes", "martes"];
let dias = meses.splice(2, 2, "marzo", "abril");
```
