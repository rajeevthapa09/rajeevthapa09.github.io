

/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
export function inArray(arr) {

    return function(x){
      return arr.includes(x);
    };

}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
export function inBetween(low, high) {

  return function(x){
    return x >= low && x <= high;
  };
}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
export function byField(fieldName){
  return (a,b) => a[fieldName] > b[fieldName] ? 1 : -1;

}


/**
 * @returns {Function} closure that returns it's number
 */
export function makeArmy() {

  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() {
      console.log("I am shooter ", j);
      return j;
      };
    
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  
  return shooters;

  }

/**
 * 
 * @returns {Number} counter
 */
  function makeCounter() {

    let count = 0;
    // eslint-disable-next-line require-jsdoc
    function counter() {
      return counter.count++;
    }
  
    counter.set = value => count = value;
    counter.decrease = () => count--;

  }
  

