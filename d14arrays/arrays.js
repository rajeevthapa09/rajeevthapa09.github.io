
 
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(a, b, c){ 
    
    //use Math.max function to find the largest number
    return Math.max(a,b,c);
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr){
    let sum = 0;
    for(let num of arr){
        sum = sum + num;
    }
    return sum;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} multi of arr numbers
 */
export function multiply(arr){
    let multi = 1;
    for(let num of arr){
        multi *= num;
    }
    return multi;

}

/**
 * 
 * @param {Array} arr of words 
 * @returns {length} length of a largest word
 */
export function findLongestWord(arr){

    //check the string length of all words and return the longest number
    // by comparing current length with the previous length.
    let length = 1;
    for (let str of arr){
        if (length < str.length){
            length = str.length;
        }
    }
    return length;
}

/**
 * 
 * @param {Array} arr of elements
 * @returns {Array} newArray reversed array
 */
export function reverseArray(arr){

    let newArr = [];
    // extract the last value of arr and put it in a new array 
    for (let i=0; i < arr.length; i++){
        newArr = arr.pop();
    }
    return newArr;
}

/**
 * 
 * @param {Array} arr of elements
 * @returns {Array} arr reversed
 */
export function reverseArrayInPlace(arr){
    let arrVal;
    let j = arr.length;
    //get an element from the last index(n) and put it to first index. 
    //put element from first index to last index
    //switch element between second index and (n-1) index and so forth
    //continue until the half point of an array
    for (let i=0; i <= Math.ceil(arr.length/2); i++){
        arrVal = arr[j];
        arr[j]=arr[i];
        arr[i]=arrVal;
        j--;
    }
    return arr;
}

reverseArray([1,2,3,4]);