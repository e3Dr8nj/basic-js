const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  console.log(arguments);
  str= str !==undefined? String(str):"";
  options.repeatTimes = options.repeatTimes||1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.addition = options.addition!==undefined? String(options.addition): "";
  options.separator=options.separator||"+";
  options.additionSeparator=options.additionSeparator||"|";
addition_str=Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);
  
let result = Array(options.repeatTimes).fill(str+addition_str).join(options.separator);
 return result;
}
module.exports = {
  repeater
};
