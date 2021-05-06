let matrix = [
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
]

function isSymetric(mat:number[][]){
    for(let i=0; i < mat.length; i++){
        for ( let j=i; j < mat[i].length;j++) {
            if (mat[i][j] != mat[j][i]){
                return false;
            }
        }
    }
    return true;
}

console.log(isSymetric(matrix));