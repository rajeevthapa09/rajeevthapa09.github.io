
/**
 * 
 * @param {*} str 
 */
export function ucFirst(str) {
  if (str == ""){
    return "";
  }else{
      return str[0].toUpperCase() + str.slice(1);
}
}

  /**
   * 
   * @param {*} str 
   */
  export  function checkSpam(str) {
    if(str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")){
      return true;
    } else {
      return false;
    }
 
  }

/**
 * 
 * @param {*} str 
 * @param {*} maxlength 
 */
export   function truncate(str, maxlength) {
    if(str.length > maxlength){
      return str.slice(maxlength - 3) + "...";
    }
  }




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr) {


}


export function camelize(str) {

  }


export function extractCurrencyValue(){} 
