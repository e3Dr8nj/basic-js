const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names ) {
  let obj = {};
  let result_names = [];
  names.forEach(name=>{
    console.log(name);
          if(obj[name]!==undefined){
             
             let newName = `${name}(${obj[name]})`
             obj[newName]=1;
             result_names.push(newName);
             obj[name]+=1;
          }else{
             obj[name]=1;
            result_names.push(`${name}`);
          }
          
 
  });
  return result_names;
}

module.exports = {
  renameFiles
};
