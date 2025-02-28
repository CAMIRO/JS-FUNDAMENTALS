// frequency counter pattern: compare two objects and check if the second object 
// has the same frequency of values as the first object.

//example: anagrams: check if two strings are anagrams of each other
// anagrams: words that have the same characters but in a different order

const anagram = (a, b) =>{
    // check if the length of the two strings are the same
    if(a.length !== b.length){
        return false
    }
    // create TWO OBJECTS to store the frequency of characters in the 2 strings
    let objectA = {}
    let objectB = {}
    // iterate through the first string and store the frequency of characters in objectA
    for(let char of a){
        objectA[char] = (objectA[char] || 0) + 1
    }
    // iterate through the second string and store the frequency of characters in objectB
    for(let char of b){
        objectB[char] = (objectB[char] || 0) + 1
    }

    // compare the two objects
    for(let key in objectA){
        // check if the key in objectA is not in objectB
        if(!(key in objectB)){
            return false
        }
        // check if the frequency of the key in objectA is not equal to the frequency of the key in objectB
        if(objectA[key] !== objectB[key]){
            return false
        }
    }
    return true
    

}

console.log(anagram('hello', 'llohe'))
console.log(anagram('aaz', 'zza'))
console.log(anagram('anagram', 'nagaram'))
console.log(anagram('rat', 'car'))
