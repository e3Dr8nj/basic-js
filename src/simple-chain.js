const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr:[],
  getLength() {
    this.arr.push(this.arr.length);
    return this;
  },
  addLink(value) {
    if(value!==undefined){value = String(value)}else{value=''};
    this.arr.push(value);
    return this;
    
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.arr.length) {
      this.arr=[];
      throw new NotImplementedError("You can\'t remove incorrect link!"); // Throw error for invalid position
    }
    this.arr.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.arr=this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = '( '+this.arr.join(' )~~( ') +' )';
    this.arr=[];
     return str;
  }
};


module.exports = {
  chainMaker
};
