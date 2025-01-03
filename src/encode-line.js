const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  str = [...str];
  str.push('');
  let result = "";
  last_char='';
  double=1;
  str.forEach(char => {
    if(char===last_char) {
      double+=1;
    } else {
      if( last_char!=''){
     result+=(double===1?'':double)+last_char;
      double = 1;
          };
    };
    last_char = char;
   
  });
  return result;
}

module.exports = {
  encodeLine
};
