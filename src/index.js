
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [] 
  } else {
      let arr = [];
      for(let i = 0; i < matrix.length; i++) {  /* прохождение по многомерному массиву */
          if((i + 1) % 2 === 0) {
             for(let j = matrix[i].length - 1; j >= 0; j--) {  /* прохождение по массиву с числами  */ 
              arr.push(matrix[i][j]);
             }
            } else {
              for(let j = 0; j < matrix[i].length; j++) {
              arr.push(matrix[i][j]); 
              }
            }    
   }
   return arr;
}
}