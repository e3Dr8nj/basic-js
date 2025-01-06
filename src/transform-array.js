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
function transform( arr ) {
  if(!Array.isArray(arr)) throw new NotImplementedError("'arr' parameter must be an instance of the Array!");
  let ignore =0;
  let last_ignored = 0;
  let new_arr = [];
  
  for(let el in arr){
    
    
    if(ignore){ ignore =0; last_ignored=1; continue;}
    if(arr[el]==='--double-next'){
      
     if(arr[+el+1]) new_arr.push(arr[+el+1]);
    }else if(arr[el]==='--discard-prev'){
      if(last_ignored) {last_ignored=0; continue;}
      if(arr[+el-1]) new_arr.pop();
    } else if(arr[el]==='--discard-next'){
     
     if(arr[+el+1]) ignore=1;
       
    }else if(arr[el]==='--double-prev'){
       if(last_ignored) {last_ignored=0; continue;}
       if(arr[+el-1]) new_arr.push(arr[+el-1]);
    }else{ new_arr.push(arr[el]); }
    
  }
  return new_arr;
}

module.exports = {
  transform
};
