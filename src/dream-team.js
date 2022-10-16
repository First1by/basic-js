const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const resultArr = [];
  if ( members === null || members === undefined || members.length === 0) {
    return false;
  }
  for (let i = 0; i<members.length; i++) {
    let item = members[i];
    if (typeof item === 'string' && isNaN(parseFloat(item))) {
      resultArr.push(item.trim().slice(0, 1).toUpperCase());
    } 
  }
  return resultArr.sort().join('');
}

module.exports = {
  createDreamTeam
};
