
function createDiagonalMatrix(size: number, defaultElement: number, diagonalElement: number): number[][] {
  const diagonalMatrix: number[][] = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      if (i + j === size - 1) {
        row.push(diagonalElement);
      } else {
        row.push(defaultElement);
      }
    }
    diagonalMatrix.push(row);
  }
  return diagonalMatrix;
}
const size = 3;
const defaultElement = 0;
const diagonalElement = 1;
console.log(createDiagonalMatrix(size, defaultElement, diagonalElement));
