const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
    const result = [...arr];
  
    result.forEach((elem,index) => {
      if(elem === '--discard-next') {
        result[index] = null;
        result[index + 1] = null;
      }
  
      if (elem === '--discard-prev') {
        result[index] = null;
        result[index - 1] = null;
      }
  
      if (elem === '--double-next') {
        result[index] = result[index + 1];
      }
  
      if (elem === '--double-prev') {
        result[index] = result[index - 1];
      }
  
    });
  
    return result.filter(elem => elem != null);
  }

module.exports = {
  transform
};
