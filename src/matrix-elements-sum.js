const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const transpose = (matrix) => matrix[0].map((col, i) => matrix.map(row => row[i])); //Транспонирование матрицы
  let resMatrix = transpose(matrix); 
		let arr = [];
		for (let i = 0; i < resMatrix.length; i++) {
    	if (resMatrix[i].includes(0)) {
      	arr.push(resMatrix[i].slice(0, resMatrix[i].indexOf(0)));
      } else {
      	arr.push(resMatrix[i]);
      }
    }
		return arr.flat().reduce((sum, current) => sum + current, 0);
}

module.exports = {
  getMatrixElementsSum
};
