const array = [
    {name:'luna', sex:'f', age:7, type:'dog'},
    {name:'jimmy', sex:'m', age:34, type:'human'},
    {name:'snoop', sex:'m', age:13, type:'human'},
    {name:'jennifer', sex:'f', age:20, type:'human'},
    {name:'yeller', sex:'f', age:2, type:'dog'},
  ];

function averageAge(arr) {

    let humanCounter = 0
    let averageAge = 0

    arr.forEach(person=> {
        if(person.type === 'human'){
            humanCounter++
            averageAge += person.age
        }
    });
    return averageAge / humanCounter
    
}

console.log(averageAge(array));