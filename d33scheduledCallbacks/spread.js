/**
 * 
 * @param {Array} arr is an array of any element
 * @returns {Array} newArr is a new array and shallow clone of arr.
 */
export function copyArray(arr){

    const newArr = [...arr];
    return newArr;
}
/**
 * 
 * @param {Array} arr1 is an array of an element
 * @param {Array} arr2 is an array of an element 
 * @returns {Array} concat of arr1 and arr2
 */
export function concat(arr1, arr2){
    return [...arr1, ...arr2];

}

/**
 * 
 * @param  {...any} numbers is rest parameters of number
 * @returns {Number} the min number from the list
 */
export function findMin(...numbers) {
    return Math.min(...numbers);

}
/**
 * 
 * @param {Object} obj1 is an object
 * @param {Object} obj2 is an object
 * @returns {Object} combination of Obj1 and Obj2
 */
export function combineObjs(obj1, obj2){
    return {...obj1, ...obj2};

}