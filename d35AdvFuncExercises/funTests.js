
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myMap(arr, func) {
//IMPLEMENTATION NEEDED
    let newArr = arr.map(func);
    return newArr;
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myFilter(arr, func) {
//IMPLEMENTATION NEEDED
    return arr.filter(func);
}


/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
export function myReduce(arr, func, initialValue) {
    //IMPLEMENTATION NEEDED
    return arr.reduce(func,initialValue) ;
    }