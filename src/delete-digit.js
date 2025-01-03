const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n  ) {
  n = [...n.toString()];
 let new_arr=[];
 for(let i = 0; i< n.length;) {
   //console.log(i);
   if(+n[i]<+n[i+1]) {
     n.splice(i,1);
     new_arr=n;
     break; 
   }else if(+n[i]>+n[i+1]){
    // n.splice(i+1,1); break;
     new_arr.push(n[i]);
   
  
 }else{
   if(i+1!=n.length) {new_arr.push(n[i]);};
 }
   i+=1;
 };
 return Number(new_arr.join(''));
}

module.exports = {
  deleteDigit
};
