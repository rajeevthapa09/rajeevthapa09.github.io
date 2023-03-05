
/**
 * @param {number} num is a number
 *@returns {number} double the input
 */
export function double(num){
    //multiple the number by 2 to return twice the number
    return 2 * num;
}


/**
 * @param {number} num is a number
 * @returns {number} 100 times the input
 */
export function times100(num){
    //multiply the number by 100 to return 100 times the number
    return num * 100;
 }


/**
 * @param {Array} arr is an Array
 * @param {Function} any is a function
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(arr, any){
    
    const newArr = [];
    //go through each element of the array and pass the element to the function
    for(const element of arr){
        newArr.push(any(element));
    }
    return newArr;
}

const testArray = [1,2,3,4]; //test array
myMap(testArray, function(num){return 3*num;}); //anonymous function
myMap(testArray, (num) => {3*num;}); //function with arrow key





