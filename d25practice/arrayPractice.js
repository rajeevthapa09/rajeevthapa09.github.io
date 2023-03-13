/* eslint-disable require-jsdoc */

//const numArray = [5,0, 7, 77, -20, 300, 51, 2]
//const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name: "Barney", age: 80}]

// filter:
// - filter all even numbers
// - filter all age > 10
// - find even, include even
// - find age > 10, include age > 10


export function doubleNums(arr){
    return arr.map(item => item*2);
}

export function doubleAges(arr){
  //  return arr.map(item => item["age"] = item["age"] * 2);
}

export function filterEven(arr){
     let even = arr.filter(num => (num %2 == 0));
     return even;
}

export function filterOver10(arr) {
    let age = arr.filter(person => person.age > 10);
    return age;
}

export function findEvenNum(arr){
    
}

export function findEvenAge(arr){

}

export function includesEvenNum(arr){

}

export function includesEvenAge(arr){

}


