const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const directions = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1],          [0, 1],
  [1, -1], [1, 0], [1, 1]
];
function cell(matrix,col,row){

if(matrix[col]&&matrix[col][row]) {
//console.log(matrix[col][row]);
return matrix[col][row] }else{return 0}
}
function sum_cell(matrix,col,row){
let sum = 0;
directions.forEach(xy=>{
sum+=cell(matrix,col+(1*xy[0]),row+(1*xy[1]));

 
});
return sum;
}
function minesweeper( matrix ) {

let sum =0;
let newMatrix = matrix.map(e=>{
return e.map(e2=>{
   return +e2;
 })
});
for(let col = 0;col<matrix.length;col++){
for(let row = 0;row<matrix[col].length;row++){
 newMatrix[col][row]=sum_cell(matrix,col,row);
}
}
return newMatrix;

}
module.exports = {
  minesweeper
};
